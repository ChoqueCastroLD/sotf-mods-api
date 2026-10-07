/**
 * `/moderation/jams` — every Mod Jam and «New jam». Screen: `features/jams/JamsAdminScreen.tsx`.
 * Search state in the URL: `q`, `phase`, `sort`, `page`, `size`.
 */
import { JAM_PHASES } from '@sotf/contracts/jams';
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { AdminRouteError } from '../../../features/admin/shared.tsx';
import { adminJamsQuery } from '../../../features/jams/api.ts';
import {
  JAM_LIST_SORTS,
  JAM_PAGE_SIZES,
  type JamListView,
  JamsAdminScreen,
} from '../../../features/jams/JamsAdminScreen.tsx';
import { choiceParam, pageParam, textParam } from '../../../features/ranger/search.ts';

export const Route = createFileRoute('/moderation/jams/')({
  staticData: { title: () => m.jams_admin_title() },
  validateSearch: (search: Record<string, unknown>): JamListView => {
    const q = textParam(search.q, 100);
    const phase = choiceParam(search.phase, JAM_PHASES);
    const sort = choiceParam(search.sort, JAM_LIST_SORTS, 'recent') as JamListView['sort'];
    const page = pageParam(search.page);
    const size = Number(search.size);
    return {
      ...(q ? { q } : {}),
      ...(phase ? { phase } : {}),
      ...(sort ? { sort } : {}),
      ...(page ? { page } : {}),
      ...((JAM_PAGE_SIZES as readonly number[]).includes(size) && size !== 10 ? { size } : {}),
    };
  },
  loader: ({ context }) => context.queryClient.ensureQueryData(adminJamsQuery),
  errorComponent: AdminRouteError,
  component: JamsRoute,
});

function JamsRoute() {
  return <JamsAdminScreen view={Route.useSearch()} />;
}
