/**
 * Shared class lists of the mod page (literal strings: Tailwind scans the source text).
 */

/**
 * Native `<dialog>` used by the vanilla scripts: centred card on desktop, bottom sheet on phones
 * (safe-area aware), reduced-motion friendly. Opened with `showModal()` (focus trap, Esc, inert
 * page) by `scripts/mod/dialogs.ts`.
 */
export const DIALOG_CLASSES =
  'm-auto w-[min(36rem,calc(100vw-2rem))] max-h-[min(44rem,calc(100dvh-2rem))] overflow-y-auto overscroll-contain ' +
  'rounded-lg border border-border-strong bg-surface p-0 text-fg shadow-xl backdrop:bg-black/70 ' +
  'max-md:mb-0 max-md:w-full max-md:max-w-none max-md:rounded-t-xl max-md:rounded-b-none max-md:border-b-0 max-md:max-h-[88dvh] max-md:pb-[env(safe-area-inset-bottom)] ' +
  'md:motion-safe:open:animate-rise';

export const DIALOG_HEADER_CLASSES =
  'sticky top-0 z-10 flex touch-none items-center justify-between gap-3 border-b border-border bg-surface px-5 pt-5 pb-3 md:py-4';

export const DIALOG_TITLE_CLASSES = 'text-lg font-bold text-fg';

export const DIALOG_BODY_CLASSES = 'grid content-start gap-4 px-5 py-5';

/** Section heading of the main column. */
export const SECTION_TITLE_CLASSES = 'text-xl font-bold text-fg';

/** Heading of a sidebar block. */
export const SIDE_TITLE_CLASSES = 'text-sm font-semibold text-fg';

/** Sidebar block: a hairline and spacing, never a card. */
export const SIDE_BLOCK_CLASSES = 'grid gap-3 border-t border-border pt-5 first:border-t-0 first:pt-0';

/** Hairline-separated block of a sub-page (version facts, scan result). */
export const PANEL_CLASSES = 'border-y border-border py-2';

/** Focus ring of custom controls. */
export const FOCUS_RING = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus';

/** Icon-and-text secondary action (Install, Share, Report…). */
export const ACTION_CLASSES =
  'inline-flex h-10 min-w-10 items-center justify-center gap-2 rounded-md border border-border-strong px-3 text-sm font-medium text-fg ' +
  'hover:bg-fg/6 aria-pressed:border-primary aria-pressed:text-primary ' +
  'disabled:cursor-not-allowed disabled:opacity-55 aria-busy:cursor-progress ' +
  FOCUS_RING;
