/**
 * `semver.gt(a, b)` of node-semver 7 (strict mode, the default), ported so `/api/mods/:id/check`
 * answers exactly like the legacy API (research/01 §2.5) without adding a dependency to @sotf/core.
 *
 * - Parsing: `version.trim()` must match `^v?MAJOR.MINOR.PATCH(-PRERELEASE)?(+BUILD)?$` (no `=`,
 *   no upper-case `V`, no leading zeros in numeric identifiers); anything else throws
 *   `TypeError("Invalid Version: <input>")`, and components above `Number.MAX_SAFE_INTEGER` throw
 *   `TypeError("Invalid major|minor|patch version")`. Inputs longer than 256 characters throw too.
 * - Precedence: SemVer 2.0 §11 (build metadata ignored; a pre-release sorts before its release;
 *   numeric identifiers compare numerically and sort before alphanumeric ones).
 *
 * The unit tests compare every case with the real node-semver output.
 */

const MAX_LENGTH = 256;
const NUMERIC_IDENTIFIER = '0|[1-9]\\d*';
const NON_NUMERIC_IDENTIFIER = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';
const PRERELEASE_IDENTIFIER = `(?:${NUMERIC_IDENTIFIER}|${NON_NUMERIC_IDENTIFIER})`;
const PRERELEASE = `(?:-(${PRERELEASE_IDENTIFIER}(?:\\.${PRERELEASE_IDENTIFIER})*))`;
const BUILD_IDENTIFIER = '[a-zA-Z0-9-]+';
const BUILD = `(?:\\+(${BUILD_IDENTIFIER}(?:\\.${BUILD_IDENTIFIER})*))`;
const MAIN_VERSION = `(${NUMERIC_IDENTIFIER})\\.(${NUMERIC_IDENTIFIER})\\.(${NUMERIC_IDENTIFIER})`;
const FULL = new RegExp(`^v?${MAIN_VERSION}${PRERELEASE}?${BUILD}?$`);
const NUMERIC = /^[0-9]+$/;

export interface ParsedSemver {
  major: number;
  minor: number;
  patch: number;
  prerelease: Array<string | number>;
}

function component(value: string, name: 'major' | 'minor' | 'patch'): number {
  const n = Number(value);
  if (n > Number.MAX_SAFE_INTEGER || n < 0) throw new TypeError(`Invalid ${name} version`);
  return n;
}

/** Parses like `new SemVer(version)`; throws the same `TypeError`s. */
export function parseSemver(version: string): ParsedSemver {
  if (version.length > MAX_LENGTH) throw new TypeError(`version is longer than ${MAX_LENGTH} characters`);
  const match = FULL.exec(version.trim());
  if (!match) throw new TypeError(`Invalid Version: ${version}`);
  const prerelease = match[4]
    ? match[4].split('.').map((id) => {
        if (NUMERIC.test(id)) {
          const n = Number(id);
          if (n >= 0 && n < Number.MAX_SAFE_INTEGER) return n;
        }
        return id;
      })
    : [];
  return {
    major: component(match[1] as string, 'major'),
    minor: component(match[2] as string, 'minor'),
    patch: component(match[3] as string, 'patch'),
    prerelease,
  };
}

/** True when `version` parses (same rules as node-semver `valid`). */
export function isValidSemver(version: string): boolean {
  try {
    parseSemver(version);
    return true;
  } catch {
    return false;
  }
}

function compareNumbers(a: number, b: number): number {
  return a === b ? 0 : a < b ? -1 : 1;
}

function compareIdentifiers(a: string | number, b: string | number): number {
  const aNum = NUMERIC.test(String(a));
  const bNum = NUMERIC.test(String(b));
  let x = a;
  let y = b;
  if (aNum && bNum) {
    x = Number(a);
    y = Number(b);
  }
  if (x === y) return 0;
  if (aNum && !bNum) return -1;
  if (bNum && !aNum) return 1;
  return x < y ? -1 : 1;
}

function comparePre(a: ParsedSemver, b: ParsedSemver): number {
  if (a.prerelease.length > 0 && b.prerelease.length === 0) return -1;
  if (a.prerelease.length === 0 && b.prerelease.length > 0) return 1;
  if (a.prerelease.length === 0 && b.prerelease.length === 0) return 0;
  for (let i = 0; ; i += 1) {
    const x = a.prerelease[i];
    const y = b.prerelease[i];
    if (x === undefined && y === undefined) return 0;
    if (y === undefined) return 1;
    if (x === undefined) return -1;
    if (x === y) continue;
    return compareIdentifiers(x, y);
  }
}

/** `semver.compare(a, b)`: -1, 0 or 1. Throws on invalid input (first `a`, then `b`). */
export function compareSemver(a: string, b: string): number {
  const x = parseSemver(a);
  const y = parseSemver(b);
  return (
    compareNumbers(x.major, y.major) ||
    compareNumbers(x.minor, y.minor) ||
    compareNumbers(x.patch, y.patch) ||
    comparePre(x, y)
  );
}

/** `semver.gt(a, b)`. */
export function semverGt(a: string, b: string): boolean {
  return compareSemver(a, b) > 0;
}
