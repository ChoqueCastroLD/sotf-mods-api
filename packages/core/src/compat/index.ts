/**
 * Compatibility and Patch Radar (WP-50, PLAN §7.10): game-build registry, field reports, the
 * weighted `compat.aggregate`, `Mod.compatStatus` / `possiblyOutdated`, Patch Radar and the
 * "Did it work?" prompts.
 */
export * from './aggregate.ts';
export * from './read.ts';
export * from './reconcile.ts';
export * from './registry.ts';
export * from './reports.ts';
export * from './rules.ts';
export * from './uptime.ts';
export {
  assertRegistryAdmin,
  type CompatDeps,
  type EcosystemEntryDTO,
  type GameBuildRow,
  gameBuildDto,
  gameBuildRef,
  type LoaderReleaseDTO,
  loadEcosystem,
  loadGameBuilds,
} from './shared.ts';
