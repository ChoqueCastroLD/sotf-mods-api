/**
 * Pure helpers of the server entry (`fetch.ts`), kept free of Astro runtime imports so they are
 * unit-tested directly.
 */
import { publishCacheTags } from '../cache/policy.ts';
import { LOCALE_HEADER } from '../cache/request-locale.ts';
import type { CspMode } from '../security/csp.ts';
import { applySecurityHeaders } from '../security/headers.ts';
import { INTERNAL_HEADER_PREFIX } from './internal-headers.ts';

/** Astro keeps per-request render options (client address, locals…) on the request object. */
const RENDER_OPTIONS = Symbol.for('astro.renderOptions');

export function redirectResponse(status: number, location: string): Response {
  return new Response(null, {
    status,
    headers: {
      location,
      // Permanent canonicalization: safe to keep at the edge for an hour.
      'cache-control': 'public, max-age=3600',
      'cloudflare-cdn-cache-control': 'public, max-age=3600',
    },
  });
}

/** Builds the request Astro routes: locale-less URL, internal headers reset. */
export function prepareRequest(request: Request, path: string, locale: string): Request {
  const headers = new Headers(request.headers);
  for (const name of [...headers.keys()]) {
    if (name.startsWith(INTERNAL_HEADER_PREFIX)) headers.delete(name);
  }
  headers.set(LOCALE_HEADER, locale);
  const url = new URL(request.url);
  const target = new URL(path, url.origin);
  const hasBody = request.method !== 'GET' && request.method !== 'HEAD' && request.body !== null;
  const init: RequestInit & { duplex?: 'half' } = {
    method: request.method,
    headers,
    redirect: request.redirect,
    signal: request.signal,
  };
  if (hasBody) {
    init.body = request.body;
    init.duplex = 'half';
  }
  const prepared = new Request(target, init);
  const options = Reflect.get(request, RENDER_OPTIONS) as Record<string, unknown> | undefined;
  if (options) {
    // The adapter may have matched the prefixed URL already; let Astro match the rewritten one.
    Reflect.set(prepared, RENDER_OPTIONS, { ...options, routeData: undefined });
  }
  return prepared;
}

/** Final touches on every response produced by Astro. */
export function finalizeResponse(
  response: Response,
  siteEnv: string,
  pathname: string,
  options: { cspMode?: CspMode | undefined } = {},
): Response {
  let out = response;
  try {
    publishCacheTags(out.headers);
  } catch {
    // Immutable headers (e.g. a Response.redirect): copy into a mutable response.
    out = new Response(response.body, response);
    publishCacheTags(out.headers);
  }
  applySecurityHeaders(
    out.headers,
    options.cspMode === undefined ? { siteEnv } : { siteEnv, cspMode: options.cspMode },
    pathname,
  );
  return out;
}
