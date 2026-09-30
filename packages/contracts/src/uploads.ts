/**
 * Direct uploads to R2 (PLAN §2.8 "Subida"). Implemented by WP-31.
 *
 * 1. `POST /uploads` validates purpose, size, type and quota and returns a single-use presigned
 *    PUT (15 min) to `sotf-mods-private/incoming/{userId}/{uploadId}` with `Content-Type` and
 *    `Content-Length` signed. Files above 100 MB use presigned multipart.
 * 2. The client uploads with XHR (real progress) straight to R2.
 * 3. `POST /uploads/:id/complete` HEADs the object, checks the size and enqueues
 *    `inspection.run` (zips/builds) or `media.process` (images).
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import { IsoDateTime, Sha256Hex, Uuid } from './common.ts';
import { dto, exampleOf } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';
import { BuildMetaDTO, FILE_CHECKS, InspectionFlagDTO, RedLoaderManifestDTO } from './manifest.ts';

export const UPLOAD_PURPOSES = ['mod_file', 'build_file', 'image', 'avatar', 'banner', 'comment_image'] as const;
export const UploadPurpose = z.enum(UPLOAD_PURPOSES);
export type UploadPurpose = z.infer<typeof UploadPurpose>;

export const UPLOAD_STATUSES = ['pending', 'uploaded', 'processing', 'ready', 'rejected', 'expired'] as const;
export const UploadStatus = z.enum(UPLOAD_STATUSES);

const MB = 1024 * 1024;
const IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/webp', 'image/avif', 'image/gif'] as const;

/**
 * Limits per purpose. Mod files: 200 MB (500 MB for verified creators); builds: 20 MB (fixes the
 * legacy 100 GB bug). Image limits are v2 decisions documented in the package README.
 */
export const UPLOAD_LIMITS: Readonly<
  Record<
    UploadPurpose,
    { maxBytes: number; maxBytesVerified?: number; contentTypes: readonly string[]; extensions: readonly string[] }
  >
> = {
  mod_file: {
    maxBytes: FILE_CHECKS.maxModBytes,
    maxBytesVerified: FILE_CHECKS.maxModBytesVerified,
    contentTypes: ['application/zip', 'application/x-zip-compressed'],
    extensions: ['zip'],
  },
  build_file: { maxBytes: FILE_CHECKS.maxBuildBytes, contentTypes: ['application/json'], extensions: ['json'] },
  image: { maxBytes: 10 * MB, contentTypes: IMAGE_TYPES, extensions: ['png', 'jpg', 'jpeg', 'webp', 'avif', 'gif'] },
  avatar: { maxBytes: 5 * MB, contentTypes: IMAGE_TYPES, extensions: ['png', 'jpg', 'jpeg', 'webp', 'avif', 'gif'] },
  banner: { maxBytes: 10 * MB, contentTypes: IMAGE_TYPES, extensions: ['png', 'jpg', 'jpeg', 'webp', 'avif'] },
  comment_image: {
    maxBytes: 5 * MB,
    contentTypes: IMAGE_TYPES,
    extensions: ['png', 'jpg', 'jpeg', 'webp', 'avif', 'gif'],
  },
};

/** Files larger than this use presigned multipart. */
export const MULTIPART_THRESHOLD_BYTES = 100 * MB;
/** Part size of multipart uploads. */
export const MULTIPART_PART_BYTES = 16 * MB;
/** Lifetime of a presigned upload URL (seconds). */
export const PRESIGN_TTL_SECONDS = 15 * 60;

/** Max bytes allowed for a purpose (verified creators get the larger mod limit). */
export function maxUploadBytes(purpose: UploadPurpose, verifiedCreator: boolean): number {
  const limit = UPLOAD_LIMITS[purpose];
  return verifiedCreator && limit.maxBytesVerified ? limit.maxBytesVerified : limit.maxBytes;
}

export const Filename = z
  .string()
  .transform((value) => value.normalize('NFC').trim())
  .pipe(
    z
      .string()
      .min(1)
      .max(255)
      .refine(
        (value) => ![...value].some((ch) => ch === '/' || ch === '\\' || ch.charCodeAt(0) < 0x20),
        'invalid characters in file name',
      ),
  );

export const CreateUploadBody = dto(
  'CreateUploadBody',
  z.strictObject({
    purpose: UploadPurpose,
    filename: Filename,
    size: z.number().int().positive().max(FILE_CHECKS.maxModBytesVerified),
    contentType: z.string().min(1).max(100),
    sha256: Sha256Hex.optional().describe('Computed in the browser when available'),
  }),
  {
    description: 'Request a presigned upload.',
    examples: [
      { purpose: 'mod_file', filename: 'AxelModMenu-1.3.9.zip', size: 1_254_310, contentType: 'application/zip' },
    ],
  },
);

export const UploadInspectionDTO = dto(
  'UploadInspectionDTO',
  z.object({
    status: z.enum(['pending', 'passed', 'flagged', 'failed']),
    manifest: RedLoaderManifestDTO.nullable(),
    buildMeta: BuildMetaDTO.nullable(),
    entries: z
      .array(
        z.object({
          path: z.string(),
          size: z.number().int().nonnegative(),
          compressed: z.number().int().nonnegative(),
        }),
      )
      .describe('Zip entries (first 500)'),
    entriesTotal: z.number().int().nonnegative(),
    uncompressedBytes: z.number().int().nonnegative().nullable(),
    ratio: z.number().nonnegative().nullable(),
    sha256: Sha256Hex.nullable(),
    flags: z.array(InspectionFlagDTO),
  }),
  {
    description: 'Automatic checks of an uploaded mod zip or build JSON.',
    examples: [
      {
        status: 'passed',
        manifest: exampleOf(RedLoaderManifestDTO),
        buildMeta: null,
        entries: [
          { path: 'AxelModMenu.dll', size: 402_944, compressed: 180_112 },
          { path: 'AxelModMenu/manifest.json', size: 412, compressed: 260 },
        ],
        entriesTotal: 2,
        uncompressedBytes: 403_356,
        ratio: 2.23,
        sha256: '9f2c0a4f1f0d6b1e2c3a4b5c6d7e8f90a1b2c3d4e5f60718293a4b5c6d7e8f90',
        flags: [],
      },
    ],
  },
);

export const UploadDTO = dto(
  'UploadDTO',
  z.object({
    id: Uuid,
    purpose: UploadPurpose,
    status: UploadStatus,
    filename: z.string(),
    contentType: z.string(),
    size: z.number().int().positive(),
    sha256: Sha256Hex.nullable(),
    createdAt: IsoDateTime,
    expiresAt: IsoDateTime,
    completedAt: IsoDateTime.nullable(),
    inspection: UploadInspectionDTO.nullable(),
    mediaId: Uuid.nullable().describe('Set for image purposes once processed'),
    previewUrl: z
      .string()
      .nullable()
      .describe('Smallest processed variant of an image upload (`GET /uploads/:id`); null until processed'),
    error: z.string().nullable(),
  }),
  {
    description: 'State of an upload and its inspection.',
    examples: [
      {
        id: '0192f3a5-1b2c-7d3e-8f40-5a6b7c8d9e0f',
        purpose: 'mod_file',
        status: 'ready',
        filename: 'AxelModMenu-1.3.9.zip',
        contentType: 'application/zip',
        size: 1_254_310,
        sha256: '9f2c0a4f1f0d6b1e2c3a4b5c6d7e8f90a1b2c3d4e5f60718293a4b5c6d7e8f90',
        createdAt: '2026-09-29T10:00:00.000Z',
        expiresAt: '2026-09-30T10:00:00.000Z',
        completedAt: '2026-09-29T10:00:40.000Z',
        inspection: exampleOf(UploadInspectionDTO),
        mediaId: null,
        previewUrl: null,
        error: null,
      },
    ],
  },
);
export type UploadDTO = z.infer<typeof UploadDTO>;

export const PresignedUploadDTO = dto(
  'PresignedUploadDTO',
  z.object({
    upload: UploadDTO,
    method: z.literal('PUT'),
    url: z.string().nullable().describe('Single PUT URL (null when multipart)'),
    headers: z.record(z.string(), z.string()).describe('Headers that are part of the signature and must be sent as-is'),
    expiresAt: IsoDateTime,
    multipart: z
      .object({
        partBytes: z.number().int().positive(),
        parts: z.array(z.object({ partNumber: z.number().int().min(1).max(10_000), url: z.string() })),
      })
      .nullable(),
  }),
  {
    description: 'Presigned PUT (or multipart part URLs) to upload straight to R2.',
    examples: [
      {
        upload: { ...exampleOf(UploadDTO), status: 'pending', completedAt: null, inspection: null },
        method: 'PUT',
        url: 'https://ACCOUNT.r2.cloudflarestorage.com/sotf-mods-private/incoming/12/0192f3a5-1b2c-7d3e-8f40-5a6b7c8d9e0f?X-Amz-Signature=…',
        headers: { 'content-type': 'application/zip', 'content-length': '1254310' },
        expiresAt: '2026-09-29T10:15:00.000Z',
        multipart: null,
      },
    ],
  },
);

export const CompleteUploadBody = dto(
  'CompleteUploadBody',
  z.strictObject({
    parts: z
      .array(z.object({ partNumber: z.number().int().min(1).max(10_000), etag: z.string().min(1).max(200) }))
      .max(10_000)
      .optional()
      .describe('Multipart only: ETag of every uploaded part'),
  }),
  { description: 'Finish an upload (HEAD + size check + inspection).', examples: [{}] },
);

const base = `${API_V2_PREFIX}/uploads`;

export const uploadsEndpoints = {
  create: defineEndpoint({
    id: 'uploads.create',
    owner: 'WP-31',
    method: 'POST',
    path: base,
    summary: 'Request a presigned upload',
    auth: 'verified',
    body: CreateUploadBody,
    status: 201,
    response: PresignedUploadDTO,
    errors: ['PAYLOAD_TOO_LARGE', 'UNSUPPORTED_MEDIA_TYPE', 'FORBIDDEN', 'EMAIL_NOT_VERIFIED'],
    cache: cache.noStore,
    rateLimit: 'uploads',
  }),
  complete: defineEndpoint({
    id: 'uploads.complete',
    owner: 'WP-31',
    method: 'POST',
    path: `${base}/:id/complete`,
    summary: 'Finish an upload and start its inspection',
    auth: 'verified',
    requires: ['upload_owner'],
    params: z.object({ id: Uuid }),
    body: CompleteUploadBody,
    status: 202,
    response: UploadDTO,
    errors: ['NOT_FOUND', 'CONFLICT', 'PAYLOAD_TOO_LARGE', 'GONE'],
    cache: cache.noStore,
  }),
  get: defineEndpoint({
    id: 'uploads.get',
    owner: 'WP-31',
    method: 'GET',
    path: `${base}/:id`,
    summary: 'Upload status and inspection result',
    auth: 'verified',
    requires: ['upload_owner'],
    params: z.object({ id: Uuid }),
    response: UploadDTO,
    errors: ['NOT_FOUND'],
    cache: cache.private,
  }),
} as const;

/** Upload ids referenced by other bodies (drafts, profile, comments). */
export const UploadId = Uuid;
/** Media ids (processed images). */
export const MediaId = Uuid;
