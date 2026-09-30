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
  'rounded-xl border border-border-strong bg-surface p-0 text-fg shadow-xl backdrop:bg-night-975/70 ' +
  'max-md:mb-0 max-md:w-full max-md:max-w-none max-md:rounded-b-none max-md:pb-[env(safe-area-inset-bottom)] ' +
  'motion-safe:open:animate-rise';

export const DIALOG_HEADER_CLASSES =
  'sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-border bg-surface px-5 py-4';

export const DIALOG_TITLE_CLASSES = 'font-display-caps text-display-xs text-fg';

export const DIALOG_BODY_CLASSES = 'grid gap-4 px-5 py-5';

/** Section heading of the main column and the sidebar. */
export const SECTION_TITLE_CLASSES = 'font-display-caps text-display-xs text-fg';

/** Small uppercase label («AT A GLANCE»). */
export const READOUT_CLASSES = 'readout text-fg-muted';

/** Sidebar card. */
export const PANEL_CLASSES = 'rounded-lg border border-border bg-surface p-4';

/** Focus ring of custom controls. */
export const FOCUS_RING = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus';

/** Icon-and-text secondary action (Install, Share, Report…). */
export const ACTION_CLASSES =
  'inline-flex h-11 min-w-11 items-center justify-center gap-2 rounded-md border border-border-strong bg-raised px-3 text-sm font-medium text-fg ' +
  'hover:bg-[color-mix(in_oklab,var(--color-raised),var(--color-fg)_7%)] aria-pressed:border-primary aria-pressed:text-primary ' +
  'disabled:cursor-not-allowed disabled:opacity-55 aria-busy:cursor-progress ' +
  FOCUS_RING;
