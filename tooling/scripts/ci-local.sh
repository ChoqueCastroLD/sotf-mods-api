#!/usr/bin/env bash
# `pnpm ci:local`: runs locally the same stages as .github/workflows/ci.yml (PLAN §10.2).
#
#   pnpm ci:local            all stages
#   pnpm ci:local --quick    skip the heavy stages (e2e, LHCI, docker images)
#   pnpm ci:local --no-install   reuse the current node_modules
#
# Stages whose owning work package has not landed yet are skipped with a notice
# (SOTF_OPTIONAL_TASKS=1, the local equivalent of `--if-present`).
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")/../.."

QUICK=0
INSTALL=1
for arg in "$@"; do
  case "$arg" in
    --quick) QUICK=1 ;;
    --no-install) INSTALL=0 ;;
    -h | --help)
      sed -n '2,9p' "$0" | sed 's/^# \{0,1\}//'
      exit 0
      ;;
    *)
      echo "unknown option: $arg" >&2
      exit 2
      ;;
  esac
done

export TZ=UTC
export CI=1
export TURBO_TELEMETRY_DISABLED=1
export SOTF_OPTIONAL_TASKS=1

declare -a SUMMARY=()
STARTED=$(date +%s)

stage() {
  local name="$1"
  shift
  local t0
  t0=$(date +%s)
  printf '\n\033[36m▶ %s\033[0m\n' "$name"
  if "$@"; then
    SUMMARY+=("✔ ${name} ($(($(date +%s) - t0))s)")
  else
    local status=$?
    SUMMARY+=("✘ ${name} ($(($(date +%s) - t0))s)")
    print_summary
    printf '\n\033[31mci:local failed at "%s" (exit %s)\033[0m\n' "$name" "$status" >&2
    exit "$status"
  fi
}

skip() {
  SUMMARY+=("- $1 (skipped: $2)")
  printf '\n\033[33m- %s skipped: %s\033[0m\n' "$1" "$2"
}

print_summary() {
  printf '\n\033[1mci:local summary\033[0m\n'
  for line in "${SUMMARY[@]}"; do printf '  %s\n' "$line"; done
}

e2e_stage() {
  local compose=(docker compose -p sotfv2-e2e -f ops/compose/e2e.yml)
  "${compose[@]}" up --detach --wait --wait-timeout 180
  local status=0
  pnpm e2e || status=$?
  "${compose[@]}" down --volumes --remove-orphans
  return "$status"
}

docker_stage() {
  local file
  for file in ops/docker/*.Dockerfile; do
    local name
    name=$(basename "$file" .Dockerfile)
    docker build --file "$file" --tag "sotfv2-ci/${name}:local" .
  done
}

if [[ $INSTALL -eq 1 ]]; then
  stage "install (frozen lockfile)" pnpm install --frozen-lockfile
fi
stage "1 biome ci" pnpm exec biome ci .
stage "2 check:forbidden" pnpm check:forbidden
stage "2b generated files and ownership map" bash -c 'node tooling/scripts/gen.ts --check && node tooling/scripts/gen-ownership.ts --check'
stage "2c check:ownership (wp/* branches)" node tooling/scripts/check-ownership.ts --optional
stage "3 i18n:check" pnpm i18n:check
stage "4 typecheck" pnpm exec turbo run typecheck --output-logs=errors-only
stage "5 unit tests" pnpm exec turbo run test --output-logs=errors-only
stage "6 integration tests" pnpm exec turbo run test:int --output-logs=errors-only
stage "7 db:guard" pnpm db:guard
stage "8 contract:legacy" pnpm contract:legacy
stage "9 build" pnpm exec turbo run build --output-logs=errors-only

if [[ $QUICK -eq 1 ]]; then
  skip "10 e2e" "--quick"
  skip "11 lhci" "--quick"
  skip "12 docker images" "--quick"
else
  if [[ -f ops/compose/e2e.yml ]]; then
    stage "10 e2e" e2e_stage
  else
    skip "10 e2e" "ops/compose/e2e.yml not delivered yet (WP-90)"
  fi
  stage "11 lhci" pnpm lhci
  if compgen -G "ops/docker/*.Dockerfile" >/dev/null; then
    stage "12 docker images" docker_stage
  else
    skip "12 docker images" "ops/docker/*.Dockerfile not delivered yet (WP-90)"
  fi
fi

print_summary
printf '\n\033[32mci:local passed in %ss\033[0m\n' "$(($(date +%s) - STARTED))"
