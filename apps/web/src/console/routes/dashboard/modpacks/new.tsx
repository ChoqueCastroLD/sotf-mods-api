/** `/dashboard/modpacks/new` — a new modpack (`?import` highlights the `.sotfprofile` import). */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { ModpackEditorScreen } from '../../../features/modpacks/ModpackEditorScreen.tsx';

export const Route = createFileRoute('/dashboard/modpacks/new')({
  staticData: { title: () => m.modpacks_new_title() },
  validateSearch: (search: Record<string, unknown>): { import?: boolean } =>
    search.import === true || search.import === 'true' ? { import: true } : {},
  component: NewModpackRoute,
});

function NewModpackRoute() {
  const search = Route.useSearch();
  return <ModpackEditorScreen modpack={null} startWithImport={search.import === true} />;
}
