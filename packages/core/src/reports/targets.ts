/**
 * Report targets: existence and ownership checks, the public reference shown to rangers, and the
 * hide / restore primitives used by the automatic hide (≥ 3 reporters with trust level ≥ 1, PLAN
 * §7.4 "Reportes") and by `resolve {hideTarget: true}`.
 *
 * What "hidden" means per target type (always reversible, never a deletion):
 *
 * | Target | Hidden | Restored |
 * |---|---|---|
 * | comment | `status = 'hidden'` (counters, pins and signals follow) | `visible` |
 * | review | `status = 'hidden'` (rating counters follow) | `visible` |
 * | mod | `published` → `unlisted` (off listings and search; the page keeps working) | `published` |
 * | version | `active` → `pending` (held, no longer offered; latest recomputed) | `active` |
 * | kit | `public` → `unlisted` | `public` |
 * | compat_report | `status = 'hidden'` (out of the aggregate) | `visible` |
 * | request | `hiddenAt` set (404 on the public pages) | `hiddenAt` cleared |
 * | request_comment | `status = 'hidden'` (comment count follows) | `visible` |
 * | user | nothing (users are sanctioned, not hidden) | — |
 *
 * Restoring only undoes a hide done by this module (the target must still be in the hidden state
 * it left, and for mods and versions carry the hide reason), so it never overrides a later
 * decision of the author or a ranger.
 */
import type { ReportDTO } from '@sotf/contracts/moderation';
import { kitPath, modPath, profilePath } from '@sotf/contracts/seo';
import type { Transaction } from '@sotf/db';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import { refreshCommentCounters } from '../comments/service.ts';
import { queryOne } from '../follows/sql.ts';
import type { Ctx } from '../kernel/context.ts';
import { publishCacheInvalidation } from '../kernel/notify.ts';
import { kindOfType, utcTimestamp } from '../moderation/shared.ts';
import { modRouting } from '../publishing/context.ts';
import { recomputeLatest } from '../publishing/versions.ts';
import { refreshRequestCommentCount } from '../requests/service.ts';
import { refreshRatingCounters } from '../reviews/service.ts';

export type ReportTargetType = z.infer<typeof ReportDTO>['targetType'];

/** `statusReason` / `hiddenReason` written by a report hide (also how a restore recognises it). */
export const REPORT_HIDE_REASON = 'Hidden after several user reports, pending review';

export interface TargetInfo {
  /** Owner / author of the content (null when orphaned). */
  ownerId: number | null;
  /** Mod the content belongs to, if any. */
  modId: number | null;
  title: string;
  path: string | null;
  /** The target is gone (deleted comment, removed mod…): it cannot be reported any more. */
  gone: boolean;
}

interface Row {
  ownerId: number | null;
  modId: number | null;
  title: string;
  userSlug: string | null;
  slug: string | null;
  type: string | null;
  gone: boolean;
  extraId: number | null;
  kitSlug: string | null;
}

/** Facts of a report target, or null when it does not exist. */
export async function loadTarget(
  exec: Ctx['db'] | Transaction,
  type: ReportTargetType,
  id: number,
): Promise<TargetInfo | null> {
  let row: Row | null = null;
  switch (type) {
    case 'mod':
      row = await queryOne<Row>(
        exec,
        sql`SELECT m."userId" AS "ownerId", m."id" AS "modId", m."name" AS "title", u."slug" AS "userSlug", m."slug", m."type",
                   (m."status" IN ('removed', 'rejected')) AS "gone", NULL::int AS "extraId", NULL AS "kitSlug"
              FROM "Mod" m LEFT JOIN "User" u ON u."id" = m."userId" WHERE m."id" = ${id}`,
      );
      break;
    case 'version':
      row = await queryOne<Row>(
        exec,
        sql`SELECT m."userId" AS "ownerId", m."id" AS "modId", m."name" || ' ' || v."version" AS "title", u."slug" AS "userSlug",
                   m."slug", m."type", (m."status" IN ('removed', 'rejected') OR v."status" = 'rejected') AS "gone",
                   NULL::int AS "extraId", NULL AS "kitSlug"
              FROM "ModVersion" v JOIN "Mod" m ON m."id" = v."modId" LEFT JOIN "User" u ON u."id" = m."userId"
             WHERE v."id" = ${id}`,
      );
      break;
    case 'comment':
      row = await queryOne<Row>(
        exec,
        sql`SELECT c."userId" AS "ownerId", m."id" AS "modId", 'Comment on ' || m."name" AS "title", u."slug" AS "userSlug",
                   m."slug", m."type", (c."status" = 'deleted') AS "gone", c."id" AS "extraId", NULL AS "kitSlug"
              FROM "Comment" c JOIN "Mod" m ON m."id" = c."modId" LEFT JOIN "User" u ON u."id" = m."userId"
             WHERE c."id" = ${id}`,
      );
      break;
    case 'review':
      row = await queryOne<Row>(
        exec,
        sql`SELECT r."userId" AS "ownerId", m."id" AS "modId", 'Review of ' || coalesce(m."name", '?') AS "title",
                   u."slug" AS "userSlug", m."slug", m."type", (r."status" = 'deleted' OR m."id" IS NULL) AS "gone",
                   r."id" AS "extraId", NULL AS "kitSlug"
              FROM "ModReview" r LEFT JOIN "Mod" m ON m."id" = r."modId" LEFT JOIN "User" u ON u."id" = m."userId"
             WHERE r."id" = ${id}`,
      );
      break;
    case 'user':
      row = await queryOne<Row>(
        exec,
        sql`SELECT u."id" AS "ownerId", NULL::int AS "modId", coalesce(nullif(u."displayName", ''), u."name") AS "title",
                   u."slug" AS "userSlug", NULL AS "slug", NULL AS "type", (u."deletedAt" IS NOT NULL) AS "gone",
                   NULL::int AS "extraId", NULL AS "kitSlug"
              FROM "User" u WHERE u."id" = ${id}`,
      );
      break;
    case 'kit':
      row = await queryOne<Row>(
        exec,
        sql`SELECT k."ownerId", NULL::int AS "modId", 'Kit ' || k."name" AS "title", u."slug" AS "userSlug", NULL AS "slug",
                   NULL AS "type", (k."deletedAt" IS NOT NULL OR k."visibility" = 'private') AS "gone",
                   NULL::int AS "extraId", k."slug" AS "kitSlug"
              FROM "Kit" k JOIN "User" u ON u."id" = k."ownerId" WHERE k."id" = ${id}`,
      );
      break;
    case 'request':
      row = await queryOne<Row>(
        exec,
        sql`SELECT r."authorId" AS "ownerId", NULL::int AS "modId", 'Request: ' || r."title" AS "title", NULL AS "userSlug",
                   NULL AS "slug", NULL AS "type", (r."deletedAt" IS NOT NULL) AS "gone", r."id" AS "extraId",
                   NULL AS "kitSlug"
              FROM "ModRequest" r WHERE r."id" = ${id}`,
      );
      break;
    case 'request_comment':
      row = await queryOne<Row>(
        exec,
        sql`SELECT c."authorId" AS "ownerId", NULL::int AS "modId", 'Comment on request: ' || r."title" AS "title",
                   NULL AS "userSlug", NULL AS "slug", NULL AS "type",
                   (c."status" = 'deleted' OR r."deletedAt" IS NOT NULL) AS "gone", r."id" AS "extraId",
                   NULL AS "kitSlug"
              FROM "ModRequestComment" c JOIN "ModRequest" r ON r."id" = c."requestId" WHERE c."id" = ${id}`,
      );
      break;
    case 'compat_report':
      row = await queryOne<Row>(
        exec,
        sql`SELECT cr."userId" AS "ownerId", m."id" AS "modId",
                   'Compatibility report on ' || m."name" || ' ' || v."version" AS "title", u."slug" AS "userSlug",
                   m."slug", m."type", false AS "gone", NULL::int AS "extraId", NULL AS "kitSlug"
              FROM "CompatReport" cr JOIN "ModVersion" v ON v."id" = cr."modVersionId" JOIN "Mod" m ON m."id" = v."modId"
              LEFT JOIN "User" u ON u."id" = m."userId"
             WHERE cr."id" = ${id}`,
      );
      break;
  }
  if (!row) return null;
  const base = row.userSlug && row.slug ? modPath(kindOfType(row.type), row.userSlug, row.slug) : null;
  let path: string | null = base;
  if (type === 'comment' && base) path = `${base}#c-${id}`;
  if (type === 'review' && base) path = `${base}#review-${id}`;
  if (type === 'compat_report' && base) path = `${base}#compat`;
  if (type === 'request') path = `/requests/${id}`;
  if (type === 'request_comment' && row.extraId !== null) path = `/requests/${row.extraId}#c-${id}`;
  if (type === 'user') path = row.userSlug ? profilePath(row.userSlug) : null;
  if (type === 'kit') path = row.userSlug && row.kitSlug ? kitPath(row.userSlug, row.kitSlug) : null;
  return {
    ownerId: row.ownerId,
    modId: row.modId,
    title: row.title.slice(0, 300),
    path,
    gone: row.gone === true,
  };
}

async function rootOf(tx: Transaction, commentId: number): Promise<number> {
  const row = await queryOne<{ root: number }>(
    tx,
    sql`SELECT coalesce(p."replyId", c."replyId", c."id") AS "root"
          FROM "Comment" c LEFT JOIN "Comment" p ON p."id" = c."replyId" WHERE c."id" = ${commentId}`,
  );
  return row?.root ?? commentId;
}

/**
 * Hides a report target (see the table above). Returns true when something changed. `actorId` is
 * null for the automatic hide.
 */
export async function hideTarget(
  ctx: Ctx,
  tx: Transaction,
  type: ReportTargetType,
  id: number,
  reason: string,
  actorId: number | null,
): Promise<boolean> {
  const now = ctx.clock.now();
  switch (type) {
    case 'comment': {
      const c = await queryOne<{ modId: number; userId: number | null }>(
        tx,
        sql`UPDATE "Comment" SET "status" = 'hidden', "isHidden" = true, "hiddenReason" = ${reason},
                   "pinnedAt" = NULL, "pinnedById" = NULL
             WHERE "id" = ${id} AND "status" = 'visible'
         RETURNING "modId", "userId"`,
      );
      if (!c) return false;
      await refreshCommentCounters(tx, c.modId, [await rootOf(tx, id)]);
      if (c.userId !== null) {
        await ctx.jobs.emitNew(
          tx,
          'comment.visibility_changed',
          { commentId: id, modId: c.modId, authorId: c.userId, hidden: true },
          { actorId },
        );
      }
      await publishCacheInvalidation(tx, [`mod:${c.modId}`]);
      return true;
    }
    case 'review': {
      const r = await queryOne<{ modId: number | null; userId: number | null }>(
        tx,
        sql`UPDATE "ModReview" SET "status" = 'hidden', "isHidden" = true
             WHERE "id" = ${id} AND "status" = 'visible'
         RETURNING "modId", "userId"`,
      );
      if (!r) return false;
      if (r.modId !== null) {
        await refreshRatingCounters(tx, r.modId);
        if (r.userId !== null) {
          await ctx.jobs.emitNew(
            tx,
            'review.visibility_changed',
            { reviewId: id, modId: r.modId, authorId: r.userId, hidden: true },
            { actorId },
          );
        }
        await publishCacheInvalidation(tx, [`mod:${r.modId}`]);
      }
      return true;
    }
    case 'mod': {
      const m = await queryOne<{ id: number; userId: number | null; type: string | null }>(
        tx,
        sql`UPDATE "Mod" SET "status" = 'unlisted', "statusReason" = ${reason}, "statusChangedAt" = ${utcTimestamp(now)}
             WHERE "id" = ${id} AND "status" = 'published'
         RETURNING "id", "userId", "type"`,
      );
      if (!m) return false;
      const routing = await modRouting(tx, id);
      await ctx.jobs.emitNew(
        tx,
        'mod.status_changed',
        {
          modId: id,
          authorId: routing.authorId,
          kind: routing.kind,
          categorySlug: routing.categorySlug,
          from: 'published',
          to: 'unlisted',
          reason,
          templateKey: null,
        },
        { actorId },
      );
      await publishCacheInvalidation(tx, [`mod:${id}`, 'list:mods', 'list:builds', 'search-index', 'home']);
      return true;
    }
    case 'version': {
      const v = await queryOne<{ modId: number; type: string | null }>(
        tx,
        sql`UPDATE "ModVersion" v SET "status" = 'pending', "statusReason" = ${reason}, "updatedAt" = ${utcTimestamp(now)}
              FROM "Mod" m
             WHERE v."id" = ${id} AND v."status" = 'active' AND m."id" = v."modId"
         RETURNING v."modId", m."type"`,
      );
      if (!v) return false;
      await recomputeLatest(tx, v.modId, kindOfType(v.type));
      const routing = await modRouting(tx, v.modId);
      await ctx.jobs.emitNew(
        tx,
        'version.status_changed',
        {
          modId: v.modId,
          authorId: routing.authorId,
          kind: routing.kind,
          categorySlug: routing.categorySlug,
          versionId: id,
          from: 'active',
          to: 'pending',
          reason,
        },
        { actorId },
      );
      await publishCacheInvalidation(tx, [`mod:${v.modId}`, 'list:mods', 'list:builds']);
      return true;
    }
    case 'kit': {
      const k = await queryOne<{ ownerId: number; revision: number }>(
        tx,
        sql`UPDATE "Kit" SET "visibility" = 'unlisted', "updatedAt" = now()
             WHERE "id" = ${id} AND "visibility" = 'public' AND "deletedAt" IS NULL
         RETURNING "ownerId", "revision"`,
      );
      if (!k) return false;
      await ctx.jobs.emitNew(
        tx,
        'kit.updated',
        { kitId: id, ownerId: k.ownerId, visibility: 'unlisted', revision: Math.max(1, k.revision) },
        { actorId },
      );
      await publishCacheInvalidation(tx, [`kit:${id}`, 'list:kits']);
      return true;
    }
    case 'compat_report': {
      const r = await queryOne<{ modVersionId: number; gameBuildId: number }>(
        tx,
        sql`UPDATE "CompatReport" SET "status" = 'hidden', "updatedAt" = now()
             WHERE "id" = ${id} AND "status" = 'visible'
         RETURNING "modVersionId", "gameBuildId"`,
      );
      if (!r) return false;
      await ctx.jobs.enqueue('compat.aggregate', { modVersionId: r.modVersionId, gameBuildId: r.gameBuildId }, { tx });
      return true;
    }
    case 'request': {
      const r = await queryOne<{ id: number }>(
        tx,
        sql`UPDATE "ModRequest" SET "hiddenAt" = ${now}, "hiddenReason" = ${reason}, "updatedAt" = ${now}
             WHERE "id" = ${id} AND "hiddenAt" IS NULL AND "deletedAt" IS NULL
         RETURNING "id"`,
      );
      if (!r) return false;
      await ctx.jobs.emitNew(tx, 'request.changed', { requestId: id }, { actorId });
      await publishCacheInvalidation(tx, ['list:requests', `request:${id}`]);
      return true;
    }
    case 'request_comment': {
      const c = await queryOne<{ requestId: number }>(
        tx,
        sql`UPDATE "ModRequestComment" SET "status" = 'hidden'
             WHERE "id" = ${id} AND "status" = 'visible'
         RETURNING "requestId"`,
      );
      if (!c) return false;
      await refreshRequestCommentCount(tx, c.requestId);
      await ctx.jobs.emitNew(tx, 'request.changed', { requestId: c.requestId }, { actorId });
      await publishCacheInvalidation(tx, ['list:requests', `request:${c.requestId}`]);
      return true;
    }
    case 'user':
      return false;
  }
}

/** Undoes a report hide (only when the target is still in the state the hide left). */
export async function restoreTarget(
  ctx: Ctx,
  tx: Transaction,
  type: ReportTargetType,
  id: number,
  actorId: number | null,
): Promise<boolean> {
  const now = ctx.clock.now();
  switch (type) {
    case 'comment': {
      const c = await queryOne<{ modId: number; userId: number | null }>(
        tx,
        sql`UPDATE "Comment" SET "status" = 'visible', "isHidden" = false, "hiddenReason" = NULL
             WHERE "id" = ${id} AND "status" = 'hidden' AND "hiddenReason" = ${REPORT_HIDE_REASON}
         RETURNING "modId", "userId"`,
      );
      if (!c) return false;
      await refreshCommentCounters(tx, c.modId, [await rootOf(tx, id)]);
      if (c.userId !== null) {
        await ctx.jobs.emitNew(
          tx,
          'comment.visibility_changed',
          { commentId: id, modId: c.modId, authorId: c.userId, hidden: false },
          { actorId },
        );
      }
      await publishCacheInvalidation(tx, [`mod:${c.modId}`]);
      return true;
    }
    case 'review': {
      const r = await queryOne<{ modId: number | null; userId: number | null }>(
        tx,
        sql`UPDATE "ModReview" SET "status" = 'visible', "isHidden" = false
             WHERE "id" = ${id} AND "status" = 'hidden'
         RETURNING "modId", "userId"`,
      );
      if (!r) return false;
      if (r.modId !== null) {
        await refreshRatingCounters(tx, r.modId);
        if (r.userId !== null) {
          await ctx.jobs.emitNew(
            tx,
            'review.visibility_changed',
            { reviewId: id, modId: r.modId, authorId: r.userId, hidden: false },
            { actorId },
          );
        }
        await publishCacheInvalidation(tx, [`mod:${r.modId}`]);
      }
      return true;
    }
    case 'mod': {
      const m = await queryOne<{ id: number }>(
        tx,
        sql`UPDATE "Mod" SET "status" = 'published', "statusReason" = NULL, "statusChangedAt" = ${utcTimestamp(now)}
             WHERE "id" = ${id} AND "status" = 'unlisted' AND "statusReason" = ${REPORT_HIDE_REASON}
         RETURNING "id"`,
      );
      if (!m) return false;
      const routing = await modRouting(tx, id);
      await ctx.jobs.emitNew(
        tx,
        'mod.status_changed',
        {
          modId: id,
          authorId: routing.authorId,
          kind: routing.kind,
          categorySlug: routing.categorySlug,
          from: 'unlisted',
          to: 'published',
          reason: null,
          templateKey: null,
        },
        { actorId },
      );
      await publishCacheInvalidation(tx, [`mod:${id}`, 'list:mods', 'list:builds', 'search-index', 'home']);
      return true;
    }
    case 'version': {
      const v = await queryOne<{ modId: number; type: string | null }>(
        tx,
        sql`UPDATE "ModVersion" v SET "status" = 'active', "statusReason" = NULL, "updatedAt" = ${utcTimestamp(now)}
              FROM "Mod" m
             WHERE v."id" = ${id} AND v."status" = 'pending' AND v."statusReason" = ${REPORT_HIDE_REASON} AND m."id" = v."modId"
         RETURNING v."modId", m."type"`,
      );
      if (!v) return false;
      await recomputeLatest(tx, v.modId, kindOfType(v.type));
      const routing = await modRouting(tx, v.modId);
      await ctx.jobs.emitNew(
        tx,
        'version.status_changed',
        {
          modId: v.modId,
          authorId: routing.authorId,
          kind: routing.kind,
          categorySlug: routing.categorySlug,
          versionId: id,
          from: 'pending',
          to: 'active',
          reason: null,
        },
        { actorId },
      );
      await publishCacheInvalidation(tx, [`mod:${v.modId}`, 'list:mods', 'list:builds']);
      return true;
    }
    case 'kit': {
      const k = await queryOne<{ ownerId: number; revision: number }>(
        tx,
        sql`UPDATE "Kit" SET "visibility" = 'public', "updatedAt" = now()
             WHERE "id" = ${id} AND "visibility" = 'unlisted' AND "deletedAt" IS NULL
         RETURNING "ownerId", "revision"`,
      );
      if (!k) return false;
      await ctx.jobs.emitNew(
        tx,
        'kit.updated',
        { kitId: id, ownerId: k.ownerId, visibility: 'public', revision: Math.max(1, k.revision) },
        { actorId },
      );
      await publishCacheInvalidation(tx, [`kit:${id}`, 'list:kits']);
      return true;
    }
    case 'compat_report': {
      const r = await queryOne<{ modVersionId: number; gameBuildId: number }>(
        tx,
        sql`UPDATE "CompatReport" SET "status" = 'visible', "updatedAt" = now()
             WHERE "id" = ${id} AND "status" = 'hidden'
         RETURNING "modVersionId", "gameBuildId"`,
      );
      if (!r) return false;
      await ctx.jobs.enqueue('compat.aggregate', { modVersionId: r.modVersionId, gameBuildId: r.gameBuildId }, { tx });
      return true;
    }
    case 'request': {
      const r = await queryOne<{ id: number }>(
        tx,
        sql`UPDATE "ModRequest" SET "hiddenAt" = NULL, "hiddenReason" = NULL, "updatedAt" = ${now}
             WHERE "id" = ${id} AND "hiddenAt" IS NOT NULL AND "deletedAt" IS NULL
               AND "hiddenReason" = ${REPORT_HIDE_REASON}
         RETURNING "id"`,
      );
      if (!r) return false;
      await ctx.jobs.emitNew(tx, 'request.changed', { requestId: id }, { actorId });
      await publishCacheInvalidation(tx, ['list:requests', `request:${id}`]);
      return true;
    }
    case 'request_comment': {
      const c = await queryOne<{ requestId: number }>(
        tx,
        sql`UPDATE "ModRequestComment" SET "status" = 'visible'
             WHERE "id" = ${id} AND "status" = 'hidden'
         RETURNING "requestId"`,
      );
      if (!c) return false;
      await refreshRequestCommentCount(tx, c.requestId);
      await ctx.jobs.emitNew(tx, 'request.changed', { requestId: c.requestId }, { actorId });
      await publishCacheInvalidation(tx, ['list:requests', `request:${c.requestId}`]);
      return true;
    }
    case 'user':
      return false;
  }
}
