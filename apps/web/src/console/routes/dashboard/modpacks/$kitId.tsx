/**
 * `/dashboard/modpacks/$kitId` — edit one of the member's modpacks. A modpack that is not mine (or
 * does not exist) ends in «Off the map».
 */
import { m } from '@sotf/i18n/messages';
import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, notFound } from '@tanstack/react-router';
import { ownModpackQuery } from '../../../features/modpacks/api.ts';
import { ModpackEditorScreen } from '../../../features/modpacks/ModpackEditorScreen.tsx';

function kitIdOf(raw: string): number {
  const id = /^\d{1,10}$/.test(raw) ? Number(raw) : Number.NaN;
  if (!Number.isSafeInteger(id) || id <= 0) throw notFound();
  return id;
}

export const Route = createFileRoute('/dashboard/modpacks/$kitId')({
  staticData: { title: () => m.modpacks_edit_title() },
  loader: ({ context, params }) => context.queryClient.ensureQueryData(ownModpackQuery(kitIdOf(params.kitId))),
  component: EditModpackRoute,
});

function EditModpackRoute() {
  const { kitId } = Route.useParams();
  const { data } = useSuspenseQuery(ownModpackQuery(kitIdOf(kitId)));
  // Keyed by id so moving between modpacks starts a fresh form.
  return <ModpackEditorScreen key={data.id} modpack={data} />;
}
