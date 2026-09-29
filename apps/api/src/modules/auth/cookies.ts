/**
 * Session cookies (PLAN §5.1 "Autenticación", §9.3 "Cookies"):
 *
 * - `__Host-sotf_sid`: the opaque token. HttpOnly, Secure, SameSite=Lax, Path=/, no Domain. With
 *   "remember me" it lives until the absolute expiry (the server slides the real expiry); without
 *   it, it is a browser-session cookie.
 * - `sotf_li=1`: non-sensitive "signed in" hint readable by JS (islands skip `/me` for guests).
 */
import { LOGGED_IN_HINT_COOKIE, SESSION_COOKIE } from '@sotf/contracts/auth';
import type { CreatedSession } from '@sotf/core/auth/index';
import type { FastifyReply } from 'fastify';

const BASE = { path: '/', secure: true, sameSite: 'lax' as const };

export function setSessionCookies(reply: FastifyReply, session: CreatedSession): void {
  const maxAge = session.cookieMaxAge ?? undefined;
  reply.setCookie(SESSION_COOKIE, session.token, { ...BASE, httpOnly: true, ...(maxAge ? { maxAge } : {}) });
  reply.setCookie(LOGGED_IN_HINT_COOKIE, '1', { ...BASE, httpOnly: false, ...(maxAge ? { maxAge } : {}) });
}

export function clearSessionCookies(reply: FastifyReply): void {
  reply.clearCookie(SESSION_COOKIE, { ...BASE, httpOnly: true });
  reply.clearCookie(LOGGED_IN_HINT_COOKIE, { ...BASE, httpOnly: false });
}
