/**
 * `/moderation/users` — user search (WP-82); `?q=<text>&page=<n>`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { RangerRouteError } from '../../../features/ranger/shared.tsx';
import { UsersScreen } from '../../../features/ranger/UsersScreen.tsx';

interface UsersSearch {
  q?: string;
  page?: number;
}

export const Route = createFileRoute('/moderation/users/')({
  staticData: { title: () => m.ranger_users_title() },
  validateSearch: (search: Record<string, unknown>): UsersSearch => {
    const q = typeof search.q === 'string' ? search.q.trim().slice(0, 100) : '';
    const page = typeof search.page === 'number' ? search.page : Number(search.page);
    return {
      ...(q ? { q } : {}),
      ...(Number.isSafeInteger(page) && page > 1 && page <= 10_000 ? { page } : {}),
    };
  },
  errorComponent: RangerRouteError,
  component: UsersRoute,
});

function UsersRoute() {
  const search = Route.useSearch();
  return <UsersScreen q={search.q ?? ''} page={search.page ?? 1} />;
}
