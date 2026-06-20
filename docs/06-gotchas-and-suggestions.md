# 06 — Gotchas & Improvement Backlog

## Footguns (read before editing)

1. **The `editableProducts` regex is load-bearing.** Changing the declaration line in
   [lib/products-data.ts](../lib/products-data.ts) (`export const editableProducts: Product[] = `)
   or adding code after the array will break admin saves/deletes. See
   [04-admin-and-auth.md](04-admin-and-auth.md).
2. **Saving = a GitHub commit + a Vercel redeploy**, not an instant DB write. Content
   changes take minutes to appear. There's no preview/staging.
3. **Last-writer-wins.** Concurrent admin edits clobber each other; no merge/locking.
4. **Two products files.** Edit [lib/products-data.ts](../lib/products-data.ts), not
   the orphaned root [products.ts](../products.ts).
5. **Tag vocab is duplicated** in `admin/page.tsx` (`tagOptions`) and `lib/products.ts`
   (`TAG_GROUPS`). Add new tags to both.
6. **`category` must usually also be in `tags`** for filtering to work (see data-model doc).
7. **`components/test.tsx` is live** (`GridScrollSection` on the home page) despite the name.
8. **All `/api/*` is admin-gated.** Add public routes to `PUBLIC_PATHS` in middleware.

## Dead / leftover code to clean up
- Root [products.ts](../products.ts) — orphaned legacy data (~750 lines). Safe to delete after confirming no import.
- Empty [pages/](../pages/) directory.
- Unused dependencies in `package.json` (recharts, embla, vaul, most Radix packages, react-hook-form, input-otp, etc.).
- Duplicate/temp assets in `public/` (e.g. `footer1.temp.jpeg`, several `placeholder-*`).

---

## Prioritized improvement suggestions

These are my recommendations, grouped by goal. Pick a lane and we can spec it out.

### A. Make it an actual store (highest business value)
1. **Product detail pages** (`/products/[id]`). Right now cards link nowhere — a
   customer can't see one item, more photos, or details. This is the biggest gap.
2. **"Order on WhatsApp" CTA per product.** Since there's no checkout, the realistic
   conversion path is a per-product button that deep-links to WhatsApp with the
   product name/id prefilled (`wa.me/...?text=...`). Cheap, high impact.
3. **Decide on cart/checkout.** If you want real transactions, that's a bigger build
   (cart state, a payment provider — locally e.g. bKash/SSLCOMMERZ, or Stripe). If
   not, lean fully into the catalog + WhatsApp model and remove the dead cart icons.

### B. Connect the homepage to real data
4. **Drive home sections from tags.** `NewInSection`, `BestsellersSection`,
   `IconicSection` are hard-coded. Make them query `getProductsByTag("new-in")` etc.
   so merchandising is controlled from the admin, not code edits.
5. **Wire up Search.** The header search icon does nothing; a simple name search over
   `products` (or routing to `/products?q=`) would be quick.

### C. Performance & SEO
6. **Use `next/image`** instead of `<img>` for automatic resizing/lazy/AVIF. The
   catalog is image-heavy; this is the biggest perf win.
7. **Rename image files to slugs** (no spaces, lowercase). Current names like
   `WhatsApp Image 2025-12-29 at 7.08.49 AM.jpeg` hurt caching/SEO and risk
   URL-encoding bugs.
8. **Add real metadata** (titles, descriptions, Open Graph) per page; currently only
   `{ generator: 'v0.app' }`. Important for a store people share/search for.
9. **Server-render the products page.** It's fully client-side and ships the whole
   array; even simple SSR/streaming would improve first paint and SEO.

### D. Robustness of the CMS
10. **Validate product payloads** server-side with `zod` (already a dependency)
    before committing — guards against malformed data corrupting the file.
11. **Replace the regex rewrite** with a safer serializer, or move product data to a
    JSON file (`products.json`) so writes don't depend on matching a TS declaration.
12. **Add optimistic-concurrency / single-flight** on save to reduce clobbering, or at
    least warn when the on-GitHub `sha` changed since load.
13. **Remove `console.log` of request bodies** in the API routes (log hygiene).

### E. Platform hygiene
14. **Pin Next.js to a stable release.** `^16.2.0-canary.57` is a canary; not ideal
    for a production store. Move to a stable 15/16 line.
15. **Add basic tests / CI** — even a typecheck + lint gate on PRs would catch the
    regex/tag-sync footguns above.
16. **Rate-limit the login route** (beyond the 1s delay) if the admin URL is public.

---

### Suggested first move
If the goal is impact-per-effort: do **A1 + A2 + B4** (detail pages, per-product
WhatsApp CTA, tag-driven home sections). That turns the catalog into something that
actually drives orders and lets the owner merchandise from the admin — without
committing to a full checkout build. Happy to scope any of these into a plan.
