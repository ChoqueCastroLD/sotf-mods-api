/**
 * Button (PLAN §3.9, research/03 §5.1). Plain `<button>` / `<a>`: no JavaScript is needed to
 * render or use it, so it is safe in server-rendered public pages (0 KB hydration).
 *
 * - Variants: `primary` (Flare; `glow` only on the page's main CTA), `secondary`, `ghost`,
 *   `outline`, `danger`, `link`, `icon` (square; an accessible name is required by the types).
 * - Sizes: `sm` 32, `md` 40 (44 on touch-first viewports for `primary`), `lg` 48 px.
 * - `loading`: the radar sweep replaces the leading icon (or overlays the label), the width
 *   never changes, `aria-busy` is set and clicks are ignored while the button stays focusable.
 */
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent, ReactNode, Ref } from 'react';
import { cn } from './cn.ts';
import { RadarSpinner } from './spinner.tsx';

export const BUTTON_VARIANTS = ['primary', 'secondary', 'ghost', 'outline', 'danger', 'link', 'icon'] as const;
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];

export const BUTTON_SIZES = ['sm', 'md', 'lg'] as const;
export type ButtonSize = (typeof BUTTON_SIZES)[number];

const BASE =
  'relative inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium select-none ' +
  'transition-[background-color,border-color,color,box-shadow,translate] duration-(--dur-fast) ease-out ' +
  'active:translate-y-px disabled:cursor-not-allowed disabled:opacity-55 aria-disabled:cursor-not-allowed aria-disabled:opacity-55 ' +
  'aria-busy:cursor-progress aria-busy:opacity-100';

const VARIANT: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-primary-fg hover:bg-primary-hover',
  secondary:
    'border border-border-strong bg-raised text-fg shadow-xs inset-shadow-highlight hover:bg-[color-mix(in_oklab,var(--color-raised),var(--color-fg)_7%)]',
  ghost: 'text-fg hover:bg-fg/8',
  outline: 'border border-border-strong text-fg hover:bg-fg/6',
  danger: 'bg-danger text-danger-fg hover:bg-[color-mix(in_oklab,var(--color-danger),var(--color-fg)_14%)]',
  link: 'h-auto rounded-xs px-0 text-link underline decoration-1 underline-offset-3 hover:decoration-2 active:translate-y-0',
  icon: 'text-fg hover:bg-fg/8',
};

const SIZE: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
};

const ICON_SIZE: Record<ButtonSize, string> = { sm: 'size-8', md: 'size-10', lg: 'size-12' };

export interface ButtonStyleOptions {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Flare glow: only for the single main call to action of a page. */
  glow?: boolean;
  /** Stretch to the container width. */
  block?: boolean;
  className?: string;
}

function sizeClasses(variant: ButtonVariant, size: ButtonSize): string {
  if (variant === 'icon') return ICON_SIZE[size];
  if (variant === 'link') return size === 'lg' ? 'text-base' : 'text-sm';
  return SIZE[size];
}

/** Class list of a button, for elements that are not rendered by `Button`/`ButtonLink`. */
export function buttonClasses({
  variant = 'primary',
  size = 'md',
  glow = false,
  block = false,
  className,
}: ButtonStyleOptions = {}): string {
  return cn(
    BASE,
    VARIANT[variant],
    sizeClasses(variant, size),
    // Primary targets reach 44 px on touch-first (below md) viewports (WCAG 2.5.8 + PLAN §1.2).
    variant === 'primary' && size === 'md' && 'max-md:h-11',
    variant === 'primary' && size === 'sm' && 'max-md:min-h-11 max-md:min-w-11 max-md:h-auto',
    glow && 'shadow-glow',
    block && 'w-full',
    className,
  );
}

interface ContentOptions {
  icon?: ReactNode;
  iconEnd?: ReactNode;
  loading?: boolean;
  children?: ReactNode;
  variant: ButtonVariant;
  size: ButtonSize;
}

function ButtonContent({ icon, iconEnd, loading, children, size }: ContentOptions) {
  const spinnerSize = size === 'lg' ? 20 : 16;
  if (loading && !icon) {
    return (
      <>
        <span className="invisible inline-flex items-center gap-2">
          {children}
          {iconEnd}
        </span>
        <span className="absolute inset-0 flex items-center justify-center">
          <RadarSpinner size={spinnerSize} />
        </span>
      </>
    );
  }
  return (
    <>
      {loading ? <RadarSpinner size={spinnerSize} /> : icon}
      {children}
      {iconEnd}
    </>
  );
}

type IconOnly = { variant: 'icon'; 'aria-label': string } | { variant: 'icon'; 'aria-labelledby': string };
type WithText = { variant?: Exclude<ButtonVariant, 'icon'> };

interface CommonProps extends Omit<ButtonStyleOptions, 'variant'> {
  /** Leading icon (decorative); replaced by the spinner while loading. */
  icon?: ReactNode;
  /** Trailing icon (decorative). */
  iconEnd?: ReactNode;
  loading?: boolean;
}

export type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label' | 'aria-labelledby'> & {
    ref?: Ref<HTMLButtonElement>;
    'aria-label'?: string;
    'aria-labelledby'?: string;
  } & (IconOnly | WithText);

export function Button({
  variant = 'primary',
  size = 'md',
  glow,
  block,
  className,
  icon,
  iconEnd,
  loading = false,
  type = 'button',
  onClick,
  children,
  ...rest
}: ButtonProps) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (loading) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };
  return (
    <button
      type={type}
      className={buttonClasses({ variant, size, glow, block, className })}
      aria-busy={loading || undefined}
      onClick={handleClick}
      {...rest}
    >
      <ButtonContent icon={icon} iconEnd={iconEnd} loading={loading} variant={variant} size={size}>
        {children}
      </ButtonContent>
    </button>
  );
}

export type ButtonLinkProps = Omit<CommonProps, 'loading'> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'aria-label' | 'aria-labelledby'> & {
    href: string;
    ref?: Ref<HTMLAnchorElement>;
    'aria-label'?: string;
    'aria-labelledby'?: string;
  } & (IconOnly | WithText);

/** A link that looks like a button (navigation must stay a real `<a href>`). */
export function ButtonLink({
  variant = 'primary',
  size = 'md',
  glow,
  block,
  className,
  icon,
  iconEnd,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a className={buttonClasses({ variant, size, glow, block, className })} {...rest}>
      <ButtonContent icon={icon} iconEnd={iconEnd} variant={variant} size={size}>
        {children}
      </ButtonContent>
    </a>
  );
}
