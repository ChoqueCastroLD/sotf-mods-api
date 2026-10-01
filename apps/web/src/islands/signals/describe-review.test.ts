import type { NotificationDTO } from '@sotf/contracts/notifications';
import { beforeAll, describe, expect, it } from 'vitest';
import { describeSignal } from './describe.ts';
import { loadSignalsMessages } from './i18n.ts';

function review(data: Record<string, unknown>, groupCount = 1): NotificationDTO {
  return {
    id: 1,
    type: 'review.on_my_mod',
    actor: { id: 2, handle: 'ana', displayName: 'Ana', avatarUrl: null },
    target: { type: 'mod', id: 20, title: 'Axel Menu', path: '/mods/imaxel/axel-menu' },
    groupKey: null,
    groupCount,
    data,
    readAt: null,
    createdAt: '2026-09-29T09:00:00.000Z',
  } as unknown as NotificationDTO;
}

describe('review signals', () => {
  beforeAll(() => loadSignalsMessages('en'));

  it('mentions the stars of a 1–5 rating', () => {
    expect(describeSignal(review({ rating: 4 }), 'en').text).toContain('4-star');
  });

  it.each([undefined, null, 0, -1, 6, Number.NaN, '3'])('never says «0-star» for the rating %s', (rating) => {
    const text = describeSignal(review({ rating }), 'en').text;
    expect(text).not.toMatch(/\d-star/);
    expect(text).toContain('left a review');
  });
});
