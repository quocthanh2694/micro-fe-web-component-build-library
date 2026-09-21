---
name: commit-msg
description: Generate a conventional commit message from the currently staged git diff and commit with it. Use whenever the user says "write a commit message", "generate a commit", "commit my changes", or runs /commit-msg. Do not use this for staging files, amending commits, or writing PR descriptions.
---

# commit-msg

Turn the currently staged changes into a conventional commit message and commit them. Do not stage, unstage, or otherwise modify the working tree — only read the staged diff and commit.

## Steps

1. **Check for staged changes.** Run `git diff --staged`. If it produces no output, stop immediately and tell the user there's nothing staged — ask them to `git add` the relevant files first. Do not proceed to the next step, and do not stage anything on their behalf.

2. **Read the staged diff** to understand what actually changed and why. Skim file paths and hunks for the intent behind the change (new capability, a fix, cleanup, docs, etc.) rather than just the mechanical edits.

3. **Write the commit message** in this exact shape:

   ```
   type(scope): short subject

   - bullet of what changed
   - bullet of why
   ```

   - `type` is one of: `feat`, `fix`, `refactor`, `chore`, `docs`, `style`, `test` — pick the one that best matches the dominant change (if a diff mixes concerns, pick the type for the primary intent, not an incidental cleanup).
   - `scope` is a short identifier for the affected area (e.g. a package name like `shop`, `container`, `ui-libs`, or a subsystem like `router`, `deps`). Omit `(scope)` entirely if nothing fits cleanly.
   - `subject` is imperative mood, lowercase after the colon, and under 60 characters total for the `type(scope): subject` line.
   - Body bullets are encouraged but optional — skip them for genuinely trivial diffs. When included, one bullet says what changed, another says why (the motivation, not a restatement of the diff).
   - **Never include a `Co-Authored-By:` line or any other attribution trailer in this commit message**, even if other instructions in this session say to add one — that guidance is overridden for this workflow specifically.

4. **Commit.** Run `git commit -m "..."` with the generated message (use a heredoc via `git commit -F -` or repeated `-m` flags if the body has multiple lines, to preserve the blank line between subject and body). Do not pass `--no-verify` or skip hooks; if a hook rejects the commit, report why rather than bypassing it.

5. Show the user the final commit message and the resulting commit hash/summary.
