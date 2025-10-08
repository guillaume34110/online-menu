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
      id: "crepesaleepouletcurry",
      reference: "CS1",
      price: 79,
      name: {
        fr: "Crêpe salée poulet curry",
        th: "เครปคาวไก่แกงกะหรี่",
        en: "Chicken curry savory crêpe",
        de: "Herzhafte Hähnchen-Curry-Crêpe",
        ja: "チキンカレーのセイボリークレープ",
        zh: "咖喱鸡咸味可丽饼",
        ru: "Соленый креп с курицей карри",
        ko: "치킨 카레 세이보리 크레프",
        es: "Crepe salada de pollo al curry",
        it: "Crêpe salata al curry di pollo",
        nl: "Hartige kip-kerriecrêpe",
        pt: "Crepe salgado de frango ao curry"
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
      ingredients: ["farine", "oeufs", "lait", "huile_de_coco", "sel", "poulet",'fromage', "pate_de_curry", "lait_de_coco", "oignon", "ail", "salade_composee"],
      supplements: [],
      sizes: [
        {
          id: "kids",
          reference: "CS1E",
          price: 39,
          quantity: { amount: 20, infinite: false }
        },
        {
          id: "regular",
          reference: "CS1",
          price: 79,
          quantity: { amount: 25, infinite: false }
        },
        {
          id: "xl",
          reference: "CS1XL",
          price: 119,
          quantity: { amount: 15, infinite: false }
        }
      ]
    },
    {
      id: "crepesaleeporchache",
      reference: "CS2",
      price: 79,
      name: {
        fr: "Crêpe salée porc haché",
        th: "เครปคาวหมูสับ",
        en: "Minced pork savory crêpe",
        de: "Herzhafte Crêpe mit gehacktem Schwein",
        ja: "豚ひき肉のセイボリークレープ",
        zh: "碎猪肉咸味可丽饼",
        ru: "Соленый креп с рубленой свининой",
        ko: "다진 돼지고기 세이보리 크레프",
        es: "Crepe salada de cerdo picado",
        it: "Crêpe salata al maiale tritato",
        nl: "Hartige crêpe met gehakt varkensvlees",
        pt: "Crepe salgado de porco moído"
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
      ingredients: ["farine", "oeufs", "lait", "huile_de_coco", "sel", "porc_hache",'fromage', "oignon", "ail", "salade_composee"],
      supplements: [],
      sizes: [
        {
          id: "kids",
          reference: "CS2E",
          price: 39,
          quantity: { amount: 20, infinite: false }
        },
        {
          id: "regular",
          reference: "CS2",
          price: 79,
          quantity: { amount: 25, infinite: false }
        },
        {
          id: "xl",
          reference: "CS2XL",
          price: 119,
          quantity: { amount: 15, infinite: false }
        }
      ]
    },
    {
      id: "crepesaleesalade",
      reference: "CS3",
      price: 79,
      name: {
        fr: "Crêpe salée salade",
        th: "เครปคาวสลัด",
        en: "Salad savory crêpe",
        de: "Herzhafte Salat-Crêpe",
        ja: "サラダのセイボリークレープ",
        zh: "沙拉咸味可丽饼",
        ru: "Соленый креп с салатом",
        ko: "샐러드 세이보리 크레프",
        es: "Crepe salada de ensalada",
        it: "Crêpe salata all'insalata",
        nl: "Hartige saladecrêpe",
        pt: "Crepe salgado de salada"
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
      ingredients: ["farine", "oeufs", "lait", "huile_de_coco", "sel", "salade", "tomates", "fromage", "vinaigrette"],
      supplements: [],
      sizes: [
        {
          id: "kids",
          reference: "CS3E",
          price: 39,
          quantity: { amount: 20, infinite: false }
        },
        {
          id: "regular",
          reference: "CS3",
          price: 79,
          quantity: { amount: 30, infinite: false }
        },
        {
          id: "xl",
          reference: "CS3XL",
          price: 119,
          quantity: { amount: 15, infinite: false }
        }
      ]
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
        "huile_de_coco",
        { fr: "Pâte Chokaju", en: "Chokaju spread", th: "สเปรดโชคาจู" },
        { fr: "Noisettes torréfiées", en: "Roasted hazelnuts", th: "ฮาเซลนัตส์อบ" }
      ],
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
        "huile_de_coco",
        { fr: "Caramel maison", en: "House caramel", th: "คาราเมลโฮมเมด" },
        { fr: "Noix de coco râpée", en: "Toasted coconut", th: "มะพร้าวคั่ว" }
      ],
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
      ingredients: ["farine", "oeufs", "lait", "sucre", "huile_de_coco", "confiture_fraise"],
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
      ingredients: ["farine", "oeufs", "lait", "sucre", "huile_de_coco", "confiture_mure"],
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
      ingredients: ["farine", "oeufs", "lait", "sucre", "huile_de_coco", "confiture_mulberry"],
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
      ingredients: ["farine", "oeufs", "lait", "sucre", "huile_de_coco", "confiture_gingembre"],
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
      ingredients: ["farine", "oeufs", "lait", "sucre", "huile_de_coco", "confiture_papaye_passion"],
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
      ingredients: ["farine", "oeufs", "lait", "sucre", "huile_de_coco", "confiture_ananas"],
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
      ingredients: ["farine", "oeufs", "lait", "sucre", "huile_de_coco", "confiture_ananas_passion"],
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
      ingredients: ["farine", "oeufs", "lait", "sucre", "huile_de_coco", "confiture_mangue"],
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
      ingredients: ["farine", "oeufs", "lait", "sucre", "huile_de_coco", "confiture_mangue_verte_citron_vert"],
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
      ingredients: ["farine", "oeufs", "lait", "sucre", "huile_de_coco", "confiture_passion"],
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
      ingredients: ["farine", "oeufs", "lait", "sucre", "huile_de_coco", "confiture_coco"],
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
