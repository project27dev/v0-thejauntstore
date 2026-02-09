import { NextRequest, NextResponse } from "next/server"
import { Octokit } from "@octokit/rest"

const GITHUB_REPO = process.env.GITHUB_REPO || ""
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "main"
const GITHUB_FILE_PATH = process.env.GITHUB_FILE_PATH || "lib/products-data.ts"
const GITHUB_TOKEN = process.env.GITHUB_PAT

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    console.log("Received body:", JSON.stringify(body).substring(0, 200))
    
    const { editableProducts } = body

    if (!editableProducts) {
      console.error("editableProducts is missing or falsy")
      return NextResponse.json(
        { success: false, error: "editableProducts missing" },
        { status: 400 }
      )
    }

    if (!Array.isArray(editableProducts)) {
      console.error("editableProducts is not an array:", typeof editableProducts)
      return NextResponse.json(
        { success: false, error: "editableProducts must be an array" },
        { status: 400 }
      )
    }

    console.log(`Received ${editableProducts.length} products`)

    if (!GITHUB_TOKEN) {
      return NextResponse.json(
        { success: false, error: "GITHUB_PAT not set" },
        { status: 500 }
      )
    }

  const octokit = new Octokit({ auth: GITHUB_TOKEN })

  try {
    const { data: fileData } = (await octokit.repos.getContent({
      owner: GITHUB_REPO.split("/")[0],
      repo: GITHUB_REPO.split("/")[1],
      path: GITHUB_FILE_PATH,
      ref: GITHUB_BRANCH,
    })) as any

    const sha = fileData.sha
    const oldContent = Buffer.from(fileData.content, "base64").toString("utf-8")
    
    console.log("Old content preview:", oldContent.substring(0, 300))

    // Match from "export const editableProducts" to the end of file
    // Capture group $1 keeps the declaration, replace everything after =
    const regex = /(export const editableProducts: Product\[\] = )[\s\S]*/
    const newProductsArray = `$1${JSON.stringify(editableProducts, null, 2)}`
    
    const newContent = oldContent.replace(regex, newProductsArray)
    
    console.log("New content preview:", newContent.substring(0, 300))
    console.log("Replacement successful:", regex.test(oldContent))

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
    console.error("GitHub API error:", err)
    return NextResponse.json(
      { success: false, error: (err as any).message },
      { status: 500 }
    )
  }
  } catch (err) {
    console.error("Request parsing error:", err)
    return NextResponse.json(
      { success: false, error: "Failed to parse request: " + (err as any).message },
      { status: 400 }
    )
  }
}