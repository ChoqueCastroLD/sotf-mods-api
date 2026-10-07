/**
 * New comment, reply or edit (PLAN §7.6): the markdown-lite editor, «This is a bug report» with
 * its version (new top-level comments), up to 2 images, Turnstile when the API asks for it
 * (accounts younger than 24 h), and the states of PLAN §1.2 (sending, field errors, network).
 * Drafts survive reloads (`sessionStorage`, per mod and parent).
 */
import { Button } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { ImagePlus, X } from 'lucide-react';
import { type FormEvent, useEffect, useId, useRef, useState } from 'react';
import { pageEntity, track } from '../../scripts/beacon.ts';
import { useTurnstile } from '../auth/turnstile.ts';
import { Composer } from './Composer.tsx';
import { useComments } from './context.ts';
import { api } from './lib/api.ts';
import { pageLang } from './lib/i18n.tsx';
import { t } from './lib/messages.ts';
import { notify, notifyFailure } from './lib/ui.tsx';
import { COMMENT_IMAGE_TYPES, uploadCommentImage } from './lib/upload.ts';
import type { Comment, VersionOption } from './types.ts';

/** `COMMENT_RULES` of @sotf/contracts (literal: the island ships no Zod). */
export const COMMENT_BODY_MAX = 2000;
export const COMMENT_IMAGES_MAX = 2;

export type CommentFormMode =
  | { kind: 'new' }
  | { kind: 'reply'; rootId: number; replyTo: { handle: string; name: string } | null }
  | { kind: 'edit'; comment: { id: number; initialMd: string } };

export interface CommentFormProps {
  mode: CommentFormMode;
  onDone?: (comment: Comment) => void;
  onCancel?: () => void;
  autoFocus?: boolean;
}

interface Attachment {
  key: string;
  name: string;
  preview: string;
  uploadId: string | null;
  state: 'uploading' | 'ready' | 'failed';
}

function draftKey(modId: number, mode: CommentFormMode): string | null {
  if (mode.kind === 'edit') return null;
  return `sotf:comment-draft:${modId}:${mode.kind === 'reply' ? mode.rootId : 'root'}`;
}

function readDraft(key: string | null): string {
  if (!key) return '';
  try {
    return sessionStorage.getItem(key) ?? '';
  } catch {
    return '';
  }
}

function writeDraft(key: string | null, value: string): void {
  if (!key) return;
  try {
    if (value.trim()) sessionStorage.setItem(key, value);
    else sessionStorage.removeItem(key);
  } catch {
    // Private mode: drafts are not kept.
  }
}

export function CommentForm({ mode, onDone, onCancel, autoFocus = false }: CommentFormProps) {
  const ctx = useComments();
  const id = useId();
  const key = draftKey(ctx.modId, mode);
  const initial =
    mode.kind === 'edit'
      ? mode.comment.initialMd
      : readDraft(key) || (mode.kind === 'reply' && mode.replyTo ? `@${mode.replyTo.handle} ` : '');
  const [body, setBody] = useState(initial);
  const [isBug, setIsBug] = useState(false);
  const [versionId, setVersionId] = useState<number | null>(null);
  const [versions, setVersions] = useState<VersionOption[] | null>(null);
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [busy, setBusy] = useState(false);
  const [fieldError, setFieldError] = useState<string | null>(null);
  const fileInput = useRef<HTMLInputElement | null>(null);
  const uploads = useRef(new AbortController());
  const turnstile = useTurnstile({
    siteKey: ctx.turnstileSiteKey,
    action: 'comment',
    language: pageLang(),
  });

  useEffect(() => writeDraft(key, body), [key, body]);
  const attachmentsRef = useRef(attachments);
  attachmentsRef.current = attachments;
  useEffect(() => {
    const controller = uploads.current;
    return () => {
      // Unmount: stop pending uploads and release the local previews.
      controller.abort();
      for (const attachment of attachmentsRef.current) URL.revokeObjectURL(attachment.preview);
    };
  }, []);

  useEffect(() => {
    if (!isBug || versions) return;
    let cancelled = false;
    void ctx.loadVersions().then((list) => {
      if (cancelled) return;
      setVersions(list);
      setVersionId((current) => current ?? list[0]?.id ?? null);
    });
    return () => {
      cancelled = true;
    };
  }, [isBug, versions, ctx]);

  const addFiles = (files: FileList | null) => {
    if (!files) return;
    const room = COMMENT_IMAGES_MAX - attachments.length;
    for (const file of Array.from(files).slice(0, Math.max(0, room))) {
      const entry: Attachment = {
        key: `${file.name}-${file.size}-${Date.now()}-${Math.random()}`,
        name: file.name,
        preview: URL.createObjectURL(file),
        uploadId: null,
        state: 'uploading',
      };
      setAttachments((list) => [...list, entry]);
      void uploadCommentImage(file, uploads.current.signal).then((outcome) => {
        setAttachments((list) =>
          list.map((item) =>
            item.key === entry.key
              ? { ...item, state: outcome.ok ? 'ready' : 'failed', uploadId: outcome.ok ? outcome.uploadId : null }
              : item,
          ),
        );
        if (!outcome.ok) {
          ctx.announce(
            outcome.reason === 'type'
              ? t('social_image_type')
              : outcome.reason === 'size'
                ? t('social_image_size')
                : t('social_image_failed'),
          );
        }
      });
    }
    if (files.length > room) ctx.announce(t('social_image_limit', { max: COMMENT_IMAGES_MAX }));
  };

  const removeAttachment = (entryKey: string) => {
    setAttachments((list) => {
      const target = list.find((item) => item.key === entryKey);
      if (target) URL.revokeObjectURL(target.preview);
      return list.filter((item) => item.key !== entryKey);
    });
  };

  const send = async (turnstileToken?: string): Promise<void> => {
    const text = body.normalize('NFC').trim();
    if (!text) {
      setFieldError(t('social_comment_empty'));
      return;
    }
    if (text.length > COMMENT_BODY_MAX) {
      setFieldError(t('social_comment_too_long', { max: COMMENT_BODY_MAX }));
      return;
    }
    if (attachments.some((item) => item.state === 'uploading')) {
      setFieldError(t('social_image_wait'));
      return;
    }
    setFieldError(null);
    setBusy(true);
    const result =
      mode.kind === 'edit'
        ? await api<Comment>('PATCH', `/api/v2/comments/${mode.comment.id}`, { bodyMd: text })
        : await api<Comment>('POST', `/api/v2/mods/${ctx.modId}/comments`, {
            bodyMd: text,
            ...(mode.kind === 'reply' ? { parentId: mode.rootId } : {}),
            ...(mode.kind === 'new' && isBug
              ? { isBugReport: true, ...(versionId ? { modVersionId: versionId } : {}) }
              : {}),
            imageUploadIds: attachments.flatMap((item) => (item.uploadId ? [item.uploadId] : [])),
            ...(turnstileToken ? { turnstileToken } : {}),
          });
    if (!result.ok && result.kind === 'problem' && result.problem.code === 'TURNSTILE_REQUIRED' && !turnstileToken) {
      try {
        const token = await turnstile.getToken();
        return send(token);
      } catch {
        setBusy(false);
        notifyFailure(result, () => void send());
        return;
      }
    }
    setBusy(false);
    if (turnstileToken) turnstile.reset();
    if (!result.ok) {
      const issue =
        result.kind === 'problem' ? result.problem.errors.find((item) => item.path.startsWith('bodyMd')) : undefined;
      if (issue) setFieldError(t('social_comment_invalid'));
      else notifyFailure(result, () => void send());
      return;
    }
    writeDraft(key, '');
    setBody('');
    setIsBug(false);
    for (const attachment of attachments) URL.revokeObjectURL(attachment.preview);
    setAttachments([]);
    if (mode.kind !== 'edit') {
      track('comment_submit', {
        ...pageEntity(),
        props: { reply: mode.kind === 'reply', bug: mode.kind === 'new' && isBug, images: attachments.length },
      });
    }
    const confirmation =
      mode.kind === 'edit'
        ? t('social_comment_edited')
        : result.data.status === 'pending'
          ? t('social_comment_held')
          : t('social_comment_posted');
    ctx.announce(confirmation);
    notify(confirmation);
    onDone?.(result.data);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!busy) void send();
  };

  const errorId = `${id}-error`;
  const label =
    mode.kind === 'edit'
      ? t('social_comment_edit_label')
      : mode.kind === 'reply'
        ? mode.replyTo
          ? t('social_comment_reply_to', { handle: mode.replyTo.handle })
          : t('social_comment_reply_label')
        : t('social_comment_label');

  return (
    <form className="grid gap-3" onSubmit={onSubmit} noValidate aria-busy={busy || undefined}>
      <Composer
        value={body}
        onChange={(value) => {
          setBody(value);
          if (fieldError) setFieldError(null);
        }}
        maxLength={COMMENT_BODY_MAX}
        label={label}
        labelHidden={mode.kind === 'new'}
        placeholder={mode.kind === 'new' ? t('social_comment_placeholder') : undefined}
        participants={ctx.participants}
        autoFocus={autoFocus}
        disabled={busy}
        onSubmitShortcut={() => {
          if (!busy) void send();
        }}
        invalid={fieldError !== null}
        describedBy={fieldError ? errorId : undefined}
        minRows={mode.kind === 'new' ? 4 : 3}
      />
      {fieldError ? (
        <p id={errorId} className="text-sm text-danger" role="alert">
          {fieldError}
        </p>
      ) : null}

      {mode.kind === 'new' ? (
        <div className="grid gap-2 rounded-md border border-border p-3">
          <label className="flex min-h-11 cursor-pointer items-center gap-3 md:min-h-8">
            <input
              type="checkbox"
              checked={isBug}
              onChange={(event) => setIsBug(event.target.checked)}
              className="size-4 accent-primary"
            />
            <span className="text-sm">{t('social_comment_bug_label')}</span>
          </label>
          {isBug ? (
            <div className="grid gap-1 ps-7">
              <label htmlFor={`${id}-version`} className="text-xs font-semibold text-fg-muted">
                {t('social_comment_bug_version')}
              </label>
              <select
                id={`${id}-version`}
                value={versionId ?? ''}
                disabled={!versions}
                onChange={(event) => setVersionId(event.target.value ? Number(event.target.value) : null)}
                className="min-h-11 max-w-60 rounded-md border border-border-strong bg-sunken shadow-[inset_0_1px_2px_rgb(0_0_0/0.18)] transition-[border-color,box-shadow] duration-(--dur-fast) hover:border-fg-subtle focus-visible:border-focus focus-visible:shadow-[0_0_0_3px_var(--focus-halo)] focus-visible:outline-none px-2 text-sm md:min-h-9"
              >
                {!versions ? <option value="">{t('social_loading')}</option> : null}
                {versions?.map((version) => (
                  <option key={version.id} value={version.id}>
                    {version.version}
                  </option>
                ))}
              </select>
              <p className="text-xs text-fg-muted">{t('social_comment_bug_hint')}</p>
            </div>
          ) : null}
        </div>
      ) : null}

      {mode.kind !== 'edit' ? (
        <div className="flex flex-wrap items-center gap-2">
          {attachments.map((item) => (
            <figure key={item.key} className="relative size-20 overflow-hidden rounded-md border border-border">
              <img src={item.preview} alt={item.name} className="size-full object-cover" />
              {item.state !== 'ready' ? (
                <figcaption className="absolute inset-0 flex items-center justify-center bg-overlay text-2xs font-semibold text-white">
                  {item.state === 'uploading' ? t('social_image_uploading') : t('social_image_failed_short')}
                </figcaption>
              ) : null}
              <button
                type="button"
                onClick={() => removeAttachment(item.key)}
                aria-label={t('social_image_remove', { name: item.name })}
                className="absolute end-1 top-1 inline-flex size-6 items-center justify-center rounded-full bg-raised text-fg shadow"
              >
                <Icon icon={X} size={14} />
              </button>
            </figure>
          ))}
          {attachments.length < COMMENT_IMAGES_MAX ? (
            <>
              <input
                ref={fileInput}
                id={`${id}-files`}
                type="file"
                accept={COMMENT_IMAGE_TYPES.join(',')}
                multiple
                className="sr-only"
                tabIndex={-1}
                onChange={(event) => {
                  addFiles(event.target.files);
                  event.target.value = '';
                }}
              />
              <Button
                variant="ghost"
                size="sm"
                icon={<Icon icon={ImagePlus} size={16} />}
                onClick={() => fileInput.current?.click()}
                disabled={busy}
              >
                {t('social_image_add', { count: attachments.length, max: COMMENT_IMAGES_MAX })}
              </Button>
            </>
          ) : null}
        </div>
      ) : null}

      <div ref={turnstile.containerRef} />

      <div className="flex flex-wrap items-center justify-end gap-2">
        {onCancel ? (
          <Button variant="ghost" onClick={onCancel} disabled={busy}>
            {t('social_action_cancel')}
          </Button>
        ) : null}
        <Button type="submit" loading={busy}>
          {mode.kind === 'edit'
            ? t('social_action_save')
            : mode.kind === 'reply'
              ? t('social_comment_reply_submit')
              : t('social_comment_submit')}
        </Button>
      </div>
    </form>
  );
}
