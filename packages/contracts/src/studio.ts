/**
 * Publishing and Basecamp (PLAN §5.2 "Publicación y Basecamp", §7.5, T0-19, T0-20, T0-24).
 * Drafts, studio mods and versions by WP-40; overview, analytics and inbox by WP-52.
 *
 * Drafts never live in `"Mod"` (the legacy would list unapproved rows). `submit` creates the mod as
 * `pending`, or `published` when the author is a verified creator and the checks pass.
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import { ModCardDTO, ModDetailDTO } from './catalog.ts';
import {
  CategorySlug,
  ContentLang,
  Count,
  DedicatedServer,
  DependencyKind,
  EntityId,
  HttpUrl,
  IdParam,
  IsoDate,
  IsoDateTime,
  LinkKind,
  ManifestId,
  ModLicense,
  ModRefDTO,
  ModStatus,
  MultiplayerRole,
  Platform,
  SafeToRemove,
  SitePath,
  SlugInput,
  UserRefDTO,
  Uuid,
  VersionChannel,
  VersionString,
} from './common.ts';
import { dto, exampleOf, wireInt, wireList } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';
import { InspectionFlagDTO } from './manifest.ts';
import { CursorQuery, cursorPageOf } from './pagination.ts';
import { VersionDTO } from './versions.ts';

export const STUDIO_LIMITS = {
  nameMax: 80,
  shortDescriptionMax: 200,
  descriptionMax: 20_000,
  changelogMax: 10_000,
  tagsMax: 5,
  galleryMax: 10,
  supportLinksMax: 5,
  altMax: 300,
  yankReasonMax: 300,
} as const;

// -----------------------------------------------------------------------------------------------
// Shared field groups (wizard, drafts, edit form)
// -----------------------------------------------------------------------------------------------

const SupportLinkInput = z.strictObject({
  kind: LinkKind,
  url: HttpUrl,
  label: z.string().trim().max(60).nullable().optional(),
});
const DependencyInput = z.strictObject({
  manifestId: ManifestId,
  kind: DependencyKind.default('required'),
  versionRange: z.string().trim().max(64).nullable().optional(),
});
const YouTubeUrl = HttpUrl.refine(
  (url) => /^https:\/\/(?:www\.|m\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)[\w-]{6,}/.test(url),
  'expected a YouTube video URL',
);

/** Listing fields editable after publication (`PATCH /studio/mods/:id`). */
const ListingFields = {
  name: z.string().trim().min(2).max(STUDIO_LIMITS.nameMax),
  shortDescription: z.string().trim().max(STUDIO_LIMITS.shortDescriptionMax),
  descriptionMd: z.string().max(STUDIO_LIMITS.descriptionMax),
  categorySlug: CategorySlug,
  tagSlugs: z.array(z.string().max(60)).max(STUDIO_LIMITS.tagsMax),
  license: ModLicense.nullable(),
  sourceUrl: HttpUrl.nullable(),
  supportLinks: z.array(SupportLinkInput).max(STUDIO_LIMITS.supportLinksMax),
  videoUrl: YouTubeUrl.nullable(),
  nsfw: z.boolean(),
  contentLang: ContentLang.nullable(),
  platform: Platform.nullable(),
  multiplayerRole: MultiplayerRole.nullable(),
  dedicatedServer: DedicatedServer.nullable(),
  safeToRemove: SafeToRemove.nullable(),
  originalAuthor: z.strictObject({ name: z.string().trim().min(1).max(80), url: HttpUrl.nullable() }).nullable(),
};

/** Autosaved wizard state (everything optional). */
export const DraftData = z.strictObject({
  step: z.number().int().min(1).max(6).optional(),
  fileUploadId: Uuid.optional(),
  slug: SlugInput.optional(),
  name: ListingFields.name.optional(),
  shortDescription: ListingFields.shortDescription.optional(),
  descriptionMd: ListingFields.descriptionMd.optional(),
  categorySlug: ListingFields.categorySlug.optional(),
  tagSlugs: ListingFields.tagSlugs.optional(),
  license: ListingFields.license.optional(),
  sourceUrl: ListingFields.sourceUrl.optional(),
  supportLinks: ListingFields.supportLinks.optional(),
  videoUrl: ListingFields.videoUrl.optional(),
  nsfw: z.boolean().optional(),
  contentLang: ListingFields.contentLang.optional(),
  platform: ListingFields.platform.optional(),
  multiplayerRole: ListingFields.multiplayerRole.optional(),
  dedicatedServer: ListingFields.dedicatedServer.optional(),
  safeToRemove: ListingFields.safeToRemove.optional(),
  originalAuthor: ListingFields.originalAuthor.optional(),
  loaderMin: z.string().trim().max(40).nullable().optional(),
  testedGameBuildIds: z.array(EntityId).max(20).optional(),
  dependencies: z.array(DependencyInput).max(50).optional(),
  thumbnail: z.strictObject({ uploadId: Uuid.optional(), mediaId: Uuid.optional() }).optional(),
  gallery: z
    .array(
      z.strictObject({
        uploadId: Uuid.optional(),
        mediaId: Uuid.optional(),
        alt: z.string().trim().max(STUDIO_LIMITS.altMax).optional(),
      }),
    )
    .max(STUDIO_LIMITS.galleryMax)
    .optional(),
  version: z
    .strictObject({
      version: z.string().trim().max(64).optional(),
      channel: VersionChannel.optional(),
      changelogMd: z.string().max(STUDIO_LIMITS.changelogMax).optional(),
      notifyFollowers: z.boolean().optional(),
    })
    .optional(),
});
export type DraftData = z.infer<typeof DraftData>;

export const DRAFT_KINDS = ['mod', 'build', 'version'] as const;
export const DraftKind = z.enum(DRAFT_KINDS);
export type DraftKind = z.infer<typeof DraftKind>;

export const PreflightItemDTO = dto(
  'PreflightItemDTO',
  z.object({
    field: z.string(),
    severity: z.enum(['error', 'warning', 'ok']),
    code: z.string().describe('i18n key suffix (`studio_preflight_<code>`)'),
  }),
  {
    description: 'One row of the review step ("✔ / ⚠ with a link to the field").',
    examples: [{ field: 'gallery', severity: 'warning', code: 'gallery_below_3' }],
  },
);
export type PreflightItemDTO = z.infer<typeof PreflightItemDTO>;

export const DraftDTO = dto(
  'DraftDTO',
  z.object({
    id: Uuid,
    kind: DraftKind,
    modId: EntityId.nullable().describe('Target mod of a new-version draft'),
    data: DraftData,
    uploadIds: z.array(Uuid),
    preflight: z.array(PreflightItemDTO),
    qualityScore: z
      .number()
      .int()
      .min(0)
      .max(100)
      .describe('Listing quality % (gallery ≥ 3, description ≥ 300, source, platform, tags, licence)'),
    inspectionFlags: z.array(InspectionFlagDTO),
    createdAt: IsoDateTime,
    updatedAt: IsoDateTime,
  }),
  {
    description: 'Autosaved publishing draft.',
    examples: [
      {
        id: '0192f3a7-3d4e-7f50-8b62-7c8d9e0f1a2b',
        kind: 'mod',
        modId: null,
        data: {
          step: 2,
          fileUploadId: '0192f3a5-1b2c-7d3e-8f40-5a6b7c8d9e0f',
          name: 'Cook Alert',
          slug: 'cook-alert',
          shortDescription: 'Beeps when your food is ready.',
          categorySlug: 'quality-of-life',
          tagSlugs: ['cooking'],
        },
        uploadIds: ['0192f3a5-1b2c-7d3e-8f40-5a6b7c8d9e0f'],
        preflight: [exampleOf(PreflightItemDTO)],
        qualityScore: 55,
        inspectionFlags: [],
        createdAt: '2026-09-29T10:00:00.000Z',
        updatedAt: '2026-09-29T10:03:00.000Z',
      },
    ],
  },
);
export type DraftDTO = z.infer<typeof DraftDTO>;

export const DraftListDTO = dto('DraftListDTO', z.object({ items: z.array(DraftDTO) }), {
  description: 'My drafts, most recent first.',
  examples: [{ items: [exampleOf(DraftDTO)] }],
});

export const CreateDraftBody = dto(
  'CreateDraftBody',
  z.strictObject({ kind: DraftKind, modId: EntityId.optional(), data: DraftData.optional() }),
  {
    description: 'Start a draft (new mod, new build or new version of `modId`).',
    examples: [{ kind: 'mod', data: { step: 1 } }],
  },
);
export type CreateDraftBody = z.infer<typeof CreateDraftBody>;

export const UpdateDraftBody = dto('UpdateDraftBody', z.strictObject({ data: DraftData }), {
  description: 'Autosave (replaces `data`; sent every 3 s and on step change).',
  examples: [{ data: { step: 3, platform: 'Client', multiplayerRole: 'host_only' } }],
});

export const SubmitResultDTO = dto(
  'SubmitResultDTO',
  z.object({ modId: EntityId, versionId: EntityId.nullable(), status: ModStatus, canonicalPath: SitePath }),
  {
    description: 'Result of submitting a draft.',
    examples: [{ modId: 312, versionId: 640, status: 'pending', canonicalPath: '/mods/cooklog/cook-alert' }],
  },
);
export type UpdateDraftBody = z.infer<typeof UpdateDraftBody>;
export type SubmitResultDTO = z.infer<typeof SubmitResultDTO>;

// -----------------------------------------------------------------------------------------------
// Studio mods
// -----------------------------------------------------------------------------------------------

export const STUDIO_TRANSITIONS = ['archive', 'unlist', 'publish', 'request_removal', 'resubmit'] as const;
export const StudioTransition = z.enum(STUDIO_TRANSITIONS);
export type StudioTransition = z.infer<typeof StudioTransition>;

export const StudioModRowDTO = dto(
  'StudioModRowDTO',
  z.object({
    mod: ModCardDTO,
    statusReason: z.string().nullable(),
    downloads7d: Count,
    openCompatReports: Count,
    unansweredComments: Count,
    unansweredReviews: Count,
    qualityScore: z.number().int().min(0).max(100),
  }),
  {
    description: 'Row of the "My mods" table.',
    examples: [
      {
        mod: exampleOf(ModCardDTO),
        statusReason: null,
        downloads7d: 1542,
        openCompatReports: 1,
        unansweredComments: 2,
        unansweredReviews: 0,
        qualityScore: 85,
      },
    ],
  },
);
export type StudioModRowDTO = z.infer<typeof StudioModRowDTO>;

export const StudioModListDTO = dto('StudioModListDTO', z.object({ items: z.array(StudioModRowDTO) }), {
  description: 'Mods and builds of the signed-in creator (any status).',
  examples: [{ items: [exampleOf(StudioModRowDTO)] }],
});

export const StudioModDTO = dto(
  'StudioModDTO',
  z.object({
    mod: ModDetailDTO,
    descriptionMd: z.string(),
    statusReason: z.string().nullable(),
    qualityScore: z.number().int().min(0).max(100),
    preflight: z.array(PreflightItemDTO),
    allowedTransitions: z.array(StudioTransition),
    versions: z.array(VersionDTO).describe('Every version, including pending and yanked'),
  }),
  {
    description: 'Owner view of a mod.',
    examples: [
      {
        mod: exampleOf(ModDetailDTO),
        descriptionMd: '## Features\n\n- Noclip\n- God mode',
        statusReason: null,
        qualityScore: 85,
        preflight: [exampleOf(PreflightItemDTO)],
        allowedTransitions: ['archive', 'unlist'],
        versions: [exampleOf(VersionDTO)],
      },
    ],
  },
);
export type StudioModDTO = z.infer<typeof StudioModDTO>;

export const UpdateStudioModBody = dto(
  'UpdateStudioModBody',
  z.strictObject({
    name: ListingFields.name.optional(),
    shortDescription: ListingFields.shortDescription.optional(),
    descriptionMd: ListingFields.descriptionMd.optional(),
    categorySlug: ListingFields.categorySlug.optional(),
    tagSlugs: ListingFields.tagSlugs.optional(),
    license: ListingFields.license.optional(),
    sourceUrl: ListingFields.sourceUrl.optional(),
    supportLinks: ListingFields.supportLinks.optional(),
    videoUrl: ListingFields.videoUrl.optional(),
    nsfw: ListingFields.nsfw.optional(),
    contentLang: ListingFields.contentLang.optional(),
    platform: ListingFields.platform.optional(),
    multiplayerRole: ListingFields.multiplayerRole.optional(),
    dedicatedServer: ListingFields.dedicatedServer.optional(),
    safeToRemove: ListingFields.safeToRemove.optional(),
    originalAuthor: ListingFields.originalAuthor.optional(),
  }),
  {
    description: 'Edit the listing (no re-upload of images).',
    examples: [
      { shortDescription: 'In-game menu with noclip, god mode and spawners.', tagSlugs: ['cheats', 'building'] },
    ],
  },
);
export type UpdateStudioModBody = z.infer<typeof UpdateStudioModBody>;

export const PutModMediaBody = dto(
  'PutModMediaBody',
  z.strictObject({
    thumbnailMediaId: Uuid.nullable(),
    gallery: z
      .array(
        z.strictObject({
          mediaId: Uuid,
          alt: z.string().trim().max(STUDIO_LIMITS.altMax).nullable(),
          position: z.number().int().min(0),
        }),
      )
      .max(STUDIO_LIMITS.galleryMax),
  }),
  {
    description: 'Set the cover and the ordered gallery (unchanged media is neither deleted nor re-uploaded).',
    examples: [
      {
        thumbnailMediaId: '0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d',
        gallery: [{ mediaId: '0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d', alt: 'Menu open', position: 0 }],
      },
    ],
  },
);
export type PutModMediaBody = z.infer<typeof PutModMediaBody>;

export const CreateVersionBody = dto(
  'CreateVersionBody',
  z.strictObject({
    uploadId: Uuid,
    changelogMd: z.string().max(STUDIO_LIMITS.changelogMax),
    channel: VersionChannel.default('release'),
    testedGameBuildIds: z.array(EntityId).max(20).default([]),
    notifyFollowers: z.boolean().default(true),
  }),
  {
    description: 'Publish a new version (same manifest id and a greater semver; builds excepted).',
    examples: [
      {
        uploadId: '0192f3a5-1b2c-7d3e-8f40-5a6b7c8d9e0f',
        changelogMd: '- Fixed zipline noclip',
        testedGameBuildIds: [7],
      },
    ],
  },
);
export type CreateVersionBody = z.infer<typeof CreateVersionBody>;

export const UpdateVersionBody = dto(
  'UpdateVersionBody',
  z.strictObject({
    changelogMd: z.string().max(STUDIO_LIMITS.changelogMax).optional(),
    yank: z.strictObject({ reason: z.string().trim().min(3).max(STUDIO_LIMITS.yankReasonMax) }).optional(),
    unyank: z.literal(true).optional(),
    testedGameBuildIds: z.array(EntityId).max(20).optional(),
  }),
  {
    description: 'Edit the changelog or yank a version (the URL keeps working with a warning).',
    examples: [{ yank: { reason: 'Crashes on 1.0.4' } }],
  },
);
export type UpdateVersionBody = z.infer<typeof UpdateVersionBody>;

export const ArchiveModBody = dto('ArchiveModBody', z.strictObject({ successorModId: EntityId.optional() }), {
  description: 'Archive (optionally pointing to a successor).',
  examples: [{ successorModId: 315 }],
});

export const RequestRemovalBody = dto(
  'RequestRemovalBody',
  z.strictObject({ reason: z.string().trim().min(10).max(1000) }),
  {
    description: 'Ask moderation to remove the mod.',
    examples: [{ reason: 'Replaced by a new mod, please remove this one.' }],
  },
);
export type RequestRemovalBody = z.infer<typeof RequestRemovalBody>;
export type ArchiveModBody = z.infer<typeof ArchiveModBody>;

export const StudioModStateDTO = dto(
  'StudioModStateDTO',
  z.object({
    modId: EntityId,
    status: ModStatus,
    statusReason: z.string().nullable(),
    allowedTransitions: z.array(StudioTransition),
  }),
  {
    description: 'Status after a transition.',
    examples: [{ modId: 20, status: 'archived', statusReason: null, allowedTransitions: ['publish'] }],
  },
);
export type StudioModStateDTO = z.infer<typeof StudioModStateDTO>;

// -----------------------------------------------------------------------------------------------
// Overview, analytics and inbox (WP-52)
// -----------------------------------------------------------------------------------------------

export const KpiDTO = dto(
  'KpiDTO',
  z.object({ value: z.number(), previous: z.number().nullable(), sparkline: z.array(z.number()) }),
  {
    description: 'KPI with the previous period value and a sparkline.',
    examples: [{ value: 1542, previous: 1320, sparkline: [180, 201, 240, 199, 230, 260, 232] }],
  },
);

export const StudioOverviewDTO = dto(
  'StudioOverviewDTO',
  z.object({
    kpis: z.object({
      downloads7d: KpiDTO,
      downloads30d: KpiDTO,
      followers: KpiDTO,
      rating: KpiDTO,
      compatWorksShare: KpiDTO,
      views7d: KpiDTO,
    }),
    needsAttention: z.array(
      z.object({
        kind: z.enum([
          'broken_on_current',
          'unanswered_questions',
          'missing_gallery',
          'missing_source',
          'unanswered_reviews',
          'rejected',
        ]),
        mod: ModRefDTO,
        count: Count,
      }),
    ),
    mods: z.array(StudioModRowDTO),
    nextMilestone: z.object({ mod: ModRefDTO, threshold: z.number().int().positive(), current: Count }).nullable(),
    nextTier: z.object({ key: z.string(), downloadsNeeded: Count }).nullable(),
  }),
  {
    description: 'Basecamp summary.',
    examples: [
      {
        kpis: {
          downloads7d: exampleOf(KpiDTO),
          downloads30d: { value: 8001, previous: 7400, sparkline: [] },
          followers: { value: 58, previous: 51, sparkline: [] },
          rating: { value: 4.6, previous: 4.5, sparkline: [] },
          compatWorksShare: { value: 0.94, previous: null, sparkline: [] },
          views7d: { value: 9120, previous: 8800, sparkline: [] },
        },
        needsAttention: [{ kind: 'unanswered_questions', mod: exampleOf(ModRefDTO), count: 2 }],
        mods: [exampleOf(StudioModRowDTO)],
        nextMilestone: { mod: exampleOf(ModRefDTO), threshold: 250_000, current: 117_719 },
        nextTier: { key: 'landmark', downloadsNeeded: 625_136 },
      },
    ],
  },
);

export const ANALYTICS_RANGES = ['7d', '30d', '90d', 'all'] as const;
export const AnalyticsQuery = z.object({
  modId: wireInt({ min: 1, description: 'Omit for all my mods' }).optional(),
  range: z.enum(ANALYTICS_RANGES).default('30d'),
  granularity: z.enum(['day', 'week', 'month']).default('day'),
});

export const DOWNLOAD_CHANNELS = ['web', 'redmanager', 'client', 'api', 'unknown'] as const;

export const AnalyticsDTO = dto(
  'AnalyticsDTO',
  z.object({
    range: z.enum(ANALYTICS_RANGES),
    granularity: z.enum(['day', 'week', 'month']),
    from: IsoDate,
    to: IsoDate,
    series: z.array(z.object({ day: IsoDate, downloads: Count, uniqueDownloads: Count, views: Count, follows: Count })),
    byVersion: z.array(z.object({ version: z.string(), downloads: Count })).describe('≤ 8 versions + "other"'),
    byChannel: z.partialRecord(z.enum(DOWNLOAD_CHANNELS), Count),
    referrers: z.array(z.object({ domain: z.string(), visits: Count })),
    locales: z.array(z.object({ locale: z.string(), visits: Count })),
    ratings: z.array(z.object({ day: IsoDate, average: z.number().nullable(), count: Count })),
    markers: z.object({
      versions: z.array(z.object({ day: IsoDate, version: VersionString })),
      gameBuilds: z.array(z.object({ day: IsoDate, label: z.string() })),
    }),
    totals: z.object({
      downloads: Count,
      uniqueDownloads: Count,
      views: Count,
      conversion: z.number().min(0).nullable(),
    }),
  }),
  {
    description: 'Creator analytics (zero-filled series; the legacy history since 2023 included).',
    examples: [
      {
        range: '7d',
        granularity: 'day',
        from: '2026-09-23',
        to: '2026-09-29',
        series: [{ day: '2026-09-29', downloads: 88, uniqueDownloads: 70, views: 1200, follows: 1 }],
        byVersion: [
          { version: '1.3.8', downloads: 80 },
          { version: 'other', downloads: 8 },
        ],
        byChannel: { web: 40, redmanager: 38, client: 10 },
        referrers: [
          { domain: 'google.com', visits: 400 },
          { domain: 'chatgpt.com', visits: 12 },
        ],
        locales: [{ locale: 'en', visits: 700 }],
        ratings: [{ day: '2026-09-27', average: 5, count: 1 }],
        markers: {
          versions: [{ day: '2026-09-26', version: '1.3.8' }],
          gameBuilds: [{ day: '2026-09-15', label: '1.0.4' }],
        },
        totals: { downloads: 88, uniqueDownloads: 70, views: 1200, conversion: 0.073 },
      },
    ],
  },
);

export const INBOX_TYPES = ['comment', 'bug', 'review', 'compat'] as const;

export const InboxItemDTO = dto(
  'InboxItemDTO',
  z.object({
    type: z.enum(INBOX_TYPES),
    id: EntityId,
    mod: ModRefDTO,
    author: UserRefDTO.nullable(),
    excerptHtml: z.string(),
    state: z.enum(['open', 'answered', 'resolved']),
    permalink: SitePath,
    createdAt: IsoDateTime,
  }),
  {
    description: 'Comment, bug report, review or field report on one of my mods.',
    examples: [
      {
        type: 'bug',
        id: 221,
        mod: exampleOf(ModRefDTO),
        author: exampleOf(UserRefDTO),
        excerptHtml: '<p>Nothing activates when I press the key.</p>',
        state: 'open',
        permalink: "/mods/imaxel/axel's-mod-menu#c-221",
        createdAt: '2026-05-07T14:45:18.805Z',
      },
    ],
  },
);
export const InboxPageDTO = cursorPageOf('InboxPageDTO', InboxItemDTO, 'Cursor page of the creator inbox.');

export const InboxQuery = CursorQuery.extend({
  type: wireList(z.enum(INBOX_TYPES), { max: 4 }),
  state: z.enum(['open', 'all']).default('open'),
});

// -----------------------------------------------------------------------------------------------
// Endpoints
// -----------------------------------------------------------------------------------------------

const drafts = `${API_V2_PREFIX}/drafts`;
const studio = `${API_V2_PREFIX}/studio`;
const ModIdParams = z.object({ id: IdParam });

export const studioEndpoints = {
  createDraft: defineEndpoint({
    id: 'studio.createDraft',
    owner: 'WP-40',
    method: 'POST',
    path: drafts,
    summary: 'Start a draft',
    auth: 'verified',
    body: CreateDraftBody,
    status: 201,
    response: DraftDTO,
    errors: ['EMAIL_NOT_VERIFIED', 'FORBIDDEN', 'NOT_FOUND'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  listDrafts: defineEndpoint({
    id: 'studio.listDrafts',
    owner: 'WP-40',
    method: 'GET',
    path: drafts,
    summary: 'My drafts',
    auth: 'verified',
    response: DraftListDTO,
    errors: ['EMAIL_NOT_VERIFIED'],
    cache: cache.private,
  }),
  getDraft: defineEndpoint({
    id: 'studio.getDraft',
    owner: 'WP-40',
    method: 'GET',
    path: `${drafts}/:id`,
    summary: 'One draft with its preflight',
    auth: 'verified',
    requires: ['draft_owner'],
    params: z.object({ id: Uuid }),
    response: DraftDTO,
    errors: ['NOT_FOUND'],
    cache: cache.private,
  }),
  updateDraft: defineEndpoint({
    id: 'studio.updateDraft',
    owner: 'WP-40',
    method: 'PATCH',
    path: `${drafts}/:id`,
    summary: 'Autosave a draft',
    auth: 'verified',
    requires: ['draft_owner'],
    params: z.object({ id: Uuid }),
    body: UpdateDraftBody,
    response: DraftDTO,
    errors: ['NOT_FOUND'],
    cache: cache.noStore,
  }),
  deleteDraft: defineEndpoint({
    id: 'studio.deleteDraft',
    owner: 'WP-40',
    method: 'DELETE',
    path: `${drafts}/:id`,
    summary: 'Delete a draft',
    auth: 'verified',
    requires: ['draft_owner'],
    params: z.object({ id: Uuid }),
    responseKind: 'empty',
    errors: ['NOT_FOUND'],
    cache: cache.noStore,
  }),
  submitDraft: defineEndpoint({
    id: 'studio.submitDraft',
    owner: 'WP-40',
    method: 'POST',
    path: `${drafts}/:id/submit`,
    summary: 'Send a draft to the Ranger Station (or publish directly when allowed)',
    auth: 'verified',
    requires: ['draft_owner'],
    params: z.object({ id: Uuid }),
    status: 201,
    response: SubmitResultDTO,
    errors: ['NOT_FOUND', 'CONFLICT', 'VALIDATION_FAILED'],
    cache: cache.noStore,
  }),
  listMods: defineEndpoint({
    id: 'studio.listMods',
    owner: 'WP-40',
    method: 'GET',
    path: `${studio}/mods`,
    summary: 'My mods with status and KPIs',
    auth: 'session',
    response: StudioModListDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.private,
  }),
  getMod: defineEndpoint({
    id: 'studio.getMod',
    owner: 'WP-40',
    method: 'GET',
    path: `${studio}/mods/:id`,
    summary: 'Owner view of a mod',
    auth: 'session',
    requires: ['mod_owner'],
    params: ModIdParams,
    response: StudioModDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.private,
  }),
  updateMod: defineEndpoint({
    id: 'studio.updateMod',
    owner: 'WP-40',
    method: 'PATCH',
    path: `${studio}/mods/:id`,
    summary: 'Edit the listing',
    auth: 'session',
    requires: ['mod_owner'],
    params: ModIdParams,
    body: UpdateStudioModBody,
    response: StudioModDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  putMedia: defineEndpoint({
    id: 'studio.putMedia',
    owner: 'WP-40',
    method: 'PUT',
    path: `${studio}/mods/:id/media`,
    summary: 'Set cover and gallery',
    auth: 'session',
    requires: ['mod_owner'],
    params: ModIdParams,
    body: PutModMediaBody,
    response: StudioModDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  createVersion: defineEndpoint({
    id: 'studio.createVersion',
    owner: 'WP-40',
    method: 'POST',
    path: `${studio}/mods/:id/versions`,
    summary: 'Publish a new version',
    auth: 'verified',
    requires: ['mod_owner'],
    params: ModIdParams,
    body: CreateVersionBody,
    status: 201,
    response: VersionDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'CONFLICT', 'VALIDATION_FAILED'],
    cache: cache.noStore,
    rateLimit: 'uploads',
  }),
  updateVersion: defineEndpoint({
    id: 'studio.updateVersion',
    owner: 'WP-40',
    method: 'PATCH',
    path: `${studio}/mods/:id/versions/:vid`,
    summary: 'Edit a changelog or yank a version',
    auth: 'session',
    requires: ['mod_owner'],
    params: z.object({ id: IdParam, vid: IdParam }),
    body: UpdateVersionBody,
    response: VersionDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
  }),
  archive: defineEndpoint({
    id: 'studio.archive',
    owner: 'WP-40',
    method: 'POST',
    path: `${studio}/mods/:id/archive`,
    summary: 'Archive (optionally with a successor)',
    auth: 'session',
    requires: ['mod_owner'],
    params: ModIdParams,
    body: ArchiveModBody,
    response: StudioModStateDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'CONFLICT'],
    cache: cache.noStore,
  }),
  unlist: defineEndpoint({
    id: 'studio.unlist',
    owner: 'WP-40',
    method: 'POST',
    path: `${studio}/mods/:id/unlist`,
    summary: 'Unlist (reachable by URL only)',
    auth: 'session',
    requires: ['mod_owner'],
    params: ModIdParams,
    response: StudioModStateDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'CONFLICT'],
    cache: cache.noStore,
  }),
  publish: defineEndpoint({
    id: 'studio.publish',
    owner: 'WP-40',
    method: 'POST',
    path: `${studio}/mods/:id/publish`,
    summary: 'Publish again an unlisted or archived mod; resubmit a rejected one',
    auth: 'session',
    requires: ['mod_owner'],
    params: ModIdParams,
    response: StudioModStateDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'CONFLICT'],
    cache: cache.noStore,
  }),
  requestRemoval: defineEndpoint({
    id: 'studio.requestRemoval',
    owner: 'WP-40',
    method: 'POST',
    path: `${studio}/mods/:id/request-removal`,
    summary: 'Ask moderation to remove the mod',
    auth: 'session',
    requires: ['mod_owner'],
    params: ModIdParams,
    body: RequestRemovalBody,
    status: 202,
    response: StudioModStateDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
  }),
  overview: defineEndpoint({
    id: 'studio.overview',
    owner: 'WP-52',
    method: 'GET',
    path: `${studio}/overview`,
    summary: 'Basecamp summary',
    auth: 'session',
    response: StudioOverviewDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.private,
  }),
  analytics: defineEndpoint({
    id: 'studio.analytics',
    owner: 'WP-52',
    method: 'GET',
    path: `${studio}/analytics`,
    summary: 'Analytics of my mods',
    auth: 'session',
    query: AnalyticsQuery,
    response: AnalyticsDTO,
    errors: ['UNAUTHENTICATED', 'NOT_FOUND', 'FORBIDDEN'],
    cache: cache.private,
  }),
  analyticsCsv: defineEndpoint({
    id: 'studio.analyticsCsv',
    owner: 'WP-52',
    method: 'GET',
    path: `${studio}/analytics.csv`,
    summary: 'Analytics as CSV (day, version, channel, downloads, unique, views)',
    auth: 'session',
    query: AnalyticsQuery,
    responseKind: 'csv',
    errors: ['UNAUTHENTICATED', 'NOT_FOUND', 'FORBIDDEN'],
    cache: cache.private,
  }),
  inbox: defineEndpoint({
    id: 'studio.inbox',
    owner: 'WP-52',
    method: 'GET',
    path: `${studio}/inbox`,
    summary: 'Comments, bugs, reviews and field reports on my mods',
    auth: 'session',
    query: InboxQuery,
    response: InboxPageDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.private,
  }),
} as const;
