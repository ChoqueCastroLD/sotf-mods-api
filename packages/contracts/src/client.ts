/**
 * Typed API client derived from the contracts (PLAN §5.1): `createApiClient({ baseUrl, fetch })`.
 * Used by the web SSR (internal URL + forwarded cookie), the islands and the console SPA.
 *
 *   const api = createApiClient({ baseUrl: '' });
 *   const mod = await api.catalog.getMod({ params: { id: 20 } });   // ModDetailDTO
 *   await api.follows.followMod({ params: { id: 20 }, body: { notify: true } });
 *
 * Runtime-agnostic: no DOM or Node types; `fetch` is injected (defaults to `globalThis.fetch`).
 * Errors throw `ApiError` carrying the `ProblemDTO` (v2) or the legacy envelope (`/api/*`).
 *
 * Bundle size: at runtime the client only uses the generated route table (`routes.gen.ts`) and
 * plain constants; every contract type comes through `import type`, so importing
 * `@sotf/contracts/client` does not ship Zod or any schema to the browser (checked by a test).
 */
import type { z } from 'zod';
import type { ApiContracts } from './contracts.ts';
import { buildPath, type Endpoint, responseKindOf } from './endpoint.ts';
import { ERROR_CODES, ERROR_DEFINITIONS, type ErrorCode, problemType } from './error-codes.ts';
import type { ProblemDTO } from './errors.ts';
import { API_ROUTES, type RouteSpec } from './routes.gen.ts';

// -----------------------------------------------------------------------------------------------
// Minimal fetch types (structural, so the package needs neither DOM nor Node typings)
// -----------------------------------------------------------------------------------------------

export interface FetchInitLike {
  method: string;
  headers: Record<string, string>;
  body?: string;
  signal?: unknown;
  credentials?: 'include' | 'same-origin' | 'omit';
  redirect?: 'follow' | 'manual';
}

export interface FetchResponseLike {
  status: number;
  ok: boolean;
  headers: { get(name: string): string | null };
  text(): Promise<string>;
}

export type FetchLike = (url: string, init: FetchInitLike) => Promise<FetchResponseLike>;

export interface ApiClientOptions {
  /** Origin (or origin + prefix) the contract paths are appended to: `''` (same origin), `INTERNAL_API_URL`… */
  baseUrl: string;
  fetch?: FetchLike;
  /** Extra headers on every request (SSR: forwarded `cookie`, `x-forwarded-for`…). */
  headers?: Record<string, string> | (() => Record<string, string>);
  credentials?: 'include' | 'same-origin' | 'omit';
  /**
   * Parse every JSON response with its contract schema (development and tests). Pass
   * `apiContracts` (server side): the client itself never imports the schemas.
   */
  validateWith?: Readonly<Record<string, Readonly<Record<string, Endpoint>>>>;
}

export interface RequestOptions {
  signal?: unknown;
  headers?: Record<string, string>;
}

/** Result of endpoints answering a redirect (downloads). `location` is null in browsers (opaque). */
export interface RedirectResult {
  status: number;
  location: string | null;
}

// -----------------------------------------------------------------------------------------------
// Types derived from the contracts
// -----------------------------------------------------------------------------------------------

type Simplify<T> = { [K in keyof T]: T[K] } & {};
// biome-ignore lint/complexity/noBannedTypes: `{}` is the neutral element of the intersections below
type Empty = {};

type ParamsPart<E> = E extends { params: infer P extends z.ZodType } ? { params: z.input<P> } : Empty;
type QueryPart<E> = E extends { query: infer Q extends z.ZodType }
  ? Empty extends z.input<Q>
    ? { query?: z.input<Q> }
    : { query: z.input<Q> }
  : Empty;
type BodyPart<E> = E extends { body: infer B extends z.ZodType }
  ? Empty extends z.input<B>
    ? { body?: z.input<B> }
    : { body: z.input<B> }
  : Empty;

/** Input of an endpoint call: `{ params?, query?, body? }` as required by the contract. */
export type EndpointInput<E> = Simplify<ParamsPart<E> & QueryPart<E> & BodyPart<E>>;

/** Resolved value of an endpoint call. */
export type EndpointOutput<E> = E extends { responseKind: 'empty' }
  ? undefined
  : E extends { responseKind: 'redirect' }
    ? RedirectResult
    : E extends { responseKind: 'text' | 'csv' }
      ? string
      : E extends { responseKind: 'event-stream' }
        ? never
        : E extends { response: infer R extends z.ZodType }
          ? z.output<R>
          : undefined;

type RequiredKeys<T> = { [K in keyof T]-?: Empty extends Pick<T, K> ? never : K }[keyof T];

export type EndpointMethod<E> = [RequiredKeys<EndpointInput<E>>] extends [never]
  ? (input?: EndpointInput<E>, options?: RequestOptions) => Promise<EndpointOutput<E>>
  : (input: EndpointInput<E>, options?: RequestOptions) => Promise<EndpointOutput<E>>;

export type ApiClient<C extends Record<string, Record<string, Endpoint>> = ApiContracts> = {
  readonly [D in keyof C]: { readonly [N in keyof C[D]]: EndpointMethod<C[D][N]> };
} & {
  /** Calls any endpoint contract. */
  request<E extends Endpoint>(
    endpoint: E,
    input?: EndpointInput<E>,
    options?: RequestOptions,
  ): Promise<EndpointOutput<E>>;
  /** Absolute URL of an endpoint (EventSource, download links, prefetch). */
  url<E extends Endpoint>(
    endpoint: E,
    input?: Pick<EndpointInput<E>, Extract<keyof EndpointInput<E>, 'params' | 'query'>>,
  ): string;
  /** Absolute URL of a route of `API_ROUTES` (schema-free code paths). */
  url(route: RouteSpec, input?: { params?: Record<string, unknown>; query?: Record<string, unknown> }): string;
};

// -----------------------------------------------------------------------------------------------
// Errors
// -----------------------------------------------------------------------------------------------

export interface LegacyErrorBody {
  status: false;
  error: string;
  message: string;
}

const STATUS_CODES: Readonly<Record<number, ErrorCode>> = {
  400: 'VALIDATION_FAILED',
  401: 'UNAUTHENTICATED',
  403: 'FORBIDDEN',
  404: 'NOT_FOUND',
  409: 'CONFLICT',
  410: 'GONE',
  413: 'PAYLOAD_TOO_LARGE',
  415: 'UNSUPPORTED_MEDIA_TYPE',
  422: 'VALIDATION_FAILED',
  429: 'RATE_LIMITED',
  503: 'UNAVAILABLE',
};

/** Error thrown by the client for every non-successful answer. */
export class ApiError extends Error {
  readonly status: number;
  readonly code: ErrorCode;
  readonly problem: ProblemDTO;
  /** Legacy envelope when the endpoint uses the legacy error format. */
  readonly legacy: LegacyErrorBody | null;
  readonly endpointId: string;

  constructor(endpointId: string, problem: ProblemDTO, legacy: LegacyErrorBody | null = null) {
    super(`${endpointId}: ${problem.code} (${problem.status}) ${problem.detail}`);
    this.name = 'ApiError';
    this.status = problem.status;
    this.code = problem.code;
    this.problem = problem;
    this.legacy = legacy;
    this.endpointId = endpointId;
  }
}

export function isApiError(value: unknown): value is ApiError {
  return value instanceof ApiError;
}

function syntheticProblem(
  code: ErrorCode,
  status: number,
  detail: string,
  instance: string,
  requestId: string,
): ProblemDTO {
  return {
    type: problemType(code),
    title: ERROR_DEFINITIONS[code].title,
    status: status >= 400 && status <= 599 ? status : ERROR_DEFINITIONS[code].status,
    detail,
    instance,
    code,
    requestId,
  };
}

const KNOWN_CODES: ReadonlySet<string> = new Set(ERROR_CODES);

/** Structural `ProblemDTO` check (no schema, so the client stays Zod-free). */
function isProblemLike(value: unknown): value is ProblemDTO {
  if (value === null || typeof value !== 'object') return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.type === 'string' &&
    typeof v.title === 'string' &&
    typeof v.status === 'number' &&
    typeof v.detail === 'string' &&
    typeof v.code === 'string' &&
    KNOWN_CODES.has(v.code)
  );
}

function isLegacyError(value: unknown): value is LegacyErrorBody {
  return (
    value !== null &&
    typeof value === 'object' &&
    (value as { status?: unknown }).status === false &&
    typeof (value as { error?: unknown }).error === 'string' &&
    typeof (value as { message?: unknown }).message === 'string'
  );
}

// -----------------------------------------------------------------------------------------------
// Runtime
// -----------------------------------------------------------------------------------------------

function encode(value: string): string {
  return encodeURIComponent(value);
}

function serializeValue(value: unknown): string {
  if (typeof value === 'boolean') return value ? '1' : '0';
  return String(value);
}

/**
 * Serialises a query object: keys sorted (stable cache keys), arrays as repeated keys
 * (`tag=a&tag=b`), booleans as `1`/`0`, `undefined`/`null` skipped.
 */
export function serializeQuery(query: Readonly<Record<string, unknown>> | undefined): string {
  if (!query) return '';
  const parts: string[] = [];
  for (const key of Object.keys(query).sort()) {
    const value = query[key];
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) {
      for (const item of value)
        if (item !== undefined && item !== null) parts.push(`${encode(key)}=${encode(serializeValue(item))}`);
    } else {
      parts.push(`${encode(key)}=${encode(serializeValue(value))}`);
    }
  }
  return parts.length > 0 ? `?${parts.join('&')}` : '';
}

interface CallInput {
  params?: Record<string, unknown>;
  query?: Record<string, unknown>;
  body?: unknown;
}

function endpointUrl(baseUrl: string, route: { path: string }, input: CallInput | undefined): string {
  const base = baseUrl.replace(/\/+$/, '');
  return `${base}${buildPath(route.path, input?.params)}${serializeQuery(input?.query)}`;
}

/** Route spec of a full endpoint contract. */
function routeOf(endpoint: Endpoint | RouteSpec): RouteSpec {
  if ('kind' in endpoint) return endpoint;
  return {
    id: endpoint.id,
    method: endpoint.method,
    path: endpoint.path,
    kind: responseKindOf(endpoint),
    bodyKind: endpoint.body ? (endpoint.bodyKind ?? 'json') : null,
  };
}

/** Creates a typed client for every contract of `apiContracts`. */
export function createApiClient(options: ApiClientOptions): ApiClient {
  const available: FetchLike | undefined =
    options.fetch ?? (globalThis as { fetch?: FetchLike }).fetch?.bind(globalThis);
  if (!available) throw new Error('createApiClient: no fetch implementation available');
  const doFetch: FetchLike = available;

  function responseSchema(route: RouteSpec, endpoint: Endpoint | RouteSpec) {
    if (!('kind' in endpoint) && endpoint.response) return endpoint.response;
    const [domain = '', name = ''] = route.id.split('.');
    return options.validateWith?.[domain]?.[name]?.response;
  }

  async function request(
    target: Endpoint | RouteSpec,
    input?: CallInput,
    requestOptions: RequestOptions = {},
  ): Promise<unknown> {
    const route = routeOf(target);
    const kind = route.kind;
    if (kind === 'event-stream') {
      throw new Error(`${route.id} is a server-sent event stream: use client.url() with EventSource`);
    }
    const url = endpointUrl(options.baseUrl, route, input);
    const extra = typeof options.headers === 'function' ? options.headers() : (options.headers ?? {});
    const headers: Record<string, string> = {
      accept: 'application/json, application/problem+json;q=0.9, */*;q=0.1',
      ...extra,
    };
    // Unsafe methods always carry a body and a content type: the API's CSRF rule requires
    // `Content-Type: application/json` (or `text/plain` for beacons) on every mutation.
    let body: string | undefined;
    if (route.method !== 'GET' && route.method !== 'HEAD') {
      body = JSON.stringify(input?.body ?? {});
      headers['content-type'] = route.bodyKind === 'text' ? 'text/plain;charset=UTF-8' : 'application/json';
    }
    Object.assign(headers, requestOptions.headers);

    let response: FetchResponseLike;
    try {
      response = await doFetch(url, {
        method: route.method,
        headers,
        ...(body !== undefined ? { body } : {}),
        ...(requestOptions.signal !== undefined ? { signal: requestOptions.signal } : {}),
        credentials: options.credentials ?? 'same-origin',
        redirect: kind === 'redirect' ? 'manual' : 'follow',
      });
    } catch (error) {
      if (error !== null && typeof error === 'object' && (error as { name?: unknown }).name === 'AbortError') {
        throw error;
      }
      const detail = error instanceof Error ? error.message : 'network error';
      throw new ApiError(route.id, syntheticProblem('UNAVAILABLE', 503, `network error: ${detail}`, url, ''));
    }

    const requestId = response.headers.get('x-request-id') ?? '';
    if (kind === 'redirect' && (response.status === 0 || (response.status >= 300 && response.status < 400))) {
      return { status: response.status, location: response.headers.get('location') } satisfies RedirectResult;
    }
    if (!response.ok) throw await toApiError(route, response, url, requestId);
    if (kind === 'empty' || response.status === 204) return undefined;
    const text = await response.text();
    if (kind === 'text' || kind === 'csv') return text;
    let json: unknown;
    try {
      json = text.length > 0 ? JSON.parse(text) : undefined;
    } catch {
      throw new ApiError(route.id, syntheticProblem('INTERNAL', 502, 'response is not valid JSON', url, requestId));
    }
    const schema = options.validateWith ? responseSchema(route, target) : undefined;
    if (schema) {
      const parsed = schema.safeParse(json);
      if (!parsed.success) {
        const detail = `response does not match the contract: ${parsed.error.issues[0]?.message ?? ''}`;
        throw new ApiError(route.id, syntheticProblem('INTERNAL', 502, detail, url, requestId));
      }
      return parsed.data;
    }
    return json;
  }

  async function toApiError(
    route: RouteSpec,
    response: FetchResponseLike,
    url: string,
    requestId: string,
  ): Promise<ApiError> {
    let payload: unknown;
    try {
      const text = await response.text();
      payload = text.length > 0 ? JSON.parse(text) : undefined;
    } catch {
      payload = undefined;
    }
    if (isProblemLike(payload)) return new ApiError(route.id, payload);
    const code = STATUS_CODES[response.status] ?? 'INTERNAL';
    if (isLegacyError(payload)) {
      return new ApiError(route.id, syntheticProblem(code, response.status, payload.message, url, requestId), payload);
    }
    return new ApiError(route.id, syntheticProblem(code, response.status, `HTTP ${response.status}`, url, requestId));
  }

  const client: Record<string, unknown> = {
    request: (endpoint: Endpoint | RouteSpec, input?: CallInput, requestOptions?: RequestOptions) =>
      request(endpoint, input, requestOptions),
    url: (endpoint: Endpoint | RouteSpec, input?: CallInput) => endpointUrl(options.baseUrl, endpoint, input),
  };
  for (const [domain, group] of Object.entries(API_ROUTES) as Array<[string, Record<string, RouteSpec>]>) {
    const methods: Record<string, unknown> = {};
    for (const [name, route] of Object.entries(group)) {
      methods[name] = (input?: CallInput, requestOptions?: RequestOptions) => request(route, input, requestOptions);
    }
    client[domain] = Object.freeze(methods);
  }
  return Object.freeze(client) as ApiClient;
}
