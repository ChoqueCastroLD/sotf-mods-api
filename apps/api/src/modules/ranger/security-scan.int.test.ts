// biome-ignore-all lint/suspicious/noExplicitAny: assertions walk JSON rows
/**
 * WP-51 acceptance of `security.scan` with VirusTotal simulated through a fake `fetch` behind the
 * real client (`createVirusTotalClient`): clean, 2 and 3 detections, an unknown file uploaded and
 * polled, a 429 and a spent daily quota rescheduling the job, no API key. Checks the verdict rows,
 * the hold policy (verified creators vs everyone else), `scan.completed` events and the author
 * signal. Runs on the small development seed.
 */
import { PassThrough } from 'node:stream';
import { type Ctx, createCtx, silentLogger } from '@sotf/core';
import {
  createVirusTotalClient,
  QuotaExhausted,
  runSecurityScan,
  SCAN_HOLD_REASON,
} from '@sotf/core/security-scan/index';
import type { ObjectStorage } from '@sotf/core/storage/index';
import type { TestDb } from '@sotf/db/testing';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildTestApp, type TestApp } from '../../testing.ts';
import { exec, startSeededDb } from '../catalog/__tests__/seeded.ts';

let db: TestDb;
let t: TestApp;
let ctx: Ctx;
let versions: Array<{ id: number; modId: number; authorId: number }> = [];

interface FakeVt {
  reports: Map<string, unknown>;
  uploads: string[];
  status: number | null;
}

function vtClient(fake: FakeVt, beforeRequest?: () => Promise<void>) {
  const fetch = (async (input: string | URL, init?: RequestInit) => {
    const url = String(input);
    if (fake.status !== null)
      return new Response(JSON.stringify({ error: { code: 'QuotaExceededError' } }), { status: fake.status });
    if (init?.method === 'POST' && url.endsWith('/files')) {
      // Drain the streamed multipart body like the real endpoint would.
      const body = init.body as ReadableStream<Uint8Array>;
      const reader = body.getReader();
      let bytes = 0;
      for (;;) {
        const next = await reader.read();
        if (next.done) break;
        bytes += next.value.byteLength;
      }
      fake.uploads.push(`${init.headers ? (init.headers as Record<string, string>)['content-length'] : ''}:${bytes}`);
      return Response.json({ data: { id: 'analysis-1', type: 'analysis' } });
    }
    const sha = url.split('/files/')[1] ?? '';
    const report = fake.reports.get(sha);
    if (!report) return new Response('{"error":{"code":"NotFoundError"}}', { status: 404 });
    return Response.json(report);
  }) as typeof globalThis.fetch;
  return createVirusTotalClient({ apiKey: 'test-key', fetch, ...(beforeRequest ? { beforeRequest } : {}) });
}

function analysed(malicious: number) {
  return {
    data: {
      attributes: {
        last_analysis_date: 1_727_600_000,
        last_analysis_stats: {
          malicious,
          suspicious: 0,
          undetected: 70 - malicious,
          harmless: 0,
          timeout: 0,
          failure: 0,
        },
        last_analysis_results: Object.fromEntries(
          Array.from({ length: malicious }, (_, i) => [`Engine${i}`, { category: 'malicious' }]),
        ),
      },
    },
  };
}

const fileBytes = Buffer.from('PK\u0003\u0004 fake zip bytes');
const storage = {
  config: { publicBucket: 'public', privateBucket: 'private', publicBaseUrl: 'https://r2.test' },
  publicUrl: (key: string) => `https://r2.test/${key}`,
  head: async () => ({
    size: fileBytes.byteLength,
    contentType: 'application/zip',
    etag: null,
    contentDisposition: null,
    cacheControl: null,
    metadata: {},
  }),
  get: async () => {
    const body = new PassThrough();
    body.end(fileBytes);
    return { body, head: { size: fileBytes.byteLength } };
  },
} as unknown as ObjectStorage;

async function versionRow(id: number) {
  return (await exec(db, `SELECT "status", "statusReason" FROM "ModVersion" WHERE "id" = $1`, [id])).rows[0];
}

async function scanRows(id: number) {
  return (
    await exec(
      db,
      `SELECT "verdict", "positives", "total", "permalink", "raw" FROM "SecurityScan" WHERE "modVersionId" = $1 ORDER BY "id"`,
      [id],
    )
  ).rows;
}

async function events(type: string, versionId: number) {
  const res = await exec(
    db,
    `SELECT "data" FROM "${t.env.PGBOSS_SCHEMA}"."job" WHERE "name" = 'domain.event' AND "data"->>'type' = $1
       AND ("data"->'payload'->>'versionId')::int = $2`,
    [type, versionId],
  );
  return res.rows.map((r: any) => r.data.payload);
}

async function jobs(name: string, versionId: number) {
  const res = await exec(
    db,
    `SELECT "data", "start_after" AS "startAfter" FROM "${t.env.PGBOSS_SCHEMA}"."job"
      WHERE "name" = $1 AND ("data"->>'modVersionId')::int = $2 ORDER BY "created_on"`,
    [name, versionId],
  );
  return res.rows;
}

beforeAll(async () => {
  db = await startSeededDb();
  const found = await exec(
    db,
    `SELECT v."id", v."modId", m."userId" AS "authorId" FROM "ModVersion" v JOIN "Mod" m ON m."id" = v."modId"
      JOIN "User" u ON u."id" = m."userId"
      WHERE v."status" = 'active' AND m."status" = 'published' AND coalesce(m."type", 'Mod') <> 'Build'
        AND u."role" = 'user'
      ORDER BY v."id" LIMIT 8`,
  );
  versions = found.rows.map((r: any) => ({ id: Number(r.id), modId: Number(r.modId), authorId: Number(r.authorId) }));
  expect(versions.length).toBe(8);
  await exec(db, `UPDATE "User" SET "verifiedCreator" = false WHERE "id" = ANY($1::int[])`, [
    versions.map((v) => v.authorId),
  ]);
  await exec(db, `UPDATE "ModVersion" SET "sha256" = NULL WHERE "id" = ANY($1::int[])`, [versions.map((v) => v.id)]);
  t = await buildTestApp({ db });
  ctx = createCtx(
    { db: db.db, jobs: t.app.platform.jobs, log: silentLogger(), appSecret: t.env.APP_SECRET },
    { requestId: 'scan-test' },
  );
}, 300_000);

afterAll(async () => {
  await t?.close();
  await db?.stop();
});

const sha = (n: number) => n.toString(16).padStart(64, '0');

describe('security.scan with VirusTotal', () => {
  it('clean: stores the verdict, keeps the version and emits scan.completed', async () => {
    const v = versions[0] as (typeof versions)[number];
    const fake: FakeVt = { reports: new Map([[sha(1), analysed(0)]]), uploads: [], status: null };
    const outcome = await runSecurityScan(
      ctx,
      { virusTotal: vtClient(fake), storage },
      { modVersionId: v.id, sha256: sha(1) },
    );
    expect(outcome).toEqual({ status: 'done', verdict: 'clean', positives: 0, held: false });
    const [scan] = await scanRows(v.id);
    expect(scan).toMatchObject({
      verdict: 'clean',
      positives: 0,
      total: 70,
      permalink: `https://www.virustotal.com/gui/file/${sha(1)}`,
    });
    expect((await versionRow(v.id)).status).toBe('active');
    expect(await events('scan.completed', v.id)).toEqual([
      { modId: v.modId, versionId: v.id, verdict: 'clean', positives: 0 },
    ]);
    // Idempotent: the same SHA-256 is not scanned twice.
    expect(
      await runSecurityScan(ctx, { virusTotal: vtClient(fake), storage }, { modVersionId: v.id, sha256: sha(1) }),
    ).toEqual({
      status: 'skipped',
      reason: 'already_clean',
    });
  });

  it('2 detections hold the version of an unverified author and signal them', async () => {
    const v = versions[1] as (typeof versions)[number];
    const fake: FakeVt = { reports: new Map([[sha(2), analysed(2)]]), uploads: [], status: null };
    const outcome = await runSecurityScan(
      ctx,
      { virusTotal: vtClient(fake), storage },
      { modVersionId: v.id, sha256: sha(2) },
    );
    expect(outcome).toEqual({ status: 'done', verdict: 'suspicious', positives: 2, held: true });
    expect(await versionRow(v.id)).toEqual({ status: 'pending', statusReason: SCAN_HOLD_REASON });
    expect((await scanRows(v.id))[0].raw.detections).toEqual({ Engine0: 'malicious', Engine1: 'malicious' });
    const signal = await exec(
      db,
      `SELECT "data" FROM "Notification" WHERE "userId" = $1 AND "type" = 'mod.status_changed' ORDER BY "id" DESC LIMIT 1`,
      [v.authorId],
    );
    expect(signal.rows[0]?.data).toMatchObject({ status: 'version_held', versionId: v.id, scanVerdict: 'suspicious' });
    expect((await events('version.status_changed', v.id)).length).toBeGreaterThan(0);
  });

  it('2 detections do not hold a verified creator; 3 detections hold everyone', async () => {
    const trusted = versions[2] as (typeof versions)[number];
    const trusted3 = versions[3] as (typeof versions)[number];
    await exec(db, `UPDATE "User" SET "verifiedCreator" = true WHERE "id" = ANY($1::int[])`, [
      [trusted.authorId, trusted3.authorId],
    ]);
    const fake: FakeVt = {
      reports: new Map([
        [sha(3), analysed(2)],
        [sha(4), analysed(3)],
      ]),
      uploads: [],
      status: null,
    };
    const a = await runSecurityScan(
      ctx,
      { virusTotal: vtClient(fake), storage },
      { modVersionId: trusted.id, sha256: sha(3) },
    );
    expect(a).toMatchObject({ verdict: 'suspicious', held: false });
    expect((await versionRow(trusted.id)).status).toBe('active');
    const b = await runSecurityScan(
      ctx,
      { virusTotal: vtClient(fake), storage },
      { modVersionId: trusted3.id, sha256: sha(4) },
    );
    expect(b).toMatchObject({ verdict: 'malicious', positives: 3, held: true });
    expect((await versionRow(trusted3.id)).status).toBe('pending');
  });

  it('uploads an unknown file, polls until the first analysis and then decides', async () => {
    const v = versions[4] as (typeof versions)[number];
    const fake: FakeVt = { reports: new Map(), uploads: [], status: null };
    const first = await runSecurityScan(
      ctx,
      { virusTotal: vtClient(fake), storage },
      { modVersionId: v.id, sha256: sha(5) },
    );
    expect(first).toMatchObject({ status: 'rescheduled', reason: 'uploaded' });
    expect(fake.uploads).toHaveLength(1);
    const [declared, sent] = (fake.uploads[0] as string).split(':').map(Number);
    expect(sent).toBe(declared);
    expect((await scanRows(v.id))[0]).toMatchObject({
      verdict: 'pending',
      raw: { analysisId: 'analysis-1', polls: 0 },
    });
    expect(await jobs('security.scan', v.id)).toHaveLength(1);

    // Known but not analysed yet → poll again.
    fake.reports.set(sha(5), { data: { attributes: {} } });
    const second = await runSecurityScan(
      ctx,
      { virusTotal: vtClient(fake), storage },
      { modVersionId: v.id, sha256: sha(5) },
    );
    expect(second).toMatchObject({ status: 'rescheduled', reason: 'analysis_pending' });
    expect((await scanRows(v.id))[0].raw.polls).toBe(1);

    fake.reports.set(sha(5), analysed(0));
    const third = await runSecurityScan(
      ctx,
      { virusTotal: vtClient(fake), storage },
      { modVersionId: v.id, sha256: sha(5) },
    );
    expect(third).toMatchObject({ status: 'done', verdict: 'clean' });
    expect(await scanRows(v.id)).toHaveLength(1);
  });

  it('reschedules on 429 and on a spent daily quota', async () => {
    const v = versions[5] as (typeof versions)[number];
    const limited: FakeVt = { reports: new Map(), uploads: [], status: 429 };
    const before = Date.now();
    const a = await runSecurityScan(
      ctx,
      { virusTotal: vtClient(limited), storage },
      { modVersionId: v.id, sha256: sha(6) },
    );
    expect(a).toMatchObject({ status: 'rescheduled', reason: 'rate_limited' });
    expect(new Date((a as { at: string }).at).getTime()).toBeGreaterThanOrEqual(before + 60_000);

    const tomorrow = new Date(Date.now() + 86_400_000);
    const spent = vtClient({ reports: new Map(), uploads: [], status: null }, async () => {
      throw new QuotaExhausted(tomorrow);
    });
    const b = await runSecurityScan(ctx, { virusTotal: spent, storage }, { modVersionId: v.id, sha256: sha(6) });
    expect(b).toEqual({ status: 'rescheduled', reason: 'daily_quota', at: tomorrow.toISOString() });
    const queued = await jobs('security.scan', v.id);
    expect(queued).toHaveLength(2);
    expect((await scanRows(v.id)).map((s: any) => s.verdict)).toEqual(['pending']);
    expect((await versionRow(v.id)).status).toBe('active');
  });

  it('without an API key the file is "not scanned" and waits for a human when the author is not verified', async () => {
    const v = versions[6] as (typeof versions)[number];
    const outcome = await runSecurityScan(
      ctx,
      { virusTotal: null, storage: null },
      { modVersionId: v.id, sha256: sha(7) },
    );
    expect(outcome).toEqual({ status: 'done', verdict: 'unknown', positives: null, held: true });
    expect((await scanRows(v.id))[0].raw.reason).toBe('no_api_key');
  });

  it('a refused API key ends as unknown instead of retrying forever', async () => {
    const v = versions[7] as (typeof versions)[number];
    const refused: FakeVt = { reports: new Map(), uploads: [], status: 401 };
    const outcome = await runSecurityScan(
      ctx,
      { virusTotal: vtClient(refused), storage },
      { modVersionId: v.id, sha256: sha(8) },
    );
    expect(outcome).toMatchObject({ status: 'done', verdict: 'unknown' });
    expect((await scanRows(v.id))[0].raw.reason).toBe('api_key_refused');
  });
});
