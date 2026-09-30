/**
 * Public statistics and live counters (PLAN §5.2 "site/stats", "live/pulse", "mods/:id/live",
 * "mods/:id/stats/public"; §2.7). Implemented by WP-33 (reads) on the aggregates of WP-52.
 *
 * HTML counters may lag up to 15 min; the "live" figures come from these endpoints (edge 30 s).
 * Site downloads include the legacy orphan rows so the historic total never goes down.
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import { Count, EntityId, IdParam, IsoDate, IsoDateTime, ModRefDTO, VersionString } from './common.ts';
import { dto, exampleOf } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';

export const SiteStatsDTO = dto(
  'SiteStatsDTO',
  z.object({
    users: Count,
    mods: Count.describe('Published mods and libraries'),
    builds: Count,
    creators: Count.describe('Users with at least one published mod'),
    downloads: Count.describe('All-time site downloads (legacy history and orphan rows included)'),
    downloads7d: Count,
    generatedAt: IsoDateTime,
  }),
  {
    description: 'Site-wide figures (landing, about, llms.txt).',
    examples: [
      {
        users: 3883,
        mods: 221,
        builds: 36,
        creators: 59,
        downloads: 1_977_061,
        downloads7d: 12_240,
        generatedAt: '2026-09-29T10:00:00.000Z',
      },
    ],
  },
);
export type SiteStatsDTO = z.infer<typeof SiteStatsDTO>;

export const LivePulseDTO = dto(
  'LivePulseDTO',
  z.object({
    downloadsToday: Count,
    downloadsLastHour: Count,
    visitorsNow: Count.describe('Distinct visitors with a page view in the last 5 minutes'),
    recent: z.array(z.object({ mod: ModRefDTO, version: VersionString, at: IsoDateTime })).max(12),
    latestRelease: z.object({ mod: ModRefDTO, version: VersionString, at: IsoDateTime }).nullable(),
    generatedAt: IsoDateTime,
  }),
  {
    description: '"The living island" readout of the landing (polled every 60 s by guests).',
    examples: [
      {
        downloadsToday: 1_720,
        downloadsLastHour: 94,
        visitorsNow: 37,
        recent: [{ mod: exampleOf(ModRefDTO), version: '1.3.8', at: '2026-09-29T09:59:12.000Z' }],
        latestRelease: { mod: exampleOf(ModRefDTO), version: '1.3.8', at: '2026-09-26T21:33:31.396Z' },
        generatedAt: '2026-09-29T10:00:00.000Z',
      },
    ],
  },
);

export const ModLiveDTO = dto(
  'ModLiveDTO',
  z.object({ downloads: Count, downloads24h: Count, followers: Count, generatedAt: IsoDateTime }),
  {
    description: 'Live counters of a mod page.',
    examples: [{ downloads: 117_812, downloads24h: 203, followers: 24, generatedAt: '2026-09-29T10:00:00.000Z' }],
  },
);

export const BADGE_KINDS = ['downloads', 'version', 'rating', 'followers', 'compat'] as const;

export const PUBLIC_STATS_RANGES = ['30d', '1y', 'all'] as const;

export const ModPublicStatsDTO = dto(
  'ModPublicStatsDTO',
  z.object({
    range: z.enum(PUBLIC_STATS_RANGES),
    from: IsoDate,
    to: IsoDate,
    granularity: z.enum(['day', 'week']).describe('`all` uses weekly buckets'),
    series: z.array(z.object({ day: IsoDate, downloads: Count })).describe('Zero-filled'),
  }),
  {
    description: 'Public download series of a mod.',
    examples: [
      {
        range: '30d',
        from: '2026-08-31',
        to: '2026-09-29',
        granularity: 'day',
        series: [
          { day: '2026-09-28', downloads: 78 },
          { day: '2026-09-29', downloads: 8 },
        ],
      },
    ],
  },
);

export const statsEndpoints = {
  site: defineEndpoint({
    id: 'stats.site',
    owner: 'WP-33',
    method: 'GET',
    path: `${API_V2_PREFIX}/site/stats`,
    summary: 'Site-wide figures',
    auth: 'public',
    response: SiteStatsDTO,
    cache: cache.publicApi(['stats']),
    rateLimit: 'anonymousRead',
  }),
  livePulse: defineEndpoint({
    id: 'stats.livePulse',
    owner: 'WP-33',
    method: 'GET',
    path: `${API_V2_PREFIX}/live/pulse`,
    summary: 'Live readout of the landing',
    auth: 'public',
    response: LivePulseDTO,
    cache: cache.live(['stats']),
    rateLimit: 'anonymousRead',
  }),
  modLive: defineEndpoint({
    id: 'stats.modLive',
    owner: 'WP-33',
    method: 'GET',
    path: `${API_V2_PREFIX}/mods/:id/live`,
    summary: 'Live counters of a mod',
    auth: 'public',
    params: z.object({ id: IdParam }),
    response: ModLiveDTO,
    errors: ['NOT_FOUND', 'GONE'],
    cache: cache.live(['stats']),
    rateLimit: 'anonymousRead',
  }),
  modLiveStream: defineEndpoint({
    id: 'stats.modLiveStream',
    owner: 'WP-33',
    method: 'GET',
    path: `${API_V2_PREFIX}/mods/:id/live/stream`,
    summary: 'Live download total of a mod (server-sent events)',
    description:
      'Public, cookie-less `text/event-stream`. Emits `mod.live` ({modId, downloads}) whenever downloads of the mod are counted (at most every 2 s). Clients keep polling `GET /mods/:id/live` as a fallback.',
    auth: 'public',
    params: z.object({ id: IdParam }),
    response: z.object({ event: z.literal('mod.live'), id: z.string(), data: z.object({ modId: EntityId, downloads: Count }) }),
    responseKind: 'event-stream',
    errors: ['NOT_FOUND'],
    cache: cache.noStore,
    rateLimit: 'anonymousRead',
  }),
  modBadge: defineEndpoint({
    id: 'stats.modBadge',
    owner: 'WP-33',
    method: 'GET',
    path: `${API_V2_PREFIX}/mods/:id/badge/:kind`,
    summary: 'SVG badge of a mod (downloads, version, rating, followers, compat)',
    auth: 'public',
    params: z.object({ id: IdParam, kind: z.enum(BADGE_KINDS) }),
    responseKind: 'text',
    errors: ['NOT_FOUND', 'GONE'],
    cache: cache.publicApi(['stats']),
    rateLimit: 'anonymousRead',
  }),
  modPublicStats: defineEndpoint({
    id: 'stats.modPublicStats',
    owner: 'WP-33',
    method: 'GET',
    path: `${API_V2_PREFIX}/mods/:id/stats/public`,
    summary: 'Public download series of a mod',
    auth: 'public',
    params: z.object({ id: IdParam }),
    query: z.object({ range: z.enum(PUBLIC_STATS_RANGES).default('30d') }),
    response: ModPublicStatsDTO,
    errors: ['NOT_FOUND', 'GONE'],
    cache: cache.publicApi(['mod:{id}', 'stats'], 900),
    rateLimit: 'anonymousRead',
  }),
} as const;
