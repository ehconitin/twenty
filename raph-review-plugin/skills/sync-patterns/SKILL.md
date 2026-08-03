---
name: sync-patterns
description: Regenerate the raph-review patterns file from live review data on twentyhq/twenty. Use when the user asks to sync, refresh, rebuild, or update raph's review patterns, or when raph-review-patterns.md still says STATUS UNSYNCED. Needs gh authenticated with access to twentyhq/twenty.
---

# Sync Patterns

Rebuild `${CLAUDE_PLUGIN_ROOT}/skills/raph-review/references/raph-review-patterns.md`
from bosiraphael's actual review comments, so the `raph-review` and `self-review`
skills work from verbatim data instead of inference.

## Workflow

### 1. Mine the corpus

```bash
bash "${CLAUDE_PLUGIN_ROOT}/skills/raph-review/scripts/mine-raph-reviews.sh" /tmp/raph-review-corpus.md
```

Defaults: reviewer `bosiraphael`, author `ehconitin`, repo `twentyhq/twenty`, up to
120 PRs. Override via `REVIEWER`, `AUTHOR`, `REPO`, `LIMIT` env vars. The script
needs `gh` (authenticated) and `jq`; expect a few minutes and possible secondary
rate limits on large corpora (rerun with a lower `LIMIT` if it trips).

### 2. Distill

Read the corpus and rewrite `raph-review-patterns.md` with:

1. **Categories**: group his comments (naming, state management, useEffect misuse,
   performance, validation, permissions, UX polish, tests, architecture, product
   vocabulary). For each: a one-line summary of the rule he is enforcing, then 3 to
   5 verbatim quotes with PR number and file path. Pick quotes that generalize, not
   one-off situational remarks.
2. **Tone**: how he phrases blockers vs nits vs questions, typical comment length,
   whether he suggests concrete code.
3. **Approval signals**: what kinds of PRs he approves without comment vs where he
   requests changes.
4. Header: `STATUS: SYNCED <date>`, corpus size, and the command to re-sync.

Keep the file under ~400 lines; it is loaded on every review. Prefer fewer, sharper
quotes over completeness; the full corpus stays in /tmp for deeper digging.

### 3. Verify

Spot-check three quotes against GitHub to confirm attribution to bosiraphael, then
tell the user the sync is done and how many comments were mined. Suggest committing
the updated patterns file to the plugin repo so every install benefits.
