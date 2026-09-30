/**
 * Compatibility and Patch Radar (PLAN §7.10, T0-10). Implemented by WP-50 (admin writes in
 * `admin.ts`, WP-51/WP-83).
 *
 * Field reports are per version × game build × mode; the aggregate uses weights (author "tested"
 * = 2, verified creator = 1.5, trust level 0 = 0.5, others 1): < 3 weighted reports → `untested`,
 * ≥ 70 % works → `works`, ≥ 50 % broken → `broken`, otherwise `mixed`.
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import {
  CompatStatus,
  Count,
  EntityId,
  GameBuildRefDTO,
  IdParam,
  IsoDate,
  IsoDateTime,
  ModRefDTO,
  UserRefDTO,
  VersionString,
} from './common.ts';
import { dto, exampleOf, examplesOf, wireInt, wireIntDefault } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';

export const COMPAT_MODES = ['singleplayer', 'host', 'client', 'dedicated'] as const;
export const CompatMode = z.enum(COMPAT_MODES);
export type CompatMode = z.infer<typeof CompatMode>;

export const COMPAT_RESULTS = ['works', 'partial', 'broken'] as const;
export const CompatResult = z.enum(COMPAT_RESULTS);
export type CompatResult = z.infer<typeof CompatResult>;

export const ECOSYSTEM_STATUSES = ['works', 'partial', 'broken', 'unknown'] as const;
export const EcosystemStatusValue = z.enum(ECOSYSTEM_STATUSES);

/** Aggregation thresholds and weights of PLAN §7.10 (shared by the worker and the UI legend). */
export const COMPAT_RULES = {
  minWeightedReports: 3,
  worksShare: 0.7,
  brokenShare: 0.5,
  weights: { authorTested: 2, verifiedCreator: 1.5, trustLevel0: 0.5, default: 1 },
  noteMaxLength: 500,
} as const;

/** Aggregate status from weighted counts (pure; the worker stores it in `ModVersionCompat`). */
export function aggregateCompatStatus(weighted: { works: number; partial: number; broken: number }): CompatStatus {
  const total = weighted.works + weighted.partial + weighted.broken;
  if (total < COMPAT_RULES.minWeightedReports) return 'untested';
  if (weighted.works / total >= COMPAT_RULES.worksShare) return 'works';
  if (weighted.broken / total >= COMPAT_RULES.brokenShare) return 'broken';
  return 'mixed';
}

export const GameBuildDTO = dto(
  'GameBuildDTO',
  z.object({
    id: EntityId,
    label: z.string().min(1).max(40),
    steamBuildId: z.string().nullable(),
    releasedAt: IsoDate,
    isBreaking: z.boolean(),
    isCurrent: z.boolean(),
    notesMd: z.string().nullable().describe('Markdown source of the notes (admin forms prefill it)'),
    notesHtml: z.string().nullable(),
  }),
  {
    description: 'A Sons of the Forest game build (patch).',
    examples: [
      {
        id: 7,
        label: '1.0.4',
        steamBuildId: '19533671',
        releasedAt: '2026-09-15',
        isBreaking: true,
        isCurrent: true,
        notesMd: 'New cave update. RedLoader 0.8.6 needed.',
        notesHtml: '<p>New cave update. RedLoader 0.8.6 needed.</p>',
      },
    ],
  },
);
export type GameBuildDTO = z.infer<typeof GameBuildDTO>;

export const GameBuildListDTO = dto('GameBuildListDTO', z.object({ items: z.array(GameBuildDTO) }), {
  description: 'Game builds, newest first.',
  examples: [{ items: [...examplesOf(GameBuildDTO)] }],
});

export const LoaderReleaseDTO = dto(
  'LoaderReleaseDTO',
  z.object({
    id: EntityId,
    name: z.string().describe('RedLoader or RedManager'),
    version: z.string(),
    releasedAt: IsoDate.nullable(),
    url: z.string().nullable(),
  }),
  {
    description: 'A release of the mod loader or manager.',
    examples: [
      {
        id: 1,
        name: 'RedLoader',
        version: '0.8.6',
        releasedAt: '2026-06-02',
        url: 'https://github.com/ToniMacaroni/RedLoader/releases/tag/0.8.6',
      },
    ],
  },
);

export const EcosystemEntryDTO = dto(
  'EcosystemEntryDTO',
  z.object({
    gameBuild: GameBuildRefDTO,
    loader: LoaderReleaseDTO,
    status: EcosystemStatusValue,
    noteMd: z.string().nullable().optional().describe('Markdown source of the note (always sent by the API)'),
    noteHtml: z.string().nullable(),
    updatedAt: IsoDateTime,
  }),
  {
    description: 'Status of a loader release on a game build.',
    examples: [
      {
        gameBuild: { id: 7, label: '1.0.4', isCurrent: true, isBreaking: true },
        loader: {
          id: 1,
          name: 'RedLoader',
          version: '0.8.6',
          releasedAt: '2026-06-02',
          url: 'https://github.com/ToniMacaroni/RedLoader/releases/tag/0.8.6',
        },
        status: 'works',
        noteMd: null,
        noteHtml: null,
        updatedAt: '2026-09-16T08:00:00.000Z',
      },
    ],
  },
);

export const EcosystemDTO = dto(
  'EcosystemDTO',
  z.object({ currentBuild: GameBuildDTO.nullable(), entries: z.array(EcosystemEntryDTO) }),
  {
    description: 'Ecosystem status: current game build and loader/manager status per build.',
    examples: [{ currentBuild: exampleOf(GameBuildDTO), entries: [...examplesOf(EcosystemEntryDTO)] }],
  },
);

export const CompatAggregateDTO = dto(
  'CompatAggregateDTO',
  z.object({
    modVersionId: EntityId,
    gameBuild: GameBuildRefDTO,
    status: CompatStatus,
    works: Count,
    partial: Count,
    broken: Count,
    weightedScore: z.number().nullable(),
    authorTested: z.boolean(),
    updatedAt: IsoDateTime.nullable(),
  }),
  {
    description: 'Aggregated field reports of one version on one game build.',
    examples: [
      {
        modVersionId: 412,
        gameBuild: { id: 7, label: '1.0.4', isCurrent: true, isBreaking: true },
        status: 'works',
        works: 31,
        partial: 1,
        broken: 0,
        weightedScore: 0.97,
        authorTested: true,
        updatedAt: '2026-09-28T10:00:00.000Z',
      },
    ],
  },
);
export type CompatAggregateDTO = z.infer<typeof CompatAggregateDTO>;

/** Compatibility of the latest version on the current build (cards, capsule). */
export const CompatSummaryDTO = dto(
  'CompatSummaryDTO',
  z.object({
    status: CompatStatus,
    works: Count,
    partial: Count,
    broken: Count,
    gameBuild: GameBuildRefDTO.nullable(),
  }),
  {
    description: 'Compatibility of the latest version on the current game build.',
    examples: [
      {
        status: 'works',
        works: 32,
        partial: 1,
        broken: 0,
        gameBuild: { id: 7, label: '1.0.4', isCurrent: true, isBreaking: true },
      },
    ],
  },
);
export type CompatSummaryDTO = z.infer<typeof CompatSummaryDTO>;

export const ModCompatDTO = dto(
  'ModCompatDTO',
  z.object({
    modId: EntityId,
    current: CompatSummaryDTO,
    possiblyOutdated: z.boolean(),
    versions: z.array(z.object({ versionId: EntityId, version: VersionString, builds: z.array(CompatAggregateDTO) })),
  }),
  {
    description: 'Compatibility of every version of a mod per game build (FieldReportMeter).',
    examples: [
      {
        modId: 20,
        current: exampleOf(CompatSummaryDTO),
        possiblyOutdated: false,
        versions: [{ versionId: 412, version: '1.3.8', builds: [...examplesOf(CompatAggregateDTO)] }],
      },
    ],
  },
);

export const PatchRadarRowDTO = dto(
  'PatchRadarRowDTO',
  z.object({
    mod: ModRefDTO,
    latestVersion: VersionString.nullable(),
    downloads30d: Count,
    compat: CompatSummaryDTO,
    possiblyOutdated: z.boolean(),
  }),
  {
    description: 'A mod of the top 50 on the Patch Radar.',
    examples: [
      {
        mod: exampleOf(ModRefDTO),
        latestVersion: '1.3.8',
        downloads30d: 8001,
        compat: {
          status: 'works',
          works: 32,
          partial: 1,
          broken: 0,
          gameBuild: { id: 7, label: '1.0.4', isCurrent: true, isBreaking: true },
        },
        possiblyOutdated: false,
      },
    ],
  },
);

export const PatchRadarDTO = dto(
  'PatchRadarDTO',
  z.object({
    build: GameBuildDTO,
    ecosystem: z.array(EcosystemEntryDTO),
    confirmedShare: z.number().min(0).max(1).describe('Share of the top 50 with a non-untested status'),
    works: z.array(PatchRadarRowDTO),
    broken: z.array(PatchRadarRowDTO),
    pending: z.array(PatchRadarRowDTO).describe('untested or mixed'),
    history: z.array(GameBuildDTO),
  }),
  {
    description: 'Ecosystem state for one game build (top 50 mods by downloads in 30 days).',
    examples: [
      {
        build: exampleOf(GameBuildDTO),
        ecosystem: [...examplesOf(EcosystemEntryDTO)],
        confirmedShare: 0.62,
        works: [...examplesOf(PatchRadarRowDTO)],
        broken: [],
        pending: [],
        history: [...examplesOf(GameBuildDTO)],
      },
    ],
  },
);

export const UPTIME_COMPONENTS = ['web', 'api', 'media', 'database'] as const;
export const UptimeComponent = z.enum(UPTIME_COMPONENTS);
export type UptimeComponent = z.infer<typeof UptimeComponent>;

/** Uptime probes: sampling period and retention (shared by the worker job and the page copy). */
export const UPTIME_RULES = {
  probeEveryMinutes: 5,
  retentionDays: 100,
  defaultWindowDays: 30,
  maxWindowDays: 90,
  /** A probe slower than this counts as down. */
  timeoutMs: 8000,
} as const;

export const UptimeDayDTO = dto(
  'UptimeDayDTO',
  z.object({
    date: IsoDate,
    samples: Count,
    okSamples: Count,
    uptime: z.number().min(0).max(1).nullable().describe('null without samples that day'),
  }),
  {
    description: 'Uptime of one UTC day.',
    examples: [{ date: '2026-09-29', samples: 288, okSamples: 287, uptime: 0.9965 }],
  },
);

export const UptimeComponentDTO = dto(
  'UptimeComponentDTO',
  z.object({
    component: UptimeComponent,
    uptime: z.number().min(0).max(1).nullable().describe('Share of ok samples in the window; null without samples'),
    samples: Count,
    avgLatencyMs: z.number().int().nonnegative().nullable(),
    p95LatencyMs: z.number().int().nonnegative().nullable(),
    current: z.object({ ok: z.boolean(), checkedAt: IsoDateTime }).nullable().describe('Latest sample'),
    days: z.array(UptimeDayDTO).describe('One entry per UTC day of the window, oldest first'),
  }),
  {
    description: 'Uptime of one platform component.',
    examples: [
      {
        component: 'web',
        uptime: 0.9982,
        samples: 8640,
        avgLatencyMs: 182,
        p95LatencyMs: 410,
        current: { ok: true, checkedAt: '2026-09-30T09:55:00.000Z' },
        days: [...examplesOf(UptimeDayDTO)],
      },
    ],
  },
);

export const UptimeDTO = dto(
  'UptimeDTO',
  z.object({
    windowDays: z.number().int().min(1).max(UPTIME_RULES.maxWindowDays),
    generatedAt: IsoDateTime,
    overall: z.number().min(0).max(1).nullable().describe('Share of probe rounds where every component was ok'),
    components: z.array(UptimeComponentDTO),
  }),
  {
    description: 'Platform uptime series shown on the Patch Radar (probes every 5 minutes).',
    examples: [
      {
        windowDays: 30,
        generatedAt: '2026-09-30T10:00:00.000Z',
        overall: 0.9971,
        components: [...examplesOf(UptimeComponentDTO)],
      },
    ],
  },
);
export type UptimeDTO = z.infer<typeof UptimeDTO>;

export const UptimeQuery = z.object({
  days: wireIntDefault(UPTIME_RULES.defaultWindowDays, {
    min: 1,
    max: UPTIME_RULES.maxWindowDays,
    description: 'Window in days',
  }),
});

export const CompatReportDTO = dto(
  'CompatReportDTO',
  z.object({
    id: EntityId,
    modVersionId: EntityId,
    gameBuildId: EntityId,
    mode: CompatMode,
    result: CompatResult,
    note: z.string().max(COMPAT_RULES.noteMaxLength).nullable(),
    otherMods: z.string().max(1000).nullable(),
    reporter: UserRefDTO.nullable().describe('null for deleted accounts'),
    acknowledgedAt: IsoDateTime.nullable(),
    fixedInVersionId: EntityId.nullable(),
    createdAt: IsoDateTime,
    updatedAt: IsoDateTime,
  }),
  {
    description: 'A field report ("does it work on this patch?").',
    examples: [
      {
        id: 9001,
        modVersionId: 412,
        gameBuildId: 7,
        mode: 'host',
        result: 'works',
        note: 'Works fine hosting for 3 friends.',
        otherMods: 'SonsAxLib, StackMod',
        reporter: {
          id: 301,
          handle: 'cooklog',
          displayName: 'Cook Log',
          avatarUrl: null,
          verifiedCreator: false,
          role: 'user',
          creatorTier: null,
          survivorRank: 'forager',
        },
        acknowledgedAt: null,
        fixedInVersionId: null,
        createdAt: '2026-09-27T21:10:00.000Z',
        updatedAt: '2026-09-27T21:10:00.000Z',
      },
    ],
  },
);

export const CreateCompatReportBody = dto(
  'CreateCompatReportBody',
  z.strictObject({
    modVersionId: EntityId,
    gameBuildId: EntityId,
    mode: CompatMode,
    result: CompatResult,
    note: z.string().trim().max(COMPAT_RULES.noteMaxLength).optional(),
    otherMods: z.string().trim().max(1000).optional(),
  }),
  {
    description: 'One report per (user, version, build, mode); posting again updates it.',
    examples: [
      {
        modVersionId: 412,
        gameBuildId: 7,
        mode: 'singleplayer',
        result: 'partial',
        note: 'Menu opens, noclip crashes.',
      },
    ],
  },
);

export const PatchCompatReportBody = dto(
  'PatchCompatReportBody',
  z.strictObject({
    result: CompatResult.optional(),
    note: z.string().trim().max(COMPAT_RULES.noteMaxLength).nullable().optional(),
    otherMods: z.string().trim().max(1000).nullable().optional(),
  }),
  { description: 'Edit an own field report.', examples: [{ result: 'works', note: null }] },
);

export const AcknowledgeCompatReportBody = dto(
  'AcknowledgeCompatReportBody',
  z.strictObject({ fixedInVersionId: EntityId.optional() }),
  {
    description: 'Author marks a report as seen or fixed in a version (notifies reporters).',
    examples: [{ fixedInVersionId: 415 }],
  },
);

export const CompatPromptDTO = dto(
  'CompatPromptDTO',
  z.object({
    mod: ModRefDTO,
    modVersionId: EntityId,
    version: VersionString,
    gameBuild: GameBuildRefDTO,
    downloadedAt: IsoDateTime,
  }),
  {
    description: 'A version downloaded while signed in and not yet answered ("Did it work?").',
    examples: [
      {
        mod: exampleOf(ModRefDTO),
        modVersionId: 412,
        version: '1.3.8',
        gameBuild: { id: 7, label: '1.0.4', isCurrent: true, isBreaking: true },
        downloadedAt: '2026-09-28T19:00:00.000Z',
      },
    ],
  },
);

export const CompatPromptListDTO = dto('CompatPromptListDTO', z.object({ items: z.array(CompatPromptDTO) }), {
  description: 'Pending "Did it work?" prompts of the signed-in user.',
  examples: [{ items: [...examplesOf(CompatPromptDTO)] }],
});

export const PatchRadarQuery = z.object({
  build: wireInt({ min: 1, description: 'Game build id (default: current build)' }).optional(),
});

const base = API_V2_PREFIX;

export const compatEndpoints = {
  modCompat: defineEndpoint({
    id: 'compat.modCompat',
    owner: 'WP-50',
    method: 'GET',
    path: `${base}/mods/:id/compat`,
    summary: 'Compatibility of a mod per version and game build',
    auth: 'public',
    params: z.object({ id: IdParam }),
    response: ModCompatDTO,
    errors: ['NOT_FOUND', 'GONE'],
    cache: cache.publicApi(['mod:{id}', 'compat']),
    rateLimit: 'anonymousRead',
  }),
  ecosystem: defineEndpoint({
    id: 'compat.ecosystem',
    owner: 'WP-50',
    method: 'GET',
    path: `${base}/ecosystem`,
    summary: 'RedLoader / RedManager status per game build',
    auth: 'public',
    response: EcosystemDTO,
    cache: cache.publicApi(['compat']),
    rateLimit: 'anonymousRead',
  }),
  gameBuilds: defineEndpoint({
    id: 'compat.gameBuilds',
    owner: 'WP-50',
    method: 'GET',
    path: `${base}/game-builds`,
    summary: 'Registered game builds',
    auth: 'public',
    response: GameBuildListDTO,
    cache: cache.publicApi(['compat']),
    rateLimit: 'anonymousRead',
  }),
  patchRadar: defineEndpoint({
    id: 'compat.patchRadar',
    owner: 'WP-50',
    method: 'GET',
    path: `${base}/patch-radar`,
    summary: 'Patch Radar for a game build (top 50 by downloads in 30 days)',
    auth: 'public',
    query: PatchRadarQuery,
    response: PatchRadarDTO,
    errors: ['NOT_FOUND'],
    cache: cache.publicApi(['compat']),
    rateLimit: 'anonymousRead',
  }),
  uptime: defineEndpoint({
    id: 'compat.uptime',
    owner: 'WP-RR',
    method: 'GET',
    path: `${base}/compat/uptime`,
    summary: 'Uptime series of the platform components (Patch Radar)',
    auth: 'public',
    query: UptimeQuery,
    response: UptimeDTO,
    cache: cache.publicApi(['compat'], 300),
    rateLimit: 'anonymousRead',
  }),
  createReport: defineEndpoint({
    id: 'compat.createReport',
    owner: 'WP-50',
    method: 'POST',
    path: `${base}/compat-reports`,
    summary: 'Submit (or update) a field report',
    auth: 'verified',
    body: CreateCompatReportBody,
    status: 201,
    response: CompatReportDTO,
    errors: ['NOT_FOUND', 'EMAIL_NOT_VERIFIED', 'FORBIDDEN'],
    cache: cache.noStore,
    rateLimit: 'compatReports',
  }),
  updateReport: defineEndpoint({
    id: 'compat.updateReport',
    owner: 'WP-50',
    method: 'PATCH',
    path: `${base}/compat-reports/:id`,
    summary: 'Edit an own field report',
    auth: 'verified',
    params: z.object({ id: IdParam }),
    body: PatchCompatReportBody,
    response: CompatReportDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
    rateLimit: 'compatReports',
  }),
  deleteReport: defineEndpoint({
    id: 'compat.deleteReport',
    owner: 'WP-50',
    method: 'DELETE',
    path: `${base}/compat-reports/:id`,
    summary: 'Delete an own field report',
    auth: 'verified',
    params: z.object({ id: IdParam }),
    responseKind: 'empty',
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
  }),
  acknowledgeReport: defineEndpoint({
    id: 'compat.acknowledgeReport',
    owner: 'WP-50',
    method: 'POST',
    path: `${base}/compat-reports/:id/acknowledge`,
    summary: 'Mark a report as seen or fixed in a version (mod author)',
    auth: 'session',
    requires: ['mod_owner'],
    params: z.object({ id: IdParam }),
    body: AcknowledgeCompatReportBody,
    response: CompatReportDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
  }),
  myPrompts: defineEndpoint({
    id: 'compat.myPrompts',
    owner: 'WP-50',
    method: 'GET',
    path: `${base}/me/compat-prompts`,
    summary: 'Downloaded versions awaiting a "Did it work?" answer',
    auth: 'session',
    response: CompatPromptListDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.private,
  }),
} as const;
