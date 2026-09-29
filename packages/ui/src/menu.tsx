/**
 * Menu (PLAN §3.9): an actions menu (menu button pattern) on Base UI `Menu`. Arrow keys,
 * Home/End, typeahead, Enter/Space to activate, Escape to close and focus back to the trigger.
 *
 * Entries are data, so every menu in the site looks and behaves the same:
 * actions, links, separators, labelled groups, checkboxes and radio groups (sort order).
 */
import { Menu as BaseMenu } from '@base-ui/react/menu';
import { Check } from 'lucide-react';
import type { ReactElement, ReactNode } from 'react';
import { cn } from './cn.ts';
import { Icon } from './icons.tsx';
import { Kbd } from './kbd.tsx';
import { dropdownPositionerClasses, listItemClasses, listPanelClasses } from './surfaces.ts';

interface ItemBase {
  label: ReactNode;
  /** Decorative leading icon. */
  icon?: ReactNode;
  /** Keyboard shortcut hint («⌘K»). */
  shortcut?: string;
  disabled?: boolean;
}

export interface MenuActionItem extends ItemBase {
  type?: 'item';
  onSelect: () => void;
  /** Destructive action (danger colour; keep it last). */
  danger?: boolean;
  /** Keep the menu open after selecting. */
  keepOpen?: boolean;
}

export interface MenuLinkEntry extends ItemBase {
  type: 'link';
  href: string;
}

export interface MenuCheckboxEntry extends ItemBase {
  type: 'checkbox';
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export interface MenuRadioEntry<Value extends string = string> {
  type: 'radio';
  label?: ReactNode;
  value: Value;
  onValueChange: (value: Value) => void;
  options: ReadonlyArray<{ value: Value; label: ReactNode; disabled?: boolean }>;
}

export interface MenuSeparatorEntry {
  type: 'separator';
}

export interface MenuGroupEntry {
  type: 'group';
  label: ReactNode;
  items: readonly MenuEntry[];
}

export type MenuEntry =
  | MenuActionItem
  | MenuLinkEntry
  | MenuCheckboxEntry
  | MenuRadioEntry
  | MenuSeparatorEntry
  | MenuGroupEntry;

export interface MenuProps {
  /** The menu button (a `Button`; give icon buttons an `aria-label`). */
  trigger: ReactElement;
  items: readonly MenuEntry[];
  side?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function ItemContent({ icon, label, shortcut }: ItemBase) {
  return (
    <>
      {icon ? (
        <span className="flex text-fg-subtle" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      <span className="min-w-0 flex-1 truncate">{label}</span>
      {shortcut ? <Kbd className="ms-4">{shortcut}</Kbd> : null}
    </>
  );
}

const groupLabelClasses = 'px-2.5 pt-2 pb-1 readout';

function renderEntry(entry: MenuEntry, key: string): ReactNode {
  switch (entry.type) {
    case 'separator':
      return <BaseMenu.Separator key={key} className="my-1 h-px bg-border" />;
    case 'group':
      return (
        <BaseMenu.Group key={key}>
          <BaseMenu.GroupLabel className={groupLabelClasses}>{entry.label}</BaseMenu.GroupLabel>
          {entry.items.map((child, index) => renderEntry(child, `${key}.${index}`))}
        </BaseMenu.Group>
      );
    case 'link':
      return (
        <BaseMenu.LinkItem key={key} href={entry.href} className={listItemClasses} aria-disabled={entry.disabled}>
          <ItemContent {...entry} />
        </BaseMenu.LinkItem>
      );
    case 'checkbox':
      return (
        <BaseMenu.CheckboxItem
          key={key}
          checked={entry.checked}
          onCheckedChange={(next) => entry.onCheckedChange(next)}
          disabled={entry.disabled}
          closeOnClick={false}
          className={cn(listItemClasses, 'ps-8')}
        >
          <BaseMenu.CheckboxItemIndicator className="absolute start-2 flex text-primary">
            <Icon icon={Check} size={16} />
          </BaseMenu.CheckboxItemIndicator>
          <ItemContent {...entry} />
        </BaseMenu.CheckboxItem>
      );
    case 'radio':
      return (
        <BaseMenu.Group key={key}>
          {entry.label ? <BaseMenu.GroupLabel className={groupLabelClasses}>{entry.label}</BaseMenu.GroupLabel> : null}
          <BaseMenu.RadioGroup value={entry.value} onValueChange={(next) => entry.onValueChange(next)}>
            {entry.options.map((option) => (
              <BaseMenu.RadioItem
                key={option.value}
                value={option.value}
                disabled={option.disabled}
                className={cn(listItemClasses, 'ps-8')}
              >
                <BaseMenu.RadioItemIndicator className="absolute start-2 flex text-primary">
                  <Icon icon={Check} size={16} />
                </BaseMenu.RadioItemIndicator>
                <span className="min-w-0 flex-1 truncate">{option.label}</span>
              </BaseMenu.RadioItem>
            ))}
          </BaseMenu.RadioGroup>
        </BaseMenu.Group>
      );
    default:
      return (
        <BaseMenu.Item
          key={key}
          onClick={() => entry.onSelect()}
          disabled={entry.disabled}
          closeOnClick={!entry.keepOpen}
          className={cn(listItemClasses, entry.danger && 'text-danger data-highlighted:bg-danger/12')}
        >
          <ItemContent {...entry} />
        </BaseMenu.Item>
      );
  }
}

export function Menu({ trigger, items, side = 'bottom', align = 'start', open, onOpenChange, className }: MenuProps) {
  return (
    <BaseMenu.Root open={open} onOpenChange={onOpenChange ? (next) => onOpenChange(next) : undefined}>
      <BaseMenu.Trigger render={trigger} />
      <BaseMenu.Portal>
        <BaseMenu.Positioner
          side={side}
          align={align}
          sideOffset={6}
          collisionPadding={8}
          className={dropdownPositionerClasses}
        >
          <BaseMenu.Popup className={cn(listPanelClasses, 'min-w-48', className)}>
            {items.map((entry, index) => renderEntry(entry, String(index)))}
          </BaseMenu.Popup>
        </BaseMenu.Positioner>
      </BaseMenu.Portal>
    </BaseMenu.Root>
  );
}
