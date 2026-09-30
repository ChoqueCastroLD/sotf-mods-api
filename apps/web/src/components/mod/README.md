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
