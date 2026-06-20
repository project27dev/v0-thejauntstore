# THEJAUNTSTORE — Project Docs

Internal documentation for **The Jaunt Store** (`thejauntstore`), a handcrafted
jewelry storefront. These docs exist so a future session (human or AI) can quickly
understand *where things are* and *how they connect* without re-reading the whole tree.

> Generated 2026-06-20 from a full read of the repo. If you change architecture,
> update the relevant file here in the same commit.

## What this app is, in one paragraph

A **Next.js (App Router) jewelry catalog** for a Bangladesh-based brand (prices in
BDT, contact via WhatsApp). It is a **showcase/catalog, not a transactional store** —
there is no cart, checkout, or payment. Customers browse products and contact the
seller through the floating WhatsApp button. Product content is managed through a
custom **admin panel** that commits changes back to **GitHub**, which triggers a
**Vercel** redeploy. The repo stays in sync with [v0.app](https://v0.app), where it
was originally generated.

> Note: the root [README.md](../README.md) is titled "Getthejuice website" — that's a
> stale leftover name, not a current alias. The brand is **The Jaunt Store** everywhere
> that matters (header wordmark, repo slug, Vercel project).

## Doc index

| File | What's in it |
|------|--------------|
| [01-overview.md](01-overview.md) | Stack, scripts, how to run, deployment flow |
| [02-architecture.md](02-architecture.md) | High-level map: storefront vs. admin vs. "Git-as-CMS" |
| [03-data-model.md](03-data-model.md) | The `Product` model, the two products files, tags & categories |
| [04-admin-and-auth.md](04-admin-and-auth.md) | Admin panel, login, JWT middleware, the GitHub-writing API routes |
| [05-routes-and-components.md](05-routes-and-components.md) | Every route and component, what's live vs. dead |
| [06-gotchas-and-suggestions.md](06-gotchas-and-suggestions.md) | Footguns, dead code, and a prioritized improvement backlog |

## Fastest orientation

- Storefront entry: [app/page.tsx](../app/page.tsx)
- Product data (source of truth): [lib/products-data.ts](../lib/products-data.ts)
- Data helpers (filter/tags): [lib/products.ts](../lib/products.ts)
- Browse/filter page: [app/products/page.tsx](../app/products/page.tsx)
- Admin panel: [app/admin/page.tsx](../app/admin/page.tsx)
- Auth gate: [middleware.ts](../middleware.ts)
- GitHub-writing APIs: [app/api/](../app/api/)
