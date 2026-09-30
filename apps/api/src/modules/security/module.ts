/**
 * `security` module (T1-02 TOTP + recovery codes, T1-26 passkeys): the second step of a sign-in
 * (`/auth/2fa/verify`, `/auth/passkey/*`, which open the session) and the management endpoints of
 * Settings → Security (`/me/security/*`). Shares the account services with `auth`.
 */
import { securityEndpoints } from '@sotf/contracts/security';
import { defineModule } from '../../lib/define-module.ts';
import { setSessionCookies } from '../auth/cookies.ts';
import { type AccountServicesOptions, accountServices } from '../auth/services.ts';

export function createSecurityModule(options: AccountServicesOptions = {}) {
  return defineModule({
    name: 'security',
    register(m) {
      const security = () => accountServices(m.platform, options).security;

      m.implement(securityEndpoints.verifyTwoFactor, async ({ body, ctx, reply }) => {
        const outcome = await security().verifyTwoFactor(ctx, body);
        setSessionCookies(reply, outcome.session);
        return { user: outcome.user };
      });

      m.implement(securityEndpoints.passkeyLoginOptions, async ({ body, ctx }) => {
        return security().passkeyLoginOptions(ctx, body);
      });

      m.implement(securityEndpoints.passkeyLoginVerify, async ({ body, ctx, reply }) => {
        const outcome = await security().passkeyLoginVerify(ctx, body);
        setSessionCookies(reply, outcome.session);
        return { user: outcome.user };
      });

      m.implement(securityEndpoints.overview, async ({ ctx }) => security().overview(ctx));

      m.implement(securityEndpoints.setupTotp, async ({ body, ctx }) => security().setupTotp(ctx, body.password));

      m.implement(securityEndpoints.enableTotp, async ({ body, ctx }) => security().enableTotp(ctx, body.code));

      m.implement(securityEndpoints.disableTotp, async ({ body, ctx }) => {
        await security().disableTotp(ctx, body);
      });

      m.implement(securityEndpoints.regenerateRecoveryCodes, async ({ body, ctx }) =>
        security().regenerateRecoveryCodes(ctx, body),
      );

      m.implement(securityEndpoints.passkeyRegistrationOptions, async ({ body, ctx }) =>
        security().passkeyRegistrationOptions(ctx, body.password),
      );

      m.implement(securityEndpoints.registerPasskey, async ({ body, ctx }) => security().registerPasskey(ctx, body));

      m.implement(securityEndpoints.renamePasskey, async ({ params, body, ctx }) =>
        security().renamePasskey(ctx, params.id, body.name),
      );

      m.implement(securityEndpoints.removePasskey, async ({ params, body, ctx }) => {
        await security().removePasskey(ctx, params.id, body.password);
      });
    },
  });
}
