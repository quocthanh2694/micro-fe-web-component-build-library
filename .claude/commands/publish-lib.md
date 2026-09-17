---
description: Bump version and publish packages/ui-libs (thanh-pj1-ui-lib) to npm
argument-hint: [patch|minor|major]
---

Publish a new version of the shared web component library (`packages/ui-libs`, published as `thanh-pj1-ui-lib`) to npm.

This is a public, hard-to-reverse action (npm doesn't allow re-publishing the same version, and `container`/`shop` pin a version range of this package) — confirm with the user before running the actual publish step.

1. Read `packages/ui-libs/package.json` to see the current version. Determine the new version from the argument `$ARGUMENTS` (patch/minor/major; default to patch if not specified) using semver rules, and confirm the target version with the user before changing anything.
2. Update the `version` field in `packages/ui-libs/package.json` to the new version.
3. From `packages/ui-libs`, run the build (`tsc`, i.e. `yarn build`) and make sure it succeeds with no type errors before publishing.
4. Confirm with the user that they're logged in to npm as the right account (`npm-login` script runs `npm adduser` if needed) and that they actually want to publish now — this pushes a public package version.
5. Run `yarn publish:lib` from repo root (or `yarn publish` from `packages/ui-libs` after the build) to publish.
6. After publishing, remind the user that `packages/container/package.json` and `packages/shop/package.json` both pin `thanh-pj1-ui-lib` — if the new version isn't compatible with their existing `^1.0.23`-style range, those need a manual dependency bump + reinstall to pick it up (workspace installs don't do this automatically since it's consumed as a real npm dependency, not a linked workspace package).
