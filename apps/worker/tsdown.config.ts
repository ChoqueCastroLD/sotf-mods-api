/**
 * Bundle of @sotf/worker (PLAN §2.2): `dist/worker.js` for Node 24. Workspace packages (`@sotf/*`,
 * including the React Email templates and the compiled i18n messages) are bundled; npm dependencies
 * stay external and must be listed in this package's `dependencies`.
 */
import { defineConfig } from 'tsdown';

const isWorkspace = (id: string) => id.startsWith('@sotf/');
const isBare = (id: string) =>
  !id.startsWith('.') && !id.startsWith('/') && !id.startsWith('\0') && !/^[A-Za-z]:[\\/]/.test(id);

export default defineConfig({
  entry: { worker: 'src/worker.ts' },
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
});
