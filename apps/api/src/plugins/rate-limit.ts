/**
 * Named rate-limit buckets (PLAN §5.1 "Límites de uso", `RATE_LIMITS` of @sotf/contracts) on top of
 * `@fastify/rate-limit` (in-memory store, one store per bucket so every route of a bucket shares
 * the counter).
 *
 * - Key: `ip` = CF-Connecting-IP, `user` = the actor's id (the IP for guests), `chat` =
 *   `chat_id` + IP (KelvinSeek).
 * - Which bucket: the contract's `rateLimit`; otherwise public `GET /api/v2` → `anonymousRead`,
 *   legacy `GET /api/*` → `legacyRead`, authenticated writes → `userWrite`.
 * - Blocking buckets answer 429 `RATE_LIMITED` with `Retry-After`. **Soft** buckets (`downloads`:
 *   never 429; `beacon`: dropped silently) only set `request.overSoftLimit` and let the handler
 *   decide (redirect without counting, 204 without storing).
 * - `consume(name, key, max, window)` offers the same store to domain rules that need custom keys
 *   (10 logins/hour per account, 3 resets/hour per email…).
 */

import rateLimit from '@fastify/rate-limit';
import { RATE_LIMITS, type RateLimitBucket } from '@sotf/contracts';
import { errors } from '@sotf/core';
import type { FastifyInstance, FastifyRequest } from 'fastify';
import { surfaceOf } from '../lib/surface.ts';

export interface BucketLimit {
  max: number;
  /** Window in ms or as text (`'1 minute'`). */
  window: number | string;
}

export type RateLimitOverrides = Partial<Record<RateLimitBucket, BucketLimit>>;

/** Buckets that never reject: over the limit the request is served but flagged. */
export const SOFT_BUCKETS: ReadonlySet<RateLimitBucket> = new Set(['downloads', 'beacon']);

/** `isAllowed` means "in the allow list"; `isExceeded` is what tells an over-limit request. */
type Check = (
  req: FastifyRequest,
) => Promise<{ isAllowed: true } | { isAllowed: false; isExceeded: boolean; ttlInSeconds: number }>;

function exceeded(result: Awaited<ReturnType<Check>>): number | null {
  if (result.isAllowed || !result.isExceeded) return null;
  return Math.max(1, result.ttlInSeconds);
}

const CUSTOM_KEY = Symbol('sotf.rateLimitKey');

interface KeyedRequest {
  [CUSTOM_KEY]: string;
  routeOptions: { config: Record<string, never> };
}

export class RateLimiter {
  readonly #app: FastifyInstance;
  readonly #buckets = new Map<RateLimitBucket, Check>();
  readonly #custom = new Map<string, Check>();
  readonly #overrides: RateLimitOverrides;

  constructor(app: FastifyInstance, overrides: RateLimitOverrides = {}) {
    this.#app = app;
    this.#overrides = overrides;
  }

  /** Limit of a bucket (after overrides). */
  limitOf(bucket: RateLimitBucket): BucketLimit {
    const override = this.#overrides[bucket];
    if (override) return override;
    const def = RATE_LIMITS[bucket];
    return { max: def.max, window: def.window };
  }

  #bucket(bucket: RateLimitBucket): Check {
    let check = this.#buckets.get(bucket);
    if (!check) {
      const limit = this.limitOf(bucket);
      const kind = RATE_LIMITS[bucket].key;
      check = this.#app.createRateLimit({
        max: limit.max,
        timeWindow: limit.window,
        keyGenerator: (req) => keyFor(kind, req),
      }) as unknown as Check;
      this.#buckets.set(bucket, check);
    }
    return check;
  }

  /** Counts the request in the bucket; returns the seconds to wait when over the limit. */
  async hit(bucket: RateLimitBucket, request: FastifyRequest): Promise<number | null> {
    return exceeded(await this.#bucket(bucket)(request));
  }

  /** Counts and throws `RATE_LIMITED` (429) when over the limit (soft buckets only flag). */
  async enforce(bucket: RateLimitBucket, request: FastifyRequest): Promise<void> {
    const retryAfter = await this.hit(bucket, request);
    if (retryAfter === null) return;
    if (SOFT_BUCKETS.has(bucket)) {
      request.overSoftLimit = true;
      return;
    }
    throw errors.rateLimited(retryAfter);
  }

  /**
   * Custom counter `name` for an arbitrary key (e.g. an account id or a normalised email). Throws
   * `RATE_LIMITED` when over `max` in `window`.
   */
  async consume(name: string, key: string, limit: BucketLimit): Promise<void> {
    const id = `${name}|${limit.max}|${limit.window}`;
    let check = this.#custom.get(id);
    if (!check) {
      check = this.#app.createRateLimit({
        max: limit.max,
        timeWindow: limit.window,
        keyGenerator: (req) => `${name}:${(req as unknown as KeyedRequest)[CUSTOM_KEY]}`,
      }) as unknown as Check;
      this.#custom.set(id, check);
    }
    const fake: KeyedRequest = { [CUSTOM_KEY]: key, routeOptions: { config: {} } };
    const retryAfter = exceeded(await check(fake as unknown as FastifyRequest));
    if (retryAfter !== null) throw errors.rateLimited(retryAfter);
  }
}

function keyFor(kind: 'ip' | 'user' | 'chat', req: FastifyRequest): string {
  if (kind === 'user') return req.actor ? `u:${req.actor.userId}` : `ip:${req.clientIp}`;
  if (kind === 'chat') {
    const chat = (req.query as Record<string, unknown> | undefined)?.chat_id;
    return `chat:${typeof chat === 'string' ? chat.slice(0, 200) : ''}:${req.clientIp}`;
  }
  return `ip:${req.clientIp}`;
}

/** The bucket that applies to a request (null = none). */
export function bucketFor(request: FastifyRequest): RateLimitBucket | null {
  const config = request.routeOptions.config;
  if (config.bucket !== undefined) return config.bucket;
  const endpoint = config.endpoint;
  if (endpoint?.rateLimit) return endpoint.rateLimit;
  const surface = surfaceOf(request.url);
  const method = request.method;
  const safe = method === 'GET' || method === 'HEAD';
  if (surface === 'internal' || endpoint?.auth === 'internal') return null;
  if (safe && surface === 'v2') return 'anonymousRead';
  if (safe && surface === 'legacy') return 'legacyRead';
  if (!safe && endpoint && endpoint.auth !== 'public') return 'userWrite';
  return null;
}

export async function setupRateLimit(app: FastifyInstance, overrides: RateLimitOverrides = {}): Promise<RateLimiter> {
  await app.register(rateLimit, { global: false, cache: 50_000 });
  const limiter = new RateLimiter(app, overrides);
  app.addHook('onRequest', async (request) => {
    // Unknown routes (404) are not counted: the not-found handler answers cheaply.
    if (!request.routeOptions.url) return;
    const bucket = bucketFor(request);
    if (bucket) await limiter.enforce(bucket, request);
  });
  return limiter;
}
