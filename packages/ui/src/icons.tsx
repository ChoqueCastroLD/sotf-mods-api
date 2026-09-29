/**
 * Icons (PLAN §3.6, research/03 §4.5).
 *
 * - `Icon` renders any Lucide icon with the brand weight: 1.75 px strokes, 2 px at ≤ 16 px.
 *   Decorative by default (`aria-hidden`); pass `label` when the icon is the only carrier of
 *   meaning (and prefer a visible label or a tooltip on controls).
 * - `FieldKitIcon` renders the brand's own «Field kit» set from `@sotf/brand`: through the
 *   `/brand/field-kit.svg` sprite (default, 0 bytes of markup per icon) or inline.
 * - `icons` is the semantic map (search, live, compat…) so the whole site uses one glyph per
 *   concept. Lucide is imported icon by icon, so unused icons never reach a bundle.
 */
import { FIELD_KIT_ICONS, FIELD_KIT_ID_PREFIX, FIELD_KIT_STROKE, type FieldKitIconName } from '@sotf/brand/field-kit';
import {
  Backpack,
  BadgeCheck,
  BellRing,
  Binoculars,
  DraftingCompass,
  Leaf,
  LibraryBig,
  LocateFixed,
  type LucideIcon,
  type LucideProps,
  MoonStar,
  Radar,
  Route,
  ScanSearch,
  Shapes,
  ShieldCheck,
  Shirt,
  Snowflake,
  TentTree,
  WandSparkles,
} from 'lucide-react';
import { createElement, type ReactElement, type SVGProps } from 'react';
import { cn } from './cn.ts';

export type { LucideIcon } from 'lucide-react';

/** Brand stroke width for an icon rendered at `size` px. */
export function iconStrokeWidth(size: number): number {
  return size <= 16 ? 2 : FIELD_KIT_STROKE;
}

export interface IconProps extends Omit<LucideProps, 'ref' | 'size'> {
  /** The Lucide icon component (`import { Search } from 'lucide-react'`). */
  icon: LucideIcon;
  /** Rendered size in px. Default 20. */
  size?: number;
  /** Accessible name; omit for decorative icons. */
  label?: string;
}

export function Icon({ icon: Glyph, size = 20, label, className, strokeWidth, ...rest }: IconProps) {
  const a11y = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true as const };
  return (
    <Glyph
      size={size}
      strokeWidth={strokeWidth ?? iconStrokeWidth(size)}
      className={cn('shrink-0', className)}
      focusable="false"
      {...a11y}
      {...rest}
    />
  );
}

/** Semantic icon map (research/03 §4.5). */
export const icons = {
  library: LibraryBig,
  qualityOfLife: WandSparkles,
  modelSwap: Shirt,
  misc: Shapes,
  builds: DraftingCompass,
  kits: Backpack,
  creators: TentTree,
  install: Route,
  moderation: Binoculars,
  notifications: BellRing,
  search: ScanSearch,
  live: Radar,
  compatibility: BadgeCheck,
  safety: ShieldCheck,
  locate: LocateFixed,
  winter: Snowflake,
  season: Leaf,
  night: MoonStar,
} as const satisfies Record<string, LucideIcon>;

export type SemanticIconName = keyof typeof icons;

export type { FieldKitIconName } from '@sotf/brand/field-kit';

export interface FieldKitIconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
  name: FieldKitIconName;
  /** Rendered size in px. Default 24. */
  size?: number;
  /** Accessible name; omit for decorative icons. */
  label?: string;
  /**
   * `sprite` (default) references `${spriteHref}#fk-<name>`: the page downloads the ≤ 6 KB sprite
   * once. `inline` embeds the paths (e-mails, isolated documents, offline previews).
   */
  mode?: 'sprite' | 'inline';
  /** URL of the sprite. Default `/brand/field-kit.svg` (copied from @sotf/brand by apps/web). */
  spriteHref?: string;
}

const ELEMENT = /<(path|circle|rect|ellipse|line|polyline|polygon)\b([^>]*?)\/>/g;
const ATTRIBUTE = /([a-zA-Z-]+)="([^"]*)"/g;

function camelCase(name: string): string {
  return name.replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase());
}

/** Converts the trusted, build-time icon markup of @sotf/brand into React elements. */
function inlineChildren(markup: string): ReactElement[] {
  const children: ReactElement[] = [];
  let index = 0;
  for (const [, tag, attributes] of markup.matchAll(ELEMENT)) {
    const props: Record<string, string | number> = { key: index++ };
    for (const [, name, value] of (attributes ?? '').matchAll(ATTRIBUTE)) {
      if (name && value !== undefined) props[camelCase(name)] = value;
    }
    children.push(createElement(tag ?? 'path', props));
  }
  return children;
}

export function FieldKitIcon({
  name,
  size = 24,
  label,
  mode = 'sprite',
  spriteHref = '/brand/field-kit.svg',
  className,
  ...rest
}: FieldKitIconProps) {
  const a11y = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true as const };
  const common = {
    width: size,
    height: size,
    focusable: 'false' as const,
    className: cn('shrink-0', className),
    ...a11y,
    ...rest,
  };
  if (mode === 'sprite') {
    return (
      // biome-ignore lint/a11y/noSvgWithoutTitle: named by aria-label when `label` is set, aria-hidden otherwise
      <svg {...common}>
        <use href={`${spriteHref}#${FIELD_KIT_ID_PREFIX}${name}`} />
      </svg>
    );
  }
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: named by aria-label when `label` is set, aria-hidden otherwise
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={iconStrokeWidth(size)}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...common}
    >
      {inlineChildren(FIELD_KIT_ICONS[name])}
    </svg>
  );
}
