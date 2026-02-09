import { NextRequest, NextResponse } from "next/server"
import { Octokit } from "@octokit/rest"

const GITHUB_REPO = process.env.GITHUB_REPO || ""
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "main"
const GITHUB_FILE_PATH = process.env.GITHUB_FILE_PATH || "lib/products-data.ts"
const GITHUB_TOKEN = process.env.GITHUB_PAT

export async function POST(req: NextRequest) {
  const { editableProducts  } = await req.json()

  if (!GITHUB_TOKEN) {
    return NextResponse.json({ success: false, error: "GITHUB_PAT not set" }, { status: 500 })
  }

  const octokit = new Octokit({ auth: GITHUB_TOKEN })

  try {
    const { data: fileData } = await octokit.repos.getContent({
      owner: GITHUB_REPO.split("/")[0],
      repo: GITHUB_REPO.split("/")[1],
      path: GITHUB_FILE_PATH,
      ref: GITHUB_BRANCH,
    }) as any

    const sha = fileData.sha
       const oldContent = Buffer.from(fileData.content, "base64").toString("utf-8")

    // Replace the editableProducts array in the file
    const newContent = oldContent.replace(
  /export const editableProducts: Product\[\] = \[[\s\S]*?\]\s*$/,
  `export const editableProducts: Product[] = ${JSON.stringify(editableProducts, null, 2)}`
)

await octokit.repos.createOrUpdateFileContents({
  owner: GITHUB_REPO.split("/")[0],
  repo: GITHUB_REPO.split("/")[1],
  path: GITHUB_FILE_PATH,
  message: "Update products via admin UI",
  content: Buffer.from(newContent).toString("base64"), 
  sha,
  branch: GITHUB_BRANCH,
})

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ success: false, error: err }, { status: 500 })
  }
}
