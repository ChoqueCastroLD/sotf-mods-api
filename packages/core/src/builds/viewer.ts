/**
 * Build viewer service (T1-06): generates `BuildGeometry` from the stored blueprint of a version
 * (`build.geometry`, also called by `build.extract`) and serves the preview and the packed
 * geometry. A build without geometry yet gets the job enqueued by the first read (existing builds
 * are filled lazily, no separate backfill).
 */
import { FILE_CHECKS } from '@sotf/contracts/manifest';
import type { BuildGeometryDTO, BuildPreviewDTO } from '@sotf/contracts/build-viewer';
import { GEOMETRY_STRIDE } from '@sotf/contracts/build-viewer';
import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { queryOne, toDate, toInt } from '../follows/sql.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import type { ObjectStorage } from '../storage/client.ts';
import { storageKeyFromPublicUrl } from '../storage/keys.ts';
import { geometryOfBlueprintText, PREVIEW_COLUMNS, PREVIEW_ROWS, packPieces, renderTopDownSvg } from './geometry.ts';

const PUBLIC_MOD_STATUSES = ['published', 'unlisted', 'archived'];

export type GeometryOutcome =
  | { status: 'ready'; pieces: number; totalPieces: number }
  | { status: 'empty' }
  | { status: 'skipped'; reason: string };

interface VersionFile {
  id: number;
  storageKey: string | null;
  downloadUrl: string;
}

/** Reads the (≤ 20 MB) blueprint of a published version and stores its geometry. Idempotent. */
export async function generateBuildGeometry(
  ctx: Ctx,
  storage: ObjectStorage,
  input: { modVersionId: number; publicOrigins?: readonly string[]; text?: string },
): Promise<GeometryOutcome> {
  let text = input.text;
  if (text === undefined) {
    const version = await queryOne<VersionFile>(
      ctx.db,
      sql`SELECT "id", "storageKey", "downloadUrl" FROM "ModVersion" WHERE "id" = ${input.modVersionId}`,
    );
    if (!version) return { status: 'skipped', reason: 'not_found' };
    const origins = [storage.config.publicBaseUrl, ...(input.publicOrigins ?? [])];
    const key = version.storageKey ?? storageKeyFromPublicUrl(version.downloadUrl, origins);
    if (!key) return { status: 'skipped', reason: 'no_file' };
    const head = await storage.head(storage.config.publicBucket, key);
    if (!head || head.size > FILE_CHECKS.maxBuildBytes) return { status: 'skipped', reason: 'object_missing' };
    const { body } = await storage.get(storage.config.publicBucket, key);
    const chunks: Buffer[] = [];
    for await (const chunk of body as AsyncIterable<Buffer>) chunks.push(chunk);
    text = new TextDecoder('utf-8', { fatal: false }).decode(Buffer.concat(chunks));
  }
  const geometry = geometryOfBlueprintText(text);
  if (!geometry) {
    await ctx.db.execute(sql`
      INSERT INTO "BuildGeometry" ("modVersionId", "status", "pieces", "totalPieces", "profiles", "bounds", "geometry", "previewSvg")
      VALUES (${input.modVersionId}, 'empty', 0, 0, '[]'::jsonb, NULL, NULL, NULL)
      ON CONFLICT ("modVersionId") DO UPDATE SET "status" = 'empty', "pieces" = 0, "totalPieces" = 0,
        "profiles" = '[]'::jsonb, "bounds" = NULL, "geometry" = NULL, "previewSvg" = NULL`);
    return { status: 'empty' };
  }
  const svg = renderTopDownSvg(geometry.pieces, geometry.size);
  const packed = packPieces(geometry.pieces);
  await ctx.db.execute(sql`
    INSERT INTO "BuildGeometry" ("modVersionId", "status", "pieces", "totalPieces", "profiles", "bounds", "geometry", "previewSvg")
    VALUES (${input.modVersionId}, 'ready', ${geometry.pieces.length}, ${geometry.totalPieces},
            ${JSON.stringify(geometry.profiles)}::jsonb, ${JSON.stringify(geometry.size)}::jsonb, ${packed}, ${svg})
    ON CONFLICT ("modVersionId") DO UPDATE SET "status" = 'ready', "pieces" = EXCLUDED."pieces",
      "totalPieces" = EXCLUDED."totalPieces", "profiles" = EXCLUDED."profiles", "bounds" = EXCLUDED."bounds",
      "geometry" = EXCLUDED."geometry", "previewSvg" = EXCLUDED."previewSvg"`);
  ctx.log.info({ modVersionId: input.modVersionId, pieces: geometry.pieces.length }, 'build geometry stored');
  return { status: 'ready', pieces: geometry.pieces.length, totalPieces: geometry.totalPieces };
}

interface LatestRow {
  modId: number;
  versionId: number | null;
  status: string | null;
  pieces: number | string | null;
  totalPieces: number | string | null;
  profiles: string[] | null;
  bounds: { width: number; depth: number; height: number } | null;
  previewSvg: string | null;
}

async function latestGeometry(db: Executor, modId: number): Promise<LatestRow> {
  const row = await queryOne<LatestRow>(
    db,
    sql`SELECT m."id" AS "modId", v."id" AS "versionId", g."status", g."pieces", g."totalPieces", g."profiles",
               g."bounds", g."previewSvg"
          FROM "Mod" m
          LEFT JOIN LATERAL (
            SELECT "id" FROM "ModVersion" WHERE "modId" = m."id" AND "status" = 'active'
             ORDER BY "isLatest" DESC, "createdAt" DESC, "id" DESC LIMIT 1
          ) v ON true
          LEFT JOIN "BuildGeometry" g ON g."modVersionId" = v."id"
         WHERE m."id" = ${modId} AND m."status" = ANY(${`{${PUBLIC_MOD_STATUSES.join(',')}}`}::text[])`,
  );
  if (!row) throw errors.notFound('Build');
  return row;
}

/** `GET /builds/:id/preview`. */
export async function getBuildPreview(ctx: Ctx, modId: number): Promise<BuildPreviewDTO> {
  const row = await latestGeometry(ctx.db, modId);
  const viewBox = { width: PREVIEW_COLUMNS, height: PREVIEW_ROWS };
  const base = { modId, modVersionId: row.versionId, pieces: 0, totalPieces: 0, profiles: 0, size: null, svg: null, viewBox };
  if (row.versionId === null) return { ...base, status: 'unavailable' };
  if (row.status === null) {
    await ctx.jobs.enqueue('build.geometry', { modVersionId: row.versionId }, { singletonKey: `geometry:${row.versionId}` });
    return { ...base, status: 'pending' };
  }
  if (row.status !== 'ready' || !row.previewSvg) return { ...base, status: 'unavailable' };
  return {
    ...base,
    status: 'ready',
    pieces: toInt(row.pieces),
    totalPieces: toInt(row.totalPieces),
    profiles: row.profiles?.length ?? 0,
    size: row.bounds,
    svg: row.previewSvg,
  };
}

/** `GET /builds/:id/geometry`. */
export async function getBuildGeometry(ctx: Ctx, modId: number): Promise<BuildGeometryDTO> {
  const latest = await latestGeometry(ctx.db, modId);
  if (latest.versionId === null || latest.status !== 'ready') throw errors.notFound('Geometry');
  const row = await queryOne<{ geometry: Buffer | null; createdAt: unknown }>(
    ctx.db,
    sql`SELECT "geometry", "createdAt" FROM "BuildGeometry" WHERE "modVersionId" = ${latest.versionId}`,
  );
  if (!row?.geometry || row.geometry.length % (GEOMETRY_STRIDE * 4) !== 0 || !latest.bounds) {
    throw errors.notFound('Geometry');
  }
  return {
    modId,
    modVersionId: latest.versionId,
    pieces: toInt(latest.pieces),
    totalPieces: toInt(latest.totalPieces),
    profiles: latest.profiles ?? [],
    size: latest.bounds,
    data: Buffer.from(row.geometry).toString('base64'),
    createdAt: (toDate(row.createdAt) ?? ctx.clock.now()).toISOString(),
  };
}
