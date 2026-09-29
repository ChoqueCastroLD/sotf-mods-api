import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import pg from 'pg';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { introspectCatalog } from '../src/guard/catalog.ts';
import { markBaselineApplied, migrateUp } from '../src/migrate/runner.ts';
import { createFactories, startTestDb, startTestServer, stopTestServer, type TestDb } from '../src/testing.ts';
import { createLegacySchema, scratchDatabase } from './_helpers.ts';

const opsSql = (name: string) => readFileSync(new URL(`../../../ops/sql/${name}`, import.meta.url), 'utf8');
const LEGACY_HOST = 'files.sotf-mods.com'; // check-forbidden-allow: legacy-files-host the audit test seeds the legacy host on purpose

let t: TestDb;
beforeAll(async () => {
  t = await startTestDb({ pgBoss: true });
});
afterAll(async () => {
  await t.stop();
  await stopTestServer();
});

/** Runs a psql script: inside the Testcontainers container, or with a local psql binary. */
async function psql(url: string, script: string, variables: Record<string, string> = {}) {
  const server = await startTestServer();
  const vars = Object.entries(variables).flatMap(([k, v]) => ['-v', `${k}=${v}`]);
  if (server.container) {
    const database = new URL(url).pathname.slice(1);
    await server.container.copyContentToContainer([{ content: script, target: '/tmp/script.sql' }]);
    const result = await server.container.exec(
      ['psql', '-X', '-q', '-U', 'sotf', '-d', database, '-v', 'ON_ERROR_STOP=1', ...vars, '-f', '/tmp/script.sql'],
      { env: { PGPASSWORD: 'sotf' } },
    );
    return { code: result.exitCode, output: result.output };
  }
  const local = spawnSync('psql', ['-X', '-q', url, '-v', 'ON_ERROR_STOP=1', ...vars], {
    input: script,
    encoding: 'utf8',
  });
  if (local.error) throw new Error(`psql is required when SOTF_TEST_DATABASE_URL is set: ${local.error.message}`);
  return { code: local.status ?? 1, output: `${local.stdout}${local.stderr}` };
}

function urlFor(base: string, user: string, password: string): string {
  const url = new URL(base);
  url.username = user;
  url.password = password;
  return url.toString();
}

async function asRole<T>(url: string, fn: (client: pg.Client) => Promise<T>): Promise<T> {
  const client = new pg.Client({ connectionString: url });
  await client.connect();
  try {
    return await fn(client);
  } finally {
    await client.end();
  }
}

describe('ops/sql/roles.sql (PLAN §6.7)', () => {
  const v2 = 'v2-test-password';
  const legacy = 'legacy-test-password';

  it('fails without the password variables', async () => {
    const result = await psql(t.url, opsSql('roles.sql'));
    expect(result.code).not.toBe(0);
    expect(result.output).toMatch(/v2_password/);
  });

  it('creates the roles idempotently', async () => {
    for (let run = 0; run < 2; run += 1) {
      const result = await psql(t.url, opsSql('roles.sql'), {
        v2_password: v2,
        legacy_password: legacy,
        readonly_password: 'ro-test',
      });
      expect(result.code, result.output).toBe(0);
    }
  });

  it('sotf_v2_app: DML everywhere, insert-only AuditLog, no DDL, 5 s statement timeout', async () => {
    await asRole(urlFor(t.url, 'sotf_v2_app', v2), async (c) => {
      await c.query(`INSERT INTO "AuditLog" ("action", "reason") VALUES ('test.action', 'roles test')`);
      await expect(c.query(`UPDATE "AuditLog" SET "reason" = 'tampered'`)).rejects.toThrow(/permission denied/);
      await expect(c.query(`DELETE FROM "AuditLog"`)).rejects.toThrow(/permission denied/);
      await c.query(`INSERT INTO "SiteStat" ("key", "value") VALUES ('users', 1)`);
      await c.query(`UPDATE "Category" SET "sortOrder" = "sortOrder" WHERE false`);
      await expect(c.query(`CREATE TABLE "Nope" (id int)`)).rejects.toThrow(/permission denied/);
      await expect(c.query(`ALTER TABLE "Mod" ADD COLUMN "nope" int`)).rejects.toThrow(/must be owner/);
      await expect(
        c.query(`INSERT INTO "_v2_migrations" ("name", "checksum", "durationMs") VALUES ('x', 'x', 0)`),
      ).rejects.toThrow(/permission denied/);
      await c.query(`SELECT count(*) FROM pgboss.job`);
      const { rows } = await c.query(`SHOW statement_timeout`);
      expect(rows[0]).toEqual({ statement_timeout: '5s' });
    });
  });

  it('sotf_legacy_app: DML on the 16 legacy tables only and no DDL (no `prisma db push`)', async () => {
    const f = createFactories(t.db);
    const author = await f.user();
    await asRole(urlFor(t.url, 'sotf_legacy_app', legacy), async (c) => {
      await c.query(
        `INSERT INTO "Mod" ("name", "slug", "mod_id", "description", "isNSFW", "isApproved", "isFeatured", "updatedAt", "userId")
         VALUES ('Legacy', 'legacy-role', 'LegacyRole', '', false, false, false, now(), $1)`,
        [author.id],
      );
      await c.query(`UPDATE "Mod" SET "isApproved" = true WHERE "slug" = 'legacy-role'`);
      await c.query(`INSERT INTO "ModDownload" ("ip", "userAgent", "updatedAt") VALUES ('undefined', '', now())`);
      await expect(c.query(`SELECT 1 FROM "Session" LIMIT 1`)).rejects.toThrow(/permission denied/);
      await expect(c.query(`CREATE TABLE "Ban" (id int)`)).rejects.toThrow(/permission denied/);
      await expect(c.query(`ALTER TABLE "Mod" ADD COLUMN "canApprove" boolean`)).rejects.toThrow(/must be owner/);
      await expect(c.query(`DROP TABLE "LoginAttempt"`)).rejects.toThrow(/must be owner/);
    });
    const { rows } = await t.pool.query(`SELECT "status" FROM "Mod" WHERE "slug" = 'legacy-role'`);
    expect(rows[0]).toEqual({ status: 'published' });
  });

  it('follows the cutover order: B2 on the legacy-only database, B3 migrations, then a second run', async () => {
    const db = await scratchDatabase();
    try {
      await createLegacySchema(db.client);
      const vars = { v2_password: v2, legacy_password: legacy };

      // B2: only the legacy tables exist yet.
      const b2 = await psql(db.url, opsSql('roles.sql'), vars);
      expect(b2.code, b2.output).toBe(0);
      expect(b2.output).toMatch(/PARTIAL/);
      await asRole(urlFor(db.url, 'sotf_legacy_app', legacy), async (c) => {
        await c.query(`UPDATE "Mod" SET "isApproved" = "isApproved" WHERE false`);
        await expect(c.query(`CREATE TABLE "Ban" (id int)`)).rejects.toThrow(/permission denied/);
      });

      // B3: the migration job (owner) creates the v2 tables.
      await markBaselineApplied(db.client);
      await migrateUp(db.client, { pgBoss: { connectionString: db.url } });
      await asRole(urlFor(db.url, 'sotf_legacy_app', legacy), async (c) => {
        await expect(c.query(`SELECT 1 FROM "AuditLog" LIMIT 1`)).rejects.toThrow(/permission denied/);
      });

      // Second run: the audit trail becomes insert-only for the v2 application.
      const after = await psql(db.url, opsSql('roles.sql'), vars);
      expect(after.code, after.output).toBe(0);
      expect(after.output).toMatch(/roles\.sql: complete/);
      await asRole(urlFor(db.url, 'sotf_v2_app', v2), async (c) => {
        await c.query(`INSERT INTO "AuditLog" ("action", "reason") VALUES ('test.action', 'cutover order')`);
        await expect(c.query(`UPDATE "AuditLog" SET "reason" = 'tampered'`)).rejects.toThrow(/permission denied/);
        await expect(c.query(`DELETE FROM "_v2_migrations"`)).rejects.toThrow(/permission denied/);
        await c.query(`SELECT count(*) FROM pgboss.job`);
      });
    } finally {
      await db.close();
    }
  });

  it('sotf_readonly: SELECT only', async () => {
    await asRole(urlFor(t.url, 'sotf_readonly', 'ro-test'), async (c) => {
      await c.query(`SELECT count(*) FROM "Mod"`);
      await expect(c.query(`INSERT INTO "SiteStat" ("key", "value") VALUES ('x', 1)`)).rejects.toThrow(
        /read-only|permission denied/,
      );
    });
  });
});

describe('ops/sql/kill-switch.sql', () => {
  it('drops the sync triggers without touching data, and the restore script recreates them identically', async () => {
    const triggersOf = async () => {
      const catalog = await introspectCatalog(t.pool, {
        tables: ['User', 'Mod', 'Comment', 'ModReview', 'ModVersion'],
      });
      return Object.fromEntries(Object.entries(catalog.tables).map(([name, table]) => [name, table.triggers]));
    };
    const before = await triggersOf();
    expect(Object.values(before).flatMap((x) => Object.keys(x))).toHaveLength(5);
    const count = async () => (await t.pool.query(`SELECT count(*)::int AS n FROM "Mod"`)).rows[0];
    const rowsBefore = await count();

    await t.pool.query(opsSql('kill-switch.sql'));
    expect(Object.values(await triggersOf()).flatMap((x) => Object.keys(x))).toEqual([]);
    expect(await count()).toEqual(rowsBefore);
    await t.pool.query(opsSql('kill-switch.sql')); // idempotent

    await t.pool.query(opsSql('kill-switch-restore.sql'));
    expect(await triggersOf()).toEqual(before);
  });
});

describe('ops/sql/audit-files-host.sql', () => {
  it('finds every mention of the legacy file host, read-only', async () => {
    const f = createFactories(t.db);
    const m = await f.mod({ slug: 'virginia-wardrobe-18' });
    await f.modVersion({ modId: m.id, version: '0.0.3', downloadUrl: `https://${LEGACY_HOST}/file.zip` });
    await f.comment({ modId: m.id, message: `mirror at https://${LEGACY_HOST}/x` });

    const results = (await t.pool.query(opsSql('audit-files-host.sql'))) as unknown as Array<{
      command: string;
      rows: Array<Record<string, unknown>>;
    }>;
    const selects = results.filter((r) => r.command === 'SELECT');
    const perColumn = selects[0]?.rows ?? [];
    expect(perColumn.find((r) => r.table === 'ModVersion' && r.column === 'downloadUrl')).toMatchObject({ rows: '1' });
    expect(perColumn.find((r) => r.table === 'Comment' && r.column === 'message')).toMatchObject({ rows: '1' });
    const details = selects[1]?.rows ?? [];
    expect(details.map((r) => [r.table, r.column])).toEqual([
      ['Comment', 'message'],
      ['ModVersion', 'downloadUrl'],
    ]);
    expect(results.at(-1)?.command).toBe('ROLLBACK');
  });
});
