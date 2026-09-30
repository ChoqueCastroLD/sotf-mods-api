# Build page (WP-63)

`/builds/:user/:slug` — the detail page of a BuildShare blueprint (T0-24, research/03 §6.6), with
the **Blueprint** sub-aesthetic (`data-surface="blueprint"`: cyanotype grid, corner ticks,
dimension lines). Page: `pages/builds/[user]/[slug]/index.astro`.

## Request flow

1. `data.ts › resolveBuildPage()` asks `GET /api/v2/resolve` for the path: 200, 301 (old slug,
   case, owner change, `/builds` ↔ `/mods`), 404 or 410. `responses.ts` turns the non-200 cases
   into the 301 (edge-cached 1 h) or the real 404/410 page. A mod reached through `/builds` goes to
   its `/mods/…` URL; unknown sub-paths are 404.
2. `GET /api/v2/mods/:id` (the detail), then the optional blocks in parallel with an 800 ms budget
   each (`loadBuildExtras`): versions, related, first reviews/comments and the blueprint facts.
3. `setPageCache(pageCache.mod(id, userId))`: edge 900 s, tags `html mod:{id} user:{id}`. The HTML
   is the guest version for everyone.

## Blueprint facts (`BuildSpec`)

Pieces, structures, BuildShare version, GUID, blueprint author and size class. Source order:
`buildMeta` on the detail DTO (when the API exposes it, see docs/backlog/WP-63.md), otherwise the
legacy columns (`buildGuid`, `buildShareVersion`, `numberOfElements`) through the legacy
`GET /api/mods/:mod_id`. The size class uses `buildSizeClass()` of `@sotf/contracts/manifest`
(S < 500 ≤ M < 2 000 ≤ L < 8 000 ≤ XL). Unknown facts render «Not recorded».

## Blocks

| Component | What |
|---|---|
| `StatusBanners.astro` | under review, unlisted, archived (+ successor), reported broken, possibly outdated |
| `BuildGallery.astro` | plan frame, scroll-snap strip + numbered ticks (no JS needed), dimension line; NSFW behind a disclosure |
| `BuildHeader.astro` | readout, `h1`, uploader, «Author in the blueprint» (only when it differs), original author, stats, size badge, download split (`<details>` menu), follow ♥, copy link, «How to import» |
| `ImportSteps.astro` | «How to import (3 steps)»: RedLoader + BuildShare → `Sons Of The Forest/Mods/BuildShare/LocalBuildings` → Page Up in game |
| `SpecSheet.astro` | monospace `<dl>` spec sheet with the S/M/L/XL scale and a copyable GUID (first on phones, sticky sidebar on desktop) |
| `VersionsList.astro` | every version with date, size, changelog, download (withdrawn ones without link) |
| `BuildSocial.astro` | first reviews (histogram + most helpful) and top comments in SSR + WP-70 mount points |
| `Domain.tsx` | `@sotf/ui/domain` blocks inside a page-language `DomainI18nProvider` (reviews, comments, dependencies, related `BuildCard`s) |
| `MobileDownloadBar.astro` | fixed download bar on phones, above the tab bar |
| `seo.ts` | title ≤ 60, description ≤ 160, JSON-LD `CreativeWork` (`about: VideoGame`, `author`, `creator` = original/blueprint author, `size`, `identifier` = GUID, `encoding` = the `.json`, `interactionStatistic`, `aggregateRating` only with ≥ 3 reviews) + `BreadcrumbList` |
| `build-page.ts` | follow toggle (lookup when the `sotf_li` hint is present, optimistic with undo, 401 → sign-in), copy link/GUID/path, `download_click` and `follow` events, gallery ticks |

## Island mount points

| Selector | Owner | Data |
|---|---|---|
| `[data-island="reviews"]` | WP-70 | `data-mod-id`, `data-mod-author-id`, `data-next-cursor`, `data-total` |
| `[data-island="comments"]` | WP-70 | `data-mod-id`, `data-mod-author-id`, `data-next-cursor`, `data-total` |
| `[data-island="kit-add"]` (hidden) | WP-71 | `data-mod-id`, `data-label` |

## i18n

Namespace `builds` (`packages/i18n/messages/builds/*.json`, 13 locales); shared words come from
`common`. The `ui_domain_*` texts of the domain components follow the Paraglide catalogue when that
namespace is compiled in (English source otherwise).
