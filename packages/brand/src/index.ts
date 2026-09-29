/**
 * @sotf/brand — the «Locator» brand assets of SOTF Mods as pure, deterministic functions.
 *
 * Import from sub-paths (`@sotf/brand/moon`, `@sotf/brand/topo`, …) in client code to keep
 * bundles minimal; this barrel is convenient on the server.
 */

export { type AvatarOptions, avatarColor, avatarSvg } from './avatar.ts';
export { type BannerOptions, bannerSeed, bannerSvg } from './banner.ts';
export {
  type BrandTheme,
  chartSlots,
  contrastRatio,
  hexToRgb,
  logoColors,
  mixHex,
  normalizeHex,
  palette,
  relativeLuminance,
  rgbToHex,
  themeColor,
  themeSurfaces,
} from './colors.ts';
export { type CoverOptions, coverSvg, DEFAULT_COVER_COLOR } from './cover.ts';
export {
  CREATOR_TIER_ICONS,
  FIELD_KIT_ICONS,
  FIELD_KIT_ID_PREFIX,
  FIELD_KIT_NAMES,
  FIELD_KIT_STROKE,
  type FieldKitIconName,
  type FieldKitIconOptions,
  fieldKitIcon,
  fieldKitSprite,
  fieldKitUse,
  isFieldKitIcon,
} from './field-kit.ts';
export {
  APP_ICONS,
  type AppIconShape,
  type AppIconSpec,
  appIconSvg,
  FAVICON_ICO_SIZES,
  faviconSvg,
  manifestIcons,
} from './icons.ts';
export { DISPLAY_FONT_STACK, hasOutlines, type InitialsOptions, initialsElement, initialsFrom } from './initials.ts';
export {
  type LockupGeometry,
  type LockupLayout,
  type LockupOptions,
  type LockupTheme,
  lockupBody,
  lockupGeometry,
  lockupSvg,
} from './logo.ts';
export {
  CLEAR_SPACE_RATIO,
  MARK_BOUNDS,
  MARK_MIN_SIZE,
  MARK_VIEWBOX,
  type MarkSvgOptions,
  type MarkVariant,
  markPath,
  markPathData,
  markSvg,
  markVariantForSize,
  PIN_PATH,
} from './mark.ts';
export {
  MOON_PHASE_NAMES,
  type MoonPhase,
  type MoonPhaseIndex,
  type MoonPhaseName,
  moonPhase,
  SYNODIC_MONTH,
} from './moon.ts';
export { OG_DEFAULT_SEED, OG_HEIGHT, OG_WIDTH, ogDefaultSvg } from './og.ts';
export { createRng, hashSeed, type Rng, type Seed } from './random.ts';
export {
  TOPO_TEXTURE_OPTIONS,
  TOPO_TEXTURE_SEED,
  type TopoLines,
  type TopoOptions,
  type TopoSvgOptions,
  topoField,
  topoGroup,
  topoLines,
  topoSvg,
} from './topo.ts';
