/**
 * `GET /studio/attention`: what needs the creator, one row per kind and mod, sorted (urgency, count
 * or name), filtered by kind or mod and paginated, with the number of rows per kind for the tabs.
 * The rules are the ones of the overview (`attentionOf`).
 */
import type { AttentionQuery, StudioAttentionDTO } from '@sotf/contracts/studio';
import type { z } from 'zod';
import { dismissedAttentionOf } from '../accounts/me.ts';
import type { CatalogConfig } from '../catalog/media.ts';
import { rows } from '../catalog/sql.ts';
import { loadModCards } from '../downloads/cards.ts';
import { utcDay } from '../kernel/clock.ts';
import type { Ctx } from '../kernel/context.ts';
import { cardOptionsOf, creatorOf, modRefOf, ownedModIds } from './studio-common.ts';
import { attentionOf, MOD_FACTS_SQL, type ModFacts, sortAttention } from './studio-overview.ts';

type Query = z.output<typeof AttentionQuery>;
type Result = z.infer<typeof StudioAttentionDTO>;
type Item = Result['items'][number];

export async function getStudioAttention(ctx: Ctx, config: CatalogConfig, query: Query): Promise<Result> {
  const userId = creatorOf(ctx);
  const today = utcDay(ctx.clock.now());
  const modIds = await ownedModIds(ctx, userId);
  const empty: Result = {
    items: [],
    page: 1,
    pageSize: query.pageSize,
    total: 0,
    totalPages: 0,
    counts: {},
    dismissedCount: 0,
  };
  if (modIds.length === 0) return empty;
  const [facts, cards, stored] = await Promise.all([
    rows<ModFacts>(ctx.db, MOD_FACTS_SQL, [userId, today]),
    loadModCards(ctx.db, modIds, cardOptionsOf(config)),
    rows<{ dismissed: unknown }>(
      ctx.db,
      `SELECT "settings"->'dismissedAttention' AS dismissed FROM "User" WHERE "id" = $1`,
      [userId],
    ),
  ]);
  const dismissedKeys = new Set(dismissedAttentionOf(stored[0]?.dismissed));
  const keyOf = (item: Item) => `${item.kind}:${item.mod.id}:${item.count}`;
  const everything: Item[] = [];
  for (const f of facts) {
    const entry = cards.get(Number(f.id));
    if (!entry) continue;
    everything.push(...attentionOf(f, modRefOf(entry.card)));
  }
  const dismissedCount = everything.filter((item) => dismissedKeys.has(keyOf(item))).length;
  // The open rows, or (`dismissed`) the dismissed ones, so they can be restored.
  const all = everything.filter((item) => dismissedKeys.has(keyOf(item)) === (query.dismissed === true));
  const counts: Result['counts'] = {};
  for (const item of all) counts[item.kind] = (counts[item.kind] ?? 0) + 1;
  const filtered = sortAttention(
    all.filter((item) => (!query.kind || item.kind === query.kind) && (!query.modId || item.mod.id === query.modId)),
    query.sort,
  );
  const total = filtered.length;
  const totalPages = total === 0 ? 0 : Math.ceil(total / query.pageSize);
  const page = Math.min(query.page, Math.max(1, totalPages));
  return {
    items: filtered.slice((page - 1) * query.pageSize, page * query.pageSize),
    page,
    pageSize: query.pageSize,
    total,
    totalPages,
    counts,
    dismissedCount,
  };
}
