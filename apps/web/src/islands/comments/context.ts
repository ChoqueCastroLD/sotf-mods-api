/**
 * Shared state of one comments island (mod, viewer, participants, versions, report dialog).
 */
import { createContext, useContext } from 'react';
import type { MentionCandidate } from './Composer.tsx';
import type { MeSummary } from './lib/session.ts';
import type { AnyComment, Comment, VersionOption } from './types.ts';

export interface CommentsContextValue {
  modId: number;
  modAuthorId: number;
  session: MeSummary | null;
  /** `/login?next=…` of the page. */
  loginHref: string;
  turnstileSiteKey: string | undefined;
  participants: readonly MentionCandidate[];
  /** Versions of the mod (newest first), loaded on first use. */
  loadVersions: () => Promise<VersionOption[]>;
  report: (commentId: number) => void;
  /** Replaces the fields of a comment or reply after a write. */
  patch: (id: number, fresh: Partial<AnyComment>) => void;
  /** Adds a reply under its top-level comment. */
  addReply: (rootId: number, reply: Comment) => void;
  /** Soft/hard removal after a delete (and its undo). */
  remove: (id: number) => () => void;
  /** Loads the whole thread of a top-level comment (all replies). */
  expand: (rootId: number) => Promise<boolean>;
  announce: (message: string) => void;
}

export const CommentsContext = createContext<CommentsContextValue | null>(null);

export function useComments(): CommentsContextValue {
  const value = useContext(CommentsContext);
  if (!value) throw new Error('CommentsContext missing');
  return value;
}
