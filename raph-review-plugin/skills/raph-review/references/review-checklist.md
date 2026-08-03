# Twenty review checklist

Review dimensions for twentyhq/twenty PRs, grounded in the repo's own standards
(CLAUDE.md and .cursor/rules). These are the conventions a core maintainer enforces
on every PR. When reviewing inside the twenty repo, the live rules in `.cursor/rules/`
are the source of truth if anything here drifts.

## Correctness and blast radius

- Does the change actually fix the stated problem? Reproduce the logic mentally from
  the entry point, not just the changed lines.
- Callers: every changed function signature, renamed export, or moved file checked
  against all usages (`grep` the old name; nothing should still reference it).
- Edge cases the codebase cares about: empty workspace data, no permissions, feature
  flag off, record with null fields, first-render state.
- Optimistic updates and cache: Apollo cache updated consistently with the mutation?
  Stale cache keys after renames?
- Multi-tenant safety: workspace-scoped queries stay workspace-scoped; nothing leaks
  across workspaces or to users without object/field permissions.

## Frontend conventions

- Functional components, named exports only, no default exports.
- Types over interfaces; string literal unions over enums (GraphQL enums excepted);
  no `any`; props types suffixed `Props`.
- No abbreviations in names (`fieldMetadataItem`, not `fm`). Files kebab-case with
  proper suffixes (`.component.tsx`, `.styles.ts`, etc.).
- State: event handlers over `useEffect` for state updates. A new `useEffect` in a
  diff needs justification; most are avoidable. Derived data belongs in selectors
  (`createAtomSelector`), not in synced local state.
- Jotai: `createAtomState` / `createAtomFamilyState` / `createAtomSelector` with the
  repo's hooks (`useAtomState`, `useAtomStateValue`, `useSetAtomState`). New global
  state should justify why component state is not enough.
- Styling with Linaria styled-components pattern; theme values over hardcoded
  colors/spacing.
- Components under ~300 lines; extract when a component grows past that.
- Comments: `//` short-form only, explain WHY not WHAT, no JSDoc blocks, no comments
  restating the code.
- Use `isDefined`, `isNonEmptyString`, `isNonEmptyArray` instead of manual guards.
- User-facing strings wrapped for i18n with Lingui.

## Backend conventions

- Entity changes require a generated instance command (`database:migrate:generate`,
  fast vs slow chosen correctly; slow when a data backfill is needed). Both `up` and
  `down` implemented. Committed command logic never rewritten.
- Input validation on mutations and jobs: never trust client-provided positions,
  sizes, ids; validate shapes before persisting.
- Permission checks: object-level and field-level permissions enforced on new
  resolvers, widgets, and background jobs.
- GraphQL schema changes backward compatible; `graphql:generate` run and generated
  files committed; fragments updated when config types gain fields (a missing
  fragment field is a classic silent bug).
- Long-running work goes to BullMQ jobs; batch/fan out instead of unbounded loops;
  jobs idempotent and retry-safe.
- NestJS module boundaries respected; services under ~500 lines.
- Proper typed exceptions with meaningful messages; errors logged with context.

## Performance

- Re-renders: new props objects/lambdas created per render and passed deep? Missing
  memoization on expensive computations? Chart/list components are the hot spots.
- Selectors doing heavy work on every state change.
- N+1 queries in resolvers and jobs; unbounded `findMany` on workspace data.
- Animations and drag interactions staying off the React render path where possible.

## Tests

- Behavior tested, not implementation. Queries by role/text over test ids.
- New utils and non-trivial logic get unit tests; changed logic gets updated tests,
  not deleted ones.
- Descriptive names: "should <behavior> when <condition>".
- Integration test snapshots updated deliberately, not blindly.

## PR hygiene

- Scope: one concern per PR. Large features split into stacked parts (the corpus is
  full of "part 1/2/3" PRs; that is the expected style for big work).
- Title says what changed; description says why, with before/after context and
  screenshots or recordings for UI changes.
- Breaking changes flagged loudly in the title.
- No stray debug code, commented-out blocks, unrelated formatting churn, or leftover
  feature-flag scaffolding.
