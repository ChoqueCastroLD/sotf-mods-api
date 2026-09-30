/**
 * `oauth` module (T1-01): Discord sign-in and account linking. Nothing is reachable unless the
 * provider's credentials are configured. The round trip state lives in a signed cookie (state.ts).
 */

import type { OAuthError } from '@sotf/contracts/oauth';
import { oauthEndpoints } from '@sotf/contracts/oauth';
import { errors } from '@sotf/core';
import { type ApiModule, defineModule } from '../../lib/define-module.ts';
import { setSessionCookies } from '../auth/cookies.ts';
import { type AccountServicesOptions, accountServices } from '../auth/services.ts';
import {
  decodeState,
  encodeState,
  newOAuthState,
  OAUTH_COOKIE,
  OAUTH_COOKIE_MAX_AGE,
  pkceChallenge,
  safeLandingPath,
  statesMatch,
} from './state.ts';

const COOKIE = { path: '/', secure: true, sameSite: 'lax' as const, httpOnly: true };

export function createOAuthModule(options: AccountServicesOptions = {}): ApiModule {
  return defineModule({
    name: 'oauth',
    register(m) {
      const services = () => accountServices(m.platform, options);
      const secret = m.platform.env.APP_SECRET;

      /** Console pages (`/settings`…) are not locale-prefixed; public pages follow the locale. */
      const page = (locale: string, path: string) =>
        services().oauth.landing(
          /^\/(?:settings|me|basecamp|ranger|signals)(?:[/?#]|$)/.test(path) ? 'en' : locale,
          path,
        );

      const query = (path: string, params: Record<string, string>) => {
        const url = new URLSearchParams(params).toString();
        return `${path}${path.includes('?') ? '&' : '?'}${url}`;
      };

      m.implement(oauthEndpoints.providers, async () => ({
        discord: services().oauth.enabled('discord'),
      }));

      m.implement(oauthEndpoints.start, async ({ ctx, params, query: q, reply }) => {
        const { oauth } = services();
        if (!oauth.enabled(params.provider)) throw errors.notFound('Provider');
        const locale = q.locale ?? ctx.locale;
        const intent = q.intent === 'link' && ctx.actor ? 'link' : 'login';
        const state = newOAuthState(
          { provider: params.provider, intent, next: safeLandingPath(q.next), locale },
          ctx.clock.now(),
        );
        reply.setCookie(OAUTH_COOKIE, encodeState(state, secret), { ...COOKIE, maxAge: OAUTH_COOKIE_MAX_AGE });
        return {
          location: oauth.authorizeUrl(params.provider, {
            state: state.state,
            challenge: pkceChallenge(state.verifier),
          }),
          status: 302 as const,
        };
      });

      m.implement(oauthEndpoints.callback, async ({ ctx, params, query: q, request, reply }) => {
        const { oauth } = services();
        if (!oauth.enabled(params.provider)) throw errors.notFound('Provider');
        const saved = decodeState(request.cookies?.[OAUTH_COOKIE], secret, ctx.clock.now());
        reply.clearCookie(OAUTH_COOKIE, { ...COOKIE });
        const locale = saved?.locale ?? ctx.locale;
        const back = (error: OAuthError, linking = saved?.intent === 'link') => ({
          location: page(locale, query(linking ? '/settings/security' : '/login', { oauth_error: error })),
          status: 302 as const,
        });
        if (!saved || saved.provider !== params.provider || !statesMatch(q.state, saved.state)) return back('failed');
        if (q.error || !q.code) return back('cancelled');

        const profile = await oauth.fetchProfile(params.provider, q.code, saved.verifier);
        if (!profile) return back('failed');
        const result = await oauth.complete(ctx, params.provider, profile, { intent: saved.intent, locale });
        switch (result.kind) {
          case 'error':
            return back(result.error);
          case 'linked':
            return { location: page(locale, `/settings/security?linked=${params.provider}`), status: 302 as const };
          case 'ticket':
            return { location: page(locale, `/oauth/link#ticket=${result.ticket}`), status: 302 as const };
          case 'session':
            setSessionCookies(reply, result.session);
            return { location: saved.next ? page('en', saved.next) : page(locale, '/'), status: 302 as const };
        }
      });

      m.implement(oauthEndpoints.confirmLink, async ({ ctx, body, reply }) => {
        const outcome = await services().oauth.confirmLink(ctx, body);
        setSessionCookies(reply, outcome.session);
        return { user: outcome.user };
      });

      m.implement(oauthEndpoints.connections, async ({ ctx }) => {
        if (!ctx.actor) throw errors.unauthenticated();
        const { oauth } = services();
        return {
          items: await oauth.connections(ctx.db, ctx.actor.userId),
          available: { discord: oauth.enabled('discord') },
        };
      });

      m.implement(oauthEndpoints.unlink, async ({ ctx, params, body }) => {
        await services().oauth.unlink(ctx, params.provider, body.password);
      });
    },
  });
}
