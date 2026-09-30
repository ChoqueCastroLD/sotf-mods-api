/**
 * The node-semver `gt` port against the real node-semver 7.8.5 output (table generated with
 * `semver.gt(a, b)`; `throws:` = the TypeError message).
 */
import { describe, expect, it } from 'vitest';
import { compareSemver, isValidSemver, parseSemver, semverGt } from './semver.ts';

const ORACLE: ReadonlyArray<readonly [string, string, boolean | string]> = [
  ['1.3.8', '1.3.7', true],
  ['1.3.8', '1.3.8', false],
  ['1.3.8', '1.3.9', false],
  ['1.3.8', 'v1.3.7', true],
  ['1.3.8', '=1.3.7', 'throws:Invalid Version: =1.3.7'],
  ['1.3.8', ' 1.3.7 ', true],
  ['1.3.8', '1.3', 'throws:Invalid Version: 1.3'],
  ['1.3.8', 'notsemver', 'throws:Invalid Version: notsemver'],
  ['019a1b2c-0000-7000-8000-000000000000', '1.0.0', 'throws:Invalid Version: 019a1b2c-0000-7000-8000-000000000000'],
  ['1.0.0', '1.0.0-beta', true],
  ['1.0.0-beta', '1.0.0', false],
  ['1.0.0-beta.2', '1.0.0-beta.10', false],
  ['1.0.0-beta.10', '1.0.0-beta.2', true],
  ['1.0.0-alpha', '1.0.0-alpha.1', false],
  ['1.0.0-alpha.1', '1.0.0-alpha', true],
  ['1.0.0-alpha.beta', '1.0.0-alpha.1', true],
  ['1.0.0-rc.1', '1.0.0-beta.11', true],
  ['1.0.0+build.1', '1.0.0', false],
  ['1.0.0', '1.0.0+build', false],
  ['1.0.10', '1.0.2', true],
  ['v2.0.0', '1.9.9', true],
  ['01.0.0', '1.0.0', 'throws:Invalid Version: 01.0.0'],
  ['1.0.0', '1.0.0.0', 'throws:Invalid Version: 1.0.0.0'],
  ['1.2.3', 'V1.2.3', 'throws:Invalid Version: V1.2.3'],
  ['1.2.3', 'v 1.2.3', 'throws:Invalid Version: v 1.2.3'],
  ['2.0.0', '1.0.0-0', true],
  ['1.0.0-0', '1.0.0-a', false],
  ['1.0.0-a', '1.0.0-0', true],
  ['1.0.0-01', '1.0.0-1', 'throws:Invalid Version: 1.0.0-01'],
  ['1.0.0', '9007199254740992.0.0', 'throws:Invalid major version'],
  ['1.0.0-x-y', '1.0.0-x', true],
  ['1.0.0', '1.0.0-', 'throws:Invalid Version: 1.0.0-'],
  ['1.0.0', '', 'throws:Invalid Version: '],
  ['1.0.0', '1.0.0 ', false],
  ['1.0.0', '\t1.0.0\n', false],
];

describe('semverGt (node-semver gt)', () => {
  it.each(ORACLE)('gt(%j, %j) → %j', (a, b, expected) => {
    if (typeof expected === 'string') {
      expect(() => semverGt(a, b)).toThrowError(new TypeError(expected.slice('throws:'.length)));
    } else {
      expect(semverGt(a, b)).toBe(expected);
    }
  });

  it('compares like semver.compare and ignores build metadata', () => {
    expect(compareSemver('1.0.0+a', '1.0.0+b')).toBe(0);
    expect(compareSemver('1.2.3', '1.10.0')).toBe(-1);
    expect(compareSemver('3.0.0', '2.99.99')).toBe(1);
  });

  it('parses the prerelease identifiers (numeric ones as numbers)', () => {
    expect(parseSemver('v1.2.3-beta.11.x-1+sha.1')).toEqual({
      major: 1,
      minor: 2,
      patch: 3,
      prerelease: ['beta', 11, 'x-1'],
    });
    expect(isValidSemver('1.2.3')).toBe(true);
    expect(isValidSemver('1.2')).toBe(false);
    expect(isValidSemver('x'.repeat(300))).toBe(false);
  });
});
