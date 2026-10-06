import { NOTIFICATION_FILTER_TYPES, NOTIFICATION_TYPES } from '@sotf/contracts/notifications';
import { notification } from '@sotf/db';
import { PgDialect } from 'drizzle-orm/pg-core';
import { describe, expect, it } from 'vitest';
import { Jobs } from '../kernel/jobs.ts';
import { forcedEmail } from './preferences.ts';
import type { NotificationDraft } from './rules.ts';
import { visibleNotification, writeNotificationDrafts } from './service.ts';
import {
  HIDDEN_NOTIFICATION_TYPES,
  isHiddenNotificationType,
  VISIBLE_NOTIFICATION_TYPES,
  visibleTypes,
} from './visibility.ts';

describe('hidden notification types', () => {
  it('only names known types and splits them from the visible ones', () => {
    for (const type of HIDDEN_NOTIFICATION_TYPES) expect(NOTIFICATION_TYPES).toContain(type);
    expect(new Set([...HIDDEN_NOTIFICATION_TYPES, ...VISIBLE_NOTIFICATION_TYPES]).size).toBe(NOTIFICATION_TYPES.length);
    for (const type of VISIBLE_NOTIFICATION_TYPES) expect(isHiddenNotificationType(type)).toBe(false);
  });

  it('hides gamification, kits and Patch Radar, and nothing else', () => {
    expect([...HIDDEN_NOTIFICATION_TYPES].sort()).toEqual(
      [
        'award.won',
        'badge.awarded',
        'compat.acknowledged',
        'compat.broken_on_my_mod',
        'compat.prompt',
        'kit.added_my_mod',
        'kit.comment',
        'kit.comment_reply',
        'kit.updated_followed',
        'milestone.reached',
        'patch.breaking_build',
      ].sort(),
    );
    for (const type of [
      'comment.reply',
      'mod.version_published',
      'mod.status_changed',
      'review.update_prompt',
      'request.fulfilled',
      'jam.phase',
      'report.resolved',
      'system.announcement',
      'creator.weekly_report',
    ] as const) {
      expect(isHiddenNotificationType(type), type).toBe(false);
    }
  });

  it('never lists a hidden type in any filter', () => {
    for (const types of Object.values(NOTIFICATION_FILTER_TYPES)) {
      for (const type of visibleTypes(types)) expect(isHiddenNotificationType(type)).toBe(false);
    }
    expect(visibleTypes(NOTIFICATION_FILTER_TYPES.all)).toEqual(VISIBLE_NOTIFICATION_TYPES);
  });

  it('keeps hidden types out of the lists and unread counts (SQL predicate)', () => {
    const { sql: text, params } = new PgDialect().sqlToQuery(visibleNotification);
    expect(text).toContain('NOT IN');
    expect(params).toEqual(expect.arrayContaining([...HIDDEN_NOTIFICATION_TYPES]));
    expect(params).not.toContain('comment.reply');
    expect(text).toContain(`"${notification.type.name}"`);
  });

  it('never creates a hidden notification', async () => {
    const draft = (type: NotificationDraft['type']): NotificationDraft => ({
      userId: 7,
      type,
      actorId: null,
      target: null,
      groupKey: null,
      data: {},
    });
    const deps = {
      jobs: new Jobs({ send: async () => null, sendDebounced: async () => null }),
      clock: { now: () => new Date('2026-10-06T00:00:00.000Z') },
    };
    // No database is touched: every draft is dropped before any query.
    const result = await writeNotificationDrafts(
      {} as never,
      deps,
      [draft('badge.awarded'), draft('milestone.reached'), draft('kit.comment'), draft('patch.breaking_build')],
      'event-1',
    );
    expect(result).toEqual({ created: 0, grouped: 0, skipped: 4 });
    expect(forcedEmail('badge.awarded', {})).toBe(false);
  });
});
