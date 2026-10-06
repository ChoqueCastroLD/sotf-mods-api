/**
 * Reason dialog of the decisions that need one — reject, request changes, remove (PLAN §7.4):
 * pick a template of that action (its wording in the ranger's locale is shown, the author gets
 * it in theirs) and/or write a note to the author (Markdown). The API requires one of the two.
 *
 * `mode="comment"` is the rejection of a held comment: it is hidden with a reason (≥ 3 chars),
 * which is not a template decision.
 */
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { Dialog } from '@sotf/ui/dialog';
import { Field } from '@sotf/ui/field';
import { RadioCardGroup } from '@sotf/ui/radio-card';
import { Textarea } from '@sotf/ui/textarea';
import { useQuery } from '@tanstack/react-query';
import { type FormEvent, useEffect, useId, useState } from 'react';
import { type ReasonAction, templatesQuery } from './api.ts';
import { actionLabel } from './labels.ts';
import { templatesFor, templateText, templateTitle } from './templates.ts';

/** `DecisionBody.note` and `HideContentBody.reason` limits. */
const NOTE_MAX = 2000;
const REASON_MAX = 500;
const NO_TEMPLATE = '__none__';

export interface DecisionRequest {
  action: ReasonAction;
  templateKey?: string;
  note?: string;
}

export interface DecisionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Title of the item («Auto Pickup 2.4.1»). */
  itemTitle: string;
  action: ReasonAction;
  mode?: 'decision' | 'comment';
  onSubmit: (request: DecisionRequest) => Promise<void>;
}

export function DecisionDialog({
  open,
  onOpenChange,
  itemTitle,
  action,
  mode = 'decision',
  onSubmit,
}: DecisionDialogProps) {
  const templates = useQuery({ ...templatesQuery(), enabled: open && mode === 'decision' });
  const [templateKey, setTemplateKey] = useState<string>(NO_TEMPLATE);
  const [note, setNote] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const formId = useId();
  const max = mode === 'comment' ? REASON_MAX : NOTE_MAX;

  // Every opening starts clean (the previous item's note must not leak into the next one).
  useEffect(() => {
    if (!open) return;
    setTemplateKey(NO_TEMPLATE);
    setNote('');
    setError(null);
    setBusy(false);
  }, [open]);

  const options = mode === 'decision' ? templatesFor(templates.data ?? [], action) : [];
  const chosen = options.find((template) => template.key === templateKey) ?? null;

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const trimmed = note.trim();
    if (mode === 'comment' && trimmed.length < 3) {
      setError(m.ranger_decision_reason_required());
      return;
    }
    if (mode === 'decision' && !chosen && !trimmed) {
      setError(m.ranger_decision_template_or_note());
      return;
    }
    setError(null);
    setBusy(true);
    try {
      await onSubmit({
        action,
        ...(chosen ? { templateKey: chosen.key } : {}),
        ...(trimmed ? { note: trimmed } : {}),
      });
      onOpenChange(false);
    } catch {
      // The caller reported the failure (toast); keep the dialog and its text.
    } finally {
      setBusy(false);
    }
  };

  const title =
    mode === 'comment' ? m.ranger_comment_reject_title() : m.ranger_decision_title({ action: actionLabel(action) });

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      title={title}
      description={itemTitle}
      size="lg"
      disablePointerDismissal
      footer={
        <>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            {m.ranger_cancel()}
          </Button>
          <Button
            type="submit"
            form={formId}
            loading={busy}
            variant={action === 'request_changes' ? 'primary' : 'danger'}
          >
            {mode === 'comment' ? m.ranger_comment_reject_confirm() : actionLabel(action)}
          </Button>
        </>
      }
    >
      <form id={formId} onSubmit={submit} className="grid gap-4" noValidate>
        {mode === 'decision' ? (
          options.length > 0 ? (
            <RadioCardGroup
              legend={m.ranger_decision_template_label()}
              columns={1}
              value={templateKey}
              onValueChange={(value) => {
                setTemplateKey(value);
                setError(null);
              }}
              options={[
                { value: NO_TEMPLATE, title: m.ranger_decision_no_template() },
                ...options.map((template) => ({
                  value: template.key,
                  title: templateTitle(template),
                  description: templateText(template),
                })),
              ]}
            />
          ) : templates.isPending ? (
            <p className="text-sm text-fg-muted" role="status">
              {m.ranger_loading()}
            </p>
          ) : null
        ) : null}
        <Field
          label={mode === 'comment' ? m.ranger_comment_reject_reason() : m.ranger_decision_note_label()}
          description={mode === 'comment' ? m.ranger_comment_reject_reason_hint() : m.ranger_decision_note_hint()}
          error={error ?? undefined}
          optional={mode === 'decision'}
        >
          <Textarea
            value={note}
            maxLength={max}
            minRows={4}
            onChange={(event) => {
              setNote(event.target.value);
              setError(null);
            }}
          />
        </Field>
        <p className="text-right text-2xs text-fg-subtle tabular-nums" aria-hidden="true">
          {note.length}/{max}
        </p>
      </form>
    </Dialog>
  );
}
