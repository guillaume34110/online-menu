export const menuItems = [
    {
      id: "cafe",
      reference: "B1",
      price: 35,
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
        pt: "Café"
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
          pt: "Bebidas"
        }
      },
      image: "assets/images/cafe.png",
      quantity: {
        amount: 50,
        infinite: true
      },
      ingredients: ["cafe", "eau"],
      supplements: []
    },
    {
      id: "tea",
      reference: "B2",
      price: 35,
      name: {
        fr: "Thé",
        th: "ชา",
        en: "Tea",
        de: "Tee",
        ja: "お茶",
        zh: "茶",
        ru: "Чай",
        ko: "차",
        es: "Té",
        it: "Tè",
        nl: "Thee",
        pt: "Chá"
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
          pt: "Bebidas"
        }
      },
      image: "assets/images/the.png",
      quantity: {
        amount: 50,
        infinite: true
      },
      ingredients: ["the", "eau"],
      supplements: []
    },
    {
      id: "water",
      reference: "B3",
      price: 10,
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
        pt: "Água"
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
          pt: "Bebidas"
        }
      },
      image: "assets/images/water.png",
      quantity: {
        amount: 100,
        infinite: true
      },
      ingredients: ["eau"],
      supplements: []
    },
    {
      id: "crepesaleepouletcurryenfant",
      reference: "CS1E",
      price: 39,
      name: {
        fr: "Crêpe salée poulet curry - Enfant",
        th: "เครปคาวไก่แกงกะหรี่ - เด็ก",
        en: "Chicken curry savory crêpe - Kids",
        de: "Herzhafte Hähnchen-Curry-Crêpe - Kinder",
        ja: "チキンカレーのセイボリークレープ（キッズ）",
        zh: "咖喱鸡咸味可丽饼 - 儿童",
        ru: "Соленый креп с курицей карри - дети",
        ko: "치킨 카레 세이보리 크레프 - 키즈",
        es: "Crepe salada de pollo al curry - Infantil",
        it: "Crêpe salata al curry di pollo - Bambini",
        nl: "Hartige kip-kerriecrêpe - Kind",
        pt: "Crepe salgado de frango ao curry - Infantil"
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
          pt: "Salgados"
        }
      },
      image: "assets/images/crepe_poulet_curry.png",
      quantity: {
        amount: 20,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "huile_de_coco", "sel", "poulet", "pate_de_curry", "lait_de_coco", "oignon", "ail", "salade_composee"],
      supplements: []
    },
    {
      id: "crepesaleepouletcurrynormal",
      reference: "CS1",
      price: 79,
      name: {
        fr: "Crêpe salée poulet curry - Normal",
        th: "เครปคาวไก่แกงกะหรี่ - ปกติ",
        en: "Chicken curry savory crêpe - Regular",
        de: "Herzhafte Hähnchen-Curry-Crêpe - Normal",
        ja: "チキンカレーのセイボリークレープ（レギュラー）",
        zh: "咖喱鸡咸味可丽饼 - 常规",
        ru: "Соленый креп с курицей карри - стандарт",
        ko: "치킨 카레 세이보리 크레프 - 일반",
        es: "Crepe salada de pollo al curry - Normal",
        it: "Crêpe salata al curry di pollo - Normale",
        nl: "Hartige kip-kerriecrêpe - Normaal",
        pt: "Crepe salgado de frango ao curry - Normal"
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
          pt: "Salgados"
        }
      },
      image: "assets/images/crepe_poulet_curry.png",
      quantity: {
        amount: 25,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "huile_de_coco", "sel", "poulet", "pate_de_curry", "lait_de_coco", "oignon", "ail", "salade_composee"],
      supplements: []
    },
    {
      id: "crepesaleepouletcurryxl",
      reference: "CS1XL",
      price: 119,
      name: {
        fr: "Crêpe salée poulet curry - XL",
        th: "เครปคาวไก่แกงกะหรี่ - XL",
        en: "Chicken curry savory crêpe - XL",
        de: "Herzhafte Hähnchen-Curry-Crêpe - XL",
        ja: "チキンカレーのセイボリークレープ（XL）",
        zh: "咖喱鸡咸味可丽饼 - 加大",
        ru: "Соленый креп с курицей карри - XL",
        ko: "치킨 카레 세이보리 크레프 - XL",
        es: "Crepe salada de pollo al curry - XL",
        it: "Crêpe salata al curry di pollo - XL",
        nl: "Hartige kip-kerriecrêpe - XL",
        pt: "Crepe salgado de frango ao curry - XL"
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
          pt: "Salgados"
        }
      },
      image: "assets/images/crepe_poulet_curry.png",
      quantity: {
        amount: 15,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "huile_de_coco", "sel", "poulet", "pate_de_curry", "lait_de_coco", "oignon", "ail", "salade_composee"],
      supplements: []
    },
    {
      id: "crepesaleeporchacheenfant",
      reference: "CS2E",
      price: 39,
      name: {
        fr: "Crêpe salée porc haché - Enfant",
        th: "เครปคาวหมูสับ - เด็ก",
        en: "Minced pork savory crêpe - Kids",
        de: "Herzhafte Crêpe mit gehacktem Schwein - Kinder",
        ja: "豚ひき肉のセイボリークレープ（キッズ）",
        zh: "碎猪肉咸味可丽饼 - 儿童",
        ru: "Соленый креп с рубленой свининой - дети",
        ko: "다진 돼지고기 세이보리 크레프 - 키즈",
        es: "Crepe salada de cerdo picado - Infantil",
        it: "Crêpe salata al maiale tritato - Bambini",
        nl: "Hartige crêpe met gehakt varkensvlees - Kind",
        pt: "Crepe salgado de porco moído - Infantil"
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
          pt: "Salgados"
        }
      },
      image: "assets/images/crepe_porc_hache.png",
      quantity: {
        amount: 20,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "huile_de_coco", "sel", "porc_hache", "oignon", "ail", "salade_composee"],
      supplements: []
    },
    {
      id: "crepesaleeporchachenormal",
      reference: "CS2",
      price: 79,
      name: {
        fr: "Crêpe salée porc haché - Normal",
        th: "เครปคาวหมูสับ - ปกติ",
        en: "Minced pork savory crêpe - Regular",
        de: "Herzhafte Crêpe mit gehacktem Schwein - Normal",
        ja: "豚ひき肉のセイボリークレープ（レギュラー）",
        zh: "碎猪肉咸味可丽饼 - 常规",
        ru: "Соленый креп с рубленой свининой - стандарт",
        ko: "다진 돼지고기 세이보리 크레프 - 일반",
        es: "Crepe salada de cerdo picado - Normal",
        it: "Crêpe salata al maiale tritato - Normale",
        nl: "Hartige crêpe met gehakt varkensvlees - Normaal",
        pt: "Crepe salgado de porco moído - Normal"
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
          pt: "Salgados"
        }
      },
      image: "assets/images/crepe_porc_hache.png",
      quantity: {
        amount: 25,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "huile_de_coco", "sel", "porc_hache", "oignon", "ail", "salade_composee"],
      supplements: []
    },
    {
      id: "crepesaleeporchachexl",
      reference: "CS2XL",
      price: 119,
      name: {
        fr: "Crêpe salée porc haché - XL",
        th: "เครปคาวหมูสับ - XL",
        en: "Minced pork savory crêpe - XL",
        de: "Herzhafte Crêpe mit gehacktem Schwein - XL",
        ja: "豚ひき肉のセイボリークレープ（XL）",
        zh: "碎猪肉咸味可丽饼 - 加大",
        ru: "Соленый креп с рубленой свининой - XL",
        ko: "다진 돼지고기 세이보리 크레프 - XL",
        es: "Crepe salada de cerdo picado - XL",
        it: "Crêpe salata al maiale tritato - XL",
        nl: "Hartige crêpe met gehakt varkensvlees - XL",
        pt: "Crepe salgado de porco moído - XL"
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
          pt: "Salgados"
        }
      },
      image: "assets/images/crepe_porc_hache.png",
      quantity: {
        amount: 15,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "huile_de_coco", "sel", "porc_hache", "oignon", "ail", "salade_composee"],
      supplements: []
    },
    {
      id: "crepesaleesaladeenfant",
      reference: "CS3E",
      price: 39,
      name: {
        fr: "Crêpe salée salade - Enfant",
        th: "เครปคาวสลัด - เด็ก",
        en: "Salad savory crêpe - Kids",
        de: "Herzhafte Salat-Crêpe - Kinder",
        ja: "サラダのセイボリークレープ（キッズ）",
        zh: "沙拉咸味可丽饼 - 儿童",
        ru: "Соленый креп с салатом - дети",
        ko: "샐러드 세이보리 크레프 - 키즈",
        es: "Crepe salada de ensalada - Infantil",
        it: "Crêpe salata all'insalata - Bambini",
        nl: "Hartige saladecrêpe - Kind",
        pt: "Crepe salgado de salada - Infantil"
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
          pt: "Salgados"
        }
      },
      image: "assets/images/crepe_salade.png",
      quantity: {
        amount: 20,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "huile_de_coco", "sel", "salade", "fromage", "vinaigrette", "salade_composee"],
      supplements: []
    },
    {
      id: "crepesaleesaladenormal",
      reference: "CS3",
      price: 79,
      name: {
        fr: "Crêpe salée salade - Normal",
        th: "เครปคาวสลัด - ปกติ",
        en: "Salad savory crêpe - Regular",
        de: "Herzhafte Salat-Crêpe - Normal",
        ja: "サラダのセイボリークレープ（レギュラー）",
        zh: "沙拉咸味可丽饼 - 常规",
        ru: "Соленый креп с салатом - стандарт",
        ko: "샐러드 세이보리 크레프 - 일반",
        es: "Crepe salada de ensalada - Normal",
        it: "Crêpe salata all'insalata - Normale",
        nl: "Hartige saladecrêpe - Normaal",
        pt: "Crepe salgado de salada - Normal"
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
          pt: "Salgados"
        }
      },
      image: "assets/images/crepe_salade.png",
      quantity: {
        amount: 30,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "huile_de_coco", "sel", "salade", "fromage", "vinaigrette", "salade_composee"],
      supplements: []
    },
    {
      id: "crepesaleesaladexl",
      reference: "CS3XL",
      price: 119,
      name: {
        fr: "Crêpe salée salade - XL",
        th: "เครปคาวสลัด - XL",
        en: "Salad savory crêpe - XL",
        de: "Herzhafte Salat-Crêpe - XL",
        ja: "サラダのセイボリークレープ（XL）",
        zh: "沙拉咸味可丽饼 - 加大",
        ru: "Соленый креп с салатом - XL",
        ko: "샐러드 세이보리 크레프 - XL",
        es: "Crepe salada de ensalada - XL",
        it: "Crêpe salata all'insalata - XL",
        nl: "Hartige saladecrêpe - XL",
        pt: "Crepe salgado de salada - XL"
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
          pt: "Salgados"
        }
      },
      image: "assets/images/crepe_salade.png",
      quantity: {
        amount: 15,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "huile_de_coco", "sel", "salade", "fromage", "vinaigrette", "salade_composee"],
      supplements: []
    },
    {
      id: "crepechokaju",
      reference: "SU1",
      price: 80,
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
        pt: "Crepe Chokaju"
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
          pt: "Doces"
        }
      },
      image: "assets/images/crepe-chokaju.png",
      quantity: {
        amount: 20,
        infinite: false
      },
      ingredients: [
        "farine",
        "oeufs",
        "lait",
        "sucre",
        "beurre",
        { fr: "Pâte Chokaju", en: "Chokaju spread", th: "สเปรดโชคาจู" },
        { fr: "Noisettes torréfiées", en: "Roasted hazelnuts", th: "ฮาเซลนัตส์อบ" }
      ],
      supplements: []
    },
    {
      id: "crepecaracoco",
      reference: "SU2",
      price: 80,
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
        pt: "Crepe Caracoco"
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
          pt: "Doces"
        }
      },
      image: "assets/images/crepe-caracoco.png",
      quantity: {
        amount: 20,
        infinite: false
      },
      ingredients: [
        "farine",
        "oeufs",
        "lait",
        "sucre",
        "beurre",
        { fr: "Caramel maison", en: "House caramel", th: "คาราเมลโฮมเมด" },
        { fr: "Noix de coco râpée", en: "Toasted coconut", th: "มะพร้าวคั่ว" }
      ],
      supplements: []
    },
    {
      id: "crepeconfiturefraise",
      reference: "C1",
      price: 70,
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
        pt: "Crepe de geleia de morango"
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
          pt: "Geleias"
        }
      },
      image: "assets/images/crepe_confiture_fraise.png",
      quantity: {
        amount: 30,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "sucre", "beurre", "confiture_fraise"],
      supplements: []
    },
    {
      id: "crepeconfituremure",
      reference: "C2",
      price: 70,
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
        pt: "Crepe de geleia de amora"
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
          pt: "Geleias"
        }
      },
      image: "assets/images/crepe_confiture_mure.png",
      quantity: {
        amount: 30,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "sucre", "beurre", "confiture_mure"],
      supplements: []
    },
    {
      id: "crepeconfituremulberry",
      reference: "C3",
      price: 70,
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
        pt: "Crepe de geleia de amoreira"
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
          pt: "Geleias"
        }
      },
      image: "assets/images/crepe_confiture_mulberry.png",
      quantity: {
        amount: 30,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "sucre", "beurre", "confiture_mulberry"],
      supplements: []
    },
    {
      id: "crepeconfituregingembre",
      reference: "C4",
      price: 70,
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
        pt: "Crepe de geleia de gengibre"
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
          pt: "Geleias"
        }
      },
      image: "assets/images/crepe_confiture_gingembre.png",
      quantity: {
        amount: 30,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "sucre", "beurre", "confiture_gingembre"],
      supplements: []
    },
    {
      id: "crepeconfiturepapayepassion",
      reference: "C5",
      price: 70,
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
        pt: "Crepe de geleia de papaia e maracujá"
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
          pt: "Geleias"
        }
      },
      image: "assets/images/crepe_confiture_papaye_passion.png",
      quantity: {
        amount: 30,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "sucre", "beurre", "confiture_papaye_passion"],
      supplements: []
    },
    {
      id: "crepeconfitureananas",
      reference: "C6",
      price: 70,
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
        pt: "Crepe de geleia de abacaxi"
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
          pt: "Geleias"
        }
      },
      image: "assets/images/crepe_confiture_ananas.png",
      quantity: {
        amount: 30,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "sucre", "beurre", "confiture_ananas"],
      supplements: []
    },
    {
      id: "crepeconfitureananaspassion",
      reference: "C7",
      price: 70,
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
        pt: "Crepe de geleia de abacaxi e maracujá"
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
          pt: "Geleias"
        }
      },
      image: "assets/images/crepe_confiture_ananas_passion.png",
      quantity: {
        amount: 30,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "sucre", "beurre", "confiture_ananas_passion"],
      supplements: []
    },
    {
      id: "crepeconfituremangue",
      reference: "C8",
      price: 70,
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
        pt: "Crepe de geleia de manga"
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
          pt: "Geleias"
        }
      },
      image: "assets/images/crepe_confiture_mangue.png",
      quantity: {
        amount: 30,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "sucre", "beurre", "confiture_mangue"],
      supplements: []
    },
    {
      id: "crepeconfituremanguepassion",
      reference: "C9",
      price: 70,
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
        pt: "Crepe de geleia de manga e maracujá"
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
          pt: "Geleias"
        }
      },
      image: "assets/images/crepe_confiture_mangue_passion.png",
      quantity: {
        amount: 30,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "sucre", "beurre", "confiture_mangue_passion"],
      supplements: []
    },
    {
      id: "crepeconfituremanguevertecitronvert",
      reference: "C10",
      price: 70,
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
        pt: "Crepe de geleia de manga verde e limão"
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
          pt: "Geleias"
        }
      },
      image: "assets/images/crepe_confiture_citron_vert_mangue.png",
      quantity: {
        amount: 30,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "sucre", "beurre", "confiture_mangue_verte_citron_vert"],
      supplements: []
    },
    {
      id: "crepeconfiturepassion",
      reference: "C11",
      price: 70,
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
        pt: "Crepe de geleia de maracujá"
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
          pt: "Geleias"
        }
      },
      image: "assets/images/crepe_confiture_passion.png",
      quantity: {
        amount: 30,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "sucre", "beurre", "confiture_passion"],
      supplements: []
    },
    {
      id: "crepeconfiturecoco",
      reference: "C12",
      price: 70,
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
        pt: "Crepe de geleia de coco"
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
          pt: "Geleias"
        }
      },
      image: "assets/images/crepe_confiture_coco.png",
      quantity: {
        amount: 30,
        infinite: false
      },
      ingredients: ["farine", "oeufs", "lait", "sucre", "beurre", "confiture_coco"],
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
