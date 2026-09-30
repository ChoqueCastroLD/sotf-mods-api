/**
 * Console root route (PLAN §4.3): session guard, then the shell.
 *
 * `beforeLoad` runs on every navigation: without the `sotf_li` hint the visitor goes straight to
 * `/login?next=<path>`; otherwise `/me` is loaded (cached by TanStack Query) and a 401 also leads
 * to the login page. Other failures (API down) show a full-screen error with retry.
 */

import { createRootRouteWithContext, type ErrorComponentProps } from '@tanstack/react-router';
import { BootScreen } from '../components/PendingScreen.tsx';
import { RouteError } from '../components/RouteError.tsx';
import { NotFound } from '../components/states.tsx';
import { ConsoleLayout } from '../layout/ConsoleLayout.tsx';
import { ensureSession } from '../lib/guard.ts';
import { t } from '../lib/messages.ts';
import type { ConsoleRouterContext } from '../router.ts';

export const Route = createRootRouteWithContext<ConsoleRouterContext>()({
  beforeLoad: async ({ context, location }) => {
    await ensureSession(context.queryClient, location.href);
  },
  staticData: { title: () => t('console_nav_label') },
  component: ConsoleLayout,
  pendingComponent: RootPending,
  pendingMs: 0,
  errorComponent: RootError,
  notFoundComponent: NotFound,
});

function RootPending() {
  return <BootScreen />;
}

/** The guard failed before the shell could render: the error takes the whole screen. */
function RootError(props: ErrorComponentProps) {
  return (
    <main className="flex min-h-dvh flex-1 items-center justify-center p-4">
      <RouteError {...props} />
    </main>
  );
}
