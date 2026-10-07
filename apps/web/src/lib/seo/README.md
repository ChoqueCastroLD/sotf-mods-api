# SEO helpers and machine endpoints of the web (WP-22, WP-61)

`meta.ts` and `jsonld.ts` serve every page head (`SeoHead`). The other modules are the helpers of
the SEO/GEO endpoints (moved here from `pages/sitemaps/_lib`, docs/backlog/WP-61.md). Everything is
SSR, reads the public API (`serverApi()`), is cached through the route cache with
`machineResponse()` (origin LRU + edge, tags always include `html`) and answers 503 (`no-store`)
when the API is down.

| Route | Module | Cache tags |
|---|---|---|
| `/sitemap.xml`, `/sitemaps/{static,mods,builds,categories,tags,requests,jams,creators}.xml` | `sitemaps.ts`, `xml.ts` | `sitemap` (1 h) |
| `/robots.txt` (exact PLAN §8.6 file; `Disallow: /` outside production) | `pages/robots.txt.ts` | `html` (1 day) |
| `/llms.txt`, `/llms-full.txt` | `llms.ts` | `sitemap`, `list:*` |
| `/feed.xml`, `/builds/feed.xml`, `/categories/:slug/feed.xml`, `/profile/:h/feed.xml`, `/mods/:u/:s/feed.xml` | `feeds.ts`, `feed-routes.ts` | `feed` + entity |
| `/mods/:u/:s.md`, `/builds/:u/:s.md`, `/profile/:h.md` | `markdown.ts`, `alternates.ts`, `html-to-md.ts` | `mod:{id}`/`user:{id}` |
| `/oembed?url=&format=json`, `/mods/:u/:s.json` (301) | `oembed.ts` | `mod:{id}` (900 s) |
| `/embed/mods/:u/:s` (framable card) | `pages/embed/mods/[user]/[slug].astro` | `mod:{id}` (900 s) |
| `/{INDEXNOW_KEY}.txt`, `/.well-known/security.txt` | `pages/[indexnow].txt.ts`, `pages/.well-known/` | `html` |

`faq.ts` exports `buildModFaq(facts, locale)`: the per-mod FAQ generated from the facts in the 13
locales (PLAN §8.7), for the mod page (`#faq` + `FAQPage` JSON-LD) and the `.md` alternate.
Entities are resolved with `GET /api/v2/resolve` (`entities.ts`): renamed slugs 301, tombstones 410.

## Checks

- `node scripts/check-seo.mjs [--base URL] [--origin https://sotf-mods.com] [--indexable] [--locales en,es|all]`
  fetches one URL per public template and asserts title/description lengths, canonical, hreflang
  (13 + x-default), robots, Open Graph, Twitter, icons, manifest and the JSON-LD graph. Without
  `--indexable` every page must be `noindex` (development); with it, run against a server started with
  `SITE_ENV=production PUBLIC_SITE_URL=https://sotf-mods.com` to verify the production policy.
- `node scripts/page-weight.mjs [--base URL]` sums HTML, CSS and JS (brotli) per template of a
  production server.
- `jsonld.test.ts` validates every JSON-LD builder (required properties, absolute URLs, ISO dates).
- Helpers added in this pass: `og.ts` (OG image of an entity with real sizes), `itemListJsonLd`,
  `requestPostingJsonLd`, `readableVersion` (builds without a version carry a GUID).
