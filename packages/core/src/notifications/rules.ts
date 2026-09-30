/**
 * Domain event → signals (PLAN §7.3): who is notified of what. `planForEvent` reads the few rows it
 * needs (mod titles and paths, followers, excerpts) and returns drafts; `createNotifications`
 * (service.ts) applies preferences, grouping, deduplication and the realtime notice.
 *
 * Rules shared by every type: the actor is never notified of their own action; deleted and banned
 * accounts are skipped by the service; NSFW content only reaches users who opted in.
 */
import type { DomainEvent } from '@sotf/contracts/domain-events';
import type { NOTIFICATION_TARGET_TYPES, NotificationType } from '@sotf/contracts/notifications';
import { versionsPath } from '@sotf/contracts/seo';
import {
  announcement,
  badge,
  comment,
  type Executor,
  gameBuild,
  mod,
  modFavorite,
  modReview,
  modVersion,
  user,
  userFollow,
} from '@sotf/db';
import { and, eq, inArray, isNotNull, ne, sql } from 'drizzle-orm';
import { loadModRef, type ModRef, plainExcerpt } from './refs.ts';

export type NotificationTargetType = (typeof NOTIFICATION_TARGET_TYPES)[number];
export type NotificationDataValue = string | number | boolean | null;
export type NotificationData = Record<string, NotificationDataValue>;

export interface NotificationDraft {
  userId: number;
  type: NotificationType;
  actorId: number | null;
  target: { type: NotificationTargetType; id: number; title: string; path: string | null } | null;
  /** Unread signals with the same key are folded into one ("5 new comments on AmmoUi"). */
  groupKey: string | null;
  /** Type-specific values for the message (never translated text). */
  data: NotificationData;
  /** Stable key that makes the draft idempotent across event retries (default: event id + type). */
  dedupeKey?: string;
}

/** Signals to withdraw (the comment or review they point at was deleted or hidden). */
export interface Retraction {
  targetType: NotificationTargetType;
  targetId: number;
}

/** Everyone-at-once signals are inserted with one statement instead of drafts. */
export interface Broadcast {
  type: 'system.announcement';
  targetId: number;
  data: NotificationData;
  path: string | null;
}

export interface NotificationPlan {
  drafts: NotificationDraft[];
  retractions: Retraction[];
  broadcast: Broadcast | null;
}

const EMPTY: NotificationPlan = { drafts: [], retractions: [], broadcast: null };

function plan(drafts: NotificationDraft[] = [], retractions: Retraction[] = []): NotificationPlan {
  return { drafts, retractions, broadcast: null };
}

function modTarget(ref: ModRef, suffix = ''): NotificationDraft['target'] {
  return { type: 'mod', id: ref.id, title: ref.name, path: ref.path ? `${ref.path}${suffix}` : null };
}

/** Users among `ids` that may see NSFW content (opted in). */
async function nsfwOptedIn(db: Executor, ids: readonly number[]): Promise<Set<number>> {
  if (ids.length === 0) return new Set();
  const rows = await db
    .select({ id: user.id })
    .from(user)
    .where(and(inArray(user.id, [...new Set(ids)]), sql`(${user.settings}->>'nsfwOptIn') = 'true'`));
  return new Set(rows.map((r) => r.id));
}

async function commentExcerpt(db: Executor, commentId: number): Promise<string | null> {
  const [row] = await db
    .select({ bodyMd: comment.bodyMd, message: comment.message })
    .from(comment)
    .where(eq(comment.id, commentId));
  if (!row) return null;
  return plainExcerpt(row.bodyMd ?? row.message) || null;
}

async function reviewExcerpt(db: Executor, reviewId: number, reply = false): Promise<string | null> {
  const [row] = await db
    .select({
      bodyMd: modReview.bodyMd,
      message: modReview.message,
      replyMd: modReview.authorReplyMd,
    })
    .from(modReview)
    .where(eq(modReview.id, reviewId));
  if (!row) return null;
  return plainExcerpt(reply ? row.replyMd : (row.bodyMd ?? row.message)) || null;
}

/** Plans the signals of one domain event. Events that notify nobody return an empty plan. */
export async function planForEvent(db: Executor, event: DomainEvent): Promise<NotificationPlan> {
  switch (event.type) {
    case 'comment.created': {
      const p = event.payload;
      const ref = await loadModRef(db, p.modId);
      if (!ref) return EMPTY;
      const excerpt = await commentExcerpt(db, p.commentId);
      const target = {
        type: 'comment' as const,
        id: p.commentId,
        title: ref.name,
        path: ref.path ? `${ref.path}#c-${p.commentId}` : null,
      };
      const data = { modId: ref.id, modName: ref.name, excerpt, isBugReport: p.isBugReport };
      const seen = new Set<number>([p.authorId]);
      const drafts: NotificationDraft[] = [];
      const add = (userId: number | null, type: NotificationType, groupKey: string | null) => {
        if (userId === null || seen.has(userId)) return;
        seen.add(userId);
        drafts.push({ userId, type, actorId: p.authorId, target, groupKey, data });
      };
      // One signal per person: a reply beats a mention, which beats "comment on your mod".
      add(p.parentAuthorId, 'comment.reply', p.parentId ? `comment.reply:${p.parentId}` : null);
      for (const id of p.mentionedUserIds) add(id, 'comment.mention', null);
      add(p.modAuthorId, 'comment.on_my_mod', `comment.on_my_mod:${p.modId}`);
      return plan(drafts);
    }
    case 'comment.updated': {
      // Only people newly @mentioned by the edit (a mention already signalled is deduplicated).
      const p = event.payload;
      if (p.mentionedUserIds.length === 0) return EMPTY;
      const ref = await loadModRef(db, p.modId);
      if (!ref) return EMPTY;
      const excerpt = await commentExcerpt(db, p.commentId);
      const target = {
        type: 'comment' as const,
        id: p.commentId,
        title: ref.name,
        path: ref.path ? `${ref.path}#c-${p.commentId}` : null,
      };
      return plan(
        [...new Set(p.mentionedUserIds)]
          .filter((id) => id !== p.authorId)
          .map((userId) => ({
            userId,
            type: 'comment.mention' as const,
            actorId: p.authorId,
            target,
            groupKey: null,
            data: { modId: ref.id, modName: ref.name, excerpt, isBugReport: false },
            dedupeKey: `comment.mention:${p.commentId}`,
          })),
      );
    }
    case 'comment.deleted':
      return plan([], [{ targetType: 'comment', targetId: event.payload.commentId }]);
    case 'comment.visibility_changed':
      return event.payload.hidden ? plan([], [{ targetType: 'comment', targetId: event.payload.commentId }]) : EMPTY;
    case 'review.created': {
      const p = event.payload;
      if (p.modAuthorId === p.authorId) return EMPTY;
      const ref = await loadModRef(db, p.modId);
      if (!ref) return EMPTY;
      return plan([
        {
          userId: p.modAuthorId,
          type: 'review.on_my_mod',
          actorId: p.authorId,
          target: {
            type: 'review',
            id: p.reviewId,
            title: ref.name,
            path: ref.path ? `${ref.path}/reviews#r-${p.reviewId}` : null,
          },
          groupKey: `review.on_my_mod:${p.modId}`,
          data: { modId: ref.id, modName: ref.name, rating: p.rating, excerpt: await reviewExcerpt(db, p.reviewId) },
        },
      ]);
    }
    case 'review.replied': {
      const p = event.payload;
      if (p.reviewAuthorId === p.modAuthorId) return EMPTY;
      const ref = await loadModRef(db, p.modId);
      if (!ref) return EMPTY;
      return plan([
        {
          userId: p.reviewAuthorId,
          type: 'review.reply',
          actorId: p.modAuthorId,
          target: {
            type: 'review',
            id: p.reviewId,
            title: ref.name,
            path: ref.path ? `${ref.path}/reviews#r-${p.reviewId}` : null,
          },
          groupKey: null,
          data: { modId: ref.id, modName: ref.name, excerpt: await reviewExcerpt(db, p.reviewId, true) },
          dedupeKey: `review.reply:${p.reviewId}`,
        },
      ]);
    }
    case 'review.deleted':
      return plan([], [{ targetType: 'review', targetId: event.payload.reviewId }]);
    case 'review.visibility_changed':
      return event.payload.hidden ? plan([], [{ targetType: 'review', targetId: event.payload.reviewId }]) : EMPTY;
    case 'version.published': {
      const p = event.payload;
      if (!p.notifyFollowers) return EMPTY;
      const ref = await loadModRef(db, p.modId);
      if (ref?.status !== 'published') return EMPTY;
      const rows = await db
        .selectDistinct({ userId: modFavorite.userId })
        .from(modFavorite)
        .where(
          and(
            eq(modFavorite.modId, p.modId),
            eq(modFavorite.notify, true),
            isNotNull(modFavorite.userId),
            ne(modFavorite.userId, p.authorId),
          ),
        );
      let followers = rows.map((r) => r.userId as number);
      if (p.nsfw || ref.nsfw) {
        const allowed = await nsfwOptedIn(db, followers);
        followers = followers.filter((id) => allowed.has(id));
      }
      const path = ref.authorHandle ? versionsPath(ref.kind, ref.authorHandle, ref.slug, p.version) : null;
      return plan(
        followers.map((userId) => ({
          userId,
          type: 'mod.version_published' as const,
          actorId: p.authorId,
          target: { type: 'version' as const, id: p.versionId, title: ref.name, path },
          groupKey: `mod.version_published:${p.modId}`,
          data: { modId: ref.id, modName: ref.name, version: p.version, channel: p.channel },
        })),
      );
    }
    case 'mod.published': {
      const p = event.payload;
      const ref = await loadModRef(db, p.modId);
      if (!ref) return EMPTY;
      const rows = await db
        .select({ userId: userFollow.followerId })
        .from(userFollow)
        .where(and(eq(userFollow.followeeId, p.authorId), eq(userFollow.notify, true)));
      let followers = rows.map((r) => r.userId).filter((id) => id !== p.authorId);
      if (p.nsfw || ref.nsfw) {
        const allowed = await nsfwOptedIn(db, followers);
        followers = followers.filter((id) => allowed.has(id));
      }
      return plan(
        followers.map((userId) => ({
          userId,
          type: 'creator.mod_published' as const,
          actorId: p.authorId,
          target: modTarget(ref),
          groupKey: `creator.mod_published:${p.authorId}`,
          data: { modId: ref.id, modName: ref.name, kind: ref.kind },
          dedupeKey: `creator.mod_published:${p.modId}`,
        })),
      );
    }
    case 'mod.status_changed': {
      const p = event.payload;
      if (p.from === p.to) return EMPTY;
      // The author archiving or unlisting their own mod needs no signal (removal always does).
      if (event.actorId === p.authorId && p.to !== 'removed') return EMPTY;
      const ref = await loadModRef(db, p.modId);
      if (!ref) return EMPTY;
      return plan([
        {
          userId: p.authorId,
          type: 'mod.status_changed',
          actorId: null,
          target: { type: 'mod', id: ref.id, title: ref.name, path: `/basecamp/mods/${ref.id}/details` },
          groupKey: null,
          data: {
            modId: ref.id,
            modName: ref.name,
            from: p.from,
            status: p.to,
            reason: p.reason,
            templateKey: p.templateKey,
          },
        },
      ]);
    }
    case 'compat.aggregate_changed': {
      const p = event.payload;
      if (!p.isCurrentBuild || p.from === p.to || (p.to !== 'broken' && p.to !== 'mixed')) return EMPTY;
      const ref = await loadModRef(db, p.modId);
      if (!ref) return EMPTY;
      const [build] = await db
        .select({ label: gameBuild.label })
        .from(gameBuild)
        .where(eq(gameBuild.id, p.gameBuildId));
      const [version] = await db
        .select({ version: modVersion.version })
        .from(modVersion)
        .where(eq(modVersion.id, p.modVersionId));
      return plan([
        {
          userId: p.modAuthorId,
          type: 'compat.broken_on_my_mod',
          actorId: null,
          target: modTarget(ref, '#compat'),
          groupKey: `compat.broken_on_my_mod:${p.modId}`,
          data: {
            modId: ref.id,
            modName: ref.name,
            status: p.to,
            build: build?.label ?? null,
            version: version?.version ?? null,
          },
          dedupeKey: `compat.broken:${p.modVersionId}:${p.gameBuildId}:${p.to}:${event.id}`,
        },
      ]);
    }
    case 'compat.report_acknowledged': {
      const p = event.payload;
      const ref = await loadModRef(db, p.modId);
      if (!ref || ref.authorId === p.reporterId) return EMPTY;
      let fixedIn: string | null = null;
      if (p.fixedInVersionId) {
        const [v] = await db
          .select({ version: modVersion.version })
          .from(modVersion)
          .where(eq(modVersion.id, p.fixedInVersionId));
        fixedIn = v?.version ?? null;
      }
      return plan([
        {
          userId: p.reporterId,
          type: 'compat.acknowledged',
          actorId: ref.authorId,
          target: {
            type: 'compat_report',
            id: p.reportId,
            title: ref.name,
            path: ref.path ? `${ref.path}#compat` : null,
          },
          groupKey: null,
          data: { modId: ref.id, modName: ref.name, version: fixedIn },
          dedupeKey: `compat.acknowledged:${p.reportId}`,
        },
      ]);
    }
    case 'game_build.created': {
      const p = event.payload;
      if (!p.isBreaking) return EMPTY;
      const creators = await db
        .selectDistinct({ userId: mod.userId })
        .from(mod)
        .where(and(eq(mod.status, 'published'), isNotNull(mod.userId)));
      return plan(
        creators.map((r) => ({
          userId: r.userId as number,
          type: 'patch.breaking_build' as const,
          actorId: null,
          target: { type: 'game_build' as const, id: p.gameBuildId, title: p.label, path: '/patch-radar' },
          groupKey: null,
          data: { build: p.label },
          dedupeKey: `patch.breaking_build:${p.gameBuildId}`,
        })),
      );
    }
    case 'milestone.reached': {
      const p = event.payload;
      const ref = await loadModRef(db, p.modId);
      if (!ref) return EMPTY;
      return plan([
        {
          userId: p.authorId,
          type: 'milestone.reached',
          actorId: null,
          target: modTarget(ref),
          groupKey: null,
          data: { modId: ref.id, modName: ref.name, threshold: p.threshold },
          dedupeKey: `milestone:${p.modId}:${p.threshold}`,
        },
      ]);
    }
    case 'badge.awarded': {
      const p = event.payload;
      if (p.silent) return EMPTY;
      const [row] = await db.select({ id: badge.id }).from(badge).where(eq(badge.key, p.badgeKey));
      if (!row) return EMPTY;
      return plan([
        {
          userId: p.userId,
          type: 'badge.awarded',
          actorId: null,
          target: { type: 'badge', id: row.id, title: p.badgeKey, path: '/basecamp/badges' },
          groupKey: null,
          data: { badgeKey: p.badgeKey, contextKey: p.contextKey },
          dedupeKey: `badge:${p.badgeKey}:${p.contextKey}`,
        },
      ]);
    }
    case 'award.created': {
      const p = event.payload;
      const ref = await loadModRef(db, p.modId);
      if (!ref) return EMPTY;
      return plan([
        {
          userId: p.authorId,
          type: 'award.won',
          actorId: null,
          target: modTarget(ref),
          groupKey: null,
          data: { modId: ref.id, modName: ref.name, awardKind: p.kind, periodStart: p.periodStart, awardId: p.awardId },
          dedupeKey: `award:${p.awardId}`,
        },
      ]);
    }
    case 'report.resolved': {
      const p = event.payload;
      return plan([
        {
          userId: p.reporterId,
          type: 'report.resolved',
          actorId: null,
          target: { type: 'report', id: p.reportId, title: '', path: null },
          groupKey: null,
          data: { action: p.action },
          dedupeKey: `report.resolved:${p.reportId}`,
        },
      ]);
    }
    case 'announcement.published': {
      const [row] = await db
        .select({ id: announcement.id, level: announcement.level, href: announcement.href })
        .from(announcement)
        .where(eq(announcement.id, event.payload.announcementId));
      if (!row) return EMPTY;
      const path = row.href && /^\/(?!\/)/.test(row.href) ? row.href : null;
      return {
        drafts: [],
        retractions: [],
        broadcast: { type: 'system.announcement', targetId: row.id, data: { level: row.level, href: row.href }, path },
      };
    }
    default:
      return EMPTY;
  }
}
