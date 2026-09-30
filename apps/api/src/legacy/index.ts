/**
 * The legacy `/api/*` compatibility layer (PLAN §5.5, WP-32), served on `api.sotf-mods.com/api/*`
 * and on `sotf-mods.com/api/*` by the same process (the handlers never look at the host):
 *
 * - Tier 1, byte-compatible: `GET /api/mods`, `/api/mods/:mod_id`, `/api/mods/:mod_id/check` and
 *   KelvinSeek (`/api/kelvinseek/prompt`, `/api/kelvinseek/clear`);
 * - Tier 2, frozen and deprecated (`Deprecation`, `Sunset`, `Link`): slug detail, find, featured,
 *   stats, categories, users, comments and download stats (the two download aliases belong to
 *   `legacy/downloads/`, WP-31);
 * - Tier 3: 410 with the legacy envelope (`retired.ts`);
 * - User-Agent/Origin of every call aggregated per day (`usage.ts`).
 *
 * CORS (`*` without credentials, preflight 204 cached 24 h), cache headers and the legacy error
 * envelope come from the platform, driven by the endpoint contracts of `@sotf/contracts/legacy`.
 */
import { LEGACY_SUNSET_DATE } from '@sotf/contracts/legacy';
import { type Clock, systemClock } from '@sotf/core';
import { type ApiModule, defineModule } from '../lib/define-module.ts';
import { createLegacyContext } from './context.ts';
import { type KelvinSeekRouteOptions, registerKelvinSeekRoutes } from './kelvinseek.ts';
import { registerModRoutes } from './mods.ts';
import { registerRetiredRoutes } from './retired.ts';
import type { LegacyCachedBody } from './route.ts';
import { registerSiteRoutes } from './site.ts';
import { type LegacyUsageOptions, setupLegacyUsage } from './usage.ts';

/**
 * `Sunset` of the Tier 2 routes: T0 + 12 months (PLAN §5.5), `LEGACY_SUNSET_DATE` of
 * `@sotf/contracts/legacy` (also shown on /developers). `LEGACY_SUNSET_AT` in the API env moves it
 * without a release once the owner fixes T0 (it is informative for clients).
 */
export const LEGACY_SUNSET = new Date(`${LEGACY_SUNSET_DATE}T00:00:00.000Z`);

export interface LegacyModuleOptions {
  clock?: Clock;
  /** TTL of the response LRU in ms (default 15 s; 0 disables it). */
  cacheTtlMs?: number;
  kelvinseek?: KelvinSeekRouteOptions;
  usage?: LegacyUsageOptions;
  sunset?: Date;
}

export function createLegacyModule(options: LegacyModuleOptions = {}): ApiModule {
  return defineModule({
    name: 'legacy',
    async register(m) {
      const clock = options.clock ?? systemClock;
      const ttl = options.cacheTtlMs ?? 15_000;
      const cache =
        ttl > 0
          ? m.platform.caches.create<LegacyCachedBody>({ name: 'legacy-responses', max: 2_000, ttlMs: ttl })
          : null;
      setupLegacyUsage(m.app, m.platform, { clock, ...options.usage });
      const sunset = options.sunset ?? m.platform.env.LEGACY_SUNSET_AT ?? LEGACY_SUNSET;
      const ctx = createLegacyContext(m.app, m.platform, clock, { sunset, cache });
      registerModRoutes(ctx);
      registerSiteRoutes(ctx);
      registerKelvinSeekRoutes(ctx, options.kelvinseek);
      await registerRetiredRoutes(m.app);
    },
  });
}

export default createLegacyModule();
