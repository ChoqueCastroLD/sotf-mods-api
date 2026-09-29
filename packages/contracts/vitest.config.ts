import { defineUnitConfig } from '@sotf/config/vitest';

export default defineUnitConfig({
  test: {
    name: '@sotf/contracts',
    // The legacy contract suite must never pass vacuously.
    passWithNoTests: false,
    // Type-level tests of the typed client (`*.test-d.ts`) run through tsc.
    typecheck: {
      enabled: true,
      include: ['test/**/*.test-d.ts'],
      tsconfig: './tsconfig.test.json',
    },
  },
});
