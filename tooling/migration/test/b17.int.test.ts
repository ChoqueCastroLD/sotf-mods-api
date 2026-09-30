/**
 * B17 (R2 metadata of the legacy objects) against a SeaweedFS S3 emulator (WP-84 testing phase):
 * the dry run changes nothing, `--apply` writes the exact `Content-Disposition`/`Content-Type`
 * in place with the ETag intact, and a second run finds everything already correct.
 */
import { GetObjectCommand, HeadObjectCommand, PutObjectCommand, type S3Client } from '@aws-sdk/client-s3';
import { attachmentDisposition } from '@sotf/core/storage/disposition';
import { startTestS3, type TestS3 } from '@sotf/core/storage/testing';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { type B17Options, runB17 } from '../backfills-r2/b17.ts';
import { s3ClientFor } from '../backfills-r2/s3.ts';
import { legacy, type Scratch, scratch } from './_helpers.ts';

let db: Scratch;
let s3: TestS3;
let client: S3Client;

beforeAll(async () => {
  [db, s3] = await Promise.all([scratch({ migrate: true }), startTestS3()]);
  client = s3ClientFor({
    endpoint: s3.config.endpoint as string,
    bucket: s3.config.publicBucket,
    accessKeyId: s3.config.accessKeyId as string,
    secretAccessKey: s3.config.secretAccessKey as string,
    local: true,
  });
});

afterAll(async () => {
  client?.destroy();
  await Promise.all([db?.close(), s3?.stop()]);
});

const options = (apply: boolean): B17Options => ({
  bucket: s3.config.publicBucket,
  apply,
  cacheControl: null,
  allowEtagChange: false,
  only: null,
  limit: null,
  concurrency: 4,
  outDir: db.outDir,
  log: () => undefined,
});

async function head(key: string) {
  return client.send(new HeadObjectCommand({ Bucket: s3.config.publicBucket, Key: key }));
}

describe('B17 · R2 metadata', () => {
  it('rewrites the download name and content types in place, idempotently', async () => {
    const bucket = s3.config.publicBucket;
    const zipKey = "1766549349465_Regi's Modding Library.zip";
    const jsonKey = '1766549349466_Cabin.json';
    const imageKey = '1742657717567_cabin (1).png';
    // 1×1 PNG (only the magic number matters for the sniffing).
    const png = Buffer.from(
      'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
      'base64',
    );
    await client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: zipKey,
        Body: Buffer.from('PK\x03\x04 zip bytes'),
        ContentType: 'application/x-zip-compressed',
      }),
    );
    await client.send(
      new PutObjectCommand({ Bucket: bucket, Key: jsonKey, Body: '{"Data":"{}"}', ContentType: 'text/plain' }),
    );
    // Production has `application/octet-stream` PNGs; SeaweedFS sniffs that value on upload, so the
    // emulator gets another wrong type to exercise the same rewrite.
    await client.send(new PutObjectCommand({ Bucket: bucket, Key: imageKey, Body: png, ContentType: 'image/jpeg' }));

    const c = db.client;
    await legacy.user(c, 1);
    await legacy.mod(c, 1, 1);
    await legacy.mod(c, 2, 1, { type: 'Build' });
    await c.query(`UPDATE "Mod" SET "name" = 'Regi''s Modding Library' WHERE "id" = 1`);
    await c.query(`UPDATE "Mod" SET "name" = 'Cabin / Dock' WHERE "id" = 2`);
    await legacy.version(c, 1, 1);
    await legacy.version(c, 2, 2);
    await c.query(`UPDATE "ModVersion" SET "storageKey" = $1, "version" = '1.2.0' WHERE "id" = 1`, [zipKey]);
    await c.query(`UPDATE "ModVersion" SET "storageKey" = $1, "extension" = 'json' WHERE "id" = 2`, [jsonKey]);
    await c.query(
      `INSERT INTO "Media" ("id", "purpose", "sourceBucket", "sourceKey", "status")
       VALUES ('0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d', 'legacy', $1, $2, 'pending')`,
      [bucket, imageKey],
    );
    const etags = Object.fromEntries(
      await Promise.all([zipKey, jsonKey, imageKey].map(async (key) => [key, (await head(key)).ETag] as const)),
    );

    const dry = await runB17(client, c, options(false));
    expect(dry).toMatchObject({ targets: 3, update: 3, ok: 0, missing: 0, updated: 0 });
    expect((await head(zipKey)).ContentType).toBe('application/x-zip-compressed');

    const applied = await runB17(client, c, options(true));
    expect(applied).toMatchObject({ update: 3, updated: 3, failed: 0, etagChanged: 0, headersNotApplied: 0 });

    const zip = await head(zipKey);
    expect(zip.ContentType).toBe('application/zip');
    expect(zip.ContentDisposition).toBe(attachmentDisposition("Regi's Modding Library 1.2.0.zip"));
    expect(zip.ContentDisposition).toContain(`filename="Regi's Modding Library 1.2.0.zip"`);
    expect(zip.ETag).toBe(etags[zipKey]);
    const json = await head(jsonKey);
    expect(json.ContentType).toBe('application/json');
    expect(json.ContentDisposition).toBe(attachmentDisposition('Cabin - Dock.json'));
    const image = await head(imageKey);
    expect(image.ContentType).toBe('image/png');
    expect(image.ContentDisposition ?? null).toBeNull();
    expect(image.ETag).toBe(etags[imageKey]);
    // The bytes are the same object.
    const body = await client.send(new GetObjectCommand({ Bucket: bucket, Key: zipKey }));
    expect(await body.Body?.transformToString()).toBe('PK\x03\x04 zip bytes');

    const again = await runB17(client, c, options(true));
    expect(again).toMatchObject({ targets: 3, update: 0, ok: 3, updated: 0, failed: 0, etagChanged: 0 });
  });
});
