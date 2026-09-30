/**
 * Turns a non-200 resolution of a profile into its response: 301 to the canonical URL (edge
 * cached for an hour, like `/@handle`), or the real 404/410 page (the 404 template reads
 * `locals.errorKind`).
 */
import { setPageCache } from '../../lib/cache/page.ts';
import { EDGE_TTL, pageCache } from '../../lib/cache/policy.ts';
import type { ResolvedProfilePage } from './data.ts';

interface PageLike {
  locals: App.Locals;
  cache?: Parameters<typeof setPageCache>[0]['cache'];
  redirect(path: string, status?: 301 | 302 | 303 | 307 | 308): Response;
  rewrite(path: string): Promise<Response>;
}

export async function respondUnresolved(
  page: PageLike,
  resolved: Exclude<ResolvedProfilePage, { kind: 'ok' }>,
): Promise<Response> {
  switch (resolved.kind) {
    case 'redirect':
      setPageCache(page, pageCache.custom(EDGE_TTL.hour));
      return page.redirect(resolved.location, 301);
    case 'gone':
      page.locals.errorKind = 'gone';
      return page.rewrite('/404');
    default:
      page.locals.errorKind = 'not-found';
      return page.rewrite('/404');
  }
}

/** 301 to a clean URL of the same page (malformed `?tab`, `?page` or `?sort`). */
export function redirectClean(page: PageLike, location: string): Response {
  setPageCache(page, pageCache.custom(EDGE_TTL.hour));
  return page.redirect(location, 301);
}
