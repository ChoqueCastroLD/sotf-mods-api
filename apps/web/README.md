# @sotf/web

Astro 7 SSR server of SOTF Mods v2 (PLAN §2.5, §4): the public site (server-rendered, edge-cached,
≤ 15 KB br of initial JS), React 19 islands, the console SPA (Dashboard, Moderation, settings,
Notifications, Me) and the machine endpoints (sitemaps, feeds, `llms.txt`, oEmbed, robots, downloads).
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

## Mobile shell and PWA

- **Chrome** (`components/layout`): `Header` (compact 56 px bar on phones that hides while scrolling down, wider
  screens show the destinations that fit and move the rest to **More**), `MoreMenu` (popover from `md`) and
  `MoreSheet` (phones; Help = install guide, Share logs, Patch Radar, Developers), `MobileTabBar` (5 tabs, a lifted
  search action, waypoint marker; floating dock from 40 rem), `nav-items.ts` (which item lives where),
  `Sheet.astro` (generic bottom sheet), `Art.astro` (responsive art from `public/art`).
- **Behaviour** (`lib/client`, `scripts`): `chrome.ts` (scroll direction, tab haptics), `sheet.ts` + `sheet-loader.ts`
  (lazy; drag, snap points), `install.ts` («Install app», iOS hint), `pull-to-refresh.ts` (installed app on feed
  pages only), `view-transitions.ts` (back-direction type), `service-worker.ts`.
- **Safe areas**: `viewport-fit=cover` + `--safe-*` tokens (`@sotf/ui/tokens.css`); anything pinned to the top uses
  `top-(--sticky-top)` (it follows the bar when it hides), anything pinned to the bottom `bottom-(--bottom-chrome)`.
- **PWA**: `public/manifest.webmanifest` is generated (`pnpm gen`, from `lib/tooling/gen.ts`); `public/sw.js`
  answers navigations only when the network fails (offline page `/offline` per locale, install guide), caches
  `/_astro`, `/brand`, `/art`, `/pwa`; bump `VERSION` there to drop caches. iOS splash screens and the art
  derivatives are generated by `node apps/web/scripts/build-pwa-art.mjs` (reads `ART_SRC`, default
  `/root/sotf-mods/art-src`) into `public/pwa` and `public/art`.
- **Testing the app mode locally**: `matchMedia('(display-mode: standalone)')` is what turns on pull-to-refresh and
  hides the install row; override it in an init script (see `src/lib/client/shell.test.ts` for the pure parts).

## Tests

```bash
pnpm --filter @sotf/web test                  # unit (redirect table, cache, SEO, scripts…)
pnpm --filter @sotf/web e2e --grep @platform  # Playwright against the build (port 47522)
pnpm --filter @sotf/web lhci                  # Lighthouse CI behind a brotli "edge" proxy
```
