/**
 * `pnpm --filter @sotf/web gen` (part of the root `pnpm gen`): regenerates the generated files of
 * the web app. `--check` (root `pnpm gen --check`, CI) fails when any of them is stale.
 *
 * 1. `src/console/routeTree.gen.ts` — TanStack Router tree of the console SPA.
 * 2. `public/**` brand assets — verbatim copies of `packages/brand/assets/public/**` (favicons,
 *    `/brand/*`), verified against the brand manifest (SHA-256).
 * 3. `public/manifest.webmanifest` — from `manifestIcons()` and `themeColor` of `@sotf/brand`.
 *
 *   node src/lib/tooling/gen.ts [--check]
 */
import { createHash } from 'node:crypto';
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { manifestIcons, themeColor } from '@sotf/brand';
import { m } from '@sotf/i18n/messages';
import { Generator, getConfig } from '@tanstack/router-generator';
import { CONSOLE_ROUTER_CONFIG } from './router-config.ts';

const APP_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../..');
const BRAND_ROOT = resolve(APP_ROOT, '../../packages/brand/assets');

interface BrandManifest {
  files: Record<string, { bytes: number; sha256: string }>;
}

function sha256(path: string): string {
  return createHash('sha256').update(readFileSync(path)).digest('hex');
}

/** App shortcuts (long-press the home-screen icon). English: the manifest is not localized. */
const SHORTCUTS = [
  { name: 'Explore mods', short_name: 'Explore', url: '/mods' },
  { name: 'Install guide', short_name: 'Install', url: '/install' },
  { name: 'Search', short_name: 'Search', url: '/search' },
  { name: 'Share logs', short_name: 'Logs', url: '/logs' },
] as const;

/**
 * Web app manifest (PLAN §4.4 `/manifest.webmanifest`): installable standalone app (`id`, display
 * overrides, shortcuts). English: the manifest is not localized.
 */
export function webManifest(): string {
  const icons = manifestIcons('/');
  const manifest = {
    id: '/',
    name: m.meta_site_name({}, { locale: 'en' }),
    short_name: 'SOTF Mods',
    description: m.meta_default_description({}, { locale: 'en' }),
    lang: 'en',
    dir: 'ltr',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    display_override: ['standalone', 'minimal-ui'],
    orientation: 'any',
    background_color: themeColor.night,
    theme_color: themeColor.night,
    categories: ['games', 'entertainment', 'utilities'],
    prefer_related_applications: false,
    icons,
    shortcuts: SHORTCUTS.map((shortcut) => ({
      ...shortcut,
      icons: icons.filter((icon) => icon.purpose === 'any' && icon.sizes === '192x192'),
    })),
  };
  return `${JSON.stringify(manifest, null, 2)}\n`;
}

async function routeTree(check: boolean): Promise<string[]> {
  const config = getConfig({ ...CONSOLE_ROUTER_CONFIG, disableLogging: true }, APP_ROOT);
  const target = resolve(APP_ROOT, CONSOLE_ROUTER_CONFIG.generatedRouteTree);
  const before = existsSync(target) ? readFileSync(target, 'utf8') : null;
  await new Generator({ config, root: APP_ROOT }).run();
  const after = readFileSync(target, 'utf8');
  if (check && before !== after) {
    if (before === null) rmSync(target);
    else writeFileSync(target, before);
    return [relative(APP_ROOT, target)];
  }
  return [];
}

function brandAssets(check: boolean): string[] {
  const manifest = JSON.parse(readFileSync(join(BRAND_ROOT, 'manifest.json'), 'utf8')) as BrandManifest;
  const stale: string[] = [];
  for (const [file, meta] of Object.entries(manifest.files)) {
    if (!file.startsWith('public/')) continue;
    const source = join(BRAND_ROOT, file);
    const target = join(APP_ROOT, file);
    if (sha256(source) !== meta.sha256) throw new Error(`brand asset ${file} does not match its manifest`);
    if (existsSync(target) && sha256(target) === meta.sha256) continue;
    if (check) {
      stale.push(relative(APP_ROOT, target));
      continue;
    }
    mkdirSync(dirname(target), { recursive: true });
    copyFileSync(source, target);
  }
  return stale;
}

function manifestFile(check: boolean): string[] {
  const target = join(APP_ROOT, 'public/manifest.webmanifest');
  const content = webManifest();
  if (existsSync(target) && readFileSync(target, 'utf8') === content) return [];
  if (check) return [relative(APP_ROOT, target)];
  writeFileSync(target, content);
  return [];
}

async function main(): Promise<void> {
  const check = process.argv.includes('--check');
  const stale = [...(await routeTree(check)), ...brandAssets(check), ...manifestFile(check)];
  if (stale.length > 0) {
    process.stderr.write(`@sotf/web: stale generated files (run \`pnpm gen\`):\n  ${stale.join('\n  ')}\n`);
    process.exit(1);
  }
  process.stdout.write(`@sotf/web: generated files ${check ? 'are up to date' : 'written'}\n`);
}

if (import.meta.main) await main();
