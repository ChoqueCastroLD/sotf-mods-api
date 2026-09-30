/**
 * Escalate a queue item to the admins (PLAN §7.4, shortcut `e`): a note of ≥ 3 characters says what
 * they need to look at. The item stays in its lane, marked as escalated and sorted as high risk.
 */
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { Dialog } from '@sotf/ui/dialog';
import { Field } from '@sotf/ui/field';
import { Textarea } from '@sotf/ui/textarea';
import { type FormEvent, useEffect, useId, useState } from 'react';

/** Minimum note length (`EscalateItemBody`). */
export const ESCALATION_NOTE_MIN = 3;
export const ESCALATION_NOTE_MAX = 1000;

export function EscalateDialog({
  open,
  onOpenChange,
  subject,
  onSubmit,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  subject: string;
  /** Rejects on failure (the dialog stays open). */
  onSubmit: (note: string) => Promise<void>;
}) {
  const [note, setNote] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const formId = useId();

  useEffect(() => {
    if (!open) return;
    setNote('');
    setError(null);
    setBusy(false);
  }, [open]);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const trimmed = note.trim();
    if (trimmed.length < ESCALATION_NOTE_MIN) {
      setError(m.ranger_decision_reason_required());
      return;
    }
    setBusy(true);
    try {
      await onSubmit(trimmed);
      onOpenChange(false);
    } catch {
      // Reported by the caller.
    } finally {
      setBusy(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      title={m.ranger_escalate_title()}
      description={subject}
      size="md"
      disablePointerDismissal
      footer={
        <>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            {m.ranger_cancel()}
          </Button>
          <Button type="submit" form={formId} loading={busy}>
            {m.ranger_escalate_submit()}
          </Button>
        </>
      }
    >
      <form id={formId} onSubmit={submit} className="grid gap-4" noValidate>
        <p className="text-sm text-fg-muted">{m.ranger_escalate_text()}</p>
        <Field label={m.ranger_escalate_note()} error={error ?? undefined}>
          <Textarea
            value={note}
            maxLength={ESCALATION_NOTE_MAX}
            minRows={3}
            onChange={(event) => {
              setNote(event.target.value);
              setError(null);
            }}
          />
        </Field>
      </form>
    </Dialog>
  );
}
