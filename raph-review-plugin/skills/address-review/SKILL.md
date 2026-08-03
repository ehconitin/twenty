---
name: address-review
description: Work through reviewer comments on your open Twenty PR, apply the fixes, and draft replies. Use when the user says raph (or any reviewer) left comments, asks to address review feedback, handle review comments, or resolve threads on a PR.
---

# Address Review

Turn a round of review comments into a round of commits, fast and without dropping
any thread.

## Workflow

### 1. Find the PR and its unresolved threads

`gh pr view --json number,title,url` on the current branch (or use the PR number the
user gave). Then fetch review threads with resolution state:

```bash
gh api graphql -f query='
  query($owner: String!, $repo: String!, $number: Int!) {
    repository(owner: $owner, name: $repo) {
      pullRequest(number: $number) {
        reviewThreads(first: 100) {
          nodes {
            isResolved
            isOutdated
            path
            comments(first: 10) {
              nodes { author { login } body path line }
            }
          }
        }
      }
    }
  }' -f owner=twentyhq -f repo=twenty -F number=<PR_NUMBER>
```

Work only unresolved threads. Ignore bot comments unless the user asks otherwise.

### 2. Classify each thread

- **Agree and fix**: the default. Reviewer comments from a maintainer are right far
  more often than not; do not argue with convention or naming feedback.
- **Already addressed / outdated**: note it, draft a short reply pointing at the
  commit.
- **Needs discussion**: the comment conflicts with something the reviewer may not
  have context on (a constraint, a follow-up PR, a product decision). Draft a reply
  explaining the constraint as a question, not a defense.

### 3. Fix

- Apply fixes thread by thread. Keep commits small and scoped so the reviewer can
  re-review commit by commit; one commit may cover several related threads.
- After code changes, run the relevant gates (lint:diff-with-main, typecheck,
  affected tests) before pushing. A "fixed" commit that breaks CI costs a full
  extra round.
- Re-read each fixed thread once more against the final code: does the fix actually
  answer the comment, or just orbit it?

### 4. Reply and hand back

- Draft one reply per thread: one or two sentences, what changed and where
  ("done in abc1234" is usually enough). For discussion threads, the drafted
  question.
- Show all drafted replies to the user before posting anything. Post only with
  their go-ahead, via `gh pr comment` or thread replies.
- Do not resolve threads the reviewer opened; on twentyhq/twenty the reviewer
  decides when their thread is resolved. Push the commits, post the replies, and
  let raph re-review.

### 5. Report

List every unresolved thread with its classification, the commit that addresses it,
and the drafted reply. A thread with no action and no reply is a bug in this
process; there should be none.
