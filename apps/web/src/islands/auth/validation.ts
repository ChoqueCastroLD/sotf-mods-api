/**
 * Client-side checks of the auth forms (research/03 §5.7: inline validation on blur, messages under
 * the field). They mirror the contracts of `@sotf/contracts` (`Email`, `HandleInput`,
 * `DisplayName`, `NewPassword`, T0-13) without shipping Zod to the browser; the API stays the
 * authority (reserved handles, breached passwords, taken emails come back as field problems).
 */
import type { FieldIssue } from './api.ts';
import type { Translate } from './i18n.tsx';

export const PASSWORD_MIN = 10;
export const PASSWORD_MAX = 256;
export const HANDLE_MIN = 3;
export const HANDLE_MAX = 24;
export const DISPLAY_NAME_MIN = 2;
export const DISPLAY_NAME_MAX = 32;
export const EMAIL_MAX = 254;

/** `@sotf/contracts` `HandleInput` shape (the reserved list is checked by the API). */
const HANDLE_PATTERN = /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
/** Pragmatic address check; the API applies the full rule. */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/;

/** Length in user-perceived characters (as Zod counts code points after NFC). */
function length(value: string): number {
  return [...value.normalize('NFC')].length;
}

/** The handle as the API stores it (trimmed, lower-case). */
export function normalizeHandle(value: string): string {
  return value.trim().toLowerCase();
}

export function checkEmail(t: Translate, value: string): string | null {
  const email = value.trim();
  if (email === '') return t('errors_field_required');
  if (email.length > EMAIL_MAX) return t('errors_field_too_long', { max: EMAIL_MAX });
  return EMAIL_PATTERN.test(email) ? null : t('errors_field_invalid_email');
}

export function checkHandle(t: Translate, value: string): string | null {
  const handle = normalizeHandle(value);
  if (handle === '') return t('errors_field_required');
  if (handle.length < HANDLE_MIN) return t('errors_field_too_short', { min: HANDLE_MIN });
  if (handle.length > HANDLE_MAX) return t('errors_field_too_long', { max: HANDLE_MAX });
  if (!HANDLE_PATTERN.test(handle) || handle.includes('--')) return t('auth_error_handle_format');
  return null;
}

/** Optional: empty is fine (the handle is shown instead). */
export function checkDisplayName(t: Translate, value: string): string | null {
  const name = value.normalize('NFC').trim();
  if (name === '') return null;
  if (length(name) < DISPLAY_NAME_MIN) return t('errors_field_too_short', { min: DISPLAY_NAME_MIN });
  if (length(name) > DISPLAY_NAME_MAX) return t('errors_field_too_long', { max: DISPLAY_NAME_MAX });
  return null;
}

/** A new password (T0-13: ≥ 10 characters, no composition rules). */
export function checkNewPassword(t: Translate, value: string): string | null {
  if (value === '') return t('errors_field_required');
  if (length(value) < PASSWORD_MIN) return t('errors_field_too_short', { min: PASSWORD_MIN });
  if (value.length > PASSWORD_MAX) return t('errors_field_too_long', { max: PASSWORD_MAX });
  return null;
}

export function checkIdentifier(t: Translate, value: string): string | null {
  return value.trim() === '' ? t('auth_error_required_identifier') : null;
}

/** The current password: legacy passwords may be shorter than the new policy. */
export function checkCurrentPassword(t: Translate, value: string): string | null {
  return value === '' ? t('auth_error_required_password') : null;
}

export type FieldErrors<K extends string> = Partial<Record<K, string>>;

/**
 * Localized message for a field problem returned by the API. Domain codes (`email_taken`,
 * `password_breached`…) have their own text; Zod issues are re-derived from the client check,
 * and a handle that passes the client check but not the API is a reserved one.
 */
export function messageForIssue(t: Translate, issue: FieldIssue, value: string): string {
  switch (issue.code) {
    case 'email_taken':
      return t('auth_error_email_taken');
    case 'email_disposable':
      return t('auth_error_email_disposable');
    case 'handle_taken':
      return t('auth_error_handle_taken');
    case 'already_registered':
      return t('auth_error_already_registered');
    case 'password_breached':
      return t('auth_error_password_breached');
    default:
      break;
  }
  const field = issue.path.split('.', 1)[0];
  switch (field) {
    case 'email':
      return checkEmail(t, value) ?? t('errors_field_invalid_email');
    case 'handle':
      return checkHandle(t, value) ?? t('auth_error_handle_reserved');
    case 'displayName':
      return checkDisplayName(t, value) ?? t('auth_error_invalid_value');
    case 'password':
      return checkNewPassword(t, value) ?? t('auth_error_invalid_value');
    case 'acceptTerms':
      return t('auth_error_terms');
    default:
      return t('auth_error_invalid_value');
  }
}

/** Maps the field problems of a response onto the form's fields (unknown paths are dropped). */
export function issuesToFieldErrors<K extends string>(
  t: Translate,
  issues: readonly FieldIssue[],
  values: Readonly<Record<K, string>>,
): FieldErrors<K> {
  const out: FieldErrors<K> = {};
  for (const issue of issues) {
    const field = issue.path.split('.', 1)[0] as K;
    if (!(field in values) || out[field]) continue;
    out[field] = messageForIssue(t, issue, values[field]);
  }
  return out;
}

/** A copy of `errors` with `field` set to `message`, or without it when `message` is null. */
export function withFieldError<K extends string>(
  errors: FieldErrors<K>,
  field: K,
  message: string | null,
): FieldErrors<K> {
  const next: FieldErrors<K> = { ...errors };
  if (message) next[field] = message;
  else delete next[field];
  return next;
}
