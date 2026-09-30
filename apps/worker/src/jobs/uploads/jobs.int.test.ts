/**
 * WP-31 jobs through a real worker (pg-boss on PostgreSQL 16, SeaweedFS): `cleanup.uploads` expires
 * abandoned uploads and deletes their objects; `cleanup.download-unique` keeps only today and
 * yesterday of the uniqueness window. Both are scheduled.
 */
import { randomBytes } from 'node:crypto';
import { silentLogger } from '@sotf/core';
import { createStorage, incomingKey, type ObjectStorage } from '@sotf/core/storage/index';
import { startTestS3, type TestS3 } from '@sotf/core/storage/testing';
import { createFactories, startTestDb, type TestDb } from '@sotf/db/testing';
import { sql } from 'drizzle-orm';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createWorker, type Worker } from '../../app.ts';
import { parseWorkerEnv } from '../../env.ts';
import downloadsJobs from '../downloads/index.ts';
import uploadsJobs, { setWorkerStorageForTests } from './index.ts';

let db: TestDb;
let s3: TestS3;
let storage: ObjectStorage;
let worker: Worker;

async function waitFor<T>(probe: () => Promise<T | undefined | null | false>, timeoutMs = 20_000): Promise<T> {
  const deadline = Date.now() + timeoutMs;
  for (;;) {
    const value = await probe();
    if (value) return value;
    if (Date.now() > deadline) throw new Error('timed out');
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
}

beforeAll(async () => {
  [db, s3] = await Promise.all([startTestDb({ pgBoss: true }), startTestS3()]);
  storage = createStorage(s3.config);
  setWorkerStorageForTests(storage);
  const env = parseWorkerEnv({
    NODE_ENV: 'test',
    LOG_LEVEL: 'silent',
    PUBLIC_SITE_URL: 'https://sotf-mods.test',
    INTERNAL_SECRET: randomBytes(32).toString('base64url'),
    APP_SECRET: randomBytes(32).toString('base64url'),
    DATABASE_URL: db.url,
    GIT_SHA: 'test',
    ...s3.env,
  });
  worker = createWorker({
    env,
    db,
    groups: [uploadsJobs, downloadsJobs],
    logger: silentLogger(),
    pollingIntervalSeconds: 0.5,
    maintenance: false,
  });
  const state = await worker.start();
  expect(state.scheduled).toEqual(expect.arrayContaining(['cleanup.uploads#hourly', 'cleanup.download-unique#daily']));
}, 180_000);

afterAll(async () => {
  await worker?.stop(5000);
  setWorkerStorageForTests(undefined);
  storage?.destroy();
  await db?.stop();
  await s3?.stop();
});

describe('cleanup.uploads', () => {
  it('expires abandoned uploads and deletes their incoming objects', async () => {
    const f = createFactories(db.db);
    const user = await f.user();
    const id = '0192f3a5-1b2c-7d3e-8f40-5a6b7c8d9e0f';
    const key = incomingKey(user.id, id);
    await storage.put({ bucket: s3.config.privateBucket, key, body: randomBytes(64), contentType: 'application/zip' });
    await db.db.execute(sql`
      INSERT INTO "Upload" ("id", "userId", "purpose", "bucket", "key", "filename", "contentType",
                            "declaredBytes", "maxBytes", "status", "expiresAt")
      VALUES (${id}, ${user.id}, 'mod_file', ${s3.config.privateBucket}, ${key}, 'a.zip', 'application/zip',
              64, 1000, 'pending', now() - interval '1 hour')`);

    const jobId = await worker.jobs.enqueue('cleanup.uploads', {});
    await waitFor(async () => {
      const [job] = await worker.boss.findJobs('cleanup.uploads', { id: jobId as string });
      return job?.state === 'completed' ? job : null;
    });
    const [row] = (await db.db.execute(sql`SELECT "status" FROM "Upload" WHERE "id" = ${id}`)).rows;
    expect(row).toEqual({ status: 'expired' });
    expect(await storage.head(s3.config.privateBucket, key)).toBeNull();
  });
});

describe('cleanup.download-unique', () => {
  it('keeps only today and yesterday', async () => {
    await db.db.execute(sql`
      INSERT INTO "DownloadUnique" ("modVersionId", "day", "ipHash") VALUES
        (1, current_date, 'a'), (1, current_date - 1, 'a'), (1, current_date - 2, 'a'), (2, current_date - 30, 'b')`);
    const jobId = await worker.jobs.enqueue('cleanup.download-unique', {});
    const job = await waitFor(async () => {
      const [found] = await worker.boss.findJobs('cleanup.download-unique', { id: jobId as string });
      return found?.state === 'completed' ? found : null;
    });
    expect(job.output).toEqual({ deleted: 2 });
    const left = await db.db.execute(sql`SELECT count(*)::int AS n FROM "DownloadUnique"`);
    expect(left.rows[0]).toEqual({ n: 2 });
  });
});
