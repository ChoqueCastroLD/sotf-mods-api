/**
 * Onboarding module (WP-60, T0-33): `GET /me/onboarding` and `PATCH /me/onboarding` («Day 1 on the
 * island» checklist). Private responses. The optional `Sotf-Time-Zone` request header (the
 * browser's IANA zone) is stored for the `night-owl` badge.
 */
import { gamificationEndpoints } from '@sotf/contracts/gamification';
import { getOnboarding, TIME_ZONE_HEADER, updateOnboarding } from '@sotf/core/gamification/index';
import type { FastifyRequest } from 'fastify';
import { defineModule } from '../../lib/define-module.ts';

function timeZoneOf(request: FastifyRequest): string | null {
  const value = request.headers[TIME_ZONE_HEADER];
  return typeof value === 'string' ? value.trim() : null;
}

export default defineModule({
  name: 'onboarding',
  register(m) {
    m.implement(gamificationEndpoints.onboarding, async ({ ctx, request }) => getOnboarding(ctx, timeZoneOf(request)));

    m.implement(gamificationEndpoints.updateOnboarding, async ({ ctx, body, request }) =>
      updateOnboarding(ctx, body, timeZoneOf(request)),
    );
  },
});
