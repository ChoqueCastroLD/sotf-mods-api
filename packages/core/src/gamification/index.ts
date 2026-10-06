/**
 * Gamification domain, read side only (the Classic redesign removed XP, badges, milestones and
 * awards as features): the stored badge catalog and a user's earned badges, the current awards,
 * tier and rank references, and the onboarding state. Nothing here awards anything. See README.md.
 */
export * from './awards.ts';
export * from './catalog.ts';
export * from './onboarding.ts';
export * from './queries.ts';
