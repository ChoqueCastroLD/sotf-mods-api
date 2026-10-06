/**
 * `/me` — the «You» area opens on the backpack (PLAN §4.3).
 */
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/me/')({
  beforeLoad: () => {
    throw redirect({ to: '/me/following', replace: true });
  },
});
