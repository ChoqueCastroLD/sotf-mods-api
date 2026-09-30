/**
 * «Did it work?» (T0-17, PLAN §7.10): a field report on the version I downloaded, for the current
 * game build — works / partly / broken, how I played and an optional note. Posting again updates
 * my report (one per user, version, build and mode). Needs a verified email.
 */
import { isApiError } from '@sotf/contracts/client';
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { Dialog } from '@sotf/ui/dialog';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { RadioCardGroup } from '@sotf/ui/radio-card';
import { Select } from '@sotf/ui/select';
import { Textarea } from '@sotf/ui/textarea';
import { useQueryClient } from '@tanstack/react-query';
import { CircleAlert, CircleCheck, CircleDashed } from 'lucide-react';
import { useEffect, useId, useState } from 'react';
import { track } from '../../../scripts/beacon.ts';
import { notify } from '../../lib/notify.ts';
import { failureDescription } from '../settings/errors.ts';
import { type CompatMode, type CompatResult, meApi, meKeys } from './api.ts';

/** `COMPAT_RULES.noteMaxLength` of `@sotf/contracts/compat` (mirrored: no Zod in the chunk). */
export const NOTE_MAX = 500;

export interface ReportTarget {
  modId: number;
  modName: string;
  modVersionId: number;
  version: string;
  gameBuildId: number;
  gameBuildLabel: string;
}

export interface DidItWorkDialogProps {
  target: ReportTarget | null;
  onClose: () => void;
}

const MODES: readonly CompatMode[] = ['singleplayer', 'host', 'client', 'dedicated'];

function modeLabel(mode: CompatMode): string {
  switch (mode) {
    case 'host':
      return m.me_report_mode_host();
    case 'client':
      return m.me_report_mode_client();
    case 'dedicated':
      return m.me_report_mode_dedicated();
    default:
      return m.me_report_mode_singleplayer();
  }
}

export function DidItWorkDialog({ target, onClose }: DidItWorkDialogProps) {
  const queryClient = useQueryClient();
  const formId = useId();
  const [result, setResult] = useState<CompatResult | null>(null);
  const [mode, setMode] = useState<CompatMode>('singleplayer');
  const [note, setNote] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!target) return;
    setResult(null);
    setMode('singleplayer');
    setNote('');
    setError(null);
    track('compat_prompt_shown', { entityType: 'mod', entityId: target.modId, props: { source: 'downloads' } });
  }, [target]);

  const submit = async () => {
    if (!target) return;
    if (!result) {
      setError(m.me_report_pick_result());
      return;
    }
    setSaving(true);
    setError(null);
    try {
      await meApi.report({
        modVersionId: target.modVersionId,
        gameBuildId: target.gameBuildId,
        mode,
        result,
        ...(note.trim() ? { note: note.trim() } : {}),
      });
      track('compat_prompt_answered', {
        entityType: 'mod',
        entityId: target.modId,
        props: { result, mode, source: 'downloads' },
      });
      notify.success(m.me_report_thanks({ mod: target.modName }));
      void queryClient.invalidateQueries({ queryKey: meKeys.prompts });
      void queryClient.invalidateQueries({ queryKey: meKeys.downloads });
      void queryClient.invalidateQueries({ queryKey: meKeys.onboarding });
      onClose();
    } catch (failure) {
      if (isApiError(failure) && failure.code === 'EMAIL_NOT_VERIFIED') setError(m.me_report_verify_email());
      else setError(failureDescription(failure));
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog
      open={target !== null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      sheetOnMobile
      title={m.me_report_title({ mod: target?.modName ?? '' })}
      description={
        target ? m.me_report_description({ version: target.version, build: target.gameBuildLabel }) : undefined
      }
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            {m.me_cancel()}
          </Button>
          <Button type="submit" form={formId} loading={saving}>
            {m.me_report_submit()}
          </Button>
        </>
      }
    >
      <form
        id={formId}
        className="grid gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          void submit();
        }}
      >
        <RadioCardGroup<CompatResult>
          legend={m.me_report_result_legend()}
          value={result}
          onValueChange={(value) => {
            setResult(value);
            setError(null);
          }}
          columns={3}
          options={[
            {
              value: 'works',
              title: m.me_report_works(),
              icon: <Icon icon={CircleCheck} size={18} className="text-success" />,
            },
            {
              value: 'partial',
              title: m.me_report_partial(),
              icon: <Icon icon={CircleDashed} size={18} className="text-warning" />,
            },
            {
              value: 'broken',
              title: m.me_report_broken(),
              icon: <Icon icon={CircleAlert} size={18} className="text-danger" />,
            },
          ]}
        />
        <Select<CompatMode>
          label={m.me_report_mode_label()}
          value={mode}
          onValueChange={(value) => {
            if (value) setMode(value);
          }}
          options={MODES.map((value) => ({ value, label: modeLabel(value) }))}
        />
        <Field label={m.me_report_note_label()} description={m.me_report_note_hint({ max: NOTE_MAX })} optional>
          <Textarea
            value={note}
            maxLength={NOTE_MAX}
            minRows={3}
            maxRows={8}
            onChange={(event) => setNote(event.target.value)}
          />
        </Field>
        {error ? (
          <p role="alert" className="text-sm text-danger">
            {error}
          </p>
        ) : null}
      </form>
    </Dialog>
  );
}
