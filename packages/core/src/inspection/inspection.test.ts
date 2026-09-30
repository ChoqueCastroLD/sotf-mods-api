import { zipSync } from 'fflate';
import { describe, expect, it } from 'vitest';
import { checkAgainstMod, highestSemver, inspectionStatus } from './checks.ts';
import { bufferSource } from './reader.ts';
import { inspectZip } from './zip.ts';

const enc = (text: string) => new TextEncoder().encode(text);
const manifest = (over: Record<string, unknown> = {}) =>
  enc(JSON.stringify({ id: 'AxelModMenu', name: 'Axel Mod Menu', version: '1.3.8', type: 'Mod', ...over }));

function zip(files: Record<string, Uint8Array>, level: 0 | 9 = 9): Buffer {
  return Buffer.from(zipSync(files, { level }));
}

async function inspect(files: Record<string, Uint8Array>, level: 0 | 9 = 9) {
  return inspectZip(bufferSource(zip(files, level)));
}

const codes = (flags: ReadonlyArray<{ code: string }>) => flags.map((f) => f.code).sort();

describe('zip inspection (PLAN §7.4 automatic checks)', () => {
  it('passes a valid mod zip and reads the shallowest manifest', async () => {
    const result = await inspect({
      'AxelModMenu/manifest.json': manifest(),
      'AxelModMenu/AxelModMenu.dll': enc('MZ binary'),
      'AxelModMenu/Deep/Nested/manifest.json': manifest({ id: 'Other' }),
      'AxelModMenu.dll': enc('MZ'),
    });
    expect(result.flags).toEqual([]);
    expect(inspectionStatus(result.flags)).toBe('passed');
    expect(result.manifest).toMatchObject({ id: 'AxelModMenu', version: '1.3.8', type: 'Mod', dependencies: [] });
    expect(result.manifestPath).toBe('AxelModMenu/manifest.json');
    expect(result.entriesTotal).toBe(4);
    expect(result.entries.find((e) => e.path === 'AxelModMenu/AxelModMenu.dll')?.crc32).toBeGreaterThan(0);
    expect(result.ratio).toBeGreaterThan(0);
  });

  it('refuses a zip bomb (compression ratio > 100)', async () => {
    const result = await inspect({ 'manifest.json': manifest(), 'Big/zeros.bin': new Uint8Array(4 * 1024 * 1024) });
    expect(codes(result.flags)).toContain('zip_bomb_ratio');
    expect(inspectionStatus(result.flags)).toBe('failed');
    // Unsafe archives are never read further.
    expect(result.manifest).toBeNull();
  });

  it('refuses zip slip and absolute paths', async () => {
    const slip = await inspect({ 'manifest.json': manifest(), '../x.dll': enc('MZ') });
    expect(slip.flags).toContainEqual(
      expect.objectContaining({ code: 'zip_slip', path: '../x.dll', severity: 'error' }),
    );
    const nested = await inspect({ 'manifest.json': manifest(), 'Mod/../../evil.dll': enc('MZ') });
    expect(codes(nested.flags)).toContain('zip_slip');
    const absolute = await inspect({ 'manifest.json': manifest(), '/etc/passwd.txt': enc('x') });
    expect(codes(absolute.flags)).toContain('absolute_path');
  });

  it('flags executables and unknown extensions for human review without failing', async () => {
    const result = await inspect({
      'manifest.json': manifest(),
      'Mod/setup.exe': enc('MZ'),
      'Mod/notes.xyz': enc('?'),
    });
    expect(result.flags).toContainEqual(
      expect.objectContaining({ code: 'extension_flagged', severity: 'warning', path: 'Mod/setup.exe' }),
    );
    expect(result.flags).toContainEqual(
      expect.objectContaining({ code: 'extension_not_allowed', path: 'Mod/notes.xyz' }),
    );
    expect(inspectionStatus(result.flags)).toBe('flagged');
    expect(result.manifest?.id).toBe('AxelModMenu');
  });

  it('keeps at most 20 flags of one kind', async () => {
    const files: Record<string, Uint8Array> = { 'manifest.json': manifest() };
    for (let i = 0; i < 30; i += 1) files[`Mod/tool${i}.bat`] = enc('@echo off');
    const result = await inspect(files);
    const flagged = result.flags.filter((f) => f.code === 'extension_flagged');
    expect(flagged).toHaveLength(21);
    expect(flagged[20]).toMatchObject({ path: null, detail: 'more entries omitted' });
  });

  it('reports missing, broken and non-semver manifests as errors', async () => {
    expect(codes((await inspect({ 'Mod/Mod.dll': enc('MZ') })).flags)).toEqual(['manifest_missing']);
    expect(codes((await inspect({ 'manifest.json': enc('{not json') })).flags)).toEqual(['manifest_invalid']);
    expect(codes((await inspect({ 'manifest.json': manifest({ version: 'one' }) })).flags)).toContain(
      'version_not_semver',
    );
    expect(codes((await inspect({ 'manifest.json': manifest({ type: 'Plugin' }) })).flags)).toContain(
      'manifest_invalid',
    );
  });

  it('turns a non-zip file into a flag instead of throwing', async () => {
    const result = await inspectZip(bufferSource(Buffer.from('this is not a zip')));
    expect(codes(result.flags)).toEqual(['zip_invalid']);
  });
});

describe('checks against the target mod', () => {
  const target = { manifestId: 'AxelModMenu', existingVersions: ['1.2.0', '1.3.8', 'v1.3.9-beta.1', 'legacy'] };

  it('requires the same manifest id and a greater semver', () => {
    expect(checkAgainstMod({ id: 'AxelModMenu', version: '1.4.0' }, target)).toEqual([]);
    expect(codes(checkAgainstMod({ id: 'Other', version: '1.4.0' }, target))).toEqual(['manifest_id_mismatch']);
    expect(codes(checkAgainstMod({ id: 'AxelModMenu', version: '1.3.0' }, target))).toEqual(['version_not_greater']);
    expect(checkAgainstMod({ id: 'AxelModMenu', version: 'v1.3.8' }, target)[0]?.detail).toMatch(/already exists/);
    expect(codes(checkAgainstMod({ id: 'AxelModMenu', version: 'soon' }, target))).toEqual(['version_not_semver']);
    // A release is greater than its pre-release.
    expect(checkAgainstMod({ id: 'AxelModMenu', version: '1.3.9' }, target)).toEqual([]);
  });

  it('finds the highest semver, ignoring non-semver legacy versions', () => {
    expect(highestSemver(['1.2.0', 'legacy', '1.10.0', '1.9.9'])).toBe('1.10.0');
    expect(highestSemver(['legacy'])).toBeNull();
  });
});
