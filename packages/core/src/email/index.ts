/**
 * Email domain (PLAN §6.4 "EmailOutbox", §7.3, WP-30): the transactional outbox, template payload
 * schemas, delivery with retries and the Resend / Mailpit (SMTP) / allowlist transports.
 * Import from `@sotf/core/email/index`.
 */
export * from './deliver.ts';
export * from './mime.ts';
export * from './outbox.ts';
export * from './smtp.ts';
export * from './templates.ts';
export * from './transports.ts';
