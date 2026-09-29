/**
 * Reader of the public API snapshot (`snapshot/public-api-2026-09-29/`, research/02 §8.2 D).
 *
 * The snapshot holds what the legacy API published on 2026-09-29: every mod (approved or not,
 * `GET /api/mods/:id`) with its versions and gallery, every comment thread, the categories and the
 * public profile fields of the 192 users that have a mod or a comment. It never contains emails,
 * hashes, favourites per user or download rows: those are synthesised (seed/synthetic.ts).
 *
 * Ids are the real ones, except commenters without a mod (the API does not expose their id): they
 * get ids from {@link COMMENTER_ID_BASE} upwards, in slug order.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { COMMENTER_ID_BASE, EXPECTED, SNAPSHOT_DIR } from '../constants.ts';

export interface SnapCategory {
  id: number;
  name: string;
  slug: string;
  type: 'Mod' | 'Build';
}

export interface SnapUser {
  id: number;
  name: string;
  slug: string;
  imageUrl: string;
  isTrusted: boolean;
  /** Earliest activity (first mod or comment): the account is at least this old. */
  firstSeenAt: string;
  role: 'author' | 'commenter';
}

export interface SnapMod {
  id: number;
  name: string;
  slug: string;
  mod_id: string;
  shortDescription: string;
  description: string;
  dependencies: string;
  type: string | null;
  modSide: string | null;
  isNSFW: boolean;
  isApproved: boolean;
  isFeatured: boolean;
  isMultiplayerCompatible: boolean;
  requiresAllPlayers: boolean;
  lastWeekDownloads: number;
  downloads: number;
  latestVersion: string | null;
  latestVersionSize: string | null;
  averageRating: number | null;
  reviewsCount: number | null;
  favoritesCount: number;
  commentsCount: number;
  sourceUrl: string | null;
  imageUrl: string | null;
  buildGuid: string | null;
  buildShareVersion: string | null;
  numberOfElements: number | null;
  lastReleasedAt: string;
  createdAt: string;
  updatedAt: string;
  userId: number | null;
  categoryId: number | null;
}

export interface SnapImage {
  modId: number;
  url: string;
  isPrimary: boolean;
  isThumbnail: boolean;
  createdAt: string;
}

export interface SnapVersion {
  id: number;
  modId: number;
  version: string;
  isLatest: boolean;
  changelog: string;
  downloadUrl: string;
  extension: string | null;
  filename: string | null;
  createdAt: string;
  updatedAt: string;
  /** `_count.downloads`: number of `ModDownload` rows of the version. */
  downloads: number;
}

export interface SnapComment {
  id: number;
  modId: number;
  userId: number;
  replyId: number | null;
  message: string;
  imageUrl: string | null;
  isHidden: boolean;
  createdAt: string;
}

export interface Snapshot {
  categories: SnapCategory[];
  users: SnapUser[];
  mods: SnapMod[];
  images: SnapImage[];
  versions: SnapVersion[];
  comments: SnapComment[];
}

interface ApiUser {
  name: string;
  slug: string;
  imageUrl: string | null;
  isTrusted: boolean;
}

interface ApiVersion {
  id: number;
  version: string;
  isLatest: boolean;
  changelog: string;
  downloadUrl: string;
  extension: string | null;
  filename: string | null;
  createdAt: string;
  updatedAt: string;
  _count: { downloads: number };
}

interface ApiMod extends Omit<SnapMod, 'dependencies'> {
  dependencies: string | string[];
  user: ApiUser | null;
  images: Array<{ url: string; isPrimary: boolean; isThumbnail: boolean }>;
  versions: ApiVersion[];
}

interface ApiComment {
  id: number;
  message: string;
  imageUrl: string | null;
  createdAt: string;
  isHidden: boolean;
  user: ApiUser;
  replies?: ApiComment[];
}

function readJson<T>(path: string): T {
  return JSON.parse(readFileSync(path, 'utf8')) as T;
}

function data<T>(path: string): T {
  const body = readJson<{ status: boolean; data: T }>(path);
  if (!body.status) throw new Error(`${path}: the API answered status=false`);
  return body.data;
}

const MOD_FIELDS = [
  'id',
  'name',
  'slug',
  'mod_id',
  'shortDescription',
  'description',
  'type',
  'modSide',
  'isNSFW',
  'isApproved',
  'isFeatured',
  'isMultiplayerCompatible',
  'requiresAllPlayers',
  'lastWeekDownloads',
  'downloads',
  'latestVersion',
  'latestVersionSize',
  'averageRating',
  'reviewsCount',
  'favoritesCount',
  'commentsCount',
  'sourceUrl',
  'imageUrl',
  'buildGuid',
  'buildShareVersion',
  'numberOfElements',
  'lastReleasedAt',
  'createdAt',
  'updatedAt',
  'userId',
  'categoryId',
] as const;

/** Loads and cross-checks the snapshot. Throws when it is incomplete or inconsistent. */
export function loadSnapshot(dir: string = SNAPSHOT_DIR): Snapshot {
  const categories: SnapCategory[] = [
    ...data<Array<{ id: number; name: string; slug: string }>>(join(dir, 'categories_mod.json')).map((c) => ({
      ...c,
      type: 'Mod' as const,
    })),
    ...data<Array<{ id: number; name: string; slug: string }>>(join(dir, 'categories_build.json')).map((c) => ({
      ...c,
      type: 'Build' as const,
    })),
  ].sort((a, b) => a.id - b.id);

  const apiMods = readdirSync(join(dir, 'mod'))
    .filter((f) => f.endsWith('.json'))
    .map((f) => data<ApiMod>(join(dir, 'mod', f)))
    .sort((a, b) => a.id - b.id);

  // The detail endpoint returns gallery URLs only; the list endpoint also returns the flags
  // (always false in practice, research/02 §5).
  const listFlags = new Map<string, { isPrimary: boolean; isThumbnail: boolean }>();
  for (const f of readdirSync(dir).filter((name) => /^mods_a(true|false)_n(true|false)\.json$/.test(name))) {
    for (const m of data<Array<{ id: number; images?: ApiMod['images'] }>>(join(dir, f))) {
      for (const image of m.images ?? []) {
        listFlags.set(`${m.id} ${image.url}`, {
          isPrimary: image.isPrimary === true,
          isThumbnail: image.isThumbnail === true,
        });
      }
    }
  }

  const mods: SnapMod[] = [];
  const images: SnapImage[] = [];
  const versions: SnapVersion[] = [];
  const authors = new Map<string, { id: number; user: ApiUser }>();

  for (const m of apiMods) {
    const row = Object.fromEntries(MOD_FIELDS.map((k) => [k, m[k]])) as Omit<SnapMod, 'dependencies'>;
    mods.push({
      ...row,
      dependencies: Array.isArray(m.dependencies) ? m.dependencies.join(',') : (m.dependencies ?? ''),
    });
    if (m.user && m.userId !== null) {
      const known = authors.get(m.user.slug);
      if (known && known.id !== m.userId) throw new Error(`author ${m.user.slug} has two ids`);
      authors.set(m.user.slug, { id: m.userId, user: m.user });
    }
    for (const image of m.images) {
      const flags = listFlags.get(`${m.id} ${image.url}`);
      images.push({
        modId: m.id,
        url: image.url,
        isPrimary: flags?.isPrimary ?? image.isPrimary === true,
        isThumbnail: flags?.isThumbnail ?? image.isThumbnail === true,
        createdAt: m.createdAt,
      });
    }
    for (const v of m.versions) {
      versions.push({
        id: v.id,
        modId: m.id,
        version: v.version,
        isLatest: v.isLatest,
        changelog: v.changelog,
        downloadUrl: v.downloadUrl,
        extension: v.extension,
        filename: v.filename,
        createdAt: v.createdAt,
        updatedAt: v.updatedAt,
        downloads: v._count.downloads,
      });
    }
  }
  versions.sort((a, b) => a.id - b.id);

  // Comment threads: one file per mod, replies nested one level (legacy replies to the root).
  const threads: Array<{ modId: number; comment: ApiComment; replyId: number | null }> = [];
  for (const f of readdirSync(join(dir, 'comments')).filter((name) => name.endsWith('.json'))) {
    const modId = Number(f.replace(/\.json$/, ''));
    const walk = (list: ApiComment[], replyId: number | null) => {
      for (const c of list) {
        threads.push({ modId, comment: c, replyId });
        walk(c.replies ?? [], c.id);
      }
    };
    walk(data<ApiComment[]>(join(dir, 'comments', f)), null);
  }
  threads.sort((a, b) => a.comment.id - b.comment.id);

  // Users: authors keep their id; other commenters get stable synthetic ids in slug order.
  const commenterSlugs = [...new Set(threads.map((t) => t.comment.user.slug))]
    .filter((slug) => !authors.has(slug))
    .sort();
  const commenterUsers = new Map<string, ApiUser>();
  for (const t of threads)
    if (!authors.has(t.comment.user.slug)) commenterUsers.set(t.comment.user.slug, t.comment.user);
  const idOf = new Map<string, number>();
  for (const [slug, a] of authors) idOf.set(slug, a.id);
  for (const [i, slug] of commenterSlugs.entries()) idOf.set(slug, COMMENTER_ID_BASE + i);

  const firstSeen = new Map<number, string>();
  const seen = (id: number, at: string) => {
    const current = firstSeen.get(id);
    if (!current || at < current) firstSeen.set(id, at);
  };
  for (const m of mods) if (m.userId !== null) seen(m.userId, m.createdAt);
  const comments: SnapComment[] = threads.map(({ modId, comment, replyId }) => {
    const userId = idOf.get(comment.user.slug) as number;
    seen(userId, comment.createdAt);
    return {
      id: comment.id,
      modId,
      userId,
      replyId,
      message: comment.message,
      imageUrl: comment.imageUrl,
      isHidden: comment.isHidden,
      createdAt: comment.createdAt,
    };
  });

  const toUser = (id: number, u: ApiUser, role: SnapUser['role']): SnapUser => ({
    id,
    name: u.name,
    slug: u.slug,
    imageUrl: u.imageUrl ?? '',
    isTrusted: u.isTrusted,
    firstSeenAt: firstSeen.get(id) as string,
    role,
  });
  const users: SnapUser[] = [
    ...[...authors.values()].map((a) => toUser(a.id, a.user, 'author')),
    ...commenterSlugs.map((slug) => toUser(idOf.get(slug) as number, commenterUsers.get(slug) as ApiUser, 'commenter')),
  ].sort((a, b) => a.id - b.id);

  const snapshot: Snapshot = { categories, users, mods, images, versions, comments };
  checkSnapshot(snapshot);
  return snapshot;
}

/** Consistency checks: counts of research/02 §3.1 and referential integrity. */
export function checkSnapshot(s: Snapshot): void {
  const problems: string[] = [];
  if (s.mods.length !== EXPECTED.mods) problems.push(`${s.mods.length} mods (expected ${EXPECTED.mods})`);
  if (s.versions.length !== EXPECTED.versions)
    problems.push(`${s.versions.length} versions (expected ${EXPECTED.versions})`);
  if (s.comments.length !== EXPECTED.comments)
    problems.push(`${s.comments.length} comments (expected ${EXPECTED.comments})`);
  const categoryIds = new Set(s.categories.map((c) => c.id));
  const userIds = new Set(s.users.map((u) => u.id));
  const modIds = new Set(s.mods.map((m) => m.id));
  const commentIds = new Set(s.comments.map((c) => c.id));
  for (const m of s.mods) {
    if (m.categoryId !== null && !categoryIds.has(m.categoryId)) problems.push(`mod ${m.id}: unknown category`);
    if (m.userId !== null && !userIds.has(m.userId)) problems.push(`mod ${m.id}: unknown user`);
    const perVersion = s.versions.filter((v) => v.modId === m.id).reduce((sum, v) => sum + v.downloads, 0);
    if (perVersion !== m.downloads) problems.push(`mod ${m.id}: downloads ${m.downloads} ≠ Σ versions ${perVersion}`);
  }
  for (const c of s.comments) {
    if (!modIds.has(c.modId)) problems.push(`comment ${c.id}: unknown mod`);
    if (c.replyId !== null && !commentIds.has(c.replyId)) problems.push(`comment ${c.id}: unknown parent`);
  }
  if (new Set(s.versions.map((v) => v.id)).size !== s.versions.length) problems.push('duplicated version ids');
  if (problems.length > 0) throw new Error(`the snapshot is inconsistent:\n  - ${problems.join('\n  - ')}`);
}
