/**
 * The console router (PLAN §4.3): file routes in `routes/` (tree generated into
 * `routeTree.gen.ts` by the TanStack Router plugin / `pnpm gen`), no `basepath`, hover/focus
 * preloading (`defaultPreload: 'intent'`) and one chunk per route (`autoCodeSplitting`, set in
 * `lib/tooling/router-config.ts`).
 *
 * Data: TanStack Query owns the cache, so the router never caches loader results
 * (`defaultPreloadStaleTime: 0`); loaders call `context.queryClient.ensureQueryData(…)`.
 */
import type { QueryClient } from '@tanstack/react-query';
import { createRouter } from '@tanstack/react-router';
import { PendingScreen } from './components/PendingScreen.tsx';
import { RouteError } from './components/RouteError.tsx';
import { NotFound } from './components/states.tsx';
import { routeTree } from './routeTree.gen.ts';

export interface ConsoleRouterContext {
  queryClient: QueryClient;
}

/**
 * Only show the pending skeleton when a route takes longer than this. Until then the previous
 * screen stays put (a thin progress line in the shell, `layout/RouteProgress.tsx`, answers the
 * click after 120 ms), so quick navigations never flash a skeleton.
 */
export const PENDING_MS = 600;
/** …and then keep it at least this long, so it does not flash. */
export const PENDING_MIN_MS = 400;

export function createConsoleRouter(queryClient: QueryClient) {
  return createRouter({
    routeTree,
    context: { queryClient },
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
    defaultPendingMs: PENDING_MS,
    defaultPendingMinMs: PENDING_MIN_MS,
    defaultPendingComponent: PendingScreen,
    // A quick cross-fade between screens (`:active-view-transition-type(console)` in global.css);
    // filters and pagination (same path) and reduced motion navigate without it.
    defaultViewTransition: {
      types: ({ pathChanged }) =>
        pathChanged && !window.matchMedia('(prefers-reduced-motion: reduce)').matches ? ['console'] : false,
    },
    defaultErrorComponent: RouteError,
    defaultNotFoundComponent: NotFound,
    scrollRestoration: true,
  });
}

export type ConsoleRouter = ReturnType<typeof createConsoleRouter>;

declare module '@tanstack/react-router' {
  interface Register {
    router: ConsoleRouter;
  }
  interface StaticDataRouteOption {
    /** Static document title of the route (see `hooks/use-document-title.ts`). */
    title?: () => string;
  }
}
