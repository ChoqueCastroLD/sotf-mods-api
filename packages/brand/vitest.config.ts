import { defineUnitConfig } from '@sotf/config/vitest';

export default defineUnitConfig({
  test: {
    name: '@sotf/brand',
    // The reproducibility test rasterises every asset with sharp.
    testTimeout: 30_000,
  },
});
