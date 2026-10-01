/**
 * Transient upstream failures (the API rate limiting the web, restarting or timing out) are not
 * bugs of a page: they answer 503 with `Retry-After` (crawlers retry later and never index the
 * error) instead of a 500.
 */
import { isApiError } from '@sotf/contracts/client';

export const UPSTREAM_RETRY_AFTER_SECONDS = 30;

/** Whether the error thrown while rendering is a transient failure of the API. */
export function isTransientUpstreamError(error: unknown): boolean {
  if (!isApiError(error)) return false;
  return error.status === 429 || error.status >= 502 || error.code === 'UNAVAILABLE' || error.code === 'RATE_LIMITED';
}

/** `Retry-After` seconds for a transient error: the API's own hint for 429, else a short default. */
export function retryAfterSeconds(error: unknown): number {
  if (isApiError(error)) {
    const match = /(\d+)\s*s\b/.exec(error.problem.detail);
    if (match) return Math.min(120, Math.max(1, Number(match[1])));
  }
  return UPSTREAM_RETRY_AFTER_SECONDS;
}
