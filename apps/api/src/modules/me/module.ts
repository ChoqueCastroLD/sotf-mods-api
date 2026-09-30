/**
 * `me` module (WP-30, PLAN §5.2): `GET /me`, `/me/summary`, `/me/home` (followed-mod updates with
 * the catalog cards, the three most recently edited kits and the «Day 1» checklist), profile, settings, privacy and the sessions page
 * (list, revoke one, revoke the others). Every response is private.
 */

import type { ModCardDTO } from '@sotf/contracts/catalog';
import { meEndpoints } from '@sotf/contracts/me';
import { type Ctx, errors } from '@sotf/core';
import {
  getMe,
  getMeHome,
  getMeSummary,
  getOwnProfile,
  updatePrivacy,
  updateProfile,
  updateSettings,
} from '@sotf/core/accounts/index';
import { listActiveSessions, revokeSession, revokeUserSessions } from '@sotf/core/auth/index';
import { type CatalogConfig, getSnapshot, isListable } from '@sotf/core/catalog/index';
import { recentKitCards } from '@sotf/core/kits/index';
import { type ApiModule, defineModule } from '../../lib/define-module.ts';
import { clearSessionCookies } from '../auth/cookies.ts';
import { type AccountServicesOptions, accountServices } from '../auth/services.ts';
import { catalogConfigOf } from '../catalog/index.ts';

/**
 * Cards of the followed mods from the catalog snapshot: only mods a public listing would show
 * (published, visible author), NSFW ones only for users who opted in.
 */
function modCardsOf(ctx: Ctx, config: CatalogConfig) {
  return async (_db: unknown, ids: number[], viewer: { includeNsfw: boolean }) => {
    const snapshot = await getSnapshot(ctx, config);
    const cards = new Map<number, ModCardDTO>();
    for (const id of ids) {
      const entry = snapshot.byId.get(id);
      if (entry && isListable(snapshot, entry, viewer.includeNsfw)) cards.set(id, entry.card);
    }
    return cards;
  };
}

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
      const catalog = catalogConfigOf(m.platform.env);

      m.implement(meEndpoints.get, async ({ ctx }) =>
        getMe(ctx.db, meServices(), actorOf(ctx).userId, ctx.clock.now()),
      );

      m.implement(meEndpoints.summary, async ({ ctx }) => getMeSummary(ctx.db, meServices(), actorOf(ctx).userId));

      m.implement(meEndpoints.home, async ({ ctx }) =>
        getMeHome(
          ctx.db,
          {
            ...meServices(),
            modCards: modCardsOf(ctx, catalog),
            recentKits: (_db, userId) => recentKitCards(ctx, { config: catalog }, userId, 3),
          },
          actorOf(ctx).userId,
        ),
      );

      m.implement(meEndpoints.getProfile, async ({ ctx }) => getOwnProfile(ctx, catalog, actorOf(ctx).userId));

      m.implement(meEndpoints.updateProfile, async ({ ctx, body }) =>
        updateProfile(ctx, catalog, actorOf(ctx).userId, body),
      );

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
