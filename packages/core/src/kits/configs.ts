/**
 * Modpack config files (2026-11): the author uploads one zip of mod settings; SotF Mods Manager
 * unpacks it into the game folder when the modpack is installed.
 *
 * The zip is never stored as uploaded. Every entry is checked and the valid files are repacked into
 * a fresh zip, so nothing hidden can ride along:
 * - paths relative to the game folder, starting with `UserData/` or `Mods/` (case-insensitive,
 *   rewritten to that casing), no `..`, absolute path or drive letter (zip slip);
 * - only text config files (`MODPACK_CONFIG_RULES.extensions`), each at most 256 KiB, valid UTF-8
 *   without NUL bytes; at most 100 files and 1 MiB for the zip; no duplicate paths;
 * - directories are skipped (they are implied by the paths).
 *
 * The repacked zip is stored content-addressed (`modpacks/configs/<kitId>/<sha256>.zip`) in the
 * public bucket by `putKitConfigs` (service.ts); an older zip is left in place, so a .sotfprofile
 * downloaded before the change keeps working.
 */
import { createHash } from 'node:crypto';
import { MODPACK_CONFIG_RULES } from '@sotf/contracts/kits';
import { isUnsafeZipPath } from '@sotf/contracts/manifest';
import { zipSync } from 'fflate';
import { bufferSource, entryName, nextEntry, openZip, readEntry } from '../inspection/reader.ts';
import { errors } from '../kernel/errors.ts';

export interface ConfigFile {
  path: string;
  size: number;
}

export interface ValidatedConfigs {
  files: ConfigFile[];
  zip: Uint8Array;
  sha256: string;
}

/** Hard cap on zip entries read (directories included), before any content is touched. */
const MAX_ENTRIES = 500;

function invalid(detail: string, code: string, path?: string): never {
  throw errors.validation(detail, [{ path: 'dataBase64', code, message: path ? `${detail} (${path})` : detail }]);
}

/** `UserData/x.cfg` with the canonical root casing, or null when the path is outside the roots. */
export function normalizeConfigPath(raw: string): string | null {
  const path = raw.replaceAll('\\', '/').replace(/^\.\//, '');
  const [first, ...rest] = path.split('/');
  const root = MODPACK_CONFIG_RULES.roots.find((r) => r.toLowerCase() === (first ?? '').toLowerCase());
  if (!root || rest.length === 0 || rest.some((segment) => segment === '' || segment === '.')) return null;
  return [root, ...rest].join('/');
}

function extensionOf(path: string): string {
  const name = path.split('/').pop() ?? '';
  const dot = name.lastIndexOf('.');
  return dot > 0 ? name.slice(dot + 1).toLowerCase() : '';
}

/** Checks an uploaded zip and repacks its config files. Throws `VALIDATION_FAILED` with a code. */
export async function validateConfigZip(upload: Buffer): Promise<ValidatedConfigs> {
  if (upload.length === 0) invalid('The file is empty.', 'empty');
  if (upload.length > MODPACK_CONFIG_RULES.maxZipBytes) invalid('The zip is larger than 1 MB.', 'too_big');
  let zip: Awaited<ReturnType<typeof openZip>>;
  try {
    zip = await openZip(bufferSource(upload));
  } catch {
    invalid('This is not a valid zip file.', 'not_zip');
  }
  if (zip.entryCount > MAX_ENTRIES) invalid('The zip has too many entries.', 'too_many_files');
  const out: Record<string, Uint8Array> = {};
  const files: ConfigFile[] = [];
  const seen = new Set<string>();
  const decoder = new TextDecoder('utf-8', { fatal: true });
  try {
    for (let entry = await nextEntry(zip); entry !== null; entry = await nextEntry(zip)) {
      const name = entryName(entry);
      if (name.endsWith('/') || name.endsWith('\\')) continue;
      if (isUnsafeZipPath(name)) invalid('A path in the zip points outside the game folder.', 'unsafe_path', name);
      const path = normalizeConfigPath(name);
      if (!path) invalid('Every file must be inside UserData/ or Mods/.', 'outside_roots', name);
      if (!(MODPACK_CONFIG_RULES.extensions as readonly string[]).includes(extensionOf(path))) {
        invalid('Only config files are allowed (cfg, toml, json, ini, txt, xml, yml).', 'extension', name);
      }
      const key = path.toLowerCase();
      if (seen.has(key)) invalid('The same file is in the zip twice.', 'duplicate', name);
      seen.add(key);
      if (files.length >= MODPACK_CONFIG_RULES.maxFiles) invalid('The zip has more than 100 files.', 'too_many_files');
      if (entry.uncompressedSize > MODPACK_CONFIG_RULES.maxFileBytes)
        invalid('A file is larger than 256 KB.', 'file_too_big', name);
      const bytes = await readEntry(zip, entry, MODPACK_CONFIG_RULES.maxFileBytes);
      if (bytes.includes(0)) invalid('A file is not a text file.', 'binary', name);
      try {
        decoder.decode(bytes);
      } catch {
        invalid('A file is not a text file.', 'binary', name);
      }
      out[path] = new Uint8Array(bytes);
      files.push({ path, size: bytes.length });
    }
  } finally {
    zip.close();
  }
  if (files.length === 0) invalid('The zip has no config files.', 'empty');
  files.sort((a, b) => a.path.localeCompare(b.path));
  const repacked = zipSync(out, { level: 9, mtime: new Date('2026-01-01T00:00:00Z') });
  const sha256 = createHash('sha256').update(repacked).digest('hex');
  return { files, zip: repacked, sha256 };
}

/** Storage key of a repacked config zip. */
export function configKeyOf(kitId: number, sha256: string): string {
  return `modpacks/configs/${kitId}/${sha256}.zip`;
}
