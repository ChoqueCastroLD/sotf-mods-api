/**
 * Data of the catalogue's side blocks (`/` and `/mods`): the site figures and the «Mods of the
 * week» ranking (top by downloads in the last 7 days). Both are optional: a slow or failing call
 * hides its block and never the list.
 *
 * `sort=week` is new in the API; while an older API answers (a deploy in between) the ranking
 * falls back to the trending read, re-sorted by the weekly downloads of the cards.
 */
import type { ModCardDTO } from '@sotf/contracts/catalog';
import type { SiteStatsDTO } from '@sotf/contracts/stats';
import type { z } from 'zod';
import { OPTIONAL_CALL_TIMEOUT_MS, optional, serverApi } from '../../lib/api.ts';

export type SiteStats = z.output<typeof SiteStatsDTO>;

/** Mods shown in the ranking (first {@link WEEKLY_VISIBLE} open, the rest behind «Show more»). */
export const WEEKLY_SIZE = 20;
export const WEEKLY_VISIBLE = 8;
/** Slides of the featured carousel (the top of the same ranking). */
export const FEATURED_SIZE = 8;

export interface CatalogAside {
  stats: SiteStats | null;
  /** Ranked by downloads of the last 7 days; `null` when the read failed. */
  weekly: ModCardDTO[] | null;
}

export function byWeeklyDownloads(items: readonly ModCardDTO[]): ModCardDTO[] {
  return [...items].sort((a, b) => b.downloads7d - a.downloads7d || b.downloads - a.downloads || a.id - b.id);
}

export async function loadAside(): Promise<CatalogAside> {
  const api = serverApi();
  const budget = OPTIONAL_CALL_TIMEOUT_MS * 2;
  const [stats, week] = await Promise.all([
    optional((signal) => api.stats.site(undefined, { signal }), budget),
    optional(
      (signal) => api.catalog.listMods({ query: { type: 'mod', sort: 'week', pageSize: WEEKLY_SIZE } }, { signal }),
      budget,
    ),
  ]);
  if (week) return { stats, weekly: week.items };
  const trending = await optional(
    (signal) => api.catalog.listMods({ query: { type: 'mod', sort: 'trending', pageSize: 40 } }, { signal }),
    budget,
  );
  return { stats, weekly: trending ? byWeeklyDownloads(trending.items).slice(0, WEEKLY_SIZE) : null };
}
