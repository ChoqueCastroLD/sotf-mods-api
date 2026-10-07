/**
 * Write or edit a review (PLAN §7.7): stars (required, radio group), optional title (80) and
 * markdown-lite body (2 000, same editor and preview as comments), and the version used
 * (default: the last one you downloaded, filled in by the API). Field errors are listed at the
 * top and linked to their fields; the draft survives reloads.
 */
import { Button } from '@sotf/ui/button';
import { type FormEvent, useEffect, useId, useRef, useState } from 'react';
import { toast } from '../../lib/client/toast.ts';
import { pageEntity, track } from '../../scripts/beacon.ts';
import { Composer } from '../comments/Composer.tsx';
import { api } from '../comments/lib/api.ts';
import { htmlToMarkdown } from '../comments/lib/markdown.ts';
import { t } from '../comments/lib/messages.ts';
import { notifyFailure } from '../comments/lib/ui.tsx';
import type { VersionOption } from '../comments/types.ts';
import { StarInput } from './StarInput.tsx';
import { REVIEW_BODY_MAX, REVIEW_TITLE_MAX, type Review } from './types.ts';

export interface ReviewFormProps {
  modId: number;
  existing: Review | null;
  loadVersions: () => Promise<VersionOption[]>;
  onDone: (review: Review, created: boolean) => void;
  onCancel?: () => void;
  autoFocus?: boolean;
}

interface Draft {
  rating: number;
  title: string;
  body: string;
}

function draftKey(modId: number): string {
  return `sotf:review-draft:${modId}`;
}

function readDraft(modId: number): Draft | null {
  try {
    const raw = sessionStorage.getItem(draftKey(modId));
    const value: unknown = raw ? JSON.parse(raw) : null;
    if (!value || typeof value !== 'object') return null;
    const { rating, title, body } = value as Record<string, unknown>;
    return {
      rating: typeof rating === 'number' ? rating : 0,
      title: typeof title === 'string' ? title : '',
      body: typeof body === 'string' ? body : '',
    };
  } catch {
    return null;
  }
}

function writeDraft(modId: number, draft: Draft | null): void {
  try {
    if (draft && (draft.rating || draft.title.trim() || draft.body.trim())) {
      sessionStorage.setItem(draftKey(modId), JSON.stringify(draft));
    } else sessionStorage.removeItem(draftKey(modId));
  } catch {
    // Private mode.
  }
}

export function ReviewForm({ modId, existing, loadVersions, onDone, onCancel, autoFocus = false }: ReviewFormProps) {
  const id = useId();
  const initial: Draft = existing
    ? {
        rating: existing.rating,
        title: existing.title ?? '',
        body: existing.bodyHtml ? htmlToMarkdown(existing.bodyHtml) : '',
      }
    : (readDraft(modId) ?? { rating: 0, title: '', body: '' });
  const [rating, setRating] = useState(initial.rating);
  const [title, setTitle] = useState(initial.title);
  const [body, setBody] = useState(initial.body);
  const [versionId, setVersionId] = useState<number | null>(existing?.modVersion?.id ?? null);
  const [versions, setVersions] = useState<VersionOption[] | null>(null);
  const [errors, setErrors] = useState<Array<{ field: 'rating' | 'title' | 'body'; message: string }>>([]);
  const [busy, setBusy] = useState(false);
  const summary = useRef<HTMLDivElement | null>(null);
  const firstField = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!existing) writeDraft(modId, { rating, title, body });
  }, [existing, modId, rating, title, body]);

  useEffect(() => {
    let cancelled = false;
    void loadVersions().then((list) => {
      if (!cancelled) setVersions(list);
    });
    return () => {
      cancelled = true;
    };
  }, [loadVersions]);

  useEffect(() => {
    if (autoFocus) firstField.current?.querySelector<HTMLInputElement>('input')?.focus();
  }, [autoFocus]);

  const validate = (): typeof errors => {
    const found: typeof errors = [];
    if (rating < 1 || rating > 5) found.push({ field: 'rating', message: t('social_review_rating_required') });
    if (title.trim().length > REVIEW_TITLE_MAX)
      found.push({ field: 'title', message: t('social_review_title_too_long', { max: REVIEW_TITLE_MAX }) });
    if (body.length > REVIEW_BODY_MAX)
      found.push({ field: 'body', message: t('social_comment_too_long', { max: REVIEW_BODY_MAX }) });
    return found;
  };

  const submit = async (event?: FormEvent) => {
    event?.preventDefault();
    if (busy) return;
    const found = validate();
    setErrors(found);
    if (found.length > 0) {
      window.setTimeout(() => summary.current?.focus(), 0);
      return;
    }
    setBusy(true);
    const text = body.normalize('NFC').trim();
    const cleanTitle = title.normalize('NFC').trim();
    const result = existing
      ? await api<Review>('PATCH', `/api/v2/reviews/${existing.id}`, {
          rating,
          title: cleanTitle || null,
          bodyMd: text || null,
          ...(versionId ? { modVersionId: versionId } : {}),
        })
      : await api<Review>('POST', `/api/v2/mods/${modId}/reviews`, {
          rating,
          ...(cleanTitle ? { title: cleanTitle } : {}),
          ...(text ? { bodyMd: text } : {}),
          ...(versionId ? { modVersionId: versionId } : {}),
        });
    setBusy(false);
    if (!result.ok) {
      if (result.kind === 'problem') {
        const fieldErrors: typeof errors = [];
        for (const issue of result.problem.errors) {
          if (issue.path.startsWith('rating'))
            fieldErrors.push({ field: 'rating', message: t('social_review_rating_required') });
          else if (issue.path.startsWith('title'))
            fieldErrors.push({ field: 'title', message: t('social_review_title_too_long', { max: REVIEW_TITLE_MAX }) });
          else if (issue.path.startsWith('bodyMd'))
            fieldErrors.push({ field: 'body', message: t('social_comment_invalid') });
        }
        if (fieldErrors.length > 0) {
          setErrors(fieldErrors);
          window.setTimeout(() => summary.current?.focus(), 0);
          return;
        }
      }
      if (result.kind === 'problem' && result.problem.code === 'FORBIDDEN') toast.warning(t('social_review_forbidden'));
      else if (result.kind === 'problem' && result.problem.code === 'CONFLICT')
        toast.warning(t('social_review_conflict'));
      else notifyFailure(result, () => void submit());
      return;
    }
    writeDraft(modId, null);
    if (!existing) track('review_submit', { ...pageEntity(), props: { rating, hasBody: text.length > 0 } });
    onDone(result.data, !existing);
  };

  const errorOf = (field: 'rating' | 'title' | 'body') => errors.find((item) => item.field === field)?.message;

  return (
    <form className="grid gap-4" onSubmit={(event) => void submit(event)} noValidate aria-busy={busy || undefined}>
      {errors.length > 0 ? (
        <div
          ref={summary}
          tabIndex={-1}
          role="alert"
          className="rounded-md border border-danger/50 bg-danger-soft/40 p-3 text-sm"
        >
          <p className="font-semibold">{t('errors_validation_summary', { count: errors.length })}</p>
          <ul className="list-disc ps-5">
            {errors.map((item) => (
              <li key={item.field}>
                <a href={`#${id}-${item.field}`} className="underline underline-offset-3">
                  {item.message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div ref={firstField} id={`${id}-rating`}>
        <StarInput
          value={rating}
          onChange={(value) => {
            setRating(value);
            setErrors((list) => list.filter((item) => item.field !== 'rating'));
          }}
          invalid={Boolean(errorOf('rating'))}
          errorId={`${id}-rating-error`}
          disabled={busy}
        />
        {errorOf('rating') ? (
          <p id={`${id}-rating-error`} className="mt-1 text-sm text-danger">
            {errorOf('rating')}
          </p>
        ) : null}
      </div>

      <div className="grid gap-1">
        <label htmlFor={`${id}-title`} className="text-sm font-semibold">
          {t('social_review_title_label')} <span className="font-normal text-fg-muted">{t('social_optional')}</span>
        </label>
        <input
          id={`${id}-title`}
          type="text"
          value={title}
          maxLength={REVIEW_TITLE_MAX + 20}
          onChange={(event) => setTitle(event.target.value)}
          aria-invalid={Boolean(errorOf('title')) || undefined}
          aria-describedby={errorOf('title') ? `${id}-title-error` : undefined}
          disabled={busy}
          className="min-h-11 rounded-md border border-border-strong bg-sunken shadow-[inset_0_1px_2px_rgb(0_0_0/0.18)] transition-[border-color,box-shadow] duration-(--dur-fast) hover:border-fg-subtle focus-visible:border-focus focus-visible:shadow-[0_0_0_3px_var(--focus-halo)] focus-visible:outline-none px-3 text-sm aria-invalid:border-danger"
        />
        {errorOf('title') ? (
          <p id={`${id}-title-error`} className="text-sm text-danger">
            {errorOf('title')}
          </p>
        ) : null}
      </div>

      <div id={`${id}-body`}>
        <Composer
          value={body}
          onChange={setBody}
          maxLength={REVIEW_BODY_MAX}
          label={t('social_review_body_label')}
          placeholder={t('social_review_body_placeholder')}
          disabled={busy}
          invalid={Boolean(errorOf('body'))}
          describedBy={errorOf('body') ? `${id}-body-error` : undefined}
          onSubmitShortcut={() => void submit()}
        />
        {errorOf('body') ? (
          <p id={`${id}-body-error`} className="mt-1 text-sm text-danger">
            {errorOf('body')}
          </p>
        ) : null}
      </div>

      <div className="grid gap-1">
        <label htmlFor={`${id}-version`} className="text-sm font-semibold">
          {t('social_review_version_label')}
        </label>
        <select
          id={`${id}-version`}
          value={versionId ?? ''}
          onChange={(event) => setVersionId(event.target.value ? Number(event.target.value) : null)}
          disabled={busy}
          className="min-h-11 max-w-72 rounded-md border border-border-strong bg-sunken shadow-[inset_0_1px_2px_rgb(0_0_0/0.18)] transition-[border-color,box-shadow] duration-(--dur-fast) hover:border-fg-subtle focus-visible:border-focus focus-visible:shadow-[0_0_0_3px_var(--focus-halo)] focus-visible:outline-none px-2 text-sm"
        >
          <option value="">{t('social_review_version_auto')}</option>
          {versions?.map((version) => (
            <option key={version.id} value={version.id}>
              {version.version}
            </option>
          ))}
        </select>
      </div>

      <p className="text-xs text-fg-muted">{t('social_review_rules')}</p>
      <div className="flex flex-wrap justify-end gap-2">
        {onCancel ? (
          <Button variant="ghost" onClick={onCancel} disabled={busy}>
            {t('social_action_cancel')}
          </Button>
        ) : null}
        <Button type="submit" loading={busy}>
          {existing ? t('social_review_update') : t('social_review_submit')}
        </Button>
      </div>
    </form>
  );
}
