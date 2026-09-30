/**
 * Close a report (PLAN §7.4 «Reportes»): resolve — optionally hiding the reported content (mod
 * and kit → unlisted, version → held, comment/review/field report → hidden) — or dismiss. Closing
 * one report closes every open report of the same target and notifies each reporter.
 */
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { Checkbox } from '@sotf/ui/checkbox';
import { Dialog } from '@sotf/ui/dialog';
import { Field } from '@sotf/ui/field';
import { Textarea } from '@sotf/ui/textarea';
import { type FormEvent, useEffect, useId, useState } from 'react';

export type ReportResolution = 'resolve' | 'dismiss';

export interface ReportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  resolution: ReportResolution;
  /** What was reported («Comment on AmmoUi»). */
  subject: string;
  /** Users are never hidden: the checkbox is not offered for them. */
  canHide: boolean;
  /** Preselect «hide the content» (the «Resolve and hide» entry). */
  hideByDefault?: boolean;
  onSubmit: (input: { action: ReportResolution; hideTarget: boolean; note?: string }) => Promise<void>;
}

const NOTE_MAX = 2000;

export function ReportDialog({
  open,
  onOpenChange,
  resolution,
  subject,
  canHide,
  hideByDefault = false,
  onSubmit,
}: ReportDialogProps) {
  const [hide, setHide] = useState(hideByDefault);
  const [note, setNote] = useState('');
  const [busy, setBusy] = useState(false);
  const formId = useId();

  useEffect(() => {
    if (!open) return;
    setHide(hideByDefault && canHide);
    setNote('');
    setBusy(false);
  }, [open, hideByDefault, canHide]);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setBusy(true);
    try {
      const trimmed = note.trim();
      await onSubmit({
        action: resolution,
        hideTarget: resolution === 'resolve' && canHide && hide,
        ...(trimmed ? { note: trimmed } : {}),
      });
      onOpenChange(false);
    } catch {
      // Reported by the caller; keep the dialog.
    } finally {
      setBusy(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      title={resolution === 'resolve' ? m.ranger_report_resolve_title() : m.ranger_report_dismiss_title()}
      description={subject}
      size="md"
      disablePointerDismissal
      footer={
        <>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            {m.ranger_cancel()}
          </Button>
          <Button type="submit" form={formId} loading={busy} variant={hide ? 'danger' : 'primary'}>
            {resolution === 'resolve'
              ? hide
                ? m.ranger_report_resolve_hide()
                : m.ranger_report_resolve()
              : m.ranger_report_dismiss()}
          </Button>
        </>
      }
    >
      <form id={formId} onSubmit={submit} className="grid gap-4" noValidate>
        <p className="text-sm text-fg-muted">
          {resolution === 'resolve' ? m.ranger_report_resolve_text() : m.ranger_report_dismiss_text()}
        </p>
        {resolution === 'resolve' && canHide ? (
          <Checkbox
            label={m.ranger_report_hide_label()}
            description={m.ranger_report_hide_hint()}
            checked={hide}
            onCheckedChange={setHide}
          />
        ) : null}
        <Field label={m.ranger_report_note_label()} description={m.ranger_report_note_hint()} optional>
          <Textarea value={note} maxLength={NOTE_MAX} minRows={3} onChange={(event) => setNote(event.target.value)} />
        </Field>
      </form>
    </Dialog>
  );
}
