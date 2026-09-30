/**
 * `unsubscribe` module (WP-43, PLAN §7.3, RFC 8058): `POST /api/v2/unsubscribe?token=` is the
 * target of `List-Unsubscribe-Post: List-Unsubscribe=One-Click`. Mail providers post it
 * cross-site with a form body (`List-Unsubscribe=One-Click`), which is accepted and ignored; the
 * signed token is the only credential (the CSRF check skips `signed_token` endpoints). The web page
 * `/unsubscribe?token=` (footer link of the emails) posts here as well.
 *
 * 204 on success (also when already unsubscribed); 404 for an invalid token; 410 for an expired
 * token or a deleted account.
 */
import { notificationsEndpoints } from '@sotf/contracts/notifications';
import { applyUnsubscribeToken } from '@sotf/core/notifications/index';
import { type ApiModule, defineModule } from '../../lib/define-module.ts';

export function createUnsubscribeModule(): ApiModule {
  return defineModule({
    name: 'unsubscribe',
    register(m) {
      m.implement(notificationsEndpoints.unsubscribe, async ({ ctx, query }) => {
        const { userId, types } = await applyUnsubscribeToken(ctx.db, ctx.appSecret, query.token, ctx.clock.now());
        ctx.log.info({ userId, types }, 'one-click unsubscribe');
      });
    },
  });
}
