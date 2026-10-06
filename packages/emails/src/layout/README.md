# Email layout (WP-20)

`EmailLayout({ locale, siteUrl, preview, children, footer })` is the frame of every transactional
email (templates: WP-30 accounts, WP-43 notifications). It renders the header with the logo, the content
and a localized footer (tagline, settings, privacy, optional reason and one-click unsubscribe).
`renderEmail(element)` returns `{ html, text }`. Styles are inline hex values (dark neutral header, light body, red accent) (`emailStyles`, `emailColors`, `emailFonts`); no CSS variables, no web fonts, no scripts.
The files use `createElement` (no JSX) so Node runs them natively in development.
