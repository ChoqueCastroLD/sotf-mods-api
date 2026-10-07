/**
 * WP-31 acceptance (uploads) against SeaweedFS (Testcontainers) and PostgreSQL 16: presigned PUT
 * with signed type and size (wrong type → 403, wrong size → rejected), completion (HEAD, size and
 * type checks, inspection/media jobs), ownership, limits, multipart above 100 MB, finalisation into
 * the public bucket (server-side and streaming copy) and the expiry of abandoned uploads.
 */
import { randomBytes } from 'node:crypto';
import { type Ctx, silentLogger, systemCtx } from '@sotf/core';
import { runInspection } from '@sotf/core/inspection/index';
import { processMedia } from '@sotf/core/media/index';
import { createStorage, incomingKey, modFileKey, type ObjectStorage } from '@sotf/core/storage/index';
import { startTestS3, type TestS3 } from '@sotf/core/storage/testing';
import { expireUploads, finalizeUpload, sweepIncoming } from '@sotf/core/uploads/index';
import { createFactories, type Factories } from '@sotf/db/testing';
import { sql } from 'drizzle-orm';
import { zipSync } from 'fflate';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildTestApp, type TestApp } from '../../testing.ts';
import { waitUntilServing } from '../downloads/test-helpers.ts';

const MB = 1024 * 1024;

let s3: TestS3;
let t: TestApp;
let f: Factories;
let storage: ObjectStorage;
let ctx: Ctx;

interface Presigned {
  upload: { id: string; status: string; size: number; contentType: string; mediaId: string | null };
  url: string | null;
  headers: Record<string, string>;
  multipart: { partBytes: number; parts: Array<{ partNumber: number; url: string }> } | null;
}

async function create(userId: number, body: Record<string, unknown>, extra: Record<string, unknown> = {}) {
  return t.app.inject({
    method: 'POST',
    url: '/api/v2/uploads',
    headers: { ...t.as({ userId, ...extra }), ...t.sameOrigin() },
    payload: JSON.stringify(body),
  });
}

async function presign(userId: number, body: Record<string, unknown>): Promise<Presigned> {
  const res = await create(userId, body);
  expect(res.statusCode, res.body).toBe(201);
  return res.json() as Presigned;
}

async function complete(userId: number, id: string, body: Record<string, unknown> = {}) {
  return t.app.inject({
    method: 'POST',
    url: `/api/v2/uploads/${id}/complete`,
    headers: { ...t.as({ userId }), ...t.sameOrigin() },
    payload: JSON.stringify(body),
  });
}

async function put(url: string, body: Buffer, headers: Record<string, string>) {
  return fetch(url, { method: 'PUT', body, headers });
}

async function jobs(name: string): Promise<Array<Record<string, unknown>>> {
  const res = await t.db.db.execute(sql`SELECT "data" FROM "pgboss"."job" WHERE "name" = ${name}`);
  return res.rows.map((r) => (r as { data: Record<string, unknown> }).data);
}

beforeAll(async () => {
  s3 = await startTestS3();
  t = await buildTestApp({ env: s3.env });
  f = createFactories(t.db.db);
  await waitUntilServing(t.app);
  storage = createStorage(s3.config);
  ctx = systemCtx(
    { db: t.db.db, jobs: t.app.platform.jobs, log: silentLogger(), appSecret: t.env.APP_SECRET },
    'uploads-test',
  );
}, 180_000);

afterAll(async () => {
  storage?.destroy();
  await t?.close();
  await s3?.stop();
});

describe('presigned PUT', () => {
  it('uploads straight to the private bucket and completes into an inspection job', async () => {
    const user = await f.user();
    const body = randomBytes(4096);
    const presigned = await presign(user.id, {
      purpose: 'mod_file',
      filename: 'Axel Mod Menu 1.3.9.zip',
      size: body.length,
      contentType: 'application/x-zip-compressed',
    });
    expect(presigned.upload).toMatchObject({ status: 'pending', size: 4096, contentType: 'application/zip' });
    expect(presigned.headers).toEqual({ 'content-type': 'application/zip', 'content-length': '4096' });
    expect(presigned.multipart).toBeNull();
    const url = new URL(presigned.url as string);
    expect(url.pathname).toBe(`/${s3.config.privateBucket}/${incomingKey(user.id, presigned.upload.id)}`);
    expect(url.searchParams.get('X-Amz-SignedHeaders')?.split(';')).toEqual(
      expect.arrayContaining(['content-length', 'content-type', 'host']),
    );
    expect(Number(url.searchParams.get('X-Amz-Expires'))).toBe(900);

    const uploaded = await put(presigned.url as string, body, { 'content-type': 'application/zip' });
    expect(uploaded.status).toBe(200);

    const done = await complete(user.id, presigned.upload.id);
    expect(done.statusCode, done.body).toBe(202);
    expect(done.json()).toMatchObject({ id: presigned.upload.id, status: 'processing', inspection: null });
    expect(await jobs('inspection.run')).toContainEqual({
      uploadId: presigned.upload.id,
      purpose: 'mod_file',
      modVersionId: null,
    });

    // Completing again only returns the state (single use).
    const again = await complete(user.id, presigned.upload.id);
    expect(again.statusCode).toBe(202);
    expect(again.json().status).toBe('processing');

    const got = await t.app.inject({
      method: 'GET',
      url: `/api/v2/uploads/${presigned.upload.id}`,
      headers: t.as({ userId: user.id }),
    });
    expect(got.statusCode).toBe(200);
    expect(got.json()).toMatchObject({ status: 'processing', filename: 'Axel Mod Menu 1.3.9.zip' });
  });

  it('a PUT with another content type is refused by the store (403)', async () => {
    const user = await f.user();
    const body = randomBytes(1024);
    const presigned = await presign(user.id, {
      purpose: 'mod_file',
      filename: 'x.zip',
      size: body.length,
      contentType: 'application/zip',
    });
    const wrong = await put(presigned.url as string, body, { 'content-type': 'application/octet-stream' });
    expect(wrong.status).toBe(403);
    expect(await storage.head(s3.config.privateBucket, incomingKey(user.id, presigned.upload.id))).toBeNull();
    const done = await complete(user.id, presigned.upload.id);
    expect(done.statusCode).toBe(409);
  });

  it('a PUT with another size is refused by the store (403)', async () => {
    const user = await f.user();
    const presigned = await presign(user.id, {
      purpose: 'mod_file',
      filename: 'x.zip',
      size: 2048,
      contentType: 'application/zip',
    });
    const wrong = await put(presigned.url as string, randomBytes(2000), { 'content-type': 'application/zip' });
    expect(wrong.status).toBe(403);
    expect(await storage.head(s3.config.privateBucket, incomingKey(user.id, presigned.upload.id))).toBeNull();
  });

  it('an object whose size does not match the declaration is rejected and deleted on completion', async () => {
    const user = await f.user();
    const presigned = await presign(user.id, {
      purpose: 'mod_file',
      filename: 'x.zip',
      size: 1000,
      contentType: 'application/zip',
    });
    const key = incomingKey(user.id, presigned.upload.id);
    await storage.put({
      bucket: s3.config.privateBucket,
      key,
      body: randomBytes(1500),
      contentType: 'application/zip',
    });
    const done = await complete(user.id, presigned.upload.id);
    expect(done.statusCode).toBe(409);
    expect(done.json().detail).toContain('1500');
    expect(await storage.head(s3.config.privateBucket, key)).toBeNull();
    const state = await t.app.inject({
      method: 'GET',
      url: `/api/v2/uploads/${presigned.upload.id}`,
      headers: t.as({ userId: user.id }),
    });
    expect(state.json()).toMatchObject({ status: 'rejected', error: 'size_mismatch' });
    expect((await complete(user.id, presigned.upload.id)).statusCode).toBe(409);
  });

  it('images become a pending Media row with a media.process job', async () => {
    const user = await f.user();
    const body = randomBytes(512);
    const presigned = await presign(user.id, {
      purpose: 'avatar',
      filename: 'me.PNG',
      size: 512,
      contentType: 'image/png',
    });
    expect((await put(presigned.url as string, body, { 'content-type': 'image/png' })).status).toBe(200);
    const done = await complete(user.id, presigned.upload.id);
    expect(done.statusCode).toBe(202);
    const mediaId = done.json().mediaId as string;
    expect(mediaId).toMatch(/^[0-9a-f-]{36}$/);
    const [row] = (
      await t.db.db.execute(
        sql`SELECT "purpose", "status", "ownerId", "sourceKey", "bytes" FROM "Media" WHERE "id" = ${mediaId}`,
      )
    ).rows;
    expect(row).toMatchObject({
      purpose: 'avatar',
      status: 'pending',
      ownerId: user.id,
      sourceKey: incomingKey(user.id, presigned.upload.id),
    });
    expect(await jobs('media.process')).toContainEqual({ mediaId });
  });
});

describe('validation, quota and ownership', () => {
  it('413, 415, 422 and the verified-email requirement', async () => {
    const user = await f.user();
    const tooBig = await create(user.id, {
      purpose: 'avatar',
      filename: 'a.png',
      size: 6 * MB,
      contentType: 'image/png',
    });
    expect(tooBig.statusCode).toBe(413);
    const wrongType = await create(user.id, {
      purpose: 'mod_file',
      filename: 'a.exe',
      size: 10,
      contentType: 'application/zip',
    });
    expect(wrongType.statusCode).toBe(415);
    const html = await create(user.id, { purpose: 'image', filename: 'a.png', size: 10, contentType: 'text/html' });
    expect(html.statusCode).toBe(415);
    const invalid = await create(user.id, {
      purpose: 'mod_file',
      filename: '../evil/a.zip',
      size: 10,
      contentType: 'application/zip',
    });
    expect(invalid.statusCode).toBe(422);
    const unverified = await create(
      user.id,
      { purpose: 'mod_file', filename: 'a.zip', size: 10, contentType: 'application/zip' },
      { emailVerified: false },
    );
    expect(unverified.statusCode).toBe(403);
    expect(unverified.json().code).toBe('EMAIL_NOT_VERIFIED');
    const anonymous = await t.app.inject({
      method: 'POST',
      url: '/api/v2/uploads',
      headers: t.sameOrigin(),
      payload: JSON.stringify({ purpose: 'mod_file', filename: 'a.zip', size: 10, contentType: 'application/zip' }),
    });
    expect(anonymous.statusCode).toBe(401);
  });

  it('verified creators get the 500 MB mod limit', async () => {
    const user = await f.user();
    const size = 300 * MB;
    expect(
      (await create(user.id, { purpose: 'mod_file', filename: 'a.zip', size, contentType: 'application/zip' }))
        .statusCode,
    ).toBe(413);
    await t.db.db.execute(sql`UPDATE "User" SET "verifiedCreator" = true WHERE "id" = ${user.id}`);
    const ok = await create(user.id, { purpose: 'mod_file', filename: 'a.zip', size, contentType: 'application/zip' });
    expect(ok.statusCode).toBe(201);
    expect(ok.json().multipart.parts).toHaveLength(19);
  });

  it('limits open uploads per user', async () => {
    const user = await f.user();
    const statuses: number[] = [];
    for (let i = 0; i < 11; i += 1) {
      statuses.push(
        (await create(user.id, { purpose: 'image', filename: `a${i}.png`, size: 10, contentType: 'image/png' }))
          .statusCode,
      );
    }
    expect(statuses.slice(0, 10)).toEqual(Array(10).fill(201));
    expect(statuses[10]).toBe(429);
  });

  it("someone else's upload is not found", async () => {
    const owner = await f.user();
    const other = await f.user();
    const presigned = await presign(owner.id, {
      purpose: 'image',
      filename: 'a.png',
      size: 10,
      contentType: 'image/png',
    });
    const res = await t.app.inject({
      method: 'GET',
      url: `/api/v2/uploads/${presigned.upload.id}`,
      headers: t.as({ userId: other.id }),
    });
    expect(res.statusCode).toBe(404);
    expect((await complete(other.id, presigned.upload.id)).statusCode).toBe(404);
  });
});

describe('multipart above 100 MB', () => {
  it('uploads the parts with presigned URLs and completes with their ETags', async () => {
    const user = await f.user();
    const size = 101 * MB;
    const body = randomBytes(size);
    const presigned = await presign(user.id, {
      purpose: 'mod_file',
      filename: 'big.zip',
      size,
      contentType: 'application/zip',
    });
    expect(presigned.url).toBeNull();
    expect(presigned.multipart?.partBytes).toBe(16 * MB);
    expect(presigned.multipart?.parts).toHaveLength(7);
    const parts: Array<{ partNumber: number; etag: string }> = [];
    for (const part of presigned.multipart?.parts ?? []) {
      const start = (part.partNumber - 1) * 16 * MB;
      const res = await fetch(part.url, { method: 'PUT', body: body.subarray(start, Math.min(size, start + 16 * MB)) });
      expect(res.status, `part ${part.partNumber}`).toBe(200);
      parts.push({ partNumber: part.partNumber, etag: res.headers.get('etag') as string });
    }
    expect((await complete(user.id, presigned.upload.id, { parts: parts.slice(1) })).statusCode).toBe(422);
    const done = await complete(user.id, presigned.upload.id, { parts });
    expect(done.statusCode, done.body).toBe(202);
    const head = await storage.head(s3.config.privateBucket, incomingKey(user.id, presigned.upload.id));
    expect(head?.size).toBe(size);
  }, 120_000);
});

describe('a presigned PUT cannot swap an object after it was checked', () => {
  const manifest = new TextEncoder().encode(
    JSON.stringify({ id: 'SwapMod', name: 'Swap Mod', version: '1.0.0', type: 'Mod' }),
  );
  /** Two stored zips of exactly the same size: the signed Content-Length does not tell them apart. */
  function twoZips() {
    const make = (fill: string) =>
      Buffer.from(
        zipSync({ 'manifest.json': manifest, 'pad.txt': new TextEncoder().encode(fill.repeat(500)) }, { level: 0 }),
      );
    const good = make('a');
    const swapped = make('b');
    expect(swapped.length).toBe(good.length);
    return { good, swapped };
  }

  async function uploaded(body: Buffer) {
    const user = await f.user();
    const presigned = await presign(user.id, {
      purpose: 'mod_file',
      filename: 'swap.zip',
      size: body.length,
      contentType: 'application/zip',
    });
    expect((await put(presigned.url as string, body, { 'content-type': 'application/zip' })).status).toBe(200);
    expect((await complete(user.id, presigned.upload.id)).statusCode).toBe(202);
    return { user, id: presigned.upload.id, url: presigned.url as string };
  }

  it('publication refuses an object replaced after its inspection passed', async () => {
    const { good, swapped } = twoZips();
    const { id, url } = await uploaded(good);
    const outcome = await runInspection(ctx, storage, { uploadId: id, modVersionId: null });
    expect(outcome.status).toBe('passed');

    // The URL still works: the same signed Content-Type and Content-Length overwrite the object.
    expect((await put(url, swapped, { 'content-type': 'application/zip' })).status).toBe(200);

    const key = modFileKey(30, 501, 'Swap Mod', '1.0.0');
    await expect(finalizeUpload(ctx, storage, { uploadId: id, key })).rejects.toMatchObject({ code: 'CONFLICT' });
    expect(await storage.head(s3.config.publicBucket, key)).toBeNull();
  });

  it('inspection rejects an object replaced after the upload was completed', async () => {
    const { good, swapped } = twoZips();
    const { user, id, url } = await uploaded(good);
    expect((await put(url, swapped, { 'content-type': 'application/zip' })).status).toBe(200);

    const outcome = await runInspection(ctx, storage, { uploadId: id, modVersionId: null });
    expect(outcome).toEqual({ status: 'skipped', reason: 'object_changed' });
    const [row] = (await t.db.db.execute(sql`SELECT "status", "error" FROM "Upload" WHERE "id" = ${id}`)).rows;
    expect(row).toMatchObject({ status: 'rejected', error: 'object_changed' });
    expect(await storage.head(s3.config.privateBucket, incomingKey(user.id, id))).toBeNull();
  });

  it('inspection reads are conditional on the completed ETag: a swap right after its first HEAD is caught', async () => {
    const { good, swapped } = twoZips();
    const { id, url } = await uploaded(good);
    let heads = 0;
    const swapping = new Proxy(storage, {
      get(target, property) {
        if (property === 'head') {
          return async (bucket: string, key: string) => {
            const head = await target.head(bucket, key);
            heads += 1;
            // The attacker's second PUT lands between the HEAD and the reads of the inspection.
            if (heads === 1) expect((await put(url, swapped, { 'content-type': 'application/zip' })).status).toBe(200);
            return head;
          };
        }
        const value = Reflect.get(target, property, target) as unknown;
        return typeof value === 'function' ? value.bind(target) : value;
      },
    });
    const outcome = await runInspection(ctx, swapping, { uploadId: id, modVersionId: null });
    expect(outcome).toEqual({ status: 'skipped', reason: 'object_changed' });
    const [row] = (await t.db.db.execute(sql`SELECT "status", "error" FROM "Upload" WHERE "id" = ${id}`)).rows;
    expect(row).toMatchObject({ status: 'rejected', error: 'object_changed' });
  });

  it("a copy with ifMatch fails when the ETag is not the object's", async () => {
    const { good } = twoZips();
    const { user, id } = await uploaded(good);
    const source = { bucket: s3.config.privateBucket, key: incomingKey(user.id, id) };
    const head = await storage.head(source.bucket, source.key);
    const target = { bucket: s3.config.publicBucket, key: `mods/9/${id}/x.zip`, contentType: 'application/zip' };
    await expect(
      storage.copy({ ...source, ifMatch: '"0123456789abcdef0123456789abcdef"' }, target),
    ).rejects.toMatchObject({ code: 'CONFLICT' });
    expect(await storage.head(target.bucket, target.key)).toBeNull();
    expect(await storage.copy({ ...source, ifMatch: head?.etag as string }, target)).toBe('server');
    const streamStorage = createStorage({ ...s3.config, copyMode: 'stream' });
    try {
      await expect(
        streamStorage.copy(
          { ...source, ifMatch: '"0123456789abcdef0123456789abcdef"' },
          { ...target, key: `${target.key}2` },
        ),
      ).rejects.toMatchObject({ code: 'CONFLICT' });
    } finally {
      streamStorage.destroy();
    }
  });
});

describe('an image that fails processing when one bucket plays both roles (production)', () => {
  it('deletes its incoming/ source instead of leaving it in the public bucket', async () => {
    const user = await f.user();
    const shared = createStorage({ ...s3.config, privateBucket: s3.config.publicBucket });
    try {
      const presigned = await presign(user.id, {
        purpose: 'avatar',
        filename: 'a.png',
        size: 64,
        contentType: 'image/png',
      });
      const key = incomingKey(user.id, presigned.upload.id);
      // Not an image at all: the pipeline refuses it by its magic bytes.
      await shared.put({ bucket: s3.config.publicBucket, key, body: Buffer.alloc(64, 7), contentType: 'image/png' });
      const mediaId = '0192f3a5-1b2c-7d3e-8f40-5a6b7c8d9e0f';
      await t.db.db.execute(sql`
        INSERT INTO "Media" ("id", "ownerId", "purpose", "sourceBucket", "sourceKey", "bytes", "contentType", "status")
        VALUES (${mediaId}::uuid, ${user.id}, 'avatar', ${s3.config.publicBucket}, ${key}, 64, 'image/png', 'pending')`);
      const outcome = await processMedia(ctx, shared, mediaId);
      expect(outcome.status).toBe('failed');
      expect(await shared.head(s3.config.publicBucket, key)).toBeNull();
    } finally {
      shared.destroy();
    }
  });
});

describe('finalisation into the public bucket', () => {
  async function completedUpload(filename: string, body: Buffer) {
    const user = await f.user();
    const presigned = await presign(user.id, {
      purpose: 'mod_file',
      filename,
      size: body.length,
      contentType: 'application/zip',
    });
    expect((await put(presigned.url as string, body, { 'content-type': 'application/zip' })).status).toBe(200);
    expect((await complete(user.id, presigned.upload.id)).statusCode).toBe(202);
    return { user, id: presigned.upload.id };
  }

  it.each(['server', 'stream'] as const)(
    'copies with the final metadata (%s copy) and deletes incoming/',
    async (mode) => {
      const body = randomBytes(3000);
      const { user, id } = await completedUpload('a.zip', body);
      const modeStorage = createStorage({ ...s3.config, copyMode: mode });
      try {
        const key = modFileKey(20, mode === 'server' ? 415 : 416, "Axel's Mod Menu", '1.3.9');
        const result = await finalizeUpload(ctx, modeStorage, {
          uploadId: id,
          key,
          downloadName: "Axel's Mod Menu 1.3.9.zip",
        });
        expect(result).toMatchObject({ bucket: s3.config.publicBucket, key, size: 3000, copy: mode });
        expect(await storage.head(s3.config.privateBucket, incomingKey(user.id, id))).toBeNull();

        // Anonymous public read, like r2.sotf-mods.com.
        const res = await fetch(result.url);
        expect(res.status).toBe(200);
        expect(Buffer.from(await res.arrayBuffer()).equals(body)).toBe(true);
        expect(res.headers.get('content-type')).toBe('application/zip');
        expect(res.headers.get('content-disposition')).toBe(
          `attachment; filename="Axel's Mod Menu 1.3.9.zip"; filename*=UTF-8''Axel%27s%20Mod%20Menu%201.3.9.zip`,
        );
        expect(res.headers.get('cache-control')).toBe('public, max-age=31536000, immutable');

        // Idempotent for the same key; another key is a conflict.
        expect((await finalizeUpload(ctx, modeStorage, { uploadId: id, key })).key).toBe(key);
        await expect(
          finalizeUpload(ctx, modeStorage, { uploadId: id, key: 'mods/1/1/other.zip' }),
        ).rejects.toMatchObject({
          code: 'CONFLICT',
        });
      } finally {
        modeStorage.destroy();
      }
    },
  );

  it('refuses pending uploads and unsafe keys', async () => {
    const user = await f.user();
    const presigned = await presign(user.id, {
      purpose: 'mod_file',
      filename: 'p.zip',
      size: 10,
      contentType: 'application/zip',
    });
    await expect(
      finalizeUpload(ctx, storage, { uploadId: presigned.upload.id, key: 'mods/1/2/p.zip' }),
    ).rejects.toMatchObject({
      code: 'CONFLICT',
    });
    await expect(
      finalizeUpload(ctx, storage, { uploadId: presigned.upload.id, key: "mods/1/2/axel's.zip" }),
    ).rejects.toThrow(TypeError);
  });
});

describe('expiry of abandoned uploads', () => {
  it('marks them expired and deletes the incoming object', async () => {
    const user = await f.user();
    const body = randomBytes(100);
    const presigned = await presign(user.id, {
      purpose: 'mod_file',
      filename: 'old.zip',
      size: 100,
      contentType: 'application/zip',
    });
    expect((await put(presigned.url as string, body, { 'content-type': 'application/zip' })).status).toBe(200);
    const multi = await presign(user.id, {
      purpose: 'mod_file',
      filename: 'big.zip',
      size: 120 * MB,
      contentType: 'application/zip',
    });
    const fresh = await presign(user.id, { purpose: 'image', filename: 'new.png', size: 10, contentType: 'image/png' });
    await t.db.db.execute(sql`
      UPDATE "Upload" SET "expiresAt" = now() - interval '1 minute'
       WHERE "id" IN (${presigned.upload.id}::uuid, ${multi.upload.id}::uuid)`);

    const report = await expireUploads(ctx, storage);
    expect(report.expired).toBeGreaterThanOrEqual(2);
    expect(report.failures).toBe(0);
    const states = await t.db.db.execute(sql`
      SELECT "id", "status" FROM "Upload"
       WHERE "id" IN (${presigned.upload.id}::uuid, ${multi.upload.id}::uuid, ${fresh.upload.id}::uuid)`);
    const byId = Object.fromEntries(
      states.rows.map((r) => [(r as { id: string }).id, (r as { status: string }).status]),
    );
    expect(byId).toEqual({
      [presigned.upload.id]: 'expired',
      [multi.upload.id]: 'expired',
      [fresh.upload.id]: 'pending',
    });
    expect(await storage.head(s3.config.privateBucket, incomingKey(user.id, presigned.upload.id))).toBeNull();
    const gone = await complete(user.id, presigned.upload.id);
    expect(gone.statusCode).toBe(410);
    // A second run finds nothing to do.
    expect((await expireUploads(ctx, storage)).expired).toBe(0);
  });

  it('keeps an upload whose object could not be deleted so the next run retries it', async () => {
    const user = await f.user();
    const presigned = await presign(user.id, {
      purpose: 'mod_file',
      filename: 'stuck.zip',
      size: 100,
      contentType: 'application/zip',
    });
    await t.db.db.execute(
      sql`UPDATE "Upload" SET "expiresAt" = now() - interval '1 minute' WHERE "id" = ${presigned.upload.id}::uuid`,
    );
    const failing = {
      ...storage,
      delete: async () => {
        throw new Error('store is down');
      },
    } as unknown as ObjectStorage;
    const first = await expireUploads(ctx, failing);
    expect(first).toMatchObject({ expired: 0, failures: 1 });
    const [pending] = (
      await t.db.db.execute(sql`SELECT "status" FROM "Upload" WHERE "id" = ${presigned.upload.id}::uuid`)
    ).rows;
    expect(pending).toMatchObject({ status: 'pending' });

    const second = await expireUploads(ctx, storage);
    expect(second.expired).toBe(1);
    const [done] = (await t.db.db.execute(sql`SELECT "status" FROM "Upload" WHERE "id" = ${presigned.upload.id}::uuid`))
      .rows;
    expect(done).toMatchObject({ status: 'expired' });
  });
});

describe('orphans under incoming/', () => {
  it('deletes the strays that no live upload or pending media names, and nothing else', async () => {
    const user = await f.user();
    const bucket = s3.config.privateBucket;
    const put1 = (key: string) => storage.put({ bucket, key, body: randomBytes(16), contentType: 'application/zip' });

    // A presigned PUT replayed after its upload was finalised: the row says `final`, the object is a stray.
    const replayed = await presign(user.id, {
      purpose: 'mod_file',
      filename: 'a.zip',
      size: 16,
      contentType: 'application/zip',
    });
    const replayedKey = incomingKey(user.id, replayed.upload.id);
    await put1(replayedKey);
    await t.db.db.execute(sql`
      UPDATE "Upload" SET "status" = 'ready', "resultRef" = '{"final": {"key": "mods/1/1/a.zip"}}'::jsonb
       WHERE "id" = ${replayed.upload.id}::uuid`);
    // An open upload and a pending media keep their objects.
    const open = await presign(user.id, {
      purpose: 'mod_file',
      filename: 'b.zip',
      size: 16,
      contentType: 'application/zip',
    });
    const openKey = incomingKey(user.id, open.upload.id);
    await put1(openKey);
    const mediaKey = `incoming/${user.id}/0192f3a5-1b2c-7d3e-8f40-5a6b7c8d9e01-thumbnail`;
    await put1(mediaKey);
    await t.db.db.execute(sql`
      INSERT INTO "Media" ("id", "ownerId", "purpose", "sourceBucket", "sourceKey", "bytes", "contentType", "status")
      VALUES ('0192f3a5-1b2c-7d3e-8f40-5a6b7c8d9e02'::uuid, ${user.id}, 'thumbnail', ${bucket}, ${mediaKey}, 16, 'image/png', 'pending')`);
    // No row at all.
    const strayKey = `incoming/${user.id}/0192f3a5-1b2c-7d3e-8f40-5a6b7c8d9e03`;
    await put1(strayKey);

    // Nothing is old enough yet.
    const fresh = await sweepIncoming(ctx, storage);
    expect(fresh.deleted).toBe(0);
    expect(await storage.head(bucket, strayKey)).not.toBeNull();

    const report = await sweepIncoming(ctx, storage, { olderThanMs: 0 });
    expect(report.failures).toBe(0);
    expect(await storage.head(bucket, strayKey)).toBeNull();
    expect(await storage.head(bucket, replayedKey)).toBeNull();
    expect(await storage.head(bucket, openKey)).not.toBeNull();
    expect(await storage.head(bucket, mediaKey)).not.toBeNull();
  });

  it('does nothing without storage', async () => {
    expect(await sweepIncoming(ctx, null)).toEqual({ scanned: 0, deleted: 0, failures: 0 });
  });
});
