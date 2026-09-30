/**
 * Wire types of the comments island (`@sotf/contracts/comments`, type-only: no Zod ships).
 */
import type { CommentDTO, CommentReplyDTO, ReactionStateDTO } from '@sotf/contracts/comments';
import type { z } from 'zod';

export type Comment = z.output<typeof CommentDTO>;
export type Reply = z.output<typeof CommentReplyDTO>;
/** A top-level comment or a reply. */
export type AnyComment = Comment | Reply;
export type ReactionKind = keyof Comment['reactions'];
export type ReactionState = z.output<typeof ReactionStateDTO>;

export interface CommentPage {
  items: Comment[];
  nextCursor: string | null;
}

export interface CommentThread {
  comment: Comment;
  focusId: number;
}

export interface VersionOption {
  id: number;
  version: string;
}

export type CommentSort = 'top' | 'new';
