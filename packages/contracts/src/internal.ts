/**
 * Internal and health endpoints (PLAN §5.2 "Internos", §2.7 purge flow). Implemented by WP-20
 * (health, purge) and WP-22 (web cache invalidation). Internal routes are reachable only on the
 * Coolify network and require `X-Internal-Auth`.
 */
import { z } from 'zod';
import { type CacheTag, cache, isCacheTag, MAX_TAGS_PER_PURGE } from './cache.ts';
import { IsoDateTime } from './common.ts';
import { dto } from './dto.ts';
import { defineEndpoint } from './endpoint.ts';

export const CacheTagSchema = z
  .string()
  .max(120)
  .refine(isCacheTag, 'not a valid cache tag')
  .transform((tag) => tag as CacheTag);

export const PurgeBody = dto(
  'PurgeBody',
  z.strictObject({
    tags: z.array(CacheTagSchema).min(1).max(100),
    reason: z.string().trim().min(1).max(120).describe('e.g. `deploy:<sha>` or `event:mod.updated`'),
  }),
  {
    description: 'Tags to purge from the web LRU, Cloudflare and the API LRU.',
    examples: [{ tags: ['html'], reason: 'deploy:5504773' }],
  },
);

export const PurgeAcceptedDTO = dto(
  'PurgeAcceptedDTO',
  z.object({ queued: z.literal(true), tags: z.array(z.string()), batches: z.number().int().min(1) }),
  {
    description: `Purge enqueued (debounced 20 s; ≤ ${MAX_TAGS_PER_PURGE} tags per Cloudflare call).`,
    examples: [{ queued: true, tags: ['html'], batches: 1 }],
  },
);

/** Body of the web's `POST /_internal/cache/invalidate` (called by the `cdn.purge` job). */
export const WebCacheInvalidateBody = dto(
  'WebCacheInvalidateBody',
  z.strictObject({ tags: z.array(CacheTagSchema).min(1).max(100) }),
  {
    description: 'Tags to evict from the web route LRU.',
    examples: [{ tags: ['mod:20', 'home'] }],
  },
);

export const HealthDTO = dto(
  'HealthDTO',
  z.object({
    status: z.literal('ok'),
    service: z.enum(['api', 'worker', 'web']),
    version: z.string(),
    uptimeSeconds: z.number().nonnegative(),
  }),
  { description: 'Liveness.', examples: [{ status: 'ok', service: 'api', version: '5504773', uptimeSeconds: 3600 }] },
);

export const ReadinessDTO = dto(
  'ReadinessDTO',
  z.object({
    status: z.enum(['ok', 'degraded']),
    checks: z.object({ db: z.boolean(), pgboss: z.boolean(), listen: z.boolean() }),
    checkedAt: IsoDateTime,
  }),
  {
    description: 'Readiness (DB + pg-boss + LISTEN connection). 503 when degraded.',
    examples: [
      { status: 'ok', checks: { db: true, pgboss: true, listen: true }, checkedAt: '2026-09-29T10:00:00.000Z' },
    ],
  },
);

export const internalEndpoints = {
  healthz: defineEndpoint({
    id: 'internal.healthz',
    owner: 'WP-20',
    method: 'GET',
    path: '/healthz',
    summary: 'Liveness probe',
    auth: 'public',
    response: HealthDTO,
    cache: cache.noStore,
  }),
  readyz: defineEndpoint({
    id: 'internal.readyz',
    owner: 'WP-20',
    method: 'GET',
    path: '/readyz',
    summary: 'Readiness probe',
    auth: 'public',
    response: ReadinessDTO,
    errors: ['UNAVAILABLE'],
    cache: cache.noStore,
  }),
  purge: defineEndpoint({
    id: 'internal.purge',
    owner: 'WP-20',
    method: 'POST',
    path: '/internal/cdn/purge',
    summary: 'Enqueue a CDN purge (after deploys and from core events)',
    auth: 'internal',
    body: PurgeBody,
    status: 202,
    response: PurgeAcceptedDTO,
    errors: ['FORBIDDEN'],
    cache: cache.noStore,
  }),
} as const;
