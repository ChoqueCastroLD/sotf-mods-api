/**
 * `/basecamp` area layout (WP-34). Screens of the area live in `routes/basecamp/` (their own work
 * package); while the area root has none, it shows the area's empty state.
 */

import { createFileRoute } from '@tanstack/react-router';
import { AreaOutlet } from '../components/AreaOutlet.tsx';
import { t } from '../lib/messages.ts';

const title = () => t('common_term_basecamp');

export const Route = createFileRoute('/basecamp')({
  staticData: { title },
  component: () => <AreaOutlet title={title} />,
});
