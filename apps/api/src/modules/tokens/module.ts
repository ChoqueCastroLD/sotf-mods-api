/**
 * `tokens` module (T1-08): personal access tokens of the signed-in user. Managing tokens needs the
 * browser session (the auth resolver never lets a token call `tokens.*`).
 */
import { tokensEndpoints } from '@sotf/contracts/tokens';
import { errors } from '@sotf/core';
import { createPersonalAccessToken, listPersonalAccessTokens, revokePersonalAccessToken } from '@sotf/core/auth/index';
import { type ApiModule, defineModule } from '../../lib/define-module.ts';
import { type AccountServicesOptions, accountServices } from '../auth/services.ts';

export function createTokensModule(options: AccountServicesOptions = {}): ApiModule {
  return defineModule({
    name: 'tokens',
    register(m) {
      const services = () => accountServices(m.platform, options);

      m.implement(tokensEndpoints.list, async ({ ctx }) => {
        if (!ctx.actor) throw errors.unauthenticated();
        return listPersonalAccessTokens(ctx.db, ctx.actor.userId, ctx.clock.now());
      });

      m.implement(tokensEndpoints.create, async ({ ctx, body }) => {
        if (!ctx.actor) throw errors.unauthenticated();
        await services().auth.confirmPassword(ctx, body.password);
        const created = await createPersonalAccessToken(ctx, ctx.actor.userId, body);
        await services().auth.recordEvent(ctx.db, ctx, 'pat_create', true, ctx.actor.userId);
        return created;
      });

      m.implement(tokensEndpoints.revoke, async ({ ctx, params }) => {
        if (!ctx.actor) throw errors.unauthenticated();
        await revokePersonalAccessToken(ctx, ctx.actor.userId, params.id);
        await services().auth.recordEvent(ctx.db, ctx, 'pat_revoke', true, ctx.actor.userId);
      });
    },
  });
}
