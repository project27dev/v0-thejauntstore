import { NextRequest, NextResponse } from "next/server"
import { Octokit } from "@octokit/rest"

const GITHUB_REPO = process.env.GITHUB_REPO || ""
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "main"
const GITHUB_TOKEN = process.env.GITHUB_PAT

export async function POST(req: NextRequest) {
  if (!GITHUB_TOKEN) {
    return NextResponse.json({ success: false, error: "GITHUB_PAT not set" }, { status: 500 })
  }

  const formData = await req.formData()
  const file = formData.get("file") as File | null
  const category = formData.get("category") as string | null

  if (!file || !category) {
    return NextResponse.json({ success: false, error: "Missing file or category" }, { status: 400 })
  }

  const [owner, repo] = GITHUB_REPO.split("/")
  const githubPath = `public/${category}/${file.name}`
  const publicPath = `/${category}/${file.name}`

  const arrayBuffer = await file.arrayBuffer()
  const base64Content = Buffer.from(arrayBuffer).toString("base64")

  const octokit = new Octokit({ auth: GITHUB_TOKEN })

  // Check if file already exists (need SHA to update)
  let existingSha: string | undefined
  try {
    const { data } = (await octokit.repos.getContent({
      owner,
      repo,
      path: githubPath,
      ref: GITHUB_BRANCH,
    })) as any
    existingSha = data.sha
  } catch {
    // File doesn't exist yet — that's fine
  }

  try {
    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: githubPath,
      message: `Upload image ${file.name} via admin UI`,
      content: base64Content,
      sha: existingSha,
      branch: GITHUB_BRANCH,
    })

    return NextResponse.json({ success: true, path: publicPath })
  } catch (err: any) {
    console.error("GitHub upload error:", err)
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}
