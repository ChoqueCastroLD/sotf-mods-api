/**
 * LanguageSwitcher (research/03 §5.4): native language names, real links (`hreflang`, `lang`)
 * to the same page in every locale, so it works without JavaScript and crawlers see the
 * alternates. A `<details>` disclosure (the WAI pattern for navigation menus); hydration or
 * `bindDisclosures()` from `@sotf/ui/enhance` adds Escape / outside-click closing.
 */
import { Check, ChevronDown, Languages } from 'lucide-react';
import { type KeyboardEvent, useEffect, useRef } from 'react';
import { cn } from './cn.ts';
import { Icon } from './icons.tsx';
import { useUiTranslate } from './labels.ts';
import { floatingPanelClasses } from './surfaces.ts';

export interface LanguageOption {
  /** Locale code (`en`, `es`, `pt-BR`, `zh-Hans`…). */
  code: string;
  /** Native name («Español», «日本語»). */
  nativeName: string;
  /** URL of the current page in that locale. */
  href: string;
  /** BCP-47 tag for `hreflang`/`lang`; defaults to `code`. */
  hreflang?: string;
}

export interface LanguageSwitcherProps {
  languages: readonly LanguageOption[];
  /** Code of the current locale. */
  current: string;
  /** Show only the icon + code in the trigger (compact header). */
  compact?: boolean;
  /** Open upwards (footer placement). */
  placement?: 'bottom' | 'top';
  className?: string;
}

export function LanguageSwitcher({
  languages,
  current,
  compact = false,
  placement = 'bottom',
  className,
}: LanguageSwitcherProps) {
  const t = useUiTranslate();
  const ref = useRef<HTMLDetailsElement>(null);
  const active = languages.find((language) => language.code === current);

  useEffect(() => {
    const details = ref.current;
    if (!details) return;
    const onPointer = (event: PointerEvent) => {
      if (event.target instanceof Node && !details.contains(event.target)) details.open = false;
    };
    document.addEventListener('pointerdown', onPointer);
    return () => document.removeEventListener('pointerdown', onPointer);
  }, []);

  const onKeyDown = (event: KeyboardEvent<HTMLDetailsElement>) => {
    if (event.key === 'Escape' && event.currentTarget.open) {
      event.currentTarget.open = false;
      event.currentTarget.querySelector('summary')?.focus();
    }
  };

  return (
    <details ref={ref} data-disclosure="" className={cn('group relative', className)} onKeyDown={onKeyDown}>
      <summary
        className={cn(
          'flex h-10 cursor-pointer list-none items-center gap-1.5 rounded-md px-2.5 text-sm font-medium text-fg-muted',
          'transition-colors duration-(--dur-fast) hover:bg-fg/8 hover:text-fg [&::-webkit-details-marker]:hidden',
        )}
      >
        <Icon icon={Languages} size={18} />
        <span className="sr-only">{t('ui_language')} </span>
        <span lang={active?.hreflang ?? active?.code} className={compact ? 'uppercase' : undefined}>
          {compact ? (active?.code ?? current).split('-')[0] : (active?.nativeName ?? current)}
        </span>
        <Icon
          icon={ChevronDown}
          size={14}
          className="transition-transform duration-(--dur-fast) group-open:rotate-180"
        />
      </summary>
      <ul
        className={cn(
          floatingPanelClasses,
          'absolute end-0 z-(--z-dropdown) max-h-[min(24rem,70dvh)] w-52 overflow-y-auto p-1',
          placement === 'top' ? 'bottom-full mb-2' : 'top-full mt-2',
        )}
      >
        {languages.map((language) => {
          const selected = language.code === current;
          const tag = language.hreflang ?? language.code;
          return (
            <li key={language.code}>
              <a
                href={language.href}
                hrefLang={tag}
                lang={tag}
                aria-current={selected ? 'true' : undefined}
                className="flex min-h-9 items-center gap-2 rounded-sm px-2.5 text-sm text-fg hover:bg-fg/8 aria-[current=true]:font-semibold"
              >
                <span className="flex w-4 text-primary">{selected ? <Icon icon={Check} size={16} /> : null}</span>
                {language.nativeName}
              </a>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
