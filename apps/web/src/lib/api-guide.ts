/**
 * The creator API guide (`/developers/api.md`) and the prompt for AI assistants shown in the
 * dashboard (`/dashboard/api`). One source for both, in English (the API's language), written for
 * people and for agents: every call is a real endpoint with the exact payload the API accepts.
 * Keep it in step with the contracts (uploads, studio, catalog).
 */

export function apiGuideMarkdown(siteUrl: string): string {
  const site = siteUrl.replace(/\/+$/, '');
  return `# SOTF Mods API for creators and AI agents

Upload mods, publish new versions, edit your listings and read your stats on SOTF Mods with an API key, without opening the website.

- Base URL: \`${site}\`, every endpoint is under \`/api/v2\`.
- API index: ${site}/api/v2
- OpenAPI 3.1 document: ${site}/api/v2/openapi.json (each operation lists the key scope it needs in \`x-sotf-token-scope\`)
- Interactive reference: ${site}/api/docs
- API catalog (RFC 9727): ${site}/.well-known/api-catalog

## 1. Get an API key

Create a key at ${site}/dashboard/api. It is shown once: store it like a password (an environment variable such as \`SOTF_API_KEY\`, never in a repository).

Choose the scopes the key needs:

| Scope | Allows |
|---|---|
| \`read\` | Your account, your mods and drafts, analytics, notifications, and every public read |
| \`mods:write\` | Uploads, new mods, new versions, listing and media edits |
| \`social:write\` | Comments, reviews, follows and compatibility reports |

A key acts as you, never as staff. It cannot change your password, email, sessions or keys.

Send it on every request:

\`\`\`
Authorization: Bearer sotfm_pat_...
\`\`\`

Check it works:

\`\`\`bash
curl -s ${site}/api/v2/me -H "Authorization: Bearer $SOTF_API_KEY"
\`\`\`

## 2. Conventions

- JSON in and out (\`Content-Type: application/json\` on bodies), camelCase fields, ISO 8601 times in UTC.
- Errors are RFC 9457 \`application/problem+json\`: \`{ "status", "code", "detail", "errors": [{ "path", "code", "message" }] }\`. Branch on \`code\`, not on the text.
- Lists take \`page\` (from 1) and \`pageSize\` (max 100) and answer \`{ items, total, page, pageSize, totalPages }\`.
- Every answer carries RateLimit headers. A \`429\` comes with \`Retry-After\`: wait that many seconds.
- \`401\`: the key is missing, expired or revoked. \`403\`: the key lacks the scope, or the mod is not yours.

## 3. Read your mods and stats

\`\`\`bash
# Your mods (ids, status, latest version)
curl -s "${site}/api/v2/studio/mods" -H "Authorization: Bearer $SOTF_API_KEY"

# One mod with its versions
curl -s "${site}/api/v2/studio/mods/MOD_ID" -H "Authorization: Bearer $SOTF_API_KEY"

# Totals and what needs your attention
curl -s "${site}/api/v2/studio/overview" -H "Authorization: Bearer $SOTF_API_KEY"

# Downloads, views and followers over time (range: 7d, 30d, 90d or all; granularity: day, week or month)
curl -s "${site}/api/v2/studio/analytics?range=30d&modId=MOD_ID" -H "Authorization: Bearer $SOTF_API_KEY"

# The same as CSV
curl -s "${site}/api/v2/studio/analytics.csv?range=90d" -H "Authorization: Bearer $SOTF_API_KEY"
\`\`\`

## 4. Upload a file

Every file (mod zip, build JSON, image) goes through the same three calls.

1. Ask for an upload. \`purpose\` is \`mod_file\`, \`build_file\` or \`image\`; \`size\` is the exact byte count.

\`\`\`bash
curl -s -X POST ${site}/api/v2/uploads \\
  -H "Authorization: Bearer $SOTF_API_KEY" -H "Content-Type: application/json" \\
  -d '{"purpose":"mod_file","filename":"MyMod-1.2.0.zip","size":123456,"contentType":"application/zip"}'
\`\`\`

The answer has \`upload.id\`, a presigned \`url\` and \`headers\`.

2. Send the bytes with \`PUT\` to \`url\`, with exactly the \`headers\` you received (no Authorization header):

\`\`\`bash
curl -s -X PUT "$URL" -H "Content-Type: application/zip" --data-binary @MyMod-1.2.0.zip
\`\`\`

Large files answer \`url: null\` and a \`multipart.parts\` list instead: \`PUT\` each part to its URL, keep each \`ETag\` response header, then send them in step 3 as \`{"parts":[{"partNumber":1,"etag":"..."}]}\`.

3. Confirm, then wait for the automatic checks:

\`\`\`bash
curl -s -X POST ${site}/api/v2/uploads/UPLOAD_ID/complete \\
  -H "Authorization: Bearer $SOTF_API_KEY" -H "Content-Type: application/json" -d '{}'

# Repeat every 2 seconds until status is "ready" (or "rejected")
curl -s ${site}/api/v2/uploads/UPLOAD_ID -H "Authorization: Bearer $SOTF_API_KEY"
\`\`\`

\`ready\` means the file passed. \`rejected\` explains why in \`inspection.flags\` (each with a \`code\` and a \`path\`): fix the file and upload again.

Sons of the Forest mods for RedLoader are a zip with a \`manifest.json\`: \`id\`, \`version\` (semver, for example \`1.2.0\`), and usually \`name\`, \`author\`, \`description\`, \`platform\` and \`dependencies\` (ids of required mods). Executables and scripts in the zip are held for a moderator. Limits: 200 MB per mod file (500 MB for verified creators).

## 5. Publish a new version

Upload the new zip (section 4), then:

\`\`\`bash
curl -s -X POST ${site}/api/v2/studio/mods/MOD_ID/versions \\
  -H "Authorization: Bearer $SOTF_API_KEY" -H "Content-Type: application/json" \\
  -d '{"uploadId":"UPLOAD_ID","changelogMd":"- Fixed the cooking pot false positive\\n- Faster startup"}'
\`\`\`

Rules: the manifest \`id\` must match the mod, and \`version\` must be greater than the latest one (\`version_not_greater\` otherwise). Optional fields: \`channel\` (\`release\` or \`beta\`), \`notifyFollowers\` (default true).

If the checks passed, the version is live at once (status \`active\`) and moderators look at it afterwards. A flagged file waits for a moderator (status \`pending\`).

## 6. Upload a new mod

1. Upload the zip (section 4). Optionally upload a cover image with \`purpose: "image"\`.
2. Create a draft with the listing:

\`\`\`bash
curl -s -X POST ${site}/api/v2/drafts \\
  -H "Authorization: Bearer $SOTF_API_KEY" -H "Content-Type: application/json" \\
  -d '{"kind":"mod","data":{
        "fileUploadId":"UPLOAD_ID",
        "slug":"my-mod",
        "name":"My Mod",
        "shortDescription":"One sentence that says what the mod does.",
        "descriptionMd":"## What it does\\n\\nDetails, controls and known issues.",
        "categorySlug":"quality-of-life",
        "tagSlugs":[],
        "license":"mit",
        "platform":"Client",
        "thumbnail":{"uploadId":"IMAGE_UPLOAD_ID"}
      }}'
\`\`\`

Allowed values: categories from \`GET /api/v2/categories?kind=mod\` (\`slug\`), tags from \`GET /api/v2/tags\`, \`license\` one of \`all-rights-reserved\`, \`reupload-with-credit\`, \`mit\`, \`gpl-3.0\`, \`cc-by-4.0\`, \`other\`; \`platform\` one of \`Client\`, \`Server\`, \`Universal\`. To change the draft before submitting, send the complete \`data\` again with \`PATCH /api/v2/drafts/DRAFT_ID\` (it replaces the previous one).

3. Submit it:

\`\`\`bash
curl -s -X POST ${site}/api/v2/drafts/DRAFT_ID/submit \\
  -H "Authorization: Bearer $SOTF_API_KEY" -H "Content-Type: application/json" -d '{}'
\`\`\`

The answer has \`modId\`, \`versionId\`, \`status\` and \`canonicalPath\`. The first mod of a creator who is not verified waits for a moderator (\`pending\`); verified creators publish at once.

## 7. Edit a listing

\`\`\`bash
curl -s -X PATCH ${site}/api/v2/studio/mods/MOD_ID \\
  -H "Authorization: Bearer $SOTF_API_KEY" -H "Content-Type: application/json" \\
  -d '{"shortDescription":"Clearer one-line summary.","descriptionMd":"## New description"}'
\`\`\`

Editable: \`name\`, \`shortDescription\`, \`descriptionMd\`, \`categorySlug\`, \`tagSlugs\`, \`license\`, \`sourceUrl\`, \`supportLinks\`, \`videoUrl\`, \`nsfw\`, \`platform\`, \`multiplayerRole\`, \`dedicatedServer\` and more (see \`UpdateStudioModBody\` in the OpenAPI document).

## 8. Prompt for AI assistants

Paste this into Claude, Codex or another coding assistant before asking it to work on your mod:

\`\`\`text
${agentPrompt(site)}
\`\`\`
`;
}

/**
 * What an AI coding assistant needs to work with a creator's mods on SOTF Mods. With `apiKey`
 * (only right after the key is created, the one time it is visible) the key itself goes in the
 * prompt; without it, the assistant reads it from the SOTF_API_KEY environment variable.
 */
export function agentPrompt(siteUrl: string, apiKey?: string): string {
  const site = siteUrl.replace(/\/+$/, '');
  const auth = apiKey
    ? `Auth: my API key is ${apiKey}. Send it as "Authorization: Bearer <key>". Store it in the SOTF_API_KEY environment variable for scripts; never print it, log it or commit it.`
    : 'Auth: my API key is in the environment variable SOTF_API_KEY. Send "Authorization: Bearer $SOTF_API_KEY". Never print it, log it or commit it.';
  return `You are helping me build and publish a Sons of the Forest mod on SOTF Mods (${site}).

API: ${site}/api/v2 (read it first; it links everything). Step-by-step guide: ${site}/developers/api.md. OpenAPI: ${site}/api/v2/openapi.json.
${auth}

Rules:
- Mods are RedLoader mods: a zip with manifest.json (id, version as semver, name, author, description, dependencies).
- To publish a new version: bump the semver in manifest.json, build the zip, then follow the guide: POST /api/v2/uploads, PUT the bytes to the returned url with the returned headers, POST /api/v2/uploads/{id}/complete, poll GET /api/v2/uploads/{id} until "ready", then POST /api/v2/studio/mods/{modId}/versions with uploadId and a short changelogMd.
- Find my mods and their ids with GET /api/v2/studio/mods. Read stats with GET /api/v2/studio/analytics.
- Errors are application/problem+json: read "code" and "errors[].path", fix the cause, do not retry blindly. On 429 wait for Retry-After.
- Ask me before publishing anything or changing a public listing. Show me the changelog first.`;
}
