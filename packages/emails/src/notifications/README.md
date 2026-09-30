# Notification emails (WP-43)

`renderNotificationEmail(template, locale, payload, siteUrl)` renders the outbox templates of
`@sotf/core/notifications` (`NOTIFICATION_EMAIL_PAYLOADS`): `notify.signals` (instant batch, daily
and weekly digests; copy per cadence in `../digests/`) and `notify.creator_weekly` (`../creator/`).
Texts: namespace `emails-notify` of @sotf/i18n. The footer links to the one-click unsubscribe page;
the `List-Unsubscribe` headers are added by core at delivery.
