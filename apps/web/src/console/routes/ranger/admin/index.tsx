/** `/ranger/admin` has no overview of its own: it opens the first admin screen. */
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/ranger/admin/')({
  beforeLoad: () => {
    throw redirect({ to: '/ranger/admin/game-builds', replace: true });
  },
});
