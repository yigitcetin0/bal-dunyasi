/**
 * HealthPage — Balın Sağlık Üzerindeki Etkileri
 * Design: Organik Modernizm
 */

import { Link } from "wouter";
import { ArrowRight, AlertTriangle } from "lucide-react";

const HONEY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663428903010/WuWtjLcGduxVfVfKmDLURD/honey-hero-bg-EbNZdz7nZ75heYiJutJ62E.webp";
const VARIETIES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663428903010/WuWtjLcGduxVfVfKmDLURD/honey-varieties-4pHWPzo7MmhTpAEprynZPg.webp";

const healthBenefits = [
  {
    category: "Antimikrobiyal Etki",
    emoji: "🦠",
    color: "bg-red-50 border-red-100",
    titleColor: "text-red-700",
    benefits: [
      {
        title: "Hidrojen Peroksit",
        desc: "Bal, glikoz oksidaz enzimi sayesinde düşük konsantrasyonlarda hidrojen peroksit üretir. Bu madde, bakterilerin büyümesini engeller.",
      },
      {
        title: "Düşük pH",
        desc: "Balın asidik yapısı (pH 3.2-4.5), çoğu bakteri ve mantar için yaşanmaz bir ortam oluşturur.",
      },
      {
        title: "Osmotik Etki",
        desc: "Yüksek şeker konsantrasyonu, bakteri hücrelerinden suyu çekerek onları öldürür.",
      },
    ],
  },
  {
    category: "Antioksidan Koruma",
    emoji: "🛡️",
    color: "bg-amber-50 border-amber-100",
    titleColor: "text-amber-700",
    benefits: [
      {
        title: "Flavonoidler",
        desc: "Quercetin, kaempferol ve luteolin gibi flavonoidler, serbest radikallere karşı güçlü koruma sağlar.",
      },
      {
        title: "Fenolik Asitler",
        desc: "Kaffeik asit ve p-kumarik asit, oksidatif strese karşı hücreleri korur.",
      },
      {
        title: "Vitamin C ve E",
        desc: "Özellikle koyu renkli ballarda yüksek miktarda bulunan bu vitaminler antioksidan etkiyi güçlendirir.",
      },
    ],
  },
  {
    category: "Sindirim Sağlığı",
    emoji: "🫁",
    color: "bg-green-50 border-green-100",
    titleColor: "text-green-700",
    benefits: [
      {
        title: "Prebiyotik Etki",
        desc: "Bal, bağırsak florasındaki faydalı bakterilerin (Lactobacillus, Bifidobacterium) büyümesini destekler.",
      },
      {
        title: "Mide Ülseri",
        desc: "Araştırmalar, balın H. pylori bakterisine karşı etkili olduğunu ve mide ülserinin iyileşmesini hızlandırdığını göstermektedir.",
      },
      {
        title: "Reflü Rahatlama",
        desc: "Balın kaplayıcı özelliği, yemek borusu mukozasını korur ve reflü semptomlarını hafifletir.",
      },
    ],
  },
  {
    category: "Yara İyileştirme",
    emoji: "🩹",
    color: "bg-blue-50 border-blue-100",
    titleColor: "text-blue-700",
    benefits: [
      {
        title: "Tıbbi Bal Uygulaması",
        desc: "Özellikle Manuka balı, yanık ve kronik yara tedavisinde klinik olarak kullanılmaktadır.",
      },
      {
        title: "Biyofilm Kırma",
        desc: "Bal, antibiyotiklere dirençli bakteri biyofilmlerini parçalayabilir.",
      },
      {
        title: "Nem Dengesi",
        desc: "Yara bölgesinde optimal nem ortamı oluşturarak iyileşmeyi hızlandırır.",
      },
    ],
  },
];

const nutritionData = [
  { nutrient: "Karbonhidrat", amount: "82g", per: "100g başına", note: "Ağırlıklı olarak fruktoz ve glikoz" },
  { nutrient: "Enerji", amount: "304 kcal", per: "100g başına", note: "Şekere göre daha yoğun" },
  { nutrient: "Su", amount: "17g", per: "100g başına", note: "Düşük su içeriği koruyuculuk sağlar" },
  { nutrient: "Protein", amount: "0.3g", per: "100g başına", note: "Enzimler ve aminoasitler" },
  { nutrient: "Potasyum", amount: "52mg", per: "100g başına", note: "Özellikle koyu ballarda yüksek" },
  { nutrient: "Kalsiyum", amount: "6mg", per: "100g başına", note: "Kemik sağlığı için destek" },
];

const warnings = [
  "1 yaş altı bebeklere bal verilmemelidir (botulizm riski).",
  "Diyabet hastaları, balı şeker gibi değerlendirmeli ve doktorlarına danışmalıdır.",
  "Bal alerjisi olan kişiler tüketmemelidir.",
  "Aşırı tüketim, yüksek şeker içeriği nedeniyle zararlı olabilir.",
];

export default function HealthPage() {
  return (
    <div className="min-h-screen bg-amber-50 pt-16">
      {/* Header */}
      <div
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: `url(${HONEY_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-amber-950/80" />
        <div className="honeycomb-bg absolute inset-0 opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-3 block">
            Sağlık
          </span>
          <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-amber-50 mb-4">
            Balın Sağlık Etkileri
          </h1>
          <p className="text-amber-100/70 max-w-2xl text-lg">
            Binlerce yıllık geleneksel bilginin modern bilimle buluştuğu nokta: 
            balın sağlık üzerindeki kanıtlanmış etkileri.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-amber-950 mb-4">
              Doğanın Eczanesi
            </h2>
            <p className="text-amber-900/70 leading-relaxed mb-4">
              Bal, sadece bir tatlandırıcı değil; binlerce bileşeni olan karmaşık 
              bir biyolojik üründür. Enzimler, antioksidanlar, organik asitler, 
              vitaminler ve mineraller içeren bal, modern tıbbın da ilgisini çeken 
              doğal bir şifa kaynağıdır.
            </p>
            <p className="text-amber-900/70 leading-relaxed">
              Dünya Sağlık Örgütü (WHO), balı geleneksel tıpta önemli bir yere 
              sahip doğal ürün olarak tanımlamaktadır. Özellikle Manuka balı, 
              klinik ortamlarda yara tedavisinde kullanılmaktadır.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={VARIETIES_IMG} alt="Bal çeşitleri" className="w-full h-72 object-cover" />
          </div>
        </div>

        {/* Health Benefits */}
        <div className="mb-16">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-amber-950 mb-8 text-center">
            Bilimsel Temelli Faydalar
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {healthBenefits.map((category, i) => (
              <div key={i} className={`${category.color} border rounded-2xl p-6`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{category.emoji}</span>
                  <h3 className={`font-['Playfair_Display'] font-bold text-xl ${category.titleColor}`}>
                    {category.category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.benefits.map((benefit, j) => (
                    <div key={j}>
                      <h4 className="font-semibold text-amber-950 text-sm mb-1">{benefit.title}</h4>
                      <p className="text-amber-900/70 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nutrition Table */}
        <div className="mb-12">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-amber-950 mb-6 text-center">
            Besin Değerleri
          </h2>
          <div className="bg-white rounded-2xl border border-amber-100 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead className="bg-amber-950 text-amber-100">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold">Besin Değeri</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold">Miktar</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold hidden sm:table-cell">Not</th>
                </tr>
              </thead>
              <tbody>
                {nutritionData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-amber-50/50" : "bg-white"}>
                    <td className="px-6 py-3 text-sm font-medium text-amber-950">{row.nutrient}</td>
                    <td className="px-6 py-3 text-sm text-amber-700 font-semibold">{row.amount}</td>
                    <td className="px-6 py-3 text-sm text-amber-700/60 hidden sm:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-amber-700/50 mt-2 text-center">
            * Değerler ortalama bal için verilmiştir. Bal türüne göre farklılık gösterebilir.
          </p>
        </div>

        {/* Warnings */}
        <div className="bg-amber-100 border border-amber-300 rounded-2xl p-6 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="text-amber-700 flex-shrink-0" size={22} />
            <h3 className="font-['Playfair_Display'] font-bold text-amber-950 text-xl">
              Önemli Uyarılar
            </h3>
          </div>
          <ul className="space-y-2">
            {warnings.map((warning, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-amber-800">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0 mt-1.5" />
                {warning}
              </li>
            ))}
          </ul>
          <p className="text-xs text-amber-700/60 mt-4 italic">
            Bu bilgiler genel sağlık bilgisi amaçlıdır. Tıbbi tavsiye yerine geçmez. 
            Sağlık sorunlarınız için doktorunuza danışın.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-amber-900/60 mb-4">Farklı bal türlerinin sağlık faydaları hakkında bilgi almak ister misiniz?</p>
          <Link href="/honey-types">
            <button className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-xl transition-all">
              Bal Türlerini Keşfet
              <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
