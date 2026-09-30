/**
 * Per-app downloads runtime: one `DownloadCounter` (flush every 2 s, final flush on close) and the
 * `DownloadsService`, shared by the v2 alias, the internal resolve of the web route and the legacy
 * aliases (`src/legacy/downloads`).
 */
import { DOWNLOAD_REDIRECT_HEADERS } from '@sotf/contracts/downloads';
import { errors } from '@sotf/core';
import { DownloadCounter, type DownloadOutcome, DownloadsService } from '@sotf/core/downloads/index';
import type { FastifyInstance, FastifyRequest } from 'fastify';
import type { RedirectOutput } from '../../lib/define-module.ts';
import type { Platform } from '../../lib/types.ts';

/** Origin of the legacy `downloadUrl`s (versions created by the legacy app during coexistence). */
export const LEGACY_PUBLIC_R2_ORIGIN = 'https://r2.sotf-mods.com';

export interface DownloadsRuntime {
  counter: DownloadCounter;
  service: DownloadsService;
}

const runtimes = new WeakMap<Platform, DownloadsRuntime>();

/** The runtime of an app (created once per platform; closed with the app). */
export function downloadsRuntime(app: FastifyInstance, platform: Platform): DownloadsRuntime {
  const existing = runtimes.get(platform);
  if (existing) return existing;
  const counter = new DownloadCounter(platform.db, { log: platform.log.child({ component: 'downloads' }) });
  const service = new DownloadsService({
    publicBaseUrl: platform.env.R2_PUBLIC_BASE_URL,
    publicOrigins: [LEGACY_PUBLIC_R2_ORIGIN],
    counter,
    caches: platform.caches,
  });
  const runtime = { counter, service };
  runtimes.set(platform, runtime);
  counter.start();
  // SIGTERM → app.close(): preClose runs while the pool is open (the platform's onClose ends it
  // before this module's onClose runs), so the buffer is flushed there; downloads still draining
  // are flushed as they arrive. onClose only catches what is left when the pool outlives the app.
  app.addHook('preClose', async () => {
    await counter.beginShutdown().catch(() => undefined);
  });
  app.addHook('onClose', async () => {
    await counter.close();
  });
  return runtime;
}

/**
 * The platform writes `Cache-Control: no-store` for `noStore` contracts; download redirects carry
 * the stricter `no-store, private` of PLAN §2.8 (hooks of this module run after the platform's).
 */
export function installDownloadHeaders(app: FastifyInstance): void {
  app.addHook('onSend', async (request, reply, payload) => {
    if (reply.statusCode === 302 && request.routeOptions.config?.endpoint?.rateLimit === 'downloads') {
      for (const [name, value] of Object.entries(DOWNLOAD_REDIRECT_HEADERS)) reply.header(name, value);
    }
    return payload;
  });
}

/** Runtime of a built app (tests: flush on demand). */
export function downloadsRuntimeOf(platform: Platform): DownloadsRuntime | undefined {
  return runtimes.get(platform);
}

function header(request: FastifyRequest, name: string): string | null {
  const value = request.headers[name];
  return (Array.isArray(value) ? value[0] : value) ?? null;
}

/** Range and prefetch headers of a request (`Sec-Purpose`, or Chrome's older `Purpose`). */
export function requestHints(request: FastifyRequest): { range: string | null; secPurpose: string | null } {
  return { range: header(request, 'range'), secPurpose: header(request, 'sec-purpose') ?? header(request, 'purpose') };
}

/** 302 with the download headers, or the 404/410 error of the outcome. */
export function redirectOrThrow(outcome: DownloadOutcome): RedirectOutput {
  if (outcome.status === 302 && outcome.location) {
    return { location: outcome.location, status: 302, headers: { ...DOWNLOAD_REDIRECT_HEADERS } };
  }
  if (outcome.status === 410) {
    throw errors.gone(outcome.reason === 'mod_removed' ? 'This mod was removed' : 'This file is no longer available');
  }
  throw errors.notFound(outcome.reason === 'version_not_found' ? 'Version' : 'Mod');
}
