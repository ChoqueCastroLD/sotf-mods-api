/**
 * Public modpacks API (2026-11, SotF Mods Manager and anyone who wants to read the modpacks): JSON
 * without authentication, in the shape of the legacy `GET /api/mods` (`status`, `data`, `meta`
 * with `pages`), so the launcher can reuse its list code.
 *
 * - `GET /api/modpacks?page=&limit=&search=&sort=`: approved public modpacks.
 * - `GET /api/modpacks/slug/:userSlug/:slug`: one modpack with the full ordered mod list.
 * - `GET /api/modpacks/slug/:userSlug/:slug/download`: the `.sotfprofile` (the launcher's own
 *   profile format) as an attachment; counts one download.
 *
 * Modpacks are stored as kits (`@sotf/contracts/kits`); this is their public face.
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import { dto, exampleOf } from './dto.ts';
import { defineEndpoint } from './endpoint.ts';
import { LegacyListMeta } from './legacy.gen.ts';

export const MODPACK_SORTS = ['downloads', 'new', 'updated'] as const;
export type ModpackSort = (typeof MODPACK_SORTS)[number];

export const ModpacksQuery = z.looseObject({
  page: z.string().optional().describe('1-based, default 1'),
  limit: z.string().optional().describe('1–100, default 20'),
  search: z.string().optional().describe('Words in the name or the description'),
  sort: z.string().optional().describe('`downloads` (default), `new` or `updated`'),
});

export interface ModpacksFilter {
  page: number;
  limit: number;
  search: string | null;
  sort: ModpackSort;
}

function firstValue(value: unknown): string | undefined {
  if (Array.isArray(value)) return value.length > 0 ? String(value[0]) : undefined;
  return value === undefined || value === null ? undefined : String(value);
}

/** Interprets the list query (tolerant like `/api/mods`: unknown sorts fall back to `downloads`). */
export function parseModpacksQuery(raw: Readonly<Record<string, unknown>>): ModpacksFilter | null {
  const get = (key: string) => {
    const value = firstValue(raw[key])?.trim();
    return value === undefined || value === '' ? undefined : value;
  };
  const page = get('page') === undefined ? 1 : Number(get('page'));
  const limit = get('limit') === undefined ? 20 : Number(get('limit'));
  if (!Number.isInteger(page) || page < 1 || page > 10_000 || !Number.isInteger(limit) || limit < 1 || limit > 100) {
    return null;
  }
  const sort = (MODPACK_SORTS as readonly string[]).includes(get('sort') ?? '') ? (get('sort') as ModpackSort) : 'downloads';
  return { page, limit, search: get('search')?.slice(0, 100) ?? null, sort };
}

const ModpackUser = z.object({ name: z.string(), slug: z.string(), imageUrl: z.string() });

export const PublicModpackListItem = dto(
  'PublicModpackListItem',
  z.object({
    id: z.number().int(),
    name: z.string(),
    slug: z.string(),
    url: z.string().describe('Absolute URL of the modpack page'),
    imageUrl: z.string().describe('Cover, or the thumbnail of the first mod; `""` when none'),
    modsCount: z.number().int(),
    downloads: z.number().int(),
    isApproved: z.literal(true),
    user: ModpackUser,
    createdAt: z.string(),
    updatedAt: z.string(),
  }),
  {
    description: 'Item of `GET /api/modpacks`.',
    examples: [
      {
        id: 5,
        name: 'Co-op essentials',
        slug: 'co-op-essentials',
        url: 'https://sotf-mods.com/modpacks/imaxel/co-op-essentials',
        imageUrl: 'https://r2.sotf-mods.com/media/0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d/640.webp',
        modsCount: 12,
        downloads: 140,
        isApproved: true,
        user: { name: 'ImAxel', slug: 'imaxel', imageUrl: '' },
        createdAt: '2026-11-14T12:00:00.000Z',
        updatedAt: '2026-11-14T12:00:00.000Z',
      },
    ],
  },
);

export const PublicModpackMod = dto(
  'PublicModpackMod',
  z.object({
    mod_id: z.string(),
    name: z.string(),
    user: z.object({ slug: z.string() }),
    slug: z.string(),
    latestVersion: z.string(),
    imageUrl: z.string(),
    url: z.string(),
    available: z.boolean().describe('false when the mod is no longer approved (it is left out of the download)'),
    isDependency: z.boolean().describe('Added automatically as a dependency of another mod of the pack'),
  }),
  {
    description: 'A mod of a modpack, in pack order.',
    examples: [
      {
        mod_id: 'AmmoUi',
        name: 'AmmoUi',
        user: { slug: 'imaxel' },
        slug: 'ammoui',
        latestVersion: '1.1.2',
        imageUrl: 'https://r2.sotf-mods.com/media/0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d/320.webp',
        url: 'https://sotf-mods.com/mods/imaxel/ammoui',
        available: true,
        isDependency: false,
      },
    ],
  },
);

export const PublicModpackDetail = dto(
  'PublicModpackDetail',
  PublicModpackListItem.extend({
    description: z.string().describe('Markdown'),
    downloadUrl: z.string(),
    incompatible: z.array(z.tuple([z.string(), z.string()])).describe('Pairs of mods of the pack that do not work together'),
    mods: z.array(PublicModpackMod),
  }),
  {
    description: 'Data of `GET /api/modpacks/slug/:userSlug/:slug`.',
    examples: [
      {
        ...exampleOf(PublicModpackListItem),
        description: 'Everything for a first co-op run.',
        downloadUrl: 'https://sotf-mods.com/api/modpacks/slug/imaxel/co-op-essentials/download',
        incompatible: [],
        mods: [exampleOf(PublicModpackMod)],
      },
    ],
  },
);

export const PublicModpackListResponse = dto(
  'PublicModpackListResponse',
  z.object({ status: z.literal(true), data: z.array(PublicModpackListItem), meta: LegacyListMeta }),
  {
    description: 'Page of approved public modpacks.',
    examples: [
      {
        status: true,
        data: [exampleOf(PublicModpackListItem)],
        meta: { total: 1, page: 1, limit: 20, pages: 1, next_page: 1, prev_page: 1 },
      },
    ],
  },
);

export const PublicModpackResponse = dto(
  'PublicModpackResponse',
  z.object({ status: z.literal(true), data: PublicModpackDetail }),
  { description: 'One modpack.', examples: [{ status: true, data: exampleOf(PublicModpackDetail) }] },
);

/** Downloads per minute and address (the `.sotfprofile` is tiny; this stops counter inflation). */
export const MODPACK_DOWNLOADS_PER_MINUTE = 30;

const publicRead = { auth: 'public', errorFormat: 'legacy', rateLimit: 'legacyRead' } as const;
const slugParams = z.object({ userSlug: z.string().min(1).max(80), slug: z.string().min(1).max(80) });

export const modpackEndpoints = {
  list: defineEndpoint({
    ...publicRead,
    id: 'modpacks.list',
    owner: 'WP-42',
    method: 'GET',
    path: '/api/modpacks',
    summary: 'Approved public modpacks (shape of `/api/mods`)',
    query: ModpacksQuery,
    response: PublicModpackListResponse,
    errors: ['VALIDATION_FAILED'],
    cache: cache.legacy(['list:kits']),
  }),
  getBySlug: defineEndpoint({
    ...publicRead,
    id: 'modpacks.getBySlug',
    owner: 'WP-42',
    method: 'GET',
    path: '/api/modpacks/slug/:userSlug/:slug',
    summary: 'One modpack with its ordered mods',
    params: slugParams,
    response: PublicModpackResponse,
    errors: ['NOT_FOUND'],
    cache: cache.legacy(['kit:{id}']),
  }),
  download: defineEndpoint({
    ...publicRead,
    id: 'modpacks.download',
    owner: 'WP-42',
    method: 'GET',
    path: '/api/modpacks/slug/:userSlug/:slug/download',
    summary: 'The modpack as a `.sotfprofile` for SotF Mods Manager (counts a download)',
    params: slugParams,
    responseKind: 'text',
    errors: ['NOT_FOUND', 'RATE_LIMITED'],
    cache: cache.noStore,
  }),
} as const;
