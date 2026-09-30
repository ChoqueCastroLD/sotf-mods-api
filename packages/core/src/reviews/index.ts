/**
 * Reviews domain (WP-41, PLAN §7.7, §6.8 "Reseñas"): the cursor list (helpful/new/critical), the
 * summary (histogram, mean, Bayesian mean, ≥ 3 threshold), writes with history, "Helpful?" votes,
 * the author's public reply, the verified-download mark and the rating counters of "Mod".
 */
export * from './queries.ts';
export * from './rules.ts';
export * from './service.ts';
