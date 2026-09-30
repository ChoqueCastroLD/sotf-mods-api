/**
 * `/basecamp/mods` — «My mods» (WP-80, PLAN §7.5): every mod and build in any status. `?status=`,
 * `?q=` and `?sort=` keep the filters in the URL.
 */
import { createFileRoute } from '@tanstack/react-router';
import { coAuthoredQuery, invitesQuery, type ModStatus, modsQuery } from '../../../features/basecamp/api.ts';
import { bt, loadBasecampMessages } from '../../../features/basecamp/i18n.ts';
import { loadKnowledgeMessages } from '../../../features/basecamp/knowledge-i18n.ts';
import { ModsScreen } from '../../../features/basecamp/ModsScreen.tsx';
import { MOD_SORTS, type ModSort } from '../../../features/basecamp/mod-sorts.ts';
import { MOD_STATUS_VALUES } from '../../../features/basecamp/search.ts';

interface ModsSearch {
  status?: ModStatus;
  q?: string;
  sort?: ModSort;
}

function oneOf<T extends string>(values: readonly T[], value: unknown): value is T {
  return typeof value === 'string' && (values as readonly string[]).includes(value);
}

export const Route = createFileRoute('/basecamp/mods/')({
  validateSearch: (search: Record<string, unknown>): ModsSearch => ({
    ...(oneOf(MOD_STATUS_VALUES, search.status) ? { status: search.status } : {}),
    ...(typeof search.q === 'string' && search.q.trim() ? { q: search.q.slice(0, 80) } : {}),
    ...(oneOf(MOD_SORTS, search.sort) && search.sort !== 'downloads' ? { sort: search.sort } : {}),
  }),
  loader: async ({ context }) => {
    await Promise.all([
      loadBasecampMessages(),
      loadKnowledgeMessages(),
      context.queryClient.ensureQueryData(modsQuery),
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
      filters={{ status: search.status ?? 'all', q: search.q ?? '', sort: search.sort ?? 'downloads' }}
      onFilters={(next) =>
        void navigate({
          search: (current) => {
            const merged = { ...current, ...next };
            return {
              ...(merged.status && merged.status !== 'all' ? { status: merged.status } : {}),
              ...(merged.q?.trim() ? { q: merged.q } : {}),
              ...(merged.sort && merged.sort !== 'downloads' ? { sort: merged.sort } : {}),
            };
          },
          replace: true,
          resetScroll: false,
        })
      }
    />
  );
}
