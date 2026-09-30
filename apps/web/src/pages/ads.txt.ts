/**
 * `GET /ads.txt` (PLAN §4.4, §8.5): byte-for-byte the legacy file (AdSense seller verification).
 * Cached at the edge for a day; purged with `html` on deploy.
 */
import type { APIRoute } from 'astro';
import { EDGE_TTL, edgeCacheHeaders } from '../lib/cache/policy.ts';
import { ADS_TXT } from '../lib/site.ts';

export const prerender = false;

export const GET: APIRoute = () => {
  const headers = edgeCacheHeaders({
    maxAge: EDGE_TTL.static,
    tags: ['html'],
    browserCacheControl: 'public, max-age=3600',
  });
  headers.set('content-type', 'text/plain; charset=utf-8');
  return new Response(ADS_TXT, { status: 200, headers });
};
