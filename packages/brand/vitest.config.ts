import { defineUnitConfig } from '@sotf/config/vitest';

export default defineUnitConfig({
  test: {
    name: '@sotf/brand',
    // This package always has tests: an empty run is a failure, not a pass.
    passWithNoTests: false,
    // The reproducibility test rasterises every asset with sharp.
    testTimeout: 30_000,
  },
});
