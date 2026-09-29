/**
 * TanStack Router generator options shared by the Vite plugin (`astro.config.mjs`) and
 * `pnpm gen` (`gen.ts`), so both produce the same `src/console/routeTree.gen.ts`.
 */
export const CONSOLE_ROUTER_CONFIG = {
  target: 'react',
  routesDirectory: './src/console/routes',
  generatedRouteTree: './src/console/routeTree.gen.ts',
  autoCodeSplitting: true,
  quoteStyle: 'single',
  addExtensions: true,
} as const;
