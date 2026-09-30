/**
 * Upload validation (PLAN §2.8 "Subida", `UPLOAD_LIMITS` of the contract): purpose, extension,
 * content type, size (verified creators get the larger mod limit) and the per-user quota.
 *
 * The content type that gets **signed** is the canonical one for the file's extension
 * (`application/zip` even when Windows browsers report `application/x-zip-compressed`): the client
 * must send exactly the headers returned by `POST /uploads`, so the store rejects any other type.
 */
import {
  MULTIPART_PART_BYTES,
  MULTIPART_THRESHOLD_BYTES,
  maxUploadBytes,
  UPLOAD_LIMITS,
  type UploadPurpose,
} from '@sotf/contracts/uploads';
import { DomainError } from '../kernel/errors.ts';

/** Canonical content type per extension. */
export const CANONICAL_CONTENT_TYPES: Readonly<Record<string, string>> = {
  zip: 'application/zip',
  json: 'application/json',
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  webp: 'image/webp',
  avif: 'image/avif',
  gif: 'image/gif',
};

/**
 * Per-user quota (v2 decision, documented in the README): at most `maxOpen` uploads waiting to be
 * completed or processed, and `dailyBytes` declared in 24 h. The HTTP layer adds the `uploads`
 * bucket (20 requests/day per user).
 */
export const UPLOAD_QUOTA = {
  maxOpen: 10,
  dailyBytes: 5 * 1024 * 1024 * 1024,
} as const;

/** Lifetime of an upload row and of its `incoming/` object (the bucket's lifecycle rule is 1 day). */
export const UPLOAD_TTL_MS = 24 * 60 * 60 * 1000;

export function extensionOf(filename: string): string {
  const dot = filename.lastIndexOf('.');
  return dot > 0 ? filename.slice(dot + 1).toLowerCase() : '';
}

/** `type/subtype` without parameters, lower case. */
export function baseContentType(value: string): string {
  return (value.split(';', 1)[0] ?? '').trim().toLowerCase();
}

export interface ValidatedUpload {
  purpose: UploadPurpose;
  filename: string;
  extension: string;
  /** Signed content type. */
  contentType: string;
  size: number;
  maxBytes: number;
  multipart: { partBytes: number; parts: number } | null;
}

/** Validates a create request. Throws 413/415/422. */
export function validateUpload(input: {
  purpose: UploadPurpose;
  filename: string;
  size: number;
  contentType: string;
  verifiedCreator: boolean;
}): ValidatedUpload {
  const limit = UPLOAD_LIMITS[input.purpose];
  const extension = extensionOf(input.filename);
  if (!limit.extensions.includes(extension)) {
    throw new DomainError(
      'UNSUPPORTED_MEDIA_TYPE',
      undefined,
      `A ${input.purpose} must be a ${limit.extensions.map((e) => `.${e}`).join(', ')} file`,
    );
  }
  const declared = baseContentType(input.contentType);
  const canonical = CANONICAL_CONTENT_TYPES[extension];
  if (!limit.contentTypes.includes(declared) || !canonical || !limit.contentTypes.includes(canonical)) {
    throw new DomainError('UNSUPPORTED_MEDIA_TYPE', undefined, `Content type "${declared}" is not accepted here`);
  }
  // An image declared as one format but named as another is rejected (no silent retyping).
  if (declared.startsWith('image/') && declared !== canonical) {
    throw new DomainError('UNSUPPORTED_MEDIA_TYPE', undefined, `The file extension does not match "${declared}"`);
  }
  const maxBytes = maxUploadBytes(input.purpose, input.verifiedCreator);
  if (!Number.isInteger(input.size) || input.size <= 0) {
    throw new DomainError('VALIDATION_FAILED', undefined, 'The file is empty');
  }
  if (input.size > maxBytes) {
    throw new DomainError(
      'PAYLOAD_TOO_LARGE',
      undefined,
      `The file is larger than ${Math.floor(maxBytes / (1024 * 1024))} MB`,
    );
  }
  const multipart =
    input.size > MULTIPART_THRESHOLD_BYTES
      ? { partBytes: MULTIPART_PART_BYTES, parts: Math.ceil(input.size / MULTIPART_PART_BYTES) }
      : null;
  return {
    purpose: input.purpose,
    filename: input.filename,
    extension,
    contentType: canonical,
    size: input.size,
    maxBytes,
    multipart,
  };
}

/** Size of part `n` (1-based) of a multipart upload. */
export function partSize(total: number, partBytes: number, partNumber: number): number {
  const start = (partNumber - 1) * partBytes;
  return Math.max(0, Math.min(partBytes, total - start));
}

/** `Media.purpose` of an image upload. */
export function mediaPurposeOf(purpose: UploadPurpose): 'mod_image' | 'avatar' | 'banner' | 'comment_image' | null {
  switch (purpose) {
    case 'image':
      return 'mod_image';
    case 'avatar':
    case 'banner':
    case 'comment_image':
      return purpose;
    default:
      return null;
  }
}
