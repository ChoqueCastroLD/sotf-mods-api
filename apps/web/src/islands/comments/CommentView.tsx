/**
 * One thread of the comments island: the top-level comment (`CommentItem` of @sotf/ui/domain,
 * the same markup as the server-rendered list) with interactive reactions and actions, its
 * replies (2 levels in the UI: a reply to a reply answers the thread with «@handle»), «View N
 * more replies», and the inline reply / edit forms.
 *
 * Actions by role (PLAN §7.6):
 * - everyone signed in: reply, react, report (not their own);
 * - the comment's author: edit, delete (soft when it has replies; optimistic with undo);
 * - the mod's author: pin (top-level, max 3), mark the solution (replies), «resolved in vX»
 *   (bug reports).
 */
import { Button } from '@sotf/ui/button';
import { CommentItem } from '@sotf/ui/domain';
import { Icon } from '@sotf/ui/icons';
import { CornerDownRight, Reply as ReplyIcon } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';
import { toast } from '../../lib/client/toast.ts';
import { CommentForm, type CommentFormMode } from './CommentForm.tsx';
import { useComments } from './context.ts';
import { api, type Failure } from './lib/api.ts';
import { localized } from './lib/i18n.tsx';
import { htmlToMarkdown } from './lib/markdown.ts';
import { ActionMenu, type MenuItem } from './lib/menu.tsx';
import { t } from './lib/messages.ts';
import { deferWithUndo, FailureNote, Modal, notifyFailure } from './lib/ui.tsx';
import { Reactions } from './Reactions.tsx';
import type { AnyComment, Comment, VersionOption } from './types.ts';

function authorName(comment: AnyComment): string {
  return comment.author?.displayName || comment.author?.handle || t('social_deleted_user');
}

interface ItemProps {
  comment: AnyComment;
  onReply: (target: AnyComment) => void;
  focused: boolean;
}

function ResolveDialog({ comment, onClose }: { comment: AnyComment | null; onClose: () => void }) {
  const ctx = useComments();
  const [versions, setVersions] = useState<VersionOption[] | null>(null);
  const [versionId, setVersionId] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);
  const [failure, setFailure] = useState<Failure | null>(null);
  const selectId = useId();

  useEffect(() => {
    if (!comment) return;
    setFailure(null);
    let cancelled = false;
    void ctx.loadVersions().then((list) => {
      if (cancelled) return;
      setVersions(list);
      setVersionId(list[0]?.id ?? null);
    });
    return () => {
      cancelled = true;
    };
  }, [comment, ctx]);

  const submit = async () => {
    if (!comment || !versionId) return;
    setBusy(true);
    const result = await api<Comment>('POST', `/api/v2/comments/${comment.id}/resolve`, { versionId });
    setBusy(false);
    if (!result.ok) {
      setFailure(result);
      return;
    }
    ctx.patch(comment.id, result.data);
    const version = versions?.find((item) => item.id === versionId)?.version ?? '';
    ctx.announce(t('social_bug_resolved_done', { version }));
    onClose();
  };

  return (
    <Modal
      open={comment !== null}
      onClose={onClose}
      title={t('social_bug_resolve_title')}
      description={t('social_bug_resolve_intro')}
      size="sm"
    >
      <div className="grid gap-4">
        <div className="grid gap-1">
          <label htmlFor={selectId} className="text-sm font-semibold">
            {t('social_bug_resolve_version')}
          </label>
          <select
            id={selectId}
            value={versionId ?? ''}
            disabled={!versions}
            onChange={(event) => setVersionId(Number(event.target.value))}
            className="min-h-11 rounded-md border border-border-strong bg-sunken shadow-[inset_0_1px_2px_rgb(0_0_0/0.18)] transition-[border-color,box-shadow] duration-(--dur-fast) hover:border-fg-subtle focus-visible:border-focus focus-visible:shadow-[0_0_0_3px_var(--focus-halo)] focus-visible:outline-none px-2 text-sm"
          >
            {!versions ? <option value="">{t('social_loading')}</option> : null}
            {versions?.map((version) => (
              <option key={version.id} value={version.id}>
                {version.version}
              </option>
            ))}
          </select>
        </div>
        {failure ? <FailureNote failure={failure} onRetry={() => void submit()} /> : null}
        <div className="flex justify-end gap-2">
          <Button variant="ghost" onClick={onClose}>
            {t('social_action_cancel')}
          </Button>
          <Button onClick={() => void submit()} loading={busy} disabled={!versionId}>
            {t('social_bug_resolve_submit')}
          </Button>
        </div>
      </div>
    </Modal>
  );
}

function CommentEntry({ comment, onReply, focused }: ItemProps) {
  const ctx = useComments();
  const { session } = ctx;
  const [editing, setEditing] = useState(false);
  const [resolving, setResolving] = useState(false);
  const articleRef = useRef<HTMLDivElement | null>(null);
  const isReply = comment.parentId !== null;
  const deleted = comment.status === 'deleted';
  const isOwn = session !== null && comment.author?.id === session.id;
  const isModOwner = session !== null && session.id === ctx.modAuthorId;

  useEffect(() => {
    if (!focused) return;
    const element = articleRef.current?.querySelector<HTMLElement>('article');
    element?.scrollIntoView({ block: 'center' });
    element?.setAttribute('tabindex', '-1');
    element?.focus({ preventScroll: true });
  }, [focused]);

  const run = async (method: 'POST' | 'DELETE', path: string, done: string) => {
    const result = await api<Comment>(method, path);
    if (!result.ok) {
      if (result.kind === 'problem' && result.problem.code === 'CONFLICT' && path.endsWith('/pin')) {
        toast.warning(t('social_pin_limit'));
      } else {
        notifyFailure(result);
      }
      return;
    }
    ctx.patch(comment.id, result.data);
    ctx.announce(done);
  };

  const remove = () => {
    const restore = ctx.remove(comment.id);
    deferWithUndo(
      t('social_comment_deleted'),
      () => {
        void api('DELETE', `/api/v2/comments/${comment.id}`).then((result) => {
          if (!result.ok) {
            restore();
            notifyFailure(result);
          }
        });
      },
      restore,
    );
  };

  const items: MenuItem[] = [];
  if (session && !deleted) {
    if (isOwn) {
      items.push({ key: 'edit', label: t('social_action_edit'), onSelect: () => setEditing(true) });
      items.push({ key: 'delete', label: t('social_action_delete'), danger: true, onSelect: remove });
    }
    if (isModOwner && !isReply) {
      items.push(
        comment.pinnedAt
          ? {
              key: 'unpin',
              label: t('social_unpin'),
              onSelect: () => void run('DELETE', `/api/v2/comments/${comment.id}/pin`, t('social_unpinned')),
            }
          : {
              key: 'pin',
              label: t('social_pin'),
              onSelect: () => void run('POST', `/api/v2/comments/${comment.id}/pin`, t('social_pinned')),
            },
      );
    }
    if (isModOwner && isReply) {
      items.push(
        comment.isSolution
          ? {
              key: 'unsolve',
              label: t('social_solution_unmark'),
              onSelect: () =>
                void run('DELETE', `/api/v2/comments/${comment.id}/solution`, t('social_solution_unmarked')),
            }
          : {
              key: 'solve',
              label: t('social_solution_mark'),
              onSelect: () => void run('POST', `/api/v2/comments/${comment.id}/solution`, t('social_solution_marked')),
            },
      );
    }
    if (isModOwner && comment.isBugReport && !comment.bugResolvedIn) {
      items.push({ key: 'resolve', label: t('social_bug_resolve'), onSelect: () => setResolving(true) });
    }
    if (!isOwn) items.push({ key: 'report', label: t('social_report'), onSelect: () => ctx.report(comment.id) });
  }

  const display: AnyComment = { ...comment, bodyHtml: localized(comment.bodyHtml) };
  const replyTarget = isReply ? comment : null;

  if (editing) {
    return (
      <div className={isReply ? 'ms-6 border-s border-border ps-4 md:ms-10' : ''}>
        <CommentForm
          mode={{ kind: 'edit', comment: { id: comment.id, initialMd: htmlToMarkdown(comment.bodyHtml) } }}
          autoFocus
          onCancel={() => setEditing(false)}
          onDone={(fresh) => {
            ctx.patch(comment.id, fresh);
            setEditing(false);
          }}
        />
      </div>
    );
  }

  return (
    <div ref={articleRef} className={focused ? 'rounded-lg ring-2 ring-focus ring-offset-2 ring-offset-bg' : undefined}>
      <CommentItem
        comment={display}
        permalink={`#comment-${comment.id}`}
        reactions={deleted ? undefined : <Reactions comment={comment} />}
        actions={
          session && !deleted ? (
            <>
              <Button
                variant="ghost"
                size="sm"
                icon={<Icon icon={ReplyIcon} size={14} />}
                onClick={() => onReply(replyTarget ?? comment)}
                aria-label={t('social_reply_to_label', { name: authorName(comment) })}
                className="max-md:min-h-11"
              >
                {t('social_reply')}
              </Button>
              <ActionMenu label={t('social_more_actions', { name: authorName(comment) })} items={items} />
            </>
          ) : undefined
        }
      />
      {resolving ? <ResolveDialog comment={comment} onClose={() => setResolving(false)} /> : null}
    </div>
  );
}

export interface ThreadProps {
  comment: Comment;
  focusId: number | null;
}

export function Thread({ comment, focusId }: ThreadProps) {
  const ctx = useComments();
  const [replying, setReplying] = useState<CommentFormMode | null>(null);
  const [expanding, setExpanding] = useState(false);
  const hidden = comment.repliesCount - comment.replies.length;

  const startReply = (target: AnyComment) => {
    if (!ctx.session) return;
    const isReply = target.parentId !== null;
    setReplying({
      kind: 'reply',
      rootId: comment.id,
      replyTo: isReply && target.author ? { handle: target.author.handle, name: authorName(target) } : null,
    });
  };

  const expand = async () => {
    setExpanding(true);
    const ok = await ctx.expand(comment.id);
    setExpanding(false);
    if (!ok)
      toast.error(t('social_replies_failed'), {
        action: { label: t('social_action_retry'), onClick: () => void expand() },
      });
  };

  return (
    <li className="grid gap-3">
      <CommentEntry comment={comment} onReply={startReply} focused={focusId === comment.id} />
      {comment.replies.length > 0 || hidden > 0 || replying ? (
        <div className="grid gap-4">
          {comment.replies.map((reply) => (
            <CommentEntry key={reply.id} comment={reply} onReply={startReply} focused={focusId === reply.id} />
          ))}
          {hidden > 0 ? (
            <button
              type="button"
              onClick={() => void expand()}
              aria-busy={expanding || undefined}
              className="ms-6 inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-semibold text-link md:ms-10 md:min-h-8"
            >
              <Icon icon={CornerDownRight} size={14} />
              {expanding ? t('social_loading') : t('social_comments_more_replies', { count: hidden })}
            </button>
          ) : null}
          {replying ? (
            <div className="ms-6 border-s border-border ps-4 md:ms-10">
              <CommentForm
                key={replying.kind === 'reply' ? (replying.replyTo?.handle ?? 'root') : 'x'}
                mode={replying}
                autoFocus
                onCancel={() => setReplying(null)}
                onDone={(reply) => {
                  ctx.addReply(comment.id, reply);
                  setReplying(null);
                }}
              />
            </div>
          ) : null}
        </div>
      ) : null}
    </li>
  );
}
