/**
 * Entry moderation of a jam (the «Entries» tab): hide, disqualify or restore entries
 * (post-moderation). Search by mod or author, filter by status (tabs with counts), sort, and page
 * on the server. The state lives in the URL of the editor (`?tab=entries&status=hidden&q=&page=`).
 */
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { ConfirmDialog } from '@sotf/ui/dialog';
import { EmptyState } from '@sotf/ui/empty-state';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Skeleton, SkeletonGroup } from '@sotf/ui/skeleton';
import { Textarea } from '@sotf/ui/textarea';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { ExternalLink, SearchX, Trophy } from 'lucide-react';
import { useState } from 'react';
import { notify } from '../../lib/notify.ts';
import { reportFailure } from '../admin/shared.tsx';
import { FilterBar, PageNav, SearchField, SortSelect, useListSearch } from '../ranger/controls.tsx';
import { PAGE_SIZES } from '../ranger/search.ts';
import { dateTime, PanelError, UserChip } from '../ranger/shared.tsx';
import {
  type AdminEntry,
  adminEntriesQuery,
  ENTRIES_PAGE_SIZE,
  type EntriesView,
  type EntryStatus,
  jamKeys,
  jamsAdminApi,
} from './api.ts';

export const ENTRY_STATUSES = ['active', 'hidden', 'disqualified', 'withdrawn'] as const;
export const ENTRY_SORTS = ['oldest', 'votes', 'name'] as const;

type Target = { entry: AdminEntry; status: 'hidden' | 'disqualified' };

function statusVariant(status: AdminEntry['status']) {
  return status === 'active' ? 'success' : status === 'withdrawn' ? 'neutral' : 'danger';
}

function statusLabel(status: AdminEntry['status']): string {
  switch (status) {
    case 'active':
      return m.jams_entry_status_active();
    case 'withdrawn':
      return m.jams_entry_status_withdrawn();
    case 'hidden':
      return m.jams_entry_status_hidden();
    case 'disqualified':
      return m.jams_entry_status_disqualified();
  }
}

function sortLabel(sort: 'newest' | (typeof ENTRY_SORTS)[number]): string {
  switch (sort) {
    case 'newest':
      return m.ranger_sort_newest();
    case 'oldest':
      return m.ranger_sort_oldest();
    case 'votes':
      return m.jams_entries_sort_votes();
    case 'name':
      return m.jams_entries_sort_name();
  }
}

export function JamEntriesPanel({ jamId, view }: { jamId: number; view: EntriesView }) {
  const queryClient = useQueryClient();
  const patch = useListSearch('.');
  const query = useQuery(adminEntriesQuery(jamId, view));
  const [target, setTarget] = useState<Target | null>(null);
  const [reason, setReason] = useState('');
  const [busy, setBusy] = useState<number | null>(null);
  const data = query.data;
  const size = view.size ?? ENTRIES_PAGE_SIZE;
  const filters = [view.status, view.q].filter(Boolean).length;
  const fetching = query.isFetching && query.isPlaceholderData;
  const clear = () => patch({ status: undefined, q: undefined });

  const apply = async (entry: AdminEntry, status: 'active' | 'hidden' | 'disqualified', why?: string) => {
    setBusy(entry.id);
    try {
      await jamsAdminApi.moderateEntry(jamId, entry.id, status, why);
      await queryClient.invalidateQueries({ queryKey: jamKeys.entries(jamId) });
      notify.success(m.jams_entries_updated());
    } catch (error) {
      reportFailure(error, m.jams_entries_failed());
      throw error;
    } finally {
      setBusy(null);
    }
  };

  const total = data ? Object.values(data.counts).reduce((sum, count) => sum + count, 0) : 0;

  return (
    <div className="grid gap-4">
      <p className="max-w-prose text-sm text-fg-muted">{m.jams_entries_admin_description()}</p>

      <nav aria-label={m.jams_entries_status_label()}>
        <ul className="flex flex-wrap gap-2">
          {([undefined, ...ENTRY_STATUSES] as const).map((entry) => {
            const count = entry ? (data?.counts[entry] ?? 0) : total;
            const current = view.status === entry;
            return (
              <li key={entry ?? 'all'}>
                <button
                  type="button"
                  aria-pressed={current}
                  onClick={() => patch({ status: entry })}
                  className={cn(
                    'inline-flex h-9 items-center gap-2 rounded-md border px-3 text-sm font-medium transition-colors',
                    current
                      ? 'border-primary bg-primary-soft text-fg'
                      : 'border-border bg-surface text-fg-muted hover:border-border-strong hover:text-fg',
                  )}
                >
                  {entry ? statusLabel(entry) : m.jams_entries_status_all()}
                  <span className="rounded-full bg-fg/8 px-1.5 text-2xs tabular-nums">{count}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <FilterBar
        search={
          <SearchField
            label={m.jams_entries_search()}
            placeholder={m.jams_entries_search()}
            value={view.q ?? ''}
            onCommit={(value) => patch({ q: value || undefined })}
          />
        }
        sort={
          <SortSelect
            value={view.sort ?? 'newest'}
            onChange={(value) => patch({ sort: value === 'newest' ? undefined : value })}
            options={(['newest', ...ENTRY_SORTS] as const).map((value) => ({ value, label: sortLabel(value) }))}
          />
        }
        activeCount={filters}
        onClear={clear}
      />

      {query.isPending ? (
        <SkeletonGroup label={m.jams_loading()} className="grid gap-2">
          {Array.from({ length: 4 }, (_, index) => (
            <Skeleton key={index} className="h-16 w-full" />
          ))}
        </SkeletonGroup>
      ) : query.isError ? (
        <PanelError error={query.error} onRetry={() => void query.refetch()} />
      ) : !data || data.items.length === 0 ? (
        filters > 0 ? (
          <EmptyState
            icon={<Icon icon={SearchX} size={32} />}
            title={m.jams_entries_filtered_empty()}
            description={m.jams_entries_filtered_empty_text()}
            action={
              <Button variant="secondary" onClick={clear}>
                {m.ranger_filters_clear()}
              </Button>
            }
          />
        ) : (
          <EmptyState
            icon={<Icon icon={Trophy} size={32} />}
            title={m.jams_entries_admin_empty()}
            description={m.jams_entries_empty_open_text()}
          />
        )
      ) : (
        <div className={cn('grid gap-4 transition-opacity duration-(--dur-fast)', fetching && 'opacity-60')}>
          <ul className="grid divide-y divide-border border-y border-border">
            {data.items.map((entry) => (
              <EntryRow
                key={entry.id}
                entry={entry}
                busy={busy === entry.id}
                onModerate={(status) => {
                  setReason('');
                  setTarget({ entry, status });
                }}
                onRestore={() => void apply(entry, 'active').catch(() => undefined)}
              />
            ))}
          </ul>
          <PageNav
            page={view.page ?? 1}
            totalPages={data.totalPages}
            total={data.total}
            pageSize={size}
            onPage={(page) => patch({ page: page > 1 ? page : undefined })}
            sizes={PAGE_SIZES}
            onPageSize={(next) => patch({ size: next === ENTRIES_PAGE_SIZE ? undefined : next })}
          />
        </div>
      )}

      <ConfirmDialog
        open={target !== null}
        onOpenChange={(open) => {
          if (!open) setTarget(null);
        }}
        title={
          target?.status === 'disqualified'
            ? m.jams_entries_disqualify_title({ name: target.entry.mod.name })
            : m.jams_entries_hide_title({ name: target?.entry.mod.name ?? '' })
        }
        description={m.jams_entries_confirm_text()}
        confirmLabel={target?.status === 'disqualified' ? m.jams_entries_disqualify() : m.jams_entries_hide()}
        tone="danger"
        onConfirm={async () => {
          if (!target) return;
          await apply(target.entry, target.status, reason.trim() || undefined);
          setTarget(null);
        }}
      >
        <Field label={m.jams_editor_reason()} optional>
          <Input value={reason} maxLength={300} onChange={(event) => setReason(event.currentTarget.value)} />
        </Field>
      </ConfirmDialog>
    </div>
  );
}

function EntryRow({
  entry,
  busy,
  onModerate,
  onRestore,
}: {
  entry: AdminEntry;
  busy: boolean;
  onModerate: (status: 'hidden' | 'disqualified') => void;
  onRestore: () => void;
}) {
  const [notesOpen, setNotesOpen] = useState(false);
  return (
    <li className="grid gap-2 py-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-6">
      <div className="grid min-w-0 gap-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <a
            href={entry.mod.canonicalPath}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-semibold break-words text-fg hover:text-link"
          >
            {entry.mod.name}
            <Icon icon={ExternalLink} size={14} />
            <span className="sr-only">{m.ranger_new_tab()}</span>
          </a>
          <Badge variant={statusVariant(entry.status)} size="sm">
            {statusLabel(entry.status)}
          </Badge>
        </div>
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-fg-muted">
          {entry.authors.map((author) => (
            <UserChip key={author.id} user={author} size={20} />
          ))}
          <span>{m.jams_entries_submitted({ date: dateTime(entry.createdAt) })}</span>
          <span className="tabular-nums">
            {m.jams_votes_count({ count: entry.votes })}
            {entry.excludedVotes > 0 ? ` · ${m.jams_entries_excluded({ count: entry.excludedVotes })}` : ''}
          </span>
        </p>
        {entry.statusReason ? <p className="text-xs text-fg-muted">{entry.statusReason}</p> : null}
        {entry.notesMd ? (
          <div className="text-xs">
            <button
              type="button"
              aria-expanded={notesOpen}
              className="text-link hover:underline"
              onClick={() => setNotesOpen((value) => !value)}
            >
              {m.jams_entry_notes()}
            </button>
            {notesOpen ? (
              <Textarea
                readOnly
                value={entry.notesMd}
                minRows={2}
                className="mt-1 text-xs"
                aria-label={m.jams_entry_notes()}
              />
            ) : null}
          </div>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-2">
        {entry.status === 'withdrawn' ? null : entry.status === 'active' ? (
          <>
            <Button size="sm" variant="secondary" disabled={busy} onClick={() => onModerate('hidden')}>
              {m.jams_entries_hide()}
            </Button>
            <Button size="sm" variant="danger" disabled={busy} onClick={() => onModerate('disqualified')}>
              {m.jams_entries_disqualify()}
            </Button>
          </>
        ) : (
          <Button size="sm" variant="secondary" loading={busy} onClick={onRestore}>
            {m.jams_entries_restore()}
          </Button>
        )}
      </div>
    </li>
  );
}

export type { EntryStatus };
