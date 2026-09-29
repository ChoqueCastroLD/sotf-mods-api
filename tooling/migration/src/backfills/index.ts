/**
 * Registry of the backfills owned by WP-14 (PLAN §6.9: B1–B7 and B9–B14; B8 and B15–B18 belong to
 * WP-84, WP-60 and WP-43) and their execution order.
 *
 * Order matters: statuses (B12) before statistics (B11, which counts visible comments and
 * published mods), aggregates (B1) before statistics, follows deduplicated (B5) before the stats
 * count followers.
 */
import { b01 } from './b01-download-aggregates.ts';
import { b02 } from './b02-storage-keys.ts';
import { b03 } from './b03-canonical-slugs.ts';
import { b04 } from './b04-mod-type.ts';
import { b05 } from './b05-favorites-dedupe.ts';
import { b06 } from './b06-email-normalized.ts';
import { b07 } from './b07-roles.ts';
import { b09 } from './b09-markdown.ts';
import { b10 } from './b10-dependencies.ts';
import { b11 } from './b11-stats.ts';
import { b12 } from './b12-statuses.ts';
import { b13, b14 } from './b13-b14.ts';
import type { Backfill, BackfillId } from './framework.ts';

export * from './framework.ts';

/** Execution order of `--all`. */
export const BACKFILLS: readonly Backfill[] = [b02, b03, b04, b05, b06, b07, b09, b10, b12, b13, b14, b01, b11];

export const BACKFILL_IDS = BACKFILLS.map((b) => b.id);

/** Backfills of the cut-over delta (PLAN §6.13 D4), in execution order: B12, B14, B1, B11. */
export const DELTA_BACKFILLS: readonly Backfill[] = BACKFILLS.filter((b) => b.delta);

/** Resolves `B1,b12` style lists, keeping the canonical order. Throws on unknown ids. */
export function selectBackfills(ids: readonly string[]): Backfill[] {
  const wanted = new Set(
    ids
      .flatMap((id) => id.split(','))
      .map((id) => id.trim().toUpperCase())
      .filter(Boolean),
  );
  const unknown = [...wanted].filter((id) => !BACKFILL_IDS.includes(id as BackfillId));
  if (unknown.length > 0) {
    const hint = unknown.includes('B8')
      ? ' (B8 needs the zip manifests: it is part of the R2 pass of WP-84)'
      : ` (known: ${BACKFILL_IDS.join(', ')})`;
    throw new Error(`unknown backfill ${unknown.join(', ')}${hint}`);
  }
  return BACKFILLS.filter((b) => wanted.has(b.id));
}
