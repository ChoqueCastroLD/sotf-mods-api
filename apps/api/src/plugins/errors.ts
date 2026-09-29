/**
 * Error rendering (PLAN §5.1 "Errores", §5.5 "Convenciones globales").
 *
 * - `/api/v2/*`, `/internal/*` and platform routes: RFC 9457 `application/problem+json`
 *   `{type,title,status,detail,instance,code,requestId,errors?,retryAfter?}`.
 * - Legacy `/api/*` (or any contract with `errorFormat: 'legacy'`): `{status:false,error,message}`
 *   with `Content-Type: application/json` (no charset); a 404 carries the Spanish literal.
 *
 * Every error is `Cache-Control: no-store`, carries `X-Request-Id` and never leaks stack traces.
 * 5xx are logged at `error`, 4xx at `debug`.
 */
import {
  ERROR_DEFINITIONS,
  type ErrorCode,
  type FieldErrorDTO,
  LEGACY_JSON_CONTENT_TYPE,
  legacyError,
  PROBLEM_CONTENT_TYPE,
  problem,
} from '@sotf/contracts';
import { DomainError, isDomainError, rateLimitDetail } from '@sotf/core';
import type { FastifyError, FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { hasZodFastifySchemaValidationErrors, isResponseSerializationError } from 'fastify-type-provider-zod';
import { sendExactJson } from '../lib/http.ts';
import { pathOf, surfaceOf } from '../lib/surface.ts';

interface Rendered {
  code: ErrorCode;
  status: number;
  detail: string;
  errors?: FieldErrorDTO[];
  retryAfter?: number;
}

/** Fastify/plugin status codes → our codes. */
function codeForStatus(status: number): ErrorCode {
  switch (status) {
    case 400:
    case 422:
      return 'VALIDATION_FAILED';
    case 401:
      return 'UNAUTHENTICATED';
    case 403:
      return 'FORBIDDEN';
    case 404:
    case 405:
      return 'NOT_FOUND';
    case 409:
      return 'CONFLICT';
    case 410:
      return 'GONE';
    case 413:
      return 'PAYLOAD_TOO_LARGE';
    case 406:
    case 415:
      return 'UNSUPPORTED_MEDIA_TYPE';
    case 429:
      return 'RATE_LIMITED';
    case 503:
      return 'UNAVAILABLE';
    default:
      return 'INTERNAL';
  }
}

/** `/body/items/0/modId` → `items.0.modId` (the body/query/params prefix is dropped). */
function dottedPath(instancePath: string): string {
  return instancePath.split('/').filter(Boolean).join('.');
}

export function renderError(error: unknown): Rendered {
  if (isDomainError(error)) {
    return {
      code: error.code,
      status: error.httpStatus,
      detail: error.detail,
      ...(error.meta.errors ? { errors: error.meta.errors } : {}),
      ...(error.meta.retryAfter !== undefined ? { retryAfter: error.meta.retryAfter } : {}),
    };
  }
  if (hasZodFastifySchemaValidationErrors(error)) {
    const context = (error as FastifyError).validationContext;
    const errors = error.validation.map((issue) => {
      const path = dottedPath(issue.instancePath);
      return { path, message: issue.message ?? 'invalid', code: issue.keyword };
    });
    const where = context === 'querystring' ? 'query' : (context ?? 'request');
    return {
      code: 'VALIDATION_FAILED',
      status: 422,
      detail: `${errors.length} ${errors.length === 1 ? 'field is' : 'fields are'} invalid in the ${where}`,
      errors,
    };
  }
  const fastifyError = error as Partial<FastifyError> & { cause?: unknown };
  if (fastifyError && typeof fastifyError === 'object' && isResponseSerializationError(fastifyError as never)) {
    return { code: 'INTERNAL', status: 500, detail: ERROR_DEFINITIONS.INTERNAL.title };
  }
  const status = typeof fastifyError?.statusCode === 'number' ? fastifyError.statusCode : 500;
  if (status >= 500 || status < 400) {
    if (status === 503) return { code: 'UNAVAILABLE', status: 503, detail: ERROR_DEFINITIONS.UNAVAILABLE.title };
    return { code: 'INTERNAL', status: 500, detail: ERROR_DEFINITIONS.INTERNAL.title };
  }
  const code = codeForStatus(status);
  const finalStatus = code === 'VALIDATION_FAILED' ? 422 : status;
  // Fastify's own 4xx messages are safe and useful ("Body cannot be empty when content-type…").
  const detail =
    fastifyError.message && fastifyError.code?.startsWith('FST_')
      ? fastifyError.message
      : ERROR_DEFINITIONS[code].title;
  if (code === 'RATE_LIMITED') {
    const retryAfter = 60;
    return { code, status: 429, detail: rateLimitDetail(retryAfter), retryAfter };
  }
  return { code, status: finalStatus, detail };
}

function legacyCodeFor(status: number): 'NOT_FOUND' | 'VALIDATION' | 'UNKNOWN' | 'GONE' {
  if (status === 404) return 'NOT_FOUND';
  if (status === 410) return 'GONE';
  if (status === 400 || status === 422) return 'VALIDATION';
  return 'UNKNOWN';
}

function usesLegacyFormat(request: FastifyRequest): boolean {
  const endpoint = request.routeOptions?.config?.endpoint;
  if (endpoint?.errorFormat) return endpoint.errorFormat === 'legacy';
  return surfaceOf(request.url) === 'legacy';
}

/** Sends an error response in the right format. */
export function sendError(request: FastifyRequest, reply: FastifyReply, rendered: Rendered): FastifyReply {
  reply.code(rendered.status);
  reply.header('cache-control', 'no-store');
  if (rendered.retryAfter !== undefined) reply.header('retry-after', String(Math.ceil(rendered.retryAfter)));
  reply.removeHeader('cache-tag');
  reply.removeHeader('cloudflare-cdn-cache-control');
  reply.removeHeader('etag');
  if (usesLegacyFormat(request)) {
    const code = legacyCodeFor(rendered.status);
    const body = legacyError(code, code === 'UNKNOWN' ? rendered.detail : undefined);
    return sendExactJson(reply, LEGACY_JSON_CONTENT_TYPE, body);
  }
  const body = problem(rendered.code, {
    detail: rendered.detail,
    instance: pathOf(request.url),
    requestId: request.id,
    ...(rendered.errors ? { errors: rendered.errors } : {}),
    ...(rendered.retryAfter !== undefined ? { retryAfter: Math.ceil(rendered.retryAfter) } : {}),
  });
  if (rendered.status !== body.status) body.status = rendered.status;
  return sendExactJson(reply, PROBLEM_CONTENT_TYPE, body);
}

export function setupErrors(app: FastifyInstance): void {
  app.setErrorHandler((error, request, reply) => {
    const rendered = renderError(error);
    if (rendered.status >= 500) request.log.error({ err: error }, 'request failed');
    else request.log.debug({ err: error, code: rendered.code }, 'request rejected');
    if (reply.sent || reply.raw.headersSent) return;
    return sendError(request, reply, rendered);
  });

  app.setNotFoundHandler((request, reply) => {
    const detail = `No route for ${request.method} ${pathOf(request.url)}`;
    return sendError(request, reply, { code: 'NOT_FOUND', status: 404, detail });
  });
}

/** Throws the domain error for a status (used by plugins that only know a status). */
export function httpError(code: ErrorCode, detail?: string): DomainError {
  return new DomainError(code, undefined, detail ?? ERROR_DEFINITIONS[code].title);
}
