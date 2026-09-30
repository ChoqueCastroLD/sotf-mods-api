/**
 * Report form of the mod (lazy: bound the first time the report dialog opens). Guests get the
 * sign-in link; signed-in visitors send `POST /api/v2/reports { targetType: 'mod' }`.
 */
import type { MeSummary } from '../account-hint.ts';
import { apiCall } from './api.ts';
import { failureMessage } from './follow.ts';
import type { ModPageData } from './types.ts';

export function bindReport(dialog: HTMLDialogElement, data: ModPageData, session: MeSummary | null): void {
  if (dialog.dataset.bound) return;
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
      showError(data.messages.reportChooseReason);
      form.querySelector<HTMLInputElement>('input[name="reason"]')?.focus();
      return;
    }
    if (error) error.hidden = true;
    const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    submit?.setAttribute('aria-busy', 'true');
    if (submit) submit.disabled = true;
    void apiCall('POST', '/api/v2/reports', {
      targetType: 'mod',
      targetId: data.modId,
      reason,
      ...(details ? { details: details.slice(0, 2000) } : {}),
    }).then((result) => {
      submit?.removeAttribute('aria-busy');
      if (submit) submit.disabled = false;
      if (result.ok || result.reason === 'conflict') {
        form.hidden = true;
        if (done) {
          done.textContent = result.ok ? data.messages.reportSent : data.messages.reportDuplicate;
          done.hidden = false;
        }
        return;
      }
      showError(failureMessage(data, result.reason));
    });
  });
}
