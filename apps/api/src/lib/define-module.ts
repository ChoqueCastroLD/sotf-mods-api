/**
 * Domain modules (PLAN §2.4 "src/modules/<domain>/", §5.1 "Contratos"). Each module default-exports
 * `defineModule({...})` from `src/modules/<name>/index.ts`; `pnpm gen` lists them in
 * `src/modules/_registry.gen.ts` and `buildApp()` registers them.
 *
 * Routes are never declared by hand: a module *implements* endpoint contracts of @sotf/contracts.
 * The platform derives method, path, validation (Zod), response serialisation, auth level, CSRF
 * rules, rate-limit bucket, cache headers and error format from the contract.
 *
 *   export default defineModule({
 *     name: 'catalog',
 *     register(m) {
 *       m.implement(catalogEndpoints.getMod, async ({ params, ctx, cache }) => {
 *         const mod = await getModDetail(ctx, params.id);
 *         cache({ id: mod.id });           // resolves `mod:{id}` of the contract's cache tags
 *         return mod;
 *       });
 *     },
 *   });
 */
import type { CacheTag, Endpoint } from '@sotf/contracts';
import { responseKindOf, successStatus } from '@sotf/contracts';
import type { Ctx } from '@sotf/core';
import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import type { z } from 'zod';
import { httpError } from '../plugins/errors.ts';
import type { Platform, SessionResolver } from './types.ts';

type Out<S> = S extends z.ZodType ? z.output<S> : Record<string, never>;

/** What a handler receives. */
export interface HandlerInput<E extends Endpoint> {
  params: E extends { params: infer P } ? Out<P> : Record<string, never>;
  query: E extends { query: infer Q } ? Out<Q> : Record<string, never>;
  body: E extends { body: infer B } ? Out<B> : undefined;
  ctx: Ctx;
  request: FastifyRequest;
  reply: FastifyReply;
  /**
   * Values of the contract's cache-tag templates for the **entity** served (e.g. `{ id: mod.id }`
   * for `mod:{id}`, the user id for `user:{id}`), plus optional extra tags.
   */
  cache(values: Record<string, string | number | undefined>, extraTags?: readonly CacheTag[]): void;
}

export interface RedirectOutput {
  location: string;
  /** Default: the contract's status (302). Downloads are never 301 (PLAN §2.8). */
  status?: 302 | 303 | 307;
  headers?: Record<string, string>;
}

export interface TextOutput {
  body: string;
  contentType?: string;
  /** `Content-Disposition: attachment; filename=…` (CSV exports). */
  filename?: string;
}

/** What a handler returns, by response kind (`void`: handlers of empty responses return nothing). */
export type HandlerOutput<E extends Endpoint> = E extends { responseKind: 'empty' }
  ? // biome-ignore lint/suspicious/noConfusingVoidType: the handler's return type (Promise<void>)
    void
  : E extends { responseKind: 'redirect' }
    ? RedirectOutput
    : E extends { responseKind: 'text' | 'csv' }
      ? string | TextOutput
      : E extends { responseKind: 'event-stream' }
        ? never
        : E extends { response: infer R extends z.ZodType }
          ? z.output<R>
          : // biome-ignore lint/suspicious/noConfusingVoidType: the handler's return type (Promise<void>)
            void;

export type Handler<E extends Endpoint> = (input: HandlerInput<E>) => Promise<HandlerOutput<E>>;

export interface ImplementOptions {
  /** Max body size in bytes (default Fastify's 1 MiB). */
  bodyLimit?: number;
}

export interface ModuleContext {
  /** The encapsulated Fastify instance of the module (hooks registered here stay local). */
  app: FastifyInstance;
  platform: Platform;
  implement<E extends Endpoint>(endpoint: E, handler: Handler<E>, options?: ImplementOptions): void;
}

export interface ApiModule {
  /** Unique name (the directory name). */
  name: string;
  /**
   * Provides the session resolver of the platform (the auth module, WP-30). At most one module may
   * provide it; without one every request is anonymous.
   */
  sessionResolver?: (platform: Platform) => SessionResolver;
  register(m: ModuleContext): void | Promise<void>;
}

export function defineModule(module: ApiModule): ApiModule {
  if (!/^[a-z][a-z0-9-]*$/.test(module.name)) throw new Error(`invalid module name "${module.name}"`);
  return module;
}

function toOutput(kind: ReturnType<typeof responseKindOf>, value: unknown): unknown {
  return kind === 'json' ? value : undefined;
}

/** Registers a contract route on `app`. */
export function implementEndpoint<E extends Endpoint>(
  app: FastifyInstance,
  endpoint: E,
  handler: Handler<E>,
  options: ImplementOptions = {},
): void {
  const kind = responseKindOf(endpoint);
  if (kind === 'event-stream') throw new Error(`${endpoint.id}: event streams are served by the SSE hub`);
  const status = successStatus(endpoint);
  const schema: Record<string, unknown> = {};
  if (endpoint.params) schema.params = endpoint.params;
  if (endpoint.query) schema.querystring = endpoint.query;
  if (endpoint.body) schema.body = endpoint.body;
  if (kind === 'json' && endpoint.response) schema.response = { [status]: endpoint.response };

  app.route({
    method: endpoint.method,
    url: endpoint.path,
    schema,
    config: { endpoint },
    ...(options.bodyLimit ? { bodyLimit: options.bodyLimit } : {}),
    preValidation: async (request) => {
      // `bodyKind: 'text'` (beacons): text/plain carrying JSON.
      if (endpoint.bodyKind === 'text' && typeof request.body === 'string') {
        try {
          request.body = JSON.parse(request.body) as unknown;
        } catch {
          throw httpError('VALIDATION_FAILED', 'The body is not valid JSON');
        }
      }
    },
    handler: async (request, reply) => {
      const input = {
        params: request.params ?? {},
        query: request.query ?? {},
        body: request.body,
        ctx: request.ctx,
        request,
        reply,
        cache(values: Record<string, string | number | undefined>, extraTags: readonly CacheTag[] = []) {
          Object.assign(request.cacheValues, values);
          request.extraCacheTags.push(...extraTags);
        },
      } as unknown as HandlerInput<E>;
      const result = (await handler(input)) as unknown;
      if (reply.sent) return reply;
      switch (kind) {
        case 'empty':
          return reply.code(status).send();
        case 'redirect': {
          const redirect = result as RedirectOutput;
          if (redirect.headers) reply.headers(redirect.headers);
          return reply.redirect(redirect.location, redirect.status ?? (status as 302));
        }
        case 'text':
        case 'csv': {
          const text = typeof result === 'string' ? { body: result } : (result as TextOutput);
          const type = text.contentType ?? (kind === 'csv' ? 'text/csv; charset=utf-8' : 'text/plain; charset=utf-8');
          if (text.filename) {
            reply.header(
              'content-disposition',
              `attachment; filename="${text.filename.replace(/[^\w.-]/g, '_')}"; filename*=UTF-8''${encodeURIComponent(text.filename)}`,
            );
          }
          return reply.code(status).type(type).send(text.body);
        }
        default:
          return reply.code(status).send(toOutput(kind, result));
      }
    },
  });
}

/** Builds the `ModuleContext` of a module; `implemented` rejects duplicate implementations. */
export function moduleContext(
  app: FastifyInstance,
  platform: Platform,
  implemented: Map<string, string>,
  owner: string,
): ModuleContext {
  return {
    app,
    platform,
    implement(endpoint, handler, options) {
      const previous = implemented.get(endpoint.id);
      if (previous) throw new Error(`${endpoint.id} is implemented by both "${previous}" and "${owner}"`);
      implemented.set(endpoint.id, owner);
      implementEndpoint(app, endpoint, handler, options);
    },
  };
}
