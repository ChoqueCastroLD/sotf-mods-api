/**
 * Cloudflare purge by Cache-Tag (PLAN §2.7 purge flow, step 2):
 * `POST https://api.cloudflare.com/client/v4/zones/{zone}/purge_cache {"tags":[…]}`.
 *
 * - At most {@link MAX_TAGS_PER_PURGE} tags per call (Cloudflare's limit for tag purges).
 * - Calls are spaced by at least {@link CLOUDFLARE_MIN_INTERVAL_MS} in the process
 *   ({@link PurgeThrottle}); the `cdn.purge` queue runs one job at a time, so the worker never
 *   exceeds one purge call every 20 s.
 * - A non-2xx answer or `success: false` throws {@link CloudflarePurgeError}; the job retries with
 *   backoff (purges are idempotent).
 */
import { MAX_TAGS_PER_PURGE } from '@sotf/contracts/cache';

export const CLOUDFLARE_API_BASE = 'https://api.cloudflare.com/client/v4';
/** Minimum spacing between two purge calls of this process (PLAN §2.7: ≤ 1 call every 20 s). */
export const CLOUDFLARE_MIN_INTERVAL_MS = 20_000;
const REQUEST_TIMEOUT_MS = 15_000;

/** Structural `fetch` (Node's global by default; a fake in tests). */
export type HttpFetch = (
  url: string,
  init: { method: string; headers: Record<string, string>; body?: string; signal?: AbortSignal },
) => Promise<{ ok: boolean; status: number; text(): Promise<string>; headers: { get(name: string): string | null } }>;

export const defaultFetch: HttpFetch = (url, init) => fetch(url, init);

export interface CloudflareConfig {
  zoneId: string;
  apiToken: string;
  /** Override for tests (default {@link CLOUDFLARE_API_BASE}). */
  apiBase?: string;
}

export class CloudflarePurgeError extends Error {
  override readonly name = 'CloudflarePurgeError';
  readonly status: number;
  /** Seconds suggested by `Retry-After` (429), when present. */
  readonly retryAfterSeconds: number | null;

  constructor(message: string, status: number, retryAfterSeconds: number | null = null) {
    super(message);
    this.status = status;
    this.retryAfterSeconds = retryAfterSeconds;
  }
}

interface CloudflareEnvelope {
  success?: boolean;
  errors?: Array<{ code?: number; message?: string }>;
}

/**
 * Spaces calls by `intervalMs` (per instance). `wait()` resolves when the next call may start and
 * reserves that slot; it honours the abort signal of the job.
 */
export class PurgeThrottle {
  readonly #intervalMs: number;
  readonly #now: () => number;
  readonly #sleep: (ms: number, signal?: AbortSignal) => Promise<void>;
  #nextSlot = 0;

  constructor(
    options: {
      intervalMs?: number;
      now?: () => number;
      sleep?: (ms: number, signal?: AbortSignal) => Promise<void>;
    } = {},
  ) {
    this.#intervalMs = options.intervalMs ?? CLOUDFLARE_MIN_INTERVAL_MS;
    this.#now = options.now ?? Date.now;
    this.#sleep = options.sleep ?? abortableSleep;
  }

  async wait(signal?: AbortSignal): Promise<void> {
    const now = this.#now();
    const start = Math.max(now, this.#nextSlot);
    this.#nextSlot = start + this.#intervalMs;
    if (start > now) await this.#sleep(start - now, signal);
  }
}

export function abortableSleep(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(signal.reason ?? new Error('aborted'));
      return;
    }
    const timer = setTimeout(() => {
      signal?.removeEventListener('abort', onAbort);
      resolve();
    }, ms);
    const onAbort = () => {
      clearTimeout(timer);
      reject(signal?.reason ?? new Error('aborted'));
    };
    signal?.addEventListener('abort', onAbort, { once: true });
  });
}

/** Purges one batch of ≤ 30 tags. Throws on any failure. */
export async function purgeCloudflareTags(
  config: CloudflareConfig,
  tags: readonly string[],
  options: { fetch?: HttpFetch; signal?: AbortSignal } = {},
): Promise<void> {
  if (tags.length === 0) return;
  if (tags.length > MAX_TAGS_PER_PURGE) {
    throw new RangeError(`at most ${MAX_TAGS_PER_PURGE} tags per Cloudflare purge (got ${tags.length})`);
  }
  const doFetch = options.fetch ?? defaultFetch;
  const base = (config.apiBase ?? CLOUDFLARE_API_BASE).replace(/\/+$/, '');
  const signal = options.signal
    ? AbortSignal.any([options.signal, AbortSignal.timeout(REQUEST_TIMEOUT_MS)])
    : AbortSignal.timeout(REQUEST_TIMEOUT_MS);
  const response = await doFetch(`${base}/zones/${encodeURIComponent(config.zoneId)}/purge_cache`, {
    method: 'POST',
    headers: { authorization: `Bearer ${config.apiToken}`, 'content-type': 'application/json' },
    body: JSON.stringify({ tags: [...tags] }),
    signal,
  });
  const text = await response.text();
  let envelope: CloudflareEnvelope = {};
  try {
    envelope = text ? (JSON.parse(text) as CloudflareEnvelope) : {};
  } catch {
    envelope = {};
  }
  if (!response.ok || envelope.success === false) {
    const retryAfter = Number.parseInt(response.headers.get('retry-after') ?? '', 10);
    const detail =
      envelope.errors
        ?.map((error) => `${error.code ?? '?'} ${error.message ?? ''}`.trim())
        .filter(Boolean)
        .join('; ') || text.slice(0, 200);
    throw new CloudflarePurgeError(
      `Cloudflare purge failed (${response.status}): ${detail}`,
      response.status,
      Number.isFinite(retryAfter) ? retryAfter : null,
    );
  }
}
