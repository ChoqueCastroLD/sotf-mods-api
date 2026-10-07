/**
 * `/dashboard/inbox`: comments, bug reports and reviews on my mods with inline answers (WP-80,
 * PLAN §7.5), filtered, sorted and paginated by the server. `?type=` filters one kind, `?mod=` one
 * of my mods, `?state=all` includes the answered and resolved ones, `?sort=oldest` reverses the
 * order, `?page=` and `?size=` page through the list.
 */
import { createFileRoute } from '@tanstack/react-router';
import { InboxScreen } from '../../features/basecamp/InboxScreen.tsx';
import { bt, loadBasecampMessages } from '../../features/basecamp/i18n.ts';
import {
  DEFAULT_INBOX_PAGE_SIZE,
  INBOX_PAGE_SIZES,
  type InboxType,
  isInboxType,
} from '../../features/basecamp/search.ts';

interface InboxSearch {
  type?: InboxType;
  state?: 'all';
  mod?: number;
  sort?: 'oldest';
  page?: number;
  size?: number;
}

function modIdOf(value: unknown): number | undefined {
  const id = typeof value === 'number' ? value : Number(value);
  return Number.isSafeInteger(id) && id > 0 ? id : undefined;
}

function intOf(value: unknown): number | undefined {
  const n = typeof value === 'number' ? value : typeof value === 'string' ? Number(value) : Number.NaN;
  return Number.isSafeInteger(n) ? n : undefined;
}

export const Route = createFileRoute('/dashboard/inbox')({
  validateSearch: (search: Record<string, unknown>): InboxSearch => {
    const page = intOf(search.page);
    const size = intOf(search.size);
    return {
      ...(isInboxType(search.type) ? { type: search.type } : {}),
      ...(search.state === 'all' ? { state: 'all' as const } : {}),
      ...(modIdOf(search.mod) ? { mod: modIdOf(search.mod) } : {}),
      ...(search.sort === 'oldest' ? { sort: 'oldest' as const } : {}),
      ...(page !== undefined && page > 1 && page < 10_000 ? { page } : {}),
      ...(size !== undefined &&
      (INBOX_PAGE_SIZES as readonly number[]).includes(size) &&
      size !== DEFAULT_INBOX_PAGE_SIZE
        ? { size }
        : {}),
    };
  },
  loader: () => loadBasecampMessages(),
  staticData: { title: () => bt('basecamp_inbox_title') },
  component: InboxRoute,
});

function InboxRoute() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  return (
    <InboxScreen
      filters={{
        type: search.type ?? null,
        state: search.state ?? 'open',
        modId: search.mod ?? null,
        sort: search.sort ?? 'newest',
        page: search.page ?? 1,
        pageSize: search.size ?? DEFAULT_INBOX_PAGE_SIZE,
      }}
      onFilters={(next) =>
        void navigate({
          search: (current) => {
            const merged = {
              type: current.type ?? null,
              state: current.state ?? 'open',
              modId: current.mod ?? null,
              sort: current.sort ?? 'newest',
              page: current.page ?? 1,
              pageSize: current.size ?? DEFAULT_INBOX_PAGE_SIZE,
              ...next,
            };
            return {
              ...(merged.type ? { type: merged.type } : {}),
              ...(merged.state === 'all' ? { state: 'all' as const } : {}),
              ...(merged.modId ? { mod: merged.modId } : {}),
              ...(merged.sort === 'oldest' ? { sort: 'oldest' as const } : {}),
              ...(merged.page > 1 ? { page: merged.page } : {}),
              ...(merged.pageSize !== DEFAULT_INBOX_PAGE_SIZE ? { size: merged.pageSize } : {}),
            };
          },
          replace: true,
          resetScroll: false,
        })
      }
    />
  );
}
