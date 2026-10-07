/**
 * `/moderation/users` — user search (WP-82); `?q=<text>&role=&status=&verified=&sort=&page=&size=`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { USERS_PAGE_SIZE, type UsersView } from '../../../features/ranger/api.ts';
import {
  choiceParam,
  pageParam,
  sizeParam,
  textParam,
  USER_ROLES,
  USER_SORTS,
  USER_STATUSES,
  USER_VERIFIED,
} from '../../../features/ranger/search.ts';
import { RangerRouteError } from '../../../features/ranger/shared.tsx';
import { UsersScreen } from '../../../features/ranger/UsersScreen.tsx';

export const Route = createFileRoute('/moderation/users/')({
  staticData: { title: () => m.ranger_users_title() },
  validateSearch: (search: Record<string, unknown>): UsersView => {
    const q = textParam(search.q, 100);
    const page = pageParam(search.page);
    const size = sizeParam(search.size, USERS_PAGE_SIZE as 25);
    const role = choiceParam(search.role, USER_ROLES);
    const status = choiceParam(search.status, USER_STATUSES);
    const verified = choiceParam(search.verified, USER_VERIFIED);
    const sort = choiceParam(search.sort, USER_SORTS, 'newest');
    return {
      ...(q ? { q } : {}),
      ...(page ? { page } : {}),
      ...(size ? { size } : {}),
      ...(role ? { role } : {}),
      ...(status ? { status } : {}),
      ...(verified ? { verified } : {}),
      ...(sort ? { sort } : {}),
    };
  },
  errorComponent: RangerRouteError,
  component: UsersRoute,
});

function UsersRoute() {
  return <UsersScreen view={Route.useSearch()} />;
}
