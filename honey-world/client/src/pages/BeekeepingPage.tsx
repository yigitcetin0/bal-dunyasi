/**
 * BeekeepingPage — Arıcılık Nedir?
 * Design: Organik Modernizm
 */

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const BEEKEEPER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663428903010/WuWtjLcGduxVfVfKmDLURD/beekeeper-field-J7YVRrq89vjpJJcgWeqC7v.webp";
const HONEYCOMB_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663428903010/WuWtjLcGduxVfVfKmDLURD/honeycomb-texture-4aXZk4swHL6LjpF4sEJVNF.webp";

const beeRoles = [
  {
    title: "Kraliçe Arı",
    emoji: "👑",
    description: "Koloninin tek üreyen dişisidir. Günde 2.000'e kadar yumurta bırakabilir. Ömrü 3-5 yıldır.",
    color: "bg-amber-100 border-amber-300",
  },
  {
    title: "İşçi Arılar",
    emoji: "🐝",
    description: "Dişi arılardır. Nektar toplama, kovan temizliği, larva besleme ve kovan savunması görevlerini üstlenir. Ömrü 6 haftadır.",
    color: "bg-orange-50 border-orange-200",
  },
  {
    title: "Erkek Arılar (Dron)",
    emoji: "🔵",
    description: "Tek görevi kraliçeyi döllemektir. Kışın kovandan kovulurlar. Ömrü 8 haftadır.",
    color: "bg-amber-50 border-amber-200",
  },
];

const equipments = [
  { name: "Arıcı Kıyafeti", emoji: "🥼", desc: "Tam koruma sağlayan beyaz tulum ve yüz maskesi" },
  { name: "Körük (Dumanlık)", emoji: "💨", desc: "Duman arıları sakinleştirir ve kovana müdahaleyi kolaylaştırır" },
  { name: "Kovan Aleti", emoji: "🔧", desc: "Petekleri ayırmak ve kovan çerçevelerini kaldırmak için" },
  { name: "Bal Süzgeci", emoji: "⚙️", desc: "Santrifüj yöntemiyle balı petekten ayırır" },
  { name: "Kovanlık", emoji: "🏠", desc: "Arıların yaşadığı ve bal depoladığı yapı" },
  { name: "Polen Kapanı", emoji: "🌼", desc: "Arıların taşıdığı poleni toplamak için kovan girişine yerleştirilir" },
];

const modernApproaches = [
  {
    title: "Organik Arıcılık",
    description: "Kimyasal ilaç kullanmadan, doğal yöntemlerle arı sağlığını koruma ve organik sertifikalı bal üretimi.",
  },
  {
    title: "Şehir Arıcılığı",
    description: "Çatılarda ve kentsel alanlarda kurulan kovanlar, şehirlerin biyoçeşitliğine katkıda bulunur.",
  },
  {
    title: "Akıllı Kovan Teknolojisi",
    description: "IoT sensörleri ile kovan sıcaklığı, nem ve arı aktivitesi uzaktan izlenebilir.",
  },
  {
    title: "Göçer Arıcılık",
    description: "Mevsime göre farklı bölgelere taşınan kovanlar, çeşitli çiçek kaynaklarından yararlanır.",
  },
];

export default function BeekeepingPage() {
  return (
    <div className="min-h-screen bg-amber-50 pt-16">
      {/* Header */}
      <div
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: `url(${BEEKEEPER_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-amber-950/75" />
        <div className="honeycomb-bg absolute inset-0 opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-3 block">
            Arıcılık
          </span>
          <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-amber-50 mb-4">
            Arıcılık Nedir?
          </h1>
          <p className="text-amber-100/70 max-w-2xl text-lg">
            İnsanlığın en eski mesleklerinden biri olan arıcılık, 
            doğayla derin bir bağ kurmanın ve sürdürülebilir bir ekosisteme 
            katkıda bulunmanın en kadim yollarından biridir.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-amber-950 mb-4">
              Arı Kolonisi
            </h2>
            <p className="text-amber-900/70 leading-relaxed mb-4">
              Bir bal arısı kolonisi, 20.000 ile 80.000 arasında arıdan oluşan 
              karmaşık ve organize bir topluluktur. Her arının belirli bir rolü 
              vardır ve koloni, bu rollerin mükemmel koordinasyonuyla işler.
            </p>
            <p className="text-amber-900/70 leading-relaxed">
              Arılar, sadece bal üretmekle kalmaz; dünya genelinde bitkilerin 
              %80'inden fazlasının tozlaşmasını sağlayarak gıda üretiminin 
              temel taşlarından birini oluşturur.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={HONEYCOMB_IMG} alt="Petek" className="w-full h-72 object-cover" />
          </div>
        </div>

        {/* Bee Roles */}
        <div className="mb-16">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-amber-950 mb-8 text-center">
            Koloni Üyeleri
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {beeRoles.map((role, i) => (
              <div key={i} className={`${role.color} border rounded-2xl p-6`}>
                <span className="text-4xl block mb-3">{role.emoji}</span>
                <h3 className="font-['Playfair_Display'] font-bold text-amber-950 text-xl mb-2">
                  {role.title}
                </h3>
                <p className="text-amber-900/70 text-sm leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment */}
        <div className="mb-16">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-amber-950 mb-8 text-center">
            Arıcı Ekipmanları
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {equipments.map((eq, i) => (
              <div key={i} className="bg-white border border-amber-100 rounded-2xl p-5 flex gap-4">
                <span className="text-3xl flex-shrink-0">{eq.emoji}</span>
                <div>
                  <h3 className="font-semibold text-amber-950 mb-1">{eq.name}</h3>
                  <p className="text-amber-900/60 text-sm">{eq.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Approaches */}
        <div className="bg-amber-950 rounded-2xl p-8 sm:p-10 honeycomb-bg">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-amber-50 mb-8 text-center">
            Modern Arıcılık Yaklaşımları
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {modernApproaches.map((approach, i) => (
              <div key={i} className="bg-amber-900/40 border border-amber-700/30 rounded-xl p-5">
                <h3 className="font-['Playfair_Display'] font-bold text-amber-300 text-lg mb-2">
                  {approach.title}
                </h3>
                <p className="text-amber-100/70 text-sm leading-relaxed">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-amber-900/60 mb-4">Bal türleri hakkında daha fazla bilgi edinmek ister misiniz?</p>
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
