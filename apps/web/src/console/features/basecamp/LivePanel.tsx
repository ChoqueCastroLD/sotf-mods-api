/**
 * «Live» (PLAN §7.5, research/03 §6.9): what is happening to my mods right now.
 *
 * - Signals about my mods (new reviews, comments, bug and field reports, milestones, status
 *   changes) arrive over the console's SSE stream: the shell's `notification` event invalidates
 *   `['notifications', …]`, so the `my_mods` list below refetches by itself.
 * - Downloads have no stream event (a download is not worth a push per user): the live counters of
 *   my busiest published mods are polled every minute while the tab is visible, and each increase
 *   becomes a «● 2 downloads · Auto Pickup · just now» entry.
 *
 * A new signal also refreshes the summary and the inbox (counts and «Needs attention» change).
 */
import { formatRelativeTime } from '@sotf/i18n/format';
import { EmptyState } from '@sotf/ui/empty-state';
import { Icon } from '@sotf/ui/icons';
import { LiveDot } from '@sotf/ui/live-dot';
import { useInfiniteQuery, useQueries, useQuery, useQueryClient } from '@tanstack/react-query';
import { Download, Radio } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { SignalRow } from '../../../islands/signals/SignalRow.tsx';
import { useConsoleLocale } from '../../hooks/use-console-locale.ts';
import { useMe } from '../../hooks/use-me.ts';
import { useStreamStatus } from '../../hooks/use-stream.ts';
import { signalsMessagesQuery, signalsQuery } from '../signals/api.ts';
import { basecampKeys, type ModRow, modLiveQuery } from './api.ts';
import { number } from './format.ts';
import { bt } from './i18n.ts';
import { PanelSkeleton } from './shared.tsx';

/** Mods whose counters are polled (the busiest published ones). */
export const LIVE_MODS_MAX = 5;
export const LIVE_POLL_MS = 60_000;
const SIGNALS_SHOWN = 6;
const DOWNLOAD_EVENTS_KEPT = 6;

interface DownloadEvent {
  id: string;
  modId: number;
  name: string;
  count: number;
  at: number;
}

function useDownloadPulses(rows: readonly ModRow[]): DownloadEvent[] {
  const watched = rows
    .filter((row) => row.mod.status === 'published')
    .sort((a, b) => b.downloads7d - a.downloads7d)
    .slice(0, LIVE_MODS_MAX);
  const results = useQueries({
    queries: watched.map((row) => ({
      ...modLiveQuery(row.mod.id),
      refetchInterval: LIVE_POLL_MS,
      refetchIntervalInBackground: false,
    })),
  });
  const last = useRef(new Map<number, number>());
  const [events, setEvents] = useState<DownloadEvent[]>([]);
  const signature = results
    .map((result, index) => `${watched[index]?.mod.id}:${result.data?.downloads ?? ''}`)
    .join('|');

  useEffect(() => {
    const fresh: DownloadEvent[] = [];
    results.forEach((result, index) => {
      const row = watched[index];
      const downloads = result.data?.downloads;
      if (!row || downloads === undefined) return;
      const previous = last.current.get(row.mod.id);
      last.current.set(row.mod.id, downloads);
      if (previous !== undefined && downloads > previous) {
        const at = Date.now();
        fresh.push({
          id: `${row.mod.id}:${at}`,
          modId: row.mod.id,
          name: row.mod.name,
          count: downloads - previous,
          at,
        });
      }
    });
    if (fresh.length > 0) setEvents((current) => [...fresh, ...current].slice(0, DOWNLOAD_EVENTS_KEPT));
  }, [signature]);

  return events;
}

/** Refreshes the summary and the inbox when a new signal arrives (the unread count changes). */
function useRefreshOnSignals(): void {
  const queryClient = useQueryClient();
  const unread = useMe().unreadNotifications;
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    void queryClient.invalidateQueries({ queryKey: basecampKeys.overview });
    void queryClient.invalidateQueries({ queryKey: basecampKeys.inboxAll });
  }, [unread, queryClient]);
}

function StreamState() {
  const status = useStreamStatus();
  if (status === 'open') return <LiveDot label={bt('basecamp_live_connected')} />;
  const label =
    status === 'polling'
      ? bt('basecamp_live_polling')
      : status === 'idle'
        ? bt('basecamp_live_paused')
        : bt('basecamp_live_connecting');
  return (
    <span className="inline-flex items-center gap-2 text-sm text-fg-muted">
      <span aria-hidden="true" className="size-2.5 rounded-full bg-fg-subtle" />
      {label}
    </span>
  );
}

function useNow(intervalMs: number): number {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), intervalMs);
    return () => window.clearInterval(timer);
  }, [intervalMs]);
  return now;
}

export function LivePanel({ mods }: { mods: readonly ModRow[] }) {
  const { locale } = useConsoleLocale();
  const now = useNow(30_000);
  useRefreshOnSignals();
  const downloads = useDownloadPulses(mods);
  const messages = useQuery(signalsMessagesQuery(locale));
  const signals = useInfiniteQuery({
    ...signalsQuery('my_mods'),
    select: (data) => data.pages.flatMap((page) => page.items).slice(0, SIGNALS_SHOWN),
  });

  const loading = signals.isPending || messages.isPending;
  const items = signals.data ?? [];
  const empty = !loading && items.length === 0 && downloads.length === 0;

  return (
    <div className="grid gap-3">
      <div className="flex items-center justify-between gap-2">
        <StreamState />
      </div>
      <div aria-live="polite" aria-relevant="additions" className="grid gap-1">
        {downloads.map((event) => (
          <div key={event.id} className="flex items-start gap-3 rounded-md px-3 py-2">
            <span
              aria-hidden="true"
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal"
            >
              <Icon icon={Download} size={16} />
            </span>
            <div className="min-w-0">
              <p className="text-sm text-fg">
                {bt('basecamp_live_downloads', { count: event.count, display: number(event.count), name: event.name })}
              </p>
              <time dateTime={new Date(event.at).toISOString()} className="text-xs text-fg-subtle tabular-nums">
                {formatRelativeTime(locale, event.at, { now })}
              </time>
            </div>
          </div>
        ))}
      </div>
      {loading ? (
        <PanelSkeleton rows={3} />
      ) : signals.isError ? (
        <p className="text-sm text-fg-muted">{bt('basecamp_live_signals_failed')}</p>
      ) : (
        <div className="grid gap-1">
          {items.map((signal) => (
            <SignalRow key={signal.id} signal={signal} locale={locale} compact now={now} />
          ))}
        </div>
      )}
      {empty ? (
        <EmptyState
          headingLevel={3}
          icon={<Icon icon={Radio} size={28} />}
          title={bt('basecamp_live_empty_title')}
          description={bt('basecamp_live_empty_text')}
          className="py-6"
        />
      ) : null}
    </div>
  );
}
