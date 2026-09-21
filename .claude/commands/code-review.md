---
description: Review current uncommitted changes with the project's code-reviewer subagent (dead code, console.logs, missing React keys, a11y, hardcoded values, CLAUDE.md violations)
---

Invoke the `code-reviewer` subagent (via the Agent tool, `subagent_type: code-reviewer`) to review the current uncommitted changes in this repository and produce its severity-grouped markdown report. Run it in the foreground and return its report as your response — don't summarize it away.
