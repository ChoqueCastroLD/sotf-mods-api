#!/usr/bin/env bash
# Smoke test of the API after a deploy (PLAN §10.2, §6.13 D6): v2 + the legacy surface that
# RedManager, UpdatesChecker and the old frontend call. GET/HEAD only; never a download, favorite,
# approve or KelvinSeek route (smoke-lib.sh refuses them).
#
#   ops/runbooks/deploy/smoke-api.sh https://beta.sotf-mods.com            # same origin (/api)
#   ops/runbooks/deploy/smoke-api.sh https://sotf-mods.com https://api.sotf-mods.com
#
# The first argument is the site origin (the API answers under /api on the same origin); the
# optional second one is the API host (api.sotf-mods.com in production), checked as well.
# Optional: SMOKE_MOD_ID (default AxelModMenu) and SMOKE_MOD_PATH (default imaxel/axel's-mod-menu).
set -Eeuo pipefail
# shellcheck source=ops/runbooks/deploy/smoke-lib.sh
source "$(dirname "${BASH_SOURCE[0]}")/smoke-lib.sh"

SITE="${1:?usage: smoke-api.sh <site origin> [api origin]}"
SITE="${SITE%/}"
API_HOST="${2:-}"
API_HOST="${API_HOST%/}"
MOD_ID="${SMOKE_MOD_ID:-AxelModMenu}"
DEFAULT_MOD_PATH="imaxel/axel's-mod-menu"
MOD_PATH="${SMOKE_MOD_PATH:-$DEFAULT_MOD_PATH}"
USER_SLUG="${MOD_PATH%%/*}"
MOD_SLUG="${MOD_PATH#*/}"

check_origin() {
  local origin="$1" label="$2"
  printf '\napi smoke: %s (%s)\n' "$origin" "$label"

  # v2
  expect "[$label] GET /api/v2/openapi.json" GET "$origin/api/v2/openapi.json" 200 '"openapi":"3\.1'
  expect "[$label] GET /api/v2/mods" GET "$origin/api/v2/mods" 200 '"items"'
  expect_header "[$label] v2 public GET is edge-cacheable" cloudflare-cdn-cache-control 'max-age='
  expect_header "[$label] v2 public GET carries cache tags" cache-tag '.'
  expect "[$label] GET /api/v2/mods/by-slug/$MOD_PATH" GET \
    "$origin/api/v2/mods/by-slug/$(smoke_encode "$USER_SLUG")/$(smoke_encode "$MOD_SLUG")" 200 '"slug"'
  expect "[$label] unknown v2 mod → 404 problem+json" GET "$origin/api/v2/mods/by-slug/nobody-xyz-123/nothing-xyz-123" 404
  expect_header "[$label] errors are problem+json" content-type 'application/problem\+json'

  # Legacy surface (byte-compatible contract, PLAN §5): the reads of RedManager and UpdatesChecker.
  expect "[$label] GET /api/mods (RedManager page 1)" GET \
    "$origin/api/mods?&approved=true&orderby=newest&page=1&nsfw=false" 200 '^\{"status":true'
  expect_header "[$label] legacy JSON content type" content-type '^application/json'
  expect_header "[$label] legacy reads are cacheable" cache-control 'public'
  expect "[$label] GET /api/mods?modIds (UpdatesChecker)" GET "$origin/api/mods?limit=5&modIds=$MOD_ID" 200 "\"mod_id\":\"$MOD_ID\""
  expect "[$label] GET /api/mods/$MOD_ID" GET "$origin/api/mods/$MOD_ID" 200 '"versions":\['
  expect "[$label] GET /api/mods/$MOD_ID/check" GET "$origin/api/mods/$MOD_ID/check?version=0.0.1" 200 '"status":true'
  expect "[$label] GET /api/mods/slug/$MOD_PATH" GET \
    "$origin/api/mods/slug/$(smoke_encode "$USER_SLUG")/$(smoke_encode "$MOD_SLUG")" 200 '"status":true'
  expect "[$label] GET /api/mods/featured" GET "$origin/api/mods/featured" 200 '"status":true'
  expect "[$label] GET /api/categories" GET "$origin/api/categories" 200 '"status":true'
  expect "[$label] GET /api/stats" GET "$origin/api/stats" 200 '"status":true'
  expect "[$label] GET /api/users/$USER_SLUG" GET "$origin/api/users/$(smoke_encode "$USER_SLUG")" 200 '"status":true'
  expect "[$label] unknown legacy mod → 404" GET "$origin/api/mods/DoesNotExist123" 404 '"status":false'
  expect "[$label] unknown legacy route → 404" GET "$origin/api/nonexistent-route" 404
}

check_origin "$SITE" 'same origin'

if [[ -n "$API_HOST" ]]; then
  check_origin "$API_HOST" 'api host'
  printf '\n'
  expect '[api host] GET /healthz' GET "$API_HOST/healthz" 200 '"status":"ok"'
  expect_header '[api host] /healthz is never cached' cache-control 'no-store'
  expect '[api host] GET /readyz' GET "$API_HOST/readyz" 200 '"status":"ok"'
fi

smoke_summary "api smoke ($SITE${API_HOST:+, $API_HOST})"
