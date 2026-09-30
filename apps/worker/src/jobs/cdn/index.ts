/**
 * CDN purge job (WP-61, PLAN §2.7 «Flujo de purga»).
 *
 * `cdn.purge` jobs arrive debounced (20 s per tag set, ≤ 30 tags) from the `cdn-purge-on-event`
 * subscriber (platform group) and from `POST /internal/cdn/purge` (deploys). Each job empties the
 * web origin LRU, purges Cloudflare by tag, NOTIFYs `cache` for the API LRUs and, for content
 * changes, enqueues `indexnow.ping` (`runCdnPurge` of core).
 *
 * One job at a time per process and a process-wide throttle keep Cloudflare at ≤ 1 purge call
 * every 20 s. Steps without configuration are skipped: no `WEB_INTERNAL_URL` (local development
 * without the web), no `CF_ZONE_ID`/`CF_API_TOKEN` (everything but production), no IndexNow key or
 * `SITE_ENV` ≠ production (never announce staging URLs).
 */
import { type CdnPurgeDeps, PurgeThrottle, runCdnPurge } from '@sotf/core/cdn/index';
import { isValidIndexNowKey } from '@sotf/core/seo/index';
import { defineJob, defineJobGroup } from '../../define-job.ts';
import type { WorkerEnv } from '../../env.ts';

const throttle = new PurgeThrottle();

/** Purge dependencies from the worker environment (exported for tests). */
export function cdnPurgeDeps(source: WorkerEnv): Omit<CdnPurgeDeps, 'signal'> {
  return {
    web: source.WEB_INTERNAL_URL ? { webUrl: source.WEB_INTERNAL_URL, secret: source.INTERNAL_SECRET } : null,
    cloudflare:
      source.CF_ZONE_ID && source.CF_API_TOKEN ? { zoneId: source.CF_ZONE_ID, apiToken: source.CF_API_TOKEN } : null,
    throttle,
    indexNow: source.SITE_ENV === 'production' && isValidIndexNowKey(source.INDEXNOW_KEY),
  };
}

export default defineJobGroup({
  name: 'cdn',
  jobs: [
    defineJob({
      queue: 'cdn.purge',
      options: { localConcurrency: 1 },
      handler: async ({ tags, reason }, { ctx, job, services }) =>
        runCdnPurge(ctx, { ...cdnPurgeDeps(services.env), signal: job.signal }, { tags, reason }),
    }),
  ],
});
