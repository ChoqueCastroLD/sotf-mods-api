import { defineUnitConfig } from '@sotf/config/vitest';

export default defineUnitConfig({
  test: {
    name: '@sotf/ui',
    // SSR, token and bundle tests run in Node; interaction tests opt into jsdom per file
    // (`// @vitest-environment jsdom`).
    environment: 'node',
    passWithNoTests: false,
    setupFiles: ['./test/setup.ts'],
    // The tree-shaking test bundles with Vite.
    testTimeout: 30_000,
  },
});
