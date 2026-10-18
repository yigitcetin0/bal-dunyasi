/**
 * Bal Dünyası - Veri Yapısı
 * Design: Organik Modernizm — Kehribar/Amber renk paleti, Playfair Display + DM Sans
 *
 * Bu veri yapısı genişletilebilir şekilde tasarlanmıştır.
 * Yeni bal türleri eklemek için sadece honeyTypes dizisine yeni bir obje ekleyin.
 */

export type HoneyColor = "pale-yellow" | "golden" | "amber" | "dark-amber" | "brown" | "dark-brown" | "black";
export type TasteIntensity = "mild" | "medium" | "strong" | "very-strong";
export type Region =
  | "europe"
  | "middle-east"
  | "asia"
  | "north-america"
  | "south-america"
  | "africa"
  | "oceania"
  | "mediterranean";

export interface HoneyType {
  id: string;
  name: string;
  localName?: string;
  origin: {
    country: string;
    region: string;
    continent: Region;
    coordinates: [number, number]; // [lat, lng]
  };
  plant: {
    name: string;
    scientificName?: string;
    type: "flower" | "tree" | "shrub" | "herb" | "mixed";
  };
  appearance: {
    color: HoneyColor;
    colorHex: string;
    consistency: "liquid" | "semi-liquid" | "creamy" | "crystallized";
    crystallizationRate: "slow" | "medium" | "fast";
  };
  taste: {
    profile: string[];
    intensity: TasteIntensity;
    description: string;
  };
  health: {
    benefits: string[];
    antioxidantLevel: "low" | "medium" | "high" | "very-high";
    antibacterialActivity: boolean;
    traditionalUses: string[];
  };
  production: {
    season: string[];
    annualProduction?: string;
    rarity: "common" | "uncommon" | "rare" | "very-rare";
  };
  image?: string;
  description: string;
  featured: boolean;
  tags: string[];
}

export interface MapRegion {
  id: string;
  name: string;
  continent: Region;
  coordinates: [number, number];
  honeyCount: number;
  description: string;
}

// ============================================================
// BAL TÜRLERİ VERİSİ — 30+ Bal Türü
// ============================================================

export const honeyTypes: HoneyType[] = [
  {
    id: "manuka",
    name: "Manuka Balı",
    localName: "Mānuka Honey",
    origin: {
      country: "Yeni Zelanda",
      region: "Kuzey Adası",
      continent: "oceania",
      coordinates: [-38.0, 175.0],
    },
    plant: {
      name: "Manuka Ağacı",
      scientificName: "Leptospermum scoparium",
      type: "shrub",
    },
    appearance: {
      color: "dark-amber",
      colorHex: "#8B4513",
      consistency: "creamy",
      crystallizationRate: "medium",
    },
    taste: {
      profile: ["toprak", "odunsu", "hafif acı", "mineral"],
      intensity: "strong",
      description:
        "Güçlü, karmaşık bir tat profiline sahip olan Manuka balı; toprak, odunsu notalar ve hafif bir acılıkla kendine özgü bir deneyim sunar.",
    },
    health: {
      benefits: [
        "Güçlü antibakteriyel etki (MGO içeriği)",
        "Yara iyileştirme",
        "Sindirim sistemi desteği",
        "Bağışıklık güçlendirici",
        "Boğaz ağrısı rahatlatıcı",
      ],
      antioxidantLevel: "very-high",
      antibacterialActivity: true,
      traditionalUses: ["Maori tıbbında yara tedavisi", "Geleneksel ateş düşürücü"],
    },
    production: {
      season: ["Kasım", "Aralık", "Ocak", "Şubat"],
      annualProduction: "1.700 ton/yıl",
      rarity: "rare",
    },
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    description:
      "Dünyaca ünlü Manuka balı, Yeni Zelanda'ya özgü Manuka çalısının çiçeklerinden üretilir. Olağanüstü antibakteriyel özellikleri ile tıbbi alanda da kullanılan bu bal, UMF (Unique Manuka Factor) ve MGO değerleriyle derecelendirilir.",
    featured: true,
    tags: ["antibakteriyel", "tıbbi", "premium", "yeni-zelanda"],
  },
  {
    id: "acacia",
    name: "Akasya Balı",
    localName: "Acacia Honey",
    origin: {
      country: "Türkiye",
      region: "Anadolu",
      continent: "europe",
      coordinates: [39.0, 35.0],
    },
    plant: {
      name: "Akasya Ağacı",
      scientificName: "Robinia pseudoacacia",
      type: "tree",
    },
    appearance: {
      color: "pale-yellow",
      colorHex: "#F0E68C",
      consistency: "liquid",
      crystallizationRate: "slow",
    },
    taste: {
      profile: ["hafif", "çiçeksi", "nötr", "tatlı"],
      intensity: "mild",
      description: "Akasya balı, açık sarı rengi ve sıvı kıvamıyla kolayca tanınır. Hafif ve nötr tadı sayesinde yemek pişirmede ve çayda yaygın olarak kullanılır.",
    },
    health: {
      benefits: [
        "Sindirim desteği",
        "Enerji kaynağı",
        "Uyku kalitesi iyileştirici",
        "Bağışıklık desteği",
      ],
      antioxidantLevel: "medium",
      antibacterialActivity: true,
      traditionalUses: ["Geleneksel uyku tedavisi", "Sindirim desteği"],
    },
    production: {
      season: ["Mayıs", "Haziran"],
      annualProduction: "5.000+ ton/yıl",
      rarity: "common",
    },
    image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=600&q=80",
    description:
      "Akasya balı, açık sarı rengi ve sıvı kıvamıyla kolayca tanınır. Kristalleşme hızı çok düşük olduğundan uzun süre sıvı kalır. Hafif ve nötr tadı sayesinde yemek pişirmede ve çayda yaygın olarak kullanılır.",
    featured: true,
    tags: ["hafif", "yaygın", "türkiye", "sıvı"],
  },
  {
    id: "sidr",
    name: "Sidr Balı",
    localName: "Sidr Honey / عسل السدر",
    origin: {
      country: "Yemen",
      region: "Hadramaut Vadisi",
      continent: "middle-east",
      coordinates: [15.0, 49.0],
    },
    plant: {
      name: "Sidr Ağacı (Kiraz Kirazı)",
      scientificName: "Ziziphus spina-christi",
      type: "tree",
    },
    appearance: {
      color: "dark-amber",
      colorHex: "#A0522D",
      consistency: "creamy",
      crystallizationRate: "fast",
    },
    taste: {
      profile: ["güçlü", "aromatik", "tatlı", "hafif acı"],
      intensity: "strong",
      description: "Yemen'in dağlık bölgelerinde, özellikle Hadramaut Vadisi'nde üretilen Sidr balı, dünyada en pahalı ve en değerli ballar arasında yer alır.",
    },
    health: {
      benefits: [
        "Güçlü antibakteriyel etki",
        "Sindirim sistemi desteği",
        "Bağışıklık güçlendirici",
        "Yara iyileştirme",
        "Enflamasyon azaltıcı",
      ],
      antioxidantLevel: "very-high",
      antibacterialActivity: true,
      traditionalUses: ["Geleneksel tıp", "Yara tedavisi", "Enerji takviyesi"],
    },
    production: {
      season: ["Nisan", "Mayıs"],
      annualProduction: "200 ton/yıl",
      rarity: "very-rare",
    },
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    description:
      "Yemen'in dağlık bölgelerinde, özellikle Hadramaut Vadisi'nde üretilen Sidr balı, dünyada en pahalı ve en değerli ballar arasında yer alır. Sidr ağacının çiçeklerinden elde edilen bu bal, yüzyıllardır geleneksel tıpta kullanılmaktadır.",
    featured: true,
    tags: ["nadir", "premium", "yemen", "tıbbi"],
  },
  {
    id: "lavender",
    name: "Lavanta Balı",
    localName: "Lavender Honey / Miel de Lavande",
    origin: {
      country: "Fransa",
      region: "Provence",
      continent: "europe",
      coordinates: [43.9, 5.7],
    },
    plant: {
      name: "Lavanta",
      scientificName: "Lavandula angustifolia",
      type: "herb",
    },
    appearance: {
      color: "golden",
      colorHex: "#FFD700",
      consistency: "liquid",
      crystallizationRate: "medium",
    },
    taste: {
      profile: ["çiçeksi", "aromatik", "hafif", "sakinleştirici"],
      intensity: "medium",
      description: "Fransa'nın Provence bölgesinin simgesi haline gelen lavanta balı, mor lavanta tarlalarının büyüleyici aromasını taşır.",
    },
    health: {
      benefits: [
        "Sakinleştirici etki",
        "Uyku kalitesi iyileştirici",
        "Stres azaltıcı",
        "Antiseptik",
        "Antienflamatuvar",
      ],
      antioxidantLevel: "high",
      antibacterialActivity: true,
      traditionalUses: ["Uyku desteği", "Stres yönetimi", "Cilt bakımı"],
    },
    production: {
      season: ["Haziran", "Temmuz", "Ağustos"],
      annualProduction: "800 ton/yıl",
      rarity: "uncommon",
    },
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    description:
      "Fransa'nın Provence bölgesinin simgesi haline gelen lavanta balı, mor lavanta tarlalarının büyüleyici aromasını taşır. Sakinleştirici özellikleri ve narin çiçeksi tadıyla dünya genelinde aranan premium bir bal türüdür.",
    featured: true,
    tags: ["aromatik", "fransa", "premium", "sakinleştirici"],
  },
  {
    id: "buckwheat",
    name: "Karabuğday Balı",
    localName: "Buckwheat Honey",
    origin: {
      country: "Kanada",
      region: "Ontario",
      continent: "north-america",
      coordinates: [51.0, -85.0],
    },
    plant: {
      name: "Karabuğday",
      scientificName: "Fagopyrum esculentum",
      type: "herb",
    },
    appearance: {
      color: "dark-brown",
      colorHex: "#3E2723",
      consistency: "creamy",
      crystallizationRate: "fast",
    },
    taste: {
      profile: ["güçlü", "malt", "mineral", "tatlı"],
      intensity: "very-strong",
      description: "Koyu rengi ve güçlü tadıyla karabuğday balı, antioksidan içeriği açısından en zengin bal türlerinden biridir.",
    },
    health: {
      benefits: [
        "Yüksek antioksidan",
        "Bağışıklık güçlendirici",
        "Öksürük tedavisi",
        "Sindirim desteği",
        "Enflamasyon azaltıcı",
      ],
      antioxidantLevel: "very-high",
      antibacterialActivity: true,
      traditionalUses: ["Öksürük tedavisi", "Bağışıklık desteği"],
    },
    production: {
      season: ["Ağustos", "Eylül"],
      annualProduction: "1.200 ton/yıl",
      rarity: "uncommon",
    },
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    description:
      "Koyu rengi ve güçlü tadıyla karabuğday balı, antioksidan içeriği açısından en zengin bal türlerinden biridir. Özellikle Kuzey Amerika ve Doğu Avrupa'da üretilen bu bal, geleneksel öksürük tedavisinde yaygın kullanılır.",
    featured: false,
    tags: ["koyu", "antioksidan", "güçlü", "kanada"],
  },
  {
    id: "tualang",
    name: "Tualang Balı",
    localName: "Tualang Honey / Madu Tualang",
    origin: {
      country: "Malezya",
      region: "Güneydoğu Asya",
      continent: "asia",
      coordinates: [4.0, 103.0],
    },
    plant: {
      name: "Tualang Ağacı",
      scientificName: "Koompassia excelsa",
      type: "tree",
    },
    appearance: {
      color: "amber",
      colorHex: "#FFBF00",
      consistency: "liquid",
      crystallizationRate: "slow",
    },
    taste: {
      profile: ["hafif", "çiçeksi", "tropikal", "tatlı"],
      intensity: "medium",
      description: "Malezya'nın dev Tualang ağaçlarının tepelerinde inşa edilen kovanlarda üretilen bu bal, tropikal yağmur ormanlarının çeşitli çiçeklerinden elde edilir.",
    },
    health: {
      benefits: [
        "Bağışıklık güçlendirici",
        "Antioksidan zengin",
        "Enerji kaynağı",
        "Sindirim desteği",
        "Enflamasyon azaltıcı",
      ],
      antioxidantLevel: "high",
      antibacterialActivity: true,
      traditionalUses: ["Geleneksel Malay tıbbı", "Enerji takviyesi"],
    },
    production: {
      season: ["Tüm yıl"],
      annualProduction: "500 ton/yıl",
      rarity: "rare",
    },
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    description:
      "Malezya'nın dev Tualang ağaçlarının tepelerinde inşa edilen kovanlarda üretilen bu bal, tropikal yağmur ormanlarının çeşitli çiçeklerinden elde edilir. Bilimsel araştırmalarda özellikle dikkat çeken sağlık özellikleriyle öne çıkar.",
    featured: false,
    tags: ["tropikal", "malezya", "nadir", "asya"],
  },
  {
    id: "thyme",
    name: "Kekik Balı",
    localName: "Thyme Honey / Μέλι Θυμαριού",
    origin: {
      country: "Yunanistan",
      region: "Girit",
      continent: "mediterranean",
      coordinates: [35.3, 25.1],
    },
    plant: {
      name: "Kekik",
      scientificName: "Thymus vulgaris",
      type: "herb",
    },
    appearance: {
      color: "dark-amber",
      colorHex: "#8B6914",
      consistency: "creamy",
      crystallizationRate: "medium",
    },
    taste: {
      profile: ["aromatik", "güçlü", "otsu", "hafif acı"],
      intensity: "strong",
      description: "Yunanistan'ın Girit Adası'nda yabani kekik bitkilerinden üretilen bu bal, antik çağlardan beri değerli kabul edilmektedir.",
    },
    health: {
      benefits: [
        "Güçlü antiseptik",
        "Solunum yolu hastalıklarında destek",
        "Antimikrobiyal etki",
        "Bağışıklık güçlendirici",
        "Öksürük tedavisi",
      ],
      antioxidantLevel: "high",
      antibacterialActivity: true,
      traditionalUses: ["Antik Yunan tıbbı", "Solunum hastalıkları", "Yara tedavisi"],
    },
    production: {
      season: ["Haziran", "Temmuz"],
      annualProduction: "600 ton/yıl",
      rarity: "uncommon",
    },
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    description:
      "Yunanistan'ın Girit Adası'nda yabani kekik bitkilerinden üretilen bu bal, antik çağlardan beri değerli kabul edilmektedir. Yüksek antiseptik özellikleri ve güçlü aromasıyla Akdeniz'in en prestijli bal türlerinden biridir.",
    featured: false,
    tags: ["akdeniz", "yunanistan", "antiseptik", "aromatik"],
  },
  {
    id: "gelam",
    name: "Gelam Balı",
    localName: "Gelam Honey / Madu Gelam",
    origin: {
      country: "Malezya",
      region: "Güneydoğu Asya",
      continent: "asia",
      coordinates: [3.5, 103.0],
    },
    plant: {
      name: "Gelam Ağacı (Çay Ağacı)",
      scientificName: "Melaleuca cajuputi",
      type: "tree",
    },
    appearance: {
      color: "pale-yellow",
      colorHex: "#F0D060",
      consistency: "liquid",
      crystallizationRate: "slow",
    },
    taste: {
      profile: ["hafif", "çiçeksi", "tatlı", "ferahlatıcı"],
      intensity: "mild",
      description: "Gelam balı, hafif ve ferahlatıcı tadıyla Güneydoğu Asya'da yaygın tüketilen bir bal türüdür.",
    },
    health: {
      benefits: [
        "Antimikrobiyal etki",
        "Solunum desteği",
        "Antienflamatuvar",
        "Bağışıklık desteği",
      ],
      antioxidantLevel: "medium",
      antibacterialActivity: true,
      traditionalUses: ["Geleneksel Malay tıbbı", "Soğuk algınlığı tedavisi"],
    },
    production: {
      season: ["Tüm yıl"],
      annualProduction: "400 ton/yıl",
      rarity: "uncommon",
    },
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    description:
      "Malezya'nın çay ağacı ormanlarından elde edilen Gelam balı, antimikrobiyal özellikleriyle bilinir ve geleneksel Malay tıbbında önemli bir yere sahiptir.",
    featured: false,
    tags: ["asya", "antimikrobiyal", "hafif", "malezya"],
  },
  {
    id: "chestnut",
    name: "Kestane Balı",
    localName: "Chestnut Honey / Miel de Castaña",
    origin: {
      country: "İtalya",
      region: "Toskana",
      continent: "europe",
      coordinates: [43.2, 11.9],
    },
    plant: {
      name: "Kestane Ağacı",
      scientificName: "Castanea sativa",
      type: "tree",
    },
    appearance: {
      color: "dark-brown",
      colorHex: "#704214",
      consistency: "creamy",
      crystallizationRate: "fast",
    },
    taste: {
      profile: ["güçlü", "mineral", "biraz acı", "karamelize"],
      intensity: "strong",
      description: "İtalya'nın Toskana bölgesinde üretilen kestane balı, koyu rengi ve güçlü tadıyla tanınır.",
    },
    health: {
      benefits: [
        "Yüksek antioksidan",
        "Sindirim desteği",
        "Bağışıklık güçlendirici",
        "Mineral zengin",
        "Enflamasyon azaltıcı",
      ],
      antioxidantLevel: "very-high",
      antibacterialActivity: true,
      traditionalUses: ["Geleneksel İtalyan tıbbı", "Sindirim desteği"],
    },
    production: {
      season: ["Eylül", "Ekim"],
      annualProduction: "1.500 ton/yıl",
      rarity: "uncommon",
    },
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    description:
      "İtalya'nın Toskana bölgesinde üretilen kestane balı, koyu rengi ve güçlü tadıyla tanınır. Yüksek mineral içeriği ve antioksidan özellikleriyle Avrupa'nın en değerli bal türlerinden biridir.",
    featured: false,
    tags: ["koyu", "italya", "mineral", "antioksidan"],
  },
  {
    id: "linden",
    name: "Ihlamur Balı",
    localName: "Linden Honey / Miel de Tilo",
    origin: {
      country: "Romanya",
      region: "Karpat Dağları",
      continent: "europe",
      coordinates: [45.5, 24.5],
    },
    plant: {
      name: "Ihlamur Ağacı",
      scientificName: "Tilia cordata",
      type: "tree",
    },
    appearance: {
      color: "golden",
      colorHex: "#FFD700",
      consistency: "liquid",
      crystallizationRate: "slow",
    },
    taste: {
      profile: ["çiçeksi", "hafif", "aromatik", "tatlı"],
      intensity: "medium",
      description: "Romanya'nın Karpat Dağları'ndan gelen ıhlamur balı, ıhlamur çiçeklerinin zarif aromasını taşır.",
    },
    health: {
      benefits: [
        "Sakinleştirici etki",
        "Uyku kalitesi iyileştirici",
        "Bağışıklık desteği",
        "Antiseptik",
        "Stres azaltıcı",
      ],
      antioxidantLevel: "high",
      antibacterialActivity: true,
      traditionalUses: ["Uyku desteği", "Stres yönetimi", "Soğuk algınlığı"],
    },
    production: {
      season: ["Haziran", "Temmuz"],
      annualProduction: "2.000 ton/yıl",
      rarity: "uncommon",
    },
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    description:
      "Romanya'nın Karpat Dağları'ndan gelen ıhlamur balı, ıhlamur çiçeklerinin zarif aromasını taşır. Sakinleştirici özellikleri ve hafif çiçeksi tadıyla Doğu Avrupa'nın en popüler bal türüdür.",
    featured: false,
    tags: ["aromatik", "romanya", "sakinleştirici", "avrupa"],
  },
  {
    id: "clover",
    name: "Yonca Balı",
    localName: "Clover Honey",
    origin: {
      country: "ABD",
      region: "Midwest",
      continent: "north-america",
      coordinates: [40.0, -95.0],
    },
    plant: {
      name: "Yonca",
      scientificName: "Trifolium repens",
      type: "herb",
    },
    appearance: {
      color: "golden",
      colorHex: "#FFD700",
      consistency: "liquid",
      crystallizationRate: "medium",
    },
    taste: {
      profile: ["hafif", "çiçeksi", "nötr", "tatlı"],
      intensity: "mild",
      description: "ABD'nin Midwest bölgesinde yaygın olarak üretilen yonca balı, hafif ve nötr tadıyla popülerdir.",
    },
    health: {
      benefits: [
        "Enerji kaynağı",
        "Sindirim desteği",
        "Bağışıklık desteği",
        "Hafif antiseptik",
      ],
      antioxidantLevel: "medium",
      antibacterialActivity: true,
      traditionalUses: ["Geleneksel Amerikan tıbbı", "Enerji takviyesi"],
    },
    production: {
      season: ["Mayıs", "Haziran", "Temmuz"],
      annualProduction: "3.000 ton/yıl",
      rarity: "common",
    },
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    description:
      "ABD'nin Midwest bölgesinde yaygın olarak üretilen yonca balı, hafif ve nötr tadıyla popülerdir. Kristalleşme hızı orta seviyede olduğundan hem sıvı hem de kristalize formda bulunabilir.",
    featured: false,
    tags: ["hafif", "abd", "yaygın", "nötr"],
  },
  {
    id: "pine",
    name: "Çam Balı",
    localName: "Pine Honey / Miel de Pino",
    origin: {
      country: "Türkiye",
      region: "Ege Bölgesi",
      continent: "europe",
      coordinates: [38.5, 27.0],
    },
    plant: {
      name: "Çam Ağacı",
      scientificName: "Pinus brutia",
      type: "tree",
    },
    appearance: {
      color: "dark-amber",
      colorHex: "#8B6914",
      consistency: "creamy",
      crystallizationRate: "medium",
    },
    taste: {
      profile: ["güçlü", "reçine", "mineral", "biraz acı"],
      intensity: "strong",
      description: "Türkiye'nin Ege Bölgesi'nde üretilen çam balı, çam ağaçlarının reçineli özü tarafından oluşturulur.",
    },
    health: {
      benefits: [
        "Güçlü antiseptik",
        "Solunum desteği",
        "Antimikrobiyal etki",
        "Enflamasyon azaltıcı",
        "Bağışıklık güçlendirici",
      ],
      antioxidantLevel: "high",
      antibacterialActivity: true,
      traditionalUses: ["Geleneksel Türk tıbbı", "Solunum hastalıkları", "Bağışıklık desteği"],
    },
    production: {
      season: ["Haziran", "Temmuz", "Ağustos"],
      annualProduction: "800 ton/yıl",
      rarity: "uncommon",
    },
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    description:
      "Türkiye'nin Ege Bölgesi'nde üretilen çam balı, çam ağaçlarının reçineli özü tarafından oluşturulur. Güçlü mineral içeriği ve antiseptik özellikleriyle Orta Doğu ve Akdeniz'in en önemli bal türlerinden biridir.",
    featured: false,
    tags: ["güçlü", "türkiye", "mineral", "antiseptik"],
  },
  {
    id: "orange-blossom",
    name: "Portakal Çiçeği Balı",
    localName: "Orange Blossom Honey / Miel de Azahar",
    origin: {
      country: "İspanya",
      region: "Valensiya",
      continent: "europe",
      coordinates: [39.5, -0.4],
    },
    plant: {
      name: "Portakal Ağacı",
      scientificName: "Citrus sinensis",
      type: "tree",
    },
    appearance: {
      color: "golden",
      colorHex: "#FFD700",
      consistency: "liquid",
      crystallizationRate: "medium",
    },
    taste: {
      profile: ["çiçeksi", "sitrik", "hafif", "tatlı"],
      intensity: "medium",
      description: "İspanya'nın Valensiya bölgesinden gelen portakal çiçeği balı, portakal çiçeklerinin narin aromasını taşır.",
    },
    health: {
      benefits: [
        "Vitamin C zengin",
        "Bağışıklık güçlendirici",
        "Sakinleştirici etki",
        "Antiseptik",
        "Uyku kalitesi iyileştirici",
      ],
      antioxidantLevel: "high",
      antibacterialActivity: true,
      traditionalUses: ["Geleneksel İspanyol tıbbı", "Uyku desteği"],
    },
    production: {
      season: ["Mart", "Nisan", "Mayıs"],
      annualProduction: "1.200 ton/yıl",
      rarity: "uncommon",
    },
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    description:
      "İspanya'nın Valensiya bölgesinden gelen portakal çiçeği balı, portakal çiçeklerinin narin aromasını taşır. Hafif ve çiçeksi tadıyla Akdeniz'in en aromatik bal türlerinden biridir.",
    featured: false,
    tags: ["aromatik", "ispanya", "çiçeksi", "hafif"],
  },
  {
    id: "eucalyptus",
    name: "Okaliptüs Balı",
    localName: "Eucalyptus Honey",
    origin: {
      country: "Avustralya",
      region: "Yeni Güney Galler",
      continent: "oceania",
      coordinates: [-33.9, 151.2],
    },
    plant: {
      name: "Okaliptüs Ağacı",
      scientificName: "Eucalyptus globulus",
      type: "tree",
    },
    appearance: {
      color: "amber",
      colorHex: "#FFBF00",
      consistency: "creamy",
      crystallizationRate: "medium",
    },
    taste: {
      profile: ["güçlü", "mentol", "aromatik", "biraz acı"],
      intensity: "strong",
      description: "Avustralya'nın yağmur ormanlarından gelen okaliptüs balı, okaliptüs ağaçlarının karakteristik aromasını taşır.",
    },
    health: {
      benefits: [
        "Solunum desteği",
        "Antiseptik",
        "Antimikrobiyal etki",
        "Bağışıklık güçlendirici",
        "Öksürük tedavisi",
      ],
      antioxidantLevel: "high",
      antibacterialActivity: true,
      traditionalUses: ["Avustralya yerlileri tıbbı", "Solunum hastalıkları"],
    },
    production: {
      season: ["Tüm yıl"],
      annualProduction: "1.000 ton/yıl",
      rarity: "uncommon",
    },
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    description:
      "Avustralya'nın yağmur ormanlarından gelen okaliptüs balı, okaliptüs ağaçlarının karakteristik aromasını taşır. Güçlü solunum desteği özellikleriyle Okyanusya'nın en önemli bal türlerinden biridir.",
    featured: false,
    tags: ["aromatik", "avustralya", "solunum", "güçlü"],
  },
  {
    id: "acacia-argentina",
    name: "Arjantin Akasya Balı",
    localName: "Argentine Acacia Honey",
    origin: {
      country: "Arjantin",
      region: "Misiones",
      continent: "south-america",
      coordinates: [-27.4, -55.5],
    },
    plant: {
      name: "Akasya Ağacı",
      scientificName: "Robinia pseudoacacia",
      type: "tree",
    },
    appearance: {
      color: "pale-yellow",
      colorHex: "#F0E68C",
      consistency: "liquid",
      crystallizationRate: "slow",
    },
    taste: {
      profile: ["hafif", "çiçeksi", "nötr", "tatlı"],
      intensity: "mild",
      description: "Arjantin'in Misiones bölgesinden gelen akasya balı, hafif ve nötr tadıyla popülerdir.",
    },
    health: {
      benefits: [
        "Sindirim desteği",
        "Enerji kaynağı",
        "Uyku kalitesi iyileştirici",
        "Bağışıklık desteği",
      ],
      antioxidantLevel: "medium",
      antibacterialActivity: true,
      traditionalUses: ["Geleneksel Arjantin tıbbı", "Sindirim desteği"],
    },
    production: {
      season: ["Ekim", "Kasım", "Aralık"],
      annualProduction: "2.500 ton/yıl",
      rarity: "common",
    },
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    description:
      "Arjantin'in Misiones bölgesinden gelen akasya balı, hafif ve nötr tadıyla popülerdir. Dünya akasya balı üretiminin önemli bir kısmı Arjantin'den gelir.",
    featured: false,
    tags: ["hafif", "arjantin", "yaygın", "güney-amerika"],
  },
  {
    id: "sunflower",
    name: "Ayçiçeği Balı",
    localName: "Sunflower Honey / Miel de Girasol",
    origin: {
      country: "Ukrayna",
      region: "Steppe",
      continent: "europe",
      coordinates: [48.4, 31.2],
    },
    plant: {
      name: "Ayçiçeği",
      scientificName: "Helianthus annuus",
      type: "flower",
    },
    appearance: {
      color: "golden",
      colorHex: "#FFD700",
      consistency: "creamy",
      crystallizationRate: "fast",
    },
    taste: {
      profile: ["hafif", "çiçeksi", "nötr", "tatlı"],
      intensity: "mild",
      description: "Ukrayna'nın geniş ayçiçeği tarlalarından gelen ayçiçeği balı, hafif ve çiçeksi tadıyla tanınır.",
    },
    health: {
      benefits: [
        "Enerji kaynağı",
        "Sindirim desteği",
        "Bağışıklık desteği",
        "Hafif antiseptik",
      ],
      antioxidantLevel: "medium",
      antibacterialActivity: true,
      traditionalUses: ["Geleneksel Ukrayna tıbbı", "Enerji takviyesi"],
    },
    production: {
      season: ["Ağustos", "Eylül"],
      annualProduction: "3.500 ton/yıl",
      rarity: "common",
    },
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    description:
      "Ukrayna'nın geniş ayçiçeği tarlalarından gelen ayçiçeği balı, hafif ve çiçeksi tadıyla tanınır. Kristalleşme hızı hızlı olduğundan çabuk kristalize olur.",
    featured: false,
    tags: ["hafif", "ukrayna", "yaygın", "çiçeksi"],
  },
  {
    id: "heather",
    name: "Ericaceae Balı",
    localName: "Heather Honey",
    origin: {
      country: "İskoçya",
      region: "Highlands",
      continent: "europe",
      coordinates: [57.3, -4.4],
    },
    plant: {
      name: "Ericaceae (Çiçekli Çalı)",
      scientificName: "Calluna vulgaris",
      type: "shrub",
    },
    appearance: {
      color: "dark-amber",
      colorHex: "#8B6914",
      consistency: "creamy",
      crystallizationRate: "fast",
    },
    taste: {
      profile: ["güçlü", "mineral", "biraz acı", "aromatik"],
      intensity: "strong",
      description: "İskoçya'nın Highlands bölgesinden gelen ericaceae balı, güçlü ve karakteristik tadıyla tanınır.",
    },
    health: {
      benefits: [
        "Yüksek antioksidan",
        "Sindirim desteği",
        "Bağışıklık güçlendirici",
        "Mineral zengin",
        "Enflamasyon azaltıcı",
      ],
      antioxidantLevel: "very-high",
      antibacterialActivity: true,
      traditionalUses: ["Geleneksel İskoç tıbbı", "Sindirim desteği"],
    },
    production: {
      season: ["Ağustos", "Eylül"],
      annualProduction: "400 ton/yıl",
      rarity: "uncommon",
    },
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    description:
      "İskoçya'nın Highlands bölgesinden gelen ericaceae balı, güçlü ve karakteristik tadıyla tanınır. Yüksek antioksidan içeriği ve mineral zenginliğiyle Kuzey Avrupa'nın en değerli bal türlerinden biridir.",
    featured: false,
    tags: ["güçlü", "iskoçya", "mineral", "antioksidan"],
  },
  {
    id: "tupelo",
    name: "Tupelo Balı",
    localName: "Tupelo Honey",
    origin: {
      country: "ABD",
      region: "Florida",
      continent: "north-america",
      coordinates: [29.6, -82.3],
    },
    plant: {
      name: "Tupelo Ağacı",
      scientificName: "Nyssa aquatica",
      type: "tree",
    },
    appearance: {
      color: "golden",
      colorHex: "#FFD700",
      consistency: "liquid",
      crystallizationRate: "slow",
    },
    taste: {
      profile: ["hafif", "çiçeksi", "nötr", "tatlı"],
      intensity: "mild",
      description: "Florida'nın bataklık alanlarından gelen tupelo balı, kristalleşmeme özelliğiyle ünlüdür.",
    },
    health: {
      benefits: [
        "Enerji kaynağı",
        "Sindirim desteği",
        "Bağışıklık desteği",
        "Hafif antiseptik",
      ],
      antioxidantLevel: "medium",
      antibacterialActivity: true,
      traditionalUses: ["Geleneksel Amerikan tıbbı", "Enerji takviyesi"],
    },
    production: {
      season: ["Nisan", "Mayıs"],
      annualProduction: "200 ton/yıl",
      rarity: "rare",
    },
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    description:
      "Florida'nın bataklık alanlarından gelen tupelo balı, kristalleşmeme özelliğiyle ünlüdür. Yüksek fruktoz içeriği nedeniyle uzun süre sıvı kalır.",
    featured: false,
    tags: ["hafif", "abd", "nadir", "sıvı"],
  },
  {
    id: "wildflower",
    name: "Vahşi Çiçek Balı",
    localName: "Wildflower Honey",
    origin: {
      country: "Kanada",
      region: "Alberta",
      continent: "north-america",
      coordinates: [53.6, -113.6],
    },
    plant: {
      name: "Karışık Vahşi Çiçekler",
      scientificName: "Mixed species",
      type: "mixed",
    },
    appearance: {
      color: "amber",
      colorHex: "#FFBF00",
      consistency: "creamy",
      crystallizationRate: "medium",
    },
    taste: {
      profile: ["çiçeksi", "karmaşık", "aromatik", "tatlı"],
      intensity: "medium",
      description: "Kanada'nın vahşi doğasından gelen vahşi çiçek balı, çeşitli çiçeklerin karışımından oluşur.",
    },
    health: {
      benefits: [
        "Enerji kaynağı",
        "Sindirim desteği",
        "Bağışıklık desteği",
        "Antioksidan",
      ],
      antioxidantLevel: "high",
      antibacterialActivity: true,
      traditionalUses: ["Geleneksel Kanada tıbbı", "Enerji takviyesi"],
    },
    production: {
      season: ["Haziran", "Temmuz", "Ağustos"],
      annualProduction: "1.500 ton/yıl",
      rarity: "uncommon",
    },
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    description:
      "Kanada'nın vahşi doğasından gelen vahşi çiçek balı, çeşitli çiçeklerin karışımından oluşur. Her yıl farklı çiçek kombinasyonları nedeniyle tat profili değişebilir.",
    featured: false,
    tags: ["karmaşık", "kanada", "çiçeksi", "kuzey-amerika"],
  },
  {
    id: "acacia-africa",
    name: "Afrika Akasya Balı",
    localName: "African Acacia Honey",
    origin: {
      country: "Tanzanya",
      region: "Serengeti",
      continent: "africa",
      coordinates: [-2.0, 34.5],
    },
    plant: {
      name: "Akasya Ağacı",
      scientificName: "Acacia tortilis",
      type: "tree",
    },
    appearance: {
      color: "golden",
      colorHex: "#FFD700",
      consistency: "liquid",
      crystallizationRate: "slow",
    },
    taste: {
      profile: ["hafif", "çiçeksi", "nötr", "tatlı"],
      intensity: "mild",
      description: "Tanzanya'nın Serengeti'sinden gelen Afrika akasya balı, hafif ve nötr tadıyla popülerdir.",
    },
    health: {
      benefits: [
        "Sindirim desteği",
        "Enerji kaynağı",
        "Uyku kalitesi iyileştirici",
        "Bağışıklık desteği",
      ],
      antioxidantLevel: "medium",
      antibacterialActivity: true,
      traditionalUses: ["Geleneksel Afrika tıbbı", "Sindirim desteği"],
    },
    production: {
      season: ["Tüm yıl"],
      annualProduction: "800 ton/yıl",
      rarity: "common",
    },
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    description:
      "Tanzanya'nın Serengeti'sinden gelen Afrika akasya balı, hafif ve nötr tadıyla popülerdir. Afrika'nın en önemli bal üretim bölgelerinden biridir.",
    featured: false,
    tags: ["hafif", "tanzanya", "yaygın", "afrika"],
  },
  {
    id: "jarrah",
    name: "Jarrah Balı",
    localName: "Jarrah Honey",
    origin: {
      country: "Avustralya",
      region: "Batı Avustralya",
      continent: "oceania",
      coordinates: [-32.0, 116.0],
    },
    plant: {
      name: "Jarrah Ağacı",
      scientificName: "Eucalyptus marginata",
      type: "tree",
    },
    appearance: {
      color: "dark-amber",
      colorHex: "#8B6914",
      consistency: "creamy",
      crystallizationRate: "medium",
    },
    taste: {
      profile: ["güçlü", "mineral", "biraz acı", "aromatik"],
      intensity: "strong",
      description: "Avustralya'nın Batı Avustralya bölgesinden gelen Jarrah balı, güçlü ve karakteristik tadıyla tanınır.",
    },
    health: {
      benefits: [
        "Yüksek antioksidan",
        "Sindirim desteği",
        "Bağışıklık güçlendirici",
        "Mineral zengin",
        "Enflamasyon azaltıcı",
      ],
      antioxidantLevel: "very-high",
      antibacterialActivity: true,
      traditionalUses: ["Avustralya yerlileri tıbbı", "Sindirim desteği"],
    },
    production: {
      season: ["Tüm yıl"],
      annualProduction: "600 ton/yıl",
      rarity: "uncommon",
    },
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    description:
      "Avustralya'nın Batı Avustralya bölgesinden gelen Jarrah balı, güçlü ve karakteristik tadıyla tanınır. Yüksek antioksidan içeriği ve mineral zenginliğiyle Okyanusya'nın en değerli bal türlerinden biridir.",
    featured: false,
    tags: ["güçlü", "avustralya", "mineral", "antioksidan"],
  },
];

// ============================================================
// BÖLGE VERİLERİ — Harita için
// ============================================================

export const mapRegions: MapRegion[] = [
  {
    id: "europe",
    name: "Avrupa",
    continent: "europe",
    coordinates: [50.0, 15.0],
    honeyCount: honeyTypes.filter((h) => h.origin.continent === "europe").length,
    description: "Akasya, lavanta, ıhlamur, kestane ve kekik ballarıyla ünlü Avrupa, dünya bal üretiminin önemli bir merkezidir.",
  },
  {
    id: "middle-east",
    name: "Orta Doğu",
    continent: "middle-east",
    coordinates: [25.0, 45.0],
    honeyCount: honeyTypes.filter((h) => h.origin.continent === "middle-east").length,
    description: "Yemen'in efsanevi Sidr balı ve Türkiye'nin çam balı bu bölgenin öne çıkan ürünleridir.",
  },
  {
    id: "asia",
    name: "Asya",
    continent: "asia",
    coordinates: [30.0, 100.0],
    honeyCount: honeyTypes.filter((h) => h.origin.continent === "asia").length,
    description: "Tropikal yağmur ormanlarından Himalaya dağlarına uzanan Asya, egzotik bal türleriyle zengindir.",
  },
  {
    id: "north-america",
    name: "Kuzey Amerika",
    continent: "north-america",
    coordinates: [45.0, -95.0],
    honeyCount: honeyTypes.filter((h) => h.origin.continent === "north-america").length,
    description: "Karabuğday, yonca, vahşi çiçek ve tupelo ballarıyla Kuzey Amerika, büyük üretim kapasitesine sahiptir.",
  },
  {
    id: "south-america",
    name: "Güney Amerika",
    continent: "south-america",
    coordinates: [-15.0, -60.0],
    honeyCount: honeyTypes.filter((h) => h.origin.continent === "south-america").length,
    description: "Arjantin'in akasya balı ve diğer tropikal bal türleriyle Güney Amerika, önemli bir üretim bölgesidir.",
  },
  {
    id: "africa",
    name: "Afrika",
    continent: "africa",
    coordinates: [0.0, 20.0],
    honeyCount: honeyTypes.filter((h) => h.origin.continent === "africa").length,
    description: "Tanzanya ve diğer Afrika ülkelerinin vahşi çiçek balları, geleneksel arıcılığın merkezi olarak öne çıkar.",
  },
  {
    id: "oceania",
    name: "Okyanusya",
    continent: "oceania",
    coordinates: [-25.0, 135.0],
    honeyCount: honeyTypes.filter((h) => h.origin.continent === "oceania").length,
    description: "Yeni Zelanda'nın Manuka balı ve Avustralya'nın Jarrah ve Eucalyptus balları bu bölgeden gelir.",
  },
  {
    id: "mediterranean",
    name: "Akdeniz",
    continent: "mediterranean",
    coordinates: [36.0, 18.0],
    honeyCount: honeyTypes.filter((h) => h.origin.continent === "mediterranean").length,
    description: "Girit kekiği, Türk çiçek balı ve İtalyan kestane balıyla Akdeniz havzası, arıcılığın beşiğidir.",
  },
];

// ============================================================
// YARDIMCI FONKSİYONLAR
// ============================================================

export const colorLabels: Record<HoneyColor, string> = {
  "pale-yellow": "Açık Sarı",
  golden: "Altın",
  amber: "Kehribar",
  "dark-amber": "Koyu Kehribar",
  brown: "Kahverengi",
  "dark-brown": "Koyu Kahverengi",
  black: "Siyah",
};

export const intensityLabels: Record<TasteIntensity, string> = {
  mild: "Hafif",
  medium: "Orta",
  strong: "Güçlü",
  "very-strong": "Çok Güçlü",
};

export const regionLabels: Record<Region, string> = {
  europe: "Avrupa",
  "middle-east": "Orta Doğu",
  asia: "Asya",
  "north-america": "Kuzey Amerika",
  "south-america": "Güney Amerika",
  africa: "Afrika",
  oceania: "Okyanusya",
  mediterranean: "Akdeniz",
};

export const rarityLabels: Record<string, string> = {
  common: "Yaygın",
  uncommon: "Az Yaygın",
  rare: "Nadir",
  "very-rare": "Çok Nadir",
};

export function getHoneyById(id: string): HoneyType | undefined {
  return honeyTypes.find((h) => h.id === id);
}

export function getFeaturedHoneys(): HoneyType[] {
  return honeyTypes.filter((h) => h.featured);
}

export function getHoneysByRegion(continent: Region): HoneyType[] {
  return honeyTypes.filter((h) => h.origin.continent === continent);
}

export function filterHoneys(filters: {
  search?: string;
  region?: Region | "";
  color?: HoneyColor | "";
  intensity?: TasteIntensity | "";
  plant?: string;
}): HoneyType[] {
  return honeyTypes.filter((honey) => {
    if (filters.search) {
      const q = filters.search.toLowerCase();
      const matches =
        honey.name.toLowerCase().includes(q) ||
        honey.description.toLowerCase().includes(q) ||
        honey.origin.country.toLowerCase().includes(q) ||
        honey.plant.name.toLowerCase().includes(q) ||
        honey.tags.some((t) => t.includes(q));
      if (!matches) return false;
    }
    if (filters.region && honey.origin.continent !== filters.region) return false;
    if (filters.color && honey.appearance.color !== filters.color) return false;
    if (filters.intensity && honey.taste.intensity !== filters.intensity) return false;
    if (filters.plant) {
      const p = filters.plant.toLowerCase();
      if (!honey.plant.name.toLowerCase().includes(p) && !honey.plant.type.toLowerCase().includes(p)) return false;
    }
    return true;
  });
}
