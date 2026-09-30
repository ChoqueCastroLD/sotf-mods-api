import { beforeAll, describe, expect, it } from 'vitest';
import { moderationReason } from './describe.ts';
import { loadSignalsMessages } from './i18n.ts';

const EN = 'Please describe what the mod does, how to install it and how to use it.';

describe('moderationReason', () => {
  beforeAll(() => loadSignalsMessages('es'));

  it('replaces the English template wording and keeps the ranger note', () => {
    const text = moderationReason(`${EN}\n\nPlease add install steps.`, 'missing_description');
    expect(text).not.toContain(EN);
    expect(text?.endsWith('\n\nPlease add install steps.')).toBe(true);
  });

  it('shows only the wording when there is no note', () => {
    const text = moderationReason(EN, 'missing_description');
    expect(text).toBeTruthy();
    expect(text).not.toContain('\n');
    expect(text).not.toBe(EN);
  });

  it('keeps the stored text for notes without template and for custom templates', () => {
    expect(moderationReason('Just a note', null)).toBe('Just a note');
    expect(moderationReason('Custom wording', 'my_custom_rule')).toBe('Custom wording');
    expect(moderationReason(null, null)).toBeNull();
  });
});
