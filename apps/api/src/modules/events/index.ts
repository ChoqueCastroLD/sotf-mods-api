/**
 * Events module (WP-52, PLAN §5.2 "Notificaciones y eventos", §7.1, §8.8, §9.3): the cookieless
 * product analytics beacon `POST /e` and the RUM beacon `POST /e/vitals`.
 *
 * Both take `text/plain` JSON (sendBeacon; the platform parses and validates it with the contract)
 * and always answer 204: requests with `Sec-GPC: 1` or `DNT: 1`, declared bots and the excess
 * traffic of an IP (soft `beacon` bucket) are dropped without telling the client. The business
 * rules live in `@sotf/core/analytics`.
 */
import { eventsEndpoints } from '@sotf/contracts/events';
import { type BeaconRequest, recordBeacon, recordVitals, siteHostsOf } from '@sotf/core/analytics/index';
import type { FastifyRequest } from 'fastify';
import { defineModule } from '../../lib/define-module.ts';

/** Beacon bodies are tiny (≤ 20 events / 10 metrics): anything larger is not ours. */
const BEACON_BODY_LIMIT = 64 * 1024;

function header(request: FastifyRequest, name: string): string | undefined {
  const value = request.headers[name];
  return Array.isArray(value) ? value[0] : value;
}

export default defineModule({
  name: 'events',
  register(m) {
    const siteHosts = siteHostsOf(m.platform.env.PUBLIC_SITE_URL);
    const beaconRequest = (request: FastifyRequest): BeaconRequest => ({
      gpc: header(request, 'sec-gpc'),
      dnt: header(request, 'dnt'),
      overSoftLimit: request.overSoftLimit,
      siteHosts,
    });

    m.implement(
      eventsEndpoints.beacon,
      async ({ body, ctx, request }) => {
        const outcome = await recordBeacon(ctx, body, beaconRequest(request));
        if (outcome !== 'stored') ctx.log.debug({ outcome }, 'beacon dropped');
      },
      { bodyLimit: BEACON_BODY_LIMIT },
    );

    m.implement(
      eventsEndpoints.vitals,
      async ({ body, ctx, request }) => {
        const outcome = await recordVitals(ctx, body, beaconRequest(request));
        if (outcome !== 'stored') ctx.log.debug({ outcome }, 'vitals dropped');
      },
      { bodyLimit: BEACON_BODY_LIMIT },
    );
  },
});
