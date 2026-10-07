import { describe, expect, it, vi } from 'vitest';
import {
  ANNOUNCEMENTS_FAILED_MS,
  ANNOUNCEMENTS_FRESH_MS,
  announcementBannerId,
  announcementHref,
  createAnnouncementsSource,
  type SiteAnnouncement,
} from './announcements.ts';

const sample: SiteAnnouncement = {
  id: 7,
  level: 'patch',
  message: 'Patch 1.0.5',
  href: '/patch-radar',
  dismissible: true,
};

describe('createAnnouncementsSource', () => {
  it('makes one call for a burst of renders and refreshes after the fresh window', async () => {
    let clock = 0;
    const fetcher = vi.fn().mockResolvedValue([sample]);
    const source = createAnnouncementsSource(fetcher, () => clock);
    const burst = await Promise.all([source('en'), source('en'), source('en')]);
    expect(burst.every((items) => items[0]?.id === 7)).toBe(true);
    expect(fetcher).toHaveBeenCalledTimes(1);
    clock = ANNOUNCEMENTS_FRESH_MS - 1;
    await source('en');
    expect(fetcher).toHaveBeenCalledTimes(1);
    clock = ANNOUNCEMENTS_FRESH_MS + 1;
    await source('en');
    expect(fetcher).toHaveBeenCalledTimes(2);
  });

  it('keeps locales apart', async () => {
    const fetcher = vi.fn().mockResolvedValue([sample]);
    const source = createAnnouncementsSource(fetcher, () => 0);
    await source('en');
    await source('es');
    expect(fetcher).toHaveBeenCalledTimes(2);
  });

  it('renders no banners and does not retry for a while when the API fails or answers null', async () => {
    let clock = 0;
    const fetcher = vi
      .fn()
      .mockRejectedValueOnce(new Error('down'))
      .mockResolvedValueOnce(null)
      .mockResolvedValue([sample]);
    const source = createAnnouncementsSource(fetcher, () => clock);
    expect(await source('en')).toEqual([]);
    clock = ANNOUNCEMENTS_FAILED_MS - 1;
    expect(await source('en')).toEqual([]);
    expect(fetcher).toHaveBeenCalledTimes(1);
    clock = ANNOUNCEMENTS_FAILED_MS + 1;
    expect(await source('en')).toEqual([]);
    clock += ANNOUNCEMENTS_FAILED_MS + 1;
    expect((await source('en'))[0]?.id).toBe(7);
  });
});

describe('announcementHref', () => {
  it('accepts site paths and https addresses only', () => {
    expect(announcementHref('/mods')).toEqual({ kind: 'path', value: '/mods' });
    expect(announcementHref('https://store.steampowered.com/news')).toEqual({
      kind: 'external',
      value: 'https://store.steampowered.com/news',
    });
    for (const bad of [
      null,
      '',
      'javascript:alert(1)',
      '//evil.example',
      'http://insecure.example',
      '/a b',
      '/\\evil',
    ]) {
      expect(announcementHref(bad)).toBeNull();
    }
  });
});

describe('announcementBannerId', () => {
  it('is a valid dismissal id', () => {
    expect(announcementBannerId(12)).toMatch(/^[a-z0-9][a-z0-9._-]{0,63}$/i);
  });
});
