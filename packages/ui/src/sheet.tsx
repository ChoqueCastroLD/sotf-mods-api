/**
 * Sheets (mobile native feel): the two bottom-anchored surfaces of a phone app, on Base UI
 * `Drawer` (focus trap, inert page, scroll lock, Escape, focus returned to the trigger).
 *
 * - `BottomSheet`: a titled panel that slides up from the bottom edge. Drag the grip, the header
 *   or the content (at its top) down to dismiss; with `snapPoints` it rests at several heights
 *   (`[0.5, 1]` = half and full height; the content scrolls only when fully expanded). Safe-area
 *   aware (home indicator, landscape notch). On tablets and desktops it stays a docked panel
 *   (≤ 34 rem, centred) instead of stretching across the screen.
 * - `ActionSheet`: a list of actions in a `BottomSheet`, iOS style: grouped rows (44 px+), a
 *   separate Cancel, destructive rows in the danger colour, each row closes the sheet. With
 *   `menuOnDesktop` (and a `trigger`) it renders the same actions as a `Menu` from `md` up, so one
 *   definition serves phone and desktop.
 *
 * The server-rendered equivalent for Astro pages is `components/layout/Sheet.astro` in `apps/web`.
 * `Dialog` already becomes a bottom sheet below `md`; use `BottomSheet` when a sheet should be a
 * sheet at every width, needs snap points, or has no dialog semantics to explain.
 */
import { Drawer } from '@base-ui/react/drawer';
import { X } from 'lucide-react';
import { type ReactElement, type ReactNode, useCallback } from 'react';
import { Button } from './button.tsx';
import { cn } from './cn.ts';
import { Icon } from './icons.tsx';
import { useUiTranslate } from './labels.ts';
import { Menu, type MenuEntry } from './menu.tsx';
import { backdropClasses } from './surfaces.ts';
import { BELOW_MD_QUERY, useMediaQuery } from './use-media-query.ts';

/** `0–1` = fraction of the viewport height, `> 1` = px, or a `'px'`/`'rem'` string. */
export type SheetSnapPoint = number | string;

export interface BottomSheetProps {
  /** Accessible name of the sheet and its visible heading. */
  title: ReactNode;
  /** Keep the heading for assistive technology only. */
  hideTitle?: boolean;
  description?: ReactNode;
  children?: ReactNode;
  /** Actions row, stacked full-width (primary first). */
  footer?: ReactNode;
  /** Element that opens the sheet (a `Button`); omit when controlling `open`. */
  trigger?: ReactElement;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Resting heights, ascending, e.g. `[0.5, 1]`. Omit for a sheet as tall as its content. */
  snapPoints?: SheetSnapPoint[];
  snapPoint?: SheetSnapPoint | null;
  defaultSnapPoint?: SheetSnapPoint | null;
  onSnapPointChange?: (snapPoint: SheetSnapPoint | null) => void;
  /** Hide the × button (the footer already has a clear exit). */
  hideClose?: boolean;
  /** Keep the sheet open on outside taps (unsaved input). Escape still closes it. */
  disablePointerDismissal?: boolean;
  className?: string;
}

const MAX_HEIGHT = 'max-h-[calc(100dvh-var(--safe-top,0px)-0.75rem)]';

export function BottomSheet({
  title,
  hideTitle = false,
  description,
  children,
  footer,
  trigger,
  open,
  defaultOpen,
  onOpenChange,
  snapPoints,
  snapPoint,
  defaultSnapPoint,
  onSnapPointChange,
  hideClose = false,
  disablePointerDismissal,
  className,
}: BottomSheetProps) {
  const t = useUiTranslate();
  const snaps = snapPoints !== undefined && snapPoints.length > 0;
  const handleSnap = useCallback(
    (next: SheetSnapPoint | null) => {
      onSnapPointChange?.(next);
    },
    [onSnapPointChange],
  );

  return (
    <Drawer.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={(next) => onOpenChange?.(next)}
      disablePointerDismissal={disablePointerDismissal}
      snapPoints={snaps ? snapPoints : undefined}
      snapPoint={snaps ? snapPoint : undefined}
      defaultSnapPoint={snaps ? (defaultSnapPoint ?? snapPoints?.[0]) : undefined}
      onSnapPointChange={snaps ? (next) => handleSnap(next) : undefined}
    >
      {trigger ? <Drawer.Trigger render={trigger} /> : null}
      <Drawer.Portal>
        <Drawer.Backdrop
          className={cn(backdropClasses, 'opacity-[calc(1-var(--drawer-swipe-progress,0))] data-swiping:duration-0')}
        />
        <Drawer.Viewport className="fixed inset-0 z-(--z-modal) flex items-end justify-center">
          <Drawer.Popup
            className={cn(
              'group/sheet relative flex w-full max-w-[34rem] flex-col rounded-t-xl border border-b-0 border-border bg-overlay text-fg shadow-lg inset-shadow-highlight outline-none',
              'ps-[max(var(--safe-left,0px),0px)] pe-[max(var(--safe-right,0px),0px)]',
              MAX_HEIGHT,
              snaps && 'h-(--drawer-height,auto)',
              'translate-y-[calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y,0px))]',
              'transition-transform duration-(--dur-slow) ease-out',
              'data-starting-style:translate-y-full data-ending-style:translate-y-full data-ending-style:duration-(--dur-base) data-ending-style:ease-in',
              'data-swiping:select-none data-swiping:duration-0',
              className,
            )}
          >
            <div className="flex shrink-0 justify-center pt-2.5 pb-1" aria-hidden="true">
              <span className="h-1 w-10 rounded-full bg-border-strong/70" />
            </div>
            <header className="flex shrink-0 flex-col gap-1 px-5 pt-1 pb-2">
              <div className="flex items-center gap-3">
                <Drawer.Title className={cn('font-display-caps text-xl tracking-wide text-fg', hideTitle && 'sr-only')}>
                  {title}
                </Drawer.Title>
                {hideClose ? null : (
                  <Drawer.Close
                    render={<Button variant="icon" size="md" aria-label={t('ui_close')} className="ms-auto -me-2" />}
                  >
                    <Icon icon={X} size={20} />
                  </Drawer.Close>
                )}
              </div>
              {description ? (
                <Drawer.Description className="text-sm text-fg-muted">{description}</Drawer.Description>
              ) : null}
            </header>
            <Drawer.Content
              className={cn(
                'flex min-h-0 flex-1 flex-col gap-4 overscroll-contain px-5 pt-1 pb-[max(1.25rem,var(--safe-bottom,0px))]',
                snaps ? 'overflow-hidden group-data-expanded/sheet:overflow-y-auto' : 'overflow-y-auto',
              )}
            >
              {children}
              {footer ? <footer className="flex flex-col-reverse gap-2 pt-2 *:w-full">{footer}</footer> : null}
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export interface ActionSheetItem {
  label: ReactNode;
  /** Decorative leading icon. */
  icon?: ReactNode;
  /** Second line under the label. */
  description?: ReactNode;
  /** Runs when the row is chosen; the sheet closes afterwards. */
  onSelect?: () => void;
  /** Render the row as a link to this URL (still closes the sheet). */
  href?: string;
  /** Destructive action (danger colour; keep it last in its group). */
  danger?: boolean;
  disabled?: boolean;
}

export interface ActionSheetProps {
  title: ReactNode;
  /** Keep the heading for assistive technology only (the usual choice). Default `true`. */
  hideTitle?: boolean;
  description?: ReactNode;
  /** One group, or several (rendered as separate rounded blocks). */
  items: readonly ActionSheetItem[] | ReadonlyArray<readonly ActionSheetItem[]>;
  trigger?: ReactElement;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Label of the separate dismiss row. Default: the localized «Cancel». */
  cancelLabel?: ReactNode;
  /** From `md` up, render the same actions as a `Menu` anchored to the `trigger`. */
  menuOnDesktop?: boolean;
}

function isGrouped(items: ActionSheetProps['items']): items is ReadonlyArray<readonly ActionSheetItem[]> {
  return items.length > 0 && Array.isArray(items[0]);
}

function toGroups(items: ActionSheetProps['items']): ReadonlyArray<readonly ActionSheetItem[]> {
  return isGrouped(items) ? items : [items as readonly ActionSheetItem[]];
}

const rowClasses =
  'press flex min-h-14 w-full items-center gap-3.5 px-4 text-start text-base outline-none select-none ' +
  'focus-visible:bg-fg/8 aria-disabled:opacity-50 data-disabled:opacity-50';

function Row({ item }: { item: ActionSheetItem }) {
  const tone = item.danger ? 'text-danger' : 'text-fg';
  const content = (
    <>
      {item.icon ? (
        <span className={cn('flex shrink-0', item.danger ? 'text-danger' : 'text-fg-muted')} aria-hidden="true">
          {item.icon}
        </span>
      ) : null}
      <span className="grid min-w-0 flex-1">
        <span className="truncate">{item.label}</span>
        {item.description ? <span className="truncate text-sm text-fg-muted">{item.description}</span> : null}
      </span>
    </>
  );
  if (item.href !== undefined) {
    return (
      <Drawer.Close
        nativeButton={false}
        role="link"
        render={<a href={item.href} className={cn(rowClasses, tone)} aria-disabled={item.disabled || undefined} />}
        onClick={() => item.onSelect?.()}
        disabled={item.disabled}
      >
        {content}
      </Drawer.Close>
    );
  }
  return (
    <Drawer.Close
      render={<button type="button" className={cn(rowClasses, tone)} />}
      onClick={() => item.onSelect?.()}
      disabled={item.disabled}
    >
      {content}
    </Drawer.Close>
  );
}

function toMenuEntries(groups: ReadonlyArray<readonly ActionSheetItem[]>): MenuEntry[] {
  const entries: MenuEntry[] = [];
  groups.forEach((group, index) => {
    if (index > 0) entries.push({ type: 'separator' });
    for (const item of group) {
      if (item.href !== undefined) {
        entries.push({ type: 'link', href: item.href, label: item.label, icon: item.icon, disabled: item.disabled });
      } else {
        entries.push({
          label: item.label,
          icon: item.icon,
          disabled: item.disabled,
          danger: item.danger,
          onSelect: () => item.onSelect?.(),
        });
      }
    }
  });
  return entries;
}

export function ActionSheet({
  title,
  hideTitle = true,
  description,
  items,
  trigger,
  open,
  defaultOpen,
  onOpenChange,
  cancelLabel,
  menuOnDesktop = false,
}: ActionSheetProps) {
  const t = useUiTranslate();
  const belowMd = useMediaQuery(BELOW_MD_QUERY);
  const groups = toGroups(items);

  if (menuOnDesktop && trigger && !belowMd) {
    return <Menu trigger={trigger} items={toMenuEntries(groups)} open={open} onOpenChange={onOpenChange} align="end" />;
  }

  return (
    <BottomSheet
      title={title}
      hideTitle={hideTitle}
      description={description}
      trigger={trigger}
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      hideClose
    >
      <div className="grid gap-3">
        {groups.map((group, groupIndex) => (
          <ul
            // biome-ignore lint/suspicious/noArrayIndexKey: groups are positional and static per render
            key={groupIndex}
            className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-surface"
          >
            {group.map((item, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: rows are positional and static per render
              <li key={index}>
                <Row item={item} />
              </li>
            ))}
          </ul>
        ))}
        <Drawer.Close
          render={
            <button
              type="button"
              className={cn(
                rowClasses,
                'justify-center rounded-lg border border-border-strong bg-surface font-semibold text-fg',
              )}
            />
          }
        >
          {cancelLabel ?? t('ui_cancel')}
        </Drawer.Close>
      </div>
    </BottomSheet>
  );
}
