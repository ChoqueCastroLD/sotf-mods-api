/**
 * «Recent activity» of the dashboard: the latest notifications about my mods (new reviews and
 * comments, status changes, new versions), newest first, with a link to all notifications. They
 * arrive over the console's stream: a new notification refetches the list and refreshes the
 * summary, the attention list and the inbox, whose counts change with it.
 */
import { EmptyState } from '@sotf/ui/empty-state';
import { Icon } from '@sotf/ui/icons';
import { useInfiniteQuery, useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { Bell } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { SignalRow } from '../../../islands/signals/SignalRow.tsx';
import { useConsoleLocale } from '../../hooks/use-console-locale.ts';
import { useMe } from '../../hooks/use-me.ts';
import { signalsMessagesQuery, signalsQuery } from '../signals/api.ts';
import { basecampKeys } from './api.ts';
import { bt } from './i18n.ts';
import { PanelSkeleton } from './shared.tsx';

const SHOWN = 6;

/** Refreshes the summary, the attention list and the inbox when a new notification arrives. */
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
    void queryClient.invalidateQueries({ queryKey: basecampKeys.attentionAll });
    void queryClient.invalidateQueries({ queryKey: basecampKeys.inboxAll });
  }, [unread, queryClient]);
}

function useNow(intervalMs: number): number {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), intervalMs);
    return () => window.clearInterval(timer);
  }, [intervalMs]);
  return now;
}

export function ActivityPanel() {
  const { locale } = useConsoleLocale();
  const now = useNow(60_000);
  useRefreshOnSignals();
  const messages = useQuery(signalsMessagesQuery(locale));
  const signals = useInfiniteQuery({
    ...signalsQuery('my_mods'),
    select: (data) => data.pages.flatMap((page) => page.items).slice(0, SHOWN),
  });

  if (signals.isPending || messages.isPending) return <PanelSkeleton rows={4} />;
  if (signals.isError) return <p className="text-sm text-fg-muted">{bt('basecamp_live_signals_failed')}</p>;
  const items = signals.data ?? [];
  if (items.length === 0) {
    return (
      <EmptyState
        headingLevel={3}
        icon={<Icon icon={Bell} size={28} />}
        title={bt('basecamp_activity_empty_title')}
        description={bt('basecamp_activity_empty_text')}
        className="py-6"
      />
    );
  }
  return (
    <div className="grid gap-3">
      <div className="grid gap-0.5">
        {items.map((signal) => (
          <SignalRow key={signal.id} signal={signal} locale={locale} compact now={now} />
        ))}
      </div>
      <Link to={'/notifications' as '/'} className="justify-self-start rounded-sm text-sm text-link hover:underline">
        {bt('basecamp_activity_all')}
      </Link>
    </div>
  );
}
