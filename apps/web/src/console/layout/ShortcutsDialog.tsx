/**
 * «Keyboard shortcuts» dialog (`?`). Loaded on demand (`React.lazy`), so the dialog primitive is
 * not part of the shell bundle.
 */

import { Dialog } from '@sotf/ui/dialog';
import { Kbd } from '@sotf/ui/kbd';
import { Fragment } from 'react';
import { useShortcutList } from '../hooks/use-shortcuts.tsx';
import { t } from '../lib/messages.ts';
import { parseKeys } from '../lib/shortcuts.ts';

export interface ShortcutsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function Keys({ keys }: { keys: string }) {
  const parts = parseKeys(keys);
  return (
    <span className="flex items-center gap-1.5 text-xs text-fg-subtle">
      {parts.map((part, index) => (
        <Fragment key={part + String(index)}>
          {index > 0 ? <span>{t('console_shortcuts_then')}</span> : null}
          <Kbd>{part}</Kbd>
        </Fragment>
      ))}
    </span>
  );
}

export default function ShortcutsDialog({ open, onOpenChange }: ShortcutsDialogProps) {
  const { enabled, shortcuts } = useShortcutList();
  return (
    <Dialog open={open} onOpenChange={onOpenChange} title={t('console_shortcuts_title')} size="sm">
      {enabled ? null : <p className="mb-3 text-sm text-fg-muted">{t('console_shortcuts_disabled')}</p>}
      <dl className="flex flex-col divide-y divide-border">
        {shortcuts.map((shortcut) => (
          <div key={shortcut.id} className="flex items-center justify-between gap-4 py-2">
            <dt className="text-sm text-fg">{shortcut.description?.()}</dt>
            <dd>
              <Keys keys={shortcut.keys} />
            </dd>
          </div>
        ))}
      </dl>
    </Dialog>
  );
}
