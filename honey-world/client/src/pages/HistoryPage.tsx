/**
 * HistoryPage — Balın Tarih Boyunca Kullanımı
 * Design: Organik Modernizm
 */

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const HISTORY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663428903010/WuWtjLcGduxVfVfKmDLURD/honey-history-LyzsHCx3SdrLMkg64PSoxs.webp";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663428903010/WuWtjLcGduxVfVfKmDLURD/honey-hero-bg-EbNZdz7nZ75heYiJutJ62E.webp";

const timeline = [
  {
    period: "M.Ö. 8.000",
    title: "İlk Arıcılık Kanıtları",
    location: "İspanya, Valencia",
    description:
      "Cueva de la Araña (Örümcek Mağarası) duvar resimleri, insanların vahşi arı kovanlarından bal topladığını gösteren en eski görsel kanıtlardır. Bu resimler, insanlığın balla ilişkisinin en az 10.000 yıl öncesine dayandığını ortaya koyar.",
    emoji: "🎨",
  },
  {
    period: "M.Ö. 3.000",
    title: "Antik Mısır'da Bal",
    location: "Mısır",
    description:
      "Mısırlılar, dünyada bilinen ilk organize arıcılığı geliştirdi. Bal, firavunlara sunulan kutsal bir armağandı ve mezarlara bırakılırdı. Mısır hiyerogliflerinde arı, kraliyet sembolü olarak kullanılmıştır. Tutankhamun'un mezarında bulunan bal, 3.000 yıl sonra hâlâ tüketilebilir durumdaydı.",
    emoji: "⚱️",
  },
  {
    period: "M.Ö. 2.000",
    title: "Mezopotamya ve Sümerler",
    location: "Irak, Mezopotamya",
    description:
      "Sümer tabletlerinde bal, hem besin hem de ilaç olarak kayıtlıdır. Babil'de bal, değerli bir ticaret malıydı. Hammurabi Kanunları'nda arıcılığa ilişkin düzenlemeler yer almaktadır.",
    emoji: "📜",
  },
  {
    period: "M.Ö. 1.000",
    title: "Antik Yunan ve Roma",
    location: "Yunanistan, Roma",
    description:
      "Hipokrat, balı yara tedavisinde kullanmıştır. Aristoteles, arı biyolojisini kapsamlı biçimde incelemiştir. Romalılar, balı şeker yerine kullanmış ve mead (bal şarabı) üretmiştir. Vergilius, Georgica adlı eserinde arıcılığa dair ayrıntılı bilgiler vermiştir.",
    emoji: "🏛️",
  },
  {
    period: "M.S. 500-1500",
    title: "Orta Çağ Avrupası",
    location: "Avrupa",
    description:
      "Orta Çağ'da bal, şekerin bulunmaması nedeniyle birincil tatlandırıcıydı. Manastırlar, arıcılığın merkezi haline geldi. Balmumu, mum yapımında kullanılarak kiliselerde büyük önem taşıdı. Mead, Avrupa'nın en yaygın alkollü içeceğiydi.",
    emoji: "⛪",
  },
  {
    period: "1851",
    title: "Modern Arıcılığın Doğuşu",
    location: "ABD",
    description:
      "Lorenzo Langstroth, hareketli çerçeveli kovanı icat etti. Bu buluş, modern arıcılığı tamamen dönüştürdü; arıları rahatsız etmeden bal hasatını mümkün kıldı ve arıcılığı endüstriyel ölçeğe taşıdı.",
    emoji: "🔬",
  },
  {
    period: "Günümüz",
    title: "Küresel Bal Endüstrisi",
    location: "Dünya Geneli",
    description:
      "Dünya genelinde yılda yaklaşık 1.8 milyon ton bal üretilmektedir. Çin, Türkiye, Arjantin ve ABD en büyük üreticilerdir. Ancak arı popülasyonlarındaki düşüş (Colony Collapse Disorder), küresel gıda güvenliği için ciddi bir tehdit oluşturmaktadır.",
    emoji: "🌍",
  },
];

const culturalUses = [
  { culture: "Antik Mısır", use: "Tanrılara sunulan kutsal armağan, mumyalama maddesi", emoji: "🇪🇬" },
  { culture: "Yunan Mitolojisi", use: "Tanrıların yiyeceği 'ambrosia'nın temel bileşeni", emoji: "🏛️" },
  { culture: "Hinduizm", use: "Panchamrita (beş kutsal madde) arasında yer alır", emoji: "🕉️" },
  { culture: "İslam", use: "Kuran'da şifa kaynağı olarak zikredilir (Nahl Suresi)", emoji: "☪️" },
  { culture: "Yahudi Geleneği", use: "Yeni Yıl'da (Rosh Hashanah) tatlı bir yıl dileğiyle tüketilir", emoji: "✡️" },
  { culture: "Çin Tıbbı", use: "3.000 yıldır sindirim ve enerji için kullanılır", emoji: "🐉" },
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-amber-50 pt-16">
      {/* Header */}
      <div
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: `url(${HISTORY_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-amber-950/80" />
        <div className="honeycomb-bg absolute inset-0 opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-3 block">
            Tarih
          </span>
          <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-amber-50 mb-4">
            Balın Tarihi
          </h1>
          <p className="text-amber-100/70 max-w-2xl text-lg">
            10.000 yıllık bir yolculuk — insanlığın balla ilişkisi, 
            medeniyetlerin doğuşuyla birlikte şekillenmiştir.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Timeline */}
        <div className="mb-16">
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-amber-950 mb-10 text-center">
            Zaman Tüneli
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-amber-200 -translate-x-1/2 hidden sm:block" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col sm:flex-row gap-6 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className="sm:w-5/12">
                    <div className="bg-white border border-amber-100 rounded-2xl p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{item.emoji}</span>
                        <div>
                          <div className="text-amber-600 text-xs font-semibold uppercase tracking-wider">
                            {item.period}
                          </div>
                          <div className="text-amber-500/60 text-xs">{item.location}</div>
                        </div>
                      </div>
                      <h3 className="font-['Playfair_Display'] font-bold text-amber-950 text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-amber-900/70 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden sm:flex sm:w-2/12 items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-amber-400 border-4 border-amber-100 shadow-md z-10" />
                  </div>

                  {/* Spacer */}
                  <div className="sm:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cultural Uses */}
        <div className="mb-12">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-amber-950 mb-8 text-center">
            Kültürel ve Dini Önemi
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {culturalUses.map((item, i) => (
              <div key={i} className="bg-white border border-amber-100 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{item.emoji}</span>
                  <h3 className="font-['Playfair_Display'] font-bold text-amber-950">{item.culture}</h3>
                </div>
                <p className="text-amber-900/70 text-sm leading-relaxed">{item.use}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div
          className="relative rounded-2xl overflow-hidden py-16 px-8 text-center"
          style={{
            backgroundImage: `url(${HERO_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-amber-950/80" />
          <div className="relative z-10">
            <blockquote className="font-['Playfair_Display'] text-2xl sm:text-3xl italic text-amber-100 max-w-3xl mx-auto mb-4">
              "Bal, doğanın insanlığa sunduğu en kadim armağandır. 
              İçinde hem geçmişin bilgeliğini hem de geleceğin umudunu taşır."
            </blockquote>
            <p className="text-amber-400 text-sm">— Arıcılık Geleneğinden</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/health">
            <button className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-xl transition-all">
              Balın Sağlık Etkileri
              <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
