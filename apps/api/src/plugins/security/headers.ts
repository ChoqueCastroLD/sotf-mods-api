/**
 * Response headers of every API response on top of `@fastify/helmet` (PLAN §9.1 "Cabeceras").
 *
 * helmet (configured in `app.ts`) already sends the JSON-API CSP (`default-src 'none'`,
 * `frame-ancestors 'none'`), `X-Content-Type-Options`, `X-Frame-Options`, COOP/CORP and
 * `Referrer-Policy`. This hook adds what helmet does not cover and aligns HSTS with the plan:
 *
 * - `Strict-Transport-Security`: 6 months, sub-domains of `api.` included, **no preload** yet;
 * - a restrictive `Permissions-Policy` (the API never needs a browser feature);
 * - `X-Robots-Tag: noindex` (API bodies are not pages; `/api/docs` included);
 * - any response that sets a cookie is private: `Cache-Control: private, no-store` and no edge
 *   headers, whatever the route declared (a shared cache must never store a `Set-Cookie`).
 */
import type { FastifyInstance, FastifyReply } from 'fastify';

/** 6 months (PLAN §9.1: "HSTS: 6 meses, sin preload al principio"). */
export const HSTS_MAX_AGE_SECONDS = 15_552_000;
export const API_HSTS = `max-age=${HSTS_MAX_AGE_SECONDS}; includeSubDomains`;

export const API_PERMISSIONS_POLICY = [
  'accelerometer=()',
  'autoplay=()',
  'camera=()',
  'display-capture=()',
  'encrypted-media=()',
  'fullscreen=()',
  'geolocation=()',
  'gyroscope=()',
  'magnetometer=()',
  'microphone=()',
  'midi=()',
  'payment=()',
  'picture-in-picture=()',
  'publickey-credentials-get=()',
  'screen-wake-lock=()',
  'sync-xhr=()',
  'usb=()',
  'xr-spatial-tracking=()',
  'browsing-topics=()',
].join(', ');

const EDGE_HEADERS = ['cloudflare-cdn-cache-control', 'cdn-cache-control', 'cache-tag'] as const;

/** Makes a cookie-setting response private (idempotent). Returns true when it changed anything. */
export function privatizeCookieResponse(reply: FastifyReply): boolean {
  if (!reply.hasHeader('set-cookie')) return false;
  const current = String(reply.getHeader('cache-control') ?? '');
  let changed = false;
  if (!/\bno-store\b/.test(current) || !/\bprivate\b/.test(current)) {
    reply.header('cache-control', 'private, no-store');
    changed = true;
  }
  for (const name of EDGE_HEADERS) {
    if (reply.hasHeader(name)) {
      reply.removeHeader(name);
      changed = true;
    }
  }
  return changed;
}

export function setupSecurityHeaders(app: FastifyInstance): void {
  app.addHook('onSend', async (_request, reply, payload) => {
    reply.header('strict-transport-security', API_HSTS);
    reply.header('permissions-policy', API_PERMISSIONS_POLICY);
    if (!reply.hasHeader('x-robots-tag')) reply.header('x-robots-tag', 'noindex, nofollow');
    privatizeCookieResponse(reply);
    return payload;
  });
}
