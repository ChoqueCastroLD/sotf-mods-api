import { describe, expect, it } from 'vitest';
import { badgeName, ensureBadgeNames, loadSignalsMessages, needsBadgeNames } from './i18n.ts';

describe('badge names in signals (WP-A2, wire-data)', () => {
  it('asks for the profile names only for a badge the signals catalogue cannot name', async () => {
    expect(needsBadgeNames([{ type: 'badge.awarded', data: { welcome: true } }])).toBe(false);
    expect(needsBadgeNames([{ type: 'comment.on_my_mod', data: {} }])).toBe(false);
    // Nothing loaded yet: the name must come from somewhere.
    expect(needsBadgeNames([{ type: 'badge.awarded', data: { badgeKey: 'first-blueprint' } }])).toBe(true);
    expect(badgeName('first-blueprint')).toBeNull();

    await loadSignalsMessages('es');
    expect(needsBadgeNames([{ type: 'badge.awarded', data: { badgeKey: 'first-blueprint' } }])).toBe(false);
    expect(needsBadgeNames([{ type: 'badge.awarded', data: { badgeKey: 'original-survivor-2024' } }])).toBe(false);
    expect(needsBadgeNames([{ type: 'badge.awarded', data: { badgeKey: 'future-badge' } }])).toBe(true);
  });

  it('names badges in the loaded locale from the signals catalogue, with the year of Original Survivor', async () => {
    await loadSignalsMessages('es');
    expect(badgeName('first-blueprint')).not.toBeNull();
    expect(badgeName('first-blueprint')).not.toBe('First Blueprint');
    expect(badgeName('original-survivor-2024')).toContain('2024');
    expect(badgeName('no-such-badge')).toBeNull();
  });

  it('falls back to the profile namespace once loaded', async () => {
    await loadSignalsMessages('es');
    expect(await ensureBadgeNames()).toBe(true);
    expect(badgeName('first-blueprint')).not.toBeNull();
    expect(badgeName('no-such-badge')).toBeNull();
  });
});
