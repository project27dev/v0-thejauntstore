# 03 — Data Model

## The `Product` type

Defined in [lib/products-data.ts](../lib/products-data.ts):

```ts
export interface Product {
  id: number          // unique; ranges loosely grouped by category (rings ~100s, pendants ~200s)
  name: string
  price: number       // in BDT (Bangladeshi Taka)
  images: string[]    // public-relative paths, e.g. "/rings/foo.jpeg" (first = primary)
  tags: string[]      // free-form but expected to come from the known tag vocabulary
  description: string
  category: string    // one canonical category (also usually duplicated into tags)
}
```

## The two products files (important — don't confuse them)

| File | Role | Status |
|------|------|--------|
| [lib/products-data.ts](../lib/products-data.ts) | **Source of truth.** Exports `editableProducts: Product[]`. This is the file the admin panel rewrites via GitHub. | ✅ Live |
| [lib/products.ts](../lib/products.ts) | Wrapper: re-exports the array as `products` plus pure helpers. Storefront imports from here. | ✅ Live |
| [products.ts](../products.ts) (repo root) | An **older, orphaned** copy (`export const products = [...]`, different/legacy schema — e.g. names like "Botanical Gold Ring Octave", no `matching-sets`). Nothing imports it. | ⚠️ Dead — candidate for deletion |

So the real chain is:
`lib/products-data.ts` → `lib/products.ts` → storefront & admin.

## Helpers in `lib/products.ts`

- `products` — the materialized array (with an `Array.isArray` fallback to `[]`).
- `getProductsByTag(tag)`, `getProductsByCategory(category)`, `getAllTags()`.
- `filterProducts({ tags, minPrice, maxPrice })` — used by the browse page.
- `TAG_GROUPS` — the canonical tag vocabulary, grouped:

```ts
TAG_GROUPS = {
  Category:   ["rings","necklaces","earrings","bracelets","pendants","jhumka","bangles","stone-bracelet","matching-sets"],
  Collection: ["new-in","bestseller","iconic","showpiece"],
  Material:   ["gold","silver","pressed-flowers","resin","pearl","metals","natural-elements"],
  Style:      ["botanical","minimalist","handmade"],
  Gender:     ["for-her","for-him"],
}
```

## Categories vs. tags — a subtlety

- `category` is a single canonical string per product.
- `tags` is a list and **usually also contains the category** (e.g. a ring has
  `category: "rings"` *and* `"rings"` in its tags). The browse-page filters and the
  sidebar nav links operate on **tags**, so the category is duplicated into tags to
  make filtering work. Keep them in sync when editing.
- The **admin tag picker** ([app/admin/page.tsx](../app/admin/page.tsx) `tagOptions`)
  and the **storefront `TAG_GROUPS`** are two separate hand-maintained lists. They
  overlap but are **not generated from a single source** — adding a new tag means
  editing both. (e.g. admin lists `pearl` under categories; `TAG_GROUPS` lists it
  under Material.)

## Images

- Live under `public/<category>/` (e.g. `public/rings/`, `public/pendent/` — note the
  misspelled `pendent` folder used for pendants).
- Paths in data are public-relative with a **leading slash** (`/rings/x.jpeg`).
- Many filenames contain **spaces** (e.g. `WhatsApp Image 2025-12-29 at 7.08.49 AM.jpeg`).
  These work but are fragile (URL-encoding) and bad for SEO/caching — see gotchas.
- `/placeholder.svg` is the fallback when a product has no image.

## ID convention

`id` is a plain number. New IDs in the admin are assigned as
`Math.max(0, ...existingIds) + 1`. The generator script uses category-offset ranges
(rings 100+, pendants 200+) but this is convention only, not enforced.
