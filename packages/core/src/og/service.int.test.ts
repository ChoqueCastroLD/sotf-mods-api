/**
 * `og.render` of a category hub (backlog WP-61): the PNG is stored content-addressed in the public
 * bucket, its key lands in `"Category"."ogImageKey"` (migration 2003), the category list exposes it,
 * and a second run with an unchanged card neither renders nor writes again.
 */
import { PassThrough } from 'node:stream';
import { startTestDb, type TestDb } from '@sotf/db/testing';
import { sql } from 'drizzle-orm';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import type { CatalogConfig } from '../catalog/media.ts';
import { listCategories } from '../catalog/taxonomy.ts';
import { type Ctx, createCtx } from '../kernel/context.ts';
import { Jobs } from '../kernel/jobs.ts';
import { silentLogger } from '../kernel/logger.ts';
import type { ObjectHead, ObjectStorage } from '../storage/client.ts';
import { renderEntityOg } from './service.ts';

const config: CatalogConfig = { mediaBaseUrl: 'https://r2.example.test', publicBucket: 'public' };

function memoryStorage() {
  const objects = new Map<string, { body: Buffer; head: ObjectHead }>();
  const storage = {
    config: { publicBucket: 'public', privateBucket: 'private', publicBaseUrl: config.mediaBaseUrl },
    publicUrl: (key: string) => `${config.mediaBaseUrl}/${key}`,
    async head(bucket: string, key: string) {
      return objects.get(`${bucket}/${key}`)?.head ?? null;
    },
    async get(bucket: string, key: string) {
      const found = objects.get(`${bucket}/${key}`);
      if (!found) throw new Error('missing');
      const body = new PassThrough();
      body.end(found.body);
      return { body, head: found.head };
    },
    async put(input: { bucket: string; key: string; body: unknown; contentType?: string; cacheControl?: string }) {
      const body = Buffer.from(input.body as Buffer);
      objects.set(`${input.bucket}/${input.key}`, {
        body,
        head: {
          size: body.byteLength,
          contentType: input.contentType ?? null,
          etag: null,
          contentDisposition: null,
          cacheControl: input.cacheControl ?? null,
          metadata: {},
        },
      });
    },
  };
  return { storage: storage as unknown as ObjectStorage, objects };
}

let db: TestDb;
let ctx: Ctx;
const sent: Array<{ queue: string; data: unknown }> = [];

beforeAll(async () => {
  db = await startTestDb();
  const boss = {
    send: async (queue: string, data: object) => {
      sent.push({ queue, data });
      return `job-${sent.length}`;
    },
    sendDebounced: async (queue: string, data: object) => {
      sent.push({ queue, data });
      return `job-${sent.length}`;
    },
  };
  ctx = createCtx(
    { db: db.db, jobs: new Jobs(boss as never), log: silentLogger(), appSecret: 'x'.repeat(32) },
    { requestId: 'og-test' },
  );
}, 240_000);

afterAll(async () => {
  await db?.stop();
});

describe('category share cards', () => {
  it('stores the key on the category, exposes it and skips unchanged cards', async () => {
    const found = await db.db.execute<{ slug: string }>(
      sql`SELECT "slug" FROM "Category" WHERE "retiredAt" IS NULL ORDER BY "sortOrder", "id" LIMIT 1`,
    );
    const slug = found.rows[0]?.slug as string;
    expect(slug).toBeTruthy();
    const { storage, objects } = memoryStorage();

    const first = await renderEntityOg(
      ctx,
      { storage, config },
      { entityType: 'category', entityId: slug.toUpperCase() },
    );
    expect(first.status).toBe('rendered');
    expect(first.key).toMatch(new RegExp(`^og/category/${slug}-[0-9a-f]+\\.png$`));
    expect(objects.size).toBe(1);
    const stored = await db.db.execute<{ key: string | null }>(
      sql`SELECT "ogImageKey" AS "key" FROM "Category" WHERE "slug" = ${slug}`,
    );
    expect(stored.rows[0]?.key).toBe(first.key);
    expect(sent.some((j) => j.queue === 'cdn.purge' && JSON.stringify(j.data).includes(`category:${slug}`))).toBe(true);

    const categories = await listCategories(ctx, config, 'all');
    expect(categories.find((c) => c.slug === slug)?.ogImage).toEqual({
      url: `${config.mediaBaseUrl}/${first.key}`,
      width: 1200,
      height: 630,
    });

    const second = await renderEntityOg(ctx, { storage, config }, { entityType: 'category', entityId: slug });
    expect(second).toMatchObject({ status: 'unchanged', key: first.key });
    expect(objects.size).toBe(1);

    const unknown = await renderEntityOg(ctx, { storage, config }, { entityType: 'category', entityId: 'no-such-hub' });
    expect(unknown.status).toBe('skipped');
  }, 120_000);
});
