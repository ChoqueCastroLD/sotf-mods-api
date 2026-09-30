/**
 * Search and the Cmd+K index (PLAN §7.9, T0-07). Implemented by WP-33 (+ WP-72 client).
 *
 * Server search: exact `manifestId`/name first, then FTS (`websearch_to_tsquery` on `searchVector`,
 * weights A/B/C) combined with trigram similarity (threshold 0.3), plus users and kits.
 * The Cmd+K index is a compact, edge-cached document (≈ 15 KB br per locale, tag `search-index`)
 * loaded lazily by MiniSearch in the browser.
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import { CompatStatus, EntityId, Handle, HttpUrl, IsoDateTime, Locale, ModKind, SitePath } from './common.ts';
import { dto, exampleOf, wireInt, wireList } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';

export const SEARCH_TYPES = ['mod', 'build', 'kit', 'user', 'page'] as const;
export const SearchType = z.enum(SEARCH_TYPES);

export const SearchHitDTO = dto(
  'SearchHitDTO',
  z.object({
    type: SearchType,
    id: z.union([EntityId, z.string()]).describe('Entity id; page key for `page`'),
    title: z.string().describe('Title in the requested locale: the translated name when the mod has one'),
    titleOriginal: z
      .string()
      .nullable()
      .optional()
      .describe('Original name when `title` is a translation of it (null otherwise)'),
    subtitle: z.string().nullable().describe('Author handle, kit owner, page section…'),
    path: SitePath,
    thumbnailUrl: HttpUrl.nullable(),
    kind: ModKind.nullable(),
    compatStatus: CompatStatus.nullable(),
    downloads: z.number().int().nonnegative().nullable(),
    score: z.number(),
    highlight: z.string().nullable().describe('Plain text with the match wrapped in «»'),
  }),
  {
    description: 'One search result.',
    examples: [
      {
        type: 'mod',
        id: 45,
        title: 'StackMod',
        titleOriginal: null,
        subtitle: '@someone',
        path: '/mods/someone/stackmod',
        thumbnailUrl: null,
        kind: 'mod',
        compatStatus: 'works',
        downloads: 53_384,
        score: 0.92,
        highlight: '«Stack»Mod: bigger stacks',
      },
    ],
  },
);
export type SearchHitDTO = z.infer<typeof SearchHitDTO>;

export const SearchResultsDTO = dto(
  'SearchResultsDTO',
  z.object({ q: z.string(), total: z.number().int().nonnegative(), hits: z.array(SearchHitDTO) }),
  {
    description: 'Search results across types, best first.',
    examples: [{ q: 'stak mod', total: 1, hits: [exampleOf(SearchHitDTO)] }],
  },
);

export const SearchQuery = z.object({
  q: z.string().trim().min(1).max(100),
  types: wireList(SearchType, { max: SEARCH_TYPES.length, description: 'Default: all types' }),
  limit: wireInt({ min: 1, max: 50 }).optional(),
  locale: Locale.optional().describe(
    'Locale of the visitor: mods with a translation come back with the translated title',
  ),
});

/** Version of the compact index layout (bump on incompatible tuple changes). */
export const SEARCH_INDEX_VERSION = 1;

/**
 * Mod/build tuple: `[id, kind, name, userHandle, categorySlug, tagsCsv, manifestId, downloads,
 * compatStatus, thumb64Url | null, path, originalName | null]`. In a non-English index `name` is the
 * translated name when the mod has one and `originalName` (index 11, optional) the original.
 */
export const SearchIndexModTuple = z.tuple([
  EntityId,
  ModKind,
  z.string(),
  Handle,
  z.string().nullable(),
  z.string(),
  z.string(),
  z.number().int().nonnegative(),
  CompatStatus,
  z.string().nullable(),
  SitePath,
  z.string().nullable().optional(),
]);
/** Kit tuple: `[id, name, ownerHandle, itemsCount, path]`. */
export const SearchIndexKitTuple = z.tuple([EntityId, z.string(), Handle, z.number().int().nonnegative(), SitePath]);
/** Creator tuple: `[id, handle, displayName, modsCount, path]`. */
export const SearchIndexUserTuple = z.tuple([EntityId, Handle, z.string(), z.number().int().nonnegative(), SitePath]);
/** Category tuple: `[slug, localisedName, path]`. */
export const SearchIndexCategoryTuple = z.tuple([z.string(), z.string(), SitePath]);
/** Page tuple: `[key, localisedTitle, path]` (install, patch radar, legal…). */
export const SearchIndexPageTuple = z.tuple([z.string(), z.string(), SitePath]);

export const SearchIndexDTO = dto(
  'SearchIndexDTO',
  z.object({
    v: z.literal(SEARCH_INDEX_VERSION),
    locale: Locale,
    generatedAt: IsoDateTime,
    mods: z.array(SearchIndexModTuple),
    kits: z.array(SearchIndexKitTuple),
    users: z.array(SearchIndexUserTuple),
    categories: z.array(SearchIndexCategoryTuple),
    pages: z.array(SearchIndexPageTuple),
    trending: z.array(EntityId).max(10),
  }),
  {
    description: 'Compact Cmd+K index for one locale.',
    examples: [
      {
        v: 1,
        locale: 'en',
        generatedAt: '2026-09-29T10:00:00.000Z',
        mods: [
          [
            20,
            'mod',
            "Axel's Mod Menu",
            'imaxel',
            'quality-of-life',
            'cheats,building',
            'AxelModMenu',
            117_719,
            'works',
            'https://r2.sotf-mods.com/media/0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d/64.webp',
            "/mods/imaxel/axel's-mod-menu",
          ],
        ],
        kits: [[5, 'Starter essentials', 'imaxel', 12, '/kits/imaxel/starter-essentials']],
        users: [[12, 'imaxel', 'ImAxel', 16, '/profile/imaxel']],
        categories: [['quality-of-life', 'Quality of Life', '/categories/quality-of-life']],
        pages: [['install', 'How to install mods', '/install']],
        trending: [20],
      },
    ],
  },
);
export type SearchIndexDTO = z.infer<typeof SearchIndexDTO>;

export const searchEndpoints = {
  search: defineEndpoint({
    id: 'search.search',
    owner: 'WP-33',
    method: 'GET',
    path: `${API_V2_PREFIX}/search`,
    summary: 'Full-text + fuzzy search across mods, builds, kits, users and pages',
    auth: 'public',
    query: SearchQuery,
    response: SearchResultsDTO,
    cache: cache.publicApi(['list:mods', 'list:builds', 'list:kits']),
    rateLimit: 'anonymousRead',
  }),
  index: defineEndpoint({
    id: 'search.index',
    owner: 'WP-33',
    method: 'GET',
    path: `${API_V2_PREFIX}/search/index`,
    summary: 'Compact Cmd+K index for a locale',
    auth: 'public',
    query: z.object({ locale: Locale.default('en') }),
    response: SearchIndexDTO,
    cache: cache.publicApi(['search-index'], 3600),
    rateLimit: 'anonymousRead',
  }),
} as const;
