/**
 * B2 · Storage keys and legacy media (PLAN §6.9, §2.8).
 *
 * - `"ModVersion"."storageKey"` from `downloadUrl`; a URL outside R2 (the lost `files.` object of
 *   mod 168, research/02 §3.2) marks the version `status = 'file_missing'` instead. Its row and its
 *   counted downloads are kept.
 * - `"ModImage"."storageKey"` + `"mediaId"`, `"Mod"."thumbnailMediaId"` and `"User"."avatarMediaId"`
 *   point at `"Media"` rows with `purpose = 'legacy'` and `status = 'pending'` (the R2 pass B15
 *   of WP-84 measures them and builds the variants). One `"Media"` row per distinct key.
 *
 * Legacy URL columns are only read.
 */
import type pg from 'pg';
import { uuidv7 } from 'uuidv7';
import { PUBLIC_BUCKET } from '../constants.ts';
import { storageKeyFromUrl } from '../storage-key.ts';
import type { Backfill, BackfillContext } from './framework.ts';

/** Returns the `"Media"` id of every key, creating the missing rows. */
export async function ensureLegacyMedia(
  client: pg.ClientBase,
  items: ReadonlyArray<{ key: string; ownerId: number | null }>,
): Promise<Map<string, string>> {
  const byKey = new Map<string, number | null>();
  for (const item of items) if (!byKey.has(item.key)) byKey.set(item.key, item.ownerId);
  if (byKey.size === 0) return new Map();
  const keys = [...byKey.keys()];
  await client.query(
    `INSERT INTO "Media" ("id", "ownerId", "purpose", "sourceBucket", "sourceKey", "status")
     SELECT t.id, t.owner, 'legacy', $1, t.key, 'pending'
       FROM unnest($2::uuid[], $3::int[], $4::text[]) AS t(id, owner, key)
     ON CONFLICT ("sourceBucket", "sourceKey") DO NOTHING`,
    [PUBLIC_BUCKET, keys.map(() => uuidv7()), keys.map((k) => byKey.get(k) ?? null), keys],
  );
  const { rows } = await client.query<{ id: string; sourceKey: string }>(
    `SELECT "id", "sourceKey" FROM "Media" WHERE "sourceBucket" = $1 AND "sourceKey" = ANY($2::text[])`,
    [PUBLIC_BUCKET, keys],
  );
  return new Map(rows.map((r) => [r.sourceKey, r.id]));
}

async function versions(ctx: BackfillContext): Promise<number> {
  const { client } = ctx;
  let cursor = 0;
  let changed = 0;
  let missing = 0;
  for (;;) {
    const { rows } = await client.query<{ id: number; downloadUrl: string }>(
      `SELECT "id", "downloadUrl" FROM "ModVersion"
        WHERE "id" > $1 AND "storageKey" IS NULL AND "status" <> 'file_missing'
        ORDER BY "id" LIMIT $2`,
      [cursor, ctx.batchSize],
    );
    if (rows.length === 0) break;
    cursor = rows[rows.length - 1]?.id as number;
    const keyed = rows.map((r) => ({ id: r.id, key: storageKeyFromUrl(r.downloadUrl), url: r.downloadUrl }));
    await ctx.batch(async () => {
      const withKey = keyed.filter((r) => r.key !== null);
      if (withKey.length > 0) {
        await client.query(
          `UPDATE "ModVersion" v SET "storageKey" = t.key
             FROM unnest($1::int[], $2::text[]) AS t(id, key) WHERE v."id" = t.id AND v."storageKey" IS NULL`,
          [withKey.map((r) => r.id), withKey.map((r) => r.key)],
        );
      }
      const lost = keyed.filter((r) => r.key === null);
      if (lost.length > 0) {
        await client.query(
          `UPDATE "ModVersion" SET "status" = 'file_missing',
                  "statusReason" = 'legacy file is not in R2 (' || split_part(split_part("downloadUrl", '://', 2), '/', 1) || ')'
            WHERE "id" = ANY($1::int[]) AND "storageKey" IS NULL`,
          [lost.map((r) => r.id)],
        );
      }
    });
    changed += keyed.length;
    missing += keyed.filter((r) => r.key === null).length;
  }
  ctx.notes.versionsFileMissing = missing;
  return changed;
}

async function images(ctx: BackfillContext): Promise<number> {
  const { client } = ctx;
  let cursor = 0;
  let changed = 0;
  for (;;) {
    const { rows } = await client.query<{ id: number; url: string; ownerId: number | null }>(
      `SELECT i."id", i."url", m."userId" AS "ownerId" FROM "ModImage" i LEFT JOIN "Mod" m ON m."id" = i."modId"
        WHERE i."id" > $1 AND i."mediaId" IS NULL ORDER BY i."id" LIMIT $2`,
      [cursor, ctx.batchSize],
    );
    if (rows.length === 0) break;
    cursor = rows[rows.length - 1]?.id as number;
    const keyed = rows
      .map((r) => ({ id: r.id, key: storageKeyFromUrl(r.url), ownerId: r.ownerId }))
      .filter((r): r is { id: number; key: string; ownerId: number | null } => r.key !== null);
    if (keyed.length === 0) continue;
    await ctx.batch(async () => {
      const media = await ensureLegacyMedia(client, keyed);
      await client.query(
        `UPDATE "ModImage" i SET "storageKey" = t.key, "mediaId" = t.media
           FROM unnest($1::int[], $2::text[], $3::uuid[]) AS t(id, key, media) WHERE i."id" = t.id`,
        [keyed.map((r) => r.id), keyed.map((r) => r.key), keyed.map((r) => media.get(r.key) as string)],
      );
    });
    changed += keyed.length;
  }
  return changed;
}

async function thumbnails(ctx: BackfillContext): Promise<number> {
  const { client } = ctx;
  let cursor = 0;
  let changed = 0;
  for (;;) {
    const { rows } = await client.query<{ id: number; imageUrl: string | null; userId: number | null }>(
      `SELECT "id", "imageUrl", "userId" FROM "Mod"
        WHERE "id" > $1 AND "thumbnailMediaId" IS NULL AND coalesce("imageUrl", '') <> '' ORDER BY "id" LIMIT $2`,
      [cursor, ctx.batchSize],
    );
    if (rows.length === 0) break;
    cursor = rows[rows.length - 1]?.id as number;
    const keyed = rows
      .map((r) => ({ id: r.id, key: storageKeyFromUrl(r.imageUrl), ownerId: r.userId }))
      .filter((r): r is { id: number; key: string; ownerId: number | null } => r.key !== null);
    if (keyed.length === 0) continue;
    await ctx.batch(async () => {
      const media = await ensureLegacyMedia(client, keyed);
      await client.query(
        `UPDATE "Mod" m SET "thumbnailMediaId" = t.media
           FROM unnest($1::int[], $2::uuid[]) AS t(id, media) WHERE m."id" = t.id`,
        [keyed.map((r) => r.id), keyed.map((r) => media.get(r.key) as string)],
      );
    });
    changed += keyed.length;
  }
  return changed;
}

async function avatars(ctx: BackfillContext): Promise<number> {
  const { client } = ctx;
  let cursor = 0;
  let changed = 0;
  for (;;) {
    const { rows } = await client.query<{ id: number; imageUrl: string }>(
      `SELECT "id", "imageUrl" FROM "User"
        WHERE "id" > $1 AND "avatarMediaId" IS NULL AND "imageUrl" <> '' ORDER BY "id" LIMIT $2`,
      [cursor, ctx.batchSize],
    );
    if (rows.length === 0) break;
    cursor = rows[rows.length - 1]?.id as number;
    const keyed = rows
      .map((r) => ({ id: r.id, key: storageKeyFromUrl(r.imageUrl), ownerId: r.id }))
      .filter((r): r is { id: number; key: string; ownerId: number } => r.key !== null);
    if (keyed.length === 0) continue;
    await ctx.batch(async () => {
      const media = await ensureLegacyMedia(client, keyed);
      await client.query(
        `UPDATE "User" u SET "avatarMediaId" = t.media
           FROM unnest($1::int[], $2::uuid[]) AS t(id, media) WHERE u."id" = t.id`,
        [keyed.map((r) => r.id), keyed.map((r) => media.get(r.key) as string)],
      );
    });
    changed += keyed.length;
  }
  return changed;
}

export const b02: Backfill = {
  id: 'B2',
  title: 'storage keys and legacy media',
  touchesLegacy: false,
  delta: false,
  checksumSql: `SELECT md5(coalesce(string_agg("id"::text || ':' || coalesce("storageKey", '~' || "status"), ',' ORDER BY "id"), '')) AS checksum FROM "ModVersion"`,
  async run(ctx) {
    const v = await versions(ctx);
    const i = await images(ctx);
    const t = await thumbnails(ctx);
    const a = await avatars(ctx);
    Object.assign(ctx.notes, { versions: v, images: i, thumbnails: t, avatars: a });
    return v + i + t + a;
  },
};
