/**
 * Semantic-version ordering for the wizard's «greater than the previous version» check (PLAN §7.5
 * step 5), with the same precedence rules as the API (`@sotf/core` catalog/semver and
 * inspection `checkAgainstMod`): numeric major/minor/patch, a pre-release sorts before its
 * release, identifiers compared numerically or lexically, build metadata ignored, optional `v`.
 *
 * The server re-checks on every autosave and on submit; this copy lets the wizard refuse a lower
 * version **before** the file is uploaded.
 */

export interface Semver {
  major: number;
  minor: number;
  patch: number;
  pre: Array<string | number>;
}

const SEMVER =
  /^v?(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/;

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

function comparePre(a: ReadonlyArray<string | number>, b: ReadonlyArray<string | number>): number {
  if (a.length === 0 && b.length === 0) return 0;
  if (a.length === 0) return 1;
  if (b.length === 0) return -1;
  const n = Math.max(a.length, b.length);
  for (let i = 0; i < n; i++) {
    const x = a[i];
    const y = b[i];
    if (x === undefined) return -1;
    if (y === undefined) return 1;
    if (x === y) continue;
    if (typeof x === 'number' && typeof y === 'number') return x < y ? -1 : 1;
    if (typeof x === 'number') return -1;
    if (typeof y === 'number') return 1;
    return x < y ? -1 : 1;
  }
  return 0;
}

/** Negative when a < b. */
export function compareSemver(a: Semver, b: Semver): number {
  return a.major - b.major || a.minor - b.minor || a.patch - b.patch || comparePre(a.pre, b.pre);
}

/** The highest semver of `versions` (non-semver strings are ignored), or null. */
export function highestSemver(versions: readonly string[]): string | null {
  let best: { raw: string; parsed: Semver } | null = null;
  for (const raw of versions) {
    const parsed = parseSemver(raw);
    if (!parsed) continue;
    if (!best || compareSemver(parsed, best.parsed) > 0) best = { raw, parsed };
  }
  return best?.raw ?? null;
}

export type VersionCheck =
  | { ok: true; previous: string | null }
  | { ok: false; reason: 'not_semver' | 'exists' | 'not_greater'; previous: string | null };

/** Whether `next` may follow `existing` (the versions already published for the mod). */
export function checkNextVersion(next: string, existing: readonly string[]): VersionCheck {
  const previous = highestSemver(existing);
  const parsed = parseSemver(next);
  if (!parsed) return { ok: false, reason: 'not_semver', previous };
  const normalized = next.trim().replace(/^v/, '');
  if (existing.some((v) => v.trim().replace(/^v/, '') === normalized)) return { ok: false, reason: 'exists', previous };
  const previousParsed = previous ? parseSemver(previous) : null;
  if (previousParsed && compareSemver(parsed, previousParsed) <= 0)
    return { ok: false, reason: 'not_greater', previous };
  return { ok: true, previous };
}
