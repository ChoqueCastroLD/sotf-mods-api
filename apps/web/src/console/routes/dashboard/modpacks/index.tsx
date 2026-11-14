/** `/dashboard/modpacks` — the member's modpacks. Screen: `features/modpacks/MyModpacksScreen.tsx`. */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { myModpacksQuery } from '../../../features/modpacks/api.ts';
import { MyModpacksScreen } from '../../../features/modpacks/MyModpacksScreen.tsx';

export const Route = createFileRoute('/dashboard/modpacks/')({
  staticData: { title: () => m.modpacks_mine_title() },
  loader: ({ context }) => context.queryClient.ensureQueryData(myModpacksQuery),
  component: MyModpacksScreen,
});
