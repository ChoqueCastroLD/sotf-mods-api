/**
 * Editorial curation by admins (PLAN §7.2, §7.8, §7.4 "Admin"):
 *
 * - `PUT /admin/kits/:id/staff-pick`: features a public kit (landing «Esenciales para empezar»,
 *   the `/install` starter kit; `GET /kits?staffPick=1` lists them). Only live public kits can be
 *   featured; un-featuring always works. Emits `kit.updated` (the kit pages, the kit lists and the
 *   owner's profile are purged by the event subscriber).
 * - `PUT|DELETE /admin/users/:id/badges/:badgeKey`: the manual `translator` badge (PLAN §7.2). A
 *   grant signals the user like any other badge.
 *
 * 👑 admin with a session younger than 12 h; every change appends an `AuditLog` row. Both are
 * idempotent (repeating a call changes nothing and writes no audit row).
 */
import type { KitStaffPickDTO, MANUAL_BADGE_KEYS, ManualBadgeDTO } from '@sotf/contracts/admin';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import { recordAudit } from '../audit/audit.ts';
import { queryOne } from '../follows/sql.ts';
import { grantManualBadge, removeBadge } from '../gamification/badges.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { assertStaff } from '../moderation/guard.ts';

type ManualBadgeKey = (typeof MANUAL_BADGE_KEYS)[number];

/** `PUT /admin/kits/:id/staff-pick`. */
export async function setKitStaffPick(
  ctx: Ctx,
  kitId: number,
  isStaffPick: boolean,
): Promise<z.infer<typeof KitStaffPickDTO>> {
  const actor = await assertStaff(ctx, 'admin.awards');
  return ctx.db.transaction(async (tx) => {
    const kit = await queryOne<{
      id: number;
      ownerId: number;
      visibility: 'public' | 'unlisted' | 'private';
      revision: number;
      isStaffPick: boolean;
      deletedAt: Date | string | null;
    }>(
      tx,
      sql`SELECT "id", "ownerId", "visibility", "revision", "isStaffPick", "deletedAt" FROM "Kit" WHERE "id" = ${kitId} FOR UPDATE`,
    );
    if (!kit || kit.deletedAt !== null) throw errors.notFound('Kit');
    if (kit.isStaffPick === isStaffPick) return { kitId, isStaffPick };
    if (isStaffPick && kit.visibility !== 'public') throw errors.conflict('Only public kits can be staff picks');
    await tx.execute(sql`UPDATE "Kit" SET "isStaffPick" = ${isStaffPick} WHERE "id" = ${kitId}`);
    await recordAudit(tx, ctx, {
      action: isStaffPick ? 'kit.staff_pick' : 'kit.staff_unpick',
      targetType: 'kit',
      targetId: kitId,
      before: { isStaffPick: kit.isStaffPick },
      after: { isStaffPick },
    });
    await ctx.jobs.emitNew(
      tx,
      'kit.updated',
      { kitId, ownerId: kit.ownerId, visibility: kit.visibility, revision: kit.revision },
      { actorId: actor.userId },
    );
    return { kitId, isStaffPick };
  });
}

async function assertUser(exec: Parameters<typeof queryOne>[0], userId: number): Promise<void> {
  const user = await queryOne<{ id: number; deletedAt: Date | string | null }>(
    exec,
    sql`SELECT "id", "deletedAt" FROM "User" WHERE "id" = ${userId}`,
  );
  if (!user || user.deletedAt !== null) throw errors.notFound('User');
}

async function holdsBadge(exec: Parameters<typeof queryOne>[0], userId: number, key: string): Promise<boolean> {
  const row = await queryOne<{ n: number }>(
    exec,
    sql`SELECT count(*)::int AS "n" FROM "UserBadge" ub JOIN "Badge" b ON b."id" = ub."badgeId"
         WHERE ub."userId" = ${userId} AND b."key" = ${key}`,
  );
  return (row?.n ?? 0) > 0;
}

/** `PUT /admin/users/:id/badges/:badgeKey` (grant) and `DELETE` (remove). */
export async function setManualBadge(
  ctx: Ctx,
  userId: number,
  badgeKey: ManualBadgeKey,
  granted: boolean,
): Promise<z.infer<typeof ManualBadgeDTO>> {
  await assertStaff(ctx, 'admin.awards');
  const now = ctx.clock.now();
  return ctx.db.transaction(async (tx) => {
    await assertUser(tx, userId);
    const changed = granted
      ? await grantManualBadge(tx, ctx.jobs, userId, badgeKey, now)
      : await removeBadge(tx, userId, badgeKey, '');
    if (changed) {
      await recordAudit(tx, ctx, {
        action: granted ? 'badge.grant' : 'badge.revoke',
        targetType: 'user',
        targetId: userId,
        after: { badgeKey, granted },
      });
    }
    return { userId, badgeKey, granted: await holdsBadge(tx, userId, badgeKey) };
  });
}
