#!/usr/bin/env bash
# Regenerates api.Dockerfile and worker.Dockerfile (and their .dockerignore) from node.Dockerfile:
# Coolify builds from Git with one Dockerfile location per app, so each app gets a file whose
# defaults (SOTF_ROLE, PORT) are its own. Only the block between `@role-defaults` markers differs.
#
#   ops/docker/sync-dockerfiles.sh           rewrite the files
#   ops/docker/sync-dockerfiles.sh --check   exit 1 when they are out of date (CI, ci-local)
set -euo pipefail
cd "$(dirname "$0")"

check=0
[ "${1:-}" = "--check" ] && check=1
status=0

generate() { # <role> <port>
  local role="$1" port="$2" out="$1.Dockerfile"
  local tmp
  tmp="$(mktemp)"
  # The `# syntax=` parser directive must stay on line 1; the notice goes right after it.
  sed -e "s/^ARG SOTF_ROLE=api$/ARG SOTF_ROLE=${role}/" \
      -e "s/^ARG APP_PORT=3001$/ARG APP_PORT=${port}/" \
      -e "1a # GENERATED from node.Dockerfile by ops/docker/sync-dockerfiles.sh. Do not edit: change node.Dockerfile and re-run." \
      node.Dockerfile >"$tmp"
  if [ "$check" = 1 ]; then
    cmp -s "$tmp" "$out" || { echo "out of date: ops/docker/$out" >&2; status=1; }
    cmp -s node.Dockerfile.dockerignore "$out.dockerignore" || { echo "out of date: ops/docker/$out.dockerignore" >&2; status=1; }
    rm -f "$tmp"
  else
    mv "$tmp" "$out"
    cp node.Dockerfile.dockerignore "$out.dockerignore"
  fi
}

generate api 3001
generate worker 3002
exit "$status"
