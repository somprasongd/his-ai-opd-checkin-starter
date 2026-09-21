# Workshop Error Scenarios

These exercises are intentionally introduced **only when the lesson asks for them**. Keep the default branch healthy.

## Error A — TypeScript shape mismatch

Ask the AI agent to create a temporary training branch/change where a component expects `patient.hn` but receives an object whose property is named `hospitalNumber`.

Expected evidence:
- TypeScript / build error in the terminal.
- File and property name are visible in the error.

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
