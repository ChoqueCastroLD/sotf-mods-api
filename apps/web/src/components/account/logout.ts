/**
 * Server side of `/logout` (PLAN §4.2, §4.6: legacy `/logout` → sign out → 303 `/`).
 *
 * - `POST` (the account menu's form; Astro's `checkOrigin` rejects cross-site posts) and `GET`
 *   when the browser says the navigation is same-origin or typed by the user (`Sec-Fetch-Site:
 *   same-origin | none`, or no Fetch Metadata at all) sign out right away.
 * - A cross-site `GET` (a link on another site, an `<img>`) must not sign anyone out (logout CSRF):
 *   the page asks for confirmation with a button that posts the form instead.
 *
 * Signing out = revoke the session through the API (the web forwards the session cookie on the
 * private network; requests without Fetch Metadata or Origin pass the API's CSRF rule because
 * they cannot come from a browser) and clear both cookies on the site's own response, even if the
 * API is unreachable, so the browser never stays half signed in.
 */
import { LOGGED_IN_HINT_COOKIE, SESSION_COOKIE } from '@sotf/contracts/auth';
import type { Locale } from '@sotf/i18n';
import { safeNext } from '../../islands/auth/next.ts';

/** Budget of the API call: the sign-out must never hang on a slow API. */
export const LOGOUT_TIMEOUT_MS = 3000;

export type LogoutDecision = 'sign-out' | 'confirm';

/** Whether a request may sign out immediately (see the module comment). */
export function logoutDecision(method: string, headers: Headers): LogoutDecision {
  if (method === 'POST') return 'sign-out';
  const site = headers.get('sec-fetch-site')?.trim().toLowerCase();
  if (site === undefined || site === 'same-origin' || site === 'none') return 'sign-out';
  return 'confirm';
}

/** Value of one cookie of a `Cookie` header (null when absent). */
export function cookieValue(header: string | null, name: string): string | null {
  if (!header) return null;
  for (const part of header.split(';')) {
    const index = part.indexOf('=');
    if (index < 0) continue;
    if (part.slice(0, index).trim() === name) return part.slice(index + 1).trim();
  }
  return null;
}

/** `Set-Cookie` values that clear the session, the hint and the legacy token. */
export function clearingCookies(): string[] {
  return [
    `${SESSION_COOKIE}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax`,
    `${LOGGED_IN_HINT_COOKIE}=; Path=/; Max-Age=0; Secure; SameSite=Lax`,
    'token=; Path=/; Max-Age=0',
  ];
}

export interface RevokeOptions {
  apiUrl: string;
  cookieHeader: string | null;
  clientIp?: string | null;
  userAgent?: string | null;
  fetchImpl?: typeof fetch;
  timeoutMs?: number;
}

/**
 * Revokes the current session through the API. Resolves `true` when the API confirmed it (or there
 * was no session to revoke) and `false` when it could not be reached; the cookies are cleared in
 * both cases by the caller.
 */
export async function revokeSession(options: RevokeOptions): Promise<boolean> {
  const token = cookieValue(options.cookieHeader, SESSION_COOKIE);
  if (!token) return true;
  const doFetch = options.fetchImpl ?? fetch;
  const headers: Record<string, string> = {
    accept: 'application/json',
    'content-type': 'application/json',
    cookie: `${SESSION_COOKIE}=${token}`,
    'user-agent': options.userAgent || 'sotf-web-ssr',
  };
  if (options.clientIp) headers['cf-connecting-ip'] = options.clientIp;
  try {
    const response = await doFetch(`${options.apiUrl}/api/v2/auth/logout`, {
      method: 'POST',
      headers,
      body: '{}',
      signal: AbortSignal.timeout(options.timeoutMs ?? LOGOUT_TIMEOUT_MS),
    });
    await response.body?.cancel();
    // 401: the session had already expired or been revoked; the result is the same.
    return response.ok || response.status === 401;
  } catch {
    return false;
  }
}

/** Where to go after signing out: an allowed public page (console pages would bounce to sign-in). */
export function afterLogout(next: unknown, locale: Locale): string {
  return safeNext(next, locale, { publicOnly: true });
}

/** The 303 response that finishes a sign-out. */
export function signedOutResponse(location: string): Response {
  const headers = new Headers({ location, 'cache-control': 'private, no-store' });
  for (const cookie of clearingCookies()) headers.append('set-cookie', cookie);
  return new Response(null, { status: 303, headers });
}
