/**
 * The catalog snapshot: every mod/library/build with an owner, as ready-made cards, plus the
 * taxonomy and the authors (PLAN §2.7 layer 4). With a few hundred items the whole catalog fits in
 * memory, so listings, facets (with inclusion/exclusion and disjunctive counts), related mods and
 * the Cmd+K index are computed in-process from one cached snapshot instead of one SQL statement
 * per facet. The snapshot lives in the process LRU for 60 s and is evicted by the `list:mods`,
 * `list:builds`, `mod:{id}` and `user:{id}` tags (`NOTIFY cache`).
 *
 * Numbers come from the v2 aggregates (`ModStats`, refreshed by the stats jobs) with the legacy
 * counters as fallback for rows the jobs have not reached yet (PLAN §6.8).
 */

import type { ModCardDTO } from '@sotf/contracts/catalog';
import {
  type AwardRefDTO,
  type CategoryRefDTO,
  type CompatStatus,
  CREATOR_TIER_KEYS,
  type CreatorTierKey,
  type ImageDTO,
  LOCALE_BCP47,
  LOCALES,
  type Locale,
  type ModKind,
  type ModRefDTO,
  type ModStatus,
  MULTIPLAYER_ROLES,
  type MultiplayerRole,
  PLATFORMS,
  type Platform,
  type Role,
  SURVIVOR_RANK_KEYS,
  type SurvivorRankKey,
  type UserRefDTO,
} from '@sotf/contracts/common';
import { bayesianRating } from '@sotf/contracts/reviews';
import { modPath } from '@sotf/contracts/seo';
import type { LocalizedNames, MediaVariant, UserPrivacy } from '@sotf/db';
import type { Ctx } from '../kernel/context.ts';
import { type CatalogConfig, imageDto, type MediaRow, mediaUrlForWidth, safeHttpUrl, variantUrlOnly } from './media.ts';
import { cached, num, numOrNull, rows } from './sql.ts';

// -----------------------------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------------------------

export interface CategoryInfo {
  id: number;
  slug: string;
  kind: 'mod' | 'build';
  name: string;
  names: Partial<Record<Locale, string>>;
  icon: string | null;
  sortOrder: number;
  legacySlugs: string[];
  retired: boolean;
  /** Active category this one resolves to (itself unless retired). */
  effectiveId: number;
  ref: CategoryRefDTO;
}

export interface TagInfo {
  id: number;
  slug: string;
  name: string;
  names: Partial<Record<Locale, string>>;
  group: string | null;
  isCurated: boolean;
  sortOrder: number;
}

export interface AuthorInfo {
  ref: UserRefDTO;
  privacy: Required<Pick<UserPrivacy, 'hideActivity' | 'hideRank' | 'hideKits' | 'hideFromLeaderboards'>>;
  followersCount: number;
  ratingAvg: number | null;
  hidden: boolean;
}

export interface CatalogEntry {
  id: number;
  kind: ModKind;
  manifestId: string;
  name: string;
  slug: string;
  userId: number;
  userHandle: string;
  status: ModStatus;
  nsfw: boolean;
  /** Effective (active) category id. */
  categoryId: number | null;
  tagIds: number[];
  tagSlugs: string[];
  shortDescription: string;
  downloads: number;
  downloads7d: number;
  followers: number;
  commentsCount: number;
  ratingAvg: number | null;
  ratingCount: number;
  ratingBayes: number;
  trendingScore: number;
  compatStatus: CompatStatus;
  multiplayerRole: MultiplayerRole | null;
  platform: Platform | null;
  dedicatedServer: string | null;
  hasSource: boolean;
  verifiedCreator: boolean;
  isFeatured: boolean;
  lastReleasedAt: Date;
  publishedAt: Date | null;
  createdAt: Date;
  latestVersion: string | null;
  latestChecks: string | null;
  canonicalPath: string;
  thumbnail: ImageDTO | null;
  /** 64 px variant for the Cmd+K index (processed media only). */
  thumb64Url: string | null;
  /** Lowercased, accent-free words of the name and short description (related mods). */
  words: ReadonlySet<string>;
  card: ModCardDTO;
  ref: ModRefDTO;
}

export interface CatalogSnapshot {
  loadedAt: Date;
  entries: CatalogEntry[];
  byId: ReadonlyMap<number, CatalogEntry>;
  byManifestId: ReadonlyMap<string, CatalogEntry>;
  /** Key: `${userHandle}\n${slug}` (exact). */
  byHandleSlug: ReadonlyMap<string, CatalogEntry>;
  categories: ReadonlyMap<number, CategoryInfo>;
  /** Active slugs and legacy slugs → the active category. */
  categoriesBySlug: ReadonlyMap<string, CategoryInfo>;
  tags: ReadonlyMap<number, TagInfo>;
  tagsBySlug: ReadonlyMap<string, TagInfo>;
  authors: ReadonlyMap<number, AuthorInfo>;
}

// -----------------------------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------------------------

const BCP47_TO_LOCALE = new Map<string, Locale>(
  LOCALES.flatMap((lc) => [[LOCALE_BCP47[lc].toLowerCase(), lc] as [string, Locale], [lc, lc] as [string, Locale]]),
);

/** `{ "pt-BR": {name} }` (as stored) → `{ pt: name }` (URL locales). */
export function localizedNames(i18n: LocalizedNames | null | undefined): Partial<Record<Locale, string>> {
  const out: Partial<Record<Locale, string>> = {};
  if (!i18n || typeof i18n !== 'object') return out;
  for (const [key, value] of Object.entries(i18n)) {
    const locale = BCP47_TO_LOCALE.get(key.toLowerCase());
    const name = value && typeof value === 'object' ? value.name : undefined;
    if (locale && typeof name === 'string' && name.trim() !== '') out[locale] = name.trim();
  }
  return out;
}

/** i18n key of a taxonomy term (namespace `taxonomy`). */
export function taxonomyKey(kind: 'category' | 'tag', slug: string): string {
  return `taxonomy_${kind}_${slug
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '')}`;
}

function iconName(icon: string | null): string | null {
  if (!icon) return null;
  return icon.startsWith('lucide:') ? icon.slice('lucide:'.length) : icon;
}

export function kindOf(type: string | null): ModKind {
  if (type === 'Library') return 'library';
  if (type === 'Build') return 'build';
  return 'mod';
}

const COMPAT = new Set<string>(['works', 'mixed', 'broken', 'untested']);
const ROLES = new Set<string>(MULTIPLAYER_ROLES);
const PLATFORM_SET = new Set<string>(PLATFORMS);
const TIERS = new Set<string>(CREATOR_TIER_KEYS);
const RANKS = new Set<string>(SURVIVOR_RANK_KEYS);

export function compatOf(value: string | null): CompatStatus {
  return value && COMPAT.has(value) ? (value as CompatStatus) : 'untested';
}

export function platformOf(value: string | null): Platform | null {
  return value && PLATFORM_SET.has(value) ? (value as Platform) : null;
}

export function tierOf(value: string | null | undefined): CreatorTierKey | null {
  return value && TIERS.has(value) ? (value as CreatorTierKey) : null;
}

export function rankOf(value: string | null | undefined): SurvivorRankKey | null {
  return value && RANKS.has(value) ? (value as SurvivorRankKey) : null;
}

export function roleOf(value: string | null | undefined): Role {
  return value === 'admin' || value === 'moderator' ? value : 'user';
}

/** Mean rating in the contract range (1–5) or null without reviews. */
export function ratingOf(avg: number | null, count: number): number | null {
  if (count <= 0 || avg === null || !Number.isFinite(avg) || avg <= 0) return null;
  return Math.round(Math.min(5, Math.max(1, avg)) * 100) / 100;
}

/** Lowercase words without accents (≥ 3 letters), for similarity between mods. */
export function wordsOf(text: string): Set<string> {
  const plain = text
    .normalize('NFKD')
    .replace(/\p{M}+/gu, '')
    .toLowerCase();
  const out = new Set<string>();
  for (const w of plain.split(/[^a-z0-9]+/)) if (w.length >= 3 && !STOP_WORDS.has(w)) out.add(w);
  return out;
}

const STOP_WORDS = new Set([
  'the',
  'and',
  'for',
  'with',
  'mod',
  'mods',
  'this',
  'that',
  'you',
  'your',
  'from',
  'are',
  'can',
  'sons',
  'forest',
  'sotf',
  'game',
]);

// -----------------------------------------------------------------------------------------------
// Loading
// -----------------------------------------------------------------------------------------------

interface CategoryRow {
  id: number;
  slug: string;
  name: string;
  type: string | null;
  icon: string | null;
  sortOrder: number;
  i18n: LocalizedNames | null;
  legacySlugs: string[] | null;
  retiredAt: Date | null;
}

interface TagRow {
  id: number;
  slug: string;
  name: string;
  group: string | null;
  i18n: LocalizedNames | null;
  isCurated: boolean;
  sortOrder: number;
}

interface AuthorRow {
  id: number;
  slug: string;
  name: string;
  displayName: string | null;
  imageUrl: string | null;
  verifiedCreator: boolean;
  role: string;
  privacy: UserPrivacy | null;
  deletedAt: Date | null;
  bannedAt: Date | null;
  creatorTier: string | null;
  survivorRank: string | null;
  followersCount: number | null;
  ratingAvg: number | null;
  mWidth: number | null;
  mHeight: number | null;
  mThumbhash: string | null;
  mColor: string | null;
  mVariants: MediaVariant[] | null;
  mBucket: string | null;
  mKey: string | null;
}

interface ModRow {
  id: number;
  type: string | null;
  manifestId: string;
  name: string;
  slug: string;
  userId: number;
  categoryId: number | null;
  shortDescription: string | null;
  imageUrl: string | null;
  nsfw: boolean;
  isFeatured: boolean;
  status: string;
  compatStatus: string | null;
  multiplayerRole: string | null;
  platform: string | null;
  dedicatedServer: string | null;
  sourceUrl: string | null;
  lastReleasedAt: Date;
  publishedAt: Date | null;
  createdAt: Date;
  trendingScore: number | null;
  downloads: string | number | null;
  downloads7d: string | number | null;
  followers: string | number | null;
  comments: string | number | null;
  ratingCount: string | number | null;
  ratingAvg: number | null;
  mWidth: number | null;
  mHeight: number | null;
  mThumbhash: string | null;
  mColor: string | null;
  mVariants: MediaVariant[] | null;
  mBucket: string | null;
  mKey: string | null;
  latestVersion: string | null;
  latestChecks: string | null;
}

const CATEGORIES_SQL = `
SELECT "id", "slug", "name", "type", "icon", "sortOrder", "i18n", "legacySlugs", "retiredAt"
  FROM "Category" ORDER BY "sortOrder", "id"`;

const TAGS_SQL = `
SELECT "id", "slug", "name", "group", "i18n", "isCurated", "sortOrder"
  FROM "Tag" ORDER BY "group" NULLS LAST, "sortOrder", "slug"`;

/** Media columns shared by the author and mod queries. */
const MEDIA_COLUMNS = (alias: string) => `
  ${alias}."width" AS "mWidth", ${alias}."height" AS "mHeight", ${alias}."thumbhash" AS "mThumbhash",
  ${alias}."dominantColor" AS "mColor", ${alias}."variants" AS "mVariants",
  ${alias}."sourceBucket" AS "mBucket", ${alias}."sourceKey" AS "mKey"`;

const AUTHORS_SQL = `
SELECT u."id", u."slug", u."name", u."displayName", u."imageUrl", u."verifiedCreator", u."role", u."privacy",
       u."deletedAt", u."bannedAt", s."creatorTier", s."survivorRank", s."followersCount", s."ratingAvg",
       ${MEDIA_COLUMNS('med')}
  FROM "User" u
  LEFT JOIN "UserStats" s ON s."userId" = u."id"
  LEFT JOIN "Media" med ON med."id" = u."avatarMediaId"
 WHERE EXISTS (SELECT 1 FROM "Mod" m WHERE m."userId" = u."id")`;

const MODS_SQL = `
SELECT m."id", m."type", m."mod_id" AS "manifestId", m."name", m."slug", m."userId", m."categoryId",
       m."shortDescription", m."imageUrl", m."isNSFW" AS "nsfw", m."isFeatured", m."status",
       m."compatStatus", m."multiplayerRole", m."platform", m."dedicatedServer", m."sourceUrl",
       m."lastReleasedAt", m."publishedAt", m."createdAt", m."trendingScore",
       coalesce(s."downloadsTotal", m."downloads") AS "downloads",
       coalesce(s."downloads7d", m."lastWeekDownloads") AS "downloads7d",
       coalesce(s."followers", m."favoritesCount") AS "followers",
       coalesce(s."commentsVisible", m."commentsCount") AS "comments",
       coalesce(s."reviewsVisible", m."reviewsCount", 0) AS "ratingCount",
       coalesce(s."ratingAvg", m."averageRating") AS "ratingAvg",
       ${MEDIA_COLUMNS('med')},
       lv."version" AS "latestVersion", lv."checksStatus" AS "latestChecks"
  FROM "Mod" m
  LEFT JOIN "ModStats" s ON s."modId" = m."id"
  LEFT JOIN "Media" med ON med."id" = m."thumbnailMediaId"
  LEFT JOIN LATERAL (
    SELECT v."version", v."checksStatus" FROM "ModVersion" v
     WHERE v."modId" = m."id" AND v."isLatest" AND v."status" <> 'rejected'
     ORDER BY v."id" DESC LIMIT 1
  ) lv ON true
 WHERE m."userId" IS NOT NULL
 ORDER BY m."id"`;

function mediaOf(r: {
  mWidth: number | null;
  mHeight: number | null;
  mThumbhash: string | null;
  mColor: string | null;
  mVariants: MediaVariant[] | null;
  mBucket: string | null;
  mKey: string | null;
}): MediaRow | null {
  if (r.mKey === null && r.mVariants === null) return null;
  return {
    width: r.mWidth,
    height: r.mHeight,
    thumbhash: r.mThumbhash,
    dominantColor: r.mColor,
    variants: r.mVariants,
    sourceBucket: r.mBucket,
    sourceKey: r.mKey,
  };
}

function buildCategories(list: CategoryRow[]): { byId: Map<number, CategoryInfo>; bySlug: Map<string, CategoryInfo> } {
  const byId = new Map<number, CategoryInfo>();
  for (const c of list) {
    const names = localizedNames(c.i18n);
    const name = names.en ?? c.name;
    byId.set(c.id, {
      id: c.id,
      slug: c.slug,
      kind: c.type === 'Build' ? 'build' : 'mod',
      name,
      names,
      icon: iconName(c.icon),
      sortOrder: c.sortOrder,
      legacySlugs: c.legacySlugs ?? [],
      retired: c.retiredAt !== null,
      effectiveId: c.id,
      ref: { slug: c.slug, nameKey: taxonomyKey('category', c.slug), name, icon: iconName(c.icon) },
    });
  }
  // Retired categories resolve to the active category listing their slug in "legacySlugs".
  const active = [...byId.values()].filter((c) => !c.retired);
  for (const c of byId.values()) {
    if (!c.retired) continue;
    const target = active.find((a) => a.legacySlugs.includes(c.slug));
    if (target) c.effectiveId = target.id;
  }
  const bySlug = new Map<string, CategoryInfo>();
  for (const c of byId.values()) {
    const effective = byId.get(c.effectiveId) ?? c;
    bySlug.set(c.slug, effective);
  }
  for (const c of active) for (const legacy of c.legacySlugs) if (!bySlug.has(legacy)) bySlug.set(legacy, c);
  return { byId, bySlug };
}

function buildAuthor(config: CatalogConfig, a: AuthorRow): AuthorInfo {
  const privacy = {
    hideActivity: a.privacy?.hideActivity === true,
    hideRank: a.privacy?.hideRank === true,
    hideKits: a.privacy?.hideKits === true,
    hideFromLeaderboards: a.privacy?.hideFromLeaderboards === true,
  };
  const displayName = a.displayName?.trim() || a.name;
  return {
    ref: {
      id: a.id,
      handle: a.slug,
      displayName,
      avatarUrl: mediaUrlForWidth(config, mediaOf(a), 96, a.imageUrl),
      verifiedCreator: a.verifiedCreator,
      role: roleOf(a.role),
      creatorTier: tierOf(a.creatorTier),
      survivorRank: privacy.hideRank ? null : rankOf(a.survivorRank),
    },
    privacy,
    followersCount: num(a.followersCount),
    ratingAvg: numOrNull(a.ratingAvg),
    hidden: a.deletedAt !== null || a.bannedAt !== null,
  };
}

/** Loads the snapshot from the database (uncached). */
export async function loadSnapshot(ctx: Ctx, config: CatalogConfig): Promise<CatalogSnapshot> {
  const [categoryRows, tagRows, authorRows, modRows, tagLinks, awardRows] = await Promise.all([
    rows<CategoryRow>(ctx.db, CATEGORIES_SQL),
    rows<TagRow>(ctx.db, TAGS_SQL),
    rows<AuthorRow>(ctx.db, AUTHORS_SQL),
    rows<ModRow>(ctx.db, MODS_SQL),
    rows<{ modId: number; tagId: number }>(ctx.db, `SELECT "A" AS "modId", "B" AS "tagId" FROM "_ModToTag"`),
    rows<{ id: number; kind: AwardRefDTO['kind']; modId: number; periodStart: string; periodEnd: string }>(
      ctx.db,
      `SELECT "id", "kind", "modId", "periodStart"::text AS "periodStart", "periodEnd"::text AS "periodEnd"
         FROM "Award" ORDER BY "periodStart" DESC, "id" DESC`,
    ),
  ]);

  const { byId: categories, bySlug: categoriesBySlug } = buildCategories(categoryRows);
  const tags = new Map<number, TagInfo>();
  const tagsBySlug = new Map<string, TagInfo>();
  for (const t of tagRows) {
    const names = localizedNames(t.i18n);
    const info: TagInfo = {
      id: t.id,
      slug: t.slug,
      name: names.en ?? t.name,
      names,
      group: t.group,
      isCurated: t.isCurated,
      sortOrder: t.sortOrder,
    };
    tags.set(t.id, info);
    tagsBySlug.set(t.slug, info);
  }
  const authors = new Map<number, AuthorInfo>();
  for (const a of authorRows) authors.set(a.id, buildAuthor(config, a));

  const tagsOfMod = new Map<number, number[]>();
  for (const link of tagLinks) {
    const list = tagsOfMod.get(link.modId) ?? [];
    list.push(link.tagId);
    tagsOfMod.set(link.modId, list);
  }
  const awardsOfMod = new Map<number, AwardRefDTO[]>();
  for (const a of awardRows) {
    const list = awardsOfMod.get(a.modId) ?? [];
    list.push({ id: a.id, kind: a.kind, periodStart: a.periodStart, periodEnd: a.periodEnd });
    awardsOfMod.set(a.modId, list);
  }

  const entries: CatalogEntry[] = [];
  for (const m of modRows) {
    const author = authors.get(m.userId);
    if (!author) continue;
    const kind = kindOf(m.type);
    const status = m.status as ModStatus;
    const category = m.categoryId === null ? undefined : categories.get(m.categoryId);
    const effective = category ? (categories.get(category.effectiveId) ?? category) : undefined;
    const tagIds = (tagsOfMod.get(m.id) ?? []).filter((id) => tags.has(id)).sort((a, b) => a - b);
    const tagSlugs = tagIds.map((id) => tags.get(id)?.slug ?? '').filter(Boolean);
    const media = mediaOf(m);
    const thumbnail = imageDto(config, media, m.imageUrl, null);
    const ratingCount = num(m.ratingCount);
    const ratingAvg = ratingOf(numOrNull(m.ratingAvg), ratingCount);
    const canonicalPath = modPath(kind, author.ref.handle, m.slug);
    const shortDescription = m.shortDescription ?? '';
    const compatStatus = compatOf(m.compatStatus);
    const multiplayerRole =
      m.multiplayerRole && ROLES.has(m.multiplayerRole) ? (m.multiplayerRole as MultiplayerRole) : null;
    const platform = platformOf(m.platform);
    const ref: ModRefDTO = {
      id: m.id,
      kind,
      manifestId: m.manifestId,
      name: m.name,
      slug: m.slug,
      userHandle: author.ref.handle,
      canonicalPath,
      status,
      nsfw: m.nsfw,
      thumbnailUrl: mediaUrlForWidth(config, media, 320, m.imageUrl),
    };
    const card: ModCardDTO = {
      id: m.id,
      kind,
      manifestId: m.manifestId,
      name: m.name,
      slug: m.slug,
      canonicalPath,
      userId: m.userId,
      userHandle: author.ref.handle,
      userDisplayName: author.ref.displayName,
      verifiedCreator: author.ref.verifiedCreator,
      category: effective?.ref ?? null,
      shortDescription,
      thumbnail,
      latestVersion: m.latestVersion,
      downloads: num(m.downloads),
      downloads7d: num(m.downloads7d),
      followers: num(m.followers),
      ratingAvg,
      ratingCount,
      compatStatus,
      multiplayerRole,
      platform,
      isFeatured: m.isFeatured,
      awards: awardsOfMod.get(m.id) ?? [],
      lastReleasedAt: m.lastReleasedAt.toISOString(),
      nsfw: m.nsfw,
      status,
    };
    entries.push({
      id: m.id,
      kind,
      manifestId: m.manifestId,
      name: m.name,
      slug: m.slug,
      userId: m.userId,
      userHandle: author.ref.handle,
      status,
      nsfw: m.nsfw,
      categoryId: effective?.id ?? null,
      tagIds,
      tagSlugs,
      shortDescription,
      downloads: card.downloads,
      downloads7d: card.downloads7d,
      followers: card.followers,
      commentsCount: num(m.comments),
      ratingAvg,
      ratingCount,
      ratingBayes: bayesianRating((ratingAvg ?? 0) * ratingCount, ratingCount),
      trendingScore: numOrNull(m.trendingScore) ?? 0,
      compatStatus,
      multiplayerRole,
      platform,
      dedicatedServer: m.dedicatedServer,
      hasSource: safeHttpUrl(m.sourceUrl) !== null,
      verifiedCreator: author.ref.verifiedCreator,
      isFeatured: m.isFeatured,
      lastReleasedAt: m.lastReleasedAt,
      publishedAt: m.publishedAt,
      createdAt: m.createdAt,
      latestVersion: m.latestVersion,
      latestChecks: m.latestChecks,
      canonicalPath,
      thumbnail,
      thumb64Url: variantUrlOnly(config, media, 64),
      words: wordsOf(`${m.name} ${shortDescription}`),
      card,
      ref,
    });
  }

  const byId = new Map(entries.map((e) => [e.id, e]));
  const byManifestId = new Map(entries.map((e) => [e.manifestId, e]));
  const byHandleSlug = new Map(entries.map((e) => [`${e.userHandle}\n${e.slug}`, e]));
  return {
    loadedAt: ctx.clock.now(),
    entries,
    byId,
    byManifestId,
    byHandleSlug,
    categories,
    categoriesBySlug,
    tags,
    tagsBySlug,
    authors,
  };
}

export const SNAPSHOT_TTL_MS = 60_000;

/** The cached snapshot (one per process, 60 s, evicted by listing/mod/user tags). */
export function getSnapshot(ctx: Ctx, config: CatalogConfig): Promise<CatalogSnapshot> {
  return cached<CatalogSnapshot>(ctx, { name: 'catalog:snapshot', max: 1, ttlMs: SNAPSHOT_TTL_MS }, 'all', async () => {
    const snapshot = await loadSnapshot(ctx, config);
    const tags = ['list:mods', 'list:builds', 'search-index'];
    for (const e of snapshot.entries) tags.push(`mod:${e.id}`);
    for (const id of snapshot.authors.keys()) tags.push(`user:${id}`);
    for (const c of snapshot.categories.values()) tags.push(`category:${c.slug}`);
    return { value: snapshot, tags };
  });
}

/** Display order of categories: mod categories first, then build categories, by `sortOrder`. */
export function compareCategories(a: CategoryInfo, b: CategoryInfo): number {
  if (a.kind !== b.kind) return a.kind === 'mod' ? -1 : 1;
  return a.sortOrder - b.sortOrder || a.id - b.id;
}

/** Entries shown in public listings: published, visible author, NSFW only when asked for. */
export function isListable(snapshot: CatalogSnapshot, entry: CatalogEntry, includeNsfw = false): boolean {
  if (entry.status !== 'published') return false;
  if (entry.nsfw && !includeNsfw) return false;
  return snapshot.authors.get(entry.userId)?.hidden !== true;
}
