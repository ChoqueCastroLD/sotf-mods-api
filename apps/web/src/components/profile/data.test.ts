import { describe, expect, it } from 'vitest';
import { defaultTab, parseProfileQuery, tabPath, type UserPublicDTO, visibleTabs } from './data.ts';

function user(modsCount: number, buildsCount: number): UserPublicDTO {
  return {
    canonicalPath: '/profile/imaxel',
    stats: { modsCount, buildsCount, reviewsCount: 0 },
  } as unknown as UserPublicDTO;
}

describe('profile tabs', () => {
  it('opens the creator work first and the reviews for everyone else', () => {
    expect(defaultTab(user(3, 0))).toBe('mods');
    expect(defaultTab(user(0, 2))).toBe('builds');
    expect(defaultTab(user(0, 0))).toBe('reviews');
  });

  it('hides the empty creator tabs unless one is open', () => {
    expect(visibleTabs(user(0, 0), 'reviews')).toEqual(['reviews']);
    expect(visibleTabs(user(2, 1), 'mods')).toEqual(['mods', 'builds', 'reviews']);
    expect(visibleTabs(user(0, 0), 'mods')).toEqual(['mods', 'reviews']);
  });

  it('keeps the default tab on the bare profile URL', () => {
    expect(tabPath(user(1, 0), 'mods', { isDefault: true })).toBe('/profile/imaxel');
    expect(tabPath(user(1, 0), 'reviews', { isDefault: false })).toBe('/profile/imaxel?tab=reviews');
    expect(tabPath(user(1, 0), 'builds', { isDefault: false, page: 2, sort: 'updated' })).toBe(
      '/profile/imaxel?tab=builds&sort=updated&page=2',
    );
  });
});

describe('parseProfileQuery', () => {
  const params = (query: string) => new URLSearchParams(query);

  it('sends the removed tabs (kits, badges, activity) to the clean URL', () => {
    for (const tab of ['kits', 'badges', 'activity']) {
      expect(parseProfileQuery(params(`tab=${tab}`), user(1, 0))).toEqual({ ok: false });
    }
  });

  it('parses the tab, page and sort', () => {
    const parsed = parseProfileQuery(params('tab=builds&page=3&sort=updated'), user(1, 1));
    expect(parsed).toMatchObject({ ok: true, query: { tab: 'builds', page: 3, sort: 'updated', explicitTab: true } });
  });

  it('rejects malformed pages and sorts', () => {
    expect(parseProfileQuery(params('page=0'), user(1, 0))).toEqual({ ok: false });
    expect(parseProfileQuery(params('sort=best'), user(1, 0))).toEqual({ ok: false });
  });
});
