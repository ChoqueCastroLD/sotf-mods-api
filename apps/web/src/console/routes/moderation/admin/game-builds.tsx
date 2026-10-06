/**
 * `/moderation/admin/game-builds` — game builds (WP-83). The screen lives in `features/admin/GameBuildsScreen.tsx`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { gameBuildsQuery } from '../../../features/admin/api.ts';
import { GameBuildsScreen } from '../../../features/admin/GameBuildsScreen.tsx';
import { AdminRouteError } from '../../../features/admin/shared.tsx';

export const Route = createFileRoute('/moderation/admin/game-builds')({
  staticData: { title: () => m.admin_builds_title() },
  loader: ({ context }) => context.queryClient.ensureQueryData(gameBuildsQuery),
  errorComponent: AdminRouteError,
  component: GameBuildsScreen,
});
