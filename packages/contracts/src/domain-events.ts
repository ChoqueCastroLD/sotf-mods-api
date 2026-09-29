/**
 * Domain events (PLAN §2.6 "Eventos de dominio", §2.7 purge map, §7.2, §7.3). Core publishes them
 * with `emit(tx, event)` *inside* the transaction (pg-boss `send` with the transaction executor);
 * consumers are notifications, gamification, CDN purge, IndexNow, Discord and statistics.
 *
 * Envelope: `{ id (uuid v7), type, occurredAt, actorId, payload }`. Payloads carry ids and the few
 * values consumers need to route the event (author, category, kind) so they never have to re-read
 * rows that may have changed; they are never user-visible text.
 */
import { z } from 'zod';
import {
  AwardKind,
  CategorySlug,
  CompatStatus,
  EntityId,
  IsoDate,
  IsoDateTime,
  Locale,
  ModKind,
  ModStatus,
  Uuid,
  VersionChannel,
  VersionStatus,
  VersionString,
} from './common.ts';
import { CompatResult } from './compat.ts';
import { KitVisibility } from './kits.ts';
import { ReportTargetType } from './moderation.ts';
import { ScanVerdict } from './versions.ts';

const modRouting = { modId: EntityId, authorId: EntityId, kind: ModKind, categorySlug: CategorySlug.nullable() };

/** Payload schema of every event type. Adding a type is additive; changing one is not. */
export const DOMAIN_EVENT_PAYLOADS = {
  // Catalog and publishing
  'mod.published': z.object({ ...modRouting, nsfw: z.boolean() }),
  'mod.updated': z.object({ ...modRouting, fields: z.array(z.string()).describe('Changed listing fields') }),
  'mod.status_changed': z.object({
    ...modRouting,
    from: ModStatus,
    to: ModStatus,
    reason: z.string().nullable(),
    templateKey: z.string().nullable(),
  }),
  'version.published': z.object({
    ...modRouting,
    versionId: EntityId,
    version: VersionString,
    channel: VersionChannel,
    notifyFollowers: z.boolean(),
    nsfw: z.boolean(),
  }),
  'version.status_changed': z.object({
    ...modRouting,
    versionId: EntityId,
    from: VersionStatus,
    to: VersionStatus,
    reason: z.string().nullable(),
  }),
  'scan.completed': z.object({
    modId: EntityId,
    versionId: EntityId,
    verdict: ScanVerdict,
    positives: z.number().int().nonnegative().nullable(),
  }),
  // Comments
  'comment.created': z.object({
    commentId: EntityId,
    modId: EntityId,
    modAuthorId: EntityId,
    authorId: EntityId,
    parentId: EntityId.nullable(),
    parentAuthorId: EntityId.nullable(),
    mentionedUserIds: z.array(EntityId),
    isBugReport: z.boolean(),
  }),
  'comment.updated': z.object({
    commentId: EntityId,
    modId: EntityId,
    authorId: EntityId,
    mentionedUserIds: z.array(EntityId),
  }),
  'comment.deleted': z.object({ commentId: EntityId, modId: EntityId, authorId: EntityId }),
  'comment.visibility_changed': z.object({
    commentId: EntityId,
    modId: EntityId,
    authorId: EntityId.nullable(),
    hidden: z.boolean(),
  }),
  'comment.pinned': z.object({ commentId: EntityId, modId: EntityId, authorId: EntityId, pinned: z.boolean() }),
  'comment.solution_marked': z.object({
    commentId: EntityId,
    modId: EntityId,
    authorId: EntityId,
    marked: z.boolean(),
  }),
  'comment.bug_resolved': z.object({ commentId: EntityId, modId: EntityId, authorId: EntityId, versionId: EntityId }),
  // Reviews
  'review.created': z.object({
    reviewId: EntityId,
    modId: EntityId,
    modAuthorId: EntityId,
    authorId: EntityId,
    rating: z.number().int().min(1).max(5),
    bodyLength: z.number().int().nonnegative(),
  }),
  'review.updated': z.object({
    reviewId: EntityId,
    modId: EntityId,
    authorId: EntityId,
    rating: z.number().int().min(1).max(5),
    bodyLength: z.number().int().nonnegative(),
  }),
  'review.deleted': z.object({ reviewId: EntityId, modId: EntityId, authorId: EntityId }),
  'review.visibility_changed': z.object({
    reviewId: EntityId,
    modId: EntityId,
    authorId: EntityId.nullable(),
    hidden: z.boolean(),
  }),
  'review.voted': z.object({
    reviewId: EntityId,
    modId: EntityId,
    reviewAuthorId: EntityId,
    voterId: EntityId,
    value: z.union([z.literal(1), z.literal(-1), z.literal(0)]),
  }),
  'review.replied': z.object({ reviewId: EntityId, modId: EntityId, reviewAuthorId: EntityId, modAuthorId: EntityId }),
  // Follows
  'follow.mod_created': z.object({ modId: EntityId, userId: EntityId, notify: z.boolean() }),
  'follow.mod_deleted': z.object({ modId: EntityId, userId: EntityId }),
  'follow.user_created': z.object({ followerId: EntityId, followeeId: EntityId }),
  'follow.user_deleted': z.object({ followerId: EntityId, followeeId: EntityId }),
  // Kits
  'kit.created': z.object({
    kitId: EntityId,
    ownerId: EntityId,
    visibility: KitVisibility,
    forkedFromId: EntityId.nullable(),
  }),
  'kit.updated': z.object({
    kitId: EntityId,
    ownerId: EntityId,
    visibility: KitVisibility,
    revision: z.number().int().min(1),
  }),
  'kit.deleted': z.object({ kitId: EntityId, ownerId: EntityId }),
  // Compatibility
  'compat.report_created': z.object({
    reportId: EntityId,
    userId: EntityId,
    modId: EntityId,
    modVersionId: EntityId,
    gameBuildId: EntityId,
    result: CompatResult,
  }),
  'compat.report_acknowledged': z.object({
    reportId: EntityId,
    modId: EntityId,
    reporterId: EntityId,
    fixedInVersionId: EntityId.nullable(),
  }),
  'compat.aggregate_changed': z.object({
    modId: EntityId,
    modAuthorId: EntityId,
    modVersionId: EntityId,
    gameBuildId: EntityId,
    isCurrentBuild: z.boolean(),
    from: CompatStatus.nullable(),
    to: CompatStatus,
  }),
  'game_build.created': z.object({
    gameBuildId: EntityId,
    label: z.string(),
    isBreaking: z.boolean(),
    isCurrent: z.boolean(),
  }),
  // Users
  'user.registered': z.object({ userId: EntityId, locale: Locale }),
  'user.email_verified': z.object({ userId: EntityId }),
  'user.profile_updated': z.object({
    userId: EntityId,
    completed: z.boolean().describe('Profile now counts as complete (XP once)'),
  }),
  'user.onboarding_completed': z.object({ userId: EntityId }),
  // Moderation
  'report.created': z.object({
    reportId: EntityId,
    reporterId: EntityId,
    targetType: ReportTargetType,
    targetId: EntityId,
  }),
  'report.resolved': z.object({ reportId: EntityId, reporterId: EntityId, action: z.enum(['resolve', 'dismiss']) }),
  'sanction.created': z.object({
    sanctionId: EntityId,
    userId: EntityId,
    kind: z.enum(['suspend', 'ban', 'comment_mute', 'upload_mute']),
  }),
  // Gamification
  'milestone.reached': z.object({
    modId: EntityId,
    authorId: EntityId,
    threshold: z.number().int().positive(),
    reachedAt: IsoDateTime,
  }),
  'badge.awarded': z.object({
    userId: EntityId,
    badgeKey: z.string(),
    contextKey: z.string(),
    silent: z.boolean().describe('Retroactive (B16): no individual signal'),
  }),
  'award.created': z.object({
    awardId: EntityId,
    kind: AwardKind,
    modId: EntityId,
    authorId: EntityId,
    periodStart: IsoDate,
  }),
  // Content
  'announcement.published': z.object({ announcementId: EntityId }),
} as const;

export type DomainEventType = keyof typeof DOMAIN_EVENT_PAYLOADS;
export const DOMAIN_EVENT_TYPES = Object.keys(DOMAIN_EVENT_PAYLOADS) as [DomainEventType, ...DomainEventType[]];
export const DomainEventTypeSchema = z.enum(DOMAIN_EVENT_TYPES);

export type DomainEventPayload<T extends DomainEventType> = z.output<(typeof DOMAIN_EVENT_PAYLOADS)[T]>;

/** A domain event of type `T`. */
export interface DomainEventOf<T extends DomainEventType> {
  id: string;
  type: T;
  occurredAt: string;
  /** User who caused it (null for system jobs). */
  actorId: number | null;
  payload: DomainEventPayload<T>;
}

/** Union of every domain event. */
export type DomainEvent = { [T in DomainEventType]: DomainEventOf<T> }[DomainEventType];

const envelope = { id: Uuid, occurredAt: IsoDateTime, actorId: EntityId.nullable() };

const eventSchemas = DOMAIN_EVENT_TYPES.map((type) =>
  z.object({ ...envelope, type: z.literal(type), payload: DOMAIN_EVENT_PAYLOADS[type] }),
) as unknown as [z.ZodObject, z.ZodObject, ...z.ZodObject[]];

/** Discriminated union of every event (by `type`). */
export const DomainEventSchema = z.discriminatedUnion('type', eventSchemas) as unknown as z.ZodType<DomainEvent>;

/** Validates an event read from a queue. */
export function parseDomainEvent(value: unknown): DomainEvent {
  return DomainEventSchema.parse(value);
}

/** Builds and validates an event (`id` is a uuid v7 generated by the kernel). */
export function makeDomainEvent<T extends DomainEventType>(
  type: T,
  payload: DomainEventPayload<T>,
  meta: { id: string; occurredAt: string; actorId: number | null },
): DomainEventOf<T> {
  const event = { id: meta.id, type, occurredAt: meta.occurredAt, actorId: meta.actorId, payload };
  DomainEventSchema.parse(event);
  return event;
}

/** Type guard narrowing an event to one type. */
export function isDomainEvent<T extends DomainEventType>(
  event: DomainEvent,
  type: T,
): event is Extract<DomainEvent, { type: T }> {
  return event.type === type;
}

/**
 * One valid payload per event type (typed: adding a type without an example fails to compile).
 * Consumers use them to simulate producers that do not exist yet (PLAN §12.3 WP-43).
 */
export const DOMAIN_EVENT_EXAMPLES: { readonly [T in DomainEventType]: DomainEventPayload<T> } = {
  'mod.published': { modId: 20, authorId: 12, kind: 'mod', categorySlug: 'quality-of-life', nsfw: false },
  'mod.updated': {
    modId: 20,
    authorId: 12,
    kind: 'mod',
    categorySlug: 'quality-of-life',
    fields: ['shortDescription'],
  },
  'mod.status_changed': {
    modId: 312,
    authorId: 301,
    kind: 'mod',
    categorySlug: 'misc',
    from: 'pending',
    to: 'rejected',
    reason: 'Reupload without permission',
    templateKey: 'reupload_without_permission',
  },
  'version.published': {
    modId: 20,
    authorId: 12,
    kind: 'mod',
    categorySlug: 'quality-of-life',
    versionId: 415,
    version: '1.3.9',
    channel: 'release',
    notifyFollowers: true,
    nsfw: false,
  },
  'version.status_changed': {
    modId: 20,
    authorId: 12,
    kind: 'mod',
    categorySlug: 'quality-of-life',
    versionId: 415,
    from: 'active',
    to: 'yanked',
    reason: 'Crashes on 1.0.4',
  },
  'scan.completed': { modId: 20, versionId: 415, verdict: 'clean', positives: 0 },
  'comment.created': {
    commentId: 223,
    modId: 20,
    modAuthorId: 12,
    authorId: 301,
    parentId: 221,
    parentAuthorId: 390,
    mentionedUserIds: [12],
    isBugReport: false,
  },
  'comment.updated': { commentId: 223, modId: 20, authorId: 301, mentionedUserIds: [] },
  'comment.deleted': { commentId: 223, modId: 20, authorId: 301 },
  'comment.visibility_changed': { commentId: 216, modId: 20, authorId: 390, hidden: true },
  'comment.pinned': { commentId: 222, modId: 20, authorId: 12, pinned: true },
  'comment.solution_marked': { commentId: 222, modId: 20, authorId: 12, marked: true },
  'comment.bug_resolved': { commentId: 221, modId: 20, authorId: 390, versionId: 415 },
  'review.created': { reviewId: 77, modId: 20, modAuthorId: 12, authorId: 301, rating: 5, bodyLength: 120 },
  'review.updated': { reviewId: 77, modId: 20, authorId: 301, rating: 4, bodyLength: 140 },
  'review.deleted': { reviewId: 77, modId: 20, authorId: 301 },
  'review.visibility_changed': { reviewId: 77, modId: 20, authorId: 301, hidden: false },
  'review.voted': { reviewId: 77, modId: 20, reviewAuthorId: 301, voterId: 390, value: 1 },
  'review.replied': { reviewId: 77, modId: 20, reviewAuthorId: 301, modAuthorId: 12 },
  'follow.mod_created': { modId: 20, userId: 301, notify: true },
  'follow.mod_deleted': { modId: 20, userId: 301 },
  'follow.user_created': { followerId: 301, followeeId: 12 },
  'follow.user_deleted': { followerId: 301, followeeId: 12 },
  'kit.created': { kitId: 5, ownerId: 12, visibility: 'public', forkedFromId: null },
  'kit.updated': { kitId: 5, ownerId: 12, visibility: 'public', revision: 8 },
  'kit.deleted': { kitId: 5, ownerId: 12 },
  'compat.report_created': {
    reportId: 9001,
    userId: 301,
    modId: 20,
    modVersionId: 412,
    gameBuildId: 7,
    result: 'works',
  },
  'compat.report_acknowledged': { reportId: 9001, modId: 20, reporterId: 301, fixedInVersionId: 415 },
  'compat.aggregate_changed': {
    modId: 20,
    modAuthorId: 12,
    modVersionId: 412,
    gameBuildId: 7,
    isCurrentBuild: true,
    from: 'works',
    to: 'mixed',
  },
  'game_build.created': { gameBuildId: 8, label: '1.0.5', isBreaking: true, isCurrent: true },
  'user.registered': { userId: 4021, locale: 'es' },
  'user.email_verified': { userId: 4021 },
  'user.profile_updated': { userId: 12, completed: true },
  'user.onboarding_completed': { userId: 4021 },
  'report.created': { reportId: 44, reporterId: 301, targetType: 'comment', targetId: 216 },
  'report.resolved': { reportId: 44, reporterId: 301, action: 'resolve' },
  'sanction.created': { sanctionId: 3, userId: 390, kind: 'comment_mute' },
  'milestone.reached': { modId: 20, authorId: 12, threshold: 100_000, reachedAt: '2026-03-14T00:00:00.000Z' },
  'badge.awarded': { userId: 12, badgeKey: 'original-survivor-2023', contextKey: '', silent: true },
  'award.created': { awardId: 3, kind: 'mod_of_week', modId: 20, authorId: 12, periodStart: '2026-09-28' },
  'announcement.published': { announcementId: 2 },
};
