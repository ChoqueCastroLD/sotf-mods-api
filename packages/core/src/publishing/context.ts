/**
 * Dependencies of the publishing services and small shared helpers (audit trail, domain-event
 * routing of a mod, local cache eviction after a write).
 */
import { auditLog, type Executor, type JsonObject } from '@sotf/db';
import { sql } from 'drizzle-orm';
import type { CatalogConfig } from '../catalog/media.ts';
import type { Ctx } from '../kernel/context.ts';
import type { ObjectStorage } from '../storage/client.ts';

export interface PublishingDeps {
  /** R2 (null when not configured: every write that moves a file answers 503). */
  storage: ObjectStorage | null;
  /** Public media base URL and bucket (legacy image URLs, DTOs). */
  config: CatalogConfig;
}

export interface ModRouting {
  modId: number;
  authorId: number;
  kind: 'mod' | 'library' | 'build';
  categorySlug: string | null;
}

/** Routing fields of mod events (`modId`, `authorId`, `kind`, `categorySlug`). */
export async function modRouting(exec: Executor, modId: number): Promise<ModRouting & { nsfw: boolean }> {
  const res = await exec.execute<{ userId: number; type: string | null; slug: string | null; nsfw: boolean }>(sql`
    SELECT m."userId", m."type", c."slug", m."isNSFW" AS "nsfw"
      FROM "Mod" m LEFT JOIN "Category" c ON c."id" = m."categoryId" WHERE m."id" = ${modId}`);
  const row = res.rows[0];
  return {
    modId,
    authorId: Number(row?.userId ?? 0),
    kind: row?.type === 'Build' ? 'build' : row?.type === 'Library' ? 'library' : 'mod',
    categorySlug: row?.slug ?? null,
    nsfw: row?.nsfw === true,
  };
}

/** Appends to the immutable `AuditLog` (every status transition, PLAN §7.4). */
export async function audit(
  ctx: Ctx,
  exec: Executor,
  entry: {
    action: string;
    targetType: string;
    targetId: number;
    before?: Record<string, unknown> | null;
    after?: Record<string, unknown> | null;
    reason?: string | null;
  },
): Promise<void> {
  await exec.insert(auditLog).values({
    actorId: ctx.actor?.userId ?? null,
    action: entry.action,
    targetType: entry.targetType,
    targetId: entry.targetId,
    before: entry.before ? (JSON.parse(JSON.stringify(entry.before)) as JsonObject) : null,
    after: entry.after ? (JSON.parse(JSON.stringify(entry.after)) as JsonObject) : null,
    reason: entry.reason ?? null,
    ipHash: ctx.ipHash,
  });
}

/**
 * Evicts this process's caches right after a committed write, so the response (and the author's
 * next read) sees it; other processes are evicted by the `NOTIFY cache` sent in the transaction.
 */
export function evictLocal(ctx: Ctx, tags: readonly string[]): void {
  ctx.caches?.invalidate(tags);
}

/** Cache tags of a mod write. */
export function modTags(modId: number, userId: number | null, kind: 'mod' | 'library' | 'build'): string[] {
  return [
    `mod:${modId}`,
    ...(userId ? [`user:${userId}`] : []),
    kind === 'build' ? 'list:builds' : 'list:mods',
    'search-index',
  ];
}
