/**
 * Error codes and RFC 9457 problem details (PLAN §5.1 "Errores").
 *
 * The API answers every v2 error with `application/problem+json`:
 * `{ type, title, status, detail, instance, code, requestId, errors? }`. `title` and `detail` are
 * English; the UI translates by `code` (namespace `errors` of @sotf/i18n). Core throws
 * `DomainError(code, …)` and the API maps it with `ERROR_STATUS`.
 */
import { z } from 'zod';
import { dto } from './dto.ts';

import { ERROR_CODES, ERROR_DEFINITIONS, type ErrorCode, problemType } from './error-codes.ts';

export * from './error-codes.ts';

export const ErrorCodeSchema = z.enum(ERROR_CODES);

export const FieldErrorDTO = dto(
  'FieldErrorDTO',
  z.object({
    path: z.string().describe('Dotted path of the invalid field (`items.0.modId`); empty for the whole body'),
    message: z.string(),
    code: z.string().optional().describe('Machine code of the issue (Zod issue code or a domain code)'),
  }),
  {
    description: 'One validation problem.',
    examples: [{ path: 'handle', message: 'this handle is reserved', code: 'custom' }],
  },
);
export type FieldErrorDTO = z.infer<typeof FieldErrorDTO>;

export const ProblemDTO = dto(
  'ProblemDTO',
  z.object({
    type: z.string(),
    title: z.string(),
    status: z.number().int().min(400).max(599),
    detail: z.string(),
    instance: z.string().describe('Path of the request that failed'),
    code: ErrorCodeSchema,
    requestId: z.string().describe('Echoes `X-Request-Id` (the Cloudflare ray id when present)'),
    errors: z.array(FieldErrorDTO).optional(),
    retryAfter: z.number().int().nonnegative().optional().describe('Seconds, also sent as `Retry-After` (429/503)'),
  }),
  {
    description: 'RFC 9457 problem details returned by every /api/v2 error.',
    examples: [
      {
        type: 'https://sotf-mods.com/developers/errors#validation-failed',
        title: 'The request is not valid',
        status: 422,
        detail: '1 field is invalid',
        instance: '/api/v2/auth/register',
        code: 'VALIDATION_FAILED',
        requestId: '8c2f7a1b9d3e4f50-MAD',
        errors: [{ path: 'handle', message: 'this handle is reserved', code: 'custom' }],
      },
      {
        type: 'https://sotf-mods.com/developers/errors#rate-limited',
        title: 'Too many requests',
        status: 429,
        detail: 'Kelvin needs a break: try again in 30 s',
        instance: '/api/v2/mods/42/comments',
        code: 'RATE_LIMITED',
        requestId: '0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d',
        retryAfter: 30,
      },
    ],
  },
);
export type ProblemDTO = z.infer<typeof ProblemDTO>;

/** Builds a problem object (the API adds `requestId` and `instance` from the request). */
export function problem(
  code: ErrorCode,
  init: {
    detail?: string;
    instance: string;
    requestId: string;
    errors?: FieldErrorDTO[];
    retryAfter?: number;
    title?: string;
  },
): ProblemDTO {
  const def = ERROR_DEFINITIONS[code];
  return {
    type: problemType(code),
    title: init.title ?? def.title,
    status: def.status,
    detail: init.detail ?? def.title,
    instance: init.instance,
    code,
    requestId: init.requestId,
    ...(init.errors && init.errors.length > 0 ? { errors: init.errors } : {}),
    ...(init.retryAfter !== undefined ? { retryAfter: init.retryAfter } : {}),
  };
}

/** Type guard for values that look like a `ProblemDTO`. */
export function isProblem(value: unknown): value is ProblemDTO {
  return ProblemDTO.safeParse(value).success;
}

/** Converts Zod issues to `FieldErrorDTO[]` (dotted paths). */
export function fieldErrorsFromZod(error: z.ZodError): FieldErrorDTO[] {
  return error.issues.map((issue) => ({
    path: issue.path.map(String).join('.'),
    message: issue.message,
    code: issue.code,
  }));
}
