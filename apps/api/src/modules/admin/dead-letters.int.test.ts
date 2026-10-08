// biome-ignore-all lint/suspicious/noExplicitAny: assertions walk JSON bodies
/**
 * Dead letters of the operations page: pending rows grouped by source queue (exact link through
 * `source_name`, matched to the failed original for rows without it, unknown otherwise), retry and
 * discard (admin only, audited), and the alert email that lists them. Runs on the small
 * development seed with the real pg-boss producer; failures are produced with fetch + fail.
 */
import { type Ctx, createCtx, silentLogger } from '@sotf/core';
import { deadLetterGroups, evaluateOpsAlerts, runOpsAlerts } from '@sotf/core/ops/index';
import type { TestDb } from '@sotf/db/testing';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildTestApp, type TestApp } from '../../testing.ts';
import { exec, startSeededDb } from '../catalog/__tests__/seeded.ts';
import { callAs, createTestUser, type Method, type TestUser } from '../catalog/__tests__/users.ts';

let db: TestDb;
let t: TestApp;
let admin: TestUser;
let user: TestUser;
let ctx: Ctx;

const call = (method: Method, url: string, who: TestUser | null, body?: unknown) =>
  callAs(t, method, url, who, body) as Promise<{ status: number; body: any }>;

const schema = () => t.env.PGBOSS_SCHEMA;
const kelvinSeek = { enabled: true, model: 'gpt-test', dailyBudgetUsd: 5, timeoutMs: 1000 };
const alertDeps = () => ({ schema: schema(), kelvinSeek, siteUrl: 'https://sotf-mods.test' });

/** Sends a job that fails for good: it lands in the dead-letter queue with the original kept. */
async function failJob(queue: string, data: object, message: string): Promise<string> {
  const boss = t.app.platform.boss;
  if (!boss) throw new Error('no pg-boss');
  const id = await boss.send(queue, data, { retryLimit: 0 });
  if (!id) throw new Error('job not sent');
  const [job] = await boss.fetch(queue);
  expect(job?.id).toBe(id);
  await boss.fail(queue, id, { message });
  return id;
}

async function count(queue: string, state: string): Promise<number> {
  const res = await exec(db, `SELECT count(*)::int AS n FROM "${schema()}"."job" WHERE "name" = $1 AND "state" = $2`, [
    queue,
    state,
  ]);
  return Number(res.rows[0].n);
}

beforeAll(async () => {
  db = await startSeededDb();
  admin = await createTestUser(db, 'dl-admin', 'admin');
  user = await createTestUser(db, 'dl-user');
  t = await buildTestApp({ db, rateLimits: { anonymousRead: { max: 100_000, window: '1 minute' } } });
  ctx = createCtx(
    { db: db.db, jobs: t.app.platform.jobs, log: silentLogger(), appSecret: t.env.APP_SECRET },
    { requestId: 'dl-test' },
  );
}, 300_000);

afterAll(async () => {
  await t?.close();
  await db?.stop();
});

describe('dead letters', () => {
  it('groups pending rows by source queue, falls back to the failed original and flags unknown ones', async () => {
    expect(await deadLetterGroups(ctx, schema())).toEqual([]);

    await failJob('og.render', { entityType: 'mod', entityId: 1 }, 'Font file missing');
    await failJob('og.render', { entityType: 'mod', entityId: 2 }, 'Font file missing\nagain');
    await failJob('indexnow.ping', { paths: ['/mods/a'] }, 'status 401');
    await failJob('translation.mod', { modId: 7 }, 'placeholders_changed');

    // Old copies carry no source: the first og.render one is matched to its original, the
    // translation.mod one lost its original (deleted after a week) and becomes unknown.
    await exec(
      db,
      `UPDATE "${schema()}"."job" SET "source_name" = NULL, "source_id" = NULL, "source_output" = NULL, "output" = NULL
        WHERE "name" = 'dead-letter' AND "data" IN ('{"entityType":"mod","entityId":1}'::jsonb, '{"modId":7}'::jsonb)`,
    );
    await exec(db, `DELETE FROM "${schema()}"."job" WHERE "name" = 'translation.mod' AND "state" = 'failed'`);

    const groups = await deadLetterGroups(ctx, schema());
    expect(groups.map((g) => [g.queue, g.count])).toEqual([
      ['og.render', 2],
      ['indexnow.ping', 1],
      [null, 1],
    ]);
    const og = groups.find((g) => g.queue === 'og.render');
    expect(og).toMatchObject({ retryable: true, lastError: 'Font file missing again' });
    expect(Date.parse(og?.lastFailedAt ?? '')).toBeGreaterThanOrEqual(Date.parse(og?.firstFailedAt ?? ''));
    expect(groups.find((g) => g.queue === 'indexnow.ping')?.lastError).toBe('status 401');
    expect(groups.find((g) => g.queue === null)).toMatchObject({ retryable: false, lastError: null });

    const readout = await call('GET', '/api/v2/admin/ops', admin);
    expect(readout.status).toBe(200);
    expect(readout.body.deadLetter).toBe(4);
    expect(readout.body.deadLetters.map((g: any) => g.queue)).toEqual(['og.render', 'indexnow.ping', null]);
  });

  it('lists each queue with count, last failure and last error in the alert, with a link to the section', async () => {
    const alerts = await evaluateOpsAlerts(ctx, alertDeps());
    const dead = alerts.find((a) => a.key === 'dead_letter');
    expect(dead?.summary).toBe('4 failed jobs in the dead-letter queue');
    expect(dead?.details).toHaveLength(3);
    expect(dead?.details[0]).toMatch(
      /^og\.render: 2 jobs, last failure \d{4}-\d{2}-\d{2} \d{2}:\d{2} UTC, last error: Font file missing again$/,
    );
    expect(dead?.details[2]).toMatch(/^Unknown queue: 1 job, last failure .* no error message$/);

    await runOpsAlerts(ctx, alertDeps());
    const mail = await exec(
      db,
      `SELECT "payload" FROM "EmailOutbox" WHERE "template" = 'ops.alert' AND "payload"->>'key' = 'dead_letter'
        AND "toEmail" = 'dl-admin@example.test'`,
    );
    expect(mail.rows).toHaveLength(1);
    expect(mail.rows[0].payload.opsUrl).toBe('https://sotf-mods.test/moderation/admin/operations#dead-letters');
    expect(mail.rows[0].payload.displayName).toBeTruthy();
  });

  it('is admin only', async () => {
    for (const [url, body] of [
      ['/api/v2/admin/ops/dead-letters/retry', { queue: 'og.render' }],
      ['/api/v2/admin/ops/dead-letters/discard', { scope: 'all' }],
    ] as const) {
      expect((await call('POST', url, null, body)).status).toBe(401);
      expect((await call('POST', url, user, body)).status).toBe(403);
    }
    expect(await deadLetterGroups(ctx, schema())).toHaveLength(3);
  });

  it('retries a queue: the jobs go back with their data and the copies stop counting', async () => {
    const before = await count('og.render', 'created');
    const res = await call('POST', '/api/v2/admin/ops/dead-letters/retry', admin, { queue: 'og.render' });
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({ action: 'retry', handled: 2, requeued: 2, skipped: 0, failed: 0, remaining: 2 });
    expect(await count('og.render', 'created')).toBe(before + 2);
    const sent = await exec(
      db,
      `SELECT "data" FROM "${schema()}"."job" WHERE "name" = 'og.render' AND "state" = 'created' ORDER BY "data"->>'entityId'`,
    );
    expect(sent.rows.map((r: any) => r.data.entityId)).toEqual([1, 2]);
    expect((await deadLetterGroups(ctx, schema())).map((g) => g.queue)).toEqual(['indexnow.ping', null]);

    // Nothing left to retry, a removed queue cannot be retried.
    expect(
      (await call('POST', '/api/v2/admin/ops/dead-letters/retry', admin, { queue: 'og.render' })).body,
    ).toMatchObject({
      handled: 0,
      requeued: 0,
    });
    expect(
      (await call('POST', '/api/v2/admin/ops/dead-letters/retry', admin, { queue: 'milestones.check' })).status,
    ).toBe(422);
  });

  it('leaves a row pending when its job cannot be sent back', async () => {
    await exec(
      db,
      `UPDATE "${schema()}"."job" SET "data" = '{"paths":[]}'::jsonb WHERE "name" = 'dead-letter' AND "source_name" = 'indexnow.ping'`,
    );
    const res = await call('POST', '/api/v2/admin/ops/dead-letters/retry', admin, { queue: 'indexnow.ping' });
    expect(res.body).toMatchObject({ handled: 0, requeued: 0, failed: 1, remaining: 2 });
    expect((await deadLetterGroups(ctx, schema())).map((g) => g.queue)).toEqual(['indexnow.ping', null]);
  });

  it('discards one group, then all, and the alert stops', async () => {
    const bad = await call('POST', '/api/v2/admin/ops/dead-letters/discard', admin, { scope: 'queue' });
    expect(bad.status).toBe(422);

    const one = await call('POST', '/api/v2/admin/ops/dead-letters/discard', admin, { scope: 'unknown' });
    expect(one.body).toMatchObject({ action: 'discard', handled: 1, remaining: 1 });
    expect((await deadLetterGroups(ctx, schema())).map((g) => g.queue)).toEqual(['indexnow.ping']);

    const all = await call('POST', '/api/v2/admin/ops/dead-letters/discard', admin, { scope: 'all' });
    expect(all.body).toMatchObject({ handled: 1, remaining: 0 });
    expect(await deadLetterGroups(ctx, schema())).toEqual([]);
    expect(await count('dead-letter', 'cancelled')).toBe(2);
    expect((await evaluateOpsAlerts(ctx, alertDeps())).find((a) => a.key === 'dead_letter')).toBeUndefined();
    const readout = await call('GET', '/api/v2/admin/ops', admin);
    expect(readout.body.deadLetter).toBe(0);
    expect(readout.body.deadLetters).toEqual([]);

    const audit = await exec(
      db,
      `SELECT "action", "actorId", "after" FROM "AuditLog" WHERE "action" LIKE 'ops.dead_letter.%' ORDER BY "id"`,
    );
    expect(audit.rows.map((r: any) => r.action)).toEqual([
      'ops.dead_letter.retry',
      'ops.dead_letter.retry',
      'ops.dead_letter.retry',
      'ops.dead_letter.retry_failed',
      'ops.dead_letter.discard',
      'ops.dead_letter.discard',
    ]);
    expect(audit.rows.every((r: any) => Number(r.actorId) === admin.userId)).toBe(true);
    expect(audit.rows[0].after).toMatchObject({ scope: 'queue', queue: 'og.render', rows: 2 });
  });
});
