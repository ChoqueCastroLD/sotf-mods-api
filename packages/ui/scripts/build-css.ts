/**
 * `pnpm --filter @sotf/ui build:css`: compiles the design system exactly as the apps consume it
 * (`@import "@sotf/ui/tokens.css"` through `@tailwindcss/vite` + Lightning CSS minification) and
 * fails on **any** warning from Vite, Tailwind or the CSS minifier (acceptance of WP-12).
 *
 * Output: `dist/css/ui.css` (+ the self-hosted font files) and a size report. The utilities
 * generated are those used by `src/**` (the `@source` in tokens.css), i.e. the primitives'
 * share of every app stylesheet.
 */
import { rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { brotliCompressSync, constants, gzipSync } from 'node:zlib';
import tailwindcss from '@tailwindcss/vite';
import { build, createLogger, type Rolldown } from 'vite';

const ROOT = fileURLToPath(new URL('..', import.meta.url).href);
const OUT_DIR = 'dist/css';
/** apps/web serves @sotf/brand's public assets (`/brand/*`). */
const BRAND_PUBLIC = fileURLToPath(new URL('../../brand/assets/public', import.meta.url).href);

/** research/03 §4.10: the non-critical stylesheet stays ≤ 25 KB gzip. */
const CSS_BUDGET_GZIP = 25 * 1024;

const warnings: string[] = [];

const logger = createLogger('info', { allowClearScreen: false });
const originalWarn = logger.warn.bind(logger);
logger.warn = (message, options) => {
  warnings.push(message);
  originalWarn(message, options);
};
logger.warnOnce = logger.warn;

// Tailwind and Lightning CSS report some problems with console.warn instead of the Vite logger.
const consoleWarn = console.warn;
console.warn = (...args: unknown[]) => {
  warnings.push(args.map(String).join(' '));
  consoleWarn(...args);
};

async function main(): Promise<void> {
  await rm(new URL(`../${OUT_DIR}`, import.meta.url), { recursive: true, force: true });
  const result = await build({
    configFile: false,
    root: ROOT,
    customLogger: logger,
    logLevel: 'warn',
    publicDir: BRAND_PUBLIC,
    plugins: [tailwindcss()],
    build: {
      copyPublicDir: false,
      outDir: OUT_DIR,
      emptyOutDir: true,
      cssMinify: 'lightningcss',
      assetsInlineLimit: 0,
      reportCompressedSize: false,
      rollupOptions: {
        input: { ui: 'src/tokens.css' },
        output: { assetFileNames: '[name][extname]' },
      },
    },
  });

  const outputs = (Array.isArray(result) ? result : [result]) as Rolldown.RolldownOutput[];
  const css = outputs
    .flatMap((output) => output.output)
    .find((asset): asset is Rolldown.OutputAsset => asset.type === 'asset' && asset.fileName.endsWith('.css'));
  if (!css) throw new Error('no CSS asset was produced');
  const source = Buffer.from(css.source);
  const gzip = gzipSync(source, { level: 9 }).length;
  const brotli = brotliCompressSync(source, { params: { [constants.BROTLI_PARAM_QUALITY]: 11 } }).length;
  const kb = (bytes: number) => `${(bytes / 1024).toFixed(1)} KB`;
  process.stdout.write(
    `${OUT_DIR}/${css.fileName}: ${kb(source.length)} raw · ${kb(gzip)} gzip · ${kb(brotli)} br (budget ${kb(CSS_BUDGET_GZIP)} gzip)\n`,
  );

  // Sanity: the pieces every page relies on made it into the output.
  const text = source.toString('utf8');
  const required = ['--color-primary', 'Onest Fallback'];
  const missing = required.filter((needle) => !text.includes(needle));
  if (missing.length > 0) throw new Error(`the compiled CSS is missing: ${missing.join(', ')}`);

  if (gzip > CSS_BUDGET_GZIP) throw new Error(`ui.css is ${kb(gzip)} gzip, over the ${kb(CSS_BUDGET_GZIP)} budget`);
  if (warnings.length > 0) {
    throw new Error(`build:css emitted ${warnings.length} warning(s); the build must be warning-free`);
  }
  process.stdout.write('build:css: no warnings\n');
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
