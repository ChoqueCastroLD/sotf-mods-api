/**
 * Web origin LRU invalidation (PLAN §2.7 purge flow, step 1): `POST {web}/_internal/cache/invalidate
 * {tags}` with `X-Internal-Auth`. Runs **before** the Cloudflare purge so the edge refetches fresh
 * HTML instead of the origin's cached copy. The web answers 204.
 */
import { INTERNAL_AUTH_HEADER } from '@sotf/contracts/downloads';
import { defaultFetch, type HttpFetch } from './cloudflare.ts';

export const WEB_INVALIDATE_PATH = '/_internal/cache/invalidate';
/** The web accepts at most 100 tags per request (`WebCacheInvalidateBody`). */
export const WEB_INVALIDATE_MAX_TAGS = 100;
const REQUEST_TIMEOUT_MS = 10_000;

export interface WebInvalidateConfig {
  /** Web origin on the private network (`WEB_INTERNAL_URL`). */
  webUrl: string;
  /** `INTERNAL_SECRET`. */
  secret: string;
}

export class WebInvalidateError extends Error {
  override readonly name = 'WebInvalidateError';
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

/** Evicts the tags from the web's origin LRU. Throws when the web does not answer 2xx. */
export async function invalidateWebCache(
  config: WebInvalidateConfig,
  tags: readonly string[],
  options: { fetch?: HttpFetch; signal?: AbortSignal } = {},
): Promise<void> {
  const doFetch = options.fetch ?? defaultFetch;
  const url = `${config.webUrl.replace(/\/+$/, '')}${WEB_INVALIDATE_PATH}`;
  for (let i = 0; i < tags.length; i += WEB_INVALIDATE_MAX_TAGS) {
    const batch = tags.slice(i, i + WEB_INVALIDATE_MAX_TAGS);
    const signal = options.signal
      ? AbortSignal.any([options.signal, AbortSignal.timeout(REQUEST_TIMEOUT_MS)])
      : AbortSignal.timeout(REQUEST_TIMEOUT_MS);
    const response = await doFetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json', [INTERNAL_AUTH_HEADER]: config.secret },
      body: JSON.stringify({ tags: batch }),
      signal,
    });
    if (!response.ok) {
      const detail = (await response.text().catch(() => '')).slice(0, 200);
      throw new WebInvalidateError(
        `web cache invalidation failed (${response.status}) ${detail}`.trim(),
        response.status,
      );
    }
  }
}
