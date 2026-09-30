/**
 * B15 (R2 pass) against PostgreSQL 16 and a SeaweedFS S3 emulator (WP-84 testing phase): the dry
 * run writes nothing, the real run inspects the legacy zips (SHA-256, manifest), processes the
 * legacy images into variants, reports missing objects, never rewrites the legacy objects (same
 * ETag), and a second run is a no-op.
 */
import { createHash } from 'node:crypto';
import { Jobs, ManualClock, silentLogger, systemCtx } from '@sotf/core';
import { createStorage, type ObjectStorage } from '@sotf/core/storage/index';
import { startTestS3, type TestS3 } from '@sotf/core/storage/testing';
import { createFactories, type Factories, startTestDb, type TestDb } from '@sotf/db/testing';
import { sql } from 'drizzle-orm';
import { strToU8, zipSync } from 'fflate';
import sharp from 'sharp';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { runB15 } from './b15.ts';

let db: TestDb;
let s3: TestS3;
let storage: ObjectStorage;
let f: Factories;
const enqueued: string[] = [];

beforeAll(async () => {
  [db, s3] = await Promise.all([startTestDb(), startTestS3()]);
  storage = createStorage(s3.config);
  f = createFactories(db.db);
});

afterAll(async () => {
  storage?.destroy();
  await Promise.all([db?.stop(), s3?.stop()]);
});

function ctx() {
  const clock = new ManualClock('2026-10-10T12:00:00.000Z');
  const boss = {
    send: async (name: string) => {
      enqueued.push(name);
      return `job-${enqueued.length}`;
    },
    sendDebounced: async () => null,
  };
  const jobs = new Jobs(boss as never, { clock });
  return systemCtx({ db: db.db, jobs, clock, log: silentLogger(), appSecret: 'x'.repeat(40) }, 'b15-test');
}

const options = (dryRun: boolean) => ({ dryRun, batchSize: 50, signal: new AbortController().signal });

async function count(query: ReturnType<typeof sql>): Promise<number> {
  const { rows } = await db.db.execute<{ n: number }>(query);
  return Number(rows[0]?.n ?? 0);
}

describe('B15 · R2 pass', () => {
  it('inspects legacy files and images, idempotently, without touching the originals', async () => {
    const bucket = s3.config.publicBucket;
    const manifest = { id: 'AxelMenu', name: "Axel's Menu", version: '1.2.0', type: 'Mod', logColor: 'ff7335' };
    const zip = Buffer.from(
      zipSync({ 'manifest.json': strToU8(JSON.stringify(manifest)), 'AxelMenu.dll': new Uint8Array(2048).fill(7) }),
    );
    const zipKey = "1766549349465_Axel's Menu (v2).zip";
    await storage.put({
      bucket,
      key: zipKey,
      body: zip,
      contentLength: zip.length,
      contentType: 'application/x-zip-compressed',
    });
    const png = await sharp({ create: { width: 800, height: 450, channels: 3, background: '#2d4a3e' } })
      .png()
      .toBuffer();
    const imageKey = '1742657717567_axel thumbnail.png';
    await storage.put({
      bucket,
      key: imageKey,
      body: png,
      contentLength: png.length,
      contentType: 'application/octet-stream',
    });
    const zipEtag = (await storage.head(bucket, zipKey))?.etag;
    const imageEtag = (await storage.head(bucket, imageKey))?.etag;

    const { mod, version } = await f.modWithVersion(
      { manifestId: 'AxelMenu' },
      { version: '1.2.0', storageKey: zipKey },
    );
    const lost = await f.modVersion({
      modId: mod.id,
      version: '1.1.0',
      isLatest: false,
      storageKey: '1700000000000_gone.zip',
    });
    const mediaId = '0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d';
    await db.db.execute(sql`INSERT INTO "Media" ("id", "ownerId", "purpose", "sourceBucket", "sourceKey", "status")
                            VALUES (${mediaId}::uuid, ${mod.userId}, 'legacy', ${bucket}, ${imageKey}, 'pending')`);

    // Dry run: HEAD requests and counts only.
    const dry = await runB15(ctx(), storage, options(true));
    expect(dry.dryRun).toBe(true);
    expect(await count(sql`SELECT count(*) AS n FROM "VersionInspection"`)).toBe(0);
    expect(await count(sql`SELECT count(*) AS n FROM "Media" WHERE "status" <> 'pending'`)).toBe(0);
    expect(await count(sql`SELECT count(*) AS n FROM "MigrationRun" WHERE "name" = 'backfill:B15'`)).toBe(0);

    const applied = await runB15(ctx(), storage, options(false));
    expect(applied.versions.inspected).toBe(1);
    expect(applied.versions.missingObjects).toHaveLength(1);
    expect(applied.versions.missingObjects[0]).toContain('gone.zip');
    expect(applied.media.ready).toBe(1);

    const sha = createHash('sha256').update(zip).digest('hex');
    const { rows: inspected } = await db.db.execute<Record<string, unknown>>(sql`
      SELECT vi."status", vi."sha256", v."sha256" AS "versionSha", v."fileSize", v."manifest" ->> 'id' AS "manifestId"
        FROM "VersionInspection" vi JOIN "ModVersion" v ON v."id" = vi."modVersionId" WHERE vi."modVersionId" = ${version.id}`);
    expect(inspected[0]).toMatchObject({ sha256: sha, versionSha: sha, manifestId: 'AxelMenu' });
    expect(Number(inspected[0]?.fileSize)).toBe(zip.length);
    expect(await count(sql`SELECT count(*) AS n FROM "VersionInspection" WHERE "modVersionId" = ${lost.id}`)).toBe(0);
    expect(await count(sql`SELECT count(*) AS n FROM "Mod" WHERE "id" = ${mod.id} AND "logColor" = '#FF7335'`)).toBe(1);

    const { rows: media } = await db.db.execute<{ status: string; variants: Array<{ key: string }>; width: number }>(
      sql`SELECT "status", "variants", "width" FROM "Media" WHERE "id" = ${mediaId}::uuid`,
    );
    expect(media[0]?.status).toBe('ready');
    expect(media[0]?.width).toBe(800);
    expect(media[0]?.variants.length).toBeGreaterThan(0);
    for (const variant of media[0]?.variants ?? []) {
      expect(await storage.head(bucket, variant.key), variant.key).not.toBeNull();
    }
    expect(enqueued).toContain('og.render');

    // The legacy originals are only read.
    expect((await storage.head(bucket, zipKey))?.etag).toBe(zipEtag);
    expect((await storage.head(bucket, imageKey))?.etag).toBe(imageEtag);
    expect(await count(sql`SELECT count(*) AS n FROM "MigrationRun" WHERE "name" = 'backfill:B15'`)).toBe(1);

    // Second run: nothing left to do.
    const again = await runB15(ctx(), storage, options(false));
    expect(again.versions.inspected).toBe(0);
    expect(again.media.ready).toBe(0);
  });
});
