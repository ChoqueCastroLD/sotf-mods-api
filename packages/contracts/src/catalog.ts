/**
 * Catalog and public reads (PLAN §5.2 "Catálogo y búsqueda", §5.4, §6.8, T0-03/T0-06/T0-09/T0-30).
 * Implemented by WP-33.
 *
 * Status rules: listings only contain `published`; `pending` (checks passed) and `unlisted` are
 * reachable by direct URL with flags; `archived` by URL with a banner; `rejected` → 404 and
 * `removed` → 410. NSFW is excluded unless `nsfw=1` and the viewer opted in.
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import {
  AwardRefDTO,
  CategoryRefDTO,
  CategorySlug,
  CompatStatus,
  ContentLang,
  Count,
  CreatorTierKey,
  DedicatedServer,
  EntityId,
  Handle,
  HexColor,
  HttpUrl,
  IdParam,
  ImageDTO,
  IsoDate,
  IsoDateTime,
  LinkDTO,
  Locale,
  ManifestId,
  MilestoneDTO,
  ModKind,
  ModLicense,
  ModRefDTO,
  ModSlug,
  ModStatus,
  MultiplayerRole,
  Platform,
  Role,
  SafeToRemove,
  SitePath,
  SurvivorRankKey,
  TagRefDTO,
  UserRefDTO,
  VersionString,
} from './common.ts';
import { CompatSummaryDTO } from './compat.ts';
import { dto, exampleOf, examplesOf, wireFlag, wireInt, wireList, wireOneOrMany } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';
import { BuildMetaDTO } from './manifest.ts';
import { CursorQuery, cursorPageOf, PageQuery, pageOf } from './pagination.ts';
import { ReviewDTO, ReviewsSummaryDTO } from './reviews.ts';
import { CardLocalizedDTO } from './translations.ts';
import { DependencyDTO, VersionDTO } from './versions.ts';

// -----------------------------------------------------------------------------------------------
// Cards and details
// -----------------------------------------------------------------------------------------------

/** Generated share card (`og.render`, PLAN §8.6): `R2_PUBLIC_BASE_URL/<ogImageKey>`, 1200×630 PNG. */
export const OgImageDTO = dto(
  'OgImageDTO',
  z.object({ url: HttpUrl, width: z.literal(1200), height: z.literal(630) }),
  {
    description: 'Open Graph image generated for the entity (null until the worker renders it).',
    examples: [{ url: 'https://r2.sotf-mods.com/og/mod/20-3f9a1c.png', width: 1200, height: 630 }],
  },
);

/** Blueprint facts shown on build cards (null for mods and libraries). */
export const BuildCardFactsDTO = dto(
  'BuildCardFactsDTO',
  z.object({
    pieces: Count.nullable().describe('Number of elements of the latest blueprint'),
    buildShareVersion: z.string().nullable(),
  }),
  {
    description: 'Pieces and BuildShare version of a build (latest version, legacy columns as fallback).',
    examples: [{ pieces: 4125, buildShareVersion: '0.0.16' }],
  },
);

export const ModCardDTO = dto(
  'ModCardDTO',
  z.object({
    id: EntityId,
    kind: ModKind,
    manifestId: ManifestId,
    name: z.string(),
    slug: ModSlug,
    canonicalPath: SitePath,
    userId: EntityId,
    userHandle: Handle,
    userDisplayName: z.string(),
    verifiedCreator: z.boolean(),
    category: CategoryRefDTO.nullable(),
    shortDescription: z.string(),
    thumbnail: ImageDTO.nullable(),
    latestVersion: VersionString.nullable(),
    downloads: Count.describe('All-time downloads, including the legacy history'),
    downloads7d: Count,
    followers: Count,
    ratingAvg: z.number().min(1).max(5).nullable().describe('Mean of visible reviews; null without reviews'),
    ratingCount: Count,
    compatStatus: CompatStatus,
    multiplayerRole: MultiplayerRole.nullable(),
    platform: Platform.nullable(),
    isFeatured: z.boolean(),
    awards: z.array(AwardRefDTO),
    lastReleasedAt: IsoDateTime,
    nsfw: z.boolean(),
    status: ModStatus,
    build: BuildCardFactsDTO.nullable().describe('Builds only'),
    localized: CardLocalizedDTO.optional().describe(
      'Translated name and short description for the visitor’s locale. Never set by the API: the web attaches it to the cards of a page before rendering (see `translations.forMods`).',
    ),
  }),
  {
    description: 'Mod/build card used in listings, search and kits.',
    examples: [
      {
        id: 20,
        kind: 'mod',
        manifestId: 'AxelModMenu',
        name: "Axel's Mod Menu",
        slug: "axel's-mod-menu",
        canonicalPath: "/mods/imaxel/axel's-mod-menu",
        userId: 12,
        userHandle: 'imaxel',
        userDisplayName: 'ImAxel',
        verifiedCreator: true,
        category: {
          slug: 'quality-of-life',
          nameKey: 'taxonomy_category_quality_of_life',
          name: 'Quality of Life',
          icon: 'wand-sparkles',
        },
        shortDescription: 'In-game menu with noclip, god mode, spawners and more.',
        thumbnail: exampleOf(ImageDTO),
        latestVersion: '1.3.8',
        downloads: 117_719,
        downloads7d: 1_542,
        followers: 24,
        ratingAvg: 4.6,
        ratingCount: 14,
        compatStatus: 'works',
        multiplayerRole: 'host_only',
        platform: 'Client',
        isFeatured: false,
        awards: [exampleOf(AwardRefDTO)],
        lastReleasedAt: '2026-09-26T21:33:31.396Z',
        nsfw: false,
        status: 'published',
        build: null,
      },
    ],
  },
);
export type ModCardDTO = z.infer<typeof ModCardDTO>;

export const STATUS_BANNERS = [
  'pending_review',
  'unlisted',
  'archived',
  'broken_on_current',
  'possibly_outdated',
  'nsfw',
] as const;
export const StatusBanner = z.enum(STATUS_BANNERS);

export const ModDetailDTO = dto(
  'ModDetailDTO',
  ModCardDTO.extend({
    latestVersion: VersionDTO.nullable(),
    descriptionHtml: z.string(),
    descriptionMd: z
      .string()
      .optional()
      .describe('Markdown source; only in owner responses (studio), never in public cached responses'),
    tags: z.array(TagRefDTO),
    gallery: z.array(ImageDTO),
    video: z.object({ provider: z.literal('youtube'), id: z.string(), url: HttpUrl }).nullable(),
    license: ModLicense.nullable(),
    sourceUrl: HttpUrl.nullable(),
    supportLinks: z.array(LinkDTO),
    contentLang: ContentLang.nullable(),
    dedicatedServer: DedicatedServer.nullable(),
    safeToRemove: SafeToRemove.nullable(),
    logColor: HexColor.nullable(),
    dependencies: z.array(DependencyDTO).describe('Dependencies of the latest version'),
    dependentsCount: Count,
    kitsCount: Count,
    compatCurrent: CompatSummaryDTO,
    possiblyOutdated: z.boolean(),
    reviewsSummary: ReviewsSummaryDTO,
    commentsCount: Count,
    milestones: z.array(MilestoneDTO),
    originalAuthor: z.object({ name: z.string(), url: HttpUrl.nullable() }).nullable(),
    successor: ModRefDTO.nullable(),
    banners: z.array(StatusBanner),
    noindex: z.boolean().describe('pending/unlisted pages carry noindex'),
    alternates: z.array(z.object({ hreflang: z.string(), path: SitePath })),
    author: UserRefDTO,
    createdAt: IsoDateTime,
    publishedAt: IsoDateTime.nullable(),
    editedAt: IsoDateTime.nullable(),
    buildMeta: BuildMetaDTO.nullable().describe('Blueprint facts of the latest build version (builds only)'),
    ogImage: OgImageDTO.nullable(),
  }),
  {
    description: 'Mod/build detail page data.',
    examples: [
      {
        ...exampleOf(ModCardDTO),
        latestVersion: exampleOf(VersionDTO),
        descriptionHtml: '<h2 id="features">Features</h2><ul><li>Noclip</li><li>God mode</li></ul>',
        tags: [exampleOf(TagRefDTO)],
        gallery: [exampleOf(ImageDTO)],
        video: { provider: 'youtube', id: 'dQw4w9WgXcQ', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
        license: 'all-rights-reserved',
        sourceUrl: 'https://github.com/ImAxel0/AxelModMenu',
        supportLinks: [exampleOf(LinkDTO)],
        contentLang: 'en',
        dedicatedServer: 'no',
        safeToRemove: 'yes',
        logColor: '#FF9900',
        dependencies: [...examplesOf(DependencyDTO)],
        dependentsCount: 0,
        kitsCount: 3,
        compatCurrent: exampleOf(CompatSummaryDTO),
        possiblyOutdated: false,
        reviewsSummary: exampleOf(ReviewsSummaryDTO),
        commentsCount: 42,
        milestones: [exampleOf(MilestoneDTO)],
        originalAuthor: null,
        successor: null,
        banners: [],
        noindex: false,
        alternates: [
          { hreflang: 'en', path: "/mods/imaxel/axel's-mod-menu" },
          { hreflang: 'es', path: "/es/mods/imaxel/axel's-mod-menu" },
          { hreflang: 'x-default', path: "/mods/imaxel/axel's-mod-menu" },
        ],
        author: exampleOf(UserRefDTO),
        createdAt: '2023-10-01T12:00:00.000Z',
        publishedAt: '2023-10-01T12:00:00.000Z',
        editedAt: '2026-09-26T21:33:31.396Z',
        buildMeta: null,
        ogImage: exampleOf(OgImageDTO),
      },
    ],
  },
);
export type ModDetailDTO = z.infer<typeof ModDetailDTO>;

// -----------------------------------------------------------------------------------------------
// Listing
// -----------------------------------------------------------------------------------------------

export const MOD_LIST_TYPES = ['mod', 'library', 'build', 'all'] as const;
export const MOD_SORTS = [
  'trending',
  'downloads',
  'updated',
  'new',
  'rating',
  'follows',
  'comments',
  'relevance',
] as const;
export const ModSort = z.enum(MOD_SORTS);
export type ModSort = z.infer<typeof ModSort>;
export const SortOrder = z.enum(['asc', 'desc']);

export const MULTIPLAYER_FILTERS = ['client_side', 'host_only', 'all_players', 'singleplayer_only'] as const;
export const MultiplayerFilter = z.enum(MULTIPLAYER_FILTERS);

export const ModListQuery = PageQuery.extend({
  type: z.enum(MOD_LIST_TYPES).default('all'),
  category: wireList(CategorySlug, { max: 12, description: 'Include categories (OR)' }),
  excludeCategory: wireList(CategorySlug, { max: 12, description: 'Exclude categories' }),
  tag: wireList(z.string().max(60), { max: 10, description: 'Include tags (AND)' }),
  excludeTag: wireList(z.string().max(60), { max: 10, description: 'Exclude tags' }),
  compat: z.enum(['works', 'untested', 'any']).default('any'),
  multiplayer: wireOneOrMany(MultiplayerFilter, {
    max: MULTIPLAYER_FILTERS.length,
    description: 'Multiplayer roles (OR): `?multiplayer=host_only&multiplayer=all_players`',
  }),
  dedicated: z.literal('yes').optional(),
  platform: Platform.optional(),
  updatedWithin: z.enum(['30d', '90d', '1y']).optional(),
  minRating: wireInt({ min: 1, max: 5 }).optional(),
  hasSource: wireFlag('Only mods with a source link'),
  verified: wireFlag('Only verified creators'),
  author: Handle.optional(),
  nsfw: wireFlag('Include NSFW (ignored without opt-in)'),
  q: z.string().trim().max(100).optional(),
  sort: ModSort.default('trending'),
  order: SortOrder.default('desc'),
  facets: wireFlag('Include facet counts'),
});
export type ModListQuery = z.output<typeof ModListQuery>;

export const FacetBucketDTO = dto('FacetBucketDTO', z.object({ value: z.string(), count: Count }), {
  description: 'One facet value with its count under the current filters.',
  examples: [{ value: 'quality-of-life', count: 48 }],
});

export const FacetsDTO = dto(
  'FacetsDTO',
  z.object({
    kind: z.array(FacetBucketDTO),
    category: z.array(FacetBucketDTO),
    tag: z.array(FacetBucketDTO),
    platform: z.array(FacetBucketDTO),
    multiplayer: z.array(FacetBucketDTO),
    compat: z.array(FacetBucketDTO),
    updatedWithin: z.array(FacetBucketDTO).describe('Items released within `30d`, `90d`, `1y`'),
    minRating: z.array(FacetBucketDTO).describe('Items rated at least `1`…`5` stars'),
  }),
  {
    description: 'Facet counts of an Explore query.',
    examples: [
      {
        kind: [
          { value: 'mod', count: 190 },
          { value: 'library', count: 12 },
          { value: 'build', count: 36 },
        ],
        category: [exampleOf(FacetBucketDTO)],
        tag: [{ value: 'inventory', count: 9 }],
        platform: [{ value: 'Client', count: 150 }],
        multiplayer: [{ value: 'host_only', count: 40 }],
        compat: [{ value: 'works', count: 71 }],
        updatedWithin: [
          { value: '30d', count: 21 },
          { value: '90d', count: 64 },
          { value: '1y', count: 150 },
        ],
        minRating: [
          { value: '4', count: 58 },
          { value: '5', count: 9 },
        ],
      },
    ],
  },
);

export const ModListDTO = dto(
  'ModListDTO',
  z.object({
    items: z.array(ModCardDTO),
    page: z.number().int().min(1),
    pageSize: z.number().int().min(1),
    total: Count,
    totalPages: Count,
    facets: FacetsDTO.nullable(),
  }),
  {
    description: 'Page of mod cards (+ facets when `facets=1`).',
    examples: [
      { items: [exampleOf(ModCardDTO)], page: 1, pageSize: 24, total: 1, totalPages: 1, facets: exampleOf(FacetsDTO) },
    ],
  },
);
export type ModListDTO = z.infer<typeof ModListDTO>;

export const ModCardPageDTO = pageOf('ModCardPageDTO', ModCardDTO, 'Page of mod cards.');

export const DependencyListDTO = dto('DependencyListDTO', z.object({ items: z.array(DependencyDTO) }), {
  description: 'Resolved dependencies of the latest version.',
  examples: [{ items: [...examplesOf(DependencyDTO)] }],
});

export const ModCardListDTO = dto('ModCardListDTO', z.object({ items: z.array(ModCardDTO) }), {
  description: 'Short unpaginated list of cards (dependents, related).',
  examples: [{ items: [exampleOf(ModCardDTO)] }],
});

// -----------------------------------------------------------------------------------------------
// Taxonomy
// -----------------------------------------------------------------------------------------------

export const LocalizedNames = z.partialRecord(Locale, z.string());

export const CategoryDTO = dto(
  'CategoryDTO',
  z.object({
    id: EntityId,
    slug: CategorySlug,
    kind: z.enum(['mod', 'build']),
    nameKey: z.string(),
    name: z.string(),
    names: LocalizedNames,
    icon: z.string().nullable(),
    sortOrder: z.number().int(),
    legacySlugs: z.array(z.string()),
    count: Count.describe('Published items'),
    ogImage: OgImageDTO.nullable().describe('Share card of the category hub (null until rendered)'),
  }),
  {
    description: 'Category with its i18n names.',
    examples: [
      {
        id: 3,
        slug: 'quality-of-life',
        kind: 'mod',
        nameKey: 'taxonomy_category_quality_of_life',
        name: 'Quality of Life',
        names: { es: 'Calidad de vida', de: 'Komfort' },
        icon: 'wand-sparkles',
        sortOrder: 1,
        legacySlugs: ['qol'],
        count: 48,
        ogImage: null,
      },
    ],
  },
);

export const CategoryListDTO = dto('CategoryListDTO', z.object({ items: z.array(CategoryDTO) }), {
  description: 'Active categories ordered by `sortOrder`.',
  examples: [{ items: [exampleOf(CategoryDTO)] }],
});

export const TagDTO = dto(
  'TagDTO',
  z.object({
    id: EntityId,
    slug: z.string(),
    nameKey: z.string(),
    name: z.string(),
    names: LocalizedNames,
    group: z.string().nullable(),
    isCurated: z.boolean(),
    count: Count,
  }),
  {
    description: 'Tag with its i18n names.',
    examples: [
      {
        id: 5,
        slug: 'inventory',
        nameKey: 'taxonomy_tag_inventory',
        name: 'Inventory',
        names: { es: 'Inventario' },
        group: 'gameplay',
        isCurated: true,
        count: 9,
      },
    ],
  },
);

export const TagListDTO = dto('TagListDTO', z.object({ items: z.array(TagDTO) }), {
  description: 'Tags ordered by group and `sortOrder`.',
  examples: [{ items: [exampleOf(TagDTO)] }],
});

// -----------------------------------------------------------------------------------------------
// Users and creators
// -----------------------------------------------------------------------------------------------

export const UserStatsDTO = dto(
  'UserStatsDTO',
  z.object({
    modsCount: Count,
    buildsCount: Count,
    downloadsTotal: Count,
    followersCount: Count,
    followingCount: Count,
    ratingAvg: z.number().nullable(),
    reviewsCount: Count,
    helpfulVotes: Count,
    compatReportsCount: Count,
  }),
  {
    description: 'Public statistics of a user.',
    examples: [
      {
        modsCount: 16,
        buildsCount: 0,
        downloadsTotal: 374_864,
        followersCount: 58,
        followingCount: 4,
        ratingAvg: 4.6,
        reviewsCount: 3,
        helpfulVotes: 21,
        compatReportsCount: 9,
      },
    ],
  },
);

export const UserPublicDTO = dto(
  'UserPublicDTO',
  z.object({
    id: EntityId,
    handle: Handle,
    displayName: z.string(),
    canonicalPath: SitePath,
    avatar: ImageDTO.nullable(),
    banner: ImageDTO.nullable(),
    bannerSeed: z.number().int().nullable().describe('Seed of the generated topo banner when there is no image'),
    bioHtml: z.string().nullable(),
    links: z.array(LinkDTO),
    role: Role,
    verifiedCreator: z.boolean(),
    createdAt: IsoDateTime,
    creatorTier: CreatorTierKey.nullable(),
    survivorRank: SurvivorRankKey.nullable().describe('null when hidden by privacy settings'),
    xp: Count.nullable().describe('null when hidden by privacy settings'),
    stats: UserStatsDTO,
    pinnedMods: z.array(ModCardDTO).max(3),
    featuredBadgeKeys: z.array(z.string()),
    privacy: z.object({ hideActivity: z.boolean(), hideKits: z.boolean(), hideRank: z.boolean() }),
    hasPublicContent: z.boolean().describe('false → the profile page is noindex'),
    ogImage: OgImageDTO.nullable(),
  }),
  {
    description: 'Public profile (respects the privacy settings).',
    examples: [
      {
        id: 12,
        handle: 'imaxel',
        displayName: 'ImAxel',
        canonicalPath: '/profile/imaxel',
        avatar: null,
        banner: null,
        bannerSeed: 1204,
        bioHtml: '<p>Modding SOTF since 2023.</p>',
        links: [{ kind: 'github', url: 'https://github.com/ImAxel0', label: null }],
        role: 'user',
        verifiedCreator: true,
        createdAt: '2023-09-22T06:13:49.867Z',
        creatorTier: 'fortress',
        survivorRank: 'veteran',
        xp: 6_420,
        stats: exampleOf(UserStatsDTO),
        pinnedMods: [exampleOf(ModCardDTO)],
        featuredBadgeKeys: ['original-survivor-2023', 'crash-landing'],
        privacy: { hideActivity: false, hideKits: false, hideRank: false },
        hasPublicContent: true,
        ogImage: null,
      },
    ],
  },
);
export type UserPublicDTO = z.infer<typeof UserPublicDTO>;

export const CREATOR_SORTS = ['downloads', 'followers', 'recent', 'spotlight'] as const;

export const CreatorCardDTO = dto(
  'CreatorCardDTO',
  z.object({
    user: UserRefDTO,
    modsCount: Count,
    buildsCount: Count,
    downloadsTotal: Count,
    followersCount: Count,
    ratingAvg: z.number().nullable(),
    topMod: ModRefDTO.nullable(),
    lastReleasedAt: IsoDateTime.nullable(),
  }),
  {
    description: 'Creator in the directory.',
    examples: [
      {
        user: exampleOf(UserRefDTO),
        modsCount: 16,
        buildsCount: 0,
        downloadsTotal: 374_864,
        followersCount: 58,
        ratingAvg: 4.6,
        topMod: exampleOf(ModRefDTO),
        lastReleasedAt: '2026-09-26T21:33:31.396Z',
      },
    ],
  },
);

export const CreatorPageDTO = pageOf('CreatorPageDTO', CreatorCardDTO, 'Page of creators.');

export const UserReviewDTO = dto('UserReviewDTO', ReviewDTO.extend({ mod: ModRefDTO }), {
  description: 'A review written by a user, with the reviewed mod.',
  examples: [{ ...exampleOf(ReviewDTO), mod: exampleOf(ModRefDTO) }],
});
export const UserReviewPageDTO = cursorPageOf('UserReviewPageDTO', UserReviewDTO, 'Cursor page of reviews by a user.');

export const ActivityDayDTO = dto(
  'ActivityDayDTO',
  z.object({ day: IsoDate, releases: Count, comments: Count, reviews: Count, reports: Count }),
  {
    description: 'Contributions of one day (profile heatmap).',
    examples: [{ day: '2026-09-26', releases: 1, comments: 3, reviews: 0, reports: 2 }],
  },
);

export const UserActivityDTO = dto(
  'UserActivityDTO',
  z.object({ from: IsoDate, to: IsoDate, days: z.array(ActivityDayDTO).describe('Only days with activity') }),
  {
    description: 'Last 12 months of contributions (empty when hidden by privacy).',
    examples: [{ from: '2025-09-30', to: '2026-09-29', days: [exampleOf(ActivityDayDTO)] }],
  },
);

// -----------------------------------------------------------------------------------------------
// Endpoints
// -----------------------------------------------------------------------------------------------

const base = API_V2_PREFIX;
const HandleParam = z.object({ handle: Handle });

export const catalogEndpoints = {
  listMods: defineEndpoint({
    id: 'catalog.listMods',
    owner: 'WP-33',
    method: 'GET',
    path: `${base}/mods`,
    summary: 'Explore mods, libraries and builds',
    description: 'Only `published` items. Include/exclude facets, sorts and counts (`facets=1`).',
    auth: 'public',
    query: ModListQuery,
    response: ModListDTO,
    cache: cache.publicApi(['list:mods', 'list:builds']),
    rateLimit: 'anonymousRead',
  }),
  getMod: defineEndpoint({
    id: 'catalog.getMod',
    owner: 'WP-33',
    method: 'GET',
    path: `${base}/mods/:id`,
    summary: 'Mod detail by id',
    auth: 'public',
    params: z.object({ id: IdParam }),
    response: ModDetailDTO,
    errors: ['NOT_FOUND', 'GONE'],
    cache: cache.publicApi(['mod:{id}']),
    rateLimit: 'anonymousRead',
  }),
  getModBySlug: defineEndpoint({
    id: 'catalog.getModBySlug',
    owner: 'WP-33',
    method: 'GET',
    path: `${base}/mods/by-slug/:user/:slug`,
    summary: 'Mod detail by user handle and slug (exact)',
    description: 'Exact match only; tolerant resolution (history, case, owner changes) is `GET /resolve`.',
    auth: 'public',
    params: z.object({ user: Handle, slug: ModSlug }),
    response: ModDetailDTO,
    errors: ['NOT_FOUND', 'GONE'],
    cache: cache.publicApi(['mod:{id}']),
    rateLimit: 'anonymousRead',
  }),
  getModByManifest: defineEndpoint({
    id: 'catalog.getModByManifest',
    owner: 'WP-33',
    method: 'GET',
    path: `${base}/mods/by-manifest/:manifestId`,
    summary: 'Mod detail by manifest id (case-sensitive)',
    auth: 'public',
    params: z.object({ manifestId: ManifestId }),
    response: ModDetailDTO,
    errors: ['NOT_FOUND', 'GONE'],
    cache: cache.publicApi(['mod:{id}']),
    rateLimit: 'anonymousRead',
  }),
  dependencies: defineEndpoint({
    id: 'catalog.dependencies',
    owner: 'WP-33',
    method: 'GET',
    path: `${base}/mods/:id/dependencies`,
    summary: 'Resolved dependencies (required, optional, conflicts)',
    auth: 'public',
    params: z.object({ id: IdParam }),
    response: DependencyListDTO,
    errors: ['NOT_FOUND', 'GONE'],
    cache: cache.publicApi(['mod:{id}']),
    rateLimit: 'anonymousRead',
  }),
  dependents: defineEndpoint({
    id: 'catalog.dependents',
    owner: 'WP-33',
    method: 'GET',
    path: `${base}/mods/:id/dependents`,
    summary: 'Published mods that require this one ("Required by")',
    auth: 'public',
    params: z.object({ id: IdParam }),
    response: ModCardListDTO,
    errors: ['NOT_FOUND', 'GONE'],
    cache: cache.publicApi(['mod:{id}', 'list:mods']),
    rateLimit: 'anonymousRead',
  }),
  related: defineEndpoint({
    id: 'catalog.related',
    owner: 'WP-33',
    method: 'GET',
    path: `${base}/mods/:id/related`,
    summary: 'Related mods (same category or tags + text similarity)',
    auth: 'public',
    params: z.object({ id: IdParam }),
    response: ModCardListDTO,
    errors: ['NOT_FOUND', 'GONE'],
    cache: cache.publicApi(['mod:{id}', 'list:mods'], 900),
    rateLimit: 'anonymousRead',
  }),
  categories: defineEndpoint({
    id: 'catalog.categories',
    owner: 'WP-33',
    method: 'GET',
    path: `${base}/categories`,
    summary: 'Categories with i18n names and counts',
    auth: 'public',
    query: z.object({ kind: z.enum(['mod', 'build', 'all']).default('all') }),
    response: CategoryListDTO,
    cache: cache.publicApi(['list:mods', 'list:builds'], 900),
    rateLimit: 'anonymousRead',
  }),
  tags: defineEndpoint({
    id: 'catalog.tags',
    owner: 'WP-33',
    method: 'GET',
    path: `${base}/tags`,
    summary: 'Curated tags with i18n names and counts',
    auth: 'public',
    response: TagListDTO,
    cache: cache.publicApi(['list:mods'], 900),
    rateLimit: 'anonymousRead',
  }),
  creators: defineEndpoint({
    id: 'catalog.creators',
    owner: 'WP-33',
    method: 'GET',
    path: `${base}/creators`,
    summary: 'Creators directory with stats and tier',
    auth: 'public',
    query: PageQuery.extend({ sort: z.enum(CREATOR_SORTS).default('downloads') }),
    response: CreatorPageDTO,
    cache: cache.publicApi(['list:mods'], 900),
    rateLimit: 'anonymousRead',
  }),
  getUser: defineEndpoint({
    id: 'catalog.getUser',
    owner: 'WP-33',
    method: 'GET',
    path: `${base}/users/:handle`,
    summary: 'Public profile',
    auth: 'public',
    params: HandleParam,
    response: UserPublicDTO,
    errors: ['NOT_FOUND', 'GONE'],
    cache: cache.publicApi(['user:{id}']),
    rateLimit: 'anonymousRead',
  }),
  userMods: defineEndpoint({
    id: 'catalog.userMods',
    owner: 'WP-33',
    method: 'GET',
    path: `${base}/users/:handle/mods`,
    summary: 'Published mods and libraries of a user',
    auth: 'public',
    params: HandleParam,
    query: PageQuery.extend({ sort: ModSort.default('downloads') }),
    response: ModCardPageDTO,
    errors: ['NOT_FOUND'],
    cache: cache.publicApi(['user:{id}', 'list:mods']),
    rateLimit: 'anonymousRead',
  }),
  userBuilds: defineEndpoint({
    id: 'catalog.userBuilds',
    owner: 'WP-33',
    method: 'GET',
    path: `${base}/users/:handle/builds`,
    summary: 'Published builds of a user',
    auth: 'public',
    params: HandleParam,
    query: PageQuery.extend({ sort: ModSort.default('new') }),
    response: ModCardPageDTO,
    errors: ['NOT_FOUND'],
    cache: cache.publicApi(['user:{id}', 'list:builds']),
    rateLimit: 'anonymousRead',
  }),
  userReviews: defineEndpoint({
    id: 'catalog.userReviews',
    owner: 'WP-33',
    method: 'GET',
    path: `${base}/users/:handle/reviews`,
    summary: 'Visible reviews written by a user',
    auth: 'public',
    params: HandleParam,
    query: CursorQuery,
    response: UserReviewPageDTO,
    errors: ['NOT_FOUND'],
    cache: cache.publicApi(['user:{id}']),
    rateLimit: 'anonymousRead',
  }),
  userActivity: defineEndpoint({
    id: 'catalog.userActivity',
    owner: 'WP-33',
    method: 'GET',
    path: `${base}/users/:handle/activity`,
    summary: '12-month contribution heatmap (respects privacy)',
    auth: 'public',
    params: HandleParam,
    response: UserActivityDTO,
    errors: ['NOT_FOUND'],
    cache: cache.publicApi(['user:{id}'], 900),
    rateLimit: 'anonymousRead',
  }),
} as const;
