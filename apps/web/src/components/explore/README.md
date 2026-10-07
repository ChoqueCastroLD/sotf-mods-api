# Catalogue, listings and search

`/` is the catalogue (an evolution of the old site's mods page: carousel, rows, «Mods of the week»);
category and tag pages render the same rows in one wide column; `/mods` is the dedicated search
page and `/builds` the build listing, both the grid view (`ExploreGridView`).

| Route | Page | Cache | Indexable |
|---|---|---|---|
| `/` | `pages/index.astro` (default listing) | E(300) `home`, `list:mods` | yes, canonical of the default listing |
| `/mods` | `pages/mods/index.astro` (`ExploreGridView`, search page) | E(300) `list:mods` | base + `?page=N`; every search, filter, sort, page size, NSFW or Unapproved view is `noindex, follow` |
| `/builds` | `pages/builds/index.astro` (`ExploreGridView`, blueprint header) | E(300) `list:builds` | base + `?page=N` |
| `/categories/:slug` · `/tags/:slug` | `pages/categories`, `pages/tags` (`CatalogView`) | E(900) | unless filtered/empty |
| `/search?q=` | `pages/search.astro` | E(60) | `noindex` |

`/` redirects (301) any listing parameter to `/mods…` (the search page); legacy parameters (`category`, `search`,
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
- `ExploreView.astro` picks `ExploreGridView` (the mods search page, builds and build hubs) or `CatalogView` (mod category and tag hubs, rows) + `Explore*.tsx`, `NoResults.tsx` and `ExploreSearchBar.astro` (grid UI).
- `content/best/hubs.ts` — fixed queries of the GEO hubs; `content/best/<topic>/<locale>.md` —
  editorial intros in the 13 locales (English fallback marked with `lang`).

## Search and grid page (`ExploreGridView`, `/mods` and `/builds`)

Header with a large search box (`ExploreSearchBar`, it belongs to the filter form through the `form`
attribute), type tabs with counts (mods, libraries, all), the filter rail (`ExploreFilters`: category
and tag chips with include/exclude, selects for multiplayer, side, updated, rating and downloads,
toggles for source, trusted, NSFW and Unapproved), the toolbar (range, sort menu, reverse), removable
chips with «Clear all», the grid (2 columns on phones, 3 on tablets, 4 and 5 on desktops; builds one
fewer) and numbered pagination with a page size select (12/24/48/96). Below `lg` the rail and the sort
are bottom sheets. The «no results» state (`NoResults`) offers clearing the filters, the categories
and four popular mods. Sorts: best match (with a query), newest, recently updated, most downloaded,
trending, top rated, name A to Z (`sort=name`, ascending by default); `minDownloads` and `pageSize`
are query parameters of `GET /api/v2/mods` and of the page.

`/builds` wears a blueprint look (`components/builds/blueprint.css`: grid paper header, corner ticks
on the pictures, monospace counts), scoped to `bp-*` classes only the builds pages carry.

## Client (`scripts/explore/explore.ts`)

Instant filters (text debounced; controls with `data-default` equal to their value are not written
to the URL), in-place swaps of `[data-explore-root]` inside a View Transition for same-path
navigations (other paths navigate for real), page changes scroll to the results, modal bottom sheet
below `lg`, skeleton after 300 ms, live region, offline/failure messages, `filter_apply` analytics.
`/requests` shares this script (`data-explore-kind="requests"`). `scripts/explore/search.ts` records
`search`.

## States

Loading (skeleton > 300 ms), empty (removable chips above, clear all, categories, popular mods), past the last page, API down (503,
`no-store`, error state with retry and request reference), offline.
