#!/usr/bin/env bash
# Verifies the legacy hotfix patch series end to end, without touching the
# original repositories or production.
#
#   1. Clones sotf-mods-api@e0606b6 and sotf-mods-frontend@e8ba2dc into a temp dir
#      and applies the patches with apply.sh (`git am --keep-cr`, must apply
#      cleanly).
#   2. `bun build src/index.ts --target=bun` for both apps (bun 1.4 via npx).
#   3. Static checks: no reference to the retired file host, no `| safe`,
#      no "/preview", no unused legacy env vars.
#   4. Runtime XSS checks of the patched browser scripts (jsdom, verify/xss).
#   5. Starts a throwaway Postgres 16 (compose project "sotfv2-hotfix", port 27440),
#      `prisma@6.19.0 db push`, seeds verify/seed.sql, runs the patched API
#      (27441) and frontend (27442) and checks the 302 and its exact Location,
#      counting (real IP, GET only), 404/410 (JSON for tools, HTML for
#      browsers), the unapprove message, the escaped changelog and the default
#      og:image.
#   6. Confirms the original repositories are untouched.
#
# Everything is cleaned up on exit (KEEP_WORKDIR=1 keeps the temp dir).
# Requirements: git, docker (compose v2), node >= 24 with npx, curl, network
# access to the npm registry. Optional: VERIFY_R2_HEAD=1 also sends one HEAD
# request to the public R2 URL of the seeded object (never a download route).

set -Eeuo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PATCHES="$HERE/patches"

LEGACY_API_REPO="${LEGACY_API_REPO:-/root/sotf-mods/sotf-mods-api}"
LEGACY_FRONTEND_REPO="${LEGACY_FRONTEND_REPO:-/root/sotf-mods/sotf-mods-frontend}"
API_BASE_COMMIT="e0606b6"
FRONTEND_BASE_COMMIT="e8ba2dc"

BUN_VERSION="${BUN_VERSION:-1.4}"
PRISMA_VERSION="6.19.0"
COMPOSE_PROJECT="sotfv2-hotfix"
# Below the kernel's ephemeral range (ip_local_port_range, 32768-60999 by default): the former
# 474xx ports could collide with outgoing connections and failed once with EADDRINUSE.
# HOTFIX_{PG,API,FRONTEND}_PORT override them.
PG_PORT="${HOTFIX_PG_PORT:-27440}"
API_PORT="${HOTFIX_API_PORT:-27441}"
FRONTEND_PORT="${HOTFIX_FRONTEND_PORT:-27442}"
DATABASE_URL="postgresql://sotf@127.0.0.1:${PG_PORT}/sotf_hotfix?schema=public"

R2_BASE="https://r2.sotf-mods.com"
# Real production key: spaces and an apostrophe (see verify/seed.sql).
EXPECTED_LOCATION="${R2_BASE}/1766549349465_Regi's%20Modding%20Library.zip"
RETIRED_HOST_PATTERN='files\.sotf-mods\.com'

mkdir -p /tmp/sotf-legacy-hotfix
WORK="$(mktemp -d /tmp/sotf-legacy-hotfix/verify.XXXXXX)"
LOGS="$WORK/logs"
mkdir -p "$LOGS"
PIDS=()
FAILURES=0
CHECKS=0

BUN_BIN=""
bun() { "$BUN_BIN" "$@"; }
compose() { HOTFIX_PG_PORT="$PG_PORT" docker compose -p "$COMPOSE_PROJECT" -f "$HERE/verify/compose.yml" "$@"; }
psql_q() { compose exec -T postgres psql -U sotf -d sotf_hotfix -v ON_ERROR_STOP=1 -tAq -c "$1"; }

log() { printf '\n==> %s\n' "$*"; }
pass() { CHECKS=$((CHECKS + 1)); printf '  ok    %s\n' "$*"; }
fail() { CHECKS=$((CHECKS + 1)); FAILURES=$((FAILURES + 1)); printf '  FAIL  %s\n' "$*" >&2; }
check_eq() { # description expected actual
  if [[ "$2" == "$3" ]]; then pass "$1"; else fail "$1 (expected [$2], got [$3])"; fi
}
die() { printf 'ERROR: %s\n' "$*" >&2; exit 1; }

cleanup() {
  local status=$?
  for pid in "${PIDS[@]:-}"; do
    [[ -n "$pid" ]] && kill "$pid" 2>/dev/null || true
  done
  compose down -v --remove-orphans >/dev/null 2>&1 || true
  if [[ "${KEEP_WORKDIR:-0}" == "1" ]]; then
    echo "Work dir kept: $WORK"
  else
    rm -rf "$WORK"
  fi
  exit "$status"
}
trap cleanup EXIT

# Snapshot of an original repository: HEAD + porcelain status.
repo_state() { printf '%s\n%s' "$(git -C "$1" rev-parse HEAD)" "$(git -C "$1" status --porcelain)"; }

# Response headers of a request (curl never follows redirects here).
headers_of() { curl -sS -o /dev/null -D - "$@" | tr -d '\r'; }
status_of() { curl -sS -o /dev/null -w '%{http_code}' "$@"; }
header_value() { # name < headers
  awk -v name="$(tr '[:upper:]' '[:lower:]' <<<"$1")" -F': ' 'tolower($1) == name { sub(/^[^:]*: /, ""); print; exit }'
}

wait_for_http() { # url name
  for _ in $(seq 1 60); do
    if curl -s -o /dev/null "$1"; then return 0; fi
    sleep 0.5
  done
  echo "--- $2 log ---" >&2
  cat "$LOGS/$2.log" >&2 || true
  die "$2 did not start"
}

# ---------------------------------------------------------------------------
log "Preflight"
for cmd in git docker curl node npx awk; do
  command -v "$cmd" >/dev/null || die "missing command: $cmd"
done
for port in "$PG_PORT" "$API_PORT" "$FRONTEND_PORT"; do
  if (exec 3<>"/dev/tcp/127.0.0.1/$port") 2>/dev/null; then die "port $port is already in use"; fi
done
# Resolve the real bun executable once, so background servers are direct children.
BUN_BIN="$(npx -y "bun@${BUN_VERSION}" -e 'console.log(process.execPath)')"
[[ -x "$BUN_BIN" ]] || die "could not resolve bun ${BUN_VERSION}"
API_STATE_BEFORE="$(repo_state "$LEGACY_API_REPO")"
FRONTEND_STATE_BEFORE="$(repo_state "$LEGACY_FRONTEND_REPO")"
echo "  bun $(bun --version), node $(node --version), work dir $WORK"

# ---------------------------------------------------------------------------
log "1. Apply the patch series on fresh clones"
apply_series() { # target repo base
  local dir="$WORK/$1"
  git clone -q "$2" "$dir"
  git -C "$dir" checkout -q --detach "$3"
  if GIT_COMMITTER_NAME=verify GIT_COMMITTER_EMAIL=verify@localhost \
      "$HERE/apply.sh" "$1" "$dir" >"$LOGS/am-$1.log" 2>&1; then
    pass "apply.sh (git am --keep-cr) applies cleanly on $(basename "$2")@$3 ($(ls "$PATCHES/$1"/*.patch | wc -l) patches)"
  else
    cat "$LOGS/am-$1.log" >&2
    fail "git am on $(basename "$2")@$3"
    exit 1
  fi
}
apply_series api "$LEGACY_API_REPO" "$API_BASE_COMMIT"
apply_series frontend "$LEGACY_FRONTEND_REPO" "$FRONTEND_BASE_COMMIT"

# ---------------------------------------------------------------------------
log "2. Install and build with bun ${BUN_VERSION}"
for app in api frontend; do
  (cd "$WORK/$app" && bun install --frozen-lockfile >"$LOGS/install-$app.log" 2>&1) \
    || { cat "$LOGS/install-$app.log" >&2; die "bun install failed for $app"; }
  if (cd "$WORK/$app" && bun build src/index.ts --target=bun --outdir "$WORK/build-$app" >"$LOGS/build-$app.log" 2>&1); then
    pass "bun build src/index.ts --target=bun ($app)"
  else
    cat "$LOGS/build-$app.log" >&2
    fail "bun build ($app)"
  fi
done

# ---------------------------------------------------------------------------
log "3. Static checks on the patched trees"
for app in api frontend; do
  hits="$(git -C "$WORK/$app" grep -I -n -E "$RETIRED_HOST_PATTERN" -- . || true)"
  check_eq "0 references to the retired file host in $app" "" "$hits"
done
hits="$(git -C "$WORK/frontend" grep -n -E '\|[[:space:]]*safe' -- src/templates || true)"
check_eq "no '| safe' filter in frontend templates" "" "$hits"
hits="$(git -C "$WORK/frontend" grep -n -F "/preview" -- src || true)"
check_eq "no '/preview' image requests in frontend" "" "$hits"
hits="$(git -C "$WORK/api" grep -n -E 'KELVINGPT_API|FILE_UPLOAD_|FILE_PREVIEW_ENDPOINT' -- . || true)"
check_eq "no unused legacy env vars in api" "" "$hits"

# ---------------------------------------------------------------------------
log "4. Runtime XSS checks (jsdom)"
cp -R "$HERE/verify/xss" "$WORK/xss"
(cd "$WORK/xss" && bun install --frozen-lockfile >"$LOGS/install-xss.log" 2>&1) \
  || { cat "$LOGS/install-xss.log" >&2; die "bun install failed for xss checks"; }
if (cd "$WORK/xss" && PATCHED_FRONTEND="$WORK/frontend" node --test --test-reporter=dot xss.test.ts \
    >"$LOGS/xss.log" 2>&1); then
  pass "markdown sanitized with DOMPurify; mod cards, alerts and comments rendered as text"
else
  cat "$LOGS/xss.log" >&2
  fail "runtime XSS checks"
fi

# ---------------------------------------------------------------------------
log "5. Throwaway database, API and frontend"
compose up -d --wait >"$LOGS/compose.log" 2>&1 || { cat "$LOGS/compose.log" >&2; die "postgres did not start"; }
(cd "$WORK/api" \
  && DATABASE_URL="$DATABASE_URL" bun x "prisma@${PRISMA_VERSION}" generate >"$LOGS/prisma.log" 2>&1 \
  && DATABASE_URL="$DATABASE_URL" bun x "prisma@${PRISMA_VERSION}" db push --skip-generate >>"$LOGS/prisma.log" 2>&1) \
  || { cat "$LOGS/prisma.log" >&2; die "prisma db push failed"; }
compose exec -T postgres psql -U sotf -d sotf_hotfix -v ON_ERROR_STOP=1 -q <"$HERE/verify/seed.sql" >/dev/null
pass "schema pushed with prisma@${PRISMA_VERSION} and fixture seeded"

(cd "$WORK/api" && exec env TZ=UTC NODE_ENV=production PORT="$API_PORT" DATABASE_URL="$DATABASE_URL" \
  R2_PUBLIC_BASE_URL="$R2_BASE" R2_BUCKET_NAME=verify R2_ACCOUNT_ID=verify \
  RESEND_API_KEY=verify-placeholder GPT_API_KEY=verify-placeholder JWT_SECRET=verify-placeholder \
  "$BUN_BIN" src/index.ts >"$LOGS/api.log" 2>&1) &
PIDS+=($!)
(cd "$WORK/frontend" && exec env TZ=UTC NODE_ENV=production PORT="$FRONTEND_PORT" \
  API_URL="http://127.0.0.1:${API_PORT}" PUBLIC_API_URL="http://127.0.0.1:${API_PORT}" \
  "$BUN_BIN" src/index.ts >"$LOGS/frontend.log" 2>&1) &
PIDS+=($!)
API="http://127.0.0.1:${API_PORT}"
WEB="http://127.0.0.1:${FRONTEND_PORT}"
wait_for_http "$API/api/categories" api
wait_for_http "$WEB/ads.txt" frontend

downloads_of() { psql_q "SELECT downloads FROM \"Mod\" WHERE id = $1"; }
rows_of() { psql_q "SELECT count(*) FROM \"ModDownload\" WHERE \"modVersionId\" = $1"; }
last_row() { psql_q "SELECT ip || '|' || \"userAgent\" FROM \"ModDownload\" ORDER BY id DESC LIMIT 1"; }

check_redirect() { # description url [curl args...]
  local description="$1" url="$2"
  shift 2
  local h
  h="$(headers_of "$@" "$url")"
  check_eq "$description: status" "302" "$(head -n1 <<<"$h" | awk '{print $2}')"
  check_eq "$description: Location" "$EXPECTED_LOCATION" "$(header_value location <<<"$h")"
  check_eq "$description: Cache-Control" "no-store, private" "$(header_value cache-control <<<"$h")"
}

log "5a. API download routes"
check_redirect "API by slug with ?ip=&agent=" \
  "$API/api/mods/slug/regitoxic/regi%27s-modding-library/download/1.0.0?ip=203.0.113.7&agent=verify-api"
check_eq "ModDownload row with the ?ip= address" "203.0.113.7|verify-api" "$(last_row)"
check_redirect "API with an X-Forwarded-For list as ?ip= (unpatched frontend)" \
  "$API/api/mods/Regi_s_Modding_Library/download/1.0.0?ip=203.0.113.9,%2010.0.0.1&agent=verify-list"
check_eq "ModDownload row with the first ?ip= entry" "203.0.113.9|verify-list" "$(last_row)"
check_redirect "API by mod_id with CF-Connecting-IP" \
  "$API/api/mods/Regi_s_Modding_Library/download/1.0.0" -H 'CF-Connecting-IP: 198.51.100.23' -A 'verify-cf'
check_eq "ModDownload row with CF-Connecting-IP" "198.51.100.23|verify-cf" "$(last_row)"
check_redirect "API by mod_id with X-Forwarded-For" \
  "$API/api/mods/Regi_s_Modding_Library/download/1.0.0" -H 'X-Forwarded-For: 192.0.2.10, 10.0.0.1' -A 'verify-xff'
check_eq "ModDownload row with the first X-Forwarded-For hop" "192.0.2.10|verify-xff" "$(last_row)"
check_redirect "API with ip=undefined and no headers" \
  "$API/api/mods/Regi_s_Modding_Library/download/1.0.0?ip=undefined&agent=undefined" -A ''
check_eq "ModDownload row never stores \"undefined\"" "|" "$(last_row)"
check_redirect "API resumed Range request" \
  "$API/api/mods/Regi_s_Modding_Library/download/1.0.0" -H 'Range: bytes=100-'
check_eq "resumed Range request is not counted" "5" "$(rows_of 1)"
check_redirect "API Range probe bytes=0-0" \
  "$API/api/mods/Regi_s_Modding_Library/download/1.0.0" -H 'Range: bytes=0-0'
check_eq "Range probe bytes=0-0 is not counted" "5" "$(rows_of 1)"
check_redirect "API whole-file Range bytes=0-" \
  "$API/api/mods/Regi_s_Modding_Library/download/1.0.0" -H 'Range: bytes=0-' -A 'verify-range0'
check_eq "whole-file Range bytes=0- is counted" "6" "$(rows_of 1)"

log "5b. Frontend download proxy"
check_redirect "frontend /mods/:u/:s/download/:v (encoded apostrophe)" \
  "$WEB/mods/regitoxic/regi%27s-modding-library/download/1.0.0" \
  -H 'CF-Connecting-IP: 198.51.100.77' -A 'RedManager-verify'
check_eq "ModDownload row through the frontend" "198.51.100.77|RedManager-verify" "$(last_row)"
check_redirect "frontend /mods/:u/:s/download/:v (raw apostrophe)" \
  "$WEB/mods/regitoxic/regi's-modding-library/download/1.0.0" -H 'X-Forwarded-For: 192.0.2.99'
check_eq "ModDownload row through the frontend (X-Forwarded-For)" "192.0.2.99|curl/$(curl --version | awk 'NR==1{print $2}')" "$(last_row)"
check_redirect "API HEAD request" "$API/api/mods/Regi_s_Modding_Library/download/1.0.0" -I
check_redirect "frontend HEAD request" "$WEB/mods/regitoxic/regi%27s-modding-library/download/1.0.0" -I
check_eq "Mod.downloads matches counted requests (HEAD and Range not counted)" "8" "$(downloads_of 1)"
check_eq "ModDownload rows match counted requests" "8" "$(rows_of 1)"
LONG_AGENT="$(printf 'L%.0s' $(seq 1 8000))"
check_redirect "frontend with an 8000-character User-Agent" \
  "$WEB/mods/regitoxic/regi%27s-modding-library/download/1.0.0" -A "$LONG_AGENT"
check_eq "stored User-Agent is truncated to 512 characters" "512" \
  "$(psql_q "SELECT length(\"userAgent\") FROM \"ModDownload\" ORDER BY id DESC LIMIT 1")"

log "5c. Errors"
check_eq "API unknown version -> 404" "404" "$(status_of "$API/api/mods/Regi_s_Modding_Library/download/9.9.9")"
check_eq "API unknown version keeps the legacy envelope" '{"status":false,"error":"NOT_FOUND","message":"No se encontró el recurso."}' \
  "$(curl -sS "$API/api/mods/slug/regitoxic/regi%27s-modding-library/download/9.9.9")"
check_eq "frontend unknown version -> 404" "404" "$(status_of "$WEB/mods/regitoxic/regi%27s-modding-library/download/9.9.9")"
check_eq "frontend unknown mod -> 404" "404" "$(status_of "$WEB/mods/nobody/no-such-mod/download/1.0.0")"
check_eq "API retired file host -> 410" "410" "$(status_of "$API/api/mods/CompanionWardrobe/download/0.0.3")"
check_eq "frontend retired file host -> 410" "410" "$(status_of "$WEB/mods/regitoxic/virginia-wardrobe-18%2B/download/0.0.3")"
check_eq "frontend 404 keeps the JSON envelope for tools" '{"status":false,"error":"NOT_FOUND","message":"No se encontró el recurso."}' \
  "$(curl -sS "$WEB/mods/regitoxic/regi%27s-modding-library/download/9.9.9")"
BROWSER_ACCEPT='Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
for spec in "404|regi%27s-modding-library/download/9.9.9|Version not found" \
            "410|virginia-wardrobe-18%2B/download/0.0.3|File no longer available"; do
  IFS='|' read -r code route title <<<"$spec"
  h="$(curl -sS -D - -o "$WORK/error.html" -H "$BROWSER_ACCEPT" "$WEB/mods/regitoxic/$route" | tr -d '\r')"
  check_eq "frontend $code for a browser: status" "$code" "$(head -n1 <<<"$h" | awk '{print $2}')"
  check_eq "frontend $code for a browser: HTML page" "text/html; charset=utf-8" "$(header_value content-type <<<"$h")"
  if grep -qF "<h1>$title</h1>" "$WORK/error.html" && grep -qF 'href="/mods/regitoxic/' "$WORK/error.html"; then
    pass "frontend $code for a browser: message and link back to the mod"
  else
    fail "frontend $code for a browser: message and link back to the mod"
  fi
done
check_eq "errors are not counted (mod 1)" "9" "$(downloads_of 1)"
check_eq "errors are not counted (mod 2)" "0" "$(downloads_of 2)"
check_eq "no ModDownload row stores \"undefined\" or \"null\"" "0" \
  "$(psql_q "SELECT count(*) FROM \"ModDownload\" WHERE ip IN ('undefined', 'null') OR \"userAgent\" IN ('undefined', 'null')")"

log "5d. Moderation and rendering"
check_eq "unapprove answers \"Mod unapproved.\"" '{"status":true,"message":"Mod unapproved."}' \
  "$(curl -sS -H 'Authorization: Bearer verify-moderator-token' "$API/api/mods/Regi_s_Modding_Library/unapprove")"
page="$(curl -sS "$WEB/builds/reuploader/a-frame-house")"
if grep -qF '&lt;img src=x onerror=alert(1)&gt;' <<<"$page" && ! grep -qF '<img src=x onerror=alert(1)>' <<<"$page"; then
  pass "build changelog is HTML-escaped"
else
  fail "build changelog is HTML-escaped"
fi
if grep -qF 'content="https://sotf-mods.com/static/images/hd_thumbnail.png" property="og:image"' <<<"$page"; then
  pass "default og:image is /static/images/hd_thumbnail.png"
else
  fail "default og:image is /static/images/hd_thumbnail.png"
fi
check_eq "default og:image is served" "200" "$(status_of "$WEB/static/images/hd_thumbnail.png")"

if [[ "${VERIFY_R2_HEAD:-0}" == "1" ]]; then
  check_eq "R2 serves the redirect target (HEAD)" "200" "$(status_of -I "$EXPECTED_LOCATION")"
fi

# ---------------------------------------------------------------------------
log "6. Original repositories untouched"
check_eq "sotf-mods-api HEAD and status unchanged" "$API_STATE_BEFORE" "$(repo_state "$LEGACY_API_REPO")"
check_eq "sotf-mods-frontend HEAD and status unchanged" "$FRONTEND_STATE_BEFORE" "$(repo_state "$LEGACY_FRONTEND_REPO")"
check_eq "sotf-mods-api at $API_BASE_COMMIT with a clean tree" "$(git -C "$LEGACY_API_REPO" rev-parse "$API_BASE_COMMIT")" \
  "$(git -C "$LEGACY_API_REPO" rev-parse HEAD)$(git -C "$LEGACY_API_REPO" status --porcelain)"
check_eq "sotf-mods-frontend at $FRONTEND_BASE_COMMIT with a clean tree" "$(git -C "$LEGACY_FRONTEND_REPO" rev-parse "$FRONTEND_BASE_COMMIT")" \
  "$(git -C "$LEGACY_FRONTEND_REPO" rev-parse HEAD)$(git -C "$LEGACY_FRONTEND_REPO" status --porcelain)"

printf '\n%d checks, %d failed\n' "$CHECKS" "$FAILURES"
[[ "$FAILURES" -eq 0 ]]
