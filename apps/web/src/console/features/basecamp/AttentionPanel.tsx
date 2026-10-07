/**
 * «Needs attention» of the dashboard: what the creator should do next, grouped by kind (tabs with
 * counts), sorted (most urgent, most items, mod name) and paginated by the server
 * (`GET /studio/attention`). Every row says what is wrong and links to where it is fixed; a row can
 * be dismissed (saved on the account, so it stays hidden on every device until its count changes)
 * and brought back from the «Dismissed» view. Filters live in the URL of the dashboard.
 */
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { EmptyState } from '@sotf/ui/empty-state';
import { Icon } from '@sotf/ui/icons';
import { Select } from '@sotf/ui/select';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { AlertTriangle, ArrowRight, CheckCircle2, Info, type LucideIcon, Undo2, X } from 'lucide-react';
import { useState } from 'react';
import { ListPager } from '../../components/ListPager.tsx';
import { useMe } from '../../hooks/use-me.ts';
import { api } from '../../lib/api.ts';
import { notify } from '../../lib/notify.ts';
import { patchMe } from '../settings/api.ts';
import {
  ATTENTION_KINDS,
  ATTENTION_SORTS,
  type Attention,
  type AttentionKind,
  type AttentionSort,
  attentionQuery,
  basecampKeys,
} from './api.ts';
import { number } from './format.ts';
import { bt } from './i18n.ts';
import { attentionAction, attentionKindLabel, attentionText } from './labels.ts';
import { PanelError, PanelSkeleton, reportFailure } from './shared.tsx';

export const ATTENTION_PAGE_SIZE = 5;

export interface AttentionState {
  kind: AttentionKind | null;
  sort: AttentionSort;
  page: number;
  dismissed: boolean;
}

const SEVERITY: Readonly<Record<AttentionKind, 'danger' | 'warning' | 'info'>> = {
  broken_on_current: 'danger',
  rejected: 'danger',
  unanswered_questions: 'warning',
  unanswered_reviews: 'warning',
  missing_gallery: 'info',
  missing_source: 'info',
};

function iconOf(kind: AttentionKind): { icon: LucideIcon; className: string } {
  switch (SEVERITY[kind]) {
    case 'danger':
      return { icon: AlertTriangle, className: 'text-danger' };
    case 'warning':
      return { icon: AlertTriangle, className: 'text-warning' };
    case 'info':
      return { icon: Info, className: 'text-signal' };
  }
}

/** Key stored for a dismissed row (`kind:modId:count`): it comes back when the count changes. */
export function attentionKey(item: Attention): string {
  return `${item.kind}:${item.mod.id}:${item.count}`;
}

function sortLabel(sort: AttentionSort): string {
  switch (sort) {
    case 'urgency':
      return bt('basecamp_attention_sort_urgency');
    case 'count':
      return bt('basecamp_attention_sort_count');
    case 'name':
      return bt('basecamp_attention_sort_name');
  }
}

function ActionLink({ item }: { item: Attention }) {
  const modId = String(item.mod.id);
  const className =
    'inline-flex min-h-8 items-center gap-1 rounded-sm text-sm font-medium text-link hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus';
  const content = (
    <>
      {attentionAction(item.kind)}
      <Icon icon={ArrowRight} size={14} className="rtl:rotate-180" />
    </>
  );
  switch (item.kind) {
    case 'broken_on_current':
      return item.mod.kind === 'build' ? (
        <Link to="/dashboard/mods/$modId" params={{ modId }} className={className}>
          {content}
        </Link>
      ) : (
        <Link to="/dashboard/mods/$modId/new-version" params={{ modId }} className={className}>
          {content}
        </Link>
      );
    case 'unanswered_questions':
      return (
        <Link to="/dashboard/inbox" search={{ type: 'comment', mod: item.mod.id }} className={className}>
          {content}
        </Link>
      );
    case 'unanswered_reviews':
      return (
        <Link to="/dashboard/inbox" search={{ type: 'review', mod: item.mod.id }} className={className}>
          {content}
        </Link>
      );
    case 'missing_gallery':
      return (
        <Link to="/dashboard/mods/$modId" params={{ modId }} search={{ tab: 'media' }} className={className}>
          {content}
        </Link>
      );
    case 'missing_source':
      return (
        <Link to="/dashboard/mods/$modId" params={{ modId }} search={{ tab: 'listing' }} className={className}>
          {content}
        </Link>
      );
    case 'rejected':
      return (
        <Link to="/dashboard/mods/$modId" params={{ modId }} search={{ tab: 'settings' }} className={className}>
          {content}
        </Link>
      );
  }
}

/** Saves the dismissed list on the account and refreshes the panel. */
function useDismissals() {
  const queryClient = useQueryClient();
  const stored = useMe().settings.dismissedAttention ?? [];

  const save = async (next: string[]): Promise<void> => {
    const settings = await api.me.updateSettings({ body: { dismissedAttention: next.slice(-300) } });
    patchMe(queryClient, (me) => ({ ...me, settings }));
    await queryClient.invalidateQueries({ queryKey: basecampKeys.attentionAll });
  };

  const restore = async (key: string): Promise<void> => {
    try {
      await save(stored.filter((entry) => entry !== key));
    } catch (error) {
      reportFailure(error, bt('basecamp_attention_restore_failed'));
    }
  };

  const dismiss = async (item: Attention): Promise<void> => {
    const key = attentionKey(item);
    try {
      await save([...stored.filter((entry) => entry !== key), key]);
      notify.success(bt('basecamp_attention_dismissed'), {
        description: item.mod.name,
        action: { label: bt('basecamp_attention_undo'), onClick: () => void restore(key) },
      });
    } catch (error) {
      reportFailure(error, bt('basecamp_attention_dismiss_failed'));
    }
  };

  return { dismiss, restore };
}

export function AttentionPanel({
  state,
  onState,
}: {
  state: AttentionState;
  onState: (next: Partial<AttentionState>) => void;
}) {
  const query = useQuery(
    attentionQuery({
      sort: state.sort,
      page: state.page,
      pageSize: ATTENTION_PAGE_SIZE,
      ...(state.kind ? { kind: state.kind } : {}),
      ...(state.dismissed ? { dismissed: true } : {}),
    }),
  );
  const { dismiss, restore } = useDismissals();
  const [busyKey, setBusyKey] = useState<string | null>(null);
  const data = query.data;

  if (query.isPending) return <PanelSkeleton rows={4} className="[&>*]:h-14" />;
  if (query.isError || !data) return <PanelError error={query.error} onRetry={() => void query.refetch()} />;

  const kinds = ATTENTION_KINDS.filter((kind) => (data.counts[kind] ?? 0) > 0);
  const totalAll = kinds.reduce((sum, kind) => sum + (data.counts[kind] ?? 0), 0);
  const nothingAtAll = totalAll === 0 && !state.dismissed;
  const busy = query.isFetching && !query.isPending;

  const act = async (item: Attention, run: (item: Attention) => Promise<void>) => {
    const key = attentionKey(item);
    setBusyKey(key);
    try {
      await run(item);
    } finally {
      setBusyKey(null);
    }
  };

  return (
    <div className="grid gap-4">
      {nothingAtAll && data.dismissedCount === 0 ? (
        <EmptyState
          headingLevel={3}
          icon={<Icon icon={CheckCircle2} size={28} className="text-success" />}
          title={bt('basecamp_attention_empty_title')}
          description={bt('basecamp_attention_empty_text')}
          className="py-6"
        />
      ) : (
        <>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <fieldset className="relative -mx-1 flex min-w-0 flex-1 gap-1.5 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <legend className="sr-only">{bt('basecamp_attention_filter')}</legend>
              {[null, ...kinds].map((kind) => {
                const active = state.kind === kind;
                const count = kind === null ? totalAll : (data.counts[kind] ?? 0);
                return (
                  <button
                    key={kind ?? 'all'}
                    type="button"
                    aria-pressed={active}
                    onClick={() => onState({ kind, page: 1 })}
                    className={cn(
                      'inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border px-3 text-sm transition-colors duration-(--dur-fast) max-md:h-11',
                      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus',
                      active
                        ? 'border-primary bg-primary-soft text-fg'
                        : 'border-border text-fg-muted hover:border-border-strong hover:text-fg',
                    )}
                  >
                    {kind === null ? bt('basecamp_attention_all') : attentionKindLabel(kind)}
                    <span className="tabular-nums text-fg-subtle">{number(count)}</span>
                  </button>
                );
              })}
            </fieldset>
            <Select<AttentionSort>
              label={bt('basecamp_attention_sort_label')}
              hideLabel
              size="sm"
              className="w-full md:w-44"
              options={ATTENTION_SORTS.map((sort) => ({ value: sort, label: sortLabel(sort) }))}
              value={state.sort}
              onValueChange={(value) => onState({ sort: value ?? 'urgency', page: 1 })}
            />
          </div>

          {data.items.length === 0 ? (
            <p className="py-6 text-center text-sm text-fg-muted">
              {state.dismissed ? bt('basecamp_attention_none_dismissed') : bt('basecamp_attention_none_here')}
            </p>
          ) : (
            <ul
              aria-busy={busy}
              className={cn('divide-y divide-border border-y border-border transition-opacity', busy && 'opacity-60')}
            >
              {data.items.map((item) => {
                const { icon, className } = iconOf(item.kind);
                const key = attentionKey(item);
                return (
                  <li key={key} className="flex items-start gap-3 py-2.5 sm:items-center">
                    <Icon icon={icon} size={18} className={cn('mt-0.5 shrink-0 sm:mt-0', className)} />
                    <div className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-4">
                      <p className="min-w-0 flex-1 text-sm text-fg">
                        {attentionText(item.kind, item.count, item.mod.name)}
                      </p>
                      <span className="shrink-0 whitespace-nowrap">
                        <ActionLink item={item} />
                      </span>
                    </div>
                    {state.dismissed ? (
                      <Button
                        variant="ghost"
                        size="sm"
                        loading={busyKey === key}
                        icon={<Icon icon={Undo2} size={14} />}
                        onClick={() => void act(item, (entry) => restore(attentionKey(entry)))}
                      >
                        {bt('basecamp_attention_restore')}
                      </Button>
                    ) : (
                      <Button
                        variant="icon"
                        size="sm"
                        loading={busyKey === key}
                        aria-label={bt('basecamp_attention_dismiss_named', { name: item.mod.name })}
                        title={bt('basecamp_attention_dismiss')}
                        className="shrink-0 text-fg-subtle hover:text-fg max-md:size-11"
                        onClick={() => void act(item, dismiss)}
                      >
                        <Icon icon={X} size={16} />
                      </Button>
                    )}
                  </li>
                );
              })}
            </ul>
          )}

          <ListPager
            page={data.page}
            totalPages={data.totalPages}
            total={data.total}
            pageSize={ATTENTION_PAGE_SIZE}
            onPage={(page) => onState({ page })}
            busy={busy}
            className="border-t-0 pt-0"
          />
        </>
      )}

      {data.dismissedCount > 0 || state.dismissed ? (
        <button
          type="button"
          onClick={() => onState({ dismissed: !state.dismissed, kind: null, page: 1 })}
          className="justify-self-start rounded-sm text-sm text-link hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
        >
          {state.dismissed
            ? bt('basecamp_attention_back')
            : bt('basecamp_attention_show_dismissed', { count: data.dismissedCount })}
        </button>
      ) : null}
    </div>
  );
}
