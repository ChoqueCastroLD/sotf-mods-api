/**
 * Build viewer (T1-06): the geometry parsed from a BuildShare blueprint.
 *
 * - The worker (`build.extract` / `build.geometry`) parses `Data.Structures` into pieces
 *   (`ProfileID`, position, rotation, `LengthScale`), stores them packed and renders a static
 *   top-down SVG (the default view of the build page, no JavaScript).
 * - The 3D view (three.js) is loaded lazily on click and reads `GET /builds/:id/geometry`.
 *
 * Packed layout: Float32 little-endian, `GEOMETRY_STRIDE` values per piece
 * `[profileIndex, x, y, z, qx, qy, qz, qw, scale]`. Coordinates are in metres, centred on the
 * build (x/z) and resting on the ground (min y = 0).
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import { EntityId, IdParam, IsoDateTime } from './common.ts';
import { dto } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';

export const GEOMETRY_STRIDE = 9;
/** Pieces kept per build; above this the parser samples evenly. */
export const GEOMETRY_MAX_PIECES = 20_000;
/** Distinct profiles kept per build (the rest share the last index). */
export const GEOMETRY_MAX_PROFILES = 256;

export const BuildBoundsDTO = z.object({
  width: z.number().nonnegative().describe('Metres along x'),
  depth: z.number().nonnegative().describe('Metres along z'),
  height: z.number().nonnegative().describe('Metres along y'),
});
export type BuildBoundsDTO = z.infer<typeof BuildBoundsDTO>;

export const BUILD_PREVIEW_STATUSES = ['ready', 'pending', 'unavailable'] as const;

export const BuildPreviewDTO = dto(
  'BuildPreviewDTO',
  z.object({
    modId: EntityId,
    modVersionId: EntityId.nullable(),
    status: z.enum(BUILD_PREVIEW_STATUSES).describe('`pending`: being generated; `unavailable`: no geometry'),
    pieces: z.number().int().nonnegative().describe('Pieces in the 3D view'),
    totalPieces: z.number().int().nonnegative().describe('Pieces in the blueprint'),
    profiles: z.number().int().nonnegative(),
    size: BuildBoundsDTO.nullable(),
    svg: z.string().nullable().describe('Top-down preview (inline SVG, `currentColor` fills)'),
    viewBox: z.object({ width: z.number().int().positive(), height: z.number().int().positive() }),
  }),
  {
    description: 'Server-rendered preview of a build (latest version) and its size.',
    examples: [
      {
        modId: 20,
        modVersionId: 589,
        status: 'ready',
        pieces: 8946,
        totalPieces: 8946,
        profiles: 14,
        size: { width: 31.4, depth: 27.8, height: 12.6 },
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64"></svg>',
        viewBox: { width: 96, height: 64 },
      },
    ],
  },
);
export type BuildPreviewDTO = z.infer<typeof BuildPreviewDTO>;

export const BuildGeometryDTO = dto(
  'BuildGeometryDTO',
  z.object({
    modId: EntityId,
    modVersionId: EntityId,
    pieces: z.number().int().nonnegative(),
    totalPieces: z.number().int().nonnegative(),
    profiles: z.array(z.string()).describe('`ProfileID` per profile index'),
    size: BuildBoundsDTO,
    data: z.string().describe('Base64 of the packed Float32 pieces'),
    createdAt: IsoDateTime,
  }),
  {
    description: 'Packed geometry for the 3D viewer.',
    examples: [
      {
        modId: 20,
        modVersionId: 589,
        pieces: 1,
        totalPieces: 1,
        profiles: ['Log.Large'],
        size: { width: 1, depth: 1, height: 1 },
        data: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgD8AAIA/',
        createdAt: '2026-09-20T18:00:00.000Z',
      },
    ],
  },
);
export type BuildGeometryDTO = z.infer<typeof BuildGeometryDTO>;

export interface DecodedPieces {
  count: number;
  data: Float32Array;
}

/** Decodes `BuildGeometryDTO.data` (works in browsers and Node). */
export function decodeGeometry(base64: string): DecodedPieces {
  const binary = (globalThis as unknown as { atob(data: string): string }).atob(base64);
  const length = binary.length - (binary.length % (GEOMETRY_STRIDE * 4));
  const bytes = new Uint8Array(length);
  for (let i = 0; i < length; i++) bytes[i] = binary.charCodeAt(i);
  const data = new Float32Array(bytes.buffer, 0, length / 4);
  return { count: length / (GEOMETRY_STRIDE * 4), data };
}

const base = `${API_V2_PREFIX}/builds`;

export const buildViewerEndpoints = {
  preview: defineEndpoint({
    id: 'buildViewer.preview',
    owner: 'WP-63',
    method: 'GET',
    path: `${base}/:id/preview`,
    summary: 'Top-down SVG preview of a build (latest version)',
    description: 'Generates the geometry in the background when the build has none yet (`status: pending`).',
    auth: 'public',
    params: z.object({ id: IdParam }),
    response: BuildPreviewDTO,
    errors: ['NOT_FOUND'],
    cache: cache.publicApi(['mod:{id}']),
    rateLimit: 'anonymousRead',
  }),
  geometry: defineEndpoint({
    id: 'buildViewer.geometry',
    owner: 'WP-63',
    method: 'GET',
    path: `${base}/:id/geometry`,
    summary: 'Packed geometry of a build for the 3D viewer',
    auth: 'public',
    params: z.object({ id: IdParam }),
    response: BuildGeometryDTO,
    errors: ['NOT_FOUND'],
    cache: cache.publicApi(['mod:{id}'], 3600),
    rateLimit: 'anonymousRead',
  }),
} as const;
