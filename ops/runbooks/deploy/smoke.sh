#!/usr/bin/env bash
# Every smoke test of an environment, in order (PLAN §10.2 release/deploy, §6.13 D6).
# GET/HEAD only (smoke-lib.sh). Exit code 0 only when every check passed.
#
#   ops/runbooks/deploy/smoke.sh staging      # https://beta.sotf-mods.com
#   ops/runbooks/deploy/smoke.sh production   # https://sotf-mods.com + https://api.sotf-mods.com
#   ops/runbooks/deploy/smoke.sh preflight    # https://next.sotf-mods.com (SMOKE_BASIC_AUTH=user:pass)
#   ops/runbooks/deploy/smoke.sh <site origin> [api origin]
#
# SMOKE_WAIT_FOR_SHA=<git sha>: first wait (up to SMOKE_WAIT_SECONDS, default 600) until the site
# /healthz reports that release, so the smoke never tests the previous containers.
set -Eeuo pipefail
HERE="$(dirname "${BASH_SOURCE[0]}")"

case "${1:-}" in
  staging) SITE=https://beta.sotf-mods.com API='' ENVIRONMENT=staging ;;
  production) SITE=https://sotf-mods.com API=https://api.sotf-mods.com ENVIRONMENT=production ;;
  preflight) SITE=https://next.sotf-mods.com API='' ENVIRONMENT=preflight ;;
  http://* | https://*) SITE="$1" API="${2:-}" ENVIRONMENT="" ;;
  *)
    sed -n '2,13p' "$0" | sed 's/^# \{0,1\}//'
    exit 2
    ;;
esac

if [[ -n "${SMOKE_WAIT_FOR_SHA:-}" ]]; then
  deadline=$(($(date +%s) + ${SMOKE_WAIT_SECONDS:-600}))
  printf 'waiting for %s/healthz to report %s' "$SITE" "$SMOKE_WAIT_FOR_SHA"
  until curl --silent --max-time 10 ${SMOKE_BASIC_AUTH:+--user "$SMOKE_BASIC_AUTH"} "$SITE/healthz" | grep -q "\"version\":\"$SMOKE_WAIT_FOR_SHA"; do
    if (($(date +%s) > deadline)); then
      printf '\n%s/healthz never reported %s\n' "$SITE" "$SMOKE_WAIT_FOR_SHA" >&2
      exit 1
    fi
    printf '.'
    sleep 10
  done
  printf ' ok\n'
fi

status=0
"$HERE/smoke-web.sh" "$SITE" ${ENVIRONMENT:+"$ENVIRONMENT"} || status=1
"$HERE/smoke-api.sh" "$SITE" ${API:+"$API"} || status=1
"$HERE/smoke-r2.sh" "$SITE" || status=1
exit "$status"
