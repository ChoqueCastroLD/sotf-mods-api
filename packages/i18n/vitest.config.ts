import { defineUnitConfig } from '@sotf/config/vitest';

export default defineUnitConfig({
  test: {
    // This package always has tests; an empty run means the include globs broke.
    passWithNoTests: false,
    // The bundle-size and generation tests compile real output.
    testTimeout: 60_000,
  },
});
