# Repository Guidelines

## Project Structure & Module Organization
`index.html` bootstraps the static app and loads modules via `main.js`. UI behaviour lives in `menu.js` (cards, filters, ingredient toggles), while `theme.js`, `i18n.js`, and `qrcode.js` handle visual themes, translations, and the QR modal. Data is sourced from ES modules in `data/` (`menu.js` and `ingredients.js`); images and backgrounds sit under `assets/`, and styles are split across `css/styles.css` and `css/themes.css`.

## Build, Test, and Development Commands
Serve the root directory with `npx http-server .` or `python3 -m http.server` to mirror GH Pages. Run `npx eslint .` if linting is available, or `node --check *.js data/*.js` to catch syntax errors. After editing data modules, execute `node --input-type=module -e "import('./data/menu.js').then(() => import('./data/ingredients.js'))"` to ensure they parse as ES modules.

## Coding Style & Naming Conventions
Stick to two-space indentation, descriptive const names, and lowerCamelCase IDs (`currentCategory`, `qrModal`). Assets use snake_case filenames that match the `menuItems[].image` path (`assets/images/crepe_porc_hache.png`). Keep modules framework-agnostic; new helpers should export pure functions. Document any deliberate non-ASCII text (e.g., Thai labels) inside data files.

## Testing Guidelines
Manual smoke tests remain key: switch languages, cycle themes, open the QR modal, and click categories to confirm filtering. Validate stock badge states by toggling `quantity` fields in `data/menu.js`. If you introduce utility functions, add lightweight Jest/Vitest specs under `__tests__/` and wire them via `npm test`; remove ad-hoc scripts before pushing.

## Commit & Pull Request Guidelines
Follow concise, imperative messages (`feat: refresh menu rendering`). Reference issues when touching shared data or assets, and mention localization updates in the description. PRs should outline the scenario, key changes, and manual QA steps; include before/after captures for visual tweaks.

## Localization & Data Care
Whenever you add UI copy, update both `i18n.js` and the relevant entries in `data/menu.js`/`ingredients.js`. Ensure new dishes include every available locale key or note the fallback strategy. Images should stay under ~200 KB and respect the `quantity` schema (`infinite` versus tracked stock) so the availability badges render correctly.
