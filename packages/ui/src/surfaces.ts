/**
 * Shared class lists of floating surfaces (menus, listboxes, popovers, tooltips, dialogs).
 * Motion (PLAN §3.7): only transform + opacity, feedback ≤ 140 ms, exits 30 % faster.
 */

/** Positioner of dropdown-like popups (Menu, Select, Combobox). Above dialogs: they open inside them too. */
export const dropdownPositionerClasses = 'z-(--z-popover) outline-none';

/** Positioner of popovers and tooltips. */
export const popoverPositionerClasses = 'z-(--z-popover) outline-none';

/** Floating panel: overlay surface, decorative border, elevation, scale+fade from the anchor. */
export const floatingPanelClasses =
  'rounded-lg border border-border-strong/60 bg-overlay text-fg shadow-lg inset-shadow-highlight outline-none ' +
  'origin-(--transform-origin) transition-[scale,opacity] duration-(--dur-fast) ease-out ' +
  'data-starting-style:scale-97 data-starting-style:opacity-0 ' +
  'data-ending-style:scale-97 data-ending-style:opacity-0 data-ending-style:duration-(--dur-instant) ' +
  'data-instant:transition-none';

/** Listbox/menu panel (floating panel + scroll + padding). */
export const listPanelClasses = `${floatingPanelClasses} max-h-(--available-height) min-w-(--anchor-width) overflow-y-auto overscroll-contain p-1`;

/** One option/menu item: ≥ 32 px target, highlighted by keyboard or pointer. */
export const listItemClasses =
  'relative flex min-h-8 cursor-default items-center gap-2 rounded-sm px-2.5 py-1.5 text-sm text-fg outline-none select-none ' +
  'data-highlighted:bg-fg/8 data-disabled:cursor-not-allowed data-disabled:opacity-50';

/** Modal backdrop (dialogs and sheets). */
export const backdropClasses =
  'fixed inset-0 z-(--z-overlay) min-h-dvh bg-night-975/70 transition-opacity duration-(--dur-base) ease-out ' +
  'data-starting-style:opacity-0 data-ending-style:opacity-0 data-ending-style:duration-(--dur-fast)';
