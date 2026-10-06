/**
 * Data of `/notifications` (WP-81 on the WP-43 backend). Keys live under `['notifications', …]`, so the
 * SSE `notification` event of the shell (`lib/stream.ts`) refetches the list by itself:
 *
 *   ['notifications', 'list', filter]   cursor pages of one filter
 *   ['notifications', 'unread-count']   the shell's unread count (shared with `/me`)
 *
 * The words of a signal come from the `signals` catalogue shared with the header bell
 * (`islands/signals/i18n.ts`), loaded for the console locale by `signalsMessagesQuery`.
 */
import type { NotificationDTO } from '@sotf/contracts/notifications';
import type { Locale } from '@sotf/i18n';
import { type InfiniteData, infiniteQueryOptions, type QueryClient, queryOptions } from '@tanstack/react-query';
import { loadSignalsMessages } from '../../../islands/signals/i18n.ts';
import { api } from '../../lib/api.ts';
import { setUnreadCount } from '../../lib/stream.ts';
import type { SignalFilter } from './search.ts';

export { isSignalFilter, SIGNAL_FILTERS, type SignalFilter } from './search.ts';

export type { NotificationDTO };

export const PAGE_SIZE = 30;

export interface SignalPage {
  items: NotificationDTO[];
  nextCursor: string | null;
}

export const signalKeys = {
  all: ['notifications'] as const,
  lists: ['notifications', 'list'] as const,
  list: (filter: SignalFilter) => ['notifications', 'list', filter] as const,
} as const;

export const signalsQuery = (filter: SignalFilter) =>
  infiniteQueryOptions({
    queryKey: signalKeys.list(filter),
    queryFn: ({ pageParam, signal }): Promise<SignalPage> =>
      api.notifications.list(
        { query: { filter, limit: PAGE_SIZE, ...(pageParam ? { cursor: pageParam } : {}) } },
        { signal },
      ),
    initialPageParam: null as string | null,
    getNextPageParam: (last) => last.nextCursor,
    staleTime: 30_000,
  });

/** The `signals` catalogue of `locale` (never invalidated by the stream: not under `notifications`). */
export const signalsMessagesQuery = (locale: Locale) =>
  queryOptions({
    queryKey: ['i18n', 'signals', locale] as const,
    queryFn: async () => {
      try {
        await loadSignalsMessages(locale);
      } catch {
        await loadSignalsMessages('en');
      }
      return locale;
    },
    staleTime: Number.POSITIVE_INFINITY,
    gcTime: Number.POSITIVE_INFINITY,
  });

type Pages = InfiniteData<SignalPage, string | null>;

/** Marks signals read in every cached list (optimistic; `ids = 'all'` for everything). */
export function markReadInCache(queryClient: QueryClient, ids: readonly number[] | 'all'): void {
  const stamp = new Date().toISOString();
  const wanted = ids === 'all' ? null : new Set(ids);
  queryClient.setQueriesData<Pages>({ queryKey: signalKeys.lists }, (data) =>
    data
      ? {
          ...data,
          pages: data.pages.map((page) => ({
            ...page,
            items: page.items.map((item) =>
              item.readAt === null && (wanted === null || wanted.has(item.id)) ? { ...item, readAt: stamp } : item,
            ),
          })),
        }
      : data,
  );
}

/** `POST /notifications/read` and the new unread count everywhere. */
export async function markRead(queryClient: QueryClient, body: { ids: number[] } | { all: true }): Promise<number> {
  const { count } = await api.notifications.markRead({ body });
  setUnreadCount(queryClient, count);
  return count;
}
