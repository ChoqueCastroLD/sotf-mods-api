# @sotf/web platform (WP-22)

Astro 7 SSR (`@astrojs/node` standalone) for the public site and the console shell. The web never
talks to the database: SSR calls the API on `INTERNAL_API_URL` (`lib/api.ts`).

```bash
pnpm --filter @sotf/web dev        # http://127.0.0.1:47321 (no route cache, no CSP in dev)
pnpm --filter @sotf/web build      # dist/server/entry.mjs + dist/client
pnpm --filter @sotf/web start      # production server (PORT/HOST)
pnpm --filter @sotf/web test       # unit tests (redirect table, cache, SEO, scripts…)
pnpm --filter @sotf/web e2e --grep @platform   # Playwright against the build (port 47522)
pnpm --filter @sotf/web lhci       # Lighthouse CI on the 404 behind a brotli "edge" proxy
pnpm --filter @sotf/web gen        # console route tree, brand assets in public/, web manifest
```

## Request pipeline

1. **Server entry** (`lib/server/fetch.ts`, Astro `fetchFile`): trailing slash, `/en/…` and
   prefixed unlocalized paths → 301; `/{locale}/rest` is rewritten to `/rest` with the locale in
   the internal `x-sotf-locale` header (client values are always dropped: every `x-sotf-*` request
   header is internal). After Astro: `x-sotf-cache-tags` → `Cache-Tag`, baseline security headers.
2. **Route cache** (`lib/cache/cloudflare-tags.ts`, `cache.provider`): origin LRU (≈ 500 entries,
   TTL = edge TTL, keyed by host + locale + path + sorted query, ETag/304) and the header mapping.
3. **Middleware** (`middleware/index.ts`): `locals.locale/pagePath/requestId`, legacy redirects and
   410s (`middleware/redirects.ts`), render inside `withLocale()`, response hygiene
   (`lib/cache/response.ts`: cookies ⇒ `private, no-store`; ≥ 500 ⇒ `no-store`).

### i18n spike (PLAN §4.1) — result

Plan A works with one adjustment. Astro matches routes *before* middleware, so a middleware
`rewrite()` of `/es/x` only runs through the 404 error path, which bypasses the route cache (no
LRU, no `Astro.cache`). The prefix is therefore stripped in the server entry, before routing;
Astro keeps `i18n.routing: 'manual'`. Verified: `/es/page` renders the page with `lang="es"`,
Spanish messages, `locale:es` tag and its own LRU entry; 120 concurrent mixed-locale requests
never leak a locale. Consequences for page WPs:

- read the locale from `Astro.locals.locale` (never `Astro.currentLocale`) and build links with
  `href(path, locale)` from `lib/i18n.ts`;
- localized pages must be SSR (edge TTL 1 day for guide-like pages): a prerendered route cannot be
  reached through the rewrite. If a page must be prerendered per locale, use plan B for it
  (`pages/[locale]/…` with `getStaticPaths`).

## Pages: what to call

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';          // or PageLayout (breadcrumbs)
import { setPageCache } from '../lib/cache/page.ts';
import { pageCache } from '../lib/cache/policy.ts';
setPageCache(Astro, pageCache.mod(mod.id, mod.userId));      // E(900) mod:{id} user:{id} html locale:{lc}
---
<BaseLayout template="mod" seo={{ title, description, og: { image, imageAlt } }} jsonLd={[…]}
            entity={{ type: 'mod', id: mod.id }} preloadImage={…}>
```

- `setPageCache(Astro, false)` for anything user-specific. Nothing is edge-cached without a policy.
- `SeoHead` renders canonical (self, per locale), 13 hreflang + `x-default`, OG/Twitter,
  `theme-color`, robots (`noindex` automatically outside `SITE_ENV=production`) and JSON-LD
  (`lib/seo/jsonld.ts`, `schema-dts`, safely serialized).
- `Picture.astro`: AVIF/WebP sources from `ImageDTO`, explicit size, `priority` for the LCP.
- Ads: render `<ins class="adsbygoogle" data-ad-slot>` inside a reserved-height slot (WP-25
  `AdSlot`); `scripts/ads.ts` loads AdSense only for guests, after load + idle + CMP, near the
  viewport. Pages where ads are forbidden simply render no slot.
- Analytics: `track(kind, { entityType, entityId })` from `scripts/beacon.ts`.

## Client scripts (`lib/client/boot.ts`, ≈ 5 KB br)

Immediate: `theme` (enhance ThemeToggle/LanguageSwitcher/banners), cmdk shortcuts (stub),
mobile chrome, relogin banner, `moon`, `view-transitions`, `account-hint`. Idle/lazy:
`beacon` + web-vitals, `seasonal` (December snow), `lang-suggest`, `ads` + `consent`.
Inline head scripts (theme, dismissed banners, legacy-token cleanup, Speculation Rules) are hashed
in the CSP placeholder (`lib/security/csp.ts`, finalized by WP-93).

## Internal endpoints

- `GET /healthz` — liveness (`HealthDTO`).
- `POST /_internal/cache/invalidate {tags}` — `X-Internal-Auth`; evicts the origin LRU (injected
  route: Astro ignores `_` files in `pages/`).
- Post-deploy purge: on boot (not in development) the web asks `POST api:/internal/cdn/purge
  {tags:['html'], reason:'deploy:<RELEASE_SHA|SOURCE_COMMIT>'}` with retries.

## Stubs owned by later WPs

`components/account/HeaderAccount.astro` (WP-44), `islands/signals/Bell.tsx` (WP-81),
`islands/cmdk/Trigger.ts` (WP-72), `console/routes/{__root,index}.tsx` (WP-34),
`layouts/ConsoleShell.astro` is ready for WP-34's `[...path].astro` shells.
