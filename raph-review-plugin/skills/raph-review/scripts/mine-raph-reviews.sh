#!/usr/bin/env bash
set -euo pipefail

# Mines a reviewer's review comments on an author's PRs into a markdown corpus.
# Requires: gh (authenticated), jq.
#
# Usage: mine-raph-reviews.sh [output-file]
#   REVIEWER=bosiraphael AUTHOR=ehconitin REPO=twentyhq/twenty LIMIT=120 mine-raph-reviews.sh corpus.md

REVIEWER="${REVIEWER:-bosiraphael}"
AUTHOR="${AUTHOR:-ehconitin}"
REPO="${REPO:-twentyhq/twenty}"
LIMIT="${LIMIT:-120}"
OUTPUT="${1:-raph-review-corpus.md}"

command -v gh >/dev/null 2>&1 || { echo "error: gh CLI is required" >&2; exit 1; }
command -v jq >/dev/null 2>&1 || { echo "error: jq is required" >&2; exit 1; }

echo "Searching $REPO for PRs by $AUTHOR reviewed by $REVIEWER..." >&2

PR_LIST=$(gh search prs "reviewed-by:$REVIEWER" \
  --repo "$REPO" --author "$AUTHOR" --limit "$LIMIT" \
  --json number,title \
  --jq 'sort_by(-.number) | .[] | [.number, .title] | @tsv')

PR_COUNT=$(printf '%s\n' "$PR_LIST" | grep -c . || true)
echo "Found $PR_COUNT PRs. Fetching review threads..." >&2

{
  echo "# Review corpus: $REVIEWER on $AUTHOR's PRs in $REPO"
  echo
  echo "Generated: $(date -u +%Y-%m-%dT%H:%M:%SZ). PRs covered: $PR_COUNT."
} > "$OUTPUT"

while IFS=$'\t' read -r NUMBER TITLE; do
  [ -n "$NUMBER" ] || continue
  echo "  PR #$NUMBER" >&2
  {
    echo
    echo "## PR #$NUMBER: $TITLE"
  } >> "$OUTPUT"

  gh api "repos/$REPO/pulls/$NUMBER/reviews" --paginate 2>/dev/null |
    jq -r --arg reviewer "$REVIEWER" '
      .[] | select(.user.login == $reviewer) |
      "- [review: \(.state)]" + (if (.body // "") == "" then "" else " " + (.body | gsub("\r"; "") | gsub("\n"; " ")) end)
    ' >> "$OUTPUT" || echo "- (failed to fetch reviews)" >> "$OUTPUT"

  gh api "repos/$REPO/pulls/$NUMBER/comments" --paginate 2>/dev/null |
    jq -r --arg reviewer "$REVIEWER" '
      .[] | select(.user.login == $reviewer) |
      "- `\(.path)`\n  > " + (.body | gsub("\r"; "") | gsub("\n"; "\n  > "))
    ' >> "$OUTPUT" || echo "- (failed to fetch review comments)" >> "$OUTPUT"

  sleep 0.5
done <<< "$PR_LIST"

echo "Done. Corpus written to $OUTPUT" >&2
