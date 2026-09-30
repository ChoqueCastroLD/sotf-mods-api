/**
 * «More actions» menu button (WAI-ARIA menu button pattern): `aria-haspopup=menu`, arrow keys,
 * Home/End, Escape and Tab close it and focus returns to the button. Small on purpose (the
 * islands do not ship a popover library).
 */
import { Icon } from '@sotf/ui/icons';
import { Ellipsis } from 'lucide-react';
import { type KeyboardEvent, useEffect, useId, useRef, useState } from 'react';

export interface MenuItem {
  key: string;
  label: string;
  onSelect: () => void;
  danger?: boolean;
}

export function ActionMenu({ label, items }: { label: string; items: readonly MenuItem[] }) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement | null>(null);
  const menu = useRef<HTMLDivElement | null>(null);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    menu.current?.querySelector<HTMLElement>('[role="menuitem"]')?.focus();
    const close = (event: PointerEvent) => {
      if (!menu.current?.contains(event.target as Node) && !button.current?.contains(event.target as Node))
        setOpen(false);
    };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, [open]);

  if (items.length === 0) return null;

  const focusItem = (step: number | 'first' | 'last') => {
    const entries = Array.from(menu.current?.querySelectorAll<HTMLElement>('[role="menuitem"]') ?? []);
    if (entries.length === 0) return;
    const current = entries.indexOf(document.activeElement as HTMLElement);
    const next =
      step === 'first' ? 0 : step === 'last' ? entries.length - 1 : (current + step + entries.length) % entries.length;
    entries[next]?.focus();
  };

  const onMenuKey = (event: KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        focusItem(1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        focusItem(-1);
        break;
      case 'Home':
        event.preventDefault();
        focusItem('first');
        break;
      case 'End':
        event.preventDefault();
        focusItem('last');
        break;
      case 'Escape':
        event.preventDefault();
        setOpen(false);
        button.current?.focus();
        break;
      case 'Tab':
        setOpen(false);
        break;
      default:
    }
  };

  return (
    <div className="relative">
      <button
        ref={button}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? id : undefined}
        aria-label={label}
        title={label}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            setOpen(true);
          }
        }}
        className="inline-flex size-11 items-center justify-center rounded-md text-fg-muted hover:bg-fg/8 hover:text-fg md:size-8"
      >
        <Icon icon={Ellipsis} size={16} />
      </button>
      {open ? (
        <div
          ref={menu}
          id={id}
          role="menu"
          aria-label={label}
          onKeyDown={onMenuKey}
          className="absolute end-0 top-full z-(--z-dropdown) mt-1 min-w-48 rounded-md border border-border-strong bg-raised p-1 shadow-lg"
        >
          {items.map((item) => (
            <button
              key={item.key}
              type="button"
              role="menuitem"
              tabIndex={-1}
              onClick={() => {
                setOpen(false);
                button.current?.focus();
                item.onSelect();
              }}
              className={`flex min-h-11 w-full items-center rounded-sm px-3 text-start text-sm hover:bg-fg/8 focus-visible:bg-fg/8 md:min-h-9 ${item.danger ? 'text-danger' : 'text-fg'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
