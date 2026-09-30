/**
 * Post-deploy purge (PLAN §2.7 «Tras cada despliegue»): once the new web container is up, it asks
 * the API to purge the `html` tag everywhere (origin LRUs, Cloudflare) so no edge keeps HTML that
 * references hashed assets of the previous build (deploy skew). The API enqueues the purge with
 * the release as `singletonKey`, so several replicas or restarts of the same release purge once.
 *
 * Runs only outside development and only when `INTERNAL_SECRET` is configured. Failures are
 * retried with backoff and never crash the server: the edge TTL (≤ 15 min) is the safety net.
 */
import { INTERNAL_AUTH_HEADER } from '@sotf/contracts/downloads';
import type { WebEnv } from '../env.ts';

export const DEPLOY_PURGE_PATH = '/internal/cdn/purge';
/** Delay before the first attempt: lets Coolify's health check pass and the API settle. */
export const FIRST_ATTEMPT_DELAY_MS = 5_000;
/** Backoff between attempts (≈ 6 min in total). */
export const RETRY_DELAYS_MS = [10_000, 30_000, 60_000, 120_000, 180_000] as const;

export type FetchLike = (input: string, init: RequestInit) => Promise<Pick<Response, 'ok' | 'status'>>;

export interface DeployPurgeDeps {
  fetch?: FetchLike;
  sleep?: (ms: number) => Promise<void>;
  now?: () => Date;
  log?: (message: string) => void;
}

/** Purge reason: `deploy:<sha>` (≤ 120 chars, the contract limit). */
export function deployReason(release: string | undefined, now: Date): string {
  const id = release ? release.slice(0, 40) : `boot-${now.toISOString()}`;
  return `deploy:${id}`;
}

/** One purge request; resolves `true` when the API accepted it (2xx). */
export async function requestDeployPurge(env: WebEnv, deps: DeployPurgeDeps = {}): Promise<boolean> {
  if (!env.internalSecret) return false;
  const doFetch: FetchLike = deps.fetch ?? ((input, init) => fetch(input, init));
  const reason = deployReason(env.release, (deps.now ?? (() => new Date()))());
  const response = await doFetch(`${env.internalApiUrl}${DEPLOY_PURGE_PATH}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      [INTERNAL_AUTH_HEADER]: env.internalSecret,
    },
    body: JSON.stringify({ tags: ['html'], reason }),
    signal: AbortSignal.timeout(10_000),
  });
  return response.ok;
}

/** Tries the purge until it is accepted or the retries run out. Never throws. */
export async function runDeployPurge(env: WebEnv, deps: DeployPurgeDeps = {}): Promise<boolean> {
  const sleep = deps.sleep ?? ((ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms).unref()));
  const log = deps.log ?? ((message: string) => console.warn(message));
  await sleep(FIRST_ATTEMPT_DELAY_MS);
  for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt++) {
    try {
      if (await requestDeployPurge(env, deps)) return true;
      log(`[web] post-deploy purge not accepted (attempt ${attempt + 1})`);
    } catch (error) {
      log(`[web] post-deploy purge failed (attempt ${attempt + 1}): ${String(error)}`);
    }
    const delay = RETRY_DELAYS_MS[attempt];
    if (delay === undefined) break;
    await sleep(delay);
  }
  log('[web] post-deploy purge gave up; edge HTML expires with its TTL');
  return false;
}

let scheduled = false;

/** Schedules the purge once per process (no-op in development or without a secret). */
export function schedulePostDeployPurge(env: WebEnv, deps: DeployPurgeDeps = {}): boolean {
  if (scheduled || env.siteEnv === 'development' || env.nodeEnv === 'test' || !env.internalSecret) return false;
  scheduled = true;
  void runDeployPurge(env, deps);
  return true;
}
