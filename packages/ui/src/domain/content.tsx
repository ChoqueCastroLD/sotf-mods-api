/**
 * Content pieces (research/03 §5.6, §5.8; PLAN §8.5).
 *
 * - `ProseLocator`: styles for the HTML of `@sotf/markdown` (descriptions, changelogs, pages):
 *   Typography + the `prose-locator` tokens, 72ch, headings in Onest 650 with a `#` anchor on
 *   hover/focus, Flare bullets and quote bar, GitHub alerts (`[!NOTE]` Signal, `[!TIP]` Lichen,
 *   `[!IMPORTANT]` Blueprint, `[!WARNING]` Solafite, `[!CAUTION]` Blood), code in Martian Mono on
 *   `sunken`, tables that scroll, rounded lazy images, the YouTube facade (16:9 + play button),
 *   mentions, task lists, `details`/`summary` and spoilers (blurred until revealed, visible
 *   focus, no blur transition under reduced motion). The class hooks are the contract of
 *   `packages/markdown/README.md`; every rule is an arbitrary variant here, so the styles ship
 *   with the component (Tailwind scans this file) and need no extra stylesheet.
 */
import type { ReactNode } from 'react';
import { cn } from '../cn.ts';

// -------------------------------------------------------------------------------------------
// ProseLocator
// -------------------------------------------------------------------------------------------

/** Literal class list (Tailwind generates exactly these). */
export const PROSE_LOCATOR_CLASSES = [
  'prose prose-locator max-w-[72ch] text-pretty',
  // Headings: Onest 650 (never the display face for user prose), anchors on hover/focus.
  '[&_:is(h2,h3,h4)]:font-sans [&_:is(h2,h3,h4)]:font-[650] [&_:is(h2,h3,h4)]:scroll-mt-20',
  '[&_.md-anchor]:ms-2 [&_.md-anchor]:text-fg-subtle [&_.md-anchor]:no-underline [&_.md-anchor]:opacity-0',
  '[&_.md-anchor]:transition-opacity [&_.md-anchor]:duration-(--dur-fast)',
  "[&_.md-anchor]:after:content-['#'] [&_:is(h2,h3,h4):is(:hover,:focus-within)_.md-anchor]:opacity-100",
  // Links: 1 px underline, 3 px offset.
  '[&_a]:decoration-1 [&_a]:underline-offset-3 [&_a:hover]:decoration-2',
  // Code.
  '[&_code]:font-mono [&_code]:text-[0.8125em] [&_:not(pre)>code]:rounded-xs [&_:not(pre)>code]:bg-sunken',
  '[&_:not(pre)>code]:px-1 [&_:not(pre)>code]:py-0.5 [&_:not(pre)>code]:before:content-none [&_:not(pre)>code]:after:content-none',
  '[&_pre]:rounded-md [&_pre]:border [&_pre]:border-border [&_pre]:text-[13px] [&_pre]:leading-relaxed',
  // Tables scroll horizontally instead of overflowing the page.
  '[&_table]:block [&_table]:max-w-full [&_table]:overflow-x-auto [&_th]:bg-sunken [&_th]:whitespace-nowrap',
  // Images.
  '[&_img]:rounded-md [&_img]:border [&_img]:border-border',
  // GitHub alerts.
  '[&_.md-alert]:my-5 [&_.md-alert]:rounded-md [&_.md-alert]:border [&_.md-alert]:border-s-4 [&_.md-alert]:px-4 [&_.md-alert]:py-3',
  '[&_.md-alert_p]:my-1.5 [&_.md-alert>:last-child]:mb-0 [&_.md-alert>:first-child]:mt-0',
  '[&_.md-alert-title]:flex [&_.md-alert-title]:items-center [&_.md-alert-title]:gap-1.5 [&_.md-alert-title]:font-semibold',
  '[&_.md-alert-title]:before:text-base [&_.md-alert-title]:before:leading-none',
  '[&_.md-alert-note]:border-border-strong [&_.md-alert-note]:bg-raised [&_.md-alert-note_.md-alert-title]:text-fg',
  "[&_.md-alert-note_.md-alert-title]:before:content-['ⓘ']",
  '[&_.md-alert-tip]:border-success [&_.md-alert-tip]:bg-success-soft [&_.md-alert-tip_.md-alert-title]:text-success',
  "[&_.md-alert-tip_.md-alert-title]:before:content-['✓']",
  '[&_.md-alert-important]:border-primary [&_.md-alert-important]:bg-primary-soft [&_.md-alert-important_.md-alert-title]:text-primary',
  "[&_.md-alert-important_.md-alert-title]:before:content-['!']",
  '[&_.md-alert-warning]:border-warning [&_.md-alert-warning]:bg-warning-soft [&_.md-alert-warning_.md-alert-title]:text-warning',
  "[&_.md-alert-warning_.md-alert-title]:before:content-['▲']",
  '[&_.md-alert-caution]:border-danger [&_.md-alert-caution]:bg-danger-soft [&_.md-alert-caution_.md-alert-title]:text-danger',
  "[&_.md-alert-caution_.md-alert-title]:before:content-['✕']",
  // Spoilers: blurred until hover, focus, focus-within or revealed; visible focus ring.
  '[&_.md-spoiler]:rounded-xs [&_.md-spoiler]:bg-fg/10 [&_.md-spoiler]:px-0.5 [&_.md-spoiler]:blur-[5px]',
  '[&_.md-spoiler]:transition-[filter] [&_.md-spoiler]:duration-(--dur-fast) motion-reduce:[&_.md-spoiler]:transition-none',
  '[&_.md-spoiler[role=button]]:cursor-pointer',
  '[&_.md-spoiler:is(:hover,:focus,:focus-within,[aria-expanded=true])]:blur-none [&_.md-spoiler:is(:hover,:focus,:focus-within,[aria-expanded=true])]:bg-transparent',
  '[&_.md-spoiler:focus-visible]:outline-2 [&_.md-spoiler:focus-visible]:outline-offset-2 [&_.md-spoiler:focus-visible]:outline-focus',
  '[&_:is(summary:hover,summary:focus-visible,details[open]>summary)_.md-spoiler]:blur-none',
  // YouTube facade: 16:9 thumbnail + play button (the iframe is swapped in by a script).
  '[&_.md-youtube]:my-6 [&_.md-youtube-link]:relative [&_.md-youtube-link]:block [&_.md-youtube-link]:aspect-video',
  '[&_.md-youtube-link]:overflow-hidden [&_.md-youtube-link]:rounded-md [&_.md-youtube-link]:bg-night-975',
  '[&_.md-youtube-thumb]:m-0 [&_.md-youtube-thumb]:size-full [&_.md-youtube-thumb]:object-cover [&_.md-youtube-thumb]:border-0',
  '[&_.md-youtube-link]:after:absolute [&_.md-youtube-link]:after:inset-0 [&_.md-youtube-link]:after:m-auto [&_.md-youtube-link]:after:size-16',
  "[&_.md-youtube-link]:after:rounded-full [&_.md-youtube-link]:after:bg-primary [&_.md-youtube-link]:after:content-['']",
  '[&_.md-youtube-link]:after:[clip-path:polygon(38%_28%,74%_50%,38%_72%)] [&_.md-youtube-link]:after:scale-100',
  '[&_.md-youtube-link]:before:absolute [&_.md-youtube-link]:before:inset-0 [&_.md-youtube-link]:before:z-[1] [&_.md-youtube-link]:before:m-auto',
  "[&_.md-youtube-link]:before:size-16 [&_.md-youtube-link]:before:rounded-full [&_.md-youtube-link]:before:bg-night-975/70 [&_.md-youtube-link]:before:content-['']",
  '[&_.md-youtube-link]:after:z-[2]',
  // Mentions.
  '[&_.md-mention]:rounded-xs [&_.md-mention]:bg-primary/10 [&_.md-mention]:px-1 [&_.md-mention]:font-medium [&_.md-mention]:no-underline',
  // Task lists.
  '[&_.contains-task-list]:list-none [&_.contains-task-list]:ps-0 [&_.task-list-item]:flex [&_.task-list-item]:items-start [&_.task-list-item]:gap-2',
  '[&_.task-list-item>input]:mt-1.5 [&_.task-list-item>input]:accent-(--color-primary)',
  // Details / summary.
  '[&_details]:my-4 [&_details]:rounded-md [&_details]:border [&_details]:border-border [&_details]:px-4 [&_details]:py-2',
  '[&_summary]:cursor-pointer [&_summary]:font-medium [&_summary]:text-fg [&_details[open]>summary]:mb-2',
].join(' ');

export interface ProseLocatorProps {
  /** Sanitised HTML from `@sotf/markdown` (never raw user input). */
  html?: string;
  children?: ReactNode;
  /** `sm` for comments and reviews; `base` for descriptions and pages. */
  size?: 'sm' | 'base';
  /** Content language of user prose (`contentLang`), when it differs from the page. */
  lang?: string;
  className?: string;
}

export function ProseLocator({ html, children, size = 'base', lang, className }: ProseLocatorProps) {
  const classes = cn(PROSE_LOCATOR_CLASSES, size === 'sm' ? 'prose-sm' : 'prose-base', className);
  if (html !== undefined) {
    // biome-ignore lint/security/noDangerouslySetInnerHtml: HTML produced and verified by @sotf/markdown (closed-set serialiser)
    return <div lang={lang} className={classes} dangerouslySetInnerHTML={{ __html: html }} />;
  }
  return (
    <div lang={lang} className={classes}>
      {children}
    </div>
  );
}
