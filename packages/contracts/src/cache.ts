/**
 * Cache policies and cache tags (PLAN §2.7, §5.1 "Caché").
 *
 * Each endpoint declares its policy; the API turns it into `Cache-Control`,
 * `Cloudflare-CDN-Cache-Control` and `Cache-Tag` headers. Tags are shared by the web cache
 * provider, the API LRU and the `cdn.purge` job.
 */

/** Cache tag grammar of PLAN §2.7. */
export type CacheTag =
  | 'html'
  | 'home'
  | 'list:mods'
  | 'list:builds'
  | 'list:kits'
  | 'compat'
  | 'sitemap'
  | 'feed'
  | 'search-index'
  | 'legacy'
  | 'stats'
  | `mod:${number}`
  | `user:${number}`
  | `kit:${number}`
  | `category:${string}`
  | `tag:${string}`
  | `locale:${string}`;

/** Tag template used in endpoint declarations: `{param}` is replaced with the path/entity value. */
export type CacheTagTemplate =
  | CacheTag
  | 'mod:{id}'
  | 'user:{id}'
  | 'kit:{id}'
  | 'category:{slug}'
  | 'tag:{slug}'
  | 'locale:{locale}';

const STATIC_TAGS = new Set<string>([
  'html',
  'home',
  'list:mods',
  'list:builds',
  'list:kits',
  'compat',
  'sitemap',
  'feed',
  'search-index',
  'legacy',
  'stats',
]);

/** Cloudflare limits a single tag to 1024 bytes; ours are short, but slugs are user data. */
const DYNAMIC_TAG = /^(?:mod|user|kit):[1-9]\d{0,15}$|^(?:category|tag):[a-z0-9-]{1,80}$|^locale:[a-z]{2}$/;

/** True when `value` is a well-formed cache tag. */
export function isCacheTag(value: string): value is CacheTag {
  return STATIC_TAGS.has(value) || DYNAMIC_TAG.test(value);
}

/** Tag builders (never concatenate tags by hand). */
export const cacheTag = {
  mod: (id: number): CacheTag => `mod:${id}`,
  user: (id: number): CacheTag => `user:${id}`,
  kit: (id: number): CacheTag => `kit:${id}`,
  category: (slug: string): CacheTag => `category:${slug}`,
  tag: (slug: string): CacheTag => `tag:${slug}`,
  locale: (locale: string): CacheTag => `locale:${locale}`,
} as const;

/** Max tags per Cloudflare purge call (PLAN §2.7). */
export const MAX_TAGS_PER_PURGE = 30;

/**
 * Cache policy of an endpoint:
 * - `public`: `Cache-Control: public, max-age=<browserMaxAge>` + `Cloudflare-CDN-Cache-Control:
 *   max-age=<edgeMaxAge>, stale-while-revalidate=<swr>` + `Cache-Tag` + ETag. CORS `*`.
 * - `private`: `Cache-Control: private, no-store` (anything that depends on the session).
 * - `no-store`: `Cache-Control: no-store` (downloads, SSE, beacons, internal).
 */
export type CachePolicy =
  | {
      kind: 'public';
      browserMaxAge: number;
      edgeMaxAge: number;
      staleWhileRevalidate: number;
      staleIfError?: number;
      tags: readonly CacheTagTemplate[];
    }
  | { kind: 'private' }
  | { kind: 'no-store' };

/** Presets of PLAN §2.7. */
export const cache = {
  /** Public v2 GET: browser 0 s, edge 60 s, SWR 600 s. */
  publicApi: (tags: readonly CacheTagTemplate[], edgeMaxAge = 60): CachePolicy => ({
    kind: 'public',
    browserMaxAge: 0,
    edgeMaxAge,
    staleWhileRevalidate: 600,
    tags,
  }),
  /** Live counters: edge 30 s. */
  live: (tags: readonly CacheTagTemplate[]): CachePolicy => ({
    kind: 'public',
    browserMaxAge: 0,
    edgeMaxAge: 30,
    staleWhileRevalidate: 60,
    tags,
  }),
  /** Legacy read API (T1/T2): browser 60 s, edge 300 s, SWR 600 s, tag `legacy`. */
  legacy: (tags: readonly CacheTagTemplate[] = []): CachePolicy => ({
    kind: 'public',
    browserMaxAge: 60,
    edgeMaxAge: 300,
    staleWhileRevalidate: 600,
    tags: ['legacy', ...tags],
  }),
  private: { kind: 'private' } as CachePolicy,
  noStore: { kind: 'no-store' } as CachePolicy,
} as const;

/** Header values for a policy (tags must already be resolved). */
export function cacheHeaders(policy: CachePolicy, tags: readonly CacheTag[] = []): Record<string, string> {
  switch (policy.kind) {
    case 'public': {
      const edge = [`public`, `max-age=${policy.edgeMaxAge}`, `stale-while-revalidate=${policy.staleWhileRevalidate}`];
      if (policy.staleIfError !== undefined) edge.push(`stale-if-error=${policy.staleIfError}`);
      const headers: Record<string, string> = {
        'cache-control': `public, max-age=${policy.browserMaxAge}`,
        'cloudflare-cdn-cache-control': edge.join(', '),
      };
      if (tags.length > 0) headers['cache-tag'] = tags.join(',');
      return headers;
    }
    case 'private':
      return { 'cache-control': 'private, no-store' };
    case 'no-store':
      return { 'cache-control': 'no-store' };
  }
}

/** Resolves `{param}` placeholders of tag templates with the given values; drops invalid tags. */
export function resolveCacheTags(
  templates: readonly CacheTagTemplate[],
  values: Readonly<Record<string, string | number | undefined>>,
): CacheTag[] {
  const out: CacheTag[] = [];
  for (const template of templates) {
    const tag = template.replace(/\{(\w+)\}/g, (_, name: string) => String(values[name] ?? ''));
    if (isCacheTag(tag) && !out.includes(tag)) out.push(tag);
  }
  return out;
}
