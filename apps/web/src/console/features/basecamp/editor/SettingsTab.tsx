/**
 * «Status» tab of the mod editor (PLAN §7.5 «Gestión de mods», §7.4 transitions): the current
 * status and its reason, and the transitions the API allows from it — unlist, publish again,
 * archive (optionally pointing to a successor), resubmit a rejected listing, ask moderation to
 * remove the mod. Drafts are managed in `/dashboard/drafts`.
 */
import { Button, buttonClasses } from '@sotf/ui/button';
import { Combobox } from '@sotf/ui/combobox';
import { ConfirmDialog, Dialog } from '@sotf/ui/dialog';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Textarea } from '@sotf/ui/textarea';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { Archive, EyeOff, Flag, NotebookPen, RotateCcw, Send } from 'lucide-react';
import { type ReactNode, useState } from 'react';
import { notify } from '../../../lib/notify.ts';
import { applyState, basecampApi, LIMITS, modsQuery, type StudioMod, type Transition } from '../api.ts';
import { number } from '../format.ts';
import { bt } from '../i18n.ts';
import { transitionLabel } from '../labels.ts';
import { reportFailure, StatusBadge } from '../shared.tsx';

function statusExplanation(studio: StudioMod): string {
  switch (studio.mod.status) {
    case 'published':
      return bt('basecamp_settings_published');
    case 'pending':
      return bt('basecamp_settings_pending');
    case 'unlisted':
      return bt('basecamp_settings_unlisted');
    case 'rejected':
      return bt('basecamp_settings_rejected');
    case 'archived':
      return bt('basecamp_settings_archived');
    case 'removed':
      return bt('basecamp_settings_removed');
  }
}

function transitionHint(transition: Transition): string {
  switch (transition) {
    case 'unlist':
      return bt('basecamp_settings_unlist_hint');
    case 'publish':
      return bt('basecamp_settings_publish_hint');
    case 'archive':
      return bt('basecamp_settings_archive_hint');
    case 'resubmit':
      return bt('basecamp_settings_resubmit_hint');
    case 'request_removal':
      return bt('basecamp_settings_removal_hint');
  }
}

function transitionIcon(transition: Transition): ReactNode {
  switch (transition) {
    case 'unlist':
      return <Icon icon={EyeOff} size={16} />;
    case 'publish':
      return <Icon icon={Send} size={16} />;
    case 'archive':
      return <Icon icon={Archive} size={16} />;
    case 'resubmit':
      return <Icon icon={RotateCcw} size={16} />;
    case 'request_removal':
      return <Icon icon={Flag} size={16} />;
  }
}

function ArchiveDialog({
  studio,
  open,
  onOpenChange,
  onArchive,
}: {
  studio: StudioMod;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onArchive: (successorModId?: number) => Promise<void>;
}) {
  const mods = useQuery({ ...modsQuery, enabled: open });
  const [successor, setSuccessor] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const options = (mods.data?.items ?? [])
    .filter((row) => row.mod.id !== studio.mod.id && row.mod.status === 'published')
    .map((row) => ({ value: String(row.mod.id), label: row.mod.name }));
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      title={bt('basecamp_settings_archive_title', { name: studio.mod.name })}
      description={bt('basecamp_settings_archive_text')}
      footer={
        <>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            {bt('basecamp_cancel')}
          </Button>
          <Button
            loading={busy}
            onClick={async () => {
              setBusy(true);
              try {
                await onArchive(successor ? Number(successor) : undefined);
                onOpenChange(false);
              } catch {
                // Reported by the caller; the dialog stays open.
              } finally {
                setBusy(false);
              }
            }}
          >
            {bt('basecamp_action_archive')}
          </Button>
        </>
      }
    >
      <Combobox
        label={bt('basecamp_settings_successor')}
        description={bt('basecamp_settings_successor_hint')}
        options={options}
        value={successor}
        onValueChange={setSuccessor}
        placeholder={bt('basecamp_settings_successor_placeholder')}
        emptyText={bt('basecamp_settings_successor_empty')}
        optional
      />
    </Dialog>
  );
}

function RemovalDialog({
  studio,
  open,
  onOpenChange,
  onRequest,
}: {
  studio: StudioMod;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRequest: (reason: string) => Promise<void>;
}) {
  const [reason, setReason] = useState('');
  const [touched, setTouched] = useState(false);
  const [busy, setBusy] = useState(false);
  const length = reason.trim().length;
  const invalid = length < LIMITS.removalReasonMin || length > LIMITS.removalReasonMax;
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      title={bt('basecamp_settings_removal_title', { name: studio.mod.name })}
      description={bt('basecamp_settings_removal_text')}
      footer={
        <>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            {bt('basecamp_cancel')}
          </Button>
          <Button
            variant="danger"
            loading={busy}
            onClick={async () => {
              setTouched(true);
              if (invalid) return;
              setBusy(true);
              try {
                await onRequest(reason.trim());
                setReason('');
                setTouched(false);
                onOpenChange(false);
              } catch {
                // Reported by the caller.
              } finally {
                setBusy(false);
              }
            }}
          >
            {bt('basecamp_settings_removal_confirm')}
          </Button>
        </>
      }
    >
      <Field
        label={bt('basecamp_settings_removal_reason')}
        description={bt('basecamp_counter', { count: number(length), max: number(LIMITS.removalReasonMax) })}
        error={touched && invalid ? bt('basecamp_settings_removal_error', { min: LIMITS.removalReasonMin }) : null}
      >
        <Textarea
          value={reason}
          maxLength={LIMITS.removalReasonMax}
          minRows={4}
          maxRows={10}
          onChange={(event) => setReason(event.currentTarget.value)}
        />
      </Field>
    </Dialog>
  );
}

export function SettingsTab({ studio }: { studio: StudioMod }) {
  const queryClient = useQueryClient();
  const [confirm, setConfirm] = useState<'unlist' | 'publish' | 'resubmit' | null>(null);
  const [archiving, setArchiving] = useState(false);
  const [removing, setRemoving] = useState(false);
  const modId = studio.mod.id;

  const run = async (transition: Transition, action: () => Promise<Parameters<typeof applyState>[1]>) => {
    try {
      const state = await action();
      applyState(queryClient, state);
      notify.success(
        transition === 'request_removal'
          ? bt('basecamp_settings_removal_sent')
          : bt('basecamp_settings_done', { status: transitionLabel(transition) }),
      );
    } catch (error) {
      reportFailure(error, bt('basecamp_settings_failed'));
      throw error;
    }
  };

  const onTransition = (transition: Transition) => {
    switch (transition) {
      case 'archive':
        setArchiving(true);
        return;
      case 'request_removal':
        setRemoving(true);
        return;
      default:
        setConfirm(transition);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <section className="grid gap-3 rounded-lg border border-border bg-surface p-4" aria-labelledby="bc-status-title">
        <h2 id="bc-status-title" className="readout text-fg">
          {bt('basecamp_settings_status')}
        </h2>
        <p className="flex flex-wrap items-center gap-2">
          <StatusBadge status={studio.mod.status} />
          <span className="text-sm text-fg-muted">{statusExplanation(studio)}</span>
        </p>
        {studio.statusReason ? (
          <div className="rounded-md border border-warning/40 bg-warning-soft px-3 py-2 text-sm text-fg">
            <p className="font-medium">{bt('basecamp_settings_reason')}</p>
            <p className="whitespace-pre-line">{studio.statusReason}</p>
          </div>
        ) : null}
      </section>

      <section className="grid gap-3 rounded-lg border border-border bg-surface p-4" aria-labelledby="bc-actions-title">
        <h2 id="bc-actions-title" className="readout text-fg">
          {bt('basecamp_settings_actions')}
        </h2>
        {studio.allowedTransitions.length === 0 ? (
          <p className="text-sm text-fg-muted">{bt('basecamp_settings_no_actions')}</p>
        ) : (
          <ul className="grid gap-3">
            {studio.allowedTransitions.map((transition) => (
              <li
                key={transition}
                className="flex flex-col gap-2 border-t border-border pt-3 first:border-t-0 first:pt-0 sm:flex-row sm:items-center sm:justify-between"
              >
                <p className="max-w-prose text-sm text-fg-muted">{transitionHint(transition)}</p>
                <Button
                  variant={
                    transition === 'request_removal' ? 'outline' : transition === 'resubmit' ? 'primary' : 'secondary'
                  }
                  size="sm"
                  icon={transitionIcon(transition)}
                  onClick={() => onTransition(transition)}
                  className="shrink-0"
                >
                  {transitionLabel(transition)}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-surface p-4">
        <p className="text-sm text-fg-muted">{bt('basecamp_settings_drafts')}</p>
        <Link to="/dashboard/drafts" className={buttonClasses({ variant: 'ghost', size: 'sm' })}>
          <Icon icon={NotebookPen} size={16} />
          {bt('basecamp_action_drafts')}
        </Link>
      </section>

      <ConfirmDialog
        open={confirm !== null}
        onOpenChange={(open) => {
          if (!open) setConfirm(null);
        }}
        title={
          confirm === 'unlist'
            ? bt('basecamp_settings_unlist_title', { name: studio.mod.name })
            : confirm === 'resubmit'
              ? bt('basecamp_settings_resubmit_title', { name: studio.mod.name })
              : bt('basecamp_settings_publish_title', { name: studio.mod.name })
        }
        description={confirm ? transitionHint(confirm) : ''}
        confirmLabel={confirm ? transitionLabel(confirm) : ''}
        onConfirm={async () => {
          if (!confirm) return;
          const transition = confirm;
          await run(transition, () =>
            transition === 'unlist' ? basecampApi.unlist(modId) : basecampApi.publish(modId),
          );
        }}
      />
      <ArchiveDialog
        studio={studio}
        open={archiving}
        onOpenChange={setArchiving}
        onArchive={(successorModId) => run('archive', () => basecampApi.archive(modId, successorModId))}
      />
      <RemovalDialog
        studio={studio}
        open={removing}
        onOpenChange={setRemoving}
        onRequest={(reason) => run('request_removal', () => basecampApi.requestRemoval(modId, reason))}
      />
    </div>
  );
}
