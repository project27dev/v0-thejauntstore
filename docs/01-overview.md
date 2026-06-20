# 01 — Overview

## Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | **Next.js `^16.2.0-canary`** (App Router) | ⚠️ Canary release — see gotchas |
| UI | React 18.3 | |
| Language | TypeScript 5 | |
| Styling | **Tailwind CSS v4** + `tailwindcss-animate` / `tw-animate-css` | Config via `@tailwindcss/postcss` |
| Components | Radix UI primitives + a thin shadcn-style layer | Only [components/ui/button.tsx](../components/ui/button.tsx) is actually present |
| Fonts | `Playfair_Display` (serif) + `Inter` (sans) via `next/font` | Set in [app/layout.tsx](../app/layout.tsx) |
| Auth | `jose` (JWT) + `bcryptjs` | Admin-only |
| CMS backend | `@octokit/rest` (GitHub API) | Writes product data & images back to the repo |
| Icons | `lucide-react` | |
| Deploy | Vercel | |

> The `package.json` lists many Radix packages and libs (recharts, embla, vaul,
> react-hook-form, etc.) that are **not currently used** — leftovers from the v0
> scaffold. Don't assume a dependency is wired up just because it's installed.

## Scripts

```bash
npm run dev      # next dev
npm run build    # next build
npm run start    # next start
npm run lint     # next lint
```

There is also a **one-off generator** [scripts/generate.js](../scripts/generate.js):
it scans an image folder (`public/pendent`) and prints a ready-to-paste TS array of
product objects to stdout. It is a manual authoring helper, not part of the build.

## Environment variables

Stored in `.env` / `.env.local` (both git-ignored via `.env*`). Required:

| Var | Used by | Purpose |
|-----|---------|---------|
| `ADMIN_SECRET` | [middleware.ts](../middleware.ts), login route | HMAC secret for signing/verifying the admin JWT |
| `ADMIN_PASSWORD_HASH_B64` | [api/admin/login](../app/api/admin/login/route.ts) | Base64 of a bcrypt hash of the admin password |
| `GITHUB_PAT` | the three GitHub API routes | Personal access token with repo write |
| `GITHUB_REPO` | GitHub API routes | `"owner/repo"` |
| `GITHUB_BRANCH` | GitHub API routes | Defaults to `main` |
| `GITHUB_FILE_PATH` | update/delete routes | Defaults to `lib/products-data.ts` |

To rotate the admin password: bcrypt-hash the new password, base64-encode the hash,
set `ADMIN_PASSWORD_HASH_B64`.

## Deployment flow

```
v0.app edits ──┐
               ├──► GitHub repo ──► Vercel auto-deploy ──► live site
admin panel ───┘   (commits)
```

The admin panel doesn't write to a database — it **commits to GitHub**, and Vercel
rebuilds. So "saving a product" = a git commit + a full redeploy (minutes, not
instant). This is the single most important thing to understand about the project;
details in [02-architecture.md](02-architecture.md) and [04-admin-and-auth.md](04-admin-and-auth.md).
