/**
 * `buildTestApp()` (`@sotf/api/testing`): the real app against a disposable, migrated PostgreSQL 16
 * (Testcontainers via `@sotf/db/testing`, with the pg-boss schema) for integration tests of the
 * platform and of every domain module.
 *
 *   const t = await buildTestApp({ modules: [myModule] });
 *   const res = await t.app.inject({ method: 'GET', url: '/api/v2/…', headers: t.as({ userId: 1 }) });
 *   await t.close();
 *
 * Sessions: unless a `sessionResolver` is given, the test app reads the actor from the
 * `x-test-actor` header (JSON) that `t.as(actor)` builds. That header means nothing outside tests.
 */
import { randomBytes } from 'node:crypto';
import type { Actor } from '@sotf/core';
import { startTestDb, type TestDb } from '@sotf/db/testing';
import type { FastifyInstance } from 'fastify';
import { type BuildAppOptions, buildApp } from './app.ts';
import { type ApiEnv, parseApiEnv } from './env.ts';
import type { SessionResolver } from './lib/types.ts';

export const TEST_SITE_URL = 'https://sotf-mods.test';
export const TEST_ACTOR_HEADER = 'x-test-actor';

export interface TestAppOptions extends Omit<BuildAppOptions, 'env' | 'db'> {
  /** Environment overrides (strings, as in process.env). */
  env?: Record<string, string>;
  /** Reuse a database (e.g. to share it between apps); by default a fresh one is created. */
  db?: TestDb;
}

export interface TestApp {
  app: FastifyInstance;
  db: TestDb;
  env: ApiEnv;
  /** Headers that authenticate a request as `actor` (see TEST_ACTOR_HEADER). */
  as(actor: Partial<Actor> & { userId: number }): Record<string, string>;
  /** Headers of the internal auth (`X-Internal-Auth`). */
  internal(): Record<string, string>;
  /** Headers of a same-origin browser request (Fetch Metadata + JSON). */
  sameOrigin(): Record<string, string>;
  close(): Promise<void>;
}

/** Test session resolver: the actor comes from the `x-test-actor` header. */
export const headerSessionResolver: SessionResolver = async (request) => {
  const raw = request.headers[TEST_ACTOR_HEADER];
  if (typeof raw !== 'string' || raw === '') return null;
  const value = JSON.parse(raw) as Partial<Actor> & { userId: number };
  return { role: 'user', emailVerified: true, ...value };
};

export function testEnv(databaseUrl: string, overrides: Record<string, string> = {}): ApiEnv {
  return parseApiEnv({
    NODE_ENV: 'test',
    TZ: 'UTC',
    LOG_LEVEL: 'silent',
    SITE_ENV: 'development',
    PUBLIC_SITE_URL: TEST_SITE_URL,
    INTERNAL_SECRET: randomBytes(32).toString('base64url'),
    APP_SECRET: randomBytes(32).toString('base64url'),
    DATABASE_URL: databaseUrl,
    GIT_SHA: 'test',
    ...overrides,
  });
}

export async function buildTestApp(options: TestAppOptions = {}): Promise<TestApp> {
  const db = options.db ?? (await startTestDb({ pgBoss: true }));
  const ownsDb = !options.db;
  const env = testEnv(db.url, options.env);
  const { env: _env, db: _db, ...rest } = options;
  let app: FastifyInstance;
  try {
    app = await buildApp({
      startDependencies: 'await',
      // A saturated shared host would otherwise turn requests into 503 "under pressure".
      underPressure: false,
      sessionResolver: headerSessionResolver,
      ...rest,
      env,
      db,
    });
    await app.ready();
  } catch (error) {
    if (ownsDb) await db.stop();
    throw error;
  }
  return {
    app,
    db,
    env,
    as: (actor) => ({ [TEST_ACTOR_HEADER]: JSON.stringify(actor) }),
    internal: () => ({ 'x-internal-auth': env.INTERNAL_SECRET }),
    sameOrigin: () => ({ 'sec-fetch-site': 'same-origin', origin: TEST_SITE_URL, 'content-type': 'application/json' }),
    async close() {
      await app.close();
      if (ownsDb) await db.stop();
    },
  };
}
