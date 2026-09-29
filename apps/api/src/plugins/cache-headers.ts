/**
 * HTTP caching of contract responses (PLAN §2.7, §5.1 "Caché"): the endpoint's policy becomes
 * `Cache-Control` + `Cloudflare-CDN-Cache-Control` + `Cache-Tag` (tags resolved with the **entity**
 * values the handler put in `request.cacheValues`) and `@fastify/etag` adds `ETag`/304.
 *
 * Publicly cached responses never set cookies. Errors are always `no-store` (see errors.ts);
 * responses of non-contract routes default to `no-store` unless the route set its own header.
 */
import etag from '@fastify/etag';
import { cacheHeaders, resolveCacheTags } from '@sotf/contracts';
import type { FastifyInstance } from 'fastify';

export async function setupCacheHeaders(app: FastifyInstance): Promise<void> {
  app.addHook('onSend', async (request, reply, payload) => {
    if (reply.statusCode >= 400) return payload;
    const endpoint = request.routeOptions.config?.endpoint;
    if (!endpoint) {
      if (!reply.hasHeader('cache-control')) reply.header('cache-control', 'no-store');
      return payload;
    }
    const policy = endpoint.cache;
    const tags =
      policy.kind === 'public'
        ? [...resolveCacheTags(policy.tags, request.cacheValues), ...request.extraCacheTags].filter(
            (tag, index, all) => all.indexOf(tag) === index,
          )
        : [];
    for (const [name, value] of Object.entries(cacheHeaders(policy, tags))) reply.header(name, value);
    if (policy.kind === 'public') reply.removeHeader('set-cookie');
    return payload;
  });
  await app.register(etag, { weak: true });
}
