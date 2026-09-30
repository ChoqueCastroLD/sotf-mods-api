/**
 * Tier 3 (PLAN §5.5): every authenticated or mutating legacy route was retired at the cut-over and
 * answers **410** with the exact legacy envelope `LEGACY_GONE_BODY`, for every method it had (`*` =
 * every method but OPTIONS). CORS preflights keep answering 204 (legacy CORS). The KelvinGPT paths
 * (`/api/kelvin-gpt*`, which carried the user's OpenAI key in the URL) are gone too.
 *
 * The retired routes are answered from the not-found handlers of their path prefixes instead of
 * being registered as routes: no body is ever parsed (any content type is accepted and ignored,
 * Node discards the unread upload) and the cookie-CSRF checks of real routes do not apply (the
 * legacy surface has no cookies), so a retired multipart upload, a body-less `DELETE` or a
 * malformed JSON login all get the 410 envelope instead of 403/413/415/422. Anything else under
 * those prefixes that matches no route gets the usual legacy 404.
 */
import { LEGACY_GONE_BODY, LEGACY_JSON_CONTENT_TYPE, LEGACY_RETIRED_ROUTES } from '@sotf/contracts/legacy';
import type { FastifyInstance } from 'fastify';
import { pathOf } from '../lib/surface.ts';
import { sendError } from '../plugins/errors.ts';

const GONE = Buffer.from(JSON.stringify(LEGACY_GONE_BODY), 'utf8');

type RetiredMethod = (typeof LEGACY_RETIRED_ROUTES)[number]['method'];

/** The retired routes: the contract list plus the bare `/api/kelvin-gpt` of Nick's Kelvin GPT (2023). */
export const RETIRED_ROUTES: ReadonlyArray<{ method: RetiredMethod; path: string }> = [
  ...LEGACY_RETIRED_ROUTES,
  { method: '*', path: '/api/kelvin-gpt' },
];

interface CompiledRoute {
  path: string;
  methods: ReadonlySet<string> | '*';
  pattern: RegExp;
}

function compile(route: { method: RetiredMethod; path: string }): CompiledRoute {
  const source = route.path
    .split('/')
    .map((segment) => {
      if (segment === '*') return '.*';
      if (segment.startsWith(':')) return '[^/]+';
      return segment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    })
    .join('/');
  const methods = route.method === '*' ? '*' : new Set(route.method === 'GET' ? ['GET', 'HEAD'] : [route.method]);
  return { path: route.path, methods, pattern: new RegExp(`^${source}$`) };
}

const COMPILED = RETIRED_ROUTES.map(compile);

/** The retired route pattern `method path` matches (e.g. `/api/auth/*`), or null. */
export function retiredRouteOf(method: string, path: string): string | null {
  if (method === 'OPTIONS') return null;
  const route = COMPILED.find(
    (candidate) => (candidate.methods === '*' || candidate.methods.has(method)) && candidate.pattern.test(path),
  );
  return route?.path ?? null;
}

/** True when `method path` is a retired legacy route. */
export function isRetired(method: string, path: string): boolean {
  return retiredRouteOf(method, path) !== null;
}

/** `/api/<first segment>` of every retired route: where the not-found handlers live. */
export const RETIRED_PREFIXES: readonly string[] = [
  ...new Set(RETIRED_ROUTES.map((route) => route.path.split('/').slice(0, 3).join('/'))),
];

export async function registerRetiredRoutes(app: FastifyInstance): Promise<void> {
  for (const prefix of RETIRED_PREFIXES) {
    await app.register(
      async (scope) => {
        scope.removeAllContentTypeParsers();
        scope.addContentTypeParser('*', (_request, _payload, done) => done(null, undefined));
        scope.setNotFoundHandler(async (request, reply) => {
          const path = pathOf(request.url);
          if (!isRetired(request.method, path)) {
            return sendError(request, reply, {
              code: 'NOT_FOUND',
              status: 404,
              detail: `No route for ${request.method} ${path}`,
            });
          }
          return reply
            .code(410)
            .header('cache-control', 'no-store')
            .header('content-type', LEGACY_JSON_CONTENT_TYPE)
            .send(GONE);
        });
      },
      { prefix },
    );
  }
}
