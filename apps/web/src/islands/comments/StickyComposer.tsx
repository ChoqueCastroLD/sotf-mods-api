/**
 * Composer dock of the comments sheet on phones (`layout="sheet"`): pinned to the bottom of the
 * scrolling sheet, collapsed to a one-line field («Ask, share a tip…») until it is tapped, then the
 * full editor (toolbar, preview, images) opens in place. Guests and unverified accounts get their
 * note («Sign in to comment») in the same dock, so the call to action never scrolls away. The page
 * can ask it to open (`sotf:compose` event / `data-compose` on the mount point).
 */
import { Icon } from '@sotf/ui/icons';
import { PenLine, X } from 'lucide-react';
import { type ReactNode, useEffect } from 'react';
import { t } from './lib/messages.ts';

export interface StickyComposerProps {
  /** Signed in with a verified e-mail: collapsed field + editor. Otherwise `children` as is. */
  canWrite: boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  host: HTMLElement | null;
  children: ReactNode;
}

export function StickyComposer({ canWrite, open, onOpenChange, host, children }: StickyComposerProps) {
  useEffect(() => {
    if (!host || !canWrite) return;
    const request = () => onOpenChange(true);
    host.addEventListener('sotf:compose', request);
    return () => host.removeEventListener('sotf:compose', request);
  }, [host, canWrite, onOpenChange]);

  return (
    <div
      data-sheet-nodrag
      data-sheet-dock
      className="sticky bottom-0 z-10 -mx-5 border-t border-border bg-surface px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]"
    >
      {!canWrite ? (
        children
      ) : open ? (
        <div className="grid max-h-[58dvh] gap-2 overflow-y-auto overscroll-contain">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="inline-flex size-9 items-center justify-center rounded-md text-fg-muted hover:bg-fg/8 hover:text-fg"
            >
              <Icon icon={X} size={18} />
              <span className="sr-only">{t('social_action_close')}</span>
            </button>
          </div>
          {children}
        </div>
      ) : (
        <button
          type="button"
          onClick={() => onOpenChange(true)}
          className="flex min-h-12 w-full items-center gap-3 rounded-full border border-border-strong bg-sunken shadow-[inset_0_1px_2px_rgb(0_0_0/0.18)] transition-[border-color,box-shadow] duration-(--dur-fast) hover:border-fg-subtle focus-visible:border-focus focus-visible:shadow-[0_0_0_3px_var(--focus-halo)] focus-visible:outline-none px-4 text-start text-fg-muted active:bg-fg/8"
        >
          <Icon icon={PenLine} size={18} className="shrink-0 text-signal" />
          <span className="min-w-0 flex-1 truncate">{t('social_comment_placeholder')}</span>
        </button>
      )}
    </div>
  );
}
