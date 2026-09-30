/**
 * Checks of a file against the mod it is published into (PLAN §7.4): the manifest id must equal
 * the mod's `manifestId` ("`id` igual al `manifestId` del mod en las versiones nuevas") and the
 * version must be greater (semver precedence) than every earlier non-rejected version. Builds are
 * exempt from both (their version is a UUIDv7 and the blueprint GUID may change between saves).
 */
import type { InspectionFlagDTO } from '@sotf/contracts/manifest';
import { compareSemver, parseSemver } from '../catalog/semver.ts';

export type InspectionStatus = 'passed' | 'flagged' | 'failed';

/** `failed` with any error, `flagged` with any warning, else `passed`. */
export function inspectionStatus(flags: readonly Pick<InspectionFlagDTO, 'severity'>[]): InspectionStatus {
  if (flags.some((f) => f.severity === 'error')) return 'failed';
  if (flags.some((f) => f.severity === 'warning')) return 'flagged';
  return 'passed';
}

export interface ModTarget {
  manifestId: string;
  /** Versions already published into the mod (any status but `rejected`). */
  existingVersions: readonly string[];
}

/** Highest semver among `versions` (null when none is semver). */
export function highestSemver(versions: readonly string[]): string | null {
  let best: { raw: string; sv: NonNullable<ReturnType<typeof parseSemver>> } | null = null;
  for (const raw of versions) {
    const sv = parseSemver(raw);
    if (sv && (!best || compareSemver(sv, best.sv) > 0)) best = { raw, sv };
  }
  return best?.raw ?? null;
}

/** Flags of a new mod version against its mod. */
export function checkAgainstMod(manifest: { id: string; version: string }, target: ModTarget): InspectionFlagDTO[] {
  const flags: InspectionFlagDTO[] = [];
  if (manifest.id !== target.manifestId) {
    flags.push({
      code: 'manifest_id_mismatch',
      severity: 'error',
      path: null,
      detail: `manifest id "${manifest.id}" should be "${target.manifestId}"`,
    });
  }
  const next = parseSemver(manifest.version);
  if (!next) {
    flags.push({ code: 'version_not_semver', severity: 'error', path: null, detail: manifest.version });
    return flags;
  }
  const normalized = manifest.version.replace(/^v/, '');
  if (target.existingVersions.some((v) => v.replace(/^v/, '') === normalized)) {
    flags.push({
      code: 'version_not_greater',
      severity: 'error',
      path: null,
      detail: `version ${manifest.version} already exists`,
    });
    return flags;
  }
  const highest = highestSemver(target.existingVersions);
  const highestParsed = highest ? parseSemver(highest) : null;
  if (highest && highestParsed && compareSemver(next, highestParsed) <= 0) {
    flags.push({
      code: 'version_not_greater',
      severity: 'error',
      path: null,
      detail: `version ${manifest.version} must be greater than ${highest}`,
    });
  }
  return flags;
}
