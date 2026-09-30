/**
 * `POST /_internal/cache/invalidate {tags}` (PLAN §2.7 purge flow, step 1): the `cdn.purge` job
 * evicts tags from this process' origin LRU before purging Cloudflare. Internal only:
 * `X-Internal-Auth` (constant-time), bypassed by the edge (`/_internal/*`), `no-store`.
 *
 * 204 on success · 400 invalid body · 403 bad or missing credentials · 405 other methods.
 */
import { WebCacheInvalidateBody } from '@sotf/contracts/internal';
import type { APIRoute } from 'astro';
import { loadEnv } from '../../../lib/env.ts';
import { isInternalRequest } from '../../../lib/internal-auth.ts';

export const prerender = false;

const NO_STORE = { 'cache-control': 'no-store' };

function problem(status: number, code: string, detail: string): Response {
  return new Response(JSON.stringify({ type: 'about:blank', title: code, status, detail, code }), {
    status,
    headers: { ...NO_STORE, 'content-type': 'application/problem+json' },
  });
}

export const POST: APIRoute = async (context) => {
  if (!isInternalRequest(context.request, loadEnv().internalSecret)) {
    return problem(403, 'FORBIDDEN', 'Missing or invalid X-Internal-Auth.');
  }
  let json: unknown;
  try {
    json = await context.request.json();
  } catch {
    return problem(400, 'VALIDATION_FAILED', 'Body must be JSON: {"tags": [...]}.');
  }
  const parsed = WebCacheInvalidateBody.safeParse(json);
  if (!parsed.success) {
    return problem(400, 'VALIDATION_FAILED', parsed.error.issues.map((issue) => issue.message).join('; '));
  }
  // `context.cache` is the `cloudflareTags()` provider in production; absent/no-op in dev.
  const cache = (context as { cache?: { enabled: boolean; invalidate(options: { tags: string[] }): Promise<void> } })
    .cache;
  if (cache?.enabled) await cache.invalidate({ tags: [...parsed.data.tags] });
  return new Response(null, { status: 204, headers: NO_STORE });
};

export const ALL: APIRoute = () => new Response(null, { status: 405, headers: { ...NO_STORE, allow: 'POST' } });
