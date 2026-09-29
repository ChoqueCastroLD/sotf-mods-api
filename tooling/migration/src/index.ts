/**
 * @sotf/migration-tools (PLAN §6.9–§6.14): development seed, backfills B1–B14, verification
 * (profile, verify-snapshot, invariants), audited fixes and the delta replay. The CLIs live in
 * src/cli and are exposed as the root `db:*` / `admin:grant` scripts.
 */
export * from './backfills/index.ts';
export * from './constants.ts';
export { type GrantReport, grantRole, type RevertReport, ROLES, type Role, revertFix } from './fixes.ts';
export { type InvariantResult, internalLinks, runInvariants } from './invariants.ts';
export { REPLAY_TABLES, replayDelta, targetWatermarks } from './replay.ts';
export { buildDataset, type Dataset } from './seed/dataset.ts';
export { loadDataset } from './seed/load.ts';
export { seedDev } from './seed/run.ts';
export { loadSnapshot } from './seed/snapshot.ts';
export { assignCanonicalSlugs, canonicalSlug } from './slug.ts';
export { storageKeyFromUrl } from './storage-key.ts';
export { compareSnapshots, type Snapshot, takeSnapshot } from './verify-snapshot.ts';
