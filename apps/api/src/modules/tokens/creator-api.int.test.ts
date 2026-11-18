// biome-ignore-all lint/suspicious/noExplicitAny: assertions walk JSON bodies
/**
 * The creator API with an API key only (`/dashboard/api`, `/developers/api.md`): exactly what a
 * script or an AI agent sends (the key, JSON, no cookie, no Origin) against the real auth
 * resolver and a real S3. Covers the guide's flows: check the key, upload, create a mod, publish a
 * version, edit the listing, read stats; and the self-description at `/api/v2` and in OpenAPI.
 */
import { createHash, randomBytes } from 'node:crypto';
import { type Ctx, silentLogger, systemCtx } from '@sotf/core';
import { runInspection } from '@sotf/core/inspection/index';
import { createStorage, type ObjectStorage } from '@sotf/core/storage/index';
import { startTestS3, type TestS3 } from '@sotf/core/storage/testing';
import { createFactories, type Factories } from '@sotf/db/testing';
import { zipSync } from 'fflate';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildTestApp, type TestApp } from '../../testing.ts';
import { waitUntilServing } from '../downloads/test-helpers.ts';

let s3: TestS3;
let t: TestApp;
let f: Factories;
let storage: ObjectStorage;
let ctx: Ctx;

const enc = (text: string) => new TextEncoder().encode(text);
const manifest = (id: string, version: string) =>
  enc(JSON.stringify({ id, name: id, author: 'tester', version, type: 'Mod', description: 'Test mod' }));
const zip = (files: Record<string, Uint8Array>) => Buffer.from(zipSync(files, { level: 9 }));

beforeAll(async () => {
  s3 = await startTestS3();
  t = await buildTestApp({
    env: s3.env,
    // The real resolver: `Authorization: Bearer sotfm_pat_…` (not the test header).
    sessionResolver: undefined,
    rateLimits: {
      uploads: { max: 100_000, window: '1 minute' },
      userWrite: { max: 100_000, window: '1 minute' },
      anonymousRead: { max: 100_000, window: '1 minute' },
    },
  });
  f = createFactories(t.db.db);
  await waitUntilServing(t.app);
  storage = createStorage(s3.config);
  ctx = systemCtx(
    { db: t.db.db, jobs: t.app.platform.jobs, log: silentLogger(), appSecret: t.env.APP_SECRET },
    'creator-api-test',
  );
}, 240_000);

afterAll(async () => {
  storage?.destroy();
  await t?.close();
  await s3?.stop();
});

async function apiKey(userId: number, scopes: string[]): Promise<string> {
  const key = `sotfm_pat_${randomBytes(32).toString('base64url')}`;
  await t.db.pool.query(
    `INSERT INTO "PersonalAccessToken" ("id", "userId", "name", "tokenHash", "tokenPrefix", "scopes")
     VALUES (gen_random_uuid(), $1, 'ci', $2, $3, $4)`,
    [userId, createHash('sha256').update(key).digest('hex'), key.slice(0, 14), scopes],
  );
  return key;
}

function client(key: string) {
  return async (method: 'GET' | 'POST' | 'PATCH', url: string, body?: unknown) => {
    const res = await t.app.inject({
      method,
      url,
      headers: {
        authorization: `Bearer ${key}`,
        'cf-connecting-ip': '203.0.113.7',
        ...(method === 'GET' ? {} : { 'content-type': 'application/json' }),
      },
      ...(method === 'GET' ? {} : { payload: JSON.stringify(body ?? {}) }),
    });
    return { status: res.statusCode, body: res.body ? (res.json() as any) : null };
  };
}

describe('creator API with an API key only', () => {
  it('checks the key, uploads, creates a mod, publishes a version, edits the listing and reads stats', async () => {
    const creator = await f.user({
      emailVerifiedAt: new Date('2025-01-01T00:00:00Z'),
      trustLevel: 3,
      verifiedCreator: true,
    });
    const call = client(await apiKey(creator.id, ['read', 'mods:write']));
    const category = (await f.category({ type: 'Mod', slug: 'api-tools' })).slug;

    const upload = async (filename: string, bytes: Buffer) => {
      const created = await call('POST', '/api/v2/uploads', {
        purpose: 'mod_file',
        filename,
        size: bytes.length,
        contentType: 'application/zip',
      });
      expect(created.status, JSON.stringify(created.body)).toBe(201);
      const put = await fetch(created.body.url, { method: 'PUT', body: bytes, headers: created.body.headers });
      expect(put.status).toBe(200);
      expect([200, 202]).toContain((await call('POST', `/api/v2/uploads/${created.body.upload.id}/complete`)).status);
      // The worker runs this in production; the agent polls GET /uploads/:id until `ready`.
      await runInspection(ctx, storage, { uploadId: created.body.upload.id, modVersionId: null });
      const state = await call('GET', `/api/v2/uploads/${created.body.upload.id}`);
      expect(state.body.status).toBe('ready');
      return created.body.upload.id as string;
    };

    expect((await call('GET', '/api/v2/me')).status).toBe(200);

    const first = await upload('Beacon-1.0.0.zip', zip({ 'Beacon/manifest.json': manifest('Beacon', '1.0.0') }));
    const draft = await call('POST', '/api/v2/drafts', {
      kind: 'mod',
      data: {
        fileUploadId: first,
        slug: 'beacon-api',
        name: 'Beacon',
        shortDescription: 'A mod published through the API.',
        descriptionMd: '## Beacon\n\nPublished with an API key.',
        categorySlug: category,
        tagSlugs: [],
        license: 'mit',
        platform: 'Client',
      },
    });
    expect(draft.status, JSON.stringify(draft.body)).toBe(201);
    const submitted = await call('POST', `/api/v2/drafts/${draft.body.id}/submit`);
    expect(submitted.status, JSON.stringify(submitted.body)).toBe(201);
    expect(submitted.body.status).toBe('published');
    const modId = submitted.body.modId as number;

    const next = await upload('Beacon-1.1.0.zip', zip({ 'Beacon/manifest.json': manifest('Beacon', '1.1.0') }));
    const version = await call('POST', `/api/v2/studio/mods/${modId}/versions`, {
      uploadId: next,
      changelogMd: '- Faster',
    });
    expect(version.status, JSON.stringify(version.body)).toBe(201);

    const edited = await call('PATCH', `/api/v2/studio/mods/${modId}`, { shortDescription: 'Edited through the API.' });
    expect(edited.status, JSON.stringify(edited.body)).toBe(200);

    const mine = await call('GET', '/api/v2/studio/mods');
    expect(mine.status).toBe(200);
    expect(JSON.stringify(mine.body)).toContain('beacon-api');
    expect((await call('GET', `/api/v2/studio/analytics?range=30d&modId=${modId}`)).status).toBe(200);
    expect((await call('GET', '/api/v2/studio/overview')).status).toBe(200);
  });

  it('a read-only key cannot write, and no key reaches account or staff areas', async () => {
    const creator = await f.user({ emailVerifiedAt: new Date('2025-01-01T00:00:00Z'), trustLevel: 2 });
    const call = client(await apiKey(creator.id, ['read']));
    expect((await call('GET', '/api/v2/studio/mods')).status).toBe(200);
    const write = await call('POST', '/api/v2/uploads', {
      purpose: 'mod_file',
      filename: 'x.zip',
      size: 10,
      contentType: 'application/zip',
    });
    expect(write.status).toBe(403);
    expect((await call('GET', '/api/v2/me/sessions')).status).toBe(403);
  });

  it('describes itself at /api/v2 and declares API keys in the OpenAPI document', async () => {
    const index = await t.app.inject({ method: 'GET', url: '/api/v2' });
    expect(index.statusCode).toBe(200);
    const body = index.json() as any;
    expect(body.documentation.guide).toMatch(/\/developers\/api\.md$/);
    expect(body.authentication.header).toContain('Bearer');
    expect(index.headers.link).toContain('rel="service-desc"');
    const openapi = (await t.app.inject({ method: 'GET', url: '/api/v2/openapi.json' })).json() as any;
    expect(openapi.components.securitySchemes.apiKey.scheme).toBe('bearer');
    expect(openapi.paths['/api/v2/uploads'].post['x-sotf-token-scope']).toBe('mods:write');
  });
});
