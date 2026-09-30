/**
 * Patch Radar uptime (T1-20): the worker probes the platform components every 5 minutes
 * (`compat.uptime-probe`) and stores one "CompatUptimeSample" per component; the public endpoint
 * `GET /compat/uptime` aggregates them per UTC day for the series on `/patch-radar`.
 *
 * Probes (no credentials needed, everything goes through the public origin like a visitor):
 * - `web`: `GET <site>/healthz` answers 200;
 * - `api`: `GET <site>/api/v2/game-builds` answers 200 (the same-origin route of the browser);
 * - `media`: `HEAD` of the public media origin answers anything below 500 (a bucket root is not a
 *   file, so 403/404 still prove that the CDN and the bucket are reachable);
 * - `database`: `SELECT 1` through the pool of the worker.
 * A probe that does not answer within {@link UPTIME_RULES.timeoutMs} counts as down.
 */
import { UPTIME_RULES, type UptimeComponent, type UptimeDTO } from '@sotf/contracts/compat';
import { compatUptimeSample, type NewCompatUptimeSample } from '@sotf/db';
import { sql } from 'drizzle-orm';
import type { Ctx } from '../kernel/context.ts';
import { rows } from '../legacy/db.ts';

const UPTIME_COMPONENT_LIST = ['web', 'api', 'media', 'database'] as const satisfies readonly UptimeComponent[];

export interface UptimeProbeConfig {
  /** `PUBLIC_SITE_URL`. */
  siteUrl: string;
  /** `R2_PUBLIC_BASE_URL`. */
  mediaBaseUrl: string;
  /** Injected in tests. */
  fetch?: typeof fetch;
}

interface ProbeResult {
  ok: boolean;
  latencyMs: number | null;
  statusCode: number | null;
}

async function probeHttp(
  url: string,
  init: { method: 'GET' | 'HEAD'; accept: (status: number) => boolean },
  doFetch: typeof fetch,
): Promise<ProbeResult> {
  const started = performance.now();
  try {
    const response = await doFetch(url, {
      method: init.method,
      redirect: 'manual',
      signal: AbortSignal.timeout(UPTIME_RULES.timeoutMs),
      headers: { 'user-agent': 'sotf-mods-uptime/1' },
    });
    // The body is never needed: release the connection.
    void response.body?.cancel().catch(() => undefined);
    return {
      ok: init.accept(response.status),
      latencyMs: Math.round(performance.now() - started),
      statusCode: response.status,
    };
  } catch {
    return { ok: false, latencyMs: null, statusCode: null };
  }
}

async function probeDatabase(ctx: Ctx): Promise<ProbeResult> {
  const started = performance.now();
  try {
    await ctx.db.execute(sql`SELECT 1`);
    return { ok: true, latencyMs: Math.round(performance.now() - started), statusCode: null };
  } catch {
    return { ok: false, latencyMs: null, statusCode: null };
  }
}

function join(base: string, path: string): string {
  return `${base.replace(/\/+$/, '')}${path}`;
}

export interface UptimeProbeResult {
  checkedAt: string;
  samples: Record<UptimeComponent, boolean>;
  pruned: number;
}

/** One probe round: samples every component, stores them and prunes what is past the retention. */
export async function runUptimeProbe(ctx: Ctx, config: UptimeProbeConfig): Promise<UptimeProbeResult> {
  const doFetch = config.fetch ?? fetch;
  const checkedAt = ctx.clock.now();
  const [web, api, media, database] = await Promise.all([
    probeHttp(join(config.siteUrl, '/healthz'), { method: 'GET', accept: (s) => s === 200 }, doFetch),
    probeHttp(join(config.siteUrl, '/api/v2/game-builds'), { method: 'GET', accept: (s) => s === 200 }, doFetch),
    probeHttp(join(config.mediaBaseUrl, '/'), { method: 'HEAD', accept: (s) => s < 500 }, doFetch),
    probeDatabase(ctx),
  ]);
  const byComponent: Record<UptimeComponent, ProbeResult> = { web, api, media, database };
  // One shared timestamp per round, so "every component ok" can be computed per round.
  const values: NewCompatUptimeSample[] = UPTIME_COMPONENT_LIST.map((component) => ({
    component,
    ok: byComponent[component].ok,
    latencyMs: byComponent[component].latencyMs,
    statusCode: byComponent[component].statusCode,
    checkedAt,
  }));
  await ctx.db.insert(compatUptimeSample).values(values);

  const cutoff = new Date(checkedAt.getTime() - UPTIME_RULES.retentionDays * 86_400_000);
  const deleted = await ctx.db.execute(
    sql`DELETE FROM "CompatUptimeSample" WHERE "checkedAt" < ${cutoff.toISOString()}::timestamptz`,
  );
  return {
    checkedAt: checkedAt.toISOString(),
    samples: { web: web.ok, api: api.ok, media: media.ok, database: database.ok },
    pruned: deleted.rowCount ?? 0,
  };
}

interface DayRow {
  component: UptimeComponent;
  day: string;
  samples: number;
  ok: number;
}

interface StatRow {
  component: UptimeComponent;
  avg: number | null;
  p95: number | null;
}

interface LatestRow {
  component: UptimeComponent;
  ok: boolean;
  checkedAt: string;
}

function ratio(ok: number, samples: number): number | null {
  return samples > 0 ? Math.round((ok / samples) * 10_000) / 10_000 : null;
}

/** `GET /compat/uptime`: the per-day series of every component over the last `days` UTC days. */
export async function getUptime(ctx: Ctx, days: number): Promise<UptimeDTO> {
  const windowDays = Math.min(UPTIME_RULES.maxWindowDays, Math.max(1, Math.trunc(days)));
  const now = ctx.clock.now();
  const todayUtc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  const since = new Date(todayUtc - (windowDays - 1) * 86_400_000);
  const sinceIso = since.toISOString();

  const [perDay, stats, latest, rounds] = await Promise.all([
    rows<DayRow>(
      ctx.db,
      sql`SELECT "component", to_char("checkedAt" AT TIME ZONE 'UTC', 'YYYY-MM-DD') AS "day",
                 count(*)::int AS "samples", (count(*) FILTER (WHERE "ok"))::int AS "ok"
            FROM "CompatUptimeSample"
           WHERE "checkedAt" >= ${sinceIso}::timestamptz
           GROUP BY 1, 2`,
    ),
    rows<StatRow>(
      ctx.db,
      sql`SELECT "component", round(avg("latencyMs"))::int AS "avg",
                 round(percentile_cont(0.95) WITHIN GROUP (ORDER BY "latencyMs"))::int AS "p95"
            FROM "CompatUptimeSample"
           WHERE "checkedAt" >= ${sinceIso}::timestamptz AND "ok" AND "latencyMs" IS NOT NULL
           GROUP BY 1`,
    ),
    rows<LatestRow>(
      ctx.db,
      sql`SELECT DISTINCT ON ("component") "component", "ok",
                 to_char("checkedAt" AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.MS"Z"') AS "checkedAt"
            FROM "CompatUptimeSample"
           ORDER BY "component", "checkedAt" DESC`,
    ),
    rows<{ rounds: number; clean: number }>(
      ctx.db,
      sql`SELECT count(*)::int AS "rounds", (count(*) FILTER (WHERE "allOk"))::int AS "clean"
            FROM (SELECT bool_and("ok") AS "allOk" FROM "CompatUptimeSample"
                   WHERE "checkedAt" >= ${sinceIso}::timestamptz GROUP BY "checkedAt") r`,
    ),
  ]);

  const dates: string[] = [];
  for (let i = 0; i < windowDays; i += 1)
    dates.push(new Date(todayUtc - (windowDays - 1 - i) * 86_400_000).toISOString().slice(0, 10));

  const components = UPTIME_COMPONENT_LIST.map((component) => {
    const own = perDay.filter((r) => r.component === component);
    const byDay = new Map(own.map((r) => [r.day, r]));
    const samples = own.reduce((sum, r) => sum + r.samples, 0);
    const okSamples = own.reduce((sum, r) => sum + r.ok, 0);
    const stat = stats.find((r) => r.component === component);
    const current = latest.find((r) => r.component === component);
    return {
      component,
      uptime: ratio(okSamples, samples),
      samples,
      avgLatencyMs: stat?.avg ?? null,
      p95LatencyMs: stat?.p95 ?? null,
      current: current ? { ok: current.ok, checkedAt: current.checkedAt } : null,
      days: dates.map((date) => {
        const row = byDay.get(date);
        return {
          date,
          samples: row?.samples ?? 0,
          okSamples: row?.ok ?? 0,
          uptime: row ? ratio(row.ok, row.samples) : null,
        };
      }),
    };
  });
  const round = rounds[0];
  return {
    windowDays,
    generatedAt: now.toISOString(),
    overall: round ? ratio(round.clean, round.rounds) : null,
    components,
  };
}
