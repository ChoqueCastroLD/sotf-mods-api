import { describe, expect, it } from 'vitest';
import { legacyHiddenModIds } from './DownloadsScreen.tsx';

describe('legacyHiddenModIds', () => {
  it('returns the mods whose hidden row is still the latest download', () => {
    const items = [
      { mod: { id: 1 }, lastDownloaded: { at: '2026-01-01T00:00:00.000Z' } },
      { mod: { id: 2 }, lastDownloaded: { at: '2026-02-01T00:00:00.000Z' } },
      { mod: { id: 3 }, lastDownloaded: { at: '2026-03-01T00:00:00.000Z' } },
    ];
    const hidden = { '1': '2026-01-01T00:00:00.000Z', '2': '2025-12-01T00:00:00.000Z' };
    expect(legacyHiddenModIds(items, hidden)).toEqual([1]);
    expect(legacyHiddenModIds(items, {})).toEqual([]);
  });
});
