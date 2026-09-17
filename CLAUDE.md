# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Micro-frontend e-commerce platform: a Webpack Module Federation **host** (`container`) that loads a **remote** shopping app (`shop`) at runtime, both consuming a shared Web Component UI library (`ui-libs`, published to npm as `thanh-pj1-ui-lib`). Two standalone demo apps (`vuejs-demo-using-wc`, `angular-demo-using-wc`) show the same web component consumed from Vue and Angular.

Managed as a Lerna monorepo. Only `packages/container`, `packages/shop`, and `packages/ui-libs` are npm/yarn workspaces (declared in root `package.json`); the Vue and Angular demos are standalone projects with their own lockfiles and are **not** wired into the root `start`/`build` scripts.

## Commands

Run from the repo root unless noted. `npmClient` is `yarn` (per `lerna.json`) even though root scripts are invoked as npm/yarn scripts through Lerna.

- `yarn` — install all workspace dependencies
- `yarn start` — `lerna run --parallel start`: runs `container` (webpack-dev-server, port 3000) and `shop` (webpack-dev-server, port 3001) simultaneously via Module Federation
- `yarn build` — `lerna run build`: production webpack build for every workspace
- `yarn serve` — `lerna run --parallel serve`: serves the built `dist`/`build` output of each app locally
- `yarn clean` — removes each package's build output
- `yarn deploy` / `yarn deploy:staging` — production/staging build + `vercel` deploy, run per-package (`container` and `shop` each deploy independently to their own Vercel project)
- `yarn publish:lib` — builds and publishes `ui-libs` to npm (`cd packages/ui-libs && yarn run publish:lib`, which runs `tsc && yarn publish`)
- `yarn lerna-ls` — list all Lerna-managed packages

Per-package (run inside `packages/<name>`):
- `container` / `shop`: `yarn start` (dev server on 3000/3001), `yarn build`, `yarn serve`, `yarn clean`
- `ui-libs`: `yarn build` (`tsc`), `yarn link-pj` (build + `npm link` for local cross-package testing without publishing), `yarn pack-pj` (`npm pack`)
- `vuejs-demo-using-wc`: `yarn dev` (Vite), `yarn build` (`vue-tsc` type-check + Vite build), `yarn type-check`
- `angular-demo-using-wc`: `yarn start` (`ng serve`), `yarn build`, `yarn test` (`ng test` / Karma+Jasmine)

There is no lint script anywhere in the repo. There is no real test suite for `container`, `shop`, or `ui-libs` (the `ui-libs` `test` script is a stub that always exits 1); the Angular demo is the only package with actual tests, and it's isolated from the rest of the monorepo.

### Environment variables

Each app expects a local `.env` (not committed) read via `dotenv` in its `webpack.config.js`:
- `packages/container/.env`: `DEV_SHOP`, `PROD_SHOP` — the URL of the `shop` remote's `remoteEntry.js`, selected by `webpack --mode production` vs dev
- `packages/shop/.env`: `DEV_CONTAINER_URL`, `PROD_CONTAINER_URL`

When running `shop` standalone, its dev server intentionally opens `/shop` (its `BASE_URL`, see `packages/shop/src/constants/constant.ts`).

## Architecture

### Module Federation wiring (container ↔ shop)

- `shop`'s `webpack.config.js` configures `ModuleFederationPlugin` with `name: "shop"`, `filename: "js/remoteEntry.js"`, and `exposes: { "./Shop": "./src/App" }` — its entire `App.tsx` is the exposed remote module.
- `container`'s `webpack.config.js` configures the same plugin with `remotes: { shop: process.env.DEV_SHOP | PROD_SHOP }`.
- `container/src/Router.tsx` consumes it as an ordinary lazily-loaded React component: `React.lazy(() => import("shop/Shop"))`, mounted at the `/shop/*` route (all other paths render the container's own `LandingPage`, unmatched paths redirect to `/`). Type declarations for the remote module live in `container/src/remoteTypes.d.ts`.
- Both apps declare `react`, `react-dom`, and `react-router-dom` as `shared`, `singleton: true`, `eager: true` in their `ModuleFederationPlugin` config so host and remote share one instance of each at runtime — this is required for the composed app to work and must stay in sync if these deps are upgraded in one package but not the other.
- `container` and `shop` each bootstrap independently for local/standalone dev: `src/index.ts` does `import('./bootstrap')`, and `bootstrap.tsx` mounts `<BrowserRouter><App /></BrowserRouter>` into `#root` (with `shop` using `basename={BASE_URL}` so its routes resolve correctly whether mounted standalone or nested under `container`).
- Both webpack configs are otherwise near-identical (Babel for TS/TSX/JSX, SCSS via style/css/sass-loader, images via `file-loader`, assets copied via `copy-webpack-plugin`), so a change to one build pipeline commonly needs mirroring in the other.

### Web component library (`ui-libs`)

- `packages/ui-libs/src/pr1-input.js` defines a framework-agnostic custom element `<pj1-input>` (`class MyEl extends HTMLElement`), imported for side effects (`customElements.define`) from `src/index.ts`. This is the actual product: a form-associated custom element (`static formAssociated = true`, uses `attachInternals()`) with Shadow DOM encapsulation, so it participates in native `<form>` validation/submission and works identically from React, Vue, Angular, or plain JS.
- Attribute-driven API: behavior (placeholder, size, error text, required, integer-only filtering, disabled, etc.) is driven entirely through observed HTML attributes (`attributeChangedCallback`), not JS props/methods — this is intentional, since it must be usable from markup in any framework.
- Consumers get change notification via a custom `onchange` DOM event (not the native `input`/`change` event) dispatched with `composed: true` so it crosses the Shadow DOM boundary.
- Built with plain `tsc` (see `packages/ui-libs/tsconfig.json`): `outDir: dist`, declarations emitted, `allowJs: true` (needed because the component itself is `.js`, only `index.ts`/`index.d.ts` are typed entry points).
- `container` and `shop` both depend on the published npm package `thanh-pj1-ui-lib`, not a workspace-linked path — after changing `ui-libs`, changes aren't visible to `container`/`shop` until it's published (`yarn publish:lib`) or linked locally (`yarn link-pj` in `ui-libs`, then `npm link thanh-pj1-ui-lib` in the consumer).

### `shop` internal structure

- State: a single React Context + reducer (`src/context/{context,provider,reducer,actions}.ts`) rather than a state library — check here before adding new global state.
- Data: `src/apis/*Api.ts` call out to real endpoints for products/administrative-division/sliders, but `src/dummyData/*.json` provides large static fixtures (5,000+ product-like records) used to exercise pagination/infinite-scroll performance (`useInfinityScroll`, `useProducts`, `constants/pagination.constant.ts`).
- Forms use `react-hook-form` + `yup` resolvers (see `pages/CartPage/validationScheme.ts`).
- Custom hooks in `src/hooks/` encapsulate most non-trivial logic (infinite scroll, click-outside, window size, product data fetching) — prefer extending these over adding logic directly in components.
