/**
 * Security headers of every web response (PLAN §9.1 "Cabeceras", WP-93). Called by the server
 * entry (`src/lib/server/entry-utils.ts`) after Astro rendered the response, for every response
 * including redirects and error pages. Values never vary per user, so they are safe on
 * edge-cached HTML.
 *
 * - **CSP**: Astro's per-page policy (see `csp.ts`) is completed with `frame-ancestors`,
 *   `upgrade-insecure-requests` (HTTPS), reporting and the runtime origins, then sent enforcing or
 *   report-only depending on the environment. Report-only still enforces `frame-ancestors` (the
 *   clickjacking protection never goes away). HTML that did not get a policy from Astro gets the
 *   static fallback; non-HTML responses get `default-src 'none'`.
 * - `Strict-Transport-Security` 6 months, no `includeSubDomains`/`preload` on the apex yet.
 * - `X-Frame-Options: DENY` (legacy browsers) except `/embed/*`.
 * - `Referrer-Policy`, `Permissions-Policy`, COOP `same-origin-allow-popups` (OAuth/ad popups),
 *   `X-Content-Type-Options`, and `X-Robots-Tag: noindex` outside production.
 */
import { loadEnv } from '../env.ts';
import { CSP_REPORT_GROUP, CSP_REPORT_PATH, type CspMode, cspModeFor, fallbackPolicy, finalizePolicy } from './csp.ts';

export interface SecurityHeaderOptions {
  /** `SITE_ENV`: anything but production adds `X-Robots-Tag: noindex` (PLAN §8.6, §11.4). */
  siteEnv: string;
  /** Public origin (`PUBLIC_SITE_URL`); read from the environment when omitted. */
  siteUrl?: string;
  /** `R2_PUBLIC_BASE_URL`; read from the environment when omitted. */
  r2PublicBaseUrl?: string;
  /** Forces enforcing or report-only (default per `siteEnv`, see `cspModeFor`). */
  cspMode?: CspMode;
}

/** 6 months (PLAN §9.1). */
export const HSTS_VALUE = 'max-age=15552000';

/** The site never needs these features; YouTube facades need media features for their iframe. */
const YOUTUBE = '"https://www.youtube-nocookie.com"';
export const PERMISSIONS_POLICY = [
  'accelerometer=()',
  `autoplay=(self ${YOUTUBE})`,
  'browsing-topics=()',
  'camera=()',
  'display-capture=()',
  `encrypted-media=(self ${YOUTUBE})`,
  `fullscreen=(self ${YOUTUBE})`,
  'geolocation=()',
  'gyroscope=()',
  'hid=()',
  'magnetometer=()',
  'microphone=()',
  'midi=()',
  'payment=()',
  `picture-in-picture=(self ${YOUTUBE})`,
  'publickey-credentials-get=()',
  'screen-wake-lock=()',
  'serial=()',
  'usb=()',
  'xr-spatial-tracking=()',
].join(', ');

/** Strict policy of responses that are not HTML documents (JSON, XML, text, images). */
export const NON_DOCUMENT_CSP = "default-src 'none'; frame-ancestors 'none'; base-uri 'none'; form-action 'none'";

const DEFAULT_R2_PUBLIC_ORIGIN = 'https://r2.sotf-mods.com';
/** Local services of development and preflight (MinIO/S3 on 127.0.0.1, `astro preview`). */
const LOCAL_ORIGINS = ['http://127.0.0.1:*', 'http://localhost:*'];

/** Paths meant to be embedded by third parties (`frame-ancestors *`, PLAN §4.2). */
export function isEmbeddablePath(pathname: string): boolean {
  return pathname === '/embed' || pathname.startsWith('/embed/');
}

function isHtml(headers: Headers): boolean {
  return (headers.get('content-type') ?? '').toLowerCase().includes('text/html');
}

function originOf(url: string | undefined): string | undefined {
  if (!url) return undefined;
  try {
    return new URL(url).origin;
  } catch {
    return undefined;
  }
}

interface ResolvedOptions {
  siteEnv: string;
  siteOrigin: string | undefined;
  r2Origin: string | undefined;
  mode: CspMode;
  https: boolean;
}

function resolveOptions(options: SecurityHeaderOptions): ResolvedOptions {
  let siteUrl = options.siteUrl;
  let r2 = options.r2PublicBaseUrl;
  if (siteUrl === undefined || r2 === undefined) {
    try {
      const env = loadEnv();
      siteUrl ??= env.siteUrl;
      r2 ??= env.r2PublicBaseUrl;
    } catch {
      // The entry validates the environment at start-up; tests may run without one.
    }
  }
  const siteOrigin = originOf(siteUrl);
  return {
    siteEnv: options.siteEnv,
    siteOrigin,
    r2Origin: originOf(r2),
    mode: options.cspMode ?? cspModeFor(options.siteEnv),
    https: siteOrigin?.startsWith('https://') ?? options.siteEnv !== 'development',
  };
}

/** The runtime extra sources of this deployment. */
function extraSources(resolved: ResolvedOptions): Partial<Record<'img-src' | 'media-src' | 'connect-src', string[]>> {
  const extra: string[] = [];
  if (resolved.r2Origin && resolved.r2Origin !== DEFAULT_R2_PUBLIC_ORIGIN) extra.push(resolved.r2Origin);
  if (resolved.siteEnv === 'development' || resolved.siteEnv === 'preflight') extra.push(...LOCAL_ORIGINS);
  if (extra.length === 0) return {};
  return { 'img-src': extra, 'media-src': extra, 'connect-src': extra };
}

function reportUri(resolved: ResolvedOptions): string {
  return resolved.siteOrigin ? `${resolved.siteOrigin}${CSP_REPORT_PATH}` : CSP_REPORT_PATH;
}

/** Sets the CSP headers of an HTML document. */
function applyDocumentCsp(headers: Headers, resolved: ResolvedOptions, embeddable: boolean): void {
  // Idempotent: a response finalized before (report-only moves the full policy aside) keeps it.
  const candidates = [headers.get('content-security-policy'), headers.get('content-security-policy-report-only')];
  const rendered = candidates.find((value) => value && /(?:^|;)\s*script-src\b/.test(value)) ?? null;
  // `astro dev` does not render a policy (Vite injects inline styles and HMR scripts): leave dev alone.
  if (!rendered && resolved.siteEnv === 'development') {
    headers.set('content-security-policy', `frame-ancestors ${embeddable ? '*' : "'none'"}`);
    return;
  }
  const frameAncestors = embeddable ? '*' : "'none'";
  const policy = finalizePolicy(rendered ?? fallbackPolicy(), {
    frameAncestors,
    https: resolved.https,
    reportUri: reportUri(resolved),
    extraSources: extraSources(resolved),
  });
  headers.set('reporting-endpoints', `${CSP_REPORT_GROUP}="${reportUri(resolved)}"`);
  if (resolved.mode === 'report-only') {
    headers.set('content-security-policy-report-only', policy);
    headers.set('content-security-policy', `frame-ancestors ${frameAncestors}`);
  } else {
    headers.delete('content-security-policy-report-only');
    headers.set('content-security-policy', policy);
  }
}

export function applySecurityHeaders(headers: Headers, options: SecurityHeaderOptions, pathname = '/'): Headers {
  const resolved = resolveOptions(options);
  const embeddable = isEmbeddablePath(pathname);

  headers.set('x-content-type-options', 'nosniff');
  if (!headers.has('referrer-policy')) headers.set('referrer-policy', 'strict-origin-when-cross-origin');
  headers.set('permissions-policy', PERMISSIONS_POLICY);
  headers.set('cross-origin-opener-policy', 'same-origin-allow-popups');
  headers.set('x-permitted-cross-domain-policies', 'none');
  if (resolved.https) headers.set('strict-transport-security', HSTS_VALUE);

  if (isHtml(headers)) {
    applyDocumentCsp(headers, resolved, embeddable);
  } else if (!headers.has('content-security-policy')) {
    headers.set('content-security-policy', embeddable ? "default-src 'none'; frame-ancestors *" : NON_DOCUMENT_CSP);
  }
  if (embeddable) headers.delete('x-frame-options');
  else headers.set('x-frame-options', 'DENY');

  if (options.siteEnv !== 'production') headers.set('x-robots-tag', 'noindex, nofollow');
  return headers;
}
