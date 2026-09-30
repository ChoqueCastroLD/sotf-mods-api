#!/usr/bin/env bash
# Smoke test of the web app after a deploy (PLAN §10.2 release/deploy, §6.13 D6). GET/HEAD only.
#
#   ops/runbooks/deploy/smoke-web.sh https://beta.sotf-mods.com [staging|production]
#
# The second argument (default: production when the host is sotf-mods.com, staging otherwise)
# decides the indexing checks: anything but production must answer `X-Robots-Tag: noindex`.
# Optional: SMOKE_MOD_PATH (default "imaxel/axel's-mod-menu"), a mod page that must exist.
set -Eeuo pipefail
# shellcheck source=ops/runbooks/deploy/smoke-lib.sh
source "$(dirname "${BASH_SOURCE[0]}")/smoke-lib.sh"

BASE="${1:?usage: smoke-web.sh <site origin, e.g. https://beta.sotf-mods.com> [staging|production]}"
BASE="${BASE%/}"
HOST="$(printf '%s' "$BASE" | sed -E 's#^[a-z]+://##; s#/.*$##')"
ENVIRONMENT="${2:-$([[ "$HOST" == sotf-mods.com ]] && echo production || echo staging)}"
DEFAULT_MOD_PATH="imaxel/axel's-mod-menu"
MOD_PATH="${SMOKE_MOD_PATH:-$DEFAULT_MOD_PATH}"
MOD_URL="$BASE/mods/$(smoke_encode "${MOD_PATH%%/*}")/$(smoke_encode "${MOD_PATH#*/}")"

printf 'web smoke: %s (%s)\n' "$BASE" "$ENVIRONMENT"

expect 'GET /healthz' GET "$BASE/healthz" 200 '"status":"ok"'
expect_header '/healthz is never cached' cache-control 'no-store'
expect 'HEAD /healthz' HEAD "$BASE/healthz" 200

expect 'GET / (landing)' GET "$BASE/" 200 '<html[^>]* lang="en"'
expect_header 'HTML revalidates in the browser' cache-control 'max-age=0'
expect_header 'nosniff' x-content-type-options 'nosniff'
expect_header 'clickjacking protection' content-security-policy "frame-ancestors"
expect_header 'referrer policy' referrer-policy 'strict-origin-when-cross-origin'
if [[ "$ENVIRONMENT" == production ]]; then
  expect_no_header 'production is indexable' x-robots-tag
else
  expect_header "$ENVIRONMENT is not indexable" x-robots-tag 'noindex'
fi

# A fingerprinted asset referenced by the landing must be immutable (deploy skew, PLAN §2.7).
ASSET="$(grep -oE '/_astro/[A-Za-z0-9._@-]+\.(css|js)' "$SMOKE_BODY" | head -n 1 || true)"
if [[ -n "$ASSET" ]]; then
  expect "HEAD $ASSET" HEAD "$BASE$ASSET" 200
  expect_header 'hashed assets are immutable' cache-control 'immutable'
else
  smoke_fail 'the landing references a /_astro/ asset' 'no /_astro/*.css|js link found in the HTML'
fi

expect 'GET /es (localized landing)' GET "$BASE/es" 200 '<html[^>]* lang="es"'
expect 'GET /mods (explore)' GET "$BASE/mods" 200 '<h1'
expect "GET /mods/$MOD_PATH" GET "$MOD_URL" 200 'application/ld\+json'
expect 'GET /builds' GET "$BASE/builds" 200 '<h1'
expect 'GET /robots.txt' GET "$BASE/robots.txt" 200 'User-agent'
if [[ "$ENVIRONMENT" == production ]]; then
  expect 'robots.txt lists the sitemap' GET "$BASE/robots.txt" 200 'Sitemap: https://sotf-mods.com/sitemap.xml'
fi
expect 'GET /sitemap.xml' GET "$BASE/sitemap.xml" 200 '<(sitemapindex|urlset)'
expect 'GET /feed.xml' GET "$BASE/feed.xml" 200 '<(rss|feed)'
expect 'GET /llms.txt' GET "$BASE/llms.txt" 200 'SOTF'
expect 'unknown page → 404' GET "$BASE/this-page-does-not-exist-$(date +%s)" 404
expect_redirect 'trailing slash → 301' "$BASE/mods/" 301 "/mods\$"
expect_redirect '/en prefix → 301' "$BASE/en/mods" 301 "/mods\$"
if [[ "$ENVIRONMENT" == production ]]; then
  expect_redirect 'www → apex (Cloudflare Redirect Rule)' "https://www.sotf-mods.com/mods?page=2" 301 "^https://sotf-mods\.com/mods\?page=2\$"
fi

smoke_summary "web smoke ($BASE)"
