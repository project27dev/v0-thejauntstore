# 05 — Routes & Components Map

## Routes

### Pages
| Route | File | Type | Notes |
|-------|------|------|-------|
| `/` | [app/page.tsx](../app/page.tsx) | Server (composes sections) | Marketing home |
| `/products` | [app/products/page.tsx](../app/products/page.tsx) | Client | Browse/filter/sort/paginate. Cards link to detail pages |
| `/products/[id]` | [app/products/[id]/page.tsx](../app/products/[id]/page.tsx) | Server (SSG) | Product detail: gallery, info, "Order on WhatsApp" CTA, related items. Pre-rendered per product via `generateStaticParams` |
| `/products` (loading) | [app/products/loading.tsx](../app/products/loading.tsx) | — | Route loading UI |
| `/about` | [app/about/page.tsx](../app/about/page.tsx) | — | Brand story / owner |
| `/admin` | [app/admin/page.tsx](../app/admin/page.tsx) | Client | Product CMS (gated) |
| `/admin/login` | [app/admin/login/page.tsx](../app/admin/login/page.tsx) | Client | Password form |

### API (all gated except `/api/admin/login`)
| Route | File | Method | Purpose |
|-------|------|--------|---------|
| `/api/admin/login` | [route](../app/api/admin/login/route.ts) | POST | Issue admin JWT cookie |
| `/api/admin/logout` | [route](../app/api/admin/logout/route.ts) | POST | Clear cookie |
| `/api/update-products` | [route](../app/api/update-products/route.ts) | POST | Commit products array to GitHub |
| `/api/delete-product` | [route](../app/api/delete-product/route.ts) | POST | Delete product + its images on GitHub |
| `/api/upload-image` | [route](../app/api/upload-image/route.ts) | POST | Upload image file to `public/<category>/` on GitHub |

> The empty top-level [pages/](../pages/) directory is a leftover; the app uses the
> App Router under `app/`. Don't add Pages-Router files there.

## Components ([components/](../components/))

### Used on the home page (presentational, mostly hard-coded content)
| Component | Notes |
|-----------|-------|
| `header.tsx` | Top bar + logo + nav; opens `sidebar`. Search/cart icons are **non-functional** |
| `hero-section.tsx` | Hero imagery |
| `new-in-section.tsx` | Hard-coded, not driven by the `new-in` tag |
| `prestige-section.tsx` | Editorial block |
| `iconic-section.tsx` | Editorial block |
| `category-grid.tsx` | Category tiles linking into `/products?filter=...` |
| `bestsellers-section.tsx` | Hard-coded `bestsellers` array, not the `bestseller` tag |
| `test.tsx` | Exports `GridScrollSection` — **misleadingly named but LIVE** on the home page. Rename candidate |
| `newsletter-popup.tsx` | Email-subscribe popup |
| `footer.tsx` | Footer |
| `floating-contact.tsx` | WhatsApp/contact FAB — the de-facto "buy" path |

### Used on the products page
| Component | Notes |
|-----------|-------|
| `filter-panel.tsx` | Tag checkboxes (grouped by `TAG_GROUPS`) + price range. Used in desktop sidebar and mobile drawer |

### Shared / nav
| Component | Notes |
|-----------|-------|
| `sidebar.tsx` | Mobile nav drawer; links use legacy `?filter=<tag>` query form |
| `theme-provider.tsx` | `next-themes` wrapper (present; theming not heavily used) |

### UI primitives
- [components/ui/button.tsx](../components/ui/button.tsx) is the **only** shadcn-style
  primitive actually in the tree, despite many Radix deps being installed.

## URL filter conventions (two forms coexist)
- **New form (browse page writes this):** `/products?tags=gold,rings&minPrice=&maxPrice=&page=2`
- **Legacy form (sidebar/category links use this):** `/products?filter=rings`
- The browse page reads `?tags` first and falls back to legacy `?filter`. Keep both
  working if you touch the products page initializer.
