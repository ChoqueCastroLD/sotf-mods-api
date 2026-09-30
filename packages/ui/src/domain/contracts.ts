/**
 * The DTOs the domain components render (PLAN §5.4, `@sotf/contracts`). Types only: nothing
 * of the contracts package reaches a bundle through the UI.
 */
import type { CreatorCardDTO as CreatorCardSchema } from '@sotf/contracts/catalog';

export type { ModCardDTO, ModDetailDTO } from '@sotf/contracts/catalog';
/** `z.infer` of `CreatorCardDTO` (the contracts file exports only the schema). */
export type CreatorCardDTO = (typeof CreatorCardSchema)['_output'];
export type { CommentDTO } from '@sotf/contracts/comments';
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
} from '@sotf/contracts/common';
export type { CompatAggregateDTO, CompatSummaryDTO } from '@sotf/contracts/compat';
export type { BadgeKey } from '@sotf/contracts/gamification';
export type { KitCardDTO } from '@sotf/contracts/kits';
export type { ReviewDTO, ReviewsSummaryDTO } from '@sotf/contracts/reviews';
export type { DependencyDTO, VersionDTO } from '@sotf/contracts/versions';
