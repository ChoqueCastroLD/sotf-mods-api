/**
 * The SOTF-MODS logo (one line) or the square icon (collapsed sidebar, phone top bar), both red
 * on a transparent background. Decorative: the link around it carries the accessible name.
 */
import { BRAND } from './brand.ts';

/** Rendered sizes (CSS px) with the aspect ratio of the files, so the images never shift the layout. */
const LOCKUP = { width: 122, height: 32 };
const MARK = { width: 28, height: 28 };

export function BrandLogo({ variant, className }: { variant: 'lockup' | 'mark'; className?: string }) {
  if (variant === 'mark') {
    return <img src={BRAND.mark} alt="" {...MARK} decoding="async" className={className} />;
  }
  return (
    <picture>
      <source type="image/webp" srcSet={BRAND.lockupWebp} />
      <img src={BRAND.lockupPng} alt="" {...LOCKUP} decoding="async" className={className} />
    </picture>
  );
}
