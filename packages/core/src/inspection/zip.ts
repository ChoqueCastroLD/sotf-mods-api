/**
 * Automatic checks of a mod zip (PLAN §7.4 "Checks automáticos", T0-04), read through a
 * `RandomAccessSource` (Range requests; the archive is never loaded whole):
 *
 * - valid zip; at most 5 000 entries (checked on the central directory record before iterating);
 * - compression ratio ≤ 100, for the whole archive and for any entry above 1 MiB (zip bomb);
 *   the declared sizes are what yauzl enforces when an entry is decompressed, so the manifest read
 *   cannot inflate beyond them;
 * - no `..` segment, absolute path, drive letter or symlink (zip slip);
 * - no central directory header past the entries the end record counts (entries other tools would
 *   extract but this check never listed);
 * - extension allowlist: other extensions and the executables (`exe bat cmd ps1 vbs scr msi lnk`)
 *   are *flagged* for human review (`warning`);
 * - `manifest.json` (shallowest one, ≤ 256 KiB) parsed with the RedLoader schema of the contracts:
 *   missing or broken → `error`; a non-semver version → `version_not_semver` (`error`).
 *
 * The mod-relative checks (same manifest id, greater semver) need the target mod and live in
 * `checks.ts`.
 */
import {
  classifyZipEntry,
  FILE_CHECKS,
  type InspectionFlagDTO,
  isUnsafeZipPath,
  type ManifestIssue,
  parseRedLoaderManifestText,
  type RedLoaderManifest,
  wellFormedText,
} from '@sotf/contracts/manifest';
import type yauzl from 'yauzl';
import { entryName, nextEntry, openZip, type RandomAccessSource, readEntry } from './reader.ts';

export interface ZipEntryInfo {
  path: string;
  size: number;
  compressed: number;
  crc32: number;
}

export interface ZipInspection {
  entries: ZipEntryInfo[];
  entriesTotal: number;
  uncompressedBytes: number | null;
  ratio: number | null;
  manifest: RedLoaderManifest | null;
  /** Path of the manifest that was read. */
  manifestPath: string | null;
  manifestIssues: ManifestIssue[];
  flags: InspectionFlagDTO[];
}

/** Max bytes of a manifest.json (real ones are < 2 KiB). */
export const MAX_MANIFEST_BYTES = 256 * 1024;
/** Entries at least this large are also checked one by one against the ratio. */
const ENTRY_RATIO_MIN_BYTES = 1024 * 1024;
/** Max flags of one kind kept (a zip with 4 000 `.pdb` files yields one line per file otherwise). */
const MAX_FLAGS_PER_CODE = 20;

/** Signature of a central directory file header (`PK\x01\x02`). */
const CENTRAL_HEADER_SIGNATURE = 0x02014b50;

const S_IFMT = 0o170000;
const S_IFLNK = 0o120000;

function flag(
  code: InspectionFlagDTO['code'],
  severity: InspectionFlagDTO['severity'],
  path: string | null,
  detail: string | null,
): InspectionFlagDTO {
  // `detail` can quote the file (a JSON syntax error shows the text around it); it is stored in jsonb.
  return {
    code,
    severity,
    path: path === null ? null : wellFormedText(path),
    detail: detail === null ? null : wellFormedText(detail),
  };
}

class FlagList {
  readonly list: InspectionFlagDTO[] = [];
  readonly #counts = new Map<string, number>();

  add(item: InspectionFlagDTO): void {
    const n = this.#counts.get(item.code) ?? 0;
    this.#counts.set(item.code, n + 1);
    if (n < MAX_FLAGS_PER_CODE) this.list.push(item);
    else if (n === MAX_FLAGS_PER_CODE) {
      this.list.push({ ...item, path: null, detail: 'more entries omitted' });
    }
  }
}

/** True when a central directory header follows the last entry the end record counts. */
async function hasHiddenEntries(zip: yauzl.ZipFile, source: RandomAccessSource): Promise<boolean> {
  const cursor = (zip as unknown as { readEntryCursor?: number }).readEntryCursor;
  if (typeof cursor !== 'number' || cursor < 0 || cursor + 4 > source.size) return false;
  const next = await source.read(cursor, cursor + 4);
  return next.length === 4 && next.readUInt32LE(0) === CENTRAL_HEADER_SIGNATURE;
}

function depth(path: string): number {
  return path.split('/').filter(Boolean).length;
}

function isManifestPath(path: string): boolean {
  const base = path.slice(path.lastIndexOf('/') + 1).toLowerCase();
  return base === 'manifest.json' && depth(path) <= 3;
}

function isSymlink(entry: yauzl.Entry): boolean {
  // Unix mode in the high 16 bits when "version made by" is Unix (3).
  const hostOs = entry.versionMadeBy >> 8;
  const mode = (entry.externalFileAttributes >>> 16) & 0xffff;
  return hostOs === 3 && (mode & S_IFMT) === S_IFLNK;
}

function manifestFlags(issues: readonly ManifestIssue[], path: string): InspectionFlagDTO[] {
  return issues
    .filter((issue) => issue.severity === 'error')
    .map((issue) =>
      issue.code === 'invalid_version'
        ? flag('version_not_semver', 'error', path, issue.message)
        : flag('manifest_invalid', 'error', path, `${issue.field || 'manifest'}: ${issue.message}`),
    );
}

/** Inspects a mod zip. Never throws for bad archives: problems become flags. */
export async function inspectZip(source: RandomAccessSource): Promise<ZipInspection> {
  const flags = new FlagList();
  const result: ZipInspection = {
    entries: [],
    entriesTotal: 0,
    uncompressedBytes: null,
    ratio: null,
    manifest: null,
    manifestPath: null,
    manifestIssues: [],
    flags: flags.list,
  };

  let zip: yauzl.ZipFile;
  try {
    zip = await openZip(source);
  } catch (error) {
    flags.add(flag('zip_invalid', 'error', null, error instanceof Error ? error.message : 'not a zip file'));
    return result;
  }
  try {
    result.entriesTotal = zip.entryCount;
    if (zip.entryCount > FILE_CHECKS.maxEntries) {
      flags.add(
        flag('zip_too_many_entries', 'error', null, `${zip.entryCount} entries (max ${FILE_CHECKS.maxEntries})`),
      );
      return result;
    }

    const manifests: Array<{ entry: yauzl.Entry; path: string }> = [];
    let uncompressed = 0;
    for (;;) {
      let entry: yauzl.Entry | null;
      try {
        entry = await nextEntry(zip);
      } catch (error) {
        flags.add(flag('zip_invalid', 'error', null, error instanceof Error ? error.message : 'corrupt zip'));
        return result;
      }
      if (!entry) break;
      // Stored in jsonb (the upload's result): a name with U+0000 would make that insert fail.
      const path = wellFormedText(entryName(entry).replaceAll('\\', '/'));
      result.entries.push({
        path,
        // zip64 sizes reach 2^64: past 2^53 they are no longer integers (the DTO and jsonb would refuse them).
        size: Math.min(entry.uncompressedSize, Number.MAX_SAFE_INTEGER),
        compressed: Math.min(entry.compressedSize, Number.MAX_SAFE_INTEGER),
        crc32: entry.crc32 >>> 0,
      });
      uncompressed += entry.uncompressedSize;

      const rawPath = entryName(entry);
      if (/^[A-Za-z]:/.test(rawPath) || rawPath.startsWith('/') || rawPath.startsWith('\\')) {
        flags.add(flag('absolute_path', 'error', path, 'absolute path'));
      } else if (isUnsafeZipPath(rawPath)) {
        flags.add(flag('zip_slip', 'error', path, 'path escapes the extraction folder'));
      } else if (isSymlink(entry)) {
        flags.add(flag('zip_slip', 'error', path, 'symbolic link'));
      }
      // biome-ignore lint/suspicious/noControlCharactersInRegex: that is what is being looked for
      if (/[\u0000-\u001f\u007f]/.test(rawPath)) {
        // A C-based extractor cuts the name at U+0000 (`evil.dll\0.txt` → `evil.dll`), past the extension checks.
        flags.add(flag('zip_invalid', 'error', path, 'control characters in the entry name'));
      }
      if (entry.isEncrypted()) flags.add(flag('zip_invalid', 'error', path, 'encrypted entry'));
      if (
        entry.uncompressedSize >= ENTRY_RATIO_MIN_BYTES &&
        entry.uncompressedSize / Math.max(1, entry.compressedSize) > FILE_CHECKS.maxCompressionRatio
      ) {
        flags.add(
          flag(
            'zip_bomb_ratio',
            'error',
            path,
            `compression ratio ${(entry.uncompressedSize / Math.max(1, entry.compressedSize)).toFixed(0)}`,
          ),
        );
      }
      const kind = classifyZipEntry(path);
      if (kind === 'flagged') flags.add(flag('extension_flagged', 'warning', path, 'executable or script'));
      else if (kind === 'not_allowed') flags.add(flag('extension_not_allowed', 'warning', path, null));
      if (!path.endsWith('/') && isManifestPath(path)) manifests.push({ entry, path });
    }

    // yauzl stops after the entry count of the end record. Tools that read the central directory to its
    // end (Python, .NET, WinRAR) also extract any header past that count, which nothing above looked at.
    if (await hasHiddenEntries(zip, source)) {
      flags.add(
        flag('zip_invalid', 'error', null, 'the central directory has entries that the end record does not count'),
      );
    }

    // The sum of zip64 sizes can exceed what the database column (bigint) and JSON numbers hold; such an
    // archive fails the ratio check below anyway.
    result.uncompressedBytes = Math.min(uncompressed, Number.MAX_SAFE_INTEGER);
    result.ratio = source.size > 0 ? Math.round((uncompressed / source.size) * 100) / 100 : null;
    if (result.ratio !== null && result.ratio > FILE_CHECKS.maxCompressionRatio) {
      flags.add(flag('zip_bomb_ratio', 'error', null, `compression ratio ${result.ratio.toFixed(0)}`));
    }

    const unsafe = flags.list.some((f) => f.severity === 'error');
    manifests.sort((a, b) => depth(a.path) - depth(b.path) || a.path.localeCompare(b.path));
    const chosen = manifests[0];
    if (!chosen) {
      flags.add(flag('manifest_missing', 'error', null, 'manifest.json not found'));
    } else if (!unsafe) {
      result.manifestPath = chosen.path;
      let text: string;
      try {
        text = new TextDecoder('utf-8', { fatal: false }).decode(
          await readEntry(zip, chosen.entry, MAX_MANIFEST_BYTES),
        );
      } catch (error) {
        flags.add(
          flag('manifest_invalid', 'error', chosen.path, error instanceof Error ? error.message : 'unreadable'),
        );
        return result;
      }
      const parsed = parseRedLoaderManifestText(text);
      if (parsed.ok) {
        result.manifest = parsed.value;
        result.manifestIssues = parsed.warnings;
      } else {
        result.manifestIssues = parsed.issues;
        for (const item of manifestFlags(parsed.issues, chosen.path)) flags.add(item);
      }
    }
    return result;
  } finally {
    zip.close();
  }
}
