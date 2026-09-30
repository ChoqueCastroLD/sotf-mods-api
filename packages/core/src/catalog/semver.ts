/**
 * Version ordering (T0-04, PLAN §5.2 "versions"): semver precedence (SemVer 2.0.0 §11: numeric
 * major/minor/patch, a pre-release sorts before its release, identifiers compared numerically or
 * lexically; build metadata ignored). An optional leading `v` is accepted. BuildShare 1.0.10 > 1.0.2.
 * Strings that are not semver (legacy oddities, build uuids) sort after every semver version and
 * are then ordered by date by the caller.
 */

export interface Semver {
  major: number;
  minor: number;
  patch: number;
  pre: Array<string | number>;
}

const SEMVER =
  /^v?(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/;

/** Parses a semantic version; null when the string is not one. */
export function parseSemver(value: string): Semver | null {
  const match = SEMVER.exec(value.trim());
  if (!match) return null;
  const major = Number(match[1]);
  const minor = Number(match[2]);
  const patch = Number(match[3]);
  if (![major, minor, patch].every(Number.isSafeInteger)) return null;
  const pre = match[4] ? match[4].split('.').map((id) => (/^\d+$/.test(id) ? Number(id) : id)) : [];
  return { major, minor, patch, pre };
}

function comparePre(a: Array<string | number>, b: Array<string | number>): number {
  if (a.length === 0 && b.length === 0) return 0;
  if (a.length === 0) return 1; // a release outranks its pre-releases
  if (b.length === 0) return -1;
  const n = Math.max(a.length, b.length);
  for (let i = 0; i < n; i++) {
    const x = a[i];
    const y = b[i];
    if (x === undefined) return -1;
    if (y === undefined) return 1;
    if (x === y) continue;
    if (typeof x === 'number' && typeof y === 'number') return x < y ? -1 : 1;
    if (typeof x === 'number') return -1; // numeric identifiers have lower precedence
    if (typeof y === 'number') return 1;
    return x < y ? -1 : 1;
  }
  return 0;
}

/** Compares two parsed versions (negative when a < b). */
export function compareSemver(a: Semver, b: Semver): number {
  return a.major - b.major || a.minor - b.minor || a.patch - b.patch || comparePre(a.pre, b.pre);
}

export interface Versioned {
  version: string;
  createdAt: Date;
  id: number;
}

/**
 * Newest first: semver versions by precedence (ties by date), then the non-semver ones by date.
 * Builds (`kind = 'build'`, uuid versions) are ordered by date only.
 */
export function sortVersionsNewestFirst<T extends Versioned>(items: readonly T[], byDateOnly = false): T[] {
  const parsed = items.map((item) => ({ item, sv: byDateOnly ? null : parseSemver(item.version) }));
  parsed.sort((a, b) => {
    if (a.sv && b.sv) {
      const c = compareSemver(b.sv, a.sv);
      if (c !== 0) return c;
    } else if (a.sv) return -1;
    else if (b.sv) return 1;
    return b.item.createdAt.getTime() - a.item.createdAt.getTime() || b.item.id - a.item.id;
  });
  return parsed.map((p) => p.item);
}
