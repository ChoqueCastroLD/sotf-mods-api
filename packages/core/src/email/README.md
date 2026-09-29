# Email outbox (WP-30)

Import from `@sotf/core/email/index`.

- `queueEmail(tx, jobs, { to, template, locale, payload, dedupeKey? })` writes `EmailOutbox` and
  enqueues `email.send` in the **same transaction** as the business change.
- `EMAIL_TEMPLATE_PAYLOADS` (templates.ts) is the list of templates and their payload schemas;
  @sotf/emails renders them (`renderAccountEmail`). Add new templates in both places.
- `deliverOutboxEmail()` (the `email.send` job): claim → render → send → `sent` / `suppressed`, or
  `retry` / `failed`; Resend gets `Idempotency-Key: outbox-<id>`.
- Transports (`EMAIL_TRANSPORT`): `resend` (HTTP API), `mailpit` (SMTP to `SMTP_URL`, local and
  tests), `allowlist` (staging: only `EMAIL_ALLOWLIST` addresses/`@domains`; the rest suppressed).
