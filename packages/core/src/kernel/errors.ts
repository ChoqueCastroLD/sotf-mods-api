/**
 * Domain errors (PLAN §2.6 "Errores", §5.1). Core throws `DomainError(code, httpStatus, detail,
 * meta?)`; the API translates it to RFC 9457 `application/problem+json` (v2) or to the legacy
 * envelope (`/api/*`). Messages are English: the UI translates by `code`. Never put secrets, stack
 * traces or PII in `detail`.
 */
import { ERROR_STATUS, type ErrorCode, type FieldErrorDTO } from '@sotf/contracts/errors';

export type { ErrorCode } from '@sotf/contracts/errors';

export interface DomainErrorMeta {
  /** Field-level validation problems (`VALIDATION_FAILED`). */
  errors?: FieldErrorDTO[];
  /** Seconds until the client may retry (`RATE_LIMITED`, `UNAVAILABLE`); sent as `Retry-After`. */
  retryAfter?: number;
  /** Internal context for logs only; never serialised to clients. */
  internal?: Record<string, unknown>;
  cause?: unknown;
}

export class DomainError extends Error {
  override readonly name = 'DomainError';
  readonly code: ErrorCode;
  readonly httpStatus: number;
  readonly detail: string;
  readonly meta: DomainErrorMeta;

  /**
   * @param httpStatus defaults to the status of the code (`ERROR_STATUS`); pass `undefined` to use
   *   it. A different status is only allowed within the same class (4xx/5xx) as the code's.
   */
  constructor(code: ErrorCode, httpStatus: number | undefined, detail: string, meta: DomainErrorMeta = {}) {
    super(detail, meta.cause === undefined ? undefined : { cause: meta.cause });
    const status = httpStatus ?? ERROR_STATUS[code];
    if (Math.floor(status / 100) !== Math.floor(ERROR_STATUS[code] / 100)) {
      throw new TypeError(`DomainError ${code}: status ${status} is not in the class of ${ERROR_STATUS[code]}`);
    }
    this.code = code;
    this.httpStatus = status;
    this.detail = detail;
    this.meta = meta;
  }

  /** True for client errors (4xx). */
  get isClientError(): boolean {
    return this.httpStatus < 500;
  }
}

export function isDomainError(value: unknown): value is DomainError {
  return value instanceof DomainError;
}

/** Shorthands for the common cases (status taken from the code). */
export const errors = {
  validation: (detail: string, fieldErrors: FieldErrorDTO[] = []) =>
    new DomainError('VALIDATION_FAILED', undefined, detail, { errors: fieldErrors }),
  unauthenticated: (detail = 'Sign in required') => new DomainError('UNAUTHENTICATED', undefined, detail),
  forbidden: (detail = 'You cannot do this') => new DomainError('FORBIDDEN', undefined, detail),
  notFound: (what = 'Resource') => new DomainError('NOT_FOUND', undefined, `${what} not found`),
  gone: (detail = 'This is gone') => new DomainError('GONE', undefined, detail),
  conflict: (detail: string) => new DomainError('CONFLICT', undefined, detail),
  rateLimited: (retryAfter: number, detail = rateLimitDetail(retryAfter)) =>
    new DomainError('RATE_LIMITED', undefined, detail, { retryAfter }),
  unavailable: (detail = 'Temporarily unavailable', retryAfter?: number) =>
    new DomainError('UNAVAILABLE', undefined, detail, retryAfter === undefined ? {} : { retryAfter }),
} as const;

/** Friendly 429 text of PLAN §5.1 (neutral wording; KelvinSeek is retired), in English (UI translates). */
export function rateLimitDetail(retryAfterSeconds: number): string {
  return `Too many requests — try again in ${Math.max(1, Math.ceil(retryAfterSeconds))} s`;
}
