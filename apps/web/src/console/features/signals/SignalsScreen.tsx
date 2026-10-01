/**
 * `/signals` (PLAN §4.3, §7.3; research/03 §6.12): every signal, newest first, grouped by day
 * (Today · Yesterday · dates), with the filters All · Mentions · Updates · My mods · Ranger,
 * «Mark all as read», per-row «Mark as read», «Download» on new versions and a link to the
 * notification settings. The list refreshes itself on the SSE `notification` event (keys under
 * `['notifications']`); older pages load on demand (cursor).
 */
import { formatDate, type Locale } from '@sotf/i18n';
import { BELOW_MD_QUERY, useMediaQuery } from '@sotf/ui';
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { EmptyState } from '@sotf/ui/empty-state';
import { ErrorState } from '@sotf/ui/error-state';
import { Icon } from '@sotf/ui/icons';
import { useQueryClient, useSuspenseInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { Check, CheckCheck, Radio, Settings2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { st } from '../../../islands/signals/i18n.ts';
import { localTimeZone, SignalRow } from '../../../islands/signals/SignalRow.tsx';
import { track } from '../../../scripts/beacon.ts';
import { ArtState } from '../../components/ArtState.tsx';
import { SwipeRow } from '../../components/SwipeRow.tsx';
import { useDocumentTitle } from '../../hooks/use-document-title.ts';
import { useMe } from '../../hooks/use-me.ts';
import { activeLocale } from '../../lib/messages.ts';
import { notify } from '../../lib/notify.ts';
import { setUnreadCount } from '../../lib/stream.ts';
import { failureDescription } from '../settings/errors.ts';
import {
  markRead,
  markReadInCache,
  type NotificationDTO,
  SIGNAL_FILTERS,
  type SignalFilter,
  signalKeys,
  signalsMessagesQuery,
  signalsQuery,
} from './api.ts';

const FILTER_LABELS = {
  all: 'signals_filter_all',
  mentions: 'signals_filter_mentions',
  updates: 'signals_filter_updates',
  my_mods: 'signals_filter_my_mods',
  ranger: 'signals_filter_ranger',
} as const satisfies Record<SignalFilter, Parameters<typeof st>[0]>;

function dayKey(iso: string, timeZone: string): string {
  try {
    return new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).format(
      new Date(iso),
    );
  } catch {
    return iso.slice(0, 10);
  }
}

function dayLabel(key: string, sample: string, locale: Locale, timeZone: string, now: number): string {
  if (key === dayKey(new Date(now).toISOString(), timeZone)) return st('signals_group_today');
  if (key === dayKey(new Date(now - 86_400_000).toISOString(), timeZone)) return st('signals_group_yesterday');
  return formatDate(locale, sample, 'long', { timeZone });
}

interface DayGroup {
  key: string;
  label: string;
  items: NotificationDTO[];
}

export function SignalsScreen({ filter }: { filter: SignalFilter }) {
  const locale = activeLocale();
  useSuspenseQuery(signalsMessagesQuery(locale));
  const me = useMe();
  const queryClient = useQueryClient();
  const query = useSuspenseInfiniteQuery(signalsQuery(filter));
  const [marking, setMarking] = useState(false);
  const phone = useMediaQuery(BELOW_MD_QUERY);
  useDocumentTitle(st('signals_page_title'));

  const timeZone = useMemo(() => localTimeZone(), []);
  const now = query.dataUpdatedAt || Date.now();
  const items = useMemo(() => {
    const seen = new Set<number>();
    return query.data.pages
      .flatMap((page) => page.items)
      .filter((item) => {
        if (seen.has(item.id)) return false;
        seen.add(item.id);
        return true;
      });
  }, [query.data]);
  const groups = useMemo(() => {
    const result: DayGroup[] = [];
    for (const item of items) {
      const key = dayKey(item.createdAt, timeZone);
      const last = result.at(-1);
      if (last?.key === key) last.items.push(item);
      else result.push({ key, label: dayLabel(key, item.createdAt, locale, timeZone, now), items: [item] });
    }
    return result;
  }, [items, timeZone, locale, now]);

  const unread = me.unreadNotifications;

  const readOne = (signal: NotificationDTO) => {
    if (signal.readAt !== null) return;
    markReadInCache(queryClient, [signal.id]);
    setUnreadCount(queryClient, Math.max(0, unread - 1));
    markRead(queryClient, { ids: [signal.id] }).catch(() => {
      void queryClient.invalidateQueries({ queryKey: signalKeys.all });
    });
  };

  const readAll = async () => {
    setMarking(true);
    const previous = unread;
    markReadInCache(queryClient, 'all');
    setUnreadCount(queryClient, 0);
    try {
      await markRead(queryClient, { all: true });
      notify.success(st('signals_marked_all'));
    } catch (failure) {
      setUnreadCount(queryClient, previous);
      void queryClient.invalidateQueries({ queryKey: signalKeys.all });
      notify.error(st('signals_mark_failed'), { description: failureDescription(failure) });
    } finally {
      setMarking(false);
    }
  };

  const open = (signal: NotificationDTO) => {
    track('notification_open', { props: { type: signal.type, source: 'signals' } });
    readOne(signal);
  };

  const filterNav = (
    <nav
      aria-label={st('signals_filter_label')}
      className="-mx-1 min-w-0 flex-1 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <ul className="flex gap-2">
        {SIGNAL_FILTERS.map((value) => {
          const active = value === filter;
          return (
            <li key={value}>
              <Link
                to="/signals"
                search={value === 'all' ? {} : { filter: value }}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'inline-flex h-10 items-center whitespace-nowrap rounded-full border px-4 text-sm font-semibold transition-colors md:h-9',
                  active
                    ? 'border-primary bg-primary text-primary-fg'
                    : 'border-border-strong text-fg-muted hover:bg-fg/8 hover:text-fg',
                )}
              >
                {st(FILTER_LABELS[value])}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );

  const markAll = phone ? (
    <Button
      variant="icon"
      onClick={() => void readAll()}
      loading={marking}
      disabled={unread === 0}
      aria-label={st('signals_mark_all_read')}
      title={st('signals_mark_all_read')}
      className="size-11 shrink-0 rounded-full border border-border-strong"
    >
      <Icon icon={CheckCheck} size={18} />
    </Button>
  ) : (
    <Button
      variant="secondary"
      icon={<Icon icon={CheckCheck} size={18} />}
      onClick={() => void readAll()}
      loading={marking}
      disabled={unread === 0}
    >
      {st('signals_mark_all_read')}
    </Button>
  );

  return (
    <div className="grid gap-4 md:gap-6">
      <header className="flex flex-wrap items-end justify-between gap-4 max-md:hidden">
        <div className="grid gap-1">
          <p className="readout text-signal">{st('signals_page_readout')}</p>
          <h1 className="font-display-caps text-display-xs text-fg">{st('signals_page_title')}</h1>
          <p className="max-w-prose text-sm text-fg-muted">{st('signals_page_description')}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {markAll}
          <Link
            to="/settings/notifications"
            className="inline-flex size-10 items-center justify-center rounded-md border border-border-strong text-fg-muted hover:bg-fg/8 hover:text-fg"
            aria-label={st('signals_preferences')}
            title={st('signals_preferences')}
          >
            <Icon icon={Settings2} size={18} />
          </Link>
        </div>
      </header>
      <h1 className="sr-only md:hidden">{st('signals_page_title')}</h1>

      {/* Phones: the area title lives in the top bar; filters and the bulk action share one row. */}
      <div className="flex items-center gap-2 md:block">
        {filterNav}
        {phone ? (
          <>
            {markAll}
            <Link
              to="/settings/notifications"
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-border-strong text-fg-muted active:bg-fg/8"
              aria-label={st('signals_preferences')}
            >
              <Icon icon={Settings2} size={18} />
            </Link>
          </>
        ) : null}
      </div>

      {items.length === 0 ? (
        filter === 'all' ? (
          <ArtState art="camp" title={st('signals_empty_title')} description={st('signals_empty_text')} />
        ) : (
          <EmptyState
            icon={<Icon icon={Radio} size={32} />}
            title={st('signals_empty_filtered_title')}
            description={st('signals_empty_filtered_text')}
            action={
              <Link
                to="/signals"
                search={{}}
                className="inline-flex h-10 items-center rounded-md border border-border-strong px-4 text-sm font-semibold text-fg hover:bg-fg/8"
              >
                {st('signals_show_all')}
              </Link>
            }
          />
        )
      ) : (
        <div className="grid gap-6">
          {groups.map((group) => (
            <section key={group.key} aria-labelledby={`signals-day-${group.key}`} className="grid gap-1">
              <h2 id={`signals-day-${group.key}`} className="readout px-3 text-fg-subtle">
                {group.label}
              </h2>
              <ul className="grid gap-0.5 rounded-lg border border-border bg-surface p-1">
                {group.items.map((signal) => (
                  <li key={signal.id} className="overflow-hidden rounded-md">
                    <SwipeRow
                      peekKey={signal.readAt === null ? 'signals-list' : undefined}
                      start={
                        signal.readAt === null
                          ? {
                              label: st('signals_mark_read'),
                              icon: <Check size={20} aria-hidden="true" />,
                              tone: 'success',
                              onTrigger: () => readOne(signal),
                            }
                          : undefined
                      }
                    >
                      <SignalRow
                        signal={signal}
                        locale={locale}
                        now={now}
                        onOpen={open}
                        actions={
                          signal.readAt === null ? (
                            <Button
                              variant="icon"
                              size="sm"
                              aria-label={st('signals_mark_read')}
                              title={st('signals_mark_read')}
                              onClick={() => readOne(signal)}
                            >
                              <Icon icon={Check} size={16} />
                            </Button>
                          ) : undefined
                        }
                      />
                    </SwipeRow>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <div className="flex justify-center">
            {query.hasNextPage ? (
              <Button variant="secondary" onClick={() => void query.fetchNextPage()} loading={query.isFetchingNextPage}>
                {query.isFetchingNextPage ? st('signals_loading_more') : st('signals_load_more')}
              </Button>
            ) : (
              <p className="text-sm text-fg-subtle">{st('signals_end')}</p>
            )}
          </div>
          {query.isFetchNextPageError ? (
            <ErrorState
              headingLevel={3}
              title={st('signals_more_error')}
              description={st('signals_error_text')}
              onRetry={() => void query.fetchNextPage()}
            />
          ) : null}
        </div>
      )}
    </div>
  );
}
