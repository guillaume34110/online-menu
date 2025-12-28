export const menuItems = [
    {
      id: "cafe",
      reference: "B1",
      price: 50,
      name: {
        fr: "Café",
        th: "กาแฟ",
        en: "Coffee",
        de: "Kaffee",
        ja: "コーヒー",
        zh: "咖啡",
        ru: "Кофе",
        ko: "커피",
        es: "Café",
        it: "Caffè",
        nl: "Koffie",
        pt: "Café",
        pl: "Kawa"
      },
      category: {
        id: "boisson",
        name: {
          fr: "Boissons",
          th: "เครื่องดื่ม",
          en: "Drinks",
          de: "Getränke",
          ja: "ドリンク",
          zh: "饮品",
          ru: "Напитки",
          ko: "음료",
          es: "Bebidas",
          it: "Bevande",
          nl: "Drankjes",
          pt: "Bebidas",
          pl: "Napoje"
        }
      },
      image: "assets/images/cafe.webp",
      quantity: {
        amount: 50,
        infinite: true
      },
      ingredients: ["cafe", "eau"],
      supplements: []
    },
    {
      id: "water",
      reference: "B3",
      price: 15,
      name: {
        fr: "Eau",
        th: "น้ำ",
        en: "Water",
        de: "Wasser",
        ja: "水",
        zh: "水",
        ru: "Вода",
        ko: "물",
        es: "Agua",
        it: "Acqua",
        nl: "Water",
        pt: "Água",
        pl: "Woda"
      },
      category: {
        id: "boisson",
        name: {
          fr: "Boissons",
          th: "เครื่องดื่ม",
          en: "Drinks",
          de: "Getränke",
          ja: "ドリンク",
          zh: "饮品",
          ru: "Напитки",
          ko: "음료",
          es: "Bebidas",
          it: "Bevande",
          nl: "Drankjes",
          pt: "Bebidas",
          pl: "Napoje"
        }
      },
      image: "assets/images/water.webp?no-webp",
      quantity: {
        amount: 100,
        infinite: true
      },
      ingredients: ["eau"],
      supplements: []
    },
    {
      id: "biereleopetite",
      reference: "B4",
      price: 70,
      name: {
        fr: "Bière Leo (petite)",
        th: "เบียร์ลีโอ (ขวดเล็ก)",
        en: "Leo Beer (small)",
        de: "Leo Bier (klein)",
        ja: "レオビール（小瓶）",
        zh: "Leo 啤酒（小瓶）",
        ru: "Пиво Leo (маленькое)",
        ko: "레오 맥주 (소병)",
        es: "Cerveza Leo (pequeña)",
        it: "Birra Leo (piccola)",
        nl: "Leo-bier (klein)",
        pt: "Cerveja Leo (pequena)",
        pl: "Piwo Leo (małe)"
      },
      category: {
        id: "boisson",
        name: {
          fr: "Boissons",
          th: "เครื่องดื่ม",
          en: "Drinks",
          de: "Getränke",
          ja: "ドリンク",
          zh: "饮品",
          ru: "Напитки",
          ko: "음료",
          es: "Bebidas",
          it: "Bevande",
          nl: "Drankjes",
          pt: "Bebidas",
          pl: "Napoje"
        }
      },
      image: "assets/images/bierre-leo.webp?no-webp",
      quantity: {
        amount: 40,
        infinite: true
      },
      ingredients: [],
      supplements: []
    },
    {
      id: "biereleogrande",
      reference: "B5",
      price: 110,
      name: {
        fr: "Bière Leo (grande)",
        th: "เบียร์ลีโอ (ขวดใหญ่)",
        en: "Leo Beer (large)",
        de: "Leo Bier (groß)",
        ja: "レオビール（大瓶）",
        zh: "Leo 啤酒（大瓶）",
        ru: "Пиво Leo (большое)",
        ko: "레오 맥주 (대병)",
        es: "Cerveza Leo (grande)",
        it: "Birra Leo (grande)",
        nl: "Leo-bier (groot)",
        pt: "Cerveja Leo (grande)",
        pl: "Piwo Leo (duże)"
      },
      category: {
        id: "boisson",
        name: {
          fr: "Boissons",
          th: "เครื่องดื่ม",
          en: "Drinks",
          de: "Getränke",
          ja: "ドリンク",
          zh: "饮品",
          ru: "Напитки",
          ko: "음료",
          es: "Bebidas",
          it: "Bevande",
          nl: "Drankjes",
          pt: "Bebidas",
          pl: "Napoje"
        }
      },
      image: "assets/images/bierre-leo.webp?no-webp",
      quantity: {
        amount: 40,
        infinite: true
      },
      ingredients: [],
      supplements: []
    },
    {
      id: "crepe_complete",
      reference: "CS1",
      price: 79,
      name: {
        fr: "La Complète",
        th: "เครปคอมพลีท",
        en: "The Complete",
        de: "Die Komplette",
        ja: "コンプリート",
        zh: "全家福可丽饼",
        ru: "Ла Комплет",
        ko: "라 컴플리트",
        es: "La Completa",
        it: "La Completa",
        nl: "De Compleet",
        pt: "A Completa",
        pl: "Kompletna"
      },
      category: {
        id: "sale",
        name: {
          fr: "Salés",
          th: "ของคาว",
          en: "Savory",
          de: "Herzhaft",
          ja: "食事系",
          zh: "咸味",
          ru: "Солёные",
          ko: "짭짤한",
          es: "Salados",
          it: "Salati",
          nl: "Hartig",
          pt: "Salgados",
          pl: "Wytrawne"
        },
        notice: {
          fr: "Nous pouvons préparer des plats avec riz/salade au lieu des crêpes (120 THB)",
          en: "We can do rice dish/salad instead of crepes (120 THB)",
          th: "เราสามารถทำอาหารจานเดียว/สลัด แทนเครปได้ (120 บาท)",
          de: "Wir können Reisgericht/Salat anstelle von Crêpes zubereiten (120 THB)",
          ja: "クレープの代わりにライス/サラダ料理もご用意できます（120バーツ）",
          zh: "我们可以做米饭/沙拉代替可丽饼（120泰铢）",
          ru: "Мы можем приготовить блюдо с рисом/салатом вместо блинов (120 THB)",
          ko: "크레페 대신 밥/샐러드 요리를 해드릴 수 있습니다 (120 THB)",
          es: "Podemos preparar plato de arroz/ensalada en lugar de crepes (120 THB)",
          it: "Possiamo preparare piatti di riso/insalata invece delle crêpes (120 THB)",
          nl: "We kunnen rijstgerechten/salades maken in plaats van crêpes (120 THB)",
          pt: "Podemos fazer prato de arroz/salada em vez de crepes (120 THB)",
          pl: "Możemy przygotować danie z ryżem/sałatką zamiast naleśników (120 THB)"
        }
      },
      image: "assets/images/crepe-complete.webp?no-webp",
      quantity: {
        amount: 25,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "huile_de_coco", "sel", "jambon", "fromage"],
      description: {
        fr: "La base absolue, repère immédiat pour tous les clients. Elle définit que tu es bien une crêperie française, point.",
        th: "พื้นฐานที่แน่นอน จุดอ้างอิงทันทีสำหรับลูกค้าทุกคน บ่งบอกว่าเป็นร้านเครปฝรั่งเศสแท้ๆ",
        en: "The absolute basis, an immediate reference for all customers. It defines that you are indeed a French creperie, period.",
        de: "Die absolute Basis, ein sofortiger Bezugspunkt für alle Kunden. Sie definiert, dass Sie tatsächlich eine französische Crêperie sind, Punkt.",
        ja: "絶対的な基本であり、すべてのお客様にとって即座の基準となります。これぞまさにフランスのクレープ屋であることを証明する一品。",
        zh: "绝对的基础，所有顾客的直接参考。它定义了你确实是一家法式可丽饼店，仅此而已。",
        ru: "Абсолютная основа, немедленный ориентир для всех клиентов. Это определяет, что вы действительно французская блинная, точка.",
        ko: "모든 고객에게 즉각적인 기준이 되는 절대적인 기본입니다. 진정한 프랑스 크레페 전문점임을 정의합니다.",
        es: "La base absoluta, referencia inmediata para todos los clientes. Define que eres, de hecho, una crepería francesa, punto.",
        it: "La base assoluta, riferimento immediato per tutti i clienti. Definisce che sei davvero una creperia francese, punto.",
        nl: "De absolute basis, een direct herkenningspunt voor alle klanten. Het definieert dat je inderdaad een Franse crêperie bent, punt.",
        pt: "A base absoluta, referência imediata para todos os clientes. Define que você é de fato uma creperia francesa, ponto.",
        pl: "Absolutna podstawa, natychmiastowy punkt odniesienia dla wszystkich klientów. Definiuje, że jesteś prawdziwą francuską naleśnikarnią, kropka."
      },
      supplements: []
    },
    {
      id: "crepe_bacon_oeuf",
      reference: "CS2",
      price: 79,
      name: {
        fr: "Bacon & Œuf",
        th: "เบคอนและไข่",
        en: "Bacon & Egg",
        de: "Speck & Ei",
        ja: "ベーコン＆エッグ",
        zh: "培根加蛋",
        ru: "Бекон и Яйцо",
        ko: "베이컨 & 달걀",
        es: "Bacon y Huevo",
        it: "Pancetta e Uovo",
        nl: "Spek & Ei",
        pt: "Bacon e Ovo",
        pl: "Boczek i Jajko"
      },
      category: {
        id: "sale",
        name: {
          fr: "Salés",
          th: "ของคาว",
          en: "Savory",
          de: "Herzhaft",
          ja: "食事系",
          zh: "咸味",
          ru: "Солёные",
          ko: "짭짤한",
          es: "Salados",
          it: "Salati",
          nl: "Hartig",
          pt: "Salgados",
          pl: "Wytrawne"
        },
        notice: {
          fr: "Nous pouvons préparer des plats avec riz/salade au lieu des crêpes (120 THB)",
          en: "We can do rice dish/salad instead of crepes (120 THB)",
          th: "เราสามารถทำอาหารจานเดียว/สลัด แทนเครปได้ (120 บาท)",
          de: "Wir können Reisgericht/Salat anstelle von Crêpes zubereiten (120 THB)",
          ja: "クレープの代わりにライス/サラダ料理もご用意できます（120バーツ）",
          zh: "我们可以做米饭/沙拉代替可丽饼（120泰铢）",
          ru: "Мы можем приготовить блюдо с рисом/салатом вместо блинов (120 THB)",
          ko: "크레페 대신 밥/샐러드 요리를 해드릴 수 있습니다 (120 THB)",
          es: "Podemos preparar plato de arroz/ensalada en lugar de crepes (120 THB)",
          it: "Possiamo preparare piatti di riso/insalata invece delle crêpes (120 THB)",
          nl: "We kunnen rijstgerechten/salades maken in plaats van crêpes (120 THB)",
          pt: "Podemos fazer prato de arroz/salada em vez de crepes (120 THB)",
          pl: "Możemy przygotować danie z ryżem/sałatką zamiast naleśników (120 THB)"
        }
      },
      image: "assets/images/crepe-bacon-oeuf.webp?no-webp",
      quantity: {
        amount: 25,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "huile_de_coco", "sel", "bacon", "fromage", "oeufs"],
      description: {
        fr: "Plus marqué, plus croustillant, très apprécié des touristes occidentaux. Elle apporte un vrai contraste avec la complète.",
        th: "โดดเด่น กรอบอร่อย เป็นที่ชื่นชอบของนักท่องเที่ยวตะวันตก ให้ความแตกต่างอย่างแท้จริงจากเครปคอมพลีท",
        en: "More distinct, crispier, very popular with Western tourists. It brings a real contrast to the complete.",
        de: "Ausgeprägter, knuspriger, sehr beliebt bei westlichen Touristen. Sie bietet einen echten Kontrast zur Kompletten.",
        ja: "より際立ち、よりカリカリで、欧米の観光客に大人気。コンプリートとは真の対比をもたらします。",
        zh: "更独特，更脆，深受西方游客喜爱。与全家福形成鲜明对比。",
        ru: "Более выраженный, более хрустящий, очень популярен среди западных туристов. Создает настоящий контраст с 'Комплет'.",
        ko: "더 뚜렷하고 바삭하며 서양 관광객들에게 매우 인기가 있습니다. 컴플리트와는 진정한 대조를 이룹니다.",
        es: "Más marcado, más crujiente, muy apreciado por los turistas occidentales. Aporta un verdadero contraste con la completa.",
        it: "Più deciso, più croccante, molto apprezzato dai turisti occidentali. Offre un vero contrasto con la completa.",
        nl: "Uitgesprokener, knapperiger, erg populair bij westerse toeristen. Het biedt een echt contrast met de complete.",
        pt: "Mais marcante, mais crocante, muito apreciada pelos turistas ocidentais. Traz um verdadeiro contraste com a completa.",
        pl: "Bardziej wyrazisty, bardziej chrupiący, bardzo popularny wśród zachodnich turystów. Stanowi prawdziwy kontrast dla wersji kompletnej."
      },
      supplements: []
    },
    {
      id: "crepe_forestiere",
      reference: "CS3",
      price: 79,
      name: {
        fr: "Forestière",
        th: "ฟอเรสติแยร์",
        en: "Forestiere",
        de: "Forestière",
        ja: "フォレスティエール",
        zh: "森林风味可丽饼",
        ru: "Форестьер",
        ko: "포레스티에",
        es: "Forestière",
        it: "Forestière",
        nl: "Forestière",
        pt: "Forestière",
        pl: "Forestière"
      },
      category: {
        id: "sale",
        name: {
          fr: "Salés",
          th: "ของคาว",
          en: "Savory",
          de: "Herzhaft",
          ja: "食事系",
          zh: "咸味",
          ru: "Солёные",
          ko: "짭짤한",
          es: "Salados",
          it: "Salati",
          nl: "Hartig",
          pt: "Salgados",
          pl: "Wytrawne"
        },
        notice: {
          fr: "Nous pouvons préparer des plats avec riz/salade au lieu des crêpes (120 THB)",
          en: "We can do rice dish/salad instead of crepes (120 THB)",
          th: "เราสามารถทำอาหารจานเดียว/สลัด แทนเครปได้ (120 บาท)",
          de: "Wir können Reisgericht/Salat anstelle von Crêpes zubereiten (120 THB)",
          ja: "クレープの代わりにライス/サラダ料理もご用意できます（120バーツ）",
          zh: "我们可以做米饭/沙拉代替可丽饼（120泰铢）",
          ru: "Мы можем приготовить блюдо с рисом/салатом вместо блинов (120 THB)",
          ko: "크레페 대신 밥/샐러드 요리를 해드릴 수 있습니다 (120 THB)",
          es: "Podemos preparar plato de arroz/ensalada en lugar de crepes (120 THB)",
          it: "Possiamo preparare piatti di riso/insalata invece delle crêpes (120 THB)",
          nl: "We kunnen rijstgerechten/salades maken in plaats van crêpes (120 THB)",
          pt: "Podemos fazer prato de arroz/salada em vez de crepes (120 THB)",
          pl: "Możemy przygotować danie z ryżem/sałatką zamiast naleśników (120 THB)"
        }
      },
      image: "assets/images/crepe-forestiere.webp?no-webp",
      quantity: {
        amount: 25,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "huile_de_coco", "sel", "champignons", "creme_legere", "fromage"],
      description: {
        fr: "Profil doux et crémeux, totalement différent du reste. C’est ta crêpe végétarienne “confort”.",
        th: "รสชาตินุ่มละมุนและครีมมี่ แตกต่างจากที่เหลืออย่างสิ้นเชิง เป็นเครปมังสวิรัติที่ให้ความรู้สึกสบาย",
        en: "Soft and creamy profile, totally different from the rest. It's your 'comfort' vegetarian crepe.",
        de: "Weiches und cremiges Profil, völlig anders als der Rest. Es ist Ihre vegetarische 'Komfort'-Crêpe.",
        ja: "柔らかくクリーミーなプロフィール、他とは全く異なります。あなたの「コンフォート」ベジタリアンクレープです。",
        zh: "柔和细腻的口感，与众不同。这是你的“舒适”素食可丽饼。",
        ru: "Мягкий и сливочный профиль, совершенно отличный от остальных. Это ваш 'комфортный' вегетарианский блин.",
        ko: "부드럽고 크리미한 프로필로 나머지와는 완전히 다릅니다. 당신의 '편안한' 채식 크레페입니다.",
        es: "Perfil suave y cremoso, totalmente diferente del resto. Es tu crepe vegetariano 'confort'.",
        it: "Profilo morbido e cremoso, totalmente diverso dal resto. È la tua crêpe vegetariana 'comfort'.",
        nl: "Zacht en romig profiel, totaal anders dan de rest. Het is je vegetarische 'comfort' crêpe.",
        pt: "Perfil suave e cremoso, totalmente diferente do resto. É o seu crepe vegetariano 'conforto'.",
        pl: "Delikatny i kremowy profil, zupełnie inny niż reszta. To twój wegetariański naleśnik 'komfort'."
      },
      supplements: []
    },
    {
      id: "crepe_savoyarde",
      reference: "CS4",
      price: 79,
      name: {
        fr: "Savoyarde (version crêperie)",
        th: "ซาวอยยาร์ด",
        en: "Savoyarde",
        de: "Savoyarde",
        ja: "サヴォワイヤード",
        zh: "萨瓦风味可丽饼",
        ru: "Савояр",
        ko: "사보야르드",
        es: "Savoyarde",
        it: "Savoyarde",
        nl: "Savoyarde",
        pt: "Savoyarde",
        pl: "Savoyarde"
      },
      category: {
        id: "sale",
        name: {
          fr: "Salés",
          th: "ของคาว",
          en: "Savory",
          de: "Herzhaft",
          ja: "食事系",
          zh: "咸味",
          ru: "Солёные",
          ko: "짭짤한",
          es: "Salados",
          it: "Salati",
          nl: "Hartig",
          pt: "Salgados",
          pl: "Wytrawne"
        },
        notice: {
          fr: "Nous pouvons préparer des plats avec riz/salade au lieu des crêpes (120 THB)",
          en: "We can do rice dish/salad instead of crepes (120 THB)",
          th: "เราสามารถทำอาหารจานเดียว/สลัด แทนเครปได้ (120 บาท)",
          de: "Wir können Reisgericht/Salat anstelle von Crêpes zubereiten (120 THB)",
          ja: "クレープの代わりにライス/サラダ料理もご用意できます（120バーツ）",
          zh: "我们可以做米饭/沙拉代替可丽饼（120泰铢）",
          ru: "Мы можем приготовить блюдо с рисом/салатом вместо блинов (120 THB)",
          ko: "크레페 대신 밥/샐러드 요리를 해드릴 수 있습니다 (120 THB)",
          es: "Podemos preparar plato de arroz/ensalada en lugar de crepes (120 THB)",
          it: "Possiamo preparare piatti di riso/insalata invece delle crêpes (120 THB)",
          nl: "We kunnen rijstgerechten/salades maken in plaats van crêpes (120 THB)",
          pt: "Podemos fazer prato de arroz/salada em vez de crepes (120 THB)",
          pl: "Możemy przygotować danie z ryżem/sałatką zamiast naleśników (120 THB)"
        }
      },
      image: "assets/images/crepe-savoyarde.webp?no-webp",
      quantity: {
        amount: 25,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "huile_de_coco", "sel", "bacon", "fromage", "oignon"],
      description: {
        fr: "Gras, rond, gourmand, très efficace. C’est souvent celle qui devient best-seller sans prévenir.",
        th: "เข้มข้น กลมกล่อม อร่อย ได้ผลดีเยี่ยม มักจะเป็นเมนูที่ขายดีที่สุดโดยไม่รู้ตัว",
        en: "Rich, round, gourmet, very effective. It's often the one that becomes a best-seller without warning.",
        de: "Reichhaltig, rund, feinschmeckerisch, sehr effektiv. Oft ist es diejenige, die ohne Vorwarnung zum Bestseller wird.",
        ja: "濃厚でまろやか、グルメで非常に効果的。予告なしにベストセラーになることが多い一品です。",
        zh: "浓郁，圆润，美味，非常有效。这往往是那个毫无预兆就成为畅销品的。",
        ru: "Насыщенный, округлый, гурманский, очень эффективный. Часто именно он становится бестселлером без предупреждения.",
        ko: "풍부하고 둥글며 미식가적이고 매우 효과적입니다. 예고 없이 베스트셀러가 되는 경우가 많습니다.",
        es: "Rico, redondo, gourmet, muy eficaz. A menudo es la que se convierte en un éxito de ventas sin previo aviso.",
        it: "Ricco, rotondo, gourmet, molto efficace. È spesso quella che diventa un best-seller senza preavviso.",
        nl: "Rijk, rond, gastronomisch, zeer effectief. Het is vaak degene die zonder waarschuwing een bestseller wordt.",
        pt: "Rico, redondo, gourmet, muito eficaz. É muitas vezes aquele que se torna um best-seller sem aviso prévio.",
        pl: "Bogaty, pełny, wykwintny, bardzo efektowny. Często to on staje się bestsellerem bez ostrzeżenia."
      },
      supplements: []
    },
    {
      id: "crepe_poulet_fromage",
      reference: "CS5",
      price: 79,
      name: {
        fr: "Poulet & Fromage",
        th: "ไก่และชีส",
        en: "Chicken & Cheese",
        de: "Hähnchen & Käse",
        ja: "チキン＆チーズ",
        zh: "鸡肉加芝士",
        ru: "Курица и Сыр",
        ko: "치킨 & 치즈",
        es: "Pollo y Queso",
        it: "Pollo e Formaggio",
        nl: "Kip & Kaas",
        pt: "Frango e Queijo",
        pl: "Kurczak i Ser"
      },
      category: {
        id: "sale",
        name: {
          fr: "Salés",
          th: "ของคาว",
          en: "Savory",
          de: "Herzhaft",
          ja: "食事系",
          zh: "咸味",
          ru: "Солёные",
          ko: "짭짤한",
          es: "Salados",
          it: "Salati",
          nl: "Hartig",
          pt: "Salgados",
          pl: "Wytrawne"
        },
        notice: {
          fr: "Nous pouvons préparer des plats avec riz/salade au lieu des crêpes (120 THB)",
          en: "We can do rice dish/salad instead of crepes (120 THB)",
          th: "เราสามารถทำอาหารจานเดียว/สลัด แทนเครปได้ (120 บาท)",
          de: "Wir können Reisgericht/Salat anstelle von Crêpes zubereiten (120 THB)",
          ja: "クレープの代わりにライス/サラダ料理もご用意できます（120バーツ）",
          zh: "我们可以做米饭/沙拉代替可丽饼（120泰铢）",
          ru: "Мы можем приготовить блюдо с рисом/салатом вместо блинов (120 THB)",
          ko: "크레페 대신 밥/샐러드 요리를 해드릴 수 있습니다 (120 THB)",
          es: "Podemos preparar plato de arroz/ensalada en lugar de crepes (120 THB)",
          it: "Possiamo preparare piatti di riso/insalata invece delle crêpes (120 THB)",
          nl: "We kunnen rijstgerechten/salades maken in plaats van crêpes (120 THB)",
          pt: "Podemos fazer prato de arroz/salada em vez de crepes (120 THB)",
          pl: "Możemy przygotować danie z ryżem/sałatką zamiast naleśników (120 THB)"
        }
      },
      image: "assets/images/crepe-poulet-fromage.webp?no-webp",
      quantity: {
        amount: 25,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "huile_de_coco", "sel", "poulet", "fromage", "poivre"],
      description: {
        fr: "Ultra rassurante, très demandée par les gens qui ne mangent ni porc transformé ni bacon.",
        th: "อุ่นใจสุดๆ เป็นที่ต้องการอย่างมากสำหรับผู้ที่ไม่ทานหมูแปรรูปหรือเบคอน",
        en: "Ultra reassuring, very much in demand by people who do not eat processed pork or bacon.",
        de: "Ultra beruhigend, sehr gefragt bei Leuten, die weder verarbeitetes Schweinefleisch noch Speck essen.",
        ja: "非常に安心感があり、加工された豚肉やベーコンを食べない人々に非常に需要があります。",
        zh: "超级令人放心，非常受不吃加工猪肉或培根的人的欢迎。",
        ru: "Ультра успокаивающий, очень востребован людьми, которые не едят обработанную свинину или бекон.",
        ko: "매우 안심이 되며, 가공 돼지고기나 베이컨을 먹지 않는 사람들에게 매우 인기가 많습니다.",
        es: "Ultra tranquilizador, muy demandado por personas que no comen cerdo procesado ni tocino.",
        it: "Ultra rassicurante, molto richiesto dalle persone che non mangiano maiale lavorato né pancetta.",
        nl: "Ultra geruststellend, zeer gewild bij mensen die geen verwerkt varkensvlees of spek eten.",
        pt: "Ultra reconfortante, muito procurado por pessoas que não comem carne de porco processada nem bacon.",
        pl: "Bardzo bezpieczna opcja, często wybierana przez osoby, które nie jedzą przetworzonej wieprzowiny ani boczku."
      },
      supplements: []
    },
    {
      id: "crepe_porc_oignons",
      reference: "CS6",
      price: 79,
      name: {
        fr: "Porc haché & Oignons",
        th: "หมูสับและหัวหอม",
        en: "Minced Pork & Onions",
        de: "Hackfleisch & Zwiebeln",
        ja: "豚ひき肉＆玉ねぎ",
        zh: "肉末加洋葱",
        ru: "Свиной фарш и Лук",
        ko: "다진 돼지고기 & 양파",
        es: "Cerdo picado y Cebollas",
        it: "Maiale macinato e Cipolle",
        nl: "Gehakt & Uien",
        pt: "Porco moído e Cebolas",
        pl: "Mielona wieprzowina i Cebula"
      },
      category: {
        id: "sale",
        name: {
          fr: "Salés",
          th: "ของคาว",
          en: "Savory",
          de: "Herzhaft",
          ja: "食事系",
          zh: "咸味",
          ru: "Солёные",
          ko: "짭짤한",
          es: "Salados",
          it: "Salati",
          nl: "Hartig",
          pt: "Salgados",
          pl: "Wytrawne"
        },
        notice: {
          fr: "Nous pouvons préparer des plats avec riz/salade au lieu des crêpes (120 THB)",
          en: "We can do rice dish/salad instead of crepes (120 THB)",
          th: "เราสามารถทำอาหารจานเดียว/สลัด แทนเครปได้ (120 บาท)",
          de: "Wir können Reisgericht/Salat anstelle von Crêpes zubereiten (120 THB)",
          ja: "クレープの代わりにライス/サラダ料理もご用意できます（120バーツ）",
          zh: "我们可以做米饭/沙拉代替可丽饼（120泰铢）",
          ru: "Мы можем приготовить блюдо с рисом/салатом вместо блинов (120 THB)",
          ko: "크레페 대신 밥/샐러드 요리를 해드릴 수 있습니다 (120 THB)",
          es: "Podemos preparar plato de arroz/ensalada en lugar de crepes (120 THB)",
          it: "Possiamo preparare piatti di riso/insalata invece delle crêpes (120 THB)",
          nl: "We kunnen rijstgerechten/salades maken in plaats van crêpes (120 THB)",
          pt: "Podemos fazer prato de arroz/salada em vez de crepes (120 THB)",
          pl: "Możemy przygotować danie z ryżem/sałatką zamiast naleśników (120 THB)"
        }
      },
      image: "assets/images/crepe-porc-oignons.webp?no-webp",
      quantity: {
        amount: 25,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "huile_de_coco", "sel", "porc_hache", "oignon", "poivre"],
      description: {
        fr: "Très bonne idée pour Koh Chang. Ça rappelle la cuisine simple, presque “street”, tout en restant parfaitement compatible crêperie. Facile à produire, bon rendement, goût clair.",
        th: "ไอเดียที่ดีมากสำหรับเกาะช้าง ชวนให้นึกถึงอาหารง่ายๆ สไตล์ “สตรีท” แต่ยังคงเข้ากับร้านเครปได้อย่างลงตัว ผลิตง่าย ผลตอบแทนดี รสชาติชัดเจน",
        en: "Very good idea for Koh Chang. It recalls simple, almost 'street' cuisine, while remaining perfectly compatible with a creperie. Easy to produce, good yield, clear taste.",
        de: "Sehr gute Idee für Koh Chang. Erinnert an einfache, fast 'Street'-Küche, bleibt aber perfekt kompatibel mit einer Crêperie. Einfach herzustellen, guter Ertrag, klarer Geschmack.",
        ja: "チャン島にとって非常に良いアイデア。シンプルで、ほとんど「ストリート」な料理を思い起こさせますが、クレープ屋とは完全に互換性があります。生産が容易で、歩留まりが良く、味がはっきりしています。",
        zh: "象岛的好主意。这让人想起简单的、几乎是“街头”的美食，同时与可丽饼店完全兼容。易于生产，产量高，味道清晰。",
        ru: "Очень хорошая идея для Ко Чанга. Напоминает простую, почти 'уличную' кухню, оставаясь при этом идеально совместимой с блинной. Легко производить, хороший выход, чистый вкус.",
        ko: "꼬창에 아주 좋은 아이디어입니다. 단순하고 거의 '스트리트' 음식에 가깝지만 크레페 전문점과 완벽하게 호환됩니다. 생산하기 쉽고 수율이 좋으며 맛이 깔끔합니다.",
        es: "Muy buena idea para Koh Chang. Recuerda a la cocina simple, casi 'callejera', siendo perfectamente compatible con una crepería. Fácil de producir, buen rendimiento, sabor claro.",
        it: "Ottima idea per Koh Chang. Ricorda la cucina semplice, quasi 'street', pur rimanendo perfettamente compatibile con una creperia. Facile da produrre, buona resa, gusto chiaro.",
        nl: "Zeer goed idee voor Koh Chang. Het doet denken aan eenvoudige, bijna 'straat' keuken, terwijl het perfect compatibel blijft met een crêperie. Gemakkelijk te produceren, goed rendement, heldere smaak.",
        pt: "Muito boa ideia para Koh Chang. Lembra a cozinha simples, quase 'de rua', mantendo-se perfeitamente compatível com uma creperia. Fácil de produzir, bom rendimento, sabor claro.",
        pl: "Bardzo dobry pomysł na Koh Chang. Przypomina prostą, niemal 'uliczną' kuchnię, pozostając jednocześnie idealnie kompatybilnym z naleśnikarnią. Łatwy w produkcji, wydajny, czysty smak."
      },
      supplements: []
    },
    {
      id: "somtamthai",
      reference: "ST1",
      price: 79,
      name: {
        fr: "Somtam Thai",
        th: "ส้มตำไทย",
        en: "Somtam Thai",
        de: "Somtam Thai",
        ja: "ソムタム・タイ",
        zh: "泰式木瓜沙拉",
        ru: "Сомтам Тай",
        ko: "솜탐 타이",
        es: "Somtam Thai",
        it: "Somtam Thai",
        nl: "Somtam Thai",
        pt: "Somtam Thai",
        pl: "Som tam (tajski)"
      },
      category: {
        id: "somtam",
        name: {
          fr: "Somtam",
          th: "ส้มตำ",
          en: "Somtam",
          de: "Somtam",
          ja: "ソムタム",
          zh: "青木瓜沙拉",
          ru: "Сомтам",
          ko: "솜탐",
          es: "Som Tam",
          it: "Som Tam",
          nl: "Som Tam",
          pt: "Som Tam",
          pl: "Som tam"
        }
      },
      image: "assets/images/somtamthai.webp?no-webp",
      quantity: { amount: 50, infinite: true },
      ingredients: [
        "papaye_verte", "piment", "ail", "tomates", "citron_vert", "sauce_poisson", "cacahuetes", "sucre_de_palmier"
      ],
      description: {
        fr: "Papaye verte râpée, relevée d'un trait de citron vert, d'ail et de piment, ourlée d’une sauce de poisson soyeuse et d’un voile de sucre de palmier. Un classique thaï au croquant lumineux, ponctué de cacahuètes torréfiées.",
        th: "มะละกอดิบขูด คลุกเคล้าด้วยน้ำมะนาว กระเทียม และพริก เติมกลิ่นนัวด้วยน้ำปลาและความหวานละมุนของน้ำตาลโตนด โรยถั่วลิสง หอม กรอบ สดชื่น",
        en: "Finely shredded green papaya lifted by lime, garlic and chili, glazed with silky fish sauce and palm sugar. A bright, crunchy Thai classic crowned with toasted peanuts.",
        pl: "Drobno poszatkowana zielona papaja z limonką, czosnkiem i chili, zanurzona w aksamitnym sosie rybnym z dodatkiem cukru palmowego. Klasyczne tajskie danie pełne świeżości i chrupkości, zwieńczone prażonymi orzeszkami ziemnymi."
      },
      supplements: []
    },
    {
      id: "somtamissaan",
      reference: "ST2",
      price: 79,
      name: {
        fr: "Somtam Isaan",
        th: "ส้มตำอีสาน",
        en: "Somtam Isaan",
        de: "Somtam Isaan",
        ja: "ソムタム・イーサーン",
        zh: "伊桑木瓜沙拉",
        ru: "Сомтам Иссан",
        ko: "솜탐 이산",
        es: "Somtam Isaan",
        it: "Somtam Isaan",
        nl: "Somtam Isaan",
        pt: "Somtam Isaan",
        pl: "Som tam (Isan)"
      },
      category: {
        id: "somtam",
        name: {
          fr: "Somtam",
          th: "ส้มตำ",
          en: "Somtam",
          de: "Somtam",
          ja: "ソムタム",
          zh: "青木瓜沙拉",
          ru: "Сомтам",
          ko: "솜탐",
          es: "Som Tam",
          it: "Som Tam",
          nl: "Som Tam",
          pt: "Som Tam",
          pl: "Som tam"
        }
      },
      image: "assets/images/somtamisaan.webp?no-webp",
      quantity: { amount: 50, infinite: true },
      ingredients: [
        "papaye_verte", "piment", "ail", "tomates", "citron_vert", "sauce_poisson", "cacahuetes", "sucre_de_palmier"
      ],
      description: {
        fr: "Une interprétation du Nord-Est, plus franche et parfumée : papaye verte ciselée, citron vert éclatant, ail et piment, soutenus par une salinité délicate et une douceur de sucre de palmier. Un relief aromatique intense, d’une belle longueur.",
        th: "ส้มตำสไตล์อีสาน รสชัด หอมฉุนสดใส มะละกอกรอบ น้ำมะนาวเด่น กระเทียม พริก และกลิ่นนัวกลมกล่อม หวานบางๆ จากน้ำตาลโตนด ยาวนานในปลายลิ้น",
        en: "The bolder, northeastern expression: crisp green papaya, vivid lime, garlic and chili, carried by gentle salinity and a veil of palm sugar. Aromatic depth with lasting finish.",
        pl: "Wyrazistsza, północno-wschodnia odsłona: chrupiąca zielona papaja, soczysta limonka, czosnek i chili, podkreślone delikatną słonością i nutą cukru palmowego. Głęboki aromat, który długo pozostaje na podniebieniu."
      },
      supplements: []
    },
    {
      id: "crepechokaju",
      reference: "SU1",
      price: 60,
      name: {
        fr: "Crêpe Chokaju",
        th: "เครปโชคาจู",
        en: "Chokaju crêpe",
        de: "Chokaju-Crêpe",
        ja: "ショカジュクレープ",
        zh: "Chokaju 可丽饼",
        ru: "Креп Чокаджу",
        ko: "쇼카주 크레프",
        es: "Crepe Chokaju",
        it: "Crêpe Chokaju",
        nl: "Chokaju-crêpe",
        pt: "Crepe Chokaju",
        pl: "Naleśnik Chokaju"
      },
      category: {
        id: "sucre",
        name: {
          fr: "Sucrés",
          th: "ของหวาน",
          en: "Sweet",
          de: "Süß",
          ja: "甘い",
          zh: "甜味",
          ru: "Сладкие",
          ko: "달콤한",
          es: "Dulces",
          it: "Dolci",
          nl: "Zoet",
          pt: "Doces",
          pl: "Słodkie"
        }
      },
      image: "assets/images/crepe-chokaju.webp",
      quantity: {
        amount: 20,
        infinite: false
      },
      ingredients: [
        "farine",
        "oeufs",
        "lait",
        "sucre",
        "huile_de_coco",
        { fr: "Pâte Chokaju", en: "Chokaju spread", th: "สเปรดโชคาจู" },
        { fr: "Noisettes torréfiées", en: "Roasted hazelnuts", th: "ฮาเซลนัตส์อบ" }
      ],
      "description": {
  "fr": "Crêpe gourmande à la texture soyeuse, nappée généreusement de notre pâte Chokaju signature, fusion unique entre chocolat européen et noix de cajou thaïlandaises. Parsemée de noix de cajou dorées qui apportent un croquant délicat et des arômes tropicaux.",
  "th": "เครปเนื้อนุ่มละมุน ราดด้วยสเปรดโชคาจูซิกเนเจอร์ การผสานที่เป็นเอกลักษณ์ระหว่างช็อกโกแลตยุโรปและเม็ดมะม่วงหิมพานต์ไทย โรยด้วยเม็ดมะม่วงหิมพานต์สีทองที่เพิ่มความกรุบกรอบและกลิ่นหอมแบบเขตร้อน",
  "en": "Gourmet crêpe with a silky texture, generously coated with our signature Chokaju spread — a unique fusion of European chocolate and Thai cashews. Topped with golden cashews that add a delicate crunch and tropical aroma.",
  "de": "Gourmet-Crêpe mit seidiger Textur, großzügig überzogen mit unserem charakteristischen Chokaju-Aufstrich – eine einzigartige Fusion aus europäischer Schokolade und thailändischen Cashewnüssen. Bestreut mit goldenen Cashewnüssen, die einen feinen Crunch und tropisches Aroma verleihen.",
  "ja": "シルクのようになめらかな食感のグルメクレープ。ヨーロッパのチョコレートとタイのカシューナッツを融合させたシグネチャーのチョカジュスプレッドをたっぷりとコーティング。黄金のカシューナッツを散らし、繊細な食感とトロピカルな香りを添えました。",
  "zh": "丝滑细腻的美食可丽饼，慷慨地涂抹我们的招牌Chokaju酱，这是欧洲巧克力与泰国腰果的独特融合。点缀金色腰果，带来细腻酥脆与热带香气。",
  "ru": "Гурманский креп с шелковистой текстурой, щедро покрытый нашим фирменным спредом Чокаджу — уникальным сочетанием европейского шоколада и тайских орехов кешью. Посыпан золотистыми орехами кешью, придающими нежный хруст и тропический аромат.",
  "ko": "실키한 질감의 고급 크레프에 시그니처 쇼카주 스프레드를 듬뿍 발라 유럽 초콜릿과 태국 캐슈넛의 독특한 조화를 담았습니다. 황금빛 캐슈넛을 올려 섬세한 바삭함과 열대 향을 더했습니다.",
  "es": "Crêpe gourmet de textura sedosa, generosamente cubierta con nuestra pasta Chokaju exclusiva, una fusión única entre chocolate europeo y anacardos tailandeses. Espolvoreada con anacardos dorados que aportan un crujiente delicado y aroma tropical.",
  "it": "Crêpe gourmet dalla texture setosa, generosamente ricoperta con la nostra crema spalmabile Chokaju, una fusione unica tra cioccolato europeo e anacardi thailandesi. Cosparsa di anacardi dorati che donano una croccantezza delicata e un profumo tropicale.",
  "nl": "Gourmetcrêpe met een zijdeachtige textuur, royaal bedekt met onze kenmerkende Chokaju-spread – een unieke fusie van Europese chocolade en Thaise cashewnoten. Bestrooid met gouden cashewnoten die een verfijnde crunch en tropisch aroma toevoegen.",
  "pt": "Crepe gourmet de textura sedosa, generosamente coberto com o nosso creme Chokaju exclusivo — uma fusão única entre chocolate europeu e castanhas de caju tailandesas. Polvilhado com castanhas douradas que proporcionam crocância delicada e aroma tropical.",
  "pl": "Wykwintny naleśnik o jedwabistej strukturze, hojnie pokryty naszą autorską pastą Chokaju — unikalnym połączeniem europejskiej czekolady i tajskich nerkowców. Posypany złocistymi nerkowcami, które dodają subtelnej chrupkości i tropikalnego aromatu."
},
      supplements: []
    },
    {
      id: "crepecaracoco",
      reference: "SU2",
      price: 60,
      name: {
        fr: "Crêpe Caracoco",
        th: "เครปคาราโกโก",
        en: "Caracoco crêpe",
        de: "Caracoco-Crêpe",
        ja: "カラココクレープ",
        zh: "Caracoco 可丽饼",
        ru: "Креп Каракоко",
        ko: "카라코코 크레프",
        es: "Crepe Caracoco",
        it: "Crêpe Caracoco",
        nl: "Caracoco-crêpe",
        pt: "Crepe Caracoco",
        pl: "Naleśnik Caracoco"
      },
      category: {
        id: "sucre",
        name: {
          fr: "Sucrés",
          th: "ของหวาน",
          en: "Sweet",
          de: "Süß",
          ja: "甘い",
          zh: "甜味",
          ru: "Сладкие",
          ko: "달콤한",
          es: "Dulces",
          it: "Dolci",
          nl: "Zoet",
          pt: "Doces",
          pl: "Słodkie"
        }
      },
      image: "assets/images/crepe-caracoco.webp",
      quantity: {
        amount: 20,
        infinite: false
      },
      ingredients: [
        "farine",
        "oeufs",
        "lait",
        "sucre",
        "huile_de_coco",
        { fr: "Caramel maison", en: "House caramel", th: "คาราเมลโฮมเมด" },
        { fr: "Noix de coco râpée", en: "Toasted coconut", th: "มะพร้าวคั่ว" }
      ],
     description: {
  "fr": "Crêpe artisanale dorée, sublimée par notre caramel maison aux notes profondes et ambrées, inspiré des techniques de caramélisation thaïlandaises. Une alliance parfaite entre la richesse du caramel et la douceur de la noix de coco des tropiques, révélant des arômes envoûtants de la Thaïlande. Un voyage gustatif.",
  "th": "เครปทำมือสีทอง ยกระดับด้วยคาราเมลโฮมเมดรสเข้มข้นสีอำพัน แรงบันดาลใจจากเทคนิคการคาราเมลแบบไทย การผสมผสานอย่างลงตัวระหว่างความเข้มข้นของคาราเมลและความหวานของมะพร้าวเขตร้อน เผยกลิ่นหอมเย้ายวนแบบไทย การเดินทางแห่งรสชาติ",
  "en": "Golden artisanal crêpe, enhanced by our homemade caramel with deep amber notes, inspired by Thai caramelization techniques. A perfect harmony between the richness of caramel and the sweetness of tropical coconut, revealing captivating aromas of Thailand. A true taste journey.",
  "de": "Goldene handwerkliche Crêpe, veredelt mit unserem hausgemachten Karamell mit tiefen Bernsteinnuancen, inspiriert von thailändischen Karamellisierungstechniken. Eine perfekte Harmonie zwischen der Fülle des Karamells und der Süße der tropischen Kokosnuss, die betörende Aromen Thailands offenbart. Eine geschmackliche Reise.",
  "ja": "黄金色に焼き上げた職人クレープ。タイのカラメル化技術に着想を得た、深い琥珀色の自家製キャラメルで仕上げました。キャラメルの豊かなコクとトロピカルなココナッツの甘みが完璧に調和し、タイを思わせる魅惑的な香りを放ちます。味覚の旅へようこそ。",
  "zh": "金黄色的手工可丽饼，以受泰式焦糖化技术启发的深琥珀色自制焦糖点缀。焦糖的浓郁与热带椰子的甜美完美融合，散发出迷人的泰式香气。一场味觉之旅。",
  "ru": "Золотистый ремесленный креп, украшенный нашим домашним карамелем с глубокими янтарными нотами, вдохновленным тайскими техниками карамелизации. Идеальное сочетание богатства карамели и сладости тропического кокоса, раскрывающее чарующие ароматы Таиланда. Настоящее вкусовое путешествие.",
  "ko": "황금빛 수제 크레프에 태국식 캐러멜화 기법에서 영감을 받은 깊은 호박빛 하우스 캐러멜을 더했습니다. 캐러멜의 풍부함과 열대 코코넛의 달콤함이 완벽하게 조화를 이루며 태국의 매혹적인 향을 전합니다. 미각의 여행을 선사합니다.",
  "es": "Crêpe artesanal dorada, realzada con nuestro caramelo casero de notas ámbar profundas, inspirado en las técnicas de caramelización tailandesas. Una armonía perfecta entre la riqueza del caramelo y la dulzura del coco tropical, revelando aromas cautivadores de Tailandia. Un viaje de sabor.",
  "it": "Crêpe artigianale dorata, impreziosita dal nostro caramello fatto in casa dalle note ambrate intense, ispirato alle tecniche di caramellizzazione thailandesi. Un’armonia perfetta tra la ricchezza del caramello e la dolcezza del cocco tropicale, che rivela aromi avvolgenti della Thailandia. Un viaggio di gusto.",
  "nl": "Goudkleurige ambachtelijke crêpe, verrijkt met onze huisgemaakte karamel met diepe amberkleurige tonen, geïnspireerd door Thaise karamelisatietechnieken. Een perfecte harmonie tussen de rijkdom van de karamel en de zoetheid van tropische kokos, met betoverende aroma’s uit Thailand. Een smaakvolle reis.",
  "pt": "Crepe artesanal dourado, realçado pelo nosso caramelo caseiro com notas âmbar profundas, inspirado nas técnicas tailandesas de caramelização. Uma harmonia perfeita entre a riqueza do caramelo e a doçura do coco tropical, revelando aromas encantadores da Tailândia. Uma viagem de sabor.",
  "pl": "Złocisty, rzemieślniczy naleśnik wzbogacony naszym domowym karmelem o głębokich bursztynowych nutach, inspirowanym tajskimi technikami karmelizacji. Doskonała harmonia między bogactwem karmelu a słodyczą tropikalnego kokosa, odsłaniająca urzekające aromaty Tajlandii. Prawdziwa podróż smaków."
},
      supplements: []
    },
    {
      id: "crepeconfiturefraise",
      reference: "C1",
      price: 50,
      name: {
        fr: "Crêpe confiture de fraise",
        th: "เครปแยมสตรอเบอร์รี่",
        en: "Strawberry Jam Crêpe",
        de: "Crêpe mit Erdbeermarmelade",
        ja: "いちごジャムクレープ",
        zh: "草莓果酱可丽饼",
        ru: "Креп с клубничным джемом",
        ko: "딸기 잼 크레프",
        es: "Crepe de mermelada de fresa",
        it: "Crêpe con marmellata di fragole",
        nl: "Crêpe met aardbeienjam",
        pt: "Crepe de geleia de morango",
        pl: "Naleśnik z dżemem truskawkowym"
      },
      category: {
        id: "confiture",
        name: {
          fr: "Confitures",
          th: "แยม",
          en: "Jams",
          de: "Konfitüren",
          ja: "ジャム",
          zh: "果酱",
          ru: "Джемы",
          ko: "잼",
          es: "Mermeladas",
          it: "Confetture",
          nl: "Confituur",
          pt: "Geleias",
          pl: "Dżemy"
        }
      },
      image: "assets/images/crepe_confiture_fraise.webp",
      quantity: {
        amount: 30,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "sucre", "huile_de_coco", "confiture_fraise"],
      description: {
  "fr": "Crêpe délicatement dorée, nappée de notre confiture artisanale de fraise. Chaque bouchée révèle la fraîcheur acidulée et la douceur fondante des fraises mûries au soleil, dans une texture soyeuse qui s’épanouit en bouche. Une escale gourmande pleine de douceur et de légèreté.",
  "th": "เครปสีทองละเอียด เคลือบด้วยแยมสตรอเบอร์รี่ทำมือ ทุกคำเผยให้เห็นความสดชื่นและความเปรี้ยวหวานของสตรอเบอร์รี่ที่สุกเต็มที่ เนื้อสัมผัสนุ่มละมุนละลายในปาก การเดินทางแห่งรสชาติที่อ่อนโยนและหอมหวาน",
  "en": "Delicately golden crêpe, coated with our homemade strawberry jam. Each bite reveals the tangy freshness and tender sweetness of sun-ripened strawberries, in a silky texture that melts in the mouth. A sweet and light gourmet escape.",
  "de": "Zart goldene Crêpe, überzogen mit unserer handgemachten Erdbeermarmelade. Jeder Biss offenbart die frische Säure und zarte Süße sonnengereifter Erdbeeren in einer seidigen Textur, die auf der Zunge zergeht. Eine köstliche, leichte Genussreise.",
  "ja": "黄金の　苺の甘み　舌に咲く",
  "zh": "精致的金黄色可丽饼，搭配我们手工制作的草莓果酱。每一口都展现出草莓的酸甜清新与柔和甜香，质地丝滑，入口即化。一场轻盈而甜美的味觉之旅。",
  "ru": "Нежный золотистый креп, покрытый нашим домашним клубничным джемом. Каждый кусочек раскрывает свежую кислинку и мягкую сладость спелой клубники в шелковистой текстуре, тающей во рту. Лёгкое и сладкое вкусовое путешествие.",
  "ko": "섬세한 황금빛 크레프에 수제 딸기 잼을 듬뿍 바른 부드러운 맛. 햇살 아래 잘 익은 딸기의 상큼함과 달콤함이 입안에서 부드럽게 녹아듭니다. 가볍고 달콤한 미식 여행입니다.",
  "es": "Crêpe delicadamente dorada, cubierta con nuestra mermelada artesanal de fresa. Cada bocado revela la frescura ácida y la dulzura suave de las fresas maduras al sol, en una textura sedosa que se derrite en la boca. Una escapada gourmet dulce y ligera.",
  "it": "Crêpe delicatamente dorata, ricoperta con la nostra marmellata artigianale di fragole. Ogni boccone rivela la freschezza acidula e la dolcezza morbida delle fragole mature al sole, in una consistenza setosa che si scioglie in bocca. Un’evasione golosa dolce e leggera.",
  "nl": "Delicaat goudkleurige crêpe, bedekt met onze ambachtelijke aardbeienjam. Elke hap onthult de frisse zuurheid en zachte zoetheid van zonrijpe aardbeien, in een zijdezachte textuur die smelt in de mond. Een lichte en zoete culinaire ontsnapping.",
  "pt": "Crepe delicadamente dourado, coberto com nossa geleia artesanal de morango. Cada mordida revela o frescor e a doçura suave dos morangos maduros ao sol, em uma textura sedosa que derrete na boca. Uma escapada gourmet doce e leve.",
  "pl": "Delikatnie złocisty naleśnik pokryty naszym domowym dżemem truskawkowym. Każdy kęs odkrywa rześką kwasowość i miękką słodycz truskawek dojrzewających w słońcu, w jedwabistej konsystencji rozpływającej się w ustach. Słodka, lekka chwila przyjemności."
},
      supplements: []
    },
    {
      id: "crepeconfituremure",
      reference: "C2",
      price: 50,
      name: {
        fr: "Crêpe confiture de mûre",
        th: "เครปแยมแบล็คเบอร์รี่",
        en: "Blackberry Jam Crêpe",
        de: "Crêpe mit Brombeermarmelade",
        ja: "ブラックベリージャムクレープ",
        zh: "黑莓果酱可丽饼",
        ru: "Креп с ежевичным джемом",
        ko: "블랙베리 잼 크레프",
        es: "Crepe de mermelada de mora",
        it: "Crêpe con marmellata di mora",
        nl: "Crêpe met bramenjam",
        pt: "Crepe de geleia de amora",
        pl: "Naleśnik z dżemem jeżynowym"
      },
      category: {
        id: "confiture",
        name: {
          fr: "Confitures",
          th: "แยม",
          en: "Jams",
          de: "Konfitüren",
          ja: "ジャム",
          zh: "果酱",
          ru: "Джемы",
          ko: "잼",
          es: "Mermeladas",
          it: "Confetture",
          nl: "Confituur",
          pt: "Geleias",
          pl: "Dżemy"
        }
      },
      image: "assets/images/crepe_confiture_mure.webp",
      quantity: {
        amount: 30,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "sucre", "huile_de_coco", "confiture_mure"],
  description: {
  "fr": "Crêpe dorée aux reflets ambrés, généreusement nappée de notre confiture artisanale de mûre. Les saveurs intenses et légèrement acidulées des mûres sauvages éclatent en bouche, offrant une symphonie de goûts profonds et naturels. Une évasion gourmande au cœur des forêts parfumées.",
  "th": "เครปสีทองประกายอำพัน เคลือบด้วยแยมแบล็คเบอร์รี่ทำมืออย่างเอื้อเฟื้อ รสเข้มข้นและเปรี้ยวเล็กน้อยของแบล็คเบอร์รี่ป่าระเบิดในปาก มอบประสบการณ์แห่งรสชาติที่เข้มข้นและเป็นธรรมชาติ การหลบหนีแสนอร่อยท่ามกลางกลิ่นหอมของป่าไม้",
  "en": "Golden crêpe with amber reflections, generously coated with our homemade blackberry jam. The intense and slightly tangy flavors of wild blackberries burst in the mouth, offering a symphony of deep and natural tastes. A gourmet escape into the heart of fragrant forests.",
  "de": "Goldene Crêpe mit bernsteinfarbenem Schimmer, großzügig überzogen mit unserer handgemachten Brombeermarmelade. Die intensiven und leicht säuerlichen Aromen wilder Brombeeren entfalten sich im Mund zu einer Symphonie natürlicher Geschmäcker. Eine köstliche Reise in das Herz duftender Wälder.",
  "ja": "琥珀色に輝く黄金のクレープ。たっぷりとかけた自家製ブラックベリージャムの濃厚でほどよい酸味が口いっぱいに広がり、自然の深い味わいのハーモニーを奏でます。香り立つ森の中へ誘うグルメなひととき。",
  "zh": "金黄色带琥珀光泽的可丽饼，慷慨地涂上我们手工制作的黑莓果酱。野生黑莓浓郁而微酸的风味在口中绽放，带来一场自然深邃的味觉交响曲。一次通往芳香森林的美味之旅。",
  "ru": "Золотистый креп с янтарным оттенком, щедро покрытый нашим домашним джемом из ежевики. Интенсивный и слегка терпкий вкус дикой ежевики раскрывается во рту, создавая симфонию природных ароматов. Вкусовое путешествие в сердце ароматных лесов.",
  "ko": "호박빛이 감도는 황금빛 크레프에 수제 블랙베리 잼을 넉넉히 발랐습니다. 진하고 약간 새콤한 야생 블랙베리의 풍미가 입안에서 퍼지며 자연스러운 깊은 맛의 하모니를 이룹니다. 향기로운 숲속으로 떠나는 미식 여행입니다.",
  "es": "Crêpe dorada con reflejos ámbar, generosamente cubierta con nuestra mermelada artesanal de mora. Los sabores intensos y ligeramente ácidos de las moras silvestres estallan en la boca, ofreciendo una sinfonía de sabores naturales y profundos. Una escapada gourmet al corazón de los bosques aromáticos.",
  "it": "Crêpe dorata con riflessi ambrati, generosamente ricoperta con la nostra marmellata artigianale di more. I sapori intensi e leggermente aciduli delle more selvatiche esplodono in bocca, offrendo una sinfonia di gusti naturali e autentici. Un’evasione golosa nel cuore delle foreste profumate.",
  "nl": "Goudkleurige crêpe met amberkleurige glans, royaal bedekt met onze ambachtelijke bramenjam. De intense en lichtzure smaken van wilde bramen barsten open in de mond en bieden een symfonie van diepe, natuurlijke smaken. Een culinaire ontsnapping in het hart van geurige bossen.",
  "pt": "Crepe dourado com reflexos âmbar, generosamente coberto com nossa geleia artesanal de amora. Os sabores intensos e ligeiramente ácidos das amoras silvestres explodem na boca, oferecendo uma sinfonia de sabores profundos e naturais. Uma fuga gourmet ao coração das florestas perfumadas.",
  "pl": "Złocisty naleśnik z bursztynowymi refleksami, hojnie pokryty domowym dżemem jeżynowym. Intensywne, lekko kwaskowe nuty leśnych jeżyn eksplodują w ustach, oferując symfonię naturalnych smaków. Słodka ucieczka w pachnące lasy."
},
      supplements: []
    },
    {
      id: "crepeconfituremulberry",
      reference: "C3",
      price: 50,
      name: {
        fr: "Crêpe confiture de mûre (mulberry)",
        th: "เครปแยมมัลเบอร์รี่",
        en: "Mulberry Jam Crêpe",
        de: "Crêpe mit Maulbeermarmelade",
        ja: "マルベリージャムクレープ",
        zh: "桑葚果酱可丽饼",
        ru: "Креп с шелковичным джемом",
        ko: "뽕나무 열매 잼 크레프",
        es: "Crepe de mermelada de morera",
        it: "Crêpe con marmellata di gelso",
        nl: "Crêpe met moerbeienjam",
        pt: "Crepe de geleia de amoreira",
        pl: "Naleśnik z dżemem morwowym"
      },
      category: {
        id: "confiture",
        name: {
          fr: "Confitures",
          th: "แยม",
          en: "Jams",
          de: "Konfitüren",
          ja: "ジャム",
          zh: "果酱",
          ru: "Джемы",
          ko: "잼",
          es: "Mermeladas",
          it: "Confetture",
          nl: "Confituur",
          pt: "Geleias",
          pl: "Dżemy"
        }
      },
      image: "assets/images/crepe_confiture_mulberry.webp",
      quantity: {
        amount: 30,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "sucre", "huile_de_coco", "confiture_mulberry"],
    description: {
  "fr": "Crêpe soyeuse aux nuances dorées, nappée de notre confiture artisanale de mûrier. La douceur veloutée et les arômes subtils de ces baies rares offrent une harmonie délicate et naturelle en bouche. Une invitation à la sérénité, entre douceur fruitée et élégance végétale.",
  "th": "เครปเนื้อนุ่มโทนสีทอง เคลือบด้วยแยมมัลเบอร์รี่ทำมือ รสหวานละมุนและกลิ่นหอมอ่อน ๆ ของผลมัลเบอร์รี่หายาก มอบความกลมกลืนอย่างละเอียดอ่อนในทุกคำ ละเมียดละไมและสงบนิ่งราวธรรมชาติ",
  "en": "Silky golden crêpe, coated with our homemade mulberry jam. The velvety sweetness and subtle aroma of these rare berries create a delicate and natural harmony on the palate. A moment of serenity where fruity gentleness meets botanical grace.",
  "de": "Seidige goldene Crêpe, überzogen mit unserer handgemachten Maulbeermarmelade. Die samtige Süße und die feinen Aromen dieser seltenen Beeren schaffen eine zarte, natürliche Harmonie. Eine Einladung zur Ruhe – wo fruchtige Sanftheit auf pflanzliche Eleganz trifft.",
  "ja": "黄金色に輝くなめらかなクレープ。希少なマルベリーから作った自家製ジャムが、穏やかな甘さと繊細な香りで自然な調和を生み出します。果実のやさしさと植物の気品が交わる静かなひととき。",
  "zh": "金黄色丝滑的可丽饼，搭配我们手工熬制的桑葚果酱。这些珍稀浆果的柔滑甜味与淡雅香气在口中交织，带来细腻自然的和谐。一场宁静的味觉旅程，果香与自然优雅相融。",
  "ru": "Шелковистый золотистый креп, покрытый нашим домашним джемом из шелковицы. Бархатистая сладость и тонкий аромат этих редких ягод создают естественную гармонию и нежность. Момент умиротворения, где фруктовая мягкость встречается с изящной природной свежестью.",
  "ko": "황금빛의 부드러운 크레프에 수제 뽕나무 열매 잼을 더했습니다. 희귀한 열매의 벨벳 같은 단맛과 은은한 향이 입안에서 자연스러운 조화를 이룹니다. 과일의 부드러움과 식물의 우아함이 어우러지는 평온한 순간입니다.",
  "es": "Crêpe sedosa de tonos dorados, cubierta con nuestra mermelada artesanal de mora blanca. La dulzura aterciopelada y los aromas sutiles de estas bayas raras crean una armonía natural y delicada. Una invitación a la serenidad, donde la suavidad frutal se une con la elegancia vegetal.",
  "it": "Crêpe setosa dalle sfumature dorate, ricoperta con la nostra marmellata artigianale di gelso. La dolcezza vellutata e i profumi sottili di queste bacche rare creano un’armonia delicata e naturale. Un momento di serenità, dove la morbidezza fruttata incontra l’eleganza vegetale.",
  "nl": "Zijdezachte crêpe met gouden tinten, bedekt met onze ambachtelijke moerbeienjam. De fluweelzachte zoetheid en subtiele geur van deze zeldzame bessen zorgen voor een delicate, natuurlijke harmonie. Een moment van rust waarin fruitige zachtheid en plantaardige elegantie samenkomen.",
  "pt": "Crepe sedoso com reflexos dourados, coberto com nossa geleia artesanal de amoreira. A doçura aveludada e os aromas sutis dessas bagas raras criam uma harmonia delicada e natural. Um convite à serenidade, onde a suavidade frutada encontra a elegância vegetal.",
  "pl": "Jedwabisty, złocisty naleśnik pokryty naszym domowym dżemem z morwy. Aksamitna słodycz i subtelny aromat tych rzadkich owoców tworzą delikatną, naturalną harmonię na podniebieniu. Chwila spokoju, w której owocowa delikatność łączy się z roślinną elegancją."
},
      supplements: []
    },
    {
      id: "crepeconfituregingembre",
      reference: "C4",
      price: 50,
      name: {
        fr: "Crêpe confiture de gingembre",
        th: "เครปแยมขิง",
        en: "Ginger Jam Crêpe",
        de: "Crêpe mit Ingwermarmelade",
        ja: "ジンジャージャムクレープ",
        zh: "姜味果酱可丽饼",
        ru: "Креп с имбирным джемом",
        ko: "생강 잼 크레프",
        es: "Crepe de mermelada de jengibre",
        it: "Crêpe con marmellata di zenzero",
        nl: "Crêpe met gemberjam",
        pt: "Crepe de geleia de gengibre",
        pl: "Naleśnik z dżemem imbirowym"
      },
      category: {
        id: "confiture",
        name: {
          fr: "Confitures",
          th: "แยม",
          en: "Jams",
          de: "Konfitüren",
          ja: "ジャム",
          zh: "果酱",
          ru: "Джемы",
          ko: "잼",
          es: "Mermeladas",
          it: "Confetture",
          nl: "Confituur",
          pt: "Geleias",
          pl: "Dżemy"
        }
      },
      image: "assets/images/crepe_confiture_gingembre.webp",
      quantity: {
        amount: 30,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "sucre", "huile_de_coco", "confiture_gingembre"],
      description: {
  "fr": "Crêpe dorée et raffinée, nappée de notre confiture de gingembre artisanale aux racines fraîches des jardins thaïlandais. La chaleur épicée et les notes piquantes du gingembre royal créent une sensation unique qui réveille les papilles. Une fusion audacieuse entre la douceur sucrée et l'intensité aromatique des épices du royaume de Siam.",
  "th": "เครปสีทองเนื้อละเอียด เคลือบด้วยแยมขิงทำมือจากรากสดในสวนไทย ความเผ็ดร้อนและกลิ่นหอมของขิงชั้นดีสร้างความรู้สึกที่เป็นเอกลักษณ์ ปลุกประสาทรับรสให้ตื่นขึ้น การผสมผสานที่กล้าหาญระหว่างความหวานละมุนและความเข้มข้นของเครื่องเทศแห่งอาณาจักรสยาม",
  "en": "Golden and refined crêpe, topped with our artisanal ginger jam made from fresh roots grown in Thai gardens. The spicy warmth and lively notes of royal ginger create a unique sensation that awakens the taste buds. A bold fusion between gentle sweetness and the aromatic intensity of the spices of the Kingdom of Siam.",
  "de": "Goldene, raffinierte Crêpe, überzogen mit unserer handwerklichen Ingwermarmelade aus frischen Wurzeln aus thailändischen Gärten. Die würzige Wärme und die pikanten Noten des königlichen Ingwers schaffen ein einzigartiges Gefühl, das die Geschmacksknospen erweckt. Eine kühne Fusion zwischen zarter Süße und der aromatischen Intensität der Gewürze des Königreichs Siam.",
  "ja": "黄金色に焼き上げた上品なクレープ。タイの庭園で育った新鮮な根から作った職人のジンジャージャムで仕上げました。ロイヤルジンジャーのスパイシーな温かみと刺激的な香りが味覚を呼び覚ます、唯一無二の感覚を生み出します。優しい甘さとシャム王国のスパイスの芳香の強さが大胆に融合した一品です。",
  "zh": "金黄精致的手工可丽饼，涂抹以泰国花园新鲜根茎制作的手工姜果酱。皇家生姜的辛香温热与刺激香调带来独特感受，唤醒味蕾。甜美柔和与暹罗王国香料芳香浓度的大胆融合。",
  "ru": "Золотистый и изысканный креп, покрытый нашим ремесленным имбирным джемом из свежих корней, выращенных в тайских садах. Пряное тепло и пикантные ноты королевского имбиря создают уникальное ощущение, пробуждающее вкусовые рецепторы. Смелое слияние нежной сладости и ароматической силы специй Сиамского королевства.",
  "ko": "태국 정원에서 자란 신선한 뿌리로 만든 수제 생강 잼을 듬뿍 바른 황금빛 세련된 크레프. 로열 진저의 따뜻한 매운맛과 향이 미각을 깨우는 독특한 감각을 선사합니다. 부드러운 단맛과 시암 왕국 향신료의 풍부한 향이 대담하게 어우러졌습니다.",
  "es": "Crêpe dorada y refinada, cubierta con nuestra mermelada artesanal de jengibre elaborada con raíces frescas de jardines tailandeses. El calor especiado y las notas picantes del jengibre real crean una sensación única que despierta las papilas gustativas. Una fusión audaz entre la dulzura suave y la intensidad aromática de las especias del reino de Siam.",
  "it": "Crêpe dorata e raffinata, ricoperta con la nostra marmellata artigianale di zenzero preparata con radici fresche dei giardini thailandesi. Il calore speziato e le note pungenti dello zenzero reale creano una sensazione unica che risveglia le papille gustative. Un’audace fusione tra la dolcezza delicata e l’intensità aromatica delle spezie del regno del Siam.",
  "nl": "Goudkleurige en verfijnde crêpe, bedekt met onze ambachtelijke gemberjam gemaakt van verse wortels uit Thaise tuinen. De kruidige warmte en pittige tonen van koninklijke gember creëren een unieke sensatie die de smaakpapillen wekt. Een gedurfde fusie tussen zachte zoetheid en de aromatische intensiteit van kruiden uit het Koninkrijk Siam.",
  "pt": "Crepe dourado e refinado, coberto com nossa geleia artesanal de gengibre feita com raízes frescas de jardins tailandeses. O calor picante e as notas intensas do gengibre real criam uma sensação única que desperta o paladar. Uma fusão ousada entre a doçura suave e a intensidade aromática das especiarias do Reino de Sião.",
  "pl": "Złocisty i wyrafinowany naleśnik zwieńczony naszym rzemieślniczym dżemem z imbiru przygotowanym ze świeżych korzeni z tajskich ogrodów. Pikantne ciepło i żywe nuty królewskiego imbiru budzą kubki smakowe. Odważne połączenie delikatnej słodyczy z aromatyczną mocą przypraw Królestwa Syjamu."
},
      supplements: []
    },
    {
      id: "crepeconfiturepapayepassion",
      reference: "C5",
      price: 50,
      name: {
        fr: "Crêpe confiture papaye passion",
        th: "เครปแยมมะละกอเสาวรส",
        en: "Papaya & Passion Fruit Jam Crêpe",
        de: "Crêpe mit Papaya-Passionsfruchtmarmelade",
        ja: "パパイヤとパッションフルーツジャムのクレープ",
        zh: "木瓜百香果酱可丽饼",
        ru: "Креп с джемом из папайи и маракуйи",
        ko: "파파야 패션프루트 잼 크레프",
        es: "Crepe de mermelada de papaya y maracuyá",
        it: "Crêpe con marmellata di papaya e frutto della passione",
        nl: "Crêpe met papaja-passievruchtjam",
        pt: "Crepe de geleia de papaia e maracujá",
        pl: "Naleśnik z dżemem papaja-marakuja"
      },
      category: {
        id: "confiture",
        name: {
          fr: "Confitures",
          th: "แยม",
          en: "Jams",
          de: "Konfitüren",
          ja: "ジャム",
          zh: "果酱",
          ru: "Джемы",
          ko: "잼",
          es: "Mermeladas",
          it: "Confetture",
          nl: "Confituur",
          pt: "Geleias",
          pl: "Dżemy"
        }
      },
      image: "assets/images/crepe_confiture_papaye_passion.webp",
      quantity: {
        amount: 30,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "sucre", "huile_de_coco", "confiture_papaye_passion"],
      description: {
  "fr": "Crêpe solaire et exotique, garnie de notre confiture artisanale de papaye et fruit de la passion, préparée avec les fruits mûris sous le soleil thaïlandais. La douceur onctueuse de la papaye rencontre l’acidité envoûtante du fruit de la passion dans une danse tropicale pleine de fraîcheur. Une création lumineuse qui évoque les jardins et les marchés parfumés du royaume de Siam.",
  "th": "เครปรสผลไม้เมืองร้อน เปี่ยมไปด้วยแยมมะละกอและเสาวรสทำมือจากผลสุกภายใต้แสงแดดของประเทศไทย ความหวานนุ่มของมะละกอผสานกับความเปรี้ยวหอมของเสาวรส เกิดเป็นรสชาติสดชื่นแบบเมืองร้อน ผลงานที่สะท้อนกลิ่นอายของสวนและตลาดไทย",
  "en": "A sunny and exotic crêpe filled with our homemade papaya and passion fruit jam, crafted from fruits ripened under the Thai sun. The smooth sweetness of papaya blends with the enchanting tang of passion fruit in a tropical dance of freshness. A bright creation that evokes the fragrant gardens and markets of the Kingdom of Siam.",
  "de": "Sonnige, exotische Crêpe, gefüllt mit unserer handgemachten Papaya-Passionsfrucht-Konfitüre aus unter der thailändischen Sonne gereiften Früchten. Die sanfte Süße der Papaya verbindet sich mit der betörenden Säure der Passionsfrucht zu einem tropischen Tanz voller Frische. Eine leuchtende Kreation, die an duftende Gärten und Märkte des Königreichs Siam erinnert.",
  "ja": "太陽に　熟れた果実の　風の詩",
  "zh": "充满阳光与异国风情的可丽饼，夹心为我们用泰国阳光下成熟的木瓜与百香果手工熬制的果酱。木瓜的柔滑甜美与百香果的迷人酸香完美交织，带来热带般清新的舞动。一道明亮的创作，唤起暹罗王国花园与集市的芳香气息。",
  "ru": "Солнечный и экзотический креп, наполненный нашим домашним джемом из папайи и маракуйи, приготовленным из фруктов, созревших под тайским солнцем. Нежная сладость папайи соединяется с чарующей кислинкой маракуйи в тропическом танце свежести. Яркое творение, напоминающее ароматные сады и рынки Сиамского королевства.",
  "ko": "태국의 햇살 아래 잘 익은 과일로 만든 수제 파파야·패션프루트 잼을 가득 채운 이국적인 크레프. 파파야의 부드러운 단맛과 패션프루트의 매혹적인 산미가 어우러져 상큼한 열대의 조화를 이룹니다. 시암 왕국의 향긋한 정원과 시장을 떠올리게 하는 밝은 창작 요리입니다.",
  "es": "Crêpe solar y exótica, rellena con nuestra mermelada artesanal de papaya y maracuyá, elaborada con frutas maduras bajo el sol tailandés. La dulzura suave de la papaya se une a la acidez envolvente de la maracuyá en una danza tropical llena de frescura. Una creación luminosa que evoca los jardines y mercados perfumados del reino de Siam.",
  "it": "Crêpe solare ed esotica, farcita con la nostra marmellata artigianale di papaya e frutto della passione, preparata con frutti maturati sotto il sole thailandese. La dolcezza vellutata della papaya incontra l’acidità avvolgente del frutto della passione in una danza tropicale piena di freschezza. Una creazione luminosa che richiama i giardini e i mercati profumati del regno del Siam.",
  "nl": "Zonnige, exotische crêpe gevuld met onze ambachtelijke papaja-passievruchtjam, bereid met vruchten die onder de Thaise zon zijn gerijpt. De zachte zoetheid van papaja vermengt zich met de betoverende frisheid van passievrucht in een tropische dans van vernieuwing. Een stralende creatie die doet denken aan de geurige tuinen en markten van het Koninkrijk Siam.",
  "pt": "Crepe solar e exótico, recheado com nossa geleia artesanal de mamão e maracujá, feita com frutas amadurecidas sob o sol tailandês. A doçura aveludada do mamão combina com a acidez envolvente do maracujá em uma dança tropical cheia de frescor. Uma criação luminosa que evoca os jardins e mercados perfumados do Reino de Sião.",
  "pl": "Słoneczny, egzotyczny naleśnik wypełniony naszym domowym dżemem z papai i marakui, przygotowanym z owoców dojrzewających w tajskim słońcu. Kremowa słodycz papai splata się z urzekającą kwasowością marakui w tropikalnym tańcu świeżości. Jasna kompozycja przywołująca pachnące ogrody i targi Królestwa Syjamu."
},
      supplements: []
    },
    {
      id: "crepeconfitureananas",
      reference: "C6",
      price: 50,
      name: {
        fr: "Crêpe confiture d'ananas",
        th: "เครปแยมสับปะรด",
        en: "Pineapple Jam Crêpe",
        de: "Crêpe mit Ananasmarmelade",
        ja: "パイナップルジャムクレープ",
        zh: "菠萝果酱可丽饼",
        ru: "Креп с ананасовым джемом",
        ko: "파인애플 잼 크레프",
        es: "Crepe de mermelada de piña",
        it: "Crêpe con marmellata di ananas",
        nl: "Crêpe met ananasjam",
        pt: "Crepe de geleia de abacaxi",
        pl: "Naleśnik z dżemem ananasowym"
      },
      category: {
        id: "confiture",
        name: {
          fr: "Confitures",
          th: "แยม",
          en: "Jams",
          de: "Konfitüren",
          ja: "ジャム",
          zh: "果酱",
          ru: "Джемы",
          ko: "잼",
          es: "Mermeladas",
          it: "Confetture",
          nl: "Confituur",
          pt: "Geleias",
          pl: "Dżemy"
        }
      },
      image: "assets/images/crepe_confiture_ananas.webp",
      quantity: {
        amount: 30,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "sucre", "huile_de_coco", "confiture_ananas"],
    description: {
  "fr": "Crêpe dorée aux accents tropicaux, garnie de notre confiture artisanale d’ananas cuite lentement pour révéler toute sa fraîcheur et son parfum. La vivacité acidulée de l’ananas thaï s’équilibre avec une douce note caramélisée, évoquant la chaleur du soleil et la brise des îles. Une escale gourmande entre douceur fruitée et éclat exotique.",
  "th": "เครปสีทองหอมผลไม้เมืองร้อน สอดไส้แยมสับปะรดทำมือที่เคี่ยวอย่างช้า ๆ เพื่อคงความสดและกลิ่นหอมเฉพาะตัว ความเปรี้ยวสดชื่นของสับปะรดไทยผสานกับความหวานหอมคล้ายคาราเมล ราวกับแสงแดดและลมทะเลแห่งเกาะร้อน การเดินทางแสนอร่อยระหว่างความหวานผลไม้และความสดชื่นแบบเมืองร้อน",
  "en": "Golden tropical crêpe filled with our homemade pineapple jam, slowly cooked to preserve its freshness and natural aroma. The tangy brightness of Thai pineapple meets a gentle caramel sweetness, evoking sunshine and island breeze. A gourmet escape between fruity tenderness and exotic sparkle.",
  "de": "Goldene tropische Crêpe, gefüllt mit unserer handgemachten Ananasmarmelade, langsam gekocht, um Frische und natürliches Aroma zu bewahren. Die spritzige Säure der thailändischen Ananas verbindet sich mit einer feinen Karamellsüße und erinnert an Sonne und Inselbrise. Eine genussvolle Reise zwischen fruchtiger Zartheit und exotischem Glanz.",
  "ja": "黄金色のトロピカルクレープ。新鮮なタイ産パイナップルをゆっくり煮詰めた自家製ジャムで包み、香りと爽やかさをそのまま閉じ込めました。酸味のきいたパイナップルと優しいカラメルの甘さが出会い、南国の太陽と潮風を思わせます。果実の優しさとエキゾチックな輝きが調和する一皿です。",
  "zh": "金黄色的热带可丽饼，夹心为我们用泰国菠萝慢火熬制的手工果酱，保留其清新与芳香。菠萝的酸甜活力与淡淡焦糖香完美平衡，仿佛阳光与海岛微风。一场在果香与异域之间的美味旅程。",
  "ru": "Золотистый тропический креп, наполненный нашим домашним ананасовым джемом, медленно приготовленным, чтобы сохранить свежесть и аромат фрукта. Яркая кислинка тайского ананаса сочетается с мягкой карамельной сладостью, напоминая солнце и морской бриз островов. Гурманское путешествие между фруктовой нежностью и экзотическим сиянием.",
  "ko": "천천히 졸여 신선함과 향을 그대로 담은 수제 파인애플 잼으로 속을 채운 황금빛 열대 크레프. 타이 파인애플의 상큼한 산미와 부드러운 캐러멜 단맛이 어우러져 태양과 섬의 바람을 떠올리게 합니다. 과일의 부드러움과 이국적인 반짝임이 조화를 이루는 미식 여행입니다.",
  "es": "Crêpe dorada de acento tropical, rellena con nuestra mermelada artesanal de piña cocinada lentamente para conservar toda su frescura y aroma. La acidez brillante de la piña tailandesa se equilibra con una suave dulzura acaramelada, evocando el sol y la brisa de las islas. Una escapada gourmet entre ternura frutal y chispa exótica.",
  "it": "Crêpe dorata dai toni tropicali, farcita con la nostra marmellata artigianale di ananas cotta lentamente per conservarne la freschezza e il profumo naturale. La vivace acidità dell’ananas thailandese si equilibra con una dolcezza caramellata, evocando il sole e la brezza delle isole. Un viaggio gourmet tra morbidezza fruttata e fascino esotico.",
  "nl": "Goudkleurige tropische crêpe, gevuld met onze ambachtelijke ananasjam die langzaam is gekookt om haar frisheid en aroma te behouden. De levendige zuurgraad van Thaise ananas mengt zich met een zachte karamelsmaak en roept zon en eilandbries op. Een culinaire ontsnapping tussen fruitige zachtheid en exotische sprankeling.",
  "pt": "Crepe dourado de inspiração tropical, recheado com nossa geleia artesanal de abacaxi, cozida lentamente para preservar sua frescura e aroma natural. A acidez vibrante do abacaxi tailandês equilibra-se com uma delicada doçura caramelizada, evocando o sol e a brisa das ilhas. Uma viagem gourmet entre a ternura frutada e o brilho exótico.",
  "pl": "Złocisty tropikalny naleśnik wypełniony naszym domowym dżemem ananasowym, powoli gotowanym, by zachować świeżość i naturalny aromat. Soczysta kwasowość tajskiego ananasa spotyka delikatnie karmelową słodycz, przywołując słońce i powiew wysp. Słodka ucieczka między owocową delikatnością a egzotycznym blaskiem."
},
      supplements: []
    },
    {
      id: "crepeconfitureananaspassion",
      reference: "C7",
      price: 50,
      name: {
        fr: "Crêpe confiture ananas passion",
        th: "เครปแยมสับปะรดเสาวรส",
        en: "Pineapple & Passion Fruit Jam Crêpe",
        de: "Crêpe mit Ananas-Passionsfruchtmarmelade",
        ja: "パイナップルとパッションフルーツジャムのクレープ",
        zh: "菠萝百香果酱可丽饼",
        ru: "Креп с джемом из ананаса и маракуйи",
        ko: "파인애플 패션프루트 잼 크레프",
        es: "Crepe de mermelada de piña y maracuyá",
        it: "Crêpe con marmellata di ananas e frutto della passione",
        nl: "Crêpe met ananas-passievruchtjam",
        pt: "Crepe de geleia de abacaxi e maracujá",
        pl: "Naleśnik z dżemem ananas-marakuja"
      },
      category: {
        id: "confiture",
        name: {
          fr: "Confitures",
          th: "แยม",
          en: "Jams",
          de: "Konfitüren",
          ja: "ジャム",
          zh: "果酱",
          ru: "Джемы",
          ko: "잼",
          es: "Mermeladas",
          it: "Confetture",
          nl: "Confituur",
          pt: "Geleias",
          pl: "Dżemy"
        }
      },
      image: "assets/images/crepe_confiture_ananas_passion.webp",
      quantity: {
        amount: 30,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "sucre", "huile_de_coco", "confiture_ananas_passion"],
      description: {
  "fr": "Crêpe dorée aux parfums d’été, garnie de notre confiture artisanale d’ananas et de fruit de la passion, cuite lentement pour révéler toute la fraîcheur des tropiques. L’ananas thaï, vif et ensoleillé, s’unit à l’intensité acidulée du fruit de la passion dans une harmonie éclatante. Une escapade gustative lumineuse où douceur et énergie se rencontrent.",
  "th": "เครปสีทองหอมหวาน สอดไส้แยมสับปะรดและเสาวรสทำมือ เคี่ยวอย่างช้า ๆ เพื่อคงความสดชื่นของผลไม้เมืองร้อน สับปะรดไทยรสเปรี้ยวหวานผสานกับความเข้มข้นของเสาวรส เกิดเป็นรสชาติที่สดใสและกลมกล่อม การเดินทางแห่งรสชาติที่เต็มไปด้วยพลังและความหอมของฤดูร้อน",
  "en": "Golden summer crêpe filled with our homemade pineapple and passion fruit jam, slowly cooked to capture the pure freshness of the tropics. Bright Thai pineapple blends with the tangy intensity of passion fruit in a radiant harmony. A luminous taste escape where sweetness meets vibrant energy.",
  "de": "Goldene Sommercrêpe, gefüllt mit unserer handgemachten Ananas-Maracuja-Konfitüre, langsam gekocht, um die reine Frische der Tropen einzufangen. Leuchtende thailändische Ananas verbindet sich mit der spritzigen Intensität der Passionsfrucht zu einer strahlenden Harmonie. Eine geschmackliche Flucht, in der Süße und Lebendigkeit aufeinandertreffen.",
  "ja": "夏の香りあふれる黄金色のクレープ。タイ産パイナップルとパッションフルーツをゆっくり煮詰めた自家製ジャムで包み、南国の爽やかさを閉じ込めました。太陽のように明るいパイナップルとパッションフルーツの酸味が調和し、甘さと活気が溶け合う味わいです。",
  "zh": "充满夏日香气的金黄色可丽饼，夹心为我们用泰国菠萝和百香果慢火熬制的手工果酱，保留纯粹的热带清新。明亮的菠萝与百香果的酸甜交织，形成耀眼的平衡。一场甜蜜与活力交融的味觉之旅。",
  "ru": "Золотистый летний креп, наполненный нашим домашним джемом из ананаса и маракуйи, медленно приготовленным, чтобы сохранить чистую свежесть тропиков. Яркий тайский ананас соединяется с кислой интенсивностью маракуйи в сияющей гармонии. Вкусовое путешествие, где сладость встречается с энергией.",
  "ko": "여름의 향을 담은 황금빛 크레프. 태국산 파인애플과 패션프루트를 천천히 졸여 만든 수제 잼으로 속을 채워 열대의 신선함을 그대로 담았습니다. 상큼한 파인애플과 톡 쏘는 패션프루트가 조화를 이루며 단맛과 생기가 어우러진 미각 여행을 선사합니다.",
  "es": "Crêpe dorada de esencia veraniega, rellena con nuestra mermelada artesanal de piña y maracuyá, cocinada lentamente para conservar toda la frescura tropical. La piña tailandesa, brillante y soleada, se une a la acidez intensa de la maracuyá en una armonía radiante. Una escapada gustativa donde dulzura y energía se encuentran.",
  "it": "Crêpe dorata dal profumo d’estate, farcita con la nostra marmellata artigianale di ananas e frutto della passione, cotta lentamente per conservare tutta la freschezza dei tropici. L’ananas thailandese, vivace e solare, si unisce all’intensità acidula del frutto della passione in un’armonia luminosa. Un viaggio di gusto dove dolcezza ed energia si incontrano.",
  "nl": "Goudkleurige zomercrêpe, gevuld met onze ambachtelijke ananas-passievruchtjam, langzaam gekookt om de pure frisheid van de tropen vast te leggen. Heldere Thaise ananas vermengt zich met de pittige intensiteit van passievrucht tot een stralende harmonie. Een smaakvolle ontsnapping waar zoetheid en energie samenkomen.",
  "pt": "Crepe dourado de inspiração tropical, recheado com nossa geleia artesanal de abacaxi e maracujá, cozida lentamente para preservar toda a frescura dos trópicos. O abacaxi tailandês, vibrante e ensolarado, une-se à intensidade ácida do maracujá em uma harmonia luminosa. Uma viagem de sabor onde doçura e energia se encontram.",
  "pl": "Złocisty letni naleśnik wypełniony naszym domowym dżemem z ananasa i marakui, powoli gotowanym, by uchwycić czystą świeżość tropików. Jasny tajski ananas łączy się z wyrazistą kwasowością marakui w promiennej harmonii. Rozświetlona podróż smaków, gdzie słodycz spotyka pulsującą energię."
},
      supplements: []
    },
    {
      id: "crepeconfituremangue",
      reference: "C8",
      price: 50,
      name: {
        fr: "Crêpe confiture de mangue",
        th: "เครปแยมมะม่วง",
        en: "Mango Jam Crêpe",
        de: "Crêpe mit Mangomarmelade",
        ja: "マンゴージャムクレープ",
        zh: "芒果果酱可丽饼",
        ru: "Креп с манговым джемом",
        ko: "망고 잼 크레프",
        es: "Crepe de mermelada de mango",
        it: "Crêpe con marmellata di mango",
        nl: "Crêpe met mangojam",
        pt: "Crepe de geleia de manga",
        pl: "Naleśnik z dżemem mango"
      },
      category: {
        id: "confiture",
        name: {
          fr: "Confitures",
          th: "แยม",
          en: "Jams",
          de: "Konfitüren",
          ja: "ジャム",
          zh: "果酱",
          ru: "Джемы",
          ko: "잼",
          es: "Mermeladas",
          it: "Confetture",
          nl: "Confituur",
          pt: "Geleias",
          pl: "Dżemy"
        }
      },
      image: "assets/images/crepe_confiture_mangue.webp",
      quantity: {
        amount: 30,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "sucre", "huile_de_coco", "confiture_mangue"],
      description: {
  "fr": "Crêpe dorée à l’élégance tropicale, garnie de notre confiture artisanale de mangue préparée avec des fruits gorgés de soleil thaïlandais. La texture fondante et la douceur veloutée de la mangue se marient à une légère touche d’acidité pour un équilibre parfait. Une expérience exotique pleine de lumière et de délicatesse.",
  "th": "เครปสีทองสไตล์เมืองร้อน สอดไส้แยมมะม่วงทำมือจากผลสุกฉ่ำที่เติบโตใต้แสงแดดของประเทศไทย เนื้อมะม่วงนุ่มละมุนผสานกับรสเปรี้ยวอ่อน ๆ อย่างลงตัว สร้างรสชาติสดชื่นและหอมหวานอย่างมีเสน่ห์ ประสบการณ์แห่งความอร่อยที่เต็มไปด้วยแสงแดดและความละเอียดอ่อน",
  "en": "Golden tropical crêpe filled with our homemade mango jam, crafted from sun-ripened Thai fruits. The smooth, velvety sweetness of mango blends with a hint of gentle acidity for perfect balance. An exotic experience full of brightness and elegance.",
  "de": "Goldene tropische Crêpe, gefüllt mit unserer handgemachten Mangokonfitüre aus unter der thailändischen Sonne gereiften Früchten. Die samtige Süße der Mango verbindet sich mit einer feinen Säurenote zu einer perfekten Balance. Ein exotisches Erlebnis voller Licht und Zartheit.",
  "ja": "タイの太陽の下で熟したマンゴーから作った自家製マンゴージャムを包んだ黄金色のクレープ。なめらかで上品な甘さのマンゴーにほのかな酸味が加わり、完璧なバランスを生み出します。光に満ちた繊細でエキゾチックな味わいです。",
  "zh": "金黄色的热带可丽饼，夹心为我们用泰国阳光下成熟的芒果手工熬制的果酱。芒果柔滑细腻的甜味与淡淡酸香完美融合，平衡而优雅。一场充满光彩与细腻的异域体验。",
  "ru": "Золотистый тропический креп, наполненный нашим домашним манговым джемом, приготовленным из фруктов, созревших под тайским солнцем. Бархатистая сладость манго сочетается с лёгкой кислинкой, создавая идеальный баланс. Экзотическое наслаждение, полное света и утончённости.",
  "ko": "태국의 햇살 아래 잘 익은 망고로 만든 수제 망고 잼을 듬뿍 채운 황금빛 열대 크레프. 부드럽고 벨벳 같은 망고의 단맛에 은은한 산미가 더해져 완벽한 조화를 이룹니다. 밝고 우아한 이국적인 미식 경험입니다.",
  "es": "Crêpe dorada de inspiración tropical, rellena con nuestra mermelada artesanal de mango elaborada con frutas maduras bajo el sol tailandés. La dulzura aterciopelada del mango se mezcla con un toque de acidez para lograr un equilibrio perfecto. Una experiencia exótica llena de luz y delicadeza.",
  "it": "Crêpe dorata dall’eleganza tropicale, farcita con la nostra marmellata artigianale di mango preparata con frutti maturati al sole thailandese. La dolcezza vellutata del mango si unisce a una leggera nota acidula per un equilibrio perfetto. Un’esperienza esotica piena di luce e raffinatezza.",
  "nl": "Goudkleurige tropische crêpe, gevuld met onze ambachtelijke mangojam, gemaakt van onder de Thaise zon gerijpte vruchten. De fluweelzachte zoetheid van mango mengt zich met een vleugje zachte zuurheid tot een perfecte balans. Een exotische ervaring vol licht en elegantie.",
  "pt": "Crepe dourado de inspiração tropical, recheado com nossa geleia artesanal de manga feita com frutas amadurecidas sob o sol tailandês. A doçura aveludada da manga combina com um leve toque de acidez, criando um equilíbrio perfeito. Uma experiência exótica repleta de luz e delicadeza.",
  "pl": "Złocisty tropikalny naleśnik wypełniony naszym domowym dżemem mango z tajskich owoców dojrzewających w słońcu. Jedwabista, aksamitna słodycz mango przeplata się z nutą delikatnej kwasowości dla idealnej równowagi. Egzotyczne doświadczenie pełne blasku i elegancji."
},
      supplements: []
    },
    {
      id: "crepeconfituremanguepassion",
      reference: "C9",
      price: 50,
      name: {
        fr: "Crêpe confiture mangue passion",
        th: "เครปแยมมะม่วงเสาวรส",
        en: "Mango & Passion Fruit Jam Crêpe",
        de: "Crêpe mit Mango-Passionsfruchtmarmelade",
        ja: "マンゴーとパッションフルーツジャムのクレープ",
        zh: "芒果百香果酱可丽饼",
        ru: "Креп с джемом из манго и маракуйи",
        ko: "망고 패션프루트 잼 크레프",
        es: "Crepe de mermelada de mango y maracuyá",
        it: "Crêpe con marmellata di mango e frutto della passione",
        nl: "Crêpe met mango-passievruchtjam",
        pt: "Crepe de geleia de manga e maracujá",
        pl: "Naleśnik z dżemem mango-marakuja"
      },
      category: {
        id: "confiture",
        name: {
          fr: "Confitures",
          th: "แยม",
          en: "Jams",
          de: "Konfitüren",
          ja: "ジャム",
          zh: "果酱",
          ru: "Джемы",
          ko: "잼",
          es: "Mermeladas",
          it: "Confetture",
          nl: "Confituur",
          pt: "Geleias",
          pl: "Dżemy"
        }
      },
      image: "assets/images/crepe_confiture_mangue_passion.webp",
      quantity: {
        amount: 30,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "sucre", "huile_de_coco", "confiture_mangue_passion"],
      supplements: []
    },
    {
      id: "crepeconfituremanguevertecitronvert",
      reference: "C10",
      price: 50,
      name: {
        fr: "Crêpe confiture mangue verte & citron vert",
        th: "เครปแยมมะม่วงดิบและมะนาว",
        en: "Green Mango & Lime Jam Crêpe",
        de: "Crêpe mit grüner Mango-Limettenmarmelade",
        ja: "青マンゴーとライムジャムのクレープ",
        zh: "青芒果青柠果酱可丽饼",
        ru: "Креп с джемом из зелёного манго и лайма",
        ko: "풋망고 라임 잼 크레프",
        es: "Crepe de mermelada de mango verde y lima",
        it: "Crêpe con marmellata di mango verde e lime",
        nl: "Crêpe met groene mango-limoenjam",
        pt: "Crepe de geleia de manga verde e limão",
        pl: "Naleśnik z dżemem zielone mango-limonka"
      },
      category: {
        id: "confiture",
        name: {
          fr: "Confitures",
          th: "แยม",
          en: "Jams",
          de: "Konfitüren",
          ja: "ジャム",
          zh: "果酱",
          ru: "Джемы",
          ko: "잼",
          es: "Mermeladas",
          it: "Confetture",
          nl: "Confituur",
          pt: "Geleias",
          pl: "Dżemy"
        }
      },
      image: "assets/images/crepe_confiture_citron_vert_mangue.webp",
      quantity: {
        amount: 30,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "sucre", "huile_de_coco", "confiture_mangue_verte_citron_vert"],
      description: {
  "fr": "Crêpe dorée et rafraîchissante, garnie de notre confiture artisanale de mangue verte et de citron vert, élaborée à partir de fruits cueillis à maturité dans les vergers thaïlandais. La vivacité acidulée du citron vert sublime la fraîcheur végétale de la mangue verte pour une expérience tonique et équilibrée. Une création lumineuse qui marie douceur exotique et éclat citronné.",
  "th": "เครปสีทองหอมสดชื่น สอดไส้แยมมะม่วงดิบและมะนาวทำมือจากผลไม้สุกพอดีในสวนของประเทศไทย ความเปรี้ยวสดของมะนาวช่วยขับรสสดชื่นของมะม่วงดิบอย่างลงตัว มอบประสบการณ์ที่สดใส เปี่ยมพลัง และหอมหวานแบบเมืองร้อน",
  "en": "Golden and refreshing crêpe filled with our homemade green mango and lime jam, made from perfectly ripe Thai fruits. The zesty brightness of lime enhances the crisp freshness of green mango, creating a balanced and invigorating experience. A luminous creation that unites exotic sweetness with citrus sparkle.",
  "de": "Goldene, erfrischende Crêpe, gefüllt mit unserer handgemachten Konfitüre aus grüner Mango und Limette, hergestellt aus perfekt gereiften thailändischen Früchten. Die spritzige Frische der Limette unterstreicht die lebhafte Note der grünen Mango und schafft ein ausgewogenes, belebendes Geschmackserlebnis. Eine leuchtende Kreation, die exotische Süße mit zitrischer Frische vereint.",
  "ja": "タイの果樹園で完熟した果実から作った、自家製グリーンマンゴーとライムのジャムを添えた黄金色のクレープ。ライムの爽やかな酸味がグリーンマンゴーの瑞々しさを引き立て、バランスの取れた清々しい味わいに仕上げました。南国の甘さとシトラスの輝きが調和する一皿です。",
  "zh": "金黄色的可丽饼，夹心为我们用泰国果园采摘的青芒果与青柠手工熬制的果酱。青柠的清新酸香衬托出青芒果的爽脆与清香，创造出平衡而振奋的味觉体验。一道融合异域甜香与柑橘光泽的明亮创作。",
  "ru": "Золотистый и освежающий креп, наполненный нашим домашним джемом из зелёного манго и лайма, приготовленным из идеально зрелых тайских фруктов. Яркая кислинка лайма подчёркивает свежесть зелёного манго, создавая гармоничное и бодрящее вкусовое сочетание. Светлая экзотическая композиция, объединяющая сладость и цитрусовую искру.",
  "ko": "태국 과수원에서 갓 수확한 과일로 만든 수제 그린 망고·라임 잼을 듬뿍 채운 상큼한 황금빛 크레프. 라임의 상쾌한 산미가 그린 망고의 신선함을 한층 돋보이게 하며, 균형 잡힌 활력 넘치는 맛을 선사합니다. 이국적인 단맛과 시트러스의 반짝임이 어우러진 밝은 창작 요리입니다.",
  "es": "Crêpe dorada y refrescante, rellena con nuestra mermelada artesanal de mango verde y lima, elaborada con frutas tailandesas recogidas en su punto justo de madurez. El brillo ácido de la lima realza la frescura de la mango verde, creando una experiencia equilibrada y estimulante. Una creación luminosa que combina dulzura exótica y chispa cítrica.",
  "it": "Crêpe dorata e rinfrescante, farcita con la nostra marmellata artigianale di mango verde e lime, preparata con frutti raccolti al giusto punto di maturazione nei frutteti thailandesi. La vivace acidità del lime esalta la freschezza della mango verde, creando un’esperienza tonica ed equilibrata. Una creazione luminosa che unisce dolcezza esotica e brillantezza agrumata.",
  "nl": "Goudkleurige en verfrissende crêpe, gevuld met onze ambachtelijke jam van groene mango en limoen, gemaakt van perfect rijpe Thaise vruchten. De levendige frisheid van limoen versterkt de knapperige tonen van groene mango en zorgt voor een evenwichtige, opwekkende ervaring. Een stralende creatie die exotische zoetheid met citrusfrisheid verenigt.",
  "pt": "Crepe dourado e refrescante, recheado com nossa geleia artesanal de manga verde e limão, feita com frutas tailandesas colhidas no ponto certo. O toque ácido do limão realça a frescura da manga verde, criando uma experiência equilibrada e revigorante. Uma criação luminosa que une doçura exótica e brilho cítrico.",
  "pl": "Złocisty, orzeźwiający naleśnik wypełniony naszym domowym dżemem z zielonego mango i limonki, przygotowanym z doskonale dojrzałych tajskich owoców. Rześka świeżość limonki podbija chrupiącą nutę zielonego mango, tworząc zrównoważone i pobudzające doznanie. Promienna kompozycja łącząca egzotyczną słodycz z cytrusowym blaskiem."
},
      supplements: []
    },
    {
      id: "crepeconfiturepassion",
      reference: "C11",
      price: 50,
      name: {
        fr: "Crêpe confiture de fruit de la passion",
        th: "เครปแยมเสาวรส",
        en: "Passion Fruit Jam Crêpe",
        de: "Crêpe mit Passionsfruchtmarmelade",
        ja: "パッションフルーツジャムクレープ",
        zh: "百香果果酱可丽饼",
        ru: "Креп с джемом из маракуйи",
        ko: "패션프루트 잼 크레프",
        es: "Crepe de mermelada de maracuyá",
        it: "Crêpe con marmellata di frutto della passione",
        nl: "Crêpe met passievruchtjam",
        pt: "Crepe de geleia de maracujá",
        pl: "Naleśnik z dżemem z marakui"
      },
      category: {
        id: "confiture",
        name: {
          fr: "Confitures",
          th: "แยม",
          en: "Jams",
          de: "Konfitüren",
          ja: "ジャム",
          zh: "果酱",
          ru: "Джемы",
          ko: "잼",
          es: "Mermeladas",
          it: "Confetture",
          nl: "Confituur",
          pt: "Geleias",
          pl: "Dżemy"
        }
      },
      image: "assets/images/crepe_confiture_passion.webp",
      quantity: {
        amount: 30,
        infinite: false
      },
     "description": {
  "fr": "Crêpe soyeuse aux nuances dorées, sublimée par notre confiture artisanale de fruit de la passion. L’intensité parfumée et l’acidité délicate de ce fruit exotique offrent une explosion de saveurs tropicales en bouche. Une invitation au voyage où la finesse française rencontre la générosité des tropiques.",
  "th": "เครปเนียนนุ่มสีทองอร่าม ยกระดับด้วยแยมเสาวรสทำมือ ความหอมเข้มข้นและความเปรี้ยวละมุนของผลไม้เมืองร้อนชนิดนี้สร้างรสชาติที่ระเบิดอยู่ในปาก คำเชิญสู่การเดินทางที่ความละเมียดของฝรั่งเศสหลอมรวมกับเสน่ห์อันอุดมของเขตร้อน",
  "en": "Silky golden crêpe elevated by our homemade passion fruit jam. The fragrant intensity and delicate acidity of this exotic fruit deliver an explosion of tropical flavors. An invitation to travel where French finesse meets tropical generosity.",
  "de": "Seidige, goldene Crêpe, veredelt mit unserer handgemachten Passionsfruchtkonfitüre. Die duftende Intensität und feine Säure dieser exotischen Frucht entfalten eine Explosion tropischer Aromen. Eine Einladung auf eine Reise, auf der französische Finesse auf tropische Fülle trifft.",
  "ja": "黄金色に輝くシルキーなクレープ。職人の手で仕上げたパッションフルーツジャムが香り高く酸味のある南国の味わいを引き立てます。フランスの繊細さとトロピカルな豊かさが出会う味覚の旅へようこそ。",
  "zh": "金黄色丝滑的可丽饼，搭配我们手工制作的百香果果酱。这种异域水果的芳香与柔和酸味在口中绽放出热带风情的爆发。一场法式精致与热带丰盈交织的味觉之旅。",
  "ru": "Шелковистый золотистый креп, украшенный нашим домашним джемом из маракуйи. Ароматная насыщенность и деликатная кислотность этого экзотического фрукта создают взрыв тропических вкусов. Приглашение в путешествие, где французская изысканность встречается с щедростью тропиков.",
  "ko": "황금빛의 부드러운 크레프에 수제 패션프루트 잼을 더했습니다. 이국적인 과일의 향긋함과 섬세한 산미가 입안에서 열대 풍미의 폭발을 선사합니다. 프랑스의 섬세함과 열대의 풍요로움이 만나는 미각 여행입니다.",
  "es": "Crêpe sedosa de tonos dorados, realzada con nuestra mermelada artesanal de maracuyá. La intensidad aromática y la acidez delicada de esta fruta exótica ofrecen una explosión de sabores tropicales. Una invitación al viaje donde la elegancia francesa se encuentra con la abundancia tropical.",
  "it": "Crêpe setosa dalle sfumature dorate, esaltata dalla nostra marmellata artigianale di frutto della passione. L’intensità profumata e la delicata acidità di questo frutto esotico regalano un’esplosione di sapori tropicali. Un invito al viaggio dove la raffinatezza francese incontra la generosità dei tropici.",
  "nl": "Zijdezachte crêpe met gouden tinten, verrijkt met onze ambachtelijke passievruchtjam. De geurige intensiteit en subtiele zuurgraad van deze exotische vrucht zorgen voor een explosie van tropische smaken. Een uitnodiging op reis waar Franse finesse samenkomt met tropische overvloed.",
  "pt": "Crepe sedoso de tons dourados, realçado pela nossa geleia artesanal de maracujá. A intensidade aromática e a acidez delicada desta fruta exótica proporcionam uma explosão de sabores tropicais. Um convite para uma viagem onde a fineza francesa se encontra com a exuberância dos trópicos.",
  "pl": "Jedwabisty, złocisty naleśnik wzbogacony naszym domowym dżemem z marakui. Intensywny aromat i subtelna kwasowość tego egzotycznego owocu dostarczają eksplozji tropikalnych smaków. Zaproszenie w podróż, gdzie francuska finezja spotyka tropikalną hojność."
},
      supplements: []
    },
    {
      id: "crepeconfiturecoco",
      reference: "C12",
      price: 50,
      name: {
        fr: "Crêpe confiture de coco",
        th: "เครปแยมมะพร้าว",
        en: "Coconut Jam Crêpe",
        de: "Crêpe mit Kokosnussmarmelade",
        ja: "ココナッツジャムクレープ",
        zh: "椰子果酱可丽饼",
        ru: "Креп с кокосовым джемом",
        ko: "코코넛 잼 크레프",
        es: "Crepe de mermelada de coco",
        it: "Crêpe con marmellata di cocco",
        nl: "Crêpe met kokosjam",
        pt: "Crepe de geleia de coco",
        pl: "Naleśnik z dżemem kokosowym"
      },
      category: {
        id: "confiture",
        name: {
          fr: "Confitures",
          th: "แยม",
          en: "Jams",
          de: "Konfitüren",
          ja: "ジャム",
          zh: "果酱",
          ru: "Джемы",
          ko: "잼",
          es: "Mermeladas",
          it: "Confetture",
          nl: "Confituur",
          pt: "Geleias",
          pl: "Dżemy"
        }
      },
      image: "assets/images/crepe_confiture_coco.webp",
      quantity: {
        amount: 30,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "sucre", "huile_de_coco", "confiture_coco"],
     description: {
  "fr": "Crêpe moelleuse aux reflets nacrés, sublimée par notre confiture artisanale de coco. La douceur crémeuse et les arômes envoûtants de la noix de coco invitent à un voyage sensoriel vers les plages et les jardins tropicaux. Une évasion gourmande où le soleil se mêle à la tendresse du coco.",
  "th": "เครปนุ่มประกายมุก ยกระดับด้วยแยมมะพร้าวทำมือ ความหวานละมุนและกลิ่นหอมของมะพร้าวพาใจล่องลอยสู่ชายหาดและสวนเมืองร้อน การเดินทางแห่งรสชาติที่เต็มไปด้วยแสงแดดและความอ่อนโยนของมะพร้าว",
  "en": "Soft crêpe with pearly reflections, enhanced by our homemade coconut jam. The creamy sweetness and alluring aroma of coconut invite a sensory escape to tropical beaches and lush gardens. A gourmet journey where sunshine meets the gentle soul of coconut.",
  "de": "Weiche Crêpe mit perlmuttartigem Schimmer, veredelt mit unserer handgemachten Kokosnusskonfitüre. Die cremige Süße und der betörende Duft der Kokosnuss entführen zu tropischen Stränden und üppigen Gärten. Eine genussvolle Reise voller Sonne und Zärtlichkeit des Kokos.",
  "ja": "真珠のような艶を持つ柔らかなクレープ。職人のココナッツジャムが加わり、クリーミーな甘さと南国の香りが広がります。太陽のぬくもりとココナッツの優しさが溶け合う、味覚の小旅行。",
  "zh": "柔软如珍珠般光泽的可丽饼，配上我们手工熬制的椰子果酱。椰子的香甜与丝滑带来一场前往热带海滩与花园的感官之旅。一次阳光与椰香交融的美味体验。",
  "ru": "Нежный креп с перламутровым отблеском, украшенный нашим домашним кокосовым джемом. Кремовая сладость и чарующий аромат кокоса переносят на тропические пляжи и в пышные сады. Вкусовое путешествие, где солнце соединяется с нежностью кокоса.",
  "ko": "진주빛 윤기가 감도는 부드러운 크레프, 수제 코코넛 잼으로 완성되었습니다. 코코넛의 크리미한 단맛과 향이 열대 해변과 정원으로 감각적인 여행을 초대합니다. 태양과 코코넛의 부드러움이 어우러진 미식 여행입니다.",
  "es": "Crêpe suave con reflejos nacarados, realzada con nuestra mermelada artesanal de coco. La dulzura cremosa y el aroma cautivador del coco invitan a un viaje sensorial hacia playas y jardines tropicales. Una escapada gourmet donde el sol se mezcla con la suavidad del coco.",
  "it": "Crêpe morbida con riflessi madreperlacei, esaltata dalla nostra marmellata artigianale di cocco. La dolcezza cremosa e il profumo avvolgente del cocco invitano a un viaggio sensoriale tra spiagge e giardini tropicali. Un’evasione golosa dove il sole incontra la tenerezza del cocco.",
  "nl": "Zachte crêpe met parelmoeren glans, verrijkt met onze ambachtelijke kokosjam. De romige zoetheid en betoverende geur van kokosnodigen uit tot een zintuiglijke reis naar tropische stranden en weelderige tuinen. Een culinaire ontsnapping waar zon en kokoszachtheid samenkomen.",
  "pt": "Crepe macio com reflexos nacarados, realçado pela nossa geleia artesanal de coco. A doçura cremosa e o aroma envolvente do coco convidam a uma viagem sensorial por praias e jardins tropicais. Uma fuga gourmet onde o sol se encontra com a suavidade do coco.",
  "pl": "Delikatny naleśnik o perłowym blasku, wzbogacony naszym domowym dżemem kokosowym. Kremowa słodycz i uwodzicielski aromat kokosa zapraszają w zmysłową podróż na tropikalne plaże i do bujnych ogrodów. Kulinarna wyprawa, w której słońce spotyka łagodność kokosa."
},
      supplements: []
    }
];

export const getMenuItemById = (id) => {
  return menuItems.find(item => item.id === id);
};

export const getMenuItemByReference = (reference) => {
  return menuItems.find(item => item.reference === reference);
};

export default menuItems;
