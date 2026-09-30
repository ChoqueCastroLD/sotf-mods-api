/**
 * Administration (PLAN §5.2 "Moderación y administración", §7.4 "Admin", §7.10, T0-28, T0-31).
 * Backend by WP-51, UI by WP-83. Every write requires 👑 admin and a session < 12 h.
 * Also hosts the public "active announcements" read used by the global banner.
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import { CategoryDTO, LocalizedNames, TagDTO } from './catalog.ts';
import {
  AwardKind,
  CategorySlug,
  Count,
  EntityId,
  HttpUrl,
  IdParam,
  IsoDate,
  IsoDateTime,
  Locale,
  ModRefDTO,
} from './common.ts';
import { EcosystemEntryDTO, EcosystemStatusValue, GameBuildDTO, GameBuildListDTO, LoaderReleaseDTO } from './compat.ts';
import { dto, exampleOf, examplesOf } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';
import { AwardDTO } from './gamification.ts';
import { ModerationAction } from './moderation.ts';

// -----------------------------------------------------------------------------------------------
// Game builds and ecosystem
// -----------------------------------------------------------------------------------------------

export const CreateGameBuildBody = dto(
  'CreateGameBuildBody',
  z.strictObject({
    label: z.string().trim().min(1).max(40),
    steamBuildId: z
      .string()
      .trim()
      .regex(/^\d{1,12}$/)
      .optional(),
    releasedAt: IsoDate,
    isBreaking: z.boolean().default(false),
    isCurrent: z.boolean().default(false),
    notesMd: z.string().max(5000).optional(),
  }),
  {
    description: 'Register a game build. `isBreaking` triggers the banner and `patch.breaking_build` signals.',
    examples: [
      { label: '1.0.5', steamBuildId: '19876543', releasedAt: '2026-10-20', isBreaking: true, isCurrent: true },
    ],
  },
);

export const UpdateGameBuildBody = dto(
  'UpdateGameBuildBody',
  z.strictObject({
    label: z.string().trim().min(1).max(40).optional(),
    steamBuildId: z
      .string()
      .trim()
      .regex(/^\d{1,12}$/)
      .nullable()
      .optional(),
    releasedAt: IsoDate.optional(),
    isBreaking: z.boolean().optional(),
    isCurrent: z.boolean().optional(),
    notesMd: z.string().max(5000).nullable().optional(),
  }),
  { description: 'Edit a game build.', examples: [{ isCurrent: true }] },
);

export const CreateLoaderReleaseBody = dto(
  'CreateLoaderReleaseBody',
  z.strictObject({
    name: z.enum(['RedLoader', 'RedManager']),
    version: z.string().trim().min(1).max(40),
    releasedAt: IsoDate.optional(),
    url: HttpUrl.optional(),
  }),
  {
    description: 'Register a loader or manager release.',
    examples: [{ name: 'RedLoader', version: '0.8.7', releasedAt: '2026-10-21' }],
  },
);

export const LoaderReleaseListDTO = dto('LoaderReleaseListDTO', z.object({ items: z.array(LoaderReleaseDTO) }), {
  description: 'Loader and manager releases.',
  examples: [{ items: [...examplesOf(LoaderReleaseDTO)] }],
});

export const PutEcosystemBody = dto(
  'PutEcosystemBody',
  z.strictObject({
    gameBuildId: EntityId,
    loaderReleaseId: EntityId,
    status: EcosystemStatusValue,
    noteMd: z.string().max(2000).nullable().optional(),
  }),
  {
    description: 'Set the status of a loader release on a game build.',
    examples: [{ gameBuildId: 7, loaderReleaseId: 1, status: 'works' }],
  },
);

// -----------------------------------------------------------------------------------------------
// Taxonomy
// -----------------------------------------------------------------------------------------------

export const CategoryInputBody = dto(
  'CategoryInputBody',
  z.strictObject({
    slug: CategorySlug,
    kind: z.enum(['mod', 'build']),
    name: z.string().trim().min(1).max(60),
    names: LocalizedNames.default({}),
    icon: z.string().max(60).nullable().default(null),
    sortOrder: z.number().int().default(0),
    legacySlugs: z.array(z.string().max(80)).max(10).default([]),
    hubIntro: LocalizedNames.default({}).describe('Short editorial intro per locale (markdown)'),
  }),
  {
    description: 'Create or replace a category.',
    examples: [
      {
        slug: 'weapons-gear',
        kind: 'mod',
        name: 'Weapons & Gear',
        names: { es: 'Armas y equipo' },
        icon: 'sword',
        sortOrder: 5,
      },
    ],
  },
);

export const TagInputBody = dto(
  'TagInputBody',
  z.strictObject({
    slug: z
      .string()
      .trim()
      .min(1)
      .max(60)
      .regex(/^[a-z0-9-]+$/),
    name: z.string().trim().min(1).max(60),
    names: LocalizedNames.default({}),
    group: z.string().max(40).nullable().default(null),
    description: z.string().max(300).default(''),
    sortOrder: z.number().int().default(0),
  }),
  {
    description: 'Create or replace a curated tag.',
    examples: [{ slug: 'cooking', name: 'Cooking', names: { es: 'Cocina' }, group: 'gameplay' }],
  },
);

export const AdminCategoryDTO = dto(
  'AdminCategoryDTO',
  CategoryDTO.omit({ ogImage: true }).extend({
    retiredAt: IsoDateTime.nullable().describe('Set when the category was retired (soft delete)'),
    hubIntro: LocalizedNames.describe('Stored editorial intro per locale (Markdown)'),
  }),
  {
    description: 'A category as the admins edit it (retired state and hub intro included).',
    examples: [
      {
        ...(({ ogImage: _og, ...rest }) => rest)(exampleOf(CategoryDTO)),
        retiredAt: null,
        hubIntro: { en: 'Small fixes that make every day easier.' },
      },
    ],
  },
);

export const AdminCategoryListDTO = dto('AdminCategoryListDTO', z.object({ items: z.array(AdminCategoryDTO) }), {
  description: 'Every category, retired ones last.',
  examples: [{ items: [exampleOf(AdminCategoryDTO)] }],
});

export const AdminTagDTO = dto(
  'AdminTagDTO',
  TagDTO.extend({
    description: z.string(),
    sortOrder: z.number().int(),
  }),
  {
    description: 'A tag as the admins edit it (description and sort order included).',
    examples: [{ ...exampleOf(TagDTO), description: 'Inventory and storage tweaks', sortOrder: 2 }],
  },
);

export const AdminTagListDTO = dto('AdminTagListDTO', z.object({ items: z.array(AdminTagDTO) }), {
  description: 'Every tag (curated and free).',
  examples: [{ items: [exampleOf(AdminTagDTO)] }],
});

export const RecategorizeBody = dto(
  'RecategorizeBody',
  z.strictObject({
    dryRun: z.boolean().default(true),
    changes: z
      .array(
        z.strictObject({
          modId: EntityId,
          categorySlug: CategorySlug,
          tagSlugs: z.array(z.string().max(60)).max(5).optional(),
        }),
      )
      .max(500)
      .optional()
      .describe('Omit to only get suggestions'),
  }),
  {
    description: 'Bulk recategorisation with keyword-rule suggestions; always confirmed by a human.',
    examples: [{ dryRun: true }],
  },
);

export const RecategorizeResultDTO = dto(
  'RecategorizeResultDTO',
  z.object({
    suggestions: z.array(
      z.object({
        mod: ModRefDTO,
        currentCategory: z.string().nullable(),
        currentTags: z.array(z.string()).describe('Current tag slugs (`tagSlugs` of a change replaces them)'),
        suggestedCategory: CategorySlug,
        suggestedTags: z.array(z.string()),
        confidence: z.number().min(0).max(1),
        reason: z.string(),
      }),
    ),
    applied: Count,
  }),
  {
    description: 'Suggestions and number of applied changes.',
    examples: [
      {
        suggestions: [
          {
            mod: exampleOf(ModRefDTO),
            currentCategory: 'qol',
            currentTags: ['cheats'],
            suggestedCategory: 'menus-sandbox',
            suggestedTags: ['cheats'],
            confidence: 0.82,
            reason: 'keywords: menu, noclip, god mode',
          },
        ],
        applied: 0,
      },
    ],
  },
);

// -----------------------------------------------------------------------------------------------
// Curation: kit staff picks and manual badges
// -----------------------------------------------------------------------------------------------

export const KitStaffPickBody = dto('KitStaffPickBody', z.strictObject({ isStaffPick: z.boolean() }), {
  description: 'Feature a public kit (landing «Esenciales para empezar», `/install` starter kit) or stop featuring it.',
  examples: [{ isStaffPick: true }],
});

export const KitStaffPickDTO = dto('KitStaffPickDTO', z.object({ kitId: EntityId, isStaffPick: z.boolean() }), {
  description: 'Staff-pick state of a kit after the change.',
  examples: [{ kitId: 5, isStaffPick: true }],
});

export const MANUAL_BADGE_KEYS = ['translator'] as const;

export const ManualBadgeDTO = dto(
  'ManualBadgeDTO',
  z.object({ userId: EntityId, badgeKey: z.enum(MANUAL_BADGE_KEYS), granted: z.boolean() }),
  {
    description: 'A badge only admins grant (PLAN §7.2 `translator`) and whether the user holds it now.',
    examples: [{ userId: 12, badgeKey: 'translator', granted: true }],
  },
);

// -----------------------------------------------------------------------------------------------
// Awards and announcements
// -----------------------------------------------------------------------------------------------

export const AwardInputBody = dto(
  'AwardInputBody',
  z.strictObject({
    kind: AwardKind,
    modId: EntityId,
    periodStart: IsoDate,
    periodEnd: IsoDate,
    reason: z.string().trim().max(500).optional(),
  }),
  {
    description: 'Create or replace an award (e.g. override the Mod of the Week).',
    examples: [{ kind: 'staff_pick', modId: 20, periodStart: '2026-10-01', periodEnd: '2026-10-31' }],
  },
);

export const AwardListDTO = dto('AwardListDTO', z.object({ items: z.array(AwardDTO) }), {
  description: 'Awards, newest first.',
  examples: [{ items: [exampleOf(AwardDTO)] }],
});

export const ANNOUNCEMENT_LEVELS = ['info', 'warning', 'patch'] as const;

export const AnnouncementDTO = dto(
  'AnnouncementDTO',
  z.object({
    id: EntityId,
    level: z.enum(ANNOUNCEMENT_LEVELS),
    messages: LocalizedNames.describe('Message per locale (`en` required)'),
    href: z.string().nullable(),
    startsAt: IsoDateTime,
    endsAt: IsoDateTime.nullable(),
    dismissible: z.boolean(),
  }),
  {
    description: 'Global announcement banner (admin view).',
    examples: [
      {
        id: 2,
        level: 'patch',
        messages: {
          en: 'Patch 1.0.5 is out: check the Patch Radar',
          es: 'Ya salió el parche 1.0.5: mira el Radar de parches',
        },
        href: '/patch-radar',
        startsAt: '2026-10-20T00:00:00.000Z',
        endsAt: null,
        dismissible: true,
      },
    ],
  },
);

export const AnnouncementListDTO = dto('AnnouncementListDTO', z.object({ items: z.array(AnnouncementDTO) }), {
  description: 'All announcements.',
  examples: [{ items: [exampleOf(AnnouncementDTO)] }],
});

export const AnnouncementInputBody = dto(
  'AnnouncementInputBody',
  z.strictObject({
    level: z.enum(ANNOUNCEMENT_LEVELS),
    messages: LocalizedNames.refine(
      (messages) => typeof messages.en === 'string' && messages.en.length > 0,
      'the English message is required',
    ),
    href: z.string().max(2048).nullable().default(null),
    startsAt: IsoDateTime,
    endsAt: IsoDateTime.nullable().default(null),
    dismissible: z.boolean().default(true),
  }),
  {
    description: 'Create or replace an announcement.',
    examples: [{ level: 'info', messages: { en: 'Welcome to v2!' }, startsAt: '2026-11-01T00:00:00.000Z' }],
  },
);

export const ActiveAnnouncementDTO = dto(
  'ActiveAnnouncementDTO',
  z.object({
    id: EntityId,
    level: z.enum(ANNOUNCEMENT_LEVELS),
    message: z.string().describe('Resolved for the requested locale (falls back to English)'),
    href: z.string().nullable(),
    dismissible: z.boolean(),
    endsAt: IsoDateTime.nullable(),
  }),
  {
    description: 'Announcement resolved for a locale.',
    examples: [
      {
        id: 2,
        level: 'patch',
        message: 'Ya salió el parche 1.0.5: mira el Radar de parches',
        href: '/patch-radar',
        dismissible: true,
        endsAt: null,
      },
    ],
  },
);

export const ActiveAnnouncementsDTO = dto(
  'ActiveAnnouncementsDTO',
  z.object({ items: z.array(ActiveAnnouncementDTO) }),
  {
    description: 'Announcements active now.',
    examples: [{ items: [exampleOf(ActiveAnnouncementDTO)] }],
  },
);

// -----------------------------------------------------------------------------------------------
// Site settings (`SiteSetting`)
// -----------------------------------------------------------------------------------------------

export const SITE_SETTING_KEYS = [
  'ads',
  'discordWebhooks',
  'moderationTemplates',
  'limits',
  'kelvinseek',
  'featureFlags',
] as const;
export const SiteSettingKey = z.enum(SITE_SETTING_KEYS);
export type SiteSettingKey = z.infer<typeof SiteSettingKey>;

export const DISCORD_EVENTS = ['mod.published', 'version.published', 'award.mod_of_week', 'milestone.10k'] as const;

/** Value schema of every setting key. */
export const SITE_SETTING_SCHEMAS = {
  ads: z.strictObject({
    enabled: z.boolean(),
    clientId: z
      .string()
      .regex(/^ca-pub-\d{10,20}$/)
      .nullable(),
    slots: z.record(z.string(), z.string().regex(/^\d{6,20}$/)),
  }),
  discordWebhooks: z
    .array(
      z.strictObject({
        name: z.string().trim().min(1).max(60),
        url: HttpUrl.refine(
          (url) => /^https:\/\/(?:discord\.com|discordapp\.com)\/api\/webhooks\//.test(url),
          'expected a Discord webhook URL',
        ),
        events: z.array(z.enum(DISCORD_EVENTS)).min(1),
        excludeBeta: z.boolean().default(true),
      }),
    )
    .max(10),
  moderationTemplates: z
    .array(
      z.strictObject({
        key: z.string().regex(/^[a-z0-9_]{2,60}$/),
        action: ModerationAction,
        messages: LocalizedNames,
      }),
    )
    .max(100),
  limits: z.record(
    z.string(),
    z.strictObject({ max: z.number().int().positive(), windowSeconds: z.number().int().positive() }),
  ),
  kelvinseek: z.strictObject({
    enabled: z.boolean(),
    model: z.string().min(1).max(60),
    dailyBudgetUsd: z.number().nonnegative().max(1000),
    timeoutMs: z.number().int().min(1000).max(30_000),
  }),
  featureFlags: z.record(z.string().regex(/^[a-zA-Z0-9_.-]{1,60}$/), z.boolean()),
} as const satisfies Record<SiteSettingKey, z.ZodType>;

export const SiteSettingDTO = dto(
  'SiteSettingDTO',
  z.object({
    key: SiteSettingKey,
    value: z.unknown(),
    updatedAt: IsoDateTime.nullable(),
    updatedById: EntityId.nullable(),
  }),
  {
    description: 'A site setting (the value shape depends on the key, see `SITE_SETTING_SCHEMAS`).',
    examples: [
      {
        key: 'kelvinseek',
        value: { enabled: true, model: 'gpt-4o-mini', dailyBudgetUsd: 3, timeoutMs: 8000 },
        updatedAt: '2026-09-29T10:00:00.000Z',
        updatedById: 1,
      },
    ],
  },
);

export const PutSiteSettingBody = dto('PutSiteSettingBody', z.strictObject({ value: z.unknown() }), {
  description: 'New value, validated against `SITE_SETTING_SCHEMAS[key]`.',
  examples: [{ value: { enabled: true, model: 'gpt-4o-mini', dailyBudgetUsd: 3, timeoutMs: 8000 } }],
});

/** Validates a setting value for its key. */
export function parseSiteSetting<K extends SiteSettingKey>(key: K, value: unknown) {
  return SITE_SETTING_SCHEMAS[key].safeParse(value) as z.ZodSafeParseResult<z.output<(typeof SITE_SETTING_SCHEMAS)[K]>>;
}

// -----------------------------------------------------------------------------------------------
// KelvinSeek usage and RUM
// -----------------------------------------------------------------------------------------------

export const KelvinUsageDTO = dto(
  'KelvinUsageDTO',
  z.object({
    budgetUsd: z.number().nonnegative(),
    todayCostUsd: z.number().nonnegative(),
    days: z.array(
      z.object({
        day: IsoDate,
        requests: Count,
        fallbacks: Count,
        tokensIn: Count,
        tokensOut: Count,
        costUsd: z.number().nonnegative(),
      }),
    ),
  }),
  {
    description: 'KelvinSeek usage per day (`KelvinUsageDaily`).',
    examples: [
      {
        budgetUsd: 3,
        todayCostUsd: 0.42,
        days: [{ day: '2026-09-29', requests: 812, fallbacks: 4, tokensIn: 410_000, tokensOut: 55_000, costUsd: 0.42 }],
      },
    ],
  },
);

export const RumDTO = dto(
  'RumDTO',
  z.object({
    range: z.enum(['7d', '28d']),
    rows: z.array(
      z.object({
        template: z.string(),
        country: z.string().length(2).nullable(),
        samples: Count,
        lcpP75: z.number().nonnegative().nullable(),
        inpP75: z.number().nonnegative().nullable(),
        clsP75: z.number().nonnegative().nullable(),
        fcpP75: z.number().nonnegative().nullable(),
        ttfbP75: z.number().nonnegative().nullable(),
      }),
    ),
  }),
  {
    description: 'Real-user Core Web Vitals p75 per template and country.',
    examples: [
      {
        range: '28d',
        rows: [
          {
            template: 'mod',
            country: null,
            samples: 10_400,
            lcpP75: 1180,
            inpP75: 96,
            clsP75: 0.01,
            fcpP75: 820,
            ttfbP75: 140,
          },
        ],
      },
    ],
  },
);

// -----------------------------------------------------------------------------------------------
// Operations (PLAN §10.3 "Métricas operativas")
// -----------------------------------------------------------------------------------------------

export const OpsQueueDTO = dto(
  'OpsQueueDTO',
  z.object({
    name: z.string(),
    queued: Count.describe('Waiting to run (created + retry)'),
    active: Count,
    failed24h: Count,
    completed1h: Count,
    oldestQueuedAt: IsoDateTime.nullable(),
  }),
  {
    description: 'Depth and recent outcome of one pg-boss queue.',
    examples: [
      {
        name: 'cdn.purge',
        queued: 2,
        active: 0,
        failed24h: 0,
        completed1h: 41,
        oldestQueuedAt: '2026-09-29T09:59:40.000Z',
      },
    ],
  },
);

export const OpsDTO = dto(
  'OpsDTO',
  z.object({
    generatedAt: IsoDateTime,
    queues: z.array(OpsQueueDTO).describe('Queues with any job in the last 24 h, busiest first'),
    deadLetter: Count.describe('Jobs whose retries are exhausted and not handled yet (alert when > 0)'),
    downloads: z.object({ lastHour: Count, last24h: Count }),
    purge: z.object({
      lastCompletedAt: IsoDateTime.nullable(),
      queued: Count,
      failed24h: Count,
    }),
  }),
  {
    description: 'Operational readout of Ranger Station › Admin: job queues, dead letters, downloads and CDN purges.',
    examples: [
      {
        generatedAt: '2026-09-29T10:00:00.000Z',
        queues: [exampleOf(OpsQueueDTO)],
        deadLetter: 0,
        downloads: { lastHour: 94, last24h: 1_720 },
        purge: { lastCompletedAt: '2026-09-29T09:58:12.000Z', queued: 2, failed24h: 0 },
      },
    ],
  },
);

// -----------------------------------------------------------------------------------------------
// Endpoints
// -----------------------------------------------------------------------------------------------

const admin = `${API_V2_PREFIX}/admin`;
const IdParams = z.object({ id: IdParam });
const adminWrite = { auth: 'admin', requires: ['recent_auth_12h'], cache: cache.noStore } as const;
const adminRead = { auth: 'admin', requires: ['recent_auth_12h'], cache: cache.private } as const;

export const adminEndpoints = {
  activeAnnouncements: defineEndpoint({
    id: 'admin.activeAnnouncements',
    owner: 'WP-51',
    method: 'GET',
    path: `${API_V2_PREFIX}/announcements/active`,
    summary: 'Active announcements for the global banner',
    auth: 'public',
    query: z.object({ locale: Locale.default('en') }),
    response: ActiveAnnouncementsDTO,
    cache: cache.publicApi(['html'], 300),
    rateLimit: 'anonymousRead',
  }),
  listGameBuilds: defineEndpoint({
    ...adminRead,
    id: 'admin.listGameBuilds',
    owner: 'WP-50',
    method: 'GET',
    path: `${admin}/game-builds`,
    summary: 'Game builds',
    response: GameBuildListDTO,
    errors: ['FORBIDDEN', 'REAUTH_REQUIRED'],
  }),
  createGameBuild: defineEndpoint({
    ...adminWrite,
    id: 'admin.createGameBuild',
    owner: 'WP-50',
    method: 'POST',
    path: `${admin}/game-builds`,
    summary: 'Register a game build',
    body: CreateGameBuildBody,
    status: 201,
    response: GameBuildDTO,
    errors: ['FORBIDDEN', 'CONFLICT', 'REAUTH_REQUIRED'],
  }),
  updateGameBuild: defineEndpoint({
    ...adminWrite,
    id: 'admin.updateGameBuild',
    owner: 'WP-50',
    method: 'PATCH',
    path: `${admin}/game-builds/:id`,
    summary: 'Edit a game build',
    params: IdParams,
    body: UpdateGameBuildBody,
    response: GameBuildDTO,
    errors: ['FORBIDDEN', 'NOT_FOUND', 'CONFLICT', 'REAUTH_REQUIRED'],
  }),
  deleteGameBuild: defineEndpoint({
    ...adminWrite,
    id: 'admin.deleteGameBuild',
    owner: 'WP-50',
    method: 'DELETE',
    path: `${admin}/game-builds/:id`,
    summary: 'Delete a game build without reports',
    params: IdParams,
    responseKind: 'empty',
    errors: ['FORBIDDEN', 'NOT_FOUND', 'CONFLICT', 'REAUTH_REQUIRED'],
  }),
  listLoaderReleases: defineEndpoint({
    ...adminRead,
    id: 'admin.listLoaderReleases',
    owner: 'WP-50',
    method: 'GET',
    path: `${admin}/loader-releases`,
    summary: 'Loader and manager releases',
    response: LoaderReleaseListDTO,
    errors: ['FORBIDDEN', 'REAUTH_REQUIRED'],
  }),
  createLoaderRelease: defineEndpoint({
    ...adminWrite,
    id: 'admin.createLoaderRelease',
    owner: 'WP-50',
    method: 'POST',
    path: `${admin}/loader-releases`,
    summary: 'Register a loader or manager release',
    body: CreateLoaderReleaseBody,
    status: 201,
    response: LoaderReleaseDTO,
    errors: ['FORBIDDEN', 'CONFLICT', 'REAUTH_REQUIRED'],
  }),
  putEcosystem: defineEndpoint({
    ...adminWrite,
    id: 'admin.putEcosystem',
    owner: 'WP-50',
    method: 'PUT',
    path: `${admin}/ecosystem`,
    summary: 'Set the ecosystem status of a loader on a build',
    body: PutEcosystemBody,
    response: EcosystemEntryDTO,
    errors: ['FORBIDDEN', 'NOT_FOUND', 'REAUTH_REQUIRED'],
  }),
  listCategories: defineEndpoint({
    ...adminRead,
    id: 'admin.listCategories',
    owner: 'WP-51',
    method: 'GET',
    path: `${admin}/categories`,
    summary: 'All categories, retired included',
    response: AdminCategoryListDTO,
    errors: ['FORBIDDEN', 'REAUTH_REQUIRED'],
  }),
  createCategory: defineEndpoint({
    ...adminWrite,
    id: 'admin.createCategory',
    owner: 'WP-51',
    method: 'POST',
    path: `${admin}/categories`,
    summary: 'Create a category',
    body: CategoryInputBody,
    status: 201,
    response: AdminCategoryDTO,
    errors: ['FORBIDDEN', 'CONFLICT', 'REAUTH_REQUIRED'],
  }),
  updateCategory: defineEndpoint({
    ...adminWrite,
    id: 'admin.updateCategory',
    owner: 'WP-51',
    method: 'PUT',
    path: `${admin}/categories/:id`,
    summary: 'Replace a category',
    params: IdParams,
    body: CategoryInputBody,
    response: AdminCategoryDTO,
    errors: ['FORBIDDEN', 'NOT_FOUND', 'CONFLICT', 'REAUTH_REQUIRED'],
  }),
  retireCategory: defineEndpoint({
    ...adminWrite,
    id: 'admin.retireCategory',
    owner: 'WP-51',
    method: 'DELETE',
    path: `${admin}/categories/:id`,
    summary: 'Retire a category (soft; its mods must be recategorised first)',
    params: IdParams,
    responseKind: 'empty',
    errors: ['FORBIDDEN', 'NOT_FOUND', 'CONFLICT', 'REAUTH_REQUIRED'],
  }),
  listTags: defineEndpoint({
    ...adminRead,
    id: 'admin.listTags',
    owner: 'WP-51',
    method: 'GET',
    path: `${admin}/tags`,
    summary: 'All tags',
    response: AdminTagListDTO,
    errors: ['FORBIDDEN', 'REAUTH_REQUIRED'],
  }),
  createTag: defineEndpoint({
    ...adminWrite,
    id: 'admin.createTag',
    owner: 'WP-51',
    method: 'POST',
    path: `${admin}/tags`,
    summary: 'Create a tag',
    body: TagInputBody,
    status: 201,
    response: AdminTagDTO,
    errors: ['FORBIDDEN', 'CONFLICT', 'REAUTH_REQUIRED'],
  }),
  updateTag: defineEndpoint({
    ...adminWrite,
    id: 'admin.updateTag',
    owner: 'WP-51',
    method: 'PUT',
    path: `${admin}/tags/:id`,
    summary: 'Replace a tag',
    params: IdParams,
    body: TagInputBody,
    response: AdminTagDTO,
    errors: ['FORBIDDEN', 'NOT_FOUND', 'CONFLICT', 'REAUTH_REQUIRED'],
  }),
  deleteTag: defineEndpoint({
    ...adminWrite,
    id: 'admin.deleteTag',
    owner: 'WP-51',
    method: 'DELETE',
    path: `${admin}/tags/:id`,
    summary: 'Delete a tag (detaches it from mods)',
    params: IdParams,
    responseKind: 'empty',
    errors: ['FORBIDDEN', 'NOT_FOUND', 'REAUTH_REQUIRED'],
  }),
  recategorize: defineEndpoint({
    ...adminWrite,
    id: 'admin.recategorize',
    owner: 'WP-51',
    method: 'POST',
    path: `${admin}/recategorize`,
    summary: 'Bulk recategorisation (suggestions + confirmed changes)',
    body: RecategorizeBody,
    response: RecategorizeResultDTO,
    errors: ['FORBIDDEN', 'REAUTH_REQUIRED'],
  }),
  setKitStaffPick: defineEndpoint({
    ...adminWrite,
    id: 'admin.setKitStaffPick',
    owner: 'WP-51',
    method: 'PUT',
    path: `${admin}/kits/:id/staff-pick`,
    summary: 'Feature a kit as a staff pick (or stop featuring it)',
    params: IdParams,
    body: KitStaffPickBody,
    response: KitStaffPickDTO,
    errors: ['FORBIDDEN', 'NOT_FOUND', 'CONFLICT', 'REAUTH_REQUIRED'],
  }),
  grantManualBadge: defineEndpoint({
    ...adminWrite,
    id: 'admin.grantManualBadge',
    owner: 'WP-51',
    method: 'PUT',
    path: `${admin}/users/:id/badges/:badgeKey`,
    summary: 'Grant a manual badge (translator)',
    params: z.object({ id: IdParam, badgeKey: z.enum(MANUAL_BADGE_KEYS) }),
    response: ManualBadgeDTO,
    errors: ['FORBIDDEN', 'NOT_FOUND', 'REAUTH_REQUIRED'],
  }),
  revokeManualBadge: defineEndpoint({
    ...adminWrite,
    id: 'admin.revokeManualBadge',
    owner: 'WP-51',
    method: 'DELETE',
    path: `${admin}/users/:id/badges/:badgeKey`,
    summary: 'Remove a manual badge (translator)',
    params: z.object({ id: IdParam, badgeKey: z.enum(MANUAL_BADGE_KEYS) }),
    response: ManualBadgeDTO,
    errors: ['FORBIDDEN', 'NOT_FOUND', 'REAUTH_REQUIRED'],
  }),
  listAwards: defineEndpoint({
    ...adminRead,
    id: 'admin.listAwards',
    owner: 'WP-51',
    method: 'GET',
    path: `${admin}/awards`,
    summary: 'Awards',
    response: AwardListDTO,
    errors: ['FORBIDDEN', 'REAUTH_REQUIRED'],
  }),
  createAward: defineEndpoint({
    ...adminWrite,
    id: 'admin.createAward',
    owner: 'WP-51',
    method: 'POST',
    path: `${admin}/awards`,
    summary: 'Create an award (replaces the one of the same kind and period)',
    body: AwardInputBody,
    status: 201,
    response: AwardDTO,
    errors: ['FORBIDDEN', 'NOT_FOUND', 'CONFLICT', 'REAUTH_REQUIRED'],
  }),
  deleteAward: defineEndpoint({
    ...adminWrite,
    id: 'admin.deleteAward',
    owner: 'WP-51',
    method: 'DELETE',
    path: `${admin}/awards/:id`,
    summary: 'Delete an award',
    params: IdParams,
    responseKind: 'empty',
    errors: ['FORBIDDEN', 'NOT_FOUND', 'REAUTH_REQUIRED'],
  }),
  listAnnouncements: defineEndpoint({
    ...adminRead,
    id: 'admin.listAnnouncements',
    owner: 'WP-51',
    method: 'GET',
    path: `${admin}/announcements`,
    summary: 'Announcements',
    response: AnnouncementListDTO,
    errors: ['FORBIDDEN', 'REAUTH_REQUIRED'],
  }),
  createAnnouncement: defineEndpoint({
    ...adminWrite,
    id: 'admin.createAnnouncement',
    owner: 'WP-51',
    method: 'POST',
    path: `${admin}/announcements`,
    summary: 'Create an announcement',
    body: AnnouncementInputBody,
    status: 201,
    response: AnnouncementDTO,
    errors: ['FORBIDDEN', 'REAUTH_REQUIRED'],
  }),
  updateAnnouncement: defineEndpoint({
    ...adminWrite,
    id: 'admin.updateAnnouncement',
    owner: 'WP-51',
    method: 'PUT',
    path: `${admin}/announcements/:id`,
    summary: 'Replace an announcement',
    params: IdParams,
    body: AnnouncementInputBody,
    response: AnnouncementDTO,
    errors: ['FORBIDDEN', 'NOT_FOUND', 'REAUTH_REQUIRED'],
  }),
  deleteAnnouncement: defineEndpoint({
    ...adminWrite,
    id: 'admin.deleteAnnouncement',
    owner: 'WP-51',
    method: 'DELETE',
    path: `${admin}/announcements/:id`,
    summary: 'Delete an announcement',
    params: IdParams,
    responseKind: 'empty',
    errors: ['FORBIDDEN', 'NOT_FOUND', 'REAUTH_REQUIRED'],
  }),
  getSetting: defineEndpoint({
    ...adminRead,
    id: 'admin.getSetting',
    owner: 'WP-51',
    method: 'GET',
    path: `${admin}/settings/:key`,
    summary: 'Read a site setting',
    params: z.object({ key: SiteSettingKey }),
    response: SiteSettingDTO,
    errors: ['FORBIDDEN', 'NOT_FOUND', 'REAUTH_REQUIRED'],
  }),
  putSetting: defineEndpoint({
    ...adminWrite,
    id: 'admin.putSetting',
    owner: 'WP-51',
    method: 'PUT',
    path: `${admin}/settings/:key`,
    summary: 'Replace a site setting',
    params: z.object({ key: SiteSettingKey }),
    body: PutSiteSettingBody,
    response: SiteSettingDTO,
    errors: ['FORBIDDEN', 'REAUTH_REQUIRED'],
  }),
  kelvinseekUsage: defineEndpoint({
    ...adminRead,
    id: 'admin.kelvinseekUsage',
    owner: 'WP-51',
    method: 'GET',
    path: `${admin}/kelvinseek/usage`,
    summary: 'KelvinSeek usage and budget',
    query: z.object({ days: z.enum(['7', '30', '90']).default('30') }),
    response: KelvinUsageDTO,
    errors: ['FORBIDDEN', 'REAUTH_REQUIRED'],
  }),
  operations: defineEndpoint({
    ...adminRead,
    id: 'admin.operations',
    owner: 'WP-51',
    method: 'GET',
    path: `${admin}/ops`,
    summary: 'Job queues, dead letters, downloads per hour and CDN purges',
    response: OpsDTO,
    errors: ['FORBIDDEN', 'REAUTH_REQUIRED'],
  }),
  rum: defineEndpoint({
    ...adminRead,
    id: 'admin.rum',
    owner: 'WP-51',
    method: 'GET',
    path: `${admin}/rum`,
    summary: 'Real-user Core Web Vitals p75',
    query: z.object({ range: z.enum(['7d', '28d']).default('28d') }),
    response: RumDTO,
    errors: ['FORBIDDEN', 'REAUTH_REQUIRED'],
  }),
} as const;
