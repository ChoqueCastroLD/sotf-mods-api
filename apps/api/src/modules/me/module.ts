/**
 * `me` module (WP-30, PLAN §5.2): `GET /me`, `/me/summary`, `/me/home` (base part), settings,
 * privacy and the sessions page (list, revoke one, revoke the others). Every response is private.
 */
import { meEndpoints } from '@sotf/contracts/me';
import { errors } from '@sotf/core';
import { getMe, getMeHome, getMeSummary, updatePrivacy, updateSettings } from '@sotf/core/accounts/index';
import { listActiveSessions, revokeSession, revokeUserSessions } from '@sotf/core/auth/index';
import { type ApiModule, defineModule } from '../../lib/define-module.ts';
import { clearSessionCookies } from '../auth/cookies.ts';
import { type AccountServicesOptions, accountServices } from '../auth/services.ts';

function actorOf(ctx: { actor: { userId: number; sessionId?: string } | null }) {
  if (!ctx.actor) throw errors.unauthenticated();
  return ctx.actor;
}

export function createMeModule(options: AccountServicesOptions = {}): ApiModule {
  return defineModule({
    name: 'me',
    register(m) {
      const services = () => accountServices(m.platform, options);
      const meServices = () => ({ mediaBaseUrl: services().mediaBaseUrl });

      m.implement(meEndpoints.get, async ({ ctx }) =>
        getMe(ctx.db, meServices(), actorOf(ctx).userId, ctx.clock.now()),
      );

      m.implement(meEndpoints.summary, async ({ ctx }) => getMeSummary(ctx.db, meServices(), actorOf(ctx).userId));

      m.implement(meEndpoints.home, async ({ ctx }) => getMeHome(ctx.db, meServices(), actorOf(ctx).userId));

      m.implement(meEndpoints.updateSettings, async ({ ctx, body }) =>
        updateSettings(ctx.db, actorOf(ctx).userId, body, ctx.clock.now()),
      );

      m.implement(meEndpoints.updatePrivacy, async ({ ctx, body }) => updatePrivacy(ctx.db, actorOf(ctx).userId, body));

      m.implement(meEndpoints.sessions, async ({ ctx }) => {
        const actor = actorOf(ctx);
        const rows = await listActiveSessions(ctx.db, actor.userId, ctx.clock.now());
        return {
          items: rows.map((row) => ({
            id: row.id,
            current: row.id === actor.sessionId,
            deviceLabel: row.deviceLabel,
            // The session table stores no location yet (docs/backlog/WP-30.md).
            country: null,
            createdAt: row.createdAt.toISOString(),
            lastSeenAt: row.lastSeenAt.toISOString(),
            expiresAt: row.expiresAt.toISOString(),
          })),
        };
      });

      m.implement(meEndpoints.revokeSession, async ({ ctx, params, reply }) => {
        const actor = actorOf(ctx);
        const revoked = await revokeSession(ctx.db, actor.userId, params.id, ctx.clock.now());
        if (!revoked) throw errors.notFound('Session');
        await services().auth.recordEvent(ctx.db, ctx, 'session_revoke', true, actor.userId);
        if (params.id === actor.sessionId) clearSessionCookies(reply);
      });

      m.implement(meEndpoints.revokeOtherSessions, async ({ ctx }) => {
        const actor = actorOf(ctx);
        await revokeUserSessions(ctx.db, actor.userId, ctx.clock.now(), actor.sessionId ?? null);
        await services().auth.recordEvent(ctx.db, ctx, 'sessions_revoke_others', true, actor.userId);
      });
    },
  });
}
