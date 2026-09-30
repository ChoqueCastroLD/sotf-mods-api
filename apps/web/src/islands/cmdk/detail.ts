/**
 * Details of the highlighted row for the preview pane: the mod / build, creator or kit behind it,
 * fetched from the public API the first time a row is highlighted (one small request, edge-cached,
 * kept for the page) and read defensively: the wire shapes are `ModDetailDTO`, `UserProfileDTO`
 * and `KitDTO`, but only what the preview needs is taken and anything missing is skipped.
 */
import type { CompatStatus } from '@sotf/contracts/common';
import type { EntryItem } from './types.ts';

export interface PreviewImage {
  src: string;
  alt: string;
}

export interface Mini {
  title: string;
  path: string;
  thumb: string | null;
  note: string | null;
}

export interface ModDetail {
  kind: 'mod';
  description: string;
  version: string | null;
  updatedAt: string | null;
  author: { id: number; handle: string; name: string; avatar: string | null } | null;
  category: string | null;
  downloads: number;
  downloads7d: number;
  followers: number;
  rating: number | null;
  ratingCount: number;
  compat: CompatStatus | null;
  hero: PreviewImage | null;
  gallery: PreviewImage[];
  dependencies: Mini[];
  tags: string[];
}

export interface UserDetail {
  kind: 'user';
  name: string;
  handle: string;
  avatar: string | null;
  banner: PreviewImage | null;
  mods: number;
  downloads: number;
  followers: number;
  top: Mini[];
}

export interface KitDetail {
  kind: 'kit';
  description: string;
  owner: { id: number; handle: string; name: string; avatar: string | null } | null;
  items: number;
  followers: number;
  cover: PreviewImage | null;
  top: Mini[];
}

export type Detail = ModDetail | UserDetail | KitDetail;

type Json = Record<string, unknown>;

const isObject = (value: unknown): value is Json =>
  typeof value === 'object' && value !== null && !Array.isArray(value);
const str = (value: unknown): string | null => (typeof value === 'string' && value !== '' ? value : null);
const num = (value: unknown): number => (typeof value === 'number' && Number.isFinite(value) ? value : 0);
const list = (value: unknown): Json[] => (Array.isArray(value) ? value.filter(isObject) : []);
const httpUrl = (value: unknown): string | null => {
  const text = str(value);
  return text && /^https?:\/\//.test(text) ? text : null;
};

/**
 * The smallest variant of an `ImageDTO` that is at least `width` px wide (its `srcset` lists the
 * responsive variants); legacy images have none and fall back to their `url`.
 */
export function pickImage(value: unknown, width: number): PreviewImage | null {
  if (!isObject(value)) return null;
  const url = httpUrl(value.url);
  let best: { url: string; width: number } | null = null;
  const srcset = str(value.srcset);
  if (srcset) {
    const variants: Array<{ url: string; width: number }> = [];
    for (const part of srcset.split(',')) {
      const [candidate, size] = part.trim().split(/\s+/);
      const w = Number.parseInt(size ?? '', 10);
      if (candidate && /^https?:\/\//.test(candidate) && Number.isFinite(w))
        variants.push({ url: candidate, width: w });
    }
    variants.sort((a, b) => a.width - b.width);
    best = variants.find((variant) => variant.width >= width) ?? variants[variants.length - 1] ?? null;
  }
  const src = best?.url ?? url;
  return src ? { src, alt: str(value.alt) ?? '' } : null;
}

function mini(card: unknown, title: string, path: string, note: string | null = null): Mini | null {
  if (!isObject(card)) return null;
  const thumbnail = isObject(card.thumbnail) ? pickImage(card.thumbnail, 96)?.src : null;
  return { title, path, thumb: thumbnail ?? httpUrl(card.thumbnailUrl), note };
}

function cardMini(card: Json): Mini | null {
  const path = str(card.canonicalPath);
  const title = str(card.name);
  return path && title ? mini(card, title, path, str(card.userHandle) ? `@${str(card.userHandle)}` : null) : null;
}

function author(value: unknown): ModDetail['author'] {
  if (!isObject(value)) return null;
  const handle = str(value.handle);
  if (!handle) return null;
  return { id: num(value.id), handle, name: str(value.displayName) ?? handle, avatar: httpUrl(value.avatarUrl) };
}

function parseMod(body: Json): ModDetail {
  const version = isObject(body.latestVersion) ? body.latestVersion : null;
  const gallery = list(body.gallery)
    .map((image) => pickImage(image, 160))
    .filter((image): image is PreviewImage => image !== null);
  const thumb = pickImage(body.thumbnail, 640);
  const hero = gallery.length > 0 ? pickImage(list(body.gallery)[0], 640) : thumb;
  const dependencies: Mini[] = [];
  for (const dependency of list(body.dependencies)) {
    const mod = isObject(dependency.mod) ? dependency.mod : null;
    const path = mod ? str(mod.canonicalPath) : null;
    const title = (mod ? str(mod.name) : null) ?? str(dependency.manifestId);
    if (!title) continue;
    const entry = mini(mod, title, path ?? '', dependency.kind === 'optional' ? 'optional' : null);
    if (entry) dependencies.push(entry);
    else dependencies.push({ title, path: '', thumb: null, note: null });
  }
  const compat = str(body.compatStatus);
  return {
    kind: 'mod',
    description: str(body.shortDescription) ?? '',
    version: version ? str(version.version) : null,
    updatedAt: str(body.lastReleasedAt),
    author: author(body.author),
    category: isObject(body.category) ? str(body.category.name) : null,
    downloads: num(body.downloads),
    downloads7d: num(body.downloads7d),
    followers: num(body.followers),
    rating: typeof body.ratingAvg === 'number' ? body.ratingAvg : null,
    ratingCount: num(body.ratingCount),
    compat: compat === 'works' || compat === 'mixed' || compat === 'broken' || compat === 'untested' ? compat : null,
    hero,
    // Hero + up to four more shots; the hero shot itself is not repeated in the strip.
    gallery: (gallery.length > 0 ? gallery.slice(1, 5) : []) as PreviewImage[],
    dependencies: dependencies.slice(0, 4),
    tags: list(body.tags)
      .map((tag) => str(tag.slug) ?? str(tag.name))
      .filter((tag): tag is string => tag !== null)
      .slice(0, 6),
  };
}

function parseUser(body: Json, mods: Json[]): UserDetail {
  const stats = isObject(body.stats) ? body.stats : {};
  const handle = str(body.handle) ?? '';
  return {
    kind: 'user',
    name: str(body.displayName) ?? handle,
    handle,
    avatar: httpUrl(body.avatar && isObject(body.avatar) ? body.avatar.url : body.avatar),
    banner: pickImage(body.banner, 640),
    mods: num(stats.modsCount) + num(stats.buildsCount),
    downloads: num(stats.downloadsTotal),
    followers: num(stats.followersCount),
    top: mods
      .map(cardMini)
      .filter((entry): entry is Mini => entry !== null)
      .slice(0, 3),
  };
}

function parseKit(body: Json): KitDetail {
  return {
    kind: 'kit',
    description: '',
    owner: author(body.owner),
    items: num(body.itemsCount),
    followers: num(body.followersCount),
    cover: pickImage(body.cover, 640),
    top: list(body.items)
      .map((entry) => (isObject(entry.mod) ? cardMini(entry.mod) : null))
      .filter((entry): entry is Mini => entry !== null)
      .slice(0, 4),
  };
}

async function getJson(path: string): Promise<Json | null> {
  const response = await fetch(path, { headers: { accept: 'application/json' }, credentials: 'omit' });
  if (!response.ok) return null;
  const body: unknown = await response.json();
  return isObject(body) ? body : null;
}

const cache = new Map<string, Promise<Detail | null>>();

/** Details of a mod, build, creator or kit; null for other entries or when the request fails. */
export function loadDetail(item: EntryItem): Promise<Detail | null> {
  if (typeof item.id !== 'number') return Promise.resolve(null);
  const cached = cache.get(item.key);
  if (cached) return cached;
  let request: Promise<Detail | null>;
  if (item.type === 'mod' || item.type === 'build') {
    request = getJson(`/api/v2/mods/${item.id}`).then((body) => (body ? parseMod(body) : null));
  } else if (item.type === 'user' && item.handle) {
    const handle = encodeURIComponent(item.handle);
    request = Promise.all([
      getJson(`/api/v2/users/${handle}`),
      getJson(`/api/v2/users/${handle}/mods?limit=3&sort=downloads`).catch(() => null),
    ]).then(([body, mods]) => (body ? parseUser(body, mods ? list(mods.items) : []) : null));
  } else if (item.type === 'kit') {
    request = getJson(`/api/v2/kits/${item.id}`).then((body) => (body ? parseKit(body) : null));
  } else {
    return Promise.resolve(null);
  }
  // A failed request must not be remembered. Nothing is aborted: the requests are small and shared.
  const safe = request.catch(() => null);
  void safe.then((detail) => {
    if (detail === null) cache.delete(item.key);
  });
  cache.set(item.key, safe);
  return safe;
}
