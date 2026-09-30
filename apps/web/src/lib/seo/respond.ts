/**
 * Responses of the machine endpoints (PLAN §2.7, §4.4): edge-cached through the same route cache
 * as pages (`setPageCache`: origin LRU + `Cloudflare-CDN-Cache-Control` + `Cache-Tag`, always with
 * `html` so deploys refresh them), plus the right content type.
 */
import type { CacheTag } from '@sotf/contracts/cache';
import { setPageCache } from '../cache/page.ts';
import { EDGE_TTL, pageCache } from '../cache/policy.ts';

export type MachineContext = Parameters<typeof setPageCache>[0];

export const CONTENT_TYPES = {
  xml: 'application/xml; charset=utf-8',
  rss: 'application/rss+xml; charset=utf-8',
  text: 'text/plain; charset=utf-8',
  markdown: 'text/markdown; charset=utf-8',
  json: 'application/json; charset=utf-8',
} as const;

export interface MachineOptions {
  contentType: string;
  /** Edge TTL in seconds (default one hour). */
  maxAge?: number;
  tags?: readonly CacheTag[];
  status?: number;
  headers?: Record<string, string>;
}

/** A cacheable machine response (sitemaps, feeds, llms.txt, Markdown alternates…). */
export function machineResponse(context: MachineContext, body: string, options: MachineOptions): Response {
  setPageCache(context, pageCache.custom(options.maxAge ?? EDGE_TTL.hour, options.tags ?? []));
  return new Response(body, {
    status: options.status ?? 200,
    headers: { 'content-type': options.contentType, ...(options.headers ?? {}) },
  });
}

/** Short-lived plain 404/410 of a machine endpoint (no HTML page for crawlers of feeds). */
export function machineError(context: MachineContext, status: 404 | 410, message: string): Response {
  setPageCache(context, pageCache.custom(EDGE_TTL.notFound, []));
  return new Response(`${message}\n`, {
    status,
    headers: { 'content-type': CONTENT_TYPES.text, 'x-robots-tag': 'noindex' },
  });
}

/** 301 to another machine URL (tolerant resolution of renamed slugs, wrong kind prefix). */
export function machineRedirect(location: string): Response {
  return new Response(null, {
    status: 301,
    headers: {
      location,
      'cache-control': 'public, max-age=3600',
      'cloudflare-cdn-cache-control': 'public, max-age=3600',
      'x-sotf-cache-tags': 'html',
    },
  });
}

/** 503 when the API is unavailable: never cached, crawlers retry later. */
export function machineUnavailable(): Response {
  return new Response('Temporarily unavailable, try again later.\n', {
    status: 503,
    headers: { 'content-type': CONTENT_TYPES.text, 'cache-control': 'no-store', 'retry-after': '120' },
  });
}
