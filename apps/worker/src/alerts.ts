/**
 * Operational alerts of PLAN §10.3 ("email al admin vía worker"), checked by the worker process
 * every `ALERT_INTERVAL_SECONDS` (default 300 s; 0 disables them):
 *
 * - **dead letters**: jobs that reached the shared `dead-letter` queue since the previous check
 *   (pg-boss moves a job there after its last retry). Window-based, so a restart never re-sends
 *   old ones.
 * - **KelvinSeek budget**: today's spend (UTC, `"KelvinUsageDaily"`) at 80 % of the daily budget
 *   (`SiteSetting('kelvinseek')` over `KELVINSEEK_DAILY_BUDGET_USD`); once per UTC day.
 *
 * Recipients are the active admin accounts (`"User"."role" = 'admin'`). The mail is plain and
 * sent straight through the configured transport (no outbox row: an alert about the email
 * pipeline must not depend on it). A transaction-scoped advisory lock keeps two worker replicas
 * from sending the same alert.
 *
 * Not covered here (need data the worker does not have): the 5xx rate (API request metrics),
 * `db:invariants` (operator tooling and its SQL files are not shipped in the worker image) and the
 * backup age (Coolify API, a user cron).
 */
import type { Clock, Logger } from '@sotf/core';
import type { EmailTransport } from '@sotf/core/email/index';
import { kelvinSpentToday, loadKelvinSeekConfig } from '@sotf/core/kelvinseek/index';
import { type Database, type Executor, withTx } from '@sotf/db';
import { sql } from 'drizzle-orm';

export const DEAD_LETTER_QUEUE = 'dead-letter';
/** Share of the KelvinSeek daily budget that triggers the alert. */
export const KELVINSEEK_BUDGET_ALERT_RATIO = 0.8;

export interface Alert {
  /** Stable key of the alert kind (`dead-letter`, `kelvinseek-budget`). */
  kind: string;
  subject: string;
  lines: string[];
}

export interface AlertCheckDeps {
  db: Executor;
  /** pg-boss schema (`PGBOSS_SCHEMA`). */
  bossSchema: string;
  /** Default daily budget in USD when `SiteSetting('kelvinseek')` does not set one. */
  kelvinDailyBudgetUsd: number;
  /** Default model name (only used to build the KelvinSeek defaults). */
  kelvinModel: string;
}

export interface AlertState {
  /** Dead letters created after this instant are new. */
  deadLetterSince: Date;
  /** UTC day (`YYYY-MM-DD`) of the last KelvinSeek budget alert. */
  kelvinAlertedDay: string | null;
}

function quoteIdent(name: string): string {
  return `"${name.replaceAll('"', '""')}"`;
}

interface DeadLetterRow {
  n: number | string;
  newest: Date | string | null;
}

/** Dead letters created in `(since, now]`. */
export async function newDeadLetters(
  db: Executor,
  bossSchema: string,
  since: Date,
  now: Date,
): Promise<{ count: number; newest: Date | null }> {
  const table = sql.raw(`${quoteIdent(bossSchema)}.job`);
  const result = await db.execute(
    sql`SELECT count(*)::int AS "n", max("created_on") AS "newest" FROM ${table}
         WHERE "name" = ${DEAD_LETTER_QUEUE}
           AND "created_on" > ${since.toISOString()}::timestamptz
           AND "created_on" <= ${now.toISOString()}::timestamptz`,
  );
  const row = result.rows[0] as DeadLetterRow | undefined;
  return { count: Number(row?.n ?? 0), newest: row?.newest ? new Date(row.newest) : null };
}

/** Evaluates every alert once and advances `state`. Pure apart from the reads. */
export async function checkAlerts(deps: AlertCheckDeps, state: AlertState, now: Date): Promise<Alert[]> {
  const alerts: Alert[] = [];

  const dead = await newDeadLetters(deps.db, deps.bossSchema, state.deadLetterSince, now);
  if (dead.count > 0) {
    alerts.push({
      kind: 'dead-letter',
      subject: `[SOTF Mods] ${dead.count} job(s) reached the dead-letter queue`,
      lines: [
        `${dead.count} background job(s) failed after their last retry since ${state.deadLetterSince.toISOString()}.`,
        'Check the job queues in /ranger/admin and the worker logs (Sentry when SENTRY_DSN is set).',
      ],
    });
  }
  state.deadLetterSince = now;

  const day = now.toISOString().slice(0, 10);
  if (state.kelvinAlertedDay !== day) {
    const config = await loadKelvinSeekConfig(deps.db, {
      enabled: true,
      model: deps.kelvinModel,
      dailyBudgetUsd: deps.kelvinDailyBudgetUsd,
      timeoutMs: 8000,
    });
    const budgetMicro = Math.round(config.dailyBudgetUsd * 1_000_000);
    if (config.enabled && budgetMicro > 0) {
      const spent = await kelvinSpentToday(deps.db, day);
      if (spent >= budgetMicro * KELVINSEEK_BUDGET_ALERT_RATIO) {
        const pct = Math.round((spent / budgetMicro) * 100);
        alerts.push({
          kind: 'kelvinseek-budget',
          subject: `[SOTF Mods] KelvinSeek at ${pct} % of today's budget`,
          lines: [
            `KelvinSeek spent $${(spent / 1_000_000).toFixed(4)} of its $${config.dailyBudgetUsd} daily budget (${day}, UTC).`,
            'At 100 % it answers with the fallback until midnight UTC. The budget is in /ranger/admin (settings).',
          ],
        });
        state.kelvinAlertedDay = day;
      }
    }
  }
  return alerts;
}

/** Active admin addresses. */
export async function adminRecipients(db: Executor): Promise<string[]> {
  const result = await db.execute(
    sql`SELECT DISTINCT "email" FROM "User"
         WHERE "role" = 'admin' AND "deletedAt" IS NULL AND "bannedAt" IS NULL AND "email" IS NOT NULL AND "email" <> ''
         ORDER BY "email"`,
  );
  return (result.rows as Array<{ email: string }>).map((r) => r.email);
}

function escapeHtml(value: string): string {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

export interface AlertMonitorOptions extends Omit<AlertCheckDeps, 'db'> {
  db: Database;
  transport: () => EmailTransport;
  from: string;
  clock: Clock;
  log: Logger;
  intervalMs: number;
}

export interface AlertMonitor {
  /** One check (also what the timer runs); returns the alerts that were sent. */
  runOnce(): Promise<Alert[]>;
  start(): void;
  stop(): Promise<void>;
}

const LOCK_KEY = 'sotf-worker:alerts';

export function createAlertMonitor(options: AlertMonitorOptions): AlertMonitor {
  const state: AlertState = {
    deadLetterSince: new Date(options.clock.now().getTime() - options.intervalMs),
    kelvinAlertedDay: null,
  };
  let timer: NodeJS.Timeout | null = null;
  let running: Promise<Alert[]> | null = null;

  async function run(): Promise<Alert[]> {
    const now = options.clock.now();
    const alerts = await withTx(options.db, async (tx) => {
      const lock = await tx.execute(
        sql`SELECT pg_try_advisory_xact_lock(hashtextextended(${LOCK_KEY}, 0)) AS "locked"`,
      );
      if (!(lock.rows[0] as { locked: boolean } | undefined)?.locked) {
        // Another replica is checking the same window.
        state.deadLetterSince = now;
        return [];
      }
      return checkAlerts({ ...options, db: tx }, state, now);
    });
    if (alerts.length === 0) return alerts;
    const to = await adminRecipients(options.db);
    if (to.length === 0) {
      options.log.warn({ alerts: alerts.map((a) => a.kind) }, 'operational alert without an admin to email');
      return alerts;
    }
    let transport: EmailTransport;
    try {
      transport = options.transport();
    } catch (error) {
      options.log.error({ err: error, alerts: alerts.map((a) => a.kind) }, 'operational alert: no email transport');
      return alerts;
    }
    for (const alert of alerts) {
      options.log.warn({ alert: alert.kind, subject: alert.subject }, 'operational alert');
      for (const address of to) {
        try {
          await transport.send({
            from: options.from,
            to: address,
            subject: alert.subject,
            text: `${alert.lines.join('\n\n')}\n`,
            html: alert.lines.map((line) => `<p>${escapeHtml(line)}</p>`).join('\n'),
            idempotencyKey: `alert-${alert.kind}-${now.toISOString()}-${address}`,
          });
        } catch (error) {
          options.log.error({ err: error, alert: alert.kind }, 'operational alert email failed');
        }
      }
    }
    return alerts;
  }

  function runOnce(): Promise<Alert[]> {
    running ??= run().finally(() => {
      running = null;
    });
    return running;
  }

  return {
    runOnce,
    start() {
      if (timer || options.intervalMs <= 0) return;
      timer = setInterval(() => {
        runOnce().catch((error: unknown) => options.log.error({ err: error }, 'operational alert check failed'));
      }, options.intervalMs);
      timer.unref();
    },
    async stop() {
      if (timer) clearInterval(timer);
      timer = null;
      await running?.catch(() => undefined);
    },
  };
}
