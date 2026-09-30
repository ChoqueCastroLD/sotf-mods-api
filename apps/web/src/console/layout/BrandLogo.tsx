/**
 * The SOTF Mods lockup or mark, in the variant of the current theme. Decorative: the link around
 * it carries the accessible name.
 */
import { cn } from '@sotf/ui/cn';
import { BRAND } from './brand.ts';

/** Intrinsic sizes of the SVGs (viewBox), so the images never shift the layout. */
const LOCKUP = { width: 131, height: 24 };
const MARK = { width: 28, height: 28 };

export function BrandLogo({ variant, className }: { variant: 'lockup' | 'mark'; className?: string }) {
  const size = variant === 'lockup' ? LOCKUP : MARK;
  const night = variant === 'lockup' ? BRAND.lockupNight : BRAND.markNight;
  const day = variant === 'lockup' ? BRAND.lockupDay : BRAND.markDay;
  return (
    <>
      <img src={night} alt="" {...size} decoding="async" className={cn('light:hidden', className)} />
      <img src={day} alt="" {...size} decoding="async" className={cn('hidden light:block', className)} />
    </>
  );
}
