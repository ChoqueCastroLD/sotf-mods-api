/**
 * B19 · every existing version of a legacy-approved mod is approved (owner decision, 2026-10).
 *
 * The old site approved a *mod*; v2 reviews *versions* (`"ModVersion"."status"` `pending` →
 * `active`, `checksStatus`, moderation lanes `versions` and `post_review`). Only versions uploaded
 * from now on go through review: this backfill approves, once, every version that exists at the
 * moment of the run (`"createdAt" <=` the run's cutoff, stored in the notes) of every mod whose
 * legacy flag `"isApproved"` is true.
 *
 * Per version (mods with `isApproved = false`, i.e. everything still `pending`, archived, removed
 * or rejected, are never touched):
 * - `status = 'pending'` (held for review) → `active`, `statusReason = NULL`, `publishedAt` kept
 *   or set to `createdAt`; `checksStatus` → `passed` unless the inspection `failed` (those stay
 *   held and are counted in `notes.heldFailed`).
 * - `status = 'active'` with `checksStatus` NULL or `pending` → `passed`.
 * - `rejected`, `yanked` and `file_missing` versions are deliberate decisions: left alone.
 * - A moderation `AuditLog` row (`version.approve`, actor NULL, reason `B19 …`) is written for
 *   every activated version and for the recent ones still listed in the `post_review` lane, so
 *   they leave the moderation queue.
 * - `isLatest`, `"Mod"."latestVersion"`, the dependency CSV and `lastReleasedAt` are recomputed
 *   for the mods whose set of active versions changed (same rules as `recomputeLatest`). No event
 *   is emitted: nobody is notified about versions that have been online for a long time.
 * - Every changed column is recorded in `"DataFixAudit"` (`fixId = 'B19'`), so
 *   `pnpm db:revert-fix B19` restores the previous values (columns changed since are reported as
 *   conflicts). The audit-log rows are not reverted.
 * - After the last batch (real runs only) a cache invalidation is published for the touched mods.
 *
 * Idempotent: a second run finds nothing to do. Not part of `--all`/`--delta`: run it by name
 * (`B19 --dry-run`, then `B19 --confirm sotf_mods`).
 */
import { sortVersionsNewestFirst } from '@sotf/core/catalog/semver';
import type { Backfill, BackfillContext } from './framework.ts';

export const B19_FIX_ID = 'B19';
const REASON = 'B19: every existing version of a legacy-approved mod is approved (owner decision)';
const POST_REVIEW_WINDOW_DAYS = 30;
const CACHE_CHANNEL = 'cache';
const CACHE_TAGS_PER_NOTIFY = 100;

interface Target {
  id: number;
  modId: number;
  oldStatus: string;
  oldStatusReason: string | null;
  oldChecks: string | null;
  oldPublishedAt: string | null;
  newStatus: string;
  newStatusReason: string | null;
  newChecks: string;
  newPublishedAt: string | null;
}

interface AuditEntry {
  table: string;
  rowId: number;
  column: string;
  oldValue: unknown;
  newValue: unknown;
}

async function writeAudit(ctx: BackfillContext, entries: AuditEntry[]): Promise<void> {
  if (entries.length === 0) return;
  await ctx.client.query(
    `INSERT INTO "DataFixAudit" ("fixId", "tableName", "rowId", "columnName", "oldValue", "newValue")
     SELECT $1, e."table", e."rowId"::text, e."column", e."oldValue", e."newValue"
       FROM jsonb_to_recordset($2::jsonb) AS e("table" text, "rowId" int, "column" text, "oldValue" jsonb, "newValue" jsonb)`,
    [B19_FIX_ID, JSON.stringify(entries)],
  );
}

/** Recomputes the latest version of a mod (mirror of `recomputeLatest` in `@sotf/core`). */
async function recomputeLatest(
  ctx: BackfillContext,
  modId: number,
  isBuild: boolean,
  activated: ReadonlySet<number>,
): Promise<boolean> {
  const { client } = ctx;
  const { rows } = await client.query<{
    id: number;
    version: string;
    createdAt: Date;
    isLatest: boolean;
    logColor: string | null;
  }>(
    `SELECT "id", "version", "createdAt", "isLatest",
            CASE WHEN jsonb_typeof("manifest" -> 'logColor') = 'string' THEN "manifest" ->> 'logColor' END AS "logColor"
       FROM "ModVersion" WHERE "modId" = $1 AND "status" = 'active'`,
    [modId],
  );
  const best = sortVersionsNewestFirst(rows, isBuild)[0];
  if (!best) return false;
  const { rows: current } = await client.query<{ latestVersion: string | null; dependencies: string | null }>(
    `SELECT "latestVersion", "dependencies" FROM "Mod" WHERE "id" = $1 FOR UPDATE`,
    [modId],
  );
  const before = current[0];
  const audit: AuditEntry[] = [];
  if (!best.isLatest) {
    const { rows: previous } = await client.query<{ id: number }>(
      `UPDATE "ModVersion" SET "isLatest" = false WHERE "modId" = $1 AND "isLatest" AND "id" <> $2 RETURNING "id"`,
      [modId, best.id],
    );
    await client.query(`UPDATE "ModVersion" SET "isLatest" = true WHERE "id" = $1`, [best.id]);
    for (const p of previous) {
      audit.push({ table: 'ModVersion', rowId: p.id, column: 'isLatest', oldValue: true, newValue: false });
    }
    audit.push({ table: 'ModVersion', rowId: best.id, column: 'isLatest', oldValue: false, newValue: true });
  }
  let dependencies = before?.dependencies ?? '';
  if (!isBuild) {
    const { rows: deps } = await client.query<{ depManifestId: string }>(
      `SELECT "depManifestId" FROM "ModDependency" WHERE "modVersionId" = $1 AND "kind" = 'required' ORDER BY "id"`,
      [best.id],
    );
    dependencies = deps.map((d) => d.depManifestId).join(',');
  }
  if (before?.latestVersion !== best.version) {
    audit.push({
      table: 'Mod',
      rowId: modId,
      column: 'latestVersion',
      oldValue: before?.latestVersion ?? null,
      newValue: best.version,
    });
  }
  if ((before?.dependencies ?? '') !== dependencies) {
    audit.push({
      table: 'Mod',
      rowId: modId,
      column: 'dependencies',
      oldValue: before?.dependencies ?? null,
      newValue: dependencies,
    });
  }
  await client.query(
    `UPDATE "Mod" SET "latestVersion" = $2, "dependencies" = $3, "logColor" = coalesce($4, "logColor"),
            "lastReleasedAt" = CASE WHEN $5 THEN greatest(coalesce("lastReleasedAt", c."createdAt"), c."createdAt")
                                    ELSE "lastReleasedAt" END
      FROM (SELECT "createdAt" FROM "ModVersion" WHERE "id" = $6) c
      WHERE "Mod"."id" = $1`,
    [modId, best.version, dependencies, best.logColor, activated.has(best.id), best.id],
  );
  await writeAudit(ctx, audit);
  return audit.length > 0;
}

export const b19: Backfill = {
  id: 'B19',
  title: 'approve every existing version of legacy-approved mods (audited, opt-in)',
  touchesLegacy: true,
  delta: false,
  checksumSql: `SELECT md5(coalesce(string_agg("id"::text || ':' || "status" || ':' || coalesce("checksStatus", '~') || ':' || "isLatest"::text, ',' ORDER BY "id"), '')) AS checksum FROM "ModVersion"`,
  async run(ctx) {
    const { client } = ctx;
    const { rows: clock } = await client.query<{ cutoff: string }>(
      `SELECT to_char(now() AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.US') AS cutoff`,
    );
    const cutoff = (clock[0] as { cutoff: string }).cutoff;
    ctx.notes.cutoff = `${cutoff}Z`;

    let cursor = 0;
    let activated = 0;
    let checksFixed = 0;
    let queueCleared = 0;
    let latestChanged = 0;
    const touchedMods = new Set<number>();
    const touchedUsers = new Set<number>();

    for (;;) {
      const { rows: mods } = await client.query<{ id: number }>(
        `SELECT "id" FROM "Mod" WHERE "isApproved" AND "id" > $1 ORDER BY "id" LIMIT $2`,
        [cursor, ctx.batchSize],
      );
      if (mods.length === 0) break;
      cursor = mods[mods.length - 1]?.id as number;
      const modIds = mods.map((m) => m.id);

      const result = await ctx.batch(async () => {
        const { rows: targets } = await client.query<Target>(
          `WITH t AS (
             SELECT v."id", v."modId", v."status", v."statusReason", v."checksStatus", v."publishedAt"
               FROM "ModVersion" v JOIN "Mod" m ON m."id" = v."modId"
              WHERE m."id" = ANY($1::int[]) AND m."isApproved" AND v."createdAt" <= $2::timestamp
                AND ((v."status" = 'pending' AND coalesce(v."checksStatus", 'pending') <> 'failed')
                     OR (v."status" = 'active' AND coalesce(v."checksStatus", 'pending') = 'pending'))
                FOR UPDATE OF v
           )
           UPDATE "ModVersion" v SET
               "status" = 'active',
               "statusReason" = CASE WHEN t."status" = 'pending' THEN NULL ELSE v."statusReason" END,
               "checksStatus" = 'passed',
               "publishedAt" = CASE WHEN t."status" = 'pending' THEN coalesce(v."publishedAt", v."createdAt") ELSE v."publishedAt" END,
               "updatedAt" = now() AT TIME ZONE 'UTC'
             FROM t WHERE v."id" = t."id"
           RETURNING v."id", v."modId", t."status" AS "oldStatus", t."statusReason" AS "oldStatusReason",
                     t."checksStatus" AS "oldChecks", t."publishedAt"::text AS "oldPublishedAt",
                     v."status" AS "newStatus", v."statusReason" AS "newStatusReason",
                     v."checksStatus" AS "newChecks", v."publishedAt"::text AS "newPublishedAt"`,
          [modIds, cutoff],
        );

        const audit: AuditEntry[] = [];
        const approvals: Array<{ id: number; before: unknown; after: unknown }> = [];
        const activatedIds = new Set<number>();
        for (const t of targets) {
          const row = (column: string, oldValue: unknown, newValue: unknown) => {
            if (oldValue !== newValue) audit.push({ table: 'ModVersion', rowId: t.id, column, oldValue, newValue });
          };
          row('status', t.oldStatus, t.newStatus);
          row('statusReason', t.oldStatusReason, t.newStatusReason);
          row('checksStatus', t.oldChecks, t.newChecks);
          row('publishedAt', t.oldPublishedAt, t.newPublishedAt);
          if (t.oldStatus === 'pending') {
            activatedIds.add(t.id);
            approvals.push({ id: t.id, before: { status: 'pending' }, after: { status: 'active' } });
          }
        }
        await writeAudit(ctx, audit);
        if (approvals.length > 0) {
          await client.query(
            `INSERT INTO "AuditLog" ("actorId", "action", "targetType", "targetId", "before", "after", "reason")
             SELECT NULL, 'version.approve', 'version', a."id", a."before", a."after", $2
               FROM jsonb_to_recordset($1::jsonb) AS a("id" int, "before" jsonb, "after" jsonb)`,
            [JSON.stringify(approvals), REASON],
          );
        }

        // Recent versions of these mods still listed in the post-review lane leave the queue.
        const cleared = await client.query(
          `INSERT INTO "AuditLog" ("actorId", "action", "targetType", "targetId", "before", "after", "reason")
           SELECT NULL, 'version.approve', 'version', v."id", NULL, NULL, $3
             FROM "ModVersion" v JOIN "Mod" m ON m."id" = v."modId"
            WHERE m."id" = ANY($1::int[]) AND m."isApproved" AND v."createdAt" <= $2::timestamp
              AND v."status" = 'active' AND v."publishedById" IS NOT NULL
              AND v."publishedAt" >= (now() AT TIME ZONE 'UTC') - make_interval(days => ${POST_REVIEW_WINDOW_DAYS})
              AND NOT EXISTS (SELECT 1 FROM "User" p WHERE p."id" = v."publishedById" AND p."role" IN ('moderator', 'admin'))
              AND NOT EXISTS (SELECT 1 FROM "AuditLog" a WHERE a."targetType" = 'version' AND a."targetId" = v."id"
                                AND a."action" IN ('version.post_review_approve', 'version.approve', 'version.reject', 'version.remove'))
           RETURNING "targetId"`,
          [modIds, cutoff, REASON],
        );

        const byMod = new Map<number, Set<number>>();
        for (const id of activatedIds) {
          const modId = targets.find((t) => t.id === id)?.modId as number;
          byMod.set(modId, (byMod.get(modId) ?? new Set()).add(id));
        }
        let latest = 0;
        if (byMod.size > 0) {
          const { rows: kinds } = await client.query<{ id: number; type: string | null; userId: number | null }>(
            `SELECT "id", "type", "userId" FROM "Mod" WHERE "id" = ANY($1::int[])`,
            [[...byMod.keys()]],
          );
          for (const k of kinds) {
            if (await recomputeLatest(ctx, k.id, k.type === 'Build', byMod.get(k.id) ?? new Set())) latest += 1;
            touchedMods.add(k.id);
            if (k.userId !== null) touchedUsers.add(k.userId);
          }
        }
        return {
          activated: approvals.length,
          checks: targets.length - approvals.length,
          cleared: cleared.rowCount ?? 0,
          latest,
        };
      });
      activated += result.activated;
      queueCleared += result.cleared;
      latestChanged += result.latest;
      checksFixed += result.checks;
    }

    const { rows: held } = await client.query<{ failed: string; rejected: string; yanked: string; missing: string }>(
      `SELECT count(*) FILTER (WHERE v."status" = 'pending' AND v."checksStatus" = 'failed') AS "failed",
              count(*) FILTER (WHERE v."status" = 'rejected') AS "rejected",
              count(*) FILTER (WHERE v."status" = 'yanked') AS "yanked",
              count(*) FILTER (WHERE v."status" = 'file_missing') AS "missing"
         FROM "ModVersion" v JOIN "Mod" m ON m."id" = v."modId" WHERE m."isApproved"`,
    );
    ctx.notes.activated = activated;
    ctx.notes.checksFixed = checksFixed;
    ctx.notes.queueCleared = queueCleared;
    ctx.notes.latestChanged = latestChanged;
    ctx.notes.heldFailed = Number(held[0]?.failed ?? 0);
    ctx.notes.leftAlone = {
      rejected: Number(held[0]?.rejected ?? 0),
      yanked: Number(held[0]?.yanked ?? 0),
      file_missing: Number(held[0]?.missing ?? 0),
    };
    ctx.notes.mods = touchedMods.size;

    if (!ctx.dryRun && touchedMods.size > 0) {
      const tags = [
        ...[...touchedMods].map((id) => `mod:${id}`),
        ...[...touchedUsers].map((id) => `user:${id}`),
        'list:mods',
        'list:builds',
      ];
      for (let i = 0; i < tags.length; i += CACHE_TAGS_PER_NOTIFY) {
        await client.query('SELECT pg_notify($1, $2)', [
          CACHE_CHANNEL,
          JSON.stringify({ tags: tags.slice(i, i + CACHE_TAGS_PER_NOTIFY) }),
        ]);
      }
    }
    return activated + checksFixed + queueCleared;
  },
};
