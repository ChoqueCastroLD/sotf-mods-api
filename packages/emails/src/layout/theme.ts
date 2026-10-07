/**
 * Email theme: literal hex values as inline styles (docs/plan/CLASSIC.md). Email clients ignore CSS
 * variables, `light-dark()` and web fonts, so templates get hex colours and a system sans stack.
 * Dark neutral header with the red logo, light readable body, red accent for the button and links.
 * Contrast is at least 4.5:1 on the surfaces they sit on.
 */
export const emailColors = {
  /** Dark neutral header band (site background). */
  header: '#0E1114',
  page: '#F3F4F6',
  surface: '#FFFFFF',
  fg: '#111418',
  fgMuted: '#4B5563',
  fgSubtle: '#6B7280',
  border: '#E5E7EB',
  primary: '#E11D1D',
  onPrimary: '#FFFFFF',
  link: '#C81414',
} as const;

export const emailFonts = {
  body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'PingFang SC', 'Hiragino Sans', 'Microsoft YaHei', sans-serif",
  mono: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
} as const;

export const emailStyles = {
  body: { backgroundColor: emailColors.page, margin: 0, padding: '24px 0', fontFamily: emailFonts.body },
  container: {
    backgroundColor: emailColors.surface,
    border: `1px solid ${emailColors.border}`,
    borderRadius: '8px',
    margin: '0 auto',
    maxWidth: '560px',
    padding: 0,
  },
  header: {
    backgroundColor: emailColors.header,
    borderRadius: '8px 8px 0 0',
    padding: '20px 32px',
  },
  content: { padding: '32px 32px 8px' },
  footerBox: { padding: '0 32px 24px' },
  heading: {
    color: emailColors.fg,
    fontFamily: emailFonts.body,
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '1.25',
    margin: '0 0 16px',
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
