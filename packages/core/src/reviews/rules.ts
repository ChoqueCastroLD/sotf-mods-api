/**
 * Pure rules of reviews (PLAN §7.7): the "helpful" order (Wilson lower bound of the votes), the
 * Bayesian mean, the public-stars threshold and the summary of a mod. No I/O.
 */
import { bayesianRating, REVIEW_RULES, type ReviewsSummaryDTO } from '@sotf/contracts/reviews';
import { WILSON_Z, wilsonLowerBound } from '../comments/rules.ts';

export { bayesianRating, REVIEW_RULES, wilsonLowerBound };

/**
 * Integer sort key of the "helpful" order: the Wilson lower bound of helpful votes over all votes,
 * scaled to 1e9 and rounded, so the keyset cursor compares integers (never floats).
 */
export function helpfulKey(helpful: number, unhelpful: number): number {
  return Math.round(wilsonLowerBound(helpful, helpful + unhelpful, WILSON_Z) * 1e9);
}

/**
 * SQL expression of {@link helpfulKey} over the columns `h` and `u` (same formula, evaluated in
 * double precision by PostgreSQL; the unit test checks both agree).
 */
export function helpfulKeySql(h: string, u: string): string {
  const n = `(${h} + ${u})::float8`;
  const p = `(${h}::float8 / NULLIF(${n}, 0))`;
  const z2 = (WILSON_Z * WILSON_Z).toString();
  return `(CASE WHEN (${h} + ${u}) <= 0 THEN 0 ELSE round(greatest(0, ((${p} + ${z2} / (2 * ${n})) - ${WILSON_Z} * sqrt((${p} * (1 - ${p}) + ${z2} / (4 * ${n})) / ${n})) / (1 + ${z2} / ${n})) * 1e9)::bigint END)`;
}

export interface RatingAggregate {
  count: number;
  sum: number;
  histogram: Record<1 | 2 | 3 | 4 | 5, number>;
}

/** `ReviewsSummaryDTO` of the visible reviews of a mod. */
export function summaryOf(aggregate: RatingAggregate, siteMean: number): ReviewsSummaryDTO {
  const { count, sum, histogram } = aggregate;
  const average = count > 0 ? Math.round((sum / count) * 100) / 100 : null;
  const bayes = Math.round(bayesianRating(sum, count, siteMean) * 100) / 100;
  return {
    count,
    average,
    bayes: Math.min(5, Math.max(0, bayes)),
    showStars: count >= REVIEW_RULES.publicStarsMinReviews,
    histogram: {
      '1': histogram[1],
      '2': histogram[2],
      '3': histogram[3],
      '4': histogram[4],
      '5': histogram[5],
    },
  };
}

/** Site mean `m` of the Bayesian prior: the mean of every visible review, 4.0 without reviews. */
export function siteMeanOf(avg: number | null | undefined): number {
  return typeof avg === 'number' && Number.isFinite(avg) && avg >= 1 && avg <= 5 ? avg : REVIEW_RULES.defaultSiteMean;
}
