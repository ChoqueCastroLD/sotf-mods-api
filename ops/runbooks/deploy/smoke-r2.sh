#!/usr/bin/env bash
# Smoke test of the public media origin (r2.sotf-mods.com, PLAN §11.6). HEAD only.
#
#   ops/runbooks/deploy/smoke-r2.sh https://sotf-mods.com [https://r2.sotf-mods.com]
#
# Reads the thumbnail URL of SMOKE_MOD_ID (default AxelModMenu) from the legacy API of the site
# and sends one HEAD to it (a media object, never a mod file or a download route). With
# SMOKE_EXPECT_IMMUTABLE=1 (after D5, when the 1-year Cache Rule of `r2.` is on) the browser TTL
# must be one year.
set -Eeuo pipefail
# shellcheck source=ops/runbooks/deploy/smoke-lib.sh
source "$(dirname "${BASH_SOURCE[0]}")/smoke-lib.sh"

SITE="${1:?usage: smoke-r2.sh <site origin> [r2 origin]}"
SITE="${SITE%/}"
R2="${2:-https://r2.sotf-mods.com}"
R2="${R2%/}"
MOD_ID="${SMOKE_MOD_ID:-AxelModMenu}"

printf 'r2 smoke: %s via %s\n' "$R2" "$SITE"

smoke_request GET "$SITE/api/mods/$MOD_ID"
IMAGE="$(grep -oE '"imageUrl":"[^"]+"' "$SMOKE_BODY" | head -n 1 | sed -E 's/^"imageUrl":"//; s/"$//' || true)"
if [[ -z "$IMAGE" || "$IMAGE" != "$R2/"* ]]; then
  smoke_fail "thumbnail of $MOD_ID is served from $R2" "imageUrl: '${IMAGE}'"
  smoke_summary 'r2 smoke'
  exit 1
fi
# Keys contain spaces and apostrophes (research/02): encode everything after the origin.
KEY="${IMAGE#"$R2/"}"
URL="$R2/$(smoke_encode "$KEY")"
expect "HEAD thumbnail of $MOD_ID" HEAD "$URL" 200
expect_header 'thumbnail is an image' content-type '^image/'
if [[ "${SMOKE_EXPECT_IMMUTABLE:-0}" == 1 ]]; then
  expect_header 'r2 objects are cached for a year' cache-control 'max-age=31536000'
fi

smoke_summary "r2 smoke ($R2)"
