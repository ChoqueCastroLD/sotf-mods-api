/**
 * Second factor, OAuth and access-token security (`pnpm --filter @sotf/api test:int -- second-factor`),
 * against PostgreSQL 16 (with pg-boss):
 *
 * - TOTP: setup and enable, the sign-in challenge (no session before the code), five wrong answers
 *   burn the challenge, a TOTP step and a recovery code work once;
 * - Discord: the signed state cookie, landing paths that cannot leave the site, the link ticket, and
 *   accounts with a second factor never reaching a password-only session (`two_factor`);
 * - personal access tokens: limited by scope, never able to manage the account, revocable;
 * - cookie CSRF on the auth routes, and `CF-Connecting-IP` honoured only from the trusted edge.
 */
import { SESSION_COOKIE } from '@sotf/contracts/auth';
import { createIpHasher, systemClock } from '@sotf/core';
import { MemoryExportStorage } from '@sotf/core/accounts/index';
import { bunHash } from '@sotf/core/auth/fixtures/bun-hashes';
import type { BreachedPasswordChecker, TurnstileVerifier } from '@sotf/core/auth/index';
import { totpCode, totpStep } from '@sotf/core/auth/totp';
import { authEvent, oauthIdentity, oauthLinkTicket, session, user } from '@sotf/db';
import { createFactories, type Factories } from '@sotf/db/testing';
import { eq } from 'drizzle-orm';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildTestApp, type TestApp } from '../../testing.ts';
import { createAccountModules } from './modules.ts';

const hibp: BreachedPasswordChecker = { count: async () => 0 };
const turnstile: TurnstileVerifier = { verify: async () => true };

let t: TestApp;
let f: Factories;
/** What the fake Discord answers for the current scenario. */
let discordProfile: Record<string, unknown> = {};

const oauthFetch: typeof fetch = async (input) => {
  const url = String(input);
  if (url.endsWith('/oauth2/token')) return Response.json({ access_token: 'discord-access-token' });
  if (url.endsWith('/users/@me')) return Response.json(discordProfile);
  return new Response('not found', { status: 404 });
};

let ipCounter = 0;
function newIp(): string {
  ipCounter += 1;
  return `198.51.100.${ipCounter}`;
}

function headers(ip: string, cookie?: string): Record<string, string> {
  return {
    ...t.sameOrigin(),
    'cf-connecting-ip': ip,
    'user-agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:131.0) Gecko/20100101 Firefox/131.0',
    ...(cookie ? { cookie: `${SESSION_COOKIE}=${cookie}` } : {}),
  };
}

function sessionCookieOf(res: { cookies: Array<{ name: string; value: string }> }): string {
  const found = res.cookies.find((c) => c.name === SESSION_COOKIE);
  if (!found?.value) throw new Error('no session cookie');
  return found.value;
}

const post = (url: string, body: unknown, cookie?: string, ip = newIp()) =>
  t.app.inject({ method: 'POST', url, headers: headers(ip, cookie), payload: JSON.stringify(body ?? {}) });

const get = (url: string, cookie?: string, ip = newIp()) =>
  t.app.inject({ method: 'GET', url, headers: headers(ip, cookie) });

const fixture = bunHash('argon2id-ascii');
let accountCounter = 0;

async function account(overrides: Parameters<Factories['user']>[0] = {}) {
  accountCounter += 1;
  return f.user({
    password: fixture.hash,
    emailVerifiedAt: new Date('2025-01-01T00:00:00Z'),
    slug: `sf-user-${accountCounter}`,
    email: `sf-user-${accountCounter}@example.test`,
    ...overrides,
  });
}

async function signIn(identifier: string): Promise<string> {
  const res = await post('/api/v2/auth/login', { identifier, password: fixture.password, remember: true });
  expect(res.statusCode).toBe(200);
  return sessionCookieOf(res);
}

/** Turns on TOTP for the account: returns the secret and the recovery codes. */
async function enableTotp(identifier: string, cookie: string) {
  const setup = await post('/api/v2/me/security/totp/setup', { password: fixture.password }, cookie);
  expect(setup.statusCode).toBe(200);
  const secret = setup.json().secret as string;
  const enabled = await post(
    '/api/v2/me/security/totp/enable',
    { code: totpCode(secret, totpStep(new Date())) },
    cookie,
  );
  expect(enabled.statusCode).toBe(200);
  return { secret, codes: enabled.json().codes as string[], identifier };
}

/** A code of the next 30 s step: valid inside the window and never the one that enabled TOTP. */
const nextCode = (secret: string, ahead = 1) => totpCode(secret, totpStep(new Date()) + ahead);

beforeAll(async () => {
  t = await buildTestApp({
    modules: createAccountModules({
      hibp,
      turnstile,
      storage: new MemoryExportStorage(),
      failureFloorMs: 0,
      oauthFetch,
    }),
    sessionResolver: undefined,
    env: { DISCORD_CLIENT_ID: 'discord-client', DISCORD_CLIENT_SECRET: 'discord-secret' },
    rateLimits: {
      login: { max: 1000, window: '1 minute' },
      register: { max: 1000, window: '1 minute' },
      userWrite: { max: 1000, window: '1 minute' },
    },
  });
  f = createFactories(t.db.db);
}, 240_000);

afterAll(async () => {
  await t?.close();
});

describe('TOTP sign-in', () => {
  it('opens no session until the second factor is answered, and a TOTP step or recovery code works once', async () => {
    const owner = await account();
    const cookie = await signIn(owner.email);
    const { secret, codes } = await enableTotp(owner.email, cookie);

    // Password right: a challenge, no cookie.
    const first = await post('/api/v2/auth/login', { identifier: owner.email, password: fixture.password });
    expect(first.statusCode).toBe(200);
    expect(first.json().twoFactor.methods).toEqual(['totp', 'recovery']);
    expect(first.cookies.find((c) => c.name === SESSION_COOKIE)).toBeUndefined();
    expect(first.json().user).toBeUndefined();

    // The code that enabled TOTP cannot be replayed; a wrong one is refused.
    const challenge = first.json().twoFactor.challengeId as string;
    const replay = await post('/api/v2/auth/2fa/verify', {
      challengeId: challenge,
      code: totpCode(secret, totpStep(new Date())),
    });
    expect(replay.statusCode).toBe(401);
    const wrong = await post('/api/v2/auth/2fa/verify', { challengeId: challenge, code: '000000' });
    expect(wrong.statusCode).toBe(401);

    // The next step's code opens the session; the same code is dead afterwards.
    const code = nextCode(secret);
    const ok = await post('/api/v2/auth/2fa/verify', { challengeId: challenge, code });
    expect(ok.statusCode).toBe(200);
    const sessionCookie = sessionCookieOf(ok);
    expect((await get('/api/v2/me', sessionCookie)).statusCode).toBe(200);
    const again = (await post('/api/v2/auth/login', { identifier: owner.email, password: fixture.password })).json()
      .twoFactor.challengeId as string;
    expect((await post('/api/v2/auth/2fa/verify', { challengeId: again, code })).statusCode).toBe(401);
    // A used challenge is gone for good.
    expect(
      (await post('/api/v2/auth/2fa/verify', { challengeId: challenge, code: nextCode(secret, -1) })).statusCode,
    ).toBe(404);

    // Recovery codes work exactly once.
    const recovery = codes[0] as string;
    expect((await post('/api/v2/auth/2fa/verify', { challengeId: again, code: recovery })).statusCode).toBe(200);
    const third = (await post('/api/v2/auth/login', { identifier: owner.email, password: fixture.password })).json()
      .twoFactor.challengeId as string;
    expect((await post('/api/v2/auth/2fa/verify', { challengeId: third, code: recovery })).statusCode).toBe(401);
  });

  it('burns a challenge after five wrong answers, even when the sixth is right', async () => {
    const owner = await account();
    const cookie = await signIn(owner.email);
    const { secret } = await enableTotp(owner.email, cookie);
    const challenge = (await post('/api/v2/auth/login', { identifier: owner.email, password: fixture.password })).json()
      .twoFactor.challengeId as string;
    for (let attempt = 0; attempt < 5; attempt += 1) {
      const res = await post('/api/v2/auth/2fa/verify', { challengeId: challenge, code: '111111' });
      expect(res.statusCode).toBe(401);
    }
    const late = await post('/api/v2/auth/2fa/verify', { challengeId: challenge, code: nextCode(secret) });
    expect(late.statusCode).toBe(410);
    expect(late.cookies.find((c) => c.name === SESSION_COOKIE)).toBeUndefined();
  });

  it('turning TOTP off needs the password and a live code', async () => {
    const owner = await account();
    const cookie = await signIn(owner.email);
    const { secret } = await enableTotp(owner.email, cookie);
    const wrongPassword = await post(
      '/api/v2/me/security/totp/disable',
      { password: 'not-the-password', code: nextCode(secret) },
      cookie,
    );
    expect(wrongPassword.statusCode).toBe(401);
    const wrongCode = await post(
      '/api/v2/me/security/totp/disable',
      { password: fixture.password, code: '000000' },
      cookie,
    );
    expect(wrongCode.statusCode).toBe(401);
    const off = await post(
      '/api/v2/me/security/totp/disable',
      { password: fixture.password, code: nextCode(secret) },
      cookie,
    );
    expect(off.statusCode).toBe(204);
    // A plain password sign-in works again.
    expect(
      (await post('/api/v2/auth/login', { identifier: owner.email, password: fixture.password })).json().user,
    ).toBeDefined();
  });
});

describe('Discord OAuth', () => {
  /** Runs start → callback for a Discord profile and returns the callback's redirect. */
  async function discordFlow(profile: Record<string, unknown>, query: Record<string, string> = {}) {
    discordProfile = profile;
    const start = await get(`/api/v2/auth/oauth/discord/start?${new URLSearchParams({ intent: 'login', ...query })}`);
    expect(start.statusCode).toBe(302);
    const authorize = new URL(start.headers.location as string);
    expect(authorize.origin).toBe('https://discord.com');
    expect(authorize.searchParams.get('code_challenge_method')).toBe('S256');
    const stateCookie = start.cookies.find((c) => c.name === '__Host-sotf_oauth');
    expect(stateCookie).toMatchObject({ httpOnly: true, secure: true, sameSite: 'Lax', path: '/' });
    const state = authorize.searchParams.get('state') as string;
    const callback = await t.app.inject({
      method: 'GET',
      url: `/api/v2/auth/oauth/discord/callback?${new URLSearchParams({ code: 'code-1', state })}`,
      headers: { cookie: `__Host-sotf_oauth=${stateCookie?.value}`, 'cf-connecting-ip': newIp() },
    });
    expect(callback.statusCode).toBe(302);
    return { callback, location: new URL(callback.headers.location as string), stateCookie, state };
  }

  it('only redirects back to this site: foreign or malformed `next` values are dropped', async () => {
    const profile = { id: 'd-new-1', username: 'Brand New', verified: true, email: 'discord-new-1@example.test' };
    for (const next of ['https://evil.test/x', '//evil.test/x', '/\\evil.test', '/api/v2/me']) {
      discordProfile = profile;
      const { location } = await discordFlow(
        { ...profile, id: `d-${Math.random()}`, email: `${Math.random()}@example.test` },
        { next },
      );
      expect(location.origin).toBe('https://sotf-mods.test');
      expect(location.pathname).toBe('/');
    }
    const { location, callback } = await discordFlow(
      { id: 'd-new-2', username: 'Another One', verified: true, email: 'discord-new-2@example.test' },
      { next: '/mods/some-mod' },
    );
    expect(location.pathname).toBe('/mods/some-mod');
    // A brand-new verified email creates the account and signs it in.
    const cookie = sessionCookieOf(callback);
    const me = await get('/api/v2/me', cookie);
    expect(me.json().user).toMatchObject({ email: 'discord-new-2@example.test', emailVerified: true });
  });

  it('rejects a callback whose state does not match the cookie', async () => {
    discordProfile = { id: 'd-state', username: 'state', verified: true, email: 'state@example.test' };
    const start = await get('/api/v2/auth/oauth/discord/start?intent=login');
    const stateCookie = start.cookies.find((c) => c.name === '__Host-sotf_oauth');
    for (const state of ['forged-state', '']) {
      const callback = await t.app.inject({
        method: 'GET',
        url: `/api/v2/auth/oauth/discord/callback?${new URLSearchParams({ code: 'code-1', state })}`,
        headers: { cookie: `__Host-sotf_oauth=${stateCookie?.value}`, 'cf-connecting-ip': newIp() },
      });
      expect(new URL(callback.headers.location as string).searchParams.get('oauth_error')).toBe('failed');
      expect(callback.cookies.find((c) => c.name === SESSION_COOKIE)).toBeUndefined();
    }
    // No cookie at all (a callback opened in another browser).
    const orphan = await t.app.inject({
      method: 'GET',
      url: '/api/v2/auth/oauth/discord/callback?code=code-1&state=x',
      headers: { 'cf-connecting-ip': newIp() },
    });
    expect(new URL(orphan.headers.location as string).searchParams.get('oauth_error')).toBe('failed');
  });

  it('never signs in an existing account by its email alone: a ticket needs the password', async () => {
    const owner = await account({ email: 'discord-owner@example.test' });
    const { location, callback } = await discordFlow({
      id: 'd-owner',
      username: 'owner',
      verified: true,
      email: 'discord-owner@example.test',
    });
    expect(location.pathname).toBe('/oauth/link');
    expect(callback.cookies.find((c) => c.name === SESSION_COOKIE)).toBeUndefined();
    const ticket = new URLSearchParams(location.hash.slice(1)).get('ticket') as string;
    expect((await post('/api/v2/auth/oauth/link/confirm', { ticket, password: 'wrong-password' })).statusCode).toBe(
      401,
    );
    const confirmed = await post('/api/v2/auth/oauth/link/confirm', { ticket, password: fixture.password });
    expect(confirmed.statusCode).toBe(200);
    expect(confirmed.json().user.id).toBe(owner.id);
    // Single use.
    expect((await post('/api/v2/auth/oauth/link/confirm', { ticket, password: fixture.password })).statusCode).toBe(
      404,
    );
  });

  it('accounts with two-factor authentication get no password-only way in through Discord', async () => {
    const secured = await account({ email: 'discord-2fa@example.test' });
    const cookie = await signIn(secured.email);
    await enableTotp(secured.email, cookie);

    const { location, callback } = await discordFlow({
      id: 'd-2fa',
      username: 'twofa',
      verified: true,
      email: 'discord-2fa@example.test',
    });
    expect(location.pathname).toBe('/login');
    expect(location.searchParams.get('oauth_error')).toBe('two_factor');
    expect(callback.cookies.find((c) => c.name === SESSION_COOKIE)).toBeUndefined();
    expect(await t.db.db.select().from(oauthLinkTicket).where(eq(oauthLinkTicket.userId, secured.id))).toHaveLength(0);

    // A ticket issued before two-factor was turned on is worthless afterwards.
    const early = await account({ email: 'discord-early@example.test' });
    const { location: earlyLocation } = await discordFlow({
      id: 'd-early',
      username: 'early',
      verified: true,
      email: 'discord-early@example.test',
    });
    const ticket = new URLSearchParams(earlyLocation.hash.slice(1)).get('ticket') as string;
    await enableTotp(early.email, await signIn(early.email));
    const refused = await post('/api/v2/auth/oauth/link/confirm', { ticket, password: fixture.password });
    expect(refused.statusCode).toBe(404);
    expect(refused.cookies.find((c) => c.name === SESSION_COOKIE)).toBeUndefined();
    expect(await t.db.db.select().from(oauthIdentity).where(eq(oauthIdentity.userId, early.id))).toHaveLength(0);
  });
});

describe('personal access tokens', () => {
  async function createToken(cookie: string, scopes: string[]) {
    const res = await post(
      '/api/v2/me/tokens',
      { name: 'ci', scopes, expiresInDays: 30, password: fixture.password },
      cookie,
    );
    expect(res.statusCode).toBe(201);
    return res.json().token as string;
  }

  const bearer = (token: string, method: 'GET' | 'POST' | 'DELETE', url: string, body: unknown = {}) =>
    t.app.inject({
      method,
      url,
      headers: {
        authorization: `Bearer ${token}`,
        'cf-connecting-ip': newIp(),
        ...(method === 'GET' ? {} : { 'content-type': 'application/json' }),
      },
      ...(method === 'GET' ? {} : { payload: JSON.stringify(body) }),
    });

  it('reads with `read`, and can never manage the account, sessions, tokens or security', async () => {
    const owner = await account();
    const cookie = await signIn(owner.email);
    const token = await createToken(cookie, ['read']);
    expect((await bearer(token, 'GET', '/api/v2/me')).statusCode).toBe(200);
    for (const [method, url, body] of [
      ['GET', '/api/v2/me/sessions', {}],
      ['GET', '/api/v2/me/tokens', {}],
      ['GET', '/api/v2/me/security', {}],
      ['POST', '/api/v2/me/tokens', { name: 'x', scopes: ['read'], expiresInDays: 1, password: fixture.password }],
      [
        'POST',
        '/api/v2/me/password',
        { current: fixture.password, next: 'A-new-long-passphrase-9', revokeOthers: true },
      ],
      ['POST', '/api/v2/me/email', { newEmail: 'taken-over@example.test', password: fixture.password }],
      ['POST', '/api/v2/me/delete', { password: fixture.password, mode: 'anonymize' }],
      ['POST', '/api/v2/me/security/totp/setup', { password: fixture.password }],
      ['POST', '/api/v2/auth/logout', {}],
    ] as const) {
      const res = await bearer(token, method, url, body);
      expect(res.statusCode, `${method} ${url}`).toBe(403);
    }
    const [row] = await t.db.db.select().from(user).where(eq(user.id, owner.id));
    expect(row?.password).toBe(fixture.hash);
    expect(row?.email).toBe(owner.email);
  });

  it('stops working when revoked, and an unknown token is just anonymous', async () => {
    const owner = await account();
    const cookie = await signIn(owner.email);
    const token = await createToken(cookie, ['read']);
    const list = (await get('/api/v2/me/tokens', cookie)).json();
    expect(list.items).toHaveLength(1);
    const revoked = await t.app.inject({
      method: 'DELETE',
      url: `/api/v2/me/tokens/${list.items[0].id}`,
      headers: headers(newIp(), cookie),
      payload: '{}',
    });
    expect(revoked.statusCode).toBe(204);
    expect((await bearer(token, 'GET', '/api/v2/me')).statusCode).toBe(401);
    expect((await bearer(`sotfm_pat_${'A'.repeat(43)}`, 'GET', '/api/v2/me')).statusCode).toBe(401);
    // A banned owner's tokens die with the account.
    const other = await account();
    const otherToken = await createToken(await signIn(other.email), ['read']);
    await t.db.db.update(user).set({ bannedAt: new Date() }).where(eq(user.id, other.id));
    expect((await bearer(otherToken, 'GET', '/api/v2/me')).statusCode).toBe(401);
  });
});

describe('cookie CSRF and sessions on the auth routes', () => {
  it('refuses cross-site writes with the session cookie and keeps the session alive', async () => {
    const owner = await account();
    const cookie = await signIn(owner.email);
    for (const [path, body] of [
      ['/api/v2/auth/logout', {}],
      ['/api/v2/me/password', { current: fixture.password, next: 'A-new-long-passphrase-9', revokeOthers: true }],
      ['/api/v2/me/tokens', { name: 'x', scopes: ['read'], expiresInDays: 1, password: fixture.password }],
    ] as const) {
      for (const origin of [
        { 'sec-fetch-site': 'cross-site', origin: 'https://evil.test' },
        { 'sec-fetch-site': 'same-site', origin: 'https://beta.sotf-mods.test' },
        { origin: 'null' },
      ]) {
        const res = await t.app.inject({
          method: 'POST',
          url: path,
          headers: { 'content-type': 'application/json', cookie: `${SESSION_COOKIE}=${cookie}`, ...origin },
          payload: JSON.stringify(body),
        });
        expect(res.statusCode, `${path} ${JSON.stringify(origin)}`).toBe(403);
      }
      // A form post (what a malicious page can send without a preflight) is refused by content type.
      const form = await t.app.inject({
        method: 'POST',
        url: path,
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          cookie: `${SESSION_COOKIE}=${cookie}`,
          'sec-fetch-site': 'same-origin',
        },
        payload: 'a=b',
      });
      expect(form.statusCode).toBe(415);
    }
    expect((await get('/api/v2/me', cookie)).statusCode).toBe(200);
  });

  it('logout revokes the session server-side: the old cookie stops working', async () => {
    const owner = await account();
    const cookie = await signIn(owner.email);
    const out = await post('/api/v2/auth/logout', {}, cookie);
    expect(out.statusCode).toBe(204);
    expect(out.cookies.find((c) => c.name === SESSION_COOKIE)).toMatchObject({ value: '', path: '/' });
    expect((await get('/api/v2/me', cookie)).statusCode).toBe(401);
    const rows = await t.db.db.select().from(session).where(eq(session.userId, owner.id));
    expect(rows.every((row) => row.revokedAt !== null)).toBe(true);
  });

  it('a new sign-in never reuses a session token (no fixation)', async () => {
    const owner = await account();
    const first = await signIn(owner.email);
    const res = await post('/api/v2/auth/login', { identifier: owner.email, password: fixture.password }, first);
    expect(sessionCookieOf(res)).not.toBe(first);
    // A client-chosen cookie value is ignored: the server issues its own.
    const planted = 'A'.repeat(43);
    const fixated = await post('/api/v2/auth/login', { identifier: owner.email, password: fixture.password }, planted);
    expect(sessionCookieOf(fixated)).not.toBe(planted);
    expect((await get('/api/v2/me', planted)).statusCode).toBe(401);
  });
});

describe('login attempt caps', () => {
  const attempt = (identifier: string, password: string, ip: string) =>
    post('/api/v2/auth/login', { identifier, password, remember: false }, undefined, ip);

  it('ten bad passwords from one address do not lock the owner out of their own account', async () => {
    const owner = await account();
    const attacker = '203.0.113.31';
    const statuses: number[] = [];
    for (let i = 0; i < 12; i += 1) statuses.push((await attempt(owner.slug, `wrong-guess-${i}`, attacker)).statusCode);
    expect(statuses.slice(0, 10).every((status) => status === 401)).toBe(true);
    expect(statuses.slice(10)).toEqual([429, 429]);
    // The attacker is stopped for that account, the owner (another address) signs in.
    expect((await attempt(owner.slug, fixture.password, attacker)).statusCode).toBe(429);
    expect((await attempt(owner.slug, fixture.password, '198.51.100.190')).statusCode).toBe(200);
  });

  it('a hundred attempts from many addresses hit the per-account ceiling', async () => {
    const owner = await account();
    for (let i = 0; i < 100; i += 1) {
      const res = await attempt(owner.email, `wrong-guess-${i}`, `198.51.100.${100 + (i % 40)}`);
      expect(res.statusCode, `attempt ${i}`).toBe(401);
    }
    const blocked = await attempt(owner.email, fixture.password, '198.51.100.199');
    expect(blocked.statusCode).toBe(429);
    expect(blocked.json().code).toBe('RATE_LIMITED');
  }, 180_000);
});

describe('client address behind the proxy', () => {
  it('ignores CF-Connecting-IP from a peer outside Cloudflare and the private network', async () => {
    const attempt = (remoteAddress: string, ip: string) =>
      t.app.inject({
        method: 'POST',
        url: '/api/v2/auth/login',
        remoteAddress,
        headers: headers(ip),
        payload: JSON.stringify({ identifier: 'nobody@example.test', password: 'wrong-password-1', remember: false }),
      });
    const hash = createIpHasher(t.env.APP_SECRET, systemClock);
    const recorded = async (ip: string) =>
      (
        await t.db.db
          .select()
          .from(authEvent)
          .where(eq(authEvent.ipHash, hash(ip)))
      ).filter((e) => e.kind === 'login');
    expect((await attempt('203.0.113.200', '198.51.100.250')).statusCode).toBe(401);
    // Through Cloudflare the header names the visitor.
    expect((await attempt('173.245.48.9', '198.51.100.251')).statusCode).toBe(401);
    // From our own network (the web SSR) too.
    expect((await attempt('172.18.0.5', '198.51.100.252')).statusCode).toBe(401);
    // The direct client is recorded under its own address, never under the claimed one.
    expect(await recorded('203.0.113.200')).toHaveLength(1);
    expect(await recorded('198.51.100.250')).toHaveLength(0);
    expect(await recorded('198.51.100.251')).toHaveLength(1);
    expect(await recorded('198.51.100.252')).toHaveLength(1);
  });
});
