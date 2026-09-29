/**
 * ThemeToggle (PLAN §3.3): Night / Day / System as a segmented radio group of native inputs, so
 * arrow keys work without JavaScript and the markup can be server-rendered in public pages
 * (`bindThemeToggles()` from `@sotf/ui/theme` enhances it there). Hydrated, it drives the theme
 * directly and stays in sync with other toggles and tabs.
 */
import { Monitor, MoonStar, Sun } from 'lucide-react';
import { useEffect, useId, useState } from 'react';
import { cn } from './cn.ts';
import { Icon } from './icons.tsx';
import { type UiMessageKey, useUiTranslate } from './labels.ts';
import { appliedTheme, DEFAULT_THEME, onThemeChange, setTheme, type Theme } from './theme.ts';

const OPTIONS: ReadonlyArray<{ value: Theme; label: UiMessageKey; icon: typeof Sun }> = [
  { value: 'dark', label: 'ui_theme_dark', icon: MoonStar },
  { value: 'light', label: 'ui_theme_light', icon: Sun },
  { value: 'system', label: 'ui_theme_system', icon: Monitor },
];

export interface ThemeToggleProps {
  /** Show the option names next to the icons (settings page). Default: icons only. */
  showLabels?: boolean;
  className?: string;
}

export function ThemeToggle({ showLabels = false, className }: ThemeToggleProps) {
  const t = useUiTranslate();
  const name = useId();
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);

  useEffect(() => {
    setThemeState(appliedTheme());
    return onThemeChange(setThemeState);
  }, []);

  return (
    <fieldset
      data-theme-toggle=""
      className={cn(
        'inline-flex items-center gap-0.5 rounded-md border border-border-strong bg-sunken p-0.5',
        className,
      )}
    >
      <legend className="sr-only">{t('ui_theme')}</legend>
      {OPTIONS.map((option) => {
        const label = t(option.label);
        return (
          <label
            key={option.value}
            title={showLabels ? undefined : label}
            className={cn(
              'relative flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-sm text-fg-muted transition-colors duration-(--dur-fast)',
              'hover:text-fg has-checked:bg-raised has-checked:text-fg has-checked:shadow-xs',
              'has-focus-visible:outline-2 has-focus-visible:outline-offset-1 has-focus-visible:outline-focus',
              showLabels ? 'px-2.5 text-sm' : 'w-8',
            )}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={theme === option.value}
              onChange={() => {
                setThemeState(option.value);
                setTheme(option.value);
              }}
              className="peer sr-only"
            />
            <Icon icon={option.icon} size={16} />
            <span className={showLabels ? undefined : 'sr-only'}>{label}</span>
          </label>
        );
      })}
    </fieldset>
  );
}
