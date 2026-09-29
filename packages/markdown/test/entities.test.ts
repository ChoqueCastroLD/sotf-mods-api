import { describe, expect, it } from 'vitest';
import { decodeEntities, escapeForLegacy } from '../src/index.ts';

describe('decodeEntities', () => {
  it('decodes the references the legacy sanitisers produced', () => {
    expect(decodeEntities('Tom &amp; Jerry &lt;3 &gt; &quot;x&quot; &#39;y&#39; &apos;z&apos;')).toBe(
      `Tom & Jerry <3 > "x" 'y' 'z'`,
    );
    expect(decodeEntities('a&nbsp;b')).toBe('a\u00a0b');
    expect(decodeEntities('&#x27;&#X27;&#65;&#x1F332;')).toBe("''A\u{1F332}");
  });

  it('decodes a single level only', () => {
    expect(decodeEntities('&amp;lt;script&amp;gt;')).toBe('&lt;script&gt;');
  });

  it('leaves unknown, malformed and dangerous references alone', () => {
    for (const value of [
      '&copy;',
      '&amp',
      '& amp;',
      '&#;',
      '&#x;',
      '&#0;',
      '&#xD800;',
      '&#1114112;',
      '&#1;',
      '&#x9F;',
    ]) {
      expect(decodeEntities(value)).toBe(value);
    }
  });

  it('returns text without references unchanged', () => {
    expect(decodeEntities('plain text ✓')).toBe('plain text ✓');
  });
});

describe('escapeForLegacy', () => {
  it('escapes the five HTML-significant characters', () => {
    expect(escapeForLegacy(`<img src="x" onerror='alert(1)'> & more`)).toBe(
      '&lt;img src=&quot;x&quot; onerror=&#39;alert(1)&#39;&gt; &amp; more',
    );
  });

  it('is inverted by decodeEntities for any text', () => {
    const samples = [
      '',
      'plain',
      '&amp; already encoded',
      '<b>"quoted"</b> \'single\'',
      'Größe 日本語 🌲 — «ok»',
      '&#39;&lt;&gt;&amp;&quot;',
      '\u00a0nbsp\u00a0',
    ];
    for (const sample of samples) expect(decodeEntities(escapeForLegacy(sample))).toBe(sample);
    // Pseudo-random strings over the significant alphabet.
    const alphabet = ['&', '<', '>', '"', "'", 'a', ';', '#', 'x', '3', '9', ' ', 'amp', 'lt', 'quot'];
    let seed = 42;
    for (let i = 0; i < 500; i++) {
      let value = '';
      for (let j = 0; j < 12; j++) {
        seed = (seed * 1103515245 + 12345) % 2 ** 31;
        value += alphabet[seed % alphabet.length];
      }
      expect(decodeEntities(escapeForLegacy(value))).toBe(value);
    }
  });
});
