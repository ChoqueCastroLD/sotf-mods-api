/**
 * Baseline security headers of every web response — placeholder of WP-22, hardened by WP-93
 * (`src/middleware/security.ts`, PLAN §9.1). Values never vary per user, so they are safe on
 * edge-cached HTML.
 */

export interface SecurityHeaderOptions {
  /** `SITE_ENV`: anything but production adds `X-Robots-Tag: noindex` (PLAN §8.6, §11.4). */
  siteEnv: string;
}

/** Paths meant to be embedded by third parties (`frame-ancestors *`, PLAN §4.2). */
export function isEmbeddablePath(pathname: string): boolean {
  return pathname === '/embed' || pathname.startsWith('/embed/');
}

export function applySecurityHeaders(headers: Headers, options: SecurityHeaderOptions, pathname = '/'): Headers {
  headers.set('x-content-type-options', 'nosniff');
  if (!headers.has('referrer-policy')) headers.set('referrer-policy', 'strict-origin-when-cross-origin');
  headers.set(
    'permissions-policy',
    'camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=(), interest-cohort=()',
  );
  headers.set('cross-origin-opener-policy', 'same-origin-allow-popups');
  if (isEmbeddablePath(pathname)) {
    headers.set('content-security-policy', 'frame-ancestors *');
  } else {
    headers.set('content-security-policy', "frame-ancestors 'self'");
    headers.set('x-frame-options', 'SAMEORIGIN');
  }
  if (options.siteEnv !== 'production') headers.set('x-robots-tag', 'noindex, nofollow');
  return headers;
}
