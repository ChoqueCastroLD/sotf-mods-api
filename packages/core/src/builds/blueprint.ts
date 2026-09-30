/**
 * BuildShare blueprints (T0-24): structure validation (`Guid`, `Name`, `Description`,
 * `Data.Version`, `NumberOfElements`), the real 20 MB limit (fixes the legacy 100 GB bug),
 * `buildMeta` (elements, structures, BuildShare version, blueprint author, size class) and the
 * embedded PNG thumbnail.
 */
import {
  type BlueprintSummary,
  type BuildMetaDTO,
  FILE_CHECKS,
  type InspectionFlagDTO,
  type ManifestIssue,
  parseBuildShareBlueprintText,
} from '@sotf/contracts/manifest';
import type { BuildMeta } from '@sotf/db';

export interface BlueprintInspection {
  summary: BlueprintSummary | null;
  buildMeta: BuildMetaDTO | null;
  issues: ManifestIssue[];
  flags: InspectionFlagDTO[];
}

/** `ModVersion.buildMeta` of a parsed blueprint. */
export function buildMetaOf(summary: BlueprintSummary): BuildMetaDTO {
  return {
    guid: summary.guid,
    buildshareVersion: summary.buildShareVersion,
    elements: summary.numberOfElements,
    structures: summary.structuresCount,
    blueprintAuthor: summary.author,
    sizeClass: summary.sizeClass,
  };
}

/** Validates a blueprint file. Never throws: problems become flags. */
export function inspectBlueprint(buffer: Buffer): BlueprintInspection {
  const flags: InspectionFlagDTO[] = [];
  if (buffer.length > FILE_CHECKS.maxBuildBytes) {
    flags.push({
      code: 'file_too_large',
      severity: 'error',
      path: null,
      detail: `${buffer.length} bytes (max ${FILE_CHECKS.maxBuildBytes})`,
    });
    return { summary: null, buildMeta: null, issues: [], flags };
  }
  const text = new TextDecoder('utf-8', { fatal: false }).decode(buffer);
  const parsed = parseBuildShareBlueprintText(text);
  if (!parsed.ok) {
    for (const issue of parsed.issues.filter((i) => i.severity === 'error').slice(0, 20)) {
      flags.push({
        code: 'blueprint_invalid',
        severity: 'error',
        path: null,
        detail: `${issue.field || 'blueprint'}: ${issue.message}`,
      });
    }
    return { summary: null, buildMeta: null, issues: parsed.issues, flags };
  }
  return { summary: parsed.value, buildMeta: buildMetaOf(parsed.value), issues: parsed.warnings, flags };
}

/** `buildMeta` as stored in `ModVersion.buildMeta` (the JSON column omits null fields). */
export function storedBuildMeta(meta: BuildMetaDTO | null): BuildMeta | null {
  if (!meta) return null;
  return {
    guid: meta.guid,
    buildshareVersion: meta.buildshareVersion,
    elements: meta.elements,
    ...(meta.structures === null ? {} : { structures: meta.structures }),
    ...(meta.blueprintAuthor === null ? {} : { blueprintAuthor: meta.blueprintAuthor }),
    sizeClass: meta.sizeClass,
  };
}

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
/** Max decoded thumbnail (the blueprint schema caps the base64 at 12 MB). */
export const MAX_THUMBNAIL_BYTES = 8 * 1024 * 1024;

/** Decoded embedded thumbnail, or null when absent or not a PNG. */
export function decodeThumbnail(summary: BlueprintSummary): Buffer | null {
  if (!summary.thumbnailBase64) return null;
  const png = Buffer.from(summary.thumbnailBase64, 'base64');
  if (png.length < PNG_SIGNATURE.length || png.length > MAX_THUMBNAIL_BYTES) return null;
  if (!png.subarray(0, PNG_SIGNATURE.length).equals(PNG_SIGNATURE)) return null;
  return png;
}
