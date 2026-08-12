#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REFS_DIR="$REPO_ROOT/refs"

clone() {
  local url="$1" dir="$2"
  if [ -d "$dir/.git" ]; then
    echo "skipping $dir (already cloned)"
  else
    echo "cloning $url -> $dir"
    git clone --depth 1 "$url" "$dir"
  fi
}

mkdir -p "$REFS_DIR"
clone "https://github.com/landscape-router/landscape-docs" "$REFS_DIR/landscape-docs"
clone "https://github.com/ThisSeanZhang/landscape" "$REFS_DIR/landscape"
