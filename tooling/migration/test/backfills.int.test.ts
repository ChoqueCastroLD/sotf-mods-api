/**
 * Backfills on hand-made legacy data (the cases the snapshot does not contain): versions without
 * mod, NULL follows, resumable watermarks, collisions, dry runs, roles never downgraded.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { BASELINE_NAME, migrateUp } from '@sotf/db';
import { stopTestServer } from '@sotf/db/testing';
import { afterAll, afterEach, beforeEach, describe, expect, it } from 'vitest';
import { BACKFILLS, runBackfills, selectBackfills } from '../src/backfills/index.ts';
import { revertFix } from '../src/fixes.ts';
import { runInvariants } from '../src/invariants.ts';
import { compareSnapshots, takeSnapshot } from '../src/verify-snapshot.ts';
import { legacy, quiet, type Scratch, scalar, scratch } from './_helpers.ts';

let db: Scratch;

/** Legacy data first (baseline only), then the v2 expand: the production order. */
async function legacyThenMigrate(fill: (c: Scratch['client']) => Promise<void>): Promise<void> {
  await fill(db.client);
  for (const table of ['User', 'Mod', 'ModVersion', 'ModFavorite', 'Comment']) {
    await db.client.query(
      `SELECT setval(pg_get_serial_sequence('"${table}"', 'id'), (SELECT coalesce(max(id), 0) + 1 FROM "${table}"), false)`,
    );
  }
  await migrateUp(db.client, { pgBoss: false });
}

const run = (ids: string[], options: { dryRun?: boolean; batchSize?: number } = {}) =>
  runBackfills(db.client, ids.length ? selectBackfills(ids) : BACKFILLS, { log: quiet, outDir: db.outDir, ...options });

beforeEach(async () => {
  db = await scratch({ migrate: true, target: BASELINE_NAME });
});
afterEach(async () => {
  await db.close();
});
afterAll(async () => {
  await stopTestServer();
});

describe('B1 download aggregates', () => {
  it('sends versions without a mod and NULL versions to SiteDownloadDaily, by channel', async () => {
    await legacyThenMigrate(async (c) => {
      await legacy.user(c, 1);
      await legacy.mod(c, 1, 1);
      await legacy.version(c, 1, 1);
      await legacy.version(c, 2, null);
      await legacy.downloads(c, 1, 5, '1.2.3.4');
      await legacy.downloads(c, 1, 3, 'undefined');
      await legacy.downloads(c, 1, 2, 'null');
      await legacy.downloads(c, 1, 1, '');
      await legacy.downloads(c, 2, 4, 'undefined');
      await legacy.downloads(c, null, 6, '9.9.9.9');
      await c.query(`UPDATE "Mod" SET "downloads" = 11`);
    });
    await run([], { batchSize: 3 });
    const perChannel = await db.client.query(
      `SELECT "channel", "downloads" FROM "ModVersionDownloadDaily" WHERE "modVersionId" = 1 ORDER BY 1`,
    );
    expect(perChannel.rows).toEqual([
      { channel: 'client', downloads: 3 },
      { channel: 'unknown', downloads: 3 },
      { channel: 'web', downloads: 5 },
    ]);
    const site = await db.client.query(`SELECT "channel", "downloads" FROM "SiteDownloadDaily" ORDER BY 1`);
    expect(site.rows).toEqual([
      { channel: 'client', downloads: 4 },
      { channel: 'web', downloads: 6 },
    ]);
    expect(await scalar(db.client, `SELECT "value" FROM "SiteStat" WHERE "key" = 'orphanDownloads'`)).toBe(10);
    const invariants = await runInvariants(db.client, { minSiteDownloads: 21, expectedFileMissing: 0 });
    expect(invariants.find((i) => i.id.startsWith('1-'))?.ok).toBe(true);
    expect(invariants.find((i) => i.id.startsWith('2-'))?.ok).toBe(true);
  });

  it('resumes from its watermark: new rows are counted once, old rows never twice', async () => {
    await legacyThenMigrate(async (c) => {
      await legacy.user(c, 1);
      await legacy.mod(c, 1, 1);
      await legacy.version(c, 1, 1);
      await legacy.downloads(c, 1, 7);
    });
    await run(['B1']);
    await run(['B1']);
    expect(await scalar(db.client, `SELECT sum("downloads") FROM "ModVersionDownloadDaily"`)).toBe(7);
    // The legacy API keeps inserting after the migration (same day and a later day).
    await legacy.downloads(db.client, 1, 4);
    await legacy.downloads(db.client, 1, 2, 'undefined', '2024-05-02T00:00:00.000Z');
    const [delta] = await run(['B1']);
    expect(delta?.rows).toBe(6);
    expect(await scalar(db.client, `SELECT sum("downloads") FROM "ModVersionDownloadDaily"`)).toBe(13);
    // (2024-05-01, web) was incremented in place; (2024-05-02, client) is new.
    expect(await scalar(db.client, `SELECT count(*) FROM "ModVersionDownloadDaily"`)).toBe(2);
    expect(await scalar(db.client, `SELECT "downloads" FROM "ModVersionDownloadDaily" WHERE "channel" = 'web'`)).toBe(
      11,
    );
  });
});

describe('B5 follows', () => {
  it('archives duplicates (keeping the oldest) and NULL rows, and db:revert-fix B5 puts them back', async () => {
    await legacyThenMigrate(async (c) => {
      await legacy.user(c, 1);
      await legacy.user(c, 2);
      await legacy.mod(c, 1, 1);
      await legacy.favorite(c, 1, 2, 1, '2024-01-01T00:00:00.000Z');
      await legacy.favorite(c, 2, 2, 1, '2024-01-01T00:00:01.000Z');
      await legacy.favorite(c, 3, 2, 1, '2023-12-31T00:00:00.000Z');
      await legacy.favorite(c, 4, null, 1);
      await legacy.favorite(c, 5, 1, null);
      await legacy.favorite(c, 6, 1, 1);
    });
    const before = await takeSnapshot(db.client);
    await run(['B5'], { batchSize: 1 });
    expect((await db.client.query(`SELECT "id" FROM "ModFavorite" ORDER BY 1`)).rows.map((r) => r.id)).toEqual([3, 6]);
    const archived = await db.client.query(`SELECT "id", "reason" FROM "ModFavoriteArchive" ORDER BY 1`);
    expect(archived.rows).toEqual([
      { id: 1, reason: 'dedupe' },
      { id: 2, reason: 'dedupe' },
      { id: 4, reason: 'null_ref' },
      { id: 5, reason: 'null_ref' },
    ]);
    const after = await takeSnapshot(db.client);
    const diff = compareSnapshots(before, after);
    expect(diff.ok).toBe(true);
    expect(diff.differences.map((d) => d.where)).toEqual(['ModFavorite']);
    const inv = (await runInvariants(db.client, { minSiteDownloads: 0, expectedFileMissing: -1 })).find((i) =>
      i.id.startsWith('3-'),
    );
    expect(inv).toMatchObject({ ok: true, detail: { before: 6, kept: 2, archived: 4 } });

    const reverted = await revertFix(db.client, 'B5');
    expect(reverted).toMatchObject({ reverted: 4, conflicts: [] });
    expect(await scalar(db.client, 'SELECT count(*) FROM "ModFavoriteArchive"')).toBe(0);
    expect((await takeSnapshot(db.client)).tables.ModFavorite).toEqual(before.tables.ModFavorite);
  });
});

describe('B2 · B3 · B6 · B7 · B9 · B12', () => {
  it('fills the v2 columns from legacy data without touching legacy columns', async () => {
    await legacyThenMigrate(async (c) => {
      await legacy.user(c, 1, { trusted: true });
      await legacy.user(c, 2, { email: 'Twin@Example.test' });
      await legacy.user(c, 3, { email: ' twin@example.test' });
      await legacy.mod(c, 1, 1, { slug: 'my_mod', approved: false, type: null });
      await legacy.mod(c, 2, 1, { slug: 'my-mod' });
      await legacy.mod(c, 3, 1, { slug: 'other', dependencies: 'Manifest2, Missing' });
      await legacy.version(c, 1, 1);
      await legacy.version(c, 2, 2, 'https://files.example.invalid/lost.zip');
      await legacy.version(c, 3, 3);
      await c.query(`INSERT INTO "ModImage" ("url", "isPrimary", "isThumbnail", "updatedAt", "modId")
                     VALUES ('https://r2.sotf-mods.com/thumb_2.png', false, false, now(), 2)`);
      await legacy.comment(c, 1, 2, 3, 'hi @user1 &amp; thanks &lt;3');
      await legacy.comment(c, 2, 2, 3, 'spam', true);
    });
    await db.client.query(`UPDATE "User" SET "role" = 'admin' WHERE "id" = 3`);
    const before = await takeSnapshot(db.client);
    await run([]);
    const c = db.client;
    // B2: one Media row per key (the gallery image is also mod 2's thumbnail).
    expect(await scalar(c, `SELECT count(*) FROM "Media" WHERE "sourceKey" = 'thumb_2.png'`)).toBe(1);
    expect(await scalar(c, `SELECT "storageKey" FROM "ModVersion" WHERE "id" = 1`)).toBe('v1 (1).zip');
    expect(await scalar(c, `SELECT "status" || ':' || "statusReason" FROM "ModVersion" WHERE "id" = 2`)).toBe(
      'file_missing:legacy file is not in R2 (files.example.invalid)',
    );
    // B3: my_mod collides with the canonical my-mod of the same owner.
    expect(
      (await c.query(`SELECT "id", "canonicalSlug" FROM "Mod" ORDER BY 1`)).rows.map((r) => r.canonicalSlug),
    ).toEqual(['my-mod-2', 'my-mod', 'other']);
    expect(await scalar(c, `SELECT count(*) FROM "ModSlugHistory" WHERE "modId" = 1`)).toBe(2);
    // B6: collisions are reported, not merged.
    expect(await scalar(c, `SELECT count(DISTINCT "emailNormalized") FROM "User" WHERE "id" IN (2, 3)`)).toBe(1);
    expect(existsSync(join(db.outDir, 'email-collisions.csv'))).toBe(true);
    expect(readFileSync(join(db.outDir, 'email-collisions.csv'), 'utf8').trim().split('\n')).toHaveLength(3);
    // B7: trusted → moderator; the admin is never downgraded.
    expect((await c.query(`SELECT "role" FROM "User" ORDER BY "id"`)).rows.map((r) => r.role)).toEqual([
      'moderator',
      'user',
      'admin',
    ]);
    // B9: entities decoded in the source, mentions linked in the HTML.
    const comment = await c.query(`SELECT "bodyMd", "bodyHtml", "status" FROM "Comment" WHERE "id" = 1`);
    expect(comment.rows[0].bodyMd).toBe('hi @user1 & thanks <3');
    expect(comment.rows[0].bodyHtml).toContain('href="/profile/user1"');
    expect(await scalar(c, `SELECT "changelogMd" FROM "ModVersion" WHERE "id" = 1`)).toBe('fixed <3 bugs & more');
    expect(await scalar(c, `SELECT "descriptionHtml" FROM "Mod" WHERE "id" = 1`)).toContain('<strong>mod 1</strong>');
    // B10: resolved and unresolved dependencies on the latest version.
    const deps = await c.query(`SELECT "depManifestId", "depModId" FROM "ModDependency" ORDER BY 1`);
    expect(deps.rows).toEqual([
      { depManifestId: 'Manifest2', depModId: 2 },
      { depManifestId: 'Missing', depModId: null },
    ]);
    // B12: the unapproved mod stays pending (PLAN §14.1); hidden comment hidden.
    expect(await scalar(c, `SELECT "status" || ':' || "isApproved" FROM "Mod" WHERE "id" = 1`)).toBe('pending:false');
    expect(await scalar(c, `SELECT "status" FROM "Mod" WHERE "id" = 2`)).toBe('published');
    expect(await scalar(c, `SELECT "status" FROM "Comment" WHERE "id" = 2`)).toBe('hidden');
    expect(await scalar(c, `SELECT "checksStatus" FROM "ModVersion" WHERE "id" = 1`)).toBe('pending');

    // Legacy columns: only the audited B4 fix differs.
    const diff = compareSnapshots(before, await takeSnapshot(c));
    expect(diff.ok).toBe(true);
    expect(diff.differences.map((d) => d.where)).toEqual(['Mod']);
  });

  it('a dry run of --all changes nothing and records nothing', async () => {
    await legacyThenMigrate(async (c) => {
      await legacy.user(c, 1);
      await legacy.mod(c, 1, 1, { type: null });
      await legacy.version(c, 1, 1);
      await legacy.downloads(c, 1, 3);
      await legacy.favorite(c, 1, 1, 1);
      await legacy.favorite(c, 2, 1, 1);
    });
    const before = await takeSnapshot(db.client);
    const results = await run([], { dryRun: true });
    expect(results.find((r) => r.id === 'B4')?.rows).toBe(1);
    expect(results.find((r) => r.id === 'B5')?.rows).toBe(1);
    expect(results.find((r) => r.id === 'B1')?.rows).toBe(3);
    expect(compareSnapshots(before, await takeSnapshot(db.client), { strict: true }).ok).toBe(true);
    expect(await scalar(db.client, `SELECT count(*) FROM "MigrationRun" WHERE "name" LIKE 'backfill:%'`)).toBe(0);
  });
});
