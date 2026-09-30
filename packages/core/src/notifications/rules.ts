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
import { kitPath, versionsPath } from '@sotf/contracts/seo';
import {
  announcement,
  badge,
  comment,
  type Executor,
  gameBuild,
  kit,
  kitComment,
  kitFollow,
  mod,
  modFavorite,
  modReview,
  modVersion,
  user,
  userFollow,
} from '@sotf/db';
import { and, eq, inArray, isNotNull, isNull, ne, sql } from 'drizzle-orm';
import { COMPAT_PROMPT_LIMIT, COMPAT_PROMPT_WINDOW_DAYS } from '../compat/read.ts';
import { loadModRef, loadModRefs, type ModRef, plainExcerpt } from './refs.ts';

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

/** Leading integer of a version string (`3.1.0` → 3); null for non-semver labels. */
export function majorOf(version: string | null | undefined): number | null {
  const match = /^v?(\d+)/.exec((version ?? '').trim());
  return match ? Number(match[1]) : null;
}

/** `kit.added_my_mod`: authors whose mods were added to a public kit they do not own. */
async function kitAddedDrafts(
  db: Executor,
  kitId: number,
  ownerId: number,
  modIds: readonly number[],
  actorId: number | null,
): Promise<NotificationDraft[]> {
  if (modIds.length === 0) return [];
  const [row] = await db
    .select({ name: kit.name, slug: kit.slug, visibility: kit.visibility, deletedAt: kit.deletedAt, handle: user.slug })
    .from(kit)
    .innerJoin(user, eq(user.id, kit.ownerId))
    .where(eq(kit.id, kitId));
  if (row?.visibility !== 'public' || row.deletedAt !== null || !row.handle) return [];
  const refs = await loadModRefs(db, modIds);
  const path = kitPath(row.handle, row.slug);
  const drafts: NotificationDraft[] = [];
  for (const modId of new Set(modIds)) {
    const ref = refs.get(modId);
    if (ref?.status !== 'published' || ref.authorId === null || ref.authorId === ownerId) continue;
    drafts.push({
      userId: ref.authorId,
      type: 'kit.added_my_mod',
      actorId,
      target: { type: 'kit', id: kitId, title: row.name, path },
      groupKey: `kit.added_my_mod:${modId}`,
      data: { modId: ref.id, modName: ref.name, kitName: row.name },
      dedupeKey: `kit.added_my_mod:${kitId}:${modId}`,
    });
  }
  return drafts;
}

/**
 * `kit.updated_followed`: followers of a kit (with `notify`) when its owner changes it. Private and
 * deleted kits, and owners that are hidden, signal nobody. Grouped per kit while unread.
 */
async function kitFollowerDrafts(
  db: Executor,
  event: Extract<DomainEvent, { type: 'kit.updated' }>,
): Promise<NotificationDraft[]> {
  const p = event.payload;
  const [row] = await db
    .select({ name: kit.name, slug: kit.slug, visibility: kit.visibility, deletedAt: kit.deletedAt, handle: user.slug })
    .from(kit)
    .innerJoin(user, eq(user.id, kit.ownerId))
    .where(eq(kit.id, p.kitId));
  if (!row || row.visibility === 'private' || row.deletedAt !== null || !row.handle) return [];
  const followers = await db
    .select({ userId: kitFollow.userId })
    .from(kitFollow)
    .where(and(eq(kitFollow.kitId, p.kitId), eq(kitFollow.notify, true), ne(kitFollow.userId, p.ownerId)));
  const path = kitPath(row.handle, row.slug);
  return followers.map((f) => ({
    userId: f.userId,
    type: 'kit.updated_followed' as const,
    actorId: p.ownerId,
    target: { type: 'kit' as const, id: p.kitId, title: row.name, path },
    groupKey: `kit.updated_followed:${p.kitId}`,
    data: { kitName: row.name, revision: p.revision, addedCount: p.addedModIds?.length ?? 0 },
    dedupeKey: `kit.updated_followed:${p.kitId}:${p.revision}:${f.userId}`,
  }));
}

/** `kit.comment` / `kit.comment_reply`: the kit owner and the author of the parent comment. */
async function kitCommentDrafts(
  db: Executor,
  p: Extract<DomainEvent, { type: 'kit.comment_created' }>['payload'],
): Promise<NotificationDraft[]> {
  const [row] = await db
    .select({ name: kit.name, slug: kit.slug, visibility: kit.visibility, deletedAt: kit.deletedAt, handle: user.slug })
    .from(kit)
    .innerJoin(user, eq(user.id, kit.ownerId))
    .where(eq(kit.id, p.kitId));
  if (!row || row.deletedAt !== null || !row.handle) return [];
  const [body] = await db
    .select({ bodyMd: kitComment.bodyMd, status: kitComment.status })
    .from(kitComment)
    .where(eq(kitComment.id, p.commentId));
  if (body?.status !== 'visible') return [];
  const target = {
    type: 'kit_comment' as const,
    id: p.commentId,
    title: row.name,
    path: `${kitPath(row.handle, row.slug)}#kc-${p.commentId}`,
  };
  const data = { kitName: row.name, excerpt: plainExcerpt(body.bodyMd) || null };
  const seen = new Set<number>([p.authorId]);
  const drafts: NotificationDraft[] = [];
  const add = (userId: number | null, type: NotificationType) => {
    if (userId === null || seen.has(userId)) return;
    seen.add(userId);
    drafts.push({ userId, type, actorId: p.authorId, target, groupKey: null, data });
  };
  // A reply beats "comment on your kit".
  add(p.parentAuthorId, 'kit.comment_reply');
  add(p.ownerId, 'kit.comment');
  return drafts;
}

/**
 * `review.update_prompt`: a stable release of a new major version asks the reviewers of an older
 * major to update their review. One signal per review and major (idempotent across retries).
 */
async function reviewUpdatePrompts(
  db: Executor,
  p: Extract<DomainEvent, { type: 'version.published' }>['payload'],
  ref: ModRef,
): Promise<NotificationDraft[]> {
  const major = majorOf(p.version);
  if (major === null || p.channel !== 'release' || ref.kind === 'build') return [];
  const rows = await db
    .select({
      reviewId: modReview.id,
      userId: modReview.userId,
      reviewed: modVersion.version,
      reviewedString: modReview.modVersionString,
    })
    .from(modReview)
    .leftJoin(modVersion, eq(modVersion.id, modReview.modVersionId))
    .where(
      and(
        eq(modReview.modId, p.modId),
        eq(modReview.status, 'visible'),
        isNull(modReview.deletedAt),
        isNotNull(modReview.userId),
        ne(modReview.userId, p.authorId),
      ),
    );
  const drafts: NotificationDraft[] = [];
  for (const r of rows) {
    const reviewedVersion = r.reviewed ?? r.reviewedString;
    const reviewedMajor = majorOf(reviewedVersion);
    if (r.userId === null || reviewedMajor === null || reviewedMajor >= major) continue;
    drafts.push({
      userId: r.userId,
      type: 'review.update_prompt',
      actorId: null,
      target: {
        type: 'review',
        id: r.reviewId,
        title: ref.name,
        path: ref.path ? `${ref.path}/reviews#r-${r.reviewId}` : null,
      },
      groupKey: null,
      data: { modId: ref.id, modName: ref.name, version: p.version, reviewedVersion: reviewedVersion ?? null },
      dedupeKey: `review.update_prompt:${r.reviewId}:${major}`,
    });
  }
  return drafts;
}

/**
 * `compat.prompt`: a new current game build asks the people who downloaded mods recently (signed
 * in) whether they still work, the signal counterpart of `GET /me/compat-prompts`. One signal per
 * user and build; people who turned the prompts off (`settings.compatPrompts = false`) are skipped.
 */
async function compatPromptDrafts(
  db: Executor,
  p: { gameBuildId: number; label: string },
  occurredAt: string,
): Promise<NotificationDraft[]> {
  const since = new Date(new Date(occurredAt).getTime() - COMPAT_PROMPT_WINDOW_DAYS * 86_400_000);
  const result = await db.execute<{ userId: number; count: number }>(
    sql`SELECT d."userId" AS "userId", COUNT(DISTINCT v."modId")::int AS "count"
          FROM "ModDownload" d
          JOIN "ModVersion" v ON v."id" = d."modVersionId"
          JOIN "Mod" m ON m."id" = v."modId"
          JOIN "User" u ON u."id" = d."userId"
         WHERE d."userId" IS NOT NULL
           AND d."createdAt" >= ${since.toISOString()}::timestamptz
           AND m."userId" IS DISTINCT FROM d."userId"
           AND m."status" = 'published'
           AND (u."settings"->>'compatPrompts') IS DISTINCT FROM 'false'
         GROUP BY d."userId"`,
  );
  return result.rows.map((r) => ({
    userId: r.userId,
    type: 'compat.prompt' as const,
    actorId: null,
    target: { type: 'game_build' as const, id: p.gameBuildId, title: p.label, path: '/me/downloads' },
    groupKey: null,
    data: { build: p.label, count: Math.min(r.count, COMPAT_PROMPT_LIMIT) },
    dedupeKey: `compat.prompt:${p.gameBuildId}`,
  }));
}

async function requestFacts(db: Executor, requestId: number): Promise<{ title: string; path: string } | null> {
  const found = await db.execute<{ title: string }>(
    sql`SELECT "title" FROM "ModRequest" WHERE "id" = ${requestId} AND "deletedAt" IS NULL`,
  );
  const row = found.rows[0];
  return row ? { title: row.title, path: `/requests/${requestId}` } : null;
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
    case 'request.commented': {
      const p = event.payload;
      const facts = await requestFacts(db, p.requestId);
      if (!facts) return EMPTY;
      const [row] = (
        await db.execute<{ bodyMd: string }>(sql`SELECT "bodyMd" FROM "ModRequestComment" WHERE "id" = ${p.commentId}`)
      ).rows;
      const target = {
        type: 'request' as const,
        id: p.requestId,
        title: facts.title,
        path: `${facts.path}#c-${p.commentId}`,
      };
      const data = { requestTitle: facts.title, excerpt: row ? plainExcerpt(row.bodyMd) || null : null };
      const seen = new Set<number>([p.authorId]);
      const drafts: NotificationDraft[] = [];
      for (const userId of [p.requestAuthorId, p.adopterId]) {
        if (userId === null || seen.has(userId)) continue;
        seen.add(userId);
        drafts.push({
          userId,
          type: 'request.comment',
          actorId: p.authorId,
          target,
          groupKey: `request.comment:${p.requestId}`,
          data,
        });
      }
      return plan(drafts);
    }
    case 'request.adopted': {
      const p = event.payload;
      if (p.requestAuthorId === null || p.requestAuthorId === p.adopterId) return EMPTY;
      const facts = await requestFacts(db, p.requestId);
      if (!facts) return EMPTY;
      return plan([
        {
          userId: p.requestAuthorId,
          type: 'request.adopted',
          actorId: p.adopterId,
          target: { type: 'request', id: p.requestId, title: facts.title, path: facts.path },
          groupKey: null,
          data: { requestTitle: facts.title },
        },
      ]);
    }
    case 'request.fulfilled': {
      const p = event.payload;
      const [facts, ref] = await Promise.all([requestFacts(db, p.requestId), loadModRef(db, p.modId)]);
      if (!facts || !ref) return EMPTY;
      const recipients = new Set<number>(p.voterIds);
      if (p.requestAuthorId !== null) recipients.add(p.requestAuthorId);
      recipients.delete(p.fulfillerId);
      return plan(
        [...recipients].map((userId) => ({
          userId,
          type: 'request.fulfilled' as const,
          actorId: p.fulfillerId,
          target: { type: 'request' as const, id: p.requestId, title: facts.title, path: facts.path },
          groupKey: null,
          data: { requestTitle: facts.title, modId: ref.id, modName: ref.name },
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
      const ref = await loadModRef(db, p.modId);
      if (ref?.status !== 'published') return EMPTY;
      const prompts = await reviewUpdatePrompts(db, p, ref);
      if (!p.notifyFollowers) return plan(prompts);
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
      return plan([
        ...followers.map((userId) => ({
          userId,
          type: 'mod.version_published' as const,
          actorId: p.authorId,
          target: { type: 'version' as const, id: p.versionId, title: ref.name, path },
          groupKey: `mod.version_published:${p.modId}`,
          data: { modId: ref.id, modName: ref.name, version: p.version, channel: p.channel },
        })),
        ...prompts,
      ]);
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
      const prompts = p.isCurrent ? await compatPromptDrafts(db, p, event.occurredAt) : [];
      if (!p.isBreaking) return plan(prompts);
      const creators = await db
        .selectDistinct({ userId: mod.userId })
        .from(mod)
        .where(and(eq(mod.status, 'published'), isNotNull(mod.userId)));
      return plan([
        ...creators.map((r) => ({
          userId: r.userId as number,
          type: 'patch.breaking_build' as const,
          actorId: null,
          target: { type: 'game_build' as const, id: p.gameBuildId, title: p.label, path: '/patch-radar' },
          groupKey: null,
          data: { build: p.label },
          dedupeKey: `patch.breaking_build:${p.gameBuildId}`,
        })),
        ...prompts,
      ]);
    }
    case 'kit.updated': {
      const p = event.payload;
      return plan([
        ...(await kitAddedDrafts(db, p.kitId, p.ownerId, p.addedModIds ?? [], event.actorId)),
        ...(await kitFollowerDrafts(db, event)),
      ]);
    }
    case 'kit.comment_created':
      return plan(await kitCommentDrafts(db, event.payload));
    case 'kit.comment_deleted':
      return plan([], [{ targetType: 'kit_comment', targetId: event.payload.commentId }]);
    case 'kit.created': {
      const p = event.payload;
      return plan(await kitAddedDrafts(db, p.kitId, p.ownerId, p.modIds ?? [], event.actorId));
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
