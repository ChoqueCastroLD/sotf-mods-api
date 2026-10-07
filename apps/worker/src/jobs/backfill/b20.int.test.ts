/**
 * B20 (automatic checks of the versions of pending legacy mods) against PostgreSQL 16 and a SeaweedFS
 * S3 emulator: zips pass, get flagged or fail, a missing object fails with a reason (no crash), the
 * key is read from `downloadUrl` when `storageKey` is empty, VirusTotal verdicts are stored without
 * holding anything, statuses never change, `DataFixAudit` records the columns, the dry run writes
 * nothing and a second run finds nothing to do.
 */
import { createHash } from 'node:crypto';
import { Jobs, ManualClock, silentLogger, systemCtx } from '@sotf/core';
import { type FileReport, QuotaExhausted, type VirusTotalClient } from '@sotf/core/security-scan/index';
import { createStorage, type ObjectStorage } from '@sotf/core/storage/index';
import { startTestS3, type TestS3 } from '@sotf/core/storage/testing';
import { createFactories, type Factories, startTestDb, type TestDb } from '@sotf/db/testing';
import { sql } from 'drizzle-orm';
import { strToU8, zipSync } from 'fflate';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { B20_FIX_ID, keyFromPublicUrl, runB20 } from './b20.ts';

let db: TestDb;
let s3: TestS3;
let storage: ObjectStorage;
let f: Factories;
const sent: string[] = [];

beforeAll(async () => {
  [db, s3] = await Promise.all([startTestDb(), startTestS3()]);
  storage = createStorage(s3.config);
  f = createFactories(db.db);
});

afterAll(async () => {
  storage?.destroy();
  await Promise.all([db?.stop(), s3?.stop()]);
});

function ctx() {
  const clock = new ManualClock('2026-10-10T12:00:00.000Z');
  const boss = {
    send: async (name: string) => {
      sent.push(name);
      return `job-${sent.length}`;
    },
    sendDebounced: async () => null,
  };
  return systemCtx(
    { db: db.db, jobs: new Jobs(boss as never, { clock }), clock, log: silentLogger(), appSecret: 'x'.repeat(40) },
    'b20-test',
  );
}

const options = (dryRun: boolean, virusTotal: VirusTotalClient | null = null) => ({
  dryRun,
  batchSize: 50,
  signal: new AbortController().signal,
  virusTotal,
});

async function put(key: string, body: Buffer, contentType = 'application/zip'): Promise<void> {
  await storage.put({ bucket: s3.config.publicBucket, key, body, contentLength: body.length, contentType });
}

function zipOf(manifestId: string, extra: Record<string, Uint8Array> = {}): Buffer {
  const manifest = { id: manifestId, name: manifestId, version: '1.0.0', type: 'Mod' };
  return Buffer.from(
    zipSync({
      'manifest.json': strToU8(JSON.stringify(manifest)),
      [`${manifestId}.dll`]: new Uint8Array(512).fill(3),
      ...extra,
    }),
  );
}

async function pendingMod(manifestId: string, version: Record<string, unknown>) {
  const created = await f.modWithVersion(
    { manifestId, status: 'pending', isApproved: false },
    { version: '1.0.0', checksStatus: 'pending', ...version },
  );
  return created;
}

async function checks(versionId: number) {
  const { rows } = await db.db.execute<Record<string, unknown>>(sql`
    SELECT v."checksStatus", v."status" AS "versionStatus", v."sha256", v."fileSize", v."manifest" ->> 'id' AS "manifestId",
           m."status" AS "modStatus", vi."status" AS "inspection", vi."error", vi."flags", vi."sha256" AS "inspectionSha"
      FROM "ModVersion" v JOIN "Mod" m ON m."id" = v."modId"
      LEFT JOIN "VersionInspection" vi ON vi."modVersionId" = v."id" WHERE v."id" = ${versionId}`);
  return rows[0] as Record<string, unknown>;
}

async function count(statement: ReturnType<typeof sql>): Promise<number> {
  const { rows } = await db.db.execute<{ n: number }>(statement);
  return Number(rows[0]?.n ?? 0);
}

describe('keyFromPublicUrl', () => {
  it('decodes the key inside a public URL and ignores other hosts', () => {
    expect(keyFromPublicUrl("https://r2.sotf-mods.com/1700_Axel's%20Menu%20(v2).zip", 'https://r2.sotf-mods.com')).toBe(
      "1700_Axel's Menu (v2).zip",
    );
    expect(keyFromPublicUrl('https://files.example.com/a.zip', 'https://r2.sotf-mods.com')).toBeNull();
    expect(keyFromPublicUrl(null, 'https://r2.sotf-mods.com')).toBeNull();
    expect(keyFromPublicUrl('https://r2.sotf-mods.com/', 'https://r2.sotf-mods.com')).toBeNull();
  });
});

describe('B20 · checks of pending legacy versions', () => {
  it('inspects, flags and fails with reasons, never changing a status, and is idempotent', async () => {
    const good = zipOf('GoodMod');
    await put('1_good.zip', good);
    const flagged = zipOf('FlaggedMod', { 'installer.exe': new Uint8Array(64).fill(1) });
    await put('2_flagged.zip', flagged);
    await put('3_broken.zip', Buffer.from('this is not a zip file at all'));
    const mismatch = zipOf('SomethingElse');
    await put('4_mismatch.zip', mismatch);
    const spaced = zipOf('SpacedMod');
    await put('5_Spaced Mod (v2).zip', spaced);

    const a = await pendingMod('GoodMod', { storageKey: '1_good.zip' });
    const b = await pendingMod('FlaggedMod', { storageKey: '2_flagged.zip' });
    const c = await pendingMod('BrokenMod', { storageKey: '3_broken.zip' });
    const d = await pendingMod('LostMod', { storageKey: '9_gone.zip' });
    const e = await pendingMod('MismatchMod', { storageKey: '4_mismatch.zip' });
    const g = await pendingMod('SpacedMod', {
      storageKey: null,
      downloadUrl: `${s3.config.publicBaseUrl}/${encodeURIComponent('5_Spaced Mod (v2).zip')}`,
    });
    const h = await pendingMod('NoFileMod', {
      storageKey: null,
      downloadUrl: 'https://files.example.com/x.zip',
      status: 'file_missing',
    });

    // Not candidates: a published mod, and a pending mod whose version already has its checks.
    const published = await f.modWithVersion(
      { manifestId: 'Published' },
      { checksStatus: 'pending', storageKey: '1_good.zip' },
    );
    const done = await pendingMod('DoneMod', { storageKey: '1_good.zip', checksStatus: 'passed' });
    const etag = (await storage.head(s3.config.publicBucket, '1_good.zip'))?.etag;

    // Dry run: HEAD only.
    const dry = await runB20(ctx(), storage, options(true));
    expect(dry).toMatchObject({ dryRun: true, candidates: 7, present: 5, missing: 2, inspected: 0 });
    expect(await count(sql`SELECT count(*) AS n FROM "VersionInspection"`)).toBe(0);
    expect(await count(sql`SELECT count(*) AS n FROM "DataFixAudit" WHERE "fixId" = ${B20_FIX_ID}`)).toBe(0);
    expect(await count(sql`SELECT count(*) AS n FROM "MigrationRun" WHERE "name" = 'backfill:B20'`)).toBe(0);

    const applied = await runB20(ctx(), storage, options(false));
    expect(applied).toMatchObject({
      candidates: 7,
      inspected: 7,
      passed: 2,
      flagged: 2,
      failed: 3,
      deferred: 0,
      mods: 7,
    });
    expect(applied.missingObjects).toHaveLength(2);

    expect(await checks(a.version.id)).toMatchObject({
      checksStatus: 'passed',
      inspection: 'passed',
      manifestId: 'GoodMod',
      sha256: createHash('sha256').update(good).digest('hex'),
      fileSize: String(good.length),
      modStatus: 'pending',
      versionStatus: 'active',
    });
    expect(await checks(b.version.id)).toMatchObject({ checksStatus: 'flagged', modStatus: 'pending' });
    expect((await checks(b.version.id)).flags).toEqual(
      expect.arrayContaining([expect.objectContaining({ code: 'extension_flagged', severity: 'warning' })]),
    );
    expect(await checks(c.version.id)).toMatchObject({ checksStatus: 'failed', inspection: 'failed' });
    expect((await checks(c.version.id)).flags).toEqual(
      expect.arrayContaining([expect.objectContaining({ code: 'zip_invalid', severity: 'error' })]),
    );
    expect(await checks(d.version.id)).toMatchObject({
      checksStatus: 'failed',
      inspection: 'failed',
      error: 'object_missing',
      modStatus: 'pending',
    });
    expect(await checks(e.version.id)).toMatchObject({ checksStatus: 'flagged' });
    expect((await checks(e.version.id)).flags).toEqual(
      expect.arrayContaining([expect.objectContaining({ code: 'manifest_id_mismatch', severity: 'warning' })]),
    );
    expect(await checks(g.version.id)).toMatchObject({ checksStatus: 'passed', manifestId: 'SpacedMod' });
    expect(await checks(h.version.id)).toMatchObject({
      checksStatus: 'failed',
      error: 'object_missing',
      versionStatus: 'file_missing',
      modStatus: 'pending',
    });

    // Untouched.
    expect(await checks(published.version.id)).toMatchObject({ checksStatus: 'pending', inspection: null });
    expect(await checks(done.version.id)).toMatchObject({ checksStatus: 'passed', inspection: null });
    expect((await storage.head(s3.config.publicBucket, '1_good.zip'))?.etag).toBe(etag);

    // Audited and recorded.
    expect(
      await count(sql`SELECT count(*) AS n FROM "DataFixAudit" WHERE "fixId" = ${B20_FIX_ID} AND "columnName" = 'checksStatus'
                        AND "oldValue" = '"pending"'::jsonb`),
    ).toBe(7);
    expect(
      await count(
        sql`SELECT count(*) AS n FROM "DataFixAudit" WHERE "fixId" = ${B20_FIX_ID} AND "columnName" = 'sha256'`,
      ),
    ).toBe(5);
    expect(
      await count(
        sql`SELECT count(*) AS n FROM "MigrationRun" WHERE "name" = 'backfill:B20' AND "finishedAt" IS NOT NULL`,
      ),
    ).toBe(1);
    expect(await count(sql`SELECT count(*) AS n FROM "SecurityScan"`)).toBe(0);

    // Second run: nothing left.
    const again = await runB20(ctx(), storage, options(false));
    expect(again).toMatchObject({ candidates: 0, inspected: 0 });
  });

  it('stores VirusTotal verdicts without holding versions, and stops when the quota is spent', async () => {
    const clean = zipOf('VtClean');
    const suspicious = zipOf('VtSuspicious', { 'extra.txt': strToU8('suspicious') });
    const unknown = zipOf('VtUnknown', { 'extra.txt': strToU8('unknown') });
    const later = zipOf('VtLater', { 'extra.txt': strToU8('later') });
    await put('vt_clean.zip', clean);
    await put('vt_suspicious.zip', suspicious);
    await put('vt_unknown.zip', unknown);
    await put('vt_later.zip', later);
    const sha = (buffer: Buffer) => createHash('sha256').update(buffer).digest('hex');
    const stats = (malicious: number) => ({
      malicious,
      suspicious: 0,
      undetected: 60 - malicious,
      harmless: 10,
      timeout: 0,
      failure: 0,
      typeUnsupported: 0,
    });
    const lookups: string[] = [];
    const vt: VirusTotalClient = {
      async lookup(hash): Promise<FileReport | null> {
        lookups.push(hash);
        if (hash === sha(clean))
          return { sha256: hash, stats: stats(0), lastAnalysisAt: new Date('2026-09-01'), detections: {} };
        if (hash === sha(suspicious)) {
          return {
            sha256: hash,
            stats: stats(2),
            lastAnalysisAt: new Date('2026-09-01'),
            detections: { EngineA: 'malicious' },
          };
        }
        if (hash === sha(unknown)) return null;
        throw new QuotaExhausted(new Date('2026-10-11T00:00:30Z'));
      },
      async upload() {
        throw new Error('B20 must never upload a file to VirusTotal');
      },
    };

    const v1 = await pendingMod('VtClean', { storageKey: 'vt_clean.zip' });
    const v2 = await pendingMod('VtSuspicious', { storageKey: 'vt_suspicious.zip' });
    const v3 = await pendingMod('VtUnknown', { storageKey: 'vt_unknown.zip' });
    const v4 = await pendingMod('VtLater', { storageKey: 'vt_later.zip' });

    const run = await runB20(ctx(), storage, { ...options(false, vt), batchSize: 100 });
    expect(run.scan).toMatchObject({ enabled: true, clean: 1, suspicious: 1, notKnown: 1 });
    expect(run.stoppedEarly).toContain('quota exhausted');
    expect(run.deferred).toBe(1);

    expect(await checks(v1.version.id)).toMatchObject({ checksStatus: 'passed', versionStatus: 'active' });
    expect(await checks(v2.version.id)).toMatchObject({
      checksStatus: 'flagged',
      versionStatus: 'active',
      modStatus: 'pending',
    });
    expect((await checks(v2.version.id)).flags).toEqual(
      expect.arrayContaining([expect.objectContaining({ code: 'scan_detections', severity: 'warning' })]),
    );
    expect(await checks(v3.version.id)).toMatchObject({ checksStatus: 'passed' });
    // The deferred one stays pending for the next run.
    expect(await checks(v4.version.id)).toMatchObject({ checksStatus: 'pending', inspection: null });

    const { rows: scans } = await db.db.execute<{ modVersionId: number; verdict: string; positives: number }>(
      sql`SELECT "modVersionId", "verdict", "positives" FROM "SecurityScan" ORDER BY "modVersionId"`,
    );
    expect(scans.map((s) => [s.modVersionId, s.verdict, s.positives])).toEqual([
      [v1.version.id, 'clean', 0],
      [v2.version.id, 'suspicious', 2],
    ]);
    expect(sent).not.toContain('security.scan');
    expect(sent).not.toContain('domain.event');

    // After the quota resets, the run continues with what is left and reuses nothing it already did.
    const retry = await runB20(
      ctx(),
      storage,
      options(false, {
        ...vt,
        lookup: async (hash) =>
          hash === sha(later) ? { sha256: hash, stats: stats(5), lastAnalysisAt: new Date(), detections: {} } : null,
      }),
    );
    expect(retry).toMatchObject({ candidates: 1, inspected: 1, failed: 1 });
    expect(await checks(v4.version.id)).toMatchObject({ checksStatus: 'failed', modStatus: 'pending' });
    expect(lookups.length).toBeGreaterThanOrEqual(4);
  });
});
