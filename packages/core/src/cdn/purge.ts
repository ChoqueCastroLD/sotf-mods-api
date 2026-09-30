/**
 * The `cdn.purge` job (PLAN §2.7 «Flujo de purga»). Jobs arrive debounced (20 s per tag set, ≤ 30
 * tags each) from the domain-event subscriber and from `POST /internal/cdn/purge`. For each job:
 *
 * 1. `POST web:/_internal/cache/invalidate {tags}` empties the web's origin LRU;
 * 2. `POST api.cloudflare.com/…/purge_cache {tags}` (≤ 30 tags per call, ≤ 1 call every 20 s);
 * 3. `NOTIFY cache` empties the API LRUs of every process;
 * 4. `indexnow.ping` with the canonical URLs of every locale of the affected pages (only for
 *    content changes, see `seo/paths.ts`).
 *
 * The web goes first so the edge, once purged, refetches fresh HTML. Steps 1–2 throw on failure
 * (pg-boss retries the whole job; every step is idempotent). Unconfigured steps (development: no
 * `WEB_INTERNAL_URL`, no Cloudflare credentials) are skipped and reported.
 */
import { LOCALES } from '@sotf/contracts/common';
import { type CacheTag, chunkTags, normalizeTags } from '../kernel/cache-tags.ts';
import type { Ctx } from '../kernel/context.ts';
import { publishCacheInvalidation } from '../kernel/notify.ts';
import { indexNowSubjects, pathsForSubjects } from '../seo/paths.ts';
import { type CloudflareConfig, type HttpFetch, type PurgeThrottle, purgeCloudflareTags } from './cloudflare.ts';
import { invalidateWebCache, type WebInvalidateConfig } from './web.ts';

/** `indexnow.ping` accepts ≤ 10 000 paths per job. */
const MAX_PATHS_PER_PING = 10_000;

export interface CdnPurgeDeps {
  /** Web origin LRU (null: skipped, e.g. development without `WEB_INTERNAL_URL`). */
  web: WebInvalidateConfig | null;
  /** Cloudflare zone and token (null: skipped outside production). */
  cloudflare: CloudflareConfig | null;
  /** Shared by every purge of the process: spaces the Cloudflare calls. */
  throttle: PurgeThrottle;
  /** Enqueue `indexnow.ping` (only production has a key; false skips step 4). */
  indexNow: boolean;
  fetch?: HttpFetch;
  signal?: AbortSignal;
}

export type StepState = 'done' | 'skipped';

export interface CdnPurgeReport {
  tags: CacheTag[];
  reason: string;
  web: StepState;
  cloudflare: StepState;
  cloudflareCalls: number;
  api: StepState;
  indexNowPaths: number;
}

/** The URL paths of every locale (`/x`, `/es/x`, …) of locale-less paths. */
export function withAllLocales(paths: readonly string[]): string[] {
  const out: string[] = [];
  for (const locale of LOCALES) {
    for (const path of paths) {
      if (locale === 'en') out.push(path);
      else out.push(`/${locale}${path === '/' ? '' : path}`);
    }
  }
  return out;
}

export async function runCdnPurge(
  ctx: Ctx,
  deps: CdnPurgeDeps,
  input: { tags: readonly string[]; reason: string },
): Promise<CdnPurgeReport> {
  const tags = normalizeTags(input.tags);
  const report: CdnPurgeReport = {
    tags,
    reason: input.reason,
    web: 'skipped',
    cloudflare: 'skipped',
    cloudflareCalls: 0,
    api: 'skipped',
    indexNowPaths: 0,
  };
  if (tags.length === 0) return report;
  const io = { ...(deps.fetch ? { fetch: deps.fetch } : {}), ...(deps.signal ? { signal: deps.signal } : {}) };

  // 1. Web origin LRU.
  if (deps.web) {
    await invalidateWebCache(deps.web, tags, io);
    report.web = 'done';
  }

  // 2. Cloudflare edge, ≤ 30 tags per call, spaced by the throttle.
  if (deps.cloudflare) {
    for (const batch of chunkTags(tags)) {
      await deps.throttle.wait(deps.signal);
      await purgeCloudflareTags(deps.cloudflare, batch, io);
      report.cloudflareCalls++;
    }
    report.cloudflare = 'done';
  }

  // 3. API LRUs (every process LISTENs on `cache`).
  await publishCacheInvalidation(ctx.db, tags);
  report.api = 'done';

  // 4. IndexNow for content changes.
  if (deps.indexNow) {
    const paths = await pathsForSubjects(ctx.db, indexNowSubjects(tags, input.reason));
    if (paths.length > 0) {
      const all = withAllLocales(paths);
      for (let i = 0; i < all.length; i += MAX_PATHS_PER_PING) {
        await ctx.jobs.enqueue('indexnow.ping', { paths: all.slice(i, i + MAX_PATHS_PER_PING) });
      }
      report.indexNowPaths = all.length;
    }
  }

  ctx.log.info(report, 'cdn purge done');
  return report;
}
