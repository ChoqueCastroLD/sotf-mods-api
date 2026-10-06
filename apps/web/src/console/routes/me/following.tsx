/**
 * `/me/following` — followed mods with their update state (WP-81). The screen lives in `features/me`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { backpackQuery } from '../../features/me/api.ts';
import { BackpackScreen } from '../../features/me/BackpackScreen.tsx';

export const Route = createFileRoute('/me/following')({
  staticData: { title: () => m.me_backpack_title() },
  loader: ({ context }) => context.queryClient.ensureQueryData(backpackQuery),
  component: BackpackScreen,
});
