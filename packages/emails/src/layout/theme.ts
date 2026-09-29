/**
 * Email theme: literal «Locator» day-theme values (PLAN §3.3) as inline styles. Email clients ignore
 * CSS variables, `light-dark()` and web fonts, so templates get hex colours and system font stacks.
 * The day palette is used because many clients force light backgrounds; contrast is ≥ 4.5:1.
 */
import { palette } from '@sotf/brand/colors';

export const emailColors = {
  page: palette.night[50],
  surface: '#FFFFFF',
  fg: palette.night[950],
  fgMuted: palette.night[600],
  fgSubtle: palette.night[500],
  border: palette.night[200],
  primary: palette.flare[600],
  onPrimary: '#FFFFFF',
  link: palette.flare[700],
} as const;

export const emailFonts = {
  body: "'Onest', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'PingFang SC', 'Hiragino Sans', 'Microsoft YaHei', sans-serif",
  display: "'Big Shoulders', 'Arial Narrow', 'Helvetica Neue', Arial, sans-serif",
  mono: "'Martian Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
} as const;

export const emailStyles = {
  body: { backgroundColor: emailColors.page, margin: 0, padding: '24px 0', fontFamily: emailFonts.body },
  container: {
    backgroundColor: emailColors.surface,
    border: `1px solid ${emailColors.border}`,
    borderRadius: '12px',
    margin: '0 auto',
    maxWidth: '560px',
    padding: '32px 32px 24px',
  },
  heading: {
    color: emailColors.fg,
    fontFamily: emailFonts.display,
    fontSize: '28px',
    fontWeight: 800,
    letterSpacing: '0.01em',
    lineHeight: '1.15',
    margin: '0 0 16px',
    textTransform: 'uppercase' as const,
  },
  text: { color: emailColors.fg, fontSize: '16px', lineHeight: '1.6', margin: '0 0 16px' },
  muted: { color: emailColors.fgMuted, fontSize: '14px', lineHeight: '1.5', margin: '0 0 12px' },
  button: {
    backgroundColor: emailColors.primary,
    borderRadius: '8px',
    color: emailColors.onPrimary,
    display: 'inline-block',
    fontSize: '16px',
    fontWeight: 600,
    padding: '12px 20px',
    textDecoration: 'none',
  },
  code: {
    backgroundColor: emailColors.page,
    border: `1px solid ${emailColors.border}`,
    borderRadius: '8px',
    color: emailColors.fg,
    fontFamily: emailFonts.mono,
    fontSize: '22px',
    letterSpacing: '0.2em',
    padding: '12px 16px',
    textAlign: 'center' as const,
  },
  hr: { borderColor: emailColors.border, margin: '24px 0 16px' },
  footer: { color: emailColors.fgSubtle, fontSize: '12px', lineHeight: '1.5', margin: '0 0 8px' },
  footerLink: { color: emailColors.fgMuted, textDecoration: 'underline' },
} as const;
