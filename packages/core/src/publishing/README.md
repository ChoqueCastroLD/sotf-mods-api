# Publishing, inspection, media and builds (WP-40)

Domains `publishing/`, `inspection/`, `media/` and `builds/` of `@sotf/core` (PLAN §2.8, §5.2
"Publicación y Basecamp", §7.4, §7.5, T0-04, T0-09, T0-19, T0-24). Import them by path
(`@sotf/core/publishing/index`, …); they are not in the root barrel yet.

## Flow

1. The wizard uploads the file (`POST /uploads`, WP-31). `complete` enqueues `inspection.run`
   (zips, build JSON) or creates a `Media` and enqueues `media.process` (images).
2. `inspection.run` (`inspection/run.ts`) reads zips through HTTP Range requests (`reader.ts`,
   yauzl over a presigned GET: the archive is never loaded) and writes an `UploadInspectionDTO`:
   zip bomb (ratio ≤ 100, ≤ 5 000 entries), zip slip (`..`, absolute paths, symlinks), extension
   allowlist and flagged executables, `manifest.json` against the RedLoader schema, semver, and —
   when the upload belongs to a new-version draft — same manifest id and a greater version.
   `passed` → upload `ready`; `flagged` → `ready` and moved to `quarantine/`; `failed` → `rejected`
   and deleted. Build JSON: blueprint structure and 20 MB; the embedded PNG thumbnail is extracted
   by `build.extract` into a `Media`.
3. `media.process` (`media/process.ts`): magic-byte format check, ≤ 8 000 px / 64 Mpx, EXIF
   orientation applied and every metadata block dropped, AVIF + WebP at 320/640/960/1440/1920 (never
   enlarged), ThumbHash and dominant colour; outputs are immutable public objects
   `media/{id}/original.{ext}` and `media/{id}/{w}.{avif|webp}`.
4. Drafts (`drafts.ts`) autosave the wizard state in `ModDraft`; every read returns the preflight
   rows (`preflight.ts`, i18n key `studio_preflight_<code>`), the quality score and the file flags.
5. `submit` (`submit.ts`) validates, reserves the row ids (remembered in the upload so a retry keeps
   the same final key), copies passed files to `mods/{modId}/{versionId}/{name}-{version}.zip` or
   `builds/{modId}/{versionId}/{name}.json` with `Content-Disposition: attachment` and the
   immutable cache, and writes everything in one transaction.

## Publication policy (`policy.ts`)

| Case | Mod | Version |
|---|---|---|
| New mod, checks passed, verified creator or staff | `published` | `active` |
| New mod otherwise (first review, or flagged file) | `pending` | `pending` |
| New build with a valid blueprint | `published` | `active` |
| New version of a published/unlisted/archived mod, passed | unchanged | `active` (latest) |
| New version with a flagged file | unchanged | `pending` (held, not latest) |
| New version of a pending or rejected mod | `pending` | `pending` (latest) |

Flagged files wait in `quarantine/`; moderation (WP-51) approves a held version with
`publishVersionFile` + `activateVersion`.

## Legacy-compatible writes (`release.ts`, `listing.ts`, `gallery.ts`, `legacy.ts`)

- `ModVersion`: `downloadUrl` (public URL of the final key), `filename` (the key), `extension`,
  `changelog` (HTML-escaped Markdown, "First release" by default); `isLatest` switched inside the
  transaction (partial unique index: one latest per mod).
- `Mod`: `latestVersion`, `lastReleasedAt`, CSV `dependencies` of required ids (empty for builds),
  `type`, `logColor`, `description` (escaped copy of `descriptionMd`), `modSide`,
  `isMultiplayerCompatible`, `requiresAllPlayers`, `imageUrl` (cover), `buildGuid`,
  `buildShareVersion`, `numberOfElements`; `isApproved` follows `status` through the trigger.
- `ModImage` rows for the gallery (`url`, `isPrimary = isThumbnail = false`, plus `mediaId`,
  `position`, `alt`), updated in place.
- `ModDependency` per version (manifest dependencies are `required`; the wizard may add `optional`
  and `conflicts`; builds always require `BuildShare`), `VersionInspection`, author-tested
  `ModVersionCompat`.

Events: `mod.published` (new published mod), `version.published` (active version of an existing
mod), `mod.updated`, `mod.status_changed`, `version.status_changed`. Jobs: `security.scan`,
`compat.aggregate`, `build.extract`, `media.process`. Every write sends `NOTIFY cache` in its
transaction and evicts the local LRU after commit; CDN purges follow the events.

## Anti-SSRF fetch (`media/ssrf.ts`)

Remote images of descriptions are replicated to R2 (`media/description.ts`, subscriber of
`mod.published`/`mod.updated`): https on port 443 only, no credentials, every resolved address
must be public (RFC 1918, loopback, link-local/metadata, CGNAT, ULA, multicast, reserved,
documentation, NAT64/6to4 and IPv4-mapped forms refused), the socket connects to the validated
address (no DNS rebinding), ≤ 3 redirects each re-validated, 10 MB and 5 s.
