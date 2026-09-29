import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';
import { introspectCatalog } from '../src/guard/catalog.ts';
import { loadLegacyCatalog } from '../src/guard/snapshot.ts';
import { runGuard } from '../src/guard.ts';
import { loadMigrations } from '../src/migrate/files.ts';
import { BASELINE_NAME, markBaselineApplied, migrateDown, migrateUp, migrationStatus } from '../src/migrate/runner.ts';
import { stopTestServer } from '../src/testing.ts';
import {
  copyMigrations,
  createLegacySchema,
  insertLegacyRows,
  legacyFingerprint,
  scratchDatabase,
} from './_helpers.ts';

const ALL = loadMigrations().map((m) => m.name);
/** The seed adds categories and tags: compare only the rows that existed before migrating. */
const PRE_EXISTING = { Category: '"id" <= 26', Tag: 'false' } as const;

afterAll(async () => {
  await stopTestServer();
});

describe('db:migrate from an empty PostgreSQL 16', () => {
  it('applies every migration, installs pg-boss and passes the guard; a second run is a no-op', async () => {
    const db = await scratchDatabase();
    try {
      const first = await migrateUp(db.client, { pgBoss: { connectionString: db.url } });
      expect(first.applied).toEqual(ALL);
      expect(first.deferred).toEqual([]);
      const { rows } = await db.client.query(`SELECT to_regclass('pgboss.version') IS NOT NULL AS "ok"`);
      expect(rows[0]).toEqual({ ok: true });
      expect((await runGuard(db.client)).ok).toBe(true);

      const second = await migrateUp(db.client, { pgBoss: { connectionString: db.url } });
      expect(second.applied).toEqual([]);
      expect(second.alreadyApplied).toBe(ALL.length);
      const status = await migrationStatus(db.client);
      expect(status.every((s) => s.state === 'applied')).toBe(true);
    } finally {
      await db.close();
    }
  });

  it('does nothing in a dry run', async () => {
    const db = await scratchDatabase();
    try {
      const result = await migrateUp(db.client, { dryRun: true });
      expect(result.pending).toEqual(ALL);
      const { rows } = await db.client.query(`SELECT to_regclass('public."_v2_migrations"') IS NULL AS "none"`);
      expect(rows[0]).toEqual({ none: true });
    } finally {
      await db.close();
    }
  });

  it('serializes concurrent runs with the advisory lock', async () => {
    const a = await scratchDatabase();
    const b = await (async () => {
      const pg = await import('pg');
      const client = new pg.default.Client({ connectionString: a.url });
      await client.connect();
      return client;
    })();
    try {
      const [ra, rb] = await Promise.all([migrateUp(a.client), migrateUp(b)]);
      expect([...ra.applied, ...rb.applied].sort()).toEqual([...ALL].sort());
      expect(Math.min(ra.applied.length, rb.applied.length)).toBe(0);
    } finally {
      await b.end();
      await a.close();
    }
  });
});

describe('down files (PLAN §14.5: every migration has a tested down)', () => {
  it('roll everything back to the legacy baseline exactly, and the migrations re-apply', async () => {
    const db = await scratchDatabase();
    try {
      await migrateUp(db.client);
      const rolledBack = await migrateDown(db.client, { to: BASELINE_NAME });
      expect(rolledBack).toEqual(ALL.filter((n) => n !== BASELINE_NAME).reverse());

      const live = await introspectCatalog(db.client);
      const snapshot = loadLegacyCatalog();
      expect(Object.keys(live.tables).sort()).toEqual([...Object.keys(snapshot.tables), '_v2_migrations'].sort());
      for (const [name, table] of Object.entries(snapshot.tables)) expect(live.tables[name], name).toEqual(table);
      const { rows } = await db.client.query(
        `SELECT proname FROM pg_proc p JOIN pg_namespace n ON n.oid = p.pronamespace WHERE n.nspname = 'public' AND proname LIKE 'sotf\\_%'`,
      );
      expect(rows).toEqual([]);

      const again = await migrateUp(db.client);
      expect(again.applied).toEqual(ALL.filter((n) => n !== BASELINE_NAME));
    } finally {
      await db.close();
    }
  });

  it('keep legacy data intact and remove only the rows the seed inserted', async () => {
    const db = await scratchDatabase();
    try {
      await createLegacySchema(db.client);
      await insertLegacyRows(db.client);
      const before = await legacyFingerprint(db.client);
      await markBaselineApplied(db.client);
      await migrateUp(db.client);
      await migrateDown(db.client, { to: BASELINE_NAME });
      expect(await legacyFingerprint(db.client)).toEqual(before);
    } finally {
      await db.close();
    }
  });
});

describe('an existing legacy database (production-like)', () => {
  it('refuses to run until the baseline is recorded, then migrates without touching legacy data', async () => {
    const db = await scratchDatabase();
    try {
      await createLegacySchema(db.client);
      await insertLegacyRows(db.client);
      const before = await legacyFingerprint(db.client, PRE_EXISTING);

      await expect(migrateUp(db.client)).rejects.toThrow(/baseline is not recorded/);
      expect(await markBaselineApplied(db.client)).toBe('marked');
      expect(await markBaselineApplied(db.client)).toBe('already-applied');

      const result = await migrateUp(db.client);
      // Duplicate favorites (until B5) and NULL emailNormalized (until B6) defer two unique indexes.
      expect(result.deferred).toEqual(['0038_idx_modfavorite_user_mod_key', '0045_idx_user_email_normalized_key']);
      expect(await legacyFingerprint(db.client, PRE_EXISTING)).toEqual(before);

      // The deferred indexes land once the backfills have done their job.
      await db.client.query(`DELETE FROM "ModFavorite" WHERE "id" = 2`);
      await db.client.query(`UPDATE "User" SET "emailNormalized" = lower(btrim("email"))`);
      const later = await migrateUp(db.client);
      expect(later.applied).toEqual(['0038_idx_modfavorite_user_mod_key', '0045_idx_user_email_normalized_key']);
      expect(later.deferred).toEqual([]);
    } finally {
      await db.close();
    }
  });

  it('seeds the taxonomy on top of the legacy categories without rewriting them', async () => {
    const db = await scratchDatabase();
    try {
      await createLegacySchema(db.client);
      await insertLegacyRows(db.client);
      await markBaselineApplied(db.client);
      await migrateUp(db.client);
      const { rows } = await db.client.query<{
        id: number;
        slug: string;
        name: string;
        icon: string | null;
        retired: boolean;
        legacySlugs: string[];
        updatedAt: Date;
      }>(
        `SELECT "id", "slug", "name", "icon", "retiredAt" IS NOT NULL AS "retired", "legacySlugs", "updatedAt"
           FROM "Category" WHERE "type" = 'Mod' ORDER BY "sortOrder", "id"`,
      );
      const bySlug = new Map(rows.map((r) => [r.slug, r]));
      expect(bySlug.get('library')).toMatchObject({
        id: 4,
        name: 'Library',
        icon: 'lucide:library-big',
        retired: false,
      });
      expect(bySlug.get('misc')).toMatchObject({ id: 1, name: 'Misc', icon: 'lucide:shapes' });
      expect(bySlug.get('qol')).toMatchObject({ id: 3, retired: true, icon: null });
      expect(bySlug.get('quality-of-life')).toMatchObject({ legacySlugs: ['qol'], retired: false });
      expect(bySlug.get('library')?.updatedAt.toISOString()).toBe('2023-03-01T10:00:00.000Z');
      expect(rows.filter((r) => !r.retired)).toHaveLength(12);
      const tags = await db.client.query(`SELECT count(*)::int AS n FROM "Tag" WHERE "isCurated"`);
      expect(tags.rows[0]).toEqual({ n: 40 });
      const loader = await db.client.query(`SELECT "name", "version" FROM "LoaderRelease"`);
      expect(loader.rows).toEqual([{ name: 'RedLoader', version: '0.8.6' }]);
    } finally {
      await db.close();
    }
  });

  it('aborts before migrating when the legacy schema drifted', async () => {
    const db = await scratchDatabase();
    try {
      await createLegacySchema(db.client);
      await db.client.query(`ALTER TABLE "Mod" ALTER COLUMN "name" DROP NOT NULL`);
      await expect(markBaselineApplied(db.client)).rejects.toThrow(/drift detected[\s\S]*"Mod" column "name"/);

      await db.client.query(`ALTER TABLE "Mod" ALTER COLUMN "name" SET NOT NULL`);
      await db.client.query(`ALTER TABLE "User" ADD COLUMN "canApprove" boolean`);
      await expect(markBaselineApplied(db.client)).rejects.toThrow(/unexpected column/);
    } finally {
      await db.close();
    }
  });
});

describe('runner safety nets', () => {
  it('refuses to apply anything when a migration fails the SQL linter (a seeded DROP)', async () => {
    const db = await scratchDatabase();
    const copy = copyMigrations();
    try {
      writeFileSync(join(copy.dir, '0099_evil.sql'), 'ALTER TABLE "Mod" DROP COLUMN "slug";\n');
      writeFileSync(join(copy.dir, '0099_evil.down.sql'), 'SELECT 1;\n');
      await expect(migrateUp(db.client, { migrationsDir: copy.dir })).rejects.toThrow(
        /lint failed[\s\S]*0099_evil\.sql:1 \[legacy-drop\]/,
      );
      const { rows } = await db.client.query(`SELECT to_regclass('public."Mod"') IS NULL AS "untouched"`);
      expect(rows[0]).toEqual({ untouched: true });
    } finally {
      copy.dispose();
      await db.close();
    }
  });

  it('fails when an applied migration was edited or is unknown to the build', async () => {
    const db = await scratchDatabase();
    const copy = copyMigrations();
    try {
      await migrateUp(db.client, { migrationsDir: copy.dir, target: '0003_user_columns' });
      writeFileSync(join(copy.dir, '0003_user_columns.sql'), '-- edited\nSELECT 1;\n');
      await expect(migrateUp(db.client, { migrationsDir: copy.dir })).rejects.toThrow(/changed after it was applied/);

      const fresh = copyMigrations();
      try {
        await db.client.query(
          `INSERT INTO "_v2_migrations" ("name", "checksum", "durationMs") VALUES ('0999_future', 'x', 0)`,
        );
        await expect(migrateUp(db.client, { migrationsDir: fresh.dir })).rejects.toThrow(/unknown to this build/);
      } finally {
        fresh.dispose();
      }
    } finally {
      copy.dispose();
      await db.close();
    }
  });

  it('reports the file and line of a failing statement and rolls the file back', async () => {
    const db = await scratchDatabase();
    const copy = copyMigrations();
    try {
      writeFileSync(
        join(copy.dir, '0099_broken.sql'),
        'CREATE TABLE "Broken" (id int);\n\nSELECT no_such_function();\n',
      );
      writeFileSync(join(copy.dir, '0099_broken.down.sql'), 'DROP TABLE IF EXISTS "Broken";\n');
      await expect(migrateUp(db.client, { migrationsDir: copy.dir })).rejects.toThrow(
        /0099_broken\.sql:3: function no_such_function/,
      );
      const { rows } = await db.client.query(`SELECT to_regclass('public."Broken"') IS NULL AS "rolledBack"`);
      expect(rows[0]).toEqual({ rolledBack: true });
    } finally {
      copy.dispose();
      await db.close();
    }
  });

  it('drops and rebuilds an INVALID index left by a failed concurrent build', async () => {
    const db = await scratchDatabase();
    try {
      await migrateUp(db.client, { target: '0038_idx_modfavorite_user_mod_key' });
      await db.client.query(`
        INSERT INTO "User" ("email", "password", "name", "slug") VALUES ('a@example.test', 'x', 'a', 'a');
        INSERT INTO "Mod" ("name", "slug", "mod_id", "description", "isNSFW", "isApproved", "isFeatured", "userId")
          VALUES ('A', 'a', 'A', '', false, true, false, currval('"User_id_seq"'));
        INSERT INTO "ModVersion" ("version", "isLatest", "changelog", "downloadUrl", "modId")
          VALUES ('1.0.0', false, '', 'x', currval('"Mod_id_seq"')), ('1.0.0', false, '', 'x', currval('"Mod_id_seq"'));
      `);
      await expect(
        db.client.query(
          `CREATE UNIQUE INDEX CONCURRENTLY "ModVersion_modId_version_key" ON "ModVersion"("modId", "version")`,
        ),
      ).rejects.toThrow(/could not create unique index/);
      const invalid = await db.client.query(
        `SELECT indisvalid FROM pg_index WHERE indexrelid = '"ModVersion_modId_version_key"'::regclass`,
      );
      expect(invalid.rows[0]).toEqual({ indisvalid: false });

      await db.client.query(`DELETE FROM "ModVersion" WHERE "id" = (SELECT max("id") FROM "ModVersion")`);
      const result = await migrateUp(db.client);
      expect(result.applied).toContain('0039_idx_modversion_mod_version_key');
      const valid = await db.client.query(
        `SELECT indisvalid FROM pg_index WHERE indexrelid = '"ModVersion_modId_version_key"'::regclass`,
      );
      expect(valid.rows[0]).toEqual({ indisvalid: true });
    } finally {
      await db.close();
    }
  });
});
