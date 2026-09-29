/**
 * Error codes of the API (PLAN §5.1 "Errores") as plain constants, without Zod, so browser code
 * (the typed client in islands) can use them without pulling any schema. `errors.ts` adds the
 * `ProblemDTO` schema on top.
 */

/** Every error code with its HTTP status and default English title. */
export const ERROR_DEFINITIONS = {
  VALIDATION_FAILED: { status: 422, title: 'The request is not valid' },
  UNAUTHENTICATED: { status: 401, title: 'Sign in required' },
  INVALID_CREDENTIALS: { status: 401, title: 'Wrong email, handle or password' },
  FORBIDDEN: { status: 403, title: 'You cannot do this' },
  EMAIL_NOT_VERIFIED: { status: 403, title: 'Verify your email first' },
  TURNSTILE_REQUIRED: { status: 403, title: 'Complete the human check' },
  REAUTH_REQUIRED: { status: 403, title: 'Sign in again to continue' },
  SUSPENDED: { status: 403, title: 'Your account is suspended' },
  NOT_FOUND: { status: 404, title: 'Not found' },
  CONFLICT: { status: 409, title: 'This conflicts with the current state' },
  GONE: { status: 410, title: 'This is gone' },
  PAYLOAD_TOO_LARGE: { status: 413, title: 'The upload is too large' },
  UNSUPPORTED_MEDIA_TYPE: { status: 415, title: 'Unsupported content type' },
  RATE_LIMITED: { status: 429, title: 'Too many requests' },
  INTERNAL: { status: 500, title: 'Something went wrong' },
  UNAVAILABLE: { status: 503, title: 'Temporarily unavailable' },
} as const satisfies Record<string, { status: number; title: string }>;

export type ErrorCode = keyof typeof ERROR_DEFINITIONS;
export const ERROR_CODES = Object.keys(ERROR_DEFINITIONS) as [ErrorCode, ...ErrorCode[]];

/** HTTP status of each code. */
export const ERROR_STATUS: Readonly<Record<ErrorCode, number>> = Object.fromEntries(
  ERROR_CODES.map((code) => [code, ERROR_DEFINITIONS[code].status]),
) as Record<ErrorCode, number>;

/** Base URI of the `type` member; each code has a human page at `/developers/errors#<code>`. */
export const PROBLEM_TYPE_BASE = 'https://sotf-mods.com/developers/errors#';

/** `type` URI for a code (`https://sotf-mods.com/developers/errors#not-found`). */
export function problemType(code: ErrorCode): string {
  return `${PROBLEM_TYPE_BASE}${code.toLowerCase().replaceAll('_', '-')}`;
}

/** Media type of problem responses. */
export const PROBLEM_CONTENT_TYPE = 'application/problem+json';
