/**
 * Editorial curation by admins (PLAN §7.2, §7.8, §7.4 "Admin"):
 *
 * - `PUT /admin/kits/:id/staff-pick`: features a public kit (landing «Esenciales para empezar»,
 *   the `/install` starter kit; `GET /kits?staffPick=1` lists them). Only live public kits can be
 *   featured; un-featuring always works. Emits `kit.updated` (the kit pages, the kit lists and the
 *   owner's profile are purged by the event subscriber).
 * - `PUT|DELETE /admin/users/:id/badges/:badgeKey` answer 410: badges were removed.
 *
 * 👑 admin with a session younger than 12 h; every change appends an `AuditLog` row. Idempotent.
 */
import type { KitStaffPickDTO, MANUAL_BADGE_KEYS, ManualBadgeDTO } from '@sotf/contracts/admin';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import { recordAudit } from '../audit/audit.ts';
import { queryOne } from '../follows/sql.ts';
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

/** `PUT /admin/users/:id/badges/:badgeKey` (grant) and `DELETE` (remove): badges were removed. */
export async function setManualBadge(
  _ctx: Ctx,
  _userId: number,
  _badgeKey: ManualBadgeKey,
  _granted: boolean,
): Promise<z.infer<typeof ManualBadgeDTO>> {
  throw errors.gone('Badges were removed');
}
