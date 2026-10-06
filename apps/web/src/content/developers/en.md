---
title: SOTF Mods API for developers
description: Build on the SOTF Mods catalogue: public v2 read API with OpenAPI, errors, pagination, caching and limits, a mod manager integration guide and the legacy API schedule.
anchors: [overview, format, errors, pagination, caching, mod-manager, downloads, updates, support]
---

# Overview

The SOTF Mods API is public and read-only for anonymous clients: the whole catalogue of Sons of the Forest mods, libraries and builds, with versions, dependencies and compatibility per game build.

- **Base URL:** `https://api.sotf-mods.com/api/v2` for third-party clients (also served on `https://sotf-mods.com/api/v2`).
- **Reference:** every endpoint, parameter and schema is in the [interactive reference](/api/docs), generated from the same contracts the server runs on. The raw spec is at [`/api/v2/openapi.json`](/api/v2/openapi.json) (OpenAPI 3.1).
- **No key needed** for public reads. Please send a descriptive `User-Agent` with a contact URL, so we can reach you before blocking a misbehaving client.

# Format

- JSON in UTF-8 with `camelCase` fields.
- Dates are ISO 8601 in UTC with a `Z` (`2026-09-30T12:00:00.000Z`); calendar dates are `YYYY-MM-DD`.
- Ids of mods, versions and users are integers and stable. The id from a mod's `manifest.json` is exposed as `manifestId`.
- Changes inside v2 are **additive only**: new fields and endpoints may appear, existing ones don't change meaning. Ignore fields you don't know. A breaking change would ship as `/api/v3`.

# Errors

Errors follow RFC 9457 (`application/problem+json`):

```json
{"type":"https://sotf-mods.com/developers/errors#not-found","title":"Not found","status":404,"detail":"No mod with id 99999","code":"NOT_FOUND","requestId":"01J…"}
```

Branch on `code` (stable), not on `title` or `detail` (human text). Common codes: `VALIDATION_FAILED` (422, with an `errors` list), `NOT_FOUND` (404), `GONE` (410), `RATE_LIMITED` (429, with `Retry-After`) and `UNAVAILABLE` (503). Quote the `requestId` when you report a problem.

# Pagination

- **Catalogue lists** use pages: `?page=1&pageSize=24` (up to 100) and answer `{ items, page, pageSize, total, totalPages }`.
- **Feeds** (comments, reviews) use cursors: `?limit=20&cursor=…` and answer `{ items, nextCursor }`. Treat the cursor as opaque and stop when `nextCursor` is `null`.

# Caching

Public responses carry `Cache-Control`, an `ETag` and are cached at our edge. Send `If-None-Match` with the last `ETag` and you get an empty `304 Not Modified` when nothing changed. It doesn't count against your limits in any meaningful way and makes your client fast. Don't poll more often than every few minutes; catalogue data rarely changes faster than that.

CORS is open (`Access-Control-Allow-Origin: *`, without credentials) on public reads, so browser apps can call the API directly.

# Integrate a mod manager

The typical flow for a launcher or mod manager:

1. **List and search** with `GET /mods` (`q`, `type`, `category`, `sort`, `page`). Each item is a card with `latestVersion`, `compatStatus` and `canonicalPath`.
2. **Show the details** with `GET /mods/{id}` or `GET /mods/by-slug/{user}/{slug}`; to match a mod already installed on disk, use `GET /mods/by-manifest/{manifestId}` with the id from its `manifest.json`.
3. **Resolve dependencies** with `GET /mods/{id}/dependencies`. Install `required` ones first, recursively, and warn about `conflicts`. Libraries are regular items with `kind: "library"`.
4. **Pick a version** with `GET /mods/{id}/versions`. Prefer the latest stable version; offer betas only if the user opts in.
5. **Check compatibility** with `GET /mods/{id}/compat` and `GET /game-builds` or `GET /ecosystem` to tell users whether a mod works on their game build before they install it.
6. **Download** through the mod's download URL (see below), extract into the game folder and record the version you installed.
7. **Check for updates** by comparing the installed version with `latestVersion` (semver), a few times a day at most.

Link users back to the mod page (`https://sotf-mods.com` + `canonicalPath`) so they can read the description, report problems and support the creator.

# Downloads

Download a version with `GET https://sotf-mods.com/mods/{user}/{slug}/download/{version}`. It answers `302` to the file on our storage; follow redirects. Downloads are never rate-limited with a `429`: above the fair-use threshold they still work but are not counted in the statistics. Please download once per install, not on every launch.

# Staying up to date

Changes to the API are announced in [News](/news) and in its [RSS feed](/news/feed.xml). Deprecated routes answer with `Deprecation` and `Sunset` headers and a `Link` to this page months before they are retired.

# Support

Found a bug or need an endpoint? Ask in the developers channel of our [Discord](https://discord.gg/sotf) or open an issue on [GitHub](https://github.com/ChoqueCastroLD/sotf-mods-api). Report security issues privately through GitHub Security Advisories.
