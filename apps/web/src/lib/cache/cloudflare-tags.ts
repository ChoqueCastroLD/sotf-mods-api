/**
 * `cloudflareTags()`: the Astro route-cache provider of SOTF Mods (PLAN §2.7 layers 2 and 3).
 *
 * - **Headers** (`setHeaders`): turns `Astro.cache.set({ maxAge, swr, tags })` into
 *   `Cache-Control: public, max-age=0, must-revalidate` (browser) and
 *   `Cloudflare-CDN-Cache-Control: public, max-age=<ttl>, stale-while-revalidate=…,
 *   stale-if-error=…` (edge), plus the tags. Astro's cache handler strips `Cache-Tag` after a
 *   runtime provider runs, so the tags travel in `x-sotf-cache-tags` and the server entry
 *   (`src/lib/server/fetch.ts`) publishes them as `Cache-Tag`.
 * - **Origin LRU** (`onRequest`): absorbs edge misses from every PoP and locale. Entries live for
 *   the edge TTL (`maxAge`), are keyed by host + locale + path + normalized query, carry a strong
 *   ETag (conditional requests get `304`) and are never created for responses with `Set-Cookie`
 *   or `Vary: Cookie`. Concurrent misses of one key are coalesced: the first request renders,
 *   the others wait for it and get its entry (no stampede when a popular page is cold or expires).
 * - **Invalidation** (`invalidate`): by tag (`/_internal/cache/invalidate`, called by the
 *   `cdn.purge` job) or by path.
 *
 * Configured in `astro.config.mjs` as `cache.provider` with this file as entrypoint.
 */
import { createHash } from 'node:crypto';
import type { CacheOptions, CacheProvider, InvalidateOptions } from 'astro';
import { LRUCache } from 'lru-cache';
import {
  CDN_CACHE_CONTROL_HEADER,
  EDGE_STALE_IF_ERROR_SECONDS,
  EDGE_SWR_SECONDS,
  edgeCacheHeaders,
  INTERNAL_TAGS_HEADER,
  parseEdgeCacheControl,
  parseTagHeader,
  withLocaleTag,
} from './policy.ts';
import { LOCALE_HEADER, requestLocale } from './request-locale.ts';

export interface CloudflareTagsOptions {
  /** Max entries of the origin LRU (PLAN §2.7: ≈ 500). */
  max?: number;
  /** Max total body bytes kept in memory (default 64 MiB; the web container has 384 MB). */
  maxBytes?: number;
  /** Query parameters ignored in the cache key (tracking). */
  ignoredQueryParams?: readonly string[];
  /** Monotonic clock in ms (tests). Defaults to `performance.now`. */
  now?: () => number;
}

const DEFAULT_IGNORED_QUERY = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'fbclid',
  'gclid',
  'msclkid',
  'ref',
  '_ga',
  '_gl',
];

/** Statuses worth keeping at the origin (pages, not-found and gone pages). */
const CACHEABLE_STATUS = new Set([200, 404, 410]);

/** Response header telling operators whether the origin LRU answered. */
export const ORIGIN_CACHE_HEADER = 'x-sotf-origin-cache';

interface Entry {
  body: Uint8Array;
  status: number;
  headers: Array<[string, string]>;
  tags: readonly string[];
  etag: string;
  path: string;
}

/** Mod and build pages: the only query parameter they read is `adult` (the NSFW reveal). */
export const DETAIL_PAGE = /^\/(?:mods|builds)\/[^/]+\/[^/]+\/?$/;
export const DETAIL_PARAMS: ReadonlySet<string> = new Set(['adult']);

/**
 * Cache key: host, locale (the server entry rewrites `/es/x` to `/x`), path and sorted query. Mod
 * and build pages keep only the parameters they read (the middleware already 301s the others
 * away), so `?anything=random` can never force a render.
 */
export function cacheKey(url: URL, locale: string, ignored: ReadonlySet<string>): string {
  const kept = DETAIL_PAGE.test(url.pathname) ? DETAIL_PARAMS : null;
  const params = [...url.searchParams.entries()]
    .filter(([name]) =>
      kept ? kept.has(name) : !ignored.has(name.toLowerCase()) && !name.toLowerCase().startsWith('utm_'),
    )
    .sort(([a, av], [b, bv]) => (a === b ? av.localeCompare(bv) : a.localeCompare(b)));
  const query = new URLSearchParams(params).toString();
  return `${url.host}|${locale}|${url.pathname}${query ? `?${query}` : ''}`;
}

const TAXONOMY_PARAMS = new Set(['category', 'excludeCategory', 'tag', 'excludeTag']);

/** Two or more category/tag values in the query. */
function multiTaxonomyQuery(url: URL): boolean {
  let count = 0;
  for (const name of url.searchParams.keys()) if (TAXONOMY_PARAMS.has(name) && ++count >= 2) return true;
  return false;
}

function varyBlocksCaching(response: Response): boolean {
  const vary = response.headers.get('vary');
  if (!vary) return false;
  return vary
    .split(',')
    .map((part) => part.trim().toLowerCase())
    .some((part) => part === '*' || part === 'cookie');
}

function strongEtag(body: Uint8Array): string {
  return `"${createHash('sha256').update(body).digest('base64url').slice(0, 27)}"`;
}

function ifNoneMatchHits(request: Request, etag: string): boolean {
  const header = request.headers.get('if-none-match');
  if (!header) return false;
  return header
    .split(',')
    .map((value) => value.trim().replace(/^W\//, ''))
    .some((value) => value === '*' || value === etag);
}

function toResponse(entry: Entry, request: Request, state: 'HIT' | 'MISS'): Response {
  const headers = new Headers(entry.headers);
  headers.set('etag', entry.etag);
  headers.set(ORIGIN_CACHE_HEADER, state);
  if (entry.status === 200 && ifNoneMatchHits(request, entry.etag)) {
    headers.delete('content-length');
    headers.delete('content-type');
    return new Response(null, { status: 304, headers });
  }
  return new Response(entry.body.slice(), { status: entry.status, headers });
}

/** Builds the provider (exported for tests; Astro calls the default export). */
export function createCloudflareTagsProvider(options: CloudflareTagsOptions = {}): CacheProvider & {
  /** Number of entries currently held (diagnostics and tests). */
  readonly size: number;
} {
  const ignored = new Set((options.ignoredQueryParams ?? DEFAULT_IGNORED_QUERY).map((name) => name.toLowerCase()));
  /** Renders in progress per key, resolved with the stored entry (or null when not cacheable). */
  const pending = new Map<string, Promise<Entry | null>>();
  const lru = new LRUCache<string, Entry>({
    max: options.max ?? 500,
    maxSize: options.maxBytes ?? 64 * 1024 * 1024,
    sizeCalculation: (entry) => Math.max(1, entry.body.byteLength),
    allowStale: false,
    updateAgeOnGet: false,
    ttlResolution: 0,
    ...(options.now ? { perf: { now: options.now } } : {}),
  });

  return {
    name: 'cloudflare-tags',

    get size() {
      return lru.size;
    },

    setHeaders(cacheOptions: CacheOptions, request: Request): Headers {
      const headers = edgeCacheHeaders({
        maxAge: cacheOptions.maxAge ?? 0,
        swr: cacheOptions.swr ?? EDGE_SWR_SECONDS,
        staleIfError: EDGE_STALE_IF_ERROR_SECONDS,
        tags: withLocaleTag(cacheOptions.tags ?? [], requestLocale(request)),
      });
      if (cacheOptions.lastModified) headers.set('last-modified', cacheOptions.lastModified.toUTCString());
      if (cacheOptions.etag) headers.set('etag', cacheOptions.etag);
      return headers;
    },

    async onRequest(context, next): Promise<Response> {
      const { request } = context;
      if (request.method !== 'GET') return next();
      const url = new URL(request.url);
      const key = cacheKey(url, request.headers.get(LOCALE_HEADER) ?? 'en', ignored);

      const cached = lru.get(key);
      if (cached) return toResponse(cached, request, 'HIT');

      const inFlight = pending.get(key);
      if (inFlight) {
        const entry = await inFlight;
        // Not cacheable after all (cookie, error, no TTL): render this one too.
        if (entry) return toResponse(entry, request, 'HIT');
        return next();
      }
      let settle: (entry: Entry | null) => void = () => {};
      pending.set(
        key,
        new Promise<Entry | null>((resolve) => {
          settle = resolve;
        }),
      );
      let stored: Entry | null = null;
      try {
        const response = await render();
        return response;
      } finally {
        pending.delete(key);
        settle(stored);
      }

      async function render(): Promise<Response> {
        const response = await next();
        const { maxAge } = parseEdgeCacheControl(response.headers.get(CDN_CACHE_CONTROL_HEADER));
        if (
          maxAge <= 0 ||
          !CACHEABLE_STATUS.has(response.status) ||
          response.headers.has('set-cookie') ||
          varyBlocksCaching(response) ||
          /\bno-store\b|\bprivate\b/i.test(response.headers.get('cache-control') ?? '')
        ) {
          return response;
        }

        // Combinations of two or more categories/tags are rarely asked twice (crawlers walk them):
        // keeping them would only evict the pages people read. The edge still caches them.
        if (multiTaxonomyQuery(url)) return response;

        const body = new Uint8Array(await response.arrayBuffer());
        const headers: Array<[string, string]> = [];
        response.headers.forEach((value, name) => {
          if (name !== 'set-cookie' && name !== 'etag' && name !== ORIGIN_CACHE_HEADER) headers.push([name, value]);
        });
        const entry: Entry = {
          body,
          status: response.status,
          headers,
          tags: parseTagHeader(response.headers.get(INTERNAL_TAGS_HEADER)),
          etag: strongEtag(body),
          path: url.pathname + url.search,
        };
        lru.set(key, entry, { ttl: maxAge * 1000 });
        stored = entry;
        return toResponse(entry, request, 'MISS');
      }
    },

    async invalidate(invalidateOptions: InvalidateOptions): Promise<void> {
      const tags = new Set(
        invalidateOptions.tags === undefined
          ? []
          : Array.isArray(invalidateOptions.tags)
            ? invalidateOptions.tags
            : [invalidateOptions.tags],
      );
      const path = invalidateOptions.path;
      for (const [key, entry] of lru.entries()) {
        if ((path !== undefined && entry.path === path) || entry.tags.some((tag) => tags.has(tag))) lru.delete(key);
      }
    },
  };
}

/** Astro cache-provider factory (`cache.provider.entrypoint`). */
export default function cloudflareTags(config: CloudflareTagsOptions | undefined): CacheProvider {
  return createCloudflareTagsProvider(config ?? {});
}
