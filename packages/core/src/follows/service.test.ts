import { describe, expect, it } from 'vitest';
import { hasUpdate, isFollowableMod } from './service.ts';

const d = (iso: string) => new Date(iso);

describe('hasUpdate', () => {
  const base = {
    lastVersion: '1.2.0',
    lastDownloadAt: d('2026-05-01T00:00:00Z'),
    latestVersion: '1.3.0',
    latestAt: d('2026-06-01T00:00:00Z'),
    status: 'published',
  };

  it('is true when a different latest version was released after the last download', () => {
    expect(hasUpdate(base)).toBe(true);
  });

  it('is false without a download, when up to date, for older or equal releases and for removed mods', () => {
    expect(hasUpdate({ ...base, lastVersion: null, lastDownloadAt: null })).toBe(false);
    expect(hasUpdate({ ...base, latestVersion: '1.2.0' })).toBe(false);
    expect(hasUpdate({ ...base, latestAt: d('2026-04-01T00:00:00Z') })).toBe(false);
    expect(hasUpdate({ ...base, latestAt: base.lastDownloadAt })).toBe(false);
    expect(hasUpdate({ ...base, latestVersion: null, latestAt: null })).toBe(false);
    expect(hasUpdate({ ...base, status: 'removed' })).toBe(false);
  });
});

describe('isFollowableMod', () => {
  const mod = (status: string, extra: Partial<{ authorHidden: boolean; latestChecks: string | null }> = {}) => ({
    id: 1,
    status,
    authorHidden: false,
    latestChecks: null,
    ...extra,
  });

  it('follows the URL reachability rules of the catalog', () => {
    expect(isFollowableMod(mod('published'))).toBe(true);
    expect(isFollowableMod(mod('unlisted'))).toBe(true);
    expect(isFollowableMod(mod('archived'))).toBe(true);
    expect(isFollowableMod(mod('pending'))).toBe(false);
    expect(isFollowableMod(mod('pending', { latestChecks: 'passed' }))).toBe(true);
    expect(isFollowableMod(mod('rejected'))).toBe(false);
    expect(isFollowableMod(mod('removed'))).toBe(false);
    expect(isFollowableMod(mod('published', { authorHidden: true }))).toBe(false);
  });
});
