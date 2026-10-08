/**
 * `can()` table (PLAN §9.2): every action × every kind of actor. A change of policy must change
 * this table on purpose.
 */
import { PERMISSIONS } from '@sotf/contracts/me';
import { describe, expect, it } from 'vitest';
import { type Action, ALL_ACTIONS, assertCan, can, type PermissionSubject, permissionsOf } from './can.ts';

const NOW = new Date('2026-10-01T12:00:00.000Z');
const LATER = new Date('2026-10-08T12:00:00.000Z');

const base = { userId: 10, emailVerified: true, suspendedUntil: null, verifiedCreator: false } as const;
const ACTORS: Record<string, PermissionSubject | null> = {
  guest: null,
  unverified: { ...base, role: 'user', emailVerified: false },
  user: { ...base, role: 'user' },
  creator: { ...base, role: 'user', verifiedCreator: true },
  suspended: { ...base, role: 'user', suspendedUntil: LATER },
  moderator: { ...base, role: 'moderator' },
  suspendedModerator: { ...base, role: 'moderator', suspendedUntil: LATER },
  admin: { ...base, role: 'admin' },
};
type Who = keyof typeof ACTORS;
const ALL = Object.keys(ACTORS) as Who[];
const WRITERS: Who[] = ['user', 'creator', 'moderator', 'admin'];
const STAFF: Who[] = ['moderator', 'admin'];

/** Who may perform each global action. */
const GLOBAL: Record<(typeof PERMISSIONS)[number], Who[]> = {
  'mod.publish': WRITERS,
  'mod.publish_without_review': ['creator', 'moderator', 'admin'],
  'comment.write': WRITERS,
  'review.write': WRITERS,
  'compat.report': WRITERS,
  'kit.write': WRITERS,
  'moderation.queue': STAFF,
  'moderation.decide': STAFF,
  'moderation.reports': STAFF,
  'moderation.hide_content': STAFF,
  'moderation.sanction': STAFF,
  'moderation.verified_creator': STAFF,
  'moderation.audit': STAFF,
  'admin.roles': ['admin'],
  'admin.settings': ['admin'],
  'admin.taxonomy': ['admin'],
  'admin.game_builds': ['admin'],
  'admin.awards': ['admin'],
  'admin.announcements': ['admin'],
  'admin.kelvinseek': ['admin'],
  'admin.rum': ['admin'],
  'admin.operations': ['admin'],
};

/** Resource actions: who may act on their OWN resource and on SOMEONE ELSE's. */
const RESOURCE: Record<Exclude<Action, (typeof PERMISSIONS)[number]>, { own: Who[]; other: Who[] }> = {
  'account.manage': {
    own: ['unverified', 'user', 'creator', 'suspended', 'moderator', 'suspendedModerator', 'admin'],
    other: [],
  },
  'mod.edit': { own: WRITERS, other: [] },
  'version.publish': { own: WRITERS, other: [] },
  'mod.change_status': { own: WRITERS, other: STAFF },
  'mod.restore': { own: ['admin'], other: ['admin'] },
  'comment.edit': { own: WRITERS, other: [] },
  'review.edit': { own: WRITERS, other: [] },
  'comment.delete': {
    own: ['unverified', 'user', 'creator', 'suspended', 'moderator', 'suspendedModerator', 'admin'],
    other: STAFF,
  },
  'review.delete': {
    own: ['unverified', 'user', 'creator', 'suspended', 'moderator', 'suspendedModerator', 'admin'],
    other: STAFF,
  },
  'kit.edit': { own: ['unverified', 'user', 'creator', 'moderator', 'admin'], other: [] },
  'kit.delete': { own: ['unverified', 'user', 'creator', 'moderator', 'admin'], other: [] },
  'user.view_email': {
    own: ['unverified', 'user', 'creator', 'suspended', 'moderator', 'suspendedModerator', 'admin'],
    other: STAFF,
  },
};

describe('can() table', () => {
  it('covers every action', () => {
    expect([...Object.keys(GLOBAL), ...Object.keys(RESOURCE)].sort()).toEqual([...ALL_ACTIONS].sort());
  });

  for (const [action, allowed] of Object.entries(GLOBAL)) {
    it(`${action}`, () => {
      for (const who of ALL) {
        expect(can(ACTORS[who] ?? null, action as Action, undefined, NOW), `${who} → ${action}`).toBe(
          allowed.includes(who),
        );
      }
    });
  }

  for (const [action, { own, other }] of Object.entries(RESOURCE)) {
    it(`${action} (own / someone else's)`, () => {
      for (const who of ALL) {
        const actor = ACTORS[who] ?? null;
        expect(can(actor, action as Action, { ownerId: 10 }, NOW), `${who} own ${action}`).toBe(own.includes(who));
        expect(can(actor, action as Action, { ownerId: 99 }, NOW), `${who} other ${action}`).toBe(other.includes(who));
        expect(can(actor, action as Action, { ownerId: null }, NOW), `${who} orphan ${action}`).toBe(
          other.includes(who),
        );
      }
    });
  }

  it('a suspension that ended no longer restricts', () => {
    const ended = { ...base, role: 'user' as const, suspendedUntil: new Date('2026-09-01T00:00:00Z') };
    expect(can(ended, 'comment.write', undefined, NOW)).toBe(true);
  });
});

describe('assertCan()', () => {
  it('explains the refusal', () => {
    expect(() => assertCan(null, 'comment.write')).toThrow(expect.objectContaining({ code: 'UNAUTHENTICATED' }));
    expect(() => assertCan(ACTORS.unverified ?? null, 'comment.write', undefined, NOW)).toThrow(
      expect.objectContaining({ code: 'EMAIL_NOT_VERIFIED' }),
    );
    expect(() => assertCan(ACTORS.suspended ?? null, 'comment.write', undefined, NOW)).toThrow(
      expect.objectContaining({ code: 'SUSPENDED' }),
    );
    expect(() => assertCan(ACTORS.user ?? null, 'moderation.queue', undefined, NOW)).toThrow(
      expect.objectContaining({ code: 'FORBIDDEN' }),
    );
    expect(() => assertCan(ACTORS.admin ?? null, 'admin.roles', undefined, NOW)).not.toThrow();
  });
});

describe('permissionsOf()', () => {
  it('lists the global permissions of an actor', () => {
    expect(permissionsOf(null, NOW)).toEqual([]);
    expect(permissionsOf(ACTORS.unverified ?? null, NOW)).toEqual([]);
    expect(permissionsOf(ACTORS.user ?? null, NOW)).toEqual([
      'mod.publish',
      'comment.write',
      'review.write',
      'compat.report',
      'kit.write',
    ]);
    expect(permissionsOf(ACTORS.admin ?? null, NOW)).toEqual([...PERMISSIONS]);
  });
});
