/**
 * HowHoneyIsMadePage — Bal Nasıl Üretilir?
 * Design: Organik Modernizm
 */

import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const HONEYCOMB_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663428903010/WuWtjLcGduxVfVfKmDLURD/honeycomb-texture-4aXZk4swHL6LjpF4sEJVNF.webp";
const BEEKEEPER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663428903010/WuWtjLcGduxVfVfKmDLURD/beekeeper-field-J7YVRrq89vjpJJcgWeqC7v.webp";

const steps = [
  {
    number: "01",
    title: "Nektar Toplama",
    emoji: "🌸",
    description:
      "İşçi arılar, çiçeklerin nektarını uzun hortumları (proboscis) ile emer. Bir arı, tek bir uçuşta 50-100 çiçeği ziyaret eder ve yaklaşık 40 mg nektar toplar. Bu süreçte arı, çiçekten çiçeğe taşınan polenle bitkilerin tozlaşmasına da katkıda bulunur.",
    detail:
      "Bir kilo bal üretmek için arıların yaklaşık 2-3 milyon çiçeği ziyaret etmesi ve 80.000 km uçması gerekir.",
    color: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    number: "02",
    title: "Enzim Dönüşümü",
    emoji: "⚗️",
    description:
      "Arı, topladığı nektarı bal kesesinde (honey stomach) taşır. Bu süreçte tükürük bezlerinden salgılanan invertaz enzimi, nektardaki sakaroz şekerini fruktoz ve glikoza dönüştürmeye başlar.",
    detail:
      "Nektar kovana ulaştığında, işçi arılar onu birbirlerine aktararak enzim dönüşümünü hızlandırır.",
    color: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    number: "03",
    title: "Su Buharlaştırma",
    emoji: "💨",
    description:
      "Kovana getirilen nektar, başlangıçta %80 su içerir. Arılar kanatlarıyla hava akımı yaratarak ve nektarı ince tabakalar halinde yayarak su içeriğini %17-20'ye düşürür. Bu süreç 1-3 gün sürer.",
    detail:
      "Su içeriğinin %20'nin altına düşmesi, balın bozulmamasını sağlayan kritik bir eşiktir.",
    color: "bg-yellow-50",
    border: "border-yellow-200",
  },
  {
    number: "04",
    title: "Petek Mühürleme",
    emoji: "🔒",
    description:
      "Bal olgunlaştığında, arılar petekleri balmumu ile kapatır (mühürler). Bu balmumu kapağı, balı dış ortamdan izole eder ve uzun süre saklanmasını sağlar. Mühürlenmiş bal, teorik olarak sonsuza kadar bozulmaz.",
    detail:
      "Mısır piramitlerinde bulunan 3.000 yıllık bal, hâlâ tüketilebilir durumdaydı.",
    color: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    number: "05",
    title: "Hasat ve Süzme",
    emoji: "🍯",
    description:
      "Arıcılar, mühürlenmiş petekleri kovanlardan alır. Balmumu kapakları özel bir bıçakla açılır ve petekler santrifüj (bal süzgeci) makinesinde döndürülerek bal ayrıştırılır. Ham bal süzgeçten geçirilerek balmumu parçaları temizlenir.",
    detail:
      "Geleneksel yöntemlerde bal, petekten elle sıkılarak elde edilirdi. Modern arıcılık santrifüj teknolojisini kullanır.",
    color: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    number: "06",
    title: "Dinlendirme ve Ambalaj",
    emoji: "📦",
    description:
      "Süzülen bal, hava kabarcıklarının çıkması için birkaç gün dinlendirilir. Ardından kalite kontrol testlerinden geçirilir ve uygun kaplara doldurulur. Bazı premium ballar, doğal kristalleşme sürecine bırakılır.",
    detail:
      "Ham bal, pastörizasyon yapılmadan doğal enzim ve antioksidanlarını korur.",
    color: "bg-yellow-50",
    border: "border-yellow-200",
  },
];

const honeyFacts = [
  { emoji: "🐝", fact: "Bir işçi arı, ömrü boyunca sadece 1/12 çay kaşığı bal üretir." },
  { emoji: "🌡️", fact: "Bal, -18°C ile +50°C arasında kalite kaybetmeden saklanabilir." },
  { emoji: "⚗️", fact: "Balın pH değeri 3.2-4.5 arasındadır; bu asidik yapı bakterilerin üremesini engeller." },
  { emoji: "💧", fact: "Bal, %17-20 su içerir. Bu oran arttığında bal fermente olabilir." },
  { emoji: "🔬", fact: "Balda 200'den fazla farklı bileşik bulunmaktadır." },
  { emoji: "♾️", fact: "Doğru saklandığında bal hiç bozulmaz — teorik raf ömrü sonsuzdur." },
];

export default function HowHoneyIsMadePage() {
  return (
    <div className="min-h-screen bg-amber-50 pt-16">
      {/* Header */}
      <div
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: `url(${HONEYCOMB_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-amber-950/80" />
        <div className="honeycomb-bg absolute inset-0 opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-3 block">
            Üretim Süreci
          </span>
          <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-amber-50 mb-4">
            Bal Nasıl Üretilir?
          </h1>
          <p className="text-amber-100/70 max-w-2xl text-lg">
            Bir çiçeğin nektarından kavanoza uzanan bu mucizevi yolculuğu, 
            milyonlarca yıllık evrimsel mükemmeliyetin ürünüdür.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Steps */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-amber-950 mb-3">
              Üretim Aşamaları
            </h2>
            <p className="text-amber-900/60 max-w-xl mx-auto">
              Nektar toplamadan kavanoza uzanan 6 temel aşama
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`${step.color} border ${step.border} rounded-2xl p-6 sm:p-8`}
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-4">
                      <span className="font-['Playfair_Display'] text-4xl font-bold text-amber-300/60">
                        {step.number}
                      </span>
                      <span className="text-4xl">{step.emoji}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['Playfair_Display'] font-bold text-amber-950 text-xl mb-3">
                      {step.title}
                    </h3>
                    <p className="text-amber-900/70 leading-relaxed mb-3">{step.description}</p>
                    <div className="bg-amber-950/5 rounded-xl p-3 border-l-4 border-amber-400">
                      <p className="text-amber-800 text-sm italic">{step.detail}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interesting Facts */}
        <div className="bg-amber-950 rounded-2xl p-8 sm:p-10 mb-12 honeycomb-bg">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-amber-50 mb-8 text-center">
            İlginç Gerçekler
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {honeyFacts.map((item, i) => (
              <div key={i} className="bg-amber-900/40 border border-amber-700/30 rounded-xl p-4">
                <span className="text-2xl block mb-2">{item.emoji}</span>
                <p className="text-amber-100/80 text-sm leading-relaxed">{item.fact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Beekeeper section */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-amber-950 mb-4">
              Arıcının Rolü
            </h2>
            <p className="text-amber-900/70 leading-relaxed mb-4">
              Modern arıcılık, arıların doğal yaşam döngüsüne saygı göstererek 
              sürdürülebilir bal üretimini mümkün kılar. Arıcılar, kovan sağlığını 
              düzenli olarak kontrol eder, hastalıkları önler ve arıların ihtiyaç 
              duyduğu besinleri sağlar.
            </p>
            <p className="text-amber-900/70 leading-relaxed mb-6">
              Etik arıcılık, arı kolonisinin ihtiyaçlarını ön planda tutarak 
              yalnızca fazla üretilen balı hasat eder. Bu yaklaşım, hem arı 
              sağlığını hem de bal kalitesini güvence altına alır.
            </p>
            <Link href="/beekeeping">
              <button className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-xl transition-all">
                Arıcılık Hakkında Daha Fazla
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl shadow-amber-900/10">
            <img
              src={BEEKEEPER_IMG}
              alt="Arıcı kovan başında"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
