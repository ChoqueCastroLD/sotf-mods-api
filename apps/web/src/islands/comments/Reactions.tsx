/**
 * Reactions of a comment (PLAN §7.6: 👍 ❤️ 😂 🎉 🙏 🔥, one per kind and user). Toggle buttons
 * (`aria-pressed`) for the kinds in use plus a «React» picker; optimistic, with the server's
 * `ReactionStateDTO` as the final word and a rollback (and message) when it fails. Guests see the
 * counts only.
 */

import { REACTION_GLYPHS } from '@sotf/ui/domain';
import { Icon } from '@sotf/ui/icons';
import { SmilePlus } from 'lucide-react';
import { type KeyboardEvent, useEffect, useId, useRef, useState } from 'react';
import { useComments } from './context.ts';
import { api, failureText } from './lib/api.ts';
import { formatNumber } from './lib/i18n.tsx';
import { myReactions, rememberReactions } from './lib/local.ts';
import { t } from './lib/messages.ts';
import { notify } from './lib/ui.tsx';
import type { AnyComment, ReactionKind, ReactionState } from './types.ts';

const KINDS = Object.keys(REACTION_GLYPHS) as ReactionKind[];

function reactionName(kind: ReactionKind): string {
  switch (kind) {
    case 'thumbs_up':
      return t('social_reaction_thumbs_up');
    case 'heart':
      return t('social_reaction_heart');
    case 'laugh':
      return t('social_reaction_laugh');
    case 'party':
      return t('social_reaction_party');
    case 'pray':
      return t('social_reaction_pray');
    default:
      return t('social_reaction_fire');
  }
}

export function Reactions({ comment }: { comment: AnyComment }) {
  const ctx = useComments();
  const session = ctx.session;
  const [mine, setMine] = useState<ReactionKind[]>(() =>
    session ? (myReactions(session.id, comment.id) as ReactionKind[]) : [],
  );
  const [pickerOpen, setPickerOpen] = useState(false);
  const pickerId = useId();
  const pickerButton = useRef<HTMLButtonElement | null>(null);
  const pickerRef = useRef<HTMLFieldSetElement | null>(null);
  const pending = useRef(0);

  useEffect(() => {
    if (!pickerOpen) return;
    pickerRef.current?.querySelector<HTMLButtonElement>('button')?.focus();
    const close = (event: PointerEvent) => {
      if (!pickerRef.current?.contains(event.target as Node) && event.target !== pickerButton.current)
        setPickerOpen(false);
    };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, [pickerOpen]);

  const toggle = async (kind: ReactionKind) => {
    if (!session) return;
    const adding = !mine.includes(kind);
    const previous = { mine, reactions: comment.reactions };
    const nextMine = adding ? [...mine, kind] : mine.filter((item) => item !== kind);
    setMine(nextMine);
    ctx.patch(comment.id, {
      reactions: { ...comment.reactions, [kind]: Math.max(0, comment.reactions[kind] + (adding ? 1 : -1)) },
    });
    pending.current += 1;
    const ticket = pending.current;
    const result = await api<ReactionState>(
      adding ? 'PUT' : 'DELETE',
      `/api/v2/comments/${comment.id}/reactions/${kind}`,
    );
    if (ticket !== pending.current) return; // A newer toggle owns the state.
    if (result.ok) {
      const serverMine = result.data.mine as ReactionKind[];
      setMine(serverMine);
      rememberReactions(session.id, comment.id, serverMine);
      ctx.patch(comment.id, { reactions: result.data.reactions });
      ctx.announce(
        adding
          ? t('social_reaction_added', { reaction: reactionName(kind) })
          : t('social_reaction_removed', { reaction: reactionName(kind) }),
      );
    } else {
      setMine(previous.mine);
      ctx.patch(comment.id, { reactions: previous.reactions });
      notify(failureText(result));
    }
  };

  const used = KINDS.filter((kind) => comment.reactions[kind] > 0 || mine.includes(kind));

  const onPickerKey = (event: KeyboardEvent<HTMLFieldSetElement>) => {
    const buttons = Array.from(pickerRef.current?.querySelectorAll<HTMLButtonElement>('button') ?? []);
    const index = buttons.indexOf(document.activeElement as HTMLButtonElement);
    if (event.key === 'Escape') {
      event.preventDefault();
      setPickerOpen(false);
      pickerButton.current?.focus();
    } else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      buttons[(index + 1) % buttons.length]?.focus();
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      buttons[(index - 1 + buttons.length) % buttons.length]?.focus();
    }
  };

  if (!session) {
    if (used.length === 0) return null;
    return (
      <ul className="flex flex-wrap gap-1.5" aria-label={t('social_reactions')}>
        {used.map((kind) => (
          <li
            key={kind}
            className="inline-flex h-7 items-center gap-1 rounded-full border border-border px-2 text-xs tabular-nums"
          >
            <span aria-hidden="true">{REACTION_GLYPHS[kind]}</span>
            <span className="sr-only">{reactionName(kind)}:</span>
            {formatNumber(comment.reactions[kind])}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <fieldset
      className="relative m-0 flex min-w-0 flex-wrap items-center gap-1.5 border-0 p-0"
      aria-label={t('social_reactions')}
    >
      {used.map((kind) => {
        const pressed = mine.includes(kind);
        return (
          <button
            key={kind}
            type="button"
            aria-pressed={pressed}
            aria-label={t('social_reaction_toggle', { reaction: reactionName(kind), count: comment.reactions[kind] })}
            onClick={() => void toggle(kind)}
            className="inline-flex h-11 items-center gap-1 rounded-full border border-border px-2.5 text-xs tabular-nums hover:border-border-strong aria-pressed:border-primary aria-pressed:bg-primary-soft md:h-7"
          >
            <span aria-hidden="true">{REACTION_GLYPHS[kind]}</span>
            <span aria-hidden="true">{formatNumber(comment.reactions[kind])}</span>
          </button>
        );
      })}
      <button
        ref={pickerButton}
        type="button"
        aria-expanded={pickerOpen}
        aria-controls={pickerOpen ? pickerId : undefined}
        aria-label={t('social_reaction_add')}
        title={t('social_reaction_add')}
        onClick={() => setPickerOpen((open) => !open)}
        className="inline-flex size-11 items-center justify-center rounded-full border border-dashed border-border text-fg-muted hover:border-border-strong hover:text-fg md:size-7"
      >
        <Icon icon={SmilePlus} size={14} />
      </button>
      {pickerOpen ? (
        <fieldset
          ref={pickerRef}
          id={pickerId}
          aria-label={t('social_reaction_add')}
          onKeyDown={onPickerKey}
          className="absolute bottom-full start-0 z-(--z-dropdown) m-0 mb-1 flex min-w-0 gap-1 rounded-full border border-border-strong bg-raised p-1 shadow-lg"
        >
          {KINDS.map((kind) => (
            <button
              key={kind}
              type="button"
              aria-pressed={mine.includes(kind)}
              aria-label={reactionName(kind)}
              title={reactionName(kind)}
              onClick={() => {
                setPickerOpen(false);
                pickerButton.current?.focus();
                void toggle(kind);
              }}
              className="inline-flex size-11 items-center justify-center rounded-full text-lg hover:bg-fg/8 aria-pressed:bg-primary-soft md:size-9"
            >
              <span aria-hidden="true">{REACTION_GLYPHS[kind]}</span>
            </button>
          ))}
        </fieldset>
      ) : null}
    </fieldset>
  );
}
