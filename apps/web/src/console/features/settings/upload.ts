/**
 * Avatar and banner upload (PLAN §2.8 «Subida», T0-15): the cropped WebP goes through
 * `POST /uploads` (purpose `avatar` | `banner`) → presigned PUT straight to R2 with XHR (real
 * progress) → `POST /uploads/:id/complete` → poll `GET /uploads/:id` until the image is processed.
 * The caller then sends `avatarUploadId` / `bannerUploadId` in `PATCH /me/profile`.
 */
import { api } from '../../lib/api.ts';

export type ImagePurpose = 'avatar' | 'banner';

/**
 * `UPLOAD_LIMITS` of `@sotf/contracts/uploads` for the source file the user picks, mirrored so the
 * chunk ships no Zod (the API validates the uploaded WebP again).
 */
export const SOURCE_LIMITS: Readonly<Record<ImagePurpose, { maxBytes: number; types: readonly string[] }>> = {
  avatar: { maxBytes: 5 * 1024 * 1024, types: ['image/png', 'image/jpeg', 'image/webp', 'image/avif', 'image/gif'] },
  banner: { maxBytes: 10 * 1024 * 1024, types: ['image/png', 'image/jpeg', 'image/webp', 'image/avif'] },
};

/** Size of the cropped output (the server makes its variants from it). */
export const OUTPUT_SIZE: Readonly<Record<ImagePurpose, { width: number; height: number }>> = {
  avatar: { width: 512, height: 512 },
  banner: { width: 1600, height: 400 },
};

export type ImageUploadError = 'type' | 'size' | 'upload' | 'processing' | 'rejected';

export class ImageUploadFailure extends Error {
  readonly reason: ImageUploadError;

  constructor(reason: ImageUploadError, cause?: unknown) {
    super(`image upload failed: ${reason}`, cause === undefined ? undefined : { cause });
    this.name = 'ImageUploadFailure';
    this.reason = reason;
  }
}

/** Check of the picked file before cropping. */
export function validateSource(file: File, purpose: ImagePurpose): ImageUploadError | null {
  const limits = SOURCE_LIMITS[purpose];
  if (!limits.types.includes(file.type)) return 'type';
  if (file.size <= 0 || file.size > limits.maxBytes) return 'size';
  return null;
}

function put(url: string, headers: Record<string, string>, file: Blob, onProgress: (ratio: number) => void) {
  return new Promise<void>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', url);
    for (const [name, value] of Object.entries(headers)) {
      if (name.toLowerCase() !== 'content-length') xhr.setRequestHeader(name, value);
    }
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) onProgress(event.loaded / event.total);
    };
    xhr.onload = () => (xhr.status >= 200 && xhr.status < 300 ? resolve() : reject(new Error(`PUT ${xhr.status}`)));
    xhr.onerror = () => reject(new Error('PUT network error'));
    xhr.onabort = () => reject(new DOMException('aborted', 'AbortError'));
    xhr.send(file);
  });
}

const POLL_INTERVAL_MS = 1000;
const POLL_TIMEOUT_MS = 60_000;

/** Uploads a cropped image and resolves its upload id once it is processed. */
export async function uploadImage(
  file: File,
  purpose: ImagePurpose,
  onProgress: (ratio: number) => void = () => {},
): Promise<string> {
  let uploadId: string;
  try {
    const presigned = await api.uploads.create({
      body: { purpose, filename: file.name, size: file.size, contentType: file.type },
    });
    if (!presigned.url) throw new Error('multipart is not used for images');
    uploadId = presigned.upload.id;
    await put(presigned.url, presigned.headers, file, onProgress);
    await api.uploads.complete({ params: { id: uploadId }, body: {} });
  } catch (error) {
    throw new ImageUploadFailure('upload', error);
  }
  const started = Date.now();
  while (Date.now() - started < POLL_TIMEOUT_MS) {
    const upload = await api.uploads.get({ params: { id: uploadId } });
    if (upload.status === 'rejected' || upload.status === 'expired') throw new ImageUploadFailure('rejected');
    if (upload.mediaId && (upload.status === 'processing' || upload.status === 'ready')) return uploadId;
    await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL_MS));
  }
  throw new ImageUploadFailure('processing');
}
