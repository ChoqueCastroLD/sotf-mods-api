/**
 * `/basecamp/jams` — Mod Jams for creators: open jams and own participations. Screen:
 * `features/jams/MyJamsScreen.tsx`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { myJamsQuery } from '../../features/jams/api.ts';
import { MyJamsScreen } from '../../features/jams/MyJamsScreen.tsx';

export const Route = createFileRoute('/basecamp/jams')({
  staticData: { title: () => m.jams_mine_title() },
  loader: ({ context }) => context.queryClient.ensureQueryData(myJamsQuery),
  component: MyJamsScreen,
});
