/**
 * Pure rules of comments (PLAN §7.6, §5.1 "Límites de uso", T0-22 anti-spam). No I/O: unit-tested
 * in rules.test.ts and used by service.ts.
 */
import { COMMENT_RULES, REACTION_KINDS, type ReactionKind } from '@sotf/contracts/comments';
import { escapeForLegacy } from '@sotf/markdown';

export { COMMENT_RULES };

/** Comments per user and day on top of the 5/min `comments` bucket (PLAN §5.1). */
export const COMMENTS_PER_DAY = 50;

/** Replies embedded under each top-level comment of a list page (the rest via the permalink). */
export const REPLY_PREVIEW = 3;

/** Replies shown on a permalink (a thread longer than this is truncated, oldest first). */
export const THREAD_REPLIES_MAX = 500;

/** z of the 95 % Wilson interval. */
export const WILSON_Z = 1.96;

/**
 * Lower bound of the Wilson score interval for `positive` successes out of `total` trials; 0 when
 * there are no trials. Used by the Top order of comments (reactions are all positive, so the bound
 * `n / (n + z²)` grows with the number of reactions) and the "helpful" order of reviews.
 */
export function wilsonLowerBound(positive: number, total: number, z: number = WILSON_Z): number {
  if (total <= 0) return 0;
  const p = Math.min(Math.max(positive, 0), total) / total;
  const z2 = z * z;
  const centre = p + z2 / (2 * total);
  const margin = z * Math.sqrt((p * (1 - p) + z2 / (4 * total)) / total);
  return Math.max(0, (centre - margin) / (1 + z2 / total));
}

/** Account facts that decide whether the links of a comment are held for review. */
export interface LinkTrust {
  trustLevel: number;
  staff: boolean;
  verifiedCreator: boolean;
  /** Account younger than 24 h. */
  newAccount: boolean;
}

/**
 * Link retention by trust (T0-22, §5.1): a comment with links that leave the site, written by an
 * account with `trustLevel` 0 (new or unverified; recalculated nightly) or younger than 24 h, is
 * stored as `pending` and only its author and moderators see it until someone approves it. Staff
 * and verified creators are never held. Links to the site itself and @mentions never hold a
 * comment. `externalLinks` are the renderer's browser-resolved links (never re-derived here).
 */
export function holdsForReview(externalLinks: readonly string[], trust: LinkTrust): boolean {
  if (externalLinks.length === 0) return false;
  if (trust.staff || trust.verifiedCreator) return false;
  return trust.trustLevel < 1 || trust.newAccount;
}

/**
 * Legacy "Comment"."message" / "ModReview"."message" (PLAN §6.8 "Texto"): the legacy front end
 * renders these columns as HTML, so v2 stores the Markdown source HTML-escaped: it shows as the
 * literal text the author typed and no markup can execute.
 */
export function legacyText(md: string): string {
  return escapeForLegacy(md);
}

export type ReactionCounts = Record<ReactionKind, number>;

export function emptyReactions(): ReactionCounts {
  return { thumbs_up: 0, heart: 0, laugh: 0, party: 0, pray: 0, fire: 0 };
}

export function isReactionKind(value: string): value is ReactionKind {
  return (REACTION_KINDS as readonly string[]).includes(value);
}
