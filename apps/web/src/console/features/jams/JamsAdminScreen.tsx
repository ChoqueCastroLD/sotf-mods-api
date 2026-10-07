/**
 * `/moderation/jams` — every Mod Jam (drafts included) with its phase and schedule, and «New jam».
 * Search, phase filter, sort and pages (state in the URL); the API returns all jams (there are few),
 * so they are filtered and paged here. The editor, the phase controls and the entry moderation
 * live in `JamEditorScreen`.
 */

import { isApiError } from '@sotf/contracts/client';
import type { JamPhase } from '@sotf/contracts/jams';
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { Dialog } from '@sotf/ui/dialog';
import { EmptyState } from '@sotf/ui/empty-state';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { toast } from '@sotf/ui/toast';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { Link, useNavigate } from '@tanstack/react-router';
import { Plus, SearchX, Trophy } from 'lucide-react';
import { type FormEvent, useMemo, useState } from 'react';
import { formatInstant, reportFailure, slugify } from '../admin/shared.tsx';
import { FilterBar, FilterSelect, PageNav, SearchField, SortSelect, useListSearch } from '../ranger/controls.tsx';
import { type AdminJam, adminJamsQuery, jamKeys, jamsAdminApi } from './api.ts';
import { jamPhaseLabel, jamPhaseVariant } from './phase.ts';

export const JAM_LIST_SORTS = ['recent', 'start', 'title', 'entries'] as const;
export type JamListSort = (typeof JAM_LIST_SORTS)[number];

export interface JamListView {
  q?: string;
  phase?: JamPhase;
  sort?: Exclude<JamListSort, 'recent'>;
  page?: number;
  size?: number;
}

const DEFAULT_SIZE = 10;
export const JAM_PAGE_SIZES = [10, 25, 50] as const;

function sortLabel(sort: JamListSort): string {
  switch (sort) {
    case 'recent':
      return m.jams_admin_sort_recent();
    case 'start':
      return m.jams_admin_sort_start();
    case 'title':
      return m.jams_admin_sort_title();
    case 'entries':
      return m.jams_admin_sort_entries();
  }
}

/** Filters, sorts and slices the jams of the list (pure; the screen only renders). */
export function arrangeJams(jams: readonly AdminJam[], view: JamListView): { items: AdminJam[]; total: number } {
  const text = view.q?.trim().toLowerCase();
  const matching = jams.filter(
    (jam) =>
      (!view.phase || jam.phase === view.phase) &&
      (!text ||
        jam.title.toLowerCase().includes(text) ||
        jam.slug.includes(text) ||
        jam.tagline.toLowerCase().includes(text)),
  );
  const start = (jam: AdminJam) =>
    jam.submissionsOpenAt ? Date.parse(jam.submissionsOpenAt) : Number.POSITIVE_INFINITY;
  const sorted = [...matching].sort((a, b) => {
    switch (view.sort) {
      case 'start':
        return start(b) - start(a) || b.id - a.id;
      case 'title':
        return a.title.localeCompare(b.title) || a.id - b.id;
      case 'entries':
        return b.entryCount - a.entryCount || b.id - a.id;
      default:
        return Date.parse(b.updatedAt) - Date.parse(a.updatedAt) || b.id - a.id;
    }
  });
  const size = view.size ?? DEFAULT_SIZE;
  const from = ((view.page ?? 1) - 1) * size;
  return { items: sorted.slice(from, from + size), total: sorted.length };
}

export function JamsAdminScreen({ view }: { view: JamListView }) {
  const { data: jams } = useSuspenseQuery(adminJamsQuery);
  const patch = useListSearch('/moderation/jams');
  const [creating, setCreating] = useState(false);
  const size = view.size ?? DEFAULT_SIZE;
  const { items, total } = useMemo(() => arrangeJams(jams, view), [jams, view]);
  const totalPages = total === 0 ? 0 : Math.ceil(total / size);
  const filters = [view.q, view.phase].filter(Boolean).length;
  const clear = () => patch({ q: undefined, phase: undefined });
  const phases = useMemo(
    () => ['draft', 'announced', 'submissions', 'submissions_closed', 'voting', 'results', 'archived'] as const,
    [],
  );

  return (
    <div className="grid gap-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div className="grid gap-1">
          <h1 className="text-2xl font-bold text-fg">{m.jams_admin_title()}</h1>
          <p className="max-w-prose text-sm text-fg-muted">{m.jams_admin_description()}</p>
        </div>
        <Button icon={<Icon icon={Plus} size={18} />} onClick={() => setCreating(true)}>
          {m.jams_admin_new()}
        </Button>
      </header>

      {jams.length === 0 ? (
        <EmptyState
          icon={<Icon icon={Trophy} size={32} />}
          title={m.jams_admin_empty_title()}
          description={m.jams_admin_empty_text()}
          action={
            <Button icon={<Icon icon={Plus} size={18} />} onClick={() => setCreating(true)}>
              {m.jams_admin_new()}
            </Button>
          }
        />
      ) : (
        <>
          <FilterBar
            search={
              <SearchField
                label={m.jams_admin_search()}
                placeholder={m.jams_admin_search()}
                value={view.q ?? ''}
                onCommit={(value) => patch({ q: value || undefined })}
              />
            }
            sort={
              <SortSelect
                value={view.sort ?? 'recent'}
                onChange={(value) => patch({ sort: value === 'recent' ? undefined : value })}
                options={JAM_LIST_SORTS.map((value) => ({ value, label: sortLabel(value) }))}
              />
            }
            activeCount={filters}
            onClear={clear}
          >
            <FilterSelect
              label={m.jams_admin_col_phase()}
              allLabel={m.jams_admin_filter_phase_all()}
              value={view.phase}
              onChange={(value) => patch({ phase: value })}
              options={phases.map((value) => ({ value, label: jamPhaseLabel(value) }))}
            />
          </FilterBar>

          {items.length === 0 ? (
            <EmptyState
              icon={<Icon icon={SearchX} size={32} />}
              title={m.jams_admin_filtered_empty_title()}
              description={m.jams_admin_filtered_empty_text()}
              action={
                <Button variant="secondary" onClick={clear}>
                  {m.ranger_filters_clear()}
                </Button>
              }
            />
          ) : (
            <div className="grid gap-4">
              <ul className="grid divide-y divide-border border-y border-border">
                {items.map((jam) => (
                  <JamRow key={jam.id} jam={jam} />
                ))}
              </ul>
              <PageNav
                page={view.page ?? 1}
                totalPages={totalPages}
                total={total}
                pageSize={size}
                onPage={(page) => patch({ page: page > 1 ? page : undefined })}
                sizes={JAM_PAGE_SIZES}
                onPageSize={(next) => patch({ size: next === DEFAULT_SIZE ? undefined : next })}
              />
            </div>
          )}
        </>
      )}

      <Dialog
        open={creating}
        onOpenChange={setCreating}
        title={m.jams_admin_new()}
        description={m.jams_admin_new_description()}
        size="md"
        sheetOnMobile
      >
        {creating ? <NewJamForm onDone={() => setCreating(false)} /> : null}
      </Dialog>
    </div>
  );
}

function JamRow({ jam }: { jam: AdminJam }) {
  return (
    <li className="grid gap-2 py-3 md:grid-cols-[minmax(0,1fr)_14rem_6rem] md:items-center md:gap-6">
      <div className="grid min-w-0 gap-0.5">
        <Link
          to="/moderation/jams/$jamId"
          params={{ jamId: String(jam.id) }}
          className="font-semibold break-words text-fg hover:text-link"
        >
          {jam.title}
        </Link>
        <span className="font-mono text-xs text-fg-muted">/jams/{jam.slug}</span>
      </div>
      <div className="grid gap-1 text-sm">
        <span className="flex flex-wrap items-center gap-2">
          <Badge variant={jamPhaseVariant(jam.phase)} size="sm">
            {jamPhaseLabel(jam.phase)}
          </Badge>
          {jam.phaseLocked ? (
            <Badge variant="outline-mono" size="sm">
              {m.jams_admin_locked()}
            </Badge>
          ) : null}
        </span>
        <span className={cn('text-xs text-fg-muted tabular-nums', !jam.submissionsOpenAt && 'text-fg-subtle')}>
          {jam.submissionsOpenAt
            ? `${formatInstant(jam.submissionsOpenAt)} - ${jam.votingCloseAt ? formatInstant(jam.votingCloseAt) : '…'}`
            : m.jams_admin_no_schedule()}
        </span>
      </div>
      <span className="text-sm tabular-nums text-fg-muted">{m.jams_entries_count({ count: jam.entryCount })}</span>
    </li>
  );
}

function NewJamForm({ onDone }: { onDone: () => void }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [slugTouched, setSlugTouched] = useState(false);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<{ title?: string; slug?: string }>({});

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (saving) return;
    const next: typeof errors = {};
    if (title.trim().length < 3) next.title = m.jams_admin_error_title();
    if (!/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(slug) || slug.length < 3) next.slug = m.jams_admin_error_slug();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSaving(true);
    try {
      const jam = await jamsAdminApi.create({ slug, title: title.trim() });
      await queryClient.invalidateQueries({ queryKey: jamKeys.admin });
      toast.success(m.jams_admin_created({ title: jam.title }));
      onDone();
      void navigate({ to: '/moderation/jams/$jamId', params: { jamId: String(jam.id) } });
    } catch (error) {
      if (isApiError(error) && error.code === 'CONFLICT') setErrors({ slug: m.jams_admin_error_slug_taken() });
      else reportFailure(error, m.jams_admin_create_failed());
    } finally {
      setSaving(false);
    }
  };

  return (
    <form noValidate onSubmit={(event) => void submit(event)} className="grid gap-4">
      <Field label={m.jams_admin_field_title()} error={errors.title}>
        <Input
          autoFocus
          value={title}
          maxLength={100}
          onChange={(event) => {
            const value = event.currentTarget.value;
            setTitle(value);
            if (!slugTouched) setSlug(slugify(value).slice(0, 60));
          }}
        />
      </Field>
      <Field label={m.jams_admin_field_slug()} description={m.jams_admin_field_slug_hint()} error={errors.slug}>
        <Input
          value={slug}
          maxLength={60}
          className="font-mono"
          onChange={(event) => {
            setSlugTouched(true);
            setSlug(event.currentTarget.value.toLowerCase());
          }}
        />
      </Field>
      <div className="flex justify-end gap-2">
        <Button variant="ghost" type="button" onClick={onDone} disabled={saving}>
          {m.jams_admin_cancel()}
        </Button>
        <Button type="submit" loading={saving}>
          {m.jams_admin_create()}
        </Button>
      </div>
    </form>
  );
}
