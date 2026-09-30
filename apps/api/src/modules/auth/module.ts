/**
 * `auth` module (WP-30, PLAN §5.2 "Cuenta y autenticación"): the platform's session resolver and
 * the register / login / logout / password reset / email verification endpoints.
 */
import { authEndpoints, SESSION_COOKIE } from '@sotf/contracts/auth';
import { resolveSession } from '@sotf/core/auth/index';
import { type ApiModule, defineModule } from '../../lib/define-module.ts';
import type { SessionResolver } from '../../lib/types.ts';
import { clearSessionCookies, setSessionCookies } from './cookies.ts';
import { type AccountServicesOptions, accountServices } from './services.ts';

export function createAuthModule(options: AccountServicesOptions = {}): ApiModule {
  return defineModule({
    name: 'auth',
    sessionResolver: (platform): SessionResolver => {
      return async (request) => {
        const token = request.cookies?.[SESSION_COOKIE];
        if (!token) return null;
        return resolveSession(platform.db, token, new Date());
      };
    },
    register(m) {
      const services = () => accountServices(m.platform, options);

      m.implement(authEndpoints.register, async ({ body, ctx, reply }) => {
        const outcome = await services().auth.register(ctx, body);
        setSessionCookies(reply, outcome.session);
        return { user: outcome.user };
      });

      m.implement(authEndpoints.login, async ({ body, ctx, reply }) => {
        const outcome = await services().auth.login(ctx, body);
        setSessionCookies(reply, outcome.session);
        return { user: outcome.user };
      });

      m.implement(authEndpoints.logout, async ({ ctx, reply }) => {
        await services().auth.logout(ctx);
        clearSessionCookies(reply);
      });

      m.implement(authEndpoints.forgotPassword, async ({ body, ctx }) => {
        await services().auth.forgotPassword(ctx, body);
      });

      m.implement(authEndpoints.resetPassword, async ({ body, ctx, reply }) => {
        await services().auth.resetPassword(ctx, body);
        // Every session was revoked, including one this browser may hold.
        clearSessionCookies(reply);
      });

      m.implement(authEndpoints.verifyEmail, async ({ body, ctx }) => {
        await services().auth.verifyEmail(ctx, body.token);
      });

      m.implement(authEndpoints.resendVerification, async ({ ctx }) => {
        await services().auth.resendVerification(ctx);
      });
    },
  });
}
