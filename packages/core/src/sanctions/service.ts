/**
 * Sanctions and account actions of Ranger Station (PLAN §7.4 "Usuarios", §5.2):
 *
 * | Endpoint | Who | Effect |
 * |---|---|---|
 * | `POST /ranger/users/:id/sanctions` | 🛡 | `suspend` (temporary, `endsAt` required: `User.suspendedUntil`, the account can read and manage itself but not contribute), `ban` (permanent: `User.bannedAt` + every session revoked, the account can no longer sign in), `comment_mute` (global or one mod) and `upload_mute` (no new mods/versions) |
 * | `DELETE /ranger/sanctions/:id` | 🛡 | revokes it; `suspendedUntil` / `bannedAt` are recomputed from the sanctions still active |
 * | `PATCH /ranger/users/:id/role` | 👑 | `user` ⇄ `moderator` ⇄ `admin` |
 * | `PATCH /ranger/users/:id/verified-creator` | 🛡 | grants/removes the verified creator flag (publishing without first review, higher limits) |
 * | `POST /ranger/users/:id/revoke-sessions` | 🛡 | signs the user out everywhere |
 *
 * Staff act only on accounts below their own role and never on themselves (admins do not change
 * other admins: that goes through `pnpm admin:grant`). Every action writes an `AuditLog` row in
 * its transaction; sanctions emit `sanction.created`.
 */
import type { CreateSanctionBody, SetVerifiedCreatorBody, UpdateRoleBody } from '@sotf/contracts/moderation';
import type { Transaction } from '@sotf/db';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import { recordAudit } from '../audit/audit.ts';
import { revokeUserSessions } from '../auth/sessions.ts';
import type { CatalogConfig } from '../catalog/media.ts';
import { queryOne, toDate } from '../follows/sql.ts';
import { purge } from '../kernel/cache-tags.ts';
import type { Ctx, Role } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { publishCacheInvalidation } from '../kernel/notify.ts';
import { assertOutranks, assertStaff } from '../moderation/guard.ts';
import { tstz, utcTimestamp } from '../moderation/shared.ts';
import {
  type RangerUser,
  rangerUser,
  SANCTION_COLUMNS,
  type Sanction,
  type SanctionRow,
  sanctionsOf,
} from './users.ts';

type CreateSanctionInput = z.output<typeof CreateSanctionBody>;
type UpdateRoleInput = z.output<typeof UpdateRoleBody>;
type SetVerifiedCreatorInput = z.output<typeof SetVerifiedCreatorBody>;

interface TargetUser {
  id: number;
  role: Role;
  verifiedCreator: boolean;
  deletedAt: Date | string | null;
}

function roleOf(value: string): Role {
  return value === 'admin' || value === 'moderator' ? value : 'user';
}

async function lockUser(tx: Transaction | Ctx['db'], id: number, lock: boolean): Promise<TargetUser> {
  const row = await queryOne<{ id: number; role: string; verifiedCreator: boolean; deletedAt: Date | string | null }>(
    tx,
    sql`SELECT "id", "role", "verifiedCreator", "deletedAt" FROM "User" WHERE "id" = ${id} ${lock ? sql`FOR UPDATE` : sql``}`,
  );
  if (!row || row.deletedAt !== null) throw errors.notFound('User');
  return { ...row, role: roleOf(row.role) };
}

/** Re-derives `suspendedUntil` and `bannedAt` from the active sanctions. */
async function syncAccountFlags(tx: Transaction, userId: number, now: Date): Promise<void> {
  await tx.execute(
    sql`UPDATE "User" u SET
          "suspendedUntil" = (SELECT max(s."endsAt") AT TIME ZONE 'UTC' FROM "UserSanction" s
                               WHERE s."userId" = u."id" AND s."kind" = 'suspend' AND s."revokedAt" IS NULL
                                 AND s."endsAt" > ${tstz(now)}),
          "bannedAt" = CASE WHEN EXISTS (SELECT 1 FROM "UserSanction" s WHERE s."userId" = u."id" AND s."kind" = 'ban'
                                            AND s."revokedAt" IS NULL AND (s."endsAt" IS NULL OR s."endsAt" > ${tstz(now)}))
                            THEN coalesce(u."bannedAt", ${utcTimestamp(now)}) ELSE NULL END,
          "banReason" = CASE WHEN EXISTS (SELECT 1 FROM "UserSanction" s WHERE s."userId" = u."id" AND s."kind" = 'ban'
                                             AND s."revokedAt" IS NULL AND (s."endsAt" IS NULL OR s."endsAt" > ${tstz(now)}))
                             THEN (SELECT s."reason" FROM "UserSanction" s WHERE s."userId" = u."id" AND s."kind" = 'ban'
                                     AND s."revokedAt" IS NULL ORDER BY s."startsAt" DESC LIMIT 1)
                             ELSE NULL END
        WHERE u."id" = ${userId}`,
  );
}

async function afterAccountChange(ctx: Ctx, tx: Transaction, userId: number, reason: string): Promise<void> {
  const tags = [`user:${userId}`, 'list:mods', 'list:builds'];
  await publishCacheInvalidation(tx, tags);
  await purge(ctx.jobs, tags, reason, { tx });
}

/** `POST /ranger/users/:id/sanctions`. */
export async function createSanction(
  ctx: Ctx,
  config: CatalogConfig,
  userId: number,
  input: CreateSanctionInput,
): Promise<Sanction> {
  const actor = await assertStaff(ctx, 'moderation.sanction');
  const now = ctx.clock.now();
  const endsAt = input.endsAt ? new Date(input.endsAt) : null;
  if (endsAt && endsAt.getTime() <= now.getTime()) {
    throw errors.validation('The end must be in the future', [{ path: 'endsAt', code: 'past', message: 'past' }]);
  }
  if (input.kind === 'suspend' && !endsAt) {
    throw errors.validation('A suspension needs an end date (use a ban for a permanent measure)', [
      { path: 'endsAt', code: 'required', message: 'required for suspend' },
    ]);
  }
  if (input.kind === 'ban' && endsAt) {
    throw errors.validation('Bans are permanent: use a suspension for a temporary measure', [
      { path: 'endsAt', code: 'not_allowed', message: 'not allowed for ban' },
    ]);
  }
  if (input.scopeModId !== undefined && input.kind !== 'comment_mute') {
    throw errors.validation('Only comment mutes can be limited to one mod', [
      { path: 'scopeModId', code: 'not_allowed', message: 'comment_mute only' },
    ]);
  }

  const row = await ctx.db.transaction(async (tx) => {
    const target = await lockUser(tx, userId, true);
    assertOutranks(actor, target);
    if (input.scopeModId !== undefined) {
      const mod = await queryOne<{ id: number }>(tx, sql`SELECT "id" FROM "Mod" WHERE "id" = ${input.scopeModId}`);
      if (!mod) throw errors.notFound('Mod');
    }
    const created = await queryOne<SanctionRow>(
      tx,
      sql`INSERT INTO "UserSanction" AS s ("userId", "kind", "scopeModId", "reason", "startsAt", "endsAt", "createdById")
          VALUES (${userId}, ${input.kind}, ${input.scopeModId ?? null}, ${input.reason}, ${tstz(now)},
                  ${endsAt ? tstz(endsAt) : null}, ${actor.userId})
          RETURNING ${SANCTION_COLUMNS}`,
    );
    if (!created) throw new Error('UserSanction insert returned no row');
    let revokedSessions = 0;
    if (input.kind === 'suspend' || input.kind === 'ban') await syncAccountFlags(tx, userId, now);
    if (input.kind === 'ban') revokedSessions = await revokeUserSessions(tx, userId, now);
    await recordAudit(tx, ctx, {
      action: 'sanction.create',
      targetType: 'user',
      targetId: userId,
      after: {
        sanctionId: created.id,
        kind: input.kind,
        endsAt: endsAt?.toISOString() ?? null,
        scopeModId: input.scopeModId ?? null,
        ...(input.kind === 'ban' ? { revokedSessions } : {}),
      },
      reason: input.reason,
    });
    await ctx.jobs.emitNew(
      tx,
      'sanction.created',
      { sanctionId: created.id, userId, kind: input.kind },
      { actorId: actor.userId },
    );
    if (input.kind === 'ban') await afterAccountChange(ctx, tx, userId, 'user banned');
    return created;
  });
  ctx.log.info({ userId, kind: input.kind, actorId: actor.userId }, 'sanction created');
  const [dto] = await sanctionsOf(ctx, config, [row]);
  if (!dto) throw errors.notFound('Sanction');
  return dto;
}

/** `DELETE /ranger/sanctions/:id`. Revoking an already revoked sanction returns it unchanged. */
export async function revokeSanction(ctx: Ctx, config: CatalogConfig, sanctionId: number): Promise<Sanction> {
  const actor = await assertStaff(ctx, 'moderation.sanction');
  const now = ctx.clock.now();
  const row = await ctx.db.transaction(async (tx) => {
    const current = await queryOne<SanctionRow>(
      tx,
      sql`SELECT ${SANCTION_COLUMNS} FROM "UserSanction" s WHERE s."id" = ${sanctionId} FOR UPDATE`,
    );
    if (!current) throw errors.notFound('Sanction');
    if (current.revokedAt !== null) return current;
    const target = await lockUser(tx, current.userId, true);
    assertOutranks(actor, target);
    const updated = await queryOne<SanctionRow>(
      tx,
      sql`UPDATE "UserSanction" s SET "revokedAt" = ${tstz(now)} WHERE s."id" = ${sanctionId} RETURNING ${SANCTION_COLUMNS}`,
    );
    if (!updated) throw errors.notFound('Sanction');
    if (current.kind === 'suspend' || current.kind === 'ban') await syncAccountFlags(tx, current.userId, now);
    await recordAudit(tx, ctx, {
      action: 'sanction.revoke',
      targetType: 'user',
      targetId: current.userId,
      before: { sanctionId, kind: current.kind, endsAt: toDate(current.endsAt)?.toISOString() ?? null },
      after: { revokedAt: now.toISOString() },
    });
    if (current.kind === 'ban') await afterAccountChange(ctx, tx, current.userId, 'ban revoked');
    return updated;
  });
  const [dto] = await sanctionsOf(ctx, config, [row]);
  if (!dto) throw errors.notFound('Sanction');
  return dto;
}

/** `PATCH /ranger/users/:id/role` (👑). */
export async function setUserRole(
  ctx: Ctx,
  config: CatalogConfig,
  userId: number,
  input: UpdateRoleInput,
): Promise<RangerUser> {
  const actor = await assertStaff(ctx, 'admin.roles');
  await ctx.db.transaction(async (tx) => {
    const target = await lockUser(tx, userId, true);
    assertOutranks(actor, target);
    if (target.role === input.role) return;
    await tx.execute(sql`UPDATE "User" SET "role" = ${input.role} WHERE "id" = ${userId}`);
    await recordAudit(tx, ctx, {
      action: 'user.role',
      targetType: 'user',
      targetId: userId,
      before: { role: target.role },
      after: { role: input.role },
      reason: input.reason ?? null,
    });
    await afterAccountChange(ctx, tx, userId, 'role changed');
  });
  return rangerUser(ctx, config, userId);
}

/** `PATCH /ranger/users/:id/verified-creator`. */
export async function setVerifiedCreator(
  ctx: Ctx,
  config: CatalogConfig,
  userId: number,
  input: SetVerifiedCreatorInput,
): Promise<RangerUser> {
  const actor = await assertStaff(ctx, 'moderation.verified_creator');
  await ctx.db.transaction(async (tx) => {
    const target = await lockUser(tx, userId, true);
    assertOutranks(actor, target);
    if (target.verifiedCreator === input.value) return;
    await tx.execute(sql`UPDATE "User" SET "verifiedCreator" = ${input.value} WHERE "id" = ${userId}`);
    await recordAudit(tx, ctx, {
      action: input.value ? 'user.verified_creator.grant' : 'user.verified_creator.revoke',
      targetType: 'user',
      targetId: userId,
      before: { verifiedCreator: target.verifiedCreator },
      after: { verifiedCreator: input.value },
      reason: input.reason ?? null,
    });
    await afterAccountChange(ctx, tx, userId, 'verified creator flag changed');
  });
  return rangerUser(ctx, config, userId);
}

/** `POST /ranger/users/:id/revoke-sessions`. */
export async function revokeUserSessionsByStaff(ctx: Ctx, userId: number): Promise<{ revoked: number }> {
  const actor = await assertStaff(ctx, 'moderation.sanction');
  return ctx.db.transaction(async (tx) => {
    const target = await lockUser(tx, userId, false);
    assertOutranks(actor, target);
    const revoked = await revokeUserSessions(tx, userId, ctx.clock.now());
    await recordAudit(tx, ctx, {
      action: 'user.revoke_sessions',
      targetType: 'user',
      targetId: userId,
      after: { revoked },
    });
    return { revoked };
  });
}
