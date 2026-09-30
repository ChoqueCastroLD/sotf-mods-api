/**
 * Official bundles (T1-04): a creator attaches one of their kits to one of their mods; the worker
 * builds the zip (`bundle.build`) and regenerates it when a kit item publishes a new version
 * (`bundle.sweep`, every 15 minutes, compares the fingerprint of the resolved versions).
 *
 * Rules: the actor owns the mod and the kit; the kit is public or unlisted (a private kit would leak
 * through the public zip) and has at least one item; ≤ 5 bundles per mod.
 */

import { createHash } from 'node:crypto';
import { BUNDLE_LIMITS, type ModBundleDTO } from '@sotf/contracts/bundles';
import { sql } from 'drizzle-orm';
import { at, intArray, query, queryOne, sqlState, toDate, toInt } from '../follows/sql.ts';
import type { Actor, Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { loadItems, resolveVersions } from '../kits/read.ts';
import { assertCan } from '../permissions/can.ts';
import { publicObjectUrl } from '../storage/keys.ts';

const PUBLIC_MOD_STATUSES = '{published,unlisted,archived}';

function actorOf(ctx: Ctx): Actor {
  if (!ctx.actor) throw errors.unauthenticated();
  return ctx.actor;
}

interface BundleRow {
  id: number;
  modId: number;
  kitId: number;
  status: 'pending' | 'ready' | 'failed';
  statusReason: string | null;
  storageKey: string | null;
  bytes: string | number | null;
  filesCount: number;
  contents: Array<{ mod: string; version: string | null; files: number }> | null;
  downloadsCount: number;
  builtAt: unknown;
  kitName: string;
  kitSlug: string;
  kitOwnerSlug: string | null;
  kitOwnerId: number;
  kitItems: number;
  kitVisibility: 'public' | 'unlisted' | 'private';
  kitDeleted: boolean;
}

const COLUMNS = sql`b."id", b."modId", b."kitId", b."status", b."statusReason", b."storageKey", b."bytes",
  b."filesCount", b."contents", b."downloadsCount", b."builtAt", k."name" AS "kitName", k."slug" AS "kitSlug",
  u."slug" AS "kitOwnerSlug", k."ownerId" AS "kitOwnerId", k."itemsCount" AS "kitItems",
  k."visibility" AS "kitVisibility", (k."deletedAt" IS NOT NULL) AS "kitDeleted"`;
const FROM = sql`FROM "ModBundle" b JOIN "Kit" k ON k."id" = b."kitId" LEFT JOIN "User" u ON u."id" = k."ownerId"`;

function toDto(row: BundleRow): ModBundleDTO {
  return {
    id: row.id,
    modId: row.modId,
    kit: {
      id: row.kitId,
      name: row.kitName,
      canonicalPath: `/kits/${row.kitOwnerSlug ?? 'unknown'}/${row.kitSlug}`,
      itemsCount: row.kitItems,
      visibility: row.kitVisibility,
    },
    status: row.status,
    statusReason: row.statusReason,
    bytes: row.bytes === null ? null : toInt(row.bytes),
    filesCount: row.filesCount,
    contents: row.contents ?? [],
    downloadsCount: row.downloadsCount,
    downloadPath: row.status === 'ready' ? `/api/v2/bundles/${row.id}/download` : null,
    builtAt: toDate(row.builtAt)?.toISOString() ?? null,
  };
}

async function publicMod(ctx: Ctx, modId: number): Promise<{ id: number; userId: number | null }> {
  const mod = await queryOne<{ id: number; userId: number | null }>(
    ctx.db,
    sql`SELECT "id", "userId" FROM "Mod" WHERE "id" = ${modId} AND "status" = ANY(${PUBLIC_MOD_STATUSES}::text[])`,
  );
  if (!mod) throw errors.notFound('Mod');
  return mod;
}

async function ownedMod(ctx: Ctx, modId: number): Promise<{ id: number; userId: number | null }> {
  const actor = actorOf(ctx);
  const mod = await queryOne<{ id: number; userId: number | null; status: string }>(
    ctx.db,
    sql`SELECT "id", "userId", "status" FROM "Mod" WHERE "id" = ${modId}`,
  );
  if (!mod || mod.status === 'removed') throw errors.notFound('Mod');
  assertCan(actor, 'mod.edit', { ownerId: mod.userId }, ctx.clock.now());
  return mod;
}

/** Bundles of a mod that can be downloaded (`GET /mods/:id/bundles`). */
export async function listReadyBundles(ctx: Ctx, modId: number): Promise<ModBundleDTO[]> {
  await publicMod(ctx, modId);
  const rows = await query<BundleRow>(
    ctx.db,
    sql`SELECT ${COLUMNS} ${FROM}
         WHERE b."modId" = ${modId} AND b."status" = 'ready' AND k."deletedAt" IS NULL AND k."visibility" <> 'private'
         ORDER BY b."id"`,
  );
  return rows.map(toDto);
}

/** Every bundle of one of the actor's mods (`GET /me/mods/:id/bundles`). */
export async function listOwnBundles(ctx: Ctx, modId: number): Promise<ModBundleDTO[]> {
  await ownedMod(ctx, modId);
  const rows = await query<BundleRow>(
    ctx.db,
    sql`SELECT ${COLUMNS} ${FROM} WHERE b."modId" = ${modId} AND k."deletedAt" IS NULL ORDER BY b."id"`,
  );
  return rows.map(toDto);
}

async function loadBundle(ctx: Ctx, modId: number, bundleId: number): Promise<BundleRow> {
  const row = await queryOne<BundleRow>(
    ctx.db,
    sql`SELECT ${COLUMNS} ${FROM} WHERE b."id" = ${bundleId} AND b."modId" = ${modId}`,
  );
  if (!row) throw errors.notFound('Bundle');
  return row;
}

async function purgeMod(ctx: Ctx, modId: number): Promise<void> {
  await ctx.jobs.enqueue('cdn.purge', { tags: [`mod:${modId}`], reason: 'bundle' });
}

/** `POST /mods/:id/bundles`. */
export async function createBundle(ctx: Ctx, modId: number, kitId: number): Promise<ModBundleDTO> {
  const actor = actorOf(ctx);
  await ownedMod(ctx, modId);
  const kit = await queryOne<{ ownerId: number; visibility: string; itemsCount: number; deletedAt: unknown }>(
    ctx.db,
    sql`SELECT "ownerId", "visibility", "itemsCount", "deletedAt" FROM "Kit" WHERE "id" = ${kitId}`,
  );
  if (!kit || kit.deletedAt || (kit.ownerId !== actor.userId && actor.role === 'user')) throw errors.notFound('Kit');
  if (kit.visibility === 'private') {
    throw errors.validation('Only public or unlisted kits can be official bundles', [
      { path: 'kitId', code: 'kit_private', message: 'Make the kit public or unlisted first' },
    ]);
  }
  if (kit.itemsCount < 1) {
    throw errors.validation('The kit is empty', [
      { path: 'kitId', code: 'kit_empty', message: 'Add mods to the kit first' },
    ]);
  }
  const count = await queryOne<{ n: number }>(
    ctx.db,
    sql`SELECT count(*)::int AS "n" FROM "ModBundle" WHERE "modId" = ${modId}`,
  );
  if ((count?.n ?? 0) >= BUNDLE_LIMITS.perMod)
    throw errors.conflict(`A mod can have at most ${BUNDLE_LIMITS.perMod} bundles`);
  let id: number;
  try {
    const inserted = await queryOne<{ id: number }>(
      ctx.db,
      sql`INSERT INTO "ModBundle" ("modId", "kitId", "createdById", "updatedAt")
          VALUES (${modId}, ${kitId}, ${actor.userId}, ${at(ctx.clock.now())}) RETURNING "id"`,
    );
    if (!inserted) throw errors.conflict('Could not create the bundle');
    id = inserted.id;
  } catch (error) {
    if (sqlState(error) === '23505') throw errors.conflict('This kit is already a bundle of the mod');
    throw error;
  }
  await ctx.jobs.enqueue('bundle.build', { bundleId: id }, { singletonKey: `bundle:${id}` });
  return toDto(await loadBundle(ctx, modId, id));
}

/** `POST /mods/:id/bundles/:bundleId/rebuild`. */
export async function rebuildBundle(ctx: Ctx, modId: number, bundleId: number): Promise<ModBundleDTO> {
  await ownedMod(ctx, modId);
  await loadBundle(ctx, modId, bundleId);
  await ctx.db.execute(
    sql`UPDATE "ModBundle" SET "status" = 'pending', "statusReason" = NULL, "updatedAt" = ${at(ctx.clock.now())} WHERE "id" = ${bundleId}`,
  );
  await ctx.jobs.enqueue('bundle.build', { bundleId }, { singletonKey: `bundle:${bundleId}` });
  return toDto(await loadBundle(ctx, modId, bundleId));
}

/** `DELETE /mods/:id/bundles/:bundleId` (the zip is deleted by `bundle.build`). */
export async function removeBundle(ctx: Ctx, modId: number, bundleId: number): Promise<void> {
  await ownedMod(ctx, modId);
  const row = await loadBundle(ctx, modId, bundleId);
  await ctx.db.execute(sql`DELETE FROM "ModBundle" WHERE "id" = ${bundleId}`);
  if (row.storageKey?.startsWith('bundles/')) {
    await ctx.jobs.enqueue('bundle.build', { bundleId, removeKey: row.storageKey });
  }
  await purgeMod(ctx, modId);
}

export interface BundleDownload {
  location: string;
}

/** `GET /bundles/:id/download`: the public URL of the zip; counts the download. */
export async function resolveBundleDownload(
  ctx: Ctx,
  publicBaseUrl: string,
  bundleId: number,
  count: boolean,
): Promise<BundleDownload> {
  const row = await queryOne<{ storageKey: string | null }>(
    ctx.db,
    sql`SELECT b."storageKey" FROM "ModBundle" b
          JOIN "Kit" k ON k."id" = b."kitId" JOIN "Mod" m ON m."id" = b."modId"
         WHERE b."id" = ${bundleId} AND b."status" = 'ready' AND b."storageKey" IS NOT NULL
           AND k."deletedAt" IS NULL AND k."visibility" <> 'private' AND m."status" = ANY(${PUBLIC_MOD_STATUSES}::text[])`,
  );
  if (!row?.storageKey) throw errors.notFound('Bundle');
  if (count) {
    await ctx.db.execute(sql`UPDATE "ModBundle" SET "downloadsCount" = "downloadsCount" + 1 WHERE "id" = ${bundleId}`);
  }
  return { location: publicObjectUrl(publicBaseUrl, row.storageKey) };
}

/**
 * Hash of what the zip is made of: the resolved version of every kit item with its file hash.
 * A new version of any item (or a kit edit) changes it.
 */
export async function bundleFingerprint(ctx: Pick<Ctx, 'db'>, kitId: number): Promise<string> {
  const items = await loadItems(ctx.db, [kitId]);
  const versions = await resolveVersions(ctx.db, items);
  const ids = [...versions.values()].map((v) => v.id);
  const hashes = await query<{ id: number; sha256: string | null; storageKey: string | null }>(
    ctx.db,
    sql`SELECT "id", "sha256", "storageKey" FROM "ModVersion" WHERE "id" = ANY(${intArray(ids)}) ORDER BY "id"`,
  );
  const text = items
    .map((item) => {
      const version = versions.get(item.modId);
      const hash = hashes.find((h) => h.id === version?.id);
      return `${item.position}:${item.modId}:${version?.id ?? '-'}:${hash?.sha256 ?? hash?.storageKey ?? '-'}`;
    })
    .join('|');
  return createHash('sha256').update(text).digest('hex');
}

/** Ids of the bundles whose items changed since they were built (`bundle.sweep`). */
export async function staleBundleIds(ctx: Ctx): Promise<number[]> {
  const rows = await query<{ id: number; kitId: number; fingerprint: string | null; status: string }>(
    ctx.db,
    sql`SELECT b."id", b."kitId", b."fingerprint", b."status" FROM "ModBundle" b
          JOIN "Kit" k ON k."id" = b."kitId"
          JOIN "Mod" m ON m."id" = b."modId"
         WHERE k."deletedAt" IS NULL AND m."status" = ANY(${PUBLIC_MOD_STATUSES}::text[]) ORDER BY b."id"`,
  );
  const stale: number[] = [];
  for (const row of rows) {
    if (row.status === 'pending' && row.fingerprint === null) {
      stale.push(row.id);
      continue;
    }
    if ((await bundleFingerprint(ctx, row.kitId)) !== row.fingerprint) stale.push(row.id);
  }
  return stale;
}
