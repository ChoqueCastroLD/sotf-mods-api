/**
 * Opaque sessions (PLAN §5.1 "Autenticación", §6.10, research/04 §5):
 *
 * - Cookie `__Host-sotf_sid` = 32 random bytes (base64url); the database stores `sha256(token)`.
 * - "Remember me": 30 days sliding (renewed when < 15 days are left), 90 days absolute. Without it:
 *   a browser-session cookie and 24 h absolute (`expiresAt = absoluteExpiresAt`, never renewed).
 * - Every session stores `pwdFingerprint` (hash of "User"."password"): a password change by any
 *   path, the legacy API included, invalidates the sessions created before it.
 * - Banned or deleted accounts never resolve. Suspended accounts resolve (they may manage their
 *   account); `can()` decides what they may do.
 */

import {
  SESSION_ABSOLUTE_DAYS,
  SESSION_RENEW_BELOW_DAYS,
  SESSION_SHORT_TTL_HOURS,
  SESSION_TTL_DAYS,
} from '@sotf/contracts/auth';
import { type Executor, session, user } from '@sotf/db';
import { and, desc, eq, gt, isNull, ne, sql } from 'drizzle-orm';
import type { Role } from '../kernel/context.ts';
import { newId } from '../kernel/ids.ts';
import type { PermissionSubject } from '../permissions/can.ts';
import { pwdFingerprint } from './passwords.ts';
import { hashToken, looksLikeToken, newSecretToken } from './tokens.ts';
import { deviceLabel, storedUserAgent } from './user-agent.ts';

const DAY = 24 * 3600 * 1000;
/** `lastSeenAt` is written at most this often per session. */
export const LAST_SEEN_RESOLUTION_MS = 5 * 60 * 1000;

/** The actor built from a session (the core `Actor` plus account flags used by `can()`). */
export interface SessionActor extends PermissionSubject {
  sessionId: string;
  handle: string;
  sessionCreatedAt: Date;
}

export interface CreatedSession {
  token: string;
  id: string;
  expiresAt: Date;
  absoluteExpiresAt: Date;
  /** Cookie Max-Age in seconds, or null for a browser-session cookie (no "remember me"). */
  cookieMaxAge: number | null;
}

export interface CreateSessionInput {
  userId: number;
  /** Current "User"."password" (for the fingerprint). */
  passwordHash: string;
  remember: boolean;
  ipHash: string | null;
  userAgent: string | null;
  /** ISO 3166-1 alpha-2 country of the request (edge header), stored for the owner's session list. */
  country?: string | null;
  now: Date;
}

export async function createSession(db: Executor, input: CreateSessionInput): Promise<CreatedSession> {
  const token = newSecretToken();
  const id = newId();
  const now = input.now.getTime();
  const absoluteExpiresAt = new Date(
    now + (input.remember ? SESSION_ABSOLUTE_DAYS * DAY : SESSION_SHORT_TTL_HOURS * 3600_000),
  );
  const expiresAt = input.remember ? new Date(now + SESSION_TTL_DAYS * DAY) : absoluteExpiresAt;
  await db.insert(session).values({
    id,
    userId: input.userId,
    tokenHash: hashToken(token),
    pwdFingerprint: pwdFingerprint(input.passwordHash),
    createdAt: input.now,
    lastSeenAt: input.now,
    expiresAt,
    absoluteExpiresAt,
    ipHash: input.ipHash,
    userAgent: storedUserAgent(input.userAgent),
    deviceLabel: deviceLabel(input.userAgent),
    country: sessionCountry(input.country),
  });
  return {
    token,
    id,
    expiresAt,
    absoluteExpiresAt,
    cookieMaxAge: input.remember ? Math.floor((absoluteExpiresAt.getTime() - now) / 1000) : null,
  };
}

/**
 * Normalizes the edge country header for storage: two ASCII letters, upper case. Cloudflare's
 * pseudo-codes for unknown (`XX`) and Tor (`T1`) are dropped.
 */
export function sessionCountry(value: string | null | undefined): string | null {
  if (!value) return null;
  const code = value.trim().toUpperCase();
  if (!/^[A-Z]{2}$/.test(code) || code === 'XX') return null;
  return code;
}

/** Resolves a cookie token to its actor (null when unknown, expired, revoked or invalidated). */
export async function resolveSession(db: Executor, token: string, now: Date): Promise<SessionActor | null> {
  if (!looksLikeToken(token)) return null;
  const [row] = await db
    .select({
      id: session.id,
      userId: session.userId,
      pwdFingerprint: session.pwdFingerprint,
      createdAt: session.createdAt,
      lastSeenAt: session.lastSeenAt,
      expiresAt: session.expiresAt,
      absoluteExpiresAt: session.absoluteExpiresAt,
      revokedAt: session.revokedAt,
      password: user.password,
      role: user.role,
      slug: user.slug,
      emailVerifiedAt: user.emailVerifiedAt,
      verifiedCreator: user.verifiedCreator,
      trustLevel: user.trustLevel,
      suspendedUntil: user.suspendedUntil,
      bannedAt: user.bannedAt,
      deletedAt: user.deletedAt,
    })
    .from(session)
    .innerJoin(user, eq(user.id, session.userId))
    .where(eq(session.tokenHash, hashToken(token)))
    .limit(1);
  if (!row) return null;
  const t = now.getTime();
  if (row.revokedAt || row.expiresAt.getTime() <= t || row.absoluteExpiresAt.getTime() <= t) return null;
  if (row.bannedAt || row.deletedAt) return null;
  if (row.pwdFingerprint !== pwdFingerprint(row.password)) return null;

  const renewable = row.absoluteExpiresAt.getTime() > row.expiresAt.getTime();
  const renew = renewable && row.expiresAt.getTime() - t < SESSION_RENEW_BELOW_DAYS * DAY;
  if (renew || t - row.lastSeenAt.getTime() >= LAST_SEEN_RESOLUTION_MS) {
    const expiresAt = renew
      ? new Date(Math.min(t + SESSION_TTL_DAYS * DAY, row.absoluteExpiresAt.getTime()))
      : row.expiresAt;
    await db.update(session).set({ lastSeenAt: now, expiresAt }).where(eq(session.id, row.id));
    // v2 column only: raw SQL so the legacy "updatedAt" is not bumped by a page view.
    await db.execute(
      sql`UPDATE "User" SET "lastSeenAt" = ${now.toISOString()}::timestamptz AT TIME ZONE 'UTC' WHERE "id" = ${row.userId}`,
    );
  }

  return {
    userId: row.userId,
    role: row.role as Role,
    emailVerified: row.emailVerifiedAt !== null,
    sessionId: row.id,
    suspendedUntil: row.suspendedUntil,
    handle: row.slug,
    verifiedCreator: row.verifiedCreator,
    trustLevel: row.trustLevel,
    sessionCreatedAt: row.createdAt,
  };
}

/** Revokes one session of a user. Returns false when it does not exist (or is not theirs). */
export async function revokeSession(db: Executor, userId: number, sessionId: string, now: Date): Promise<boolean> {
  const rows = await db
    .update(session)
    .set({ revokedAt: now })
    .where(and(eq(session.id, sessionId), eq(session.userId, userId), isNull(session.revokedAt)))
    .returning({ id: session.id });
  return rows.length > 0;
}

/** Revokes every session of a user except `keepSessionId` (all of them when null). */
export async function revokeUserSessions(
  db: Executor,
  userId: number,
  now: Date,
  keepSessionId: string | null = null,
): Promise<number> {
  const conditions = [eq(session.userId, userId), isNull(session.revokedAt)];
  if (keepSessionId) conditions.push(ne(session.id, keepSessionId));
  const rows = await db
    .update(session)
    .set({ revokedAt: now })
    .where(and(...conditions))
    .returning({ id: session.id });
  return rows.length;
}

/** Re-binds a session to a new password hash (the session that changed the password survives). */
export async function refreshSessionFingerprint(db: Executor, sessionId: string, passwordHash: string): Promise<void> {
  await db
    .update(session)
    .set({ pwdFingerprint: pwdFingerprint(passwordHash) })
    .where(eq(session.id, sessionId));
}

export interface ActiveSession {
  id: string;
  deviceLabel: string | null;
  /** Country of the request that created the session (null when unknown). */
  country: string | null;
  createdAt: Date;
  lastSeenAt: Date;
  expiresAt: Date;
}

/** Active sessions of a user, most recent first (the current password's sessions only). */
export async function listActiveSessions(db: Executor, userId: number, now: Date): Promise<ActiveSession[]> {
  const [owner] = await db.select({ password: user.password }).from(user).where(eq(user.id, userId));
  if (!owner) return [];
  const fingerprint = pwdFingerprint(owner.password);
  const rows = await db
    .select({
      id: session.id,
      deviceLabel: session.deviceLabel,
      country: session.country,
      createdAt: session.createdAt,
      lastSeenAt: session.lastSeenAt,
      expiresAt: session.expiresAt,
      absoluteExpiresAt: session.absoluteExpiresAt,
    })
    .from(session)
    .where(
      and(
        eq(session.userId, userId),
        isNull(session.revokedAt),
        gt(session.expiresAt, now),
        gt(session.absoluteExpiresAt, now),
        eq(session.pwdFingerprint, fingerprint),
      ),
    )
    .orderBy(desc(session.lastSeenAt))
    .limit(100);
  return rows.map(({ absoluteExpiresAt: _abs, ...rest }) => rest);
}

/** Creation time of a session (for the 12 h re-authentication rule of staff actions). */
export async function sessionCreatedAt(db: Executor, sessionId: string): Promise<Date | null> {
  const [row] = await db.select({ createdAt: session.createdAt }).from(session).where(eq(session.id, sessionId));
  return row?.createdAt ?? null;
}
