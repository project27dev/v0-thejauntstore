# 02 — Architecture

There are three logical subsystems in this repo.

```
┌──────────────────────────────────────────────────────────────────────┐
│ 1. STOREFRONT (public)                                                 │
│    app/page.tsx (home)  •  app/products  •  app/about                   │
│    Reads product data at build/runtime from lib/products.ts            │
│    No cart, no checkout — contact via WhatsApp (floating-contact)      │
└──────────────────────────────────────────────────────────────────────┘
            ▲ reads
            │
┌──────────────────────────────────────────────────────────────────────┐
│ 2. DATA LAYER (in-repo, file-based "database")                         │
│    lib/products-data.ts  ← the editable array (source of truth)        │
│    lib/products.ts       ← helpers: filtering, tag groups, categories  │
└──────────────────────────────────────────────────────────────────────┘
            ▲ writes (commits)
            │
┌──────────────────────────────────────────────────────────────────────┐
│ 3. ADMIN / GIT-AS-CMS (protected)                                      │
│    app/admin (UI)  ─►  app/api/update-products  ─┐                      │
│                       app/api/delete-product   ─┼─► Octokit ─► GitHub   │
│                       app/api/upload-image     ─┘   commit ─► Vercel    │
│    Gated by middleware.ts (JWT cookie)                                  │
└──────────────────────────────────────────────────────────────────────┘
```

## 1. Storefront

- **Home** ([app/page.tsx](../app/page.tsx)) is a stack of presentational sections:
  `Header → HeroSection → NewInSection → PrestigeSection → IconicSection →
  CategoryGrid → BestsellersSection → GridScrollSection → NewsletterPopup →
  Footer → FloatingContact`.
  ⚠️ Most of these sections use **hard-coded images/text**, not the product data.
  (e.g. [bestsellers-section.tsx](../components/bestsellers-section.tsx) has its own
  `bestsellers` array.) They are not driven by the `new-in` / `bestseller` tags.
- **Browse** ([app/products/page.tsx](../app/products/page.tsx)) is the only
  data-driven storefront page. It's a `"use client"` page that imports the **entire**
  products array, filters/sorts/paginates **client-side**, and syncs filter state to
  the URL (`?tags=`, `?minPrice=`, `?maxPrice=`, `?page=`). Page size = 20.
- **There is no product detail page.** Products render as cards only; clicking a card
  does nothing. The `ShoppingBag` and `Search` icons in the header are decorative.
- **Contact / "purchase" path** is the floating WhatsApp button
  ([floating-contact.tsx](../components/floating-contact.tsx), `wa.me/+8801328225528`).

## 2. Data layer

See [03-data-model.md](03-data-model.md) for the schema. Key point: product data
lives in a **TypeScript source file** that is imported directly. There is no DB and
no fetch — the data is bundled. `lib/products.ts` re-exports the array plus pure
helper functions (`filterProducts`, `getProductsByTag`, `TAG_GROUPS`, etc.).

## 3. Admin / Git-as-CMS

This is the defining pattern. The admin panel holds product state in React, and on
save **serializes the whole array back into `lib/products-data.ts` via the GitHub
API**, using a regex to replace everything after `export const editableProducts: Product[] =`.
Images are uploaded as new files under `public/<category>/`. Every save is a commit;
Vercel redeploys to publish. Full detail and the failure modes are in
[04-admin-and-auth.md](04-admin-and-auth.md) and [06-gotchas-and-suggestions.md](06-gotchas-and-suggestions.md).

## Rendering model

- No `app/layout.tsx` metadata beyond `{ generator: 'v0.app' }` — minimal SEO.
- The products page is fully client-rendered (`"use client"` + `useSearchParams`).
- Images are served with plain `<img>` tags (not `next/image`), so there's no
  built-in optimization/resizing.
