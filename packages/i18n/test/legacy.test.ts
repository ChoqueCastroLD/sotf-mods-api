import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { LOCALE_INFO } from '../src/locales.ts';
import { LEGACY_FILE_CODES, parseLegacyTranslations, serializeLegacy } from '../tools/legacy.ts';

describe('legacy glossary', () => {
  it('parses legacy translation files without executing anything', () => {
    const source = `// Spanish
export default {
    // Navbar
    "_navbar.login": "Iniciar sesión",
    "loader.text": 'Todos los "mods"',
};
`;
    expect(parseLegacyTranslations(source, 'es.translations.ts')).toEqual([
      ['_navbar.login', 'Iniciar sesión'],
      ['loader.text', 'Todos los "mods"'],
    ]);
    expect(() => parseLegacyTranslations('module.exports = {}', 'x.ts')).toThrow(/export default/);
    expect(() => parseLegacyTranslations('export default { "a": 1 };', 'x.ts')).toThrow(/not a string/);
    expect(() => parseLegacyTranslations('export default { "a": process.exit(1) };', 'x.ts')).toThrow();
    expect(() => parseLegacyTranslations('export default { "a": (() => { for(;;){} })() };', 'x.ts')).toThrow(
      /timed out/,
    );
  });

  it('holds the 12 legacy files under v2 locale names', () => {
    expect(LEGACY_FILE_CODES).toHaveLength(12);
    const english = JSON.parse(readFileSync('legacy/en.json', 'utf8')) as Record<string, string>;
    expect(Object.keys(english).length).toBeGreaterThan(200);
    for (const info of Object.values(LOCALE_INFO)) {
      const path = `legacy/${info.code}.json`;
      // Japanese is new in v2: it has no legacy file.
      expect(existsSync(path), path).toBe(info.legacyCode !== null);
      if (!info.legacyCode) continue;
      const entries = Object.entries(JSON.parse(readFileSync(path, 'utf8')) as Record<string, string>);
      expect(readFileSync(path, 'utf8')).toBe(serializeLegacy(entries));
      for (const [key] of entries) expect(english, `${path} ${key}`).toHaveProperty([key]);
    }
    expect(existsSync('legacy/ch.json')).toBe(false);
    expect(existsSync('legacy/se.json')).toBe(false);
  });
});
