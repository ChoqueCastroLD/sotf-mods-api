/**
 * Publication policy (PLAN §7.4 "Política de publicación" and "Transiciones de estado"):
 *
 * | Case | Mod | Version |
 * |---|---|---|
 * | New mod/library, checks passed, author may skip review (verified creator or staff) | `published` | `active` |
 * | New mod/library otherwise (first mod of a non-verified creator, or flagged file) | `pending` | `pending` |
 * | New build, blueprint valid | `published` (post-review lane) | `active` |
 * | New version of a published/unlisted/archived mod, checks passed | unchanged | `active` (post-review lane) |
 * | New version with a flagged file | unchanged | `pending` (held for review, not latest) |
 * | New version of a pending mod | `pending` | `pending` (becomes the latest) |
 * | New version of a rejected mod (= resubmission) | `pending` | `pending` (becomes the latest) |
 * | Removed mod | refused | — |
 *
 * Failed checks never reach this function (the submission is refused). VirusTotal detections
 * (`security.scan`, WP-51) are applied afterwards by moderation.
 */
import type { ModStatus } from '@sotf/contracts/common';

export type ChecksOutcome = 'passed' | 'flagged';
export type VersionStatus = 'pending' | 'active';

export interface PublicationInput {
  kind: 'mod' | 'library' | 'build';
  /** Current status of the mod; null for a new mod. */
  modStatus: ModStatus | null;
  checks: ChecksOutcome;
  /** `can(actor, 'mod.publish_without_review')`. */
  canSkipReview: boolean;
}

export interface PublicationDecision {
  modStatus: ModStatus;
  versionStatus: VersionStatus;
  /** The new version becomes `isLatest` (and the mod's `latestVersion`). */
  becomesLatest: boolean;
  /** The file is copied to the public bucket now (checks passed); flagged files wait for review. */
  publishFile: boolean;
}

export class PublicationRefused extends Error {
  override readonly name = 'PublicationRefused';
}

export function decidePublication(input: PublicationInput): PublicationDecision {
  const passed = input.checks === 'passed';
  if (input.modStatus === null) {
    const autoPublish = passed && (input.kind === 'build' || input.canSkipReview);
    return autoPublish
      ? { modStatus: 'published', versionStatus: 'active', becomesLatest: true, publishFile: true }
      : { modStatus: 'pending', versionStatus: 'pending', becomesLatest: true, publishFile: passed };
  }
  switch (input.modStatus) {
    case 'published':
    case 'unlisted':
    case 'archived':
      return passed
        ? { modStatus: input.modStatus, versionStatus: 'active', becomesLatest: true, publishFile: true }
        : { modStatus: input.modStatus, versionStatus: 'pending', becomesLatest: false, publishFile: false };
    case 'pending':
    case 'rejected':
      return { modStatus: 'pending', versionStatus: 'pending', becomesLatest: true, publishFile: passed };
    case 'removed':
      throw new PublicationRefused('a removed mod cannot receive new versions');
  }
}
