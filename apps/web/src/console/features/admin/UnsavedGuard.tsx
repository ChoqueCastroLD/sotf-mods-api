/**
 * Keeps unsaved edits from being lost: leaving the screen for another page (or the browser's back
 * button) asks first with a dialog; closing or reloading the tab gets the browser's own prompt.
 * Changing the query string of the same page (tabs, filters) is not leaving.
 */
import { m } from '@sotf/i18n/messages';
import { ConfirmDialog } from '@sotf/ui/dialog';
import { useBlocker } from '@tanstack/react-router';
import { useRef } from 'react';

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
      title={m.admin_unsaved_title()}
      description={m.admin_unsaved_confirm()}
      confirmLabel={m.admin_unsaved_leave()}
      cancelLabel={m.admin_unsaved_stay()}
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
