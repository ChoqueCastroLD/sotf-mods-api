import { NOTIFICATION_DEFAULTS, NOTIFICATION_TYPES } from '@sotf/contracts/notifications';
import { describe, expect, it } from 'vitest';
import { cadenceOfRun, localizedReason, localizedUrl } from './digest.ts';
import { listUnsubscribeHeaders, NOTIFICATION_EMAIL_PAYLOADS } from './email.ts';
import { deterministicUuid } from './ids.ts';
import { forcedEmail, isNotificationType } from './preferences.ts';
import { modKindOf, plainExcerpt } from './refs.ts';
import {
  createUnsubscribeToken,
  isUnsubscribeScope,
  typesForScope,
  unsubscribeUrls,
  verifyUnsubscribeToken,
} from './unsubscribe.ts';

const SECRET = 'test-secret-that-is-long-enough-for-hmac-000';

describe('unsubscribe tokens', () => {
  it('round-trips and rejects tampering or another secret', () => {
    const token = createUnsubscribeToken(SECRET, { userId: 42, scope: 'type:comment.mention', iat: 1_790_000_000 });
    expect(verifyUnsubscribeToken(SECRET, token)).toEqual({
      userId: 42,
      scope: 'type:comment.mention',
      iat: 1_790_000_000,
    });
    expect(verifyUnsubscribeToken(`${SECRET}x`, token)).toBeNull();
    const [body, sig] = token.split('.') as [string, string];
    const forged = Buffer.from(JSON.stringify({ u: 43, s: 'type:comment.mention', t: 1_790_000_000 })).toString(
      'base64url',
    );
    expect(verifyUnsubscribeToken(SECRET, `${forged}.${sig}`)).toBeNull();
    expect(verifyUnsubscribeToken(SECRET, `${body}.${sig.slice(1)}`)).toBeNull();
    expect(verifyUnsubscribeToken(SECRET, 'garbage')).toBeNull();
    expect(verifyUnsubscribeToken(SECRET, `${body}.${sig}.x`)).toBeNull();
  });

  it('only accepts known scopes', () => {
    expect(isUnsubscribeScope('type:mod.version_published')).toBe(true);
    expect(isUnsubscribeScope('cadence:daily')).toBe(true);
    expect(isUnsubscribeScope('cadence:off')).toBe(false);
    expect(isUnsubscribeScope('type:nope')).toBe(false);
    const body = Buffer.from(JSON.stringify({ u: 1, s: 'type:nope', t: 1 })).toString('base64url');
    const token = createUnsubscribeToken(SECRET, { userId: 1, scope: 'cadence:weekly', iat: 1 });
    expect(verifyUnsubscribeToken(SECRET, `${body}.${token.split('.')[1]}`)).toBeNull();
  });

  it('maps a cadence scope to the types currently mailed with it', () => {
    const matrix = new Map(NOTIFICATION_TYPES.map((type) => [type, { email: NOTIFICATION_DEFAULTS[type].email }]));
    expect(typesForScope('cadence:daily', matrix).sort()).toEqual([
      'jam.phase',
      'mod.version_published',
      'review.on_my_mod',
    ]);
    expect(typesForScope('type:comment.reply', matrix)).toEqual(['comment.reply']);
  });

  it('builds the one-click and page URLs (localized page)', () => {
    expect(unsubscribeUrls('https://sotf-mods.com/', 'a.b', 'es')).toEqual({
      oneClick: 'https://sotf-mods.com/api/v2/unsubscribe?token=a.b',
      page: 'https://sotf-mods.com/es/unsubscribe?token=a.b',
    });
    expect(unsubscribeUrls('https://sotf-mods.com', 'a.b', 'en').page).toBe(
      'https://sotf-mods.com/unsubscribe?token=a.b',
    );
    expect(listUnsubscribeHeaders({ unsubscribe: { oneClick: 'https://x.test/u?token=1' } })).toEqual({
      'List-Unsubscribe': '<https://x.test/u?token=1>',
      'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
    });
  });
});

describe('helpers', () => {
  it('derives stable RFC 9562 v8 uuids', () => {
    const a = deterministicUuid('discord.announce:version.published:20:415');
    expect(a).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-8[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
    expect(deterministicUuid('discord.announce:version.published:20:415')).toBe(a);
    expect(deterministicUuid('discord.announce:version.published:20:416')).not.toBe(a);
  });

  it('makes plain excerpts from Markdown and legacy escaped HTML', () => {
    expect(plainExcerpt('Hey **@kelvin**, see [the docs](https://x.test) `now`')).toBe('Hey @kelvin, see the docs now');
    expect(plainExcerpt('Tom &amp; Jerry &lt;3 &#39;quoted&#39;')).toBe("Tom & Jerry <3 'quoted'");
    expect(plainExcerpt('<b>bold</b>\n\n  text')).toBe('bold text');
    const long = plainExcerpt('word '.repeat(100), 50);
    expect(long.length).toBeLessThanOrEqual(50);
    expect(long.endsWith('…')).toBe(true);
    expect(plainExcerpt(null)).toBe('');
  });

  it('knows the notification types, the forced email and the mod kinds', () => {
    expect(isNotificationType('comment.mention')).toBe(true);
    expect(isNotificationType('comment.created')).toBe(false);
    expect(forcedEmail('mod.status_changed', { status: 'removed' })).toBe(true);
    expect(forcedEmail('mod.status_changed', { status: 'rejected' })).toBe(false);
    expect(modKindOf('Build')).toBe('build');
    expect(modKindOf('Library')).toBe('library');
    expect(modKindOf(null)).toBe('mod');
    expect(cadenceOfRun('10m')).toBe('instant');
    expect(localizedUrl('https://sotf-mods.com', 'de', '/')).toBe('https://sotf-mods.com/de');
    expect(localizedUrl('https://sotf-mods.com', 'en', '/notifications')).toBe('https://sotf-mods.com/notifications');
  });

  it('validates the email payloads', () => {
    const ok = NOTIFICATION_EMAIL_PAYLOADS['notify.signals'].safeParse({
      displayName: 'Kelvin',
      cadence: 'daily',
      items: [
        {
          type: 'mod.version_published',
          count: 2,
          actorName: null,
          modName: 'AmmoUi',
          url: 'https://sotf-mods.com/mods/a/ammoui/versions/1.2.0',
          excerpt: null,
          version: '1.2.0',
          rating: null,
          status: null,
          reason: null,
          build: null,
          threshold: null,
          awardKind: null,
          badgeKey: null,
          reportAction: null,
          createdAt: '2026-09-30T07:00:00.000Z',
        },
      ],
      moreCount: 0,
      signalsUrl: 'https://sotf-mods.com/notifications',
      unsubscribe: {
        oneClick: 'https://sotf-mods.com/api/v2/unsubscribe?token=a.b',
        page: 'https://sotf-mods.com/unsubscribe?token=a.b',
      },
    });
    expect(ok.success).toBe(true);
    expect(NOTIFICATION_EMAIL_PAYLOADS['notify.signals'].safeParse({ displayName: 'x', items: [] }).success).toBe(
      false,
    );
  });
});

describe('localizedReason', () => {
  const templates = [
    {
      key: 'missing_screenshots',
      action: 'request_changes' as const,
      messages: { en: 'Please add a screenshot.', es: 'Añade una captura.' },
    },
  ];

  it('replaces the English template text and keeps the note', () => {
    expect(localizedReason('Please add a screenshot.\n\nThe menu one.', 'missing_screenshots', 'es', templates)).toBe(
      'Añade una captura.\n\nThe menu one.',
    );
    expect(localizedReason('Please add a screenshot.', 'missing_screenshots', 'es', templates)).toBe(
      'Añade una captura.',
    );
  });

  it('keeps the stored reason without a template, a wording or a known key', () => {
    expect(localizedReason('Free note', null, 'es', templates)).toBe('Free note');
    expect(localizedReason('Please add a screenshot.', 'missing_screenshots', 'de', templates)).toBe(
      'Please add a screenshot.',
    );
    expect(localizedReason('Gone', 'deleted_template', 'es', templates)).toBe('Gone');
  });
});
