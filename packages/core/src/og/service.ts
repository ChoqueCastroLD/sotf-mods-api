/**
 * The `og.render` job (PLAN §8.6): card → PNG → R2 `og/{type}/{id}-{hash}.png` (public bucket,
 * immutable) → `ogImageKey` of the entity → purge of the entity's pages so the new image is
 * advertised.
 *
 * - Content-addressed: the hash covers the template version and every value on the card, so an
 *   unchanged card is never rendered twice and a changed one never overwrites a cached object
 *   (r2.sotf-mods.com caches for a year). Previous objects are kept: cached HTML and social
 *   scrapers may still reference them.
 * - Entities with a column (`Mod`, `User`, `Kit`, `Category` by slug) store the key; the Patch
 *   Radar and guides have none, so their object is only uploaded (the key is returned and logged).
 * - A card that must not exist (missing, private, NSFW) clears the stored key.
 * - Collage images (kits) are read from the public bucket through the storage client, never
 *   fetched over HTTP: only URLs under `R2_PUBLIC_BASE_URL` are used.
 */
import { cacheTag } from '@sotf/contracts/cache';
import { category, kit, mod, modMilestone, user } from '@sotf/db';
import { and, eq, sql } from 'drizzle-orm';
import type { CatalogConfig } from '../catalog/media.ts';
import { purge } from '../kernel/cache-tags.ts';
import type { Ctx } from '../kernel/context.ts';
import type { ObjectStorage } from '../storage/client.ts';
import { IMMUTABLE_CACHE_CONTROL } from '../storage/disposition.ts';
import { ogImageKey } from '../storage/keys.ts';
import { loadOgCard, type OgEntityType, parseMilestoneId } from './data.ts';
import { ogCardHash, renderOgPng } from './render.ts';

/** Largest collage source read (thumbnails are ~20 KB, covers a few hundred KB). */
const MAX_IMAGE_BYTES = 8 * 1024 * 1024;

/** Storage key of a public media URL, or null when the URL is not under the public base. */
export function keyFromPublicUrl(url: string, publicBaseUrl: string): string | null {
  const base = `${publicBaseUrl.replace(/\/+$/, '')}/`;
  if (!url.startsWith(base)) return null;
  const encoded = url.slice(base.length).split(/[?#]/, 1)[0] ?? '';
  if (!encoded) return null;
  try {
    const key = encoded.split('/').map(decodeURIComponent).join('/');
    return key.split('/').some((part) => part === '' || part === '.' || part === '..') ? null : key;
  } catch {
    return null;
  }
}

async function readObject(storage: ObjectStorage, bucket: string, key: string): Promise<Buffer | null> {
  const { body, head } = await storage.get(bucket, key);
  if (head.size > MAX_IMAGE_BYTES) {
    body.destroy();
    return null;
  }
  const chunks: Buffer[] = [];
  let total = 0;
  for await (const chunk of body) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk as Uint8Array);
    total += buffer.byteLength;
    if (total > MAX_IMAGE_BYTES) {
      body.destroy();
      return null;
    }
    chunks.push(buffer);
  }
  return Buffer.concat(chunks);
}

/** Collage sources of a card, in order; missing or unreadable objects are skipped. */
async function loadCardImages(ctx: Ctx, storage: ObjectStorage, urls: readonly string[]): Promise<Buffer[]> {
  const bucket = storage.config.publicBucket;
  const out: Buffer[] = [];
  for (const url of urls) {
    const key = keyFromPublicUrl(url, storage.config.publicBaseUrl);
    if (!key) continue;
    try {
      const image = await readObject(storage, bucket, key);
      if (image) out.push(image);
    } catch (error) {
      ctx.log.warn({ key, err: error }, 'og collage image unreadable');
    }
  }
  return out;
}

export interface OgRenderResult {
  status: 'rendered' | 'unchanged' | 'skipped' | 'cleared';
  key: string | null;
  url: string | null;
  bytes?: number;
}

type StoredColumn = 'mod' | 'user' | 'kit' | 'category' | 'milestone';

function columnOf(type: OgEntityType): StoredColumn | null {
  if (type === 'mod' || type === 'build') return 'mod';
  if (type === 'user') return 'user';
  if (type === 'kit') return 'kit';
  if (type === 'category') return 'category';
  if (type === 'milestone') return 'milestone';
  return null;
}

/** Row id of the entity: numeric for mods, users and kits, the lower-case slug for categories. */
type StoredId = number | string;

async function readStoredKey(ctx: Ctx, column: StoredColumn, id: StoredId): Promise<string | null | undefined> {
  if (column === 'category') {
    const [row] = await ctx.db
      .select({ key: category.ogImageKey })
      .from(category)
      .where(eq(category.slug, String(id)))
      .limit(1);
    return row ? row.key : undefined;
  }
  if (column === 'milestone') {
    const parsed = parseMilestoneId(String(id));
    if (!parsed) return undefined;
    const [row] = await ctx.db
      .select({ key: modMilestone.ogImageKey })
      .from(modMilestone)
      .where(and(eq(modMilestone.modId, parsed.modId), eq(modMilestone.threshold, parsed.threshold)))
      .limit(1);
    return row ? row.key : undefined;
  }
  const numericId = Number(id);
  if (column === 'mod') {
    const [row] = await ctx.db.select({ key: mod.ogImageKey }).from(mod).where(eq(mod.id, numericId)).limit(1);
    return row ? row.key : undefined;
  }
  if (column === 'user') {
    const [row] = await ctx.db.select({ key: user.ogImageKey }).from(user).where(eq(user.id, numericId)).limit(1);
    return row ? row.key : undefined;
  }
  const [row] = await ctx.db.select({ key: kit.ogImageKey }).from(kit).where(eq(kit.id, numericId)).limit(1);
  return row ? row.key : undefined;
}

/**
 * Plain SQL on purpose: Drizzle's `$onUpdate` would bump `updatedAt`, which feeds «updated» sorts,
 * kit cards and sitemap `lastmod`; a regenerated image is not a content change.
 */
async function writeStoredKey(ctx: Ctx, column: StoredColumn, id: StoredId, key: string | null): Promise<void> {
  if (column === 'category') {
    await ctx.db.execute(sql`UPDATE "Category" SET "ogImageKey" = ${key} WHERE "slug" = ${String(id)}`);
  } else if (column === 'milestone') {
    const parsed = parseMilestoneId(String(id));
    if (!parsed) return;
    await ctx.db.execute(
      sql`UPDATE "ModMilestone" SET "ogImageKey" = ${key} WHERE "modId" = ${parsed.modId} AND "threshold" = ${parsed.threshold}`,
    );
  } else if (column === 'mod') await ctx.db.execute(sql`UPDATE "Mod" SET "ogImageKey" = ${key} WHERE "id" = ${id}`);
  else if (column === 'user') await ctx.db.execute(sql`UPDATE "User" SET "ogImageKey" = ${key} WHERE "id" = ${id}`);
  else await ctx.db.execute(sql`UPDATE "Kit" SET "ogImageKey" = ${key} WHERE "id" = ${id}`);
}

function tagOf(column: StoredColumn, id: StoredId) {
  if (column === 'category') return cacheTag.category(String(id));
  if (column === 'milestone') return cacheTag.mod(parseMilestoneId(String(id))?.modId ?? 0);
  if (column === 'mod') return cacheTag.mod(Number(id));
  if (column === 'user') return cacheTag.user(Number(id));
  return cacheTag.kit(Number(id));
}

export async function renderEntityOg(
  ctx: Ctx,
  deps: { storage: ObjectStorage; config: CatalogConfig },
  input: { entityType: OgEntityType; entityId: number | string },
): Promise<OgRenderResult> {
  const column = columnOf(input.entityType);
  let storedId: StoredId;
  if (column === 'category' || column === 'milestone') {
    storedId = String(input.entityId).toLowerCase();
  } else {
    storedId = typeof input.entityId === 'number' ? input.entityId : Number(input.entityId);
    if (column && !Number.isSafeInteger(storedId)) return { status: 'skipped', key: null, url: null };
  }

  const card = await loadOgCard(ctx, deps.config, input.entityType, input.entityId);
  const stored = column ? await readStoredKey(ctx, column, storedId) : null;
  if (column && stored === undefined) return { status: 'skipped', key: null, url: null };

  if (!card) {
    if (column && stored) {
      await writeStoredKey(ctx, column, storedId, null);
      await purge(ctx.jobs, [tagOf(column, storedId)], `og:${input.entityType}:${storedId}`);
      return { status: 'cleared', key: null, url: null };
    }
    return { status: 'skipped', key: null, url: null };
  }

  const entityKey = column && column !== 'category' && column !== 'milestone' ? Number(storedId) : String(input.entityId).toLowerCase();
  const key = ogImageKey(card.type, entityKey, ogCardHash(card));
  const bucket = deps.storage.config.publicBucket;
  const url = deps.storage.publicUrl(key);
  if (stored === key) return { status: 'unchanged', key, url };

  // The object may already exist (a retried job, or a card that went back to a previous state).
  const exists = (await deps.storage.head(bucket, key)) !== null;
  let bytes: number | undefined;
  if (!exists) {
    const images = card.images?.length ? await loadCardImages(ctx, deps.storage, card.images) : [];
    const rendered = await renderOgPng(card, images);
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
    await writeStoredKey(ctx, column, storedId, key);
    await purge(ctx.jobs, [tagOf(column, storedId)], `og:${input.entityType}:${storedId}`);
  } else if (exists) {
    return { status: 'unchanged', key, url };
  }
  ctx.log.info({ entityType: input.entityType, entityId: input.entityId, key, bytes }, 'og image stored');
  return { status: 'rendered', key, url, ...(bytes === undefined ? {} : { bytes }) };
}
