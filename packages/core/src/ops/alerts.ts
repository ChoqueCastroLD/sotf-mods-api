/**
 * `ops.alerts` (every 5 minutes; PLAN §10.3 «Alertas (email al admin vía worker)», backlog WP-A4):
 *
 * - `dead_letter`: jobs waiting in the dead-letter queue (retries exhausted) > 0;
 * - `http_5xx`: 5xx > 1 % of the API responses of the last 5 minutes (`http_status` counters of
 *   `./http-status.ts`, at least 50 responses so a single failure on an idle night is not a page);
 * - `invariants`: the latest `db:invariants` run (a `"MigrationRun"` row named `invariants` whose
 *   `notes.ok` is false) is red, or the last green run is older than 26 h when runs exist;
 * - `kelvinseek_budget`: today's KelvinSeek cost ≥ 80 % of the daily budget.
 *
 * Every active alert is emailed to each admin (verified, not banned or deleted) through the
 * outbox (`ops.alert`), at most once per alert and admin every 6 hours (`dedupeKey`), so a
 * condition that lasts pages again four times a day and a flapping one does not flood the inbox.
 * The «sin backup» check of §10.3 is not implemented: the site has no backups by decision (§14.5).
 */
import { OPS_ALERT_KEYS } from '@sotf/contracts/admin';
import { sql } from 'drizzle-orm';
import { queueEmail } from '../email/outbox.ts';
import { query, queryOne, toInt } from '../follows/sql.ts';
import { type KelvinSeekConfig, loadKelvinSeekConfig } from '../kelvinseek/service.ts';
import type { Ctx } from '../kernel/context.ts';
import { DEAD_LETTER_QUEUE } from '../kernel/queues.ts';
import { httpStatusSince } from './http-status.ts';

export const OPS_ALERT_RULES = {
  /** Share of 5xx responses that raises `http_5xx`. */
  error5xxRate: 0.01,
  windowMinutes: 5,
  /** Fewer responses than this in the window never alert. */
  minResponses: 50,
  /** Share of the KelvinSeek daily budget that raises `kelvinseek_budget`. */
  kelvinBudgetShare: 0.8,
  /** A green `invariants` run older than this is reported as missing. */
  invariantsMaxAgeHours: 26,
  /** Same alert to the same admin at most once per window. */
  repeatHours: 6,
} as const;

export { OPS_ALERT_KEYS };
export type OpsAlertKey = (typeof OPS_ALERT_KEYS)[number];

export interface OpsAlert {
  key: OpsAlertKey;
  summary: string;
  details: string[];
}

export interface OpsAlertDeps {
  /** pg-boss schema (`PGBOSS_SCHEMA`). */
  schema?: string;
  /** Environment defaults of KelvinSeek (the `kelvinseek` site setting overrides them). */
  kelvinSeek: KelvinSeekConfig;
  /** `PUBLIC_SITE_URL`: the email links to the operations readout. */
  siteUrl: string;
}

const SCHEMA = /^[a-z_][a-z0-9_]*$/;
const pct = (n: number) => `${(n * 100).toFixed(1)} %`;

/** The alerts active now (no side effects). */
export async function evaluateOpsAlerts(ctx: Ctx, deps: OpsAlertDeps): Promise<OpsAlert[]> {
  const schema = deps.schema ?? 'pgboss';
  if (!SCHEMA.test(schema)) throw new Error(`invalid pg-boss schema "${schema}"`);
  const job = sql.raw(`"${schema}"."job"`);
  const now = ctx.clock.now();
  const alerts: OpsAlert[] = [];

  const dead = await queryOne<{ n: number }>(
    ctx.db,
    sql`SELECT count(*)::int AS "n" FROM ${job} j
         WHERE j."name" = ${DEAD_LETTER_QUEUE} AND j."state" IN ('created', 'retry', 'active')`,
  );
  const deadCount = toInt(dead?.n);
  if (deadCount > 0) {
    const failed = await query<{ name: string; n: number }>(
      ctx.db,
      sql`SELECT j."name", count(*)::int AS "n" FROM ${job} j
           WHERE j."state" = 'failed' AND j."completed_on" >= ${new Date(now.getTime() - 86_400_000).toISOString()}::timestamptz
             AND j."name" <> ${DEAD_LETTER_QUEUE}
           GROUP BY j."name" ORDER BY count(*) DESC, j."name" LIMIT 10`,
    );
    alerts.push({
      key: 'dead_letter',
      summary: `${deadCount} job${deadCount === 1 ? '' : 's'} in the dead-letter queue`,
      details: failed.map((f) => `${f.name}: ${toInt(f.n)} failed in the last 24 h`),
    });
  }

  const since = new Date(now.getTime() - OPS_ALERT_RULES.windowMinutes * 60_000);
  const http = await httpStatusSince(ctx.db, since);
  if (http.total >= OPS_ALERT_RULES.minResponses && http.s5xx / http.total > OPS_ALERT_RULES.error5xxRate) {
    alerts.push({
      key: 'http_5xx',
      summary: `${pct(http.s5xx / http.total)} of API responses were 5xx in the last ${OPS_ALERT_RULES.windowMinutes} minutes`,
      details: [`${http.s5xx} of ${http.total} responses`, `404: ${http.s404}, 410: ${http.s410}`],
    });
  }

  const run = await queryOne<{ ok: string | null; finishedAt: Date | string | null; failed: unknown }>(
    ctx.db,
    sql`SELECT "notes"->>'ok' AS "ok", coalesce("finishedAt", "startedAt") AS "finishedAt", "notes"->'failed' AS "failed"
          FROM "MigrationRun" WHERE "name" = 'invariants' ORDER BY "id" DESC LIMIT 1`,
  );
  if (run) {
    const at = run.finishedAt instanceof Date ? run.finishedAt : new Date(String(run.finishedAt));
    const ageHours = (now.getTime() - at.getTime()) / 3_600_000;
    if (run.ok === 'false') {
      const failed = Array.isArray(run.failed) ? run.failed.map(String).slice(0, 20) : [];
      alerts.push({
        key: 'invariants',
        summary: 'db:invariants is red',
        details: [`Run finished ${at.toISOString()}`, ...failed.map((f) => `Failed: ${f}`)],
      });
    } else if (ageHours > OPS_ALERT_RULES.invariantsMaxAgeHours) {
      alerts.push({
        key: 'invariants',
        summary: `db:invariants has not run for ${Math.floor(ageHours)} h`,
        details: [`Last run finished ${at.toISOString()}`],
      });
    }
  }

  const config = await loadKelvinSeekConfig(ctx.db, deps.kelvinSeek);
  if (config.enabled && config.dailyBudgetUsd > 0) {
    const today = now.toISOString().slice(0, 10);
    const usage = await queryOne<{ cost: string | number | null }>(
      ctx.db,
      sql`SELECT "costMicroUsd" AS "cost" FROM "KelvinUsageDaily" WHERE "day" = ${today}::date`,
    );
    const costUsd = toInt(usage?.cost) / 1_000_000;
    const share = costUsd / config.dailyBudgetUsd;
    if (share >= OPS_ALERT_RULES.kelvinBudgetShare) {
      alerts.push({
        key: 'kelvinseek_budget',
        summary: `KelvinSeek used ${pct(share)} of today's budget`,
        details: [`$${costUsd.toFixed(2)} of $${config.dailyBudgetUsd.toFixed(2)}`],
      });
    }
  }
  return alerts;
}

/** Start of the repeat window of `date` (UTC, `repeatHours` slots). */
export function alertWindow(date: Date): string {
  const slot = OPS_ALERT_RULES.repeatHours * 3_600_000;
  return new Date(date.getTime() - (date.getTime() % slot)).toISOString().slice(0, 13);
}

/** The `ops.alerts` job: evaluates and emails the admins. */
export async function runOpsAlerts(ctx: Ctx, deps: OpsAlertDeps): Promise<{ alerts: OpsAlert[]; emails: number }> {
  const alerts = await evaluateOpsAlerts(ctx, deps);
  if (alerts.length === 0) return { alerts, emails: 0 };
  const admins = await query<{ id: number; email: string }>(
    ctx.db,
    sql`SELECT "id", "email" FROM "User"
         WHERE "role" = 'admin' AND "emailVerifiedAt" IS NOT NULL AND "deletedAt" IS NULL AND "bannedAt" IS NULL
         ORDER BY "id"`,
  );
  const now = ctx.clock.now();
  const window = alertWindow(now);
  const opsUrl = `${deps.siteUrl.replace(/\/+$/, '')}/moderation/admin`;
  let emails = 0;
  for (const alert of alerts) {
    for (const admin of admins) {
      await queueEmail(ctx.db, ctx.jobs, {
        userId: admin.id,
        to: admin.email,
        template: 'ops.alert',
        locale: 'en',
        payload: {
          key: alert.key,
          summary: alert.summary,
          details: alert.details,
          checkedAt: now.toISOString(),
          opsUrl,
        },
        dedupeKey: `ops:${alert.key}:${admin.id}:${window}`,
      });
      emails += 1;
    }
  }
  ctx.log.warn({ alerts: alerts.map((a) => a.key), admins: admins.length }, 'operations alerts raised');
  return { alerts, emails };
}
