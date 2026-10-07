/**
 * `/moderation/jams/$jamId` — jam editor: overview and phase control, details, schedule, rules,
 * entry moderation, results and a preview of the public page (`?tab=`). The entries tab keeps its
 * page, filters and sort in the same URL. Screen: `features/jams/JamEditorScreen.tsx`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute, notFound } from '@tanstack/react-router';
import { AdminRouteError } from '../../../features/admin/shared.tsx';
import { adminJamQuery } from '../../../features/jams/api.ts';
import { TAB_IDS, type TabId } from '../../../features/jams/form.ts';
import { JamEditorScreen } from '../../../features/jams/JamEditorScreen.tsx';
import { ENTRY_SORTS, ENTRY_STATUSES } from '../../../features/jams/JamEntriesPanel.tsx';
import { choiceParam, pageParam, sizeParam, textParam } from '../../../features/ranger/search.ts';
import { loadUploadMessages } from '../../../features/upload/i18n.ts';

interface EditorSearch {
  tab?: Exclude<TabId, 'overview'>;
  status?: (typeof ENTRY_STATUSES)[number];
  q?: string;
  sort?: (typeof ENTRY_SORTS)[number];
  page?: number;
  size?: 25 | 50 | 100;
}

export const Route = createFileRoute('/moderation/jams/$jamId')({
  staticData: { title: () => m.jams_editor_title() },
  validateSearch: (search: Record<string, unknown>): EditorSearch => {
    const tab = choiceParam(search.tab, TAB_IDS, 'overview') as EditorSearch['tab'];
    const entries = tab === 'entries';
    const status = entries ? choiceParam(search.status, ENTRY_STATUSES) : undefined;
    const q = entries ? textParam(search.q, 100) : undefined;
    const sort = entries ? choiceParam(search.sort, ENTRY_SORTS) : undefined;
    const page = entries ? pageParam(search.page) : undefined;
    const size = entries ? sizeParam(search.size, 25) : undefined;
    return {
      ...(tab ? { tab } : {}),
      ...(status ? { status } : {}),
      ...(q ? { q } : {}),
      ...(sort ? { sort } : {}),
      ...(page ? { page } : {}),
      ...(size ? { size } : {}),
    };
  },
  loader: ({ context, params }) => {
    const id = Number(params.jamId);
    if (!Number.isInteger(id) || id < 1) throw notFound();
    return Promise.all([context.queryClient.ensureQueryData(adminJamQuery(id)), loadUploadMessages()]);
  },
  errorComponent: AdminRouteError,
  component: JamEditorScreen,
});
