import { LOCALES } from '@sotf/i18n';
import { describe, expect, it } from 'vitest';
import { renderNotificationEmail } from './registry.ts';
import type { CreatorWeeklyPayload, SignalEmailItem, SignalsPayload } from './types.ts';

const SITE = 'https://sotf-mods.com';
const UNSUB = { oneClick: `${SITE}/api/v2/unsubscribe?token=abc.def`, page: `${SITE}/unsubscribe?token=abc.def` };

function item(type: string, extra: Partial<SignalEmailItem> = {}): SignalEmailItem {
  return {
    type,
    count: 1,
    actorName: 'Kelvin',
    modName: 'AmmoUi',
    url: `${SITE}/mods/imaxel/ammoui`,
    excerpt: null,
    version: '1.2.0',
    rating: 4,
    status: 'rejected',
    reason: 'Reupload without permission',
    build: '1.0.5',
    threshold: 10000,
    awardKind: 'mod_of_week',
    badgeKey: 'first-mod',
    reportAction: 'resolve',
    createdAt: '2026-09-30T07:00:00.000Z',
    ...extra,
  };
}

const TYPES = [
  'mod.version_published',
  'creator.mod_published',
  'comment.on_my_mod',
  'comment.reply',
  'comment.mention',
  'review.on_my_mod',
  'review.reply',
  'compat.broken_on_my_mod',
  'compat.acknowledged',
  'compat.prompt',
  'review.update_prompt',
  'kit.added_my_mod',
  'kit.updated_followed',
  'kit.comment',
  'kit.comment_reply',
  'coauthor.invited',
  'request.comment',
  'request.adopted',
  'request.fulfilled',
  'patch.breaking_build',
  'mod.status_changed',
  'milestone.reached',
  'badge.awarded',
  'award.won',
  'jam.phase',
  'report.resolved',
  'system.announcement',
];

const signals: SignalsPayload = {
  displayName: 'Kelvin',
  cadence: 'daily',
  items: [
    ...TYPES.map((type) => item(type)),
    item('comment.on_my_mod', { count: 5, excerpt: 'Works great on 1.0.4 <script>alert(1)</script>' }),
    item('mod.version_published', { count: 3 }),
  ],
  moreCount: 4,
  signalsUrl: `${SITE}/signals`,
  unsubscribe: UNSUB,
};

const weekly: CreatorWeeklyPayload = {
  displayName: 'ImAxel',
  weekStart: '2026-09-21',
  weekEnd: '2026-09-27',
  totals: { downloads: 1234, downloadsPrevious: 1000, followers: 12, comments: 5, reviews: 2 },
  mods: [
    {
      name: "Axel's Mod Menu",
      url: `${SITE}/mods/imaxel/axel's-mod-menu`,
      downloads: 1200,
      followers: 10,
      comments: 5,
      reviews: 2,
    },
  ],
  basecampUrl: `${SITE}/basecamp/analytics`,
  unsubscribe: UNSUB,
};

describe('notification email templates', () => {
  it.each(LOCALES)('renders the signals digest and the creator report in %s', async (locale) => {
    const a = await renderNotificationEmail('notify.signals', locale, signals, SITE);
    expect(a.subject.length).toBeGreaterThan(5);
    expect(a.html).toContain(UNSUB.page.replace(/&/g, '&amp;'));
    expect(a.html).toContain(`${SITE}/signals`);
    expect(a.html).not.toContain('<script>');
    expect(a.text).not.toMatch(/undefined|\{[a-z]+\}/);
    const b = await renderNotificationEmail('notify.creator_weekly', locale, weekly, SITE);
    expect(b.subject.length).toBeGreaterThan(5);
    expect(b.html).toContain(`${SITE}/basecamp/analytics`);
    expect(b.text).not.toMatch(/undefined|\{[a-z]+\}/);
  });

  it('writes the English sentences', async () => {
    const out = await renderNotificationEmail('notify.signals', 'en', signals, SITE);
    // One signal per type, plus the 5 and 3 folded into two grouped rows, plus the 4 not listed.
    expect(out.subject).toBe(`Your daily SOTF Mods digest: ${TYPES.length + 5 + 3 + 4} signals`);
    expect(out.text).toContain('Kelvin commented on AmmoUi');
    expect(out.text).toContain('5 new comments on AmmoUi');
    expect(out.text).toContain('AmmoUi has 3 new versions, the latest is 1.2.0');
    expect(out.text).toContain('AmmoUi was not approved');
    expect(out.text).toContain('Reason: Reupload without permission');
    expect(out.text).toContain('AmmoUi passed 10,000 downloads');
    expect(out.text).toContain('And 4 more signals');
    const report = await renderNotificationEmail('notify.creator_weekly', 'en', weekly, SITE);
    expect(report.subject).toBe('Your mods last week: +1,234 downloads');
    expect(report.text).toContain('Up 23% from the week before');
    expect(report.text).toContain('12 new followers');
  });

  it('uses ICU plurals in Russian and falls back to English for unknown locales', async () => {
    const ru = await renderNotificationEmail(
      'notify.signals',
      'ru',
      { ...signals, items: [item('comment.on_my_mod', { count: 22 })], moreCount: 0 },
      SITE,
    );
    expect(ru.text).toContain('22 новых комментария к AmmoUi');
    const fallback = await renderNotificationEmail('notify.signals', 'xx', signals, SITE);
    expect(fallback.subject).toContain('Your daily SOTF Mods digest');
  });
});
