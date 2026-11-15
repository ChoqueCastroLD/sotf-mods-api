import { strToU8, unzipSync, zipSync } from 'fflate';
import { describe, expect, it } from 'vitest';
import { DomainError } from '../kernel/errors.ts';
import { normalizeConfigPath, validateConfigZip } from './configs.ts';

const zip = (files: Record<string, string | Uint8Array>) =>
  Buffer.from(
    zipSync(Object.fromEntries(Object.entries(files).map(([k, v]) => [k, typeof v === 'string' ? strToU8(v) : v]))),
  );

async function codeOf(promise: Promise<unknown>): Promise<string | undefined> {
  try {
    await promise;
    return undefined;
  } catch (error) {
    expect(error).toBeInstanceOf(DomainError);
    const fields = (error as DomainError).meta.errors as Array<{ code: string }> | undefined;
    return fields?.[0]?.code ?? (error as DomainError).code;
  }
}

describe('modpack config zips', () => {
  it('normalizes the root folder casing and rejects other roots', () => {
    expect(normalizeConfigPath('userdata/AxelsModMenu.cfg')).toBe('UserData/AxelsModMenu.cfg');
    expect(normalizeConfigPath('MODS\\Foo\\settings.json')).toBe('Mods/Foo/settings.json');
    expect(normalizeConfigPath('BepInEx/config.cfg')).toBeNull();
    expect(normalizeConfigPath('UserData')).toBeNull();
    expect(normalizeConfigPath('UserData//x.cfg')).toBeNull();
  });

  it('repacks only the config files, sorted, and returns a stable hash', async () => {
    const upload = zip({ 'userdata/b.cfg': 'b=1', 'UserData/a.toml': 'a = 1', 'Mods/Foo/x.json': '{}' });
    const result = await validateConfigZip(upload);
    expect(result.files.map((f) => f.path)).toEqual(['Mods/Foo/x.json', 'UserData/a.toml', 'UserData/b.cfg']);
    expect(Object.keys(unzipSync(result.zip)).sort()).toEqual(['Mods/Foo/x.json', 'UserData/a.toml', 'UserData/b.cfg']);
    expect((await validateConfigZip(upload)).sha256).toBe(result.sha256);
  });

  it('rejects files outside UserData and Mods, executables, binaries and duplicates', async () => {
    expect(await codeOf(validateConfigZip(zip({ 'readme.cfg': 'x' })))).toBe('outside_roots');
    expect(await codeOf(validateConfigZip(zip({ 'Mods/evil.dll': 'MZ' })))).toBe('extension');
    expect(await codeOf(validateConfigZip(zip({ 'UserData/a.cfg': new Uint8Array([97, 0, 98]) })))).toBe('binary');
    expect(await codeOf(validateConfigZip(zip({ 'UserData/a.cfg': new Uint8Array([0xff, 0xfe, 0xfd]) })))).toBe(
      'binary',
    );
    expect(await codeOf(validateConfigZip(zip({ 'UserData/a.cfg': '1', 'userdata/A.cfg': '2' })))).toBe('duplicate');
  });

  it('rejects zip slip, empty archives, non-zips and oversized files', async () => {
    expect(await codeOf(validateConfigZip(zip({ 'UserData/../../evil.cfg': 'x' })))).toBe('unsafe_path');
    expect(await codeOf(validateConfigZip(zip({ 'UserData/': new Uint8Array() })))).toBe('empty');
    expect(await codeOf(validateConfigZip(Buffer.from('not a zip')))).toBe('not_zip');
    expect(await codeOf(validateConfigZip(zip({ 'UserData/big.txt': 'x'.repeat(256 * 1024 + 1) })))).toBe(
      'file_too_big',
    );
  });
});
