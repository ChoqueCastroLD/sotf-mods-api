/**
 * `/basecamp/new`: what to publish — a mod or library (zip with `manifest.json`), a BuildShare
 * build (JSON), or a new version of one of my mods. Open drafts are offered first.
 */
import { buttonClasses } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { ErrorState } from '@sotf/ui/error-state';
import { Icon } from '@sotf/ui/icons';
import { Skeleton } from '@sotf/ui/skeleton';
import { useQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { Blocks, FileArchive, History, NotebookPen } from 'lucide-react';
import type { ReactNode } from 'react';
import { api } from '../../lib/api.ts';
import { errorReference } from '../../lib/errors.ts';
import { t } from '../../lib/messages.ts';
import { queryKeys } from '../../lib/query-keys.ts';
import { Callout } from './components/Callout.tsx';
import { useUploadMessages, ut } from './i18n.ts';
import { number } from './lib/format.ts';
import { draftsQuery } from './lib/queries.ts';

function Choice({ icon, description, children }: { icon: ReactNode; description: string; children: ReactNode }) {
  return (
    <div className="relative flex flex-col gap-3 rounded-lg border border-border-strong bg-raised p-5 has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-focus hover:border-primary">
      <span
        className="flex size-10 items-center justify-center rounded-md bg-primary-soft text-primary"
        aria-hidden="true"
      >
        {icon}
      </span>
      <h2 className="text-lg font-semibold text-fg">{children}</h2>
      <p className="text-sm text-fg-muted">{description}</p>
    </div>
  );
}

export function NewChooser() {
  useUploadMessages();
  const drafts = useQuery(draftsQuery);
  const mods = useQuery({
    queryKey: queryKeys.studioMods,
    queryFn: ({ signal }) => api.studio.listMods({}, { signal }),
  });
  const draftCount = drafts.data?.items.length ?? 0;
  const updatable = (mods.data?.items ?? []).filter((row) => row.mod.status !== 'removed').slice(0, 6);
  const stretched = "outline-none after:absolute after:inset-0 after:content-['']";

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
      <header className="flex flex-col gap-1">
        <h1 className="font-display-caps text-2xl text-fg sm:text-3xl">{ut('upload_new_title')}</h1>
        <p className="text-sm text-fg-muted">{ut('upload_new_intro')}</p>
      </header>

      {draftCount > 0 ? (
        <Callout
          tone="info"
          title={ut('upload_new_drafts_title', { count: draftCount })}
          action={
            <Link to="/basecamp/drafts" className={buttonClasses({ variant: 'secondary', size: 'sm' })}>
              <Icon icon={NotebookPen} size={14} />
              {ut('upload_my_drafts')}
            </Link>
          }
        >
          {ut('upload_new_drafts_detail')}
        </Callout>
      ) : null}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Choice icon={<Icon icon={FileArchive} size={22} />} description={ut('upload_new_mod_detail')}>
          <Link to="/basecamp/new/mod" className={stretched}>
            {ut('upload_new_mod')}
          </Link>
        </Choice>
        <Choice icon={<Icon icon={Blocks} size={22} />} description={ut('upload_new_build_detail')}>
          <Link to="/basecamp/new/build" className={stretched}>
            {ut('upload_new_build')}
          </Link>
        </Choice>
      </div>

      <section aria-labelledby="upload-new-version-title" className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Icon icon={History} size={18} className="text-fg-muted" />
          <h2 id="upload-new-version-title" className="text-base font-semibold text-fg">
            {ut('upload_new_version_title')}
          </h2>
        </div>
        {mods.isPending ? (
          <Skeleton className="h-20 w-full rounded-lg" />
        ) : mods.isError ? (
          <ErrorState
            title={t('console_error_title')}
            description={ut('upload_failure_api')}
            headingLevel={3}
            onRetry={() => void mods.refetch()}
            retrying={mods.isFetching}
            {...(errorReference(mods.error) ? { reference: errorReference(mods.error) } : {})}
          />
        ) : updatable.length === 0 ? (
          <p className="text-sm text-fg-muted">{ut('upload_new_version_none')}</p>
        ) : (
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {updatable.map((row) => (
              <li key={row.mod.id}>
                <Link
                  to="/basecamp/mods/$modId/new-version"
                  params={{ modId: String(row.mod.id) }}
                  className={cn(
                    'flex items-center justify-between gap-3 rounded-md border border-border bg-surface px-3 py-2',
                    'hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus',
                  )}
                >
                  <span className="min-w-0 truncate text-sm font-medium text-fg">{row.mod.name}</span>
                  <span className="readout shrink-0 text-fg-muted">
                    {row.mod.latestVersion ? `v${row.mod.latestVersion.replace(/^v/, '')}` : '—'}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
        {(mods.data?.items.length ?? 0) > updatable.length ? (
          <p className="text-xs text-fg-muted">
            {ut('upload_new_version_more', { count: number((mods.data?.items.length ?? 0) - updatable.length) })}
          </p>
        ) : null}
      </section>
    </div>
  );
}
