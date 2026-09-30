/**
 * `/me/kits/$kitId` — the kit editor (WP-71). The kit is loaded before the screen renders (owner
 * view); an unknown id or a kit of someone else ends in the console's «Off the map» / «Rangers
 * only» states (`RouteError`). `?forked=1` greets a fresh fork.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute, notFound } from '@tanstack/react-router';
import { ownKitQuery } from '../../../features/kits/api.ts';
import { KitEditorScreen } from '../../../features/kits/KitEditorScreen.tsx';

interface EditorSearch {
  forked?: true;
}

function kitIdOf(raw: string): number {
  const id = Number(raw);
  if (!Number.isSafeInteger(id) || id <= 0) throw notFound();
  return id;
}

export const Route = createFileRoute('/me/kits/$kitId')({
  staticData: { title: () => m.kits_editor_static_title() },
  validateSearch: (search: Record<string, unknown>): EditorSearch =>
    search.forked === 1 || search.forked === '1' || search.forked === true ? { forked: true } : {},
  loader: ({ context, params }) => context.queryClient.ensureQueryData(ownKitQuery(kitIdOf(params.kitId))),
  component: KitEditorRoute,
});

function KitEditorRoute() {
  const { kitId } = Route.useParams();
  const search = Route.useSearch();
  return <KitEditorScreen kitId={kitIdOf(kitId)} forked={search.forked === true} />;
}
