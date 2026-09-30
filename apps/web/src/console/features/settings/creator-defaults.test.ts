import { describe, expect, it } from 'vitest';
import { initialCreatorDefaults } from './CreatorScreen.tsx';
import { FEATURED_MAX, toggleFeatured } from './FeaturedBadgesCard.tsx';

describe('initialCreatorDefaults', () => {
  const empty = { defaultLicense: null, replyTemplates: [] };
  const local = { license: 'mit' as const, templates: [{ id: 'a', name: 'Logs', text: 'Send your log' }] };

  it('uses the account defaults when the account has them', () => {
    const result = initialCreatorDefaults(
      { defaultLicense: 'gpl-3.0', replyTemplates: [{ name: 'Hi', text: 'Thanks!' }] },
      local,
    );
    expect(result.saved).toEqual({ license: 'gpl-3.0', templates: [{ id: 'saved-0', name: 'Hi', text: 'Thanks!' }] });
    expect(result.draft).toBe(result.saved);
  });

  it('offers the defaults left in this browser while the account has none', () => {
    const result = initialCreatorDefaults(empty, local);
    expect(result.saved).toEqual({ license: null, templates: [] });
    expect(result.draft).toBe(local);
  });

  it('ignores an unknown licence value', () => {
    expect(
      initialCreatorDefaults({ ...empty, defaultLicense: 'wtfpl' }, { license: null, templates: [] }).saved.license,
    ).toBeNull();
  });
});

describe('toggleFeatured', () => {
  it('adds and removes keys keeping the order', () => {
    expect(toggleFeatured(['a', 'b'], 'c')).toEqual(['a', 'b', 'c']);
    expect(toggleFeatured(['a', 'b', 'c'], 'b')).toEqual(['a', 'c']);
  });

  it('never exceeds the limit', () => {
    const full = Array.from({ length: FEATURED_MAX }, (_, index) => `k${index}`);
    expect(toggleFeatured(full, 'extra')).toEqual(full);
    expect(toggleFeatured(full, 'k0')).toHaveLength(FEATURED_MAX - 1);
  });
});
