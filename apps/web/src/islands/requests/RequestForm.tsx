/**
 * Title + details form of a request (new and edit): the markdown-lite editor for the details,
 * client-side length checks that mirror `REQUEST_RULES` (literal: the island ships no Zod) and
 * the failure states of PLAN §1.2.
 */
import { Button } from '@sotf/ui/button';
import { type FormEvent, useId, useState } from 'react';
import { Composer } from '../comments/Composer.tsx';
import type { Failure } from '../comments/lib/api.ts';
import { t } from '../comments/lib/messages.ts';
import { FailureNote } from '../comments/lib/ui.tsx';
import { REQUEST_LIMITS } from './rules.ts';

const REQUEST_TITLE_MIN = REQUEST_LIMITS.titleMin;
const REQUEST_TITLE_MAX = REQUEST_LIMITS.titleMax;
const REQUEST_BODY_MAX = REQUEST_LIMITS.bodyMax;

export interface RequestFormProps {
  initialTitle?: string;
  initialBody?: string;
  submitLabel: string;
  /** Resolves null on success, the failure otherwise. */
  onSubmit: (value: { title: string; bodyMd: string }) => Promise<Failure | null>;
  onCancel?: () => void;
  autoFocus?: boolean;
}

export function RequestForm({
  initialTitle = '',
  initialBody = '',
  submitLabel,
  onSubmit,
  onCancel,
  autoFocus = false,
}: RequestFormProps) {
  const id = useId();
  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);
  const [busy, setBusy] = useState(false);
  const [titleError, setTitleError] = useState<string | null>(null);
  const [failure, setFailure] = useState<Failure | null>(null);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (busy) return;
    const cleanTitle = title.normalize('NFC').replace(/\s+/g, ' ').trim();
    if (cleanTitle.length < REQUEST_TITLE_MIN) {
      setTitleError(t('requests_title_short', { min: REQUEST_TITLE_MIN }));
      return;
    }
    setTitleError(null);
    setFailure(null);
    setBusy(true);
    const result = await onSubmit({ title: cleanTitle, bodyMd: body.normalize('NFC').trim() });
    setBusy(false);
    if (result) {
      const issue =
        result.kind === 'problem' ? result.problem.errors.find((item) => item.path.startsWith('title')) : undefined;
      if (issue) setTitleError(t('requests_title_short', { min: REQUEST_TITLE_MIN }));
      else setFailure(result);
    }
  };

  const titleId = `${id}-title`;
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  return (
    <form className="grid gap-4" onSubmit={submit} noValidate aria-busy={busy || undefined}>
      <div className="grid gap-1.5">
        <label htmlFor={titleId} className="text-sm font-semibold text-fg">
          {t('requests_field_title')}
        </label>
        <input
          id={titleId}
          type="text"
          value={title}
          maxLength={REQUEST_TITLE_MAX}
          // biome-ignore lint/a11y/noAutofocus: the form opens on user intent (dialog or dedicated page)
          autoFocus={autoFocus}
          disabled={busy}
          aria-invalid={titleError ? true : undefined}
          aria-describedby={titleError ? `${hintId} ${errorId}` : hintId}
          onChange={(event) => {
            setTitle(event.target.value);
            if (titleError) setTitleError(null);
          }}
          className="h-11 rounded-md border border-border-strong bg-sunken shadow-[inset_0_1px_2px_rgb(0_0_0/0.18)] transition-[border-color,box-shadow] duration-(--dur-fast) hover:border-fg-subtle focus-visible:border-focus focus-visible:shadow-[0_0_0_3px_var(--focus-halo)] focus-visible:outline-none px-3 text-base text-fg placeholder:text-fg-subtle aria-invalid:border-danger md:h-10 md:text-sm"
        />
        <p id={hintId} className="text-xs text-fg-muted">
          {t('requests_field_title_hint', { min: REQUEST_TITLE_MIN, max: REQUEST_TITLE_MAX })}
        </p>
        {titleError ? (
          <p id={errorId} role="alert" className="text-sm text-danger">
            {titleError}
          </p>
        ) : null}
      </div>
      <Composer
        value={body}
        onChange={setBody}
        maxLength={REQUEST_BODY_MAX}
        label={t('requests_field_body')}
        placeholder={t('requests_body_placeholder')}
        searchMentions={false}
        disabled={busy}
        minRows={6}
        onSubmitShortcut={() => {
          if (!busy) void submit({ preventDefault() {} } as FormEvent);
        }}
      />
      {failure ? <FailureNote failure={failure} /> : null}
      <div className="flex flex-wrap items-center justify-end gap-2">
        {onCancel ? (
          <Button type="button" variant="ghost" onClick={onCancel} disabled={busy}>
            {t('social_action_cancel')}
          </Button>
        ) : null}
        <Button type="submit" variant="primary" loading={busy}>
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
