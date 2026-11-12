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
import { secretsEqual } from './context.ts';

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

  /** Whether a bucket's limit was overridden (tests raise them; network caps follow). */
  isOverridden(bucket: RateLimitBucket): boolean {
    return this.#overrides[bucket] !== undefined;
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

/**
 * Anonymous reads per network on top of the per-IP buckets (2026-11: a botnet of ~2,000
 * addresses in a few /16s stays under any per-IP limit). Generous: a whole /16 of a large ISP
 * full of players checking updates stays far below.
 */
export const NETWORK_READ_LIMITS = {
  /** IPv4 /24, IPv6 /48. */
  network: { max: 1200, window: '1 minute' },
  /** IPv4 /16, IPv6 /32. */
  wide: { max: 4000, window: '1 minute' },
} as const satisfies Record<string, BucketLimit>;

/**
 * Sign-in and sign-up per network (2026-11): with Turnstile keys in test mode, only rate limits
 * stand between a botnet and credential guessing or mass sign-ups spread over thousands of
 * addresses. Far above what the people of one network do on this site.
 */
export const NETWORK_AUTH_LIMITS = {
  login: {
    network: { max: 60, window: '1 hour' },
    wide: { max: 300, window: '1 hour' },
  },
  register: {
    network: { max: 10, window: '1 day' },
    wide: { max: 40, window: '1 day' },
  },
} as const satisfies Record<string, { network: BucketLimit; wide: BucketLimit }>;

/** The /24 (/48) and /16 (/32) an address belongs to, or null when it is not an IP. */
export function networksOf(ip: string): { network: string; wide: string } | null {
  // Loopback and private addresses (tests, the internal network) never share a public network.
  if (/^(?:::ffff:)?(?:127\.|10\.|192\.168\.|172\.(?:1[6-9]|2\d|3[01])\.)|^(?:::1$|f[cd][0-9a-f]{2}:)/i.test(ip))
    return null;
  const v4 = /^(?:::ffff:)?(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.\d{1,3}$/.exec(ip);
  if (v4) return { network: `${v4[1]}.${v4[2]}.${v4[3]}.0/24`, wide: `${v4[1]}.${v4[2]}.0.0/16` };
  if (!ip.includes(':')) return null;
  const [head = '', tail] = ip.split('::');
  const left = head ? head.split(':') : [];
  const right = tail ? tail.split(':') : [];
  if (tail === undefined && left.length !== 8) return null;
  const groups = [...left, ...Array(Math.max(0, 8 - left.length - right.length)).fill('0'), ...right].map((group) =>
    group.toLowerCase().replace(/^0+(?=.)/, ''),
  );
  return { network: `${groups.slice(0, 3).join(':')}::/48`, wide: `${groups.slice(0, 2).join(':')}::/32` };
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

export async function setupRateLimit(
  app: FastifyInstance,
  overrides: RateLimitOverrides = {},
  internalSecret?: string,
): Promise<RateLimiter> {
  await app.register(rateLimit, { global: false, cache: 50_000 });
  const limiter = new RateLimiter(app, overrides);
  app.addHook('onRequest', async (request) => {
    // Unknown routes (404) are not counted: the not-found handler answers cheaply.
    if (!request.routeOptions.url) return;
    // Server-side rendering of the web: every visitor's page comes from the web container's single
    // IP, so its calls (authenticated with the shared internal secret) are never rate limited.
    if (internalSecret) {
      const given = request.headers['x-internal-auth'];
      if (secretsEqual(Array.isArray(given) ? given[0] : given, internalSecret)) return;
    }
    const bucket = bucketFor(request);
    if (!bucket) return;
    await limiter.enforce(bucket, request);
    if ((bucket === 'login' || bucket === 'register') && !limiter.isOverridden(bucket)) {
      const networks = networksOf(request.clientIp);
      if (networks) {
        const limits = NETWORK_AUTH_LIMITS[bucket];
        await limiter.consume(`${bucket}-net`, networks.network, limits.network);
        await limiter.consume(`${bucket}-wide`, networks.wide, limits.wide);
      }
    }
    if ((bucket === 'anonymousRead' || bucket === 'legacyRead') && !request.actor && !limiter.isOverridden(bucket)) {
      const networks = networksOf(request.clientIp);
      if (networks) {
        await limiter.consume('read-net', networks.network, NETWORK_READ_LIMITS.network);
        await limiter.consume('read-wide', networks.wide, NETWORK_READ_LIMITS.wide);
      }
    }
  });
  return limiter;
}
