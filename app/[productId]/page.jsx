"use client";

import PagesNav from "@/components/common/PagesNav";
import Gallery from "@/components/layout/product-details/Gallery";
import ProductDetails from "@/components/layout/product-details/ProductDetails";
import Image from "next/image";
import { useParams } from "next/navigation";

const items = [
  {
    id: 1,
    name: "Дощовик Ariel",
    urlName: "raincoat-ariel",
    category: "cloth",
    categoryShow: "Одяг",
    type: "Дощовики та вітровки",
    description:
      "Зручно та стильно! Дощовик ARIEL створено спеціально для хвостатих модниць, які воліють почуватися у будь-яку погоду комфортно та мати неперевершений вигляд. Дощовик ARIEL– це вдале поєднання практичності та сучасного дизайну. Комбінація водонепроникного матеріалу трендових кольорів та якісної фурнітури гарантує бездоганний вигляд та суху спинку навіть у зливу. Підкладка зберігає тепло, а резинка на поясі гарантує ідеальне прилягання до тіла.",
    images: [
      "/catalog-item/raincoat-ariel/01.jpg",
      "/catalog-item/raincoat-ariel/02.jpg",
      "/catalog-item/raincoat-ariel/03.jpg",
    ],
    sizes: ["XS", "XS2", "S", "M", "L"],
    startingPrice: 829,
    prices: [{ XS: 829 }, { XS2: 879 }, { S: 929 }, { M: 979 }, { L: 1029 }],
    info: [
      { brand: "Pet Fashion" },
      { material: "100% поліестер" },
      { season: "Весна/Осінь" },
      { color: ["bg-pink-400", "bg-gray-400"] },
    ],
    сharacteristics: [
      "модель із закритим животом;",
      "блискуча плащова тканина надійно захищає від вологи;",
      "ніжні кольори;",
      "зручна та практична застібка на кнопках.",
    ],
    material: ["плащова тканина, підкладкова тканина."],
    careInstructions: ["ручне прання при температурі не вище 40 градусів."],
  },
  {
    id: 2,
    name: "Футболка Maria",
    urlName: "tshirt-maria",
    category: "cloth",
    categoryShow: "Одяг",
    type: "Футболки",
    description:
      "Українські улюбленці – найгарніші в світі. А якщо ваша чотирилапа красуні вдягне яскраву футболку з термоаплікацією-вишивкою, від неї просто неможливо буде відвести очей! Футболка зручна та м’якенька, рукави-ліхтарики з резинкою є окрасою моделі, а термоаплікація з квітковим орнаментом перетворює її на святкове вбрання.",
    images: [
      "/catalog-item/futbolka-maria/01.jpg",
      "/catalog-item/futbolka-maria/02.jpg",
      "/catalog-item/futbolka-maria/03.jpg",
    ],
    sizes: ["XS", "XS2", "S2", "M", "L"],
    startingPrice: 396,
    prices: [{ XS: 396 }, { XS2: 446 }, { S2: 496 }, { M: 546 }, { L: 596 }],
    info: [
      { brand: "Pet Fashion" },
      { material: "80% котон, 20% поліестер" },
      { season: "Літо" },
      { color: ["bg-yellow-400"] },
    ],
    сharacteristics: [
      "крій для чотирилапих красунь – із закритим животом;",
      "м’який та еластичний бавовняний трикотаж;",
      "вишуканий візерунок на спинці;",
      "зручність вдягання.",
    ],
    material: ["бавовняний трикотаж."],
    careInstructions: ["ручне прання при температурі не вище 40 градусів."],
  },
  {
    id: 3,
    name: "Ліжко Ascold",
    urlName: "bed-ascold",
    category: "beds",
    categoryShow: "Ліжаки",
    description:
      "Лежак розроблено спеціально для собак середніх і великих порід. Завдяки застібкам блискавкам подушки з дна та бортиків можна виймати, а чохол чистити або мити.",
    images: [
      "/catalog-item/bed-ascold/01.png",
      "/catalog-item/bed-ascold/02.png",
      "/catalog-item/bed-ascold/03.png",
      "/catalog-item/bed-ascold/04.png",
    ],
    sizes: ["52x40x17 см", "62x50x19 см"],
    startingPrice: 1088,
    prices: [{ small: 1088 }, { largre: 1457 }],
    info: [
      { brand: "Harley & Cho" },
      { material: "100% поліестер" },
      { color: ["bg-[#b29f8e]"] },
    ],
    сharacteristics: [
      "вишуканий дизайн і модний колір;",
      "якісні матеріали: щільна меблева тканина, холлофайбер;",
      "прикраса - декоративна нашивка з логотипом.",
    ],
    pillow: ["знімна"],
    filler: ["гіпоалергенний холофайбер."],
    careInstructions: ["ручне прання при температурі не вище 40 градусів."],
  },
  {
    id: 4,
    name: "Кепка Mood",
    urlName: "cap-mood",
    category: "accessories",
    categoryShow: "Аксесуари",
    description:
      "Поєднання темно-синьої джинсової тканини та яскраво-лимонного трикотажу, фіксатор у вигляді ромашки, стильна термоаплікація.",
    images: ["/catalog-item/kepka-mood/01.jpg"],
    sizes: ["XS", "S", "M"],
    startingPrice: 173,
    prices: [{ XS: 173 }, { S: 176 }, { M: 179 }],
    info: [
      { brand: "Trixie" },
      { material: "Матеріал: 95% котон, 5% еластан." },
      { season: "Літо" },
      { color: ["bg-[#1a2840]", "bg-[#bcdb42]"] },
    ],
    material: ["95% котон, 5% еластан."],
  },
  {
    id: 5,
    name: "Сумка-переноска Remy",
    urlName: "carrying-bag-remy",
    category: "carrying-bag",
    categoryShow: "Сумки-переноски",
    description:
      "Створено з турботою про комфорт господаря і улюбленця!Переваги моделі: оптимальна форма, зйомний «дах», віконечко з сіткою, довгі м’які ручки, кишеня для дрібниць.",
    images: ["/catalog-item/carrying-remy/01.jpg"],
    sizes: ["40x28x21 см"],
    startingPrice: 2031,
    prices: [{ small: 2031 }],
    info: [
      { brand: "Collar" },
      { material: "100% поліестер" },
      { color: ["bg-black", "bg-[#cbd893]"] },
    ],
  },
  {
    id: 6,
    name: "Худі Sofia",
    urlName: "hoodie-sofia",
    category: "cloth",
    categoryShow: "Одяг",
    type: "Худі та толстовки",
    description:
      "Модель, продумана до дрібниць! Толстовка з теплого м’якого трикотажу має нейтральний колір та класичний крій, але яскраві резинки та лаконічна металева прикраса додають їй індивідуальності. Завдяки унікальними лекалам толстовка добре сідає по фігурі, але не стримує рухи. Це найзручніше вбрання для активних та грайливих хвостиків.",
    images: [
      "/catalog-item/hoodie-sofia/01.jpg",
      "/catalog-item/hoodie-sofia/02.jpg",
      "/catalog-item/hoodie-sofia/03.jpg",
    ],
    sizes: ["XS", "XS2", "S", "M"],
    startingPrice: 505,
    prices: [{ XS: 505 }, { XS2: 555 }, { S: 605 }, { M: 655 }],
    info: [
      { brand: "Pet Fashion" },
      { material: "100% поліестер" },
      { season: "Весна/Осінь" },
      { color: ["bg-[#3b3b3f]", "bg-[#e1397b]"] },
    ],
    сharacteristics: [
      "теплий приємний на дотик трикотаж;",
      "оригінальне сполучення кольорів;",
      "універсальний крій;",
      "зручна застібка - блискавка.",
    ],
    material: ["трикотаж тринитка."],
    careInstructions: ["ручне прання при температурі не вище 40 градусів."],
  },
  {
    id: 7,
    name: "Ліжко Prime",
    urlName: "bed-prime",
    category: "beds",
    categoryShow: "Ліжаки",
    description:
      "Стиль та суперкомфорт для найвибагливіших улюбленців. Лежак Prime дуже зручний завдяки м’яким бортикам з наповнювачем-холофайбером, а дно – ніби пухнаста хмаринка.",
    images: [
      "/catalog-item/bed-prime/03.jpg",
      "/catalog-item/bed-prime/01.jpg",
      "/catalog-item/bed-prime/02.jpg",
      "/catalog-item/bed-prime/04.jpg",
    ],
    sizes: ["60x50x18 см", "78x60x20 см"],
    startingPrice: 1527,
    prices: [{ small: 1527 }, { large: 2065 }],
    info: [
      { brand: "Harley & Cho" },
      { material: "100% поліестер" },
      { color: ["bg-[#e6ded9]"] },
    ],
    сharacteristics: [
      "стильний сучасний дизайн;",
      "гіпоалергенний наповнювач;",
      "простота догляду завдяки знімному чохлу.",
    ],
  },
  {
    id: 8,
    name: "Ліжко Denver",
    urlName: "bed-denver",
    category: "beds",
    categoryShow: "Ліжаки",
    description:
      "М'яка тканина, плавні лінії, округлі бортики - все це робить лежак DENVER чудовим місцем відпочинку для улюбленця і прикрасою будинку.",
    images: [
      "/catalog-item/bed-denver/01.jpg",
      "/catalog-item/bed-denver/02.jpg",
      "/catalog-item/bed-denver/03.jpg",
      "/catalog-item/bed-denver/04.jpg",
    ],
    sizes: ["80x60x13 см", "102x76x14 см"],
    startingPrice: 1435,
    prices: [{ small: 1435 }, { large: 2346 }],
    info: [
      { brand: "Harley & Cho" },
      { material: "100% поліестер" },
      { color: ["bg-[#ca6630]", "bg-[#55545b]"] },
    ],
    сharacteristics: [
      "міцність та довговічність;",
      "ручність чищення і прання;",
      "гіпоалергнний наповнювач.",
    ],
    careInstructions: ["ручне прання при температурі не вище 40 градусів."],
  },
  {
    id: 9,
    name: "Комірець Bright",
    urlName: "collar-mood",
    category: "accessories",
    categoryShow: "Аксесуари",
    description:
      "Комірець з темно-синьої джинсової тканини та яскраво-лимонної бавовни надійно фіксується липучкою, яка міцно тримається. Стильний аксесуар для чотирилапих модників. Комірець з темно-синьої джинсової тканини та яскраво-лимонної бавовни надійно фіксується липучкою, яка міцно тримається. Прикрашає комірець ґудзик-ромашка. Досить лише цього маленького аксесуару, щоб створити досконалий літній образ.",
    images: [
      "/catalog-item/collar-bright/01.png",
      "/catalog-item/collar-bright/02.png",
    ],
    sizes: ["XS-X2", "S-M"],
    startingPrice: 272,
    prices: [{ XSXS2: 272 }, { SM: 282 }],
    info: [
      { brand: "Trixie" },
      { material: "Матеріал: 95% котон, 5% еластан." },
      { season: "Літо" },
      { color: ["bg-[#1a2840]", "bg-[#a7d514]"] },
    ],
    material: ["95% котон, 5% еластан."],
  },
  {
    id: 10,
    name: "Толстовка Soft",
    urlName: "tolstovka-soft",
    category: "cloth",
    categoryShow: "Одяг",
    type: "Худі та толстовки",
    description:
      "Він створений спеціально для улюбленців, яким не сидиться вдома. Комбінезон зручний, не сковує рухи, відмінно прилягає до тіла і дуже теплий.",
    images: [
      "/catalog-item/tolstovka-soft/01.jpg",
      "/catalog-item/tolstovka-soft/02.jpg",
      "/catalog-item/tolstovka-soft/03.jpg",
    ],
    sizes: ["XXS", "XS", "S"],
    startingPrice: 383,
    prices: [{ XXS: 383 }, { XS: 462 }, { S: 489 }],
    info: [
      { brand: "Pet Fashion" },
      { material: "80% котон, 20% поліестер" },
      { season: "Зима" },
      { color: ["bg-[#a7a1a0]", "bg-[#fdfbf7]"] },
    ],
    сharacteristics: [
      "оригінальне сполучення фактур та кольорів;",
      "універсальний крій;",
      "зручність вдягання;",
      "простий догляд.",
    ],
    material: ["95% котон, 5% еластан."],
    careInstructions: ["ручне прання при температурі не вище 40 градусів."],
  },
  {
    id: 11,
    name: "Толстовка Delicate",
    urlName: "sweatshirt-delicate",
    category: "cloth",
    categoryShow: "Одяг",
    type: "Худі та толстовки",
    description:
      "Це базова річ у гардеробі кожного чотирилапого друга, яка буде незамінна в будь-який сезон. Худі можна вдягати в прохолодну погоду навесні, влітку і восени.",
    images: [
      "/catalog-item/sweatshirt-delicate/01.png",
      "/catalog-item/sweatshirt-delicate/02.png",
      "/catalog-item/sweatshirt-delicate/03.png",
    ],
    sizes: ["S", "SM", "M", "M2"],
    startingPrice: 613,
    prices: [{ S: 613 }, { SM: 663 }, { M: 713 }, { M2: 763 }],
    info: [
      { brand: "Pet Fashion" },
      { material: "Трикотаж" },
      { season: "Весна/Осінь" },
      { color: ["bg-[#d41c2e]"] },
    ],
    сharacteristics: [
      "стильна базова річ;",
      "світловідбиваючі елементи для безпечних прогулянок у сутінках;",
      "комір-снуд з резинкою та фіксатором.",
    ],
    material: ["бавовняний трикотаж."],
    careInstructions: ["ручне прання при температурі не вище 40 градусів."],
  },
  {
    id: 12,
    name: "Худі Snoodie",
    urlName: "hoodie-Snoodie",
    category: "cloth",
    categoryShow: "Одяг",
    type: "Худі та толстовки",
    description:
      "Це базова річ у гардеробі кожного чотирилапого друга, яка буде незамінна в будь-який сезон. Худі можна вдягати в прохолодну погоду навесні, влітку і восени.",
    images: [
      "/catalog-item/hoodie-snoodie/01.png",
      "/catalog-item/hoodie-snoodie/02.png",
      "/catalog-item/hoodie-snoodie/03.png",
      "/catalog-item/hoodie-snoodie/04.png",
    ],
    sizes: ["S", "SM", "M", "M2"],
    startingPrice: 613,
    prices: [{ S: 613 }, { SM: 663 }, { M: 713 }, { M2: 763 }],
    info: [
      { brand: "Pet Fashion" },
      { material: "Трикотаж" },
      { season: "Весна/Осінь" },
      { color: ["bg-[#312d2d]"] },
    ],
    сharacteristics: [
      "стильна базова річ;",
      "світловідбиваючі елементи для безпечних прогулянок у сутінках;",
      "комір-снуд з резинкою та фіксатором.",
    ],
    material: ["бавовняний трикотаж трьохнитка."],
    careInstructions: ["ручне прання при температурі не вище 40 градусів."],
  },
  {
    id: 13,
    name: "Ліжко Lux",
    urlName: "bed-lux",
    category: "beds",
    categoryShow: "Ліжаки",
    description:
      "Лежак розроблено спеціально для собак середніх і великих порід. Завдяки застібкам блискавкам подушки з дна та бортиків можна виймати, а чохол чистити або мити.",
    images: [
      "/catalog-item/bed-lux/03.jpg",
      "/catalog-item/bed-lux/01.jpg",
      "/catalog-item/bed-lux/02.jpg",
      "/catalog-item/bed-lux/04.jpg",
    ],
    sizes: ["66x52x24 см"],
    startingPrice: 2368,
    prices: [{ small: 2368 }],
    info: [
      { brand: "Harley & Cho" },
      { material: "100% поліестер" },
      { color: ["bg-[#37496c]"] },
    ],
    сharacteristics: [
      "стильний сучасний дизайн;",
      "гіпоалергенний наповнювач;",
      "на подушці є застібка-блискавка, за допомогою якої наповнювач можна виймати;",
      "простота догляду завдяки знімному чохлу.",
    ],
    pillow: ["знімна"],
    filler: ["гіпоалергенний холофайбер."],
    careInstructions: [
      "рекомендується ручне чищення лежака за допомогою губки з миючим засобом або без нього.",
    ],
  },
  {
    id: 14,
    name: "Ліжко Simon",
    urlName: "bed-simon",
    category: "beds",
    categoryShow: "Ліжаки",
    description:
      "Лежак з бортиками на кнопках, за допомогою яких можна легко трансформувати лежак в матрац або диван.",
    images: [
      "/catalog-item/bed-simon/01.jpg",
      "/catalog-item/bed-simon/02.jpg",
      "/catalog-item/bed-simon/03.jpg",
      "/catalog-item/bed-simon/04.jpg",
    ],
    sizes: ["52х42х18 см", "66х54х20 см"],
    startingPrice: 1250,
    prices: [{ small: 1250 }, { large: 1882 }],
    info: [
      { brand: "Harley & Cho" },
      { material: "100% поліестер" },
      { color: ["bg-[#2f2f2f]", "bg-[#ccc6c4]"] },
    ],
    сharacteristics: [
      "y згорнутому вигляді 52х42х18 см (внутрішне місце 32х23 см). У розгорнутому вигляді 77х66х10 см;",
      "y згорнутому вигляді 54х66х20 см (внутрішне місце 45х30 см). У розгорнутому вигляді 90х72х13 см;",
      "спальне місце-трансформер: лежак, матрас, диван;",
      "зручність чищення і прання.",
    ],
    careInstructions: [
      "рекомендується ручне чищення лежака за допомогою губки з миючим засобом або без нього.",
    ],
  },
  {
    id: 15,
    name: "Комбінезон Puzzle",
    urlName: "kombinezon-puzzle",
    category: "cloth",
    categoryShow: "Комбінезони",
    type: "Комбінезони",
    description:
      "Він створений спеціально для улюбленців, яким не сидиться вдома. Комбінезон зручний, не сковує рухи, відмінно прилягає до тіла і дуже теплий.",
    images: [
      "/catalog-item/kombinezon-puzzle/01.jpg",
      "/catalog-item/kombinezon-puzzle/02.jpg",
      "/catalog-item/kombinezon-puzzle/03.jpg",
    ],
    sizes: ["S2"],
    startingPrice: 939,
    prices: [{ S2: 939 }],
    info: [
      { brand: "Pet Fashion" },
      { material: "100% поліестер" },
      { season: "Зима" },
      {
        color: ["bg-[#dadf25]", "bg-white", "bg-[#52b0db]", "bg-[#ea6481]"],
      },
    ],
    сharacteristics: [
      "яскрава тканина, завдяки якій улюбленця видно здалеку;",
      "універсальний крій;",
      "зручна застібка на грудях – кнопки;",
      "резинки на поясі забезпечують щільне прилягання комбінезону до тіла.",
    ],
    material: ["плащова тканина"],
    careInstructions: ["ручне прання при температурі не вище 40 градусів."],
  },
  {
    id: 16,
    name: "Сумка-переноска Silva",
    urlName: "carrying-bag-silva",
    category: "carrying-bag",
    categoryShow: "Сумки-переноски",
    description:
      "Сумка-переноска SILVA - це гарантований комфорт для вашого улюбленця під час будь-якої подорожі! Зручна форма, віконечко для огляду і вентиляції – все для зручності вашого чотириногого друга.",
    images: ["/catalog-item/carrying-silva/01.jpg"],
    sizes: ["34x24x20 см"],
    startingPrice: 1509,
    prices: [{ small: 1509 }],
    info: [
      { brand: "Collar" },
      { material: "100% поліестер" },
      { color: ["bg-[#4b535e]"] },
    ],
    сharacteristics: [
      "зовні сумка оформлена плащовою тканиною, тому легко миється і швидко сохне;",
      "середині стінки обшиті приємною на дотик гладенькою тканиною, яка добре очищується від шерсті;",
      "зручні м'які ручки дозволяють носити сумку в руці і через плече, а надійна застібка не дасть вашому улюбленцю раптово вистрибнути.",
    ],
  },
  {
    id: 17,
    name: "Сумка-переноска Vesta",
    urlName: "carrying-bag-vesta",
    category: "carrying-bag",
    categoryShow: "Сумки-переноски",
    description:
      "Сумка-переноска має віконця, в які улюбленець може дивитися під час подорожі. М’яке дно і стіни роблять мандрівку комфортною. Господар може нести сумку в руці або на плечі — є зручні ручки і довгий ремінь з м’якою накладкою.",
    images: [
      "/catalog-item/carrying-vesta/01.jpg",
      "/catalog-item/carrying-vesta/02.jpg",
      "/catalog-item/carrying-vesta/03.jpg",
      "/catalog-item/carrying-vesta/04.jpg",
    ],
    sizes: ["38x22x22 см"],
    startingPrice: 1299,
    prices: [{ small: 1299 }],
    info: [
      { brand: "Collar" },
      { material: "100% поліестер" },
      { color: ["bg-[#0e273f]"] },
    ],
  },
  {
    id: 18,
    name: "Плед Bliss",
    urlName: "pled-bliss",
    category: "accessories",
    categoryShow: "Аксесуари",
    description:
      "Неймовірно м'який і пухнастий плед для вашого улюбленця. Чотирилапінеодмінно оцінять необхідність цього аксесуара. Ніжні кольори, теплий плюш, акуратна обробка і вишивка-логотип - плед стане частиною декору у вашому інтер'єрі, вбереже меблі від шерсті і зробить життя вашого улюбленця ще більш комфортним.",
    images: [
      "/catalog-item/pled-bliss/01.jpg",
      "/catalog-item/pled-bliss/02.jpg",
      "/catalog-item/pled-bliss/02.jpg",
      "/catalog-item/pled-bliss/02.jpg",
    ],
    sizes: ["77х60 см", "77х100 см"],
    startingPrice: 571,
    prices: [{ small: 571 }, { large: 680 }],
    info: [
      { brand: "Trixie" },
      { material: "100% поліестер." },
      { color: ["bg-[#e8cfc9]", "bg-[#92b4b6]"] },
    ],
    сharacteristics: [
      "захистить меблі від шерсті та забруднень;",
      "допоможе улюбленцям зігрітися в холодну погоду;",
      "незамінна річ в машину або сумку-переноску;",
      "аксесуар, який перетворить будь-яке місце в затишне гніздечко.",
    ],
  },
];

const ProductDetailsPage = () => {
  const path = useParams();

  const itemName = items.find((item) => {
    if (path.productId === item.urlName) {
      return item;
    }
  });

  const {
    id,
    images,
    name,
    info,
    sizes,
    prices,
    startingPrice,
    category,
    сharacteristics,
    material,
    careInstructions,
  } = itemName;

  return (
    <section>
      <div className="container mx-auto">
        <div className="">
          <PagesNav items={items} itemName={name} />
        </div>

        <div className="flex gap-10 py-8 sm:flex-col lg:flex-row">
          {/* images */}
          <Gallery productMedia={images} />

          {/* text */}
          <ProductDetails
            itemName={itemName}
            productInfo={info}
            productSize={sizes}
            productPrices={prices}
            productCategory={category}
            startingPrice={startingPrice}
            images={images}
            id={id}
          />
        </div>

        {/* care & advantageds & material block */}
        <div>
          <Image
            src="/catalogue-detail-item/paws.png"
            className="paws-decor"
            width={550}
            height={100}
            alt="Декор у вигляді лапок"
            objectFit={"cover"}
          />

          <div className="below-block">
            <p className="text-[23px] text-primary dark:text-white/80 font-semibold max-[360px]:text-[17px]">
              ОПИС
            </p>
            <div className="characteristics">
              <h3 className="text-black max-[360px]:text-[14px] dark:text-white dark:underline">
                <strong>Переваги:</strong>
              </h3>

              <ul>
                {сharacteristics?.length > 0 &&
                  сharacteristics?.map((adv, index) => (
                    <li
                      key={index}
                      className="text-primary max-[360px]:text-[14px] dark:text-white/60"
                    >
                      {adv}
                    </li>
                  ))}
              </ul>

              <h3 className="text-black max-[360px]:text-[14px] dark:text-white dark:underline">
                <strong>Матерал:</strong>
              </h3>

              <ul>
                {material?.length > 0 &&
                  material?.map((rec, index) => (
                    <li
                      key={index}
                      className="text-primary max-[360px]:text-[14px] dark:text-white/60"
                    >
                      {rec}
                    </li>
                  ))}
              </ul>

              <h3 className="text-black max-[360px]:text-[14px] dark:text-white dark:underline">
                <strong>Рекомендації щодо користування:</strong>
              </h3>

              <ul>
                {careInstructions?.length > 0 &&
                  careInstructions?.map((rec, index) => (
                    <li
                      key={index}
                      className="text-primary max-[360px]:text-[14px] dark:text-white/60"
                    >
                      {rec}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        {/* sizes table set open */}
        {category === "cloth" && (
          <div
            id="sizes"
            className="sizes-table pt-2 dark:bg-slate-700 dark:text-white/90 mb-[100px]"
          >
            <h2 className="uppercase text-xl">Розмірна сітка</h2>
            <div>
              <div className="flex gap-20 justify-center py-5">
                <div className="flex flex-col items-center gap-2 max-w-[400px]">
                  <h3>Довжина тіла "A"</h3>
                  <Image
                    src="/catalogue-detail-item/back-length.jpeg"
                    alt="Заміри спини"
                    width={200}
                    height={200}
                    objectFit={"cover"}
                  />
                  <img />
                  <p>&Xi;</p>
                  <p className="text-center">
                    Переконайтесь, що ваш собака стоїть прямо. Виміряйте довжину
                    тіла від шиї до хвоста. Якщо довжина тіла між розмірами, то
                    краще вибрати більшу.
                  </p>
                </div>

                <div className="flex flex-col items-center gap-2 max-w-[400px]">
                  <h3>Об'єм грудей "B"</h3>
                  <Image
                    src="/catalogue-detail-item/chest-meisure.jpeg"
                    alt="Заміри грудної клітки"
                    width={200}
                    height={200}
                    objectFit={"cover"}
                  />

                  <p>&Xi;</p>
                  <p className="text-center">
                    Відміряйте найширшу частину грудей вашого вихованця.
                    Зверніть увагу, що модель одягу може бути тонкою або вільною
                    відповідно до дизайну, тканини або за власним смаком.
                  </p>
                </div>
              </div>
              <table>
                <tbody>
                  <tr className="bg-tableTitle">
                    <th className="font-bold text-sm">Розмір</th>
                    <th className="font-bold text-sm">
                      "A" довжина спини (см)
                    </th>
                    <th className="font-bold text-sm">“В” об’єм грудей (см)</th>
                    <th className="font-bold text-sm">Вага (кг)</th>
                    <th className="font-bold text-sm">Рекомендовані породи</th>
                  </tr>
                  <tr>
                    <td>XXS</td>
                    <td>20-22</td>
                    <td>25-29</td>
                    <td>до 1.5</td>
                    <td>Цуценята дрібних порід</td>
                  </tr>
                  <tr className="bg-tableTitle">
                    <td>XS</td>
                    <td>23-25</td>
                    <td>28-32</td>
                    <td>1.5-2.5</td>
                    <td>
                      Мініатюрний йоркширський тер'єр, чихуахуа, мініатюрний
                      пінчер, той-тер'єр
                    </td>
                  </tr>
                  <tr>
                    <td>XS такса</td>
                    <td>33-35</td>
                    <td>42-52</td>
                    <td>6.0-8.0</td>
                    <td>Такса</td>
                  </tr>
                  <tr className="bg-tableTitle">
                    <td>XS2</td>
                    <td>26-28</td>
                    <td>32-39</td>
                    <td>2.0-3.0</td>
                    <td>
                      Йоркширський тер'єр, чихуахуа, мініатюрний пінчер,
                      той-тер'єр, померанський шпіц, мальтезе, мальтіпу
                    </td>
                  </tr>
                  <tr>
                    <td>S</td>
                    <td>27-29</td>
                    <td>37-44</td>
                    <td>2.5-3.5</td>
                    <td>
                      Йоркширський тер'єр, чихуахуа, мініатюрний пінчер,
                      той-тер'єр, померанський шпіц, мальтезе, мальтіпу
                    </td>
                  </tr>
                  <tr className="bg-tableTitle">
                    <td>S такса</td>
                    <td>38-40</td>
                    <td>44-54</td>
                    <td>8.0-10.0</td>
                    <td>Такса</td>
                  </tr>
                  <tr>
                    <td>S2</td>
                    <td>28-30</td>
                    <td>50-57</td>
                    <td>7.0-9.0</td>
                    <td>Мопс, французький бульдог</td>
                  </tr>
                  <tr className="bg-tableTitle">
                    <td>S2 такса</td>
                    <td>38-40</td>
                    <td>50-62</td>
                    <td>12.0-15.0</td>
                    <td>Такса, пекінес, невеликі коргі</td>
                  </tr>
                  <tr>
                    <td>SM</td>
                    <td>28-30</td>
                    <td>44-52</td>
                    <td>4.0-6.0</td>
                    <td>Пінчер, бішон фризе, джек-рассел-тер'єр</td>
                  </tr>
                  <tr className="bg-tableTitle">
                    <td>M</td>
                    <td>34-36</td>
                    <td>40-48</td>
                    <td>3.0-6.0</td>
                    <td>
                      Мальтезе, ши-тцу, той- пудель, карликовий пудель (собаки
                      середніх порід), бішон фризе, кавалер-кінг-чарльз-спанієль
                    </td>
                  </tr>
                  <tr>
                    <td>M такса</td>
                    <td>43-45</td>
                    <td>50-62</td>
                    <td>10.0-13.0</td>
                    <td>Такса</td>
                  </tr>
                  <tr className="bg-tableTitle">
                    <td>M2</td>
                    <td>32-34</td>
                    <td>55-65</td>
                    <td>10.0-14.0</td>
                    <td>Мопс, французький бульдог</td>
                  </tr>
                  <tr>
                    <td>ML</td>
                    <td>33-35</td>
                    <td>44-55</td>
                    <td>4.0-7.0</td>
                    <td>Джек-рассел-тер'єр</td>
                  </tr>
                  <tr className="bg-tableTitle">
                    <td>L</td>
                    <td>38-40</td>
                    <td>47-56</td>
                    <td>6.0-13.0</td>
                    <td>
                      Китайська чубата, ши-тцу, той- пудель, пудель, шнауцер,
                      японський хін, кокер-спанієль
                    </td>
                  </tr>
                  <tr>
                    <td>XL</td>
                    <td>41-43</td>
                    <td>55-65</td>
                    <td>10.0-15.0</td>
                    <td>
                      Шнауцер, кокер-спаніель, фокстер'єр, скотчтер'єр,
                      цвергшнауцер, англійський спанієль, міні бультер'єр
                    </td>
                  </tr>
                  <tr className="bg-tableTitle">
                    <td>2XL</td>
                    <td>44-46</td>
                    <td>60-72</td>
                    <td>20.0-25.0</td>
                    <td>Самоїд, бультер'єр</td>
                  </tr>
                  <tr>
                    <td>3XL</td>
                    <td>47-49</td>
                    <td>68-80</td>
                    <td>25.0-30.0</td>
                    <td>Самоїд великий, стаффорд, бультер'єр</td>
                  </tr>
                  <tr className="bg-tableTitle">
                    <td>4XL</td>
                    <td>49-51</td>
                    <td>72-85</td>
                    <td>30.0-35.0</td>
                    <td>Стаффорд, хаскі</td>
                  </tr>
                  <tr>
                    <td>5XL</td>
                    <td>55-57</td>
                    <td>78-91</td>
                    <td>35.0-45.0</td>
                    <td>Ретрівер, лабрадор, боксер</td>
                  </tr>
                  <tr className="bg-tableTitle">
                    <td>6XL</td>
                    <td>61-63</td>
                    <td>82-95</td>
                    <td>45.0-50.0</td>
                    <td>Вівчарка, ротвейлер, доберман</td>
                  </tr>
                  <tr>
                    <td>7XL</td>
                    <td>70-72</td>
                    <td>86-99</td>
                    <td>60.0-66.0</td>
                    <td>Кане-корсо</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetailsPage;
