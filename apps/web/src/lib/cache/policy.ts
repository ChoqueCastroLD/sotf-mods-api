/**
 * Edge-cache policy of public HTML (PLAN §2.7, §4.2).
 *
 * Browser: `Cache-Control: public, max-age=0, must-revalidate` (bfcache-friendly, always
 * revalidated). Cloudflare: `Cloudflare-CDN-Cache-Control: public, max-age=<ttl>,
 * stale-while-revalidate=86400, stale-if-error=604800` + `Cache-Tag`. The same TTL drives the
 * origin LRU of the `cloudflareTags()` provider.
 *
 * Pages declare their policy with `setPageCache(Astro, pageCache.mod(id, userId))`; nothing is
 * edge-cached unless a page opts in.
 */
import { type CacheTag, cacheTag, isCacheTag } from '@sotf/contracts/cache';
import type { Locale } from '@sotf/i18n';

/** Seconds a stale page may be served while revalidating (PLAN §2.7). */
export const EDGE_SWR_SECONDS = 86_400;
/** Seconds a stale page may be served while the origin fails (PLAN §2.7). */
export const EDGE_STALE_IF_ERROR_SECONDS = 604_800;

/** Edge TTLs of PLAN §2.7 / §4.2. */
export const EDGE_TTL = {
  /** Landing and listings. */
  list: 300,
  /** Mod, build, profile, kit, hubs, categories. */
  detail: 900,
  /** Prerender-like content (guides, legal): purged on deploy. */
  static: 86_400,
  /** 404 pages: short, so a freshly published mod is not hidden by a cached 404. */
  notFound: 60,
  /** Search results. */
  search: 60,
  /** Machine endpoints and permanent redirects (`/@handle`, legacy assets). */
  hour: 3600,
} as const;

/** Internal header carrying the tags from the provider to the server entry (renamed to `Cache-Tag`). */
export const INTERNAL_TAGS_HEADER = 'x-sotf-cache-tags';
/** Public Cloudflare tag header. */
export const CACHE_TAG_HEADER = 'cache-tag';
export const CDN_CACHE_CONTROL_HEADER = 'cloudflare-cdn-cache-control';

/** Browser policy of every public HTML response. */
export const HTML_BROWSER_CACHE_CONTROL = 'public, max-age=0, must-revalidate';
export const NO_STORE = 'no-store';

export interface PageCachePolicy {
  /** Edge TTL in seconds (also the origin LRU TTL). */
  maxAge: number;
  /** Stale-while-revalidate window at the edge. */
  swr: number;
  /** Cache tags (validated against the grammar of PLAN §2.7). */
  tags: readonly CacheTag[];
}

function policy(maxAge: number, tags: readonly CacheTag[]): PageCachePolicy {
  return { maxAge, swr: EDGE_SWR_SECONDS, tags: ['html', ...tags.filter((tag) => tag !== 'html')] };
}

/** Presets per page class (PLAN §4.2 legend `E(ttl)`); `html` is always included. */
export const pageCache = {
  home: () => policy(EDGE_TTL.list, ['home']),
  listMods: () => policy(EDGE_TTL.list, ['list:mods']),
  listBuilds: () => policy(EDGE_TTL.list, ['list:builds']),
  listKits: () => policy(EDGE_TTL.list, ['list:kits']),
  mod: (modId: number, userId: number) => policy(EDGE_TTL.detail, [cacheTag.mod(modId), cacheTag.user(userId)]),
  profile: (userId: number) => policy(EDGE_TTL.detail, [cacheTag.user(userId)]),
  kit: (kitId: number) => policy(EDGE_TTL.detail, [cacheTag.kit(kitId)]),
  category: (slug: string) => policy(EDGE_TTL.detail, [cacheTag.category(slug)]),
  tag: (slug: string) => policy(EDGE_TTL.detail, [cacheTag.tag(slug)]),
  compat: () => policy(EDGE_TTL.list, ['compat']),
  static: () => policy(EDGE_TTL.static, []),
  search: () => policy(EDGE_TTL.search, []),
  notFound: () => policy(EDGE_TTL.notFound, []),
  custom: (maxAge: number, tags: readonly CacheTag[] = []) => policy(maxAge, tags),
} as const;

/** Adds `locale:{lc}` so a purge can target one language; dedupes and drops invalid tags. */
export function withLocaleTag(tags: readonly string[], locale: Locale | undefined): CacheTag[] {
  const all = locale ? [...tags, cacheTag.locale(locale)] : [...tags];
  const out: CacheTag[] = [];
  for (const tag of all) if (isCacheTag(tag) && !out.includes(tag)) out.push(tag);
  return out;
}

/** Response headers of an edge-cacheable public response. */
export function edgeCacheHeaders(options: {
  maxAge: number;
  swr?: number;
  staleIfError?: number;
  tags?: readonly string[];
  browserCacheControl?: string;
}): Headers {
  const headers = new Headers();
  const maxAge = Math.max(0, Math.floor(options.maxAge));
  headers.set('cache-control', options.browserCacheControl ?? HTML_BROWSER_CACHE_CONTROL);
  if (maxAge > 0) {
    headers.set(
      CDN_CACHE_CONTROL_HEADER,
      [
        'public',
        `max-age=${maxAge}`,
        `stale-while-revalidate=${Math.max(0, Math.floor(options.swr ?? EDGE_SWR_SECONDS))}`,
        `stale-if-error=${Math.max(0, Math.floor(options.staleIfError ?? EDGE_STALE_IF_ERROR_SECONDS))}`,
      ].join(', '),
    );
  }
  const tags = (options.tags ?? []).filter((tag) => isCacheTag(tag));
  if (tags.length > 0) headers.set(INTERNAL_TAGS_HEADER, [...new Set(tags)].join(','));
  return headers;
}

/** Reads the edge TTL and SWR back from a response (used by the origin LRU). */
export function parseEdgeCacheControl(value: string | null): { maxAge: number; swr: number } {
  let maxAge = 0;
  let swr = 0;
  if (!value) return { maxAge, swr };
  for (const part of value.split(',')) {
    const [rawKey, rawValue] = part.trim().toLowerCase().split('=');
    const seconds = Number.parseInt(rawValue ?? '', 10);
    if (!Number.isFinite(seconds) || seconds < 0) continue;
    if (rawKey === 'max-age' || rawKey === 's-maxage') maxAge = seconds;
    else if (rawKey === 'stale-while-revalidate') swr = seconds;
  }
  return { maxAge, swr };
}

/** Splits a tag header (`a,b, c`). */
export function parseTagHeader(value: string | null): string[] {
  if (!value) return [];
  return value
    .split(',')
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0);
}

/**
 * Moves the internal tag header to Cloudflare's `Cache-Tag` (done by the server entry, after
 * Astro's cache handler, which strips a `Cache-Tag` set earlier). Mutates and returns `headers`.
 */
export function publishCacheTags(headers: Headers): Headers {
  const tags = headers.get(INTERNAL_TAGS_HEADER);
  headers.delete(INTERNAL_TAGS_HEADER);
  if (tags) headers.set(CACHE_TAG_HEADER, tags);
  return headers;
}
