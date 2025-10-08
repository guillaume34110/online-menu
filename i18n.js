/**
 * Module de gestion des langues (i18n)
 */
import { getStoredData, storeData, EVENTS, STORAGE_KEYS, emitEvent } from './utils.js';

// Langues disponibles
const AVAILABLE_LANGUAGES = ['fr', 'en', 'de', 'ru', 'zh', 'ko', 'ja', 'es', 'it', 'nl', 'pt', 'th'];
const DEFAULT_LANGUAGE = 'th';

export const normalizeLanguage = (lang) => {
  if (!lang) {
    return DEFAULT_LANGUAGE;
  }
  return String(lang).toLowerCase().split('-')[0].trim();
};

// Traductions
const translations = {
  fr: {
    'app.title': 'Menu Restaurant',
    'app.categories': 'Catégories',
    'app.loading': 'Chargement du menu...',
    'menu.empty': 'Aucun plat disponible.',
    'qr.menu.title': 'Mia farang noi',
    'qr.menu.heading': 'Scannez pour accéder au menu',
    'qr.menu.loading': 'Chargement...',
    'qr.menu.button': 'Afficher les QR codes',
    'qr.request.pending': 'Demande des QR codes en cours...',
    'qr.request.error': 'Erreur: Impossible de récupérer le QR code',
    'qr.menu.alt': 'QR Code du menu',
    'qr.menu.unavailable': 'QR Code non disponible',
    'qr.menu.missing': 'QR Code du menu non disponible',
    'app.footer': '© 2023 Restaurant - Menu en temps réel',
    'footer.disclaimer': 'Images non contractuelles',
    'header.openingHours': 'Horaires d\'ouverture : 10 h - 21 h 30',
    'legend.crepeFormats': 'Formats de crêpes : Enfant 100 g | Normal 200 g | XL 300 g',
    'category.all': 'Tous',
    'connection.connected': 'Connecté',
    'connection.connecting': 'Connexion...',
    'connection.disconnected': 'Déconnecté',
    'dish.quantity.infinite': 'Disponible',
    'dish.quantity.available': 'Disponible: {amount}',
    'dish.quantity.low': 'Reste: {amount}',
    'dish.quantity.out': 'Épuisé',
    'dish.ingredients': 'Ingrédients: ',
    'dish.supplements': 'Suppléments:',
    'dish.supplement.price': '+{price}',
    'header.phone': 'Réserver : 08 02 02 88 96',
    'header.phone.aria': 'Appeler le restaurant au 08 02 02 88 96',
    'dish.modal.close': 'Fermer la fiche plat',
    'dish.modal.ingredientsTitle': 'Ingrédients',
    'dish.modal.supplementsTitle': 'Suppléments',
    'dish.description.template': 'Savourez {name}, une création maison qui marie avec finesse {ingredients}.',
    'dish.description.fallback': 'Savourez {name}, une création maison tout en élégance.',
    'dish.size.kids': 'Enfant',
    'dish.size.regular': 'Normal',
    'dish.size.xl': 'XL',
    'dish.sizes.title': 'Tailles disponibles'
  },
  en: {
    'app.title': 'Restaurant Menu',
    'app.categories': 'Categories',
    'app.loading': 'Loading menu...',
    'menu.empty': 'No dishes available.',
    'qr.menu.title': 'Mia farang noi',
    'qr.menu.heading': 'Scan to access the menu',
    'qr.menu.loading': 'Loading...',
    'qr.menu.button': 'Show QR codes',
    'qr.request.pending': 'Requesting QR codes...',
    'qr.request.error': 'Error: Unable to fetch the QR code',
    'qr.menu.alt': 'Menu QR code',
    'qr.menu.unavailable': 'QR code not available',
    'qr.menu.missing': 'Menu QR code not available',
    'footer.disclaimer': 'Images for illustration only',
    'header.openingHours': 'Opening hours: 10:00 - 21:30',
    'legend.crepeFormats': 'Crepe sizes: Kids 100 g | Regular 200 g | XL 300 g',
    'category.all': 'All',
    'connection.connected': 'Connected',
    'connection.connecting': 'Connecting...',
    'connection.disconnected': 'Disconnected',
    'dish.quantity.infinite': 'Available',
    'dish.quantity.available': 'Available: {amount}',
    'dish.quantity.low': 'Remaining: {amount}',
    'dish.quantity.out': 'Sold out',
    'dish.ingredients': 'Ingredients: ',
    'dish.supplements': 'Add-ons:',
    'dish.supplement.price': '+{price}',
    'header.phone': 'Call: 08 02 02 88 96',
    'header.phone.aria': 'Call the restaurant at 08 02 02 88 96',
    'dish.modal.close': 'Close dish details',
    'dish.modal.ingredientsTitle': 'Ingredients',
    'dish.modal.supplementsTitle': 'Add-ons',
    'dish.description.template': 'Savor {name}, a refined house specialty showcasing {ingredients}.',
    'dish.description.fallback': 'Savor {name}, a refined house specialty crafted with care.',
    'dish.size.kids': 'Kids',
    'dish.size.regular': 'Regular',
    'dish.size.xl': 'XL',
    'dish.sizes.title': 'Available sizes'
  },
  de: {
    'app.title': 'Restaurantmenü',
    'app.categories': 'Kategorien',
    'app.loading': 'Menü wird geladen...',
    'menu.empty': 'Keine Gerichte verfügbar.',
    'qr.menu.title': 'Mia farang noi',
    'qr.menu.heading': 'Zum Menü scannen',
    'qr.menu.loading': 'Wird geladen...',
    'qr.menu.button': 'QR-Codes anzeigen',
    'qr.request.pending': 'QR-Codes werden angefordert...',
    'qr.request.error': 'Fehler: QR-Code kann nicht abgerufen werden',
    'qr.menu.alt': 'Menü-QR-Code',
    'qr.menu.unavailable': 'QR-Code nicht verfügbar',
    'qr.menu.missing': 'Menü-QR-Code nicht verfügbar',
    'app.footer': '© 2023 Restaurant - Echtzeitmenü',
    'footer.disclaimer': 'Abbildungen dienen nur zur Illustration',
    'header.openingHours': 'Öffnungszeiten: 10:00 - 21:30',
    'legend.crepeFormats': 'Crêpe-Größen: Kinder 100 g | Normal 200 g | XL 300 g',
    'category.all': 'Alle',
    'connection.connected': 'Verbunden',
    'connection.connecting': 'Verbindung wird hergestellt...',
    'connection.disconnected': 'Verbindung getrennt',
    'dish.quantity.infinite': 'Verfügbar',
    'dish.quantity.available': 'Verfügbar: {amount}',
    'dish.quantity.low': 'Verbleibend: {amount}',
    'dish.quantity.out': 'Ausverkauft',
    'dish.ingredients': 'Zutaten: ',
    'dish.supplements': 'Extras:',
    'dish.supplement.price': '+{price}',
    'header.phone': 'Reservieren: 08 02 02 88 96',
    'header.phone.aria': 'Restaurant unter 08 02 02 88 96 anrufen',
    'dish.modal.close': 'Gerichtdetails schließen',
    'dish.modal.ingredientsTitle': 'Zutaten',
    'dish.modal.supplementsTitle': 'Extras',
    'dish.description.template': 'Genießen Sie {name}, eine feine Hausspezialität, die {ingredients} in Szene setzt.',
    'dish.description.fallback': 'Genießen Sie {name}, eine feine Hausspezialität aus meisterlicher Hand.',
    'dish.size.kids': 'Kinder',
    'dish.size.regular': 'Normal',
    'dish.size.xl': 'XL',
    'dish.sizes.title': 'Verfügbare Größen'
  },
  ru: {
    'app.title': 'Меню ресторана',
    'app.categories': 'Категории',
    'app.loading': 'Загрузка меню...',
    'menu.empty': 'Нет доступных блюд.',
    'qr.menu.title': 'Mia farang noi',
    'qr.menu.heading': 'Отсканируйте, чтобы открыть меню',
    'qr.menu.loading': 'Загрузка...',
    'qr.menu.button': 'Показать QR-коды',
    'qr.request.pending': 'Запрос QR-кодов...',
    'qr.request.error': 'Ошибка: не удалось получить QR-код',
    'qr.menu.alt': 'QR-код меню',
    'qr.menu.unavailable': 'QR-код недоступен',
    'qr.menu.missing': 'QR-код меню недоступен',
    'app.footer': '© 2023 Ресторан - меню в реальном времени',
    'footer.disclaimer': 'Изображения приведены для иллюстрации',
    'header.openingHours': 'Часы работы: 10:00 - 21:30',
    'legend.crepeFormats': 'Размеры крепов: Детский 100 г | Стандарт 200 г | XL 300 г',
    'category.all': 'Все',
    'connection.connected': 'Подключено',
    'connection.connecting': 'Подключение...',
    'connection.disconnected': 'Отключено',
    'dish.quantity.infinite': 'В наличии',
    'dish.quantity.available': 'В наличии: {amount}',
    'dish.quantity.low': 'Осталось: {amount}',
    'dish.quantity.out': 'Нет в наличии',
    'dish.ingredients': 'Ингредиенты: ',
    'dish.supplements': 'Дополнения:',
    'dish.supplement.price': '+{price}',
    'header.phone': 'Позвонить: 08 02 02 88 96',
    'header.phone.aria': 'Позвонить в ресторан по номеру 08 02 02 88 96',
    'dish.modal.close': 'Закрыть описание блюда',
    'dish.modal.ingredientsTitle': 'Ингредиенты',
    'dish.modal.supplementsTitle': 'Дополнения',
    'dish.description.template': 'Насладитесь {name} — изысканной фирменной композицией, сочетающей {ingredients}.',
    'dish.description.fallback': 'Насладитесь {name} — изысканным фирменным блюдом, созданным с заботой.',
    'dish.size.kids': 'Детский',
    'dish.size.regular': 'Стандарт',
    'dish.size.xl': 'XL',
    'dish.sizes.title': 'Доступные размеры'
  },
  zh: {
    'app.title': '餐厅菜单',
    'app.categories': '分类',
    'app.loading': '正在加载菜单...',
    'menu.empty': '暂无可用菜品。',
    'qr.menu.title': 'Mia farang noi',
    'qr.menu.heading': '扫描以查看菜单',
    'qr.menu.loading': '正在加载...',
    'qr.menu.button': '显示二维码',
    'qr.request.pending': '正在请求二维码...',
    'qr.request.error': '错误：无法获取二维码',
    'qr.menu.alt': '菜单二维码',
    'qr.menu.unavailable': '二维码不可用',
    'qr.menu.missing': '菜单二维码不可用',
    'app.footer': '© 2023 餐厅 - 实时菜单',
    'footer.disclaimer': '图片仅供参考',
    'header.openingHours': '营业时间：10:00 - 21:30',
    'legend.crepeFormats': '可丽饼份量：儿童 100 克 | 常规 200 克 | XL 300 克',
    'category.all': '全部',
    'connection.connected': '已连接',
    'connection.connecting': '连接中...',
    'connection.disconnected': '已断开',
    'dish.quantity.infinite': '供应中',
    'dish.quantity.available': '供应中: {amount}',
    'dish.quantity.low': '剩余: {amount}',
    'dish.quantity.out': '售罄',
    'dish.ingredients': '配料: ',
    'dish.supplements': '加料:',
    'dish.supplement.price': '+{price}',
    'header.phone': '预订电话：08 02 02 88 96',
    'header.phone.aria': '拨打餐厅电话 08 02 02 88 96',
    'dish.modal.close': '关闭菜品详情',
    'dish.modal.ingredientsTitle': '配料',
    'dish.modal.supplementsTitle': '加选项',
    'dish.description.template': '品味 {name}，主厨以匠心演绎 {ingredients}，呈现精致风味。',
    'dish.description.fallback': '品味 {name}，主厨以匠心呈现的精致佳肴。',
    'dish.size.kids': '儿童',
    'dish.size.regular': '常规',
    'dish.size.xl': '加大',
    'dish.sizes.title': '可选份量'
  },
  ko: {
    'app.title': '레스토랑 메뉴',
    'app.categories': '카테고리',
    'app.loading': '메뉴 불러오는 중...',
    'menu.empty': '이용 가능한 메뉴가 없습니다.',
    'qr.menu.title': 'Mia farang noi',
    'qr.menu.heading': '메뉴에 접속하려면 스캔하세요',
    'qr.menu.loading': '불러오는 중...',
    'qr.menu.button': 'QR 코드 보기',
    'qr.request.pending': 'QR 코드를 요청하는 중...',
    'qr.request.error': '오류: QR 코드를 가져올 수 없습니다',
    'qr.menu.alt': '메뉴 QR 코드',
    'qr.menu.unavailable': 'QR 코드를 사용할 수 없습니다',
    'qr.menu.missing': '메뉴 QR 코드를 사용할 수 없습니다',
    'app.footer': '© 2023 레스토랑 - 실시간 메뉴',
    'footer.disclaimer': '이미지는 연출된 것입니다',
    'header.openingHours': '영업시간: 10:00 - 21:30',
    'legend.crepeFormats': '크레페 사이즈: 키즈 100 g | 레귤러 200 g | XL 300 g',
    'category.all': '전체',
    'connection.connected': '연결됨',
    'connection.connecting': '연결 중...',
    'connection.disconnected': '연결 끊김',
    'dish.quantity.infinite': '이용 가능',
    'dish.quantity.available': '이용 가능: {amount}',
    'dish.quantity.low': '남음: {amount}',
    'dish.quantity.out': '품절',
    'dish.ingredients': '재료: ',
    'dish.supplements': '추가 옵션:',
    'dish.supplement.price': '+{price}',
    'header.phone': '예약: 08 02 02 88 96',
    'header.phone.aria': '레스토랑 08 02 02 88 96 로 전화하기',
    'dish.modal.close': '요리 정보 닫기',
    'dish.modal.ingredientsTitle': '재료',
    'dish.modal.supplementsTitle': '추가 옵션',
    'dish.description.template': '세련된 하우스 스페셜 {name}로 {ingredients}의 조화를 만끽하세요.',
    'dish.description.fallback': '세련된 하우스 스페셜 {name}를 정성스럽게 즐겨보세요.',
    'dish.size.kids': '키즈',
    'dish.size.regular': '일반',
    'dish.size.xl': 'XL',
    'dish.sizes.title': '이용 가능한 사이즈'
  },
  ja: {
    'app.title': 'レストランメニュー',
    'app.categories': 'カテゴリ',
    'app.loading': 'メニューを読み込み中...',
    'menu.empty': '利用できる料理がありません。',
    'qr.menu.title': 'Mia farang noi',
    'qr.menu.heading': 'メニューを見るにはスキャンしてください',
    'qr.menu.loading': '読み込み中...',
    'qr.menu.button': 'QRコードを表示',
    'qr.request.pending': 'QRコードを要求しています...',
    'qr.request.error': 'エラー: QRコードを取得できません',
    'qr.menu.alt': 'メニューQRコード',
    'qr.menu.unavailable': 'QRコードは利用できません',
    'qr.menu.missing': 'メニューQRコードは利用できません',
    'app.footer': '© 2023 レストラン - リアルタイムメニュー',
    'footer.disclaimer': '画像はイメージです',
    'header.openingHours': '営業時間：10:00 - 21:30',
    'legend.crepeFormats': 'クレープのサイズ：キッズ 100 g | レギュラー 200 g | XL 300 g',
    'category.all': 'すべて',
    'connection.connected': '接続済み',
    'connection.connecting': '接続中...',
    'connection.disconnected': '切断されました',
    'dish.quantity.infinite': '提供中',
    'dish.quantity.available': '提供中: {amount}',
    'dish.quantity.low': '残り: {amount}',
    'dish.quantity.out': '売り切れ',
    'dish.ingredients': '原材料: ',
    'dish.supplements': '追加:',
    'dish.supplement.price': '+{price}',
    'header.phone': 'ご予約: 08 02 02 88 96',
    'header.phone.aria': 'レストランに 08 02 02 88 96 へ電話する',
    'dish.modal.close': '料理の詳細を閉じる',
    'dish.modal.ingredientsTitle': '食材',
    'dish.modal.supplementsTitle': '追加',
    'dish.description.template': '洗練されたシグネチャー料理「{name}」で、{ingredients}の調和をお楽しみください。',
    'dish.description.fallback': '洗練されたシグネチャー料理「{name}」を心ゆくまでご堪能ください。',
    'dish.size.kids': 'キッズ',
    'dish.size.regular': 'レギュラー',
    'dish.size.xl': 'XL',
    'dish.sizes.title': 'サイズ選択'
  },
  es: {
    'app.title': 'Menú del restaurante',
    'app.categories': 'Categorías',
    'app.loading': 'Cargando el menú...',
    'menu.empty': 'No hay platos disponibles.',
    'qr.menu.title': 'Mia farang noi',
    'qr.menu.heading': 'Escanee para acceder al menú',
    'qr.menu.loading': 'Cargando...',
    'qr.menu.button': 'Mostrar códigos QR',
    'qr.request.pending': 'Solicitando códigos QR...',
    'qr.request.error': 'Error: no se pudo obtener el código QR',
    'qr.menu.alt': 'Código QR del menú',
    'qr.menu.unavailable': 'Código QR no disponible',
    'qr.menu.missing': 'Código QR del menú no disponible',
    'app.footer': '© 2023 Restaurante - Menú en tiempo real',
    'footer.disclaimer': 'Imágenes meramente ilustrativas',
    'header.openingHours': 'Horario: 10:00 - 21:30',
    'legend.crepeFormats': 'Tamaños de crêpe: Infantil 100 g | Normal 200 g | XL 300 g',
    'category.all': 'Todos',
    'connection.connected': 'Conectado',
    'connection.connecting': 'Conectando...',
    'connection.disconnected': 'Desconectado',
    'dish.quantity.infinite': 'Disponible',
    'dish.quantity.available': 'Disponible: {amount}',
    'dish.quantity.low': 'Quedan: {amount}',
    'dish.quantity.out': 'Agotado',
    'dish.ingredients': 'Ingredientes: ',
    'dish.supplements': 'Suplementos:',
    'dish.supplement.price': '+{price}',
    'header.phone': 'Reservas: 08 02 02 88 96',
    'header.phone.aria': 'Llamar al restaurante al 08 02 02 88 96',
    'dish.modal.close': 'Cerrar la ficha del plato',
    'dish.modal.ingredientsTitle': 'Ingredientes',
    'dish.modal.supplementsTitle': 'Suplementos',
    'dish.description.template': 'Deguste {name}, una especialidad de la casa que realza con elegancia {ingredients}.',
    'dish.description.fallback': 'Deguste {name}, una especialidad de la casa elaborada con esmero.',
    'dish.size.kids': 'Infantil',
    'dish.size.regular': 'Normal',
    'dish.size.xl': 'XL',
    'dish.sizes.title': 'Tamaños disponibles'
  },
  it: {
    'app.title': 'Menu del ristorante',
    'app.categories': 'Categorie',
    'app.loading': 'Caricamento del menu...',
    'menu.empty': 'Nessun piatto disponibile.',
    'qr.menu.title': 'Mia farang noi',
    'qr.menu.heading': 'Scansiona per accedere al menu',
    'qr.menu.loading': 'Caricamento...',
    'qr.menu.button': 'Mostra i QR code',
    'qr.request.pending': 'Richiesta dei codici QR in corso...',
    'qr.request.error': 'Errore: impossibile recuperare il QR code',
    'qr.menu.alt': 'QR code del menu',
    'qr.menu.unavailable': 'QR code non disponibile',
    'qr.menu.missing': 'QR code del menu non disponibile',
    'app.footer': '© 2023 Ristorante - Menu in tempo reale',
    'footer.disclaimer': 'Immagini puramente indicative',
    'header.openingHours': 'Orari di apertura: 10:00 - 21:30',
    'legend.crepeFormats': 'Formati crêpe: Bambino 100 g | Normale 200 g | XL 300 g',
    'category.all': 'Tutti',
    'connection.connected': 'Connesso',
    'connection.connecting': 'Connessione...',
    'connection.disconnected': 'Disconnesso',
    'dish.quantity.infinite': 'Disponibile',
    'dish.quantity.available': 'Disponibile: {amount}',
    'dish.quantity.low': 'Restano: {amount}',
    'dish.quantity.out': 'Esaurito',
    'dish.ingredients': 'Ingredienti: ',
    'dish.supplements': 'Supplementi:',
    'dish.supplement.price': '+{price}',
    'header.phone': 'Prenotazioni: 08 02 02 88 96',
    'header.phone.aria': 'Chiama il ristorante allo 08 02 02 88 96',
    'dish.modal.close': 'Chiudi la scheda del piatto',
    'dish.modal.ingredientsTitle': 'Ingredienti',
    'dish.modal.supplementsTitle': 'Supplementi',
    'dish.description.template': 'Gustate {name}, una specialità della casa che esalta con raffinatezza {ingredients}.',
    'dish.description.fallback': 'Gustate {name}, una specialità della casa curata con raffinatezza.',
    'dish.size.kids': 'Bambini',
    'dish.size.regular': 'Normale',
    'dish.size.xl': 'XL',
    'dish.sizes.title': 'Taglie disponibili'
  },
  nl: {
    'app.title': 'Restaurantmenu',
    'app.categories': 'Categorieën',
    'app.loading': 'Menu wordt geladen...',
    'menu.empty': 'Geen gerechten beschikbaar.',
    'qr.menu.title': 'Mia farang noi',
    'qr.menu.heading': 'Scan om het menu te bekijken',
    'qr.menu.loading': 'Bezig met laden...',
    'qr.menu.button': 'QR-codes tonen',
    'qr.request.pending': 'QR-codes worden aangevraagd...',
    'qr.request.error': 'Fout: QR-code kan niet worden opgehaald',
    'qr.menu.alt': 'Menu QR-code',
    'qr.menu.unavailable': 'QR-code niet beschikbaar',
    'qr.menu.missing': 'Menu QR-code niet beschikbaar',
    'app.footer': '© 2023 Restaurant - Menu in realtime',
    'footer.disclaimer': 'Afbeeldingen dienen slechts ter illustratie',
    'header.openingHours': 'Openingstijden: 10:00 - 21:30',
    'legend.crepeFormats': 'Crêpe-formaten: Kind 100 g | Normaal 200 g | XL 300 g',
    'category.all': 'Alle',
    'connection.connected': 'Verbonden',
    'connection.connecting': 'Verbinding wordt gemaakt...',
    'connection.disconnected': 'Verbinding verbroken',
    'dish.quantity.infinite': 'Beschikbaar',
    'dish.quantity.available': 'Beschikbaar: {amount}',
    'dish.quantity.low': 'Resterend: {amount}',
    'dish.quantity.out': 'Uitverkocht',
    'dish.ingredients': 'Ingrediënten: ',
    'dish.supplements': 'Extra\'s:',
    'dish.supplement.price': '+{price}',
    'header.phone': 'Reserveren: 08 02 02 88 96',
    'header.phone.aria': 'Bel het restaurant op 08 02 02 88 96',
    'dish.modal.close': 'Gerechtinformatie sluiten',
    'dish.modal.ingredientsTitle': 'Ingrediënten',
    'dish.modal.supplementsTitle': 'Extra\'s',
    'dish.description.template': 'Geniet van {name}, een verfijnde huisspecialiteit waarin {ingredients} schitteren.',
    'dish.description.fallback': 'Geniet van {name}, een verfijnde huisspecialiteit met zorg bereid.',
    'dish.size.kids': 'Kind',
    'dish.size.regular': 'Normaal',
    'dish.size.xl': 'XL',
    'dish.sizes.title': 'Beschikbare formaten'
  },
  pt: {
    'app.title': 'Menu do restaurante',
    'app.categories': 'Categorias',
    'app.loading': 'Carregando o menu...',
    'menu.empty': 'Nenhum prato disponível.',
    'qr.menu.title': 'Mia farang noi',
    'qr.menu.heading': 'Escaneie para acessar o menu',
    'qr.menu.loading': 'Carregando...',
    'qr.menu.button': 'Mostrar QR codes',
    'qr.request.pending': 'Solicitando códigos QR...',
    'qr.request.error': 'Erro: não foi possível obter o QR code',
    'qr.menu.alt': 'QR code do menu',
    'qr.menu.unavailable': 'QR code indisponível',
    'qr.menu.missing': 'QR code do menu indisponível',
    'app.footer': '© 2023 Restaurante - Menu em tempo real',
    'footer.disclaimer': 'Imagens meramente ilustrativas',
    'header.openingHours': 'Horário de funcionamento: 10:00 - 21:30',
    'legend.crepeFormats': 'Tamanhos de crepe: Infantil 100 g | Normal 200 g | XL 300 g',
    'category.all': 'Todos',
    'connection.connected': 'Conectado',
    'connection.connecting': 'Conectando...',
    'connection.disconnected': 'Desconectado',
    'dish.quantity.infinite': 'Disponível',
    'dish.quantity.available': 'Disponível: {amount}',
    'dish.quantity.low': 'Restam: {amount}',
    'dish.quantity.out': 'Esgotado',
    'dish.ingredients': 'Ingredientes: ',
    'dish.supplements': 'Adicionais:',
    'dish.supplement.price': '+{price}',
    'header.phone': 'Reservas: 08 02 02 88 96',
    'header.phone.aria': 'Ligar para o restaurante no 08 02 02 88 96',
    'dish.modal.close': 'Fechar detalhes do prato',
    'dish.modal.ingredientsTitle': 'Ingredientes',
    'dish.modal.supplementsTitle': 'Adicionais',
    'dish.description.template': 'Saboreie {name}, uma especialidade da casa que destaca com sofisticação {ingredients}.',
    'dish.description.fallback': 'Saboreie {name}, uma especialidade da casa preparada com sofisticação.',
    'dish.size.kids': 'Infantil',
    'dish.size.regular': 'Normal',
    'dish.size.xl': 'XL',
    'dish.sizes.title': 'Tamanhos disponíveis'
  },
  th: {
    'app.title': 'เมนูร้านอาหาร',
    'app.categories': 'หมวดหมู่',
    'app.loading': 'กำลังโหลดเมนู...',
    'menu.empty': 'ไม่มีเมนูให้บริการ',
    'qr.menu.title': 'Mia farang noi',
    'qr.menu.heading': 'สแกนเพื่อเปิดเมนู',
    'qr.menu.loading': 'กำลังโหลด...',
    'qr.menu.button': 'แสดงคิวอาร์โค้ด',
    'qr.request.pending': 'กำลังร้องขอโค้ด QR...',
    'qr.request.error': 'ข้อผิดพลาด: ไม่สามารถดึง QR code ได้',
    'qr.menu.alt': 'คิวอาร์โค้ดของเมนู',
    'qr.menu.unavailable': 'ไม่มีคิวอาร์โค้ด',
    'qr.menu.missing': 'ไม่มีคิวอาร์โค้ดของเมนู',
    'app.footer': '© 2023 ร้านอาหาร - เมนูเรียลไทม์',
    'footer.disclaimer': 'ภาพใช้เพื่อประกอบการนำเสนอเท่านั้น',
    'header.openingHours': 'เวลาเปิดทำการ: 10:00 - 21:30',
    'legend.crepeFormats': 'ขนาดเครป: เด็ก 100 g | ปกติ 200 g | XL 300 g',
    'category.all': 'ทั้งหมด',
    'connection.connected': 'เชื่อมต่อแล้ว',
    'connection.connecting': 'กำลังเชื่อมต่อ...',
    'connection.disconnected': 'ขาดการเชื่อมต่อ',
    'dish.quantity.infinite': 'มีพร้อมเสิร์ฟ',
    'dish.quantity.available': 'มีพร้อมเสิร์ฟ: {amount}',
    'dish.quantity.low': 'เหลือ: {amount}',
    'dish.quantity.out': 'หมด',
    'dish.ingredients': 'ส่วนผสม: ',
    'dish.supplements': 'เพิ่มเติม:',
    'dish.supplement.price': '+{price}',
    'header.phone': 'สำรองที่นั่ง: 08 02 02 88 96',
    'header.phone.aria': 'โทรหาร้านอาหารที่ 08 02 02 88 96',
    'dish.modal.close': 'ปิดรายละเอียดเมนู',
    'dish.modal.ingredientsTitle': 'ส่วนผสม',
    'dish.modal.supplementsTitle': 'ตัวเลือกเพิ่มเติม',
    'dish.description.template': 'ลิ้มลอง {name} เมนูซิกเนเจอร์ที่ผสาน {ingredients} อย่างประณีต',
    'dish.description.fallback': 'ลิ้มลอง {name} เมนูซิกเนเจอร์ที่ปรุงอย่างประณีต',
    'dish.size.kids': 'เด็ก',
    'dish.size.regular': 'ปกติ',
    'dish.size.xl': 'XL',
    'dish.sizes.title': 'ขนาดที่มีให้เลือก'
  }
};

/**
 * État actuel de la langue
 */
let currentLanguage = normalizeLanguage(getStoredData(STORAGE_KEYS.LANGUAGE, DEFAULT_LANGUAGE));
if (!AVAILABLE_LANGUAGES.includes(currentLanguage)) {
  currentLanguage = DEFAULT_LANGUAGE;
}

/**
 * Obtient la langue actuelle
 * @returns {string} Code de la langue actuelle
 */
export const getCurrentLanguage = () => currentLanguage;

/**
 * Change la langue courante
 * @param {string} lang - Code de la langue
 */
export const setLanguage = (lang) => {
  const normalizedLang = normalizeLanguage(lang);

  if (!AVAILABLE_LANGUAGES.includes(normalizedLang)) {
    console.error(`Langue non supportée: ${lang}`);
    return;
  }
  
  currentLanguage = normalizedLang;
  storeData(STORAGE_KEYS.LANGUAGE, currentLanguage);

  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', currentLanguage);
  }

  updateDOMTranslations();
  
  // Mettre à jour la valeur du sélecteur
  const select = document.getElementById('language-select');
  if (select) {
    select.value = currentLanguage;
  }
  
  // Émettre un événement pour informer les autres modules
  emitEvent(EVENTS.LANGUAGE_CHANGED, currentLanguage);
};

/**
 * Traduit une clé dans la langue courante
 * @param {string} key - Clé de traduction
 * @param {Object} params - Paramètres à remplacer dans la traduction
 * @returns {string} Texte traduit
 */
export const translate = (key, params = {}) => {
  const langData = translations[currentLanguage] || translations[DEFAULT_LANGUAGE];
  let text = langData[key] || key;
  
  // Remplacer les paramètres {param} dans le texte
  Object.entries(params).forEach(([param, value]) => {
    text = text.replace(new RegExp(`{${param}}`, 'g'), value);
  });
  
  return text;
};

/**
 * Met à jour toutes les traductions dans le DOM
 */
const updateDOMTranslations = () => {
  if (typeof document === 'undefined') {
    return;
  }

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.textContent = translate(key);
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(element => {
    const mappings = element.getAttribute('data-i18n-attr');
    if (!mappings) {
      return;
    }

    mappings.split(';').forEach(mapping => {
      const [attribute, key] = mapping.split(':').map(part => part && part.trim());
      if (attribute && key) {
        element.setAttribute(attribute, translate(key));
      }
    });
  });

  const translatedTitle = translate('app.title');
  if (document.title !== translatedTitle) {
    document.title = translatedTitle;
  }
};

/**
 * Initialise le module i18n
 */
export const initI18n = () => {
  const select = document.getElementById('language-select');

  // Appliquer les traductions initiales et définir la valeur du sélecteur
  setLanguage(currentLanguage);

  // Ajouter l'écouteur d'événements sur le sélecteur
  if (select) {
    select.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }
};

export default {
  initI18n,
  translate,
  getCurrentLanguage,
  setLanguage
};
