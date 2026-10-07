/**
 * `/dashboard/mods`: every mod and build of the creator in any status. The server filters (search by
 * name, status, category), sorts and paginates (`GET /studio/mods`); all of it is kept in the URL.
 * The old rows stay on screen, dimmed, while the next page or filter loads (no layout shift).
 */
import { BELOW_MD_QUERY, useMediaQuery } from '@sotf/ui';
import { buttonClasses } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { EmptyState } from '@sotf/ui/empty-state';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Select } from '@sotf/ui/select';
import { useQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { NotebookPen, Plus, Search, X } from 'lucide-react';
import { useEffect, useId, useState } from 'react';
import { ArtState } from '../../components/ArtState.tsx';
import { ListPager } from '../../components/ListPager.tsx';
import { useConsoleLocale } from '../../hooks/use-console-locale.ts';
import { taxonomyNamesQuery, taxonomyResolver } from '../../lib/taxonomy.ts';
import { MOD_STATUS_VALUES, type ModStatus, modsPageQuery } from './api.ts';
import { CoAuthoredPanel } from './CoAuthoredPanel.tsx';
import { number } from './format.ts';
import { bt, useBasecampMessages } from './i18n.ts';
import { useKnowledgeMessages } from './knowledge-i18n.ts';
import { modStatusLabel } from './labels.ts';
import { ModsTable } from './ModsTable.tsx';
import { MOD_PAGE_SIZES, MOD_SORTS, type ModSort } from './mod-sorts.ts';
import { PanelError, PanelSkeleton, ScreenHeader } from './shared.tsx';

export interface ModsFilters {
  status: ModStatus | 'all';
  category: string;
  q: string;
  sort: ModSort;
  page: number;
  pageSize: number;
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

/** The text of the search box, applied to the URL 300 ms after the last keystroke. */
function useDebouncedField(value: string, apply: (next: string) => void): [string, (next: string) => void] {
  const [text, setText] = useState(value);
  // Follows the URL when it changes elsewhere (clear filters, back button).
  useEffect(() => setText(value), [value]);
  useEffect(() => {
    if (text.trim() === value.trim()) return;
    const timer = window.setTimeout(() => apply(text), 300);
    return () => window.clearTimeout(timer);
  }, [text, value, apply]);
  return [text, setText];
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
  const { locale } = useConsoleLocale();
  const taxonomy = useQuery(taxonomyNamesQuery);
  const categoryName = taxonomyResolver(taxonomy.data, locale);

  const params = {
    sort: filters.sort,
    page: filters.page,
    pageSize: filters.pageSize,
    ...(filters.q.trim() ? { q: filters.q.trim() } : {}),
    ...(filters.status !== 'all' ? { status: filters.status } : {}),
    ...(filters.category ? { category: filters.category } : {}),
  };
  const query = useQuery(modsPageQuery(params));
  const { isFetching } = query;
  const [text, setText] = useDebouncedField(filters.q, (next) => onFilters({ q: next, page: 1 }));
  const data = query.data;
  if (!data) {
    return query.isError ? (
      <PanelError error={query.error} onRetry={() => void query.refetch()} />
    ) : (
      <PanelSkeleton rows={6} className="[&>*]:h-16" />
    );
  }

  const facets = data.facets;
  const everything = facets ? Object.values(facets.status).reduce((sum, count) => sum + (count ?? 0), 0) : 0;
  const filtered = filters.q.trim() !== '' || filters.status !== 'all' || filters.category !== '';

  const statusOptions = [
    { value: 'all' as const, label: bt('basecamp_mods_filter_all', { count: number(everything) }) },
    ...MOD_STATUS_VALUES.filter((status) => (facets?.status[status] ?? 0) > 0).map((status) => ({
      value: status,
      label: bt('basecamp_mods_filter_status', {
        status: modStatusLabel(status),
        count: number(facets?.status[status] ?? 0),
      }),
    })),
  ];
  const categoryOptions = [
    { value: 'all', label: bt('basecamp_mods_category_all') },
    ...(facets?.categories ?? []).map((category) => ({
      value: category.slug,
      label: `${categoryName?.(category.nameKey, category.name) ?? category.name} (${number(category.count)})`,
    })),
  ];

  const clear = () => {
    setText('');
    onFilters({ q: '', status: 'all', category: '', page: 1 });
  };

  return (
    <div className="grid gap-6">
      <ScreenHeader
        title={bt('basecamp_mods_title')}
        description={bt('basecamp_mods_intro')}
        actions={
          <>
            <Link to="/dashboard/drafts" className={buttonClasses({ variant: 'ghost', size: 'sm' })}>
              <Icon icon={NotebookPen} size={16} />
              {bt('basecamp_action_drafts')}
            </Link>
            <Link to="/dashboard/new" className={`${buttonClasses({ variant: 'primary', size: 'sm' })} max-md:hidden`}>
              <Icon icon={Plus} size={16} />
              {bt('basecamp_action_publish_new')}
            </Link>
          </>
        }
      />

      <CoAuthoredPanel />

      {everything === 0 && !filtered ? (
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
                  value={text}
                  placeholder={bt('basecamp_mods_search_placeholder')}
                  className="ps-9 max-md:h-12"
                  enterKeyHint="search"
                  autoComplete="off"
                  onChange={(event) => setText(event.currentTarget.value)}
                />
              </span>
            </div>
            <Select<ModStatus | 'all'>
              label={bt('basecamp_mods_filter_label')}
              options={statusOptions}
              value={filters.status}
              onValueChange={(value) => onFilters({ status: value ?? 'all', page: 1 })}
              hideLabel={phone}
              size={phone ? 'lg' : 'md'}
              className="min-w-0 md:min-w-44"
            />
            <Select<string>
              label={bt('basecamp_mods_category_label')}
              options={categoryOptions}
              value={filters.category || 'all'}
              onValueChange={(value) => onFilters({ category: value && value !== 'all' ? value : '', page: 1 })}
              hideLabel={phone}
              size={phone ? 'lg' : 'md'}
              className="min-w-0 md:min-w-44"
            />
            <Select<ModSort>
              label={bt('basecamp_mods_sort_label')}
              options={MOD_SORTS.map((sort) => ({ value: sort, label: sortLabel(sort) }))}
              value={filters.sort}
              onValueChange={(value) => onFilters({ sort: value ?? 'updated', page: 1 })}
              hideLabel={phone}
              size={phone ? 'lg' : 'md'}
              className="col-span-2 min-w-0 md:col-span-1 md:min-w-44"
            />
            {filtered ? (
              <button
                type="button"
                onClick={clear}
                className={cn(buttonClasses({ variant: 'ghost', size: 'md' }), 'col-span-2 md:col-span-1')}
              >
                <Icon icon={X} size={16} />
                {bt('basecamp_mods_clear_filters')}
              </button>
            ) : null}
          </div>
          <p className="sr-only" aria-live="polite">
            {bt('basecamp_mods_results', { count: data.total ?? data.items.length })}
          </p>
          {data.items.length === 0 ? (
            <EmptyState
              icon={<Icon icon={Search} size={28} />}
              title={bt('basecamp_mods_no_match_title')}
              description={bt('basecamp_mods_no_match_text')}
              action={
                <button type="button" className={buttonClasses({ variant: 'secondary' })} onClick={clear}>
                  {bt('basecamp_mods_clear_filters')}
                </button>
              }
            />
          ) : (
            <div className="grid gap-4">
              <div
                aria-busy={isFetching}
                className={cn('transition-opacity duration-(--dur-fast)', isFetching && 'opacity-60')}
              >
                <ModsTable
                  rows={data.items}
                  caption={bt('basecamp_mods_title')}
                  sort={filters.sort}
                  onSort={(sort) => onFilters({ sort, page: 1 })}
                  categoryName={categoryName}
                />
              </div>
              <ListPager
                page={data.page ?? 1}
                totalPages={data.totalPages ?? 1}
                total={data.total ?? data.items.length}
                pageSize={data.pageSize ?? filters.pageSize}
                onPage={(page) => onFilters({ page })}
                pageSizes={MOD_PAGE_SIZES}
                onPageSize={(pageSize) => onFilters({ pageSize, page: 1 })}
                busy={isFetching}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
