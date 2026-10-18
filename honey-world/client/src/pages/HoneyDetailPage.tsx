/**
 * HoneyDetailPage — Bal Türü Detay Sayfası
 * Design: Organik Modernizm
 * Features: Tam bilgi, sağlık faydaları, tat profili, benzer ballar
 */

import { Link, useParams } from "wouter";
import { ArrowLeft, MapPin, Leaf, Droplets, Star, Calendar, Globe, Shield } from "lucide-react";
import {
  getHoneyById,
  honeyTypes,
  colorLabels,
  intensityLabels,
  regionLabels,
  rarityLabels,
} from "@/data/honeyTypes";
import HoneyCard from "@/components/HoneyCard";

const antioxidantColors: Record<string, string> = {
  low: "bg-green-100 text-green-700",
  medium: "bg-amber-100 text-amber-700",
  high: "bg-orange-100 text-orange-700",
  "very-high": "bg-red-100 text-red-700",
};

const antioxidantLabels: Record<string, string> = {
  low: "Düşük",
  medium: "Orta",
  high: "Yüksek",
  "very-high": "Çok Yüksek",
};

const consistencyLabels: Record<string, string> = {
  liquid: "Sıvı",
  "semi-liquid": "Yarı Sıvı",
  creamy: "Kremsi",
  crystallized: "Kristalize",
};

const crystallizationLabels: Record<string, string> = {
  slow: "Yavaş",
  medium: "Orta",
  fast: "Hızlı",
};

const plantTypeLabels: Record<string, string> = {
  flower: "Çiçek",
  tree: "Ağaç",
  shrub: "Çalı",
  herb: "Ot",
  mixed: "Karışık",
};

export default function HoneyDetailPage() {
  const params = useParams<{ id: string }>();
  const honey = getHoneyById(params.id);

  if (!honey) {
    return (
      <div className="min-h-screen bg-amber-50 pt-16 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🍯</div>
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-amber-950 mb-2">
            Bal Türü Bulunamadı
          </h2>
          <p className="text-amber-700/60 mb-6">Aradığınız bal türü mevcut değil.</p>
          <Link href="/honey-types">
            <button className="bg-amber-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-amber-700 transition-colors">
              Tüm Bal Türleri
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const similarHoneys = honeyTypes
    .filter((h) => h.id !== honey.id && h.origin.continent === honey.origin.continent)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-amber-50 pt-16">
      {/* Hero */}
      <div className="relative h-72 sm:h-96 overflow-hidden">
        <img
          src={honey.image || "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1200&q=80"}
          alt={honey.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-950/90 via-amber-950/40 to-transparent" />

        {/* Back button */}
        <div className="absolute top-6 left-4 sm:left-8">
          <Link href="/honey-types">
            <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/30 transition-colors">
              <ArrowLeft size={16} />
              Geri Dön
            </button>
          </Link>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="max-w-7xl mx-auto">
            {honey.featured && (
              <div className="inline-flex items-center gap-1 bg-amber-400 text-amber-950 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                <Star size={10} fill="currentColor" />
                Öne Çıkan Bal
              </div>
            )}
            <h1 className="font-['Playfair_Display'] text-3xl sm:text-5xl font-bold text-amber-50 mb-1">
              {honey.name}
            </h1>
            {honey.localName && (
              <p className="text-amber-300 italic text-lg">{honey.localName}</p>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-2xl p-6 border border-amber-100">
              <h2 className="font-['Playfair_Display'] font-bold text-amber-950 text-2xl mb-4">
                Hakkında
              </h2>
              <p className="text-amber-900/70 leading-relaxed text-base">{honey.description}</p>
            </div>

            {/* Taste Profile */}
            <div className="bg-white rounded-2xl p-6 border border-amber-100">
              <h2 className="font-['Playfair_Display'] font-bold text-amber-950 text-2xl mb-4">
                Tat Profili
              </h2>
              <p className="text-amber-900/70 leading-relaxed mb-4">{honey.taste.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {honey.taste.profile.map((note) => (
                  <span
                    key={note}
                    className="px-3 py-1.5 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                  >
                    {note}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-amber-700/60">Yoğunluk:</span>
                <div className="flex gap-1">
                  {["mild", "medium", "strong", "very-strong"].map((level, i) => {
                    const levels = ["mild", "medium", "strong", "very-strong"];
                    const currentIndex = levels.indexOf(honey.taste.intensity);
                    return (
                      <div
                        key={level}
                        className={`h-2 w-8 rounded-full transition-colors ${
                          i <= currentIndex ? "bg-amber-500" : "bg-amber-100"
                        }`}
                      />
                    );
                  })}
                </div>
                <span className="text-sm font-medium text-amber-700">
                  {intensityLabels[honey.taste.intensity]}
                </span>
              </div>
            </div>

            {/* Health Benefits */}
            <div className="bg-white rounded-2xl p-6 border border-amber-100">
              <h2 className="font-['Playfair_Display'] font-bold text-amber-950 text-2xl mb-4">
                Sağlık Faydaları
              </h2>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {honey.health.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 bg-amber-50 rounded-xl">
                    <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Shield size={10} className="text-amber-950" />
                    </div>
                    <span className="text-sm text-amber-900/80">{benefit}</span>
                  </div>
                ))}
              </div>

              {honey.health.traditionalUses.length > 0 && (
                <div>
                  <h3 className="font-semibold text-amber-950 text-sm mb-2">Geleneksel Kullanımlar</h3>
                  <ul className="space-y-1">
                    {honey.health.traditionalUses.map((use, i) => (
                      <li key={i} className="text-sm text-amber-700/70 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-white rounded-2xl p-6 border border-amber-100">
              <h3 className="font-['Playfair_Display'] font-bold text-amber-950 text-lg mb-4">
                Hızlı Bilgi
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-amber-500 mt-0.5 flex-shrink-0" size={16} />
                  <div>
                    <div className="text-xs text-amber-600/70 mb-0.5">Köken</div>
                    <div className="text-sm font-medium text-amber-950">{honey.origin.country}</div>
                    <div className="text-xs text-amber-700/60">{honey.origin.region}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="text-amber-500 mt-0.5 flex-shrink-0" size={16} />
                  <div>
                    <div className="text-xs text-amber-600/70 mb-0.5">Kıta</div>
                    <div className="text-sm font-medium text-amber-950">
                      {regionLabels[honey.origin.continent]}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Leaf className="text-amber-500 mt-0.5 flex-shrink-0" size={16} />
                  <div>
                    <div className="text-xs text-amber-600/70 mb-0.5">Bitki Kaynağı</div>
                    <div className="text-sm font-medium text-amber-950">{honey.plant.name}</div>
                    {honey.plant.scientificName && (
                      <div className="text-xs text-amber-700/60 italic">{honey.plant.scientificName}</div>
                    )}
                    <div className="text-xs text-amber-600/60 mt-0.5">
                      {plantTypeLabels[honey.plant.type]}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Droplets className="text-amber-500 mt-0.5 flex-shrink-0" size={16} />
                  <div>
                    <div className="text-xs text-amber-600/70 mb-0.5">Görünüm</div>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded-full border border-amber-200"
                        style={{ backgroundColor: honey.appearance.colorHex }}
                      />
                      <span className="text-sm font-medium text-amber-950">
                        {colorLabels[honey.appearance.color]}
                      </span>
                    </div>
                    <div className="text-xs text-amber-700/60 mt-0.5">
                      {consistencyLabels[honey.appearance.consistency]}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="text-amber-500 mt-0.5 flex-shrink-0" size={16} />
                  <div>
                    <div className="text-xs text-amber-600/70 mb-0.5">Hasat Mevsimi</div>
                    <div className="text-sm font-medium text-amber-950">
                      {honey.production.season.join(", ")}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Properties */}
            <div className="bg-white rounded-2xl p-6 border border-amber-100">
              <h3 className="font-['Playfair_Display'] font-bold text-amber-950 text-lg mb-4">
                Özellikler
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-amber-700/70">Nadirlik</span>
                  <span className="text-sm font-medium text-amber-950">
                    {rarityLabels[honey.production.rarity]}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-amber-700/70">Antioksidan</span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${antioxidantColors[honey.health.antioxidantLevel]}`}>
                    {antioxidantLabels[honey.health.antioxidantLevel]}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-amber-700/70">Antibakteriyel</span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${honey.health.antibacterialActivity ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                    {honey.health.antibacterialActivity ? "Evet" : "Hayır"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-amber-700/70">Kristalleşme</span>
                  <span className="text-sm font-medium text-amber-950">
                    {crystallizationLabels[honey.appearance.crystallizationRate]}
                  </span>
                </div>
                {honey.production.annualProduction && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-amber-700/70">Üretim</span>
                    <span className="text-sm font-medium text-amber-950 text-right max-w-[150px]">
                      {honey.production.annualProduction}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-2xl p-6 border border-amber-100">
              <h3 className="font-['Playfair_Display'] font-bold text-amber-950 text-lg mb-3">
                Etiketler
              </h3>
              <div className="flex flex-wrap gap-2">
                {honey.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Similar Honeys */}
        {similarHoneys.length > 0 && (
          <div className="mt-12">
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-amber-950 mb-6">
              Aynı Bölgeden Diğer Ballar
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarHoneys.map((h) => (
                <HoneyCard key={h.id} honey={h} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
