# AGENTS.md — HIS AI OPD Check-in Training Starter

This file is the **single source of truth** for AI coding-agent instructions in this repository.

## Purpose

This repository is a training sandbox for PM, BA, and Product Design learners. They are practicing how to supervise AI-assisted frontend development. Optimize for clarity, minimal scope, visible states, and human review — not architectural cleverness.

## Product scope

The continuous training scenario is **US-001 OPD Patient Check-in Lite** in `docs/requirements/US-001-opd-checkin.md`.

The training scope is frontend only:
- Next.js + TypeScript
- Product components
- Storybook stories
- Mock/synthetic data and mock services
- Basic tests/checks

Do **not** add:
- a backend server,
- a database,
- authentication/authorization infrastructure,
- real HIS/FHIR endpoints,
- another framework or UI library,
- production patient data.

## Required working style

Before modifying files for a new task:
1. Read this file.
2. Read the relevant requirement.
3. Inspect existing code and stories.
4. Identify components and meaningful UI states.
5. List files expected to change.
6. Explain a concise implementation and verification plan.
7. If the user asked for planning first, wait for human approval before editing.

While implementing:
- Keep changes minimal and scoped to the requested issue.
- Prefer existing code and patterns over new abstractions.
- Do not modify unrelated files.
- Do not introduce a dependency unless it is necessary and explicitly explain why.
- Do not commit, push, merge, or force-update branches unless the human explicitly requests it.

## Component + Storybook rule

Reusable product UI with meaningful states should normally be created as a pair:

```text
Component.tsx
Component.stories.tsx
```

Stories represent user-visible, requirement-relevant states such as:
- Default
- Loading
- Empty
- Error
- WithData / WithResults
- Selected
- ValidationError
- Success

Only include states relevant to that component. Do not create stories merely to increase story count.

Interactive behavior should have a readable Storybook interaction scenario when useful. PM/BA may provide Given/When/Then; translate that into the test implementation while keeping the business intent readable.

## Mock data rules

- Use only deterministic mock/synthetic data.
- Never use real patient information.
- Reuse `src/mocks` and `src/services` before inventing a new data layer.
- Keep scenarios reproducible: normal, slow, empty, and error where appropriate.

## Human-review surfaces

Assume the learner may not read code deeply. Make changes easy to verify through:
- Storybook states,
- the running Next.js page,
- clear terminal output,
- small diffs,
- readable file names,
- concise summaries.

## Debugging workflow

When asked to diagnose an error:
1. Explain what failed before modifying code.
2. Cite the evidence (message, file, line, browser/terminal/network observation).
3. Explain the likely root cause.
4. Propose the smallest safe fix.
5. Explain how to reproduce and verify the fix.

Avoid blind repeated changes.

## Verification

Before declaring implementation complete, run the relevant checks:

```bash
npm run lint
npm run test
npm run build
```

Also confirm relevant Storybook stories and the running flow manually when the task is UI-facing.

## Git discipline

Training convention:

**1 Issue = 1 Branch = 1 Worktree = 1 Agent Session**

Never modify `main` directly for feature work. Never use force push as part of normal training guidance.

Before handoff, help the human understand:
- `git status`
- `git diff --stat`
- `git diff`
- why every changed file is necessary

## Definition of Done for US-001

- Acceptance criteria are covered.
- Meaningful Loading / Empty / Error / Validation / Success states are handled.
- Reusable product components have useful Storybook stories.
- At least one important interaction flow can be demonstrated/tested.
- Only synthetic/mock data is used.
- `npm run lint`, `npm run test`, and `npm run build` pass.
- The human has reviewed Storybook, the running app, and `git diff`.
- The branch is ready for a Draft Pull/Merge Request and developer review.
