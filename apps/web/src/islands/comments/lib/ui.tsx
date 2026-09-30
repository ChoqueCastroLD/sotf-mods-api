/**
 * Small shared pieces of the social islands: a native modal `<dialog>` (focus trap, `inert`
 * background, Escape and focus return come from the platform, so no dialog library ships), the
 * inline error with retry and reference, the undo toast, and the report form for comments,
 * reviews and field reports (`POST /api/v2/reports`).
 */
import { Button } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { X } from 'lucide-react';
import { type FormEvent, type ReactNode, useEffect, useId, useRef, useState } from 'react';
import { toast } from '../../../scripts/mod/toast.ts';
import { api, type Failure, failureRef, failureText } from './api.ts';
import { t } from './messages.ts';

// ---------------------------------------------------------------------------------------------
// Modal
// ---------------------------------------------------------------------------------------------

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: ReactNode;
  /** `sm` 400 · `md` 560 px. */
  size?: 'sm' | 'md';
}

export function Modal({ open, onClose, title, description, children, size = 'md' }: ModalProps) {
  const ref = useRef<HTMLDialogElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: backdrop click only; the keyboard closes the modal with Escape (native) and the close button.
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      aria-describedby={description ? descriptionId : undefined}
      onClose={onClose}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        // Backdrop click (the dialog itself, not its content).
        if (event.target === event.currentTarget) onClose();
      }}
      className={`m-auto w-[calc(100%-2rem)] ${size === 'sm' ? 'max-w-[25rem]' : 'max-w-[35rem]'} rounded-lg border border-border-strong bg-raised p-0 text-fg shadow-lg backdrop:bg-overlay max-md:mb-0 max-md:w-full max-md:max-w-none max-md:rounded-b-none`}
    >
      <div className="grid max-h-[85dvh] gap-4 overflow-y-auto p-5">
        <header className="flex items-start justify-between gap-3">
          <div className="grid gap-1">
            <h2 id={titleId} className="text-lg font-semibold">
              {title}
            </h2>
            {description ? (
              <p id={descriptionId} className="text-sm text-fg-muted">
                {description}
              </p>
            ) : null}
          </div>
          <Button variant="icon" size="sm" aria-label={t('social_action_close')} onClick={onClose}>
            <Icon icon={X} size={18} />
          </Button>
        </header>
        {children}
      </div>
    </dialog>
  );
}

// ---------------------------------------------------------------------------------------------
// Errors
// ---------------------------------------------------------------------------------------------

export function FailureNote({ failure, onRetry }: { failure: Failure; onRetry?: () => void }) {
  const reference = failureRef(failure);
  return (
    <div role="alert" className="grid gap-1 rounded-md border border-danger/50 bg-danger-soft/40 p-3 text-sm">
      <p>{failureText(failure)}</p>
      <p className="flex flex-wrap items-center gap-3 text-xs text-fg-muted">
        {reference ? <span>{t('errors_reference', { id: reference })}</span> : null}
        {onRetry ? (
          <button
            type="button"
            onClick={onRetry}
            className="inline-flex min-h-11 items-center font-semibold text-link underline underline-offset-3 md:min-h-8"
          >
            {t('social_action_retry')}
          </button>
        ) : null}
      </p>
    </div>
  );
}

/** Polite announcement for screen readers (visually hidden). */
export function LiveRegion({ message }: { message: string }) {
  return (
    <p className="sr-only" role="status" aria-live="polite">
      {message}
    </p>
  );
}

// ---------------------------------------------------------------------------------------------
// Toasts
// ---------------------------------------------------------------------------------------------

/** One toast of the page (`[data-mod-toast]`), optionally with «Undo». */
export function notify(message: string, undo?: () => void): void {
  toast(message, undo ? { label: t('social_action_undo'), onClick: undo } : undefined);
}

/**
 * Optimism with undo (PLAN §1.2) for destructive actions: the UI changes now, the request is sent
 * when the undo window closes (or right away when the page is being left).
 */
export function deferWithUndo(message: string, commit: () => void, revert: () => void, delayMs = 6000): void {
  let done = false;
  const run = () => {
    if (done) return;
    done = true;
    window.clearTimeout(timer);
    window.removeEventListener('pagehide', run);
    commit();
  };
  const timer = window.setTimeout(run, delayMs);
  window.addEventListener('pagehide', run);
  notify(message, () => {
    if (done) return;
    done = true;
    window.clearTimeout(timer);
    window.removeEventListener('pagehide', run);
    revert();
  });
}

// ---------------------------------------------------------------------------------------------
// Report dialog (comments, reviews, field reports)
// ---------------------------------------------------------------------------------------------

export type ReportTarget = 'comment' | 'review' | 'compat_report' | 'request' | 'request_comment';

const REASONS = ['spam', 'harassment', 'nsfw_unmarked', 'illegal', 'other'] as const;

function reasonLabel(reason: (typeof REASONS)[number]): string {
  switch (reason) {
    case 'spam':
      return t('social_report_reason_spam');
    case 'harassment':
      return t('social_report_reason_harassment');
    case 'nsfw_unmarked':
      return t('social_report_reason_nsfw_unmarked');
    case 'illegal':
      return t('social_report_reason_illegal');
    default:
      return t('social_report_reason_other');
  }
}

export interface ReportDialogProps {
  target: { type: ReportTarget; id: number } | null;
  onClose: () => void;
}

export function ReportDialog({ target, onClose }: ReportDialogProps) {
  const [reason, setReason] = useState<string>('');
  const [details, setDetails] = useState('');
  const [busy, setBusy] = useState(false);
  const [failure, setFailure] = useState<Failure | null>(null);
  const [missingReason, setMissingReason] = useState(false);
  const [done, setDone] = useState<string | null>(null);
  const groupId = useId();
  const detailsId = useId();
  const firstRadio = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!target) return;
    setReason('');
    setDetails('');
    setFailure(null);
    setMissingReason(false);
    setDone(null);
  }, [target]);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (!target) return;
    if (!reason) {
      setMissingReason(true);
      firstRadio.current?.focus();
      return;
    }
    setBusy(true);
    setFailure(null);
    const result = await api('POST', '/api/v2/reports', {
      targetType: target.type,
      targetId: target.id,
      reason,
      ...(details.trim() ? { details: details.trim().slice(0, 2000) } : {}),
    });
    setBusy(false);
    if (result.ok) setDone(t('social_report_sent'));
    else if (result.kind === 'problem' && result.problem.code === 'CONFLICT') setDone(t('social_report_duplicate'));
    else setFailure(result);
  };

  const title =
    target?.type === 'review'
      ? t('social_report_review_title')
      : target?.type === 'compat_report'
        ? t('social_report_field_report_title')
        : target?.type === 'request'
          ? t('social_report_request_title')
          : target?.type === 'request_comment'
            ? t('social_report_request_comment_title')
            : t('social_report_comment_title');

  return (
    <Modal open={target !== null} onClose={onClose} title={title} description={t('social_report_intro')} size="sm">
      {done ? (
        <div className="grid gap-4">
          <p role="status" className="rounded-md border border-border bg-surface p-3 text-sm">
            {done}
          </p>
          <Button variant="secondary" onClick={onClose} className="justify-self-end">
            {t('social_action_close')}
          </Button>
        </div>
      ) : (
        <form className="grid gap-4" onSubmit={submit} noValidate>
          <fieldset className="grid gap-1" aria-describedby={missingReason ? `${groupId}-error` : undefined}>
            <legend className="mb-1 text-sm font-semibold">{t('social_report_reason_label')}</legend>
            {REASONS.map((value, index) => (
              <label
                key={value}
                className="flex min-h-11 cursor-pointer items-center gap-3 rounded-md px-2 hover:bg-fg/6 md:min-h-9"
              >
                <input
                  ref={index === 0 ? firstRadio : undefined}
                  type="radio"
                  name={`${groupId}-reason`}
                  value={value}
                  checked={reason === value}
                  onChange={() => {
                    setReason(value);
                    setMissingReason(false);
                  }}
                  className="size-4 accent-primary"
                />
                <span className="text-sm">{reasonLabel(value)}</span>
              </label>
            ))}
            {missingReason ? (
              <p id={`${groupId}-error`} className="text-sm text-danger">
                {t('social_report_choose_reason')}
              </p>
            ) : null}
          </fieldset>
          <div className="grid gap-1">
            <label htmlFor={detailsId} className="text-sm font-semibold">
              {t('social_report_details_label')}
            </label>
            <textarea
              id={detailsId}
              value={details}
              maxLength={2000}
              rows={3}
              onChange={(event) => setDetails(event.target.value)}
              className="min-h-24 w-full rounded-md border border-border-strong bg-sunken px-3 py-2 text-sm text-fg outline-none focus-visible:ring-2 focus-visible:ring-focus"
            />
          </div>
          {failure ? <FailureNote failure={failure} /> : null}
          <div className="flex flex-wrap justify-end gap-2">
            <Button variant="ghost" onClick={onClose}>
              {t('social_action_cancel')}
            </Button>
            <Button type="submit" variant="danger" loading={busy}>
              {t('social_report_submit')}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}
