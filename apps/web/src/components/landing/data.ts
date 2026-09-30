/**
 * Data of the landing (PLAN §4.2 row `/`, T0-05): every block comes from the public API, in
 * parallel, each with the optional-call budget, so a slow or failing endpoint only hides (or
 * shows the error state of) its own section. Nothing here is user-specific: the HTML is shared
 * and cached at the edge; the personal block is loaded in the browser (`islands/landing`).
 */
import type { CategoryListDTO, CreatorPageDTO, ModCardDTO } from '@sotf/contracts/catalog';
import type { CompatStatus } from '@sotf/contracts/common';
import type { EcosystemDTO, PatchRadarDTO } from '@sotf/contracts/compat';
import type { CurrentAwardsDTO } from '@sotf/contracts/gamification';
import type { KitCardDTO } from '@sotf/contracts/kits';
import type { LivePulseDTO, SiteStatsDTO } from '@sotf/contracts/stats';
import type { Locale } from '@sotf/i18n';
import type { z } from 'zod';
import { OPTIONAL_CALL_TIMEOUT_MS, optional, serverApi } from '../../lib/api.ts';

type Out<T extends z.ZodType> = z.output<T>;

export type SiteStats = Out<typeof SiteStatsDTO>;
export type LivePulse = Out<typeof LivePulseDTO>;
export type Ecosystem = Out<typeof EcosystemDTO>;
export type PatchRadar = Out<typeof PatchRadarDTO>;
export type CurrentAwards = Out<typeof CurrentAwardsDTO>;
export type Category = Out<typeof CategoryListDTO>['items'][number];
export type Creator = Out<typeof CreatorPageDTO>['items'][number];
export type { CompatStatus, KitCardDTO, ModCardDTO };

/** Sizes of the landing blocks (research/03 §6.1). */
export const LANDING_LIMITS = {
  trending: 8,
  notes: 6,
  builds: 4,
  creators: 3,
  regions: 12,
  pulsePins: 3,
} as const;

/** The landing renders fine with any of these missing; `null` = the call failed or timed out. */
export interface LandingData {
  stats: SiteStats | null;
  pulse: LivePulse | null;
  ecosystem: Ecosystem | null;
  radar: PatchRadar | null;
  trending: ModCardDTO[] | null;
  notes: ModCardDTO[] | null;
  builds: ModCardDTO[] | null;
  categories: Category[] | null;
  kit: KitCardDTO | null;
  awards: CurrentAwards | null;
  creators: Creator[] | null;
  /** Some catalogue block failed: the page is cached briefly so it heals quickly. */
  degraded: boolean;
}

function items<T>(page: { items: T[] } | null): T[] | null {
  return page ? page.items : null;
}

/**
 * Loads every public block of the landing. The API answers these from its own edge/LRU cache,
 * so the whole fan-out normally costs one round trip on the private network.
 */
export async function loadLanding(): Promise<LandingData> {
  const api = serverApi();
  const budget = OPTIONAL_CALL_TIMEOUT_MS;
  const [stats, pulse, ecosystem, radar, trending, notes, builds, categories, kits, awards, creators] =
    await Promise.all([
      optional((signal) => api.stats.site(undefined, { signal }), budget),
      optional((signal) => api.stats.livePulse(undefined, { signal }), budget),
      optional((signal) => api.compat.ecosystem(undefined, { signal }), budget),
      optional((signal) => api.compat.patchRadar({ query: {} }, { signal }), budget),
      optional(
        (signal) =>
          api.catalog.listMods(
            { query: { type: 'mod', sort: 'trending', pageSize: LANDING_LIMITS.trending } },
            { signal },
          ),
        budget,
      ),
      optional(
        (signal) =>
          api.catalog.listMods({ query: { type: 'all', sort: 'updated', pageSize: LANDING_LIMITS.notes } }, { signal }),
        budget,
      ),
      optional(
        (signal) =>
          api.catalog.listMods(
            { query: { type: 'build', sort: 'trending', pageSize: LANDING_LIMITS.builds } },
            { signal },
          ),
        budget,
      ),
      optional((signal) => api.catalog.categories({ query: { kind: 'mod' } }, { signal }), budget),
      optional(
        (signal) => api.kits.list({ query: { staffPick: true, sort: 'popular', pageSize: 1 } }, { signal }),
        budget,
      ),
      optional((signal) => api.gamification.currentAwards(undefined, { signal }), budget),
      optional(
        (signal) =>
          api.catalog.creators({ query: { sort: 'spotlight', pageSize: LANDING_LIMITS.creators } }, { signal }),
        budget,
      ),
    ]);

  const trendingItems = items(trending);
  const notesItems = items(notes);
  const buildItems = items(builds);
  const categoryItems = categories
    ? categories.items.filter((category) => category.count > 0).slice(0, LANDING_LIMITS.regions)
    : null;
  return {
    stats,
    pulse,
    ecosystem,
    radar,
    trending: trendingItems,
    notes: notesItems,
    builds: buildItems,
    categories: categoryItems,
    kit: kits?.items[0] ?? null,
    awards,
    creators: items(creators),
    degraded: stats === null || trendingItems === null || notesItems === null || categoryItems === null,
  };
}

/** Localised category names by i18n key (for `@sotf/ui/domain` cards via `taxonomy`). */
export function categoryNames(categories: readonly Category[] | null, locale: Locale): Map<string, string> {
  const names = new Map<string, string>();
  for (const category of categories ?? []) names.set(category.nameKey, category.names[locale] ?? category.name);
  return names;
}

/** Label of the current game build: Patch Radar first, then the ecosystem status. */
export function currentBuildLabel(data: Pick<LandingData, 'radar' | 'ecosystem'>): string | null {
  return data.radar?.build.label ?? data.ecosystem?.currentBuild?.label ?? null;
}

/** RedLoader entry of the current build (readout, Patch Radar band). */
export function currentLoader(data: Pick<LandingData, 'radar' | 'ecosystem'>) {
  const entries = data.radar?.ecosystem ?? data.ecosystem?.entries ?? [];
  const current = entries.filter((entry) => entry.gameBuild.isCurrent);
  const pool = current.length > 0 ? current : entries;
  return pool.find((entry) => entry.loader.name.toLowerCase() === 'redloader') ?? pool[0] ?? null;
}
