/**
 * Test helper of the catalog/search/site integration suites: a disposable PostgreSQL 16 database
 * loaded with the `--small` development seed of WP-14 (the public snapshot of 2026-09-29 plus
 * deterministic synthetic data, run through the migrations and backfills B1–B14, pg-boss schema
 * included), so the acceptance checks run against the real catalog (StackMod, SonsAxLib,
 * BuildShare, the Kelvin mods…).
 *
 * The seed is imported from tooling/migration by path: @sotf/api does not depend on
 * @sotf/migration-tools (see docs/backlog/WP-33.md).
 */
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createDb, type Logger } from '@sotf/db';
import { createTestDatabase, startTestServer, type TestDb } from '@sotf/db/testing';
import type { FastifyInstance } from 'fastify';
import pg from 'pg';
import { seedDev } from '../../../../../../tooling/migration/src/seed/run.ts';

const quiet: Logger = { info: () => {}, warn: () => {}, error: () => {} };

/** A fresh database with the small development seed (≈ 15 s). */
export async function startSeededDb(): Promise<TestDb> {
  const url = await createTestDatabase({ migrate: false });
  const outDir = mkdtempSync(join(tmpdir(), 'sotf-catalog-seed-'));
  try {
    await seedDev({ url, small: true, outDir, log: quiet });
  } finally {
    rmSync(outDir, { recursive: true, force: true });
  }
  const handle = createDb({ connectionString: url, max: 8, applicationName: 'sotf-test' });
  const name = new URL(url).pathname.slice(1);
  return {
    ...handle,
    url,
    async stop() {
      await handle.close();
      const server = await startTestServer();
      const admin = new pg.Client({ connectionString: server.adminUrl });
      await admin.connect();
      try {
        await admin.query(`DROP DATABASE IF EXISTS "${name}" WITH (FORCE)`);
      } finally {
        await admin.end();
      }
    },
  };
}

/** Runs SQL on the seeded database (test fixtures on top of the seed). */
export async function exec(db: TestDb, text: string, values: unknown[] = []): Promise<pg.QueryResult> {
  return db.pool.query(text, values);
}

/**
 * Waits until the app accepts requests: the seed and the app start keep the event loop busy, and
 * `@fastify/under-pressure` answers 503 while its utilisation sample is still high.
 */
export async function waitUntilCalm(app: FastifyInstance, timeoutMs = 30_000): Promise<void> {
  const deadline = Date.now() + timeoutMs;
  let calm = 0;
  while (calm < 3) {
    const res = await app.inject({ method: 'GET', url: '/api/v2/_calm-probe' });
    calm = res.statusCode === 503 ? 0 : calm + 1;
    if (Date.now() > deadline) throw new Error('the API stayed under pressure');
    if (calm < 3) await new Promise((resolve) => setTimeout(resolve, 200));
  }
}

/**
 * `app.inject` that retries a 503 from `@fastify/under-pressure` (the shared test host can be
 * saturated by other suites); any other status is returned as is.
 */
export async function injectCalm(
  app: FastifyInstance,
  options: { url: string; headers?: Record<string, string> },
): Promise<Awaited<ReturnType<FastifyInstance['inject']>>> {
  for (let attempt = 0; ; attempt++) {
    const res = await app.inject({ method: 'GET', url: options.url, headers: options.headers ?? {} });
    const underPressure = res.statusCode === 503 && res.headers['retry-after'] !== undefined;
    if (!underPressure || attempt >= 10) return res;
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
}
