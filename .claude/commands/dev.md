---
description: Start container (host, :3000) and shop (remote, :3001) dev servers together via Module Federation
---

Start local development for this micro-frontend monorepo.

1. Check that `packages/container/.env` defines `DEV_SHOP` and `packages/shop/.env` defines `DEV_CONTAINER_URL` (read the files, don't print secret-looking values). If either is missing, tell the user what's missing and what it's for (see CLAUDE.md's "Environment variables" section) before proceeding — `container` can't resolve the `shop` remote without `DEV_SHOP`.
2. Run `yarn start` from the repo root (this is `lerna run --parallel start`, which starts both `container` and `shop` webpack-dev-servers together). Run it with `run_in_background: true` since it's a long-lived process.
3. Report the two URLs once the servers are up: host at http://localhost:3000, shop remote at http://localhost:3001. Remind the user that `container` loads `shop` lazily at the `/shop/*` route (`React.lazy(() => import("shop/Shop"))`), so if the remote isn't reachable yet, `/shop` in the host will fail until `shop`'s dev server finishes compiling.
