/**
 * In-browser inspection of the file **before** it is uploaded (PLAN §7.5 step 1, research/03
 * §6.8): fflate reads the zip's central directory (only `manifest.json` is decompressed), the
 * manifest is validated with the same RedLoader schema the API uses (`@sotf/contracts/manifest`)
 * and every entry is classified with the same rules as the worker's inspection
 * (`@sotf/core/inspection/zip.ts`): zip slip, absolute paths, compression-ratio bombs, entry count,
 * extension allowlist and flagged executables. BuildShare JSON is validated with the blueprint
 * schema and its embedded thumbnail is shown.
 *
 * The server inspection stays authoritative (it also sees symlinks, encrypted entries and runs the
 * security scan); this pass exists so a creator learns what is wrong without waiting for an
 * upload. Loaded lazily (`import('./inspect.ts')`) so fflate and Zod stay out of the route chunk.
 */
import {
  type BlueprintSummary,
  classifyZipEntry,
  FILE_CHECKS,
  type InspectionFlagCode,
  isUnsafeZipPath,
  type ManifestIssue,
  parseBuildShareBlueprintText,
  parseRedLoaderManifestText,
  type RedLoaderManifest,
} from '@sotf/contracts/manifest';
import { unzipSync } from 'fflate';

/** Entries whose uncompressed size is below this are never treated as bombs by ratio (1 MiB). */
const ENTRY_RATIO_MIN_BYTES = 1024 * 1024;
/** Max bytes of a manifest.json (real ones are < 2 KiB). */
const MANIFEST_MAX_BYTES = 256 * 1024;
/** Entries listed in the report (the server lists the first 500 too). */
const MAX_LISTED_ENTRIES = 500;

export type EntryStatus = 'allowed' | 'flagged' | 'not_allowed' | 'unsafe';

export interface LocalEntry {
  path: string;
  size: number;
  compressed: number;
  status: EntryStatus;
}

export interface LocalProblem {
  code: InspectionFlagCode;
  severity: 'error' | 'warning';
  path: string | null;
  detail: string | null;
}

export interface LocalZipReport {
  kind: 'zip';
  manifest: RedLoaderManifest | null;
  manifestPath: string | null;
  /** Errors and warnings of the manifest itself (missing name, invalid logColor…). */
  manifestIssues: ManifestIssue[];
  entries: LocalEntry[];
  entriesTotal: number;
  uncompressedBytes: number;
  ratio: number | null;
  problems: LocalProblem[];
  sha256: string | null;
}

export interface LocalBuildReport {
  kind: 'build';
  blueprint: BlueprintSummary | null;
  issues: ManifestIssue[];
  problems: LocalProblem[];
  sha256: string | null;
}

export type LocalReport = LocalZipReport | LocalBuildReport;

function depth(path: string): number {
  return path.split('/').filter(Boolean).length;
}

function isManifestPath(path: string): boolean {
  const base = path.slice(path.lastIndexOf('/') + 1).toLowerCase();
  return base === 'manifest.json' && depth(path) <= 3;
}

function isAbsolute(path: string): boolean {
  return /^[A-Za-z]:/.test(path) || path.startsWith('/') || path.startsWith('\\');
}

/** SHA-256 of the bytes (hex), or null where WebCrypto is unavailable (plain http outside localhost). */
export async function sha256Hex(bytes: Uint8Array): Promise<string | null> {
  try {
    if (!globalThis.crypto?.subtle) return null;
    const digest = await crypto.subtle.digest('SHA-256', bytes as Uint8Array<ArrayBuffer>);
    return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
  } catch {
    return null;
  }
}

/** Keeps at most 10 problems per code (like the server), plus one «more omitted» marker. */
class ProblemList {
  readonly list: LocalProblem[] = [];
  readonly #counts = new Map<string, number>();

  add(problem: LocalProblem): void {
    const n = this.#counts.get(problem.code) ?? 0;
    this.#counts.set(problem.code, n + 1);
    if (n < 10) this.list.push(problem);
  }
}

/** Reads a mod zip in memory and reports what the server inspection would find. */
export async function inspectZip(file: File): Promise<LocalZipReport> {
  const bytes = new Uint8Array(await file.arrayBuffer());
  const report: LocalZipReport = {
    kind: 'zip',
    manifest: null,
    manifestPath: null,
    manifestIssues: [],
    entries: [],
    entriesTotal: 0,
    uncompressedBytes: 0,
    ratio: null,
    problems: [],
    sha256: null,
  };
  const problems = new ProblemList();
  const candidates: string[] = [];
  let unzipped: Record<string, Uint8Array> = {};
  try {
    unzipped = unzipSync(bytes, {
      filter: (info) => {
        const path = info.name.replaceAll('\\', '/');
        report.entriesTotal += 1;
        report.uncompressedBytes += info.originalSize;
        const unsafe = isAbsolute(info.name) || isUnsafeZipPath(info.name);
        const classified = classifyZipEntry(path);
        const status: EntryStatus = unsafe ? 'unsafe' : classified;
        if (report.entries.length < MAX_LISTED_ENTRIES) {
          report.entries.push({ path, size: info.originalSize, compressed: info.size, status });
        }
        if (isAbsolute(info.name)) problems.add({ code: 'absolute_path', severity: 'error', path, detail: null });
        else if (isUnsafeZipPath(info.name)) problems.add({ code: 'zip_slip', severity: 'error', path, detail: null });
        if (
          info.originalSize >= ENTRY_RATIO_MIN_BYTES &&
          info.originalSize / Math.max(1, info.size) > FILE_CHECKS.maxCompressionRatio
        ) {
          problems.add({
            code: 'zip_bomb_ratio',
            severity: 'error',
            path,
            detail: String(Math.round(info.originalSize / Math.max(1, info.size))),
          });
        }
        if (classified === 'flagged')
          problems.add({ code: 'extension_flagged', severity: 'warning', path, detail: null });
        else if (classified === 'not_allowed') {
          problems.add({ code: 'extension_not_allowed', severity: 'warning', path, detail: null });
        }
        const manifest =
          !path.endsWith('/') &&
          !unsafe &&
          isManifestPath(path) &&
          info.originalSize <= MANIFEST_MAX_BYTES &&
          (info.compression === 0 || info.compression === 8);
        if (manifest) candidates.push(info.name);
        return manifest;
      },
    });
  } catch (error) {
    problems.add({
      code: 'zip_invalid',
      severity: 'error',
      path: null,
      detail: error instanceof Error ? error.message : null,
    });
    report.problems = problems.list;
    return report;
  }

  if (report.entriesTotal > FILE_CHECKS.maxEntries) {
    problems.add({
      code: 'zip_too_many_entries',
      severity: 'error',
      path: null,
      detail: String(report.entriesTotal),
    });
  }
  report.ratio = file.size > 0 ? Math.round((report.uncompressedBytes / file.size) * 100) / 100 : null;
  if (report.ratio !== null && report.ratio > FILE_CHECKS.maxCompressionRatio) {
    problems.add({ code: 'zip_bomb_ratio', severity: 'error', path: null, detail: String(Math.round(report.ratio)) });
  }

  const chosen = candidates
    .map((name) => ({ name, path: name.replaceAll('\\', '/') }))
    .sort((a, b) => depth(a.path) - depth(b.path) || a.path.localeCompare(b.path))[0];
  if (!chosen) {
    problems.add({ code: 'manifest_missing', severity: 'error', path: null, detail: null });
  } else {
    report.manifestPath = chosen.path;
    const raw = unzipped[chosen.name];
    const text = raw ? new TextDecoder('utf-8').decode(raw) : '';
    const parsed = parseRedLoaderManifestText(text);
    if (parsed.ok) {
      report.manifest = parsed.value;
      report.manifestIssues = parsed.warnings;
    } else {
      report.manifestIssues = parsed.issues;
      for (const issue of parsed.issues) {
        if (issue.severity !== 'error') continue;
        const code: InspectionFlagCode =
          issue.field === 'version' && issue.code === 'invalid_version' ? 'version_not_semver' : 'manifest_invalid';
        problems.add({
          code,
          severity: 'error',
          path: chosen.path,
          detail: `${issue.field || 'manifest'}: ${issue.message}`,
        });
      }
    }
  }
  report.problems = problems.list;
  report.sha256 = await sha256Hex(bytes);
  return report;
}

/** Reads a BuildShare blueprint (`.json`) and extracts its summary and thumbnail. */
export async function inspectBuild(file: File): Promise<LocalBuildReport> {
  const bytes = new Uint8Array(await file.arrayBuffer());
  const text = new TextDecoder('utf-8').decode(bytes);
  const parsed = parseBuildShareBlueprintText(text);
  const report: LocalBuildReport = {
    kind: 'build',
    blueprint: parsed.ok ? parsed.value : null,
    issues: parsed.ok ? parsed.warnings : parsed.issues,
    problems: parsed.ok
      ? []
      : [
          {
            code: 'blueprint_invalid',
            severity: 'error',
            path: null,
            detail: parsed.issues.map((issue) => `${issue.field || 'file'}: ${issue.message}`).join('; '),
          },
        ],
    sha256: null,
  };
  report.sha256 = await sha256Hex(bytes);
  return report;
}

/** Whether the local report blocks the upload (the server would reject the file). */
export function hasBlockingProblems(report: LocalReport): boolean {
  return report.problems.some((problem) => problem.severity === 'error');
}
