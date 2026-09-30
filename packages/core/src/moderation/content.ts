/**
 * Hiding and unhiding community content from Ranger Station (PLAN §7.4, §7.6, §7.7):
 * `POST /ranger/comments/:id/hide|unhide`, `POST /ranger/reviews/:id/hide|unhide`.
 *
 * The visibility switch itself belongs to the comments and reviews domains
 * (`setCommentVisibility` / `setReviewVisibility`: counters, pins, events, signal retraction;
 * unhiding a held `pending` comment publishes it and notifies its mentions). This layer adds the
 * 12 h re-authentication, the `AuditLog` row with the reason, and the new counts of the
 * `comments` lane for the other rangers.
 */
import type { HiddenStateDTO } from '@sotf/contracts/moderation';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import { recordAudit } from '../audit/audit.ts';
import { setCommentVisibility } from '../comments/service.ts';
import { queryOne } from '../follows/sql.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { setReviewVisibility } from '../reviews/service.ts';
import { assertStaff } from './guard.ts';
import { publishLaneCounts } from './lanes.ts';
import type { ModerationDeps } from './shared.ts';

type HiddenState = z.infer<typeof HiddenStateDTO>;

/** `POST /ranger/comments/:id/hide` and `/unhide`. */
export async function setCommentHidden(
  ctx: Ctx,
  deps: ModerationDeps,
  id: number,
  hidden: boolean,
  reason: string | null,
): Promise<HiddenState> {
  await assertStaff(ctx, 'moderation.hide_content');
  const before = await queryOne<{ status: string; hiddenReason: string | null; modId: number }>(
    ctx.db,
    sql`SELECT "status", "hiddenReason", "modId" FROM "Comment" WHERE "id" = ${id}`,
  );
  if (!before || before.status === 'deleted') throw errors.notFound('Comment');
  await setCommentVisibility(ctx, { config: deps.config }, id, { hidden, reason });
  const after = await queryOne<{ status: string; hiddenReason: string | null }>(
    ctx.db,
    sql`SELECT "status", "hiddenReason" FROM "Comment" WHERE "id" = ${id}`,
  );
  const status = after?.status ?? (hidden ? 'hidden' : 'visible');
  await ctx.db.transaction(async (tx) => {
    await recordAudit(tx, ctx, {
      action: before.status === 'pending' && !hidden ? 'comment.approve' : hidden ? 'comment.hide' : 'comment.unhide',
      targetType: 'comment',
      targetId: id,
      before: { status: before.status, hiddenReason: before.hiddenReason },
      after: { status, hiddenReason: after?.hiddenReason ?? null },
      reason,
    });
    if (before.status === 'pending' || status === 'pending') await publishLaneCounts(tx, ctx.clock.now(), ['comments']);
  });
  return { targetType: 'comment', targetId: id, status, hiddenReason: after?.hiddenReason ?? null };
}

/** `POST /ranger/reviews/:id/hide` and `/unhide` (the reason lives in the audit log). */
export async function setReviewHidden(
  ctx: Ctx,
  deps: ModerationDeps,
  id: number,
  hidden: boolean,
  reason: string | null,
): Promise<HiddenState> {
  await assertStaff(ctx, 'moderation.hide_content');
  const before = await queryOne<{ status: string }>(ctx.db, sql`SELECT "status" FROM "ModReview" WHERE "id" = ${id}`);
  if (!before || before.status === 'deleted') throw errors.notFound('Review');
  await setReviewVisibility(ctx, deps.config, id, hidden);
  const status = hidden ? 'hidden' : 'visible';
  await ctx.db.transaction(async (tx) => {
    await recordAudit(tx, ctx, {
      action: hidden ? 'review.hide' : 'review.unhide',
      targetType: 'review',
      targetId: id,
      before: { status: before.status },
      after: { status },
      reason,
    });
  });
  return { targetType: 'review', targetId: id, status, hiddenReason: hidden ? reason : null };
}
