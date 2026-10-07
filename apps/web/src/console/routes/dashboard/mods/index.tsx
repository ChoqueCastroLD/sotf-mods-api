/**
 * `/dashboard/mods`: «My mods» (WP-80, PLAN §7.5), filtered, sorted and paginated by the server.
 * `?status=`, `?category=`, `?q=`, `?sort=`, `?page=` and `?size=` keep the state in the URL.
 */
import { createFileRoute } from '@tanstack/react-router';
import { coAuthoredQuery, invitesQuery, type ModStatus, modsPageQuery } from '../../../features/basecamp/api.ts';
import { bt, loadBasecampMessages } from '../../../features/basecamp/i18n.ts';
import { loadKnowledgeMessages } from '../../../features/basecamp/knowledge-i18n.ts';
import { type ModsFilters, ModsScreen } from '../../../features/basecamp/ModsScreen.tsx';
import {
  DEFAULT_MOD_PAGE_SIZE,
  DEFAULT_MOD_SORT,
  MOD_PAGE_SIZES,
  MOD_SORTS,
  type ModSort,
} from '../../../features/basecamp/mod-sorts.ts';
import { MOD_STATUS_VALUES } from '../../../features/basecamp/search.ts';

interface ModsSearch {
  status?: ModStatus;
  category?: string;
  q?: string;
  sort?: ModSort;
  page?: number;
  size?: number;
}

function oneOf<T extends string>(values: readonly T[], value: unknown): value is T {
  return typeof value === 'string' && (values as readonly string[]).includes(value);
}

function intOf(value: unknown): number | undefined {
  const n = typeof value === 'number' ? value : typeof value === 'string' ? Number(value) : Number.NaN;
  return Number.isSafeInteger(n) ? n : undefined;
}

export const Route = createFileRoute('/dashboard/mods/')({
  validateSearch: (search: Record<string, unknown>): ModsSearch => {
    const page = intOf(search.page);
    const size = intOf(search.size);
    return {
      ...(oneOf(MOD_STATUS_VALUES, search.status) ? { status: search.status } : {}),
      ...(typeof search.category === 'string' && /^[a-z0-9-]{1,60}$/.test(search.category)
        ? { category: search.category }
        : {}),
      ...(typeof search.q === 'string' && search.q.trim() ? { q: search.q.slice(0, 80) } : {}),
      ...(oneOf(MOD_SORTS, search.sort) && search.sort !== DEFAULT_MOD_SORT ? { sort: search.sort } : {}),
      ...(page !== undefined && page > 1 && page < 10_000 ? { page } : {}),
      ...(size !== undefined && (MOD_PAGE_SIZES as readonly number[]).includes(size) && size !== DEFAULT_MOD_PAGE_SIZE
        ? { size }
        : {}),
    };
  },
  loaderDeps: ({ search }) => search,
  loader: async ({ context, deps }) => {
    await Promise.all([
      loadBasecampMessages(),
      loadKnowledgeMessages(),
      context.queryClient.ensureQueryData(
        modsPageQuery({
          sort: deps.sort ?? DEFAULT_MOD_SORT,
          page: deps.page ?? 1,
          pageSize: deps.size ?? DEFAULT_MOD_PAGE_SIZE,
          ...(deps.q ? { q: deps.q } : {}),
          ...(deps.status ? { status: deps.status } : {}),
          ...(deps.category ? { category: deps.category } : {}),
        }),
      ),
      context.queryClient.ensureQueryData(coAuthoredQuery),
      context.queryClient.ensureQueryData(invitesQuery),
    ]);
  },
  staticData: { title: () => bt('basecamp_mods_title') },
  component: ModsRoute,
});

function ModsRoute() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  return (
    <ModsScreen
      filters={{
        status: search.status ?? 'all',
        category: search.category ?? '',
        q: search.q ?? '',
        sort: search.sort ?? DEFAULT_MOD_SORT,
        page: search.page ?? 1,
        pageSize: search.size ?? DEFAULT_MOD_PAGE_SIZE,
      }}
      onFilters={(next) =>
        void navigate({
          search: (current) => {
            const merged: ModsFilters = {
              status: current.status ?? 'all',
              category: current.category ?? '',
              q: current.q ?? '',
              sort: current.sort ?? DEFAULT_MOD_SORT,
              page: current.page ?? 1,
              pageSize: current.size ?? DEFAULT_MOD_PAGE_SIZE,
              ...next,
            };
            return {
              ...(merged.status !== 'all' ? { status: merged.status } : {}),
              ...(merged.category ? { category: merged.category } : {}),
              ...(merged.q.trim() ? { q: merged.q } : {}),
              ...(merged.sort !== DEFAULT_MOD_SORT ? { sort: merged.sort } : {}),
              ...(merged.page > 1 ? { page: merged.page } : {}),
              ...(merged.pageSize !== DEFAULT_MOD_PAGE_SIZE ? { size: merged.pageSize } : {}),
            };
          },
          replace: true,
          resetScroll: false,
        })
      }
    />
  );
}
