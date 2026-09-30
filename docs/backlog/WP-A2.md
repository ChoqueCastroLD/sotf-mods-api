# Backlog WP-A2 (polish of the public web)

What · where · why. Resolved public items first (so the integrator can close them in the other
backlogs), then what is left and where it goes.

## Public backlog resolved in WP-A2

- **Social islands mounted** (WP-70) · `scripts/mod/index.ts`, `components/builds/build-page.ts` · comments, reviews and field reports now load on mod pages and build pages; build review list is marked `data-review-list` and the comments take-over keeps a title wrapped in a header row.
- **Turnstile site key and creator name on the mounts** (WP-70) · `CommentsPreview`, `ReviewsPreview`, `reviews.astro`, `BuildSocial`.
- **One «Did it work?» at a time** (WP-70) · the browser-local toast is only for guests; members get the island callout.
- **Unsubscribe page** (WP-43, WP-81) · `pages/unsubscribe.astro` · GET shows a confirmation (mail scanners never unsubscribe anyone), POST calls `POST /api/v2/unsubscribe?token=` server-side; done / link that no longer works (404/410) / rate limited / failed with reference; links to `/settings/notifications`. Works without JavaScript.
- **Per-mod FAQ** (WP-61) · `components/mod/ModFaq.astro` + `FAQPage` JSON-LD (`modFaqJsonLd`).
- **Best hubs `noindex` below 5 items** (WP-61) · same `BEST_INDEX_MIN_ITEMS` as the sitemap.
- **Entity on listing pages** (WP-54) · `PageLayout` forwards `entity`; category and tag pages set it.
- **404/410/500 microcopy** (WP-94) · readouts, «How to install mods» and «Check the status on Discord» (the 500 page had a hard-coded «Discord»).
- **Explore domain copy** (WP-94) · `components/explore/domain-i18n.ts` uses the compiled `ui_domain_*` catalogue directly.
- **Version moderation signals** (WP-94) · `islands/signals/describe.ts` handles `changes_requested` and `version_*`.
- **Search entry points announce the dialog** (WP-72) · `aria-haspopup="dialog"` is set by the Cmd+K trigger at runtime (the no-JS form and links stay honest).
- **View-transition naming** (WP-54, WP-22) · one scheme, `mod-cover-{id}` like `ModCard`; the mod header carries `data-vt-cover-target="{id}"`.
- **Add to Kit on build pages** (WP-63) · link to `/me/kits?add=<id>` like the mod page (the hidden `data-island="kit-add"` stub is gone).
- **Report a build** (WP-63) · the mod page's `ReportDialog` + `scripts/mod/report.ts` now read the target and texts from the form; build pages reuse them. Also fixes the submit handler being bound again on every opening of the dialog.
- **Global breaking-build banner** (WP-73, PLAN §7.10) · `components/layout/SiteBanners.astro` + `breaking-build.ts`: current build `isBreaking` and released ≤ 14 days ago → «Game build X may break mods — check yours on the Patch Radar», dismissible per build, memoized 60 s, 400 ms budget.
- **18+ opt-in on listings** (WP-33, WP-54, WP-81) · `scripts/explore/explore.ts`: members with `settings.nsfwOptIn` get `?nsfw=1` applied in place (quietly: no focus move, no announcement); read once per browser session.
- **`/developers/errors` → 301 `/developers`** (WP-73) · `pages/developers/errors.astro` (the page route replaces the middleware rule).
- **Discovery links** (WP-61) · RSS alternates on category hubs and `/builds`.
- **Localized Markdown labels on profile bios** (WP-15) · `ProfileHeader` runs `localizeHtml`.

## Left open / reclassified

- **Unsubscribe copy** · `packages/i18n/messages/**` (i18n owner) · the page reuses existing keys (`emails_notify_unsubscribe`, `settings_notif_saved`, `auth_reset_invalid_heading`, `settings_notif_matrix_text`, `errors_code_*`). Dedicated copy would read better: `unsubscribe_confirm_text` («Stop these emails? You can turn them back on in Settings.»), `unsubscribe_done_heading` («You won’t get these emails anymore»), `unsubscribe_invalid_text` («This unsubscribe link is invalid or has expired. Change your emails in Settings.»). Swap the keys in `pages/unsubscribe.astro` once they exist.
- **FAQ section title** · same owner · the per-mod FAQ uses `content_install_faq_title` («Frequently asked questions»); a `mod_faq_title` would decouple it from the install guide.
- **Live counts in the section titles** (WP-70) · T1 · the titles are ICU plurals rendered on the server; the islands would need the message (or a `data-count` span with a client template).
- **Badge names in signals** · `islands/signals/describe.ts` · the Signals catalogue does not carry `profile_badge_*_name`; «You earned {badge}» humanizes the key. Add `signals_badge_<key>` mirrors (i18n owner) or load the profile catalogue lazily (T1).
- **OG images of mods, profiles and kits** (WP-62, WP-64, WP-61) · `packages/contracts/src/{catalog,kits}.ts` · the DTOs still do not expose the generated `og/*` keys; the pages keep using thumbnails/covers.
- **Ad slots** (WP-53, WP-54, WP-62) · `apps/web/src/lib/env.ts` + `.env.example` (lib owner) · no `PUBLIC_ADSENSE_SLOT_*` variables yet, so no in-feed, sidebar or landing slots render.
- **Domain i18n app-wide** (WP-25, WP-53, WP-62, WP-94) · `apps/web/src/lib/i18n.ts` / `middleware/index.ts` (lib owner) · the mod, build and Explore pages configure it themselves; landing cards still fall back to English `ui-domain` copy until it is wired globally.
- **Display preferences on the public pages** (WP-81) · `apps/web/src/lib/client/boot.ts` (lib owner) · apply `settings` theme/density/motion for members.
- **Viewer-state lookups and `bodyMd` for authors** (WP-41, WP-70) · contracts + API.
- **Acceptance** · `pnpm verify && pnpm e2e && pnpm lhci` were not run (DEV-ONLY mode): the 360/768/1024/1440 px checks, axe and LHCI budgets of the pages touched here belong to the testing phase. Budget note: the mod and build page scripts now include the tiny island loaders (`islands/*/boot.ts`); React and the islands stay lazy chunks.
