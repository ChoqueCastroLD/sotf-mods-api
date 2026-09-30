#!/usr/bin/env bash
# Shared helpers of the smoke scripts (ops/runbooks/deploy/smoke-*.sh). Source it; do not run it.
#
# Safety rules (PLAN §12.1, hard rules of the project), enforced here and not only by convention:
#   - only GET and HEAD requests, never a body;
#   - never a download, favorite, approve/unapprove or KelvinSeek route (they count, mutate or
#     cost money): `smoke_guard` refuses such URLs before any request is sent;
#   - no credentials, no cookies are stored or sent.
#
# Environment:
#   SMOKE_TIMEOUT   seconds per request (default 20)
#   SMOKE_RETRIES   extra attempts on network errors and 5xx (default 2, 3 s apart)
#   SMOKE_UA        User-Agent (default "sotf-smoke/1 (+https://sotf-mods.com)")
#   SMOKE_VERBOSE=1 print every response header block
#   SMOKE_BASIC_AUTH "user:password" for a protected preflight host (next.sotf-mods.com)

set -Eeuo pipefail

SMOKE_TIMEOUT="${SMOKE_TIMEOUT:-20}"
SMOKE_RETRIES="${SMOKE_RETRIES:-2}"
SMOKE_UA="${SMOKE_UA:-sotf-smoke/1 (+https://sotf-mods.com)}"
SMOKE_PASS=0
SMOKE_FAIL=0
SMOKE_TMP="$(mktemp -d "${TMPDIR:-/tmp}/sotf-smoke.XXXXXX")"
trap 'rm -rf "$SMOKE_TMP"' EXIT

if [[ -t 1 ]]; then
  C_OK=$'\033[32m'; C_BAD=$'\033[31m'; C_DIM=$'\033[2m'; C_OFF=$'\033[0m'
else
  C_OK=''; C_BAD=''; C_DIM=''; C_OFF=''
fi

smoke_die() {
  printf '%s\n' "$*" >&2
  exit 2
}

command -v curl > /dev/null || smoke_die "curl is required"

# Refuses any URL of a route that counts, mutates or costs money.
smoke_guard() {
  local url="$1" path
  path="$(printf '%s' "$url" | sed -E 's#^[a-z]+://[^/]+##; s#[?#].*$##' | tr '[:upper:]' '[:lower:]')"
  case "$path" in
    */download | */download/* | */favorite | */favorite/* | /api/favorites* | */approve | */unapprove | \
      */kelvinseek* | */kelvin-gpt* | */api/v2/e | */api/v2/e/* | */_internal/* | */internal/*)
      smoke_die "smoke_guard: refusing $url (download/favorite/approve/KelvinSeek/internal routes are never called)"
      ;;
  esac
}

# smoke_request <GET|HEAD> <url> → sets SMOKE_STATUS, SMOKE_HEADERS (file), SMOKE_BODY (file).
smoke_request() {
  local method="$1" url="$2" attempt=0
  [[ "$method" == GET || "$method" == HEAD ]] || smoke_die "smoke_request: only GET and HEAD are allowed (got $method)"
  smoke_guard "$url"
  SMOKE_HEADERS="$SMOKE_TMP/headers"
  SMOKE_BODY="$SMOKE_TMP/body"
  local -a args=(--silent --show-error --max-time "$SMOKE_TIMEOUT" --user-agent "$SMOKE_UA"
    --dump-header "$SMOKE_HEADERS" --output "$SMOKE_BODY" --write-out '%{http_code}' --compressed)
  [[ "$method" == HEAD ]] && args+=(--head)
  [[ -n "${SMOKE_BASIC_AUTH:-}" ]] && args+=(--user "$SMOKE_BASIC_AUTH")
  while :; do
    : > "$SMOKE_HEADERS"
    : > "$SMOKE_BODY"
    SMOKE_STATUS="$(curl "${args[@]}" "$url" 2> "$SMOKE_TMP/stderr" || true)"
    if [[ "$SMOKE_STATUS" =~ ^[1-4][0-9][0-9]$ ]] || ((attempt >= SMOKE_RETRIES)); then break; fi
    attempt=$((attempt + 1))
    sleep 3
  done
  [[ "${SMOKE_VERBOSE:-0}" == 1 ]] && sed "s/^/${C_DIM}  < /; s/\$/${C_OFF}/" "$SMOKE_HEADERS"
  return 0
}

smoke_pass() {
  SMOKE_PASS=$((SMOKE_PASS + 1))
  printf '%s✔%s %s\n' "$C_OK" "$C_OFF" "$1"
}

smoke_fail() {
  SMOKE_FAIL=$((SMOKE_FAIL + 1))
  printf '%s✘ %s%s\n' "$C_BAD" "$1" "$C_OFF"
  [[ -n "${2:-}" ]] && printf '    %s\n' "$2"
  return 0
}

# Value of a response header of the last request (case-insensitive, last occurrence).
smoke_header() {
  grep -i "^$1:" "$SMOKE_HEADERS" | tail -n 1 | sed -E 's/^[^:]+:[[:space:]]*//; s/\r$//'
}

# expect <label> <method> <url> <status> [body-regex] — status (and optionally body) must match.
expect() {
  local label="$1" method="$2" url="$3" want="$4" pattern="${5:-}"
  smoke_request "$method" "$url"
  if [[ "$SMOKE_STATUS" != "$want" ]]; then
    smoke_fail "$label" "$method $url → $SMOKE_STATUS (expected $want) $(head -c 200 "$SMOKE_TMP/stderr" 2> /dev/null)"
    return 0
  fi
  if [[ -n "$pattern" ]] && ! grep -Eq -- "$pattern" "$SMOKE_BODY"; then
    smoke_fail "$label" "$method $url → $SMOKE_STATUS but the body does not match /$pattern/"
    return 0
  fi
  smoke_pass "$label ($SMOKE_STATUS)"
}

# expect_header <label> <header> <regex> — on the last response.
expect_header() {
  local label="$1" name="$2" pattern="$3" value
  value="$(smoke_header "$name")"
  if printf '%s' "$value" | grep -Eiq -- "$pattern"; then
    smoke_pass "$label"
  else
    smoke_fail "$label" "$name: '${value}' does not match /$pattern/"
  fi
}

# expect_no_header <label> <header> — on the last response.
expect_no_header() {
  local label="$1" name="$2"
  if [[ -z "$(smoke_header "$name")" ]]; then smoke_pass "$label"; else smoke_fail "$label" "unexpected $name: $(smoke_header "$name")"; fi
}

# expect_redirect <label> <url> <status> <location-regex> — HEAD, redirects not followed.
expect_redirect() {
  local label="$1" url="$2" want="$3" pattern="$4"
  smoke_request HEAD "$url"
  if [[ "$SMOKE_STATUS" == "$want" ]] && smoke_header location | grep -Eq -- "$pattern"; then
    smoke_pass "$label ($SMOKE_STATUS → $(smoke_header location))"
  else
    smoke_fail "$label" "HEAD $url → $SMOKE_STATUS location '$(smoke_header location)' (expected $want /$pattern/)"
  fi
}

# Percent-encodes a path segment (apostrophes and spaces appear in real slugs and keys).
smoke_encode() {
  local LC_ALL=C s="$1" out='' c i
  for ((i = 0; i < ${#s}; i++)); do
    c="${s:i:1}"
    case "$c" in
      [a-zA-Z0-9.~_-]) out+="$c" ;;
      *) out+="$(printf '%%%02X' "'$c")" ;;
    esac
  done
  printf '%s' "$out"
}

smoke_summary() {
  printf '\n%s: %s passed, %s failed\n' "${1:-smoke}" "$SMOKE_PASS" "$SMOKE_FAIL"
  ((SMOKE_FAIL == 0))
}
