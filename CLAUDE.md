# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static multilingual restaurant menu application for "Mia Farang Noi" (a Thai restaurant in Bang Bao, Koh Chang). The app displays dishes with images, ingredients, prices, and supplements across 12 languages (FR, EN, TH, DE, RU, ZH, KO, JA, ES, IT, NL, PT). It features dynamic theming based on time of day, QR code generation for menu sharing, and a modal system for detailed dish views.

## Development Commands

- **Start local server**: `npm run serve` (uses http-server) or `python3 -m http.server`
- **Validate ES modules**: `node --input-type=module -e "import('./data/menu.js').then(() => import('./data/ingredients.js'))"`
- **Syntax check**: `node --check *.js data/*.js`

## Architecture & Module System

The application uses vanilla JavaScript ES modules with a modular architecture:

### Bootstrap Flow
`main.js` orchestrates initialization in this order:
1. `initI18n()` - Language system and translations
2. `initTheme()` - Time-based theme scheduler
3. `initMenu()` - Menu rendering and modal system
4. `initQRCode()` - QR code modal functionality

### Module Responsibilities

- **i18n.js**: Manages 12 languages, localStorage persistence, DOM translation updates via `data-i18n` and `data-i18n-attr` attributes
- **menu.js**: Core module handling dish rendering, category filtering, ingredient translation, modal dialogs, and availability badges
- **theme.js**: Cyclic theme system that applies CSS classes (`theme-morning`, `theme-day`, `theme-sunset`, `theme-night`) based on current hour
- **qrcode.js**: QR modal for menu sharing
- **utils.js**: Shared utilities (DOM creation, price formatting, event bus, localStorage helpers)

### Data Layer

- **data/menu.js**: Exports `menuItems` array with dish objects containing multilingual names, categories, prices, ingredients, supplements, and quantity tracking
- **data/ingredients.js**: Exports ingredients list with multilingual translations referenced by ID in menu items

Menu items structure:
```javascript
{
  id: "dish_id",
  reference: "B1", // Optional reference code
  price: 100, // Or multiple sizes via sizes array
  sizes: [{ id: "kids", reference: "100g", price: 80 }], // Optional
  name: { fr: "...", en: "...", th: "..." },
  category: { id: "category_id", name: { fr: "...", en: "..." } },
  image: "assets/images/dish.png",
  quantity: { amount: 10, infinite: false }, // or { infinite: true }
  ingredients: ["ingredient_id"], // References data/ingredients.js
  supplements: [{ name: { fr: "...", en: "..." }, price: 20 }]
}
```

## Key Implementation Patterns

### Localized Text Resolution
`resolveLocalizedText(value, lang)` in menu.js:260 handles three formats:
- String literals (returned as-is)
- Multilingual objects (`{ fr: "...", en: "..." }`)
- Ingredient IDs (resolved via `ingredientsData` cache from data/ingredients.js)

Fallback chain: requested language → normalized match → fr/en/th → first available string

### Dish Modal System
- Modal state managed in menu.js:17-31 with cached DOM references
- Opened via `openDishModal(dish)` menu.js:274, stores `previouslyFocusedElement` for accessibility
- Displays sizes (if available), ingredients, supplements, and auto-generated descriptions
- Closes on Escape key or click outside (menu.js:313-318)
- Re-renders on language change via `EVENTS.LANGUAGE_CHANGED` listener

### Category Filtering & Default
- Default category is `'sale'` (menu.js:9)
- On first load, if `'sale'` exists in menu data, it's auto-selected
- Categories extracted from menu items and rendered as buttons
- `filterDishesByCategory()` menu.js:330 handles filtering logic
- Dishes with `quantity.amount === 0` are excluded unless `quantity.infinite === true`

### Theme Scheduling
theme.js applies themes based on server time:
- 05:00-10:59: `morning`
- 11:00-17:29: `day`
- 17:30-18:59: `sunset`
- 19:00-04:59: `night`

Refreshes every 5 minutes and on tab visibility change.

## Localization Workflow

When adding UI text:
1. Add translation keys to all 12 languages in `i18n.js` translations object
2. Use `data-i18n="key"` for text content or `data-i18n-attr="attribute:key"` for attributes
3. For dynamic content, call `translate(key, params)` with `{param}` placeholders

When adding dishes:
1. Provide `name` object with all 12 language keys
2. Reference ingredient IDs from `data/ingredients.js` or provide inline multilingual objects
3. Ensure `category.name` has all language translations
4. Optional: Add `description` object for custom descriptions (otherwise auto-generated from ingredients)

## Asset Guidelines

- Images stored in `assets/images/` with snake_case naming matching `image` field
- PNG files auto-converted to WebP via `<picture>` elements with fallback
- Keep images under ~200 KB for performance
- Placeholder SVG used when image path missing (menu.js:34)

## Important Code Locations

- Default category selection: menu.js:9, menu.js:565-576
- Language fallback logic: menu.js:36-73
- Dish card rendering: menu.js:407-508
- Modal content updates: menu.js:169-256
- Theme time ranges: theme.js:38-46
- Event bus system: utils.js:84-96
- Translation system: i18n.js:579-589

## Deployment

Static site hosted on GitHub Pages. No build process required. All JavaScript uses ES modules (native browser support). Ensure all file paths use forward slashes and are relative to repository root.
