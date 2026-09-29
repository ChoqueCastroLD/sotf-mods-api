/** `cleanup.kelvinseek` against a real PostgreSQL 16: 30-day retention of hashed messages only. */
import { Jobs, ManualClock, silentLogger, systemCtx } from '@sotf/core';
import { startTestDb, type TestDb } from '@sotf/db/testing';
import { sql } from 'drizzle-orm';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import kelvinseekJobs from './index.ts';

let db: TestDb;

beforeAll(async () => {
  db = await startTestDb();
});

afterAll(async () => {
  await db?.stop();
});

describe('cleanup.kelvinseek', () => {
  it('is registered on its scheduled queue and deletes hashed messages older than 30 days', async () => {
    const job = kelvinseekJobs.jobs.find((j) => j.queue === 'cleanup.kelvinseek');
    expect(job).toBeDefined();
    await db.db.execute(sql`INSERT INTO "KelvinGPTMessages" ("chatId", "prompt", "message", "role", "who", "isHashed", "updatedAt") VALUES
      ('h1', 'old', '|old', '', '', true, '2026-09-09T23:59:59'),
      ('h1', 'edge', '|edge', '', '', true, '2026-09-10T12:00:01'),
      ('h2', 'new', '|new', '', '', true, '2026-10-09T00:00:00'),
      ('raw', 'legacy', '|legacy', '', '', false, '2024-01-01T00:00:00')`);
    const clock = new ManualClock('2026-10-10T12:00:00.000Z');
    const noJobs = new Jobs({ send: async () => null, sendDebounced: async () => null } as never, { clock });
    const ctx = systemCtx({ db: db.db, jobs: noJobs, clock, log: silentLogger(), appSecret: 'test' }, 'job-1');
    const run = { id: 'job-1', queue: 'cleanup.kelvinseek', retryCount: 0, signal: new AbortController().signal };
    const handler = job?.handler as (data: object, context: { ctx: typeof ctx; job: typeof run }) => Promise<unknown>;
    expect(await handler({}, { ctx, job: run })).toEqual({ deleted: 1 });
    const left = (await db.db.execute(sql`SELECT "prompt" FROM "KelvinGPTMessages" ORDER BY "id"`)).rows;
    expect(left).toEqual([{ prompt: 'edge' }, { prompt: 'new' }, { prompt: 'legacy' }]);
    // Idempotent: a retry deletes nothing more.
    expect(await handler({}, { ctx, job: run })).toEqual({ deleted: 0 });
  });
});
