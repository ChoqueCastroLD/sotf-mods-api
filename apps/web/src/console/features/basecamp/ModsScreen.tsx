/**
 * `/dashboard/mods` — every mod and build of the creator in any status (PLAN §7.5 «Mis mods»), with
 * a status filter, a name search and the sort order, all kept in the URL.
 */
import { BELOW_MD_QUERY, useMediaQuery } from '@sotf/ui';
import { buttonClasses } from '@sotf/ui/button';
import { EmptyState } from '@sotf/ui/empty-state';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Select } from '@sotf/ui/select';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { NotebookPen, Plus, Search } from 'lucide-react';
import { useDeferredValue, useId } from 'react';
import { ArtState } from '../../components/ArtState.tsx';
import { activeLocale } from '../../lib/messages.ts';
import { MOD_STATUS_VALUES, type ModRow, type ModStatus, modsQuery } from './api.ts';
import { CoAuthoredPanel } from './CoAuthoredPanel.tsx';
import { number } from './format.ts';
import { bt, useBasecampMessages } from './i18n.ts';
import { useKnowledgeMessages } from './knowledge-i18n.ts';
import { modStatusLabel } from './labels.ts';
import { ModsTable } from './ModsTable.tsx';
import { MOD_SORTS, type ModSort } from './mod-sorts.ts';
import { ScreenHeader } from './shared.tsx';

export interface ModsFilters {
  status: ModStatus | 'all';
  q: string;
  sort: ModSort;
}

function sortLabel(sort: ModSort): string {
  switch (sort) {
    case 'downloads':
      return bt('basecamp_mods_sort_downloads');
    case 'updated':
      return bt('basecamp_mods_sort_updated');
    case 'name':
      return bt('basecamp_mods_sort_name');
    case 'rating':
      return bt('basecamp_mods_sort_rating');
    case 'attention':
      return bt('basecamp_mods_sort_attention');
  }
}

function attentionScore(row: ModRow): number {
  return (
    row.openCompatReports * 3 +
    row.unansweredComments +
    row.unansweredReviews +
    (row.mod.status === 'rejected' ? 100 : 0)
  );
}

export function sortRows(rows: readonly ModRow[], sort: ModSort): ModRow[] {
  const collator = new Intl.Collator(activeLocale(), { sensitivity: 'base', numeric: true });
  const sorted = [...rows];
  switch (sort) {
    case 'downloads':
      return sorted.sort((a, b) => b.downloads7d - a.downloads7d || b.mod.downloads - a.mod.downloads);
    case 'updated':
      return sorted.sort((a, b) => b.mod.lastReleasedAt.localeCompare(a.mod.lastReleasedAt));
    case 'name':
      return sorted.sort((a, b) => collator.compare(a.mod.name, b.mod.name));
    case 'rating':
      return sorted.sort(
        (a, b) => (b.mod.ratingAvg ?? 0) - (a.mod.ratingAvg ?? 0) || b.mod.ratingCount - a.mod.ratingCount,
      );
    case 'attention':
      return sorted.sort((a, b) => attentionScore(b) - attentionScore(a));
  }
}

export function ModsScreen({
  filters,
  onFilters,
}: {
  filters: ModsFilters;
  onFilters: (next: Partial<ModsFilters>) => void;
}) {
  useBasecampMessages();
  useKnowledgeMessages();
  const phone = useMediaQuery(BELOW_MD_QUERY);
  const searchId = useId();
  const { data } = useSuspenseQuery(modsQuery);
  const q = useDeferredValue(filters.q.trim().toLocaleLowerCase(activeLocale()));

  const counts = new Map<ModStatus, number>();
  for (const row of data.items) counts.set(row.mod.status, (counts.get(row.mod.status) ?? 0) + 1);

  const rows = sortRows(
    data.items.filter(
      (row) =>
        (filters.status === 'all' || row.mod.status === filters.status) &&
        (!q || row.mod.name.toLocaleLowerCase(activeLocale()).includes(q)),
    ),
    filters.sort,
  );

  const statusOptions = [
    { value: 'all' as const, label: bt('basecamp_mods_filter_all', { count: number(data.items.length) }) },
    ...MOD_STATUS_VALUES.filter((status) => counts.has(status)).map((status) => ({
      value: status,
      label: bt('basecamp_mods_filter_status', {
        status: modStatusLabel(status),
        count: number(counts.get(status) ?? 0),
      }),
    })),
  ];

  return (
    <div className="grid gap-6">
      <ScreenHeader
        readout={bt('basecamp_readout')}
        title={bt('basecamp_mods_title')}
        description={bt('basecamp_mods_intro')}
        actions={
          <>
            <Link to="/dashboard/new" className={`${buttonClasses({ variant: 'primary', size: 'sm' })} max-md:hidden`}>
              <Icon icon={Plus} size={16} />
              {bt('basecamp_action_publish_new')}
            </Link>
            <Link to="/dashboard/drafts" className={buttonClasses({ variant: 'ghost', size: 'sm' })}>
              <Icon icon={NotebookPen} size={16} />
              {bt('basecamp_action_drafts')}
            </Link>
          </>
        }
      />

      <CoAuthoredPanel />

      {data.items.length === 0 ? (
        <ArtState
          art="cabin"
          title={bt('basecamp_empty_title')}
          description={bt('basecamp_empty_text')}
          action={
            <Link to="/dashboard/new" className={buttonClasses({ variant: 'primary' })}>
              <Icon icon={Plus} size={18} />
              {bt('basecamp_empty_action')}
            </Link>
          }
        />
      ) : (
        <>
          <div className="grid grid-cols-2 items-end gap-2 md:flex md:flex-wrap md:gap-3">
            <div className="col-span-2 grid min-w-56 flex-1 gap-1 md:col-span-1 md:max-w-xs">
              <label htmlFor={searchId} className="text-sm font-medium text-fg max-md:sr-only">
                {bt('basecamp_mods_search_label')}
              </label>
              <span className="relative">
                <Icon
                  icon={Search}
                  size={16}
                  className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2 text-fg-subtle"
                />
                <Input
                  id={searchId}
                  type="search"
                  value={filters.q}
                  placeholder={bt('basecamp_mods_search_placeholder')}
                  className="ps-9 max-md:h-12"
                  enterKeyHint="search"
                  autoComplete="off"
                  onChange={(event) => onFilters({ q: event.currentTarget.value })}
                />
              </span>
            </div>
            <Select<ModStatus | 'all'>
              label={bt('basecamp_mods_filter_label')}
              options={statusOptions}
              value={filters.status}
              onValueChange={(value) => onFilters({ status: value ?? 'all' })}
              hideLabel={phone}
              size={phone ? 'lg' : 'md'}
              className="min-w-0 md:min-w-48"
            />
            <Select<ModSort>
              label={bt('basecamp_mods_sort_label')}
              options={MOD_SORTS.map((sort) => ({ value: sort, label: sortLabel(sort) }))}
              value={filters.sort}
              onValueChange={(value) => onFilters({ sort: value ?? 'downloads' })}
              hideLabel={phone}
              size={phone ? 'lg' : 'md'}
              className="min-w-0 md:min-w-48"
            />
          </div>
          <p className="sr-only" aria-live="polite">
            {bt('basecamp_mods_results', { count: rows.length })}
          </p>
          {rows.length === 0 ? (
            <EmptyState
              icon={<Icon icon={Search} size={28} />}
              title={bt('basecamp_mods_no_match_title')}
              description={bt('basecamp_mods_no_match_text')}
              action={
                <button
                  type="button"
                  className={buttonClasses({ variant: 'secondary' })}
                  onClick={() => onFilters({ q: '', status: 'all' })}
                >
                  {bt('basecamp_mods_clear_filters')}
                </button>
              }
            />
          ) : (
            <ModsTable rows={rows} caption={bt('basecamp_mods_title')} />
          )}
        </>
      )}
    </div>
  );
}
