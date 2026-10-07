/**
 * Guard of every Ranger Station and admin service (PLAN §7.4, §9.2):
 *
 * 1. the actor is signed in and its account row is re-read (role, verified flag, trust level,
 *    suspension), so a demoted or suspended moderator loses access on the next request even if the
 *    session still carries the old role;
 * 2. `assertCan(subject, action)` — moderators and admins for `moderation.*`, admins for `admin.*`;
 *
 * The platform already rejects anonymous callers and callers below the contract's role; this is
 * the authoritative check (core never trusts the transport layer).
 */
import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { queryOne, toDate } from '../follows/sql.ts';
import type { Ctx, Role } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { type Action, assertCan, type PermissionSubject } from '../permissions/can.ts';

export interface StaffActor extends PermissionSubject {
  role: Role;
  handle?: string;
}

interface AccountRow {
  role: string;
  slug: string;
  verifiedCreator: boolean;
  trustLevel: number;
  emailVerified: boolean;
  suspendedUntil: Date | string | null;
  bannedAt: Date | string | null;
  deletedAt: Date | string | null;
}

function roleOf(value: string): Role {
  return value === 'admin' || value === 'moderator' ? value : 'user';
}

/** The actor re-read from "User" (null when not signed in). */
export async function loadSubject(ctx: Ctx): Promise<StaffActor | null> {
  const actor = ctx.actor;
  if (!actor) return null;
  const row = await queryOne<AccountRow>(
    ctx.db,
    sql`SELECT "role", "slug", "verifiedCreator", "trustLevel",
               ("emailVerifiedAt" IS NOT NULL) AS "emailVerified",
               "suspendedUntil", "bannedAt", "deletedAt"
          FROM "User" WHERE "id" = ${actor.userId}`,
  );
  if (!row || row.deletedAt !== null || row.bannedAt !== null) throw errors.unauthenticated();
  return {
    ...actor,
    role: roleOf(row.role),
    handle: row.slug,
    verifiedCreator: row.verifiedCreator === true,
    trustLevel: Number(row.trustLevel ?? 0),
    emailVerified: actor.emailVerified || row.emailVerified === true,
    suspendedUntil: toDate(row.suspendedUntil),
  };
}

/**
 * Staff guard: the actor is signed in and holds permission `action`. Returns the re-read subject.
 */
export async function assertStaff(ctx: Ctx, action: Action): Promise<StaffActor> {
  const subject = await loadSubject(ctx);
  if (!subject) throw errors.unauthenticated();
  const now = ctx.clock.now();
  assertCan(subject, action, undefined, now);
  return subject;
}

/** Role rank: user 0, moderator 1, admin 2. */
export function roleRank(role: Role): number {
  return role === 'admin' ? 2 : role === 'moderator' ? 1 : 0;
}

/**
 * Staff may act on accounts strictly below their own role (moderators on users, admins on users
 * and moderators), and never on themselves.
 */
export function assertOutranks(actor: Pick<StaffActor, 'userId' | 'role'>, target: { id: number; role: Role }): void {
  if (actor.userId === target.id) throw errors.forbidden('You cannot do this to your own account');
  if (roleRank(actor.role) <= roleRank(target.role)) {
    throw errors.forbidden('This account has the same or a higher role than yours');
  }
}

/**
 * Independent review: a moderator cannot approve a mod (or release one of its versions, or clear one
 * of its scans) that they own or co-author; another ranger decides. Admins are exempt, they are the
 * last instance. Without this a compromised or careless moderator account could wave its own
 * held, flagged or rejected uploads through.
 */
export async function assertNotOwnContent(
  exec: Executor,
  actor: Pick<StaffActor, 'userId' | 'role'>,
  modId: number,
): Promise<void> {
  if (actor.role === 'admin') return;
  const own = await queryOne<{ own: boolean }>(
    exec,
    sql`SELECT (m."userId" = ${actor.userId}
                OR EXISTS (SELECT 1 FROM "ModCoAuthor" c
                            WHERE c."modId" = m."id" AND c."userId" = ${actor.userId} AND c."status" = 'accepted')) AS "own"
          FROM "Mod" m WHERE m."id" = ${modId}`,
  );
  if (own?.own === true) throw errors.forbidden('You cannot approve your own mod: ask another ranger');
}
