# Content pages (WP-73)

Editorial and informational pages of the public site: `/install`, `/patch-radar` (+ `/:build`),
`/privacy`, `/terms`, `/content-policy`, `/dmca`, `/cookies`, `/about`, `/brand`, `/developers`,
`/kelvinseek`, `/news` (+ `/:slug`, `/news/feed.xml`).

## Where things live

| What | Where |
|---|---|
| Markdown per locale (English authoritative) | `src/content/{install,about,developers}/<locale>.md`, `src/content/legal/<doc>/<locale>.md`, `src/content/news/<locale>/<slug>.md` |
| Collection loaders + front-matter schemas | `src/content/*/index.ts` (`docCollection`, `NEWS_POSTS`, `LEGAL_META`, `INSTALL_VERIFIED`…) |
| Rendering (`@sotf/markdown`, profile `full`) | `markdown.ts` (`renderDoc`, `localizeDocHtml`), `docs.ts` (locale fallback) |
| Shared shells | `DocLayout.astro` (legal/about/developers), `LegalPage.astro`, `RadarPage.astro` |
| Patch Radar data | `radar.ts` (`loadCurrentRadar`, `loadBuildRadar`, `buildSlug`) |
| `/developers` tables | `api-reference.ts` (generated from `@sotf/contracts`) |
| JSON-LD | `jsonld.ts` (`TechArticle`, `FAQPage`, `Article`, `ItemList`, `BlogPosting`, `WebPage`, `AboutPage`, `CollectionPage`) |
| UI strings | `packages/i18n/messages/content/<locale>.json` (`content_*`) |

## Writing content

- `#` is a section (`<h2>`), `##` a subsection. One paragraph per line: every newline is a line break.
- Sections that are linked from elsewhere carry **stable anchors**: list them in `anchors`, one per
  `#` heading, in order. Every translation must keep the same sections in the same order (the
  loader throws on a mismatch), so `/install#redloader` works in every language.
- Link internal pages locale-less (`/patch-radar`); they are localized per request.
- GitHub alerts (`> [!TIP]`, `> [!WARNING]`…) render as callouts with localized titles.
- A document missing in a locale falls back to English with a notice, `lang="en"`, canonical to
  English and no hreflang cluster. Install, about and the welcome post exist in all 13 locales;
  legal texts and the developers guide in English and Spanish (see `docs/backlog/WP-73.md`).
- New news post: add the slug to `NEWS_POSTS` (dates, author) and `src/content/news/en/<slug>.md`.
- Legal texts are drafts until `LEGAL_META[doc].reviewed = true` (removes the notice); bump
  `updated` on every substantive change.
- After walking through the guide on a fresh install, update `INSTALL_VERIFIED`.

## Caching

Guides, legal, about, brand, developers and news: `pageCache.static()` (a day at the edge, purged on
deploy). `/install` adds `list:kits` (starter Kit), `/kelvinseek` the mod's `mod:{id}`/`user:{id}`
tags; both drop to 5 min when their optional read failed. Patch Radar: `pageCache.compat()` (E300,
tag `compat`); 503 + `no-store` when the API is down.
