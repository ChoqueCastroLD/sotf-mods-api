/**
 * `/dashboard/drafts`: the creator's open drafts (most recent first) with their step, readiness and
 * quality, «Resume» and «Delete» (confirmed). Drafts expire with their uploads; the limit is 20.
 */
import { Badge } from '@sotf/ui/badge';
import { buttonClasses } from '@sotf/ui/button';
import { ConfirmDialog } from '@sotf/ui/dialog';
import { Icon } from '@sotf/ui/icons';
import { Skeleton } from '@sotf/ui/skeleton';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { FilePlus2, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { ArtState } from '../../components/ArtState.tsx';
import { SwipeRow } from '../../components/SwipeRow.tsx';
import { ErrorScreen } from '../../components/states.tsx';
import { api } from '../../lib/api.ts';
import { errorReference } from '../../lib/errors.ts';
import { notify } from '../../lib/notify.ts';
import { useUploadMessages, ut } from './i18n.ts';
import { STEP_LABELS } from './labels.ts';
import { number, percent, relative } from './lib/format.ts';
import { draftsQuery, uploadKeys } from './lib/queries.ts';
import { STEPS, stepFromNumber } from './lib/wizard.ts';
import type { DraftDTO } from './types.ts';

export const MAX_DRAFTS = 20;

function DraftTitle({ draft }: { draft: DraftDTO }) {
  if (draft.data.name) return <>{draft.data.name}</>;
  if (draft.kind === 'version') return <>{ut('upload_drafts_untitled_version')}</>;
  return <>{ut('upload_drafts_untitled')}</>;
}

function ResumeLink({ draft }: { draft: DraftDTO }) {
  const classes = buttonClasses({ variant: 'primary', size: 'sm' });
  if (draft.kind === 'version' && draft.modId !== null) {
    return (
      <Link
        to="/dashboard/mods/$modId/new-version"
        params={{ modId: String(draft.modId) }}
        search={{ draft: draft.id }}
        className={classes}
      >
        {ut('upload_drafts_resume')}
      </Link>
    );
  }
  return (
    <Link
      to={draft.kind === 'build' ? '/dashboard/new/build' : '/dashboard/new/mod'}
      search={{ draft: draft.id }}
      className={classes}
    >
      {ut('upload_drafts_resume')}
    </Link>
  );
}

function DraftRow({ draft, onDelete }: { draft: DraftDTO; onDelete: (draft: DraftDTO) => void }) {
  const mode = draft.kind;
  const steps = STEPS[mode];
  const step = stepFromNumber(mode, draft.data.step);
  const errors = draft.preflight.filter((row) => row.severity === 'error').length;
  return (
    <li className="overflow-hidden rounded-xl border border-border bg-surface">
      {/* Touch: swipe toward the start to delete (it asks for confirmation, like the button). */}
      <SwipeRow
        end={{
          label: ut('upload_drafts_delete'),
          icon: <Trash2 size={20} aria-hidden="true" />,
          tone: 'danger',
          onTrigger: () => onDelete(draft),
        }}
        peekKey="upload-drafts"
      >
        <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 flex-col gap-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant={mode === 'build' ? 'blueprint' : mode === 'version' ? 'signal' : 'neutral'} size="sm">
                {mode === 'build'
                  ? ut('upload_kind_build')
                  : mode === 'version'
                    ? ut('upload_kind_version')
                    : ut('upload_kind_mod')}
              </Badge>
              <h2 className="min-w-0 truncate text-base font-semibold text-fg">
                <DraftTitle draft={draft} />
              </h2>
            </div>
            <p className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-fg-muted">
              <span>
                {ut('upload_drafts_step', {
                  current: steps.indexOf(step) + 1,
                  total: steps.length,
                  label: STEP_LABELS[step](),
                })}
              </span>
              <span>{ut('upload_drafts_updated', { when: relative(draft.updatedAt) })}</span>
              {mode !== 'version' ? (
                <span>{ut('upload_drafts_quality', { score: percent(draft.qualityScore / 100) })}</span>
              ) : null}
              <span className={errors > 0 ? 'text-warning' : 'text-success'}>
                {errors > 0 ? ut('upload_drafts_blockers', { count: errors }) : ut('upload_drafts_ready')}
              </span>
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            <ResumeLink draft={draft} />
            <button
              type="button"
              className={buttonClasses({ variant: 'ghost', size: 'sm' })}
              onClick={() => onDelete(draft)}
              aria-label={ut('upload_drafts_delete_named', { name: draft.data.name ?? ut('upload_drafts_untitled') })}
            >
              <Icon icon={Trash2} size={14} />
              <span className="max-sm:sr-only">{ut('upload_drafts_delete')}</span>
            </button>
          </div>
        </div>
      </SwipeRow>
    </li>
  );
}

export function DraftsList() {
  useUploadMessages();
  const queryClient = useQueryClient();
  const drafts = useQuery(draftsQuery);
  const [pending, setPending] = useState<DraftDTO | null>(null);

  const remove = useMutation({
    mutationFn: (id: string) => api.studio.deleteDraft({ params: { id } }),
    onSuccess: (_result, id) => {
      queryClient.setQueryData(uploadKeys.drafts, (old: { items: DraftDTO[] } | undefined) =>
        old ? { items: old.items.filter((d) => d.id !== id) } : old,
      );
      queryClient.removeQueries({ queryKey: uploadKeys.draft(id), exact: true });
      notify.success(ut('upload_drafts_deleted'));
    },
  });

  const count = drafts.data?.items.length ?? 0;

  return (
    <div className="flex w-full max-w-4xl flex-col gap-5">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div className="flex flex-col gap-1">
          <h1 className="font-display-caps text-2xl text-fg sm:text-3xl">{ut('upload_drafts_title')}</h1>
          <p className="text-sm text-fg-muted">{ut('upload_drafts_intro', { max: number(MAX_DRAFTS) })}</p>
        </div>
        {drafts.isSuccess ? (
          <span className="readout text-fg-muted">
            {ut('upload_drafts_counter', { count: number(count), max: number(MAX_DRAFTS) })}
          </span>
        ) : null}
      </header>

      {drafts.isPending ? (
        <ul className="flex flex-col gap-3" aria-busy="true" aria-label={ut('upload_drafts_loading')}>
          {[0, 1, 2].map((i) => (
            <li key={i}>
              <Skeleton className="h-24 w-full rounded-lg" />
            </li>
          ))}
        </ul>
      ) : drafts.isError ? (
        <ErrorScreen
          onRetry={() => void drafts.refetch()}
          {...(errorReference(drafts.error) ? { reference: errorReference(drafts.error) } : {})}
        />
      ) : count === 0 ? (
        <ArtState
          art="camp"
          title={ut('upload_drafts_empty_title')}
          description={ut('upload_drafts_empty_detail')}
          action={
            <Link to="/dashboard/new" className={buttonClasses({ variant: 'primary' })}>
              <Icon icon={FilePlus2} size={16} />
              {ut('upload_drafts_start')}
            </Link>
          }
        />
      ) : (
        <ul className="flex flex-col gap-3">
          {drafts.data.items.map((draft) => (
            <DraftRow key={draft.id} draft={draft} onDelete={setPending} />
          ))}
        </ul>
      )}

      <ConfirmDialog
        open={pending !== null}
        onOpenChange={(open) => {
          if (!open) setPending(null);
        }}
        title={ut('upload_drafts_delete_title')}
        description={ut('upload_drafts_delete_detail', { name: pending?.data.name ?? ut('upload_drafts_untitled') })}
        confirmLabel={ut('upload_drafts_delete')}
        tone="danger"
        onConfirm={async () => {
          if (pending) await remove.mutateAsync(pending.id);
          setPending(null);
        }}
      />
    </div>
  );
}
