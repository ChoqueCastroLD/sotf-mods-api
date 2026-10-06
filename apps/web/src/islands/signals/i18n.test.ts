import { describe, expect, it } from 'vitest';
import { loadSignalsMessages, st, stOptional } from './i18n.ts';

describe('signals catalogue', () => {
  it('loads the catalogue of one locale and falls back to English for an unknown one', async () => {
    await loadSignalsMessages('en');
    expect(st('signals_mark_all_read')).toBe('Mark all as read');
    await loadSignalsMessages('es');
    expect(st('signals_mark_all_read')).not.toBe('Mark all as read');
    expect(st('signals_mark_all_read')).not.toBe('signals_mark_all_read');
  });

  it('returns null for a key the catalogue does not have', async () => {
    await loadSignalsMessages('en');
    expect(stOptional('signals_no_such_key')).toBeNull();
    expect(stOptional('signals_template_spam')).not.toBeNull();
  });
});
