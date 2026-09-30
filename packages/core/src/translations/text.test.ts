import { describe, expect, it } from 'vitest';
import {
  chunkText,
  maskMarkdown,
  parseTranslations,
  stripAnswerFence,
  targetLocalesOf,
  translationProblem,
  translationSourceHash,
  unmaskText,
} from './text.ts';

const SAMPLE = [
  '# Better Bunkers 2.0',
  '',
  'Adds **new** bunkers. See [the docs](https://example.com/docs?a=(1)) and ![shot](https://cdn.test/a.png).',
  '',
  '```lua',
  'print("hello")',
  '```',
  '',
  '- Requires `UE4SS` v3.0.1',
  '- Works with @someauthor mods',
  '',
  'Visit https://sotf-mods.com/mods/1 today.',
].join('\n');

describe('maskMarkdown', () => {
  it('protects code, links, images, urls, mentions and the mod name, and restores them exactly', () => {
    const masked = maskMarkdown(SAMPLE, ['Better Bunkers 2.0']);
    expect(masked.text).not.toContain('example.com');
    expect(masked.text).not.toContain('print(');
    expect(masked.text).not.toContain('UE4SS');
    expect(masked.text).not.toContain('@someauthor');
    expect(masked.text).not.toContain('Better Bunkers');
    expect(unmaskText(masked.text, masked.tokens)).toBe(SAMPLE);
  });

  it('survives a stray placeholder bracket in the original', () => {
    const src = 'odd ⟦0⟧ text `x`';
    const m = maskMarkdown(src);
    expect(unmaskText(m.text, m.tokens)).toBe(src);
  });
});

describe('translationProblem', () => {
  const masked = maskMarkdown(SAMPLE, ['Better Bunkers 2.0']);
  it('accepts a faithful translation', () => {
    expect(translationProblem(masked.text, masked.text.replace('Adds', 'Anade').replace('today', 'hoy'))).toBeNull();
  });
  it('rejects lost placeholders', () => {
    expect(translationProblem(masked.text, masked.text.replace(/⟦1⟧/, ''))).toBe('placeholders_count');
  });
  it('rejects a changed heading count', () => {
    expect(translationProblem(masked.text, masked.text.replace(/^# /, ''))).toBe('structure');
  });
  it('rejects empty output', () => {
    expect(translationProblem('hello', '  ')).toBe('empty');
  });
});

describe('chunkText', () => {
  it('rejoins to the original and respects the size', () => {
    const text = Array.from({ length: 40 }, (_, i) => `Paragraph ${i}. ${'word '.repeat(30)}`.trim()).join('\n\n');
    const chunks = chunkText(text, 500);
    expect(chunks.length).toBeGreaterThan(1);
    for (const c of chunks) expect(c.text.length).toBeLessThanOrEqual(500);
    const joined = chunks.map((c) => c.text + c.sep).join('');
    expect(joined.replace(/\s+/g, ' ').trim()).toBe(text.replace(/\s+/g, ' ').trim());
  });
  it('splits a single huge line', () => {
    const chunks = chunkText('x'.repeat(2500), 1000);
    expect(chunks.map((c) => c.text).join('')).toBe('x'.repeat(2500));
  });
});

describe('helpers', () => {
  it('strips a fence around the whole answer', () => {
    expect(stripAnswerFence('```markdown\nhola\n```')).toBe('hola');
    expect(stripAnswerFence('hola')).toBe('hola');
  });
  it('hashes the trimmed source', () => {
    expect(translationSourceHash(' a ')).toBe(translationSourceHash('a'));
  });
  it('excludes the source language from the targets', () => {
    expect(targetLocalesOf('es')).not.toContain('es');
    expect(targetLocalesOf('en')).toHaveLength(12);
  });
  it('parses the JSON answer per locale', () => {
    const out = parseTranslations(
      '{"es":{"name":"Hola","shortDescription":"Mundo"}}',
      ['es', 'fr'],
      ['name', 'shortDescription'],
    );
    expect(out.get('es')).toEqual({ name: 'Hola', shortDescription: 'Mundo' });
    expect(out.has('fr')).toBe(false);
  });
});
