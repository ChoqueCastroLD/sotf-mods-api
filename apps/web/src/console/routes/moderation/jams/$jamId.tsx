/**
 * `/moderation/jams/$jamId` — jam editor: phase control, details, schedule, categories and entry
 * moderation. Screen: `features/jams/JamEditorScreen.tsx`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute, notFound } from '@tanstack/react-router';
import { AdminRouteError } from '../../../features/admin/shared.tsx';
import { adminJamQuery } from '../../../features/jams/api.ts';
import { JamEditorScreen } from '../../../features/jams/JamEditorScreen.tsx';

export const Route = createFileRoute('/moderation/jams/$jamId')({
  staticData: { title: () => m.jams_editor_title() },
  loader: ({ context, params }) => {
    const id = Number(params.jamId);
    if (!Number.isInteger(id) || id < 1) throw notFound();
    return context.queryClient.ensureQueryData(adminJamQuery(id));
  },
  errorComponent: AdminRouteError,
  component: JamEditorScreen,
});
