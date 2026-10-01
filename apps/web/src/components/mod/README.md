# Mod page (WP-62)

Public mod pages (PLAN §4.2, §4.5, §4.6, T0-08, T0-09, T0-30; research/03 §6.3):

| Route | File | Data |
|---|---|---|
| `/mods/:user/:slug` | `pages/mods/[user]/[slug]/index.astro` | resolve → `mods/:id` + (optional, 800 ms) versions, dependents, related, 3 reviews, 10 comments, compat |
| `/mods/:user/:slug/versions` | `…/versions/index.astro` | versions (required) |
| `/mods/:user/:slug/versions/:version` | `…/versions/[version].astro` | one version (+ versions, compat); `latest` → 302 |
| `/mods/:user/:slug/reviews` | `…/reviews.astro` | `?sort=helpful\|new\|critical&cursor=` |

Every page starts with `resolveModPage()` (`data.ts`): `GET /api/v2/resolve` answers 200, 301 (old
slug, case, owner change, `/mods` ↔ `/builds`), 404 or 410; `responses.ts` turns the non-200 cases
into a 301 (edge-cached 1 h) or the real 404/410 page. Pages are edge-cached with
`pageCache.mod(id, userId)`; nothing in the HTML depends on the visitor.

`ModLayout.astro` is the shell (breadcrumbs + JSON-LD, status banners, NSFW gate, header, tabs,
main/glance/sidebar grid, dialogs, mobile download bar, JSON island, page script).

## Client behaviour (`scripts/mod/**`, vanilla)

`index.ts` wires: dialogs (`dialogs.ts`), NSFW gate (`nsfw.ts`), downloads + dependency sheet +
«Did it work?» prompt (`download.ts`), share + copy (`share.ts`, QR code lazily in `qr.ts`),
gallery → lightbox (`gallery.ts` → lazy `lightbox.ts`), spoilers and YouTube facades (`prose.ts`),
report form (lazy `report.ts`). Signed-in only (after the header's account hint): follow ♥ for
the mod and the creator (`follow.ts`, optimistic with undo) and «What's new since your last
download» (`whats-new.ts`). Strings come localised from the server in the JSON island
(`PageData.astro`, `types.ts`).

## Mount points for other work packages

| Selector | Owner | Data attributes |
|---|---|---|
| `#field-report[data-island="field-report"]` | WP-70 | `data-mod-id`, `data-version-id`, `data-game-build-id` |
| `[data-island="reviews"]` (overview), `#write-review[data-island="reviews-write"]` (reviews page) | WP-70 | `data-mod-id`, `data-mod-author-id` |
| `[data-island="comments"]` | WP-70 | `data-mod-id`, `data-mod-author-id`, `data-next-cursor`, `data-total` |
| `a[data-kit-add]` («+ Kit», falls back to `/me/kits?add=<id>`) | WP-71 | `data-kit-add=<modId>` |

Guest hints inside the mount points (`[data-review-guest-hint]`, `[data-comment-guest-hint]`,
`[data-field-report-guest]`) are hidden by the page script for signed-in visitors.

## i18n

Namespace `mod` (`packages/i18n/messages/mod/*.json`, 13 locales). `i18n.ts` also configures the
`@sotf/ui/domain` components for the request locale (`configureModDomainI18n()`).

## Phones: native-app feel (m-entity)

Everything below is progressive enhancement over server-rendered HTML that already works inline
(desktops, crawlers and no-JS visitors get that); phones are `max-width: 47.99rem`.

| Piece | Files | What |
|---|---|---|
| Gallery | `GalleryCarousel.astro`, `scripts/mod/carousel.ts` | one list for every screen: full-bleed scroll-snap carousel + dot pager + «2 / 5» chip on phones, only the first slide (the cover) from `md` up; tapping a slide opens the lightbox, which hands the current slide back on close |
| Lightbox | `Lightbox.astro`, `scripts/mod/lightbox{,-zoom}.ts` | edge-to-edge black sheet on phones; pinch (or Ctrl+wheel) zoom to 5×, double tap 2.5×, pan, swipe down/up to dismiss with a fading backdrop; slide changes stay native scroll-snap. Only needs `data-counter` / `data-video-title` on `[data-lightbox]`, so builds reuse it |
| Bottom sheets | `ModDialog.astro`, `scripts/mod/sheet.ts` | every `ModDialog` is a bottom sheet on phones: grabber, swipe the header (or the body at scrollTop 0) to dismiss; `size="tall"` (comments, reviews), `footer` slot (sticky), one open at a time (`openDialog`) |
| Action bar | `MobileDownloadBar.astro`, `MoreSheet.astro` | sticky Download · Follow ♥ · More; the follow links are the same `a[data-follow]` as the header's and are always painted together (`follow.ts`). More = Install, + Kit, Compare, Versions, Share (system share sheet, else the dialog; `[data-share-action]`), Report |
| Tabs | `ModTabs.astro`, `scripts/mod/tabs.ts` | segmented control, sticky under the header, current pill centred; swiping the content sideways goes to the neighbouring page tab (guards: carousels, code, tables, fields, screen edges) |
| Fold / clamp | `Clamp.astro`, `scripts/mod/fold.ts` | `[data-fold]` sections collapse behind their `h2` (`data-fold="closed"` starts closed; a hash inside opens it); `Clamp` clamps the description behind «Read more» only when clearly taller |
| Social sheets | `SocialSheets.astro`, `scripts/mod/sheets.ts`, `islands/comments/StickyComposer.tsx` | `section[data-sheet-section=<dialog id>]` (preview card + body): the body moves into the sheet before the islands look for their mount points, so they hydrate inside it; the comments island renders a docked composer (`layout="sheet"`); `#comment-N` opens the sheet |
| Versions | `VersionRows.astro`, `VersionSheet.astro`, `scripts/mod/versions.ts` | tappable rows (excerpt, date · size · downloads) replace the table and the timeline; the changelog sheet clones the timeline entry (no duplicate HTML) |
| Title | `ModHeader.astro` | translated title in display caps, `Original title` readout + original name underneath |

Strings: namespace `entity` (`packages/i18n/messages/entity/*.json`, 13 locales). Art: `public/art/entity/`
(built by `tooling/scripts/art-entity.ts` from the concept art; used by the empty comment/review states).
