/**
 * What each golden fixture requires from a server (PLAN §5.5, research/01 §2–§3):
 *
 * - the legacy outcome (status + body of the fixture) is always accepted;
 * - some fixtures also accept a v2 outcome justified by a deviation id (`validation-422`,
 *   `tier3-gone`);
 * - `compare` says how the body is compared with the reference:
 *   - `strict`: deep equality with key order after normalisation (volatile counters, tie order);
 *   - `byId`: items of `data` are matched by `id`; matched items must be equal, extra/missing
 *     items are allowed only when a deviation makes membership data-dependent;
 *   - `shape`: schema + key order only (the values depend on the clock);
 *   - `error`: legacy error envelope (`status`, `error` and the 404 literal compared).
 */
import { LEGACY_GONE_BODY, type LegacyErrorCode } from '@sotf/contracts/legacy';
import type { DeviationId } from './deviations.ts';

export type CompareMode = 'strict' | 'byId' | 'shape' | 'error';

export interface V2Alternative {
  status: number;
  error: LegacyErrorCode;
  /** When set the body must be exactly this object (key order included). */
  exactBody?: Readonly<Record<string, unknown>>;
  deviation: DeviationId;
}

export interface FixturePolicy {
  /** 1 = byte-compatible, 2 = frozen/deprecated read, 3 = retired, 0 = not a route (404 probe). */
  tier: 0 | 1 | 2 | 3;
  compare: CompareMode;
  /** `byId`: actual items absent from the reference are accepted. */
  allowExtra?: boolean;
  /** `byId`: reference items absent from the actual answer are accepted. */
  allowMissing?: boolean;
  /** Deviations that justify `allowExtra`/`allowMissing` or the v2 alternative. */
  deviations: DeviationId[];
  /** Extra volatile paths (JSONPath-like with `*`), e.g. every stat number. */
  volatilePaths?: string[];
  /** Sort key of the list (ties are re-ordered by `id` on both sides: deviation `stable-order`). */
  orderKey?: string;
  /** Drop hidden comments on both sides (deviation `comments-hidden`). */
  dropHidden?: boolean;
  v2?: V2Alternative;
  /** Route consumed by UpdatesChecker (typed Newtonsoft DTO; value fields never null). */
  updatesChecker?: boolean;
  /** Eligible for shadow mode (GET of a Tier 1 or Tier 2 read). */
  shadow: boolean;
}

const LIST_DEVIATIONS: DeviationId[] = ['type-null', 'stable-order'];
const validation422: V2Alternative = { status: 422, error: 'VALIDATION', deviation: 'validation-422' };

/** Policy of every fixture of `INDEX.tsv` (a test checks the two lists match). */
export const FIXTURE_POLICIES: Readonly<Record<string, FixturePolicy>> = {
  stats: { tier: 2, compare: 'strict', deviations: [], volatilePaths: ['$.data.*'], shadow: true },
  'stats-builds': { tier: 2, compare: 'strict', deviations: [], volatilePaths: ['$.data.*'], shadow: true },
  categories: { tier: 2, compare: 'byId', allowExtra: true, deviations: ['taxonomy-seed'], shadow: true },
  'categories-build': { tier: 2, compare: 'byId', allowExtra: true, deviations: ['taxonomy-seed'], shadow: true },
  // No `approved` → published + pending with checks + archived + unlisted: membership may differ.
  'mods-default': {
    tier: 1,
    compare: 'byId',
    allowExtra: true,
    allowMissing: true,
    deviations: [...LIST_DEVIATIONS, 'approved-absent'],
    orderKey: 'lastReleasedAt',
    updatesChecker: true,
    shadow: true,
  },
  'mods-redmanager-p1': {
    tier: 1,
    compare: 'strict',
    deviations: [...LIST_DEVIATIONS, 'approved-true'],
    orderKey: 'lastReleasedAt',
    shadow: true,
  },
  'mods-redmanager-unapproved': {
    tier: 1,
    compare: 'byId',
    allowExtra: true,
    allowMissing: true,
    deviations: [...LIST_DEVIATIONS, 'approved-false'],
    orderKey: 'lastReleasedAt',
    shadow: true,
  },
  'mods-redmanager-search': {
    tier: 1,
    compare: 'strict',
    deviations: [...LIST_DEVIATIONS, 'approved-true'],
    orderKey: 'lastReleasedAt',
    shadow: true,
  },
  'mods-updateschecker-modids': {
    tier: 1,
    compare: 'byId',
    allowExtra: true,
    allowMissing: true,
    deviations: [...LIST_DEVIATIONS, 'modids-all-types', 'approved-absent'],
    orderKey: 'lastReleasedAt',
    updatesChecker: true,
    shadow: true,
  },
  'mods-updateschecker-page': {
    tier: 1,
    compare: 'byId',
    allowExtra: true,
    allowMissing: true,
    deviations: [...LIST_DEVIATIONS, 'approved-absent'],
    orderKey: 'lastReleasedAt',
    updatesChecker: true,
    shadow: true,
  },
  'mods-frontend-list': {
    tier: 1,
    compare: 'strict',
    deviations: [...LIST_DEVIATIONS, 'approved-true'],
    orderKey: 'lastReleasedAt',
    shadow: true,
  },
  'mods-type-build': {
    tier: 1,
    compare: 'strict',
    deviations: [...LIST_DEVIATIONS, 'approved-true'],
    orderKey: 'lastReleasedAt',
    shadow: true,
  },
  'mods-user': {
    tier: 1,
    compare: 'strict',
    deviations: [...LIST_DEVIATIONS, 'approved-true'],
    orderKey: 'lastReleasedAt',
    shadow: true,
  },
  // Legacy: 200 with `pages: null` (would crash UpdatesChecker). v2: `limit` must be 1–1000.
  'mods-limit0': { tier: 1, compare: 'strict', deviations: ['validation-422'], v2: validation422, shadow: true },
  'mods-limit-invalid': { tier: 1, compare: 'error', deviations: ['validation-422'], v2: validation422, shadow: true },
  // Top 12 / 4 by `lastWeekDownloads`: membership is volatile, matched items must be equal.
  featured: {
    tier: 2,
    compare: 'byId',
    allowExtra: true,
    allowMissing: true,
    deviations: ['type-null'],
    shadow: true,
  },
  'builds-featured': {
    tier: 2,
    compare: 'byId',
    allowExtra: true,
    allowMissing: true,
    deviations: ['type-null'],
    shadow: true,
  },
  'mod-by-id': { tier: 1, compare: 'strict', deviations: ['type-null'], shadow: true },
  'mod-by-id-build': { tier: 1, compare: 'strict', deviations: ['type-null'], shadow: true },
  'mod-by-slug': { tier: 2, compare: 'strict', deviations: ['type-null'], shadow: true },
  'mod-find': { tier: 2, compare: 'strict', deviations: [], shadow: true },
  'mod-find-missing-param': { tier: 2, compare: 'error', deviations: [], shadow: true },
  'mod-404': { tier: 1, compare: 'error', deviations: [], shadow: true },
  'check-outdated': { tier: 1, compare: 'strict', deviations: [], shadow: true },
  'check-current': { tier: 1, compare: 'strict', deviations: [], shadow: true },
  'check-noversion': { tier: 1, compare: 'strict', deviations: [], shadow: true },
  'check-invalid': { tier: 1, compare: 'error', deviations: ['validation-422'], v2: validation422, shadow: true },
  'check-build-uuid': { tier: 1, compare: 'error', deviations: ['validation-422'], v2: validation422, shadow: true },
  'check-404': { tier: 1, compare: 'error', deviations: [], shadow: true },
  user: { tier: 2, compare: 'strict', deviations: [], shadow: true },
  'user-stats': { tier: 2, compare: 'strict', deviations: [], volatilePaths: ['$.data.*'], shadow: true },
  'user-404': { tier: 2, compare: 'error', deviations: [], shadow: true },
  comments: {
    tier: 2,
    compare: 'byId',
    allowExtra: true,
    deviations: ['comments-hidden'],
    dropHidden: true,
    shadow: true,
  },
  'comments-noparam': { tier: 2, compare: 'error', deviations: ['validation-422'], v2: validation422, shadow: true },
  'download-stats-week': { tier: 2, compare: 'shape', deviations: [], shadow: true },
  'download-stats-invalid': { tier: 2, compare: 'error', deviations: [], shadow: true },
  'auth-check-noauth': {
    tier: 3,
    compare: 'error',
    deviations: ['tier3-gone'],
    v2: { status: 410, error: 'GONE', exactBody: LEGACY_GONE_BODY, deviation: 'tier3-gone' },
    shadow: false,
  },
  'route-404': { tier: 0, compare: 'error', deviations: [], shadow: false },
};

export function policyOf(name: string): FixturePolicy {
  const policy = FIXTURE_POLICIES[name];
  if (!policy) throw new Error(`fixture ${name} has no policy in expectations.ts`);
  return policy;
}
