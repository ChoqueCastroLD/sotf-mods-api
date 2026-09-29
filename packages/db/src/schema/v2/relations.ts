/**
 * Drizzle relations for the relational query API (`db.query.mod.findFirst({ with: … })`).
 * Tables with several foreign keys to the same table name their relations explicitly.
 */
import { relations } from 'drizzle-orm';
import { comment } from '../legacy/comment.ts';
import { modDownload, modFavorite, modReview } from '../legacy/engagement.ts';
import { mod } from '../legacy/mod.ts';
import { modImage, modVersion } from '../legacy/mod-version.ts';
import { category, modToTag, tag } from '../legacy/taxonomy.ts';
import { user } from '../legacy/user.ts';
import { session } from './auth.ts';
import { commentReaction, kit, kitItem, reviewVote } from './community.ts';
import { compatReport, gameBuild, modVersionCompat } from './compat.ts';
import { modDependency, securityScan, versionInspection } from './content.ts';
import { badge, userBadge } from './gamification.ts';
import { notification } from './notifications.ts';
import { modStats, userStats } from './stats.ts';
import { modSlugHistory } from './urls.ts';

export const userRelations = relations(user, ({ many, one }) => ({
  mods: many(mod, { relationName: 'modAuthor' }),
  comments: many(comment, { relationName: 'commentAuthor' }),
  reviews: many(modReview, { relationName: 'reviewAuthor' }),
  favorites: many(modFavorite),
  sessions: many(session),
  kits: many(kit),
  notifications: many(notification, { relationName: 'notificationRecipient' }),
  badges: many(userBadge),
  compatReports: many(compatReport),
  stats: one(userStats),
}));

export const modRelations = relations(mod, ({ many, one }) => ({
  user: one(user, { fields: [mod.userId], references: [user.id], relationName: 'modAuthor' }),
  approvedBy: one(user, { fields: [mod.approvedById], references: [user.id], relationName: 'modApprover' }),
  category: one(category, { fields: [mod.categoryId], references: [category.id] }),
  versions: many(modVersion),
  images: many(modImage),
  favorites: many(modFavorite),
  comments: many(comment),
  reviews: many(modReview),
  tags: many(modToTag),
  dependents: many(modDependency, { relationName: 'dependencyTarget' }),
  slugHistory: many(modSlugHistory),
  kitItems: many(kitItem),
  stats: one(modStats),
}));

export const categoryRelations = relations(category, ({ many }) => ({
  mods: many(mod),
}));

export const tagRelations = relations(tag, ({ many }) => ({
  mods: many(modToTag),
}));

export const modToTagRelations = relations(modToTag, ({ one }) => ({
  mod: one(mod, { fields: [modToTag.A], references: [mod.id] }),
  tag: one(tag, { fields: [modToTag.B], references: [tag.id] }),
}));

export const modVersionRelations = relations(modVersion, ({ many, one }) => ({
  mod: one(mod, { fields: [modVersion.modId], references: [mod.id] }),
  downloads: many(modDownload),
  dependencies: many(modDependency, { relationName: 'dependencyVersion' }),
  inspection: one(versionInspection),
  securityScans: many(securityScan),
  compat: many(modVersionCompat),
}));

export const modImageRelations = relations(modImage, ({ one }) => ({
  mod: one(mod, { fields: [modImage.modId], references: [mod.id] }),
}));

export const modDownloadRelations = relations(modDownload, ({ one }) => ({
  version: one(modVersion, { fields: [modDownload.modVersionId], references: [modVersion.id] }),
}));

export const modFavoriteRelations = relations(modFavorite, ({ one }) => ({
  user: one(user, { fields: [modFavorite.userId], references: [user.id] }),
  mod: one(mod, { fields: [modFavorite.modId], references: [mod.id] }),
}));

export const modReviewRelations = relations(modReview, ({ many, one }) => ({
  user: one(user, { fields: [modReview.userId], references: [user.id], relationName: 'reviewAuthor' }),
  mod: one(mod, { fields: [modReview.modId], references: [mod.id] }),
  votes: many(reviewVote),
}));

export const commentRelations = relations(comment, ({ many, one }) => ({
  user: one(user, { fields: [comment.userId], references: [user.id], relationName: 'commentAuthor' }),
  mod: one(mod, { fields: [comment.modId], references: [mod.id] }),
  parent: one(comment, { fields: [comment.replyId], references: [comment.id], relationName: 'commentThread' }),
  replies: many(comment, { relationName: 'commentThread' }),
  reactions: many(commentReaction),
}));

export const commentReactionRelations = relations(commentReaction, ({ one }) => ({
  comment: one(comment, { fields: [commentReaction.commentId], references: [comment.id] }),
}));

export const reviewVoteRelations = relations(reviewVote, ({ one }) => ({
  review: one(modReview, { fields: [reviewVote.reviewId], references: [modReview.id] }),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, { fields: [session.userId], references: [user.id] }),
}));

export const modDependencyRelations = relations(modDependency, ({ one }) => ({
  version: one(modVersion, {
    fields: [modDependency.modVersionId],
    references: [modVersion.id],
    relationName: 'dependencyVersion',
  }),
  dependency: one(mod, { fields: [modDependency.depModId], references: [mod.id], relationName: 'dependencyTarget' }),
}));

export const versionInspectionRelations = relations(versionInspection, ({ one }) => ({
  version: one(modVersion, { fields: [versionInspection.modVersionId], references: [modVersion.id] }),
}));

export const securityScanRelations = relations(securityScan, ({ one }) => ({
  version: one(modVersion, { fields: [securityScan.modVersionId], references: [modVersion.id] }),
}));

export const modVersionCompatRelations = relations(modVersionCompat, ({ one }) => ({
  version: one(modVersion, { fields: [modVersionCompat.modVersionId], references: [modVersion.id] }),
  gameBuild: one(gameBuild, { fields: [modVersionCompat.gameBuildId], references: [gameBuild.id] }),
}));

export const compatReportRelations = relations(compatReport, ({ one }) => ({
  user: one(user, { fields: [compatReport.userId], references: [user.id] }),
  version: one(modVersion, { fields: [compatReport.modVersionId], references: [modVersion.id] }),
  gameBuild: one(gameBuild, { fields: [compatReport.gameBuildId], references: [gameBuild.id] }),
}));

export const kitRelations = relations(kit, ({ many, one }) => ({
  owner: one(user, { fields: [kit.ownerId], references: [user.id] }),
  items: many(kitItem),
}));

export const kitItemRelations = relations(kitItem, ({ one }) => ({
  kit: one(kit, { fields: [kitItem.kitId], references: [kit.id] }),
  mod: one(mod, { fields: [kitItem.modId], references: [mod.id] }),
  pinnedVersion: one(modVersion, { fields: [kitItem.pinnedVersionId], references: [modVersion.id] }),
}));

export const notificationRelations = relations(notification, ({ one }) => ({
  user: one(user, { fields: [notification.userId], references: [user.id], relationName: 'notificationRecipient' }),
  actor: one(user, { fields: [notification.actorId], references: [user.id], relationName: 'notificationActor' }),
}));

export const userBadgeRelations = relations(userBadge, ({ one }) => ({
  user: one(user, { fields: [userBadge.userId], references: [user.id] }),
  badge: one(badge, { fields: [userBadge.badgeId], references: [badge.id] }),
}));

export const badgeRelations = relations(badge, ({ many }) => ({
  holders: many(userBadge),
}));

export const modSlugHistoryRelations = relations(modSlugHistory, ({ one }) => ({
  mod: one(mod, { fields: [modSlugHistory.modId], references: [mod.id] }),
}));

export const modStatsRelations = relations(modStats, ({ one }) => ({
  mod: one(mod, { fields: [modStats.modId], references: [mod.id] }),
}));

export const userStatsRelations = relations(userStats, ({ one }) => ({
  user: one(user, { fields: [userStats.userId], references: [user.id] }),
}));

export const gameBuildRelations = relations(gameBuild, ({ many }) => ({
  compat: many(modVersionCompat),
  reports: many(compatReport),
}));
