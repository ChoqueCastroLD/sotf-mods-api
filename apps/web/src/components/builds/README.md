# Build page (WP-63)

`/builds/:user/:slug`: the detail page of a build (a BuildShare blueprint, T0-24), laid out like the
mod page (see `components/mod/README.md`): gallery and header on top, one column with About, Preview,
How to import, Required mods, Versions, Comments and Reviews, and a plain details list beside it.
Page: `pages/builds/[user]/[slug]/index.astro`.

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
(S < 500 ≤ M < 2 000 ≤ L < 8 000 ≤ XL). Unknown facts are left out of the details list.

## Blocks

| Component | What |
|---|---|
| `StatusBanners.astro` | pending approval, unlisted, archived (+ successor) |
| `BuildGallery.astro` | the mod page's `GalleryCarousel` + `GalleryStrip`; a quiet placeholder without pictures; NSFW behind a disclosure |
| `BuildHeader.astro` | `h1` with the version (not printed when it is a GUID), uploader with the Trusted tag, original author, stats row, download split button, Follow, Copy link, How to import, Report |
| `BuildViewer.astro` | top-down preview (static SVG) and «Explore in 3D»; only when the preview is ready |
| `ImportSteps.astro` | «How to import (3 steps)»: RedLoader + BuildShare → `Sons Of The Forest/Mods/BuildShare/LocalBuildings` → Page Up in game |
| `SpecSheet.astro` | hairline `<dl>` with pieces, size, BuildShare version, copyable GUID, authors, file, dates (first on phones, sidebar on desktop) |
| `VersionsList.astro` | every version with date, size, changelog, download (withdrawn ones without link) |
| `BuildSocial.astro` | top comments and first reviews in SSR + mount points of the islands |
| `Domain.tsx` | `@sotf/ui/domain` blocks inside a page-language `DomainI18nProvider` (reviews, comments, dependencies, related `BuildCard`s) |
| `MobileDownloadBar.astro` | fixed download bar on phones, above the tab bar |
| `seo.ts` | title ≤ 60, description ≤ 160, JSON-LD `CreativeWork` (`about: VideoGame`, `author`, `creator` = original/blueprint author, `size`, `identifier` = GUID, `encoding` = the `.json`, `interactionStatistic`, `aggregateRating` only with ≥ 3 reviews) + `BreadcrumbList` |
| `build-page.ts` | follow toggle (lookup when the `sotf_li` hint is present, optimistic with undo, 401 → sign-in), copy link/GUID/path, `download_click` and `follow` events, live counters |

## Island mount points

| Selector | Owner | Data |
|---|---|---|
| `[data-island="reviews"]` | WP-70 | `data-mod-id`, `data-mod-author-id`, `data-next-cursor`, `data-total` |
| `[data-island="comments"]` | WP-70 | `data-mod-id`, `data-mod-author-id`, `data-next-cursor`, `data-total` |

## i18n

Namespace `builds` (`packages/i18n/messages/builds/*.json`, 13 locales); shared words come from
`common`. The `ui_domain_*` texts of the domain components follow the Paraglide catalogue when that
namespace is compiled in (English source otherwise).

## Phones

Same building blocks as the mod page (`components/mod/README.md`, «Phones»): the gallery is the shared
carousel and lightbox, the sticky bar is Download · Follow · More (`MobileDownloadBar.astro`,
`BuildMoreSheet.astro`: How to import, Versions, Share, Copy link, Report), `SectionNav.astro` is a
sticky tab strip with scroll-spy (Description · Versions · Comments · Reviews · Details), the
description is clamped, the details fold, versions are rows with a changelog sheet and comments and
reviews live in sheets. `build-page.ts` wires it all (`initCarousels`, `initSheetSections`,
`initVersions`, `initFolds`, `initSectionNav`) and keeps every `[data-follow]` in sync.
