/**
 * Kits: shareable mod collections (PLAN §7.8, T0-18). Backend by WP-42, UI by WP-71.
 *
 * Share code `KIT-XXXX-XX` (Crockford base32) and short URL `/k/XXXXXX`. Dependencies are added
 * automatically (`isAutoDependency`). Revisions are kept (`KitRevision`).
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import { ModCardDTO } from './catalog.ts';
import {
  Count,
  EntityId,
  Handle,
  IdParam,
  ImageDTO,
  IsoDateTime,
  SitePath,
  SlugInput,
  UserRefDTO,
  Uuid,
  VersionString,
} from './common.ts';
import { dto, exampleOf, wireFlag } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';
import { PageQuery, pageOf } from './pagination.ts';

export const KIT_VISIBILITIES = ['public', 'unlisted', 'private'] as const;
export const KitVisibility = z.enum(KIT_VISIBILITIES);
export type KitVisibility = z.infer<typeof KitVisibility>;

export const KIT_LIMITS = { nameMax: 80, descriptionMax: 5000, noteMax: 280, maxItems: 200, indexMinItems: 3 } as const;

// -----------------------------------------------------------------------------------------------
// Share codes
// -----------------------------------------------------------------------------------------------

/** Crockford base32 alphabet (no I, L, O, U). */
export const CROCKFORD_ALPHABET = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';

/** Canonical share code: `KIT-XXXX-XX`. */
export const KitCode = z.string().regex(/^KIT-[0-9A-HJKMNP-TV-Z]{4}-[0-9A-HJKMNP-TV-Z]{2}$/, 'expected KIT-XXXX-XX');
export type KitCode = z.infer<typeof KitCode>;

/**
 * Normalises user input to a canonical code: case-insensitive, optional `KIT` prefix, optional
 * dashes/spaces, Crockford confusables (`I`/`L` → `1`, `O` → `0`). Returns null when invalid.
 */
export function normalizeKitCode(input: string): KitCode | null {
  let raw = input
    .trim()
    .toUpperCase()
    .replace(/[\s-]+/g, '');
  if (raw.startsWith('KIT')) raw = raw.slice(3);
  raw = raw.replace(/[IL]/g, '1').replace(/O/g, '0');
  if (raw.length !== 6 || [...raw].some((ch) => !CROCKFORD_ALPHABET.includes(ch))) return null;
  return `KIT-${raw.slice(0, 4)}-${raw.slice(4)}`;
}

/** Six-character short form used in `/k/XXXXXX`. */
export function kitShortCode(code: KitCode): string {
  return code.slice(4).replace('-', '');
}

/** Short share path of a kit (`/k/ABCD12`). */
export function kitShortPath(code: KitCode): string {
  return `/k/${kitShortCode(code)}`;
}

// -----------------------------------------------------------------------------------------------
// DTOs
// -----------------------------------------------------------------------------------------------

export const KitCardDTO = dto(
  'KitCardDTO',
  z.object({
    id: EntityId,
    slug: z.string(),
    name: z.string(),
    canonicalPath: SitePath,
    owner: UserRefDTO,
    visibility: KitVisibility,
    code: KitCode,
    cover: ImageDTO.nullable().describe('Custom cover; null → knolling collage of `previewThumbnails`'),
    previewThumbnails: z.array(z.string()).max(6),
    isStaffPick: z.boolean(),
    itemsCount: Count,
    followersCount: Count,
    revision: z.number().int().min(1),
    updatedAt: IsoDateTime,
  }),
  {
    description: 'Kit card for listings.',
    examples: [
      {
        id: 5,
        slug: 'starter-essentials',
        name: 'Starter essentials',
        canonicalPath: '/kits/imaxel/starter-essentials',
        owner: exampleOf(UserRefDTO),
        visibility: 'public',
        code: 'KIT-7Q2M-4F',
        cover: null,
        previewThumbnails: ['https://r2.sotf-mods.com/media/0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d/320.webp'],
        isStaffPick: true,
        itemsCount: 12,
        followersCount: 31,
        revision: 7,
        updatedAt: '2026-09-20T18:00:00.000Z',
      },
    ],
  },
);
export type KitCardDTO = z.infer<typeof KitCardDTO>;

export const KitItemDTO = dto(
  'KitItemDTO',
  z.object({
    mod: ModCardDTO,
    position: z.number().int().nonnegative(),
    note: z.string().max(KIT_LIMITS.noteMax).nullable(),
    pinnedVersion: z.object({ id: EntityId, version: VersionString }).nullable().describe('null = always the latest'),
    isAutoDependency: z.boolean(),
    addedAt: IsoDateTime,
  }),
  {
    description: 'One mod or build in a kit.',
    examples: [
      {
        mod: exampleOf(ModCardDTO),
        position: 0,
        note: 'Press F1 to open',
        pinnedVersion: null,
        isAutoDependency: false,
        addedAt: '2026-09-01T12:00:00.000Z',
      },
    ],
  },
);

export const KitDTO = dto(
  'KitDTO',
  KitCardDTO.extend({
    descriptionHtml: z.string().nullable(),
    descriptionMd: z.string().nullable().optional().describe('Only in owner responses'),
    items: z.array(KitItemDTO),
    forkedFrom: z.object({ id: EntityId, name: z.string(), canonicalPath: SitePath, ownerHandle: Handle }).nullable(),
    multiplayer: z.object({
      allPlayers: Count,
      hostOnly: Count,
      clientSide: Count,
      singleplayerOnly: Count,
      unknown: Count,
    }),
    compat: z.object({ works: Count, untested: Count, broken: Count, conflicts: Count }),
    totalBytes: Count.nullable(),
    recentRevisions: z.array(
      z.object({ revision: z.number().int().min(1), summary: z.string(), createdAt: IsoDateTime }),
    ),
    noindex: z.boolean().describe(`true unless public with ≥ ${KIT_LIMITS.indexMinItems} items`),
    createdAt: IsoDateTime,
  }),
  {
    description: 'Kit detail with items and summaries.',
    examples: [
      {
        ...exampleOf(KitCardDTO),
        descriptionHtml: '<p>Everything you need for a first co-op run.</p>',
        items: [exampleOf(KitItemDTO)],
        forkedFrom: null,
        multiplayer: { allPlayers: 4, hostOnly: 2, clientSide: 6, singleplayerOnly: 0, unknown: 0 },
        compat: { works: 11, untested: 1, broken: 0, conflicts: 0 },
        totalBytes: 48_331_220,
        recentRevisions: [{ revision: 7, summary: '+Cook Alert', createdAt: '2026-09-20T18:00:00.000Z' }],
        noindex: false,
        createdAt: '2026-06-01T12:00:00.000Z',
      },
    ],
  },
);
export type KitDTO = z.infer<typeof KitDTO>;

export const KitCardPageDTO = pageOf('KitCardPageDTO', KitCardDTO, 'Page of kits.');

export const KitCardListDTO = dto('KitCardListDTO', z.object({ items: z.array(KitCardDTO) }), {
  description: 'Unpaginated list of kits.',
  examples: [{ items: [exampleOf(KitCardDTO)] }],
});

export const CreateKitBody = dto(
  'CreateKitBody',
  z.strictObject({
    name: z.string().trim().min(2).max(KIT_LIMITS.nameMax),
    slug: SlugInput.optional().describe('Derived from the name when omitted'),
    descriptionMd: z.string().max(KIT_LIMITS.descriptionMax).optional(),
    visibility: KitVisibility.default('public'),
    coverUploadId: Uuid.optional(),
  }),
  {
    description: 'New kit.',
    examples: [{ name: 'Dedicated server pack', descriptionMd: 'Server-side only mods.', visibility: 'unlisted' }],
  },
);

export const UpdateKitBody = dto(
  'UpdateKitBody',
  z.strictObject({
    name: z.string().trim().min(2).max(KIT_LIMITS.nameMax).optional(),
    slug: SlugInput.optional(),
    descriptionMd: z.string().max(KIT_LIMITS.descriptionMax).nullable().optional(),
    visibility: KitVisibility.optional(),
    coverUploadId: Uuid.nullable().optional().describe('null removes the custom cover'),
  }),
  { description: 'Edit kit metadata.', examples: [{ visibility: 'public' }] },
);

export const PutKitItemsBody = dto(
  'PutKitItemsBody',
  z.strictObject({
    items: z
      .array(
        z.strictObject({
          modId: EntityId,
          note: z.string().trim().max(KIT_LIMITS.noteMax).optional(),
          pinnedVersionId: EntityId.optional(),
        }),
      )
      .max(KIT_LIMITS.maxItems)
      .refine((items) => new Set(items.map((item) => item.modId)).size === items.length, 'duplicate mod in kit'),
    revisionSummary: z.string().trim().max(200).optional(),
  }),
  {
    description: 'Replace the ordered items (dependencies are added automatically as `auto`).',
    examples: [{ items: [{ modId: 20, note: 'Press F1' }, { modId: 31 }], revisionSummary: '+SonsAxLib' }],
  },
);

export const ForkKitBody = dto(
  'ForkKitBody',
  z.strictObject({
    name: z.string().trim().min(2).max(KIT_LIMITS.nameMax).optional(),
    visibility: KitVisibility.default('private'),
  }),
  { description: 'Clone a kit with attribution.', examples: [{ name: 'My starter essentials' }] },
);

export const KitListQuery = PageQuery.extend({
  sort: z.enum(['popular', 'new']).default('popular'),
  staffPick: wireFlag('Only staff picks'),
  compat: z.enum(['works', 'any']).default('any'),
});

const base = `${API_V2_PREFIX}/kits`;

export const kitsEndpoints = {
  list: defineEndpoint({
    id: 'kits.list',
    owner: 'WP-42',
    method: 'GET',
    path: base,
    summary: 'Public kits',
    auth: 'public',
    query: KitListQuery,
    response: KitCardPageDTO,
    cache: cache.publicApi(['list:kits']),
    rateLimit: 'anonymousRead',
  }),
  get: defineEndpoint({
    id: 'kits.get',
    owner: 'WP-42',
    method: 'GET',
    path: `${base}/:id`,
    summary: 'Kit detail (unlisted only by link, private only for the owner)',
    auth: 'public',
    params: z.object({ id: IdParam }),
    response: KitDTO,
    errors: ['NOT_FOUND'],
    cache: cache.publicApi(['kit:{id}']),
    rateLimit: 'anonymousRead',
  }),
  getBySlug: defineEndpoint({
    id: 'kits.getBySlug',
    owner: 'WP-42',
    method: 'GET',
    path: `${base}/by-slug/:user/:slug`,
    summary: 'Kit detail by owner handle and slug',
    auth: 'public',
    params: z.object({ user: Handle, slug: z.string().min(1).max(80) }),
    response: KitDTO,
    errors: ['NOT_FOUND'],
    cache: cache.publicApi(['kit:{id}']),
    rateLimit: 'anonymousRead',
  }),
  getByCode: defineEndpoint({
    id: 'kits.getByCode',
    owner: 'WP-42',
    method: 'GET',
    path: `${base}/by-code/:code`,
    summary: 'Kit by share code (`KIT-XXXX-XX` or the 6-character short code)',
    auth: 'public',
    params: z.object({ code: z.string().min(6).max(16) }),
    response: KitDTO,
    errors: ['NOT_FOUND'],
    cache: cache.publicApi(['kit:{id}'], 3600),
    rateLimit: 'anonymousRead',
  }),
  create: defineEndpoint({
    id: 'kits.create',
    owner: 'WP-42',
    method: 'POST',
    path: base,
    summary: 'Create a kit',
    auth: 'session',
    body: CreateKitBody,
    status: 201,
    response: KitDTO,
    errors: ['CONFLICT'],
    cache: cache.noStore,
    rateLimit: 'kitsWrite',
  }),
  update: defineEndpoint({
    id: 'kits.update',
    owner: 'WP-42',
    method: 'PATCH',
    path: `${base}/:id`,
    summary: 'Edit a kit',
    auth: 'session',
    requires: ['kit_owner'],
    params: z.object({ id: IdParam }),
    body: UpdateKitBody,
    response: KitDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'CONFLICT'],
    cache: cache.noStore,
    rateLimit: 'kitsWrite',
  }),
  delete: defineEndpoint({
    id: 'kits.delete',
    owner: 'WP-42',
    method: 'DELETE',
    path: `${base}/:id`,
    summary: 'Delete a kit (soft delete)',
    auth: 'session',
    requires: ['kit_owner'],
    params: z.object({ id: IdParam }),
    responseKind: 'empty',
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
    rateLimit: 'kitsWrite',
  }),
  putItems: defineEndpoint({
    id: 'kits.putItems',
    owner: 'WP-42',
    method: 'PUT',
    path: `${base}/:id/items`,
    summary: 'Replace the items of a kit (new revision)',
    auth: 'session',
    requires: ['kit_owner'],
    params: z.object({ id: IdParam }),
    body: PutKitItemsBody,
    response: KitDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
    rateLimit: 'kitsWrite',
  }),
  fork: defineEndpoint({
    id: 'kits.fork',
    owner: 'WP-42',
    method: 'POST',
    path: `${base}/:id/fork`,
    summary: 'Fork a kit',
    auth: 'session',
    params: z.object({ id: IdParam }),
    body: ForkKitBody,
    status: 201,
    response: KitDTO,
    errors: ['NOT_FOUND'],
    cache: cache.noStore,
    rateLimit: 'kitsWrite',
  }),
  userKits: defineEndpoint({
    id: 'kits.userKits',
    owner: 'WP-42',
    method: 'GET',
    path: `${API_V2_PREFIX}/users/:handle/kits`,
    summary: 'Public kits of a user (respects privacy)',
    auth: 'public',
    params: z.object({ handle: Handle }),
    query: PageQuery,
    response: KitCardPageDTO,
    errors: ['NOT_FOUND'],
    cache: cache.publicApi(['user:{id}', 'list:kits']),
    rateLimit: 'anonymousRead',
  }),
  myKits: defineEndpoint({
    id: 'kits.myKits',
    owner: 'WP-42',
    method: 'GET',
    path: `${API_V2_PREFIX}/me/kits`,
    summary: 'My kits, any visibility',
    auth: 'session',
    response: KitCardListDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.private,
  }),
} as const;
