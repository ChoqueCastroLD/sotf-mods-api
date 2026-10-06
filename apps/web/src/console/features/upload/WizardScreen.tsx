/**
 * Route-level wrapper of the wizard: loads the draft named in `?draft=` (resume), the target mod
 * of a new version, and remounts the wizard only when the URL points to a *different* draft (the
 * wizard itself writes the id of the draft it created into the URL).
 */
import { isApiError } from '@sotf/contracts/client';
import { buttonClasses } from '@sotf/ui/button';
import { Skeleton, SkeletonGroup } from '@sotf/ui/skeleton';
import { useQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { useRef, useState } from 'react';
import { ErrorScreen, NotFound } from '../../components/states.tsx';
import { useDocumentTitle } from '../../hooks/use-document-title.ts';
import { errorReference } from '../../lib/errors.ts';
import { Callout } from './components/Callout.tsx';
import { useUploadMessages, ut } from './i18n.ts';
import { draftQuery, draftsQuery, studioModQuery } from './lib/queries.ts';
import type { WizardMode } from './lib/wizard.ts';
import { PublishWizard } from './PublishWizard.tsx';
import type { DraftDTO } from './types.ts';

export interface WizardScreenProps {
  mode: WizardMode;
  draftId: string | undefined;
  /** New version: the mod id from the URL. */
  modId?: number;
  /** Puts the id of a newly created draft in the URL (replace). */
  onDraftCreated: (id: string) => void;
}

function WizardSkeleton() {
  return (
    <SkeletonGroup label={ut('upload_loading')} className="mx-auto flex w-full max-w-5xl flex-col gap-5">
      <Skeleton className="h-9 w-64" />
      <Skeleton className="h-14 w-full" />
      <Skeleton className="h-64 w-full rounded-lg" />
    </SkeletonGroup>
  );
}

function isNotFound(error: unknown): boolean {
  return isApiError(error) && (error.status === 404 || error.status === 410);
}

export function WizardScreen({ mode, draftId, modId, onDraftCreated }: WizardScreenProps) {
  useUploadMessages();
  const [boot, setBoot] = useState<{ id: string | undefined; key: number }>({ id: draftId, key: 0 });
  const created = useRef<string | null>(null);
  // The URL now names another draft than the one on screen (drafts list, back button): remount.
  if (draftId !== boot.id && draftId !== created.current) {
    created.current = null;
    setBoot({ id: draftId, key: boot.key + 1 });
  }

  const draft = useQuery({ ...draftQuery(boot.id ?? 'none'), enabled: boot.id !== undefined, staleTime: 0 });
  const target = useQuery({ ...studioModQuery(modId ?? 0), enabled: mode === 'version' && modId !== undefined });
  const drafts = useQuery({ ...draftsQuery, enabled: mode === 'version' && boot.id === undefined });

  const titleName = target.data?.mod.name;
  useDocumentTitle(
    mode === 'version'
      ? titleName
        ? ut('upload_title_version', { name: titleName })
        : null
      : mode === 'build'
        ? ut('upload_title_build')
        : ut('upload_title_mod'),
  );

  if (mode === 'version') {
    if (modId === undefined) return <NotFound />;
    if (target.isPending) return <WizardSkeleton />;
    if (target.isError) {
      if (isNotFound(target.error)) return <NotFound />;
      const reference = errorReference(target.error);
      return <ErrorScreen onRetry={() => void target.refetch()} {...(reference ? { reference } : {})} />;
    }
    if (target.data.mod.status === 'removed') {
      return (
        <Callout tone="danger" title={ut('upload_target_removed_title')}>
          {ut('upload_target_removed_detail')}
        </Callout>
      );
    }
  }

  let initial: DraftDTO | null = null;
  if (boot.id !== undefined) {
    if (draft.isPending) return <WizardSkeleton />;
    if (draft.isError) {
      if (isNotFound(draft.error)) {
        return (
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
            <Callout
              tone="warning"
              title={ut('upload_draft_missing_title')}
              action={
                <Link to="/dashboard/drafts" className={buttonClasses({ variant: 'secondary', size: 'sm' })}>
                  {ut('upload_my_drafts')}
                </Link>
              }
            >
              {ut('upload_draft_missing_detail')}
            </Callout>
          </div>
        );
      }
      const reference = errorReference(draft.error);
      return <ErrorScreen onRetry={() => void draft.refetch()} {...(reference ? { reference } : {})} />;
    }
    initial = draft.data;
    const expected = initial.kind;
    const matches = expected === mode && (mode !== 'version' || (initial.modId !== null && initial.modId === modId));
    if (!matches) {
      return (
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
          <Callout
            tone="warning"
            title={ut('upload_draft_other_flow_title')}
            action={
              initial.kind === 'version' && initial.modId !== null ? (
                <Link
                  to="/dashboard/mods/$modId/new-version"
                  params={{ modId: String(initial.modId) }}
                  search={{ draft: initial.id }}
                  className={buttonClasses({ variant: 'primary', size: 'sm' })}
                >
                  {ut('upload_drafts_resume')}
                </Link>
              ) : (
                <Link
                  to={initial.kind === 'build' ? '/dashboard/new/build' : '/dashboard/new/mod'}
                  search={{ draft: initial.id }}
                  className={buttonClasses({ variant: 'primary', size: 'sm' })}
                >
                  {ut('upload_drafts_resume')}
                </Link>
              )
            }
          >
            {ut('upload_draft_other_flow_detail')}
          </Callout>
        </div>
      );
    }
  }

  const existing =
    mode === 'version' && boot.id === undefined
      ? (drafts.data?.items ?? []).find((d) => d.kind === 'version' && d.modId === modId && d.id !== created.current)
      : undefined;

  return (
    <div className="flex flex-col gap-4">
      {existing ? (
        <div className="mx-auto w-full max-w-5xl">
          <Callout
            tone="info"
            title={ut('upload_version_draft_exists_title')}
            action={
              <Link
                to="/dashboard/mods/$modId/new-version"
                params={{ modId: String(modId) }}
                search={{ draft: existing.id }}
                className={buttonClasses({ variant: 'secondary', size: 'sm' })}
              >
                {ut('upload_drafts_resume')}
              </Link>
            }
          >
            {ut('upload_version_draft_exists_detail')}
          </Callout>
        </div>
      ) : null}
      <PublishWizard
        key={boot.key}
        mode={mode}
        initial={initial}
        target={mode === 'version' ? (target.data ?? null) : null}
        onDraftCreated={(id) => {
          created.current = id;
          onDraftCreated(id);
        }}
      />
    </div>
  );
}
