/**
 * Specification of the legacy (v1) DTOs generated from the golden fixtures (PLAN §5.4, §5.5,
 * research/01 §1.2 and §2).
 *
 * The generator (`gen-legacy.ts`) takes the key *order* and the observed JSON types from the
 * fixtures listed in `sources`, and applies `types` where a sample cannot tell the whole truth:
 * nested objects, empty arrays, columns that happen to be `null` (or never `null`) in the samples,
 * and the numeric fields that UpdatesChecker deserialises as .NET value types (never `null`).
 *
 * Type DSL: `string`, `int`, `number`, `bool`, `datetime` (`toISOString()`), `date` (YYYY-MM-DD),
 * `true`, `false`, `enum(A|B)`, `ref(Name)`, `array(T)`; append `|null` for nullable.
 */

export interface LegacyDtoSpec {
  description: string;
  /** `[fixture name, JSON path]`; `$` is the root, `[]` iterates arrays. */
  sources?: ReadonlyArray<readonly [string, string]>;
  /** Types that override (or complete) the inferred ones. Keys must exist in the samples. */
  types?: Readonly<Record<string, string>>;
  /** For DTOs without samples in the fixtures: copy another DTO minus some keys. */
  derive?: { from: string; omit: readonly string[] };
  /** For DTOs without samples: explicit fields in order, with one example. */
  manual?: { fields: ReadonlyArray<readonly [string, string]>; example: Record<string, unknown> };
}

const MOD_LISTS = [
  'mods-default',
  'mods-redmanager-p1',
  'mods-redmanager-unapproved',
  'mods-redmanager-search',
  'mods-updateschecker-modids',
  'mods-updateschecker-page',
  'mods-frontend-list',
  'mods-type-build',
  'mods-user',
  'mods-limit0',
] as const;
const MOD_DETAILS = ['mod-by-id', 'mod-by-id-build', 'mod-by-slug'] as const;
const ERRORS = [
  'mods-limit-invalid',
  'mod-find-missing-param',
  'mod-404',
  'check-invalid',
  'check-build-uuid',
  'check-404',
  'user-404',
  'comments-noparam',
  'download-stats-invalid',
  'auth-check-noauth',
  'route-404',
] as const;

const at = (fixtures: readonly string[], path: string) => fixtures.map((name) => [name, path] as const);

/**
 * Scalar columns of `Mod` shared by the list item and the detail (Prisma schema nullability; the
 * .NET value types of UpdatesChecker are never null: research/01 §1.2).
 */
const MOD_SCALARS: Record<string, string> = {
  id: 'int',
  mod_id: 'string',
  type: 'string|null',
  modSide: 'string|null',
  latestVersion: 'string|null',
  latestVersionSize: 'string|null',
  averageRating: 'number',
  reviewsCount: 'int',
  sourceUrl: 'string|null',
  imageUrl: 'string|null',
  buildGuid: 'string|null',
  buildShareVersion: 'string|null',
  numberOfElements: 'int|null',
  lastReleasedAt: 'datetime',
  createdAt: 'datetime',
  updatedAt: 'datetime',
  userId: 'int',
  categoryId: 'int',
};

/** Generation order is dependency order; every DTO referenced with `ref()` must be listed. */
export const LEGACY_SPEC: Readonly<Record<string, LegacyDtoSpec>> = {
  LegacyUserRef: {
    description: 'Author embedded in mods and comments (`imageUrl` is "" without avatar).',
    sources: [
      ...at(MOD_LISTS, '$.data[].user'),
      ...at(MOD_DETAILS, '$.data.user'),
      ['featured', '$.data[].user'],
      ['builds-featured', '$.data[].user'],
      ['comments', '$.data[].user'],
    ],
  },
  LegacyCategoryRef: {
    description: 'Category embedded in mods.',
    sources: [
      ...at(MOD_LISTS, '$.data[].category'),
      ...at(MOD_DETAILS, '$.data.category'),
      ['featured', '$.data[].category'],
      ['builds-featured', '$.data[].category'],
    ],
  },
  LegacyModListImage: {
    description: 'Image of a mod in lists and featured endpoints.',
    sources: [...at(MOD_LISTS, '$.data[].images[]'), ['featured', '$.data[].images[]']],
  },
  LegacyModListVersion: {
    description: 'The single version embedded in list items: the lowest by ascending string order (preserved quirk).',
    sources: at(MOD_LISTS, '$.data[].versions[]'),
  },
  LegacyFavoritesCount: {
    description: '`_count` of a mod.',
    sources: [
      ...at(MOD_LISTS, '$.data[]._count'),
      ...at(MOD_DETAILS, '$.data._count'),
      ['builds-featured', '$.data[]._count'],
    ],
  },
  LegacyListMeta: {
    description:
      'Pagination of `GET /api/mods`: pages = ceil(total/limit), next_page = min(page+1, pages), prev_page = max(page-1, 1).',
    sources: at(MOD_LISTS, '$.meta'),
    types: { total: 'int', page: 'int', limit: 'int', pages: 'int|null', next_page: 'int', prev_page: 'int' },
  },
  LegacyModListItem: {
    description:
      'Item of `GET /api/mods` (UpdatesChecker, RedManager): Mod scalars in legacy order + images, user, category, versions (1) and _count. `dependencies` is an array here.',
    sources: at(MOD_LISTS, '$.data[]'),
    types: {
      ...MOD_SCALARS,
      dependencies: 'array(string)',
      images: 'array(ref(LegacyModListImage))',
      user: 'ref(LegacyUserRef)',
      category: 'ref(LegacyCategoryRef)|null',
      versions: 'array(ref(LegacyModListVersion))',
      _count: 'ref(LegacyFavoritesCount)',
    },
  },
  LegacyModListResponse: {
    description: 'Envelope of `GET /api/mods`.',
    sources: at(MOD_LISTS, '$'),
    types: { status: 'true', data: 'array(ref(LegacyModListItem))', meta: 'ref(LegacyListMeta)' },
  },
  LegacyModDetailImage: {
    description: 'Image of the detail endpoint (only `url`; research/01 §2.4 — the captured mods have no gallery).',
    manual: {
      fields: [['url', 'string']],
      example: { url: "https://r2.sotf-mods.com/1767666009017_axel's-mod-menu_1.png" },
    },
  },
  LegacyDownloadsCount: {
    description: '`_count` of a version.',
    sources: at(MOD_DETAILS, '$.data.versions[]._count'),
  },
  LegacyModDetailVersion: {
    description:
      'Version in the detail endpoint (all versions, string order desc; `downloadUrl` is the raw, unencoded URL).',
    sources: at(MOD_DETAILS, '$.data.versions[]'),
    types: {
      id: 'int',
      extension: 'string|null',
      filename: 'string|null',
      createdAt: 'datetime',
      updatedAt: 'datetime',
      _count: 'ref(LegacyDownloadsCount)',
    },
  },
  LegacyModDetail: {
    description:
      '`GET /api/mods/:mod_id` and `/api/mods/slug/:u/:s`: same scalars as the list but `dependencies` is the raw string.',
    sources: at(MOD_DETAILS, '$.data'),
    types: {
      ...MOD_SCALARS,
      dependencies: 'string',
      images: 'array(ref(LegacyModDetailImage))',
      user: 'ref(LegacyUserRef)',
      category: 'ref(LegacyCategoryRef)|null',
      versions: 'array(ref(LegacyModDetailVersion))',
      _count: 'ref(LegacyFavoritesCount)',
    },
  },
  LegacyModDetailResponse: {
    description: 'Envelope of the mod detail.',
    sources: at(MOD_DETAILS, '$'),
    types: { status: 'true', data: 'ref(LegacyModDetail)' },
  },
  LegacyFeaturedMod: {
    description: 'Item of `GET /api/mods/featured` (12 mods; `dependencies` as string).',
    sources: [['featured', '$.data[]']],
    types: {
      id: 'int',
      dependencies: 'string',
      type: 'string|null',
      latestVersion: 'string|null',
      imageUrl: 'string|null',
      lastReleasedAt: 'datetime',
      category: 'ref(LegacyCategoryRef)|null',
      user: 'ref(LegacyUserRef)',
      images: 'array(ref(LegacyModListImage))',
    },
  },
  LegacyFeaturedModsResponse: {
    description: 'Envelope of `GET /api/mods/featured`.',
    sources: [['featured', '$']],
    types: { status: 'true', data: 'array(ref(LegacyFeaturedMod))' },
  },
  LegacyFeaturedBuild: {
    description: 'Item of `GET /api/builds/featured` (4 builds; no `favoritesCount`, has `_count`).',
    sources: [['builds-featured', '$.data[]']],
    types: {
      id: 'int',
      dependencies: 'string',
      type: 'string|null',
      latestVersion: 'string|null',
      imageUrl: 'string|null',
      lastReleasedAt: 'datetime',
      category: 'ref(LegacyCategoryRef)|null',
      user: 'ref(LegacyUserRef)',
      images: 'array(ref(LegacyModListImage))',
      _count: 'ref(LegacyFavoritesCount)',
    },
  },
  LegacyFeaturedBuildsResponse: {
    description: 'Envelope of `GET /api/builds/featured`.',
    sources: [['builds-featured', '$']],
    types: { status: 'true', data: 'array(ref(LegacyFeaturedBuild))' },
  },
  LegacyStats: {
    description: '`GET /api/stats` and `/api/stats/builds` (downloads include the orphan rows).',
    sources: [
      ['stats', '$.data'],
      ['stats-builds', '$.data'],
    ],
  },
  LegacyStatsResponse: {
    description: 'Envelope of the stats endpoints.',
    sources: [
      ['stats', '$'],
      ['stats-builds', '$'],
    ],
    types: { status: 'true', data: 'ref(LegacyStats)' },
  },
  LegacyCategory: {
    description: 'Item of `GET /api/categories` (ordered by name).',
    sources: [
      ['categories', '$.data[]'],
      ['categories-build', '$.data[]'],
    ],
  },
  LegacyCategoriesResponse: {
    description: 'Envelope of `GET /api/categories`.',
    sources: [
      ['categories', '$'],
      ['categories-build', '$'],
    ],
    types: { status: 'true', data: 'array(ref(LegacyCategory))' },
  },
  LegacyUser: {
    description: '`GET /api/users/:slug`.',
    sources: [['user', '$.data']],
  },
  LegacyUserResponse: {
    description: 'Envelope of the user endpoint.',
    sources: [['user', '$']],
    types: { status: 'true', data: 'ref(LegacyUser)' },
  },
  LegacyUserStats: {
    description: '`GET /api/users/:slug/stats`.',
    sources: [['user-stats', '$.data']],
    types: { averageRating: 'number' },
  },
  LegacyUserStatsResponse: {
    description: 'Envelope of the user stats endpoint.',
    sources: [['user-stats', '$']],
    types: { status: 'true', data: 'ref(LegacyUserStats)' },
  },
  LegacyComment: {
    description: 'Top-level comment of `GET /api/comments?mod_id=` (newest first; replies oldest first).',
    sources: [['comments', '$.data[]']],
    types: {
      id: 'int',
      imageUrl: 'string|null',
      user: 'ref(LegacyUserRef)|null',
      replies: 'array(ref(LegacyCommentReply))',
    },
  },
  LegacyCommentReply: {
    description: 'Reply of a legacy comment (same fields without `replies`; no captured comment has replies).',
    derive: { from: 'LegacyComment', omit: ['replies'] },
  },
  LegacyCommentsResponse: {
    description: 'Envelope of `GET /api/comments`.',
    sources: [['comments', '$']],
    types: { status: 'true', data: 'array(ref(LegacyComment))' },
  },
  LegacyDownloadStat: {
    description: 'Day of `GET /api/mods/:mod_id/download-stats` (only days with downloads, UTC).',
    sources: [['download-stats-week', '$.data[]']],
    types: { date: 'date', count: 'int' },
  },
  LegacyDownloadStatsResponse: {
    description: 'Envelope of the download stats endpoint.',
    sources: [['download-stats-week', '$']],
    types: { status: 'true', data: 'array(ref(LegacyDownloadStat))' },
  },
  LegacyModFind: {
    description: '`GET /api/mods/find` result.',
    sources: [['mod-find', '$.data']],
  },
  LegacyModFindResponse: {
    description: 'Envelope of `GET /api/mods/find`.',
    sources: [['mod-find', '$']],
    types: { status: 'true', data: 'ref(LegacyModFind)' },
  },
  LegacyCheckResponse: {
    description: '`GET /api/mods/:mod_id/check` (node-semver `gt`); the three exact messages of research/01 §2.5.',
    sources: [
      ['check-outdated', '$'],
      ['check-current', '$'],
      ['check-noversion', '$'],
    ],
    types: {
      status: 'true',
      message: 'enum(New version available|No new version available|Latest version)',
    },
  },
  LegacyErrorResponse: {
    description: 'Legacy error envelope (404 message is the Spanish literal "No se encontró el recurso.").',
    sources: at(ERRORS, '$'),
    types: { status: 'false', error: 'enum(NOT_FOUND|VALIDATION|UNKNOWN|GONE)' },
  },
};
