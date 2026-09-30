import type { NotificationDTO } from '@sotf/contracts/notifications';
import { describe, expect, it } from 'vitest';
import { markRecentRead } from './SignalsBell.tsx';

const signal = (id: number, readAt: string | null) => ({ id, readAt }) as NotificationDTO;

describe('markRecentRead', () => {
  it('stamps only the unread signals asked for', () => {
    const items = [signal(1, null), signal(2, null), signal(3, '2026-01-01T00:00:00.000Z')];
    const result = markRecentRead(items, [2, 3], 'now');
    expect(result.map((item) => item.readAt)).toEqual([null, 'now', '2026-01-01T00:00:00.000Z']);
    expect(result[0]).toBe(items[0]);
  });

  it("stamps every unread signal with 'all'", () => {
    const result = markRecentRead([signal(1, null), signal(2, 'before')], 'all', 'now');
    expect(result.map((item) => item.readAt)).toEqual(['now', 'before']);
  });
});
