import { defineUnitConfig } from '@sotf/config/vitest';

export default defineUnitConfig({
  test: {
    // This package always has tests: an empty run is a failure, not a pass.
    passWithNoTests: false,
    // One file at a time: the performance budget (test/bench.test.ts) must not compete for CPU
    // with the XSS corpus running in another worker.
    fileParallelism: false,
  },
});
