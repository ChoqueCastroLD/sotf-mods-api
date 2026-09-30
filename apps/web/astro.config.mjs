// @ts-check
/**
 * Astro 7 configuration of @sotf/web (PLAN §2.5, §2.7, §4.1, §8; WP-22).
 *
 * - Node standalone server (`node dist/server/entry.mjs`, port from PORT/HOST).
 * - React for islands and the console SPA; Tailwind 4 through its Vite plugin.
 * - TanStack Router plugin: file routes in `src/console/routes`, tree in
 *   `src/console/routeTree.gen.ts` (generated; `pnpm gen`), automatic code splitting.
 * - i18n `routing: 'manual'`: the server entry (`fetchFile`) strips the locale prefix before
 *   routing, the middleware runs every request in its locale (see `src/lib/README.md`).
 * - Route cache with the `cloudflareTags()` provider (edge headers + origin LRU + invalidation).
 * - CSP placeholder (`src/lib/security/csp.ts`), finalized by WP-93.
 * - `trailingSlash: 'never'` (the server entry also 301s trailing slashes before routing).
 * - `astro dev` only: `/api/*` is proxied to the API (`INTERNAL_API_URL`), as Traefik does in
 *   production, so islands and the console reach the API on the same origin (docs/backlog/WP-A4.md).
 */
import node from '@astrojs/node';
import react from '@astrojs/react';
import { LOCALES } from '@sotf/i18n';
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import { defineConfig } from 'astro/config';
import { cspConfig } from './src/lib/security/csp.ts';
import { CONSOLE_ROUTER_CONFIG } from './src/lib/tooling/router-config.ts';

/** API origin for the dev proxy (same default as `src/lib/env.ts`). */
const devApiOrigin = (process.env.INTERNAL_API_URL || 'http://127.0.0.1:47301').replace(/\/+$/, '');

/**
 * Browser build: island entries may gain exports, so Rolldown can merge modules shared by an entry
 * and its lazy chunks into the entry chunk (`mergeCommonChunks`). Without it every console route
 * file (imported by the route tree and by its lazily split screen) became its own tiny chunk with
 * its own preload map: ~60 extra requests in the console shell (budget of PLAN §12.3 WP-34).
 * @type {import('vite').Plugin}
 */
const mergeableIslandEntries = {
  name: 'sotf:mergeable-island-entries',
  apply: 'build',
  configEnvironment(name) {
    if (name !== 'client') return;
    return { build: { rolldownOptions: { preserveEntrySignatures: 'allow-extension' } } };
  },
};

/** Astro ignores `_`-prefixed files in `src/pages`, so the internal endpoint is injected. */
const internalRoutes = {
  name: 'sotf:internal-routes',
  hooks: {
    /** @param {{ injectRoute: (route: { pattern: string; entrypoint: string | URL; prerender?: boolean }) => void }} options */
    'astro:config:setup': ({ injectRoute }) => {
      injectRoute({
        pattern: '/_internal/cache/invalidate',
        entrypoint: new URL('./src/pages/_internal/cache/invalidate.ts', import.meta.url),
        prerender: false,
      });
    },
  },
};

export default defineConfig({
  site: 'https://sotf-mods.com',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  trailingSlash: 'never',
  build: { format: 'file' },
  fetchFile: 'lib/server/fetch',
  compressHTML: true,
  prefetch: false,
  // Markdown is rendered by @sotf/markdown; Shiki's inline styles would also fight the CSP.
  markdown: { syntaxHighlight: false },
  devToolbar: { enabled: false },
  integrations: [react(), internalRoutes],
  i18n: {
    locales: [...LOCALES],
    defaultLocale: 'en',
    routing: 'manual',
  },
  cache: {
    provider: {
      name: 'cloudflare-tags',
      entrypoint: new URL('./src/lib/cache/cloudflare-tags.ts', import.meta.url),
      config: { max: 500 },
    },
  },
  security: {
    checkOrigin: true,
    csp: cspConfig(),
  },
  vite: {
    plugins: [tanstackRouter({ ...CONSOLE_ROUTER_CONFIG }), mergeableIslandEntries, tailwindcss()],
    build: { assetsInlineLimit: 0 },
    server: {
      proxy: {
        // Same-origin API in development: keep Host/Origin (CSRF, cookies) and stream SSE
        // (`/api/v2/stream`) without buffering. Never used by the production server.
        '^/api(?:/|$)': { target: devApiOrigin, changeOrigin: false, ws: false },
      },
    },
  },
});
