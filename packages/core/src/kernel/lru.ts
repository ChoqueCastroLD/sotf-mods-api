/**
 * In-process LRU caches with tag invalidation (PLAN §2.7 layer 4): the API keeps hot reads (mod by
 * slug, listings, search index, facets) for 30–60 s and evicts them by cache tag when any process
 * publishes `NOTIFY cache` (see `notify.ts`). `CacheRegistry.attach(listener)` wires every cache to
 * the shared LISTEN connection; after a reconnection all caches are cleared, because invalidations
 * may have been missed.
 */

import { PG_CACHE_CHANNEL } from '@sotf/contracts/events';
import { LRUCache } from 'lru-cache';
import type { PgListener } from './listener.ts';
import { decodeCacheInvalidation } from './notify.ts';

export interface TaggedCacheOptions {
  /** Name (metrics/logs). */
  name: string;
  /** Max entries (default 500). */
  max?: number;
  /** Default TTL in ms (default 60 s). */
  ttlMs?: number;
}

interface Entry<V> {
  value: V;
  tags: readonly string[];
}

export class TaggedCache<V extends NonNullable<unknown>> {
  readonly name: string;
  readonly #lru: LRUCache<string, Entry<V>>;
  readonly #byTag = new Map<string, Set<string>>();
  readonly #inflight = new Map<string, Promise<V>>();
  /** Bumped by every invalidation: loads started before it are not stored. */
  #generation = 0;
  hits = 0;
  misses = 0;

  constructor(options: TaggedCacheOptions) {
    this.name = options.name;
    this.#lru = new LRUCache<string, Entry<V>>({
      max: options.max ?? 500,
      ttl: options.ttlMs ?? 60_000,
      dispose: (entry, key) => this.#unindex(key, entry.tags),
    });
  }

  get size(): number {
    return this.#lru.size;
  }

  get(key: string): V | undefined {
    const entry = this.#lru.get(key);
    if (entry) this.hits += 1;
    else this.misses += 1;
    return entry?.value;
  }

  set(key: string, value: V, tags: readonly string[] = [], ttlMs?: number): void {
    this.#lru.set(key, { value, tags }, ttlMs === undefined ? undefined : { ttl: ttlMs });
    for (const tag of tags) {
      let keys = this.#byTag.get(tag);
      if (!keys) {
        keys = new Set();
        this.#byTag.set(tag, keys);
      }
      keys.add(key);
    }
  }

  /**
   * Returns the cached value or loads it once (concurrent callers share the load). A load that
   * overlaps an invalidation is returned but not cached.
   */
  async getOrLoad(key: string, load: () => Promise<{ value: V; tags: readonly string[] }>, ttlMs?: number): Promise<V> {
    const cached = this.get(key);
    if (cached !== undefined) return cached;
    const pending = this.#inflight.get(key);
    if (pending) return pending;
    const generation = this.#generation;
    const promise = (async () => {
      try {
        const { value, tags } = await load();
        if (generation === this.#generation) this.set(key, value, tags, ttlMs);
        return value;
      } finally {
        this.#inflight.delete(key);
      }
    })();
    this.#inflight.set(key, promise);
    return promise;
  }

  delete(key: string): void {
    this.#lru.delete(key);
  }

  /** Evicts every entry carrying any of the tags. Returns how many entries were evicted. */
  invalidateTags(tags: Iterable<string>): number {
    this.#generation += 1;
    let evicted = 0;
    for (const tag of tags) {
      const keys = this.#byTag.get(tag);
      if (!keys) continue;
      for (const key of [...keys]) {
        if (this.#lru.delete(key)) evicted += 1;
      }
      this.#byTag.delete(tag);
    }
    return evicted;
  }

  clear(): void {
    this.#generation += 1;
    this.#lru.clear();
    this.#byTag.clear();
  }

  #unindex(key: string, tags: readonly string[]): void {
    for (const tag of tags) {
      const keys = this.#byTag.get(tag);
      if (!keys) continue;
      keys.delete(key);
      if (keys.size === 0) this.#byTag.delete(tag);
    }
  }
}

/** Every LRU of a process, invalidated together. */
export class CacheRegistry {
  readonly #caches = new Map<string, TaggedCache<NonNullable<unknown>>>();

  /** Creates (or returns the existing) cache with this name. */
  create<V extends NonNullable<unknown>>(options: TaggedCacheOptions): TaggedCache<V> {
    const existing = this.#caches.get(options.name);
    if (existing) return existing as unknown as TaggedCache<V>;
    const cache = new TaggedCache<V>(options);
    this.#caches.set(options.name, cache as unknown as TaggedCache<NonNullable<unknown>>);
    return cache;
  }

  list(): ReadonlyArray<TaggedCache<NonNullable<unknown>>> {
    return [...this.#caches.values()];
  }

  invalidate(tags: readonly string[] | '*'): number {
    let evicted = 0;
    for (const cache of this.#caches.values()) {
      if (tags === '*') {
        evicted += cache.size;
        cache.clear();
      } else evicted += cache.invalidateTags(tags);
    }
    return evicted;
  }

  /** Subscribes to `NOTIFY cache`; clears everything after a reconnection. Returns a detach function. */
  attach(listener: PgListener): () => void {
    const off = listener.on(PG_CACHE_CHANNEL, (payload) => {
      const tags = decodeCacheInvalidation(payload);
      if (tags) this.invalidate(tags);
    });
    const offReconnect = listener.onReconnect(() => this.invalidate('*'));
    return () => {
      off();
      offReconnect();
    };
  }
}
