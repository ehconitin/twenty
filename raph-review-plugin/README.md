# raph-review plugin

Claude Code skills distilled from Raphaël Bosi's (bosiraphael) review history on
ehconitin's twentyhq/twenty PRs: 113 reviewed PRs from July 2024 to August 2026.

## Install

```
/plugin marketplace add ehconitin/twenty
/plugin install raph-review@ehconitin-tools
```

(The marketplace manifest lives on the `claude/raph-review-plugin-2nc9lk` branch;
point the marketplace add at whichever branch or repo hosts it.)

## Skills

- **raph-review**: review a PR or the working diff the way raph would. Maintainer
  posture, twenty conventions, one architectural question, severity-separated
  comments in his voice.
- **self-review**: preflight your own branch before requesting review. Fixes
  mechanical convention violations, runs lint/typecheck/tests and the repo-specific
  gates (migrations, graphql:generate, permissions, validation), and predicts the
  review comments you cannot preempt so you can answer them in the PR description.
- **address-review**: work through a round of review comments: fetch unresolved
  threads, fix, verify, draft replies for your approval. Never resolves the
  reviewer's threads for them.
- **sync-patterns**: one-time (and periodic) regeneration of the patterns file from
  live review data via `gh`.

## First run: sync the patterns

The environment that built this plugin could only reach the ehconitin/twenty fork,
not upstream review threads, so `skills/raph-review/references/raph-review-patterns.md`
ships as a provisional inference marked `STATUS: UNSYNCED`. The review checklist
(grounded in the repo's CLAUDE.md and .cursor/rules) is fully usable regardless.

From any machine where `gh` can read twentyhq/twenty, run the `sync-patterns` skill
once. It mines raph's actual comments, rewrites the patterns file with verbatim
quotes, and the review skills sharpen accordingly. Commit the result.

## Layout

```
raph-review-plugin/
  .claude-plugin/plugin.json
  skills/
    raph-review/
      SKILL.md
      references/
        review-checklist.md        twenty review dimensions (grounded in repo rules)
        raph-review-patterns.md    raph's patterns (populate via sync-patterns)
        source-prs.md              the 113-PR corpus
      scripts/
        mine-raph-reviews.sh       gh-based corpus miner
    self-review/SKILL.md
    address-review/SKILL.md
    sync-patterns/SKILL.md
```
