import type { DraftData } from '@sotf/contracts/studio';
import { describe, expect, it } from 'vitest';
import { sanitizeDraftData } from './sanitize.ts';

describe('sanitizeDraftData', () => {
  it('returns valid data unchanged', () => {
    const data: DraftData = { step: 2, name: 'Stack Mod', tagSlugs: ['inventory'] };
    expect(sanitizeDraftData(data)).toEqual(data);
  });

  it('drops only the invalid item of a list and keeps the other fields', () => {
    const data = {
      step: 4,
      name: 'Stack Mod',
      supportLinks: [
        { kind: 'kofi', url: 'https://ko-fi.com/ana' },
        { kind: 'kofi', url: 'not a url' },
      ],
    } as unknown as DraftData;
    const result = sanitizeDraftData(data);
    expect(result.name).toBe('Stack Mod');
    expect(result.step).toBe(4);
    expect(result.supportLinks).toHaveLength(1);
    expect(result.supportLinks?.[0]?.url).toBe('https://ko-fi.com/ana');
  });

  it('drops an invalid top-level field without losing the valid ones', () => {
    const data = { step: 2, name: 'Stack Mod', sourceUrl: 'javascript:alert(1)' } as unknown as DraftData;
    const result = sanitizeDraftData(data);
    expect(result).toMatchObject({ step: 2, name: 'Stack Mod' });
    expect(result.sourceUrl).toBeUndefined();
  });
});
