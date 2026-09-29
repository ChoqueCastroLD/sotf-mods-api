/**
 * Legacy API `/api/*` (PLAN §5.5, research/01 §2). Byte-compatible serializers live in
 * `apps/api/src/legacy/**` (WP-32); this module is the contract they are tested against:
 *
 * - the Zod schemas generated from the 38 golden fixtures (`legacy.gen.ts`), strict and with the
 *   exact key order, plus `assertKeyOrder` to enforce that order at runtime;
 * - the conventions of the legacy layer (envelopes, CORS, cache, deprecation, query parsing);
 * - the endpoint contracts of Tier 1 (byte-compatible) and Tier 2 (frozen, deprecated) routes and
 *   the list of Tier 3 routes answered with 410.
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import { dto } from './dto.ts';
import { defineEndpoint } from './endpoint.ts';
import {
  LegacyCategoriesResponse,
  LegacyCheckResponse,
  LegacyCommentsResponse,
  LegacyDownloadStatsResponse,
  type LegacyErrorResponse,
  LegacyFeaturedBuildsResponse,
  LegacyFeaturedModsResponse,
  type LegacyListMeta,
  LegacyModDetailResponse,
  LegacyModFindResponse,
  LegacyModListResponse,
  LegacyStatsResponse,
  LegacyUserResponse,
  LegacyUserStatsResponse,
} from './legacy.gen.ts';

export * from './legacy.gen.ts';

/** Name used by PLAN §5.4 for the `/check` payload. */
export { LegacyCheckResponse as LegacyCheck } from './legacy.gen.ts';

// -----------------------------------------------------------------------------------------------
// Key order
// -----------------------------------------------------------------------------------------------

export interface KeyOrderIssue {
  /** JSONPath-like location (`$.data[0].user`). */
  path: string;
  expected: string[];
  actual: string[];
}

type AnyDef = { type: string } & Record<string, unknown>;

function defOf(schema: z.ZodType): AnyDef {
  return (schema as unknown as { _zod: { def: AnyDef } })._zod.def;
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/**
 * Lists every object whose keys are not in the order declared by `schema` (recursively through
 * nullable/optional wrappers, arrays, unions, tuples and records). Keys the schema does not know
 * are ignored here (strict parsing reports them).
 */
export function keyOrderIssues(schema: z.ZodType, value: unknown, path = '$'): KeyOrderIssue[] {
  const def = defOf(schema);
  switch (def.type) {
    case 'nullable':
    case 'optional':
    case 'default':
    case 'prefault':
    case 'readonly':
    case 'nonoptional':
    case 'catch':
      return value === null || value === undefined ? [] : keyOrderIssues(def.innerType as z.ZodType, value, path);
    case 'pipe':
      return keyOrderIssues(def.in as z.ZodType, value, path);
    case 'lazy':
      return keyOrderIssues((def.getter as () => z.ZodType)(), value, path);
    case 'object': {
      if (!isPlainObject(value)) return [];
      const shape = def.shape as Record<string, z.ZodType>;
      const known = Object.keys(shape);
      const actual = Object.keys(value).filter((key) => key in shape);
      const expected = known.filter((key) => key in value);
      const issues: KeyOrderIssue[] = [];
      if (actual.join('\u0000') !== expected.join('\u0000')) issues.push({ path, expected, actual });
      for (const key of expected) {
        const child = shape[key];
        if (child) issues.push(...keyOrderIssues(child, value[key], `${path}.${key}`));
      }
      return issues;
    }
    case 'array':
      if (!Array.isArray(value)) return [];
      return value.flatMap((item, i) => keyOrderIssues(def.element as z.ZodType, item, `${path}[${i}]`));
    case 'tuple': {
      if (!Array.isArray(value)) return [];
      const items = def.items as z.ZodType[];
      return items.flatMap((item, i) => keyOrderIssues(item, value[i], `${path}[${i}]`));
    }
    case 'record':
      if (!isPlainObject(value)) return [];
      return Object.entries(value).flatMap(([key, v]) =>
        keyOrderIssues(def.valueType as z.ZodType, v, `${path}.${key}`),
      );
    case 'union': {
      const options = def.options as z.ZodType[];
      const match = options.find((option) => option.safeParse(value).success);
      return match ? keyOrderIssues(match, value, path) : [];
    }
    default:
      return [];
  }
}

export class KeyOrderError extends Error {
  readonly issues: KeyOrderIssue[];
  constructor(issues: KeyOrderIssue[]) {
    const first = issues[0];
    super(
      first
        ? `key order differs at ${first.path}: expected [${first.expected.join(', ')}], got [${first.actual.join(', ')}]` +
            (issues.length > 1 ? ` (+${issues.length - 1} more)` : '')
        : 'key order differs',
    );
    this.name = 'KeyOrderError';
    this.issues = issues;
  }
}

/** Throws `KeyOrderError` when any object in `value` does not follow the schema key order. */
export function assertKeyOrder(schema: z.ZodType, value: unknown): void {
  const issues = keyOrderIssues(schema, value);
  if (issues.length > 0) throw new KeyOrderError(issues);
}

/**
 * Strict legacy validation: schema (types, nullability, no extra keys) **and** key order.
 * Returns the parsed data or the list of problems.
 */
export function validateLegacy<S extends z.ZodType>(
  schema: S,
  value: unknown,
): { success: true; data: z.output<S> } | { success: false; zodIssues: z.core.$ZodIssue[]; keyOrder: KeyOrderIssue[] } {
  const parsed = schema.safeParse(value);
  const keyOrder = keyOrderIssues(schema, value);
  if (parsed.success && keyOrder.length === 0) return { success: true, data: parsed.data };
  return { success: false, zodIssues: parsed.success ? [] : parsed.error.issues, keyOrder };
}

/** Deep copy of `value` with object keys re-ordered as declared by `schema` (unknown keys last). */
export function orderKeys(schema: z.ZodType, value: unknown): unknown {
  const def = defOf(schema);
  switch (def.type) {
    case 'nullable':
    case 'optional':
    case 'default':
    case 'prefault':
    case 'readonly':
    case 'nonoptional':
    case 'catch':
      return value === null || value === undefined ? value : orderKeys(def.innerType as z.ZodType, value);
    case 'pipe':
      return orderKeys(def.in as z.ZodType, value);
    case 'lazy':
      return orderKeys((def.getter as () => z.ZodType)(), value);
    case 'object': {
      if (!isPlainObject(value)) return value;
      const shape = def.shape as Record<string, z.ZodType>;
      const out: Record<string, unknown> = {};
      for (const key of Object.keys(shape)) {
        const child = shape[key];
        if (key in value && child) out[key] = orderKeys(child, value[key]);
      }
      for (const key of Object.keys(value)) if (!(key in out)) out[key] = value[key];
      return out;
    }
    case 'array':
      return Array.isArray(value) ? value.map((item) => orderKeys(def.element as z.ZodType, item)) : value;
    case 'union': {
      const match = (def.options as z.ZodType[]).find((option) => option.safeParse(value).success);
      return match ? orderKeys(match, value) : value;
    }
    default:
      return value;
  }
}

// -----------------------------------------------------------------------------------------------
// Conventions of the legacy layer (PLAN §5.5 "Convenciones globales")
// -----------------------------------------------------------------------------------------------

/** `Content-Type` of legacy JSON responses (no charset, as today). */
export const LEGACY_JSON_CONTENT_TYPE = 'application/json';
/** `Content-Type` of KelvinSeek responses. */
export const LEGACY_TEXT_CONTENT_TYPE = 'text/plain;charset=utf-8';

export const LEGACY_ERROR_CODES = ['NOT_FOUND', 'VALIDATION', 'UNKNOWN', 'GONE'] as const;
export type LegacyErrorCode = (typeof LEGACY_ERROR_CODES)[number];

/** Literal message of every legacy 404 (Spanish in production; kept byte-for-byte). */
export const LEGACY_NOT_FOUND_MESSAGE = 'No se encontró el recurso.';
/** Message of the legacy Elysia validation errors (kept for 422 answers). */
export const LEGACY_VALIDATION_MESSAGE = ': undefined';

/** Exact 410 body of every Tier 3 route. */
export const LEGACY_GONE_BODY = {
  status: false,
  error: 'GONE',
  message: 'This endpoint was retired in sotf-mods v2. See https://sotf-mods.com/developers',
} as const satisfies LegacyErrorResponse;

/** Builds a legacy error envelope (keys in legacy order). */
export function legacyError(error: LegacyErrorCode, message?: string): LegacyErrorResponse {
  const fallback =
    error === 'NOT_FOUND' ? LEGACY_NOT_FOUND_MESSAGE : error === 'VALIDATION' ? LEGACY_VALIDATION_MESSAGE : '';
  return { status: false, error, message: message ?? fallback };
}

/** The 404 body of the legacy layer. */
export const LEGACY_NOT_FOUND_BODY = legacyError('NOT_FOUND');

/**
 * `GET /api/mods/:id/download-stats` quirk: an unknown mod answers **200** with this body
 * (research/01 §2.1 "Excepción").
 */
export const LegacyDownloadStatsModNotFound = dto(
  'LegacyDownloadStatsModNotFound',
  z.strictObject({ status: z.literal(false), message: z.literal('Mod not found') }),
  {
    description: '200 body of download-stats for an unknown mod (legacy quirk).',
    examples: [{ status: false, message: 'Mod not found' }],
  },
);

/** 200 body of `GET /api/mods/:mod_id/download-stats`: the series or the "Mod not found" quirk. */
export const LegacyDownloadStatsResult = dto(
  'LegacyDownloadStatsResult',
  z.union([LegacyDownloadStatsResponse, LegacyDownloadStatsModNotFound]),
  {
    description: 'Download stats, or `{status:false,message:"Mod not found"}` with status 200 for an unknown mod.',
    examples: [
      { status: true, data: [{ date: '2026-09-28', count: 78 }] },
      { status: false, message: 'Mod not found' },
    ],
  },
);

/** CORS of the legacy layer: `*` without credentials; preflight 204 cached 24 h. */
export const LEGACY_CORS_HEADERS = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, HEAD, OPTIONS',
  'access-control-allow-headers': 'Content-Type, Authorization, X-Requested-With',
  'access-control-max-age': '86400',
} as const;

/** Headers of Tier 2 routes. `sunset` = T0 + 12 months. */
export function legacyDeprecationHeaders(sunset: Date): Record<string, string> {
  return {
    deprecation: 'true',
    sunset: sunset.toUTCString(),
    link: '<https://sotf-mods.com/developers>; rel="deprecation"',
  };
}

/** `mod_id` values shadowed by static legacy routes. */
export const LEGACY_RESERVED_MOD_IDS = ['featured', 'find', 'slug'] as const;

/** Exact messages of `/check` (research/01 §2.5). */
export const LEGACY_CHECK_MESSAGES = {
  newVersion: 'New version available',
  noNewVersion: 'No new version available',
  latest: 'Latest version',
} as const;

/** KelvinSeek text protocol: `"{command}|{answer}"` (empty command when nothing matched). */
export function formatKelvinSeekReply(command: string, answer: string): string {
  return `${command}|${answer}`;
}
export const KELVINSEEK_CLEAR_REPLY = 'Chat cleared';

/** Fields normalised by the contract comparator before deep equality (T0-01). */
export const LEGACY_VOLATILE_FIELDS = [
  'downloads',
  'lastWeekDownloads',
  'favoritesCount',
  'commentsCount',
  'updatedAt',
] as const;

/**
 * Fields the UpdatesChecker DTO deserialises as .NET value types (research/01 §1.2): they must
 * never be `null`, a string or another shape, or the in-game mod crashes.
 */
export const UPDATES_CHECKER_VALUE_FIELDS = {
  root: ['status'],
  meta: ['total', 'page', 'limit', 'pages', 'next_page', 'prev_page'],
  mod: [
    'id',
    'isNSFW',
    'isApproved',
    'isFeatured',
    'lastWeekDownloads',
    'downloads',
    'averageRating',
    'reviewsCount',
    'favoritesCount',
    'lastReleasedAt',
    'createdAt',
    'updatedAt',
    'userId',
    'categoryId',
  ],
  image: ['isPrimary', 'isThumbnail'],
  version: ['isLatest'],
  count: ['favorites'],
} as const;

/** Intentional deviations of v2 from the legacy behaviour (documented in /developers, PLAN §5.5). */
export const LEGACY_DEVIATIONS = [
  { id: 'approved-false', description: '`approved=false` only returns `pending` mods whose checks passed' },
  {
    id: 'approved-true',
    description: '`approved=true` returns `published` only (archived, unlisted and removed are excluded)',
  },
  { id: 'approved-absent', description: 'Without `approved`: published, pending with checks, archived and unlisted' },
  { id: 'detail-status', description: 'The detail by mod_id returns everything except rejected and removed (404)' },
  { id: 'type-null', description: 'The 19 mods with `type = null` come out as "Mod" or "Library" (backfill B4)' },
  { id: 'validation-422', description: 'Validation errors answer 422 with the envelope instead of 500' },
  { id: 'comments-hidden', description: '`GET /api/comments` excludes hidden comments' },
  { id: 'stable-order', description: 'Every sort has `id` as tie-breaker (stable pagination)' },
  { id: 'extra-headers', description: 'Responses add Cache-Control, Deprecation (Tier 2) and X-Request-Id' },
  { id: 'download-302', description: 'Downloads answer 302 to R2 instead of streaming the file' },
] as const;

// -----------------------------------------------------------------------------------------------
// `GET /api/mods` query (research/01 §2.3)
// -----------------------------------------------------------------------------------------------

/** `orderby` → column and direction (+ `id` tie-breaker in v2). Unknown values → `newest`. */
export const LEGACY_ORDERBY = {
  newest: { column: 'lastReleasedAt', direction: 'desc' },
  oldest: { column: 'lastReleasedAt', direction: 'asc' },
  most_downloaded: { column: 'downloads', direction: 'desc' },
  least_downloaded: { column: 'downloads', direction: 'asc' },
  most_downloaded_week: { column: 'lastWeekDownloads', direction: 'desc' },
  least_downloaded_week: { column: 'lastWeekDownloads', direction: 'asc' },
  most_followed: { column: 'favoritesCount', direction: 'desc' },
  least_followed: { column: 'favoritesCount', direction: 'asc' },
  highest_rating: { column: 'averageRating', direction: 'desc' },
  lowest_rating: { column: 'averageRating', direction: 'asc' },
  most_comments: { column: 'commentsCount', direction: 'desc' },
  least_comments: { column: 'commentsCount', direction: 'asc' },
} as const;
export type LegacyOrderBy = keyof typeof LEGACY_ORDERBY;

/** Raw query of the legacy list (tolerant: unknown keys such as `_t` are ignored). */
export const LegacyModsQuery = z.looseObject({
  type: z.string().optional().describe('`Mod` (default), `Library`, `Build` or `Both` (no filter)'),
  page: z.string().optional().describe('1-based, default 1'),
  limit: z.string().optional().describe('1–1000, default 10'),
  search: z.string().optional().describe('ILIKE on name, description and user name'),
  userSlug: z.string().optional(),
  userSlugFavorites: z.string().optional(),
  modIds: z.string().optional().describe('CSV of manifest ids; disables the default type filter'),
  approved: z.string().optional().describe('"true" → approved; any other value → unapproved; absent → no filter'),
  nsfw: z.string().optional().describe('"true" → only NSFW; otherwise no NSFW'),
  orderby: z.string().optional(),
  category: z.string().optional().describe('Category slug'),
});

export interface LegacyModsFilter {
  type: 'Mod' | 'Library' | 'Build' | null;
  page: number;
  limit: number;
  search: string | null;
  userSlug: string | null;
  userSlugFavorites: string | null;
  modIds: string[] | null;
  approved: boolean | null;
  nsfw: boolean;
  orderby: LegacyOrderBy;
  category: string | null;
}

function firstValue(value: unknown): string | undefined {
  if (Array.isArray(value)) return value.length > 0 ? String(value[0]) : undefined;
  return value === undefined || value === null ? undefined : String(value);
}

/**
 * Interprets the legacy list query exactly as the legacy API did (with the v2 fixes of PLAN
 * §5.5): non-numeric `page`/`limit` or `limit` outside 1–1000 → `VALIDATION` (422).
 */
export function parseLegacyModsQuery(
  raw: Readonly<Record<string, unknown>>,
): { ok: true; value: LegacyModsFilter } | { ok: false; error: LegacyErrorResponse } {
  const get = (key: string) => {
    const value = firstValue(raw[key]);
    return value === undefined || value === '' ? undefined : value;
  };
  const pageRaw = get('page');
  const limitRaw = get('limit');
  const page = pageRaw === undefined ? 1 : Number(pageRaw);
  const limit = limitRaw === undefined ? 10 : Number(limitRaw);
  if (!Number.isInteger(page) || page < 1 || !Number.isInteger(limit) || limit < 1 || limit > 1000) {
    return { ok: false, error: legacyError('VALIDATION') };
  }
  const modIdsRaw = get('modIds');
  const modIds =
    modIdsRaw === undefined
      ? null
      : modIdsRaw
          .split(',')
          .map((id) => id.trim())
          .filter((id) => id.length > 0);
  const typeRaw = get('type');
  let type: LegacyModsFilter['type'];
  if (typeRaw === 'Both') type = null;
  else if (typeRaw === 'Library' || typeRaw === 'Build' || typeRaw === 'Mod') type = typeRaw;
  else if (typeRaw === undefined) type = modIds ? null : 'Mod';
  else type = typeRaw as 'Mod';
  const approvedRaw = firstValue(raw.approved);
  const orderbyRaw = get('orderby');
  const orderby = orderbyRaw && orderbyRaw in LEGACY_ORDERBY ? (orderbyRaw as LegacyOrderBy) : 'newest';
  return {
    ok: true,
    value: {
      type,
      page,
      limit,
      search: get('search') ?? null,
      userSlug: get('userSlug') ?? null,
      userSlugFavorites: get('userSlugFavorites') ?? null,
      modIds,
      approved: approvedRaw === undefined ? null : approvedRaw === 'true',
      nsfw: firstValue(raw.nsfw) === 'true',
      orderby,
      category: get('category') ?? null,
    },
  };
}

/** `meta` of the list: `pages = ceil(total/limit)`, `next_page = min(page+1, pages)`, `prev_page = max(page-1, 1)`. */
export function legacyListMeta(total: number, page: number, limit: number): LegacyListMeta {
  const pages = Math.ceil(total / limit);
  return { total, page, limit, pages, next_page: Math.min(page + 1, pages), prev_page: Math.max(page - 1, 1) };
}

// -----------------------------------------------------------------------------------------------
// Endpoints
// -----------------------------------------------------------------------------------------------

const legacyRead = { auth: 'public', errorFormat: 'legacy', rateLimit: 'legacyRead' } as const;

export const legacyEndpoints = {
  listMods: defineEndpoint({
    ...legacyRead,
    id: 'legacy.listMods',
    owner: 'WP-32',
    method: 'GET',
    path: '/api/mods',
    summary: 'List mods (legacy, byte-compatible; RedManager and UpdatesChecker)',
    query: LegacyModsQuery,
    response: LegacyModListResponse,
    errors: ['VALIDATION_FAILED'],
    cache: cache.legacy(),
  }),
  getMod: defineEndpoint({
    ...legacyRead,
    id: 'legacy.getMod',
    owner: 'WP-32',
    method: 'GET',
    path: '/api/mods/:mod_id',
    summary: 'Mod by manifest id (legacy, byte-compatible)',
    params: z.object({ mod_id: z.string().min(1) }),
    response: LegacyModDetailResponse,
    errors: ['NOT_FOUND'],
    cache: cache.legacy(['mod:{id}']),
  }),
  check: defineEndpoint({
    ...legacyRead,
    id: 'legacy.check',
    owner: 'WP-32',
    method: 'GET',
    path: '/api/mods/:mod_id/check',
    summary: 'Update check with node-semver `gt` (legacy, byte-compatible)',
    params: z.object({ mod_id: z.string().min(1) }),
    query: z.looseObject({ version: z.string().optional() }),
    response: LegacyCheckResponse,
    errors: ['NOT_FOUND', 'VALIDATION_FAILED'],
    cache: cache.legacy(['mod:{id}']),
  }),
  kelvinseekPrompt: defineEndpoint({
    id: 'legacy.kelvinseekPrompt',
    owner: 'WP-32',
    method: 'GET',
    path: '/api/kelvinseek/prompt',
    summary: 'KelvinSeek prompt: `text/plain` "{command}|{answer}", always 200',
    auth: 'public',
    errorFormat: 'legacy',
    query: z.looseObject({
      chat_id: z.string().min(1).max(512),
      text: z.string().min(1).max(2000),
      context: z.string().max(8000),
    }),
    responseKind: 'text',
    errors: ['VALIDATION_FAILED'],
    cache: cache.noStore,
    rateLimit: 'kelvinseek',
  }),
  kelvinseekClear: defineEndpoint({
    id: 'legacy.kelvinseekClear',
    owner: 'WP-32',
    method: 'GET',
    path: '/api/kelvinseek/clear',
    summary: 'KelvinSeek clear: `text/plain` "Chat cleared"',
    auth: 'public',
    errorFormat: 'legacy',
    query: z.looseObject({ chat_id: z.string().min(1).max(512) }),
    responseKind: 'text',
    errors: ['VALIDATION_FAILED'],
    cache: cache.noStore,
    rateLimit: 'kelvinseek',
  }),
  getModBySlug: defineEndpoint({
    ...legacyRead,
    id: 'legacy.getModBySlug',
    owner: 'WP-32',
    method: 'GET',
    path: '/api/mods/slug/:userSlug/:mod_slug',
    summary: 'Mod by user and slug (legacy, frozen)',
    deprecated: true,
    params: z.object({ userSlug: z.string().min(1), mod_slug: z.string().min(1) }),
    response: LegacyModDetailResponse,
    errors: ['NOT_FOUND'],
    cache: cache.legacy(['mod:{id}']),
  }),
  findMod: defineEndpoint({
    ...legacyRead,
    id: 'legacy.findMod',
    owner: 'WP-32',
    method: 'GET',
    path: '/api/mods/find',
    summary: 'Manifest id by user and slug (legacy, frozen)',
    deprecated: true,
    query: z.looseObject({ userSlug: z.string(), mod_slug: z.string() }),
    response: LegacyModFindResponse,
    errors: ['NOT_FOUND', 'VALIDATION_FAILED'],
    cache: cache.legacy(),
  }),
  featuredMods: defineEndpoint({
    ...legacyRead,
    id: 'legacy.featuredMods',
    owner: 'WP-32',
    method: 'GET',
    path: '/api/mods/featured',
    summary: '12 featured mods (legacy, frozen)',
    deprecated: true,
    response: LegacyFeaturedModsResponse,
    cache: cache.legacy(),
  }),
  featuredBuilds: defineEndpoint({
    ...legacyRead,
    id: 'legacy.featuredBuilds',
    owner: 'WP-32',
    method: 'GET',
    path: '/api/builds/featured',
    summary: '4 featured builds (legacy, frozen)',
    deprecated: true,
    response: LegacyFeaturedBuildsResponse,
    cache: cache.legacy(),
  }),
  stats: defineEndpoint({
    ...legacyRead,
    id: 'legacy.stats',
    owner: 'WP-32',
    method: 'GET',
    path: '/api/stats',
    summary: 'Site stats (legacy, frozen; downloads include orphan rows)',
    deprecated: true,
    response: LegacyStatsResponse,
    cache: cache.legacy(['stats']),
  }),
  statsBuilds: defineEndpoint({
    ...legacyRead,
    id: 'legacy.statsBuilds',
    owner: 'WP-32',
    method: 'GET',
    path: '/api/stats/builds',
    summary: 'Build stats (legacy, frozen)',
    deprecated: true,
    response: LegacyStatsResponse,
    cache: cache.legacy(['stats']),
  }),
  categories: defineEndpoint({
    ...legacyRead,
    id: 'legacy.categories',
    owner: 'WP-32',
    method: 'GET',
    path: '/api/categories',
    summary: 'Categories by type (legacy, frozen)',
    deprecated: true,
    query: z.looseObject({ type: z.string().optional() }),
    response: LegacyCategoriesResponse,
    cache: cache.legacy(),
  }),
  user: defineEndpoint({
    ...legacyRead,
    id: 'legacy.user',
    owner: 'WP-32',
    method: 'GET',
    path: '/api/users/:userSlug',
    summary: 'User (legacy, frozen)',
    deprecated: true,
    params: z.object({ userSlug: z.string().min(1) }),
    response: LegacyUserResponse,
    errors: ['NOT_FOUND'],
    cache: cache.legacy(['user:{id}']),
  }),
  userStats: defineEndpoint({
    ...legacyRead,
    id: 'legacy.userStats',
    owner: 'WP-32',
    method: 'GET',
    path: '/api/users/:userSlug/stats',
    summary: 'User stats (legacy, frozen)',
    deprecated: true,
    params: z.object({ userSlug: z.string().min(1) }),
    response: LegacyUserStatsResponse,
    errors: ['NOT_FOUND'],
    cache: cache.legacy(['user:{id}']),
  }),
  comments: defineEndpoint({
    ...legacyRead,
    id: 'legacy.comments',
    owner: 'WP-32',
    method: 'GET',
    path: '/api/comments',
    summary: 'Comments of a mod by numeric id (legacy, frozen; hidden ones excluded)',
    deprecated: true,
    query: z.looseObject({ mod_id: z.string() }),
    response: LegacyCommentsResponse,
    errors: ['VALIDATION_FAILED'],
    cache: cache.legacy(['mod:{id}']),
  }),
  downloadStats: defineEndpoint({
    ...legacyRead,
    id: 'legacy.downloadStats',
    owner: 'WP-32',
    method: 'GET',
    path: '/api/mods/:mod_id/download-stats',
    summary: 'Daily downloads (legacy, frozen; unknown mod → 200 `{status:false}`)',
    deprecated: true,
    params: z.object({ mod_id: z.string().min(1) }),
    query: z.looseObject({ period: z.string().optional().describe('`week` (default), `month` or `all`') }),
    response: LegacyDownloadStatsResult,
    errors: ['VALIDATION_FAILED'],
    cache: cache.legacy(['mod:{id}', 'stats']),
  }),
  download: defineEndpoint({
    id: 'legacy.download',
    owner: 'WP-31',
    method: 'GET',
    head: true,
    path: '/api/mods/:mod_id/download/:version',
    summary: 'Download alias (302 to R2; `?ip=&agent=` ignored)',
    auth: 'public',
    errorFormat: 'legacy',
    deprecated: true,
    params: z.object({ mod_id: z.string().min(1), version: z.string().min(1) }),
    responseKind: 'redirect',
    errors: ['NOT_FOUND', 'GONE'],
    cache: cache.noStore,
    rateLimit: 'downloads',
  }),
  downloadBySlug: defineEndpoint({
    id: 'legacy.downloadBySlug',
    owner: 'WP-31',
    method: 'GET',
    head: true,
    path: '/api/mods/slug/:userSlug/:mod_slug/download/:version',
    summary: 'Download alias by slug (302 to R2)',
    auth: 'public',
    errorFormat: 'legacy',
    deprecated: true,
    params: z.object({ userSlug: z.string().min(1), mod_slug: z.string().min(1), version: z.string().min(1) }),
    responseKind: 'redirect',
    errors: ['NOT_FOUND', 'GONE'],
    cache: cache.noStore,
    rateLimit: 'downloads',
  }),
} as const;

/** Tier 3 routes: every method answers 410 with `LEGACY_GONE_BODY` (patterns in Fastify syntax). */
export const LEGACY_RETIRED_ROUTES: ReadonlyArray<{
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | '*';
  path: string;
}> = [
  { method: '*', path: '/api/auth/*' },
  { method: '*', path: '/api/favorites' },
  { method: '*', path: '/api/favorites/*' },
  { method: 'GET', path: '/api/mods/:mod_id/favorite' },
  { method: 'GET', path: '/api/mods/:mod_id/approve' },
  { method: 'GET', path: '/api/mods/:mod_id/unapprove' },
  { method: 'POST', path: '/api/mods/:mod_id/release' },
  { method: 'PATCH', path: '/api/mods/:mod_id/details' },
  { method: 'POST', path: '/api/files/presigned-url' },
  { method: 'POST', path: '/api/mods/upload' },
  { method: 'POST', path: '/api/mods/publish' },
  { method: 'POST', path: '/api/builds/upload' },
  { method: 'POST', path: '/api/builds/publish' },
  { method: 'POST', path: '/api/users/avatar' },
  { method: 'POST', path: '/api/comments' },
  { method: '*', path: '/api/kelvin-gpt/*' },
];

/** Validation error of the legacy layer (422). */
export const LEGACY_VALIDATION_BODY = legacyError('VALIDATION');
