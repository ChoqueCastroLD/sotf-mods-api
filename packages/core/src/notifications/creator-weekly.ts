/**
 * Weekly creator report (PLAN §7.3 `creator.weekly_report`, §2.9 `creator.weekly`): every Monday,
 * each creator with published content gets "your mods last week: +X downloads, followers,
 * comments, reviews", the best mods of the week and the week's milestones, awards and badges
 * (gamification signals have no email of their own; they are summarised here).
 *
 * Opt-out: the `creator.weekly_report` email preference (default weekly), one click in the email.
 * Weeks are Monday–Sunday in UTC; a creator with no activity and no highlights gets no email.
 */
import { modPath } from '@sotf/contracts/seo';
import {
  award,
  badge,
  comment,
  emailOutbox,
  mod,
  modFavorite,
  modMilestone,
  modReview,
  modVersion,
  modVersionDownloadDaily,
  notificationPreference,
  user,
  userBadge,
  withTx,
} from '@sotf/db';
import { and, eq, gte, inArray, isNotNull, isNull, lt, lte, ne, notExists, or, sql } from 'drizzle-orm';
import { displayNameOf, localeOf } from '../auth/users.ts';
import { localizedUrl } from './digest.ts';
import { deliverNotificationEmail, type NotificationEmailPayload, type NotificationMailer } from './email.ts';
import { modKindOf } from './refs.ts';
import { createUnsubscribeToken, unsubscribeUrls } from './unsubscribe.ts';

export interface CreatorWeeklyDeps extends NotificationMailer {
  siteUrl: string;
  appSecret: string;
}

/** Monday (UTC, `YYYY-MM-DD`) of the last complete week before `now`. */
export function previousWeekStart(now: Date): string {
  const day = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const sinceMonday = (day.getUTCDay() + 6) % 7;
  day.setUTCDate(day.getUTCDate() - sinceMonday - 7);
  return day.toISOString().slice(0, 10);
}

function addDays(isoDay: string, days: number): string {
  const d = new Date(`${isoDay}T00:00:00.000Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

/** Creators who get the report: published content, reachable, not opted out. */
export async function weeklyReportRecipients(db: NotificationMailer['db']): Promise<number[]> {
  const rows = await db
    .selectDistinct({ id: user.id })
    .from(user)
    .innerJoin(mod, eq(mod.userId, user.id))
    .where(
      and(
        eq(mod.status, 'published'),
        isNull(user.deletedAt),
        isNull(user.bannedAt),
        isNotNull(user.emailVerifiedAt),
        notExists(
          db
            .select({ one: sql`1` })
            .from(notificationPreference)
            .where(
              and(
                eq(notificationPreference.userId, user.id),
                eq(notificationPreference.type, 'creator.weekly_report'),
                eq(notificationPreference.email, 'off'),
              ),
            ),
        ),
      ),
    );
  return rows.map((r) => r.id).sort((a, b) => a - b);
}

export type CreatorWeeklyOutcome = 'sent' | 'suppressed' | 'failed' | 'retry' | 'skipped' | 'empty' | 'opted_out';

/** Builds, queues and delivers the report of one creator for the week starting `weekStart`. */
export async function sendCreatorWeeklyReport(
  deps: CreatorWeeklyDeps,
  userId: number,
  weekStart: string,
): Promise<CreatorWeeklyOutcome> {
  const weekEnd = addDays(weekStart, 6);
  const from = new Date(`${weekStart}T00:00:00.000Z`);
  const to = new Date(`${addDays(weekStart, 7)}T00:00:00.000Z`);
  const previousStart = addDays(weekStart, -7);

  const outboxId = await withTx(deps.db, async (tx): Promise<number | CreatorWeeklyOutcome> => {
    const [account] = await tx
      .select({
        email: user.email,
        name: user.name,
        displayName: user.displayName,
        slug: user.slug,
        settings: user.settings,
        emailVerifiedAt: user.emailVerifiedAt,
        deletedAt: user.deletedAt,
        bannedAt: user.bannedAt,
      })
      .from(user)
      .where(eq(user.id, userId));
    if (!account || account.deletedAt || account.bannedAt || !account.emailVerifiedAt) return 'opted_out';
    const [pref] = await tx
      .select({ email: notificationPreference.email })
      .from(notificationPreference)
      .where(and(eq(notificationPreference.userId, userId), eq(notificationPreference.type, 'creator.weekly_report')));
    if (pref?.email === 'off') return 'opted_out';

    const mods = await tx
      .select({ id: mod.id, name: mod.name, slug: mod.slug, type: mod.type })
      .from(mod)
      .where(and(eq(mod.userId, userId), eq(mod.status, 'published')));
    if (mods.length === 0) return 'empty';
    const ids = mods.map((m) => m.id);

    const downloads = await tx
      .select({
        modId: modVersion.modId,
        current: sql<number>`coalesce(sum(${modVersionDownloadDaily.downloads}) FILTER (WHERE ${modVersionDownloadDaily.day} >= ${weekStart}::date), 0)::int`,
        previous: sql<number>`coalesce(sum(${modVersionDownloadDaily.downloads}) FILTER (WHERE ${modVersionDownloadDaily.day} < ${weekStart}::date), 0)::int`,
      })
      .from(modVersionDownloadDaily)
      .innerJoin(modVersion, eq(modVersion.id, modVersionDownloadDaily.modVersionId))
      .where(
        and(
          inArray(modVersion.modId, ids),
          gte(modVersionDownloadDaily.day, previousStart),
          lte(modVersionDownloadDaily.day, weekEnd),
        ),
      )
      .groupBy(modVersion.modId);
    const followers = await tx
      .select({ modId: modFavorite.modId, n: sql<number>`count(*)::int` })
      .from(modFavorite)
      .where(and(inArray(modFavorite.modId, ids), gte(modFavorite.createdAt, from), lt(modFavorite.createdAt, to)))
      .groupBy(modFavorite.modId);
    const comments = await tx
      .select({ modId: comment.modId, n: sql<number>`count(*)::int` })
      .from(comment)
      .where(
        and(
          inArray(comment.modId, ids),
          eq(comment.status, 'visible'),
          or(isNull(comment.userId), ne(comment.userId, userId)),
          gte(comment.createdAt, from),
          lt(comment.createdAt, to),
        ),
      )
      .groupBy(comment.modId);
    const reviews = await tx
      .select({ modId: modReview.modId, n: sql<number>`count(*)::int` })
      .from(modReview)
      .where(
        and(
          inArray(modReview.modId, ids),
          eq(modReview.status, 'visible'),
          gte(modReview.createdAt, from),
          lt(modReview.createdAt, to),
        ),
      )
      .groupBy(modReview.modId);

    const per = new Map(ids.map((id) => [id, { downloads: 0, followers: 0, comments: 0, reviews: 0 }]));
    let downloadsPrevious = 0;
    for (const r of downloads) {
      const entry = r.modId !== null ? per.get(r.modId) : undefined;
      if (entry) entry.downloads = r.current;
      downloadsPrevious += r.previous;
    }
    const put = (modId: number | null, key: 'followers' | 'comments' | 'reviews', n: number) => {
      const entry = modId !== null ? per.get(modId) : undefined;
      if (entry) entry[key] = n;
    };
    for (const r of followers) put(r.modId, 'followers', r.n);
    for (const r of comments) put(r.modId, 'comments', r.n);
    for (const r of reviews) put(r.modId, 'reviews', r.n);

    const milestones = await tx
      .select({ modId: modMilestone.modId, threshold: modMilestone.threshold })
      .from(modMilestone)
      .where(and(inArray(modMilestone.modId, ids), gte(modMilestone.reachedAt, from), lt(modMilestone.reachedAt, to)));
    const awards = await tx
      .select({ modId: award.modId, kind: award.kind })
      .from(award)
      .where(and(inArray(award.modId, ids), gte(award.createdAt, from), lt(award.createdAt, to)));
    const badges = await tx
      .select({ key: badge.key })
      .from(userBadge)
      .innerJoin(badge, eq(badge.id, userBadge.badgeId))
      .where(and(eq(userBadge.userId, userId), gte(userBadge.awardedAt, from), lt(userBadge.awardedAt, to)));
    const nameOf = new Map(mods.map((m) => [m.id, m.name]));
    const highlights: NotificationEmailPayload<'notify.creator_weekly'>['highlights'] = [
      ...milestones.map((m) => ({
        kind: 'milestone' as const,
        modName: nameOf.get(m.modId) ?? null,
        threshold: m.threshold,
        awardKind: null,
        badgeKey: null,
      })),
      ...awards.map((a) => ({
        kind: 'award' as const,
        modName: nameOf.get(a.modId) ?? null,
        threshold: null,
        awardKind: a.kind,
        badgeKey: null,
      })),
      ...badges.map((b) => ({
        kind: 'badge' as const,
        modName: null,
        threshold: null,
        awardKind: null,
        badgeKey: b.key,
      })),
    ].slice(0, 20);

    const totals = { downloads: 0, downloadsPrevious, followers: 0, comments: 0, reviews: 0 };
    for (const v of per.values()) {
      totals.downloads += v.downloads;
      totals.followers += v.followers;
      totals.comments += v.comments;
      totals.reviews += v.reviews;
    }
    const activity = totals.downloads + totals.followers + totals.comments + totals.reviews;
    if (activity === 0 && highlights.length === 0) return 'empty';

    const locale = localeOf(account);
    const top = mods
      .map((m) => ({ m, s: per.get(m.id) ?? { downloads: 0, followers: 0, comments: 0, reviews: 0 } }))
      .filter(({ s }) => s.downloads + s.followers + s.comments + s.reviews > 0)
      .sort((a, b) => b.s.downloads - a.s.downloads || b.s.followers - a.s.followers || a.m.id - b.m.id)
      .slice(0, 10)
      .map(({ m, s }) => ({
        name: m.name,
        url: localizedUrl(deps.siteUrl, locale, modPath(modKindOf(m.type), account.slug, m.slug)),
        ...s,
      }));
    const now = deps.clock.now();
    const token = createUnsubscribeToken(deps.appSecret, {
      userId,
      scope: 'type:creator.weekly_report',
      iat: Math.floor(now.getTime() / 1000),
    });
    const payload: NotificationEmailPayload<'notify.creator_weekly'> = {
      displayName: displayNameOf(account),
      weekStart,
      weekEnd,
      totals,
      mods: top,
      highlights,
      basecampUrl: localizedUrl(deps.siteUrl, locale, '/basecamp/analytics'),
      unsubscribe: unsubscribeUrls(deps.siteUrl, token, locale),
    };
    const [row] = await tx
      .insert(emailOutbox)
      .values({
        userId,
        toEmail: account.email.trim(),
        template: 'notify.creator_weekly',
        locale,
        payload: payload as unknown as Record<string, unknown>,
        dedupeKey: `creator.weekly:${userId}:${weekStart}`,
        status: 'queued',
        sendAfter: now,
      })
      .onConflictDoNothing({ target: emailOutbox.dedupeKey })
      .returning({ id: emailOutbox.id });
    return row ? row.id : 'skipped';
  });
  if (typeof outboxId !== 'number') return outboxId;
  return deliverNotificationEmail(deps, outboxId);
}
