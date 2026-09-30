/**
 * WP-31 acceptance: the download buffer is flushed when the API process receives SIGTERM (Coolify
 * rolling updates). A real `node src/server.ts` process serves a few downloads and is stopped well
 * before the 2 s flush tick; every download must be in the database afterwards.
 */
import { type ChildProcess, spawn } from 'node:child_process';
import { randomBytes } from 'node:crypto';
import { createServer } from 'node:net';
import { fileURLToPath } from 'node:url';
import { createFactories, startTestDb, type TestDb } from '@sotf/db/testing';
import { sql } from 'drizzle-orm';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { waitUntilServingHttp } from './test-helpers.ts';

const API_DIR = fileURLToPath(new URL('../../../', import.meta.url));

let db: TestDb;
let child: ChildProcess | null = null;

async function freePort(): Promise<number> {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      server.close(() => resolve(typeof address === 'object' && address ? address.port : 0));
    });
  });
}

async function waitForHealthy(base: string, timeoutMs = 60_000): Promise<void> {
  const deadline = Date.now() + timeoutMs;
  for (;;) {
    try {
      const res = await fetch(`${base}/healthz`);
      if (res.ok) return;
    } catch {
      // not listening yet
    }
    if (Date.now() > deadline) throw new Error('the API did not start');
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
}

beforeAll(async () => {
  db = await startTestDb({ pgBoss: true });
});

afterAll(async () => {
  if (child && child.exitCode === null) child.kill('SIGKILL');
  await db?.stop();
});

describe('graceful shutdown', () => {
  it('flushes buffered downloads on SIGTERM', async () => {
    const f = createFactories(db.db);
    const { version } = await f.modWithVersion({}, { storageKey: 'mods/1/1/shutdown.zip' });
    const port = await freePort();
    const logs: string[] = [];
    child = spawn(process.execPath, ['src/server.ts'], {
      cwd: API_DIR,
      env: {
        PATH: process.env.PATH ?? '',
        NODE_ENV: 'production',
        SOTF_NO_DOTENV: '1',
        TZ: 'UTC',
        LOG_LEVEL: 'info',
        SITE_ENV: 'development',
        PUBLIC_SITE_URL: 'https://sotf-mods.test',
        INTERNAL_SECRET: randomBytes(32).toString('base64url'),
        APP_SECRET: randomBytes(32).toString('base64url'),
        DATABASE_URL: db.url,
        GIT_SHA: 'test',
        HOST: '127.0.0.1',
        PORT: String(port),
        R2_PUBLIC_BASE_URL: 'https://r2.test.sotf-mods.com',
      },
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    child.stdout?.on('data', (chunk: Buffer) => logs.push(chunk.toString()));
    child.stderr?.on('data', (chunk: Buffer) => logs.push(chunk.toString()));
    const base = `http://127.0.0.1:${port}`;
    await waitForHealthy(base);
    await waitUntilServingHttp(base);

    const started = Date.now();
    for (let i = 0; i < 3; i += 1) {
      const res = await fetch(`${base}/api/v2/versions/${version.id}/download`, {
        redirect: 'manual',
        headers: { 'user-agent': '', 'cf-connecting-ip': `198.51.100.${i + 1}` },
      });
      expect(res.status).toBe(302);
    }
    const exited = new Promise<number | null>((resolve) => child?.once('exit', (code) => resolve(code)));
    child.kill('SIGTERM');
    const elapsed = Date.now() - started;
    const code = await exited;
    expect(code, logs.join('')).toBe(0);
    const shutdownLine = logs
      .join('')
      .split('\n')
      .find((line) => line.includes('download buffer flushed at shutdown'));
    expect(shutdownLine, logs.join('')).toBeDefined();
    // With the downloads well inside one 2 s flush period, at least the last ones can only have been
    // written by the shutdown flush (a periodic tick may have taken the earlier ones).
    if (elapsed < 1_500) expect(JSON.parse(shutdownLine as string).events).toBeGreaterThanOrEqual(1);

    const result = await db.db.execute(
      sql`SELECT count(*)::int AS n FROM "ModDownload" WHERE "modVersionId" = ${version.id}`,
    );
    expect((result.rows[0] as { n: number }).n).toBe(3);
    const [counter] = (await db.db.execute(sql`SELECT "downloadsCount" FROM "ModVersion" WHERE "id" = ${version.id}`))
      .rows as Array<{ downloadsCount: number }>;
    expect(counter?.downloadsCount).toBe(3);
  }, 120_000);
});
