/**
 * CSRF protection with Fetch Metadata (PLAN §5.1 "CSRF", §9.1). For unsafe methods
 * (POST/PUT/PATCH/DELETE):
 *
 * 1. Origin: `Sec-Fetch-Site: same-origin` passes. Any other value (`same-site`, `cross-site`,
 *    `none`) only passes with an `Origin` in the allowlist (PUBLIC_SITE_URL + CSRF_TRUSTED_ORIGINS).
 *    Without Fetch Metadata (older browsers), an `Origin` header must be in the allowlist; requests
 *    with neither header are not browser-initiated (SSR, curl, apps) and cannot carry a CSRF attack.
 * 2. Content type: `application/json` only (the typed client always sends a JSON body, `{}` when
 *    the contract has none). Exceptions: contracts with `bodyKind: 'text'` (beacons, `text/plain`)
 *    and contracts that require a `signed_token` (RFC 8058 one-click unsubscribe: form body posted
 *    cross-site by mail providers; the signed token is the protection, so step 1 is skipped too).
 *
 * Internal routes (`X-Internal-Auth`, no cookies) and routes flagged `config.csrfExempt` (the CSP
 * report collector: no credentials, no user state) are exempt. No GET mutates state.
 */
import type { Endpoint } from '@sotf/contracts';
import type { FastifyInstance, FastifyRequest } from 'fastify';
import { surfaceOf } from '../lib/surface.ts';
import { httpError } from './errors.ts';

const UNSAFE = new Set(['POST', 'PUT', 'PATCH', 'DELETE']);

function header(request: FastifyRequest, name: string): string | undefined {
  const value = request.headers[name];
  return (Array.isArray(value) ? value[0] : value)?.trim() || undefined;
}

/** Media type without parameters, lower-case. */
export function mediaTypeOf(contentType: string | undefined): string | undefined {
  return contentType?.split(';', 1)[0]?.trim().toLowerCase() || undefined;
}

export function allowedContentTypes(endpoint: Endpoint | undefined): readonly string[] {
  if (endpoint?.requires?.includes('signed_token')) {
    return ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
  }
  if (endpoint?.bodyKind === 'text') return ['text/plain', 'application/json'];
  return ['application/json'];
}

export interface CsrfOptions {
  /** Allowed origins (scheme://host[:port]). */
  trustedOrigins: readonly string[];
}

export function checkCsrf(request: FastifyRequest, options: CsrfOptions): void {
  if (!UNSAFE.has(request.method)) return;
  // Credential-less collectors that change no user state (CSP reports, plugins/security).
  if (request.routeOptions.config?.csrfExempt === true) return;
  const endpoint = request.routeOptions.config?.endpoint;
  if (surfaceOf(request.url) === 'internal' || endpoint?.auth === 'internal') return;
  const signedToken = endpoint?.requires?.includes('signed_token') ?? false;

  if (!signedToken) {
    const site = header(request, 'sec-fetch-site')?.toLowerCase();
    const origin = header(request, 'origin');
    const originTrusted = origin !== undefined && options.trustedOrigins.includes(origin);
    if (site !== undefined) {
      if (site !== 'same-origin' && !originTrusted) throw httpError('FORBIDDEN', 'Cross-site request blocked');
    } else if (origin !== undefined && !originTrusted) {
      throw httpError('FORBIDDEN', 'Cross-site request blocked');
    }
  }

  const type = mediaTypeOf(header(request, 'content-type'));
  if (!type || !allowedContentTypes(endpoint).includes(type)) {
    throw httpError('UNSUPPORTED_MEDIA_TYPE', `Content-Type must be ${allowedContentTypes(endpoint).join(' or ')}`);
  }
}

export function setupCsrf(app: FastifyInstance, options: CsrfOptions): void {
  app.addHook('onRequest', async (request) => {
    if (!request.routeOptions.url) return;
    checkCsrf(request, options);
  });
}
