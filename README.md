# HIS AI OPD Check-in Starter

Companion training repository for the **HIS AI Product Workshop**.

It is designed for PM, BA, and Product Design learners who use an AI coding agent to create frontend work while learning how to control scope, review UI states, debug with evidence, inspect diffs, and hand work off through a Pull/Merge Request.

## Stack

- Next.js 16.3.3
- React 19.3
- TypeScript
- Tailwind CSS 4
- Storybook 10.6 using `@storybook/nextjs-vite`
- Vitest for the starter mock-service tests

## Prerequisites

- Git
- Node.js 20.9 or newer
- npm
- VS Code or your team editor
- Chrome/Edge DevTools
- Codex CLI or Claude Code
- GitHub account and/or access to your company GitLab

## Start

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

Storybook:

```bash
npm run storybook
```

Open <http://localhost:6006>.

Quality checks:

```bash
npm run lint
npm run test
npm run build
```

## Training requirement

Read:

`docs/requirements/US-001-opd-checkin.md`

Do **not** begin by asking the agent to “build the whole page”. Ask it to read `AGENTS.md`, inspect the repository, identify components/states/files, and propose a plan before implementation.

## Worktree convention

```bash
git status
git switch main
git pull

git worktree add ../wt-us001-patient-checkin \
  -b feature/us001-patient-checkin main

cd ../wt-us001-patient-checkin
git status
npm install
```

Training convention:

> 1 Issue = 1 Branch = 1 Worktree = 1 Agent Session

## GitLab self-hosted

The starter is hosted on GitHub so learners can Fork/Clone it easily. To use the same code in the company GitLab, create an empty GitLab project and change the remote:

```bash
git remote -v
git remote set-url origin git@gitlab.company.local:training/your-project.git
git push -u origin main
```

Then do feature work on a separate branch/worktree and open a GitLab Merge Request.

## Agent instructions

- `AGENTS.md` is the single source of truth.
- `CLAUDE.md` references it with `@AGENTS.md`.

## Data safety

Use mock/synthetic data only. Do not enter or commit real patient data, credentials, secrets, production URLs, or `.env` contents.
