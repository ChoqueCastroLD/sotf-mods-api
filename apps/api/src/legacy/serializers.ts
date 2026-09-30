/**
 * Hand-written serializers of the legacy API (PLAN §5.5): every object is built literally in the
 * key order of the golden fixtures (`research/fixtures/01-compat/`, schemas in
 * `@sotf/contracts` `legacy.gen.ts`), with the preserved quirks and the v2 guarantees:
 *
 * - numbers are never `null` (`averageRating`, `reviewsCount`, `userId`, `categoryId` → 0), because
 *   UpdatesChecker deserialises them as .NET value types;
 * - `type` is never `null` (deviation `type-null`: backfill B4 gave the 19 legacy rows a type; a row
 *   written without one by the legacy site during the coexistence comes out as `Mod`);
 * - `latestVersionSize` is always `""`; dates use `toISOString()`;
 * - list items carry `dependencies` as an array (`""` → `[]`), the detail and featured endpoints as
 *   the raw string (RedManager iterates it character by character — kept on purpose);
 * - `user.imageUrl` is `""` without an avatar.
 *
 * With `LEGACY_SNAKE_ALIASES=true` list items and the detail also get the flat snake_case fields of
 * RedManager ≤ 1.1.9 (`user_slug`, `user_name`, …) **after** the legacy keys.
 */
import type {
  LegacyCategoryRow,
  LegacyCommentRow,
  LegacyCommentThread,
  LegacyDetailMod,
  LegacyFeaturedRow,
  LegacyImageRow,
  LegacyListMod,
  LegacyModRow,
  LegacySiteStats,
  LegacyUserRow,
  LegacyUserStats,
} from '@sotf/core/legacy/index';

export interface SerializeOptions {
  /** RedManager ≤ 1.1.9 flat aliases (PLAN §5.5 "Rescates"). */
  snakeAliases: boolean;
}

function iso(date: Date): string {
  return date.toISOString();
}

/** The scalar columns of "Mod" in the legacy order. */
function modScalars(mod: LegacyModRow, dependencies: string | string[]) {
  return {
    id: mod.id,
    name: mod.name,
    slug: mod.slug,
    mod_id: mod.mod_id,
    shortDescription: mod.shortDescription,
    description: mod.description,
    dependencies,
    type: mod.type ?? 'Mod',
    modSide: mod.modSide,
    isNSFW: mod.isNSFW,
    isApproved: mod.isApproved,
    isFeatured: mod.isFeatured,
    isMultiplayerCompatible: mod.isMultiplayerCompatible,
    requiresAllPlayers: mod.requiresAllPlayers,
    lastWeekDownloads: mod.lastWeekDownloads,
    downloads: mod.downloads,
    latestVersion: mod.latestVersion,
    latestVersionSize: '',
    averageRating: mod.averageRating ?? 0,
    reviewsCount: mod.reviewsCount ?? 0,
    favoritesCount: mod.favoritesCount,
    commentsCount: mod.commentsCount,
    sourceUrl: mod.sourceUrl,
    imageUrl: mod.imageUrl,
    buildGuid: mod.buildGuid,
    buildShareVersion: mod.buildShareVersion,
    numberOfElements: mod.numberOfElements,
    lastReleasedAt: iso(mod.lastReleasedAt),
    createdAt: iso(mod.createdAt),
    updatedAt: iso(mod.updatedAt),
    userId: mod.userId ?? 0,
    categoryId: mod.categoryId ?? 0,
  };
}

/** `"A, B"` → `["A", "B"]`, `""` → `[]` (list items only). */
export function dependencyList(raw: string): string[] {
  return raw
    .split(',')
    .map((dependency) => dependency.trim())
    .filter(Boolean);
}

function userRef(mod: LegacyModRow) {
  return {
    name: mod.userName ?? '',
    slug: mod.userSlug ?? '',
    imageUrl: mod.userImageUrl ?? '',
    isTrusted: mod.userIsTrusted ?? false,
  };
}

function categoryRef(mod: LegacyModRow) {
  return mod.categorySlug === null ? null : { name: mod.categoryName ?? '', slug: mod.categorySlug };
}

function listImage(image: LegacyImageRow) {
  return { isPrimary: image.isPrimary, isThumbnail: image.isThumbnail, url: image.url };
}

function snakeAliases(mod: LegacyModRow, favorites: number) {
  return {
    user_slug: mod.userSlug ?? '',
    user_name: mod.userName ?? '',
    user_image_url: mod.userImageUrl ?? '',
    category_slug: mod.categorySlug ?? '',
    category_name: mod.categoryName ?? '',
    short_description: mod.shortDescription,
    latest_version: mod.latestVersion ?? '',
    favorites,
  };
}

/** Item of `GET /api/mods`. */
export function serializeListItem(item: LegacyListMod, options: SerializeOptions) {
  const out = {
    ...modScalars(item.mod, dependencyList(item.mod.dependencies)),
    images: item.images.map(listImage),
    user: userRef(item.mod),
    category: categoryRef(item.mod),
    versions: item.versions.map((v) => ({ version: v.version, isLatest: v.isLatest })),
    _count: { favorites: item.favorites },
  };
  return options.snakeAliases ? { ...out, ...snakeAliases(item.mod, item.favorites) } : out;
}

/** `data` of `GET /api/mods/:mod_id` and `/api/mods/slug/:u/:s`. */
export function serializeDetail(detail: LegacyDetailMod, options: SerializeOptions) {
  const out = {
    ...modScalars(detail.mod, detail.mod.dependencies),
    images: detail.images.map((image) => ({ url: image.url })),
    user: userRef(detail.mod),
    category: categoryRef(detail.mod),
    versions: detail.versions.map((v) => ({
      id: v.id,
      version: v.version,
      isLatest: v.isLatest,
      changelog: v.changelog,
      downloadUrl: v.downloadUrl,
      extension: v.extension,
      filename: v.filename,
      createdAt: iso(v.createdAt),
      updatedAt: iso(v.updatedAt),
      _count: { downloads: v.downloads },
    })),
    _count: { favorites: detail.favorites },
  };
  return options.snakeAliases ? { ...out, ...snakeAliases(detail.mod, detail.favorites) } : out;
}

/** Item of `GET /api/mods/featured`. */
export function serializeFeaturedMod(row: LegacyFeaturedRow) {
  const mod = row.mod;
  return {
    id: mod.id,
    name: mod.name,
    slug: mod.slug,
    mod_id: mod.mod_id,
    shortDescription: mod.shortDescription,
    isNSFW: mod.isNSFW,
    isApproved: mod.isApproved,
    isFeatured: mod.isFeatured,
    lastReleasedAt: iso(mod.lastReleasedAt),
    type: mod.type ?? 'Mod',
    dependencies: mod.dependencies,
    lastWeekDownloads: mod.lastWeekDownloads,
    imageUrl: mod.imageUrl,
    downloads: mod.downloads,
    favoritesCount: mod.favoritesCount,
    latestVersion: mod.latestVersion,
    category: categoryRef(mod),
    user: userRef(mod),
    images: row.images.map(listImage),
  };
}

/** Item of `GET /api/builds/featured` (no `favoritesCount`, has `_count`). */
export function serializeFeaturedBuild(row: LegacyFeaturedRow) {
  const mod = row.mod;
  return {
    id: mod.id,
    name: mod.name,
    slug: mod.slug,
    mod_id: mod.mod_id,
    shortDescription: mod.shortDescription,
    isNSFW: mod.isNSFW,
    isApproved: mod.isApproved,
    isFeatured: mod.isFeatured,
    lastReleasedAt: iso(mod.lastReleasedAt),
    type: mod.type ?? 'Build',
    dependencies: mod.dependencies,
    lastWeekDownloads: mod.lastWeekDownloads,
    imageUrl: mod.imageUrl,
    downloads: mod.downloads,
    latestVersion: mod.latestVersion,
    category: categoryRef(mod),
    user: userRef(mod),
    images: row.images.map(listImage),
    _count: { favorites: row.favorites },
  };
}

export function serializeStats(stats: LegacySiteStats) {
  return { users: stats.users, mods: stats.mods, downloads: stats.downloads, developers: stats.developers };
}

export function serializeCategory(category: LegacyCategoryRow) {
  return { id: category.id, name: category.name, slug: category.slug };
}

export function serializeUser(user: LegacyUserRow) {
  return {
    name: user.name,
    slug: user.slug,
    imageUrl: user.imageUrl ?? '',
    isTrusted: user.isTrusted,
    createdAt: iso(user.createdAt),
  };
}

export function serializeUserStats(stats: LegacyUserStats) {
  return {
    modsCount: stats.modsCount,
    totalDownloads: stats.totalDownloads,
    downloadsLastDay: stats.downloadsLastDay,
    downloadsLast7Days: stats.downloadsLast7Days,
    downloadsLast30Days: stats.downloadsLast30Days,
    totalFavorites: stats.totalFavorites,
    totalReviews: stats.totalReviews,
    averageRating: stats.averageRating,
  };
}

function commentFields(comment: LegacyCommentRow) {
  return {
    id: comment.id,
    message: comment.message,
    imageUrl: comment.imageUrl,
    createdAt: iso(comment.createdAt),
    isHidden: comment.isHidden,
    user: comment.user
      ? {
          name: comment.user.name,
          slug: comment.user.slug,
          imageUrl: comment.user.imageUrl,
          isTrusted: comment.user.isTrusted,
        }
      : null,
  };
}

export function serializeComment(thread: LegacyCommentThread) {
  return { ...commentFields(thread), replies: thread.replies.map(commentFields) };
}
