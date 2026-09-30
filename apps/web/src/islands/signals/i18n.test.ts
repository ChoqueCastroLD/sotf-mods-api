import { describe, expect, it } from 'vitest';
import { badgeName, ensureBadgeNames, loadSignalsMessages, needsBadgeNames } from './i18n.ts';

describe('badge names in signals (WP-A2)', () => {
  it('loads the names only when a badge signal is shown', () => {
    expect(needsBadgeNames([{ type: 'badge.awarded', data: { welcome: true } }])).toBe(false);
    expect(needsBadgeNames([{ type: 'comment.on_my_mod', data: {} }])).toBe(false);
    expect(needsBadgeNames([{ type: 'badge.awarded', data: { badgeKey: 'first-blueprint' } }])).toBe(true);
  });

  it('names badges in the loaded locale, with the year of Original Survivor', async () => {
    expect(badgeName('first-blueprint')).toBeNull();
    await loadSignalsMessages('es');
    expect(await ensureBadgeNames()).toBe(true);
    expect(badgeName('first-blueprint')).not.toBeNull();
    expect(badgeName('first-blueprint')).not.toBe('First Blueprint');
    expect(badgeName('original-survivor-2024')).toContain('2024');
    expect(badgeName('no-such-badge')).toBeNull();
  });
});
