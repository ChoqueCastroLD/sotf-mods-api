/**
 * Registry of the backfills owned by WP-14 (PLAN §6.9: B1–B7 and B9–B14; B8 and B15–B18 belong to
 * WP-84, WP-60 and WP-43, see {@link ELSEWHERE}) and their execution order.
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
import { b19 } from './b19-approve-legacy-versions.ts';
import type { Backfill, BackfillId } from './framework.ts';

export * from './framework.ts';

/** Execution order of `--all`. */
export const BACKFILLS: readonly Backfill[] = [b02, b03, b04, b05, b06, b07, b09, b10, b12, b13, b14, b01, b11];

/**
 * One-off backfills that only run when named (never in `--all` / `--delta`): B19 approves every
 * existing version of legacy-approved mods (owner decision after the cut-over).
 */
export const OPT_IN_BACKFILLS: readonly Backfill[] = [b19];

export const BACKFILL_IDS = [...BACKFILLS, ...OPT_IN_BACKFILLS].map((b) => b.id);

/** Backfills of the cut-over delta (PLAN §6.13 D4), in execution order: B12, B14, B1, B11. */
export const DELTA_BACKFILLS: readonly Backfill[] = BACKFILLS.filter((b) => b.delta);

/**
 * Backfills of PLAN §6.9 that `pnpm db:backfill` does not run, with the command that does
 * (runbook: ops/runbooks/migration/r2-pass.md).
 */
export const ELSEWHERE: Readonly<Record<string, string>> = {
  B4M: 'B4M runs with the manifest fixes after B15: pnpm --filter @sotf/migration-tools r2:manifest-fixes [--apply]',
  B8: 'B8 needs the zip manifests of the R2 pass (WP-84): pnpm --filter @sotf/migration-tools r2:manifest-fixes [--apply] after B15',
  B15: 'B15 is the R2 pass run by the worker: node dist/backfill.js B15 [--apply] [--wait] (API image)',
  B16: 'B16 (retroactive gamification) runs in the worker: node dist/backfill.js B16 [--apply] [--wait] (API image)',
  B17: 'B17 rewrites R2 metadata from the operator CLI: pnpm --filter @sotf/migration-tools r2:b17 [--apply]',
  B18: 'B18 (pending mentions) is flushed by the worker at the cut-over (legacy.mentions, LEGACY_COEXIST=false)',
};

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
    const hints = unknown.map((id) => ELSEWHERE[id]).filter((hint): hint is string => hint !== undefined);
    const hint = hints.length > 0 ? ` (${hints.join('; ')})` : ` (known: ${BACKFILL_IDS.join(', ')})`;
    throw new Error(`unknown backfill ${unknown.join(', ')}${hint}`);
  }
  return [...BACKFILLS, ...OPT_IN_BACKFILLS].filter((b) => wanted.has(b.id));
}
