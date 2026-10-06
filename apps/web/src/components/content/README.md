# Content pages (WP-73)

Editorial and informational pages of the public site: `/install`, `/privacy`, `/terms`,
`/content-policy`, `/dmca`, `/cookies`, `/about` and `/developers`. Patch Radar, `/brand` and `/news`
are gone (CLASSIC.md) and redirect from `middleware/redirects.ts`.

## Where things live

| What | Where |
|---|---|
| Markdown per locale (English authoritative) | `src/content/{install,about,developers}/<locale>.md`, `src/content/legal/<doc>/<locale>.md` |
| Collection loaders + front-matter schemas | `src/content/*/index.ts` (`docCollection`, `LEGAL_META`, `INSTALL_VERIFIED`…) |
| Rendering (`@sotf/markdown`, profile `full`) | `markdown.ts` (`renderDoc`, `localizeDocHtml`), `docs.ts` (locale fallback) |
| Shared shells | `DocLayout.astro` (legal/about/developers), `LegalPage.astro` |
| `/developers` tables | `api-reference.ts` (generated from `@sotf/contracts`) |
| JSON-LD | `jsonld.ts` (`TechArticle`, `FAQPage`, `Article`, `WebPage`, `AboutPage`) |
| UI strings | `packages/i18n/messages/content/<locale>.json` (`content_*`) |

## Writing content

- `#` is a section (`<h2>`), `##` a subsection. One paragraph per line: every newline is a line break.
- Sections that are linked from elsewhere carry **stable anchors**: list them in `anchors`, one per
  `#` heading, in order. Every translation must keep the same sections in the same order (the
  loader throws on a mismatch), so `/install#redloader` works in every language.
- Link internal pages locale-less (`/install`); they are localized per request.
- GitHub alerts (`> [!TIP]`, `> [!WARNING]`…) render as callouts with localized titles.
- A document missing in a locale falls back to English with a notice, `lang="en"`, canonical to
  English and no hreflang cluster. Install and about exist in all 13 locales;
  legal texts and the developers guide in English and Spanish (see `docs/backlog/WP-73.md`).
- Legal texts are drafts until `LEGAL_META[doc].reviewed = true` (removes the notice); bump
  `updated` on every substantive change.
- After walking through the guide on a fresh install, update `INSTALL_VERIFIED`.

## Caching

Guides, legal, about and developers: `pageCache.static()` (a day at the edge, purged on deploy).
