/**
 * Pure compatibility rules (PLAN §7.10): report weights, the weighted aggregate of one version on
 * one game build, the "possibly outdated" rule and the build ordering. No I/O: the aggregate job,
 * the reads and the unit tests share these functions.
 */
import type { CompatStatus } from '@sotf/contracts/common';
import { aggregateCompatStatus, COMPAT_RULES, type CompatResult } from '@sotf/contracts/compat';

/** What the weight of a report depends on (the reporter's current account flags). */
export interface ReporterFacts {
  /** The reporter is the author of the mod (their report is the "tested" declaration). */
  isModAuthor: boolean;
  verifiedCreator: boolean;
  trustLevel: number;
}

/**
 * Weight of one reporter (PLAN §7.10): the mod author declaring "tested" = 2, verified creator =
 * 1.5, trust level 0 = 0.5, everyone else = 1. The first matching rule wins.
 */
export function reporterWeight(facts: ReporterFacts): number {
  const w = COMPAT_RULES.weights;
  if (facts.isModAuthor) return w.authorTested;
  if (facts.verifiedCreator) return w.verifiedCreator;
  if (facts.trustLevel <= 0) return w.trustLevel0;
  return w.default;
}

/** One visible report of a version on a build, as the aggregate sees it. */
export interface AggregateReport {
  userId: number;
  result: CompatResult;
  /** Weight of the reporter (see `reporterWeight`). */
  weight: number;
}

export interface AggregateInput {
  reports: readonly AggregateReport[];
  /** The author declared the version tested on this build when publishing it. */
  authorTested: boolean;
  /** Author of the mod (null when orphaned). */
  authorId: number | null;
}

export interface AggregateOutput {
  /** Raw report counts (what the UI prints: "Works on 1.0.4 (32)"). */
  works: number;
  partial: number;
  broken: number;
  /** Weighted totals the status is computed from. */
  weighted: { works: number; partial: number; broken: number };
  /** Weighted share of "works" (0–1), null without any weighted vote. */
  weightedScore: number | null;
  status: CompatStatus;
}

const round3 = (n: number) => Math.round(n * 1000) / 1000;

/**
 * Weighted aggregate of one version × build.
 *
 * - A user may file one report per mode (singleplayer, host, client, dedicated); their weight is
 *   split evenly between their reports, so one person never counts more than their weight (four
 *   modes do not make four votes).
 * - The author's "tested on build X" declaration counts as a "works" vote of weight 2 unless the
 *   author also filed reports for that build, which then replace the declaration.
 * - `< 3` weighted votes → `untested`; `≥ 70 %` works → `works`; `≥ 50 %` broken → `broken`;
 *   otherwise `mixed` (`aggregateCompatStatus`).
 */
export function aggregateReports(input: AggregateInput): AggregateOutput {
  const perUser = new Map<number, number>();
  for (const r of input.reports) perUser.set(r.userId, (perUser.get(r.userId) ?? 0) + 1);

  const counts = { works: 0, partial: 0, broken: 0 };
  const weighted = { works: 0, partial: 0, broken: 0 };
  for (const r of input.reports) {
    counts[r.result] += 1;
    weighted[r.result] += Math.max(0, r.weight) / (perUser.get(r.userId) ?? 1);
  }
  const authorReported = input.authorId !== null && perUser.has(input.authorId);
  if (input.authorTested && !authorReported) weighted.works += COMPAT_RULES.weights.authorTested;

  const total = weighted.works + weighted.partial + weighted.broken;
  return {
    ...counts,
    weighted: { works: round3(weighted.works), partial: round3(weighted.partial), broken: round3(weighted.broken) },
    weightedScore: total > 0 ? round3(weighted.works / total) : null,
    status: aggregateCompatStatus(weighted),
  };
}

/** A game build as the rules need it (`releasedAt` as `YYYY-MM-DD`). */
export interface BuildFacts {
  id: number;
  releasedAt: string;
  isBreaking: boolean;
}

/** Builds newest first: release date, then id. */
export function compareBuildsNewestFirst(a: BuildFacts, b: BuildFacts): number {
  if (a.releasedAt !== b.releasedAt) return a.releasedAt < b.releasedAt ? 1 : -1;
  return b.id - a.id;
}

/** The latest `isBreaking` build, or null. */
export function latestBreakingBuild<B extends BuildFacts>(builds: readonly B[]): B | null {
  return [...builds].filter((b) => b.isBreaking).sort(compareBuildsNewestFirst)[0] ?? null;
}

export interface OutdatedInput {
  /** Release instant of the latest public version (null: the mod has no version). */
  latestReleasedAt: Date | null;
  /** The latest `isBreaking` build (null: none registered). */
  breaking: BuildFacts | null;
  /**
   * Release dates (`YYYY-MM-DD`) of the builds on which the latest version has a positive signal:
   * at least one "works" report, or the author's "tested" declaration.
   */
  positiveBuildDates: readonly string[];
}

/**
 * "Possibly outdated" (PLAN §7.10): the latest version is older than the latest breaking build
 * and has no positive report on that build or a later one.
 */
export function isPossiblyOutdated(input: OutdatedInput): boolean {
  const { latestReleasedAt, breaking } = input;
  if (!latestReleasedAt || !breaking) return false;
  const breakingStart = Date.parse(`${breaking.releasedAt}T00:00:00.000Z`);
  if (!Number.isFinite(breakingStart) || latestReleasedAt.getTime() >= breakingStart) return false;
  return !input.positiveBuildDates.some((day) => day >= breaking.releasedAt);
}

/** Share (0–1, 2 decimals) of `part` in `total` (0 when empty). */
export function shareOf(part: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((part / total) * 100) / 100;
}
