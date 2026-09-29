/** The command-line entry points: arguments, safety refusals and exit codes. */
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { stopTestServer } from '@sotf/db/testing';
import { afterAll, describe, expect, it } from 'vitest';
import { scratch } from './_helpers.ts';

const cwd = fileURLToPath(new URL('..', import.meta.url));
function run(script: string, args: string[], databaseUrl: string) {
  const result = spawnSync('node', [script, ...args], {
    cwd,
    encoding: 'utf8',
    env: { ...process.env, DATABASE_URL: databaseUrl, MIGRATIONS_DATABASE_URL: '', SOTF_NO_DOTENV: '1', NO_COLOR: '1' },
  });
  return { code: result.status, out: `${result.stdout}${result.stderr}` };
}

const REMOTE = 'postgres://someone:***@db.example.invalid:5432/sotf';

afterAll(async () => {
  await stopTestServer();
});

describe('CLIs', () => {
  it('dev-only tools refuse non-local databases; operator writes need --confirm', () => {
    expect(run('src/cli/reset-dev.ts', [], REMOTE)).toMatchObject({ code: 1 });
    expect(run('src/cli/reset-dev.ts', [], REMOTE).out).toMatch(/only runs against a local database/);
    expect(run('src/cli/seed-dev.ts', [], REMOTE).out).toMatch(/only runs against a local database/);
    expect(run('src/cli/backfill.ts', ['--all'], REMOTE).out).toMatch(/needs --confirm sotf/);
    expect(run('src/cli/admin-grant.ts', ['--email', 'a@b.c', '--role', 'admin'], REMOTE).out).toMatch(
      /--confirm sotf/,
    );
    expect(run('src/cli/anonymize.ts', ['--confirm', 'sotf_prod_copy'], REMOTE).out).toMatch(/local database/);
    expect(run('replay-delta.ts', ['--from', REMOTE, '--to', REMOTE], REMOTE).out).toMatch(/same database/);
  });

  it('lists the backfills and rejects unknown ones', () => {
    const list = run('src/cli/backfill.ts', ['--list'], REMOTE);
    expect(list.code).toBe(0);
    expect(list.out).toMatch(/^B4 +type NULL/m);
    expect(run('src/cli/backfill.ts', ['B8'], REMOTE).out).toMatch(/WP-84/);
  });

  it('db:invariants exits 1 on a database whose backfills never ran, and db:verify-snapshot writes JSON', async () => {
    const db = await scratch({ migrate: true });
    try {
      const inv = run('src/cli/invariants.ts', ['--json'], db.url);
      expect(inv.code).toBe(1);
      const parsed = JSON.parse(inv.out.slice(0, inv.out.lastIndexOf(']') + 1)) as Array<{ id: string; ok: boolean }>;
      expect(parsed.find((r) => r.id.startsWith('3-'))?.ok).toBe(false);
      const snap = run('src/cli/verify-snapshot.ts', ['--out', `${db.outDir}/s.json`], db.url);
      expect(snap.code, snap.out).toBe(0);
      const diff = run(
        'src/cli/verify-snapshot.ts',
        ['--diff', `${db.outDir}/s.json`, `${db.outDir}/s.json`, '--strict'],
        db.url,
      );
      expect(diff.out).toMatch(/identical/);
    } finally {
      await db.close();
    }
  });
});
