/**
 * Comment images (PLAN §7.6: up to 2, restricted upload, WebP without EXIF produced by the
 * worker): `POST /uploads { purpose: 'comment_image' }` → presigned `PUT` straight to storage →
 * `POST /uploads/:id/complete` → poll until the media exists. The comment then references the
 * upload id (`imageUploadIds`); the API attaches the processed media.
 */
import type { PresignedUploadDTO, UploadDTO } from '@sotf/contracts/uploads';
import type { z } from 'zod';
import { api, type Failure, get } from './api.ts';

type Presigned = z.output<typeof PresignedUploadDTO>;
type Upload = z.output<typeof UploadDTO>;

/** Same limits as `UPLOAD_LIMITS.comment_image` of @sotf/contracts (kept literal: no Zod here). */
export const COMMENT_IMAGE_MAX_BYTES = 5 * 1024 * 1024;
export const COMMENT_IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/webp', 'image/avif', 'image/gif'] as const;

export type UploadOutcome =
  | { ok: true; uploadId: string }
  | { ok: false; reason: 'type' | 'size' | 'failed'; failure?: Failure };

const POLL_MS = 1200;
const POLL_LIMIT = 40;

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

export async function uploadCommentImage(file: File, signal?: AbortSignal): Promise<UploadOutcome> {
  if (!(COMMENT_IMAGE_TYPES as readonly string[]).includes(file.type)) return { ok: false, reason: 'type' };
  if (file.size > COMMENT_IMAGE_MAX_BYTES || file.size === 0) return { ok: false, reason: 'size' };
  const created = await api<Presigned>(
    'POST',
    '/api/v2/uploads',
    { purpose: 'comment_image', filename: file.name.slice(0, 200) || 'image', size: file.size, contentType: file.type },
    signal,
  );
  if (!created.ok) return { ok: false, reason: 'failed', failure: created };
  const { upload, url, headers } = created.data;
  if (!url) return { ok: false, reason: 'failed' };
  try {
    const put = await fetch(url, { method: 'PUT', body: file, headers, ...(signal ? { signal } : {}) });
    if (!put.ok) return { ok: false, reason: 'failed' };
  } catch {
    return { ok: false, reason: 'failed', failure: { ok: false, kind: 'network' } };
  }
  const completed = await api<Upload>('POST', `/api/v2/uploads/${encodeURIComponent(upload.id)}/complete`, {}, signal);
  if (!completed.ok) return { ok: false, reason: 'failed', failure: completed };
  let state = completed.data;
  for (let attempt = 0; attempt < POLL_LIMIT; attempt += 1) {
    if (state.status === 'rejected' || state.status === 'expired') return { ok: false, reason: 'failed' };
    if (state.mediaId && (state.status === 'processing' || state.status === 'ready'))
      return { ok: true, uploadId: state.id };
    if (signal?.aborted) return { ok: false, reason: 'failed' };
    await wait(POLL_MS);
    const next = await get<Upload>(`/api/v2/uploads/${encodeURIComponent(upload.id)}`, signal);
    if (!next.ok) return { ok: false, reason: 'failed', failure: next };
    state = next.data;
  }
  return { ok: false, reason: 'failed' };
}
