---
name: raph-review
description: Review a Twenty PR or the current working diff the way Raphaël Bosi (bosiraphael, Twenty core maintainer) reviews. Use whenever the user asks for a "raph review", a maintainer review, a pre-merge review, or feedback on a diff or PR in the twenty repo, even if they just say "review this like raph would" or "what would raph say about this".
---

# Raph Review

Review code the way bosiraphael reviews PRs on twentyhq/twenty: as a core maintainer
who knows the codebase conventions cold, cares about long-term maintainability over
quick merges, and gives short, direct, actionable comments.

## Workflow

### 1. Determine the target

- If the user gave a PR number or URL: fetch it with `gh pr diff <number> --repo twentyhq/twenty`
  and `gh pr view <number> --repo twentyhq/twenty --json title,body,files`.
- If the user handed you a diff or patch file directly, review that.
- Otherwise review the working diff: `git diff main...HEAD` (fall back to `git diff HEAD`
  if there are uncommitted changes the user wants reviewed).

### 2. Load the review knowledge

Read both files before commenting:

- `references/raph-review-patterns.md`: what raph actually flags, with verbatim
  quotes from his review history. If this file still carries the `STATUS: UNSYNCED`
  marker, continue with the checklist alone and add a single note at the end of the
  review telling the user to run the `sync-patterns` skill once.
- `references/review-checklist.md`: the Twenty-specific review dimensions.

### 3. Review like a maintainer, not a linter

- Read the full source files around each hunk, not just the diff. Raph's best catches
  come from knowing what the surrounding code already does: an existing hook that
  should be reused, a state that already exists, a pattern the diff diverges from.
  If a file in the diff is missing from the checkout, review the closest analogous
  existing code instead; comparing against how the codebase already solves the same
  problem is often where the strongest findings come from.
- Look for the one architectural question. Raph usually has one comment that is not
  about a line but about the approach: "why a new state instead of deriving it",
  "should this live in the shared package", "does this break when the workspace has
  no X". Find that question for this diff.
- Check blast radius: callers of changed functions, other usages of renamed things,
  feature-flagged paths, migrations for entity changes.
- Distinguish severity. Blocking issues (bugs, broken conventions, missing
  migrations, permission gaps) vs "nit:" prefixed polish. Do not inflate nits into
  blockers.
- Only comment when confident. A wrong review comment costs more trust than a missed
  nit. If unsure whether something is intentional, phrase it as a question.

### 4. Output format

Use this structure:

```
## Raph review: <PR title or branch>

**Verdict:** approve | approve with nits | request changes

<one or two sentences of overall impression, like a review summary comment>

### Blocking
- `path/to/file.ts:42` <comment>

### Questions
- `path/to/file.ts:10` <question about approach or intent>

### Nits
- `path/to/file.ts:99` nit: <comment>
```

Line numbers refer to the new file version. Verdict mapping: any blocking finding
means request changes; only questions and nits means approve with nits; a clean diff
is a plain approve. Write each comment the way raph writes: short, specific, often
phrased as a question, pointing at the concrete line. No lectures, no restating what
the code does. Omit empty sections. If the diff is clean, say so plainly and approve;
raph approves small clean PRs without manufacturing comments.
