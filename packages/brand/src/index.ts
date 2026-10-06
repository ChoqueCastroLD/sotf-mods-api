/**
 * @sotf/brand: the brand assets of SOTF Mods (the old red logo, favicons, default avatars,
 * covers and banners) as pure, deterministic functions.
 *
 * Import from sub-paths (`@sotf/brand/logo`, `@sotf/brand/colors`, …) in client code to keep
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
export { APP_ICONS, type AppIconShape, type AppIconSpec, FAVICON_ICO_SIZES, manifestIcons } from './icons.ts';
export {
  DISPLAY_FONT_STACK,
  graphemes,
  hasOutlines,
  type InitialsOptions,
  initialsElement,
  initialsFrom,
  upperInitial,
} from './initials.ts';
export {
  LOGO_FILES,
  LOGO_PATHS,
  type LockupLayout,
  type LockupOptions,
  type LockupTheme,
  type LogoFile,
  lockupSvg,
  logoPicture,
} from './logo.ts';
export { LOGO_WORDMARK_DATA_URI, LOGO_WORDMARK_SIZE } from './logo-data.ts';
export {
  MOON_PHASE_NAMES,
  type MoonPhase,
  type MoonPhaseIndex,
  type MoonPhaseName,
  moonPhase,
  SYNODIC_MONTH,
} from './moon.ts';
export { OG_HEIGHT, OG_WIDTH } from './og.ts';
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
