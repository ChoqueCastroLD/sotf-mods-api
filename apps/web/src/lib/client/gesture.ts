/** Resistance past an edge: the further you pull, the less the element follows (asymptotic to `limit`). */
export function rubberBand(distance: number, limit = 120): number {
  if (distance <= 0) return 0;
  return limit * (1 - 1 / (distance / limit + 1));
}
