/**
 * `/me/following` — followed mods with their update state (WP-81). Search, the «updates» filter, the sort order and the page
 * are kept in the URL (`?q=`, `?filter=updates`, `?sort=`, `?page=`, `?size=`). The screen lives in
 * `features/me`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { backpackQuery } from '../../features/me/api.ts';
import { BackpackScreen } from '../../features/me/BackpackScreen.tsx';
import { searchOf, stateOf, validateMeSearch } from '../../features/me/search.ts';

export const Route = createFileRoute('/me/following')({
  staticData: { title: () => m.me_backpack_title() },
  validateSearch: validateMeSearch,
  loader: ({ context }) => context.queryClient.ensureQueryData(backpackQuery),
  component: MeListRoute,
});

function MeListRoute() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  return (
    <BackpackScreen
      state={stateOf(search)}
      onChange={(next) =>
        void navigate({
          search: (current) => searchOf({ ...stateOf(current), ...next }),
          replace: true,
          resetScroll: false,
        })
      }
    />
  );
}
