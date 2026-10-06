import { describe, expect, it } from 'vitest';
import { areaOf, findArea, isPushedRoute, parentPath, phoneItems, tabTarget } from './navigation.ts';

describe('phone navigation', () => {
  it('opens the Settings tab on its list of sections', () => {
    expect(tabTarget(findArea('settings'))).toBe('/settings');
    expect(tabTarget(findArea('basecamp'))).toBe('/dashboard');
  });

  it('leaves flows out of the section strip and adds Admin for admins only', () => {
    const basecamp = phoneItems(findArea('basecamp'), { role: 'user' }).map((item) => item.to);
    expect(basecamp).toContain('/dashboard/mods');
    expect(basecamp).not.toContain('/dashboard/new/mod');
    expect(basecamp).not.toContain('/dashboard/new/build');

    const moderator = phoneItems(findArea('ranger'), { role: 'moderator' }).map((item) => item.to);
    const admin = phoneItems(findArea('ranger'), { role: 'admin' }).map((item) => item.to);
    expect(moderator).not.toContain('/moderation/admin');
    expect(admin.at(-1)).toBe('/moderation/admin');
    expect(admin.some((to) => to.startsWith('/moderation/admin/'))).toBe(false);
  });

  it('has no strip for Settings and Notifications', () => {
    expect(phoneItems(findArea('settings'), { role: 'user' })).toEqual([]);
    expect(phoneItems(findArea('signals'), { role: 'user' })).toEqual([]);
  });

  it('treats editors, the wizard and detail screens as pushed', () => {
    for (const path of [
      '/dashboard/new',
      '/dashboard/new/mod',
      '/dashboard/drafts/abc',
      '/dashboard/mods/12',
      '/dashboard/mods/12/new-version',
      '/settings/profile',
      '/moderation/admin/settings',
      '/moderation/users/9',
    ]) {
      expect(isPushedRoute(path), path).toBe(true);
    }
    for (const path of [
      '/dashboard',
      '/dashboard/mods',
      '/dashboard/drafts',
      '/settings',
      '/moderation',
      '/moderation/admin',
      '/notifications',
    ]) {
      expect(isPushedRoute(path), path).toBe(false);
    }
  });

  it('knows where Back goes on a deep link', () => {
    expect(parentPath('/dashboard/mods/12/new-version')).toBe('/dashboard/mods');
    expect(parentPath('/settings/security')).toBe('/settings');
    expect(parentPath('/moderation/admin/taxonomy')).toBe('/moderation/admin');
    expect(parentPath('/dashboard/new/build')).toBe('/dashboard');
  });
});

describe('areas follow the plain URLs', () => {
  it('maps the first path segment to the area', () => {
    expect(areaOf('/dashboard')).toBe('basecamp');
    expect(areaOf('/dashboard/mods/12')).toBe('basecamp');
    expect(areaOf('/moderation/admin/operations')).toBe('ranger');
    expect(areaOf('/notifications')).toBe('signals');
    expect(areaOf('/me/following')).toBe('me');
    expect(areaOf('/settings/notifications')).toBe('settings');
  });

  it('does not know the old names (they redirect before the console loads)', () => {
    for (const path of ['/basecamp', '/ranger/queue', '/signals', '/', '/mods']) expect(areaOf(path)).toBeNull();
  });
});
