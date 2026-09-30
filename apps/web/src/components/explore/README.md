# Explore, listings, hubs and search (WP-54)

Public listing pages of PLAN §4.2 / T0-06 (research/03 §6.2). Everything is SSR, edge-cached and
works without JavaScript; `scripts/explore/` only enhances it.

| Route | Page | Cache | Indexable |
|---|---|---|---|
| `/mods` (`?type=library\|all`) | `pages/mods/index.astro` | E(300) `list:mods` | base + `?page=N` |
| `/builds` | `pages/builds/index.astro` | E(300) `list:builds` | base + `?page=N` |
| `/categories` · `/categories/:slug` | `pages/categories/` | E(900) `category:{slug}` | unless filtered/empty |
| `/tags` · `/tags/:slug` | `pages/tags/` | E(900) `tag:{slug}` | ≥ 3 items, unfiltered |
| `/best/:topic` | `pages/best/[topic].astro` + `content/best/` | E(3600) `list:mods` | yes |
| `/search?q=` | `pages/search.astro` | E(60) | `noindex` |

## Modules

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
- `ExploreView.astro` + `Explore*.tsx` — the UI (React components are server-rendered only).
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
