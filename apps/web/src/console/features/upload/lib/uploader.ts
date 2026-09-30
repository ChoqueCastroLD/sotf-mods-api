/**
 * Direct uploads to R2 (PLAN §2.8 «Subida», contracts `uploads.ts`, WP-31):
 *
 * 1. `POST /api/v2/uploads` → a presigned PUT (or presigned multipart parts above 100 MB);
 * 2. the bytes go **straight to R2 with XHR**, so the progress is real (`upload.onprogress`);
 * 3. `POST /uploads/:id/complete` (with the parts' ETags for multipart) starts the inspection.
 *
 * Every request is retried with backoff on network errors, 5xx, 408 and 429. A failed upload keeps
 * its {@link UploadSession}: «Retry» resumes it (multipart: only the missing parts) while the
 * presigned URLs are valid, and starts a fresh upload once they expired.
 */
import { isApiError } from '@sotf/contracts/client';
import type { UploadDTO, UploadPurpose } from '@sotf/contracts/uploads';
import { api } from '../../../lib/api.ts';

type Presigned = Awaited<ReturnType<typeof api.uploads.create>>;

export interface UploadSession {
  presigned: Presigned;
  /** ETag of every uploaded part (multipart), by part number. */
  etags: Map<number, string>;
  /** Bytes uploaded by finished parts (multipart) — progress restarts from here on resume. */
  sentBytes: number;
  /** The PUT (or every part) finished. */
  transferred: boolean;
  /** `complete` answered: the upload exists server-side. */
  completed: UploadDTO | null;
}

export type UploadFailure = 'network' | 'expired' | 'too_large' | 'unsupported' | 'forbidden' | 'rejected' | 'api';

export class UploadError extends Error {
  readonly failure: UploadFailure;
  readonly problemCode: string | null;
  readonly reference: string | null;
  /** The session can be resumed by «Retry». */
  readonly resumable: boolean;

  constructor(
    failure: UploadFailure,
    message: string,
    options: { problemCode?: string | null; reference?: string | null; resumable?: boolean } = {},
  ) {
    super(message);
    this.name = 'UploadError';
    this.failure = failure;
    this.problemCode = options.problemCode ?? null;
    this.reference = options.reference ?? null;
    this.resumable = options.resumable ?? false;
  }
}

export interface UploadRequest {
  file: Blob;
  filename: string;
  purpose: UploadPurpose;
  contentType: string;
  sha256?: string | null;
  signal: AbortSignal;
  /** Previous session of the same file (resume). */
  session?: UploadSession | null;
  onSession?: (session: UploadSession) => void;
  onProgress?: (loaded: number, total: number) => void;
}

const MAX_ATTEMPTS = 4;
/** A presigned URL this close to expiry is not reused (ms). */
const EXPIRY_MARGIN_MS = 60_000;
/** Parts uploaded at the same time (multipart). */
const PART_CONCURRENCY = 3;
/** Headers the browser sets itself (forbidden for XHR). */
const FORBIDDEN_HEADERS = new Set(['content-length', 'host', 'connection', 'expect']);

function abortError(): DOMException {
  return new DOMException('The upload was cancelled', 'AbortError');
}

export function isAbort(error: unknown): boolean {
  return error instanceof DOMException && error.name === 'AbortError';
}

function sleep(ms: number, signal: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal.aborted) return reject(abortError());
    const timer = setTimeout(() => {
      signal.removeEventListener('abort', onAbort);
      resolve();
    }, ms);
    const onAbort = () => {
      clearTimeout(timer);
      reject(abortError());
    };
    signal.addEventListener('abort', onAbort, { once: true });
  });
}

class TransferError extends Error {
  readonly status: number;
  readonly retryable: boolean;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.retryable = status === 0 || status === 408 || status === 429 || status >= 500;
  }
}

/** PUT of `body` to a presigned URL with XHR (real upload progress). Resolves with the ETag. */
function put(
  url: string,
  body: Blob,
  headers: Readonly<Record<string, string>>,
  signal: AbortSignal,
  onProgress: (loaded: number) => void,
): Promise<string | null> {
  return new Promise((resolve, reject) => {
    if (signal.aborted) return reject(abortError());
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', url);
    for (const [name, value] of Object.entries(headers)) {
      if (!FORBIDDEN_HEADERS.has(name.toLowerCase())) xhr.setRequestHeader(name, value);
    }
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) onProgress(event.loaded);
    };
    const onAbort = () => xhr.abort();
    signal.addEventListener('abort', onAbort, { once: true });
    const done = () => signal.removeEventListener('abort', onAbort);
    xhr.onload = () => {
      done();
      if (xhr.status >= 200 && xhr.status < 300) {
        onProgress(body.size);
        resolve(xhr.getResponseHeader('ETag'));
      } else {
        // R2/S3 answer 403 `AccessDenied`/`Request has expired` once the signature is stale.
        reject(new TransferError(xhr.status, xhr.responseText.slice(0, 300) || `HTTP ${xhr.status}`));
      }
    };
    xhr.onerror = () => {
      done();
      reject(new TransferError(0, 'network error'));
    };
    xhr.ontimeout = () => {
      done();
      reject(new TransferError(0, 'timeout'));
    };
    xhr.onabort = () => {
      done();
      reject(abortError());
    };
    xhr.send(body);
  });
}

/** Runs `task` up to {@link MAX_ATTEMPTS} times while the failure is transient. */
async function withRetry<T>(
  task: () => Promise<T>,
  signal: AbortSignal,
  retryable: (error: unknown) => boolean,
): Promise<T> {
  let attempt = 0;
  for (;;) {
    try {
      return await task();
    } catch (error) {
      attempt += 1;
      if (isAbort(error) || signal.aborted || attempt >= MAX_ATTEMPTS || !retryable(error)) throw error;
      await sleep(Math.min(8_000, 750 * 2 ** (attempt - 1)) + Math.random() * 250, signal);
    }
  }
}

function apiRetryable(error: unknown): boolean {
  if (!isApiError(error)) return false;
  return error.status === 429 || error.status >= 500;
}

/** Turns an API error of `create`/`complete` into an {@link UploadError}. */
function fromApiError(error: unknown, resumable: boolean): UploadError {
  if (!isApiError(error)) {
    return new UploadError('network', error instanceof Error ? error.message : 'network error', { resumable });
  }
  const failure: UploadFailure =
    error.code === 'PAYLOAD_TOO_LARGE'
      ? 'too_large'
      : error.code === 'UNSUPPORTED_MEDIA_TYPE'
        ? 'unsupported'
        : error.code === 'FORBIDDEN' || error.code === 'EMAIL_NOT_VERIFIED'
          ? 'forbidden'
          : error.code === 'GONE'
            ? 'expired'
            : error.code === 'UNAVAILABLE' || error.status >= 500 || error.status === 429
              ? 'network'
              : 'api';
  return new UploadError(failure, error.message, {
    problemCode: error.code,
    reference: error.problem.requestId || null,
    resumable: resumable && (failure === 'network' || failure === 'expired'),
  });
}

function sessionExpired(session: UploadSession): boolean {
  return Date.parse(session.presigned.expiresAt) - Date.now() < EXPIRY_MARGIN_MS;
}

async function createSession(request: UploadRequest): Promise<UploadSession> {
  try {
    const presigned = await withRetry(
      () =>
        api.uploads.create(
          {
            body: {
              purpose: request.purpose,
              filename: request.filename,
              size: request.file.size,
              contentType: request.contentType,
              ...(request.sha256 ? { sha256: request.sha256 } : {}),
            },
          },
          { signal: request.signal },
        ),
      request.signal,
      apiRetryable,
    );
    return { presigned, etags: new Map(), sentBytes: 0, transferred: false, completed: null };
  } catch (error) {
    if (isAbort(error)) throw error;
    throw fromApiError(error, false);
  }
}

function transferRetryable(error: unknown): boolean {
  return error instanceof TransferError && error.retryable;
}

function transferFailure(error: unknown): UploadError {
  if (error instanceof TransferError && (error.status === 403 || error.status === 400)) {
    // A stale signature: the session is dropped and «Retry» starts a new upload.
    return new UploadError('expired', error.message, { resumable: true });
  }
  return new UploadError('network', error instanceof Error ? error.message : 'network error', { resumable: true });
}

async function transfer(request: UploadRequest, session: UploadSession): Promise<void> {
  const total = request.file.size;
  const { presigned } = session;
  const report = request.onProgress ?? (() => {});
  if (presigned.multipart) {
    const { partBytes, parts } = presigned.multipart;
    const pending = parts.filter((part) => !session.etags.has(part.partNumber));
    const inFlight = new Map<number, number>();
    const progress = () => {
      let loaded = session.sentBytes;
      for (const bytes of inFlight.values()) loaded += bytes;
      report(Math.min(loaded, total), total);
    };
    let cursor = 0;
    const worker = async () => {
      while (cursor < pending.length) {
        const part = pending[cursor++];
        if (!part) break;
        const start = (part.partNumber - 1) * partBytes;
        const slice = request.file.slice(start, Math.min(start + partBytes, total));
        const etag = await withRetry(
          () =>
            put(part.url, slice, {}, request.signal, (loaded) => {
              inFlight.set(part.partNumber, loaded);
              progress();
            }),
          request.signal,
          transferRetryable,
        ).catch((error: unknown) => {
          inFlight.delete(part.partNumber);
          throw error;
        });
        inFlight.delete(part.partNumber);
        if (!etag) {
          throw new UploadError('api', 'the storage did not expose the part ETag', { resumable: false });
        }
        session.etags.set(part.partNumber, etag);
        session.sentBytes += slice.size;
        progress();
      }
    };
    await Promise.all(Array.from({ length: Math.min(PART_CONCURRENCY, pending.length) }, worker));
  } else {
    if (!presigned.url) throw new UploadError('api', 'no upload URL was returned', { resumable: false });
    const url = presigned.url;
    await withRetry(
      () => put(url, request.file, presigned.headers, request.signal, (loaded) => report(loaded, total)),
      request.signal,
      transferRetryable,
    );
  }
  session.transferred = true;
  report(total, total);
}

async function complete(request: UploadRequest, session: UploadSession): Promise<UploadDTO> {
  const id = session.presigned.upload.id;
  const parts = session.presigned.multipart
    ? [...session.etags.entries()].sort((a, b) => a[0] - b[0]).map(([partNumber, etag]) => ({ partNumber, etag }))
    : undefined;
  try {
    const done = await withRetry(
      () => api.uploads.complete({ params: { id }, body: parts ? { parts } : {} }, { signal: request.signal }),
      request.signal,
      apiRetryable,
    );
    session.completed = done;
    return done;
  } catch (error) {
    if (isAbort(error)) throw error;
    throw fromApiError(error, true);
  }
}

/**
 * Uploads `request.file` (resuming `request.session` when possible) and completes it. Resolves
 * with the upload as `complete` returned it (inspection or image processing queued).
 */
export async function runUpload(request: UploadRequest): Promise<UploadDTO> {
  let session = request.session ?? null;
  if (session?.completed) return session.completed;
  if (!session || (!session.transferred && sessionExpired(session))) {
    session = await createSession(request);
  }
  request.onSession?.(session);
  if (!session.transferred) {
    try {
      await transfer(request, session);
    } catch (error) {
      if (isAbort(error) || error instanceof UploadError) throw error;
      throw transferFailure(error);
    }
  }
  return complete(request, session);
}

const TERMINAL: ReadonlySet<UploadDTO['status']> = new Set(['ready', 'rejected', 'expired']);

/**
 * Polls `GET /uploads/:id` until the inspection finished (`ready`, `rejected` or `expired`), with a
 * slowly growing interval. Resolves with the last state after `timeoutMs` even if still running.
 */
export async function waitForUpload(
  id: string,
  signal: AbortSignal,
  onUpdate?: (upload: UploadDTO) => void,
  timeoutMs = 5 * 60_000,
): Promise<UploadDTO> {
  const started = Date.now();
  let delay = 1_000;
  let last: UploadDTO | null = null;
  for (;;) {
    try {
      last = await api.uploads.get({ params: { id } }, { signal });
      onUpdate?.(last);
      if (TERMINAL.has(last.status)) return last;
    } catch (error) {
      if (isAbort(error)) throw error;
      if (isApiError(error) && error.status >= 400 && error.status < 500 && error.status !== 429)
        throw fromApiError(error, false);
    }
    if (Date.now() - started > timeoutMs && last) return last;
    await sleep(delay, signal);
    delay = Math.min(5_000, Math.round(delay * 1.5));
  }
}

/** Content type sent for a file of `purpose` (browsers report zips inconsistently). */
export function contentTypeFor(file: File, allowed: readonly string[]): string {
  if (file.type && allowed.includes(file.type)) return file.type;
  return allowed[0] ?? 'application/octet-stream';
}
