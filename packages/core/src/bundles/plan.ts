/**
 * Layout of an official bundle zip (T1-04). The zip root is the game folder, so the player unpacks
 * it over `Sons Of The Forest/`:
 *
 * - mod zips keep their folders when they start with a known game folder (`Mods/`, `UserData/`,
 *   `Plugins/`, `Libs/`); otherwise their files go under `Mods/` (how RedLoader mods are installed);
 * - a loose file (`.dll`…) goes to `Mods/<name>`;
 * - a BuildShare blueprint goes to `Mods/BuildShare/LocalBuildings/<name>.json`.
 *
 * Paths are sanitised (no `..`, no absolute paths, no backslashes) and unique case-insensitively:
 * the first item wins and later duplicates are reported as conflicts.
 */
import { unzipSync } from 'fflate';

export const GAME_FOLDERS = ['mods', 'userdata', 'plugins', 'libs'] as const;
export const BUILD_FOLDER = 'Mods/BuildShare/LocalBuildings';

export interface PlannedFile {
  path: string;
  data: Uint8Array;
}

/** Normalised safe relative path, or null when it would escape the game folder. */
export function safeEntryPath(raw: string): string | null {
  const parts = raw.replaceAll('\\', '/').split('/');
  const out: string[] = [];
  for (const part of parts) {
    if (part === '' || part === '.') continue;
    if (part === '..') return null;
    // biome-ignore lint/suspicious/noControlCharactersInRegex: reject control characters in names
    if (/[\u0000-\u001f:*?"<>|]/.test(part)) return null;
    out.push(part);
  }
  if (raw.startsWith('/') || /^[a-zA-Z]:/.test(raw)) return null;
  return out.length === 0 ? null : out.join('/');
}

function fileName(path: string): string {
  return path.split('/').pop() ?? path;
}

function place(path: string): string {
  const first = path.split('/')[0]?.toLowerCase() ?? '';
  return (GAME_FOLDERS as readonly string[]).includes(first) ? path : `Mods/${path}`;
}

/** The files of an item would exceed the bytes left in the bundle (checked before anything is inflated). */
export class BundleTooLargeError extends Error {
  override readonly name = 'BundleTooLargeError';
}

export interface ItemFile {
  /** Stored file name of the version (`MyMod-1.2.0.zip`). */
  filename: string;
  isBuild: boolean;
  data: Uint8Array;
}

/**
 * Files a version contributes to the bundle. `maxBytes` is what the bundle may still take: the
 * sizes declared by the zip (which also size the buffers fflate allocates) are summed before any
 * entry is inflated, so a zip that passed the inspection with a ratio of 100 cannot expand to
 * gigabytes in the worker. Throws `BundleTooLargeError`.
 */
export function planItemFiles(item: ItemFile, options: { maxBytes?: number } = {}): PlannedFile[] {
  const lower = item.filename.toLowerCase();
  if (item.isBuild || lower.endsWith('.json')) {
    const name = safeEntryPath(fileName(item.filename)) ?? 'build.json';
    return [{ path: `${BUILD_FOLDER}/${name}`, data: item.data }];
  }
  if (lower.endsWith('.zip')) {
    let budget = options.maxBytes ?? Number.POSITIVE_INFINITY;
    const entries = unzipSync(item.data, {
      filter: (entry) => {
        budget -= entry.originalSize;
        if (budget < 0) throw new BundleTooLargeError('the files are larger than the bundle allows');
        return true;
      },
    });
    const files: PlannedFile[] = [];
    for (const [name, data] of Object.entries(entries)) {
      if (name.endsWith('/')) continue;
      const safe = safeEntryPath(name);
      if (safe) files.push({ path: place(safe), data });
    }
    return files;
  }
  const name = safeEntryPath(fileName(item.filename));
  return name ? [{ path: `Mods/${name}`, data: item.data }] : [];
}

export interface MergedBundle {
  files: PlannedFile[];
  /** Paths skipped because an earlier item already provides them. */
  conflicts: string[];
}

/** Merges the files of every item, unique by lower-cased path. */
export function mergeFiles(perItem: readonly PlannedFile[][]): MergedBundle {
  const seen = new Set<string>();
  const files: PlannedFile[] = [];
  const conflicts: string[] = [];
  for (const list of perItem) {
    for (const file of list) {
      const key = file.path.toLowerCase();
      if (seen.has(key)) {
        conflicts.push(file.path);
        continue;
      }
      seen.add(key);
      files.push(file);
    }
  }
  return { files, conflicts };
}

/** Plain-text summary shipped inside the zip (`BUNDLE.txt`). */
export function bundleReadme(input: {
  kitName: string;
  kitUrl: string;
  items: ReadonlyArray<{ mod: string; version: string | null }>;
  conflicts: readonly string[];
}): string {
  const lines = [
    `${input.kitName}`,
    `${input.kitUrl}`,
    '',
    'Install: extract this zip into your "Sons Of The Forest" folder (merge when asked).',
    'Requires RedLoader. BuildShare blueprints go to Mods/BuildShare/LocalBuildings.',
    '',
    'Included:',
    ...input.items.map((i) => `- ${i.mod}${i.version ? ` ${i.version}` : ''}`),
  ];
  if (input.conflicts.length > 0) {
    lines.push('', 'Skipped (same path provided by an earlier item):', ...input.conflicts.map((c) => `- ${c}`));
  }
  return `${lines.join('\n')}\n`;
}
