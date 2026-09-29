/**
 * User-Agent and Origin of every legacy call (PLAN §5.5 Tier 2, §6.13 hypercare, §10.3): recorded
 * in memory by route pattern and flushed every minute (and on shutdown) into
 * `"AnalyticsEvent"(kind='legacy_call')`, aggregated per UTC day. Nothing identifying is kept.
 */
import type { Clock } from '@sotf/core';
import { LegacyUsageRecorder } from '@sotf/core/legacy/index';
import type { FastifyInstance } from 'fastify';
import { pathOf } from '../lib/surface.ts';
import type { Platform } from '../lib/types.ts';
import { retiredRouteOf } from './retired.ts';

export interface LegacyUsageOptions {
  /** Flush period in ms (default 60 s; 0 = only on shutdown and on demand). */
  flushMs?: number;
  clock?: Clock;
}

export function setupLegacyUsage(app: FastifyInstance, platform: Platform, options: LegacyUsageOptions = {}) {
  const recorder = new LegacyUsageRecorder(options.clock ? { clock: options.clock } : {});
  const flush = () => recorder.flush(platform.db, platform.log);

  app.addHook('onResponse', async (request, reply) => {
    const origin = request.headers.origin;
    recorder.record({
      // Route patterns only (never raw paths): retired routes are answered by not-found handlers.
      route: request.routeOptions.url ?? retiredRouteOf(request.method, pathOf(request.url)) ?? '(not found)',
      method: request.method,
      status: reply.statusCode,
      userAgent: request.headers['user-agent'],
      origin: Array.isArray(origin) ? origin[0] : origin,
    });
  });

  const every = options.flushMs ?? 60_000;
  const timer = every > 0 ? setInterval(() => void flush(), every) : null;
  timer?.unref();
  app.addHook('onClose', async () => {
    if (timer) clearInterval(timer);
    await flush();
  });
  return { recorder, flush };
}
