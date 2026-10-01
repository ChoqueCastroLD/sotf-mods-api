/**
 * @sotf/ui: "Locator" design system (PLAN §3). Tailwind 4 `@theme` tokens (`@sotf/ui/tokens.css`),
 * self-hosted fonts (`@sotf/ui/fonts.css`), accessible primitives (this barrel) and, from WP-25,
 * domain components (`@sotf/ui/domain`).
 *
 * Every primitive renders on the server (Astro, `renderToString`) and works interactively in the
 * console. The package is side-effect free, so importing one component from this barrel ships
 * only that component (a `Button` is < 3 KB br). Vanilla helpers for non-hydrated pages live in
 * `@sotf/ui/theme`, `@sotf/ui/enhance` and `@sotf/ui/dismissals`.
 */

export { AVATAR_SIZES, Avatar, type AvatarProps, type AvatarSize, avatarSlot } from './avatar.tsx';
export { BADGE_SOFT_HUES, BADGE_VARIANTS, Badge, type BadgeProps, type BadgeVariant } from './badge.tsx';
export { Banner, type BannerProps, type BannerTone } from './banner.tsx';
export {
  type BreadcrumbItem,
  type BreadcrumbJsonLdItem,
  Breadcrumbs,
  type BreadcrumbsProps,
  breadcrumbListJsonLd,
} from './breadcrumbs.tsx';
export {
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  Button,
  ButtonLink,
  type ButtonLinkProps,
  type ButtonProps,
  type ButtonSize,
  type ButtonStyleOptions,
  type ButtonVariant,
  buttonClasses,
} from './button.tsx';
export { Checkbox, type CheckboxProps } from './checkbox.tsx';
export { type ClassDictionary, type ClassValue, cn } from './cn.ts';
export { Combobox, type ComboboxOption, type ComboboxProps } from './combobox.tsx';
export {
  ConfirmDialog,
  type ConfirmDialogProps,
  Dialog,
  DialogClose,
  type DialogCloseProps,
  type DialogProps,
  type DialogSize,
} from './dialog.tsx';
export { EmptyState, type EmptyStateProps } from './empty-state.tsx';
export { ErrorState, type ErrorStateProps } from './error-state.tsx';
export {
  controlClasses,
  Field,
  type FieldProps,
  labelClasses,
  OptionalHint,
} from './field.tsx';
export {
  FieldKitIcon,
  type FieldKitIconName,
  type FieldKitIconProps,
  Icon,
  type IconProps,
  iconStrokeWidth,
  icons,
  type LucideIcon,
  type SemanticIconName,
} from './icons.tsx';
export { Input, type InputProps, type InputSize } from './input.tsx';
export { Kbd } from './kbd.tsx';
export {
  configureUiTranslate,
  createUiTranslate,
  englishUiTranslate,
  interpolate,
  UI_MESSAGE_KEYS,
  type UiMessageKey,
  type UiMessageParams,
  type UiTranslate,
  UiTranslateProvider,
  type UiTranslateProviderProps,
  useUiTranslate,
} from './labels.ts';
export { type LanguageOption, LanguageSwitcher, type LanguageSwitcherProps } from './language-switcher.tsx';
export { LiveDot, type LiveDotProps } from './live-dot.tsx';
export {
  Menu,
  type MenuActionItem,
  type MenuCheckboxEntry,
  type MenuEntry,
  type MenuGroupEntry,
  type MenuLinkEntry,
  type MenuProps,
  type MenuRadioEntry,
  type MenuSeparatorEntry,
} from './menu.tsx';
export { Pagination, type PaginationProps } from './pagination.tsx';
export { type PageToken, paginationRange } from './pagination-range.ts';
export { PasswordField, type PasswordFieldProps } from './password-field.tsx';
export {
  DEFAULT_MIN_PASSWORD_LENGTH,
  type PasswordScore,
  type PasswordStrength,
  passwordStrength,
} from './password-strength.ts';
export { Popover, PopoverClose, type PopoverProps } from './popover.tsx';
export { RadioCardGroup, type RadioCardGroupProps, type RadioCardOption } from './radio-card.tsx';
export { Select, type SelectOption, type SelectProps } from './select.tsx';
export {
  ActionSheet,
  type ActionSheetItem,
  type ActionSheetProps,
  BottomSheet,
  type BottomSheetProps,
  type SheetSnapPoint,
} from './sheet.tsx';
export { Skeleton, SkeletonGroup, type SkeletonGroupProps, SkeletonText, type SkeletonTextProps } from './skeleton.tsx';
export { SkipLink, type SkipLinkProps } from './skip-link.tsx';
export { Slider, type SliderProps } from './slider.tsx';
export { RadarSpinner, type RadarSpinnerProps } from './spinner.tsx';
export { type StepItem, Stepper, type StepperProps } from './stepper.tsx';
export {
  backdropClasses,
  dropdownPositionerClasses,
  floatingPanelClasses,
  listItemClasses,
  listPanelClasses,
  popoverPositionerClasses,
} from './surfaces.ts';
export { Switch, type SwitchProps } from './switch.tsx';
export { type TabItem, Tabs, type TabsProps, tabClasses, tabListClasses } from './tabs.tsx';
export { Textarea, type TextareaProps } from './textarea.tsx';
export { ThemeToggle, type ThemeToggleProps } from './theme-toggle.tsx';
export {
  type ProgressMessages,
  TOAST_DURATION_MS,
  type ToastAction,
  ToastCard,
  Toaster,
  type ToasterProps,
  type ToastKind,
  type ToastOptions,
  toast,
} from './toast.tsx';
export { TOOLTIP_DELAY_MS, Tooltip, type TooltipProps, TooltipProvider } from './tooltip.tsx';
export { BELOW_MD_QUERY, useMediaQuery } from './use-media-query.ts';
