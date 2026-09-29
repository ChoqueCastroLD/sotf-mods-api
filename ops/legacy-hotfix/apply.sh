#!/usr/bin/env bash
# Applies the legacy hotfix patch series to a local clone of a legacy repository.
#
#   ops/legacy-hotfix/apply.sh api      /path/to/sotf-mods-api      [branch]
#   ops/legacy-hotfix/apply.sh frontend /path/to/sotf-mods-frontend [branch]
#
# - Refuses to run on a dirty working tree or when the base commit
#   (api e0606b6, frontend e8ba2dc) is not in the current history.
# - Creates <branch> (default hotfix/legacy-downloads-xss) from the current
#   HEAD and applies the series with `git am --keep-cr` (some legacy files use
#   CRLF line endings; without --keep-cr the patches do not apply).
# - On failure it aborts the `git am` and switches back, leaving the repository
#   as it was (the new branch is deleted).
# Nothing is pushed: pushing and deploying stay manual (see README.md).

set -Eeuo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

usage() {
  echo "usage: $0 <api|frontend> <repo-path> [branch]" >&2
  exit 2
}

[[ $# -ge 2 && $# -le 3 ]] || usage
target="$1"
repo="$2"
branch="${3:-hotfix/legacy-downloads-xss}"

case "$target" in
  api) base="e0606b6" ;;
  frontend) base="e8ba2dc" ;;
  *) usage ;;
esac

patches=("$HERE/patches/$target"/*.patch)
[[ -f "${patches[0]}" ]] || { echo "no patches found in $HERE/patches/$target" >&2; exit 1; }

git -C "$repo" rev-parse --is-inside-work-tree >/dev/null 2>&1 || { echo "not a git repository: $repo" >&2; exit 1; }
if [[ -n "$(git -C "$repo" status --porcelain)" ]]; then
  echo "working tree of $repo is not clean; commit or stash first" >&2
  exit 1
fi
if ! git -C "$repo" merge-base --is-ancestor "$base" HEAD 2>/dev/null; then
  echo "base commit $base is not in the history of $repo HEAD (git pull first?)" >&2
  exit 1
fi
if git -C "$repo" rev-parse --verify --quiet "refs/heads/$branch" >/dev/null; then
  echo "branch $branch already exists in $repo" >&2
  exit 1
fi

previous="$(git -C "$repo" symbolic-ref --quiet --short HEAD || git -C "$repo" rev-parse HEAD)"
git -C "$repo" switch --quiet -c "$branch"

if git -C "$repo" am --keep-cr --whitespace=nowarn "${patches[@]}"; then
  echo "Applied ${#patches[@]} patches on branch $branch in $repo:"
  git -C "$repo" log --oneline "-${#patches[@]}"
else
  echo "git am failed; restoring $repo" >&2
  git -C "$repo" am --abort || true
  git -C "$repo" switch --quiet "$previous" 2>/dev/null || git -C "$repo" switch --quiet --detach "$previous"
  git -C "$repo" branch -D "$branch" >/dev/null
  exit 1
fi
