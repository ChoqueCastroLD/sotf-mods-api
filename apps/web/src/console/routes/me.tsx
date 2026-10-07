/**
 * `/me` area layout (WP-34). Screens of the area live in `routes/me/` (their own work
 * package); while the area root has none, it shows «not found».
 */

import { createFileRoute } from '@tanstack/react-router';
import { AreaOutlet } from '../components/AreaOutlet.tsx';
import { t } from '../lib/messages.ts';

const title = () => t('console_area_you');

export const Route = createFileRoute('/me')({
  staticData: { title },
  component: () => <AreaOutlet />,
});
