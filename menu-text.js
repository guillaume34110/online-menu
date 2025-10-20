/**
 * Module de génération du menu textuel
 */
import { initI18n, translate, getCurrentLanguage, normalizeLanguage } from './i18n.js';
import { initTheme } from './theme.js';
import { formatPrice } from './utils.js';
import menuItemsSource from './data/menu.js';
import ingredientsSource from './data/ingredients.js';

const FALLBACK_LANGUAGES = ['fr', 'en', 'th'];

// Ingrédients de confitures à compresser
const JAM_INGREDIENTS = ['confiture_fraise', 'confiture_banane', 'confiture_orange'];

let ingredientsData = {};

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
  // Si le plat a une description personnalisée, l'utiliser
  if (dish.description && dish.description[lang]) {
    return dish.description[lang];
  }

  // Sinon, utiliser le système basé sur les ingrédients
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

const updateIngredientsCache = (ingredients) => {
  ingredientsData = {};
  ingredients.forEach(ingredient => {
    if (ingredient.id && ingredient.name) {
      ingredientsData[ingredient.id] = ingredient.name;
    }
  });
};

const filterAvailableDishes = (dishes) => {
  return dishes.filter(dish => {
    if (!dish.quantity) return true;
    if (dish.quantity.infinite) return true;
    return dish.quantity.amount > 0;
  });
};

const groupDishesByCategory = (dishes) => {
  const categories = new Map();

  dishes.forEach(dish => {
    if (!dish.category || !dish.category.id) return;

    const categoryId = dish.category.id;
    if (!categories.has(categoryId)) {
      categories.set(categoryId, {
        id: categoryId,
        name: dish.category.name,
        dishes: []
      });
    }
    categories.get(categoryId).dishes.push(dish);
  });

  return Array.from(categories.values());
};

const isJamCrepe = (dish) => {
  if (!dish.ingredients || dish.ingredients.length === 0) return false;
  return dish.ingredients.some(ing => JAM_INGREDIENTS.includes(ing));
};

const compressJamCrepes = (dishes, lang) => {
  const jamCrepes = dishes.filter(isJamCrepe);
  const otherDishes = dishes.filter(d => !isJamCrepe(d));

  if (jamCrepes.length === 0) {
    return dishes;
  }

  // Créer un plat compressé pour les crêpes confitures
  const jamVariants = jamCrepes.map(dish => ({
    name: resolveLocalizedText(dish.name, lang),
    ingredient: dish.ingredients.find(ing => JAM_INGREDIENTS.includes(ing))
  }));

  const firstJamCrepe = jamCrepes[0];
  const compressedItem = {
    ...firstJamCrepe,
    id: 'crepes_confitures_compressed',
    isCompressed: true,
    variants: jamVariants,
    name: {
      fr: 'Crêpes Confitures',
      en: 'Jam Crepes',
      th: 'เครปแยม',
      de: 'Marmelade-Crêpes',
      ru: 'Блины с джемом',
      zh: '果酱可丽饼',
      ko: '잼 크레페',
      ja: 'ジャムクレープ',
      es: 'Crêpes de Mermelada',
      it: 'Crêpe alla Marmellata',
      nl: 'Jam Crêpes',
      pt: 'Crepes de Geleia'
    }
  };

  return [compressedItem, ...otherDishes];
};

const createMenuItem = (dish, lang) => {
  const dishName = resolveLocalizedText(dish.name, lang) || dish.id || '';
  const description = buildDishDescription(dish, lang, dishName);

  const item = document.createElement('div');
  item.className = dish.isCompressed ? 'menu-item menu-item-compressed' : 'menu-item';

  const itemInfo = document.createElement('div');
  itemInfo.className = 'menu-item-info';

  // Header avec nom et référence
  const header = document.createElement('div');
  header.className = 'menu-item-header';

  const name = document.createElement('h3');
  name.className = 'menu-item-name';
  name.textContent = dishName;
  header.appendChild(name);

  if (dish.reference && !dish.isCompressed) {
    const reference = document.createElement('span');
    reference.className = 'menu-item-reference';
    reference.textContent = dish.reference;
    header.appendChild(reference);
  }

  itemInfo.appendChild(header);

  // Description
  const desc = document.createElement('p');
  desc.className = 'menu-item-description';
  desc.textContent = description;
  itemInfo.appendChild(desc);

  // Variantes pour les items compressés
  if (dish.isCompressed && dish.variants) {
    const variantsContainer = document.createElement('div');
    variantsContainer.className = 'menu-item-variants';

    dish.variants.forEach(variant => {
      const ingredientName = translateIngredientForLanguage(variant.ingredient, lang);
      const tag = document.createElement('span');
      tag.className = 'variant-tag';
      tag.textContent = ingredientName;
      variantsContainer.appendChild(tag);
    });

    itemInfo.appendChild(variantsContainer);
  }

  // Tailles si disponibles
  if (dish.sizes && dish.sizes.length > 0) {
    const sizesContainer = document.createElement('div');
    sizesContainer.className = 'menu-item-sizes';

    dish.sizes.forEach(size => {
      const sizeDiv = document.createElement('div');
      sizeDiv.className = 'menu-item-size';

      const sizeName = document.createElement('span');
      sizeName.className = 'size-name';
      sizeName.textContent = translate(`dish.size.${size.id}`);
      sizeDiv.appendChild(sizeName);

      if (size.reference) {
        const sizeRef = document.createElement('span');
        sizeRef.className = 'size-reference';
        sizeRef.textContent = size.reference;
        sizeDiv.appendChild(sizeRef);
      }

      const sizePrice = document.createElement('span');
      sizePrice.className = 'size-price';
      sizePrice.textContent = formatPrice(size.price);
      sizeDiv.appendChild(sizePrice);

      sizesContainer.appendChild(sizeDiv);
    });

    itemInfo.appendChild(sizesContainer);
  }

  item.appendChild(itemInfo);

  // Prix (sauf pour les items avec tailles ou compressés)
  if (!dish.sizes && !dish.isCompressed && dish.price) {
    const price = document.createElement('div');
    price.className = 'menu-item-price';
    price.textContent = formatPrice(dish.price);
    item.appendChild(price);
  }

  return item;
};

const createCategorySection = (category, lang) => {
  const section = document.createElement('section');
  section.className = 'menu-category';

  const title = document.createElement('h2');
  title.className = 'category-title';
  title.textContent = resolveLocalizedText(category.name, lang);
  section.appendChild(title);

  const itemsContainer = document.createElement('div');
  itemsContainer.className = 'menu-items';

  // Compresser les crêpes confitures
  const processedDishes = compressJamCrepes(category.dishes, lang);

  processedDishes.forEach(dish => {
    const item = createMenuItem(dish, lang);
    itemsContainer.appendChild(item);
  });

  section.appendChild(itemsContainer);

  return section;
};

const collectAllSupplements = (dishes) => {
  const supplementsMap = new Map();

  dishes.forEach(dish => {
    if (dish.supplements && dish.supplements.length > 0) {
      dish.supplements.forEach(supplement => {
        const key = JSON.stringify(supplement);
        if (!supplementsMap.has(key)) {
          supplementsMap.set(key, supplement);
        }
      });
    }
  });

  return Array.from(supplementsMap.values());
};

const renderSupplements = (supplements, lang) => {
  const supplementsSection = document.getElementById('supplements-section');
  const supplementsList = document.getElementById('supplements-list');

  if (!supplementsSection || !supplementsList) return;

  if (supplements.length === 0) {
    supplementsSection.setAttribute('hidden', '');
    return;
  }

  supplementsSection.removeAttribute('hidden');
  supplementsList.innerHTML = '';

  supplements.forEach(supplement => {
    const item = document.createElement('div');
    item.className = 'supplement-item';

    const name = document.createElement('span');
    name.className = 'supplement-name';
    name.textContent = resolveLocalizedText(supplement.name, lang);
    item.appendChild(name);

    const price = document.createElement('span');
    price.className = 'supplement-price';
    price.textContent = formatPrice(supplement.price || 0);
    item.appendChild(price);

    supplementsList.appendChild(item);
  });
};

const renderMenu = () => {
  const container = document.getElementById('menu-content');
  if (!container) return;

  container.innerHTML = '';

  const lang = getCurrentLanguage();
  const availableDishes = filterAvailableDishes(menuItemsSource);
  const categories = groupDishesByCategory(availableDishes);
  const orderMap = { sale: 1, somtam: 2, assiette: 3, sucre: 4, boisson: 5 };
  const sortedCategories = categories.slice().sort((a, b) => {
    const pa = orderMap[a.id] ?? 99;
    const pb = orderMap[b.id] ?? 99;
    if (pa !== pb) return pa - pb;
    const nameA = (resolveLocalizedText(a.name, lang) || a.id).toLowerCase();
    const nameB = (resolveLocalizedText(b.name, lang) || b.id).toLowerCase();
    return nameA.localeCompare(nameB);
  });

  sortedCategories.forEach(category => {
    const section = createCategorySection(category, lang);
    container.appendChild(section);
  });

  // Collecter et afficher les suppléments
  const allSupplements = collectAllSupplements(availableDishes);
  renderSupplements(allSupplements, lang);
};

const init = () => {
  initI18n();
  initTheme();
  updateIngredientsCache(ingredientsSource);
  renderMenu();
};

// Initialiser au chargement du DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
