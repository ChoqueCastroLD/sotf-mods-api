# @sotf/web

Astro 7 SSR server of SOTF Mods v2 (PLAN §2.5, §4): the public site (server-rendered, edge-cached,
≤ 15 KB br of initial JS), React 19 islands, the console SPA (Basecamp, Ranger Station, settings,
Signals, Me) and the machine endpoints (sitemaps, feeds, `llms.txt`, oEmbed, robots, downloads).
The web never talks to the database: SSR calls the API on `INTERNAL_API_URL`, the browser calls
the same-origin `/api`.

## Run

```bash
pnpm --filter @sotf/web dev      # http://127.0.0.1:47321 (no route cache, no CSP in dev)
pnpm --filter @sotf/web build    # dist/server/entry.mjs + dist/client
pnpm --filter @sotf/web start    # production server (PORT/HOST; Coolify: 4321)
pnpm --filter @sotf/web gen      # console route tree, brand assets in public/, web manifest
```

- Environment: `src/lib/env.ts` (Zod, the only reader of `process.env`). Every variable has a
  development default, so `dev` needs no `.env`; outside `SITE_ENV=development`,
  `INTERNAL_SECRET` is mandatory. Anything but `SITE_ENV=production` renders `noindex` + a banner.
- The API must be reachable at `INTERNAL_API_URL` (default `http://127.0.0.1:47301`). Without it,
  data-driven sections render their error state (the landing still answers 200) and
  `/mods/:u/:s/download/:v` fails.
- In production `/api/*` reaches the API through Traefik on the same origin; the dev server does
  not proxy it yet (see `docs/backlog/WP-A4.md`).

## Layout

| Path | What | Guide |
|---|---|---|
| `src/pages/` | File routes: public pages, auth pages, console shells, endpoints (`healthz`, sitemaps, feeds, `llms*.txt`, `oembed`, `robots.txt`, downloads) | — |
| `src/layouts/` | `BaseLayout` (SEO head, banners, client boot), `PageLayout` (breadcrumbs), `ConsoleShell` | [`src/lib/README.md`](src/lib/README.md) |
| `src/components/<area>/` | Server-rendered Astro/React components (landing, mod, builds, explore, kits, profile, content, account, layout) | per-area `README.md` |
| `src/islands/<area>/` | React islands hydrated on demand (auth, comments, reviews, compat, cmdk, signals, landing) | per-area `README.md` |
| `src/scripts/` | Vanilla TS for small interactions (theme, follow, consent, ads, beacon, legacy-token cleanup…) | [`src/lib/README.md`](src/lib/README.md) |
| `src/console/` | TanStack Router + Query SPA mounted by the console shells | [`src/console/README.md`](src/console/README.md) |
| `src/content/` | MDX per locale (install, legal, about, news, best-of hubs, FAQ, developers) | — |
| `src/lib/` | API client, route cache provider (Cloudflare tags + origin LRU), SEO/JSON-LD, i18n glue, server entry, security (CSP) | [`src/lib/README.md`](src/lib/README.md), [`src/lib/security/README.md`](src/lib/security/README.md) |
| `src/middleware/` | Locale, legacy redirects and 410s, response hygiene | [`src/lib/README.md`](src/lib/README.md) |

## Rules of thumb

- Read the locale from `Astro.locals.locale` and build links with `href(path, locale)`; URL
  segments are English with a `/{locale}` prefix for non-English locales (ADR-0009).
- Every public page sets a cache policy (`setPageCache(Astro, pageCache.<type>(…))`) or
  `setPageCache(Astro, false)`; nothing user-specific is ever edge-cached. Personal data goes
  through islands calling `/api/v2/me*`.
- Public pages must stay within the performance budget (PLAN §8.2): prefer server components and
  vanilla scripts; React only where listed in PLAN §2.5.
- No hard-coded copy: messages come from `@sotf/i18n` (`m.<namespace>_<key>`), 13 locales.
- Generated files (`src/console/routeTree.gen.ts`, `public/brand/**`) are never edited by hand.

## Tests

```bash
pnpm --filter @sotf/web test                  # unit (redirect table, cache, SEO, scripts…)
pnpm --filter @sotf/web e2e --grep @platform  # Playwright against the build (port 47522)
pnpm --filter @sotf/web lhci                  # Lighthouse CI behind a brotli "edge" proxy
```
