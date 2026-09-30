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
   header is internal). After Astro: `x-sotf-cache-tags` → `Cache-Tag`, security headers (`lib/security/headers.ts`;
   CSP enforcing or report-only per `CSP_MODE`/`SITE_ENV`).
2. **Route cache** (`lib/cache/cloudflare-tags.ts`, `cache.provider`): origin LRU (≈ 500 entries,
   TTL = edge TTL, keyed by host + locale + path + sorted query, ETag/304) and the header mapping.
3. **Middleware** (`middleware/index.ts`): first the Fetch Metadata resource-isolation policy
   (`middleware/security.ts`, WP-93: cross-site writes and subresource loads → 403), then
   `locals.locale/pagePath/requestId`, legacy redirects and
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
- Ads: `components/ads/AdUnit.astro` renders the shared `AdSlot` (reserved height) for a
  placement whose unit id is configured (`PUBLIC_ADSENSE_SLOT_HOME|FEED|MOD_SIDEBAR`, with
  `PUBLIC_ADSENSE_CLIENT`); Explore adds in-feed units after cards 6 and 18 (`lib/ads.ts`).
  `scripts/ads.ts` loads AdSense only for guests, after load + idle + CMP, near the viewport;
  `global.css` hides the boxes for members. Pages where ads are forbidden simply render no slot.
- Domain components: `lib/domain-i18n.ts` makes every `@sotf/ui/domain` component speak the
  request locale (compiled `ui-domain` namespace), configured once by the middleware.
- Analytics: `track(kind, { entityType, entityId })` from `scripts/beacon.ts`.

## Client scripts (`lib/client/boot.ts`, ≈ 5 KB br)

Immediate: `theme` (enhance ThemeToggle/LanguageSwitcher/banners), the Cmd+K trigger
(`islands/cmdk/Trigger.ts`: ⌘K/Ctrl+K, `/`, header search and «Search» tab open the palette, see
`islands/cmdk/README.md`), mobile chrome, relogin banner, `moon`, `view-transitions`,
`account-hint`, the Signals bell and, for members, the account's display preferences
(`scripts/account-settings.ts`). Idle/lazy:
`beacon` + web-vitals, `seasonal` (December snow), `lang-suggest`, `ads` + `consent`.
Inline head scripts (theme, dismissed banners, legacy-token cleanup, Speculation Rules) are hashed
in the CSP placeholder (`lib/security/csp.ts`, finalized by WP-93).

## Internal endpoints

- `GET /healthz` — liveness (`HealthDTO`).
- `POST /_internal/cache/invalidate {tags}` — `X-Internal-Auth`; evicts the origin LRU (injected
  route: Astro ignores `_` files in `pages/`).
- Post-deploy purge: on boot (not in development) the web asks `POST api:/internal/cdn/purge
  {tags:['html'], reason:'deploy:<RELEASE_SHA|SOURCE_COMMIT>'}` with retries.

## Former stubs

The WP-22 placeholders (`HeaderAccount`, the Signals bell, the Cmd+K trigger, the console shells) are real
implementations now; nothing in `lib/` is a stub.
