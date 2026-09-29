/**
 * Tree-shaking (WP-13 acceptance): importing one message must not drag the rest of the catalog
 * into a client bundle. Builds real bundles with Vite (Rolldown), the bundler apps/web uses.
 */
import { brotliCompressSync } from 'node:zlib';
import { build, type Rolldown } from 'vite';
import { describe, expect, it } from 'vitest';

async function bundle(entry: string): Promise<{ code: string; brotli: number }> {
  const result = await build({
    configFile: false,
    logLevel: 'silent',
    root: process.cwd(),
    build: {
      write: false,
      minify: true,
      lib: { entry, formats: ['es'], fileName: 'bundle' },
    },
  });
  const outputs = (Array.isArray(result) ? result : [result]) as Rolldown.RolldownOutput[];
  const code = outputs
    .flatMap((output) => output.output)
    .map((chunk) => (chunk.type === 'chunk' ? chunk.code : ''))
    .join('\n');
  return { code, brotli: brotliCompressSync(Buffer.from(code)).length };
}

describe('tree-shaking', () => {
  it('keeps only the imported message (all 13 locales) and the runtime', async () => {
    const { code, brotli } = await bundle('test/fixtures/one-message.ts');
    // The imported message, in several locales.
    for (const text of ['Save', 'Guardar', 'Speichern', 'Enregistrer', 'Сохранить', '保存']) {
      expect(code).toContain(text);
    }
    // Other messages of the same and other namespaces are not included.
    for (const text of [
      'Checking the map',
      'Revisando el mapa',
      'Try again',
      'wandered off the trail',
      'SOTF Mods —',
    ]) {
      expect(code).not.toContain(text);
    }
    // One message + configured runtime: a small, fixed cost (budget: public JS ≤ 15 KB br).
    expect(brotli).toBeLessThan(3 * 1024);
  });

  it('works the same with named imports', async () => {
    const { code, brotli } = await bundle('test/fixtures/named-message.ts');
    expect(code).toContain('You wandered off the trail.');
    expect(code).toContain('Te saliste del sendero.');
    expect(code).not.toContain('Guardar');
    expect(code).not.toContain('Not on the map');
    expect(brotli).toBeLessThan(3 * 1024);
  });

  it('the main entry (locales, paths, formatters) contains no messages', async () => {
    const { code, brotli } = await bundle('test/fixtures/utilities.ts');
    expect(code).not.toMatch(/common_|errors_|meta_/);
    expect(code).not.toContain('Guardar');
    expect(brotli).toBeLessThan(3 * 1024);
  });
});
