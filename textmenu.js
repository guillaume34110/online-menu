/**
 * Module de menu textuel traditionnel
 */
import { translate, getCurrentLanguage, normalizeLanguage, EVENTS, onEvent } from './i18n.js';
import { formatPrice as formatPriceOriginal } from './utils.js';
import menuItemsSource from './data/menu.js';
import ingredientsSource from './data/ingredients.js';

// Format prix avec symbole à la fin
const formatPrice = (price, currency = '฿') => {
  if (Number.isInteger(price) || price % 1 === 0) {
    return `${price} ${currency}`;
  }
  return `${price.toFixed(2)} ${currency}`;
};

const FALLBACK_LANGUAGES = ['en', 'th', 'fr'];
const JAM_INGREDIENTS = [
  'confiture_fraise',
  'confiture_mure',
  'confiture_mulberry',
  'confiture_gingembre',
  'confiture_papaye_passion',
  'confiture_ananas',
  'confiture_ananas_passion',
  'confiture_mangue',
  'confiture_mangue_passion',
  'confiture_mangue_verte_citron_vert',
  'confiture_passion',
  'confiture_coco'
];

let ingredientsData = {};
let modal = null;
let closeButton = null;
let contentContainer = null;

const resolveLocalizedText = (value, lang, fallbacks = FALLBACK_LANGUAGES) => {
  if (!value) return '';
  if (typeof value === 'string') return value;

  const normalizedLang = normalizeLanguage(lang);
  const entries = Object.entries(value);
  if (entries.length === 0) return '';

  if (value[lang]) return value[lang];

  const normalizedMatch = entries.find(([key]) => normalizeLanguage(key) === normalizedLang);
  if (normalizedMatch) return normalizedMatch[1];

  for (const fallback of fallbacks) {
    const match = entries.find(([key]) => normalizeLanguage(key) === normalizeLanguage(fallback));
    if (match) return match[1];
  }

  const stringEntry = entries.find(([, val]) => typeof val === 'string');
  return stringEntry ? stringEntry[1] : '';
};

const translateIngredient = (ingredient, lang) => {
  if (!ingredient) return '';
  if (typeof ingredient === 'object' && ingredient !== null) {
    return resolveLocalizedText(ingredient, lang);
  }
  const cached = ingredientsData[ingredient];
  return cached ? resolveLocalizedText(cached, lang) || ingredient : ingredient;
};

const extractJamFlavor = (jamIngredient, lang) => {
  const fullName = translateIngredient(jamIngredient, lang);
  if (!fullName) return '';

  let flavor = fullName;

  // Français: "Confiture de XXX" -> "XXX"
  flavor = flavor.replace(/^Confiture de /i, '');

  // Anglais: "XXX Jam" -> "XXX"
  flavor = flavor.replace(/ Jam$/i, '');

  // Allemand: "XXXmarmelade" -> "XXX"
  flavor = flavor.replace(/marmelade$/i, '');
  flavor = flavor.replace(/-Konfitüre$/i, '');

  // Espagnol: "Mermelada de XXX" -> "XXX"
  flavor = flavor.replace(/^Mermelada de /i, '');

  // Italien: "Marmellata di XXX" -> "XXX"
  flavor = flavor.replace(/^Marmellata di /i, '');

  // Portugais: "Geleia de XXX" -> "XXX"
  flavor = flavor.replace(/^Geleia de /i, '');

  // Thaï: "แยม" (jam) au début
  flavor = flavor.replace(/^แยม/i, '');

  // Japonais: "ジャム" (jam) à la fin
  flavor = flavor.replace(/ジャム$/i, '');

  // Chinois: "果酱" (jam) à la fin
  flavor = flavor.replace(/果酱$/i, '');

  // Néerlandais: "XXXjam" -> "XXX"
  flavor = flavor.replace(/jam$/i, '');

  // Russe: "Джем из XXX" -> "XXX" ou "XXX джем" -> "XXX"
  flavor = flavor.replace(/^Джем из /i, '');
  flavor = flavor.replace(/ джем$/i, '');
  flavor = flavor.replace(/ный джем$/i, 'а');
  flavor = flavor.replace(/вый джем$/i, 'а');

  // Coréen: "잼" (jam) à la fin
  flavor = flavor.replace(/잼$/i, '');
  flavor = flavor.replace(/ 잼$/i, '');

  return flavor.trim();
};

const getTranslatedIngredients = (dish, lang) => {
  if (!dish.ingredients || dish.ingredients.length === 0) return [];
  const translated = dish.ingredients
    .map(ing => translateIngredient(ing, lang))
    .filter(name => typeof name === 'string' && name.trim().length > 0);
  return Array.from(new Set(translated));
};

const formatList = (items, lang) => {
  if (!items || items.length === 0) return '';
  try {
    const formatter = new Intl.ListFormat(lang, { style: 'long', type: 'conjunction' });
    return formatter.format(items);
  } catch {
    return items.join(', ');
  }
};

const buildDescription = (dish, lang, dishName) => {
  if (dish.description && dish.description[lang]) {
    return dish.description[lang];
  }
  const ingredients = getTranslatedIngredients(dish, lang);
  if (ingredients.length === 0) {
    return translate('dish.description.fallback', { name: dishName });
  }
  return translate('dish.description.template', {
    name: dishName,
    ingredients: formatList(ingredients, lang)
  });
};

const updateIngredientsCache = (ingredients) => {
  ingredientsData = {};
  ingredients.forEach(ing => {
    if (ing.id && ing.name) ingredientsData[ing.id] = ing.name;
  });
};

const filterAvailable = (dishes) => {
  return dishes.filter(dish => {
    if (!dish.quantity) return true;
    if (dish.quantity.infinite) return true;
    return dish.quantity.amount > 0;
  });
};

const groupByCategory = (dishes) => {
  const categories = new Map();
  dishes.forEach(dish => {
    if (!dish.category || !dish.category.id) return;
    const catId = dish.category.id;
    if (!categories.has(catId)) {
      categories.set(catId, {
        id: catId,
        name: dish.category.name,
        dishes: []
      });
    }
    categories.get(catId).dishes.push(dish);
  });
  return Array.from(categories.values());
};

const isJamCrepe = (dish) => {
  if (!dish.ingredients || dish.ingredients.length === 0) return false;
  return dish.ingredients.some(ing => JAM_INGREDIENTS.includes(ing));
};

const compressJamCrepes = (dishes, lang) => {
  const jamCrepes = dishes.filter(isJamCrepe);
  const others = dishes.filter(d => !isJamCrepe(d));

  if (jamCrepes.length === 0) return dishes;

  // Extraire uniquement les noms de parfums (sans "Confiture de" ou "Jam")
  const jamFlavors = jamCrepes.map(dish => {
    const jamIngredient = dish.ingredients.find(ing => JAM_INGREDIENTS.includes(ing));
    return extractJamFlavor(jamIngredient, lang);
  }).filter(flavor => flavor.length > 0);

  const compressed = {
    ...jamCrepes[0],
    id: 'crepes_confitures_compressed',
    isCompressed: true,
    jamFlavors: jamFlavors, // Liste des parfums uniquement
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

  return [compressed, ...others];
};

const createMenuItem = (dish, lang) => {
  const dishName = resolveLocalizedText(dish.name, lang) || dish.id || '';
  const description = buildDescription(dish, lang, dishName);

  const li = document.createElement('li');

  if (dish.isCompressed) {
    li.className = 'menu-item menu-item-compressed';

    const header = document.createElement('div');
    header.className = 'menu-item-compressed-header';

    const nameBlock = document.createElement('div');
    nameBlock.className = 'menu-item-compressed-name-block';

    const name = document.createElement('span');
    name.className = 'menu-item-name';
    name.textContent = dishName;
    nameBlock.appendChild(name);

    // Parfums de confitures inline
    if (dish.jamFlavors) {
      const variants = document.createElement('span');
      variants.className = 'menu-item-variants';
      variants.textContent = `(${dish.jamFlavors.join(', ')})`;
      nameBlock.appendChild(variants);
    }

    header.appendChild(nameBlock);

    const dots = document.createElement('div');
    dots.className = 'menu-item-dots';
    header.appendChild(dots);

    if (dish.price) {
      const price = document.createElement('div');
      price.className = 'menu-item-price';
      price.textContent = formatPrice(dish.price);
      header.appendChild(price);
    }

    li.appendChild(header);

    if (dish.sizes && dish.sizes.length > 0) {
      const sizes = document.createElement('div');
      sizes.className = 'menu-item-sizes';
      dish.sizes.forEach((size, idx) => {
        const sizeSpan = document.createElement('span');
        sizeSpan.className = 'menu-item-size';
        sizeSpan.innerHTML = `<span class="size-name">${translate(`dish.size.${size.id}`)}</span> <span class="size-reference">${size.reference}</span> <span class="size-price">${formatPrice(size.price)}</span>`;
        sizes.appendChild(sizeSpan);
      });
      li.appendChild(sizes);
    }
  } else {
    li.className = 'menu-item';

    const left = document.createElement('div');
    left.className = 'menu-item-left';

    const nameSpan = document.createElement('span');
    nameSpan.className = 'menu-item-name';
    nameSpan.textContent = dishName;
    left.appendChild(nameSpan);

    if (dish.reference) {
      const ref = document.createElement('span');
      ref.className = 'menu-item-reference';
      ref.textContent = `(${dish.reference})`;
      left.appendChild(ref);
    }

    li.appendChild(left);

    const dots = document.createElement('div');
    dots.className = 'menu-item-dots';
    li.appendChild(dots);

    if (dish.sizes && dish.sizes.length > 0) {
      const priceDiv = document.createElement('div');
      priceDiv.className = 'menu-item-price';

      const sizesContainer = document.createElement('div');
      sizesContainer.className = 'menu-item-sizes';
      dish.sizes.forEach((size, idx) => {
        const sizeSpan = document.createElement('span');
        sizeSpan.className = 'menu-item-size';
        sizeSpan.innerHTML = `<span class="size-name">${translate(`dish.size.${size.id}`)}</span> <span class="size-reference">${size.reference}</span> <span class="size-price">${formatPrice(size.price)}</span>`;
        sizesContainer.appendChild(sizeSpan);
      });

      li.appendChild(sizesContainer);
    } else if (dish.price) {
      const price = document.createElement('div');
      price.className = 'menu-item-price';
      price.textContent = formatPrice(dish.price);
      li.appendChild(price);
    }
  }

  return li;
};

const createCategory = (category, lang) => {
  const section = document.createElement('div');
  section.className = 'menu-category';

  const title = document.createElement('h3');
  title.className = 'category-title';
  title.textContent = resolveLocalizedText(category.name, lang);
  section.appendChild(title);

  // Check for notice in the category (using the first dish's category object)
  if (category.dishes && category.dishes.length > 0) {
    const firstDish = category.dishes[0];
    if (firstDish.category && firstDish.category.notice) {
      const noticeText = resolveLocalizedText(firstDish.category.notice, lang);
      if (noticeText) {
        const noticeDiv = document.createElement('div');
        noticeDiv.className = 'category-notice';
        noticeDiv.style.fontStyle = 'italic';
        noticeDiv.style.marginBottom = '10px';
        noticeDiv.style.fontSize = '0.9em';
        noticeDiv.textContent = noticeText;
        section.appendChild(noticeDiv);
      }
    }
  }

  const ul = document.createElement('ul');
  ul.className = 'menu-items';

  const processed = compressJamCrepes(category.dishes, lang);
  processed.forEach(dish => {
    const item = createMenuItem(dish, lang);
    ul.appendChild(item);
  });

  section.appendChild(ul);
  return section;
};

const collectSupplements = (dishes) => {
  const map = new Map();
  dishes.forEach(dish => {
    if (dish.supplements && dish.supplements.length > 0) {
      dish.supplements.forEach(sup => {
        const key = JSON.stringify(sup);
        if (!map.has(key)) map.set(key, sup);
      });
    }
  });
  return Array.from(map.values());
};

const renderMenu = () => {
  if (!contentContainer) return;

  contentContainer.innerHTML = '';

  const lang = getCurrentLanguage();
  const available = filterAvailable(menuItemsSource);
  const categories = groupByCategory(available);

  // Header
  const header = document.createElement('div');
  header.className = 'menu-header';
  header.innerHTML = `
    <h2 class="menu-restaurant-name">${translate('restaurant.name')}</h2>
    <p class="menu-restaurant-subtitle">${translate('restaurant.subtitle')}</p>
  `;
  contentContainer.appendChild(header);

  // Grid 2 colonnes
  const grid = document.createElement('div');
  grid.className = 'menu-grid';

  // Colonne gauche : crepes salées et sucrées
  const leftCol = document.createElement('div');
  leftCol.className = 'menu-column-left';

  // Salé
  categories.forEach(cat => {
    const catId = cat.id.toLowerCase();
    if (catId === 'sale') {
      const section = createCategory(cat, lang);
      leftCol.appendChild(section);
    }
  });

  // Sucré
  categories.forEach(cat => {
    const catId = cat.id.toLowerCase();
    if (catId === 'sucre') {
      const section = createCategory(cat, lang);
      leftCol.appendChild(section);
    }
  });

  // Crêpes confitures (une seule ligne avec liste des parfums en dessous)
  const confituresCat = categories.find(cat => cat.id.toLowerCase() === 'confiture');
  if (confituresCat) {
    const jamCrepes = confituresCat.dishes.filter(isJamCrepe);
    if (jamCrepes.length > 0) {
      const jamFlavors = jamCrepes.map(dish => {
        const jamIngredient = dish.ingredients.find(ing => JAM_INGREDIENTS.includes(ing));
        return extractJamFlavor(jamIngredient, lang);
      }).filter(flavor => flavor.length > 0);

      const firstJam = jamCrepes[0];
      const itemsContainer = document.createElement('ul');
      itemsContainer.className = 'menu-items';
      itemsContainer.style.marginTop = '0';

      const li = document.createElement('li');
      li.className = 'menu-item menu-item-compressed';

      const header = document.createElement('div');
      header.className = 'menu-item-compressed-header';

      const nameBlock = document.createElement('div');
      nameBlock.className = 'menu-item-compressed-name-block';

      const name = document.createElement('span');
      name.className = 'menu-item-name';
      name.textContent = resolveLocalizedText({
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
      }, lang);
      nameBlock.appendChild(name);

      header.appendChild(nameBlock);

      const dots = document.createElement('div');
      dots.className = 'menu-item-dots';
      header.appendChild(dots);

      const price = document.createElement('div');
      price.className = 'menu-item-price';
      price.textContent = formatPrice(firstJam.price);
      header.appendChild(price);

      li.appendChild(header);

      // Tailles
      if (firstJam.sizes && firstJam.sizes.length > 0) {
        const sizes = document.createElement('div');
        sizes.className = 'menu-item-sizes';
        firstJam.sizes.forEach((size) => {
          const sizeSpan = document.createElement('span');
          sizeSpan.className = 'menu-item-size';
          sizeSpan.innerHTML = `<span class="size-name">${translate(`dish.size.${size.id}`)}</span> <span class="size-reference">${size.reference}</span> <span class="size-price">${formatPrice(size.price)}</span>`;
          sizes.appendChild(sizeSpan);
        });
        li.appendChild(sizes);
      }

      // Liste des parfums en dessous
      const flavorsList = document.createElement('div');
      flavorsList.className = 'menu-item-variants';
      flavorsList.textContent = jamFlavors.join(', ');
      li.appendChild(flavorsList);

      itemsContainer.appendChild(li);
      leftCol.appendChild(itemsContainer);
    }
  }

  grid.appendChild(leftCol);

  // Colonne droite : boissons et suppléments
  const rightCol = document.createElement('div');
  rightCol.className = 'menu-column-right';

  // Somtam (au-dessus des boissons)
  categories.forEach(cat => {
    const catId = cat.id.toLowerCase();
    if (catId === 'somtam') {
      const section = createCategory(cat, lang);
      rightCol.appendChild(section);
    }
  });

  // Boissons
  categories.forEach(cat => {
    const catId = cat.id.toLowerCase();
    if (catId === 'boisson') {
      const section = createCategory(cat, lang);
      rightCol.appendChild(section);
    }
  });

  // Suppléments (max 8)
  const supplements = collectSupplements(available).slice(0, 8);
  if (supplements.length > 0) {
    const supSection = document.createElement('div');
    supSection.className = 'supplements-section';

    const supTitle = document.createElement('h3');
    supTitle.className = 'supplements-title';
    supTitle.textContent = translate('text.menu.supplements.title');
    supSection.appendChild(supTitle);

    const supList = document.createElement('div');
    supList.className = 'supplements-list';
    supplements.forEach(sup => {
      const item = document.createElement('div');
      item.className = 'supplement-item';
      item.innerHTML = `<span class="supplement-name">${resolveLocalizedText(sup.name, lang)}</span><span class="supplement-price">${formatPrice(sup.price || 0)}</span>`;
      supList.appendChild(item);
    });
    supSection.appendChild(supList);

    rightCol.appendChild(supSection);
  }

  grid.appendChild(rightCol);
  contentContainer.appendChild(grid);

  // Horaires en pied
  const footer = document.createElement('div');
  footer.className = 'text-menu-footer';
  footer.innerHTML = `<p>${translate('header.openingHours')}</p>`;
  footer.innerHTML += `<p>${translate('header.closedMonday')}</p>`;
  contentContainer.appendChild(footer);
};

const openModal = () => {
  if (!modal) return;
  renderMenu();
  modal.removeAttribute('hidden');
  modal.classList.add('show');
  if (closeButton) closeButton.focus();
};

const closeModal = () => {
  if (!modal) return;
  modal.setAttribute('hidden', '');
  modal.classList.remove('show');
};

export const initTextMenu = () => {
  modal = document.getElementById('text-menu-modal');
  closeButton = document.getElementById('text-menu-modal-close');
  contentContainer = document.getElementById('text-menu-content');

  if (!modal) return;

  updateIngredientsCache(ingredientsSource);

  const trigger = document.getElementById('footer-text-menu-trigger');
  if (trigger) {
    trigger.addEventListener('click', openModal);
  }

  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
      closeModal();
    }
  });

  onEvent(EVENTS.LANGUAGE_CHANGED, () => {
    if (!modal.hasAttribute('hidden')) {
      renderMenu();
    }
  });
};
