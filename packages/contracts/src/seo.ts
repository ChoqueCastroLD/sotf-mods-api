/**
 * URLs, canonical paths, the tolerant resolver and oEmbed (PLAN §4.1, §4.2, §4.6, §8.6).
 * Resolver by WP-31 (`GET /resolve`), oEmbed and SEO endpoints by WP-61.
 *
 * Canonical paths use English segments; locales ≠ `en` are prefixed by the web (`/es/mods/…`).
 * Legacy slugs are kept verbatim (`axel's-mod-menu`): path segments are percent-encoded only where
 * RFC 3986 requires it, so `'`, `(`, `)` and `+` stay readable as in the legacy URLs.
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import { EntityId, HttpUrl, type ModKind, SitePath } from './common.ts';
import { dto } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';

export const SITE_ORIGIN = 'https://sotf-mods.com';

/** Encodes one path segment keeping the RFC 3986 `pchar` sub-delimiters readable. */
export function encodePathSegment(segment: string): string {
  return encodeURIComponent(segment).replace(/%(?:21|24|26|27|28|29|2A|2B|2C|3A|3B|3D|40)/gi, (match) =>
    decodeURIComponent(match),
  );
}

/** `/mods/:user/:slug` (mods and libraries) or `/builds/:user/:slug`. */
export function modPath(kind: ModKind, userHandle: string, slug: string): string {
  const prefix = kind === 'build' ? '/builds' : '/mods';
  return `${prefix}/${encodePathSegment(userHandle)}/${encodePathSegment(slug)}`;
}

/** Download route of a version (always under `/mods`, as RedManager expects). */
export function downloadPath(userHandle: string, slug: string, version: string): string {
  return `/mods/${encodePathSegment(userHandle)}/${encodePathSegment(slug)}/download/${encodePathSegment(version)}`;
}

export function versionsPath(kind: ModKind, userHandle: string, slug: string, version?: string): string {
  const base = `${modPath(kind, userHandle, slug)}/versions`;
  return version === undefined ? base : `${base}/${encodePathSegment(version)}`;
}

export function profilePath(handle: string): string {
  return `/profile/${encodePathSegment(handle)}`;
}

export function kitPath(ownerHandle: string, slug: string): string {
  return `/kits/${encodePathSegment(ownerHandle)}/${encodePathSegment(slug)}`;
}

export function categoryPath(slug: string): string {
  return `/categories/${encodePathSegment(slug)}`;
}

export function tagPath(slug: string): string {
  return `/tags/${encodePathSegment(slug)}`;
}

/** Absolute URL on the public origin. */
export function absoluteUrl(path: string, origin: string = SITE_ORIGIN): string {
  return `${origin.replace(/\/+$/, '')}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Normalised slug used by resolver step 3 (PLAN §4.6): lowercase; without `'`, `(`, `)`, `.`,
 * `_` and `+`; runs of hyphens and spaces collapsed; trimmed hyphens.
 */
export function normalizeSlugForLookup(slug: string): string {
  return slug
    .toLowerCase()
    .replace(/['()._+]/g, '')
    .replace(/[\s-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// -----------------------------------------------------------------------------------------------
// Resolver
// -----------------------------------------------------------------------------------------------

export const RESOLVE_KINDS = ['mod', 'build', 'user', 'kit'] as const;

export const ResolveDTO = dto(
  'ResolveDTO',
  z.object({
    status: z.union([z.literal(200), z.literal(301), z.literal(404), z.literal(410)]),
    kind: z.enum(RESOLVE_KINDS).nullable(),
    id: EntityId.nullable(),
    canonicalPath: SitePath.nullable().describe('Target of the 301, or the canonical path on 200'),
    rule: z
      .enum([
        'exact',
        'kind_mismatch',
        'global_slug',
        'normalized',
        'manifest_id',
        'history',
        'tombstone',
        'redirect',
        'none',
      ])
      .describe('Resolver step that matched (PLAN §4.6)'),
  }),
  {
    description: 'Resolution of a public path (used by the web middleware and the download route).',
    examples: [
      { status: 301, kind: 'mod', id: 20, canonicalPath: "/mods/imaxel/axel's-mod-menu", rule: 'normalized' },
      { status: 410, kind: null, id: null, canonicalPath: null, rule: 'tombstone' },
    ],
  },
);
export type ResolveDTO = z.infer<typeof ResolveDTO>;

// -----------------------------------------------------------------------------------------------
// oEmbed (served by the web at /oembed; PLAN §4.2)
// -----------------------------------------------------------------------------------------------

export const OEmbedDTO = dto(
  'OEmbedDTO',
  z.object({
    version: z.literal('1.0'),
    type: z.literal('rich'),
    title: z.string(),
    author_name: z.string(),
    author_url: HttpUrl,
    provider_name: z.literal('SOTF Mods'),
    provider_url: HttpUrl,
    cache_age: z.number().int().positive(),
    html: z.string().describe('`<iframe>` of /embed/mods/:u/:s'),
    width: z.number().int().positive(),
    height: z.number().int().positive(),
    thumbnail_url: HttpUrl.optional(),
    thumbnail_width: z.number().int().positive().optional(),
    thumbnail_height: z.number().int().positive().optional(),
  }),
  {
    description: 'oEmbed `rich` response (field names follow the oEmbed spec).',
    examples: [
      {
        version: '1.0',
        type: 'rich',
        title: "Axel's Mod Menu",
        author_name: 'ImAxel',
        author_url: 'https://sotf-mods.com/profile/imaxel',
        provider_name: 'SOTF Mods',
        provider_url: 'https://sotf-mods.com',
        cache_age: 900,
        html: '<iframe src="https://sotf-mods.com/embed/mods/imaxel/axel\'s-mod-menu" width="480" height="180" loading="lazy" title="Axel\'s Mod Menu on SOTF Mods"></iframe>',
        width: 480,
        height: 180,
        thumbnail_url: 'https://r2.sotf-mods.com/og/mod/20-3f9a1c.png',
        thumbnail_width: 1200,
        thumbnail_height: 630,
      },
    ],
  },
);

export const seoEndpoints = {
  resolve: defineEndpoint({
    id: 'seo.resolve',
    owner: 'WP-31',
    method: 'GET',
    path: `${API_V2_PREFIX}/resolve`,
    summary: 'Resolve a public path (history, case, owner changes, tombstones)',
    auth: 'public',
    query: z.object({ path: SitePath }),
    response: ResolveDTO,
    cache: cache.publicApi(['mod:{id}', 'user:{id}', 'kit:{id}']),
    rateLimit: 'anonymousRead',
  }),
} as const;
