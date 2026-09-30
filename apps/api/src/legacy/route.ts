/**
 * Route helper of the legacy layer. Legacy routes are registered from their `@sotf/contracts`
 * endpoint (method, path, params/query validation, `config.endpoint`, so the platform applies the
 * legacy CORS, the rate-limit bucket, cache headers + Cache-Tag + ETag and the legacy error
 * envelope), but the body is written here, byte-exact:
 *
 * - JSON as `application/json` **without** charset (Fastify's serializer would append
 *   `; charset=utf-8` and re-order nothing but validate strictly, which the snake_case aliases and
 *   the byte-exact bodies do not need);
 * - KelvinSeek as `text/plain;charset=utf-8`.
 *
 * Tier 2 (deprecated) routes add `Deprecation`, `Sunset` and `Link` (PLAN §5.5). Successful JSON
 * bodies of public routes are kept in a tag-invalidated in-process LRU for a few seconds (RedManager
 * and UpdatesChecker walk every page at start-up).
 */
import { type CacheTag, type Endpoint, resolveCacheTags } from '@sotf/contracts';
import { LEGACY_JSON_CONTENT_TYPE, legacyDeprecationHeaders } from '@sotf/contracts/legacy';
import type { TaggedCache } from '@sotf/core';
import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export interface LegacyJsonResult {
  /** Body (serialised with `JSON.stringify`; objects must already be in legacy key order). */
  json: unknown;
  /** Default 200. */
  status?: number;
  /** Values of the endpoint's cache-tag templates (`mod:{id}` → `{ id }`). */
  cacheValues?: Record<string, string | number>;
  /** Extra cache tags. */
  tags?: CacheTag[];
  /** Do not keep this answer in the LRU. */
  noCache?: boolean;
}

export interface LegacyTextResult {
  text: string;
  contentType: string;
  status?: number;
}

export type LegacyResult = LegacyJsonResult | LegacyTextResult;

export interface LegacyRequestInput {
  params: Record<string, string>;
  query: Record<string, unknown>;
  request: FastifyRequest;
  reply: FastifyReply;
}

export type LegacyHandler = (input: LegacyRequestInput) => Promise<LegacyResult>;

interface CachedBody {
  status: number;
  body: Buffer;
  cacheValues: Record<string, string | number>;
  tags: CacheTag[];
}

export interface LegacyRouteOptions {
  /** `Sunset` of Tier 2 routes. */
  sunset: Date;
  /** Response LRU (null = disabled). */
  cache: TaggedCache<CachedBody> | null;
}

export type { CachedBody as LegacyCachedBody };

function isText(result: LegacyResult): result is LegacyTextResult {
  return (result as LegacyTextResult).text !== undefined;
}

function sendBody(reply: FastifyReply, status: number, contentType: string, body: Buffer): FastifyReply {
  return reply.code(status).header('content-type', contentType).send(body);
}

/** Registers a legacy route for `endpoint`. */
export function legacyRoute(
  app: FastifyInstance,
  endpoint: Endpoint,
  handler: LegacyHandler,
  options: LegacyRouteOptions,
): void {
  const schema: Record<string, unknown> = {};
  if (endpoint.params) schema.params = endpoint.params;
  if (endpoint.query) schema.querystring = endpoint.query;
  const deprecation = endpoint.deprecated ? legacyDeprecationHeaders(options.sunset) : null;
  const cacheable = endpoint.cache.kind === 'public' && options.cache !== null;

  app.route({
    method: endpoint.method,
    url: endpoint.path,
    schema,
    config: { endpoint },
    handler: async (request, reply) => {
      if (deprecation) reply.headers(deprecation);
      const key = `${request.method === 'HEAD' ? 'GET' : request.method} ${request.url}`;
      if (cacheable) {
        const hit = options.cache?.get(key);
        if (hit) {
          Object.assign(request.cacheValues, hit.cacheValues);
          request.extraCacheTags.push(...hit.tags);
          return sendBody(reply, hit.status, LEGACY_JSON_CONTENT_TYPE, hit.body);
        }
      }
      const result = await handler({
        params: (request.params ?? {}) as Record<string, string>,
        query: (request.query ?? {}) as Record<string, unknown>,
        request,
        reply,
      });
      const status = result.status ?? 200;
      if (isText(result)) return sendBody(reply, status, result.contentType, Buffer.from(result.text, 'utf8'));
      const cacheValues = result.cacheValues ?? {};
      const tags = result.tags ?? [];
      Object.assign(request.cacheValues, cacheValues);
      request.extraCacheTags.push(...tags);
      const body = Buffer.from(JSON.stringify(result.json), 'utf8');
      if (cacheable && !result.noCache && status === 200) {
        const policyTags = endpoint.cache.kind === 'public' ? resolveCacheTags(endpoint.cache.tags, cacheValues) : [];
        options.cache?.set(key, { status, body, cacheValues, tags }, [...new Set([...policyTags, ...tags])]);
      }
      return sendBody(reply, status, LEGACY_JSON_CONTENT_TYPE, body);
    },
  });
}
