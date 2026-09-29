import { fileURLToPath } from 'node:url';
import { brotliCompressSync, constants, gzipSync } from 'node:zlib';
import { build, type Rolldown } from 'vite';

const PACKAGE_ROOT = fileURLToPath(new URL('../..', import.meta.url));
const ENTRY_ID = 'virtual:sotf-ui-bundle-entry';

export interface BundleSize {
  code: string;
  raw: number;
  gzip: number;
  brotli: number;
}

/**
 * Bundles `source` (an ES module importing from the package) the way an app would: production
 * mode, minified, React and React DOM external (every page ships them anyway).
 */
export async function bundle(source: string): Promise<BundleSize> {
  const result = await build({
    configFile: false,
    root: PACKAGE_ROOT,
    logLevel: 'silent',
    mode: 'production',
    // Production JSX (react/jsx-runtime), as in the apps' builds.
    oxc: { jsx: { runtime: 'automatic', development: false } },
    plugins: [
      {
        name: 'virtual-entry',
        resolveId: (id) => (id === ENTRY_ID ? `\0${ENTRY_ID}` : null),
        load: (id) => (id === `\0${ENTRY_ID}` ? source : null),
      },
    ],
    build: {
      write: false,
      minify: true,
      target: 'es2022',
      modulePreload: false,
      rollupOptions: {
        input: ENTRY_ID,
        external: [/^react(-dom)?(\/.*)?$/],
        preserveEntrySignatures: 'exports-only',
        output: { format: 'es' },
      },
    },
  });
  const outputs = (Array.isArray(result) ? result : [result]) as Rolldown.RolldownOutput[];
  const code = outputs
    .flatMap((output) => output.output)
    .filter((chunk): chunk is Rolldown.OutputChunk => chunk.type === 'chunk')
    .map((chunk) => chunk.code)
    .join('\n');
  const buffer = Buffer.from(code);
  return {
    code,
    raw: buffer.length,
    gzip: gzipSync(buffer, { level: 9 }).length,
    brotli: brotliCompressSync(buffer, { params: { [constants.BROTLI_PARAM_QUALITY]: 11 } }).length,
  };
}

export const SRC_INDEX = fileURLToPath(new URL('../../src/index.ts', import.meta.url));
