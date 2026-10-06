/**
 * `/moderation/admin`: on phones the list of admin screens (the root of the «Admin» pill); on larger
 * screens the sidebar already lists them, so the route opens the first one.
 */
import { createFileRoute, redirect } from '@tanstack/react-router';
import { AdminIndex } from '../../../features/admin/AdminIndex.tsx';
import { t } from '../../../lib/messages.ts';

export const Route = createFileRoute('/moderation/admin/')({
  staticData: { title: () => t('console_area_admin') },
  beforeLoad: () => {
    if (!window.matchMedia('(max-width: 47.99rem)').matches) {
      throw redirect({ to: '/moderation/admin/game-builds', replace: true });
    }
  },
  component: AdminIndex,
});
