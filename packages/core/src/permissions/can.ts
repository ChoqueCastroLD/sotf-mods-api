/**
 * Central authorization (PLAN §9.2, §7.4): `can(subject, action, resource?)` answers every
 * permission question of the server and feeds the `permissions` list of `GET /me` (the UI only
 * hides what the server would refuse anyway).
 *
 * Roles: `user` ⊂ `moderator` ⊂ `admin`, plus the `verifiedCreator` flag. Rules:
 * - Guests can do nothing listed here (reads are public and not modelled as actions).
 * - Writing content (mods, comments, reviews, compat reports, kits) needs a verified email and an
 *   account that is not suspended. Suspended users may still read and manage their own account.
 * - `mod.publish_without_review`: verified creators (and staff) skip the first-mod human review.
 * - Moderation actions: moderators and admins (not while suspended). Admin actions: admins.
 * - Ownership actions (`*.edit`, `*.delete`): the owner, or staff where moderation allows it.
 * - Moderator/admin actions additionally require a session younger than 12 h
 *   (`needsFreshSession(action)` + `assertFreshSession`, `REAUTH_REQUIRED`).
 */
import { PERMISSIONS, type Permission } from '@sotf/contracts/me';
import type { Actor } from '../kernel/context.ts';
import { DomainError } from '../kernel/errors.ts';

/** What `can()` needs to know about the actor (the session actor plus account flags). */
export interface PermissionSubject extends Actor {
  /** "User"."verifiedCreator" (false when unknown). */
  verifiedCreator?: boolean;
  /** "User"."trustLevel" 0–3 (0 when unknown). */
  trustLevel?: number;
}

/** Resource-scoped actions (checked against an owner). */
export const RESOURCE_ACTIONS = [
  'account.manage',
  'mod.edit',
  'mod.change_status',
  'mod.restore',
  'version.publish',
  'comment.edit',
  'comment.delete',
  'review.edit',
  'review.delete',
  'kit.edit',
  'kit.delete',
  'user.view_email',
] as const;
export type ResourceAction = (typeof RESOURCE_ACTIONS)[number];

export type Action = Permission | ResourceAction;

/** The resource of an ownership check. */
export interface OwnedResource {
  /** Owner / author user id (null when orphaned). */
  ownerId: number | null;
}

export const ALL_ACTIONS: readonly Action[] = [...PERMISSIONS, ...RESOURCE_ACTIONS];

const REAUTH_WINDOW_MS = 12 * 3600 * 1000;

function isSuspended(subject: PermissionSubject, now: Date): boolean {
  return Boolean(subject.suspendedUntil && subject.suspendedUntil.getTime() > now.getTime());
}

function isStaff(subject: PermissionSubject): boolean {
  return subject.role === 'moderator' || subject.role === 'admin';
}

function isOwner(subject: PermissionSubject, resource: OwnedResource | undefined): boolean {
  return Boolean(resource && resource.ownerId !== null && resource.ownerId === subject.userId);
}

/** True when `subject` may perform `action` (on `resource` for ownership actions). */
export function can(
  subject: PermissionSubject | null,
  action: Action,
  resource?: OwnedResource,
  now: Date = new Date(),
): boolean {
  if (!subject) return false;
  const suspended = isSuspended(subject, now);
  const writer = subject.emailVerified && !suspended;
  const staff = isStaff(subject) && !suspended;
  const admin = subject.role === 'admin' && !suspended;
  const owner = isOwner(subject, resource);

  switch (action) {
    // Contributions.
    case 'mod.publish':
    case 'comment.write':
    case 'review.write':
    case 'compat.report':
    case 'kit.write':
      return writer;
    case 'mod.publish_without_review':
      return writer && (subject.verifiedCreator === true || isStaff(subject));
    // Moderation.
    case 'moderation.queue':
    case 'moderation.decide':
    case 'moderation.reports':
    case 'moderation.hide_content':
    case 'moderation.sanction':
    case 'moderation.verified_creator':
    case 'moderation.audit':
      return staff;
    // Administration.
    case 'admin.roles':
    case 'admin.settings':
    case 'admin.taxonomy':
    case 'admin.game_builds':
    case 'admin.awards':
    case 'admin.announcements':
    case 'admin.kelvinseek':
    case 'admin.rum':
      return admin;
    // Resources.
    case 'account.manage':
      // Suspended users can still manage their account (export, delete, password…).
      return owner;
    case 'mod.edit':
    case 'version.publish':
      return owner && writer;
    case 'mod.change_status':
      return (owner && writer) || staff;
    case 'mod.restore':
      return admin;
    case 'comment.edit':
    case 'review.edit':
      return owner && writer;
    case 'comment.delete':
    case 'review.delete':
      return owner || staff;
    case 'kit.edit':
    case 'kit.delete':
      return owner && !suspended;
    case 'user.view_email':
      // Own email always; staff only on the user card (audited by the caller).
      return owner || staff;
  }
}

/** Throws `FORBIDDEN` (or `SUSPENDED`/`EMAIL_NOT_VERIFIED` when that is the reason). */
export function assertCan(
  subject: PermissionSubject | null,
  action: Action,
  resource?: OwnedResource,
  now: Date = new Date(),
): void {
  if (can(subject, action, resource, now)) return;
  if (!subject) throw new DomainError('UNAUTHENTICATED', undefined, 'Sign in required');
  const wouldAllow = can({ ...subject, emailVerified: true, suspendedUntil: null }, action, resource, now);
  if (wouldAllow && isSuspended(subject, now)) {
    throw new DomainError('SUSPENDED', undefined, 'Your account is suspended');
  }
  if (wouldAllow && !subject.emailVerified) {
    throw new DomainError('EMAIL_NOT_VERIFIED', undefined, 'Verify your email first');
  }
  throw new DomainError('FORBIDDEN', undefined, 'You cannot do this');
}

/** The `permissions` list of `GET /me` (global permissions only; resources are checked per call). */
export function permissionsOf(subject: PermissionSubject | null, now: Date = new Date()): Permission[] {
  return PERMISSIONS.filter((permission) => can(subject, permission, undefined, now));
}

/** Moderator/admin actions require a recent sign-in (PLAN §7.4). */
export function needsFreshSession(action: Action): boolean {
  return action.startsWith('moderation.') || action.startsWith('admin.') || action === 'mod.restore';
}

/**
 * Throws `REAUTH_REQUIRED` when the session that authenticated the request is older than 12 h.
 * `sessionCreatedAt` comes from `loadSessionCreatedAt` (auth) or the resolver.
 */
export function assertFreshSession(sessionCreatedAt: Date | null, now: Date = new Date()): void {
  if (!sessionCreatedAt || now.getTime() - sessionCreatedAt.getTime() > REAUTH_WINDOW_MS) {
    throw new DomainError('REAUTH_REQUIRED', undefined, 'Sign in again to continue');
  }
}
