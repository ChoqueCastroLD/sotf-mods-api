/**
 * Endpoint contracts (PLAN §5.1 "Contratos"): every endpoint is declared once as
 * `{ method, path, params, query, body, response, auth, cache, rateLimit }`. Fastify registers the
 * routes from these objects (fastify-type-provider-zod), the typed client (`client.ts`) calls them
 * and the OpenAPI generator (`openapi.ts`) documents them.
 */
import type { z } from 'zod';
import type { CachePolicy } from './cache.ts';
import type { ErrorCode } from './errors.ts';

export const API_V2_PREFIX = '/api/v2';

export type HttpMethod = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

/**
 * Who may call the endpoint (legend of PLAN §5.2):
 * 🔓 `public` · 👤 `session` · ✉️ `verified` (session + verified email) · 🛡 `moderator` ·
 * 👑 `admin` · 🔒 `internal` (`X-Internal-Auth`, Coolify network only).
 */
export type AuthLevel = 'public' | 'session' | 'verified' | 'moderator' | 'admin' | 'internal';
export const AUTH_LEVELS: readonly AuthLevel[] = ['public', 'session', 'verified', 'moderator', 'admin', 'internal'];

/** Extra conditions checked by core on top of the auth level. */
export type Requirement =
  | 'mod_owner'
  | 'comment_author'
  | 'review_author'
  | 'kit_owner'
  | 'draft_owner'
  | 'upload_owner'
  | 'turnstile'
  | 'turnstile_after_failures'
  | 'account_age_24h'
  | 'password_confirmation'
  | 'recent_auth_12h'
  | 'signed_token'
  | 'not_own_content';

/**
 * Named rate-limit buckets (PLAN §5.1 "Límites de uso"). The API registers one
 * `@fastify/rate-limit` configuration per bucket; the key is `CF-Connecting-IP` or the user id.
 */
export const RATE_LIMITS = {
  anonymousRead: { max: 300, window: '1 minute', key: 'ip' },
  legacyRead: { max: 600, window: '1 minute', key: 'ip' },
  login: { max: 5, window: '1 minute', key: 'ip', extra: '10/hour per account; Turnstile after 3 failures' },
  register: { max: 3, window: '1 day', key: 'ip' },
  passwordForgot: { max: 3, window: '1 hour', key: 'ip', extra: '3/hour per email' },
  emailResend: { max: 5, window: '1 hour', key: 'user' },
  comments: { max: 5, window: '1 minute', key: 'user', extra: '50/day per user' },
  reviews: { max: 10, window: '1 day', key: 'user' },
  requests: { max: 5, window: '1 day', key: 'user' },
  compatReports: { max: 30, window: '1 day', key: 'user' },
  reports: { max: 20, window: '1 day', key: 'user' },
  uploads: { max: 20, window: '1 day', key: 'user' },
  kitsWrite: { max: 60, window: '1 hour', key: 'user' },
  markdownPreview: { max: 30, window: '1 minute', key: 'user' },
  kelvinseek: { max: 20, window: '1 minute', key: 'chat', extra: '300/day per chat_id + IP and a global daily budget' },
  beacon: { max: 120, window: '1 minute', key: 'ip', extra: 'excess is dropped silently (204)' },
  userWrite: { max: 60, window: '1 minute', key: 'user' },
  downloads: {
    max: 60,
    window: '1 minute',
    key: 'ip',
    extra: 'never 429: above the limit the download redirects but does not count',
  },
} as const satisfies Record<string, { max: number; window: string; key: 'ip' | 'user' | 'chat'; extra?: string }>;
export type RateLimitBucket = keyof typeof RATE_LIMITS;

/** How the success response is encoded. */
export type ResponseKind = 'json' | 'empty' | 'redirect' | 'text' | 'csv' | 'event-stream';
/** How the request body is encoded. `text` = `text/plain` carrying JSON (beacons). */
export type BodyKind = 'json' | 'text';

export type SuccessStatus = 200 | 201 | 202 | 204 | 302;

// Zod object types used in params/query (kept loose so helper-built schemas fit).
// biome-ignore lint/suspicious/noExplicitAny: shape values are arbitrary Zod schemas
type AnyObject = z.ZodObject<any>;

export interface EndpointConfig {
  /** operationId `<domain>.<name>`; must equal the key under which it is exported. */
  id: string;
  method: HttpMethod;
  /** Full Fastify path (`/api/v2/mods/:id`). */
  path: string;
  summary: string;
  description?: string;
  auth: AuthLevel;
  requires?: readonly Requirement[];
  params?: AnyObject;
  query?: AnyObject;
  body?: z.ZodType;
  bodyKind?: BodyKind;
  /** Success status (default 200, or 204 for `empty`, 302 for `redirect`). */
  status?: SuccessStatus;
  response?: z.ZodType;
  responseKind?: ResponseKind;
  /** Error codes the endpoint documents (all endpoints may also return 422/429/500/503). */
  errors?: readonly ErrorCode[];
  /** `problem` = RFC 9457 `ProblemDTO` (v2); `legacy` = `{status:false,error,message}` (`/api/*`). */
  errorFormat?: 'problem' | 'legacy';
  cache: CachePolicy;
  rateLimit?: RateLimitBucket;
  deprecated?: boolean;
  /** Also allow `HEAD` (downloads). */
  head?: boolean;
  /** Implementing work package (documentation only). */
  owner: `WP-${string}`;
}

/** An endpoint contract (the config with its literal types preserved). */
export type Endpoint = EndpointConfig;

/** Declares an endpoint; preserves literal types for the typed client. */
export function defineEndpoint<const C extends EndpointConfig>(config: C): C {
  return config;
}

/** Group of endpoints of one domain, keyed by name (`id` = `<domain>.<name>`). */
export type EndpointGroup = Readonly<Record<string, Endpoint>>;

/** Names of `:params` in a path template. */
export type PathParamNames<P extends string> = P extends `${string}:${infer Name}/${infer Rest}`
  ? Name | PathParamNames<`/${Rest}`>
  : P extends `${string}:${infer Name}`
    ? Name
    : never;

/** Runtime list of `:params` in a path template (in order). */
export function pathParamNames(path: string): string[] {
  return [...path.matchAll(/:([A-Za-z_][A-Za-z0-9_]*)/g)].map((m) => m[1] ?? '');
}

/** Success status actually used by an endpoint. */
export function successStatus(endpoint: Endpoint): SuccessStatus {
  if (endpoint.status) return endpoint.status;
  if (endpoint.responseKind === 'empty') return 204;
  if (endpoint.responseKind === 'redirect') return 302;
  return 200;
}

/** Response kind actually used by an endpoint. */
export function responseKindOf(endpoint: Endpoint): ResponseKind {
  return endpoint.responseKind ?? (endpoint.response ? 'json' : 'empty');
}

/** Path with `:params` replaced by encoded values (`encodeURIComponent` per segment value). */
export function buildPath(path: string, params: Readonly<Record<string, unknown>> = {}): string {
  return path.replace(/:([A-Za-z_][A-Za-z0-9_]*)/g, (_, name: string) => {
    const value = params[name];
    if (value === undefined || value === null || value === '') {
      throw new Error(`missing path parameter "${name}" for ${path}`);
    }
    return encodeURIComponent(String(value));
  });
}

/** `path` in OpenAPI syntax (`/mods/{id}`). */
export function openApiPath(path: string): string {
  return path.replace(/:([A-Za-z_][A-Za-z0-9_]*)/g, '{$1}');
}
