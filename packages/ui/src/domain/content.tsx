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
 * - `AdSlot`: reserved `min-height` per format (no layout shift when the ad fills or the slot is
 *   removed for signed-in users), «Advertisement» label, decorative border.
 * - `ConsentBar`: bottom bar with «Accept» and «Reject» of equal weight and «Preferences»; the
 *   vanilla consent script (WP-22) reveals it and handles `data-consent` buttons.
 */
import { Cookie } from 'lucide-react';
import type { ReactNode } from 'react';
import { buttonClasses } from '../button.tsx';
import { cn } from '../cn.ts';
import { Icon } from '../icons.tsx';
import { useDomainI18n } from './i18n.ts';

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

// -------------------------------------------------------------------------------------------
// AdSlot
// -------------------------------------------------------------------------------------------

export const AD_FORMATS = ['in-feed', 'sidebar', 'inline'] as const;
export type AdFormat = (typeof AD_FORMATS)[number];

/** Reserved heights (px) per format and breakpoint: [below md, md and up]. */
export const AD_MIN_HEIGHT: Readonly<Record<AdFormat, readonly [number, number]>> = {
  'in-feed': [320, 360],
  sidebar: [280, 600],
  inline: [280, 250],
};

// Literal classes mirroring AD_MIN_HEIGHT (Tailwind scans source text).
const AD_HEIGHT_CLASS: Record<AdFormat, string> = {
  'in-feed': 'min-h-[320px] md:min-h-[360px]',
  sidebar: 'min-h-[280px] md:min-h-[600px]',
  inline: 'min-h-[280px] md:min-h-[250px]',
};

export interface AdSlotProps {
  format: AdFormat;
  /** AdSense publisher id (`ca-pub-…`). */
  client: string;
  /** AdSense ad unit id. */
  slot: string;
  /** Show the «Ads keep downloads free. Sign in to hide them.» note. */
  showNotice?: boolean;
  className?: string;
}

export function AdSlot({ format, client, slot, showNotice = false, className }: AdSlotProps) {
  const { t } = useDomainI18n();
  return (
    <aside
      aria-label={t('ui_domain_ad_label')}
      data-ad-slot-container={format}
      className={cn('flex flex-col gap-1.5', className)}
    >
      <p className="text-xs text-fg-subtle">{t('ui_domain_ad_label')}</p>
      <div
        className={cn('overflow-hidden rounded-lg border border-border bg-surface', AD_HEIGHT_CLASS[format])}
        style={{ contain: 'layout paint' }}
      >
        {/* The site's units are AdSense «in-article» (fluid) units, the same ones the legacy site used. */}
        <ins
          className="adsbygoogle block size-full"
          style={{ display: 'block', textAlign: 'center' }}
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-layout="in-article"
          data-ad-format="fluid"
        />
      </div>
      {showNotice ? <p className="text-xs text-fg-subtle">{t('ui_domain_ad_notice')}</p> : null}
    </aside>
  );
}

// -------------------------------------------------------------------------------------------
// ConsentBar
// -------------------------------------------------------------------------------------------

export interface ConsentBarProps {
  /** Privacy/cookies page. */
  policyHref: string;
  onAccept?: () => void;
  onReject?: () => void;
  onPreferences?: () => void;
  /** Start hidden; the consent script reveals it when no choice is stored (default true). */
  hidden?: boolean;
  className?: string;
}

export function ConsentBar({
  policyHref,
  onAccept,
  onReject,
  onPreferences,
  hidden = true,
  className,
}: ConsentBarProps) {
  const { t } = useDomainI18n();
  const choice = buttonClasses({ variant: 'secondary', size: 'md', className: 'flex-1 sm:flex-none' });
  return (
    <section
      data-consent-bar=""
      hidden={hidden}
      aria-label={t('ui_domain_consent_label')}
      className={cn(
        'fixed inset-x-0 bottom-0 z-(--z-toast) border-t border-border-strong bg-overlay shadow-lg',
        'pb-[env(safe-area-inset-bottom)]',
        className,
      )}
    >
      <div className="mx-auto flex max-w-content flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center md:px-8">
        <p className="flex flex-1 items-start gap-2 text-sm text-fg">
          <Icon icon={Cookie} size={18} className="mt-0.5 text-fg-subtle" />
          <span>
            {t('ui_domain_consent_text')}{' '}
            <a href={policyHref} className="text-link underline underline-offset-3">
              {t('ui_domain_consent_policy')}
            </a>
          </span>
        </p>
        <div className="flex flex-wrap gap-2">
          <button type="button" data-consent="reject" onClick={onReject} className={choice}>
            {t('ui_domain_consent_reject')}
          </button>
          <button type="button" data-consent="accept" onClick={onAccept} className={choice}>
            {t('ui_domain_consent_accept')}
          </button>
          <button
            type="button"
            data-consent="preferences"
            onClick={onPreferences}
            className={buttonClasses({ variant: 'ghost', size: 'md' })}
          >
            {t('ui_domain_consent_preferences')}
          </button>
        </div>
      </div>
    </section>
  );
}
