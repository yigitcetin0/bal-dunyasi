/**
 * Home Page — Bal Dünyası
 * Design: Organik Modernizm
 * Sections: Hero, Benefits, Featured Honeys, Map CTA, Stats
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Globe, Shield, Zap, Heart, Droplets, FlowerIcon } from "lucide-react";
import { getFeaturedHoneys, honeyTypes } from "@/data/honeyTypes";
import HoneyCard from "@/components/HoneyCard";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663428903010/WuWtjLcGduxVfVfKmDLURD/honey-hero-bg-EbNZdz7nZ75heYiJutJ62E.webp";
const HONEYCOMB_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663428903010/WuWtjLcGduxVfVfKmDLURD/honeycomb-texture-4aXZk4swHL6LjpF4sEJVNF.webp";
const VARIETIES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663428903010/WuWtjLcGduxVfVfKmDLURD/honey-varieties-4pHWPzo7MmhTpAEprynZPg.webp";
const BEEKEEPER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663428903010/WuWtjLcGduxVfVfKmDLURD/beekeeper-field-J7YVRrq89vjpJJcgWeqC7v.webp";

const benefits = [
  {
    icon: Shield,
    title: "Antibakteriyel Güç",
    description: "Doğal hidrojen peroksit ve flavonoidler sayesinde güçlü antibakteriyel etki gösterir.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Zap,
    title: "Enerji Kaynağı",
    description: "Doğal şekerler (fruktoz ve glikoz) hızlı ve sürdürülebilir enerji sağlar.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: Heart,
    title: "Kalp Sağlığı",
    description: "Antioksidanlar kalp-damar sağlığını destekler ve kötü kolesterolü azaltır.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: Droplets,
    title: "Cilt Bakımı",
    description: "Nemlendirici ve iyileştirici özellikleri ile cilt bakımında yüzyıllardır kullanılır.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: FlowerIcon,
    title: "Antioksidan Zenginliği",
    description: "Polifenoller ve flavonoidler serbest radikallere karşı koruma sağlar.",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    icon: Globe,
    title: "Bağışıklık Desteği",
    description: "Düzenli tüketim bağışıklık sistemini güçlendirir ve hastalıklara karşı direnci artırır.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
];

const stats = [
  { value: "20.000+", label: "Arı Türü", sub: "Dünya genelinde" },
  { value: "300+", label: "Bal Çeşidi", sub: "Kayıtlı türler" },
  { value: "1.8M", label: "Ton/Yıl", sub: "Dünya üretimi" },
  { value: "8.000", label: "Yıllık Tarih", sub: "Arıcılık geçmişi" },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = ref.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const featuredHoneys = getFeaturedHoneys();
  const pageRef = useScrollReveal();

  return (
    <div ref={pageRef} className="min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative min-h-screen flex items-center justify-start overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/90 via-amber-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-950/40 via-transparent to-transparent" />

        {/* Honeycomb pattern overlay */}
        <div className="absolute inset-0 honeycomb-bg opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 rounded-full px-4 py-1.5 mb-6">
              <span className="text-amber-300 text-xs font-medium tracking-wider uppercase">
                🐝 Doğanın En Tatlı Armağanı
              </span>
            </div>

            <h1 className="font-['Playfair_Display'] text-5xl sm:text-6xl lg:text-7xl font-bold text-amber-50 leading-tight mb-6">
              Dünyanın
              <br />
              <span className="text-amber-400 italic">Tatlarını</span>
              <br />
              Keşfedin
            </h1>

            <p className="text-amber-100/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
              Yeni Zelanda'nın efsanevi Manuka balından Yemen'in nadide Sidr balına, 
              Fransa'nın lavanta bahçelerinden Yunanistan'ın kekik tarlalarına — 
              her balın eşsiz bir hikayesi var.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/honey-types">
                <button className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-amber-950 font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-400/30 hover:-translate-y-0.5">
                  Bal Türlerini Keşfet
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/map">
                <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-amber-100 font-medium px-6 py-3 rounded-xl transition-all duration-200 backdrop-blur-sm">
                  <Globe size={18} />
                  Dünya Haritası
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-amber-300/60 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Keşfet</span>
          <div className="w-px h-8 bg-gradient-to-b from-amber-300/60 to-transparent" />
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="bg-amber-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-amber-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-amber-100 font-medium text-sm">{stat.label}</div>
                <div className="text-amber-100/50 text-xs">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <span className="text-amber-600 text-sm font-medium tracking-wider uppercase mb-3 block">
                Bal Hakkında
              </span>
              <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-amber-950 leading-tight mb-6">
                Doğanın En Kadim
                <span className="text-amber-600 italic"> Tatlısı</span>
              </h2>
              <p className="text-amber-900/70 text-lg leading-relaxed mb-6">
                Bal, arıların çiçeklerden topladığı nektarı enzimleri ve buharlaştırma yoluyla 
                dönüştürdüğü, insanlığın bilinen en eski doğal besinlerinden biridir. 
                Mısır firavunlarının mezarlarında 3.000 yıl sonra bile bozulmadan bulunan bal, 
                doğanın mucizevi koruyucu özelliklerinin kanıtıdır.
              </p>
              <p className="text-amber-900/70 leading-relaxed mb-8">
                Dünya genelinde 300'den fazla kayıtlı bal türü bulunmaktadır. Her bal, 
                üretildiği coğrafyanın çiçeklerini, iklimini ve ekosistemini yansıtır. 
                Bu nedenle her bal türü, gerçek anlamda o toprakların eşsiz bir özüdür.
              </p>
              <Link href="/history">
                <button className="inline-flex items-center gap-2 text-amber-700 font-medium hover:text-amber-600 transition-colors">
                  Balın Tarihini Keşfet
                  <ArrowRight size={16} />
                </button>
              </Link>
            </div>

            <div className="reveal relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-900/20">
                <img
                  src={HONEYCOMB_IMG}
                  alt="Petek yapısı"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/40 to-transparent" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-amber-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 hexagon bg-amber-400 flex items-center justify-center text-2xl">
                    🐝
                  </div>
                  <div>
                    <div className="font-['Playfair_Display'] font-bold text-amber-950 text-sm">
                      Mükemmel Mimari
                    </div>
                    <div className="text-amber-600/70 text-xs">
                      Altıgen petek yapısı
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <span className="text-amber-600 text-sm font-medium tracking-wider uppercase mb-3 block">
              Neden Bal?
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-amber-950 mb-4">
              Balın Genel Faydaları
            </h2>
            <p className="text-amber-900/60 max-w-2xl mx-auto leading-relaxed">
              Binlerce yıldır hem besin hem de ilaç olarak kullanılan bal, 
              modern bilimin de doğruladığı pek çok sağlık yararı sunar.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="reveal p-6 rounded-2xl border border-amber-50 hover:border-amber-200 transition-all duration-300 hover:shadow-lg hover:shadow-amber-100/50 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`w-12 h-12 ${benefit.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className={`${benefit.color}`} size={22} />
                </div>
                <h3 className="font-['Playfair_Display'] font-bold text-amber-950 text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-amber-900/60 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 reveal">
            <Link href="/health">
              <button className="inline-flex items-center gap-2 bg-amber-50 hover:bg-amber-100 text-amber-700 font-medium px-6 py-3 rounded-xl border border-amber-200 transition-all">
                Sağlık Etkileri Hakkında Daha Fazla
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FEATURED HONEYS ===== */}
      <section className="py-20 bg-amber-50 honeycomb-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 reveal">
            <div>
              <span className="text-amber-600 text-sm font-medium tracking-wider uppercase mb-3 block">
                Öne Çıkanlar
              </span>
              <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-amber-950">
                Seçkin Bal Türleri
              </h2>
            </div>
            <Link href="/honey-types">
              <button className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-amber-700 font-medium hover:text-amber-600 transition-colors">
                Tümünü Gör ({honeyTypes.length} tür)
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredHoneys.map((honey, i) => (
              <div key={honey.id} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <HoneyCard honey={honey} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MAP CTA ===== */}
      <section className="py-20 bg-amber-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${VARIETIES_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950 via-amber-950/80 to-amber-950/60" />
        <div className="honeycomb-bg absolute inset-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-3 block">
                Dünya Genelinde
              </span>
              <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-amber-50 leading-tight mb-6">
                Her Kıtada
                <br />
                <span className="text-amber-400 italic">Eşsiz Tatlar</span>
              </h2>
              <p className="text-amber-100/70 text-lg leading-relaxed mb-8">
                Etkileşimli dünya haritamızda bal türlerinin kökenlerini keşfedin. 
                Her bölgeye tıklayarak o coğrafyaya özgü bal türlerini, 
                üretim yöntemlerini ve kültürel önemini öğrenin.
              </p>
              <Link href="/map">
                <button className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-amber-950 font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-400/30">
                  <Globe size={18} />
                  Haritayı Keşfet
                </button>
              </Link>
            </div>

            <div className="reveal grid grid-cols-2 gap-4">
              {[
                { emoji: "🇳🇿", region: "Okyanusya", honey: "Manuka Balı", color: "bg-amber-800/40" },
                { emoji: "🇾🇪", region: "Orta Doğu", honey: "Sidr Balı", color: "bg-amber-700/40" },
                { emoji: "🇫🇷", region: "Avrupa", honey: "Lavanta Balı", color: "bg-amber-600/40" },
                { emoji: "🇬🇷", region: "Akdeniz", honey: "Kekik Balı", color: "bg-amber-500/40" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`${item.color} border border-amber-700/30 rounded-2xl p-4 backdrop-blur-sm hover:border-amber-400/50 transition-colors`}
                >
                  <span className="text-3xl block mb-2">{item.emoji}</span>
                  <div className="text-amber-300 text-xs font-medium uppercase tracking-wide mb-1">
                    {item.region}
                  </div>
                  <div className="text-amber-100 font-['Playfair_Display'] font-semibold text-sm">
                    {item.honey}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== BEEKEEPING CTA ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-amber-900/10">
                <img
                  src={BEEKEEPER_IMG}
                  alt="Arıcı ve kovanlar"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-amber-400 rounded-2xl p-4 shadow-xl">
                <div className="text-amber-950 font-['Playfair_Display'] font-bold text-2xl">8.000+</div>
                <div className="text-amber-800 text-xs">Yıllık arıcılık tarihi</div>
              </div>
            </div>

            <div className="reveal order-1 lg:order-2">
              <span className="text-amber-600 text-sm font-medium tracking-wider uppercase mb-3 block">
                Arıcılık Dünyası
              </span>
              <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-amber-950 leading-tight mb-6">
                Arıların Büyüleyici
                <span className="text-amber-600 italic"> Dünyası</span>
              </h2>
              <p className="text-amber-900/70 leading-relaxed mb-6">
                Arıcılık, insanlığın en eski mesleklerinden biridir. Antik Mısır'dan 
                günümüze uzanan bu kadim sanat, hem bir geçim kaynağı hem de 
                doğayla derin bir bağ kurmanın yoludur.
              </p>
              <p className="text-amber-900/70 leading-relaxed mb-8">
                Modern arıcılık teknikleri, arı biyolojisi ve kovan yönetimi hakkında 
                kapsamlı bilgileri keşfedin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/beekeeping">
                  <button className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-xl transition-all">
                    Arıcılığı Keşfet
                    <ArrowRight size={16} />
                  </button>
                </Link>
                <Link href="/how-honey-is-made">
                  <button className="inline-flex items-center gap-2 border border-amber-200 text-amber-700 font-medium px-6 py-3 rounded-xl hover:bg-amber-50 transition-all">
                    Bal Nasıl Üretilir?
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
