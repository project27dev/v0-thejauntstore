import { NextRequest, NextResponse } from "next/server"
import { Octokit } from "@octokit/rest"

const GITHUB_REPO = process.env.GITHUB_REPO || ""
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "main"
const GITHUB_FILE_PATH = process.env.GITHUB_FILE_PATH || "lib/products-data.ts"
const GITHUB_TOKEN = process.env.GITHUB_PAT

export async function POST(req: NextRequest) {
  if (!GITHUB_TOKEN) {
    return NextResponse.json({ success: false, error: "GITHUB_PAT not set" }, { status: 500 })
  }

  const { productId, images, editableProducts } = await req.json()

  if (typeof productId !== "number" || !Array.isArray(images) || !Array.isArray(editableProducts)) {
    return NextResponse.json({ success: false, error: "Invalid payload" }, { status: 400 })
  }

  const octokit = new Octokit({ auth: GITHUB_TOKEN })
  const [owner, repo] = GITHUB_REPO.split("/")

  // Delete each image file from GitHub
  for (const imagePath of images) {
    // imagePath is like "/rings/img.jpeg" → GitHub path is "public/rings/img.jpeg"
    const githubPath = "public" + imagePath
    try {
      const { data } = (await octokit.repos.getContent({
        owner,
        repo,
        path: githubPath,
        ref: GITHUB_BRANCH,
      })) as any

      await octokit.repos.deleteFile({
        owner,
        repo,
        path: githubPath,
        message: `Delete image for product #${productId}`,
        sha: data.sha,
        branch: GITHUB_BRANCH,
      })
    } catch (err: any) {
      // If file not found (404), skip silently
      if (err.status !== 404) {
        console.error(`Failed to delete image ${githubPath}:`, err.message)
      }
    }
  }

  // Update products-data.ts to remove the product
  try {
    const { data: fileData } = (await octokit.repos.getContent({
      owner,
      repo,
      path: GITHUB_FILE_PATH,
      ref: GITHUB_BRANCH,
    })) as any

    const oldContent = Buffer.from(fileData.content, "base64").toString("utf-8")
    const regex = /(export const editableProducts: Product\[\] = )[\s\S]*/
    const newContent = oldContent.replace(regex, `$1${JSON.stringify(editableProducts, null, 2)}`)

    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: GITHUB_FILE_PATH,
      message: `Delete product #${productId} via admin UI`,
      content: Buffer.from(newContent).toString("base64"),
      sha: fileData.sha,
      branch: GITHUB_BRANCH,
    })

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error("GitHub API error:", err)
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}
