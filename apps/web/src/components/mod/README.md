# Mod page

Public mod pages, an evolution of the old `mod.njk` (docs/plan/CLASSIC.md):

| Route | File | Data |
|---|---|---|
| `/mods/:user/:slug` | `pages/mods/[user]/[slug]/index.astro` | resolve → `mods/:id` + (optional, 800 ms) versions, dependents, related, 3 reviews, 10 comments, 30-day downloads, author FAQ and co-authors |
| `/mods/:user/:slug/versions` | `…/versions/index.astro` | versions (required) |
| `/mods/:user/:slug/versions/:version` | `…/versions/[version].astro` | one version (+ versions); `latest` → 302 |
| `/mods/:user/:slug/versions/compare` | `…/versions/compare.astro` | file and manifest changes between two versions |
| `/mods/:user/:slug/reviews` | `…/reviews.astro` | `?sort=helpful\|new\|critical&cursor=` |

Every page starts with `resolveModPage()` (`data.ts`): `GET /api/v2/resolve` answers 200, 301 (old
slug, case, owner change, `/mods` ↔ `/builds`), 404 or 410; `responses.ts` turns the non-200 cases
into a 301 (edge-cached 1 h) or the real 404/410 page. Pages are edge-cached with
`pageCache.mod(id, userId)`; nothing in the HTML depends on the visitor.

## Layout

`ModLayout.astro` is the shell: breadcrumbs, status banners (pending approval, unlisted,
archived, 18+), the adult-content gate, `ModHeader`, `ModTabs`, then the main column and a plain
sidebar (blocks separated by hairlines, never cards), the dialogs, the phone action bar, the JSON
island and the page script.

- Header: gallery on the left; title with the version, short description (translated with a
  «show original» toggle), author with the Trusted tag, a plain stats row (downloads, followers,
  rating, updated) and `ActionBar` (Download, Install with RedManager, then Follow, Share, Report).
- Tabs: Description · Versions · Comments · Reviews (links; versions and reviews are pages).
- Main column: description and tags, dependencies, versions and changelog (latest three),
  comments, reviews, the author's FAQ when there is one.
- Sidebar: details list, creator (follow, co-authors, support links), downloads over time,
  required by, related mods.
- Removed with the compatibility reports, kits, awards and badges: compat badges and meters, the
  field report island mount, «Did it work?», kits and bundles, the dependency graph, «What's new
  since your last download», recommendation lists, the generated FAQ.

## Client behaviour (`scripts/mod/**`, vanilla)

`index.ts` wires: dialogs (`dialogs.ts`), NSFW gate (`nsfw.ts`), downloads + dependency sheet
(`download.ts`), share + copy (`share.ts`, QR code lazily in `qr.ts`), gallery → lightbox
(`gallery.ts` → lazy `lightbox.ts`), spoilers and YouTube facades (`prose.ts`), report form (lazy
`report.ts`), live counters (`live.ts`: updates `[data-live="downloads-compact"]`, `-full` and the
follower count; it fails quietly and keeps the server-rendered figures). Signed-in only (after the
header's account hint): follow for the mod and the creator (`follow.ts`, optimistic with undo).
Strings come localised from the server in the JSON island (`PageData.astro`, `types.ts`).

## Mount points for the social islands

| Selector | Data attributes |
|---|---|
| `[data-island="reviews"]` (overview), `#write-review[data-island="reviews-write"]` (reviews page) | `data-mod-id`, `data-mod-author-id` |
| `[data-island="comments"]` | `data-mod-id`, `data-mod-author-id`, `data-next-cursor`, `data-total` |

Guest hints inside the mount points (`[data-review-guest-hint]`, `[data-comment-guest-hint]`) are
hidden by the page script for signed-in visitors. `section[data-sheet-section]` must keep
`[data-sheet-body]` as a direct child: `scripts/mod/sheets.ts` moves it into the phone sheet.

## i18n

Namespaces `mod` and `entity` (`packages/i18n/messages/<ns>/*.json`, 13 locales). `i18n.ts` also
configures the `@sotf/ui/domain` components for the request locale (`configureModDomainI18n()`).

## Phones

Everything below is progressive enhancement over server-rendered HTML that already works inline
(desktops, crawlers and no-JS visitors get that); phones are `max-width: 47.99rem`.

| Piece | Files | What |
|---|---|---|
| Gallery | `GalleryCarousel.astro`, `scripts/mod/carousel.ts` | full-bleed scroll-snap carousel + dot pager + «2 / 5» chip on phones, only the first slide from `md` up |
| Lightbox | `Lightbox.astro`, `scripts/mod/lightbox{,-zoom}.ts` | edge-to-edge sheet on phones; pinch zoom, swipe to dismiss. Builds reuse it |
| Bottom sheets | `ModDialog.astro`, `scripts/mod/sheet.ts` | every `ModDialog` is a bottom sheet on phones; `size="tall"` for comments and reviews |
| Action bar | `MobileDownloadBar.astro`, `MoreSheet.astro` | sticky Download · Follow · More (Install, Versions, Share, Report) |
| Tabs | `ModTabs.astro`, `scripts/mod/tabs.ts` | underlined tab strip, sticky under the header; swiping the content goes to the neighbouring page tab |
| Fold / clamp | `Clamp.astro`, `scripts/mod/fold.ts` | `[data-fold]` sidebar blocks collapse behind their heading; the description clamps behind «Read more» |
| Social sheets | `SocialSheets.astro`, `scripts/mod/sheets.ts` | comments and reviews move into sheets; the comments island docks its composer |
| Versions | `VersionRows.astro`, `VersionSheet.astro`, `scripts/mod/versions.ts` | tappable rows replace the list; the changelog sheet clones the list entry |
