import { describe, expect, it } from 'vitest';
import { loadLegacyCatalog } from '../src/guard/snapshot.ts';
import { loadMigrations, parseDirectives, type SqlFile } from '../src/migrate/files.ts';
import { legacyObjectsFrom, lintFile, lintMigrations } from '../src/migrate/lint.ts';

const legacy = legacyObjectsFrom(loadLegacyCatalog());

function file(sql: string, name = '0099_test.sql'): SqlFile {
  return { file: name, path: name, sql, checksum: '', directives: parseDirectives(sql, name) };
}
const rulesOf = (sql: string, kind: 'up' | 'down' = 'up') => lintFile(file(sql), kind, legacy).map((i) => i.rule);

describe('the repository migrations', () => {
  it('lint clean against the frozen legacy catalog', () => {
    expect(lintMigrations(loadMigrations(), loadLegacyCatalog())).toEqual([]);
  });
});

describe('lint rejects anything that could break or lose legacy data', () => {
  it.each([
    ['a seeded DROP TABLE', 'DROP TABLE "Mod";', 'legacy-drop'],
    ['DROP TABLE in a list', 'DROP TABLE IF EXISTS "Session", "ModVersion";', 'legacy-drop'],
    ['DROP COLUMN', 'ALTER TABLE "Mod" DROP COLUMN "slug";', 'legacy-drop'],
    ['DROP COLUMN IF EXISTS', 'ALTER TABLE public."User" DROP COLUMN IF EXISTS "imageUrl";', 'legacy-drop'],
    ['DROP CONSTRAINT', 'ALTER TABLE "Mod" DROP CONSTRAINT "Mod_userId_fkey";', 'legacy-drop'],
    ['DROP INDEX', 'DROP INDEX "ModDownload_ip_idx";', 'legacy-drop'],
    ['RENAME TABLE', 'ALTER TABLE "Mod" RENAME TO "Mods";', 'legacy-rename'],
    ['RENAME COLUMN', 'ALTER TABLE "Mod" RENAME COLUMN "slug" TO "handle";', 'legacy-rename'],
    ['type change', 'ALTER TABLE "Mod" ALTER COLUMN "type" TYPE varchar(10);', 'legacy-type'],
    ['SET DATA TYPE', 'ALTER TABLE "Mod" ALTER "downloads" SET DATA TYPE bigint;', 'legacy-type'],
    ['SET NOT NULL', 'ALTER TABLE "Mod" ALTER COLUMN "type" SET NOT NULL;', 'legacy-nullability'],
    ['DROP NOT NULL', 'ALTER TABLE "Mod" ALTER COLUMN "name" DROP NOT NULL;', 'legacy-nullability'],
    ['DROP DEFAULT in an up file', 'ALTER TABLE "User" ALTER COLUMN "imageUrl" DROP DEFAULT;', 'legacy-default'],
    ['changing an existing default', `ALTER TABLE "User" ALTER COLUMN "imageUrl" SET DEFAULT 'x';`, 'legacy-default'],
    ['NOT NULL without DEFAULT', 'ALTER TABLE "Mod" ADD COLUMN "x" text NOT NULL;', 'not-null-without-default'],
    ['volatile default', 'ALTER TABLE "Mod" ADD COLUMN "x" uuid DEFAULT gen_random_uuid();', 'volatile-default'],
    ['inline foreign key', 'ALTER TABLE "Mod" ADD COLUMN "x" integer REFERENCES "User"("id");', 'inline-constraint'],
    ['CHECK without NOT VALID', `ALTER TABLE "Mod" ADD CONSTRAINT "Mod_x_check" CHECK ("x" > 0);`, 'not-valid'],
    [
      'FOREIGN KEY without NOT VALID',
      'ALTER TABLE "Mod" ADD CONSTRAINT "Mod_x_fkey" FOREIGN KEY ("x") REFERENCES "User"("id");',
      'not-valid',
    ],
    ['UNIQUE constraint', 'ALTER TABLE "Mod" ADD CONSTRAINT "Mod_x_key" UNIQUE ("x");', 'legacy-unique-constraint'],
    ['unnamed constraint', 'ALTER TABLE "Mod" ADD CHECK ("x" > 0) NOT VALID;', 'constraint-name'],
    ['legacy column name clash', 'ALTER TABLE "Mod" ADD COLUMN "slug" text;', 'legacy-column-clash'],
    ['blocking index on an existing table', 'CREATE INDEX "Mod_x_idx" ON "Mod"("name");', 'index-concurrently'],
    [
      'CONCURRENTLY inside a transaction',
      'CREATE INDEX CONCURRENTLY IF NOT EXISTS "Mod_x_idx" ON "Mod"("name");',
      'concurrently-needs-no-transaction',
    ],
    ['TRUNCATE', 'TRUNCATE "ModDownload";', 'legacy-dml'],
    ['DELETE in an up file', 'DELETE FROM "ModFavorite" WHERE "userId" IS NULL;', 'legacy-dml'],
    ['DELETE inside a CTE', 'WITH d AS (DELETE FROM "Comment" RETURNING id) SELECT count(*) FROM d;', 'legacy-dml'],
    ['UPDATE of a legacy column', `UPDATE "Mod" SET "type" = 'Mod' WHERE "type" IS NULL;`, 'legacy-dml'],
    [
      'UPDATE of a legacy column with alias',
      `UPDATE "Mod" AS m SET "status" = 'x', "isApproved" = true;`,
      'legacy-dml',
    ],
    [
      'upsert that rewrites a legacy column',
      `INSERT INTO "Category" ("name", "slug", "description") VALUES ('a', 'b', 'c') ON CONFLICT ("slug") DO UPDATE SET "name" = EXCLUDED."name";`,
      'legacy-dml',
    ],
    ['CASCADE', 'DROP TABLE "Session" CASCADE;', 'no-cascade'],
    ['transaction control', 'COMMIT;', 'forbidden-statement'],
    ['privileges', 'GRANT SELECT ON "Mod" TO public;', 'forbidden-statement'],
    ['legacy sequence', 'ALTER SEQUENCE "Mod_id_seq" RESTART WITH 1;', 'legacy-sequence'],
    ['creating a legacy table', 'CREATE TABLE "Mod" (id int);', 'legacy-table-create'],
  ])('%s', (_name, sql, rule) => {
    expect(rulesOf(sql)).toContain(rule);
  });

  it('requires a down file for every migration', () => {
    const [baseline, first] = loadMigrations();
    const issues = lintMigrations(
      [baseline, { ...(first as NonNullable<typeof first>), down: null }].filter((m) => m !== undefined),
      loadLegacyCatalog(),
    );
    expect(issues.map((i) => i.rule)).toContain('missing-down');
  });

  it('allows DELETE on legacy tables in down files only with a reason', () => {
    expect(rulesOf('DELETE FROM "Category" WHERE "id" = 1;', 'down')).toContain('legacy-dml');
    expect(
      rulesOf('-- sotf:allow-legacy-delete: removes the seeded rows\nDELETE FROM "Category" WHERE "id" = 1;', 'down'),
    ).toEqual([]);
  });

  it('allows a down file to drop only defaults the legacy schema did not have', () => {
    expect(rulesOf('ALTER TABLE "Mod" ALTER COLUMN "updatedAt" DROP DEFAULT;', 'down')).toEqual([]);
    expect(rulesOf('ALTER TABLE "Mod" ALTER COLUMN "createdAt" DROP DEFAULT;', 'down')).toContain('legacy-default');
  });

  it('requires exactly one statement in a no-transaction file and IF NOT EXISTS on concurrent indexes', () => {
    expect(rulesOf('-- sotf:no-transaction\nSELECT 1;\nSELECT 2;')).toContain('no-transaction-single');
    expect(rulesOf('-- sotf:no-transaction\nCREATE INDEX CONCURRENTLY "Mod_x_idx" ON "Mod"("name");')).toContain(
      'index-if-not-exists',
    );
  });

  it('rejects a precondition that is not read-only', () => {
    expect(rulesOf('-- sotf:precondition: (DELETE FROM "Mod") IS NULL\nSELECT 1;')).toContain('precondition-read-only');
  });
});

describe('lint allows the additive patterns of PLAN §6.1', () => {
  it.each([
    ['nullable column', 'ALTER TABLE "Mod" ADD COLUMN "x" text;'],
    ['NOT NULL with constant default', `ALTER TABLE "Mod" ADD COLUMN "x" text NOT NULL DEFAULT 'a';`],
    ['NOT VALID check', `ALTER TABLE "Mod" ADD CONSTRAINT "Mod_x_check" CHECK ("x" <> '') NOT VALID;`],
    ['validation', 'ALTER TABLE "Mod" VALIDATE CONSTRAINT "Mod_x_check";'],
    ['default on a column that had none', 'ALTER TABLE "Tag" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;'],
    ['UPDATE of v2 columns', `UPDATE "Category" SET "retiredAt" = now() WHERE "slug" = 'qol';`],
    [
      'upsert that only fills v2 columns',
      `INSERT INTO "Category" ("name", "slug", "description") VALUES ('a', 'b', 'c') ON CONFLICT ("slug") DO UPDATE SET "icon" = EXCLUDED."icon" RETURNING "id";`,
    ],
    ['index on a table created in the same file', 'CREATE TABLE "X" (id int);\nCREATE INDEX "X_id_idx" ON "X"("id");'],
    [
      'concurrent index',
      '-- sotf:no-transaction\nCREATE INDEX CONCURRENTLY IF NOT EXISTS "Mod_x_idx" ON "Mod"("name");',
    ],
    ['dropping v2 objects', 'DROP TABLE IF EXISTS "Session";\nALTER TABLE "Mod" DROP COLUMN IF EXISTS "status";'],
    ['strings that merely mention forbidden SQL', `COMMENT ON TABLE "Session" IS 'never DROP TABLE "Mod"';`],
  ])('%s', (_name, sql) => {
    expect(rulesOf(sql)).toEqual([]);
  });
});
