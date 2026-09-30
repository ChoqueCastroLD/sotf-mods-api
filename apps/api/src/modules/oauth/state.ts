/**
 * State of one OAuth round trip, kept in a short-lived signed cookie (no server storage):
 * `__Host-sotf_oauth` = base64url(JSON) + "." + HMAC-SHA256(APP_SECRET). It carries the CSRF
 * `state`, the PKCE verifier, the intent, the landing path and the locale. HttpOnly, Secure,
 * SameSite=Lax (the provider redirects back with a top-level GET), 10 minutes.
 */
import { createHash, createHmac, randomBytes, timingSafeEqual } from 'node:crypto';

export const OAUTH_COOKIE = '__Host-sotf_oauth';
export const OAUTH_COOKIE_MAX_AGE = 600;

export interface OAuthState {
  provider: string;
  state: string;
  verifier: string;
  intent: 'login' | 'link';
  next: string | null;
  locale: string;
  /** Expiry, epoch ms. */
  exp: number;
}

const sign = (payload: string, secret: string) =>
  createHmac('sha256', secret).update(`oauth-state:${payload}`).digest('base64url');

export function newOAuthState(input: Omit<OAuthState, 'state' | 'verifier' | 'exp'>, now: Date): OAuthState {
  return {
    ...input,
    state: randomBytes(24).toString('base64url'),
    verifier: randomBytes(48).toString('base64url'),
    exp: now.getTime() + OAUTH_COOKIE_MAX_AGE * 1000,
  };
}

export function pkceChallenge(verifier: string): string {
  return createHash('sha256').update(verifier).digest('base64url');
}

export function encodeState(state: OAuthState, secret: string): string {
  const payload = Buffer.from(JSON.stringify(state), 'utf8').toString('base64url');
  return `${payload}.${sign(payload, secret)}`;
}

export function decodeState(value: string | undefined, secret: string, now: Date): OAuthState | null {
  if (!value) return null;
  const [payload, signature] = value.split('.');
  if (!payload || !signature) return null;
  const expected = Buffer.from(sign(payload, secret));
  const given = Buffer.from(signature);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return null;
  try {
    const state = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')) as OAuthState;
    if (typeof state.exp !== 'number' || state.exp <= now.getTime()) return null;
    return state;
  } catch {
    return null;
  }
}

/** Constant-time comparison of the `state` query parameter with the cookie's. */
export function statesMatch(a: string | undefined, b: string): boolean {
  if (!a) return false;
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

/** A landing path on this site: relative, no scheme/host tricks, not the API. */
export function safeLandingPath(value: string | undefined): string | null {
  if (!value || value.length > 512 || !value.startsWith('/') || value.startsWith('//')) return null;
  if (value.includes('\\') || /^\/(?:%2f|%5c)/i.test(value)) return null;
  for (let index = 0; index < value.length; index += 1) {
    const code = value.charCodeAt(index);
    if (code < 0x20 || code === 0x7f) return null;
  }
  if (value.startsWith('/api/')) return null;
  return value;
}
