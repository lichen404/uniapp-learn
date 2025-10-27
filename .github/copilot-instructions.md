# Copilot Instructions

## Architecture
- App bootstraps in `src/main.js` using `createSSRApp(App)` and installs Pinia from `src/stores/index.ts`; `App.vue` only wires lifecycle hooks and imports global SCSS.
- Routing, tab bar, and component auto-registration live in `src/pages.json`; `easycom.custom` maps `Xtx*` to `src/components/Xtx*.vue`, so new shared widgets should follow that naming scheme.
- Feature pages sit under `src/pages/**` for main tabs and in `src/pagesMember` / `src/pagesOrder` subpackages; each page uses the Vue 3 `<script setup>` pattern with uni-app lifecycle hooks like `onLoad` or `onShow`.

## Data & Services
- All network traffic flows through `src/utils/http.ts`, which prepends the `baseURL`, sets a 30s timeout, injects `source-client: miniapp`, and attaches `Authorization` from `useMemberStore`; responses resolve to `{ code, msg, result }` and most callers consume `res.result`.
- `http<T>` already shows toast messaging on non-2xx responses and redirects to `/pages/login/index` on 401, so avoid duplicating that logic in page code.
- REST wrappers in `src/services/*.ts` are thin: one function per endpoint using `http<T>` with typed payloads defined in `src/types/**`; when adding endpoints, match the existing casing (`getMemberCartAPI`, `postMemberOrderAPI`) and return the typed promise.
- Shared enums or constants (for example `OrderState` in `src/services/constants.ts`) centralize display logic; reuse them rather than hard-coding status text in pages.

## State & Composition
- Pinia is configured with `pinia-plugin-persistedstate` in `src/stores/index.ts`; persistence defaults to `uni` storage, so module stores (e.g. `useMemberStore` in `src/stores/modules/member.ts`) should stay serializable.
- Keep auth-related data in `useMemberStore`; clearing the store triggers token removal and ensures the interceptor stops sending stale credentials.
- Composition utilities live under `src/hooks`; `useGuessList` demonstrates the project pattern of returning refs plus exposed methods that drive child components (`XtxGuess` exposes `getMore` / `resetData`).

## UI Components & Patterns
- Global components are typed via `src/components/components.d.ts`; registering there allows template auto-complete without manual imports inside pages.
- `XtxGuess.vue` handles paginated “guess you like” data, maintaining internal `pageParams` and exposing pagination helpers—pages consume it via a `ref` and call `getMore()` on scroll.
- Complex page sections (like the cart in `src/pages/cart/components/CartMain.vue`) rely on uni-ui primitives (`uni-swipe-action`, custom `vk-data-*` inputs) and computed aggregates; prefer extending these components instead of rebuilding logic inline.
- Skeleton loaders (for example `src/pages/index/components/PageSkeleton.vue`) gate initial fetches—reuse that pattern when adding data-heavy views.

## Styling & Assets
- Global resets and font icons are in `src/styles/base.scss` and `src/styles/font.scss`, imported once in `App.vue`; component styles assume those tokens exist.
- Theme variables inherit from `src/uni.scss`; override or extend variables there for consistent cross-platform theming instead of scattering hex values.
- Static tab icons and imagery live under `src/static`; reference them with `@/static/...` so paths resolve across platforms.

## Build & Tooling
- Use the `uni` CLI scripts in `package.json` (`npm run dev:h5`, `npm run dev:mp-weixin`, etc.) to target specific platforms; SSR builds use the `--ssr` variants when needed.
- Vite is configured via `vite.config.js` with `@dcloudio/vite-plugin-uni`; additional Vite plugins must remain compatible with the uni-app compiler.
- TypeScript is enabled with strict options and the `@/*` alias defined in `tsconfig.json`; keep new source under `src/` so the alias and ambient component typings stay in scope.
- There is no automated test suite; manual verification typically involves running the target platform build and exercising page flows that hit updated services or stores.
