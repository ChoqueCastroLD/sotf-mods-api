/**
 * End to end: the --small development seed on a real PostgreSQL 16, then the acceptance checks of
 * WP-14 (backfills idempotent, verify-snapshot only shows the audited fixes, invariants green),
 * audited fixes reverted, admin:grant and the anonymisation SQL.
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { stopTestServer } from '@sotf/db/testing';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { BACKFILLS, runBackfills } from '../src/backfills/index.ts';
import { SMALL_DOWNLOADS, SQL_DIR } from '../src/constants.ts';
import { grantRole, revertFix } from '../src/fixes.ts';
import { runInvariants } from '../src/invariants.ts';
import { type SeedReport, seedDev } from '../src/seed/run.ts';
import { compareSnapshots, takeSnapshot } from '../src/verify-snapshot.ts';
import { quiet, type Scratch, scalar, scratch } from './_helpers.ts';

let db: Scratch;
let report: SeedReport;

beforeAll(async () => {
  db = await scratch();
  report = await seedDev({ url: db.url, small: true, pgBoss: false, outDir: db.outDir, log: quiet });
}, 180_000);

afterAll(async () => {
  await db?.close();
  await stopTestServer();
});

describe('db:seed:dev --small', () => {
  it('loads the exact volumes and the injected rare cases', () => {
    expect(report.counts).toMatchObject({
      users: 3883,
      mods: 257,
      versions: 612,
      comments: 278,
      favoritesLoaded: 237,
      favorites: 234,
      favoritesArchived: 3,
      downloads: SMALL_DOWNLOADS,
    });
    expect(report.deferred).toEqual(['0045_idx_user_email_normalized_key']);
    expect(readFileSync(join(db.outDir, 'email-collisions.csv'), 'utf8')).toMatch(
      /survivor\.twin@example\.test,\d+,Survivor\.Twin/,
    );
  });

  it('only the audited fixes differ from the before snapshot, and every invariant is green', () => {
    expect(report.diff.ok).toBe(true);
    expect(report.diff.differences.map((d) => d.where)).toEqual(['Mod', 'ModFavorite']);
    expect(report.invariants.filter((i) => !i.ok)).toEqual([]);
    expect(report.invariants).toHaveLength(11);
  });

  it('writes what the backfills promise', async () => {
    const c = db.client;
    expect(await scalar(c, `SELECT count(*) FROM "Mod" WHERE "status" = 'pending'`)).toBe(28);
    expect(await scalar(c, `SELECT count(*) FROM "Mod" WHERE "status" IN ('archived', 'rejected', 'removed')`)).toBe(0);
    expect(await scalar(c, `SELECT count(*) FROM "User" WHERE "role" = 'moderator'`)).toBe(
      await scalar(c, `SELECT count(*) FROM "User" WHERE "isTrusted"`),
    );
    expect(await scalar(c, `SELECT count(*) FROM "User" WHERE "emailVerifiedAt" IS NOT NULL`)).toBe(192);
    expect(await scalar(c, `SELECT "canonicalSlug" FROM "Mod" WHERE "slug" = 'regi''s-modding-library'`)).toBe(
      'regis-modding-library',
    );
    expect(await scalar(c, `SELECT count(*) FROM "ModDependency" WHERE "depModId" IS NOT NULL`)).toBe(12);
    expect(await scalar(c, `SELECT "status" FROM "ModVersion" WHERE "id" = 414`)).toBe('file_missing');
    expect(await scalar(c, `SELECT "bodyMd" FROM "Comment" WHERE "message" LIKE '%&lt;3%'`)).toMatch(/<3/);
    expect(await scalar(c, `SELECT count(*) FROM "Mod" WHERE "descriptionHtml" IS NULL`)).toBe(0);
    expect(await scalar(c, `SELECT "value" FROM "SiteStat" WHERE "key" = 'downloads'`)).toBe(SMALL_DOWNLOADS);
    expect(await scalar(c, `SELECT count(*) FROM "Mod" WHERE "platform" IS NOT NULL`)).toBeGreaterThan(0);
  });

  it('a second --all run changes nothing and gives the same verify-snapshot', async () => {
    const first = await takeSnapshot(db.client);
    const results = await runBackfills(db.client, BACKFILLS, { log: quiet, outDir: db.outDir });
    expect(results.map((r) => [r.id, r.rows]).filter(([, rows]) => rows !== 0)).toEqual([]);
    const second = await takeSnapshot(db.client);
    expect(compareSnapshots(first, second, { strict: true })).toEqual({ ok: true, differences: [] });
  });

  it('--dry-run leaves no trace', async () => {
    const runs = await scalar(db.client, 'SELECT count(*) FROM "MigrationRun"');
    const before = await takeSnapshot(db.client);
    await runBackfills(db.client, BACKFILLS, { log: quiet, outDir: db.outDir, dryRun: true });
    expect(await scalar(db.client, 'SELECT count(*) FROM "MigrationRun"')).toBe(runs);
    expect(compareSnapshots(before, await takeSnapshot(db.client), { strict: true }).ok).toBe(true);
  });

  it('db:revert-fix B4 restores the NULL types row by row, and B4 can be applied again', async () => {
    const before = await takeSnapshot(db.client);
    const dry = await revertFix(db.client, 'B4', { dryRun: true });
    expect(dry.reverted).toBe(19);
    expect(await scalar(db.client, `SELECT count(*) FROM "Mod" WHERE "type" IS NULL`)).toBe(0);
    const result = await revertFix(db.client, 'B4');
    expect(result).toMatchObject({ reverted: 19, conflicts: [] });
    expect(await scalar(db.client, `SELECT count(*) FROM "Mod" WHERE "type" IS NULL`)).toBe(19);
    const reverted = await takeSnapshot(db.client);
    // With the fix undone the Mod table is back to its pre-backfill checksum.
    expect(reverted.tables.Mod).toEqual(before.fixes?.Mod);
    const again = await runBackfills(
      db.client,
      BACKFILLS.filter((b) => b.id === 'B4'),
      { log: quiet, outDir: db.outDir },
    );
    expect(again[0]?.rows).toBe(19);
  });

  it('db:revert-fix B5 reports the unique index as a conflict instead of breaking it', async () => {
    const result = await revertFix(db.client, 'B5');
    expect(result.reverted).toBe(0);
    expect(result.conflicts).toHaveLength(3);
    expect(result.conflicts[0]?.reason).toMatch(/ModFavorite_userId_modId_key/);
    expect(await scalar(db.client, 'SELECT count(*) FROM "ModFavoriteArchive"')).toBe(3);
  });

  it('admin:grant sets the role, the legacy isTrusted (audited) and an AuditLog row', async () => {
    await expect(grantRole(db.client, { email: 'nobody@example.test', role: 'admin' })).rejects.toThrow(
      /normal sign-up/,
    );
    await expect(grantRole(db.client, { email: 'survivor.twin@example.test', role: 'admin' })).rejects.toThrow(
      /collision/,
    );
    const dry = await grantRole(db.client, { email: 'SURVIVOR2@example.test ', role: 'admin', dryRun: true });
    expect(dry).toMatchObject({ userId: 2, previousRole: 'user', trustedSet: true });
    expect(await scalar(db.client, `SELECT "role" FROM "User" WHERE "id" = 2`)).toBe('user');

    const granted = await grantRole(db.client, { email: 'survivor2@example.test', role: 'admin' });
    expect(granted.trustedSet).toBe(true);
    expect(await scalar(db.client, `SELECT "role" || ':' || "isTrusted" FROM "User" WHERE "id" = 2`)).toBe(
      'admin:true',
    );
    expect(
      await scalar(
        db.client,
        `SELECT count(*) FROM "AuditLog" WHERE "action" = 'user.role_granted' AND "targetId" = 2`,
      ),
    ).toBe(1);
    const snapshot = await takeSnapshot(db.client);
    expect(snapshot.fixes?.audit['admin-grant:User.isTrusted']).toBe(1);

    const reverted = await revertFix(db.client, 'admin-grant');
    expect(reverted.reverted).toBe(1);
    expect(await scalar(db.client, `SELECT "isTrusted" FROM "User" WHERE "id" = 2`)).toBe(false);
  });

  it('anonymize.sql keeps the counts and the download channels', async () => {
    const channels = `SELECT string_agg(ch || '=' || n, ',' ORDER BY ch) FROM (
      SELECT CASE WHEN ip = 'undefined' THEN 'client' WHEN ip IN ('null', '') THEN 'unknown'
                  WHEN ip LIKE '%,%' THEN 'multi' ELSE 'web' END AS ch, count(*) AS n FROM "ModDownload" GROUP BY 1) x`;
    const before = await scalar<string>(db.client, channels);
    await db.client.query(readFileSync(join(SQL_DIR, 'anonymize.sql'), 'utf8'));
    expect(await scalar<string>(db.client, channels)).toBe(before);
    expect(await scalar(db.client, `SELECT count(*) FROM "User" WHERE "email" NOT LIKE 'user%@example.invalid'`)).toBe(
      0,
    );
    expect(await scalar(db.client, `SELECT count(DISTINCT "password") FROM "User"`)).toBe(1);
    expect(await scalar(db.client, `SELECT count(*) FROM "Token"`)).toBe(0);
    expect(await scalar(db.client, `SELECT count(*) FROM "Comment" WHERE "ip" <> 'redacted'`)).toBe(0);
    expect(await scalar(db.client, `SELECT count(*) FROM "ModDownload" WHERE "ip" ~ '^\\d+\\.'`)).toBe(0);
    const invariants = await runInvariants(db.client, { minSiteDownloads: SMALL_DOWNLOADS });
    expect(invariants.filter((i) => !i.ok).map((i) => i.id)).toEqual([]);
  });
});
