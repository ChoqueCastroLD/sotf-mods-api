/**
 * `/notifications` area layout (WP-34). Screens of the area live in `routes/signals/` (their own work
 * package); while the area root has none, it shows «not found».
 */

import { createFileRoute } from '@tanstack/react-router';
import { AreaOutlet } from '../components/AreaOutlet.tsx';
import { t } from '../lib/messages.ts';

const title = () => t('common_term_signals');

export const Route = createFileRoute('/notifications')({
  staticData: { title },
  component: () => <AreaOutlet />,
});
