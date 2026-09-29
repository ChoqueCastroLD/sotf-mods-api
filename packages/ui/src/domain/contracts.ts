/**
 * The DTOs the domain components render (PLAN §5.4, `@sotf/contracts`). Types only: nothing
 * of the contracts package reaches a bundle through the UI.
 *
 * `@sotf/ui` does not declare `@sotf/contracts` as a dependency yet (its package.json belongs to
 * WP-00/WP-12; see docs/backlog/WP-25.md), so this is the single file that reaches the sources
 * by relative path. Once the dependency exists, replace the paths with `@sotf/contracts/<file>`.
 */
import type { CreatorCardDTO as CreatorCardSchema } from '../../../contracts/src/catalog.ts';

export type { ModCardDTO, ModDetailDTO } from '../../../contracts/src/catalog.ts';
/** `z.infer` of `CreatorCardDTO` (the contracts file exports only the schema). */
export type CreatorCardDTO = (typeof CreatorCardSchema)['_output'];
export type { CommentDTO } from '../../../contracts/src/comments.ts';
export type {
  CategoryRefDTO,
  CompatStatus,
  CreatorTierKey,
  DependencyKind,
  GameBuildRefDTO,
  ImageDTO,
  ModRefDTO,
  MultiplayerRole,
  Platform,
  SurvivorRankKey,
  UserRefDTO,
  VersionChannel,
  VersionStatus,
} from '../../../contracts/src/common.ts';
export type { CompatAggregateDTO, CompatSummaryDTO } from '../../../contracts/src/compat.ts';
export type { BadgeKey } from '../../../contracts/src/gamification.ts';
export type { KitCardDTO } from '../../../contracts/src/kits.ts';
export type { ReviewDTO, ReviewsSummaryDTO } from '../../../contracts/src/reviews.ts';
export type { DependencyDTO, VersionDTO } from '../../../contracts/src/versions.ts';
