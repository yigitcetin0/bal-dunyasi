/**
 * HoneyTypesPage — Bal Türleri Kataloğu
 * Design: Organik Modernizm
 * Features: Arama, bölge/renk/yoğunluk filtreleme, grid görünüm
 */

import { useState, useMemo } from "react";
import { Search, Filter, X, Grid3X3, List } from "lucide-react";
import {
  honeyTypes,
  filterHoneys,
  colorLabels,
  intensityLabels,
  regionLabels,
} from "@/data/honeyTypes";
import type { HoneyColor, TasteIntensity, Region } from "@/data/honeyTypes";
import HoneyCard from "@/components/HoneyCard";

const VARIETIES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663428903010/WuWtjLcGduxVfVfKmDLURD/honey-varieties-4pHWPzo7MmhTpAEprynZPg.webp";

export default function HoneyTypesPage() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState<Region | "">("");
  const [color, setColor] = useState<HoneyColor | "">("");
  const [intensity, setIntensity] = useState<TasteIntensity | "">("");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filtered = useMemo(
    () => filterHoneys({ search, region, color, intensity }),
    [search, region, color, intensity]
  );

  const activeFilterCount = [region, color, intensity].filter(Boolean).length;

  function clearFilters() {
    setSearch("");
    setRegion("");
    setColor("");
    setIntensity("");
  }

  // Unique plant types from data
  const plantTypes = useMemo(() => {
    const types = new Set(honeyTypes.map((h) => h.plant.type));
    return Array.from(types);
  }, []);

  return (
    <div className="min-h-screen bg-amber-50 pt-16">
      {/* Header */}
      <div
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: `url(${VARIETIES_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-amber-950/80" />
        <div className="honeycomb-bg absolute inset-0 opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-3 block">
            Katalog
          </span>
          <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-amber-50 mb-4">
            Bal Türleri
          </h1>
          <p className="text-amber-100/70 max-w-2xl text-lg">
            Dünyanın dört bir yanından gelen {honeyTypes.length} bal türünü keşfedin. 
            Arama ve filtreler ile istediğiniz balı kolayca bulun.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400" size={18} />
              <input
                type="text"
                placeholder="Bal adı, ülke veya bitki ara..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-amber-200 bg-amber-50/50 text-amber-950 placeholder-amber-400/60 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-sm"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-400 hover:text-amber-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                showFilters || activeFilterCount > 0
                  ? "bg-amber-600 border-amber-600 text-white"
                  : "border-amber-200 text-amber-700 hover:bg-amber-50"
              }`}
            >
              <Filter size={16} />
              Filtrele
              {activeFilterCount > 0 && (
                <span className="bg-white text-amber-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* View mode */}
            <div className="flex rounded-xl border border-amber-200 overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2.5 transition-colors ${viewMode === "grid" ? "bg-amber-600 text-white" : "text-amber-600 hover:bg-amber-50"}`}
              >
                <Grid3X3 size={16} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2.5 transition-colors ${viewMode === "list" ? "bg-amber-600 text-white" : "text-amber-600 hover:bg-amber-50"}`}
              >
                <List size={16} />
              </button>
            </div>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-amber-100 grid sm:grid-cols-3 gap-4">
              {/* Region filter */}
              <div>
                <label className="text-xs font-medium text-amber-700 mb-1.5 block">Bölge</label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value as Region | "")}
                  className="w-full px-3 py-2 rounded-xl border border-amber-200 bg-amber-50/50 text-amber-950 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <option value="">Tüm Bölgeler</option>
                  {Object.entries(regionLabels).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>

              {/* Color filter */}
              <div>
                <label className="text-xs font-medium text-amber-700 mb-1.5 block">Renk</label>
                <select
                  value={color}
                  onChange={(e) => setColor(e.target.value as HoneyColor | "")}
                  className="w-full px-3 py-2 rounded-xl border border-amber-200 bg-amber-50/50 text-amber-950 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <option value="">Tüm Renkler</option>
                  {Object.entries(colorLabels).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>

              {/* Intensity filter */}
              <div>
                <label className="text-xs font-medium text-amber-700 mb-1.5 block">Tat Yoğunluğu</label>
                <select
                  value={intensity}
                  onChange={(e) => setIntensity(e.target.value as TasteIntensity | "")}
                  className="w-full px-3 py-2 rounded-xl border border-amber-200 bg-amber-50/50 text-amber-950 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <option value="">Tüm Yoğunluklar</option>
                  {Object.entries(intensityLabels).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Active filters + clear */}
          {(search || activeFilterCount > 0) && (
            <div className="mt-3 flex items-center justify-between">
              <p className="text-sm text-amber-700">
                <span className="font-semibold">{filtered.length}</span> sonuç bulundu
              </p>
              <button
                onClick={clearFilters}
                className="text-xs text-amber-600 hover:text-amber-800 flex items-center gap-1"
              >
                <X size={12} />
                Filtreleri Temizle
              </button>
            </div>
          )}
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🍯</div>
            <h3 className="font-['Playfair_Display'] text-2xl font-bold text-amber-950 mb-2">
              Sonuç Bulunamadı
            </h3>
            <p className="text-amber-700/60 mb-6">
              Arama kriterlerinize uygun bal türü bulunamadı.
            </p>
            <button
              onClick={clearFilters}
              className="bg-amber-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-amber-700 transition-colors"
            >
              Filtreleri Temizle
            </button>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((honey) => (
              <HoneyCard key={honey.id} honey={honey} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((honey) => (
              <div key={honey.id} className="bg-white rounded-2xl border border-amber-100 overflow-hidden honey-card">
                <div className="flex gap-4 p-4">
                  <img
                    src={honey.image || "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=200&q=60"}
                    alt={honey.name}
                    className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-['Playfair_Display'] font-bold text-amber-950 text-lg leading-tight">
                          {honey.name}
                        </h3>
                        {honey.localName && (
                          <p className="text-xs text-amber-500 italic">{honey.localName}</p>
                        )}
                      </div>
                      <div
                        className="w-5 h-5 rounded-full border-2 border-amber-200 flex-shrink-0 mt-1"
                        style={{ backgroundColor: honey.appearance.colorHex }}
                      />
                    </div>
                    <p className="text-amber-700/60 text-sm mt-1 mb-2">
                      {honey.origin.country} · {regionLabels[honey.origin.continent]}
                    </p>
                    <p className="text-amber-900/60 text-sm line-clamp-2">{honey.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {honey.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Category quick filters */}
        <div className="mt-12 bg-white rounded-2xl border border-amber-100 p-6">
          <h3 className="font-['Playfair_Display'] font-bold text-amber-950 text-xl mb-4">
            Bitki Türüne Göre
          </h3>
          <div className="flex flex-wrap gap-3">
            {plantTypes.map((type) => {
              const count = honeyTypes.filter((h) => h.plant.type === type).length;
              const labels: Record<string, string> = {
                flower: "🌸 Çiçek",
                tree: "🌳 Ağaç",
                shrub: "🌿 Çalı",
                herb: "🌱 Ot",
                mixed: "🌺 Karışık",
              };
              return (
                <button
                  key={type}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-sm hover:bg-amber-100 transition-colors"
                >
                  <span>{labels[type] || type}</span>
                  <span className="bg-amber-200 text-amber-800 text-xs rounded-full px-1.5 py-0.5 font-medium">
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
