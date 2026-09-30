/**
 * `/basecamp/mods/$modId` — the mod editor (WP-80, PLAN §7.5 «Gestión de mods»): listing, media,
 * versions, compatibility and status. `?tab=` is the open tab. The owner view is loaded before the
 * screen renders; a mod that is not mine (or does not exist) ends in «Off the map».
 */
import { createFileRoute, notFound } from '@tanstack/react-router';
import { studioModQuery } from '../../../../features/basecamp/api.ts';
import { ModEditorScreen } from '../../../../features/basecamp/editor/ModEditorScreen.tsx';
import { type EditorTab, isEditorTab } from '../../../../features/basecamp/editor/tabs.ts';
import { bt, loadBasecampMessages } from '../../../../features/basecamp/i18n.ts';
import { loadBundlesMessages } from '../../../../features/bundles/i18n.ts';
import { loadUploadMessages } from '../../../../features/upload/i18n.ts';

interface EditorSearch {
  tab?: EditorTab;
}

function modIdOf(raw: string): number {
  const id = /^\d{1,10}$/.test(raw) ? Number(raw) : Number.NaN;
  if (!Number.isSafeInteger(id) || id <= 0) throw notFound();
  return id;
}

export const Route = createFileRoute('/basecamp/mods/$modId/')({
  validateSearch: (search: Record<string, unknown>): EditorSearch =>
    isEditorTab(search.tab) && search.tab !== 'listing' ? { tab: search.tab } : {},
  loader: async ({ context, params }) => {
    await Promise.all([
      loadBasecampMessages(),
      loadUploadMessages(),
      loadBundlesMessages(),
      context.queryClient.ensureQueryData(studioModQuery(modIdOf(params.modId))),
    ]);
  },
  staticData: { title: () => bt('basecamp_editor_fallback_title') },
  component: EditorRoute,
});

function EditorRoute() {
  const { modId } = Route.useParams();
  const { tab } = Route.useSearch();
  const navigate = Route.useNavigate();
  return (
    <ModEditorScreen
      modId={modIdOf(modId)}
      tab={tab ?? 'listing'}
      onTab={(next) =>
        void navigate({ search: next === 'listing' ? {} : { tab: next }, replace: true, resetScroll: false })
      }
    />
  );
}
