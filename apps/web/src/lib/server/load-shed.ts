/**
 * Load shedding for crawlers (2026-11 incident): bots walk the endless include/exclude filter
 * combinations of the listings, every one an uncached render on the single Node thread, until
 * the healthcheck times out and the proxy drops the container. When too many renders are in
 * flight, anonymous requests with two or more filters get a fast 429 + `Retry-After` instead, so
 * plain pages, members and `/healthz` keep answering (`429`, not `503`: the client is told to slow
 * down; a 503 read as the site being down).
 */

import { tooManyRequests } from './rate-limit.ts';

/** Query keys of listing filters and sorting (`components/explore/state.ts`). */
const FILTER_KEYS = new Set([
  'type',
  'q',
  'category',
  'excludeCategory',
  'tag',
  'excludeTag',
  'multiplayer',
  'dedicated',
  'platform',
  'game',
  'loader',
  'updatedWithin',
  'minRating',
  'minDownloads',
  'hasSource',
  'verified',
  'author',
  'sort',
  'order',
  'view',
]);

/** Renders in flight above which filtered crawls are refused. */
export const SHED_IN_FLIGHT = 6;
/** Event-loop lag (ms) above which filtered crawls are refused: SSR streams after `next()`. */
export const SHED_LAG_MS = 100;

let lagMs = 0;
let expected = 0;
const TICK_MS = 50;

/** Starts sampling the event-loop lag (idempotent, unref'd). */
function startLagSampler(): void {
  if (expected) return;
  expected = performance.now() + TICK_MS;
  setInterval(() => {
    const now = performance.now();
    const sample = Math.max(0, now - expected);
    // Fast attack, slow decay: one long stall keeps shedding for a few ticks.
    lagMs = sample > lagMs ? sample : lagMs * 0.8 + sample * 0.2;
    expected = now + TICK_MS;
  }, TICK_MS).unref();
}

/** Whether the server is too busy for low-value renders. */
export function isBusy(inFlight: number): boolean {
  startLagSampler();
  return inFlight >= SHED_IN_FLIGHT || lagMs >= SHED_LAG_MS;
}

/** Current smoothed event-loop lag, for the access log. */
export function eventLoopLag(): number {
  return Math.round(lagMs);
}
export const SHED_RETRY_AFTER_SECONDS = 120;

/** Anonymous request for a listing narrowed by two or more filters. */
export function isSheddable(url: URL, headers: Headers): boolean {
  if (/(?:^|;\s*)sotf_li=/.test(headers.get('cookie') ?? '')) return false;
  let filters = 0;
  for (const key of url.searchParams.keys()) if (FILTER_KEYS.has(key)) filters++;
  return filters >= 2;
}

export function shedResponse(): Response {
  return tooManyRequests(SHED_RETRY_AFTER_SECONDS);
}
