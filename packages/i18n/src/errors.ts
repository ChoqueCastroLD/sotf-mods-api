/**
 * Localized text for API problems (PLAN §5.1): the API sends RFC 9457 `problem+json` with a stable
 * `code` and English `title`/`detail`; the UI shows these translations instead ("la UI traduce por
 * `code`").
 *
 *   const { title, detail } = describeProblem(problem.code, { retryAfterSeconds: 30 });
 *
 * Unknown codes (a newer API, a proxy error page…) get a generic message, never a raw code.
 */

import type { Locale } from './locales.ts';
import {
  errors_code_conflict_detail,
  errors_code_conflict_title,
  errors_code_email_not_verified_detail,
  errors_code_email_not_verified_title,
  errors_code_forbidden_detail,
  errors_code_forbidden_title,
  errors_code_gone_detail,
  errors_code_gone_title,
  errors_code_internal_detail,
  errors_code_internal_title,
  errors_code_invalid_credentials_detail,
  errors_code_invalid_credentials_title,
  errors_code_not_found_detail,
  errors_code_not_found_title,
  errors_code_payload_too_large_detail,
  errors_code_payload_too_large_title,
  errors_code_rate_limited_detail,
  errors_code_rate_limited_retry,
  errors_code_rate_limited_title,
  errors_code_reauth_required_detail,
  errors_code_reauth_required_title,
  errors_code_suspended_detail,
  errors_code_suspended_title,
  errors_code_turnstile_required_detail,
  errors_code_turnstile_required_title,
  errors_code_unauthenticated_detail,
  errors_code_unauthenticated_title,
  errors_code_unavailable_detail,
  errors_code_unavailable_title,
  errors_code_unknown_detail,
  errors_code_unknown_title,
  errors_code_unsupported_media_type_detail,
  errors_code_unsupported_media_type_title,
  errors_code_validation_failed_detail,
  errors_code_validation_failed_title,
} from './messages.ts';

/** Problem codes of the v2 API (PLAN §5.1). `@sotf/contracts` is the source of truth. */
export const PROBLEM_CODES = [
  'VALIDATION_FAILED',
  'UNAUTHENTICATED',
  'INVALID_CREDENTIALS',
  'FORBIDDEN',
  'EMAIL_NOT_VERIFIED',
  'NOT_FOUND',
  'GONE',
  'CONFLICT',
  'PAYLOAD_TOO_LARGE',
  'UNSUPPORTED_MEDIA_TYPE',
  'RATE_LIMITED',
  'TURNSTILE_REQUIRED',
  'SUSPENDED',
  'REAUTH_REQUIRED',
  'INTERNAL',
  'UNAVAILABLE',
] as const;

export type ProblemCode = (typeof PROBLEM_CODES)[number];

export interface ProblemText {
  title: string;
  detail: string;
}

export interface DescribeProblemOptions {
  /** Defaults to the current locale (see `@sotf/i18n/runtime`). */
  locale?: Locale;
  /** `Retry-After` in seconds, for `RATE_LIMITED`. */
  retryAfterSeconds?: number;
}

type MessageFn = (inputs?: Record<string, never>, options?: { locale?: Locale }) => string;

const TEXT: Readonly<Record<ProblemCode, readonly [MessageFn, MessageFn]>> = {
  VALIDATION_FAILED: [errors_code_validation_failed_title, errors_code_validation_failed_detail],
  UNAUTHENTICATED: [errors_code_unauthenticated_title, errors_code_unauthenticated_detail],
  INVALID_CREDENTIALS: [errors_code_invalid_credentials_title, errors_code_invalid_credentials_detail],
  FORBIDDEN: [errors_code_forbidden_title, errors_code_forbidden_detail],
  EMAIL_NOT_VERIFIED: [errors_code_email_not_verified_title, errors_code_email_not_verified_detail],
  NOT_FOUND: [errors_code_not_found_title, errors_code_not_found_detail],
  GONE: [errors_code_gone_title, errors_code_gone_detail],
  CONFLICT: [errors_code_conflict_title, errors_code_conflict_detail],
  PAYLOAD_TOO_LARGE: [errors_code_payload_too_large_title, errors_code_payload_too_large_detail],
  UNSUPPORTED_MEDIA_TYPE: [errors_code_unsupported_media_type_title, errors_code_unsupported_media_type_detail],
  RATE_LIMITED: [errors_code_rate_limited_title, errors_code_rate_limited_detail],
  TURNSTILE_REQUIRED: [errors_code_turnstile_required_title, errors_code_turnstile_required_detail],
  SUSPENDED: [errors_code_suspended_title, errors_code_suspended_detail],
  REAUTH_REQUIRED: [errors_code_reauth_required_title, errors_code_reauth_required_detail],
  INTERNAL: [errors_code_internal_title, errors_code_internal_detail],
  UNAVAILABLE: [errors_code_unavailable_title, errors_code_unavailable_detail],
};

export function isProblemCode(code: unknown): code is ProblemCode {
  return typeof code === 'string' && Object.hasOwn(TEXT, code);
}

/** Localized title and detail for a problem `code` (unknown codes get a generic text). */
export function describeProblem(code: string | null | undefined, options: DescribeProblemOptions = {}): ProblemText {
  const messageOptions = options.locale ? { locale: options.locale } : {};
  if (!isProblemCode(code)) {
    return {
      title: errors_code_unknown_title({}, messageOptions),
      detail: errors_code_unknown_detail({}, messageOptions),
    };
  }
  const [title, detail] = TEXT[code];
  const seconds = options.retryAfterSeconds;
  if (code === 'RATE_LIMITED' && seconds !== undefined && Number.isFinite(seconds) && seconds > 0) {
    return {
      title: title({}, messageOptions),
      detail: errors_code_rate_limited_retry({ seconds: Math.ceil(seconds) }, messageOptions),
    };
  }
  return { title: title({}, messageOptions), detail: detail({}, messageOptions) };
}
