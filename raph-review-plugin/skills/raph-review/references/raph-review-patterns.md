# Raph review patterns

STATUS: UNSYNCED

This file is meant to hold bosiraphael's actual review patterns with verbatim quotes
from his ~113 reviews of ehconitin's PRs on twentyhq/twenty. The session that built
this plugin could not read upstream review threads (GitHub access was scoped to the
fork), so what follows is inferred from PR corpus metadata and repo standards only.

Run the `sync-patterns` skill from an environment with normal `gh` access to
twentyhq/twenty to replace this file with mined, verbatim data. Until then, treat
everything below as provisional and lean on `review-checklist.md`.

## Corpus shape (confirmed from PR metadata)

- 113 PRs by ehconitin reviewed by bosiraphael, July 2024 to August 2026.
- Dominant areas: dashboards and charts (bar/line/pie, tooltips, legends, drill-down),
  page layouts and widgets, command menu, kanban, and lately server-side app/backfill
  work (Fireflies, Recall, auth).
- See `source-prs.md` for the full list.

## Inferred themes (confirm via sync)

- Validation: multiple dedicated PRs exist just to add validation on mutation inputs
  (widget grid position/sizing, page layout updates, widget configuration). Reviews
  likely push toward validating client input before persisting.
- Permissions: dedicated PRs for field-level permission checks on widgets and
  restricting dashboard actions by object permissions. Permission coverage is a
  review concern, not an afterthought.
- Performance: repeated re-render fix and perf PRs on charts suggest reviews probe
  render paths and memoization on data-heavy components.
- Scope discipline: big features land as "part 1/2/3" stacks plus "fast follow"
  polish PRs. Reviews likely ask to split rather than grow a PR.
- Naming and product vocabulary: multiple pure-rename refactors (Actions to
  CommandMenuItem, Command Menu layer to Side Panel) signal that naming consistency
  with product language is worth a review comment.

## What sync should produce here

Replace this file with:

1. Categories of comments raph actually leaves (naming, state, perf, validation,
   permissions, UX polish, tests, architecture), each with 3 to 5 verbatim quotes,
   PR number, and file context.
2. Tone notes: how he phrases blocking comments vs nits vs questions.
3. Approval signals: what distinguishes his comment-free approvals from
   request-changes reviews.
4. An updated STATUS line with the sync date.
