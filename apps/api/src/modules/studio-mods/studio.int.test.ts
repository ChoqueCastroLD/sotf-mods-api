// biome-ignore-all lint/suspicious/noExplicitAny: assertions walk JSON bodies
/**
 * Owner-side reads added for Basecamp (backlogs WP-74, WP-80): the owner view carries the media ids
 * of the gallery and the changelog source of every version, the inbox filters by mod, the
 * analytics add the stacked per-version series and image uploads expose a preview URL. Runs on the
 * small seed.
 */
import { randomUUID } from 'node:crypto';
import type { TestDb } from '@sotf/db/testing';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildTestApp, type TestApp } from '../../testing.ts';
import { exec, startSeededDb } from '../catalog/__tests__/seeded.ts';
import { callAs, createTestUser, type Method, type TestUser } from '../catalog/__tests__/users.ts';

let db: TestDb;
let t: TestApp;
let owner: TestUser;
let fan: TestUser;

const AXEL_MOD_MENU = 20;
const SONS_AX_LIB = 19;

const call = (method: Method, url: string, who: TestUser | null, body?: unknown) =>
  callAs(t, method, url, who, body) as Promise<{ status: number; body: any }>;

beforeAll(async () => {
  db = await startSeededDb();
  owner = await createTestUser(db, 'studio-owner');
  fan = await createTestUser(db, 'studio-fan');
  await exec(db, `UPDATE "Mod" SET "userId" = $1 WHERE "id" = ANY($2::int[])`, [
    owner.userId,
    [AXEL_MOD_MENU, SONS_AX_LIB],
  ]);
  t = await buildTestApp({
    db,
    rateLimits: {
      userWrite: { max: 100_000, window: '1 minute' },
      anonymousRead: { max: 100_000, window: '1 minute' },
    },
  });
}, 300_000);

afterAll(async () => {
  await t?.close();
  await db?.stop();
});

describe('owner view', () => {
  it('lists the gallery media ids in the order of mod.gallery and the changelog sources', async () => {
    const res = await call('GET', `/api/v2/studio/mods/${AXEL_MOD_MENU}`, owner);
    expect(res.status).toBe(200);
    const { mod, media, versions } = res.body;
    expect(media.gallery.map((g: any) => g.url)).toEqual(mod.gallery.map((g: any) => g.url));
    for (const g of media.gallery) expect(g.mediaId === null || typeof g.mediaId === 'string').toBe(true);
    expect(media.thumbnailMediaId === null || typeof media.thumbnailMediaId === 'string').toBe(true);
    expect(versions.length).toBeGreaterThan(0);
    for (const v of versions) expect(v).toHaveProperty('changelogMd');
    const withText = await exec(
      db,
      `SELECT "id", coalesce("changelogMd", "changelog") AS text FROM "ModVersion"
        WHERE "modId" = $1 AND coalesce("changelogMd", "changelog", '') <> '' LIMIT 1`,
      [AXEL_MOD_MENU],
    );
    if (withText.rows[0]) {
      const version = versions.find((v: any) => v.id === Number(withText.rows[0].id));
      expect(version.changelogMd).toBeTruthy();
    }
    expect((await call('GET', `/api/v2/studio/mods/${AXEL_MOD_MENU}`, fan)).status).toBe(403);
  });
});

describe('inbox', () => {
  it('filters the creator inbox by mod', async () => {
    for (const modId of [AXEL_MOD_MENU, SONS_AX_LIB]) {
      await exec(
        db,
        `INSERT INTO "Comment" ("message", "modId", "userId", "bodyMd", "status", "ip", "createdAt", "updatedAt")
         VALUES ($1, $2, $3, $1, 'visible', '0.0.0.0', now(), now())`,
        [`Question about mod ${modId}`, modId, fan.userId],
      );
    }
    const all = await call('GET', '/api/v2/studio/inbox?type=comment&limit=100', owner);
    expect(all.status).toBe(200);
    const mods = new Set(all.body.items.map((i: any) => i.mod.id));
    expect(mods.has(AXEL_MOD_MENU) && mods.has(SONS_AX_LIB)).toBe(true);
    const one = await call('GET', `/api/v2/studio/inbox?type=comment&limit=100&modId=${SONS_AX_LIB}`, owner);
    expect(one.status).toBe(200);
    expect(one.body.items.length).toBeGreaterThan(0);
    for (const item of one.body.items) expect(item.mod.id).toBe(SONS_AX_LIB);
  });
});

describe('analytics', () => {
  it('splits the downloads per version and bucket consistently with byVersion', async () => {
    const versions = await exec(db, `SELECT "id" FROM "ModVersion" WHERE "modId" = $1 ORDER BY "id" DESC LIMIT 2`, [
      AXEL_MOD_MENU,
    ]);
    const today = new Date().toISOString().slice(0, 10);
    const yesterday = new Date(Date.now() - 86_400_000).toISOString().slice(0, 10);
    for (const [i, row] of versions.rows.entries()) {
      for (const day of [today, yesterday]) {
        await exec(
          db,
          `INSERT INTO "ModVersionDownloadDaily" ("modVersionId", "day", "channel", "downloads", "uniqueDownloads")
           VALUES ($1, $2::date, 'web', $3, $3)
           ON CONFLICT ("modVersionId", "day", "channel") DO UPDATE SET "downloads" = "ModVersionDownloadDaily"."downloads" + EXCLUDED."downloads"`,
          [row.id, day, 5 + i],
        );
      }
    }
    const res = await call('GET', `/api/v2/studio/analytics?modId=${AXEL_MOD_MENU}&range=7d`, owner);
    expect(res.status).toBe(200);
    const a = res.body;
    const total = a.seriesByVersion.reduce((sum: number, r: any) => sum + r.downloads, 0);
    expect(total).toBe(a.totals.downloads);
    for (const v of a.byVersion) {
      const sum = a.seriesByVersion
        .filter((r: any) => r.version === v.version)
        .reduce((s: number, r: any) => s + r.downloads, 0);
      expect(sum).toBe(v.downloads);
    }
    const days = new Set(a.series.map((s: any) => s.day));
    for (const r of a.seriesByVersion) {
      expect(days.has(r.day)).toBe(true);
      expect(r.downloads).toBeGreaterThan(0);
    }
  });
});

describe('uploads', () => {
  it('exposes the preview of a processed image upload to its owner', async () => {
    const mediaId = randomUUID();
    const uploadId = randomUUID();
    await exec(
      db,
      `INSERT INTO "Media" ("id", "ownerId", "purpose", "sourceBucket", "sourceKey", "bytes", "contentType", "status", "variants")
       VALUES ($1, $2, 'mod_image', 'sotf-mods', $3, 1000, 'image/png', 'ready', $4::jsonb)`,
      [
        mediaId,
        owner.userId,
        `media/${mediaId}/original.png`,
        JSON.stringify([
          { w: 320, format: 'webp', key: `media/${mediaId}/320.webp` },
          { w: 1280, format: 'webp', key: `media/${mediaId}/1280.webp` },
          { w: 320, format: 'avif', key: `media/${mediaId}/320.avif` },
        ]),
      ],
    );
    await exec(
      db,
      `INSERT INTO "Upload" ("id", "userId", "purpose", "status", "bucket", "key", "filename", "contentType",
                             "declaredBytes", "maxBytes", "expiresAt", "resultRef")
       VALUES ($1, $2, 'image', 'ready', 'sotf-mods-private', $3, 'shot.png', 'image/png', 1000, 1000,
               now() + interval '1 day', $4::jsonb)`,
      [uploadId, owner.userId, `incoming/${owner.userId}/${uploadId}`, JSON.stringify({ mediaId })],
    );
    const res = await call('GET', `/api/v2/uploads/${uploadId}`, owner);
    expect(res.status).toBe(200);
    expect(res.body.mediaId).toBe(mediaId);
    expect(res.body.previewUrl).toBe(`${t.env.R2_PUBLIC_BASE_URL}/media/${mediaId}/320.webp`);
    expect((await call('GET', `/api/v2/uploads/${uploadId}`, fan)).status).toBe(404);
  });
});
