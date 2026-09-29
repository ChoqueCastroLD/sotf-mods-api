/**
 * Vitest presets shared by every workspace package (PLAN §10.1).
 *
 * - Unit tests: `**\/*.test.ts(x)` next to the code, excluding `*.int.test.*`. Run by `pnpm test`.
 * - Integration tests: `**\/*.int.test.ts(x)` (Testcontainers, SeaweedFS, Mailpit). Run by
 *   `pnpm test:int`. Longer timeouts and limited parallelism because each file may boot containers.
 *
 * Packages without special needs point their scripts at the ready-made configs:
 *   "test": "vitest run --config ../../packages/config/vitest/unit.ts"
 *   "test:int": "vitest run --config ../../packages/config/vitest/int.ts"
 * Packages that need more (jsdom, setup files, aliases) create their own `vitest.config.ts`:
 *   export default defineUnitConfig({ test: { environment: 'jsdom' } });
 */
import { defineConfig, mergeConfig, type ViteUserConfig } from 'vitest/config';

const SOURCE_EXTENSIONS = '{ts,tsx}';

export const UNIT_INCLUDE = [`**/*.test.${SOURCE_EXTENSIONS}`];
export const INT_INCLUDE = [`**/*.int.test.${SOURCE_EXTENSIONS}`];
export const COMMON_EXCLUDE = ['**/node_modules/**', '**/dist/**', '**/.astro/**', '**/.turbo/**', '**/coverage/**'];

/** Unit-test preset. `root` is the package being tested (pnpm runs scripts in the package dir). */
export function defineUnitConfig(overrides: ViteUserConfig = {}): ViteUserConfig {
  return mergeConfig(
    defineConfig({
      root: process.cwd(),
      test: {
        include: UNIT_INCLUDE,
        exclude: [...COMMON_EXCLUDE, ...INT_INCLUDE],
        environment: 'node',
        passWithNoTests: true,
        restoreMocks: true,
        unstubEnvs: true,
        env: { TZ: 'UTC' },
      },
    }),
    overrides,
  );
}

/** Integration-test preset (real Postgres via Testcontainers, S3 emulator, Mailpit). */
export function defineIntConfig(overrides: ViteUserConfig = {}): ViteUserConfig {
  return mergeConfig(
    defineConfig({
      root: process.cwd(),
      test: {
        include: INT_INCLUDE,
        exclude: COMMON_EXCLUDE,
        environment: 'node',
        passWithNoTests: true,
        restoreMocks: true,
        unstubEnvs: true,
        env: { TZ: 'UTC' },
        testTimeout: 60_000,
        hookTimeout: 180_000,
        // Each file may start containers: keep parallelism modest on the shared host.
        maxWorkers: 2,
      },
    }),
    overrides,
  );
}
