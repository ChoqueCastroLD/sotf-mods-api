/**
 * Backfill B16 · retroactive gamification (PLAN §6.9, §7.2 "Lanzamiento"): legacy users start v2
 * with what they already earned.
 *
 * Steps, in one transaction (a dry run rolls everything back and only reports the counts):
 *
 * 1. Badge catalog sync.
 * 2. Retroactive XP from the history, with the daily caps applied per UTC day of each action:
 *    reviews with text, helpful votes, Field reports, comments marked as solution or pinned by the
 *    author, resolved bug reports, the first follow, the onboarding completion, Field reports that
 *    matched the consensus, every 10 kit followers and patch-day releases. (The address check of
 *    live votes cannot be applied retroactively: sessions older than v2 do not exist.)
 * 3. Every badge, **silently** (`badge.awarded.silent = true`: no individual signal), including
 *    `original-survivor-<year>` for accounts created before this run (the launch instant).
 * 4. Mod milestones with `reachedAt` from the daily series, silently.
 * 5. Creator tiers, `User.xp` and survivor ranks.
 * 6. The Mod of the Week of the current week, when none exists yet.
 * 7. One signal per user with badges: «Welcome to v2: you earned N badges» (`badge.awarded` with
 *    `data.welcome = true`, idempotent key `b16:welcome:<userId>`). Creators get the summary in
 *    their next weekly report email (opt-out), which lists the badges of the week.
 * 8. `"MigrationRun"` row `backfill:B16` (its start is the launch instant used afterwards).
 *
 * Idempotent: every insert is `ON CONFLICT DO NOTHING` or checks what exists, so a second run
 * changes nothing. Only v2 tables and v2 columns (`User.xp`, `User.onboarding` untouched) are
 * written. Run it after B1 and B11 (download history and stats).
 */
import { XP_RULES, type XpEventKind } from '@sotf/contracts/gamification';
import { type Executor, withTx } from '@sotf/db';
import { type SQL, sql } from 'drizzle-orm';
import { at, query, queryOne, toInt } from '../follows/sql.ts';
import { purge } from '../kernel/cache-tags.ts';
import type { Ctx } from '../kernel/context.ts';
import type { NotificationDraft } from '../notifications/rules.ts';
import { writeNotificationDrafts } from '../notifications/service.ts';
import { type ModOfWeekResult, modOfWeekInTx, weekStartOf } from './awards.ts';
import { launchCutoff, REVIEW_TEXT } from './badges.ts';
import { syncBadgeCatalog } from './catalog.ts';
import { evaluateAllBadges, grantConsensusXp, grantKitFollowerXp, grantPatchDayXp } from './evaluate.ts';
import { checkMilestones } from './milestones.ts';
import { refreshCreatorTiers } from './tiers.ts';
import { refreshAllXp } from './xp.ts';

export const B16_RUN_NAME = 'backfill:B16';

export interface B16Options {
  dryRun: boolean;
  /** Signals written per chunk (the notification writer's own transaction size). */
  batchSize?: number;
}

export interface B16Result {
  dryRun: boolean;
  launchCutoff: string;
  catalog: { upserted: number; retired: number };
  xp: Record<string, number>;
  badgesAwarded: number;
  milestones: number;
  tiersChanged: number;
  xpRowsChanged: number;
  modOfWeek: ModOfWeekResult | null;
  welcomeSignals: number;
  ms: number;
}

class DryRunRollback extends Error {
  readonly result: B16Result;
  constructor(result: B16Result) {
    super('B16 dry run: rolled back');
    this.result = result;
  }
}

/**
 * Inserts retroactive XP rows from `candidates` (columns `"userId"`, `"refType"`, `"refId"`,
 * `"at"` timestamptz), honouring the rule's daily cap per UTC day (existing rows count).
 */
async function retroXp(tx: Executor, kind: XpEventKind, candidates: SQL): Promise<number> {
  const rule = XP_RULES[kind];
  const cap = rule.dailyCap;
  const result = await tx.execute(sql`
    WITH cand AS (
      SELECT c."userId", c."refType", c."refId", c."at" FROM (${candidates}) c
       WHERE c."userId" IS NOT NULL
         AND NOT EXISTS (
           SELECT 1 FROM "XpEvent" e
            WHERE e."userId" = c."userId" AND e."kind" = ${kind} AND e."refType" = c."refType" AND e."refId" = c."refId")
    ), used AS (
      SELECT e."userId", date_trunc('day', e."createdAt") AS "day", count(*) AS n
        FROM "XpEvent" e WHERE e."kind" = ${kind} GROUP BY 1, 2
    ), ranked AS (
      SELECT c.*, row_number() OVER (PARTITION BY c."userId", date_trunc('day', c."at") ORDER BY c."at", c."refId") AS rn
        FROM cand c
    )
    INSERT INTO "XpEvent" ("userId", "kind", "points", "refType", "refId", "createdAt")
    SELECT r."userId", ${kind}, ${rule.points}, r."refType", r."refId", r."at"
      FROM ranked r
      LEFT JOIN used u ON u."userId" = r."userId" AND u."day" = date_trunc('day', r."at")
     WHERE ${cap === null ? sql`true` : sql`r.rn + coalesce(u.n, 0) <= ${cap}`}
    ON CONFLICT ("userId", "kind", "refType", "refId") DO NOTHING`);
  return result.rowCount ?? 0;
}

const RETRO_CANDIDATES: ReadonlyArray<{ kind: XpEventKind; sql: SQL }> = [
  {
    kind: 'review_with_text',
    sql: sql`
      SELECT r."userId", 'review' AS "refType", r."id"::text AS "refId", r."createdAt" AT TIME ZONE 'UTC' AS "at"
        FROM "ModReview" r JOIN "Mod" m ON m."id" = r."modId"
       WHERE r."status" = 'visible' AND r."userId" IS DISTINCT FROM m."userId" AND char_length(${REVIEW_TEXT}) >= 80`,
  },
  {
    kind: 'review_helpful_vote',
    sql: sql`
      SELECT r."userId", 'review_vote' AS "refType", v."reviewId"::text || ':' || v."userId"::text AS "refId",
             v."createdAt" AS "at"
        FROM "ReviewVote" v JOIN "ModReview" r ON r."id" = v."reviewId"
       WHERE v."value" = 1 AND r."status" = 'visible' AND v."userId" IS DISTINCT FROM r."userId"`,
  },
  {
    kind: 'compat_report',
    sql: sql`
      SELECT c."userId", 'compat_report' AS "refType", c."id"::text AS "refId", c."createdAt" AS "at"
        FROM "CompatReport" c
        JOIN "ModVersion" v ON v."id" = c."modVersionId" JOIN "Mod" m ON m."id" = v."modId"
       WHERE c."status" = 'visible' AND c."userId" IS DISTINCT FROM m."userId"`,
  },
  {
    kind: 'comment_solution_or_pinned',
    sql: sql`
      SELECT c."userId", 'comment' AS "refType", c."id"::text AS "refId", c."createdAt" AT TIME ZONE 'UTC' AS "at"
        FROM "Comment" c JOIN "Mod" m ON m."id" = c."modId"
       WHERE c."status" = 'visible' AND c."userId" IS DISTINCT FROM m."userId"
         AND (c."isSolution" OR (c."pinnedById" IS NOT NULL AND c."pinnedById" = m."userId"))`,
  },
  {
    kind: 'bug_report_resolved',
    sql: sql`
      SELECT c."userId", 'comment' AS "refType", c."id"::text AS "refId", c."createdAt" AT TIME ZONE 'UTC' AS "at"
        FROM "Comment" c JOIN "Mod" m ON m."id" = c."modId"
       WHERE c."status" = 'visible' AND c."userId" IS DISTINCT FROM m."userId"
         AND c."isBugReport" AND c."bugResolvedInVersionId" IS NOT NULL`,
  },
  {
    kind: 'first_follow',
    sql: sql`
      SELECT f."userId", 'user' AS "refType", f."userId"::text AS "refId", min(f."at") AS "at"
        FROM (
          SELECT "userId", "createdAt" AT TIME ZONE 'UTC' AS "at" FROM "ModFavorite" WHERE "userId" IS NOT NULL
          UNION ALL
          SELECT "followerId", "createdAt" FROM "UserFollow"
        ) f
       GROUP BY f."userId"`,
  },
  {
    kind: 'onboarding_completed',
    sql: sql`
      SELECT u."id" AS "userId", 'user' AS "refType", u."id"::text AS "refId",
             (u."onboarding"->>'completedAt')::timestamptz AS "at"
        FROM "User" u
       WHERE u."deletedAt" IS NULL AND (u."onboarding"->>'completedAt') IS NOT NULL`,
  },
];

async function welcomeSignals(tx: Executor, ctx: Ctx, batchSize: number): Promise<number> {
  const rows = await query<{ userId: number; badges: number; firstBadgeId: number }>(
    tx,
    sql`
      SELECT ub."userId", count(*) AS "badges", min(ub."badgeId") AS "firstBadgeId"
        FROM "UserBadge" ub
        JOIN "User" u ON u."id" = ub."userId" AND u."deletedAt" IS NULL AND u."bannedAt" IS NULL
        JOIN "Badge" b ON b."id" = ub."badgeId" AND b."retiredAt" IS NULL
       GROUP BY ub."userId"
       ORDER BY ub."userId"`,
  );
  const drafts: NotificationDraft[] = rows.map((r) => ({
    userId: Number(r.userId),
    type: 'badge.awarded',
    actorId: null,
    target: { type: 'badge', id: Number(r.firstBadgeId), title: 'welcome-v2', path: '/basecamp/badges' },
    groupKey: null,
    data: { welcome: true, badgeCount: toInt(r.badges) },
    dedupeKey: `b16:welcome:${Number(r.userId)}`,
  }));
  let created = 0;
  for (let i = 0; i < drafts.length; i += batchSize) {
    const result = await writeNotificationDrafts(tx, ctx, drafts.slice(i, i + batchSize), 'b16');
    created += result.created;
  }
  return created;
}

/** Runs B16. With `dryRun` everything is rolled back and only the counts are returned. */
export async function runB16(ctx: Ctx, options: B16Options): Promise<B16Result> {
  const started = ctx.clock.now();
  const batchSize = Math.max(100, Math.min(5000, options.batchSize ?? 2000));
  try {
    return await withTx(ctx.db, async (tx) => {
      await tx.execute(sql`SELECT pg_advisory_xact_lock(60003, 16)`);
      const cutoff = (await launchCutoff(tx)) ?? started;
      const catalog = await syncBadgeCatalog(tx);
      const xp: Record<string, number> = {};
      for (const retro of RETRO_CANDIDATES) xp[retro.kind] = await retroXp(tx, retro.kind, retro.sql);
      xp.compat_report_consensus = await grantConsensusXp(tx, started, null);
      xp.kit_followers_10 = await grantKitFollowerXp(tx, started);
      xp.patch_day_release = await grantPatchDayXp(tx, started);
      const xpRowsChanged = await refreshAllXp(tx);
      const badges = await evaluateAllBadges(tx, ctx, { silent: true, launchCutoff: cutoff });
      const milestones = await checkMilestones(tx, { jobs: ctx.jobs, now: started, silent: true });
      const tiers = await refreshCreatorTiers(tx);
      const modOfWeek = await modOfWeekInTx(tx, ctx, weekStartOf(started));
      const welcome = await welcomeSignals(tx, ctx, batchSize);
      const result: B16Result = {
        dryRun: options.dryRun,
        launchCutoff: cutoff.toISOString(),
        catalog,
        xp,
        badgesAwarded: badges.awarded,
        milestones: milestones.recorded,
        tiersChanged: tiers.length,
        xpRowsChanged,
        modOfWeek,
        welcomeSignals: welcome,
        ms: ctx.clock.now().getTime() - started.getTime(),
      };
      if (options.dryRun) throw new DryRunRollback(result);
      const rowsAffected =
        Object.values(xp).reduce((sum, n) => sum + n, 0) +
        badges.awarded +
        milestones.recorded +
        tiers.length +
        welcome;
      await tx.execute(sql`
        INSERT INTO "MigrationRun" ("name", "startedAt", "finishedAt", "rowsAffected", "notes")
        VALUES (${B16_RUN_NAME}, ${at(started)}, ${at(ctx.clock.now())}, ${rowsAffected},
                ${JSON.stringify({ ...result, modOfWeek: modOfWeek.status })}::jsonb)`);
      await purge(ctx.jobs, ['home', 'stats'], 'backfill:B16', { tx });
      return result;
    });
  } catch (error) {
    if (error instanceof DryRunRollback) return error.result;
    throw error;
  }
}

/** Whether B16 already ran (for runbooks and health checks). */
export async function b16Ran(exec: Executor): Promise<boolean> {
  const row = await queryOne<{ n: number }>(
    exec,
    sql`SELECT count(*) AS "n" FROM "MigrationRun" WHERE "name" = ${B16_RUN_NAME} AND "finishedAt" IS NOT NULL`,
  );
  return toInt(row?.n) > 0;
}
