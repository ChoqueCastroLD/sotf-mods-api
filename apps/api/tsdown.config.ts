/**
 * Bundle of @sotf/api (PLAN §2.2 "Bundle de API y worker"): one ESM file per entry for Node 24.
 * Workspace packages (`@sotf/*`, TypeScript sources without a build) are bundled; every npm
 * dependency stays external and is installed next to the bundle (`pnpm deploy`), so each one must
 * be listed in this package's `dependencies`. The SQL migrations are copied to `dist/migrations`
 * for the migrate task.
 */
import { defineConfig } from 'tsdown';

const isWorkspace = (id: string) => id.startsWith('@sotf/');
const isBare = (id: string) =>
  !id.startsWith('.') && !id.startsWith('/') && !id.startsWith('\0') && !/^[A-Za-z]:[\\/]/.test(id);

export default defineConfig({
  entry: { server: 'src/server.ts', migrate: 'src/migrate.ts', backfill: 'src/backfill.ts' },
  format: 'esm',
  platform: 'node',
  target: 'node24',
  outDir: 'dist',
  clean: true,
  sourcemap: true,
  dts: false,
  fixedExtension: false,
  deps: {
    neverBundle: (id: string) => isBare(id) && !isWorkspace(id),
    alwaysBundle: [/^@sotf\//],
  },
  copy: [{ from: '../../packages/db/migrations/*.sql', to: 'dist/migrations', flatten: true }],
});
