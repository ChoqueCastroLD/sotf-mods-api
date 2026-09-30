/**
 * `/ranger/admin/recategorize` (PLAN T0-06, §7.4 «recategorización masiva»): moves the legacy mods
 * (`qol`, `misc`…) into the v2 categories. The table lists the API's keyword-rule suggestions
 * (best first) and, after importing the CSV of WP-84 (`suggest-categories.ts`, rules + optional
 * LLM), its lines too. Nothing changes until a human confirms: pick rows (or filter and select
 * all), edit the target category or the tags one by one or in batch, then «Apply» sends the
 * confirmed changes in batches of 500 (`dryRun: false`). The table can be exported back to CSV.
 * `?from=<slug>` filters by current category (the «Recategorise its mods» action of a category).
 */
import { localizePath } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Banner } from '@sotf/ui/banner';
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { ConfirmDialog, Dialog } from '@sotf/ui/dialog';
import { EmptyState } from '@sotf/ui/empty-state';
import { controlClasses, Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Select } from '@sotf/ui/select';
import { Skeleton, SkeletonGroup } from '@sotf/ui/skeleton';
import { Switch } from '@sotf/ui/switch';
import { useQuery, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { CheckCheck, Download, ExternalLink, FileUp, RefreshCw, Shuffle, Tag as TagIcon, X } from 'lucide-react';
import { type ChangeEvent, useEffect, useId, useMemo, useRef, useState } from 'react';
import { notify } from '../../lib/notify.ts';
import { adminApi, adminKeys, categoriesQuery, suggestionsQuery, tagsQuery } from './api.ts';
import { ADMIN_LIMITS } from './constants.ts';
import { downloadText, readRecategorizeCsv, toCsv } from './csv.ts';
import {
  batches,
  type CsvMergeResult,
  mergeCsv,
  planChanges,
  type RecatRow,
  rowsFromSuggestions,
} from './recategorize.ts';
import {
  AdminHeader,
  formatCount,
  formatShare,
  locale,
  PanelError,
  reportFailure,
  TableScroller,
  tdClasses,
  thClasses,
  todayIso,
} from './shared.tsx';

const PAGE = 100;
const CONFIDENCE_STEPS = ['0', '0.3', '0.5', '0.8'] as const;
type ConfidenceStep = (typeof CONFIDENCE_STEPS)[number];
const NO_CATEGORY = '__none';
const ALL = '__all';

export interface RecategorizeScreenProps {
  from?: string;
}

export function RecategorizeScreen({ from }: RecategorizeScreenProps) {
  const queryClient = useQueryClient();
  const { data: categories } = useSuspenseQuery(categoriesQuery);
  const { data: tags } = useSuspenseQuery(tagsQuery);
  const suggestions = useQuery(suggestionsQuery);

  const [rows, setRows] = useState<RecatRow[] | null>(null);
  const [dirty, setDirty] = useState(false);
  const [selected, setSelected] = useState<ReadonlySet<number>>(new Set());
  const [search, setSearch] = useState('');
  const [minConfidence, setMinConfidence] = useState<ConfidenceStep>('0');
  const [current, setCurrent] = useState<string>(from ?? ALL);
  const [source, setSource] = useState<'all' | 'rules' | 'csv'>('all');
  const [limit, setLimit] = useState(PAGE);
  const [bulkCategory, setBulkCategory] = useState<string>('');
  const [confirmReset, setConfirmReset] = useState(false);
  const [applyOpen, setApplyOpen] = useState(false);
  const [csvReport, setCsvReport] = useState<(CsvMergeResult & { problems: string[] }) | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  // Target categories: active mod categories. Names of every category (retired too) for display.
  const targets = useMemo(
    () =>
      categories
        .filter((category) => category.kind === 'mod' && category.retiredAt === null)
        .sort((a, b) => a.sortOrder - b.sortOrder || a.name.localeCompare(b.name)),
    [categories],
  );
  const targetSlugs = useMemo(() => new Set(targets.map((category) => category.slug)), [targets]);
  const nameOf = useMemo(() => {
    const map = new Map<string, string>();
    for (const category of categories) {
      map.set(category.slug, category.name);
      for (const legacy of category.legacySlugs) if (!map.has(legacy)) map.set(legacy, category.name);
    }
    return map;
  }, [categories]);
  const tagNames = useMemo(() => new Map(tags.map((tag) => [tag.slug, tag.name])), [tags]);
  const tagSlugs = useMemo(() => new Set(tags.map((tag) => tag.slug)), [tags]);

  useEffect(() => {
    if (rows === null && suggestions.data) setRows(rowsFromSuggestions(suggestions.data));
  }, [rows, suggestions.data]);

  const list = rows ?? [];
  const currentOptions = useMemo(() => {
    const slugs = new Set<string>();
    let none = false;
    for (const row of list) {
      if (row.currentCategory) slugs.add(row.currentCategory);
      else none = true;
    }
    return { slugs: [...slugs].sort(), none };
  }, [list]);

  const needle = search.trim().toLowerCase();
  const min = Number(minConfidence);
  const visible = list.filter((row) => {
    if (
      needle &&
      !`${row.name} ${row.mod?.manifestId ?? ''} ${row.mod?.userHandle ?? ''}`.toLowerCase().includes(needle)
    )
      return false;
    if (min > 0 && (row.confidence ?? 0) < min) return false;
    if (current === NO_CATEGORY && row.currentCategory) return false;
    if (current !== ALL && current !== NO_CATEGORY && row.currentCategory !== current) return false;
    if (source !== 'all' && row.source !== source) return false;
    return true;
  });
  const shown = visible.slice(0, limit);
  const selectedRows = list.filter((row) => selected.has(row.modId));
  const visibleSelected = visible.filter((row) => selected.has(row.modId)).length;

  const update = (modId: number, change: (row: RecatRow) => RecatRow) => {
    setRows((previous) => previous?.map((row) => (row.modId === modId ? change(row) : row)) ?? previous);
    setDirty(true);
  };
  const updateSelected = (change: (row: RecatRow) => RecatRow) => {
    setRows((previous) => previous?.map((row) => (selected.has(row.modId) ? change(row) : row)) ?? previous);
    setDirty(true);
  };
  const toggle = (modId: number, on: boolean) =>
    setSelected((previous) => {
      const next = new Set(previous);
      if (on) next.add(modId);
      else next.delete(modId);
      return next;
    });
  const toggleVisible = (on: boolean) =>
    setSelected((previous) => {
      const next = new Set(previous);
      for (const row of visible) {
        if (on) next.add(row.modId);
        else next.delete(row.modId);
      }
      return next;
    });

  const reload = async () => {
    setConfirmReset(false);
    const result = await suggestions.refetch();
    if (result.data) {
      setRows(rowsFromSuggestions(result.data));
      setSelected(new Set());
      setDirty(false);
      setCsvReport(null);
    } else if (result.error) reportFailure(result.error, m.admin_recat_load_failed());
  };

  const importCsv = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    event.currentTarget.value = '';
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      notify.error(m.admin_recat_csv_failed(), { description: m.admin_recat_csv_too_big() });
      return;
    }
    let text: string;
    try {
      text = await file.text();
    } catch {
      notify.error(m.admin_recat_csv_failed(), { description: m.admin_recat_csv_unreadable() });
      return;
    }
    const parsed = readRecategorizeCsv(text);
    const problems = parsed.problems.map((problem) => {
      switch (problem.kind) {
        case 'no-header':
          return m.admin_recat_csv_no_header();
        case 'missing-column':
          return problem.column === 'mod' ? m.admin_recat_csv_no_mod_column() : m.admin_recat_csv_no_category_column();
        default:
          return problem.reason === 'no-mod'
            ? m.admin_recat_csv_line_no_mod({ line: problem.line })
            : m.admin_recat_csv_line_no_category({ line: problem.line });
      }
    });
    if (parsed.rows.length === 0) {
      notify.error(m.admin_recat_csv_failed(), { description: problems[0] ?? m.admin_recat_csv_empty() });
      setCsvReport({ rows: list, added: 0, updated: 0, skipped: [], droppedTags: 0, problems });
      return;
    }
    const merged = mergeCsv(list, parsed.rows, targetSlugs, tagSlugs);
    setRows(merged.rows);
    setDirty(true);
    setSource('all');
    setCsvReport({ ...merged, problems });
    // The imported lines are what the admin wants to review: select them.
    setSelected(new Set(merged.rows.filter((row) => row.source === 'csv').map((row) => row.modId)));
    notify.success(m.admin_recat_csv_done({ added: merged.added, updated: merged.updated }));
  };

  const exportCsv = () => {
    const header = [
      'modId',
      'manifestId',
      'name',
      'currentCategory',
      'categorySlug',
      'tagSlugs',
      'confidence',
      'reason',
    ];
    const body = visible.map((row) => [
      row.modId,
      row.mod?.manifestId ?? '',
      row.name,
      row.currentCategory ?? '',
      row.category,
      row.tags.join('|'),
      row.confidence ?? '',
      row.reason,
    ]);
    downloadText(`recategorize-${todayIso()}.csv`, toCsv([header, ...body]));
  };

  const onApplied = (appliedIds: readonly number[]) => {
    const done = new Set(appliedIds);
    setRows((previous) => previous?.filter((row) => !done.has(row.modId)) ?? previous);
    setSelected((previous) => new Set([...previous].filter((id) => !done.has(id))));
    void queryClient.invalidateQueries({ queryKey: adminKeys.categories });
  };

  const header = (
    <AdminHeader
      title={m.admin_recat_title()}
      description={m.admin_recat_description()}
      actions={
        <>
          <input
            ref={fileInput}
            type="file"
            accept=".csv,text/csv"
            className="sr-only"
            tabIndex={-1}
            aria-hidden="true"
            onChange={(event) => void importCsv(event)}
          />
          <Button
            variant="secondary"
            icon={<Icon icon={FileUp} size={18} />}
            disabled={rows === null}
            onClick={() => fileInput.current?.click()}
          >
            {m.admin_recat_import()}
          </Button>
          <Button
            variant="secondary"
            icon={<Icon icon={Download} size={18} />}
            disabled={visible.length === 0}
            onClick={exportCsv}
          >
            {m.admin_recat_export()}
          </Button>
          <Button
            variant="ghost"
            icon={<Icon icon={RefreshCw} size={18} />}
            loading={suggestions.isFetching}
            onClick={() => (dirty ? setConfirmReset(true) : void reload())}
          >
            {m.admin_recat_reload()}
          </Button>
        </>
      }
    />
  );

  if (rows === null) {
    return (
      <div className="grid gap-6">
        {header}
        {suggestions.isError ? (
          <PanelError error={suggestions.error} onRetry={() => void suggestions.refetch()} />
        ) : (
          <SkeletonGroup label={m.admin_recat_loading()} className="grid gap-2">
            {Array.from({ length: 8 }, (_, index) => (
              <Skeleton key={index} className="h-12 w-full rounded-md" />
            ))}
          </SkeletonGroup>
        )}
      </div>
    );
  }

  return (
    <div className="grid gap-6 pb-24">
      {header}

      <Banner tone="info" title={m.admin_recat_human_title()}>
        {m.admin_recat_human_text()}
      </Banner>

      {csvReport ? <CsvReport report={csvReport} onDismiss={() => setCsvReport(null)} /> : null}

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <Field label={m.admin_recat_filter_search()}>
          <Input
            type="search"
            value={search}
            onChange={(event) => {
              setSearch(event.currentTarget.value);
              setLimit(PAGE);
            }}
          />
        </Field>
        <Select<string>
          label={m.admin_recat_filter_current()}
          value={current}
          onValueChange={(next) => {
            setCurrent(next ?? ALL);
            setLimit(PAGE);
          }}
          options={[
            { value: ALL, label: m.admin_recat_filter_any() },
            ...(currentOptions.none ? [{ value: NO_CATEGORY, label: m.admin_recat_no_category() }] : []),
            ...currentOptions.slugs.map((slug) => ({ value: slug, label: `${nameOf.get(slug) ?? slug} (${slug})` })),
            ...(current !== ALL && current !== NO_CATEGORY && !currentOptions.slugs.includes(current)
              ? [{ value: current, label: current }]
              : []),
          ]}
        />
        <Select<ConfidenceStep>
          label={m.admin_recat_filter_confidence()}
          value={minConfidence}
          onValueChange={(next) => {
            setMinConfidence(next ?? '0');
            setLimit(PAGE);
          }}
          options={CONFIDENCE_STEPS.map((step) => ({
            value: step,
            label:
              step === '0'
                ? m.admin_recat_filter_any()
                : m.admin_recat_confidence_at_least({ value: formatShare(Number(step)) }),
          }))}
        />
        <Select<'all' | 'rules' | 'csv'>
          label={m.admin_recat_filter_source()}
          value={source}
          onValueChange={(next) => {
            setSource(next ?? 'all');
            setLimit(PAGE);
          }}
          options={[
            { value: 'all', label: m.admin_recat_filter_any() },
            { value: 'rules', label: m.admin_recat_source_rules() },
            { value: 'csv', label: m.admin_recat_source_csv() },
          ]}
        />
      </div>

      <p className="text-sm text-fg-muted" aria-live="polite">
        {m.admin_recat_counts({ visible: visible.length, total: list.length, selected: selected.size })}
      </p>

      {list.length === 0 ? (
        <EmptyState
          icon={<Icon icon={CheckCheck} size={32} />}
          title={m.admin_recat_empty_title()}
          description={m.admin_recat_empty_text()}
        />
      ) : visible.length === 0 ? (
        <EmptyState icon={<Icon icon={Shuffle} size={32} />} title={m.admin_no_matches()} />
      ) : (
        <TableScroller label={m.admin_recat_table_label()}>
          <table className="w-full border-collapse text-sm">
            <caption className="sr-only">{m.admin_recat_table_label()}</caption>
            <thead className="bg-sunken">
              <tr>
                <th scope="col" className={`${thClasses} w-10`}>
                  <SelectAll total={visible.length} selected={visibleSelected} onChange={(on) => toggleVisible(on)} />
                </th>
                <th scope="col" className={thClasses}>
                  {m.admin_recat_col_mod()}
                </th>
                <th scope="col" className={thClasses}>
                  {m.admin_recat_col_current()}
                </th>
                <th scope="col" className={thClasses}>
                  {m.admin_recat_col_target()}
                </th>
                <th scope="col" className={thClasses}>
                  {m.admin_recat_col_tags()}
                </th>
                <th scope="col" className={thClasses}>
                  {m.admin_recat_col_confidence()}
                </th>
                <th scope="col" className={thClasses}>
                  {m.admin_recat_col_reason()}
                </th>
              </tr>
            </thead>
            <tbody>
              {shown.map((row) => (
                <RecatRowView
                  key={row.modId}
                  row={row}
                  checked={selected.has(row.modId)}
                  onToggle={(on) => toggle(row.modId, on)}
                  targets={targets}
                  nameOf={nameOf}
                  tags={tags}
                  tagNames={tagNames}
                  onCategory={(slug) => update(row.modId, (entry) => ({ ...entry, category: slug }))}
                  onTags={(next) => update(row.modId, (entry) => ({ ...entry, tags: next }))}
                />
              ))}
            </tbody>
          </table>
        </TableScroller>
      )}
      {visible.length > shown.length ? (
        <div className="flex justify-center">
          <Button variant="secondary" onClick={() => setLimit((value) => value + PAGE)}>
            {m.admin_show_more({ count: Math.min(PAGE, visible.length - shown.length) })}
          </Button>
        </div>
      ) : null}

      {selected.size > 0 ? (
        <section
          aria-label={m.admin_recat_bulk_label()}
          className="sticky bottom-3 z-(--z-sticky) flex flex-wrap items-end gap-3 rounded-lg border border-border-strong bg-overlay p-3 shadow-lg"
        >
          <p className="basis-full text-sm font-medium text-fg sm:basis-auto sm:self-center">
            {m.admin_recat_selected({ count: selected.size })}
          </p>
          <div className="flex flex-wrap items-end gap-2">
            <Select<string>
              label={m.admin_recat_bulk_category()}
              size="sm"
              value={bulkCategory || null}
              placeholder={m.admin_recat_bulk_category_placeholder()}
              onValueChange={(next) => setBulkCategory(next ?? '')}
              options={targets.map((category) => ({ value: category.slug, label: category.name }))}
              className="min-w-48"
            />
            <Button
              size="sm"
              variant="secondary"
              disabled={!bulkCategory}
              onClick={() => {
                updateSelected((row) => ({ ...row, category: bulkCategory }));
                notify.success(
                  m.admin_recat_bulk_set_done({ count: selected.size, name: nameOf.get(bulkCategory) ?? bulkCategory }),
                );
              }}
            >
              {m.admin_recat_bulk_set()}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              icon={<Icon icon={TagIcon} size={16} />}
              onClick={() => updateSelected((row) => ({ ...row, tags: [] }))}
            >
              {m.admin_recat_bulk_clear_tags()}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              icon={<Icon icon={X} size={16} />}
              onClick={() => {
                setRows((previous) => previous?.filter((row) => !selected.has(row.modId)) ?? previous);
                setSelected(new Set());
                setDirty(true);
              }}
            >
              {m.admin_recat_bulk_dismiss()}
            </Button>
          </div>
          <div className="ms-auto flex gap-2">
            <Button size="sm" variant="ghost" onClick={() => setSelected(new Set())}>
              {m.admin_recat_bulk_unselect()}
            </Button>
            <Button size="sm" icon={<Icon icon={CheckCheck} size={16} />} onClick={() => setApplyOpen(true)}>
              {m.admin_recat_apply({ count: selected.size })}
            </Button>
          </div>
        </section>
      ) : null}

      <ApplyDialog
        open={applyOpen}
        onOpenChange={setApplyOpen}
        rows={selectedRows}
        nameOf={nameOf}
        onApplied={onApplied}
      />
      <ConfirmDialog
        open={confirmReset}
        onOpenChange={setConfirmReset}
        title={m.admin_recat_reload_title()}
        description={m.admin_recat_reload_text()}
        confirmLabel={m.admin_recat_reload()}
        tone="danger"
        onConfirm={() => reload()}
      />
    </div>
  );
}

function SelectAll({
  total,
  selected,
  onChange,
}: {
  total: number;
  selected: number;
  onChange: (on: boolean) => void;
}) {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.indeterminate = selected > 0 && selected < total;
  }, [selected, total]);
  return (
    <input
      ref={ref}
      type="checkbox"
      className="size-5 cursor-pointer accent-(--color-primary)"
      checked={total > 0 && selected === total}
      aria-label={m.admin_recat_select_visible({ count: total })}
      onChange={(event) => onChange(event.currentTarget.checked)}
    />
  );
}

interface RecatRowViewProps {
  row: RecatRow;
  checked: boolean;
  onToggle: (on: boolean) => void;
  targets: ReadonlyArray<{ slug: string; name: string }>;
  nameOf: ReadonlyMap<string, string>;
  tags: ReadonlyArray<{ slug: string; name: string }>;
  tagNames: ReadonlyMap<string, string>;
  onCategory: (slug: string) => void;
  onTags: (tags: string[]) => void;
}

function RecatRowView({
  row,
  checked,
  onToggle,
  targets,
  nameOf,
  tags,
  tagNames,
  onCategory,
  onTags,
}: RecatRowViewProps) {
  const id = useId();
  const edited = row.category !== row.suggestedCategory;
  const full = row.tags.length >= ADMIN_LIMITS.recategorizeTagsMax;
  const available = tags.filter((tag) => !row.tags.includes(tag.slug));
  return (
    <tr className={cn('border-t border-border', checked && 'bg-primary/6')}>
      <td className={tdClasses}>
        <input
          type="checkbox"
          className="size-5 cursor-pointer accent-(--color-primary)"
          checked={checked}
          aria-labelledby={`${id}-name`}
          onChange={(event) => onToggle(event.currentTarget.checked)}
        />
      </td>
      <th scope="row" className={`${tdClasses} min-w-48 text-start font-normal`}>
        <span className="grid gap-0.5">
          <span id={`${id}-name`} className="flex items-center gap-1.5 font-semibold text-fg">
            {row.mod ? (
              <a
                href={localizePath(row.mod.canonicalPath, locale())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-link"
              >
                {row.name}
                <Icon icon={ExternalLink} size={12} className="text-fg-subtle" />
              </a>
            ) : (
              row.name
            )}
          </span>
          <span className="flex flex-wrap items-center gap-1.5 text-xs text-fg-muted">
            {row.mod ? <span>@{row.mod.userHandle}</span> : <span className="font-mono">#{row.modId}</span>}
            {row.mod && row.mod.status !== 'published' ? (
              <Badge variant="neutral" size="sm">
                {m.admin_mod_status({ status: row.mod.status })}
              </Badge>
            ) : null}
            {row.source === 'csv' ? (
              <Badge variant="blueprint" size="sm">
                {m.admin_recat_source_csv()}
              </Badge>
            ) : null}
          </span>
        </span>
      </th>
      <td className={`${tdClasses} whitespace-nowrap text-fg-muted`}>
        {row.currentCategory === undefined ? (
          <span className="italic">{m.admin_recat_current_unknown()}</span>
        ) : row.currentCategory === null ? (
          <span className="italic">{m.admin_recat_no_category()}</span>
        ) : (
          <span title={row.currentCategory}>{nameOf.get(row.currentCategory) ?? row.currentCategory}</span>
        )}
      </td>
      <td className={`${tdClasses} min-w-44`}>
        <select
          aria-label={m.admin_recat_target_for({ name: row.name })}
          className={cn(controlClasses, 'h-9 px-2', edited && 'border-signal')}
          value={row.category}
          onChange={(event) => onCategory(event.currentTarget.value)}
        >
          {targets.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>
        {edited ? (
          <span className="mt-1 block text-2xs text-fg-muted">
            {m.admin_recat_suggested_was({ name: nameOf.get(row.suggestedCategory) ?? row.suggestedCategory })}
          </span>
        ) : null}
      </td>
      <td className={`${tdClasses} min-w-56`}>
        <div className="flex flex-wrap items-center gap-1">
          {row.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-0.5 rounded-full border border-border bg-raised ps-2 text-xs text-fg"
            >
              {tagNames.get(tag) ?? tag}
              <button
                type="button"
                className="inline-flex size-6 items-center justify-center rounded-full text-fg-muted hover:bg-fg/8 hover:text-fg"
                aria-label={m.admin_recat_remove_tag({ tag: tagNames.get(tag) ?? tag, name: row.name })}
                onClick={() => onTags(row.tags.filter((entry) => entry !== tag))}
              >
                <Icon icon={X} size={12} />
              </button>
            </span>
          ))}
          {!full && available.length > 0 ? (
            <select
              aria-label={m.admin_recat_add_tag_for({ name: row.name })}
              className={cn(controlClasses, 'h-7 w-auto px-1 text-xs')}
              value=""
              onChange={(event) => {
                const value = event.currentTarget.value;
                if (value) onTags([...row.tags, value]);
              }}
            >
              <option value="">{m.admin_recat_add_tag()}</option>
              {available.map((tag) => (
                <option key={tag.slug} value={tag.slug}>
                  {tag.name}
                </option>
              ))}
            </select>
          ) : null}
        </div>
      </td>
      <td className={`${tdClasses} min-w-28`}>
        {row.confidence === null ? (
          <span className="text-fg-subtle">—</span>
        ) : (
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="h-1.5 w-12 overflow-hidden rounded-full bg-fg/10">
              <span
                className={cn(
                  'block h-full rounded-full',
                  row.confidence >= 0.8 ? 'bg-success' : row.confidence >= 0.5 ? 'bg-signal' : 'bg-warning',
                )}
                style={{ width: `${Math.round(row.confidence * 100)}%` }}
              />
            </span>
            <span className="tabular-nums text-fg-muted">{formatShare(row.confidence)}</span>
          </span>
        )}
      </td>
      <td className={`${tdClasses} min-w-56 max-w-96 text-xs text-fg-muted`}>
        <span className="line-clamp-2" title={row.reason}>
          {row.reason || '—'}
        </span>
      </td>
    </tr>
  );
}

function CsvReport({ report, onDismiss }: { report: CsvMergeResult & { problems: string[] }; onDismiss: () => void }) {
  const skipped = report.skipped.map((entry) => {
    switch (entry.reason) {
      case 'unknown-mod':
        return m.admin_recat_csv_skip_mod({ line: entry.line, value: entry.value });
      case 'unknown-category':
        return m.admin_recat_csv_skip_category({ line: entry.line, value: entry.value });
      default:
        return m.admin_recat_csv_skip_duplicate({ line: entry.line, value: entry.value });
    }
  });
  const issues = [...report.problems, ...skipped];
  return (
    <Banner
      tone={issues.length > 0 ? 'warning' : 'signal'}
      title={m.admin_recat_csv_report_title({ added: report.added, updated: report.updated })}
      dismissible
      onDismiss={onDismiss}
    >
      <div className="grid gap-2">
        {report.droppedTags > 0 ? <p>{m.admin_recat_csv_dropped_tags({ count: report.droppedTags })}</p> : null}
        {issues.length > 0 ? (
          <>
            <p>{m.admin_recat_csv_issues({ count: issues.length })}</p>
            <ul className="list-disc ps-5 text-xs">
              {issues.slice(0, 10).map((issue) => (
                <li key={issue}>{issue}</li>
              ))}
            </ul>
            {issues.length > 10 ? (
              <p className="text-xs">{m.admin_recat_csv_more({ count: issues.length - 10 })}</p>
            ) : null}
          </>
        ) : null}
      </div>
    </Banner>
  );
}

interface ApplyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  rows: readonly RecatRow[];
  nameOf: ReadonlyMap<string, string>;
  onApplied: (modIds: readonly number[]) => void;
}

function ApplyDialog({ open, onOpenChange, rows, nameOf, onApplied }: ApplyDialogProps) {
  const [withTags, setWithTags] = useState(true);
  const [progress, setProgress] = useState<{ batch: number; total: number } | null>(null);
  const busy = progress !== null;
  const byCategory = useMemo(() => {
    const counts = new Map<string, number>();
    for (const row of rows) counts.set(row.category, (counts.get(row.category) ?? 0) + 1);
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, [rows]);
  const withTagRows = rows.filter((row) => row.tags.length > 0).length;

  const apply = async () => {
    setProgress({ batch: 0, total: 0 });
    let applied = 0;
    let sent = 0;
    const doneIds: number[] = [];
    try {
      const plan = await planChanges(rows, withTags);
      const groups = batches(plan.changes);
      for (const [index, group] of groups.entries()) {
        setProgress({ batch: index + 1, total: groups.length });
        const result = await adminApi.applyRecategorize(group);
        applied += result.applied;
        sent += group.length;
        doneIds.push(...group.map((change) => change.modId));
      }
      onApplied(doneIds);
      notify.success(m.admin_recat_applied({ count: applied }), {
        description: [
          sent > applied ? m.admin_recat_applied_unchanged({ count: sent - applied }) : '',
          plan.tagsSkipped > 0 ? m.admin_recat_applied_tags_skipped({ count: plan.tagsSkipped }) : '',
        ]
          .filter(Boolean)
          .join(' '),
      });
      onOpenChange(false);
    } catch (error) {
      if (doneIds.length > 0) onApplied(doneIds);
      reportFailure(error, m.admin_recat_apply_failed());
      if (doneIds.length > 0) notify.info(m.admin_recat_partial({ count: doneIds.length }));
    } finally {
      setProgress(null);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!busy) onOpenChange(next);
      }}
      title={m.admin_recat_apply_title({ count: rows.length })}
      description={m.admin_recat_apply_text()}
      size="md"
      disablePointerDismissal
      footer={
        <>
          <Button variant="secondary" disabled={busy} onClick={() => onOpenChange(false)}>
            {m.admin_action_cancel()}
          </Button>
          <Button loading={busy} disabled={rows.length === 0} onClick={() => void apply()}>
            {m.admin_recat_apply({ count: rows.length })}
          </Button>
        </>
      }
    >
      <div className="grid gap-4">
        <ul className="grid gap-1 text-sm">
          {byCategory.map(([slug, count]) => (
            <li key={slug} className="flex justify-between gap-3 rounded-md bg-sunken px-3 py-1.5">
              <span className="text-fg">{nameOf.get(slug) ?? slug}</span>
              <span className="tabular-nums text-fg-muted">{formatCount(count)}</span>
            </li>
          ))}
        </ul>
        {withTagRows > 0 ? (
          <Switch
            label={m.admin_recat_apply_tags({ count: withTagRows })}
            description={m.admin_recat_apply_tags_hint()}
            checked={withTags}
            disabled={busy}
            onCheckedChange={setWithTags}
          />
        ) : null}
        <p className="text-sm text-fg-muted" aria-live="polite">
          {progress && progress.total > 0
            ? m.admin_recat_progress({ batch: progress.batch, total: progress.total })
            : progress
              ? m.admin_recat_preparing()
              : ''}
        </p>
      </div>
    </Dialog>
  );
}
