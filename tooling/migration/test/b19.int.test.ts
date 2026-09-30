/** B19: every existing version of a legacy-approved mod is approved; unapproved mods stay pending. */
import { BASELINE_NAME, migrateUp } from '@sotf/db';
import { stopTestServer } from '@sotf/db/testing';
import { afterAll, afterEach, beforeEach, describe, expect, it } from 'vitest';
import { runBackfills, selectBackfills } from '../src/backfills/index.ts';
import { revertFix } from '../src/fixes.ts';
import { legacy, quiet, type Scratch, scalar, scratch } from './_helpers.ts';

let db: Scratch;
beforeEach(async () => {
  db = await scratch({ migrate: true, target: BASELINE_NAME });
});
afterEach(async () => {
  await db.close();
});
afterAll(async () => {
  await stopTestServer();
});

const run = (ids: string[], options: { dryRun?: boolean; batchSize?: number } = {}) =>
  runBackfills(db.client, selectBackfills(ids), { log: quiet, outDir: db.outDir, ...options });

async function seed(): Promise<void> {
  const c = db.client;
  await legacy.user(c, 1);
  await legacy.mod(c, 1, 1); // approved
  await legacy.mod(c, 2, 1, { approved: false }); // unapproved
  await legacy.version(c, 1, 1);
  await legacy.version(c, 2, 2);
  for (const table of ['User', 'Mod', 'ModVersion']) {
    await c.query(
      `SELECT setval(pg_get_serial_sequence('"${table}"', 'id'), (SELECT coalesce(max(id), 0) + 1 FROM "${table}"), false)`,
    );
  }
  await migrateUp(c, { pgBoss: false });
  await run(['B12']);
  // New v2 versions of the approved mod: held, failed, rejected, and a future one; one of the unapproved mod.
  const add = (id: number, modId: number, version: string, status: string, checks: string, createdAt: string) =>
    c.query(
      `INSERT INTO "ModVersion" ("id", "version", "isLatest", "changelog", "downloadUrl", "createdAt", "updatedAt", "modId",
                                 "status", "checksStatus", "publishedById")
       VALUES ($1, $2, false, '', 'https://r2.sotf-mods.com/x.zip', $3, $3, $4, $5, $6, 1)`,
      [id, version, createdAt, modId, status, checks],
    );
  await add(10, 1, '1.1.0', 'pending', 'pending', '2026-01-01T00:00:00Z');
  await add(11, 1, '1.2.0', 'pending', 'failed', '2026-01-01T00:00:00Z');
  await add(12, 1, '1.3.0', 'rejected', 'passed', '2026-01-01T00:00:00Z');
  await add(13, 1, '9.0.0', 'pending', 'pending', '2999-01-01T00:00:00Z');
  await add(14, 2, '1.1.0', 'pending', 'pending', '2026-01-01T00:00:00Z');
}

describe('B19', () => {
  it('approves existing versions of approved mods only, is idempotent, audited and revertible', async () => {
    await seed();
    const c = db.client;
    const dry = await run(['B19'], { dryRun: true });
    expect(dry[0]?.notes.activated).toBe(1);
    expect(await scalar(c, `SELECT "status" FROM "ModVersion" WHERE "id" = 10`)).toBe('pending');

    const [result] = await run(['B19'], { batchSize: 1 });
    expect(result?.notes).toMatchObject({ activated: 1, heldFailed: 1, leftAlone: { rejected: 1 } });
    const state = (id: number) =>
      scalar<string>(
        c,
        `SELECT "status" || ':' || "checksStatus" || ':' || "isLatest" FROM "ModVersion" WHERE "id" = $1`,
        [id],
      );
    expect(await state(10)).toBe('active:passed:true'); // 1.1.0 is the new latest
    expect(await state(1)).toBe('active:passed:false');
    expect(await state(11)).toBe('pending:failed:false');
    expect(await state(12)).toBe('rejected:passed:false');
    expect(await state(13)).toBe('pending:pending:false'); // created after the run
    expect(await state(14)).toBe('pending:pending:false'); // unapproved mod
    expect(await scalar(c, `SELECT "status" FROM "Mod" WHERE "id" = 2`)).toBe('pending');
    expect(await scalar(c, `SELECT "latestVersion" FROM "Mod" WHERE "id" = 1`)).toBe('1.1.0');
    expect(
      await scalar(c, `SELECT count(*) FROM "AuditLog" WHERE "action" = 'version.approve' AND "targetId" = 10`),
    ).toBe(1);
    expect(await scalar(c, `SELECT count(*) FROM "DataFixAudit" WHERE "fixId" = 'B19'`)).toBeGreaterThan(0);

    const again = await run(['B19']);
    expect(again[0]?.rows).toBe(0);

    const reverted = await revertFix(c, 'B19');
    expect(reverted.conflicts).toEqual([]);
    expect(await state(10)).toBe('pending:pending:false');
    expect(await state(1)).toBe('active:passed:true');
  });
});
