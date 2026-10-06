/**
 * `notifications` module (WP-43, PLAN §5.2, §7.3): the signals feed of `/notifications` with its filters,
 * the unread counter (polling fallback of the SSE bell), "mark as read" and the preference matrix.
 * Every response is private to the signed-in user.
 */
import { notificationsEndpoints } from '@sotf/contracts/notifications';
import { errors } from '@sotf/core';
import {
  listNotifications,
  markNotificationsRead,
  type PreferenceMatrix,
  preferenceMatrix,
  unreadCount,
  updatePreferenceMatrix,
} from '@sotf/core/notifications/index';
import { type ApiModule, defineModule } from '../../lib/define-module.ts';

function userIdOf(ctx: { actor: { userId: number } | null }): number {
  if (!ctx.actor) throw errors.unauthenticated();
  return ctx.actor.userId;
}

function matrixDto(matrix: PreferenceMatrix) {
  return {
    items: [...matrix.values()].map((p) => ({
      type: p.type,
      inApp: p.inApp,
      email: p.email,
      inAppAvailable: p.inAppAvailable,
      isDefault: p.isDefault,
    })),
  };
}

export function createNotificationsModule(): ApiModule {
  return defineModule({
    name: 'notifications',
    register(m) {
      const mediaBaseUrl = () => m.platform.env.R2_PUBLIC_BASE_URL;

      m.implement(notificationsEndpoints.list, async ({ ctx, query }) =>
        listNotifications(ctx.db, { mediaBaseUrl: mediaBaseUrl() }, userIdOf(ctx), {
          filter: query.filter,
          cursor: query.cursor,
          limit: query.limit,
        }),
      );

      m.implement(notificationsEndpoints.unreadCount, async ({ ctx }) => ({
        count: await unreadCount(ctx.db, userIdOf(ctx)),
      }));

      m.implement(notificationsEndpoints.markRead, async ({ ctx, body }) => ({
        count: await markNotificationsRead(ctx.db, userIdOf(ctx), body, ctx.clock.now()),
      }));

      m.implement(notificationsEndpoints.preferences, async ({ ctx }) =>
        matrixDto(await preferenceMatrix(ctx.db, userIdOf(ctx))),
      );

      m.implement(notificationsEndpoints.updatePreferences, async ({ ctx, body }) =>
        matrixDto(await updatePreferenceMatrix(ctx.db, userIdOf(ctx), body.items)),
      );
    },
  });
}
