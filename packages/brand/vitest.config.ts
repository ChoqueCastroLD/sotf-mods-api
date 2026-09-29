import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    name: '@sotf/brand',
    environment: 'node',
    include: ['test/**/*.test.ts'],
    // The reproducibility test rasterises every asset with sharp.
    testTimeout: 30_000,
  },
});
