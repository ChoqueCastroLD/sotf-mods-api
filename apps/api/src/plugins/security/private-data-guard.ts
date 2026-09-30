/**
 * Last line of defence for "nunca hay datos privados en lo cacheado" (PLAN §9.2).
 *
 * A contract response the CDN may cache (`cache.kind: 'public'`) is scanned for object keys of
 * `PRIVATE_RESPONSE_KEYS` (`@sotf/core/security/policy`: email, IP, session and token fields…).
 * A match means a DTO mapper leaked account data into a shared cache, so the response is demoted
 * before it leaves the process:
 *
 * - always: `Cache-Control: private, no-store`, no edge headers and no `Cache-Tag` (nothing is
 *   stored by Cloudflare or the browser cache), and an `error` log naming the route and the keys;
 * - outside production (`SITE_ENV` ≠ `production`): the request fails with `500 INTERNAL`, so the
 *   leak is caught in development, CI and staging instead of being served.
 *
 * Only strings and buffers are scanned (streams and redirects carry no DTO). The scan is a single
 * regex pass over the serialized body.
 */
import { findPrivateKeys } from '@sotf/core/security/policy';
import type { FastifyInstance } from 'fastify';
import { httpError } from '../errors.ts';

export interface PrivateDataGuardOptions {
  /** Fail the request (500) instead of only demoting the cache headers. */
  strict: boolean;
}

const EDGE_HEADERS = ['cloudflare-cdn-cache-control', 'cdn-cache-control', 'cache-tag', 'etag'] as const;

function bodyText(payload: unknown): string | null {
  if (typeof payload === 'string') return payload;
  if (Buffer.isBuffer(payload)) return payload.toString('utf8');
  return null;
}

export function setupPrivateDataGuard(app: FastifyInstance, options: PrivateDataGuardOptions): void {
  app.addHook('onSend', async (request, reply, payload) => {
    if (reply.statusCode >= 300) return payload;
    const endpoint = request.routeOptions.config?.endpoint;
    if (endpoint?.cache.kind !== 'public') return payload;
    const body = bodyText(payload);
    if (body === null) return payload;
    const keys = findPrivateKeys(body);
    if (keys.length === 0) return payload;

    reply.header('cache-control', 'private, no-store');
    for (const name of EDGE_HEADERS) reply.removeHeader(name);
    request.log.error(
      { endpoint: endpoint.id, route: request.routeOptions.url, keys },
      'private fields in a publicly cached response: caching disabled',
    );
    if (options.strict) throw httpError('INTERNAL', 'The response contained private fields');
    return payload;
  });
}
