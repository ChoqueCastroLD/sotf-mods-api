/**
 * Request-side security of the web SSR (PLAN §9.1, WP-93): a Fetch Metadata *resource isolation*
 * policy in front of every page and endpoint Astro serves.
 *
 * Browsers send `Sec-Fetch-Site`/`Mode`/`Dest` on every request. Requests without them (old
 * browsers, crawlers, RedManager, server-to-server calls with `X-Internal-Auth`) are allowed:
 * they cannot carry a cross-site attack. For browser requests:
 *
 * - same-origin, same-site and user-initiated (`none`) requests pass;
 * - cross-site **navigations** (`GET`/`HEAD`, a link from another site) pass;
 * - cross-site **state-changing** requests (`POST`, `PUT`, `PATCH`, `DELETE`) are refused, whatever
 *   their content type (Astro's `checkOrigin` only covers form encodings);
 * - cross-site **subresource loads** of our documents (`<script src>`, `<link rel=stylesheet>`,
 *   workers, `<object>`/`<embed>`) are refused (XSSI and cross-origin leak hardening);
 * - the resources that exist to be consumed cross-site stay open: `/embed/*` (framed),
 *   `/oembed`, feeds, sitemaps, text files, the web manifest and `/healthz`.
 *
 * `TRACE`, `TRACK` and `CONNECT` are refused outright. Refusals are `403`/`405`, `no-store`, never
 * cached. The middleware is pure request logic: it is composed first in `src/middleware/index.ts`
 * (`sequence(securityMiddleware, …)`).
 */
import { defineMiddleware } from 'astro:middleware';

const UNSAFE_METHODS = new Set(['POST', 'PUT', 'PATCH', 'DELETE']);
const FORBIDDEN_METHODS = new Set(['TRACE', 'TRACK', 'CONNECT']);
/** Destinations that would execute or embed our response as a subresource. */
const SUBRESOURCE_DESTS = new Set([
  'script',
  'style',
  'worker',
  'sharedworker',
  'serviceworker',
  'object',
  'embed',
  'xslt',
  'audioworklet',
  'paintworklet',
]);

/** Paths meant to be read or framed by other sites. */
export function isCrossSiteResource(pathname: string): boolean {
  if (pathname === '/embed' || pathname.startsWith('/embed/')) return true;
  if (pathname === '/oembed' || pathname === '/healthz') return true;
  if (pathname === '/feed.xml' || pathname === '/manifest.webmanifest') return true;
  if (pathname === '/sitemap.xml' || pathname.startsWith('/sitemaps/')) return true;
  // robots.txt, ads.txt, llms.txt, llms-full.txt, the IndexNow key file.
  return /^\/[\w.-]+\.txt$/.test(pathname);
}

export type IsolationDecision =
  | { allow: true }
  | { allow: false; status: 403 | 405; reason: 'method' | 'cross-site-write' | 'cross-site-subresource' };

function header(headers: Headers, name: string): string | undefined {
  return headers.get(name)?.trim().toLowerCase() || undefined;
}

/** The decision for one request (pure; exported for the security tests). */
export function resourceIsolationDecision(method: string, pathname: string, headers: Headers): IsolationDecision {
  const verb = method.toUpperCase();
  if (FORBIDDEN_METHODS.has(verb)) return { allow: false, status: 405, reason: 'method' };

  const site = header(headers, 'sec-fetch-site');
  if (site === undefined || site === 'same-origin' || site === 'same-site' || site === 'none') return { allow: true };
  if (isCrossSiteResource(pathname)) return { allow: true };

  if (UNSAFE_METHODS.has(verb)) return { allow: false, status: 403, reason: 'cross-site-write' };
  const mode = header(headers, 'sec-fetch-mode');
  const dest = header(headers, 'sec-fetch-dest');
  if (mode === 'navigate') return { allow: true };
  if (dest !== undefined && SUBRESOURCE_DESTS.has(dest)) {
    return { allow: false, status: 403, reason: 'cross-site-subresource' };
  }
  return { allow: true };
}

function refusal(decision: Extract<IsolationDecision, { allow: false }>): Response {
  const headers = new Headers({
    'content-type': 'text/plain; charset=utf-8',
    'cache-control': 'no-store',
    'x-sotf-refused': decision.reason,
  });
  if (decision.status === 405) headers.set('allow', 'GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS');
  return new Response(decision.status === 405 ? 'Method Not Allowed' : 'Forbidden', {
    status: decision.status,
    headers,
  });
}

export const securityMiddleware = defineMiddleware((context, next) => {
  const decision = resourceIsolationDecision(context.request.method, context.url.pathname, context.request.headers);
  if (!decision.allow) return refusal(decision);
  return next();
});
