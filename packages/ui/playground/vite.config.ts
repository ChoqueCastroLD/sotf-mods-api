/**
 * Component playground (PLAN §12.3 WP-12): `pnpm --filter @sotf/ui playground` → http://127.0.0.1:47350
 * Every primitive in both themes (two side-by-side frames, or one frame with the toggle).
 */
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export const PLAYGROUND_PORT = 47350;

export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url).href),
  // /brand/topo.svg (texture-topo) and /brand/field-kit.svg, as apps/web serves them.
  publicDir: fileURLToPath(new URL('../../brand/assets/public', import.meta.url).href),
  plugins: [react(), tailwindcss()],
  server: { host: '127.0.0.1', port: PLAYGROUND_PORT, strictPort: true },
  preview: { host: '127.0.0.1', port: PLAYGROUND_PORT, strictPort: true },
  // A dev tool that loads every primitive at once: one big chunk is expected.
  build: { outDir: '../dist/playground', emptyOutDir: true, chunkSizeWarningLimit: 2048 },
});
