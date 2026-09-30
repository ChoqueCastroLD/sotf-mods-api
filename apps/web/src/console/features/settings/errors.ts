/**
 * Localized text of a failed call for the Settings, Signals and Me screens: the problem detail
 * of the API code (errors namespace) plus the request reference, for toasts and inline alerts.
 */
import { errorReference, problemCode } from '../../lib/errors.ts';
import { problemText, t } from '../../lib/messages.ts';

/** «What happened · what to do» of a failure. */
export function failureDetail(error: unknown): string {
  return problemText(problemCode(error)).detail;
}

/** Toast description: the detail and, when known, «Ref: …». */
export function failureDescription(error: unknown): string {
  const detail = failureDetail(error);
  const reference = errorReference(error);
  return reference ? `${detail} · ${t('ui_error_reference', { id: reference })}` : detail;
}
