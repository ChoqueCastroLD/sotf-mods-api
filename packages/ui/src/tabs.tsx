/**
 * Tabs (PLAN §3.9) on Base UI `Tabs`: arrow keys move and activate, Home/End jump, the panel
 * follows. The active tab is marked by an underline indicator that glides between tabs (CSS
 * transition driven by Base UI's `--active-tab-*` variables; no Motion needed). The list
 * scrolls horizontally on narrow screens without a native scrollbar (Windows draws arrow buttons
 * under tab bars): the edge that has more tabs fades (`data-hscroll`, `global.css`), tabs snap,
 * and the active tab is kept in view.
 *
 * Public pages whose sections have their own URL use links styled with `tabLinkClasses`
 * instead (each tab is a real page, research/03 §5.4).
 */
import { Tabs as BaseTabs } from '@base-ui/react/tabs';
import { type ReactNode, useEffect, useRef } from 'react';
import { cn } from './cn.ts';

export interface TabItem<Value extends string = string> {
  value: Value;
  label: ReactNode;
  /** Small count/badge after the label (decorative duplicate of information in the panel). */
  badge?: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface TabsProps<Value extends string = string> {
  /** Accessible name of the tab list. */
  label: string;
  tabs: readonly TabItem<Value>[];
  value?: Value;
  defaultValue?: Value;
  onValueChange?: (value: Value) => void;
  /** Keep inactive panels mounted (preserves their state). */
  keepMounted?: boolean;
  className?: string;
  listClassName?: string;
}

/** Class list of one tab; also used by link-based tab bars (`aria-current="page"`). */
export const tabClasses =
  'relative inline-flex h-11 shrink-0 items-center gap-2 px-3 text-sm font-medium whitespace-nowrap text-fg-muted outline-none select-none ' +
  'rounded-t-md transition-colors duration-(--dur-fast) hover:bg-fg/5 hover:text-fg active:bg-fg/8 data-active:text-fg aria-[current=page]:text-fg ' +
  'focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus ' +
  'data-disabled:cursor-not-allowed data-disabled:opacity-50';

/** Scrolling tab bar with a hairline; scrollbar hidden, edge fades come from `[data-hscroll]` in global.css. */
export const tabListClasses =
  'relative flex overflow-x-auto overscroll-x-contain border-b border-border [scrollbar-width:none]';

export function Tabs<Value extends string = string>({
  label,
  tabs,
  value,
  defaultValue,
  onValueChange,
  keepMounted,
  className,
  listClassName,
}: TabsProps<Value>) {
  const listRef = useRef<HTMLDivElement>(null);
  // Keep the selected tab inside the scrollable list (selection by keyboard, or a long list on load).
  // biome-ignore lint/correctness/useExhaustiveDependencies: re-run whenever the selection changes
  useEffect(() => {
    const active = listRef.current?.querySelector<HTMLElement>('[role="tab"][aria-selected="true"]');
    active?.scrollIntoView({ inline: 'nearest', block: 'nearest' });
  }, [value]);
  return (
    <BaseTabs.Root
      value={value}
      defaultValue={defaultValue ?? tabs[0]?.value}
      onValueChange={(next) => onValueChange?.(next as Value)}
      className={cn('flex flex-col', className)}
    >
      <BaseTabs.List
        ref={listRef}
        data-hscroll=""
        activateOnFocus
        aria-label={label}
        className={cn(tabListClasses, listClassName)}
      >
        {tabs.map((tab) => (
          <BaseTabs.Tab key={tab.value} value={tab.value} disabled={tab.disabled} className={tabClasses}>
            {tab.label}
            {tab.badge !== undefined ? (
              <span className="rounded-full bg-fg/8 px-1.5 text-2xs text-fg-muted tabular-nums" aria-hidden="true">
                {tab.badge}
              </span>
            ) : null}
          </BaseTabs.Tab>
        ))}
        <BaseTabs.Indicator
          className={cn(
            'absolute bottom-0 left-0 h-0.5 w-(--active-tab-width) translate-x-(--active-tab-left) rounded-full bg-primary',
            'transition-[translate,width] duration-(--dur-base) ease-out',
          )}
        />
      </BaseTabs.List>
      {tabs.map((tab) => (
        <BaseTabs.Panel
          key={tab.value}
          value={tab.value}
          keepMounted={keepMounted}
          className="pt-4 outline-none focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-focus"
        >
          {tab.content}
        </BaseTabs.Panel>
      ))}
    </BaseTabs.Root>
  );
}
