/**
 * B22 (every stored image to WebP q75) against PostgreSQL 16 and the S3 emulator: the report writes
 * nothing, the apply converts + verifies + rewrites every reference (Markdown, HTML, JSON, `Media`,
 * a table with a composite key) with an audit trail, AVIF variants leave `Media.variants`, OG cards and
 * non-image objects are untouched, a second run changes nothing, and the deletion only removes originals
 * whose WebP decodes and that nothing references any more.
 */
import { randomBytes } from 'node:crypto';
import { Jobs, ManualClock, silentLogger, systemCtx } from '@sotf/core';
import { createStorage, type ObjectStorage } from '@sotf/core/storage/index';
import { startTestS3, type TestS3 } from '@sotf/core/storage/testing';
import { createFactories, type Factories, startTestDb, type TestDb } from '@sotf/db/testing';
import { sql } from 'drizzle-orm';
import sharp from 'sharp';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { B22_FIX_ID, type B22Mode, type B22Report, runB22 } from './b22.ts';
import { LEDGER_PREFIX } from './b22-ledger.ts';
import { planMediaRow } from './b22-media.ts';

let db: TestDb;
let s3: TestS3;
let storage: ObjectStorage;
let f: Factories;
let bucket: string;
let base: string;
const sent: string[] = [];

beforeAll(async () => {
  [db, s3] = await Promise.all([startTestDb(), startTestS3()]);
  storage = createStorage(s3.config);
  f = createFactories(db.db);
  bucket = s3.config.publicBucket;
  base = s3.config.publicBaseUrl;
});

afterAll(async () => {
  storage?.destroy();
  await Promise.all([db?.stop(), s3?.stop()]);
});

function ctx() {
  const clock = new ManualClock('2026-10-10T12:00:00.000Z');
  const boss = {
    send: async (name: string) => {
      sent.push(name);
      return `job-${sent.length}`;
    },
    sendDebounced: async (name: string) => {
      sent.push(name);
      return null;
    },
  };
  return systemCtx(
    { db: db.db, jobs: new Jobs(boss as never, { clock }), clock, log: silentLogger(), appSecret: 'x'.repeat(40) },
    'b22-test',
  );
}

const run = (mode: B22Mode, dryRun: boolean, includeUnreferenced = false): Promise<B22Report> =>
  runB22(ctx(), storage, {
    mode,
    dryRun,
    includeUnreferenced,
    batchSize: 100,
    signal: new AbortController().signal,
    sample: 5,
  });

async function put(key: string, body: Buffer, contentType: string, cacheControl?: string): Promise<void> {
  await storage.put({
    bucket,
    key,
    body,
    contentLength: body.length,
    contentType,
    ...(cacheControl ? { cacheControl } : {}),
  });
}

async function read(key: string): Promise<Buffer> {
  const { body } = await storage.get(bucket, key);
  const chunks: Buffer[] = [];
  for await (const chunk of body as AsyncIterable<Buffer>) chunks.push(chunk);
  return Buffer.concat(chunks);
}

async function exists(key: string): Promise<boolean> {
  return (await storage.head(bucket, key)) !== null;
}

function noisePng(width = 240, height = 160): Promise<Buffer> {
  return sharp(randomBytes(width * height * 3), { raw: { width, height, channels: 3 } })
    .png()
    .toBuffer();
}

function noiseJpeg(width = 240, height = 160): Promise<Buffer> {
  return sharp(randomBytes(width * height * 3), { raw: { width, height, channels: 3 } })
    .jpeg({ quality: 95 })
    .withMetadata({ exif: { IFD0: { Copyright: 'secret-owner' } } })
    .toBuffer();
}

async function animatedGif(): Promise<Buffer> {
  const frames = await Promise.all(
    ['#f00', '#0f0', '#00f'].map((c) =>
      sharp({ create: { width: 64, height: 32, channels: 3, background: c } })
        .png()
        .toBuffer(),
    ),
  );
  return sharp(frames, { join: { animated: true } })
    .gif({ delay: [100, 100, 100], loop: 0 })
    .toBuffer();
}

async function one<T>(statement: ReturnType<typeof sql>): Promise<T> {
  const { rows } = await db.db.execute<Record<string, unknown>>(statement);
  return rows[0] as T;
}

async function count(statement: ReturnType<typeof sql>): Promise<number> {
  return Number((await one<{ n: number }>(statement)).n);
}

const SPACED = "1700000000001_Axel's Shot (1).png";
const COVER = '1700000000002_cover.jpg';
const MEDIA_ID = '0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d';
const MEDIA_ORIGINAL = `media/${MEDIA_ID}/original.png`;
const LEGACY_MEDIA_ID = '0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c2e';
const PENDING_MEDIA_ID = '0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c3f';

const sizes: Record<string, number> = {};
let modId = 0;
let userId = 0;
let commentId = 0;

describe('B22 · WebP conversion of every stored image', () => {
  it('seeds a bucket and a database full of references', async () => {
    const owner = await f.user();
    userId = owner.id;
    const spacedPng = await noisePng();
    const coverJpeg = await noiseJpeg();
    const mediaPng = await noisePng(200, 120);
    sizes[SPACED] = spacedPng.length;
    sizes[COVER] = coverJpeg.length;
    sizes[MEDIA_ORIGINAL] = mediaPng.length;

    await put(SPACED, spacedPng, 'image/png');
    await put(COVER, coverJpeg, 'image/jpeg');
    await put('1700000000003_anim.gif', await animatedGif(), 'image/gif');
    await put('1700000000004_unreferenced.png', await noisePng(), 'image/png');
    await put('1700000000005_broken.png', Buffer.from('this is not a picture'), 'image/png');
    await put('1700000000006_noextension', await noisePng(120, 80), 'image/png');
    await put('1700000000007_dup.png', await noisePng(100, 60), 'image/png');
    await put('1700000000007_dup.jpg', await noiseJpeg(100, 60), 'image/jpeg');
    await put(
      '1700000000008_already.webp',
      await sharp(await noisePng(80, 80))
        .webp()
        .toBuffer(),
      'image/webp',
    );
    await put(MEDIA_ORIGINAL, mediaPng, 'image/png');
    for (const w of [320, 640]) {
      await put(
        `media/${MEDIA_ID}/${w}.webp`,
        await sharp(mediaPng)
          .resize({ width: Math.min(w, 200) })
          .webp()
          .toBuffer(),
        'image/webp',
      );
      await put(
        `media/${MEDIA_ID}/${w}.avif`,
        await sharp(mediaPng)
          .resize({ width: Math.min(w, 200) })
          .avif()
          .toBuffer(),
        'image/avif',
      );
    }
    await put('og/mod/1-abc123.png', await noisePng(), 'image/png');
    await put('mods/1/1/x-1.0.zip', Buffer.from('PK pretend zip, never an image'), 'application/zip');
    await put('1700000000009_data.json', Buffer.from('{"not":"an image"}'), 'application/json');

    const created = await f.mod({
      userId,
      imageUrl: `${base}/${SPACED}`,
      description: `Look: ![shot](${base}/${encodeURIComponent(SPACED)}) and <${base}/${SPACED}>\n![d](${base}/1700000000007_dup.png) ![d](${base}/1700000000007_dup.jpg) ![n](${base}/1700000000006_noextension)`,
    });
    modId = created.id;
    await db.db.execute(sql`
      UPDATE "Mod" SET "descriptionMd" = ${`![shot](<${base}/${SPACED}>)\n\n![cover](${base}/${COVER})`},
             "descriptionHtml" = ${`<p><img src="${base}/${encodeURIComponent(SPACED)}" width="240" height="160"> <img src="${base}/${SPACED.replace(/'/g, '&#39;')}"></p>`}
       WHERE "id" = ${modId}`);
    await db.db.execute(sql`
      INSERT INTO "ModImage" ("url", "isPrimary", "isThumbnail", "modId", "storageKey", "position")
      VALUES (${`${base}/${COVER}`}, false, false, ${modId}, ${COVER}, 0),
             (${`${base}/${MEDIA_ORIGINAL}`}, false, false, ${modId}, ${MEDIA_ORIGINAL}, 1)`);
    const comment = await f.comment({
      modId,
      userId,
      imageUrl: `${base}/1700000000003_anim.gif`,
      bodyMd: `![a](${base}/1700000000003_anim.gif)`,
      bodyHtml: `<img src="${base}/1700000000003_anim.gif">`,
    });
    commentId = comment.id;
    await db.db.execute(sql`UPDATE "User" SET "imageUrl" = ${`${base}/${COVER}`} WHERE "id" = ${userId}`);
    // Media: a processed one (original + WebP and AVIF variants) and a legacy one (original untouched, variants added).
    await db.db.execute(sql`
      INSERT INTO "Media" ("id", "ownerId", "purpose", "sourceBucket", "sourceKey", "width", "height", "bytes", "contentType", "variants", "status")
      VALUES (${MEDIA_ID}::uuid, ${userId}, 'mod_image', ${bucket}, ${MEDIA_ORIGINAL}, 200, 120, ${mediaPng.length}, 'image/png',
              ${JSON.stringify([
                { w: 320, format: 'avif', key: `media/${MEDIA_ID}/320.avif`, bytes: 10 },
                { w: 320, format: 'webp', key: `media/${MEDIA_ID}/320.webp`, bytes: 10 },
                { w: 640, format: 'avif', key: `media/${MEDIA_ID}/640.avif`, bytes: 10 },
                { w: 640, format: 'webp', key: `media/${MEDIA_ID}/640.webp`, bytes: 10 },
              ])}::jsonb, 'ready'),
             (${LEGACY_MEDIA_ID}::uuid, ${userId}, 'legacy', ${bucket}, ${COVER}, 240, 160, ${coverJpeg.length}, 'image/jpeg', '[]'::jsonb, 'ready')`);
    // A legacy row B15 has not processed yet: no content type, size or dimensions.
    await db.db.execute(sql`
      INSERT INTO "Media" ("id", "purpose", "sourceBucket", "sourceKey", "variants", "status")
      VALUES (${PENDING_MEDIA_ID}::uuid, 'legacy', ${bucket}, '1700000000007_dup.jpg', '[]'::jsonb, 'pending')`);
    await db.db.execute(sql`UPDATE "Mod" SET "thumbnailMediaId" = ${MEDIA_ID}::uuid WHERE "id" = ${modId}`);
    // A table whose key is composite (no "id"), a JSON column and a text column holding JSON.
    await db.db.execute(sql`
      INSERT INTO "ModTranslation" ("modId", "locale", "description", "source")
      VALUES (${modId}, 'es', ${`![captura](${base}/${encodeURIComponent(SPACED)})`}, 'machine')`);
    await db.db.execute(sql`
      INSERT INTO "Notification" ("userId", "type", "data", "groupKey") VALUES (${userId}, 'mod_update', ${JSON.stringify({ image: `${base}/${COVER}`, nested: [{ key: COVER }] })}::jsonb, 'g1')`);
    expect(await count(sql`SELECT count(*) AS n FROM "Media"`)).toBe(3);
  });

  it('the report lists everything and writes nothing', async () => {
    const before = {
      objects: (await storage.list(bucket, '', { maxKeys: 10_000 })).length,
      audit: await count(sql`SELECT count(*) AS n FROM "DataFixAudit"`),
    };
    const report = await run('report', true);
    expect(report.mode).toBe('report');
    expect(report.inventory?.images.byExtension).toMatchObject({
      png: { count: 5 },
      jpg: { count: 2 },
      gif: { count: 1 },
    });
    expect(report.inventory?.images.viaContentType).toBe(1); // 1700000000006_noextension
    expect(report.inventory?.excluded['og/']?.count).toBe(1);
    expect(report.inventory?.excluded['mods/']?.count).toBe(1);
    expect(report.inventory?.alreadyWebp.count).toBe(3); // already.webp and the two WebP variants
    expect(report.references?.unreferencedImages.sampleKeys).toContain('1700000000004_unreferenced.png');
    expect(report.references?.avifVariantsRemovable.count).toBe(2);
    expect(report.references?.referencedImages.count).toBeGreaterThanOrEqual(4);
    expect(report.references?.byColumn).toMatchObject({ 'Mod.imageUrl': 1, 'ModImage.storageKey': 2 });
    expect(report.estimate?.sampled).toBeGreaterThan(0);
    expect(report.estimate?.ratio).toBeLessThan(1);
    expect((await storage.list(bucket, '', { maxKeys: 10_000 })).length).toBe(before.objects);
    expect(await count(sql`SELECT count(*) AS n FROM "DataFixAudit"`)).toBe(before.audit);
    expect(await count(sql`SELECT count(*) AS n FROM "MigrationRun" WHERE "name" = 'backfill:B22'`)).toBe(0);
  });

  it('apply converts, verifies and rewrites every reference with an audit trail', async () => {
    const applied = await run('convert', false);
    expect(applied.convert?.converted).toBe(7);
    expect(applied.convert?.skipped).toEqual([]);
    expect(applied.convert?.failed).toEqual([]);

    // The new objects.
    const spacedWebp = "1700000000001_Axel's Shot (1).webp";
    const head = await storage.head(bucket, spacedWebp);
    expect(head).toMatchObject({ contentType: 'image/webp', cacheControl: 'public, max-age=31536000, immutable' });
    const meta = await sharp(await read(spacedWebp)).metadata();
    expect([meta.format, meta.width, meta.height]).toEqual(['webp', 240, 160]);
    expect((await sharp(await read('1700000000002_cover.webp')).metadata()).exif).toBeUndefined();
    expect((await read('1700000000002_cover.webp')).includes(Buffer.from('secret-owner'))).toBe(false);
    const gif = await sharp(await read('1700000000003_anim.webp'), { animated: true }).metadata();
    expect([gif.format, gif.pages]).toEqual(['webp', 3]);
    expect(await exists('1700000000006_noextension.webp')).toBe(true);
    // Two sources, one name (keys are taken in order): the second keeps its old extension.
    expect(await exists('1700000000007_dup.png.webp')).toBe(true);
    expect(await exists('1700000000007_dup.webp')).toBe(true);
    expect(sizes[SPACED]).toBeGreaterThan((await storage.head(bucket, spacedWebp))?.size ?? Number.POSITIVE_INFINITY);

    // Originals stay until phase 3; OG cards, zips, JSON, the unreferenced image and the broken one are untouched.
    for (const key of [
      SPACED,
      COVER,
      MEDIA_ORIGINAL,
      'og/mod/1-abc123.png',
      'mods/1/1/x-1.0.zip',
      '1700000000009_data.json',
      '1700000000005_broken.png',
    ]) {
      expect(await exists(key), key).toBe(true);
    }
    expect(await exists('1700000000004_unreferenced.webp')).toBe(false);
    expect(await exists('og/mod/1-abc123.webp')).toBe(false);

    // The database.
    const m = await one<Record<string, string>>(
      sql`SELECT "imageUrl", "description", "descriptionMd", "descriptionHtml" FROM "Mod" WHERE "id" = ${modId}`,
    );
    expect(m.imageUrl).toBe(`${base}/${spacedWebp}`);
    expect(m.description).toBe(
      `Look: ![shot](${base}/${encodeURIComponent(spacedWebp)}) and <${base}/${spacedWebp}>\n![d](${base}/1700000000007_dup.png.webp) ![d](${base}/1700000000007_dup.webp) ![n](${base}/1700000000006_noextension.webp)`,
    );
    expect(m.descriptionMd).toBe(`![shot](<${base}/${spacedWebp}>)\n\n![cover](${base}/1700000000002_cover.webp)`);
    expect(m.descriptionHtml).toBe(
      `<p><img src="${base}/${encodeURIComponent(spacedWebp)}" width="240" height="160"> <img src="${base}/${spacedWebp.replace(/'/g, '&#39;')}"></p>`,
    );
    const images = await db.db.execute<{ url: string; storageKey: string }>(
      sql`SELECT "url", "storageKey" FROM "ModImage" WHERE "modId" = ${modId} ORDER BY "position"`,
    );
    expect(images.rows).toEqual([
      { url: `${base}/1700000000002_cover.webp`, storageKey: '1700000000002_cover.webp' },
      { url: `${base}/media/${MEDIA_ID}/original.webp`, storageKey: `media/${MEDIA_ID}/original.webp` },
    ]);
    expect((await one<{ imageUrl: string }>(sql`SELECT "imageUrl" FROM "User" WHERE "id" = ${userId}`)).imageUrl).toBe(
      `${base}/1700000000002_cover.webp`,
    );
    const c = await one<{ imageUrl: string; bodyMd: string; bodyHtml: string }>(
      sql`SELECT "imageUrl", "bodyMd", "bodyHtml" FROM "Comment" WHERE "id" = ${commentId}`,
    );
    expect(`${c.imageUrl}${c.bodyMd}${c.bodyHtml}`).not.toContain('.gif');
    expect(
      (await one<{ description: string }>(sql`SELECT "description" FROM "ModTranslation" WHERE "modId" = ${modId}`))
        .description,
    ).toBe(`![captura](${base}/${encodeURIComponent(spacedWebp)})`);

    // Media: processed original and variants; the legacy original; AVIF variants gone from the list.
    const processed = await one<{
      sourceKey: string;
      contentType: string;
      bytes: string;
      variants: Array<{ format: string; key: string }>;
    }>(
      sql`SELECT "sourceKey", "contentType", "bytes"::text AS "bytes", "variants" FROM "Media" WHERE "id" = ${MEDIA_ID}::uuid`,
    );
    expect(processed.sourceKey).toBe(`media/${MEDIA_ID}/original.webp`);
    expect(processed.contentType).toBe('image/webp');
    expect(Number(processed.bytes)).toBe((await storage.head(bucket, `media/${MEDIA_ID}/original.webp`))?.size);
    expect(processed.variants.map((v) => v.key)).toEqual([`media/${MEDIA_ID}/320.webp`, `media/${MEDIA_ID}/640.webp`]);
    const legacy = await one<{ sourceKey: string; contentType: string }>(
      sql`SELECT "sourceKey", "contentType" FROM "Media" WHERE "id" = ${LEGACY_MEDIA_ID}::uuid`,
    );
    expect(legacy).toEqual({ sourceKey: '1700000000002_cover.webp', contentType: 'image/webp' });
    // NULL cells are guarded with IS NOT DISTINCT FROM: a pending row without content type or size is rewritten too.
    const pending = await one<{ sourceKey: string; contentType: string; bytes: string | null }>(
      sql`SELECT "sourceKey", "contentType", "bytes"::text AS "bytes" FROM "Media" WHERE "id" = ${PENDING_MEDIA_ID}::uuid`,
    );
    expect(pending).toEqual({ sourceKey: '1700000000007_dup.webp', contentType: 'image/webp', bytes: null });

    // Audit: every changed cell, old and new value; recorded run; ledger in the bucket.
    const audit = await db.db.execute<{ tableName: string; rowId: string; columnName: string }>(
      sql`SELECT "tableName", "rowId", "columnName" FROM "DataFixAudit" WHERE "fixId" = ${B22_FIX_ID}`,
    );
    const columns = new Set(audit.rows.map((r) => `${r.tableName}.${r.columnName}`));
    for (const expected of [
      'Mod.imageUrl',
      'Mod.descriptionMd',
      'Mod.descriptionHtml',
      'ModImage.url',
      'ModImage.storageKey',
      'User.imageUrl',
      'Comment.bodyHtml',
      'Media.sourceKey',
      'Media.variants',
      'Media.contentType',
      'ModTranslation.description',
    ]) {
      expect(columns, expected).toContain(expected);
    }
    expect(audit.rows.find((r) => r.tableName === 'ModTranslation')?.rowId).toBe(
      JSON.stringify({ modId: String(modId), locale: 'es' }),
    );
    const old = await one<{ oldValue: string; newValue: string }>(
      sql`SELECT "oldValue" #>> '{}' AS "oldValue", "newValue" #>> '{}' AS "newValue" FROM "DataFixAudit" WHERE "fixId" = ${B22_FIX_ID} AND "tableName" = 'Mod' AND "columnName" = 'imageUrl'`,
    );
    expect(old).toEqual({ oldValue: `${base}/${SPACED}`, newValue: `${base}/${spacedWebp}` });
    expect(
      await count(
        sql`SELECT count(*) AS n FROM "MigrationRun" WHERE "name" = 'backfill:B22' AND "finishedAt" IS NOT NULL`,
      ),
    ).toBe(1);
    const ledgerFiles = await storage.list(bucket, LEDGER_PREFIX);
    expect(ledgerFiles.length).toBeGreaterThanOrEqual(2); // conversions + avif
    expect(applied.rewrite?.avifVariantsRemoved).toBe(2);
    expect(applied.rewrite?.conflicts).toBe(0);
    expect(applied.rewrite?.cacheTags).toBeGreaterThan(0);
    expect(sent).toContain('cdn.purge');
  });

  it('a second apply changes nothing', async () => {
    const auditBefore = await count(sql`SELECT count(*) AS n FROM "DataFixAudit"`);
    const listBefore = new Set((await storage.list(bucket, '', { maxKeys: 10_000 })).map((o) => o.key));
    const objectsBefore = listBefore.size;
    const again = await run('convert', false);
    expect(again.convert?.converted).toBe(0);
    expect(again.rewrite).toMatchObject({ rowsUpdated: 0, cellsUpdated: 0, mediaRowsUpdated: 0 });
    expect(await count(sql`SELECT count(*) AS n FROM "DataFixAudit"`)).toBe(auditBefore);
    // The ledger files of the second run are not written when there is nothing to record.
    const added = (await storage.list(bucket, '', { maxKeys: 10_000 }))
      .map((o) => o.key)
      .filter((k) => !listBefore.has(k));
    expect(added).toHaveLength(1); // its own report
    expect(added[0]).toMatch(/^ops\/b22\/report-convert-/);
    expect(objectsBefore).toBeGreaterThan(20);
  });

  it('--include-unreferenced converts the images no row references', async () => {
    const out = await run('convert', false, true);
    expect(out.convert?.converted).toBe(1);
    expect(out.convert?.skipped.map((s) => s.key)).toEqual(['1700000000005_broken.png']);
    expect(await exists('1700000000004_unreferenced.webp')).toBe(true);
    expect(await exists('1700000000004_unreferenced.png')).toBe(true);
  });

  it('delete lists first, then removes only verified, unreferenced originals', async () => {
    // A late reference to an old key keeps that original.
    await db.db.execute(
      sql`UPDATE "Mod" SET "shortDescription" = ${`late ![x](${base}/1700000000002_cover.jpg)`} WHERE "id" = ${modId}`,
    );

    const listing = await run('delete', true);
    expect(listing.delete?.deleted).toBeGreaterThanOrEqual(5);
    expect(listing.delete?.keptByReason['still referenced in the database']).toBe(1);
    expect(listing.delete?.avifDeleted).toBe(2);
    expect(await exists(SPACED)).toBe(true);
    expect(await exists(`media/${MEDIA_ID}/320.avif`)).toBe(true);

    const deleted = await run('delete', false);
    expect(deleted.delete?.deleted).toBe(listing.delete?.deleted);
    expect(deleted.delete?.bytesFreed).toBeGreaterThan(0);
    expect(await exists(SPACED)).toBe(false);
    expect(await exists(MEDIA_ORIGINAL)).toBe(false);
    expect(await exists('1700000000003_anim.gif')).toBe(false);
    expect(await exists('1700000000004_unreferenced.png')).toBe(false); // converted with --include-unreferenced
    expect(await exists(`media/${MEDIA_ID}/320.avif`)).toBe(false);
    expect(await exists(`media/${MEDIA_ID}/640.avif`)).toBe(false);
    // Kept: still referenced, never converted, protected.
    expect(await exists('1700000000002_cover.jpg')).toBe(true);
    for (const key of [
      'og/mod/1-abc123.png',
      'mods/1/1/x-1.0.zip',
      '1700000000009_data.json',
      '1700000000005_broken.png',
      `media/${MEDIA_ID}/original.webp`,
      '1700000000002_cover.webp',
    ]) {
      expect(await exists(key), key).toBe(true);
    }
    // Nothing left to delete.
    const third = await run('delete', false);
    expect(third.delete?.deleted).toBe(0);
  });
});

describe('planMediaRow', () => {
  it('keeps the AVIF variant when its WebP twin is not in the bucket', () => {
    const row = {
      id: 'm1',
      sourceBucket: 'b',
      sourceKey: 'media/m1/original.webp',
      status: 'ready',
      purpose: 'mod_image',
      contentType: 'image/webp',
      bytes: '10',
      width: 10,
      height: 10,
      variantsText: '[]',
      variants: [
        { w: 320, format: 'avif' as const, key: 'media/m1/320.avif', bytes: 1 },
        { w: 320, format: 'webp' as const, key: 'media/m1/320.webp', bytes: 1 },
      ],
    };
    const keep = planMediaRow(row, {
      publicBucket: 'b',
      converted: new Map(),
      exists: (key) => key !== 'media/m1/320.webp',
      sizeOf: () => 1,
      now: 'now',
    });
    expect(keep.changes).toEqual([]);
    const drop = planMediaRow(row, {
      publicBucket: 'b',
      converted: new Map(),
      exists: () => true,
      sizeOf: () => 5,
      now: 'now',
    });
    expect(drop.avif).toEqual([
      { key: 'media/m1/320.avif', bytes: 5, mediaId: 'm1', twin: 'media/m1/320.webp', at: 'now' },
    ]);
    expect(drop.changes.map((c) => c.column)).toEqual(['variants']);
  });
});
