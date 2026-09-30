/**
 * Which download requests count, and in which channel (PLAN §2.8 "Conteo", §6.8, T0-02).
 *
 * - Only GET, without `Range` or with `Range: bytes=0-`, not a prefetch/prerender
 *   (`isCountableDownloadRequest` of the contract).
 * - Not a declared bot (`isbot`). An **empty** User-Agent counts: RedManager (reqwest) and the
 *   .NET HttpClient of the in-game UpdatesChecker send none. Known mod-manager clients count even
 *   when their UA looks like a generic HTTP library.
 * - Not over 60 downloads/min for the IP (the platform's soft `downloads` bucket): above it the
 *   request still gets its 302, it just does not count.
 */
import { isCountableDownloadRequest } from '@sotf/contracts/downloads';
import type { DownloadSource } from '@sotf/db';
import { isbot } from 'isbot';

/** User agents of the modding ecosystem that always count (they are real installs). */
const KNOWN_CLIENTS = /\b(?:redmanager|updateschecker|redloader)\b/i;

/** Max stored length of a User-Agent (the legacy column is unbounded text). */
export const MAX_USER_AGENT_LENGTH = 512;

export function normalizeUserAgent(userAgent: string | null | undefined): string {
  return (userAgent ?? '').trim().slice(0, MAX_USER_AGENT_LENGTH);
}

/** True for crawlers and other declared bots. Empty UAs are not bots. */
export function isDeclaredBot(userAgent: string | null | undefined): boolean {
  const ua = normalizeUserAgent(userAgent);
  if (ua === '') return false;
  if (KNOWN_CLIENTS.test(ua)) return false;
  return isbot(ua);
}

/** Where a download request came in. */
export type DownloadSurface = 'web' | 'api' | 'legacy';

/**
 * Channel of `ModDownload.source` and `ModVersionDownloadDaily.channel`: `redmanager` when the
 * client says so, `client` for requests without a User-Agent (mod managers and the in-game
 * checker; the legacy `ip='undefined'` rows land here too), `web` for browsers on the site route
 * and `api` for the API aliases.
 */
export function downloadSource(surface: DownloadSurface, userAgent: string | null | undefined): DownloadSource {
  const ua = normalizeUserAgent(userAgent);
  if (/redmanager/i.test(ua)) return 'redmanager';
  if (ua === '') return 'client';
  return surface === 'web' ? 'web' : 'api';
}

export interface CountDecisionInput {
  method: string;
  range?: string | null | undefined;
  secPurpose?: string | null | undefined;
  userAgent?: string | null | undefined;
  /** The IP is over the per-minute limit (soft bucket). */
  overLimit: boolean;
}

export type CountDecision = 'count' | 'method' | 'range' | 'prefetch' | 'bot' | 'rate_limited';

/** Decides whether a download counts, with the reason when it does not (for logs and tests). */
export function countDecision(input: CountDecisionInput): CountDecision {
  if (input.method.toUpperCase() !== 'GET') return 'method';
  if (!isCountableDownloadRequest({ method: 'GET', range: input.range ?? null })) return 'range';
  if (!isCountableDownloadRequest({ method: 'GET', secPurpose: input.secPurpose ?? null })) return 'prefetch';
  if (isDeclaredBot(input.userAgent)) return 'bot';
  if (input.overLimit) return 'rate_limited';
  return 'count';
}
