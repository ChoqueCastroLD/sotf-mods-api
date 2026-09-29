/** Shared helpers of the integration tests (not a test file itself). */
import { cpSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import pg from 'pg';
import { loadLegacyCatalog } from '../src/guard/snapshot.ts';
import { DEFAULT_MIGRATIONS_DIR, loadMigrations } from '../src/migrate/files.ts';
import { BASELINE_NAME } from '../src/migrate/runner.ts';
import { createTestDatabase, startTestServer } from '../src/testing.ts';

export interface Scratch {
  url: string;
  client: pg.Client;
  close(): Promise<void>;
}

/** A new database (empty unless `migrate`), with one dedicated connection. */
export async function scratchDatabase(options: { migrate?: boolean; target?: string } = {}): Promise<Scratch> {
  const url = await createTestDatabase({ migrate: options.migrate ?? false, target: options.target });
  const client = new pg.Client({ connectionString: url, options: '-c TimeZone=UTC' });
  await client.connect();
  return {
    url,
    client,
    async close() {
      await client.end();
      const server = await startTestServer();
      const admin = new pg.Client({ connectionString: server.adminUrl });
      await admin.connect();
      try {
        await admin.query(`DROP DATABASE IF EXISTS "${new URL(url).pathname.slice(1)}" WITH (FORCE)`);
      } finally {
        await admin.end();
      }
    },
  };
}

/** Executes the legacy baseline as-is, like `prisma db push` did in production (no ledger). */
export async function createLegacySchema(client: pg.Client): Promise<void> {
  const baseline = loadMigrations().find((m) => m.name === BASELINE_NAME);
  await client.query((baseline as NonNullable<typeof baseline>).sql);
}

/**
 * Production-like legacy rows: the 4 legacy mod categories and a build category, users with
 * mixed-case emails, approved/unapproved mods, a build, versions, favorites (with a duplicate),
 * comments, a download without version.
 */
export async function insertLegacyRows(client: pg.Client): Promise<void> {
  await client.query(`
    INSERT INTO "Category" ("id", "name", "slug", "description", "type", "updatedAt") VALUES
      (1, 'Misc', 'misc', '', 'Mod', '2023-03-01 10:00:00'),
      (2, 'Model Swap', 'model-swap', '', 'Mod', '2023-03-01 10:00:00'),
      (3, 'Quality of Life', 'qol', '', 'Mod', '2023-03-01 10:00:00'),
      (4, 'Library', 'library', '', 'Mod', '2023-03-01 10:00:00'),
      (6, 'Survival Bases', 'survival-bases', '', 'Build', '2023-03-01 10:00:00');
    SELECT setval('"Category_id_seq"', 26);
    INSERT INTO "User" ("id", "email", "password", "name", "slug", "isTrusted", "createdAt", "updatedAt") VALUES
      (1, 'Author@Example.test', '$argon2id$v=19$m=65536,t=2,p=1$c2FsdHNhbHQ$aGFzaGhhc2hoYXNoaGFzaA', 'author', 'author', true, '2023-02-26 09:00:00', '2023-02-26 09:00:00'),
      (2, 'player@example.test', '$2b$10$abcdefghijklmnopqrstuuMAeW7Bn0mR9v0XlCpp3rJt8h0q2sa6', 'player', 'player', false, '2024-05-01 18:30:00', '2024-05-01 18:30:00');
    SELECT setval('"User_id_seq"', 100);
    INSERT INTO "Mod" ("id", "name", "slug", "mod_id", "shortDescription", "description", "type", "isNSFW", "isApproved", "isFeatured",
                       "downloads", "lastReleasedAt", "createdAt", "updatedAt", "userId", "categoryId") VALUES
      (10, 'Café Menu', 'cafe-menu', 'CafeMenu', 'Menú rápido', 'A <b>menu</b> mod', 'Mod', false, true, false, 1200, '2024-01-01', '2023-06-01', '2024-01-01', 1, 3),
      (11, 'Pending Thing', 'pending-thing', 'PendingThing', '', 'Not reviewed yet', NULL, false, false, false, 0, '2024-02-01', '2024-02-01', '2024-02-01', 1, 1),
      (12, 'My Base', 'my-base', '0190a9b8-7c6d-7e5f-8a9b-0c1d2e3f4a5b', '', 'A build', 'Build', false, true, false, 5, '2024-03-01', '2024-03-01', '2024-03-01', 2, 6);
    SELECT setval('"Mod_id_seq"', 320);
    INSERT INTO "ModVersion" ("id", "version", "isLatest", "changelog", "downloadUrl", "extension", "filename", "modId", "createdAt", "updatedAt") VALUES
      (100, '1.0.0', false, 'first', 'https://r2.sotf-mods.com/1685000000_Cafe Menu.zip', 'zip', '1685000000_Cafe Menu.zip', 10, '2023-06-01', '2023-06-01'),
      (101, '1.0.10', true, 'fix &amp; more', 'https://r2.sotf-mods.com/1704000000_Cafe Menu.zip', 'zip', '1704000000_Cafe Menu.zip', 10, '2024-01-01', '2024-01-01'),
      (102, '0192f3a4-1b2c-7d3e-8f40-5a6b7c8d9e0f', true, '', 'https://r2.sotf-mods.com/base.json', 'json', 'base.json', 12, '2024-03-01', '2024-03-01');
    SELECT setval('"ModVersion_id_seq"', 716);
    INSERT INTO "ModFavorite" ("id", "userId", "modId", "createdAt", "updatedAt") VALUES
      (1, 2, 10, '2024-01-02', '2024-01-02'),
      (2, 2, 10, '2024-01-03', '2024-01-03'),
      (3, NULL, 10, '2024-01-04', '2024-01-04');
    SELECT setval('"ModFavorite_id_seq"', 10);
    INSERT INTO "Comment" ("id", "message", "isHidden", "ip", "userId", "modId", "createdAt", "updatedAt") VALUES
      (1, 'Works great &lt;3', false, 'undefined', 2, 10, '2024-01-05', '2024-01-05'),
      (2, 'hidden spam', true, 'undefined', 2, 10, '2024-01-06', '2024-01-06');
    SELECT setval('"Comment_id_seq"', 10);
    INSERT INTO "ModDownload" ("ip", "userAgent", "modVersionId", "createdAt", "updatedAt") VALUES
      ('undefined', '', 101, '2024-01-07', '2024-01-07'),
      ('203.0.113.9', 'Mozilla/5.0', 101, '2024-01-08', '2024-01-08'),
      ('null', 'null', NULL, '2024-01-09', '2024-01-09');
  `);
}

/** md5 + count of the legacy columns of every legacy table (optionally filtered), like verify-snapshot. */
export async function legacyFingerprint(
  client: pg.Client,
  where: Readonly<Record<string, string>> = {},
): Promise<Record<string, string>> {
  const snapshot = loadLegacyCatalog();
  const out: Record<string, string> = {};
  for (const [table, info] of Object.entries(snapshot.tables)) {
    const columns = Object.keys(info.columns)
      .map((c) => `"${c}"`)
      .join(', ');
    const order = 'id' in info.columns ? '"id"' : '"A", "B"';
    const { rows } = await client.query<{ md5: string | null; n: string }>(
      `SELECT md5(coalesce(string_agg(t::text, '|' ORDER BY ${order}), '')) AS md5, count(*) AS n FROM (SELECT ${columns} FROM "${table}" WHERE ${where[table] ?? 'true'}) AS t`,
    );
    out[table] = `${rows[0]?.n}:${rows[0]?.md5}`;
  }
  return out;
}

/** Copies packages/db/migrations to a temporary directory the test can modify. */
export function copyMigrations(): { dir: string; dispose(): void } {
  const dir = mkdtempSync(join(tmpdir(), 'sotf-migrations-'));
  cpSync(DEFAULT_MIGRATIONS_DIR, dir, { recursive: true });
  return { dir, dispose: () => rmSync(dir, { recursive: true, force: true }) };
}
