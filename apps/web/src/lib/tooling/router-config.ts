/**
 * TanStack Router generator options shared by the Vite plugin (`astro.config.mjs`) and
 * `pnpm gen` (`gen.ts`), so both produce the same `src/console/routeTree.gen.ts`.
 */
export const CONSOLE_ROUTER_CONFIG = {
  target: 'react',
  routesDirectory: './src/console/routes',
  generatedRouteTree: './src/console/routeTree.gen.ts',
  autoCodeSplitting: true,
  // Loaders are split too: their data helpers (typed API client, zod DTOs, feature modules) would
  // otherwise ride in the route tree, which the shell loads eagerly (budget: shell ≤ 120 KB br,
  // PLAN §12.3 WP-34). A navigation loads the loader and component chunks in parallel.
  codeSplittingOptions: {
    defaultBehavior: [['loader'], ['component'], ['errorComponent'], ['notFoundComponent'], ['pendingComponent']],
  },
  quoteStyle: 'single',
  addExtensions: true,
} as const;
