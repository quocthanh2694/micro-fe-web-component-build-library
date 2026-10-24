# BMAD Experiment

## Goal
- Learn Claude Code workflows further (skills, commands, code-reviewer agent already in place).
- Gain practical BMAD experience to discuss in interviews.

## Task 1: Update the portfolio with BMAD Quick Flow
- Write a short spec: new information to add, affected files (mainly the `packages/container` landing page), definition of done.
- Let the dev agent implement from the spec, then run `/code-review`.
- Compare with plain chat-driven changes: speed, quality, overhead.

## Task 2 (optional): Full flow on one small feature
- Pick a small feature (e.g. dark mode or a blog page).
- Walk through PRD, architecture, epics/stories, dev, review, only to see what the artifacts look like.
- Not meant to be merged; the branch can be discarded.

## Wrap-up
- Write down pros and cons of BMAD: where it fits, where it is overkill. This becomes the interview answer.
- Timebox to 1-2 sessions so it does not eat into FE interview prep.

## Fallback (lightest option)
Use Claude normally, but write a mini-spec first (goal, scope, acceptance criteria, task list), then try BMAD once at the end.

## Verification
- `yarn start` still runs container (:3000) and shop (:3001) on the experiment branch.
- Portfolio shows the new information correctly.
- `/code-review` reports no serious issues.
