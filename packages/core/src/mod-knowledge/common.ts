/** Shared helpers of the mod-knowledge domain. */
import type { ModRefDTO } from '@sotf/contracts/common';
import { modPath } from '@sotf/contracts/seo';
import { type Executor, type Mod, mod } from '@sotf/db';
import { eq } from 'drizzle-orm';
import type { CatalogConfig } from '../catalog/media.ts';
import { getSnapshot, kindOf } from '../catalog/snapshot.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { publishCacheInvalidation } from '../kernel/notify.ts';
import { evictLocal, modRouting, modTags } from '../publishing/context.ts';

export interface KnowledgeDeps {
  config: CatalogConfig;
}

/** Statuses whose page is public (the mod is reachable by its URL). */
export const PUBLIC_MOD_STATUSES: readonly string[] = ['published', 'unlisted', 'archived'];

/** A mod with a public page, or NOT_FOUND. */
export async function loadPublicMod(exec: Executor, modId: number): Promise<Mod> {
  const [row] = await exec.select().from(mod).where(eq(mod.id, modId)).limit(1);
  if (!row || !PUBLIC_MOD_STATUSES.includes(row.status)) throw errors.notFound('Mod');
  return row;
}

/** Emits `mod.updated` (edge purge, search, realtime) and evicts the API caches after a write. */
export async function announceModChange(
  ctx: Ctx,
  tx: Executor,
  current: Pick<Mod, 'id' | 'userId' | 'type'>,
  field: 'knownIssues' | 'faq' | 'coAuthors',
  /** Co-author whose profile lists the mod (its page is tagged `user:{id}`). */
  profileUserId: number | null = null,
): Promise<void> {
  const routing = await modRouting(tx, current.id);
  await ctx.jobs.emitNew(
    tx,
    'mod.updated',
    {
      modId: current.id,
      authorId: routing.authorId,
      kind: routing.kind,
      categorySlug: routing.categorySlug,
      fields: [field],
    },
    { actorId: ctx.actor?.userId ?? null },
  );
  await publishCacheInvalidation(tx, [
    ...modTags(current.id, current.userId, routing.kind),
    ...(profileUserId ? [`user:${profileUserId}`] : []),
  ]);
}

export function evictModCaches(ctx: Ctx, current: Pick<Mod, 'id' | 'userId' | 'type'>): void {
  evictLocal(ctx, modTags(current.id, current.userId, kindOf(current.type)));
}

/** `ModRefDTO` of a mod: from the catalog snapshot when listed, else built without a thumbnail. */
export async function modRefsOf(
  ctx: Ctx,
  deps: KnowledgeDeps,
  rows: ReadonlyArray<{
    id: number;
    type: string | null;
    manifestId: string;
    name: string;
    slug: string;
    status: string;
    nsfw: boolean;
    handle: string;
  }>,
): Promise<Map<number, ModRefDTO>> {
  const snapshot = await getSnapshot(ctx, deps.config);
  const out = new Map<number, ModRefDTO>();
  for (const r of rows) {
    const listed = snapshot.byId.get(r.id);
    if (listed) {
      out.set(r.id, listed.ref);
      continue;
    }
    const kind = kindOf(r.type);
    out.set(r.id, {
      id: r.id,
      kind,
      manifestId: r.manifestId,
      name: r.name,
      slug: r.slug,
      userHandle: r.handle,
      canonicalPath: modPath(kind, r.handle, r.slug),
      status: r.status as ModRefDTO['status'],
      nsfw: r.nsfw,
      thumbnailUrl: null,
    });
  }
  return out;
}
