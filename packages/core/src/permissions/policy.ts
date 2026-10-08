/**
 * Reviewed permission matrix (PLAN §9.2 "tests por tabla (acciones × roles)", WP-93).
 *
 * `can()` (`can.ts`) is the implementation; this file is the **specification** it was reviewed
 * against, written as data so the two are compared mechanically:
 *
 * - every action of `ALL_ACTIONS` has an entry (the `satisfies Record<Action, …>` makes a new
 *   action without a reviewed row a compile error);
 * - every persona × ownership × action cell is evaluated by {@link reviewPermissionMatrix}; any
 *   difference between the spec and `can()` is a finding (a regression or an unreviewed change);
 *
 * Personas cover every branch of `can()`: guests, unverified email, suspension (for plain users
 * and for staff), the `verifiedCreator` flag and the three roles. Resource actions are evaluated
 * on the persona's own resource, on someone else's and on an orphaned one (`ownerId: null`,
 * legacy rows whose author was deleted), which must behave like someone else's.
 */
import type { Action, OwnedResource, PermissionSubject } from './can.ts';
import { ALL_ACTIONS, can as defaultCan, RESOURCE_ACTIONS } from './can.ts';

export const PERSONAS = [
  'guest',
  'unverified',
  'user',
  'suspended',
  'creator',
  'moderator',
  'moderator_suspended',
  'admin',
] as const;
export type Persona = (typeof PERSONAS)[number];

export type Ownership = 'own' | 'foreign' | 'orphan';
export const OWNERSHIPS: readonly Ownership[] = ['own', 'foreign', 'orphan'];

/** Fixed instant used by the review, so suspensions are evaluated deterministically. */
export const REVIEW_NOW = new Date('2026-06-01T12:00:00Z');
const SUSPENDED_UNTIL = new Date('2026-06-08T12:00:00Z');
const PERSONA_USER_ID = 1001;
const OTHER_USER_ID = 2002;

/** The subject each persona stands for (null = guest). */
export function personaSubject(persona: Persona): PermissionSubject | null {
  const base = { userId: PERSONA_USER_ID, emailVerified: true, suspendedUntil: null, verifiedCreator: false };
  switch (persona) {
    case 'guest':
      return null;
    case 'unverified':
      return { ...base, role: 'user', emailVerified: false };
    case 'user':
      return { ...base, role: 'user' };
    case 'suspended':
      return { ...base, role: 'user', suspendedUntil: SUSPENDED_UNTIL };
    case 'creator':
      return { ...base, role: 'user', verifiedCreator: true };
    case 'moderator':
      return { ...base, role: 'moderator' };
    case 'moderator_suspended':
      return { ...base, role: 'moderator', suspendedUntil: SUSPENDED_UNTIL };
    case 'admin':
      return { ...base, role: 'admin' };
  }
}

export function ownershipResource(ownership: Ownership): OwnedResource {
  switch (ownership) {
    case 'own':
      return { ownerId: PERSONA_USER_ID };
    case 'foreign':
      return { ownerId: OTHER_USER_ID };
    case 'orphan':
      return { ownerId: null };
  }
}

/** Global action: who may perform it. */
export interface GlobalRule {
  kind: 'global';
  allow: readonly Persona[];
  why: string;
}

/** Resource action: who may perform it on their own resource and on anybody else's. */
export interface ResourceRule {
  kind: 'resource';
  own: readonly Persona[];
  /** Also applies to orphaned resources (`ownerId: null`). */
  foreign: readonly Persona[];
  why: string;
}

export type PermissionRule = GlobalRule | ResourceRule;

const SIGNED_IN: readonly Persona[] = PERSONAS.filter((p) => p !== 'guest');
/** Verified email and not suspended. */
const WRITERS: readonly Persona[] = ['user', 'creator', 'moderator', 'admin'];
const STAFF: readonly Persona[] = ['moderator', 'admin'];
const ADMIN: readonly Persona[] = ['admin'];
const NOT_SUSPENDED: readonly Persona[] = ['unverified', 'user', 'creator', 'moderator', 'admin'];

const contribution = (why: string): GlobalRule => ({ kind: 'global', allow: WRITERS, why });
const moderation = (why: string): GlobalRule => ({ kind: 'global', allow: STAFF, why });
const administration = (why: string): GlobalRule => ({ kind: 'global', allow: ADMIN, why });

export const PERMISSION_MATRIX = {
  'mod.publish': contribution('Publishing needs a verified email; suspended accounts cannot create content.'),
  'mod.publish_without_review': {
    kind: 'global',
    allow: ['creator', 'moderator', 'admin'],
    why: 'Verified creators and staff skip the first-mod human review (PLAN §7.4); plain users do not.',
  },
  'comment.write': contribution('Comments need a verified email and no suspension.'),
  'review.write': contribution('Reviews need a verified email and no suspension (age rule is in the domain).'),
  'compat.report': contribution('Field reports need a verified email and no suspension.'),
  'kit.write': contribution('Kits need a verified email and no suspension.'),
  'moderation.queue': moderation('Moderation queue: moderators and admins, never while suspended.'),
  'moderation.decide': moderation('Approve/reject: moderators and admins.'),
  'moderation.reports': moderation('Report triage: moderators and admins.'),
  'moderation.hide_content': moderation('Hide comments/reviews: moderators and admins.'),
  'moderation.sanction': moderation('Sanctions: moderators and admins (audited).'),
  'moderation.verified_creator': moderation('Grant/revoke verified creator: moderators and admins.'),
  'moderation.audit': moderation('Audit log: moderators and admins.'),
  'admin.roles': administration('Role changes: admins only.'),
  'admin.settings': administration('Site settings and kill switches: admins only.'),
  'admin.taxonomy': administration('Categories and tags: admins only.'),
  'admin.game_builds': administration('Game builds and ecosystem status: admins only.'),
  'admin.awards': administration('Awards: admins only.'),
  'admin.announcements': administration('Announcements: admins only.'),
  'admin.kelvinseek': administration('KelvinSeek budget and kill switch: admins only.'),
  'admin.rum': administration('Real-user monitoring dashboards: admins only.'),
  'admin.operations': administration('Retry or discard failed jobs (dead letters): admins only.'),
  'account.manage': {
    kind: 'resource',
    own: SIGNED_IN,
    foreign: [],
    why: 'Only the owner manages an account (export, delete, password), even while suspended or unverified.',
  },
  'mod.edit': {
    kind: 'resource',
    own: WRITERS,
    foreign: [],
    why: 'Only the author edits a mod; staff moderate through status changes, never by editing content.',
  },
  'mod.change_status': {
    kind: 'resource',
    own: WRITERS,
    foreign: STAFF,
    why: 'Authors unlist/archive their own mods; staff change any status (the moderation endpoints also require moderation.decide).',
  },
  'mod.restore': {
    kind: 'resource',
    own: ADMIN,
    foreign: ADMIN,
    why: 'Restoring a removed mod is an admin action.',
  },
  'version.publish': {
    kind: 'resource',
    own: WRITERS,
    foreign: [],
    why: 'Only the author publishes versions of a mod.',
  },
  'comment.edit': {
    kind: 'resource',
    own: WRITERS,
    foreign: [],
    why: 'Only the author edits a comment, while allowed to write.',
  },
  'comment.delete': {
    kind: 'resource',
    own: SIGNED_IN,
    foreign: STAFF,
    why: 'Authors may always delete their own comment (even suspended); staff delete any.',
  },
  'review.edit': {
    kind: 'resource',
    own: WRITERS,
    foreign: [],
    why: 'Only the author edits a review, while allowed to write.',
  },
  'review.delete': {
    kind: 'resource',
    own: SIGNED_IN,
    foreign: STAFF,
    why: 'Authors may always delete their own review (even suspended); staff delete any.',
  },
  'kit.edit': {
    kind: 'resource',
    own: NOT_SUSPENDED,
    foreign: [],
    why: 'Owners edit their kits unless suspended (creating kits needs kit.write).',
  },
  'kit.delete': {
    kind: 'resource',
    own: NOT_SUSPENDED,
    foreign: [],
    why: 'Owners delete their kits unless suspended; staff hide kits through moderation.',
  },
  'user.view_email': {
    kind: 'resource',
    own: SIGNED_IN,
    foreign: STAFF,
    why: 'Own email always; staff only on the user card, and the caller writes an AuditLog row (PLAN §9.2).',
  },
} as const satisfies Record<Action, PermissionRule>;

/** The expected answer of the spec for one cell. */
export function expectedPermission(action: Action, persona: Persona, ownership: Ownership): boolean {
  const rule: PermissionRule = PERMISSION_MATRIX[action];
  if (rule.kind === 'global') return rule.allow.includes(persona);
  return (ownership === 'own' ? rule.own : rule.foreign).includes(persona);
}

export interface PermissionFinding {
  action: Action;
  persona: Persona;
  /** `null` for global actions. */
  ownership: Ownership | null;
  expected: boolean;
  actual: boolean;
  kind: 'decision' | 'unreviewed_action';
}

export interface PermissionReviewOptions {
  can?: (subject: PermissionSubject | null, action: Action, resource?: OwnedResource, now?: Date) => boolean;
  actions?: readonly Action[];
}

/**
 * Compares `can()` with the reviewed matrix. Returns every mismatching cell (empty = reviewed and
 * consistent). Global actions are also probed with a resource to prove ownership never widens them.
 */
export function reviewPermissionMatrix(options: PermissionReviewOptions = {}): PermissionFinding[] {
  const canFn = options.can ?? defaultCan;
  const actions = options.actions ?? ALL_ACTIONS;
  const resourceActions = new Set<string>(RESOURCE_ACTIONS);
  const findings: PermissionFinding[] = [];

  for (const action of actions) {
    const rule = (PERMISSION_MATRIX as Partial<Record<string, PermissionRule>>)[action];
    if (!rule) {
      findings.push({
        action,
        persona: 'guest',
        ownership: null,
        expected: false,
        actual: false,
        kind: 'unreviewed_action',
      });
      continue;
    }
    if ((rule.kind === 'resource') !== resourceActions.has(action)) {
      findings.push({
        action,
        persona: 'guest',
        ownership: null,
        expected: rule.kind === 'resource',
        actual: resourceActions.has(action),
        kind: 'unreviewed_action',
      });
    }
    for (const persona of PERSONAS) {
      const subject = personaSubject(persona);
      if (rule.kind === 'global') {
        const expected = expectedPermission(action, persona, 'foreign');
        const probes: Array<OwnedResource | undefined> = [undefined, ownershipResource('own')];
        for (const resource of probes) {
          const actual = canFn(subject, action, resource, REVIEW_NOW);
          if (actual !== expected) {
            findings.push({ action, persona, ownership: resource ? 'own' : null, expected, actual, kind: 'decision' });
          }
        }
        continue;
      }
      for (const ownership of OWNERSHIPS) {
        const expected = expectedPermission(action, persona, ownership);
        const actual = canFn(subject, action, ownershipResource(ownership), REVIEW_NOW);
        if (actual !== expected) findings.push({ action, persona, ownership, expected, actual, kind: 'decision' });
      }
    }
  }
  return findings;
}

/** Markdown table of the reviewed matrix (for the security review document and `/developers`). */
export function permissionMatrixMarkdown(): string {
  const header = `| Action | ${PERSONAS.join(' | ')} |`;
  const divider = `|---|${PERSONAS.map(() => '---').join('|')}|`;
  const rows = ALL_ACTIONS.map((action) => {
    const rule: PermissionRule = PERMISSION_MATRIX[action];
    const cells = PERSONAS.map((persona) => {
      if (rule.kind === 'global') return rule.allow.includes(persona) ? 'yes' : '-';
      const own = rule.own.includes(persona);
      const foreign = rule.foreign.includes(persona);
      return own && foreign ? 'any' : own ? 'own' : foreign ? 'others' : '-';
    });
    return `| \`${action}\` | ${cells.join(' | ')} |`;
  });
  return [header, divider, ...rows].join('\n');
}
