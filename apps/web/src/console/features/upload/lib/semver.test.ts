import { describe, expect, it } from 'vitest';
import { checkNextVersion, compareSemver, highestSemver, parseSemver } from './semver.ts';

describe('parseSemver', () => {
  it('accepts an optional v, pre-releases and build metadata', () => {
    expect(parseSemver('v1.2.3')).toEqual({ major: 1, minor: 2, patch: 3, pre: [] });
    expect(parseSemver('1.2.3-beta.2+build.7')).toEqual({ major: 1, minor: 2, patch: 3, pre: ['beta', 2] });
  });

  it('rejects leading zeros, missing parts and garbage', () => {
    for (const bad of ['01.2.3', '1.2', '1.2.3.4', 'latest', '', '1.2.3-']) expect(parseSemver(bad)).toBeNull();
  });
});

describe('compareSemver', () => {
  const parsed = (value: string) => {
    const result = parseSemver(value);
    if (!result) throw new Error(`not semver: ${value}`);
    return result;
  };
  const cmp = (a: string, b: string) => Math.sign(compareSemver(parsed(a), parsed(b)));

  it('follows semver precedence', () => {
    expect(cmp('1.0.0', '1.0.1')).toBe(-1);
    expect(cmp('1.10.0', '1.9.9')).toBe(1);
    expect(cmp('1.0.0-alpha', '1.0.0')).toBe(-1);
    expect(cmp('1.0.0-alpha', '1.0.0-alpha.1')).toBe(-1);
    expect(cmp('1.0.0-alpha.1', '1.0.0-alpha.beta')).toBe(-1);
    expect(cmp('1.0.0-beta.2', '1.0.0-beta.11')).toBe(-1);
    expect(cmp('1.0.0+a', '1.0.0+b')).toBe(0);
  });
});

describe('highestSemver', () => {
  it('ignores non-semver versions', () => {
    expect(highestSemver(['1.0.0', 'weird', '1.2.0-rc.1', '1.1.9'])).toBe('1.2.0-rc.1');
    expect(highestSemver(['nope'])).toBeNull();
  });
});

describe('checkNextVersion', () => {
  it('accepts the first version and greater versions', () => {
    expect(checkNextVersion('1.0.0', [])).toEqual({ ok: true, previous: null });
    expect(checkNextVersion('1.1.0', ['1.0.0'])).toEqual({ ok: true, previous: '1.0.0' });
  });

  it('refuses an existing version, with or without the v prefix', () => {
    expect(checkNextVersion('v1.0.0', ['1.0.0'])).toEqual({ ok: false, reason: 'exists', previous: '1.0.0' });
  });

  it('refuses a lower version or a pre-release of the current one', () => {
    expect(checkNextVersion('0.9.0', ['1.0.0'])).toMatchObject({ ok: false, reason: 'not_greater' });
    expect(checkNextVersion('1.0.0-rc.1', ['1.0.0'])).toMatchObject({ ok: false, reason: 'not_greater' });
  });

  it('accepts a release after its pre-release', () => {
    expect(checkNextVersion('1.0.0', ['1.0.0-rc.1'])).toEqual({ ok: true, previous: '1.0.0-rc.1' });
  });

  it('refuses a non-semver string', () => {
    expect(checkNextVersion('v2', ['1.0.0'])).toEqual({ ok: false, reason: 'not_semver', previous: '1.0.0' });
  });
});
