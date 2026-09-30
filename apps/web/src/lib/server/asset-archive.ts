/**
 * Hashed-asset archive across deploys.
 *
 * During a rolling deploy (and for as long as a browser, the edge or a bfcache keeps an old HTML
 * page) the page references `/_astro/<name>.<hash>.css|js` files of the PREVIOUS build, which the
 * new container does not ship: the stylesheet then 404s as HTML and the page renders unstyled.
 *
 * With `ASSET_ARCHIVE_DIR` set (a persistent volume), every boot copies this build's `_astro`
 * files into the archive (never overwriting: names are content hashes) and prunes files older than
 * `ASSET_ARCHIVE_DAYS` (default 30). Requests for `/_astro/*` that the static handler did not find
 * are served from the archive with the same immutable caching.
 */
import { copyFile, mkdir, readdir, readFile, stat, unlink } from 'node:fs/promises';
import { join } from 'node:path';

const TYPES: Readonly<Record<string, string>> = {
  css: 'text/css; charset=utf-8',
  js: 'text/javascript; charset=utf-8',
  mjs: 'text/javascript; charset=utf-8',
  json: 'application/json',
  woff2: 'font/woff2',
  woff: 'font/woff',
  svg: 'image/svg+xml',
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  webp: 'image/webp',
  avif: 'image/avif',
  wasm: 'application/wasm',
};

const SAFE_NAME = /^[A-Za-z0-9._-]+$/;

function archiveDir(): string | null {
  const dir = process.env.ASSET_ARCHIVE_DIR?.trim();
  return dir ? dir : null;
}

/** Copies the current build's `_astro` files into the archive and prunes old ones. Never throws. */
export async function syncAssetArchive(clientDir = join(process.cwd(), 'dist', 'client', '_astro')): Promise<void> {
  const dir = archiveDir();
  if (!dir) return;
  try {
    await mkdir(dir, { recursive: true });
    const current = new Set(await readdir(clientDir));
    for (const name of current) {
      const target = join(dir, name);
      try {
        await stat(target);
      } catch {
        await copyFile(join(clientDir, name), target).catch(() => undefined);
      }
    }
    const maxAgeMs = Number(process.env.ASSET_ARCHIVE_DAYS ?? 30) * 86_400_000;
    const now = Date.now();
    for (const name of await readdir(dir)) {
      if (current.has(name)) continue;
      const info = await stat(join(dir, name)).catch(() => null);
      if (info && now - info.mtimeMs > maxAgeMs) await unlink(join(dir, name)).catch(() => undefined);
    }
  } catch (error) {
    console.warn('[web] asset archive sync failed', error);
  }
}

/** Serves `/_astro/<name>` from the archive, or null when it is not there (or no archive). */
export async function archivedAsset(pathname: string): Promise<Response | null> {
  const dir = archiveDir();
  if (!dir || !pathname.startsWith('/_astro/')) return null;
  const name = pathname.slice('/_astro/'.length);
  if (!SAFE_NAME.test(name)) return null;
  try {
    const body = await readFile(join(dir, name));
    const ext = name.slice(name.lastIndexOf('.') + 1).toLowerCase();
    return new Response(body, {
      status: 200,
      headers: {
        'content-type': TYPES[ext] ?? 'application/octet-stream',
        'cache-control': 'public, max-age=31536000, immutable',
        'x-asset-archive': '1',
      },
    });
  } catch {
    return null;
  }
}
