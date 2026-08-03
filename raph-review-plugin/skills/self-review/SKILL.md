---
name: self-review
description: Pre-review pass on your own Twenty branch before requesting review, so raph finds nothing left to flag. Use whenever the user wants to clean up, self-review, or prep a branch or PR before sending it out for review, or asks "is this ready for review", "preflight this", or "resolve my PR before review".
---

# Self Review

Run the same review raph would run, but on your own branch and before he sees it.
The goal: every mechanical issue fixed, every predictable review comment preempted,
so the human review spends its budget on the interesting questions.

## Workflow

### 1. Collect the diff

`git diff main...HEAD` plus `git status` for untracked files. If the branch already
has an open PR, also fetch its title/body with `gh pr view --json title,body`.

### 2. Review pass

Read `${CLAUDE_PLUGIN_ROOT}/skills/raph-review/references/raph-review-patterns.md`
and `${CLAUDE_PLUGIN_ROOT}/skills/raph-review/references/review-checklist.md`, then
review the diff exactly as the `raph-review` skill would: full-file context, blast
radius, the one architectural question. Collect findings before fixing anything.

### 3. Fix what is mechanical, ask about what is not

Fix directly (these need no permission, they are the repo's stated standards):

- Convention violations: default exports, interfaces that should be types, enums,
  `any`, abbreviations, JSDoc blocks, obvious comments, missing `isDefined`-style
  helpers, manual loops that should be transforms.
- Unjustified `useEffect` for state updates when an event handler works.
- Missing Lingui wrapping on user-facing strings.
- Dead code, debug leftovers, commented-out blocks, unrelated formatting churn.

Surface to the user instead of fixing (judgment calls):

- Architectural doubts (state shape, package placement, API design).
- Anything that changes behavior or scope.
- Splitting the PR when it covers more than one concern.

### 4. Run the gates

In order, stopping to fix failures:

```bash
npx nx lint:diff-with-main twenty-front --configuration=fix   # or twenty-server, per touched packages
npx nx typecheck twenty-front                                  # and/or twenty-server
npx jest <changed-test-files> --config=packages/<pkg>/jest.config.mjs
```

Repo-specific gates, checked against the diff:

- Entity file changed: instance command generated (`database:migrate:generate`),
  with both `up` and `down`.
- GraphQL schema or fragments changed: `graphql:generate` run, generated files
  committed, fragments include any new config fields.
- New component: story and test present, in its own directory.
- Mutations or jobs touching client input: validation present.
- New resolver/widget/job: object and field permission checks present.

### 5. Report

```
## Self review: <branch>

**Ready for review:** yes | after decisions below

### Fixed
- <what was fixed, one line each>

### Needs your call
- <judgment calls with a recommendation each>

### What raph will probably still ask
- <the architectural questions you cannot preempt, so the user has answers ready>
```

The last section matters: predicting the review comments the user cannot avoid, so
they can put the answer in the PR description up front. A PR description that
answers the reviewer's question before it is asked is the cheapest review round
there is.
