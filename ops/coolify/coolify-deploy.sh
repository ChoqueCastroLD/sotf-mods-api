#!/usr/bin/env bash
# Triggers Coolify deployments and waits for them (PLAN §10.2 release.yml / deploy.yml).
# Used by CI; the owner can run it by hand too. It never creates, edits or deletes resources: it
# only calls the deploy webhook and reads the deployment status.
#
#   COOLIFY_URL=https://coolify.example.com COOLIFY_TOKEN=… \
#     ops/coolify/coolify-deploy.sh <app-uuid>[,<app-uuid>…] [--timeout 900]
#
#   1. GET  $COOLIFY_URL/api/v1/deploy?uuid=<uuids>&force=false   (the "Deploy Webhook" of each app,
#      Bearer token with the "deploy" permission) → one deployment_uuid per app;
#   2. GET  $COOLIFY_URL/api/v1/deployments/<deployment_uuid>      every 10 s until every deployment
#      is `finished` (exit 0) or one is `failed` / `cancelled-by-user` / the timeout expires (exit 1).
#
# Several uuids deploy in parallel (e.g. api + worker + web). A Coolify deployment only finishes
# after the new container passed its health check (rolling update), so "finished" means healthy.
set -Eeuo pipefail

usage() {
  sed -n '2,15p' "$0" | sed 's/^# \{0,1\}//'
  exit 2
}

UUIDS="${1:-}"
[[ -n "$UUIDS" && "$UUIDS" != -* ]] || usage
shift
TIMEOUT=900
while (($# > 0)); do
  case "$1" in
    --timeout) TIMEOUT="${2:?}"; shift 2 ;;
    *) usage ;;
  esac
done

: "${COOLIFY_URL:?COOLIFY_URL is required (https://<your coolify>)}"
: "${COOLIFY_TOKEN:?COOLIFY_TOKEN is required (API token with the deploy permission)}"
COOLIFY_URL="${COOLIFY_URL%/}"
command -v jq > /dev/null || { echo "jq is required" >&2; exit 2; }

api() {
  curl --silent --show-error --fail-with-body --max-time 30 \
    --header "Authorization: Bearer $COOLIFY_TOKEN" --header 'Accept: application/json' "$@"
}

echo "deploying $UUIDS"
response="$(api --get "$COOLIFY_URL/api/v1/deploy" --data-urlencode "uuid=$UUIDS" --data-urlencode 'force=false')"
mapfile -t deployments < <(printf '%s' "$response" | jq -r '.deployments[]? | "\(.deployment_uuid) \(.resource_uuid)"')
if ((${#deployments[@]} == 0)); then
  echo "Coolify did not start any deployment: $response" >&2
  exit 1
fi
for line in "${deployments[@]}"; do echo "  started deployment ${line%% *} (app ${line##* })"; done

deadline=$(($(date +%s) + TIMEOUT))
declare -A done_status=()
while :; do
  pending=0
  for line in "${deployments[@]}"; do
    id="${line%% *}"
    [[ -n "${done_status[$id]:-}" ]] && continue
    status="$(api "$COOLIFY_URL/api/v1/deployments/$id" | jq -r '.status // "unknown"')" || status=unknown
    case "$status" in
      finished)
        done_status[$id]=finished
        echo "  ✔ deployment $id finished (app ${line##* })"
        ;;
      failed | cancelled-by-user | cancelled)
        echo "  ✘ deployment $id $status (app ${line##* }); see the deployment log in Coolify" >&2
        exit 1
        ;;
      *) pending=$((pending + 1)) ;;
    esac
  done
  ((pending == 0)) && break
  if (($(date +%s) > deadline)); then
    echo "timeout: $pending deployment(s) still running after ${TIMEOUT}s" >&2
    exit 1
  fi
  sleep 10
done
echo "all deployments finished"
