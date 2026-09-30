# Discord announcer (WP-43)

Import from `@sotf/core/discord/index`. PLAN §7.1 T0-31.

- `discordJobsForEvent(event)`: `mod.published`, `version.published`, `award.created` (Mod of the
  Week) and `milestone.reached` ≥ 10 k become `discord.announce` jobs. NSFW is never announced; the
  first version of a mod is announced as the new mod.
- `buildDiscordMessage(announcement)`: pure embed builder (snapshot-tested), Markdown escaped,
  `allowed_mentions: { parse: [] }`.
- `announceOnDiscord(deps, job)`: webhooks from `SiteSetting.discordWebhooks` (events filter,
  `excludeBeta`); every delivery is recorded in "AuditLog" (`discord.announce`, webhook name + URL
  hash, never the URL); delivered webhooks are skipped on retries; 429/5xx retry, other 4xx are
  recorded as failed.
