/**
 * Image uploads of the media step (cover and gallery): the same direct-to-R2 flow as files
 * (`purpose: image`, ≤ 10 MB, PNG/JPEG/WebP/AVIF/GIF). `complete` creates the `Media` and queues
 * its processing (variants, ThumbHash); the draft references the upload id and the API resolves
 * the media id. A small preview is kept locally (see `preview-cache.ts`).
 */

import type { UploadDTO } from '@sotf/contracts/uploads';
import { UPLOAD_LIMITS } from '@sotf/contracts/uploads';
import { previewDataUrl } from './image.ts';
import { savePreview } from './preview-cache.ts';
import { runUpload, UploadError } from './uploader.ts';

export const IMAGE_LIMITS = UPLOAD_LIMITS.image;

/** Local validation of an image before it is uploaded; null when fine. */
export function imageProblem(file: Blob): 'type' | 'size' | null {
  if (!IMAGE_LIMITS.contentTypes.includes(file.type)) return 'type';
  if (file.size > IMAGE_LIMITS.maxBytes) return 'size';
  return null;
}

export async function uploadImage(
  blob: Blob,
  filename: string,
  signal: AbortSignal,
  onProgress?: (loaded: number, total: number) => void,
): Promise<{ upload: UploadDTO; preview: string | null }> {
  const problem = imageProblem(blob);
  if (problem === 'type') throw new UploadError('unsupported', blob.type || 'unknown type');
  if (problem === 'size') throw new UploadError('too_large', String(blob.size));
  const [preview, upload] = await Promise.all([
    previewDataUrl(blob),
    runUpload({
      file: blob,
      filename,
      purpose: 'image',
      contentType: blob.type,
      signal,
      ...(onProgress ? { onProgress } : {}),
    }),
  ]);
  if (preview) {
    void savePreview(upload.id, preview);
    if (upload.mediaId) void savePreview(upload.mediaId, preview);
  }
  return { upload, preview };
}
