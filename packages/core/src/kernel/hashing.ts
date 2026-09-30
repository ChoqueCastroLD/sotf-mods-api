/**
 * Keyed hashes (PLAN §2.6 "Logs", §2.8 "Conteo", §5.5 KelvinSeek, §9.3): IPs and other identifiers
 * are never stored or logged in clear.
 *
 * - `ipHash(secret, ip, day)`: HMAC with a **daily salt** derived from `APP_SECRET`, so the same IP
 *   hashes differently every UTC day (per-day uniqueness only; no long-term tracking).
 * - `keyedHash(secret, purpose, value)`: stable HMAC (e.g. KelvinSeek `chatHash`).
 * - `logHash(value)`: short unkeyed digest to correlate log lines (emails, user ids) without PII.
 */
import { createHash, createHmac } from 'node:crypto';
import { type Clock, systemClock, utcDay } from './clock.ts';

function hmac(key: string | Buffer, value: string): Buffer {
  return createHmac('sha256', key).update(value, 'utf8').digest();
}

/** Stable keyed hash of `value` for a named purpose (hex, 64 chars). */
export function keyedHash(secret: string, purpose: string, value: string): string {
  return hmac(hmac(secret, `sotf:${purpose}`), value).toString('hex');
}

/**
 * Recent daily salts (in memory only): every request hashes its IP, and the salt changes once a
 * day, so recomputing its HMAC per request was pure overhead (backlog WP-33 «platform overhead»).
 */
const SALTS = new Map<string, Buffer>();
const SALTS_MAX = 8;

/** Salt of a UTC day, derived from the application secret (never stored). */
export function dailySalt(secret: string, day: string): Buffer {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(day)) throw new TypeError(`invalid day "${day}"`);
  const key = `${day}\n${secret}`;
  let salt = SALTS.get(key);
  if (!salt) {
    salt = hmac(secret, `sotf:ip-salt:${day}`);
    if (SALTS.size >= SALTS_MAX) SALTS.delete(SALTS.keys().next().value as string);
    SALTS.set(key, salt);
  }
  return salt;
}

/** Canonical form of an IP: trimmed, lower-case, IPv4-mapped IPv6 unwrapped, zone id removed. */
export function normalizeIp(ip: string): string {
  let value = ip.trim().toLowerCase();
  const zone = value.indexOf('%');
  if (zone >= 0) value = value.slice(0, zone);
  if (value.startsWith('::ffff:') && value.slice(7).includes('.')) value = value.slice(7);
  return value;
}

/** Hash of an IP for the given UTC day (hex, 32 chars = 128 bits). */
export function ipHash(secret: string, ip: string, day: string): string {
  return hmac(dailySalt(secret, day), normalizeIp(ip)).toString('hex').slice(0, 32);
}

/** An `ipHash` bound to a secret and a clock. */
export function createIpHasher(secret: string, clock: Clock = systemClock): (ip: string) => string {
  return (ip) => ipHash(secret, ip, utcDay(clock.now()));
}

/** Short digest for logs (sha256, 12 hex chars). Not a security boundary: only avoids clear PII. */
export function logHash(value: string | number): string {
  return createHash('sha256').update(String(value).trim().toLowerCase(), 'utf8').digest('hex').slice(0, 12);
}
