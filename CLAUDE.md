# Claude Context

@AGENTS.md

## Skill Setup

Skills live in the tracked `.agents/skills/` and must be linked into `.claude/skills` for
Claude Code to discover them. The link is per checkout and git ignores it.

```bash
make skills-install
```

On Windows (run as Admin or in Developer Mode) create the link directly:

```bat
mklink /D ".claude\skills" "..\.agents\skills"
```

`make doctor` reports whether the link is present.
