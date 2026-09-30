import { spawnSync } from 'node:child_process';
import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { afterAll, describe, expect, it } from 'vitest';
import { stopTestServer } from '../src/testing.ts';
import { createLegacySchema, scratchDatabase } from './_helpers.ts';

const cwd = fileURLToPath(new URL('..', import.meta.url));
function run(script: string, args: string[], databaseUrl: string) {
  const result = spawnSync('node', [script, ...args], {
    cwd,
    encoding: 'utf8',
    env: {
      ...process.env,
      DATABASE_URL: databaseUrl,
      MIGRATIONS_DATABASE_URL: databaseUrl,
      SOTF_NO_DOTENV: '1',
      NO_COLOR: '1',
    },
  });
  return { code: result.status, out: `${result.stdout}${result.stderr}` };
}

afterAll(async () => {
  await stopTestServer();
});

describe('command-line tools', () => {
  it('db:migrate is idempotent (run twice), db:guard passes, status lists everything as applied', async () => {
    const db = await scratchDatabase();
    try {
      const first = run('src/cli/migrate.ts', [], db.url);
      expect(first.code, first.out).toBe(0);
      expect(first.out).toMatch(/applied \d+ migration\(s\)/);
      const second = run('src/cli/migrate.ts', [], db.url);
      expect(second.code, second.out).toBe(0);
      expect(second.out).toMatch(/database is up to date/);

      const guard = run('src/cli/guard.ts', [], db.url);
      expect(guard.code, guard.out).toBe(0);
      expect(guard.out).toMatch(/legacy ⊆ v2 guard: OK/);

      const status = run('src/cli/migrate.ts', ['status'], db.url);
      expect(status.out).not.toMatch(/^pending/m);

      // Roll back only the newest migration: `--to` the one before it.
      const names = readdirSync(new URL('../migrations', import.meta.url))
        .filter((file) => /^\d{4}_[a-z0-9_]+\.sql$/.test(file) && !file.endsWith('.down.sql'))
        .map((file) => file.slice(0, -'.sql'.length))
        .sort();
      const previous = names.at(-2) as string;
      const down = run('src/cli/migrate.ts', ['down', '--to', previous, '--dry-run'], db.url);
      expect(down.code, down.out).toBe(0);
      expect(down.out).toMatch(/would roll back 1 migration/);
    } finally {
      await db.close();
    }
  });

  it('db:baseline --mark-applied records the baseline of an existing legacy database', async () => {
    const db = await scratchDatabase();
    try {
      await createLegacySchema(db.client);
      const refused = run('src/cli/migrate.ts', ['--no-pgboss'], db.url);
      expect(refused.code).toBe(1);
      expect(refused.out).toMatch(/db:baseline --mark-applied/);
      const baseline = run('src/cli/baseline.ts', ['--mark-applied'], db.url);
      expect(baseline.code, baseline.out).toBe(0);
      const migrate = run('src/cli/migrate.ts', ['--no-pgboss', '--strict'], db.url);
      expect(migrate.code, migrate.out).toBe(0);
    } finally {
      await db.close();
    }
  });

  it('db:guard exits 1 on drift, and without a database checks the migrations on a disposable one', async () => {
    const db = await scratchDatabase({ migrate: true });
    try {
      await db.client.query(`ALTER TABLE "Token" ALTER COLUMN "token" DROP NOT NULL`);
      const guard = run('src/cli/guard.ts', [], db.url);
      expect(guard.code).toBe(1);
      expect(guard.out).toMatch(/"Token" column "token": nullability changed/);
    } finally {
      await db.close();
    }
    const env: NodeJS.ProcessEnv = { ...process.env, SOTF_NO_DOTENV: '1', NO_COLOR: '1' };
    delete env.DATABASE_URL;
    delete env.MIGRATIONS_DATABASE_URL;
    const ephemeral = spawnSync('node', ['src/cli/guard.ts'], { cwd, encoding: 'utf8', env });
    expect(ephemeral.status, `${ephemeral.stdout}${ephemeral.stderr}`).toBe(0);
    expect(ephemeral.stdout).toMatch(/ephemeral mode[\s\S]*legacy ⊆ v2 guard: OK/);
  }, 180_000);

  it('db:migrate needs a database URL', () => {
    const missing = spawnSync('node', ['src/cli/migrate.ts'], {
      cwd,
      encoding: 'utf8',
      env: { PATH: process.env.PATH, SOTF_NO_DOTENV: '1' },
    });
    expect(missing.status).toBe(1);
    expect(missing.stderr).toMatch(/DATABASE_URL is required/);
  });
});
