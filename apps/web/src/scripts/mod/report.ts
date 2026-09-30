/**
 * Report form of a mod or build (lazy: bound the first time the report dialog opens). Guests get
 * the sign-in link; signed-in visitors send `POST /api/v2/reports { targetType: 'mod' }` (builds
 * are mods of kind `build`). The target id and the localized texts come from the form itself
 * (`data-mod-id`, `data-report-messages`, rendered by `components/mod/ReportDialog.astro`), so the
 * mod and build pages share it.
 */
import type { MeSummary } from '../account-hint.ts';
import { type ApiFailure, apiCall } from './api.ts';

export interface ReportMessages {
  chooseReason: string;
  sent: string;
  duplicate: string;
  error: string;
  offline: string;
  rateLimited: string;
  signInRequired: string;
  verifyEmail: string;
}

function readMessages(form: HTMLFormElement): ReportMessages | null {
  try {
    const parsed = JSON.parse(form.dataset.reportMessages ?? '') as Partial<ReportMessages> | null;
    if (!parsed || typeof parsed.sent !== 'string' || typeof parsed.error !== 'string') return null;
    const text = (value: unknown) => (typeof value === 'string' ? value : (parsed.error as string));
    return {
      chooseReason: text(parsed.chooseReason),
      sent: parsed.sent,
      duplicate: text(parsed.duplicate),
      error: parsed.error,
      offline: text(parsed.offline),
      rateLimited: text(parsed.rateLimited),
      signInRequired: text(parsed.signInRequired),
      verifyEmail: text(parsed.verifyEmail),
    };
  } catch {
    return null;
  }
}

function failureText(messages: ReportMessages, reason: ApiFailure): string {
  switch (reason) {
    case 'unauthenticated':
      return messages.signInRequired;
    case 'email':
      return messages.verifyEmail;
    case 'rate':
      return messages.rateLimited;
    case 'offline':
      return messages.offline;
    default:
      return messages.error;
  }
}

export function bindReport(dialog: HTMLDialogElement, session: MeSummary | null): void {
  if (dialog.dataset.bound !== undefined) return;
  dialog.dataset.bound = '';
  const form = dialog.querySelector<HTMLFormElement>('form[data-report-form]');
  const guest = dialog.querySelector<HTMLElement>('[data-report-guest]');
  const done = dialog.querySelector<HTMLElement>('[data-report-done]');
  const error = dialog.querySelector<HTMLElement>('[data-report-error]');
  if (!form) return;
  if (!session) {
    form.hidden = true;
    if (guest) guest.hidden = false;
    return;
  }
  const targetId = Number(form.dataset.modId);
  const messages = readMessages(form);
  if (!Number.isInteger(targetId) || targetId <= 0 || !messages) return;
  const showError = (message: string) => {
    if (!error) return;
    error.textContent = message;
    error.hidden = false;
  };
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const values = new FormData(form);
    const reason = values.get('reason');
    const details = String(values.get('details') ?? '').trim();
    if (typeof reason !== 'string' || reason === '') {
      showError(messages.chooseReason);
      form.querySelector<HTMLInputElement>('input[name="reason"]')?.focus();
      return;
    }
    if (error) error.hidden = true;
    const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (submit?.disabled) return;
    submit?.setAttribute('aria-busy', 'true');
    if (submit) submit.disabled = true;
    void apiCall('POST', '/api/v2/reports', {
      targetType: 'mod',
      targetId,
      reason,
      ...(details ? { details: details.slice(0, 2000) } : {}),
    }).then((result) => {
      submit?.removeAttribute('aria-busy');
      if (submit) submit.disabled = false;
      if (result.ok || result.reason === 'conflict') {
        form.hidden = true;
        if (done) {
          done.textContent = result.ok ? messages.sent : messages.duplicate;
          done.hidden = false;
          done.focus();
        }
        return;
      }
      showError(failureText(messages, result.reason));
    });
  });
}
