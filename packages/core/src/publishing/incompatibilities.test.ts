import { describe, expect, it } from 'vitest';
import { hasIncompatibilityProblems, incompatibilityProblems } from './incompatibilities.ts';

const known = new Set(['AmmoUi', 'SonsAxLib', 'BlueFix']);

describe('incompatibilities', () => {
  it('accepts mods that exist and are not dependencies', () => {
    const problems = incompatibilityProblems({
      selfManifestId: 'MyMod',
      manifestDeps: ['SonsAxLib'],
      declared: [{ manifestId: 'AmmoUi', kind: 'conflicts' }],
      known,
    });
    expect(problems).toEqual({ unknown: [], self: false, dependency: [] });
    expect(hasIncompatibilityProblems(problems)).toBe(false);
  });

  it('refuses unknown ids, the mod itself and its dependencies (any case)', () => {
    const problems = incompatibilityProblems({
      selfManifestId: 'MyMod',
      manifestDeps: ['SonsAxLib'],
      declared: [
        { manifestId: 'Ghost', kind: 'conflicts' },
        { manifestId: 'mymod', kind: 'conflicts' },
        { manifestId: 'sonsaxlib', kind: 'conflicts' },
        { manifestId: 'BlueFix', kind: 'optional' },
        { manifestId: 'BlueFix', kind: 'conflicts' },
      ],
      known,
    });
    expect(problems).toEqual({ unknown: ['Ghost'], self: true, dependency: ['sonsaxlib', 'BlueFix'] });
    expect(hasIncompatibilityProblems(problems)).toBe(true);
  });

  it('ignores required and optional entries', () => {
    const problems = incompatibilityProblems({
      selfManifestId: 'MyMod',
      manifestDeps: [],
      declared: [{ manifestId: 'Ghost' }, { manifestId: 'Other', kind: 'optional' }],
      known,
    });
    expect(hasIncompatibilityProblems(problems)).toBe(false);
  });
});
