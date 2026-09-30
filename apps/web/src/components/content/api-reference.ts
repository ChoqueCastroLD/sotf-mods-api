/**
 * Tables of `/developers` generated from `@sotf/contracts` (T0-32, PLAN §5.1, §5.5): the public
 * v2 read endpoints, the rate limits a third-party client meets, and the legacy `/api/*` surface
 * by tier (byte-compatible, frozen + deprecated with `Sunset`, retired → 410). Being generated,
 * they always match what the API registers.
 */
import { allEndpoints, type ContractDomain } from '@sotf/contracts/contracts';
import { API_V2_PREFIX, RATE_LIMITS, type RateLimitBucket } from '@sotf/contracts/endpoint';
import { ERROR_DEFINITIONS, type ErrorCode, problemType } from '@sotf/contracts/error-codes';
import { LEGACY_DEVIATIONS, LEGACY_RETIRED_ROUTES, legacyEndpoints } from '@sotf/contracts/legacy';

export interface EndpointRow {
  method: string;
  path: string;
  summary: string;
  deprecated: boolean;
}

export interface EndpointGroupRows {
  domain: ContractDomain;
  rows: EndpointRow[];
}

/** Domains that are not part of the public, anonymous API surface. */
const PRIVATE_DOMAINS: ReadonlySet<ContractDomain> = new Set([
  'admin',
  'internal',
  'legacy',
  'me',
  'studio',
  'uploads',
  'moderation',
]);

/** Public (anonymous) `GET /api/v2/*` endpoints grouped by domain, in declaration order. */
export function publicReadEndpoints(): EndpointGroupRows[] {
  const groups = new Map<ContractDomain, EndpointRow[]>();
  for (const { domain, endpoint } of allEndpoints()) {
    if (PRIVATE_DOMAINS.has(domain)) continue;
    if (endpoint.auth !== 'public' || endpoint.method !== 'GET' || !endpoint.path.startsWith(API_V2_PREFIX)) continue;
    const rows = groups.get(domain) ?? [];
    rows.push({
      method: endpoint.method,
      path: endpoint.path,
      summary: endpoint.summary,
      deprecated: endpoint.deprecated === true,
    });
    groups.set(domain, rows);
  }
  return [...groups.entries()].map(([domain, rows]) => ({ domain, rows }));
}

/** Buckets a read-only client can hit, in the order shown. */
const PUBLIC_BUCKETS: readonly RateLimitBucket[] = ['anonymousRead', 'legacyRead', 'downloads', 'kelvinseek'];

export interface RateLimitRow {
  bucket: RateLimitBucket;
  max: number;
  window: string;
  key: 'ip' | 'user' | 'chat';
  extra: string | null;
}

export function publicRateLimits(): RateLimitRow[] {
  return PUBLIC_BUCKETS.map((bucket) => {
    const limit: { max: number; window: string; key: 'ip' | 'user' | 'chat'; extra?: string } = RATE_LIMITS[bucket];
    return { bucket, max: limit.max, window: limit.window, key: limit.key, extra: limit.extra ?? null };
  });
}

export interface LegacyTiers {
  /** Byte-compatible routes (RedManager, UpdatesChecker, KelvinSeek). */
  stable: EndpointRow[];
  /** Frozen routes answering with `Deprecation` and `Sunset`. */
  deprecated: EndpointRow[];
  /** Retired routes: every method answers 410. */
  retired: Array<{ method: string; path: string }>;
  deviations: ReadonlyArray<{ id: string; description: string }>;
}

export function legacyTiers(): LegacyTiers {
  const stable: EndpointRow[] = [];
  const deprecated: EndpointRow[] = [];
  for (const endpoint of Object.values(legacyEndpoints)) {
    const row: EndpointRow = {
      method: endpoint.method,
      path: endpoint.path,
      summary: endpoint.summary,
      deprecated: 'deprecated' in endpoint && endpoint.deprecated === true,
    };
    (row.deprecated ? deprecated : stable).push(row);
  }
  return {
    stable,
    deprecated,
    retired: LEGACY_RETIRED_ROUTES.map((route) => ({
      method: route.method === '*' ? 'ANY' : route.method,
      path: route.path,
    })),
    deviations: LEGACY_DEVIATIONS,
  };
}

export interface ErrorCodeRow {
  code: ErrorCode;
  status: number;
  title: string;
  /** Fragment of the problem `type` URI (`not-found`), used as the row's anchor. */
  anchor: string;
}

/**
 * Every problem code with its status and default title. Problem `type` URIs point to
 * `/developers/errors#<code>`; the rows carry the same fragment as their id.
 */
export function errorCodes(): ErrorCodeRow[] {
  return (Object.keys(ERROR_DEFINITIONS) as ErrorCode[]).map((code) => ({
    code,
    status: ERROR_DEFINITIONS[code].status,
    title: ERROR_DEFINITIONS[code].title,
    anchor: problemType(code).split('#')[1] ?? code.toLowerCase(),
  }));
}
