import { strToU8, type Zippable, zipSync } from 'fflate';
import { describe, expect, it } from 'vitest';
import { hasBlockingProblems, inspectBuild, inspectZip } from './inspect.ts';

const MANIFEST = { id: 'StackMod', name: 'Stack Mod', author: 'Ana', version: '1.2.0', type: 'Mod' };

function zipFile(entries: Zippable, name = 'mod.zip'): File {
  return new File([zipSync(entries, { level: 9 }) as Uint8Array<ArrayBuffer>], name, { type: 'application/zip' });
}

const manifest = (value: unknown = MANIFEST) => strToU8(JSON.stringify(value));
const codes = (report: { problems: Array<{ code: string }> }) => report.problems.map((problem) => problem.code);

describe('inspectZip', () => {
  it('reads a clean mod: manifest, entries, hash and no blocking problems', async () => {
    const report = await inspectZip(zipFile({ 'StackMod.dll': new Uint8Array(64), 'manifest.json': manifest() }));
    expect(report.manifest).toMatchObject({ id: 'StackMod', version: '1.2.0' });
    expect(report.manifestPath).toBe('manifest.json');
    expect(report.entriesTotal).toBe(2);
    expect(report.sha256).toMatch(/^[0-9a-f]{64}$/);
    expect(hasBlockingProblems(report)).toBe(false);
  });

  it('flags zip slip entries', async () => {
    const report = await inspectZip(zipFile({ '../evil.dll': new Uint8Array(4), 'manifest.json': manifest() }));
    expect(codes(report)).toContain('zip_slip');
    expect(report.entries.find((entry) => entry.path === '../evil.dll')?.status).toBe('unsafe');
    expect(hasBlockingProblems(report)).toBe(true);
  });

  it('flags absolute paths', async () => {
    const report = await inspectZip(zipFile({ 'C:/Windows/evil.dll': new Uint8Array(4), 'manifest.json': manifest() }));
    expect(codes(report)).toContain('absolute_path');
    expect(hasBlockingProblems(report)).toBe(true);
  });

  it('flags compression-ratio bombs', async () => {
    const report = await inspectZip(
      zipFile({ 'zeros.dll': new Uint8Array(4 * 1024 * 1024), 'manifest.json': manifest() }),
    );
    expect(codes(report)).toContain('zip_bomb_ratio');
    expect(hasBlockingProblems(report)).toBe(true);
  });

  it('warns about executables without blocking the upload', async () => {
    const report = await inspectZip(zipFile({ 'setup.exe': new Uint8Array(8), 'manifest.json': manifest() }));
    const problem = report.problems.find((item) => item.code === 'extension_flagged');
    expect(problem).toMatchObject({ severity: 'warning', path: 'setup.exe' });
    expect(report.entries.find((entry) => entry.path === 'setup.exe')?.status).toBe('flagged');
    expect(hasBlockingProblems(report)).toBe(false);
  });

  it('reports a missing manifest', async () => {
    const report = await inspectZip(zipFile({ 'StackMod.dll': new Uint8Array(8) }));
    expect(codes(report)).toEqual(['manifest_missing']);
    expect(report.manifest).toBeNull();
  });

  it('reports an invalid manifest and a non-semver version', async () => {
    const broken = await inspectZip(zipFile({ 'manifest.json': strToU8('{ not json') }));
    expect(codes(broken)).toContain('manifest_invalid');
    const badVersion = await inspectZip(zipFile({ 'manifest.json': manifest({ ...MANIFEST, version: 'one' }) }));
    expect(codes(badVersion)).toContain('version_not_semver');
  });

  it('uses the shallowest manifest.json', async () => {
    const report = await inspectZip(
      zipFile({
        'StackMod/sub/manifest.json': manifest({ ...MANIFEST, id: 'Deep' }),
        'StackMod/manifest.json': manifest({ ...MANIFEST, id: 'Shallow' }),
      }),
    );
    expect(report.manifestPath).toBe('StackMod/manifest.json');
    expect(report.manifest?.id).toBe('Shallow');
  });

  it('reports a file that is not a zip', async () => {
    const report = await inspectZip(new File([strToU8('plain text, no zip')], 'mod.zip'));
    expect(codes(report)).toEqual(['zip_invalid']);
    expect(hasBlockingProblems(report)).toBe(true);
  });
});

describe('inspectBuild', () => {
  it('rejects text that is not a BuildShare blueprint', async () => {
    const report = await inspectBuild(new File([strToU8('{"hello": 1}')], 'build.json'));
    expect(report.blueprint).toBeNull();
    expect(codes(report)).toEqual(['blueprint_invalid']);
    expect(hasBlockingProblems(report)).toBe(true);
  });
});
