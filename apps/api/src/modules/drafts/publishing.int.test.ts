// biome-ignore-all lint/suspicious/noExplicitAny: assertions walk JSON bodies
/**
 * WP-40 acceptance (`pnpm --filter @sotf/api test:int -- publishing`) against PostgreSQL 16 and
 * SeaweedFS: zip fixtures go through the real presigned upload, the inspection job (run
 * in-process) and the draft → submit flow.
 *
 * - valid zip → a new mod (pending for a first-time creator, published for a verified creator),
 *   served by the legacy `GET /api/mods/:mod_id` with its legacy shape;
 * - zip bomb, zip slip and a broken manifest are refused before submission;
 * - an `.exe` inside is flagged: quarantined, the mod and version stay `pending`;
 * - a new version with a lower semver is `version_not_greater`; exactly one `isLatest` per mod;
 * - a BuildShare JSON extracts its thumbnail and `buildMeta`;
 * - images become WebP (original and variants, no AVIF) at widths ≤ the original and lose their EXIF.
 */
import { type Ctx, silentLogger, systemCtx } from '@sotf/core';
import { extractBuild } from '@sotf/core/builds/index';
import { runInspection } from '@sotf/core/inspection/index';
import { processMedia } from '@sotf/core/media/index';
import { createStorage, type ObjectStorage } from '@sotf/core/storage/index';
import { startTestS3, type TestS3 } from '@sotf/core/storage/testing';
import { createFactories, type Factories } from '@sotf/db/testing';
import { zipSync } from 'fflate';
import sharp from 'sharp';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildTestApp, type TestApp } from '../../testing.ts';
import { waitUntilServing } from '../downloads/test-helpers.ts';

let s3: TestS3;
let t: TestApp;
let f: Factories;
let storage: ObjectStorage;
let ctx: Ctx;
let newbie: { id: number };
let verified: { id: number };
let buildCategory: string;
/** Every 5xx of the run (none expected). */
const serverErrors: unknown[] = [];

const enc = (text: string) => new TextEncoder().encode(text);
const manifest = (id: string, version: string, over: Record<string, unknown> = {}) =>
  enc(JSON.stringify({ id, name: id, author: 'tester', version, type: 'Mod', description: 'Test mod', ...over }));
const zip = (files: Record<string, Uint8Array>) => Buffer.from(zipSync(files, { level: 9 }));

function headers(userId: number) {
  return { ...t.as({ userId, emailVerified: true }), ...t.sameOrigin() };
}

async function api(method: 'GET' | 'POST' | 'PATCH' | 'PUT', url: string, userId: number | null, body?: unknown) {
  const res = await t.app.inject({
    method,
    url,
    headers: userId === null ? {} : headers(userId),
    ...(method === 'GET' ? {} : { payload: JSON.stringify(body ?? {}) }),
  });
  return { status: res.statusCode, body: res.body ? (res.json() as any) : null };
}

/** Presigned PUT → complete → the jobs the worker would run (inspection, media, build extract). */
async function upload(userId: number, purpose: string, filename: string, bytes: Buffer, contentType: string) {
  const created = await api('POST', '/api/v2/uploads', userId, { purpose, filename, size: bytes.length, contentType });
  expect(created.status, JSON.stringify(created.body)).toBe(201);
  const put = await fetch(created.body.url, { method: 'PUT', body: bytes, headers: created.body.headers });
  expect(put.status).toBe(200);
  const done = await api('POST', `/api/v2/uploads/${created.body.upload.id}/complete`, userId);
  expect([200, 202]).toContain(done.status);
  const id = created.body.upload.id as string;
  if (purpose === 'mod_file' || purpose === 'build_file') {
    await runInspection(ctx, storage, { uploadId: id, modVersionId: null });
    if (purpose === 'build_file') {
      const extracted = await extractBuild(ctx, storage, { uploadId: id, modVersionId: null });
      if (extracted.status === 'extracted' && extracted.mediaId) await processMedia(ctx, storage, extracted.mediaId);
    }
  } else {
    const state = (await api('GET', `/api/v2/uploads/${id}`, userId)).body;
    if (state.mediaId) await processMedia(ctx, storage, state.mediaId);
  }
  return (await api('GET', `/api/v2/uploads/${id}`, userId)).body;
}

async function draft(userId: number, kind: 'mod' | 'build', data: Record<string, unknown>) {
  const res = await api('POST', '/api/v2/drafts', userId, { kind, data });
  expect(res.status, JSON.stringify(res.body)).toBe(201);
  return res.body;
}

const listing = (slug: string, fileUploadId: string) => ({
  fileUploadId,
  slug,
  name: `Test ${slug}`,
  shortDescription: 'A mod used by the publishing acceptance test.',
  descriptionMd: `## ${slug}\n\nDoes things.`,
  categorySlug: 'gameplay',
  tagSlugs: [],
  license: 'mit',
  platform: 'Client',
});

async function isLatestCount(modId: number): Promise<number> {
  const res = await t.db.pool.query(`SELECT count(*)::int AS n FROM "ModVersion" WHERE "modId" = $1 AND "isLatest"`, [
    modId,
  ]);
  return res.rows[0].n;
}

beforeAll(async () => {
  s3 = await startTestS3();
  t = await buildTestApp({
    errorReporter: {
      enabled: true,
      captureRequestError: (error) => serverErrors.push(error),
      captureFatal: () => {},
      flush: async () => {},
    },
    env: s3.env,
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
    'publishing-test',
  );
  newbie = await f.user({ emailVerifiedAt: new Date('2025-01-01T00:00:00Z'), trustLevel: 1 });
  verified = await f.user({ emailVerifiedAt: new Date('2025-01-01T00:00:00Z'), trustLevel: 2, verifiedCreator: true });
  buildCategory = (await f.category({ type: 'Build', slug: 'bases' })).slug;
}, 240_000);

afterAll(async () => {
  expect(serverErrors).toEqual([]);
  storage?.destroy();
  await t?.close();
  await s3?.stop();
});

describe('new mods', () => {
  it('a first-time creator’s valid zip ends pending in the queue', async () => {
    const file = await upload(
      newbie.id,
      'mod_file',
      'CookAlert-1.0.0.zip',
      zip({ 'CookAlert/manifest.json': manifest('CookAlert', '1.0.0'), 'CookAlert/CookAlert.dll': enc('MZ') }),
      'application/zip',
    );
    expect(file.status).toBe('ready');
    expect(file.inspection.status).toBe('passed');
    const d = await draft(newbie.id, 'mod', listing('cook-alert', file.id));
    const submitted = await api('POST', `/api/v2/drafts/${d.id}/submit`, newbie.id);
    expect(submitted.status, JSON.stringify(submitted.body)).toBe(201);
    expect(submitted.body.status).toBe('pending');
    const version = await t.db.pool.query(`SELECT "status", "version", "isLatest" FROM "ModVersion" WHERE "id" = $1`, [
      submitted.body.versionId,
    ]);
    expect(version.rows[0]).toEqual({ status: 'pending', version: '1.0.0', isLatest: true });
    expect(await isLatestCount(submitted.body.modId)).toBe(1);
  });

  it('a verified creator publishes directly, and the legacy API serves the mod with its legacy shape', async () => {
    const file = await upload(
      verified.id,
      'mod_file',
      'SkyLantern.zip',
      zip({
        'SkyLantern/manifest.json': manifest('SkyLantern', '2.1.0', { dependencies: ['SonsAxLib', 'RedLoaderUi'] }),
        'SkyLantern/SkyLantern.dll': enc('MZ'),
      }),
      'application/zip',
    );
    // Several tags and dependencies (arrays bound as one parameter each).
    const d = await draft(verified.id, 'mod', { ...listing('sky-lantern', file.id), tagSlugs: ['cooking', 'fishing'] });
    const submitted = await api('POST', `/api/v2/drafts/${d.id}/submit`, verified.id);
    expect(submitted.status, JSON.stringify(submitted.body)).toBe(201);
    expect(submitted.body.status).toBe('published');
    const deps = await t.db.pool.query(
      `SELECT "depManifestId", "kind" FROM "ModDependency" WHERE "modVersionId" = $1 ORDER BY "depManifestId"`,
      [submitted.body.versionId],
    );
    expect(deps.rows).toEqual([
      { depManifestId: 'RedLoaderUi', kind: 'required' },
      { depManifestId: 'SonsAxLib', kind: 'required' },
    ]);
    const tags = await t.db.pool.query(
      `SELECT t."slug" FROM "_ModToTag" mt JOIN "Tag" t ON t."id" = mt."B" WHERE mt."A" = $1 ORDER BY t."slug"`,
      [submitted.body.modId],
    );
    expect(tags.rows.map((r: any) => r.slug)).toEqual(['cooking', 'fishing']);
    t.app.platform.caches.invalidate('*');
    const legacy = await t.app.inject({ method: 'GET', url: '/api/mods/SkyLantern' });
    expect(legacy.statusCode).toBe(200);
    const body = legacy.json() as any;
    expect(body.status).toBe(true);
    const mod = body.data ?? body.mod ?? body;
    expect(JSON.stringify(mod)).toContain('SkyLantern');
    expect(JSON.stringify(mod)).toContain('2.1.0');
  });
});

describe('refused and flagged files', () => {
  it('refuses a zip bomb, a zip slip and a broken manifest before any submission', async () => {
    const bomb = await upload(
      newbie.id,
      'mod_file',
      'Bomb.zip',
      zip({ 'manifest.json': manifest('Bomb', '1.0.0'), 'zeros.bin': new Uint8Array(4 * 1024 * 1024) }),
      'application/zip',
    );
    expect(bomb.status).toBe('rejected');
    expect(bomb.inspection.flags.map((x: any) => x.code)).toContain('zip_bomb_ratio');
    const slip = await upload(
      newbie.id,
      'mod_file',
      'Slip.zip',
      zip({ 'manifest.json': manifest('Slip', '1.0.0'), '../x.dll': enc('MZ') }),
      'application/zip',
    );
    expect(slip.status).toBe('rejected');
    expect(slip.inspection.flags.map((x: any) => x.code)).toContain('zip_slip');
    const broken = await upload(
      newbie.id,
      'mod_file',
      'Broken.zip',
      zip({ 'manifest.json': enc('{"id": ') }),
      'application/zip',
    );
    expect(broken.status).toBe('rejected');
    expect(broken.inspection.flags.map((x: any) => x.code)).toContain('manifest_invalid');
    const d = await draft(newbie.id, 'mod', listing('bomb', bomb.id));
    const submitted = await api('POST', `/api/v2/drafts/${d.id}/submit`, newbie.id);
    expect(submitted.status).toBe(422);
  });

  it('an .exe inside is flagged: quarantined, and mod and version stay pending even for a verified creator', async () => {
    const file = await upload(
      verified.id,
      'mod_file',
      'Toolbox.zip',
      zip({ 'Toolbox/manifest.json': manifest('Toolbox', '1.0.0'), 'Toolbox/setup.exe': enc('MZ') }),
      'application/zip',
    );
    expect(file.inspection.status).toBe('flagged');
    const d = await draft(verified.id, 'mod', listing('toolbox', file.id));
    const submitted = await api('POST', `/api/v2/drafts/${d.id}/submit`, verified.id);
    expect(submitted.status, JSON.stringify(submitted.body)).toBe(201);
    expect(submitted.body.status).toBe('pending');
    const row = await t.db.pool.query(`SELECT "status", "resultRef" FROM "Upload" WHERE "id" = $1`, [file.id]);
    expect(JSON.stringify(row.rows[0].resultRef)).toContain('quarantine');
    const version = await t.db.pool.query(`SELECT "status", "checksStatus" FROM "ModVersion" WHERE "id" = $1`, [
      submitted.body.versionId,
    ]);
    expect(version.rows[0]).toMatchObject({ status: 'pending' });
  });
});

describe('new versions', () => {
  it('refuses a lower semver and keeps exactly one latest version', async () => {
    const first = await upload(
      verified.id,
      'mod_file',
      'Ember-1.2.0.zip',
      zip({ 'Ember/manifest.json': manifest('Ember', '1.2.0') }),
      'application/zip',
    );
    const d = await draft(verified.id, 'mod', listing('ember', first.id));
    const submitted = await api('POST', `/api/v2/drafts/${d.id}/submit`, verified.id);
    expect(submitted.status).toBe(201);
    const modId = submitted.body.modId as number;

    const lower = await upload(
      verified.id,
      'mod_file',
      'Ember-1.1.0.zip',
      zip({ 'Ember/manifest.json': manifest('Ember', '1.1.0') }),
      'application/zip',
    );
    const refused = await api('POST', `/api/v2/studio/mods/${modId}/versions`, verified.id, {
      uploadId: lower.id,
      changelogMd: '- older',
    });
    expect(refused.status).toBe(422);
    expect(JSON.stringify(refused.body)).toContain('version_not_greater');

    const next = await upload(
      verified.id,
      'mod_file',
      'Ember-1.3.0.zip',
      zip({ 'Ember/manifest.json': manifest('Ember', '1.3.0') }),
      'application/zip',
    );
    const created = await api('POST', `/api/v2/studio/mods/${modId}/versions`, verified.id, {
      uploadId: next.id,
      changelogMd: '- **new** things',
    });
    expect(created.status, JSON.stringify(created.body)).toBe(201);
    expect(created.body).toMatchObject({ version: '1.3.0', isLatest: true });
    expect(await isLatestCount(modId)).toBe(1);
    const html = await t.db.pool.query(`SELECT "changelogHtml" FROM "ModVersion" WHERE "id" = $1`, [created.body.id]);
    expect(html.rows[0].changelogHtml).toContain('<strong>new</strong>');
  });
});

describe('builds and images', () => {
  it('a BuildShare JSON extracts its thumbnail and buildMeta', async () => {
    const thumb = await sharp({ create: { width: 64, height: 64, channels: 3, background: '#3a5' } })
      .png()
      .toBuffer();
    const blueprint = Buffer.from(
      JSON.stringify({
        Name: 'Cliff House',
        Guid: 'e215ede2e4d742398c72aaca62496c10',
        Author: 'Natka',
        Description: 'A house on the cliff',
        NumberOfElements: 4125,
        Data: JSON.stringify({ Version: '0.0.16', Structures: [1, 2, 3] }),
        Thumbnail: thumb.toString('base64'),
      }),
    );
    const file = await upload(newbie.id, 'build_file', 'CliffHouse.json', blueprint, 'application/json');
    expect(file.status).toBe('ready');
    expect(file.inspection.buildMeta).toMatchObject({
      elements: 4125,
      structures: 3,
      buildshareVersion: '0.0.16',
      sizeClass: 'L',
    });
    const row = await t.db.pool.query(`SELECT "resultRef" FROM "Upload" WHERE "id" = $1`, [file.id]);
    const thumbnailMedia = row.rows[0].resultRef?.buildThumbnail?.mediaId;
    expect(typeof thumbnailMedia).toBe('string');
    const d = await draft(newbie.id, 'build', {
      fileUploadId: file.id,
      slug: 'cliff-house',
      name: 'Cliff House',
      shortDescription: 'A house on the cliff.',
      categorySlug: buildCategory,
    });
    const submitted = await api('POST', `/api/v2/drafts/${d.id}/submit`, newbie.id);
    expect(submitted.status, JSON.stringify(submitted.body)).toBe(201);
    const version = await t.db.pool.query(`SELECT "buildMeta" FROM "ModVersion" WHERE "id" = $1`, [
      submitted.body.versionId,
    ]);
    expect(version.rows[0].buildMeta).toMatchObject({ elements: 4125, guid: 'e215ede2e4d742398c72aaca62496c10' });
  });

  it('images become WebP (original.webp and WebP-only variants) at widths ≤ the original and no EXIF', async () => {
    const jpeg = await sharp({ create: { width: 1000, height: 500, channels: 3, background: '#a33' } })
      .jpeg()
      .withMetadata({ exif: { IFD0: { Copyright: 'secret-owner' } } })
      .toBuffer();
    const image = await upload(newbie.id, 'image', 'shot.jpg', jpeg, 'image/jpeg');
    expect(typeof image.mediaId).toBe('string');
    const media = await t.db.pool.query(
      `SELECT "status", "variants", "width", "sourceKey", "contentType" FROM "Media" WHERE "id" = $1`,
      [image.mediaId],
    );
    expect(media.rows[0].status).toBe('ready');
    expect(media.rows[0].sourceKey).toBe(`media/${image.mediaId}/original.webp`);
    expect(media.rows[0].contentType).toBe('image/webp');
    const variants = media.rows[0].variants as Array<{ w: number; format: string; key: string }>;
    expect([...new Set(variants.map((v) => v.w))].sort((a, b) => a - b)).toEqual([320, 640, 960]);
    expect(new Set(variants.map((v) => v.format))).toEqual(new Set(['webp']));
    expect(variants.every((v) => v.key.endsWith('.webp'))).toBe(true);
    for (const v of variants) {
      const { body } = await storage.get(s3.config.publicBucket, v.key);
      const chunks: Buffer[] = [];
      for await (const chunk of body) chunks.push(chunk as Buffer);
      const bytes = Buffer.concat(chunks);
      expect((await sharp(bytes).metadata()).exif).toBeUndefined();
      expect(bytes.includes(Buffer.from('secret-owner'))).toBe(false);
    }
  });
});
