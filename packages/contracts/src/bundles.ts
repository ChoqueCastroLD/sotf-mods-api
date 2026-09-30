/**
 * Official bundles (T1-04): a creator attaches one of their Kits to one of their mods. The worker
 * builds one zip with every resolved file in the folders RedLoader expects and regenerates it when
 * an item publishes a new version ("Download all").
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import { Count, EntityId, IdParam, IsoDateTime, SitePath } from './common.ts';
import { dto, exampleOf } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';

export const BUNDLE_STATUSES = ['pending', 'ready', 'failed'] as const;
export const BundleStatus = z.enum(BUNDLE_STATUSES);
export type BundleStatus = z.infer<typeof BundleStatus>;

export const BUNDLE_LIMITS = {
  perMod: 5,
  /** Uncompressed bytes of a bundle. */
  maxBytes: 200 * 1024 * 1024,
  maxFiles: 2000,
} as const;

export const BundleContentDTO = z.object({
  mod: z.string().describe('Mod name'),
  version: z.string().nullable(),
  files: Count.describe('Files this item adds to the zip'),
});

export const ModBundleDTO = dto(
  'ModBundleDTO',
  z.object({
    id: EntityId,
    modId: EntityId,
    kit: z.object({
      id: EntityId,
      name: z.string(),
      canonicalPath: SitePath,
      itemsCount: Count,
      visibility: z.enum(['public', 'unlisted', 'private']),
    }),
    status: BundleStatus,
    statusReason: z.string().nullable(),
    bytes: Count.nullable().describe('Size of the zip'),
    filesCount: Count,
    contents: z.array(BundleContentDTO),
    downloadsCount: Count,
    downloadPath: z.string().nullable().describe('`/api/v2/bundles/:id/download` once ready'),
    builtAt: IsoDateTime.nullable(),
  }),
  {
    description: 'An official bundle of a mod: a kit as one zip.',
    examples: [
      {
        id: 3,
        modId: 20,
        kit: {
          id: 5,
          name: 'Starter essentials',
          canonicalPath: '/kits/imaxel/starter-essentials',
          itemsCount: 4,
          visibility: 'public',
        },
        status: 'ready',
        statusReason: null,
        bytes: 4_812_330,
        filesCount: 9,
        contents: [{ mod: "Axel's Mod Menu", version: '1.4.2', files: 3 }],
        downloadsCount: 12,
        downloadPath: '/api/v2/bundles/3/download',
        builtAt: '2026-09-20T18:00:00.000Z',
      },
    ],
  },
);
export type ModBundleDTO = z.infer<typeof ModBundleDTO>;

export const ModBundleListDTO = dto('ModBundleListDTO', z.object({ items: z.array(ModBundleDTO) }), {
  description: 'Bundles of a mod.',
  examples: [{ items: [exampleOf(ModBundleDTO)] }],
});

export const CreateBundleBody = dto('CreateBundleBody', z.strictObject({ kitId: EntityId }), {
  description: 'Attach one of your (public or unlisted) kits to one of your mods as an official bundle.',
  examples: [{ kitId: 5 }],
});

const base = `${API_V2_PREFIX}/mods/:id/bundles`;

export const bundlesEndpoints = {
  forMod: defineEndpoint({
    id: 'bundles.forMod',
    owner: 'WP-42',
    method: 'GET',
    path: base,
    summary: 'Official bundles of a mod that are ready to download',
    auth: 'public',
    params: z.object({ id: IdParam }),
    response: ModBundleListDTO,
    cache: cache.publicApi(['mod:{id}']),
    rateLimit: 'anonymousRead',
  }),
  manage: defineEndpoint({
    id: 'bundles.manage',
    owner: 'WP-42',
    method: 'GET',
    path: `${API_V2_PREFIX}/me/mods/:id/bundles`,
    summary: 'Bundles of one of my mods, any status',
    auth: 'session',
    requires: ['mod_owner'],
    params: z.object({ id: IdParam }),
    response: ModBundleListDTO,
    errors: ['UNAUTHENTICATED', 'NOT_FOUND', 'FORBIDDEN'],
    cache: cache.private,
  }),
  create: defineEndpoint({
    id: 'bundles.create',
    owner: 'WP-42',
    method: 'POST',
    path: base,
    summary: 'Attach a kit to a mod as an official bundle (built in the background)',
    auth: 'session',
    requires: ['mod_owner'],
    params: z.object({ id: IdParam }),
    body: CreateBundleBody,
    status: 201,
    response: ModBundleDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'CONFLICT', 'VALIDATION_FAILED'],
    cache: cache.noStore,
    rateLimit: 'kitsWrite',
  }),
  rebuild: defineEndpoint({
    id: 'bundles.rebuild',
    owner: 'WP-42',
    method: 'POST',
    path: `${base}/:bundleId/rebuild`,
    summary: 'Rebuild a bundle now',
    auth: 'session',
    requires: ['mod_owner'],
    params: z.object({ id: IdParam, bundleId: IdParam }),
    status: 202,
    response: ModBundleDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
    rateLimit: 'kitsWrite',
  }),
  remove: defineEndpoint({
    id: 'bundles.remove',
    owner: 'WP-42',
    method: 'DELETE',
    path: `${base}/:bundleId`,
    summary: 'Detach a bundle from a mod',
    auth: 'session',
    requires: ['mod_owner'],
    params: z.object({ id: IdParam, bundleId: IdParam }),
    responseKind: 'empty',
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
    rateLimit: 'kitsWrite',
  }),
  download: defineEndpoint({
    id: 'bundles.download',
    owner: 'WP-42',
    method: 'GET',
    head: true,
    path: `${API_V2_PREFIX}/bundles/:id/download`,
    summary: 'Download the bundle zip (302 to R2)',
    auth: 'public',
    params: z.object({ id: IdParam }),
    responseKind: 'redirect',
    errors: ['NOT_FOUND'],
    cache: cache.noStore,
    rateLimit: 'downloads',
  }),
} as const;
