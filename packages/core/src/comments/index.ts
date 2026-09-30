/**
 * Comments domain (WP-41, PLAN §7.6): reads (Top/New pages, permalink threads), writes (create,
 * edit with history, soft delete, reactions, pin, solution, bug resolved in vX), link retention by
 * trust and the moderation visibility switch used by Ranger Station (WP-51).
 */
export * from './queries.ts';
export * from './rules.ts';
export * from './service.ts';
export {
  ACCOUNT_AGE_MS,
  type CommunityConfig,
  isMuted,
  isNewAccount,
  loadMember,
  loadThreadMod,
  type Member,
  type ThreadMod,
  type Viewer,
  viewerOf,
} from './shared.ts';
export * from './social-state.ts';
