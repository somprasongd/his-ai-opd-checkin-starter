# Workshop Error Scenarios

These exercises are intentionally introduced **only when the lesson asks for them**. Keep the default branch healthy.

## Error A — TypeScript shape mismatch

Ask the AI agent to create a temporary training branch/change where a component expects `patient.hn` but receives an object whose property is named `hospitalNumber`.

Expected evidence:
- TypeScript / build error in the terminal.
- File and property name are visible in the error.
- The dev server may keep rendering the page anyway: the affected field silently shows blank instead of failing visibly. Run `npm run build` (or `npx tsc --noEmit`) to surface the error — a running dev page alone can hide it.

Learning goal:
- Read error type → message → file → line.
- Ask for root cause before asking for a fix.

After the exercise, restore the correct type or discard the training change.

## Error B — Mock service error

Use the existing `error` scenario in `searchPatients()`.

Expected evidence:
- The call rejects with `Synthetic patient search error`.
- The UI should render a deliberate Error state rather than crash.

Learning goal:
- Distinguish an expected service failure state from a UI bug.

## Error C — Port conflict

Run the development server in two worktrees using the same port.

Expected evidence:
- The second process reports that the port is already in use (or chooses another port depending on tooling).

How to fix:
- Stop the process holding the port: `lsof -ti:3000 | xargs kill` (Storybook: `lsof -ti:6006 | xargs kill`).
- Killing the `npm run dev` wrapper can leave the underlying `next` child process still holding the port — kill by port, not by wrapper.

Learning goal:
- Understand that worktrees separate files/branches but running processes still share machine resources such as ports.

Suggested convention:
- Worktree A: Next.js 3001, Storybook 6001
- Worktree B: Next.js 3002, Storybook 6002

## Error D — Missing UI state

Implement only Default + WithResults and intentionally omit Empty or Error.

Expected evidence:
- No compiler error.
- Requirement/state review reveals the defect.

Learning goal:
- Not every defect appears in the terminal. Requirement coverage is also a quality gate.
