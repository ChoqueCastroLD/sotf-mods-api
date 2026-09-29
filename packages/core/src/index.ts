/**
 * @sotf/core: Domain services (PLAN §2.1): the only place where business logic lives, used by the API
 * and the worker. `src/kernel/` (errors, context, clock, ids, hashing, logger, jobs and domain
 * events, cache tags, LRU caches, NOTIFY) is delivered by WP-20; each `src/<domain>/` by the WP
 * listed in tooling/scripts/ownership.json.
 */
export * from './kernel/index.ts';
