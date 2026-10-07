/**
 * `/moderation/admin/game-builds` — game builds (WP-83). The screen lives in `features/admin/GameBuildsScreen.tsx`.
 * The URL keeps the search, filters, sort and page: `?q=&current=yes|no&breaking=yes|no&steam=yes|no&sort=&page=&size=`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import {
  GAME_BUILD_PAGE_SIZES,
  GAME_BUILD_SORTS,
  type GameBuildSort,
  gameBuildsPageQuery,
  steamSyncStatusQuery,
} from '../../../features/admin/api.ts';
import { GameBuildsScreen, type GameBuildsSearch, paramsOf } from '../../../features/admin/GameBuildsScreen.tsx';
import { AdminRouteError } from '../../../features/admin/shared.tsx';

const YES_NO = ['yes', 'no'] as const;

function oneOf<T extends string>(values: readonly T[], value: unknown): value is T {
  return typeof value === 'string' && (values as readonly string[]).includes(value);
}

export function validateGameBuildsSearch(search: Record<string, unknown>): GameBuildsSearch {
  const q = typeof search.q === 'string' ? search.q.trim().slice(0, 60) : '';
  const page = Number(search.page);
  const size = Number(search.size);
  return {
    ...(q ? { q } : {}),
    ...(oneOf(YES_NO, search.current) ? { current: search.current } : {}),
    ...(oneOf(YES_NO, search.breaking) ? { breaking: search.breaking } : {}),
    ...(oneOf(YES_NO, search.steam) ? { steam: search.steam } : {}),
    ...(oneOf(GAME_BUILD_SORTS, search.sort) && search.sort !== 'newest' ? { sort: search.sort as GameBuildSort } : {}),
    ...(Number.isSafeInteger(page) && page > 1 && page <= 10_000 ? { page } : {}),
    ...((GAME_BUILD_PAGE_SIZES as readonly number[]).includes(size) && size !== GAME_BUILD_PAGE_SIZES[0]
      ? { size }
      : {}),
  };
}

export const Route = createFileRoute('/moderation/admin/game-builds')({
  staticData: { title: () => m.admin_builds_title() },
  validateSearch: validateGameBuildsSearch,
  loaderDeps: ({ search }) => search,
  loader: ({ context, deps }) =>
    Promise.all([
      context.queryClient.ensureQueryData(gameBuildsPageQuery(paramsOf(deps))),
      context.queryClient.ensureQueryData(steamSyncStatusQuery),
    ]),
  errorComponent: AdminRouteError,
  component: GameBuildsRoute,
});

function GameBuildsRoute() {
  return <GameBuildsScreen search={Route.useSearch()} />;
}
