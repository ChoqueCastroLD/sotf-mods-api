/**
 * WP-31 acceptance (uploads) against SeaweedFS (Testcontainers) and PostgreSQL 16: presigned PUT
 * with signed type and size (wrong type → 403, wrong size → rejected), completion (HEAD, size and
 * type checks, inspection/media jobs), ownership, limits, multipart above 100 MB, finalisation into
 * the public bucket (server-side and streaming copy) and the expiry of abandoned uploads.
 */
import { randomBytes } from 'node:crypto';
import { type Ctx, silentLogger, systemCtx } from '@sotf/core';
import { createStorage, incomingKey, modFileKey, type ObjectStorage } from '@sotf/core/storage/index';
import { startTestS3, type TestS3 } from '@sotf/core/storage/testing';
import { expireUploads, finalizeUpload } from '@sotf/core/uploads/index';
import { createFactories, type Factories } from '@sotf/db/testing';
import { sql } from 'drizzle-orm';
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
});
