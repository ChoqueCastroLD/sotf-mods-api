/**
 * One-click unsubscribe (RFC 8058, PLAN §7.3): every notification email carries
 * `List-Unsubscribe: <…/api/v2/unsubscribe?token=…>` and `List-Unsubscribe-Post:
 * List-Unsubscribe=One-Click`. The token is signed (HMAC-SHA256 with a key derived from
 * `APP_SECRET`), so it needs no table and cannot be forged or altered.
 *
 * Scopes:
 * - `type:<notification type>`: turn the email of that type off (instant emails of one type and
 *   the creator's weekly report);
 * - `cadence:<instant|daily|weekly>`: turn off every type currently mailed with that cadence (the
 *   daily and weekly digests, and instant batches that mix types).
 *
 * Tokens do not expire for a year (mail clients keep old messages); a deleted account answers
 * `GONE`, a bad signature `NOT_FOUND`. Applying a token twice is harmless.
 */
import { createHmac, timingSafeEqual } from 'node:crypto';
import { type EmailFrequency, NOTIFICATION_TYPES, type NotificationType } from '@sotf/contracts/notifications';
import { type Executor, user } from '@sotf/db';
import { eq } from 'drizzle-orm';
import { errors } from '../kernel/errors.ts';
import { isNotificationType, preferenceMatrix, updatePreferenceMatrix } from './preferences.ts';

export type UnsubscribeScope = `type:${NotificationType}` | `cadence:${Exclude<EmailFrequency, 'off'>}`;

export interface UnsubscribeClaims {
  userId: number;
  scope: UnsubscribeScope;
  /** Issued at (seconds since epoch). */
  iat: number;
}

/** Tokens older than this are refused (`GONE`). */
export const UNSUBSCRIBE_TOKEN_MAX_AGE_DAYS = 365;

function signingKey(appSecret: string): Buffer {
  return createHmac('sha256', appSecret).update('sotf:unsubscribe:v1', 'utf8').digest();
}

function sign(appSecret: string, body: string): string {
  return createHmac('sha256', signingKey(appSecret)).update(body, 'utf8').digest('base64url');
}

export function isUnsubscribeScope(value: string): value is UnsubscribeScope {
  if (value.startsWith('type:')) return isNotificationType(value.slice(5));
  return value === 'cadence:instant' || value === 'cadence:daily' || value === 'cadence:weekly';
}

/** `<base64url(json)>.<base64url(hmac)>` */
export function createUnsubscribeToken(appSecret: string, claims: UnsubscribeClaims): string {
  const body = Buffer.from(JSON.stringify({ u: claims.userId, s: claims.scope, t: claims.iat }), 'utf8').toString(
    'base64url',
  );
  return `${body}.${sign(appSecret, body)}`;
}

/** Verifies a token; null when malformed or forged. */
export function verifyUnsubscribeToken(appSecret: string, token: string): UnsubscribeClaims | null {
  const dot = token.indexOf('.');
  if (dot <= 0 || dot !== token.lastIndexOf('.')) return null;
  const body = token.slice(0, dot);
  const signature = token.slice(dot + 1);
  const expected = Buffer.from(sign(appSecret, body), 'utf8');
  const given = Buffer.from(signature, 'utf8');
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return null;
  try {
    const value = JSON.parse(Buffer.from(body, 'base64url').toString('utf8')) as {
      u?: unknown;
      s?: unknown;
      t?: unknown;
    };
    if (typeof value.u !== 'number' || !Number.isSafeInteger(value.u) || value.u <= 0) return null;
    if (typeof value.s !== 'string' || !isUnsubscribeScope(value.s)) return null;
    if (typeof value.t !== 'number' || !Number.isFinite(value.t)) return null;
    return { userId: value.u, scope: value.s, iat: value.t };
  } catch {
    return null;
  }
}

/** Absolute URLs of a token: the RFC 8058 POST target and the human page. */
export function unsubscribeUrls(siteUrl: string, token: string, locale: string): { oneClick: string; page: string } {
  const base = siteUrl.replace(/\/+$/, '');
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const q = `token=${encodeURIComponent(token)}`;
  return { oneClick: `${base}/api/v2/unsubscribe?${q}`, page: `${base}${prefix}/unsubscribe?${q}` };
}

/** Types whose email is turned off by a scope, given the user's current matrix. */
export function typesForScope(
  scope: UnsubscribeScope,
  matrix: ReadonlyMap<NotificationType, { email: EmailFrequency }>,
): NotificationType[] {
  if (scope.startsWith('type:')) return [scope.slice(5) as NotificationType];
  const cadence = scope.slice(8) as EmailFrequency;
  return NOTIFICATION_TYPES.filter((type) => matrix.get(type)?.email === cadence);
}

/**
 * Applies a token: validates it, then turns the email of the scope's types off. Throws
 * `NOT_FOUND` for an invalid token and `GONE` for an expired token or a deleted account.
 */
export async function applyUnsubscribeToken(
  db: Executor,
  appSecret: string,
  token: string,
  now: Date,
): Promise<{ userId: number; types: NotificationType[] }> {
  const claims = verifyUnsubscribeToken(appSecret, token);
  if (!claims) throw errors.notFound('Unsubscribe link');
  if (now.getTime() / 1000 - claims.iat > UNSUBSCRIBE_TOKEN_MAX_AGE_DAYS * 24 * 3600) {
    throw errors.gone('This unsubscribe link has expired: change your emails in the notification settings');
  }
  const [row] = await db
    .select({ id: user.id, deletedAt: user.deletedAt })
    .from(user)
    .where(eq(user.id, claims.userId));
  if (!row || row.deletedAt) throw errors.gone('This account no longer exists');
  const matrix = await preferenceMatrix(db, claims.userId);
  const types = typesForScope(claims.scope, matrix);
  const changes = types.map((type) => ({ type, inApp: matrix.get(type)?.inApp ?? false, email: 'off' as const }));
  if (changes.length > 0) await updatePreferenceMatrix(db, claims.userId, changes);
  return { userId: claims.userId, types };
}
