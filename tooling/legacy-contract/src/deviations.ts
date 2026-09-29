/**
 * Intentional deviations of v2 from the legacy behaviour. The ten of PLAN §5.5 come from
 * `@sotf/contracts` (`LEGACY_DEVIATIONS`); the harness adds the ones the same section states in
 * other paragraphs (Tier 1 table, Tier 3, taxonomy seed) so every accepted difference has an id
 * that shows up in the report.
 */
import { LEGACY_DEVIATIONS } from '@sotf/contracts/legacy';

export const HARNESS_DEVIATIONS = [
  {
    id: 'modids-all-types',
    description:
      'With `modIds` and no `type`, `GET /api/mods` does not apply the default `type=Mod` filter (PLAN §5.5 Tier 1)',
  },
  {
    id: 'tier3-gone',
    description:
      'Tier 3 routes (auth, favorites, approve, uploads…) answer 410 with LEGACY_GONE_BODY (PLAN §5.5 Tier 3)',
  },
  {
    id: 'taxonomy-seed',
    description:
      '`/api/categories` may list the v2 taxonomy seeded in the legacy tables (migration 0025, backlog wave-1)',
  },
] as const;

export const ALL_DEVIATIONS = [...LEGACY_DEVIATIONS, ...HARNESS_DEVIATIONS] as const;
export type DeviationId = (typeof ALL_DEVIATIONS)[number]['id'];

const IDS = new Set<string>(ALL_DEVIATIONS.map((d) => d.id));

export function isDeviationId(id: string): id is DeviationId {
  return IDS.has(id);
}

export function describeDeviation(id: DeviationId): string {
  return ALL_DEVIATIONS.find((d) => d.id === id)?.description ?? id;
}
