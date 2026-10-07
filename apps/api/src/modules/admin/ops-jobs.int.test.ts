// biome-ignore-all lint/suspicious/noExplicitAny: assertions walk JSON bodies
/**
 * Operations jobs and counters (backlogs WP-A4, WP-51, WP-50, WP-40/WP-14): API response status
 * counters in `AnalyticsEvent(kind='http_status')` and the readout, the `ops.alerts` evaluation and
 * its deduplicated admin emails, `security.rescan`, `markdown.rerender` and `compat.reconcile`.
 * Runs on the small development seed with the real pg-boss producer (no worker).
 */
import { type Ctx, createCtx, silentLogger } from '@sotf/core';
import { aggregateCompat, driftedVersions, reconcileCompat } from '@sotf/core/compat/index';
import { evaluateOpsAlerts, runOpsAlerts } from '@sotf/core/ops/index';
import { RENDER_VERSION, rerenderStaleMarkdown } from '@sotf/core/publishing/rerender';
import { rescanStaleScans } from '@sotf/core/security-scan/index';
import type { TestDb } from '@sotf/db/testing';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildTestApp, type TestApp } from '../../testing.ts';
import { exec, startSeededDb } from '../catalog/__tests__/seeded.ts';
import { callAs, createTestUser, type Method, type TestUser } from '../catalog/__tests__/users.ts';

let db: TestDb;
let t: TestApp;
let admin: TestUser;
let ctx: Ctx;

const call = (method: Method, url: string, who: TestUser | null, body?: unknown) =>
  callAs(t, method, url, who, body) as Promise<{ status: number; body: any }>;

const kelvinSeek = { enabled: true, model: 'gpt-test', dailyBudgetUsd: 5, timeoutMs: 1000 };
const alertDeps = () => ({ schema: t.env.PGBOSS_SCHEMA, kelvinSeek, siteUrl: 'https://sotf-mods.test' });

async function jobsOf(name: string): Promise<any[]> {
  const res = await exec(
    db,
    `SELECT "data", "state" FROM "${t.env.PGBOSS_SCHEMA}"."job" WHERE "name" = $1 ORDER BY "created_on"`,
    [name],
  );
  return res.rows;
}

beforeAll(async () => {
  db = await startSeededDb();
  admin = await createTestUser(db, 'ops-admin', 'admin');
  t = await buildTestApp({
    db,
    statusCounters: { flushMs: 0 },
    rateLimits: { anonymousRead: { max: 100_000, window: '1 minute' } },
  });
  ctx = createCtx(
    { db: db.db, jobs: t.app.platform.jobs, log: silentLogger(), appSecret: t.env.APP_SECRET },
    { requestId: 'ops-test' },
  );
}, 300_000);

afterAll(async () => {
  await t?.close();
  await db?.stop();
});

describe('response status counters', () => {
  it('counts the API responses per minute and shows the 404/410/5xx rates in the readout', async () => {
    for (let i = 0; i < 3; i += 1) {
      expect((await t.app.inject({ method: 'GET', url: `/api/v2/no-such-route-${i}` })).statusCode).toBe(404);
    }
    expect((await t.app.inject({ method: 'GET', url: '/healthz' })).statusCode).toBe(200);
    await t.app.statusCounters?.flush(db.db);
    const rows = await exec(db, `SELECT "props" FROM "AnalyticsEvent" WHERE "kind" = 'http_status'`);
    expect(rows.rows.length).toBeGreaterThan(0);
    const res = await call('GET', '/api/v2/admin/ops', admin);
    expect(res.status).toBe(200);
    expect(res.body.http.last5m.s404).toBeGreaterThanOrEqual(3);
    expect(res.body.http.lastHour.total).toBeGreaterThanOrEqual(res.body.http.last5m.total);
    expect(res.body.http.last5m.s5xx).toBe(0);
    expect(Array.isArray(res.body.alerts)).toBe(true);
  });
});

describe('ops.alerts', () => {
  it('stays quiet when everything is fine', async () => {
    expect(await evaluateOpsAlerts(ctx, alertDeps())).toEqual([]);
  });

  it('raises dead letters, 5xx, red invariants and the KelvinSeek budget, and emails each admin once per window', async () => {
    await t.app.platform.boss?.send('dead-letter', { from: 'email.send' });
    await exec(
      db,
      `INSERT INTO "AnalyticsEvent" ("ts", "kind", "props")
       VALUES (date_trunc('minute', now()), 'http_status', '{"total":200,"s404":1,"s410":0,"s4xx":1,"s5xx":9}')`,
    );
    await exec(
      db,
      `INSERT INTO "MigrationRun" ("name", "finishedAt", "notes") VALUES ('invariants', now(), '{"ok":false,"failed":["4","7"]}')`,
    );
    await exec(
      db,
      `INSERT INTO "KelvinUsageDaily" ("day", "requests", "costMicroUsd") VALUES ((now() AT TIME ZONE 'UTC')::date, 40, 4200000)
       ON CONFLICT ("day") DO UPDATE SET "costMicroUsd" = EXCLUDED."costMicroUsd"`,
    );

    const alerts = await evaluateOpsAlerts(ctx, alertDeps());
    expect(alerts.map((a) => a.key).sort()).toEqual(['dead_letter', 'http_5xx', 'invariants', 'kelvinseek_budget']);
    expect(alerts.find((a) => a.key === 'invariants')?.details).toContain('Failed: 4');
    expect(alerts.find((a) => a.key === 'http_5xx')?.summary).toMatch(/^[\d.]+ % of API responses were 5xx/);

    const first = await runOpsAlerts(ctx, alertDeps());
    const admins = await exec(
      db,
      `SELECT count(*)::int AS n FROM "User" WHERE "role" = 'admin' AND "emailVerifiedAt" IS NOT NULL
         AND "deletedAt" IS NULL AND "bannedAt" IS NULL`,
    );
    expect(first.emails).toBe(4 * Number(admins.rows[0].n));
    const outbox = async () =>
      (await exec(db, `SELECT "toEmail", "payload" FROM "EmailOutbox" WHERE "template" = 'ops.alert' ORDER BY "id"`))
        .rows;
    const sent = await outbox();
    expect(sent.filter((r: any) => r.toEmail === 'ops-admin@example.test')).toHaveLength(4);
    expect(sent[0].payload.opsUrl).toBe('https://sotf-mods.test/moderation/admin');

    // Same window: no second email.
    await runOpsAlerts(ctx, alertDeps());
    expect(await outbox()).toHaveLength(sent.length);

    // The readout lists the same alerts.
    const readout = await call('GET', '/api/v2/admin/ops', admin);
    expect(readout.body.alerts.map((a: any) => a.key).sort()).toEqual([
      'dead_letter',
      'http_5xx',
      'invariants',
      'kelvinseek_budget',
    ]);
  });
});

describe('security.rescan', () => {
  it('re-enqueues scans pending for 6 h once, and not while their job is waiting', async () => {
    const version = await exec(db, `SELECT "id" FROM "ModVersion" ORDER BY "id" LIMIT 1`);
    const versionId = Number(version.rows[0].id);
    await exec(
      db,
      `INSERT INTO "SecurityScan" ("modVersionId", "sha256", "engine", "verdict", "createdAt")
       VALUES ($1, $2, 'virustotal', 'pending', now() - interval '7 hours')`,
      [versionId, 'b'.repeat(64)],
    );
    const before = (await jobsOf('security.scan')).length;
    const first = await rescanStaleScans(ctx, { schema: t.env.PGBOSS_SCHEMA });
    expect(first.enqueued).toContain(versionId);
    const jobs = await jobsOf('security.scan');
    expect(jobs.length).toBe(before + first.enqueued.length);
    expect(jobs.some((j) => j.data.modVersionId === versionId && j.data.sha256 === 'b'.repeat(64))).toBe(true);
    const second = await rescanStaleScans(ctx, { schema: t.env.PGBOSS_SCHEMA });
    expect(second.enqueued).not.toContain(versionId);
  });
});

describe('markdown.rerender', () => {
  it('re-renders descriptions and changelogs older than RENDER_VERSION, keeping the format', async () => {
    const found = await exec(
      db,
      `SELECT m."id", v."id" AS "versionId" FROM "Mod" m JOIN "ModVersion" v ON v."modId" = m."id"
        WHERE m."descriptionMd" IS NOT NULL ORDER BY m."id" LIMIT 1`,
    );
    const modId = Number(found.rows[0].id);
    const versionId = Number(found.rows[0].versionId);
    await exec(
      db,
      `UPDATE "Mod" SET "descriptionMd" = '## Features' || chr(10) || chr(10) || '**Noclip**',
                        "descriptionHtml" = '<p>stale</p>', "renderVersion" = 0, "descriptionFormat" = 'markdown'
        WHERE "id" = $1`,
      [modId],
    );
    await exec(
      db,
      `UPDATE "ModVersion" SET "changelogMd" = '- Fixed **fog**', "changelogHtml" = '<p>stale</p>' WHERE "id" = $1`,
      [versionId],
    );
    const result = await rerenderStaleMarkdown(ctx, { config: { mediaBaseUrl: 'https://r2.test', publicBucket: 'p' } });
    expect(result.mods).toBeGreaterThanOrEqual(1);
    expect(result.changelogs).toBeGreaterThanOrEqual(1);
    const mod = await exec(db, `SELECT "descriptionHtml", "renderVersion" FROM "Mod" WHERE "id" = $1`, [modId]);
    expect(mod.rows[0].renderVersion).toBe(RENDER_VERSION);
    expect(mod.rows[0].descriptionHtml).toContain('<strong>Noclip</strong>');
    const version = await exec(db, `SELECT "changelogHtml" FROM "ModVersion" WHERE "id" = $1`, [versionId]);
    expect(version.rows[0].changelogHtml).toContain('<strong>fog</strong>');

    // Nothing left: a second run is a no-op.
    let again = await rerenderStaleMarkdown(
      ctx,
      { config: { mediaBaseUrl: 'https://r2.test', publicBucket: 'p' } },
      {
        batchSize: 1000,
      },
    );
    while (again.remaining) {
      again = await rerenderStaleMarkdown(
        ctx,
        { config: { mediaBaseUrl: 'https://r2.test', publicBucket: 'p' } },
        {
          batchSize: 1000,
        },
      );
    }
    const none = await rerenderStaleMarkdown(ctx, { config: { mediaBaseUrl: 'https://r2.test', publicBucket: 'p' } });
    expect(none).toEqual({ mods: 0, changelogs: 0, remaining: false });
  }, 120_000);
});

describe('compat.reconcile', () => {
  it('finds aggregates that drifted after a reporter was banned and enqueues their recompute', async () => {
    // Bring every stored aggregate in line with the rules first (the seed never ran the job).
    for (const versionId of (await driftedVersions(ctx)).versions)
      await aggregateCompat(ctx, { modVersionId: versionId });
    expect((await driftedVersions(ctx)).versions).toEqual([]);

    const version = await exec(
      db,
      `SELECT v."id" FROM "ModVersion" v JOIN "Mod" m ON m."id" = v."modId"
        WHERE v."status" = 'active' AND m."userId" IS NOT NULL ORDER BY v."id" LIMIT 1`,
    );
    const versionId = Number(version.rows[0].id);
    const build = await exec(
      db,
      `INSERT INTO "GameBuild" ("label", "releasedAt", "isCurrent") VALUES ('ops-test-1.0', current_date, true) RETURNING "id"`,
    );
    const buildId = Number(build.rows[0].id);
    const reporters: number[] = [];
    for (let i = 0; i < 4; i += 1) {
      const u = await createTestUser(db, `compat-reporter-${i}`);
      reporters.push(u.userId);
      await exec(
        db,
        `INSERT INTO "CompatReport" ("userId", "modVersionId", "gameBuildId", "mode", "result")
         VALUES ($1, $2, $3, 'singleplayer', 'works')`,
        [u.userId, versionId, buildId],
      );
    }
    await aggregateCompat(ctx, { modVersionId: versionId });
    expect((await driftedVersions(ctx)).versions).toEqual([]);

    await exec(db, `UPDATE "User" SET "bannedAt" = now() WHERE "id" = $1`, [reporters[0]]);
    await exec(db, `UPDATE "User" SET "trustLevel" = 0 WHERE "id" = $1`, [reporters[1]]);
    const before = (await jobsOf('compat.aggregate')).length;
    const result = await reconcileCompat(ctx);
    expect(result.drifted).toEqual([versionId]);
    const jobs = await jobsOf('compat.aggregate');
    expect(jobs.length).toBeGreaterThan(before);
    expect(jobs.some((j) => j.data.modVersionId === versionId)).toBe(true);

    // The job applies it; the sweep then finds nothing.
    await aggregateCompat(ctx, { modVersionId: versionId });
    const row = await exec(
      db,
      `SELECT "works" FROM "ModVersionCompat" WHERE "modVersionId" = $1 AND "gameBuildId" = $2`,
      [versionId, buildId],
    );
    expect(row.rows[0].works).toBe(3);
    expect((await reconcileCompat(ctx)).drifted).toEqual([]);
  }, 120_000);
});
