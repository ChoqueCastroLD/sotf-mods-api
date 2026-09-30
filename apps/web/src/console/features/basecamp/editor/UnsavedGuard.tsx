/**
 * Keeps unsaved edits from being lost: leaving the editor (another console page, the browser's
 * back button) asks first; closing or reloading the tab gets the browser's own prompt. Switching
 * the editor's tabs is not leaving (the panels stay mounted).
 */
import { ConfirmDialog } from '@sotf/ui/dialog';
import { useBlocker } from '@tanstack/react-router';
import { useRef } from 'react';
import { bt } from '../i18n.ts';

export function UnsavedGuard({ dirty }: { dirty: boolean }) {
  const blocker = useBlocker({
    shouldBlockFn: ({ current, next }) => dirty && current.pathname !== next.pathname,
    enableBeforeUnload: () => dirty,
    withResolver: true,
  });
  const proceeding = useRef(false);
  return (
    <ConfirmDialog
      open={blocker.status === 'blocked'}
      onOpenChange={(open) => {
        if (!open && !proceeding.current && blocker.status === 'blocked') blocker.reset();
      }}
      title={bt('basecamp_unsaved_title')}
      description={bt('basecamp_unsaved_text')}
      confirmLabel={bt('basecamp_unsaved_leave')}
      cancelLabel={bt('basecamp_unsaved_stay')}
      tone="danger"
      onConfirm={() => {
        if (blocker.status !== 'blocked') return;
        proceeding.current = true;
        blocker.proceed();
        queueMicrotask(() => {
          proceeding.current = false;
        });
      }}
    />
  );
}
