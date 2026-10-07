import { strToU8, zipSync } from 'fflate';
import { describe, expect, it } from 'vitest';
import { BundleTooLargeError, mergeFiles, planItemFiles, safeEntryPath } from './plan.ts';

const MB = 1024 * 1024;

describe('bundle layout', () => {
  it('places mod zips under Mods/ unless they start with a game folder, and drops unsafe paths', () => {
    const data = zipSync({
      'MyMod/MyMod.dll': strToU8('MZ'),
      'UserData/cfg.ini': strToU8('x'),
      '../evil.dll': strToU8('MZ'),
      'MyMod/': new Uint8Array(0),
    });
    const files = planItemFiles({ filename: 'MyMod-1.0.0.zip', isBuild: false, data });
    expect(files.map((f) => f.path).sort()).toEqual(['Mods/MyMod/MyMod.dll', 'UserData/cfg.ini']);
    expect(safeEntryPath('a/../b')).toBeNull();
    expect(mergeFiles([files, files]).conflicts).toHaveLength(2);
  });

  it('refuses a zip whose declared sizes exceed what the bundle has left, before inflating it', () => {
    // 64 MB of zeros compress to a few dozen KB: it passes the upload checks only when the ratio is
    // under 100, but even then it must not expand past the bundle's byte budget in the worker.
    const data = zipSync({ 'Mod/zeros.bin': new Uint8Array(64 * MB), 'Mod/Mod.dll': strToU8('MZ') }, { level: 9 });
    expect(data.length).toBeLessThan(MB);
    expect(() => planItemFiles({ filename: 'bomb.zip', isBuild: false, data }, { maxBytes: 10 * MB })).toThrow(
      BundleTooLargeError,
    );
    // The same zip fits when the budget allows it.
    const files = planItemFiles({ filename: 'bomb.zip', isBuild: false, data }, { maxBytes: 100 * MB });
    expect(files).toHaveLength(2);
  }, 60_000);

  it('counts the budget across entries', () => {
    const data = zipSync({ 'a.bin': new Uint8Array(6 * MB), 'b.bin': new Uint8Array(6 * MB) });
    expect(() => planItemFiles({ filename: 'x.zip', isBuild: false, data }, { maxBytes: 10 * MB })).toThrow(
      BundleTooLargeError,
    );
  });
});
