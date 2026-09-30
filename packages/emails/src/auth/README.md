# Account emails (WP-30)

`auth/templates.ts` (verify, reset, password changed, email change confirm/notice) and
`account/templates.ts` (export ready, deletion scheduled/cancelled/completed) share
`ActionEmail` (greeting, heading, paragraphs, button + plain link fallback, notes) inside the
brand `EmailLayout`. Texts: namespace `emails-auth` of @sotf/i18n (13 locales). The registry
`account/registry.ts` maps the outbox `template` keys to them; `renderAccountEmail()` is what the
`email.send` job calls.
