/**
 * `account` module (WP-30, PLAN §5.2, T0-13, T0-14): change email and password, data export and
 * account deletion with its grace period. Password confirmations are limited per account.
 */
import { meEndpoints } from '@sotf/contracts/me';
import { errors } from '@sotf/core';
import { cancelDeletion, getExport, requestDeletion, requestExport } from '@sotf/core/accounts/index';
import { type ApiModule, defineModule } from '../../lib/define-module.ts';
import { type AccountServicesOptions, accountServices } from '../auth/services.ts';

export function createAccountModule(options: AccountServicesOptions = {}): ApiModule {
  return defineModule({
    name: 'account',
    register(m) {
      const services = () => accountServices(m.platform, options);

      m.implement(meEndpoints.changeEmail, async ({ ctx, body }) => {
        await services().auth.changeEmail(ctx, body);
      });

      m.implement(meEndpoints.changePassword, async ({ ctx, body }) => {
        await services().auth.changePassword(ctx, body);
      });

      m.implement(meEndpoints.requestExport, async ({ ctx }) => {
        const { storage, auth } = services();
        if (!storage) throw errors.unavailable('Data exports are not available right now');
        const created = await requestExport(ctx, storage);
        if (ctx.actor) await auth.recordEvent(ctx.db, ctx, 'account_export', true, ctx.actor.userId);
        return created;
      });

      m.implement(meEndpoints.getExport, async ({ ctx, params }) => getExport(ctx, services().storage, params.id));

      m.implement(meEndpoints.requestDeletion, async ({ ctx, body }) => requestDeletion(ctx, services().auth, body));

      m.implement(meEndpoints.cancelDeletion, async ({ ctx }) => {
        await cancelDeletion(ctx, services().auth);
      });
    },
  });
}
