---
description: Build and deploy container and/or shop to Vercel (staging or production)
argument-hint: [container|shop|both] [staging|production]
---

Deploy one or both apps to Vercel. This affects a shared, externally visible system (live URLs) — always confirm target app(s) and environment with the user before running, and never proceed on an assumption.

1. Parse `$ARGUMENTS` for which app(s) (`container`, `shop`, or both) and which environment (`staging` or `production`). If either is ambiguous or missing, ask the user rather than guessing — production deploys are especially not to be assumed.
2. For each selected app, the scripts are (run from `packages/container` or `packages/shop`):
   - staging: `yarn deploy:staging` → `webpack & vercel`
   - production: `yarn deploy` → `webpack --mode production & vercel --prod`
3. Before running a `production` deploy, explicitly show the user which app and confirm they want `--prod` (this publishes to the live URLs referenced in the root README: the container host and shop remote deployments).
4. Note that `container` and `shop` deploy to separate Vercel projects independently (each has its own `vercel.json`) — deploying one does not redeploy the other, and if both need updating (e.g. after a shared `ui-libs` version bump), both must be deployed.
5. After deploying `shop`, if its remote URL changed, remind the user that `packages/container/.env`'s `PROD_SHOP` (or `DEV_SHOP`) must point at the new `remoteEntry.js` URL for `container` to load it — Module Federation resolves this at `container`'s build/runtime, not automatically.
