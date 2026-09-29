/**
 * Opaque secrets (PLAN §5.1 "Sesión", §6.10): 32 random bytes in base64url for session cookies and
 * email links. Only `sha256(token)` is stored, so a database leak does not leak live credentials.
 */
import { createHash, randomBytes } from 'node:crypto';

/** 32 random bytes, base64url (43 chars). */
export function newSecretToken(): string {
  return randomBytes(32).toString('base64url');
}

/** Hex sha256 of a token (what the database stores). */
export function hashToken(token: string): string {
  return createHash('sha256').update(token, 'utf8').digest('hex');
}

/** Shape of a v2 token (fast reject before touching the database). */
export function looksLikeToken(value: string): boolean {
  return /^[A-Za-z0-9_-]{43}$/.test(value);
}
