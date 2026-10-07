import { LOGGED_IN_HINT_COOKIE, SESSION_COOKIE } from '@sotf/contracts/auth';
import { describe, expect, it, vi } from 'vitest';
import {
  afterLogout,
  clearingCookies,
  cookieValue,
  LOGOUT_TIMEOUT_MS,
  logoutDecision,
  revokeSession,
  signedOutResponse,
} from './logout.ts';

const headers = (init: Record<string, string> = {}) => new Headers(init);

describe('logoutDecision', () => {
  it('always signs out on POST (Astro checks the origin of the form)', () => {
    expect(logoutDecision('POST', headers({ 'sec-fetch-site': 'cross-site' }))).toBe('sign-out');
  });

  it('signs out a same-origin or user-typed GET, and a browser without Fetch Metadata', () => {
    expect(logoutDecision('GET', headers({ 'sec-fetch-site': 'same-origin' }))).toBe('sign-out');
    expect(logoutDecision('GET', headers({ 'sec-fetch-site': 'none' }))).toBe('sign-out');
    expect(logoutDecision('GET', headers())).toBe('sign-out');
  });

  it('signs out only on a top-level navigation, never on a subresource or a speculative load', () => {
    const navigation = { 'sec-fetch-site': 'same-origin', 'sec-fetch-mode': 'navigate', 'sec-fetch-dest': 'document' };
    expect(logoutDecision('GET', headers(navigation))).toBe('sign-out');
    expect(logoutDecision('GET', headers({ ...navigation, 'sec-fetch-site': 'none' }))).toBe('sign-out');
    // `<img src="/logout">` inside user content, a script, a frame, `fetch()`.
    for (const subresource of [
      { 'sec-fetch-mode': 'no-cors', 'sec-fetch-dest': 'image' },
      { 'sec-fetch-mode': 'no-cors', 'sec-fetch-dest': 'script' },
      { 'sec-fetch-mode': 'navigate', 'sec-fetch-dest': 'iframe' },
      { 'sec-fetch-mode': 'cors', 'sec-fetch-dest': 'empty' },
    ]) {
      expect(
        logoutDecision('GET', headers({ 'sec-fetch-site': 'same-origin', ...subresource })),
        JSON.stringify(subresource),
      ).toBe('confirm');
    }
    // Prefetch and prerender announce themselves.
    expect(logoutDecision('GET', headers({ ...navigation, 'sec-purpose': 'prefetch' }))).toBe('confirm');
    expect(logoutDecision('GET', headers({ ...navigation, 'sec-purpose': 'prefetch;prerender' }))).toBe('confirm');
  });

  it('asks for confirmation when another site (or a sibling subdomain) links here', () => {
    expect(logoutDecision('GET', headers({ 'sec-fetch-site': 'cross-site' }))).toBe('confirm');
    expect(logoutDecision('GET', headers({ 'sec-fetch-site': 'same-site' }))).toBe('confirm');
  });
});

describe('afterLogout', () => {
  it('goes to an allowed public page, otherwise home', () => {
    expect(afterLogout('/mods/x', 'en')).toBe('/mods/x');
    expect(afterLogout('/dashboard', 'en')).toBe('/');
    expect(afterLogout('https://evil.test', 'es')).toBe('/es');
    expect(afterLogout('//evil.test', 'en')).toBe('/');
    expect(afterLogout('/mods/..//evil.test', 'en')).toBe('/');
    expect(afterLogout(null, 'en')).toBe('/');
  });
});

describe('signedOutResponse', () => {
  it('is a private 303 that clears the session, the hint and the legacy token', () => {
    const response = signedOutResponse('/mods');
    expect(response.status).toBe(303);
    expect(response.headers.get('location')).toBe('/mods');
    expect(response.headers.get('cache-control')).toBe('private, no-store');
    const cookies = response.headers.getSetCookie();
    expect(cookies).toEqual(clearingCookies());
    expect(cookies[0]).toMatch(new RegExp(`^${SESSION_COOKIE}=; Path=/; Max-Age=0; HttpOnly; Secure`));
    expect(cookies[1]).toMatch(new RegExp(`^${LOGGED_IN_HINT_COOKIE}=; Path=/; Max-Age=0; Secure`));
    // `__Host-` cookies must not carry a Domain attribute.
    expect(cookies.join(';')).not.toMatch(/domain=/i);
  });
});

describe('revokeSession', () => {
  const token = 'a'.repeat(43);
  const base = { apiUrl: 'http://api.internal:3001', cookieHeader: `x=1; ${SESSION_COOKIE}=${token}; y=2` };

  it('reads one cookie of a Cookie header', () => {
    expect(cookieValue(base.cookieHeader, SESSION_COOKIE)).toBe(token);
    expect(cookieValue('a=b', SESSION_COOKIE)).toBeNull();
    expect(cookieValue(null, SESSION_COOKIE)).toBeNull();
  });

  it('does not call the API without a session cookie', async () => {
    const fetchImpl = vi.fn();
    expect(await revokeSession({ apiUrl: base.apiUrl, cookieHeader: 'a=b', fetchImpl })).toBe(true);
    expect(fetchImpl).not.toHaveBeenCalled();
  });

  it('forwards only the session cookie and the client address', async () => {
    const fetchImpl = vi.fn(async () => new Response(null, { status: 204 }));
    const ok = await revokeSession({
      ...base,
      clientIp: '203.0.113.9',
      clientAddress: '173.245.48.10',
      userAgent: 'UA',
      fetchImpl,
    });
    expect(ok).toBe(true);
    const [url, init] = fetchImpl.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe('http://api.internal:3001/api/v2/auth/logout');
    expect(init.method).toBe('POST');
    const sent = init.headers as Record<string, string>;
    expect(sent.cookie).toBe(`${SESSION_COOKIE}=${token}`);
    expect(sent['cf-connecting-ip']).toBe('203.0.113.9');
    // The connection address lets the API tell Cloudflare's edge from a client hitting the origin.
    expect(sent['x-forwarded-for']).toBe('173.245.48.10');
    expect(sent['content-type']).toBe('application/json');
    expect(sent.origin).toBeUndefined();
  });

  it('treats an expired session (401) as done and reports an unreachable API', async () => {
    expect(await revokeSession({ ...base, fetchImpl: async () => new Response(null, { status: 401 }) })).toBe(true);
    expect(await revokeSession({ ...base, fetchImpl: async () => new Response(null, { status: 500 }) })).toBe(false);
    expect(
      await revokeSession({
        ...base,
        fetchImpl: async () => {
          throw new Error('down');
        },
      }),
    ).toBe(false);
    expect(LOGOUT_TIMEOUT_MS).toBeLessThanOrEqual(5000);
  });
});
