/**
 * `/moderation/admin/game-builds`: the Sons of the Forest game builds (patches) that mod versions and
 * field reports refer to. A new build is registered automatically when Steam publishes one (the
 * `steam.sync` job, every 30 minutes); admins can sync now, search, filter, sort and page the list,
 * edit a label, mark a build current (exactly one) or breaking, register one by hand and delete a
 * build nobody reported on. Marking a build breaking alerts creators, so the form says so first.
 */
import { isApiError } from '@sotf/contracts/client';
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Banner } from '@sotf/ui/banner';
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { ConfirmDialog, Dialog, DialogClose } from '@sotf/ui/dialog';
import { EmptyState } from '@sotf/ui/empty-state';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Menu } from '@sotf/ui/menu';
import { Skeleton, SkeletonGroup } from '@sotf/ui/skeleton';
import { Switch } from '@sotf/ui/switch';
import { Textarea } from '@sotf/ui/textarea';
import { toast } from '@sotf/ui/toast';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Flag, Gamepad2, MoreHorizontal, Pencil, Plus, RefreshCw, Search, Star, Trash2, Zap } from 'lucide-react';
import { type FormEvent, useId, useState } from 'react';
import { notify } from '../../lib/notify.ts';
import { FilterBar, FilterSelect, PageNav, SearchField, SortSelect, useListSearch } from '../ranger/controls.tsx';
import {
  adminApi,
  adminKeys,
  GAME_BUILD_PAGE_SIZES,
  type GameBuild,
  type GameBuildListParams,
  type GameBuildSort,
  gameBuildsPageQuery,
  type SteamSyncStatus,
  steamSyncStatusQuery,
} from './api.ts';
import { ADMIN_LIMITS } from './constants.ts';
import {
  AdminHeader,
  formatDay,
  formatInstant,
  htmlToText,
  PanelError,
  reportFailure,
  TableScroller,
  tdClasses,
  thClasses,
  todayIso,
} from './shared.tsx';

type YesNo = 'yes' | 'no';

/** The filters, sort and page kept in the URL (absent = default). */
export interface GameBuildsSearch {
  q?: string;
  current?: YesNo;
  breaking?: YesNo;
  /** Has a Steam build ID. */
  steam?: YesNo;
  sort?: GameBuildSort;
  page?: number;
  size?: number;
}

const ROUTE = '/moderation/admin/game-builds';

export function paramsOf(search: GameBuildsSearch): GameBuildListParams {
  return {
    q: search.q ?? '',
    current: search.current === undefined ? undefined : search.current === 'yes',
    breaking: search.breaking === undefined ? undefined : search.breaking === 'yes',
    source: search.steam === undefined ? undefined : search.steam === 'yes' ? 'steam' : 'manual',
    sort: search.sort ?? 'newest',
    page: search.page ?? 1,
    size: search.size ?? GAME_BUILD_PAGE_SIZES[0],
  };
}

function sortLabel(sort: GameBuildSort): string {
  switch (sort) {
    case 'oldest':
      return m.admin_builds_sort_oldest();
    case 'label':
      return m.admin_builds_sort_label();
    case 'label_desc':
      return m.admin_builds_sort_label_desc();
    case 'added':
      return m.admin_builds_sort_added();
    default:
      return m.admin_builds_sort_newest();
  }
}

/** Asks only whether a current build exists (one row). */
const CURRENT_ONLY: GameBuildListParams = {
  q: '',
  current: true,
  breaking: undefined,
  source: undefined,
  sort: 'newest',
  page: 1,
  size: 1,
};

const SORTS: readonly GameBuildSort[] = ['newest', 'oldest', 'label', 'label_desc', 'added'];

/** How often and for how long «Sync now» asks whether the job has finished. */
const SYNC_POLL_MS = 2_000;
const SYNC_POLL_MAX = 30;
const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

export function GameBuildsScreen({ search }: { search: GameBuildsSearch }) {
  const queryClient = useQueryClient();
  const patch = useListSearch(ROUTE);
  const params = paramsOf(search);
  const list = useQuery(gameBuildsPageQuery(params));
  const [editing, setEditing] = useState<GameBuild | 'new' | null>(null);
  const [deleting, setDeleting] = useState<GameBuild | null>(null);
  const [markBreaking, setMarkBreaking] = useState<GameBuild | null>(null);
  const [syncing, setSyncing] = useState(false);
  const currentBuild = useQuery(gameBuildsPageQuery(CURRENT_ONLY));
  const data = list.data;
  // Unknown until loaded: do not warn (or default the form to "current") on a guess.
  const hasCurrent = currentBuild.data ? currentBuild.data.total > 0 : true;
  const filtersActive =
    (params.q ? 1 : 0) +
    (params.current !== undefined ? 1 : 0) +
    (params.breaking !== undefined ? 1 : 0) +
    (params.source !== undefined ? 1 : 0);
  const unfiltered = filtersActive === 0;

  const refresh = () =>
    Promise.all([
      queryClient.invalidateQueries({ queryKey: adminKeys.gameBuilds }),
      queryClient.invalidateQueries({ queryKey: adminKeys.ecosystem }),
    ]);

  const makeCurrent = useMutation({
    mutationFn: (build: GameBuild) => adminApi.updateGameBuild(build.id, { isCurrent: true }),
    onSuccess: async (build) => {
      await refresh();
      notify.success(m.admin_builds_current_done({ label: build.label }));
    },
    onError: (error) => reportFailure(error, m.admin_builds_save_failed()),
  });

  const setBreaking = useMutation({
    mutationFn: ({ build, value }: { build: GameBuild; value: boolean }) =>
      adminApi.updateGameBuild(build.id, { isBreaking: value }),
    onSuccess: async (build) => {
      await refresh();
      notify.success(
        build.isBreaking
          ? m.admin_builds_breaking_done({ label: build.label })
          : m.admin_builds_unbreaking_done({ label: build.label }),
      );
    },
    onError: (error) => reportFailure(error, m.admin_builds_save_failed()),
  });

  const remove = async (build: GameBuild) => {
    try {
      await adminApi.deleteGameBuild(build.id);
      await refresh();
      notify.success(m.admin_builds_deleted({ label: build.label }));
    } catch (error) {
      if (isApiError(error) && error.code === 'CONFLICT') {
        notify.error(m.admin_builds_delete_failed(), { description: m.admin_builds_delete_conflict() });
      } else reportFailure(error, m.admin_builds_delete_failed());
      throw error;
    }
  };

  /** Enqueues the check, then follows the status until the job has run (or says it is slow). */
  const syncNow = async () => {
    if (syncing) return;
    setSyncing(true);
    const toastId = toast.loading(m.admin_builds_sync_checking());
    try {
      const before = queryClient.getQueryData<SteamSyncStatus>(steamSyncStatusQuery.queryKey)?.lastAttemptAt ?? null;
      const { queued } = await adminApi.steamSyncNow();
      if (!queued) toast.info(m.admin_builds_sync_waiting(), { id: toastId, duration: Number.POSITIVE_INFINITY });
      for (let attempt = 0; attempt < SYNC_POLL_MAX; attempt += 1) {
        await wait(SYNC_POLL_MS);
        const status = await queryClient.fetchQuery({ ...steamSyncStatusQuery, staleTime: 0 });
        if (!status.lastAttemptAt || status.lastAttemptAt === before) continue;
        await refresh();
        if (status.status === 'failed') {
          toast.error(m.admin_builds_sync_failed(), { id: toastId, description: status.lastError ?? undefined });
        } else {
          toast.success(syncResultText(status), { id: toastId });
        }
        return;
      }
      toast.info(m.admin_builds_sync_slow(), { id: toastId });
    } catch (error) {
      toast.dismiss(toastId);
      reportFailure(error, m.admin_builds_sync_failed());
    } finally {
      setSyncing(false);
    }
  };

  return (
    <div className="grid gap-5">
      <AdminHeader
        title={m.admin_builds_title()}
        description={m.admin_builds_description()}
        actions={
          <>
            <Button
              variant="secondary"
              loading={syncing}
              icon={<Icon icon={RefreshCw} size={18} />}
              onClick={() => void syncNow()}
            >
              {m.admin_builds_sync()}
            </Button>
            <Button icon={<Icon icon={Plus} size={18} />} onClick={() => setEditing('new')}>
              {m.admin_builds_add()}
            </Button>
          </>
        }
      />

      <SteamStatus />

      {data && unfiltered && data.total > 0 && !hasCurrent ? (
        <Banner tone="warning" title={m.admin_builds_no_current_title()}>
          {m.admin_builds_no_current_text()}
        </Banner>
      ) : null}

      <FilterBar
        search={
          <SearchField
            label={m.admin_builds_search()}
            value={params.q}
            maxLength={60}
            onCommit={(value) => patch({ q: value || undefined })}
          />
        }
        activeCount={filtersActive}
        onClear={() => patch({ q: undefined, current: undefined, breaking: undefined, steam: undefined })}
        sort={
          <SortSelect<GameBuildSort>
            value={params.sort}
            options={SORTS.map((value) => ({ value, label: sortLabel(value) }))}
            onChange={(value) => patch({ sort: value === 'newest' ? undefined : value })}
          />
        }
      >
        <FilterSelect<YesNo>
          label={m.admin_builds_filter_current()}
          allLabel={m.admin_builds_filter_current_any()}
          value={search.current}
          options={[
            { value: 'yes', label: m.admin_builds_filter_current_yes() },
            { value: 'no', label: m.admin_builds_filter_current_no() },
          ]}
          onChange={(value) => patch({ current: value })}
        />
        <FilterSelect<YesNo>
          label={m.admin_builds_filter_breaking()}
          allLabel={m.admin_builds_filter_breaking_any()}
          value={search.breaking}
          options={[
            { value: 'yes', label: m.admin_builds_filter_breaking_yes() },
            { value: 'no', label: m.admin_builds_filter_breaking_no() },
          ]}
          onChange={(value) => patch({ breaking: value })}
        />
        <FilterSelect<YesNo>
          label={m.admin_builds_filter_steam()}
          allLabel={m.admin_builds_filter_steam_any()}
          value={search.steam}
          options={[
            { value: 'yes', label: m.admin_builds_filter_steam_yes() },
            { value: 'no', label: m.admin_builds_filter_steam_no() },
          ]}
          onChange={(value) => patch({ steam: value })}
        />
      </FilterBar>

      {list.isPending ? (
        <SkeletonGroup label={m.admin_builds_loading()} className="grid gap-2">
          {Array.from({ length: 8 }, (_, index) => (
            <Skeleton key={index} className="h-11 w-full" />
          ))}
        </SkeletonGroup>
      ) : list.isError ? (
        <PanelError error={list.error} onRetry={() => void list.refetch()} />
      ) : !data || data.total === 0 ? (
        unfiltered ? (
          <EmptyState
            icon={<Icon icon={Gamepad2} size={32} />}
            title={m.admin_builds_empty_title()}
            description={m.admin_builds_empty_text()}
            action={
              <Button icon={<Icon icon={Plus} size={18} />} onClick={() => setEditing('new')}>
                {m.admin_builds_add()}
              </Button>
            }
          />
        ) : (
          <EmptyState
            icon={<Icon icon={Search} size={32} />}
            title={m.admin_builds_no_results_title()}
            description={m.admin_builds_no_results_text()}
            action={
              <Button
                variant="secondary"
                onClick={() => patch({ q: undefined, current: undefined, breaking: undefined, steam: undefined })}
              >
                {m.admin_builds_filters_clear()}
              </Button>
            }
          />
        )
      ) : (
        <div
          className={cn('grid gap-4 transition-opacity duration-(--dur-fast)', list.isPlaceholderData && 'opacity-60')}
        >
          <TableScroller label={m.admin_builds_table_label()}>
            <table className="w-full border-collapse text-sm">
              <caption className="sr-only">{m.admin_builds_table_label()}</caption>
              <thead className="bg-sunken">
                <tr>
                  <th scope="col" className={thClasses}>
                    {m.admin_builds_col_label()}
                  </th>
                  <th scope="col" className={thClasses}>
                    {m.admin_builds_col_released()}
                  </th>
                  <th scope="col" className={thClasses}>
                    {m.admin_builds_col_steam()}
                  </th>
                  <th scope="col" className={thClasses}>
                    {m.admin_builds_col_notes()}
                  </th>
                  <th scope="col" className={thClasses}>
                    <span className="sr-only">{m.admin_col_actions()}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.items.map((build) => {
                  const notes = htmlToText(build.notesHtml);
                  return (
                    <tr key={build.id} className="border-t border-border">
                      <th scope="row" className={`${tdClasses} text-start font-semibold text-fg`}>
                        <span className="flex flex-wrap items-center gap-2">
                          {build.label}
                          {build.isCurrent ? (
                            <Badge variant="success" size="sm" icon={<Icon icon={Star} size={12} />}>
                              {m.admin_builds_current()}
                            </Badge>
                          ) : null}
                          {build.isBreaking ? (
                            <Badge variant="warning" size="sm" icon={<Icon icon={Zap} size={12} />}>
                              {m.admin_builds_breaking()}
                            </Badge>
                          ) : null}
                        </span>
                      </th>
                      <td className={`${tdClasses} whitespace-nowrap text-fg-muted`}>
                        <time dateTime={build.releasedAt}>{formatDay(build.releasedAt)}</time>
                      </td>
                      <td className={`${tdClasses} font-mono text-xs text-fg-muted`}>{build.steamBuildId ?? '-'}</td>
                      <td className={`${tdClasses} max-w-80 text-fg-muted`}>
                        <span className="line-clamp-2">{notes || '-'}</span>
                      </td>
                      <td className={`${tdClasses} text-end`}>
                        <Menu
                          align="end"
                          trigger={
                            <Button variant="icon" size="sm" aria-label={m.admin_actions_for({ name: build.label })}>
                              <Icon icon={MoreHorizontal} size={18} />
                            </Button>
                          }
                          items={[
                            {
                              type: 'item',
                              label: m.admin_action_edit(),
                              icon: <Icon icon={Pencil} size={16} />,
                              onSelect: () => setEditing(build),
                            },
                            ...(build.isCurrent
                              ? []
                              : [
                                  {
                                    type: 'item' as const,
                                    label: m.admin_builds_make_current(),
                                    icon: <Icon icon={Flag} size={16} />,
                                    onSelect: () => makeCurrent.mutate(build),
                                  },
                                ]),
                            {
                              type: 'item',
                              label: build.isBreaking
                                ? m.admin_builds_unmark_breaking()
                                : m.admin_builds_mark_breaking(),
                              icon: <Icon icon={Zap} size={16} />,
                              onSelect: () =>
                                build.isBreaking ? setBreaking.mutate({ build, value: false }) : setMarkBreaking(build),
                            },
                            { type: 'separator' },
                            {
                              type: 'item',
                              label: m.admin_action_delete(),
                              icon: <Icon icon={Trash2} size={16} />,
                              danger: true,
                              onSelect: () => setDeleting(build),
                            },
                          ]}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </TableScroller>
          <PageNav
            page={data.page}
            totalPages={data.totalPages}
            total={data.total}
            pageSize={data.pageSize}
            sizes={GAME_BUILD_PAGE_SIZES}
            onPage={(page) => patch({ page: page > 1 ? page : undefined })}
            onPageSize={(size) => patch({ size: size === GAME_BUILD_PAGE_SIZES[0] ? undefined : size })}
          />
        </div>
      )}

      <GameBuildDialog build={editing} hasCurrent={hasCurrent} onClose={() => setEditing(null)} onSaved={refresh} />
      <ConfirmDialog
        open={deleting !== null}
        onOpenChange={(open) => {
          if (!open) setDeleting(null);
        }}
        title={m.admin_builds_delete_title({ label: deleting?.label ?? '' })}
        description={m.admin_builds_delete_text()}
        confirmLabel={m.admin_action_delete()}
        tone="danger"
        onConfirm={() => (deleting ? remove(deleting) : undefined)}
      />
      <ConfirmDialog
        open={markBreaking !== null}
        onOpenChange={(open) => {
          if (!open) setMarkBreaking(null);
        }}
        title={m.admin_builds_breaking_confirm_title({ label: markBreaking?.label ?? '' })}
        description={m.admin_builds_breaking_warning_text()}
        confirmLabel={m.admin_builds_mark_breaking()}
        onConfirm={async () => {
          if (markBreaking) await setBreaking.mutateAsync({ build: markBreaking, value: true });
        }}
      />
    </div>
  );
}

function syncResultText(status: SteamSyncStatus): string {
  const label = status.gameBuild?.label ?? '';
  switch (status.lastResult) {
    case 'created':
      return m.admin_builds_sync_created({ label });
    case 'adopted':
    case 'switched':
      return m.admin_builds_current_done({ label });
    case 'relabelled':
      return m.admin_builds_sync_relabelled({ label });
    default:
      return m.admin_builds_sync_unchanged({ buildId: status.buildId ?? '-' });
  }
}

/** One line under the heading: when Steam was last checked, or why the last check failed. */
function SteamStatus() {
  const query = useQuery(steamSyncStatusQuery);
  const status = query.data;
  if (!status) return <Skeleton className="h-5 w-80 max-w-full" />;
  if (status.status === 'failed') {
    return (
      <Banner tone="warning" title={m.admin_builds_sync_failing_title()}>
        {m.admin_builds_sync_failing_text({
          error: status.lastError ?? '-',
          next: status.nextAttemptAt ? formatInstant(status.nextAttemptAt) : '-',
        })}
      </Banner>
    );
  }
  return (
    <p className="min-h-5 text-sm text-fg-muted">
      {status.status === 'never' || !status.lastSuccessAt
        ? m.admin_builds_sync_never()
        : m.admin_builds_sync_status({
            checked: formatInstant(status.lastSuccessAt),
            buildId: status.buildId ?? '-',
            updated: status.buildUpdatedAt ? formatInstant(status.buildUpdatedAt) : '-',
          })}
    </p>
  );
}

interface BuildValues {
  label: string;
  steamBuildId: string;
  releasedAt: string;
  isBreaking: boolean;
  isCurrent: boolean;
  /** Markdown source of the notes (prefilled from `notesMd`; emptying it removes the notes). */
  notes: string;
}

function valuesOf(build: GameBuild | 'new', hasCurrent: boolean): BuildValues {
  if (build === 'new') {
    return {
      label: '',
      steamBuildId: '',
      releasedAt: todayIso(),
      isBreaking: false,
      isCurrent: !hasCurrent,
      notes: '',
    };
  }
  return {
    label: build.label,
    steamBuildId: build.steamBuildId ?? '',
    releasedAt: build.releasedAt,
    isBreaking: build.isBreaking,
    isCurrent: build.isCurrent,
    notes: build.notesMd ?? '',
  };
}

interface GameBuildDialogProps {
  build: GameBuild | 'new' | null;
  hasCurrent: boolean;
  onClose: () => void;
  onSaved: () => Promise<unknown>;
}

function GameBuildDialog({ build, hasCurrent, onClose, onSaved }: GameBuildDialogProps) {
  return (
    <Dialog
      open={build !== null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      title={
        build === 'new' || build === null ? m.admin_builds_add() : m.admin_builds_edit_title({ label: build.label })
      }
      description={m.admin_builds_form_description()}
      size="md"
      sheetOnMobile
    >
      {build !== null ? (
        <GameBuildForm
          key={build === 'new' ? 'new' : build.id}
          build={build}
          hasCurrent={hasCurrent}
          onDone={onClose}
          onSaved={onSaved}
        />
      ) : null}
    </Dialog>
  );
}

function GameBuildForm({
  build,
  hasCurrent,
  onDone,
  onSaved,
}: {
  build: GameBuild | 'new';
  hasCurrent: boolean;
  onDone: () => void;
  onSaved: () => Promise<unknown>;
}) {
  const formId = useId();
  const [values, setValues] = useState<BuildValues>(() => valuesOf(build, hasCurrent));
  const [errors, setErrors] = useState<Partial<Record<'label' | 'steamBuildId' | 'releasedAt', string>>>({});
  const [saving, setSaving] = useState(false);
  const isNew = build === 'new';
  const set = <K extends keyof BuildValues>(key: K, value: BuildValues[K]) =>
    setValues((previous) => ({ ...previous, [key]: value }));
  const breakingNow = values.isBreaking && (isNew || !build.isBreaking);

  const validate = () => {
    const next: typeof errors = {};
    if (!values.label.trim()) next.label = m.admin_error_required();
    if (values.steamBuildId.trim() && !ADMIN_LIMITS.steamBuildId.test(values.steamBuildId.trim()))
      next.steamBuildId = m.admin_builds_error_steam();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(values.releasedAt)) next.releasedAt = m.admin_error_date();
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (saving || !validate()) return;
    setSaving(true);
    const steam = values.steamBuildId.trim();
    const notes = values.notes.trim();
    try {
      if (isNew) {
        await adminApi.createGameBuild({
          label: values.label.trim(),
          ...(steam ? { steamBuildId: steam } : {}),
          releasedAt: values.releasedAt,
          isBreaking: values.isBreaking,
          isCurrent: values.isCurrent,
          ...(notes ? { notesMd: notes } : {}),
        });
      } else {
        await adminApi.updateGameBuild(build.id, {
          label: values.label.trim(),
          steamBuildId: steam || null,
          releasedAt: values.releasedAt,
          isBreaking: values.isBreaking,
          ...(values.isCurrent !== build.isCurrent ? { isCurrent: values.isCurrent } : {}),
          ...(notes !== (build.notesMd ?? '').trim() ? { notesMd: notes || null } : {}),
        });
      }
      await onSaved();
      notify.success(m.admin_builds_saved({ label: values.label.trim() }));
      onDone();
    } catch (error) {
      reportFailure(error, m.admin_builds_save_failed());
    } finally {
      setSaving(false);
    }
  };

  return (
    <form id={formId} noValidate onSubmit={(event) => void submit(event)} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label={m.admin_builds_field_label()}
          description={m.admin_builds_field_label_hint()}
          error={errors.label}
        >
          <Input
            value={values.label}
            maxLength={ADMIN_LIMITS.buildLabelMax}
            required
            autoFocus
            onChange={(event) => set('label', event.currentTarget.value)}
          />
        </Field>
        <Field label={m.admin_builds_field_released()} error={errors.releasedAt}>
          <Input
            type="date"
            value={values.releasedAt}
            required
            onChange={(event) => set('releasedAt', event.currentTarget.value)}
          />
        </Field>
      </div>
      <Field
        label={m.admin_builds_field_steam()}
        description={m.admin_builds_field_steam_hint()}
        error={errors.steamBuildId}
        optional
      >
        <Input
          inputMode="numeric"
          value={values.steamBuildId}
          maxLength={12}
          onChange={(event) => set('steamBuildId', event.currentTarget.value)}
        />
      </Field>
      <Switch
        label={m.admin_builds_field_current()}
        description={m.admin_builds_field_current_hint()}
        checked={values.isCurrent}
        disabled={!isNew && build.isCurrent}
        onCheckedChange={(checked) => set('isCurrent', checked)}
      />
      <Switch
        label={m.admin_builds_field_breaking()}
        description={m.admin_builds_field_breaking_hint()}
        checked={values.isBreaking}
        onCheckedChange={(checked) => set('isBreaking', checked)}
      />
      {breakingNow ? (
        <Banner tone="warning" title={m.admin_builds_breaking_warning_title()}>
          {m.admin_builds_breaking_warning_text()}
        </Banner>
      ) : null}
      <Field label={m.admin_builds_field_notes()} description={m.admin_markdown_hint()} optional>
        <Textarea
          value={values.notes}
          maxLength={ADMIN_LIMITS.buildNotesMax}
          minRows={3}
          onChange={(event) => set('notes', event.currentTarget.value)}
        />
      </Field>
      <div className="flex flex-wrap justify-end gap-2">
        <DialogClose render={<Button variant="secondary" disabled={saving} />}>{m.admin_action_cancel()}</DialogClose>
        <Button type="submit" loading={saving}>
          {isNew ? m.admin_builds_add() : m.admin_action_save()}
        </Button>
      </div>
    </form>
  );
}
