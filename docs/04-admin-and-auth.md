# 04 — Admin & Auth (the Git-as-CMS engine)

## Auth model

Single shared admin password. No user accounts, no roles beyond `"admin"`.

### Login — [app/api/admin/login/route.ts](../app/api/admin/login/route.ts)
1. `POST { password }`.
2. Decodes `ADMIN_PASSWORD_HASH_B64` → bcrypt hash, `bcrypt.compare`s the password.
3. On mismatch: 1s artificial delay (brute-force speed bump) → 401.
4. On match: signs a `jose` JWT `{ role: "admin" }`, HS256, 7-day expiry, with
   `ADMIN_SECRET`. Sets it as the **`admin_session`** cookie
   (`httpOnly`, `sameSite=strict`, `secure` in prod, 7-day maxAge).

### Logout — [app/api/admin/logout/route.ts](../app/api/admin/logout/route.ts)
Clears the cookie.

### Gate — [middleware.ts](../middleware.ts)
`matcher: ["/admin/:path*", "/api/:path*"]`.
- Public allow-list: `/admin/login`, `/api/admin/login`.
- For any other `/admin/*` or `/api/*`: read `admin_session`, `jwtVerify` it.
  - Missing/invalid on an **admin page** → redirect to `/admin/login`.
  - Missing/invalid on an **API route** → `401 JSON`.
  - Invalid token also clears the cookie.

> Consequence: **every** `/api/*` route is admin-only. There are currently no public
> API routes, so that's fine — but if you ever add a public endpoint, add it to
> `PUBLIC_PATHS` or it will 401.

### Admin login page — [app/admin/login/page.tsx](../app/admin/login/page.tsx)
Simple password form that POSTs to the login route and redirects to `/admin`.

## The admin panel — [app/admin/page.tsx](../app/admin/page.tsx)

A single client component (`AdminProductsGrid`). Loads `products` into local React
state and lets you edit inline.

**Capabilities**
- Search by name, filter by category tab, paginate (12/page).
- Inline-edit each product's name, description, price, category, tags.
- **Add Product** modal: uploads an image, then commits the new product.
- **Delete** a product (also deletes its image files from GitHub).
- **Save & Commit to GitHub**: pushes the full edited array.

**Three write paths, all hitting GitHub via Octokit:**

| Action | Route | What it does on GitHub |
|--------|-------|------------------------|
| Save / Add | [api/update-products](../app/api/update-products/route.ts) | `getContent` of `lib/products-data.ts`, regex-replace everything after `export const editableProducts: Product[] =` with `JSON.stringify(array, null, 2)`, `createOrUpdateFileContents` (commit). |
| Upload image | [api/upload-image](../app/api/upload-image/route.ts) | Writes the uploaded file to `public/<category>/<filename>` (create or update). Returns the public path. |
| Delete product | [api/delete-product](../app/api/delete-product/route.ts) | Deletes each image file, then rewrites `products-data.ts` (same regex) without the product. |

## How a "save" actually publishes

```
Admin clicks Save
  → POST /api/update-products { editableProducts: [...] }
    → Octokit reads products-data.ts (gets sha)
    → regex replace array literal
    → Octokit commit ("Update products via admin UI")
      → Vercel sees new commit on the branch
        → rebuild + redeploy
          → live site reflects changes (minutes later)
```

## Critical things to know before touching this

- **The whole array is rewritten every save.** State is last-writer-wins; two admins
  (or a stale tab) can clobber each other. There is no merge.
- **The regex is load-bearing.** It matches `export const editableProducts: Product[] = `
  followed by the rest of the file. If you reformat that declaration, rename the
  constant, add code *after* the array, or change its type annotation, the regex
  breaks and saves will corrupt or no-op the file.
- **Add Product commits immediately**; inline edits only persist when you press
  **Save & Commit**. Deletes commit immediately too.
- **Optimistic UI**: delete updates local state first and restores on API failure.
- The routes `console.log` request bodies and file previews — noisy, and could leak
  data into logs. Fine for a hobby project; reconsider for production.
