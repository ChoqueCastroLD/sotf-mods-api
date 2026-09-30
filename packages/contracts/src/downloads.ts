/**
 * Downloads (PLAN §2.8 "Descarga", T0-02). Implemented by WP-31.
 *
 * `GET|HEAD /mods/:user/:slug/download/:version` (web) → internal resolve → `302` to
 * `https://r2.sotf-mods.com/<key encoded per segment>`. Never 301, never `+` for spaces, never a
 * byte through our servers. Counting is asynchronous and never blocks a download.
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import { ModCardDTO } from './catalog.ts';
import { Count, EntityId, Handle, IdParam, IsoDateTime, ModSlug, VersionString } from './common.ts';
import { CompatSummaryDTO } from './compat.ts';
import { dto, exampleOf } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';

/** Header carrying the shared secret between web and API on internal routes. */
export const INTERNAL_AUTH_HEADER = 'x-internal-auth';

/** Headers the web download endpoint forwards to `/internal/downloads/resolve`. */
export const DOWNLOAD_FORWARDED_HEADERS = [
  'cf-connecting-ip',
  'user-agent',
  'cf-ipcountry',
  'range',
  'sec-purpose',
] as const;

/** Headers of every download redirect. */
export const DOWNLOAD_REDIRECT_HEADERS = {
  'cache-control': 'no-store, private',
  'x-robots-tag': 'noindex, nofollow',
  'referrer-policy': 'no-referrer',
} as const;

/** Version aliases that resolve to the `isLatest` version (RedManager ≤ 1.1.9 sends `undefined`). */
export const LATEST_VERSION_ALIASES = ['latest', 'undefined'] as const;

/** Downloads per IP and minute above which a download still redirects but is not counted. */
export const DOWNLOAD_COUNT_LIMIT_PER_MINUTE = 60;

/**
 * Encodes an R2 object key for a URL exactly as PLAN §2.8 prescribes:
 * `key.split('/').map(encodeURIComponent).join('/')` (space → `%20`, `+` → `%2B`; `'`, `(` and
 * `)` stay raw, which R2 accepts). Never form encoding.
 */
export function encodeStorageKey(key: string): string {
  return key.split('/').map(encodeURIComponent).join('/');
}

/** Public URL of an object in the public bucket (`R2_PUBLIC_BASE_URL` + encoded key). */
export function publicObjectUrl(publicBaseUrl: string, key: string): string {
  return `${publicBaseUrl.replace(/\/+$/, '')}/${encodeStorageKey(key.replace(/^\/+/, ''))}`;
}

/**
 * Whether a download request counts (PLAN §2.8 "Conteo"): only GET, no `Range` or exactly
 * `bytes=0-`, not a prefetch/prerender (`Sec-Purpose`). Bot detection (isbot; an empty UA does
 * count) and the per-IP limit are applied by core on top of this.
 */
export function isCountableDownloadRequest(req: {
  method: string;
  range?: string | null;
  secPurpose?: string | null;
}): boolean {
  if (req.method.toUpperCase() !== 'GET') return false;
  const range = req.range?.trim();
  if (range && range.replace(/\s+/g, '') !== 'bytes=0-') return false;
  if (req.secPurpose && /prefetch|prerender/i.test(req.secPurpose)) return false;
  return true;
}

export const DOWNLOAD_RESOLVE_STATUSES = [302, 404, 410] as const;

export const DownloadResolveDTO = dto(
  'DownloadResolveDTO',
  z.object({
    status: z.union([z.literal(302), z.literal(404), z.literal(410)]),
    location: z.string().nullable().describe('R2 URL when status = 302'),
    reason: z.enum(['ok', 'mod_not_found', 'version_not_found', 'file_missing', 'mod_removed', 'mod_rejected']),
    counted: z.boolean().describe('Whether this request was counted'),
    modId: EntityId.nullable(),
    versionId: EntityId.nullable(),
  }),
  {
    description: 'Result of resolving a download (internal).',
    examples: [
      {
        status: 302,
        location: "https://r2.sotf-mods.com/1766549349465_Regi's%20Modding%20Library.zip",
        reason: 'ok',
        counted: true,
        modId: 88,
        versionId: 530,
      },
    ],
  },
);
export type DownloadResolveDTO = z.infer<typeof DownloadResolveDTO>;

export const DownloadResolveQuery = z.object({
  user: Handle.describe('User slug as it appears in the URL (may be `undefined`)'),
  slug: ModSlug,
  version: VersionString.describe('Version string, `latest` or `undefined`'),
  method: z.enum(['GET', 'HEAD']).default('GET'),
});

export const DownloadHistoryItemDTO = dto(
  'DownloadHistoryItemDTO',
  z.object({
    mod: ModCardDTO,
    lastDownloaded: z.object({ versionId: EntityId, version: VersionString, at: IsoDateTime }),
    current: z.object({ versionId: EntityId, version: VersionString }).nullable(),
    hasUpdate: z.boolean(),
    compat: CompatSummaryDTO,
    downloadsCount: Count.describe('How many times you downloaded this mod'),
  }),
  {
    description: 'One mod in "My downloads" (last downloaded version vs current).',
    examples: [
      {
        mod: exampleOf(ModCardDTO),
        lastDownloaded: { versionId: 405, version: '1.3.7', at: '2026-08-01T12:00:00.000Z' },
        current: { versionId: 412, version: '1.3.8' },
        hasUpdate: true,
        compat: exampleOf(CompatSummaryDTO),
        downloadsCount: 2,
      },
    ],
  },
);

export const DownloadHistoryDTO = dto(
  'DownloadHistoryDTO',
  z.object({
    enabled: z.boolean().describe('false when the user turned the history off'),
    updatesAvailable: Count,
    items: z.array(DownloadHistoryItemDTO),
  }),
  {
    description: 'Download history of the signed-in user, one row per mod.',
    examples: [{ enabled: true, updatesAvailable: 1, items: [exampleOf(DownloadHistoryItemDTO)] }],
  },
);

export const downloadsEndpoints = {
  versionDownload: defineEndpoint({
    id: 'downloads.versionDownload',
    owner: 'WP-31',
    method: 'GET',
    head: true,
    path: `${API_V2_PREFIX}/versions/:id/download`,
    summary: 'Download a version (302 to R2)',
    description: 'Counts GET requests without Range (or `bytes=0-`), not from bots; HEAD never counts. Never 429.',
    auth: 'public',
    params: z.object({ id: IdParam }),
    responseKind: 'redirect',
    errors: ['NOT_FOUND', 'GONE'],
    cache: cache.noStore,
    rateLimit: 'downloads',
  }),
  resolve: defineEndpoint({
    id: 'downloads.resolve',
    owner: 'WP-31',
    method: 'GET',
    path: '/internal/downloads/resolve',
    summary: 'Resolve and count a download of the web route (internal)',
    description: 'Called by the web endpoint with the forwarded headers and `X-Internal-Auth`.',
    auth: 'internal',
    query: DownloadResolveQuery,
    response: DownloadResolveDTO,
    errors: ['FORBIDDEN'],
    cache: cache.noStore,
  }),
  myDownloads: defineEndpoint({
    id: 'downloads.myDownloads',
    owner: 'WP-31',
    method: 'GET',
    path: `${API_V2_PREFIX}/me/downloads`,
    summary: 'My downloads with available updates',
    auth: 'session',
    response: DownloadHistoryDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.private,
  }),
  clearMyDownloads: defineEndpoint({
    id: 'downloads.clearMyDownloads',
    owner: 'WP-31',
    method: 'DELETE',
    path: `${API_V2_PREFIX}/me/downloads`,
    summary: 'Clear my download history',
    auth: 'session',
    responseKind: 'empty',
    errors: ['UNAUTHENTICATED'],
    cache: cache.noStore,
  }),
  removeMyDownload: defineEndpoint({
    id: 'downloads.removeMyDownload',
    owner: 'WP-31',
    method: 'DELETE',
    path: `${API_V2_PREFIX}/me/downloads/:modId`,
    summary: 'Remove one mod from my download history',
    description: 'Detaches my downloads of every version of the mod; the downloads keep counting. Idempotent.',
    auth: 'session',
    params: z.object({ modId: IdParam }),
    responseKind: 'empty',
    errors: ['UNAUTHENTICATED'],
    cache: cache.noStore,
  }),
} as const;
