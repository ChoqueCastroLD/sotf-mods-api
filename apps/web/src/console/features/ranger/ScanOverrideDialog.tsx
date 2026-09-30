/**
 * Override a security scan verdict (PLAN §7.4: «El moderador puede marcar "falso positivo
 * verificado"»). `false_positive` releases a version held by the scan; `malicious` pulls it.
 *
 * Offered when the item's scan has an id (`ScanSummaryDTO.id`; null for versions never scanned).
 */
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { Dialog } from '@sotf/ui/dialog';
import { Field } from '@sotf/ui/field';
import { RadioCardGroup } from '@sotf/ui/radio-card';
import { Textarea } from '@sotf/ui/textarea';
import { useQueryClient } from '@tanstack/react-query';
import { type FormEvent, useEffect, useId, useState } from 'react';
import { notify } from '../../lib/notify.ts';
import { rangerApi, refreshModeration, type ScanSummary } from './api.ts';
import { scanVerdictLabel } from './labels.ts';
import { reportFailure } from './shared.tsx';

type Verdict = 'false_positive' | 'malicious';

/** The scan to override, or null when there is none. */
export function scanIdOf(scan: ScanSummary | null): number | null {
  const id: unknown = scan?.id;
  return typeof id === 'number' && Number.isSafeInteger(id) && id > 0 ? id : null;
}

export function ScanOverrideDialog({
  open,
  onOpenChange,
  scanId,
  subject,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  scanId: number;
  subject: string;
}) {
  const queryClient = useQueryClient();
  const [verdict, setVerdict] = useState<Verdict>('false_positive');
  const [note, setNote] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const formId = useId();

  useEffect(() => {
    if (!open) return;
    setVerdict('false_positive');
    setNote('');
    setError(null);
    setBusy(false);
  }, [open]);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const trimmed = note.trim();
    if (trimmed.length < 3) {
      setError(m.ranger_decision_reason_required());
      return;
    }
    setBusy(true);
    try {
      const result = await rangerApi.overrideScan(scanId, verdict, trimmed);
      notify.success(m.ranger_scan_override_done({ verdict: scanVerdictLabel(result.verdict) }));
      await refreshModeration(queryClient);
      onOpenChange(false);
    } catch (failure) {
      reportFailure(failure, m.ranger_scan_override_failed());
    } finally {
      setBusy(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      title={m.ranger_scan_override_title()}
      description={subject}
      size="md"
      disablePointerDismissal
      footer={
        <>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            {m.ranger_cancel()}
          </Button>
          <Button type="submit" form={formId} loading={busy} variant={verdict === 'malicious' ? 'danger' : 'primary'}>
            {m.ranger_scan_override_confirm()}
          </Button>
        </>
      }
    >
      <form id={formId} onSubmit={submit} className="grid gap-4" noValidate>
        <RadioCardGroup
          legend={m.ranger_scan_override_verdict()}
          columns={1}
          value={verdict}
          onValueChange={setVerdict}
          options={[
            {
              value: 'false_positive',
              title: scanVerdictLabel('false_positive'),
              description: m.ranger_scan_override_false_positive_hint(),
            },
            {
              value: 'malicious',
              title: scanVerdictLabel('malicious'),
              description: m.ranger_scan_override_malicious_hint(),
            },
          ]}
        />
        <Field label={m.ranger_scan_override_note()} error={error ?? undefined}>
          <Textarea
            value={note}
            maxLength={1000}
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
