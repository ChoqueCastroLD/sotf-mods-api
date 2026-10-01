import { describe, expect, it } from 'vitest';
import { findArea, isPushedRoute, parentPath, phoneItems, tabTarget } from './navigation.ts';

describe('phone navigation', () => {
  it('opens the Settings tab on its list of sections', () => {
    expect(tabTarget(findArea('settings'))).toBe('/settings');
    expect(tabTarget(findArea('basecamp'))).toBe('/basecamp');
  });

  it('leaves flows out of the section strip and adds Admin for admins only', () => {
    const basecamp = phoneItems(findArea('basecamp'), { role: 'user' }).map((item) => item.to);
    expect(basecamp).toContain('/basecamp/mods');
    expect(basecamp).not.toContain('/basecamp/new/mod');
    expect(basecamp).not.toContain('/basecamp/new/build');

    const moderator = phoneItems(findArea('ranger'), { role: 'moderator' }).map((item) => item.to);
    const admin = phoneItems(findArea('ranger'), { role: 'admin' }).map((item) => item.to);
    expect(moderator).not.toContain('/ranger/admin');
    expect(admin.at(-1)).toBe('/ranger/admin');
    expect(admin.some((to) => to.startsWith('/ranger/admin/'))).toBe(false);
  });

  it('has no strip for Settings and Signals', () => {
    expect(phoneItems(findArea('settings'), { role: 'user' })).toEqual([]);
    expect(phoneItems(findArea('signals'), { role: 'user' })).toEqual([]);
  });

  it('treats editors, the wizard and detail screens as pushed', () => {
    for (const path of [
      '/basecamp/new',
      '/basecamp/new/mod',
      '/basecamp/drafts/abc',
      '/basecamp/mods/12',
      '/basecamp/mods/12/new-version',
      '/settings/profile',
      '/ranger/admin/settings',
      '/ranger/users/9',
      '/me/kits/KIT-1',
    ]) {
      expect(isPushedRoute(path), path).toBe(true);
    }
    for (const path of [
      '/basecamp',
      '/basecamp/mods',
      '/basecamp/drafts',
      '/settings',
      '/ranger',
      '/ranger/admin',
      '/signals',
    ]) {
      expect(isPushedRoute(path), path).toBe(false);
    }
  });

  it('knows where Back goes on a deep link', () => {
    expect(parentPath('/basecamp/mods/12/new-version')).toBe('/basecamp/mods');
    expect(parentPath('/settings/security')).toBe('/settings');
    expect(parentPath('/ranger/admin/taxonomy')).toBe('/ranger/admin');
    expect(parentPath('/basecamp/new/build')).toBe('/basecamp');
  });
});
