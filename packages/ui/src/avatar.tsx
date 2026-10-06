/**
 * Avatar (PLAN §3.9). With `src`: a lazy image with fixed dimensions (no layout shift). Without:
 * the brand's generative waypoint avatar (research/03 §4.6), drawn inline with theme tokens, so
 * it adapts to Night/Day and costs no request. The ring colour is the user's chart slot, the
 * same one `avatarSvg()` of @sotf/brand uses for e-mails and OG images.
 */
import { initialsFrom } from '@sotf/brand/initials';
import { hashSeed } from '@sotf/brand/random';
import { cn } from './cn.ts';

export const AVATAR_SIZES = [20, 24, 32, 40, 48, 64, 96, 128] as const;
export type AvatarSize = (typeof AVATAR_SIZES)[number];

export interface AvatarProps {
  /** Display name: initials of the fallback and default `alt`. */
  name: string;
  /** Stable id (user id) that picks the fallback colour. */
  id: string | number;
  /** Uploaded avatar URL (a square variant ≥ 2× the rendered size). */
  src?: string | null;
  size?: AvatarSize;
  /** `alt` of the image. Default: empty (decorative, the name is usually shown next to it). */
  alt?: string;
  className?: string;
}

/** Chart slot (1–8) of an id: identical to `avatarColor()` in @sotf/brand. */
export function avatarSlot(id: string | number): number {
  return (hashSeed(`avatar:${String(id)}`) % 8) + 1;
}

export function Avatar({ name, id, src, size = 40, alt = '', className }: AvatarProps) {
  const classes = cn(
    'inline-block aspect-square shrink-0 rounded-full bg-raised object-cover object-center',
    className,
  );
  if (src) {
    // Inline size: the base `img { height: auto }` rule would otherwise keep the photo's own ratio.
    return (
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        loading="lazy"
        decoding="async"
        className={classes}
        style={{ width: size, height: size }}
      />
    );
  }
  const initials = initialsFrom(name, 2);
  const ring = `var(--color-chart-${avatarSlot(id)})`;
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={classes}
      role={alt ? 'img' : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
    >
      <circle cx="32" cy="32" r="32" fill="var(--color-raised)" />
      <circle cx="32" cy="32" r="30" fill="none" stroke={ring} strokeWidth="2" />
      <text
        x="32"
        y="33"
        textAnchor="middle"
        dominantBaseline="central"
        fill="var(--color-fg)"
        fontFamily="var(--font-sans)"
        fontWeight="700"
        fontSize={initials.length > 1 ? 22 : 26}
        className="uppercase"
      >
        {initials}
      </text>
    </svg>
  );
}
