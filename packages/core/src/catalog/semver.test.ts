import { describe, expect, it } from 'vitest';
import { compareSemver, parseSemver, sortVersionsNewestFirst } from './semver.ts';

const at = (i: number) => new Date(Date.UTC(2024, 0, 1 + i));

describe('semver', () => {
  it('parses x.y.z with optional v, pre-release and build metadata', () => {
    expect(parseSemver('1.0.10')).toEqual({ major: 1, minor: 0, patch: 10, pre: [] });
    expect(parseSemver('v2.0.0-beta.1+sha.5')).toEqual({ major: 2, minor: 0, patch: 0, pre: ['beta', 1] });
    expect(parseSemver('1.0')).toBeNull();
    expect(parseSemver('0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d')).toBeNull();
    expect(parseSemver('01.0.0')).toBeNull();
  });

  it('orders by precedence (SemVer §11)', () => {
    const order = [
      '1.0.0-alpha',
      '1.0.0-alpha.1',
      '1.0.0-alpha.beta',
      '1.0.0-beta',
      '1.0.0-beta.2',
      '1.0.0-beta.11',
      '1.0.0-rc.1',
      '1.0.0',
    ];
    for (let i = 1; i < order.length; i++) {
      const a = parseSemver(order[i - 1] as string);
      const b = parseSemver(order[i] as string);
      expect(a && b && compareSemver(a, b)).toBeLessThan(0);
    }
  });

  it('BuildShare: 1.0.10 is newer than 1.0.2 and 1.0.8', () => {
    const versions = ['1.0.8', '1.0.7', '1.0.6', '1.0.4', '1.0.3', '1.0.2', '1.0.10', '1.0.1', '1.0.0'].map(
      (version, i) => ({
        id: i + 1,
        version,
        createdAt: at(i),
      }),
    );
    expect(sortVersionsNewestFirst(versions).map((v) => v.version)).toEqual([
      '1.0.10',
      '1.0.8',
      '1.0.7',
      '1.0.6',
      '1.0.4',
      '1.0.3',
      '1.0.2',
      '1.0.1',
      '1.0.0',
    ]);
  });

  it('puts non-semver strings after semver ones, by date; builds are ordered by date only', () => {
    const versions = [
      { id: 1, version: 'final', createdAt: at(1) },
      { id: 2, version: '1.2.0', createdAt: at(0) },
      { id: 3, version: 'hotfix', createdAt: at(3) },
      { id: 4, version: '1.10.0', createdAt: at(2) },
    ];
    expect(sortVersionsNewestFirst(versions).map((v) => v.version)).toEqual(['1.10.0', '1.2.0', 'hotfix', 'final']);
    expect(sortVersionsNewestFirst(versions, true).map((v) => v.version)).toEqual([
      'hotfix',
      '1.10.0',
      'final',
      '1.2.0',
    ]);
  });
});
