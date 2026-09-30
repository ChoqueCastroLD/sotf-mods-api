/**
 * OAuth login and account linking (PLAN §7.1 T1-01, Discord). Everything is inactive unless the
 * server has the provider's client id and secret: `GET /auth/providers` tells the web which
 * buttons to render, and start/callback answer `NOT_FOUND` for a provider that is not configured.
 *
 * Browser flow: `start` (redirect to the provider) → `callback` (redirect back to the site with
 * the session cookie, or to `/oauth/link#ticket=…` when the provider's verified email belongs to an
 * existing account, which then needs its password to confirm the link).
 */
import { z } from 'zod';
import { AuthResultDTO } from './auth.ts';
import { cache } from './cache.ts';
import { IsoDateTime, Locale } from './common.ts';
import { dto, exampleOf } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';

export const OAUTH_PROVIDERS = ['discord'] as const;
export const OAuthProvider = z.enum(OAUTH_PROVIDERS);
export type OAuthProvider = z.infer<typeof OAuthProvider>;

/** Reasons the callback redirects back with `?oauth_error=`. */
export const OAUTH_ERRORS = [
  'cancelled',
  'failed',
  'email_unverified',
  'email_missing',
  'banned',
  'already_linked',
  'unavailable',
] as const;
export type OAuthError = (typeof OAUTH_ERRORS)[number];

export const AuthProvidersDTO = dto(
  'AuthProvidersDTO',
  z.object({ discord: z.boolean().describe('Discord login is configured on this server') }),
  { description: 'OAuth providers available for sign-in and linking.', examples: [{ discord: true }] },
);
export type AuthProvidersDTO = z.infer<typeof AuthProvidersDTO>;

export const ConnectionDTO = dto(
  'ConnectionDTO',
  z.object({
    provider: OAuthProvider,
    username: z.string(),
    linkedAt: IsoDateTime,
  }),
  {
    description: 'An external account linked to the signed-in user.',
    examples: [{ provider: 'discord', username: 'imaxel', linkedAt: '2026-09-01T10:00:00.000Z' }],
  },
);

export const ConnectionListDTO = dto(
  'ConnectionListDTO',
  z.object({ items: z.array(ConnectionDTO), available: AuthProvidersDTO }),
  {
    description: 'Linked external accounts and which providers can be linked.',
    examples: [{ items: [exampleOf(ConnectionDTO)], available: { discord: true } }],
  },
);

export const OAuthStartQuery = z.object({
  intent: z.enum(['login', 'link']).default('login'),
  next: z.string().max(512).optional().describe('Site path to open afterwards'),
  locale: Locale.optional(),
});

export const OAuthCallbackQuery = z.object({
  code: z.string().max(2048).optional(),
  state: z.string().max(2048).optional(),
  error: z.string().max(256).optional(),
});

export const ConfirmOAuthLinkBody = dto(
  'ConfirmOAuthLinkBody',
  z.strictObject({
    ticket: z.string().min(16).max(512),
    password: z.string().min(1).max(1024),
  }),
  {
    description: 'Confirms linking an external account to the existing account with the same verified email.',
    examples: [{ ticket: 'q1w2e3r4t5y6u7i8o9p0a1s2d3f4g5h6j7k8l9z0x1c', password: 'hunter2hunter2' }],
  },
);

export const UnlinkConnectionBody = dto(
  'UnlinkConnectionBody',
  z.strictObject({ password: z.string().min(1).max(1024) }),
  {
    description: 'Current password, to unlink an external account.',
    examples: [{ password: 'hunter2hunter2' }],
  },
);

const base = `${API_V2_PREFIX}/auth`;
const provider = z.object({ provider: OAuthProvider });

export const oauthEndpoints = {
  providers: defineEndpoint({
    id: 'oauth.providers',
    owner: 'WP-30',
    method: 'GET',
    path: `${base}/providers`,
    summary: 'OAuth providers available on this server',
    auth: 'public',
    response: AuthProvidersDTO,
    cache: cache.noStore,
    rateLimit: 'anonymousRead',
  }),
  start: defineEndpoint({
    id: 'oauth.start',
    owner: 'WP-30',
    method: 'GET',
    path: `${base}/oauth/:provider/start`,
    summary: 'Start an OAuth sign-in or link',
    description: 'Redirects to the provider. `intent=link` needs a signed-in browser session.',
    auth: 'public',
    params: provider,
    query: OAuthStartQuery,
    responseKind: 'redirect',
    errors: ['NOT_FOUND'],
    cache: cache.noStore,
    rateLimit: 'login',
  }),
  callback: defineEndpoint({
    id: 'oauth.callback',
    owner: 'WP-30',
    method: 'GET',
    path: `${base}/oauth/:provider/callback`,
    summary: 'OAuth callback',
    description: 'Finishes the flow and redirects to the site (session cookie, link ticket or `?oauth_error=`).',
    auth: 'public',
    params: provider,
    query: OAuthCallbackQuery,
    responseKind: 'redirect',
    errors: ['NOT_FOUND'],
    cache: cache.noStore,
    rateLimit: 'login',
  }),
  confirmLink: defineEndpoint({
    id: 'oauth.confirmLink',
    owner: 'WP-30',
    method: 'POST',
    path: `${base}/oauth/link/confirm`,
    summary: 'Confirm an account link with the password',
    description: 'Links the external account, signs in and sets the session cookie.',
    auth: 'public',
    body: ConfirmOAuthLinkBody,
    response: AuthResultDTO,
    errors: ['NOT_FOUND', 'GONE', 'INVALID_CREDENTIALS', 'CONFLICT'],
    cache: cache.noStore,
    rateLimit: 'login',
  }),
  connections: defineEndpoint({
    id: 'oauth.connections',
    owner: 'WP-30',
    method: 'GET',
    path: `${API_V2_PREFIX}/me/connections`,
    summary: 'Linked external accounts',
    auth: 'session',
    response: ConnectionListDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.noStore,
  }),
  unlink: defineEndpoint({
    id: 'oauth.unlink',
    owner: 'WP-30',
    method: 'POST',
    path: `${API_V2_PREFIX}/me/connections/:provider/unlink`,
    summary: 'Unlink an external account',
    auth: 'session',
    requires: ['password_confirmation'],
    params: provider,
    body: UnlinkConnectionBody,
    responseKind: 'empty',
    errors: ['UNAUTHENTICATED', 'NOT_FOUND', 'INVALID_CREDENTIALS'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
} as const;
