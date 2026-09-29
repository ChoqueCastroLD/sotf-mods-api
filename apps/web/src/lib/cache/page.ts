/**
 * `setPageCache(Astro, pageCache.mod(id, userId))`: the one call a public page makes to be cached
 * at the edge and in the origin LRU (PLAN §2.7). It records the policy in `Astro.locals` (the
 * middleware applies the headers wherever Astro's cache is unavailable: dev server, error pages)
 * and forwards it to Astro's route cache (`Astro.cache`, provider `cloudflareTags()`).
 *
 * Pass `false` for responses that must never be shared (anything that depends on the session).
 */
import type { PageCachePolicy } from './policy.ts';

interface CacheLike {
  readonly enabled: boolean;
  set(input: { maxAge?: number; swr?: number; tags?: string[] } | false): void;
}

export interface PageContext {
  locals: App.Locals;
  /** `Astro.cache` / `context.cache`: absent while Astro renders an error page. */
  cache?: CacheLike | undefined;
}

export function setPageCache(context: PageContext, policy: PageCachePolicy | false): void {
  context.locals.pageCache = policy;
  const cache = context.cache;
  if (!cache?.enabled) return;
  if (policy === false) cache.set(false);
  else cache.set({ maxAge: policy.maxAge, swr: policy.swr, tags: [...policy.tags] });
}
