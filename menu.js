/**
 * Module de gestion de l'affichage et du filtrage du menu
 */
import { EVENTS, onEvent, createElement, formatPrice, emitEvent } from './utils.js';
import { translate, getCurrentLanguage, normalizeLanguage } from './i18n.js';
import menuItemsSource from './data/menu.js';
import ingredientsSource from './data/ingredients.js';

const DEFAULT_CATEGORY = 'sale';

// État du menu
let menuData = [];
let currentCategory = 'all';
let initialCategoryApplied = false;
let isLoading = true;
let ingredientsData = {}; // Cache des ingrédients traduits
let dishModalElement = null;
let dishModalCloseButton = null;
let dishModalImageElement = null;
let dishModalImageSourceElement = null;
let dishModalPriceElement = null;
let dishModalNameElement = null;
let dishModalDescriptionElement = null;
let dishModalIngredientsSection = null;
let dishModalIngredientsList = null;
let dishModalSupplementsSection = null;
let dishModalSupplementsList = null;
let currentModalDish = null;
let previouslyFocusedElement = null;

const FALLBACK_LANGUAGES = ['fr', 'en', 'th'];
const PLACEHOLDER_IMAGE = 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="240" height="240"><rect width="240" height="240" fill="#f5f5f5"/><rect x="16" y="16" width="208" height="208" fill="#e0e0e0" rx="12"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="#9e9e9e">Image</text></svg>`);

const resolveLocalizedText = (value, lang, fallbacks = FALLBACK_LANGUAGES) => {
  if (!value) {
    return '';
  }

  if (typeof value === 'string') {
    return value;
  }

  const normalizedLang = normalizeLanguage(lang);
  const entries = Object.entries(value);
  if (entries.length === 0) {
    return '';
  }

  if (value[lang]) {
    return value[lang];
  }

  const normalizedMatch = entries.find(([key]) => normalizeLanguage(key) === normalizedLang);
  if (normalizedMatch) {
    return normalizedMatch[1];
  }

  for (const fallback of fallbacks) {
    const match = entries.find(([key]) => normalizeLanguage(key) === normalizeLanguage(fallback));
    if (match) {
      return match[1];
    }
  }

  const stringEntry = entries.find(([, val]) => typeof val === 'string');
  if (stringEntry) {
    return stringEntry[1];
  }

  return '';
};

const buildDishImageSources = (imagePath = '') => {
  if (!imagePath) {
    return { png: PLACEHOLDER_IMAGE, webp: null };
  }

  const isPrefixed = imagePath.startsWith('./') || imagePath.startsWith('/');
  const isDataOrHttp = imagePath.startsWith('data:') || imagePath.startsWith('http');
  const normalizedPath = isDataOrHttp || isPrefixed ? imagePath : `./${imagePath}`;

  if (isDataOrHttp) {
    return { png: normalizedPath, webp: null };
  }

  const lowerCasePath = normalizedPath.toLowerCase();
  const hasPngExtension = lowerCasePath.endsWith('.png');
  const webpPath = hasPngExtension ? normalizedPath.replace(/\.png$/i, '.webp') : null;

  return {
    png: normalizedPath,
    webp: webpPath
  };
};

const translateIngredientForLanguage = (ingredient, lang) => {
  if (!ingredient) {
    return '';
  }

  if (typeof ingredient === 'object' && ingredient !== null) {
    return resolveLocalizedText(ingredient, lang);
  }

  const cachedIngredient = ingredientsData[ingredient];
  if (cachedIngredient) {
    return resolveLocalizedText(cachedIngredient, lang) || ingredient;
  }

  return ingredient;
};

const getTranslatedIngredientNames = (dish, lang) => {
  if (!dish.ingredients || dish.ingredients.length === 0) {
    return [];
  }

  const translated = dish.ingredients
    .map((ingredient) => translateIngredientForLanguage(ingredient, lang))
    .filter((name) => typeof name === 'string' && name.trim().length > 0);

  return Array.from(new Set(translated));
};

const formatListWithLocale = (items, lang) => {
  if (!items || items.length === 0) {
    return '';
  }

  try {
    const formatter = new Intl.ListFormat(lang, { style: 'long', type: 'conjunction' });
    return formatter.format(items);
  } catch (error) {
    return items.join(', ');
  }
};

const buildDishDescription = (dish, lang, dishName) => {
  const ingredients = getTranslatedIngredientNames(dish, lang);
  if (ingredients.length === 0) {
    return translate('dish.description.fallback', { name: dishName });
  }

  const formattedIngredients = formatListWithLocale(ingredients, lang);
  return translate('dish.description.template', {
    name: dishName,
    ingredients: formattedIngredients
  });
};

const clearChildren = (element) => {
  if (!element) {
    return;
  }

  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const updateDishModalContent = (dish) => {
  if (!dishModalElement) {
    return;
  }

  const lang = getCurrentLanguage();
  const dishName = resolveLocalizedText(dish.name, lang) || dish.id || '';
  const imageSources = buildDishImageSources(dish.image);

  if (dishModalNameElement) {
    dishModalNameElement.textContent = dishName;
  }

  if (dishModalImageElement) {
    dishModalImageElement.src = imageSources.png;
    dishModalImageElement.alt = dishName;
  }

  if (dishModalImageSourceElement) {
    if (imageSources.webp) {
      dishModalImageSourceElement.srcset = imageSources.webp;
    } else {
      dishModalImageSourceElement.removeAttribute('srcset');
    }
  }

  if (dishModalPriceElement) {
    dishModalPriceElement.textContent = formatPrice(dish.price);
  }

  if (dishModalDescriptionElement) {
    dishModalDescriptionElement.textContent = buildDishDescription(dish, lang, dishName);
  }

  const translatedIngredients = getTranslatedIngredientNames(dish, lang);
  if (dishModalIngredientsSection) {
    dishModalIngredientsSection.hidden = translatedIngredients.length === 0;
  }

  if (dishModalIngredientsList) {
    clearChildren(dishModalIngredientsList);
    translatedIngredients.forEach((ingredientName) => {
      const item = createElement('li', {}, ingredientName);
      dishModalIngredientsList.appendChild(item);
    });
  }

  const supplements = Array.isArray(dish.supplements) ? dish.supplements : [];
  if (dishModalSupplementsSection) {
    dishModalSupplementsSection.hidden = supplements.length === 0;
  }

  if (dishModalSupplementsList) {
    clearChildren(dishModalSupplementsList);
    supplements.forEach((supplement) => {
      const name = resolveLocalizedText(supplement.name, lang);
      const price = formatPrice(supplement.price ?? dish.supplementPrice ?? 0);
      const listItem = createElement('li', {}, [
        createElement('span', { class: 'dish-modal-supplement-name' }, name),
        createElement('span', { class: 'dish-modal-supplement-price' }, translate('dish.supplement.price', { price }))
      ]);
      dishModalSupplementsList.appendChild(listItem);
    });
  }
};

const closeDishModal = () => {
  if (!dishModalElement || dishModalElement.hasAttribute('hidden')) {
    return;
  }

  dishModalElement.setAttribute('hidden', '');
  dishModalElement.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  currentModalDish = null;

  if (previouslyFocusedElement && typeof previouslyFocusedElement.focus === 'function') {
    previouslyFocusedElement.focus();
  }
  previouslyFocusedElement = null;
};

const openDishModal = (dish) => {
  if (!dishModalElement) {
    return;
  }

  previouslyFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  currentModalDish = dish;
  updateDishModalContent(dish);

  dishModalElement.removeAttribute('hidden');
  dishModalElement.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  if (dishModalCloseButton) {
    dishModalCloseButton.focus();
  }
};

const setupDishModal = () => {
  dishModalElement = document.getElementById('dish-modal');
  if (!dishModalElement) {
    return;
  }

  dishModalElement.setAttribute('aria-hidden', 'true');

  dishModalCloseButton = dishModalElement.querySelector('.dish-modal-close');
  dishModalImageElement = dishModalElement.querySelector('#dish-modal-image');
  dishModalImageSourceElement = dishModalElement.querySelector('#dish-modal-image-source');
  dishModalPriceElement = dishModalElement.querySelector('#dish-modal-price');
  dishModalNameElement = dishModalElement.querySelector('#dish-modal-title');
  dishModalDescriptionElement = dishModalElement.querySelector('#dish-modal-description');
  dishModalIngredientsSection = dishModalElement.querySelector('#dish-modal-ingredients');
  dishModalIngredientsList = dishModalElement.querySelector('.dish-modal-ingredients-list');
  dishModalSupplementsSection = dishModalElement.querySelector('#dish-modal-supplements');
  dishModalSupplementsList = dishModalElement.querySelector('.dish-modal-supplements-list');

  const closeTriggers = dishModalElement.querySelectorAll('[data-modal-close-trigger]');
  closeTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      closeDishModal();
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeDishModal();
    }
  });
};

/**
 * Filtre les plats selon la catégorie sélectionnée
 */
const filterDishesByCategory = (dishes, category) => {
  if (category === 'all') return dishes;
  return dishes.filter(dish => dish.category && dish.category.id === category);
};

/**
 * Filtre les plats disponibles (exclut ceux avec quantité = 0)
 */
const filterAvailableDishes = (dishes) => {
  return dishes.filter(dish => {
    if (!dish.quantity) return true; // Si pas de quantité définie, on l'affiche
    if (dish.quantity.infinite) return true; // Si quantité infinie, on l'affiche
    return dish.quantity.amount > 0; // Sinon, on affiche seulement si quantité > 0
  });
};

/**
 * Met à jour le cache des ingrédients traduits
 */
const updateIngredientsCache = (ingredients) => {
  ingredientsData = {};
  ingredients.forEach(ingredient => {
    if (ingredient.id && ingredient.name) {
      ingredientsData[ingredient.id] = ingredient.name;
    }
  });
};

/**
 * Extrait les catégories uniques du menu
 */
const extractCategories = (dishes) => {
  const categories = new Map();
  dishes.forEach(dish => {
    if (dish.category && dish.category.id && !categories.has(dish.category.id)) {
      categories.set(dish.category.id, dish.category);
    }
  });
  return Array.from(categories.values());
};

/**
 * Crée les boutons de catégorie dans l'UI
 */
const createCategoryButtons = (categories) => {
  const container = document.querySelector('.category-buttons');
  if (!container) return;
  const allButton = container.querySelector('[data-category="all"]');
  container.innerHTML = '';
  if (allButton) container.appendChild(allButton);

  const currentLang = getCurrentLanguage();
  categories.forEach(category => {
    const button = createElement('button', {
      'class': 'btn-category',
      'data-category': category.id
    }, resolveLocalizedText(category.name, currentLang) || category.id);
    button.addEventListener('click', () => selectCategory(category.id));
    container.appendChild(button);
  });
};

/**
 * Sélectionne une catégorie et met à jour l'UI
 */
const selectCategory = (categoryId) => {
  currentCategory = categoryId;
  document.querySelectorAll('.btn-category').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-category') === categoryId);
  });
  renderDishes();
  emitEvent(EVENTS.CATEGORY_SELECTED, categoryId);
};

/**
 * Crée une carte de plat
 */
const createDishCard = (dish) => {
  const template = document.getElementById('dish-template');
  if (!template) return null;
  const card = template.content.firstElementChild?.cloneNode(true);
  if (!card) {
    return null;
  }
  const currentLang = getCurrentLanguage();

  // Image, Nom, Prix, etc.
  const pictureElement = card.querySelector('picture');
  const sourceElement = pictureElement?.querySelector('[data-dish-image-source]');
  const imageElement = pictureElement?.querySelector('img');
  if (!imageElement) {
    return null;
  }
  const dishName = resolveLocalizedText(dish.name, currentLang) || dish.id || '';
  const imageSources = buildDishImageSources(dish.image);

  imageElement.src = imageSources.png;
  imageElement.alt = dishName;
  if (sourceElement) {
    if (imageSources.webp) {
      sourceElement.srcset = imageSources.webp;
    } else {
      sourceElement.removeAttribute('srcset');
    }
  }
  
  // Nom et code de référence
  const dishNameElement = card.querySelector('.dish-name');
  if (!dishNameElement) {
    return null;
  }
  
  if (dish.reference) {
    dishNameElement.innerHTML = `
      <span class="dish-name-text">${dishName}</span>
      <span class="dish-reference">${dish.reference}</span>
    `;
  } else {
    dishNameElement.textContent = dishName;
  }
  
  const priceElement = card.querySelector('.dish-price');
  if (priceElement) {
    priceElement.textContent = formatPrice(dish.price);
  }

  // Ingrédients (collapsible)
  const ingredientsElement = card.querySelector('.dish-ingredients');
  if (ingredientsElement) {
    ingredientsElement.remove();
  }

  // Suppléments
  const supplementsContainer = card.querySelector('.dish-supplements');
  if (supplementsContainer && dish.supplements && dish.supplements.length > 0) {
    supplementsContainer.innerHTML = '';
    const titleElement = createElement('h4', { class: 'supplements-title' }, translate('dish.supplements'));
    const tagsContainer = createElement('div', { class: 'tags-container supplements-tags' });
    dish.supplements.forEach(supplement => {
      const price = formatPrice(supplement.price || dish.supplementPrice || 0);
      const name = resolveLocalizedText(supplement.name, currentLang);
      const tagElement = createElement('span', { class: 'supplement-tag' }, [
        createElement('span', { class: 'supplement-name' }, name),
        createElement('span', { class: 'supplement-price' }, translate('dish.supplement.price', { price }))
      ]);
      tagsContainer.appendChild(tagElement);
    });
    supplementsContainer.appendChild(titleElement);
    supplementsContainer.appendChild(tagsContainer);
  } else if (supplementsContainer) {
    supplementsContainer.style.display = 'none';
  }

  card.dataset.dishId = dish.id || '';
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-haspopup', 'dialog');

  const handleActivation = (event) => {
    if (event.type === 'keydown') {
      const key = event.key;
      const isActivationKey = key === 'Enter' || key === ' ' || key === 'Spacebar' || key === 'Space';
      if (!isActivationKey) {
        return;
      }
      event.preventDefault();
    }
    openDishModal(dish);
  };

  card.addEventListener('click', handleActivation);
  card.addEventListener('keydown', handleActivation);

  return card;
};

/**
 * Affiche les plats dans l'UI
 */
const renderDishes = () => {
  const container = document.getElementById('dishes-grid');
  if (!container) return;
  container.innerHTML = '';

  if (isLoading) {
    container.appendChild(createElement('div', { 'class': 'loading-indicator' }, [
      createElement('span', { 'data-i18n': 'app.loading' }, translate('app.loading'))
    ]));
    return;
  }

  if (!menuData || menuData.length === 0) {
    container.appendChild(
      createElement('div', { 'class': 'empty-message', 'data-i18n': 'menu.empty' }, translate('menu.empty'))
    );
    return;
  }

  const availableDishes = filterAvailableDishes(menuData);
  const filteredDishes = filterDishesByCategory(availableDishes, currentCategory);

  if (filteredDishes.length === 0) {
    container.appendChild(
      createElement('div', { 'class': 'empty-message', 'data-i18n': 'menu.empty' }, translate('menu.empty'))
    );
    return;
  }

  filteredDishes.forEach(dish => {
    const card = createDishCard(dish);
    if (card) container.appendChild(card);
  });
};

/**
 * Met à jour le menu avec les nouvelles données
 */
const updateMenu = (menu) => {
  if (!menu || !Array.isArray(menu)) {
    console.error('[Menu] Format de menu invalide:', menu);
    return;
  }
  menuData = menu;
  isLoading = false;

  const categories = extractCategories(menu);
  createCategoryButtons(categories);

  const categoryExists = (categoryId) =>
    categoryId === 'all' || categories.some(category => category.id === categoryId);

  if (!initialCategoryApplied && categoryExists(DEFAULT_CATEGORY)) {
    currentCategory = DEFAULT_CATEGORY;
    initialCategoryApplied = true;
  } else if (!categoryExists(currentCategory)) {
    if (categoryExists(DEFAULT_CATEGORY)) {
      currentCategory = DEFAULT_CATEGORY;
    } else if (categories.length > 0) {
      currentCategory = categories[0].id;
    } else {
      currentCategory = 'all';
    }
  }

  selectCategory(currentCategory);
};

/**
 * Initialise le module de menu
 */
export const initMenu = () => {
  isLoading = true;
  setupDishModal();
  renderDishes();
  onEvent(EVENTS.LANGUAGE_CHANGED, () => {
    if (menuData.length > 0) {
      createCategoryButtons(extractCategories(menuData));
      selectCategory(currentCategory);
    }
    if (currentModalDish) {
      updateDishModalContent(currentModalDish);
    }
  });
  document.querySelectorAll('.btn-category').forEach(btn => {
    btn.addEventListener('click', () => {
      selectCategory(btn.getAttribute('data-category'));
    });
  });

  updateIngredientsCache(ingredientsSource);
  updateMenu(menuItemsSource);
};
export default {
  initMenu,
  updateMenu
};
