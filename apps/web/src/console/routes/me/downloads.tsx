/**
 * `/me/downloads` — my download history and available updates (WP-81, T0-17). Search, the «updates» filter, the sort order and the page
 * are kept in the URL (`?q=`, `?filter=updates`, `?sort=`, `?page=`, `?size=`). The screen lives in
 * `features/me`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { downloadsQuery } from '../../features/me/api.ts';
import { DownloadsScreen } from '../../features/me/DownloadsScreen.tsx';
import { searchOf, stateOf, validateMeSearch } from '../../features/me/search.ts';

export const Route = createFileRoute('/me/downloads')({
  staticData: { title: () => m.me_downloads_title() },
  validateSearch: validateMeSearch,
  loader: ({ context }) => context.queryClient.ensureQueryData(downloadsQuery),
  component: MeListRoute,
});

function MeListRoute() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  return (
    <DownloadsScreen
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
