/**
 * Console root route — STUB created by WP-22, owned and completed by WP-34 (console platform:
 * QueryClient, session guard, layout, SSE invalidation, `UiTranslateProvider`).
 *
 * It exists so the TanStack Router plugin (configured in `astro.config.mjs`, routes in
 * `src/console/routes`, generated tree in `src/console/routeTree.gen.ts`) has a valid tree.
 */
import { createRootRoute, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return <Outlet />;
}
