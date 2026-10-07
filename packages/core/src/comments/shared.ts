/**
 * Pieces shared by comments and reviews (PLAN §7.6, §7.7): the signed-in member behind a write,
 * the mod a thread belongs to (with the public-by-URL rules of §6.8), compact user references,
 * version references, the opaque keyset cursors and the per-mod counter lock.
 */
import type { UserRefDTO } from '@sotf/contracts/common';
import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { type MediaRow, mediaUrlForWidth, rankOf, roleOf, tierOf } from '../catalog/index.ts';
import type { Actor, Ctx, Role } from '../kernel/context.ts';
import { DomainError, errors } from '../kernel/errors.ts';
import { asDate, firstRow, rows } from '../legacy/db.ts';
import type { PermissionSubject } from '../permissions/index.ts';

/** Deployment facts the DTO builders need (public media URLs). */
export interface CommunityConfig {
  /** `R2_PUBLIC_BASE_URL`. */
  mediaBaseUrl: string;
  /** `R2_BUCKET` (the public bucket served by `mediaBaseUrl`). */
  publicBucket: string;
}

export const ACCOUNT_AGE_MS = 24 * 3600 * 1000;

// -----------------------------------------------------------------------------------------------
// Members
// -----------------------------------------------------------------------------------------------

/** The signed-in user behind a write, with the account facts the rules need. */
export interface Member {
  id: number;
  role: Role;
  emailVerified: boolean;
  createdAt: Date;
  trustLevel: number;
  verifiedCreator: boolean;
  subject: PermissionSubject;
}

export function isStaffRole(role: Role): boolean {
  return role === 'moderator' || role === 'admin';
}

/** Loads the actor's account. Deleted accounts are signed out; banned ones cannot act. */
export async function loadMember(ctx: Ctx): Promise<Member> {
  const actor: Actor | null = ctx.actor;
  if (!actor) throw errors.unauthenticated();
  const row = await firstRow<{
    id: number;
    role: string;
    createdAt: unknown;
    trustLevel: number;
    verifiedCreator: boolean;
    suspendedUntil: unknown;
    bannedAt: unknown;
    deletedAt: unknown;
  }>(
    ctx.db,
    sql`SELECT "id", "role", "createdAt", "trustLevel", "verifiedCreator", "suspendedUntil", "bannedAt", "deletedAt"
          FROM "User" WHERE "id" = ${actor.userId}`,
  );
  if (!row || row.deletedAt !== null) throw errors.unauthenticated();
  if (row.bannedAt !== null) throw new DomainError('SUSPENDED', undefined, 'Your account is banned');
  // The session actor is the ceiling: a personal access token acts as `user` whatever the owner's
  // role ("a token never carries staff powers"), so the account row may only lower the role.
  const role: Role = actor.role === 'user' ? 'user' : roleOf(row.role);
  const suspendedUntil = row.suspendedUntil === null ? (actor.suspendedUntil ?? null) : asDate(row.suspendedUntil);
  return {
    id: row.id,
    role,
    emailVerified: actor.emailVerified,
    createdAt: asDate(row.createdAt),
    trustLevel: Number(row.trustLevel) || 0,
    verifiedCreator: row.verifiedCreator,
    subject: {
      ...actor,
      role,
      suspendedUntil,
      verifiedCreator: row.verifiedCreator,
      trustLevel: Number(row.trustLevel) || 0,
    },
  };
}

/** True when the account is younger than 24 h (PLAN §5.1, T0-22). */
export function isNewAccount(member: Pick<Member, 'createdAt'>, now: Date): boolean {
  return now.getTime() - member.createdAt.getTime() < ACCOUNT_AGE_MS;
}

/** Viewer of a read: decides whether hidden/pending items of their own (or all, for staff) show. */
export interface Viewer {
  userId: number;
  staff: boolean;
}

export function viewerOf(ctx: Ctx): Viewer | null {
  const actor = ctx.actor;
  if (!actor) return null;
  return { userId: actor.userId, staff: actor.role === 'moderator' || actor.role === 'admin' };
}

// -----------------------------------------------------------------------------------------------
// Mods
// -----------------------------------------------------------------------------------------------

export interface ThreadMod {
  id: number;
  userId: number | null;
  status: string;
  name: string;
  /** Set while a ranger keeps the thread locked (no new comments or replies, staff excepted). */
  commentsLockedAt: Date | null;
}

/**
 * The mod of a comment thread or review list, public by URL (PLAN §6.8): `published`, `unlisted`,
 * `archived`, and `pending` once the latest version passed the checks. `rejected` (and a pending
 * mod without passed checks) is 404, `removed` is 410.
 */
export async function loadThreadMod(db: Executor, modId: number, options: { lock?: boolean } = {}): Promise<ThreadMod> {
  const row = await firstRow<ThreadMod & { checksPassed: boolean }>(
    db,
    sql`SELECT m."id", m."userId", m."status", m."name", m."commentsLockedAt",
               EXISTS (SELECT 1 FROM "ModVersion" lv
                        WHERE lv."modId" = m."id" AND lv."isLatest" AND lv."checksStatus" = 'passed') AS "checksPassed"
          FROM "Mod" m WHERE m."id" = ${modId}${options.lock ? sql` FOR UPDATE OF m` : sql``}`,
  );
  if (!row) throw errors.notFound('Mod');
  if (row.status === 'removed') throw errors.gone('This mod was removed');
  if (row.status === 'rejected' || (row.status === 'pending' && !row.checksPassed)) throw errors.notFound('Mod');
  return {
    id: row.id,
    userId: row.userId,
    status: row.status,
    name: row.name,
    commentsLockedAt: row.commentsLockedAt === null ? null : asDate(row.commentsLockedAt),
  };
}

/** Locks the mod row so per-mod counters are recomputed one writer at a time. */
export async function lockMod(tx: Executor, modId: number): Promise<void> {
  await tx.execute(sql`SELECT 1 FROM "Mod" WHERE "id" = ${modId} FOR UPDATE`);
}

/** A version of `modId` that can be referenced (not rejected); throws a 422 otherwise. */
export async function versionOfMod(
  db: Executor,
  modId: number,
  versionId: number,
  field: string,
): Promise<{ id: number; version: string }> {
  const row = await firstRow<{ id: number; version: string }>(
    db,
    sql`SELECT "id", "version" FROM "ModVersion"
         WHERE "id" = ${versionId} AND "modId" = ${modId} AND "status" <> 'rejected'`,
  );
  if (!row) {
    throw errors.validation('That version does not belong to this mod', [
      { path: field, code: 'invalid', message: 'unknown version of this mod' },
    ]);
  }
  return row;
}

/** Active comment mute (global or for this mod) or ban of a user. */
export async function isMuted(db: Executor, userId: number, modId: number, now: Date): Promise<boolean> {
  const row = await firstRow<{ muted: boolean }>(
    db,
    sql`SELECT EXISTS (
          SELECT 1 FROM "UserSanction" s
           WHERE s."userId" = ${userId} AND s."revokedAt" IS NULL
             AND s."startsAt" <= ${now.toISOString()}::timestamptz
             AND (s."endsAt" IS NULL OR s."endsAt" > ${now.toISOString()}::timestamptz)
             AND (s."kind" IN ('ban', 'suspend')
                  OR (s."kind" = 'comment_mute' AND (s."scopeModId" IS NULL OR s."scopeModId" = ${modId})))
        ) AS "muted"`,
  );
  return row?.muted === true;
}

// -----------------------------------------------------------------------------------------------
// User references
// -----------------------------------------------------------------------------------------------

/** Columns of an author (alias `u`, stats `us`, avatar media `am`), prefixed with `a`. */
export const AUTHOR_COLUMNS = sql`u."id" AS "aId", u."slug" AS "aSlug", u."name" AS "aName",
  u."displayName" AS "aDisplayName", u."imageUrl" AS "aImageUrl", u."verifiedCreator" AS "aVerified",
  u."role" AS "aRole", u."privacy" AS "aPrivacy", u."deletedAt" AS "aDeletedAt",
  us."creatorTier" AS "aTier", us."survivorRank" AS "aRank",
  am."width" AS "amWidth", am."height" AS "amHeight", am."thumbhash" AS "amThumbhash",
  am."dominantColor" AS "amColor", am."variants" AS "amVariants", am."sourceBucket" AS "amBucket",
  am."sourceKey" AS "amKey"`;

/** Joins behind {@link AUTHOR_COLUMNS} for an author id expression. */
export function authorJoins(userIdColumn: ReturnType<typeof sql.raw>) {
  return sql`LEFT JOIN "User" u ON u."id" = ${userIdColumn}
    LEFT JOIN "UserStats" us ON us."userId" = u."id"
    LEFT JOIN "Media" am ON am."id" = u."avatarMediaId"`;
}

export interface AuthorColumns {
  aId: number | null;
  aSlug: string | null;
  aName: string | null;
  aDisplayName: string | null;
  aImageUrl: string | null;
  aVerified: boolean | null;
  aRole: string | null;
  aPrivacy: { hideRank?: boolean } | null;
  aDeletedAt: unknown;
  aTier: string | null;
  aRank: string | null;
  amWidth: number | null;
  amHeight: number | null;
  amThumbhash: string | null;
  amColor: string | null;
  amVariants: MediaRow['variants'];
  amBucket: string | null;
  amKey: string | null;
}

/** `UserRefDTO` of an author row; null for deleted accounts ("Deleted user"). */
export function userRefOf(config: CommunityConfig, row: AuthorColumns): UserRefDTO | null {
  if (row.aId === null || row.aSlug === null || row.aDeletedAt !== null) return null;
  const media: MediaRow | null =
    row.amKey === null && row.amVariants === null
      ? null
      : {
          width: row.amWidth,
          height: row.amHeight,
          thumbhash: row.amThumbhash,
          dominantColor: row.amColor,
          variants: row.amVariants,
          sourceBucket: row.amBucket,
          sourceKey: row.amKey,
        };
  return {
    id: row.aId,
    handle: row.aSlug,
    displayName: row.aDisplayName?.trim() || row.aName || row.aSlug,
    avatarUrl: mediaUrlForWidth(config, media, 96, row.aImageUrl),
    verifiedCreator: row.aVerified === true,
    role: roleOf(row.aRole),
    creatorTier: tierOf(row.aTier),
    survivorRank: row.aPrivacy?.hideRank === true ? null : rankOf(row.aRank),
  };
}

// -----------------------------------------------------------------------------------------------
// Cursors
// -----------------------------------------------------------------------------------------------

/**
 * Opaque keyset cursor: base64url of a JSON array of finite numbers (the sort key of the last
 * item). Matches the `Cursor` contract (`[A-Za-z0-9_-]`, ≤ 200 characters).
 */
export function encodeKeyset(values: readonly number[]): string {
  return Buffer.from(JSON.stringify(values), 'utf8').toString('base64url');
}

/** Decodes a cursor of `size` numbers; a malformed one is a 422 (`VALIDATION_FAILED`). */
export function decodeKeyset(cursor: string, size: number): number[] {
  const fail = () =>
    errors.validation('Invalid cursor', [{ path: 'cursor', code: 'invalid', message: 'invalid cursor' }]);
  let parsed: unknown;
  try {
    parsed = JSON.parse(Buffer.from(cursor, 'base64url').toString('utf8'));
  } catch {
    throw fail();
  }
  if (
    !Array.isArray(parsed) ||
    parsed.length !== size ||
    !parsed.every((v) => typeof v === 'number' && Number.isSafeInteger(v))
  ) {
    throw fail();
  }
  return parsed as number[];
}

/** Runs a read and returns its rows (re-export for the domain files). */
export { asDate, firstRow, rows };
