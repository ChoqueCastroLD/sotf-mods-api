/**
 * Public profiles and the creators directory (PLAN §5.2 `GET /users/:handle[/…]`,
 * `GET /creators`; T0-13 privacy).
 *
 * Privacy (`User.privacy`): `hideRank` hides survivor rank and XP, `hideActivity` empties the
 * activity heatmap, `hideKits` is reported so the kits tab (WP-42) can respect it. Deleted
 * accounts answer 410, banned ones 404. Lists only contain published, non-NSFW items.
 */
import type { ActivityDayDTO, CreatorCardDTO, ModSort, UserPublicDTO, UserReviewDTO } from '@sotf/contracts/catalog';
import { decodeCursor, encodeCursor, totalPages } from '@sotf/contracts/pagination';
import { profilePath } from '@sotf/contracts/seo';
import type { MediaVariant, UserLink, UserPrivacy } from '@sotf/db';
import { renderMarkdown } from '@sotf/markdown';
import type { z } from 'zod';
import { utcDay } from '../kernel/clock.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { ogImageOf } from './build-facts.ts';
import { linksOf } from './detail.ts';
import { sortEntries } from './listing.ts';
import { type CatalogConfig, imageDto, mediaUrlForWidth } from './media.ts';
import {
  type CatalogEntry,
  type CatalogSnapshot,
  getSnapshot,
  isListable,
  rankOf,
  roleOf,
  tierOf,
} from './snapshot.ts';
import { cached, num, numOrNull, row, rows } from './sql.ts';
import { textToHtml } from './versions.ts';

/** Profile bio (≤ 500 characters of Markdown `lite`), rendered on read; null when empty. */
export function bioHtmlOf(bioMd: string | null | undefined): string | null {
  if (!bioMd?.trim()) return null;
  const html = renderMarkdown(bioMd, { profile: 'lite' }).html;
  return html === '' ? null : html;
}

type ActivityDay = z.infer<typeof ActivityDayDTO>;
type CreatorCard = z.infer<typeof CreatorCardDTO>;
type UserReview = z.infer<typeof UserReviewDTO>;

const USER_TTL_MS = 60_000;

interface UserRow {
  id: number;
  slug: string;
  name: string;
  displayName: string | null;
  imageUrl: string | null;
  role: string;
  verifiedCreator: boolean;
  createdAt: Date;
  bioMd: string | null;
  links: UserLink[] | null;
  bannerSeed: number | null;
  privacy: UserPrivacy | null;
  pinnedModIds: number[] | null;
  xp: number;
  deletedAt: Date | null;
  bannedAt: Date | null;
  aWidth: number | null;
  aHeight: number | null;
  aThumbhash: string | null;
  aColor: string | null;
  aVariants: MediaVariant[] | null;
  aBucket: string | null;
  aKey: string | null;
  bWidth: number | null;
  bHeight: number | null;
  bThumbhash: string | null;
  bColor: string | null;
  bVariants: MediaVariant[] | null;
  bBucket: string | null;
  bKey: string | null;
  modsCount: number | null;
  buildsCount: number | null;
  downloadsTotal: string | number | null;
  followersCount: number | null;
  followingCount: number | null;
  ratingAvg: number | null;
  reviewsCount: number | null;
  helpfulVotes: number | null;
  compatReportsCount: number | null;
  creatorTier: string | null;
  survivorRank: string | null;
  ogImageKey: string | null;
}

const USER_SQL = `
SELECT u."id", u."slug", u."name", u."displayName", u."imageUrl", u."role", u."verifiedCreator", u."createdAt",
       u."bioMd", u."links", u."bannerSeed", u."privacy", u."pinnedModIds", u."xp", u."deletedAt", u."bannedAt",
       u."ogImageKey",
       a."width" AS "aWidth", a."height" AS "aHeight", a."thumbhash" AS "aThumbhash", a."dominantColor" AS "aColor",
       a."variants" AS "aVariants", a."sourceBucket" AS "aBucket", a."sourceKey" AS "aKey",
       b."width" AS "bWidth", b."height" AS "bHeight", b."thumbhash" AS "bThumbhash", b."dominantColor" AS "bColor",
       b."variants" AS "bVariants", b."sourceBucket" AS "bBucket", b."sourceKey" AS "bKey",
       s."modsCount", s."buildsCount", s."downloadsTotal", s."followersCount", s."followingCount", s."ratingAvg",
       s."reviewsCount", s."helpfulVotes", s."compatReportsCount", s."creatorTier", s."survivorRank"
  FROM "User" u
  LEFT JOIN "Media" a ON a."id" = u."avatarMediaId"
  LEFT JOIN "Media" b ON b."id" = u."bannerMediaId"
  LEFT JOIN "UserStats" s ON s."userId" = u."id"
 WHERE lower(u."slug") = lower($1)
 ORDER BY (u."slug" = $1) DESC, u."id"
 LIMIT 1`;

function media(prefix: 'a' | 'b', r: UserRow) {
  const key = r[`${prefix}Key`];
  const variants = r[`${prefix}Variants`];
  if (key === null && variants === null) return null;
  return {
    width: r[`${prefix}Width`],
    height: r[`${prefix}Height`],
    thumbhash: r[`${prefix}Thumbhash`],
    dominantColor: r[`${prefix}Color`],
    variants,
    sourceBucket: r[`${prefix}Bucket`],
    sourceKey: key,
  };
}

function privacyOf(p: UserPrivacy | null) {
  return { hideActivity: p?.hideActivity === true, hideKits: p?.hideKits === true, hideRank: p?.hideRank === true };
}

/** Loads a user by handle (case-insensitive) and applies the account state (410 deleted, 404 banned). */
async function loadUser(ctx: Ctx, handle: string): Promise<UserRow> {
  // Cached 60 s per handle (tag `user:{id}`); unknown handles throw inside the loader, so they are
  // never cached.
  const user = await cached<UserRow>(
    ctx,
    { name: 'catalog:user-row', max: 2000, ttlMs: USER_TTL_MS },
    handle,
    async () => {
      const found = await row<UserRow>(ctx.db, USER_SQL, [handle]);
      if (!found) throw errors.notFound('User');
      return { value: found, tags: [`user:${found.id}`] };
    },
  );
  if (user.bannedAt) throw errors.notFound('User');
  if (user.deletedAt) throw errors.gone('This account was deleted');
  return user;
}

/** Id of a visible user (NOT_FOUND / GONE otherwise). */
export async function resolveUserId(
  ctx: Ctx,
  handle: string,
): Promise<{ id: number; handle: string; privacy: ReturnType<typeof privacyOf> }> {
  const user = await loadUser(ctx, handle);
  return { id: user.id, handle: user.slug, privacy: privacyOf(user.privacy) };
}

function listableOf(
  snapshot: CatalogSnapshot,
  userId: number,
  kinds: ReadonlyArray<CatalogEntry['kind']>,
): CatalogEntry[] {
  return snapshot.entries.filter((e) => e.userId === userId && kinds.includes(e.kind) && isListable(snapshot, e));
}

/** Public profile (cached 60 s, tag `user:{id}`). */
export async function getUserProfile(ctx: Ctx, config: CatalogConfig, handle: string): Promise<UserPublicDTO> {
  const user = await loadUser(ctx, handle);
  return cached<UserPublicDTO>(
    ctx,
    { name: 'catalog:user', max: 500, ttlMs: USER_TTL_MS },
    String(user.id),
    async () => {
      const [snapshot, badges, content] = await Promise.all([
        getSnapshot(ctx, config),
        rows<{ key: string }>(
          ctx.db,
          `SELECT b."key" FROM "UserBadge" ub JOIN "Badge" b ON b."id" = ub."badgeId"
          WHERE ub."userId" = $1 AND ub."isFeatured" AND b."retiredAt" IS NULL
          ORDER BY b."sortOrder", ub."awardedAt" DESC LIMIT 6`,
          [user.id],
        ),
        row<{ reviews: string; kits: string }>(
          ctx.db,
          `SELECT (SELECT count(*) FROM "ModReview" WHERE "userId" = $1 AND "status" = 'visible') AS reviews,
                (SELECT count(*) FROM "Kit" WHERE "ownerId" = $1 AND "visibility" = 'public' AND "deletedAt" IS NULL) AS kits`,
          [user.id],
        ),
      ]);
      const privacy = privacyOf(user.privacy);
      const mods = listableOf(snapshot, user.id, ['mod', 'library']);
      const builds = listableOf(snapshot, user.id, ['build']);
      const pinned = (user.pinnedModIds ?? [])
        .map((id) => snapshot.byId.get(id))
        .filter((e): e is CatalogEntry => e !== undefined && e.userId === user.id && isListable(snapshot, e))
        .slice(0, 3)
        .map((e) => e.card);
      const ratingAvg = numOrNull(user.ratingAvg);
      const dto: UserPublicDTO = {
        id: user.id,
        handle: user.slug,
        displayName: user.displayName?.trim() || user.name,
        canonicalPath: profilePath(user.slug),
        avatar: imageDto(config, media('a', user), user.imageUrl, null),
        banner: imageDto(config, media('b', user), null, null),
        bannerSeed: user.bannerSeed,
        bioHtml: bioHtmlOf(user.bioMd),
        links: linksOf(user.links),
        role: roleOf(user.role),
        verifiedCreator: user.verifiedCreator,
        createdAt: user.createdAt.toISOString(),
        creatorTier: tierOf(user.creatorTier),
        survivorRank: privacy.hideRank ? null : rankOf(user.survivorRank),
        xp: privacy.hideRank ? null : Math.max(0, num(user.xp)),
        stats: {
          modsCount: mods.length,
          buildsCount: builds.length,
          downloadsTotal: [...mods, ...builds].reduce((sum, e) => sum + e.downloads, 0),
          followersCount: num(user.followersCount),
          followingCount: num(user.followingCount),
          ratingAvg: ratingAvg === null ? null : Math.round(ratingAvg * 100) / 100,
          reviewsCount: num(user.reviewsCount),
          helpfulVotes: num(user.helpfulVotes),
          compatReportsCount: num(user.compatReportsCount),
        },
        pinnedMods: pinned,
        featuredBadgeKeys: badges.map((b) => b.key),
        privacy,
        hasPublicContent: mods.length + builds.length > 0 || num(content?.reviews) > 0 || num(content?.kits) > 0,
        ogImage: ogImageOf(config, user.ogImageKey),
      };
      return { value: dto, tags: [`user:${user.id}`] };
    },
  );
}

export interface PageResult<T> {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

/** Published mods/libraries (or builds) of a user, sorted and paginated. */
export async function getUserItems(
  ctx: Ctx,
  config: CatalogConfig,
  handle: string,
  kinds: ReadonlyArray<CatalogEntry['kind']>,
  query: { page: number; pageSize: number; sort: ModSort },
): Promise<{ userId: number; page: PageResult<CatalogEntry['card']> }> {
  const user = await loadUser(ctx, handle);
  const snapshot = await getSnapshot(ctx, config);
  const items = sortEntries(
    listableOf(snapshot, user.id, kinds),
    query.sort,
    query.sort === 'name' ? 'asc' : 'desc',
    undefined,
  );
  const start = (query.page - 1) * query.pageSize;
  return {
    userId: user.id,
    page: {
      items: items.slice(start, start + query.pageSize).map((e) => e.card),
      page: query.page,
      pageSize: query.pageSize,
      total: items.length,
      totalPages: totalPages(items.length, query.pageSize),
    },
  };
}

interface ReviewRow {
  id: number;
  modId: number;
  rating: number;
  title: string;
  message: string;
  bodyHtml: string | null;
  modVersionId: number | null;
  version: string | null;
  isVerifiedDownload: boolean;
  helpfulCount: number;
  unhelpfulCount: number;
  authorReplyHtml: string | null;
  authorRepliedAt: Date | null;
  createdAt: Date;
  editedAt: Date | null;
}

/** Visible reviews written by a user, newest first (cursor `createdAt|id`). */
export async function getUserReviews(
  ctx: Ctx,
  config: CatalogConfig,
  handle: string,
  query: { cursor?: string; limit: number },
): Promise<{ userId: number; items: UserReview[]; nextCursor: string | null }> {
  const user = await loadUser(ctx, handle);
  let after: { createdAt: string; id: number } | null = null;
  if (query.cursor) {
    const decoded = decodeCursor(query.cursor);
    if (!decoded || !/^\d+$/.test(decoded.id))
      throw errors.validation('Invalid cursor', [{ path: 'cursor', message: 'invalid cursor' }]);
    after = { createdAt: decoded.createdAt, id: Number(decoded.id) };
  }
  const snapshot = await getSnapshot(ctx, config);
  const author = snapshot.authors.get(user.id)?.ref ?? {
    id: user.id,
    handle: user.slug,
    displayName: user.displayName?.trim() || user.name,
    avatarUrl: mediaUrlForWidth(config, media('a', user), 96, user.imageUrl),
    verifiedCreator: user.verifiedCreator,
    role: roleOf(user.role),
    creatorTier: tierOf(user.creatorTier),
    survivorRank: privacyOf(user.privacy).hideRank ? null : rankOf(user.survivorRank),
  };
  // Fetch a few extra rows: reviews of mods that are not public are skipped after the query.
  const found = await rows<ReviewRow>(
    ctx.db,
    `SELECT r."id", r."modId", r."rating", r."title", r."message", r."bodyHtml", r."modVersionId", v."version",
            r."isVerifiedDownload", r."helpfulCount", r."unhelpfulCount", r."authorReplyHtml", r."authorRepliedAt",
            r."createdAt", r."editedAt"
       FROM "ModReview" r LEFT JOIN "ModVersion" v ON v."id" = r."modVersionId"
      WHERE r."userId" = $1 AND r."status" = 'visible' AND r."modId" IS NOT NULL
        AND ($2::timestamp IS NULL OR (r."createdAt", r."id") < ($2::timestamp, $3::int))
      ORDER BY r."createdAt" DESC, r."id" DESC
      LIMIT $4`,
    [user.id, after ? after.createdAt.replace('Z', '') : null, after?.id ?? 0, query.limit + 1],
  );
  const hasMore = found.length > query.limit;
  const page = found.slice(0, query.limit);
  const items: UserReview[] = [];
  for (const r of page) {
    const entry = snapshot.byId.get(r.modId);
    if (!entry || !['published', 'unlisted', 'archived'].includes(entry.status)) continue;
    const rating = Math.min(5, Math.max(1, Math.round(r.rating)));
    items.push({
      id: r.id,
      modId: r.modId,
      rating,
      title: r.title?.trim() ? r.title.trim().slice(0, 80) : null,
      bodyHtml: r.bodyHtml ?? (r.message?.trim() ? textToHtml(r.message) : null),
      author,
      modVersion: r.modVersionId !== null && r.version ? { id: r.modVersionId, version: r.version.slice(0, 64) } : null,
      isVerifiedDownload: r.isVerifiedDownload,
      helpfulCount: num(r.helpfulCount),
      unhelpfulCount: num(r.unhelpfulCount),
      authorReply:
        r.authorReplyHtml && r.authorRepliedAt
          ? { bodyHtml: r.authorReplyHtml, repliedAt: r.authorRepliedAt.toISOString() }
          : null,
      status: 'visible',
      createdAt: r.createdAt.toISOString(),
      editedAt: r.editedAt ? r.editedAt.toISOString() : null,
      mod: entry.ref,
    });
  }
  const last = page[page.length - 1];
  return {
    userId: user.id,
    items,
    nextCursor: hasMore && last ? encodeCursor({ createdAt: last.createdAt.toISOString(), id: last.id }) : null,
  };
}

/** Last 12 months of contributions (empty when the user hides their activity). */
export async function getUserActivity(
  ctx: Ctx,
  handle: string,
): Promise<{ userId: number; from: string; to: string; days: ActivityDay[] }> {
  const user = await loadUser(ctx, handle);
  const today = ctx.clock.now();
  const to = utcDay(today);
  const from = utcDay(new Date(today.getTime() - 364 * 86_400_000));
  if (privacyOf(user.privacy).hideActivity) return { userId: user.id, from, to, days: [] };
  const found = await rows<{ day: string; releases: number; comments: number; reviews: number; reports: number }>(
    ctx.db,
    `SELECT "day"::text AS day, "releases", "comments", "reviews", "reports" FROM "UserActivityDaily"
      WHERE "userId" = $1 AND "day" BETWEEN $2::date AND $3::date
        AND ("releases" + "comments" + "reviews" + "reports") > 0
      ORDER BY "day"`,
    [user.id, from, to],
  );
  return {
    userId: user.id,
    from,
    to,
    days: found.map((d) => ({
      day: d.day,
      releases: num(d.releases),
      comments: num(d.comments),
      reviews: num(d.reviews),
      reports: num(d.reports),
    })),
  };
}

export type CreatorSort = 'downloads' | 'followers' | 'recent' | 'spotlight' | 'rising';

/** Creator tiers that earn the landing spotlight (PLAN §7.2). */
const SPOTLIGHT_TIERS: ReadonlySet<string> = new Set(['fortress', 'landmark']);

/** Rising creators: days since the last release, and the downloads floor that keeps noise out. */
const RISING_ACTIVE_DAYS = 90;
const RISING_MIN_DOWNLOADS = 25;

/** Deterministic weekly shuffle key (the spotlight rotates every ISO week, stable within it). */
function spotlightKey(userId: number, week: number): number {
  let x = (userId * 2_654_435_761 + week * 40_503) >>> 0;
  x ^= x >>> 16;
  x = Math.imul(x, 0x45d9f3b) >>> 0;
  x ^= x >>> 16;
  return x;
}

/** Creators directory: users with at least one published, non-NSFW item. */
export async function listCreators(
  ctx: Ctx,
  config: CatalogConfig,
  query: { page: number; pageSize: number; sort: CreatorSort },
): Promise<PageResult<CreatorCard>> {
  const snapshot = await getSnapshot(ctx, config);
  const byUser = new Map<number, CatalogEntry[]>();
  for (const e of snapshot.entries) {
    if (!isListable(snapshot, e)) continue;
    byUser.set(e.userId, [...(byUser.get(e.userId) ?? []), e]);
  }
  const now = ctx.clock.now();
  const cards: Array<{ card: CreatorCard; last: number; key: number; growth: number }> = [];
  for (const [userId, entries] of byUser) {
    const author = snapshot.authors.get(userId);
    if (!author) continue;
    const top = [...entries].sort((a, b) => b.downloads - a.downloads || a.id - b.id)[0];
    const last = Math.max(...entries.map((e) => e.lastReleasedAt.getTime()));
    const downloadsTotal = entries.reduce((sum, e) => sum + e.downloads, 0);
    const downloads7d = entries.reduce((sum, e) => sum + e.downloads7d, 0);
    cards.push({
      card: {
        user: author.ref,
        modsCount: entries.filter((e) => e.kind !== 'build').length,
        buildsCount: entries.filter((e) => e.kind === 'build').length,
        downloadsTotal,
        followersCount: author.followersCount,
        ratingAvg: author.ratingAvg === null ? null : Math.round(author.ratingAvg * 100) / 100,
        topMod: top ? top.ref : null,
        lastReleasedAt: new Date(last).toISOString(),
      },
      last,
      key: spotlightKey(userId, Math.floor(now.getTime() / (7 * 86_400_000))),
      // Share of all downloads that happened in the last 7 days: high for a creator taking off.
      growth: downloads7d / Math.max(downloadsTotal, RISING_MIN_DOWNLOADS),
    });
  }
  const recentCutoff = now.getTime() - 180 * 86_400_000;
  let pool = cards;
  if (query.sort === 'spotlight') {
    // Fortress and Landmark creators first (PLAN §7.2: their tier earns the landing spotlight),
    // then active creators (a release in the last 180 days), each group in a weekly rotation.
    const rank = (c: (typeof cards)[number]) =>
      (SPOTLIGHT_TIERS.has(c.card.user.creatorTier ?? '') ? 2 : 0) + (c.last >= recentCutoff ? 1 : 0);
    pool = [...cards].sort((a, b) => rank(b) - rank(a) || a.key - b.key);
  } else if (query.sort === 'rising') {
    // Emerging creators: released in the last 90 days and ranked by how fast their downloads
    // grow (last 7 days over all time), so a new creator taking off beats a stable giant.
    const activeCutoff = now.getTime() - RISING_ACTIVE_DAYS * 86_400_000;
    pool = cards
      .filter((c) => c.last >= activeCutoff && c.card.downloadsTotal >= RISING_MIN_DOWNLOADS)
      .sort(
        (a, b) =>
          b.growth - a.growth || b.card.downloadsTotal - a.card.downloadsTotal || a.card.user.id - b.card.user.id,
      );
  } else {
    const keyOf = {
      downloads: (c: (typeof cards)[number]) => c.card.downloadsTotal,
      followers: (c: (typeof cards)[number]) => c.card.followersCount * 1e12 + c.card.downloadsTotal,
      recent: (c: (typeof cards)[number]) => c.last,
    }[query.sort];
    pool = [...cards].sort((a, b) => keyOf(b) - keyOf(a) || a.card.user.id - b.card.user.id);
  }
  const start = (query.page - 1) * query.pageSize;
  return {
    items: pool.slice(start, start + query.pageSize).map((c) => c.card),
    page: query.page,
    pageSize: query.pageSize,
    total: pool.length,
    totalPages: totalPages(pool.length, query.pageSize),
  };
}
