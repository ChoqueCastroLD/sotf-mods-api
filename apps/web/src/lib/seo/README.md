# SEO helpers and machine endpoints of the web (WP-22, WP-61)

`meta.ts` and `jsonld.ts` serve every page head (`SeoHead`). The other modules are the helpers of
the SEO/GEO endpoints (moved here from `pages/sitemaps/_lib`, docs/backlog/WP-61.md). Everything is
SSR, reads the public API (`serverApi()`), is cached through the route cache with
`machineResponse()` (origin LRU + edge, tags always include `html`) and answers 503 (`no-store`)
when the API is down.

| Route | Module | Cache tags |
|---|---|---|
| `/sitemap.xml`, `/sitemaps/{static,mods,builds,categories,tags,kits,creators,news,best}.xml` | `sitemaps.ts`, `xml.ts` | `sitemap` (1 h) |
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
