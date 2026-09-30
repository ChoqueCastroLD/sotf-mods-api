import { QueryClient } from '@tanstack/react-query';
import { describe, expect, it } from 'vitest';
import { adminKeys } from './api.ts';
import { patchKitPicks } from './KitPicksPanel.tsx';

describe('patchKitPicks', () => {
  it('updates the kit in every cached page and filter', () => {
    const client = new QueryClient();
    const kit = (id: number, isStaffPick: boolean) => ({ id, name: `Kit ${id}`, isStaffPick });
    client.setQueryData(adminKeys.kitPicks(1, false), {
      items: [kit(1, false), kit(2, false)],
      page: 1,
      totalPages: 1,
    });
    client.setQueryData(adminKeys.kitPicks(1, true), { items: [kit(1, false)], page: 1, totalPages: 1 });
    patchKitPicks(client, 1, true);
    const all = client.getQueryData<{ items: Array<{ id: number; isStaffPick: boolean }> }>(
      adminKeys.kitPicks(1, false),
    );
    expect(all?.items.map((item) => item.isStaffPick)).toEqual([true, false]);
    const picks = client.getQueryData<{ items: Array<{ isStaffPick: boolean }> }>(adminKeys.kitPicks(1, true));
    expect(picks?.items[0]?.isStaffPick).toBe(true);
  });
});
