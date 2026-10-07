/**
 * `/notifications`: the full list of notifications (WP-81), numbered pages from the server.
 * `?filter=mentions|updates|my_mods|ranger` narrows it by kind (PLAN §4.3), `?unread=1` keeps the
 * unread ones, `?page=` and `?size=` page through it. The screen lives in `features/signals`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { signalsMessagesQuery, signalsPageQuery } from '../../features/signals/api.ts';
import { SignalsScreen } from '../../features/signals/SignalsScreen.tsx';
import {
  DEFAULT_SIGNAL_PAGE_SIZE,
  isSignalFilter,
  SIGNAL_PAGE_SIZES,
  type SignalFilter,
} from '../../features/signals/search.ts';
import { activeLocale } from '../../lib/messages.ts';

interface SignalsSearch {
  filter?: Exclude<SignalFilter, 'all'>;
  unread?: 1;
  page?: number;
  size?: number;
}

function intOf(value: unknown): number | undefined {
  const n = typeof value === 'number' ? value : typeof value === 'string' ? Number(value) : Number.NaN;
  return Number.isSafeInteger(n) ? n : undefined;
}

export const Route = createFileRoute('/notifications/')({
  staticData: { title: () => m.common_term_signals() },
  validateSearch: (search: Record<string, unknown>): SignalsSearch => {
    const page = intOf(search.page);
    const size = intOf(search.size);
    return {
      ...(isSignalFilter(search.filter) && search.filter !== 'all' ? { filter: search.filter } : {}),
      ...(search.unread === 1 || search.unread === '1' || search.unread === true ? { unread: 1 as const } : {}),
      ...(page !== undefined && page > 1 && page < 10_000 ? { page } : {}),
      ...(size !== undefined &&
      (SIGNAL_PAGE_SIZES as readonly number[]).includes(size) &&
      size !== DEFAULT_SIGNAL_PAGE_SIZE
        ? { size }
        : {}),
    };
  },
  loaderDeps: ({ search }) => search,
  loader: ({ context, deps }) =>
    Promise.all([
      context.queryClient.ensureQueryData(signalsMessagesQuery(activeLocale())),
      context.queryClient.ensureQueryData(
        signalsPageQuery({
          filter: deps.filter ?? 'all',
          unread: deps.unread === 1,
          page: deps.page ?? 1,
          pageSize: deps.size ?? DEFAULT_SIGNAL_PAGE_SIZE,
        }),
      ),
    ]),
  component: SignalsRoute,
});

function SignalsRoute() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  return (
    <SignalsScreen
      filters={{
        filter: search.filter ?? 'all',
        unread: search.unread === 1,
        page: search.page ?? 1,
        pageSize: search.size ?? DEFAULT_SIGNAL_PAGE_SIZE,
      }}
      onFilters={(next) =>
        void navigate({
          search: (current) => {
            const merged = {
              filter: (current.filter ?? 'all') as SignalFilter,
              unread: current.unread === 1,
              page: current.page ?? 1,
              pageSize: current.size ?? DEFAULT_SIGNAL_PAGE_SIZE,
              ...next,
            };
            return {
              ...(merged.filter !== 'all' ? { filter: merged.filter } : {}),
              ...(merged.unread ? { unread: 1 as const } : {}),
              ...(merged.page > 1 ? { page: merged.page } : {}),
              ...(merged.pageSize !== DEFAULT_SIGNAL_PAGE_SIZE ? { size: merged.pageSize } : {}),
            };
          },
          replace: true,
          resetScroll: false,
        })
      }
    />
  );
}
