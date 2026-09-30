/**
 * `/ranger` area layout (WP-34). Screens of the area live in `routes/ranger/` (their own work
 * package); while the area root has none, it shows the area's empty state.
 */

import { createFileRoute } from '@tanstack/react-router';
import { AreaOutlet } from '../components/AreaOutlet.tsx';
import { requireRanger } from '../lib/guard.ts';
import { t } from '../lib/messages.ts';

const title = () => t('common_term_ranger_station');

export const Route = createFileRoute('/ranger')({
  // Moderators and admins only (the API re-checks every action).
  beforeLoad: ({ context }) => {
    requireRanger(context.queryClient);
  },
  staticData: { title },
  component: () => <AreaOutlet title={title} />,
});
