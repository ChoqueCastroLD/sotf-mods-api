/**
 * Kit cover upload (PLAN §2.8 «Subida»): `POST /uploads` (purpose `image`) → presigned PUT straight
 * to R2 with XHR (real progress) → `POST /uploads/:id/complete` → poll `GET /uploads/:id` until the
 * image is processed (`mediaId` set). The caller then sends `coverUploadId` in `PATCH /kits/:id`.
 */
import { api } from '../../lib/api.ts';

/**
 * `UPLOAD_LIMITS.image` of `@sotf/contracts/uploads`, mirrored so the console chunk does not pull
 * Zod and the contract schemas at run time (the API validates again and answers 413/415).
 */
export const COVER_LIMITS = {
  maxBytes: 10 * 1024 * 1024,
  contentTypes: ['image/png', 'image/jpeg', 'image/webp', 'image/avif', 'image/gif'],
  extensions: ['png', 'jpg', 'jpeg', 'webp', 'avif', 'gif'],
} as const satisfies { maxBytes: number; contentTypes: readonly string[]; extensions: readonly string[] };

export type CoverUploadError = 'type' | 'size' | 'upload' | 'processing' | 'rejected';

export class CoverUploadFailure extends Error {
  readonly reason: CoverUploadError;

  constructor(reason: CoverUploadError, cause?: unknown) {
    super(`cover upload failed: ${reason}`, cause === undefined ? undefined : { cause });
    this.name = 'CoverUploadFailure';
    this.reason = reason;
  }
}

/** Client-side check before asking for a presigned URL (the server checks again). */
export function validateCover(file: File): CoverUploadError | null {
  const extension = file.name.split('.').pop()?.toLowerCase() ?? '';
  if (
    !(COVER_LIMITS.contentTypes as readonly string[]).includes(file.type) ||
    !(COVER_LIMITS.extensions as readonly string[]).includes(extension)
  )
    return 'type';
  if (file.size <= 0 || file.size > COVER_LIMITS.maxBytes) return 'size';
  return null;
}

function put(url: string, headers: Record<string, string>, file: File, onProgress: (ratio: number) => void) {
  return new Promise<void>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', url);
    for (const [name, value] of Object.entries(headers)) {
      // The browser sets Content-Length itself (it is a forbidden header name).
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

/** Uploads `file` and resolves the upload id once the image is usable as a cover. */
export async function uploadCover(file: File, onProgress: (ratio: number) => void = () => {}): Promise<string> {
  const invalid = validateCover(file);
  if (invalid) throw new CoverUploadFailure(invalid);
  let uploadId: string;
  try {
    const presigned = await api.uploads.create({
      body: { purpose: 'image', filename: file.name, size: file.size, contentType: file.type },
    });
    if (!presigned.url) throw new Error('multipart is not used for images');
    uploadId = presigned.upload.id;
    await put(presigned.url, presigned.headers, file, onProgress);
    await api.uploads.complete({ params: { id: uploadId }, body: {} });
  } catch (error) {
    if (error instanceof CoverUploadFailure) throw error;
    throw new CoverUploadFailure('upload', error);
  }
  const started = Date.now();
  while (Date.now() - started < POLL_TIMEOUT_MS) {
    const upload = await api.uploads.get({ params: { id: uploadId } });
    if (upload.status === 'rejected' || upload.status === 'expired') throw new CoverUploadFailure('rejected');
    if (upload.mediaId && (upload.status === 'processing' || upload.status === 'ready')) return uploadId;
    await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL_MS));
  }
  throw new CoverUploadFailure('processing');
}
