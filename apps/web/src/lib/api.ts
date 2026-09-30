/**
 * Server-side API client (PLAN §2.1: the web never opens a database connection; SSR talks to the
 * API on the private network through `INTERNAL_API_URL`). Public pages call it without cookies:
 * their HTML is shared, so nothing user-specific may be fetched here.
 */
import { type ApiClient, createApiClient } from '@sotf/contracts/client';
import { loadEnv } from './env.ts';

let client: ApiClient | undefined;

/** Typed client for the public (anonymous) API, created once per process. */
export function serverApi(): ApiClient {
  const env = loadEnv();
  client ??= createApiClient({
    baseUrl: env.internalApiUrl,
    credentials: 'omit',
    // The internal secret exempts SSR from the per-IP rate limits (all visitors share our IP).
    headers: {
      'user-agent': 'sotf-web-ssr',
      ...(env.internalSecret ? { 'x-internal-auth': env.internalSecret } : {}),
    },
  });
  return client;
}

/** Default budget of an optional SSR call: the page renders without the block if it is slow. */
export const OPTIONAL_CALL_TIMEOUT_MS = 800;

/**
 * Runs an optional API call (sidebars, «popular mods» on the 404…): resolves `null` on any error or
 * after `timeoutMs`, so a slow or unavailable API never breaks the page.
 */
export async function optional<T>(
  call: (signal: AbortSignal) => Promise<T>,
  timeoutMs = OPTIONAL_CALL_TIMEOUT_MS,
): Promise<T | null> {
  const signal = AbortSignal.timeout(timeoutMs);
  try {
    return await call(signal);
  } catch {
    return null;
  }
}
