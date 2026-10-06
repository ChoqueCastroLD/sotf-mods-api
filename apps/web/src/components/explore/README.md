# Catalogue, listings and search

`/` and `/mods` are one view, the catalogue (an evolution of the old site's mods page); category and
tag pages render the same rows in one wide column; `/builds` keeps the grid view.

| Route | Page | Cache | Indexable |
|---|---|---|---|
| `/` | `pages/index.astro` (default listing) | E(300) `home`, `list:mods` | yes, canonical of the default listing |
| `/mods` | `pages/mods/index.astro` | E(300) `list:mods` | `?page=N`; every filter, sort, NSFW or Unapproved view is `noindex, follow` |
| `/builds` | `pages/builds/index.astro` (`ExploreGridView`) | E(300) `list:builds` | base + `?page=N` |
| `/categories/:slug` · `/tags/:slug` | `pages/categories`, `pages/tags` (`CatalogView`) | E(900) | unless filtered/empty |
| `/search?q=` | `pages/search.astro` | E(60) | `noindex` |

`/` redirects (301) any listing parameter to `/mods…`; legacy parameters (`category`, `search`,
`orderby`, `order_by`, `showunapproved`, `show_unapproved`, `type=Mod|Build|Both|Library`, `nsfw=true`)
keep redirecting (`legacy.ts`), and so do empty or default values a plain GET form writes.

## Catalogue modules

- `catalog-page.ts` + `CatalogPage.astro`: loader (listing and side blocks in parallel), titles,
  canonical rule, JSON-LD (`WebSite` + `SearchAction`, `Organization`, `CollectionPage`).
- `CatalogView.astro`: featured carousel (home, first page), title and count, the sticky toolbar
  (a GET form: search, category, sort, type, NSFW, Unapproved; on phones the selects sit behind a
  «Filters» switch), removable chips for filters without a control, the list, `Pagination`, and the
  aside (site figures + «Mods of the week»).
- `catalog.ts`: toolbar model and the texts of the `list` `ModCard`; `aside.ts`: stats and weekly
  ranking (`sort=week`, falling back to trending while an older API answers); `CatalogAside.tsx`,
  `CatalogList.tsx`: the server-rendered parts.
- `scripts/explore/catalog.ts`: submits on change, trims empty/default parameters, carousel arrows.
- Unapproved: `?unapproved=1` asks the API for `pending` mods whose automated checks passed (the rule
  that makes a pending mod reachable by URL); rows say «Pending approval»; always `noindex`.

## Listing state (shared)


- `state.ts` — the URL is the state. `parseExploreState` (tolerant: unknown values ignored),
  `exploreHref` (canonical URL: defaults dropped, stable order, a single category → its hub),
  `apiQueryOf` (`GET /api/v2/mods`), `isFiltered` (→ `noindex, follow` + canonical to the base).
- `legacy.ts` — PLAN §4.6 query map (`category`, `search`, `orderby`, `type=Mod|Build|Both|Library`,
  `nsfw`, `showunapproved`, `page=1`) → 301, run in the page because `category` needs the catalogue
  (`qol` → `quality-of-life` through `legacySlugs`).
- `taxonomy.ts` — categories + tags (60 s in-process memo), localized names, legacy resolver.
- `model.ts` — every label/option/link of a listing (tabs, include/exclude chips with counts,
  radios, sort, order, view, active filters, clear).
- `load.ts` — loader shared by the listing pages; `seo.ts` — canonical/noindex rules and
  `CollectionPage` + `ItemList` JSON-LD; `copy.ts` — category intros (`explore` namespace).
- `ExploreView.astro` picks `CatalogView` (mods) or `ExploreGridView` (builds) + `Explore*.tsx` (grid UI).
- `content/best/hubs.ts` — fixed queries of the GEO hubs; `content/best/<topic>/<locale>.md` —
  editorial intros in the 13 locales (English fallback marked with `lang`).

## Client (`scripts/explore/explore.ts`)

Instant filters (text debounced), in-place swaps of `[data-explore-root]` inside a View
Transition for same-path navigations (other paths navigate for real), «Load more» with
`history.replaceState`, modal bottom sheet below `lg`, skeleton after 300 ms, live region,
offline/failure messages, `filter_apply` analytics. `scripts/explore/search.ts` records `search`.

## States

Loading (skeleton > 300 ms), empty (with removable filters), past the last page, API down (503,
`no-store`, error state with retry and request reference), offline.
