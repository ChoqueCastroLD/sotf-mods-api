/**
 * The `og.render` job (PLAN §8.6): card → PNG → R2 `og/{type}/{id}-{hash}.png` (public bucket,
 * immutable) → `ogImageKey` of the entity → purge of the entity's pages so the new image is
 * advertised.
 *
 * - Content-addressed: the hash covers the template version and every value on the card, so an
 *   unchanged card is never rendered twice and a changed one never overwrites a cached object
 *   (r2.sotf-mods.com caches for a year). Previous objects are kept: cached HTML and social
 *   scrapers may still reference them.
 * - Entities with a column (`Mod`, `User`, `Kit`) store the key; categories, the Patch Radar and
 *   guides have none, so their object is only uploaded (the key is returned and logged).
 * - A card that must not exist (missing, private, NSFW) clears the stored key.
 */
import { cacheTag } from '@sotf/contracts/cache';
import { kit, mod, user } from '@sotf/db';
import { eq, sql } from 'drizzle-orm';
import type { CatalogConfig } from '../catalog/media.ts';
import { purge } from '../kernel/cache-tags.ts';
import type { Ctx } from '../kernel/context.ts';
import type { ObjectStorage } from '../storage/client.ts';
import { IMMUTABLE_CACHE_CONTROL } from '../storage/disposition.ts';
import { ogImageKey } from '../storage/keys.ts';
import { loadOgCard, type OgEntityType } from './data.ts';
import { ogCardHash, renderOgPng } from './render.ts';

export interface OgRenderResult {
  status: 'rendered' | 'unchanged' | 'skipped' | 'cleared';
  key: string | null;
  url: string | null;
  bytes?: number;
}

type StoredColumn = 'mod' | 'user' | 'kit';

function columnOf(type: OgEntityType): StoredColumn | null {
  if (type === 'mod' || type === 'build') return 'mod';
  if (type === 'user') return 'user';
  if (type === 'kit') return 'kit';
  return null;
}

async function readStoredKey(ctx: Ctx, column: StoredColumn, id: number): Promise<string | null | undefined> {
  if (column === 'mod') {
    const [row] = await ctx.db.select({ key: mod.ogImageKey }).from(mod).where(eq(mod.id, id)).limit(1);
    return row ? row.key : undefined;
  }
  if (column === 'user') {
    const [row] = await ctx.db.select({ key: user.ogImageKey }).from(user).where(eq(user.id, id)).limit(1);
    return row ? row.key : undefined;
  }
  const [row] = await ctx.db.select({ key: kit.ogImageKey }).from(kit).where(eq(kit.id, id)).limit(1);
  return row ? row.key : undefined;
}

/**
 * Plain SQL on purpose: Drizzle's `$onUpdate` would bump `updatedAt`, which feeds «updated» sorts,
 * kit cards and sitemap `lastmod`; a regenerated image is not a content change.
 */
async function writeStoredKey(ctx: Ctx, column: StoredColumn, id: number, key: string | null): Promise<void> {
  if (column === 'mod') await ctx.db.execute(sql`UPDATE "Mod" SET "ogImageKey" = ${key} WHERE "id" = ${id}`);
  else if (column === 'user') await ctx.db.execute(sql`UPDATE "User" SET "ogImageKey" = ${key} WHERE "id" = ${id}`);
  else await ctx.db.execute(sql`UPDATE "Kit" SET "ogImageKey" = ${key} WHERE "id" = ${id}`);
}

function tagOf(column: StoredColumn, id: number) {
  if (column === 'mod') return cacheTag.mod(id);
  if (column === 'user') return cacheTag.user(id);
  return cacheTag.kit(id);
}

export async function renderEntityOg(
  ctx: Ctx,
  deps: { storage: ObjectStorage; config: CatalogConfig },
  input: { entityType: OgEntityType; entityId: number | string },
): Promise<OgRenderResult> {
  const column = columnOf(input.entityType);
  const numericId = typeof input.entityId === 'number' ? input.entityId : Number(input.entityId);
  if (column && !Number.isSafeInteger(numericId)) return { status: 'skipped', key: null, url: null };

  const card = await loadOgCard(ctx, deps.config, input.entityType, input.entityId);
  const stored = column ? await readStoredKey(ctx, column, numericId) : null;
  if (column && stored === undefined) return { status: 'skipped', key: null, url: null };

  if (!card) {
    if (column && stored) {
      await writeStoredKey(ctx, column, numericId, null);
      await purge(ctx.jobs, [tagOf(column, numericId)], `og:${input.entityType}:${numericId}`);
      return { status: 'cleared', key: null, url: null };
    }
    return { status: 'skipped', key: null, url: null };
  }

  const entityKey = column ? numericId : String(input.entityId).toLowerCase();
  const key = ogImageKey(card.type, entityKey, ogCardHash(card));
  const bucket = deps.storage.config.publicBucket;
  const url = deps.storage.publicUrl(key);
  if (stored === key) return { status: 'unchanged', key, url };

  // The object may already exist (a retried job, or a card that went back to a previous state).
  const exists = (await deps.storage.head(bucket, key)) !== null;
  let bytes: number | undefined;
  if (!exists) {
    const rendered = await renderOgPng(card);
    await deps.storage.put({
      bucket,
      key,
      body: rendered.png,
      contentLength: rendered.bytes,
      contentType: 'image/png',
      cacheControl: IMMUTABLE_CACHE_CONTROL,
    });
    bytes = rendered.bytes;
  }
  if (column) {
    await writeStoredKey(ctx, column, numericId, key);
    await purge(ctx.jobs, [tagOf(column, numericId)], `og:${input.entityType}:${numericId}`);
  } else if (exists) {
    return { status: 'unchanged', key, url };
  }
  ctx.log.info({ entityType: input.entityType, entityId: input.entityId, key, bytes }, 'og image stored');
  return { status: 'rendered', key, url, ...(bytes === undefined ? {} : { bytes }) };
}
