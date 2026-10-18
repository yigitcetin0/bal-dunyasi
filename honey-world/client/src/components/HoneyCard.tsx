/**
 * HoneyCard — Bal Türü Kartı
 * Design: Organik Modernizm — Kehribar tonları, petek motifi, hover animasyonu
 */

import { Link } from "wouter";
import { MapPin, Leaf, Star } from "lucide-react";
import type { HoneyType } from "@/data/honeyTypes";
import { colorLabels, intensityLabels, regionLabels, rarityLabels } from "@/data/honeyTypes";

interface HoneyCardProps {
  honey: HoneyType;
  compact?: boolean;
}

const intensityColors: Record<string, string> = {
  mild: "bg-amber-100 text-amber-700",
  medium: "bg-amber-200 text-amber-800",
  strong: "bg-amber-400 text-amber-950",
  "very-strong": "bg-amber-700 text-amber-50",
};

const rarityColors: Record<string, string> = {
  common: "text-green-600",
  uncommon: "text-amber-600",
  rare: "text-orange-600",
  "very-rare": "text-red-600",
};

export default function HoneyCard({ honey, compact = false }: HoneyCardProps) {
  return (
    <Link href={`/honey/${honey.id}`}>
      <div className="honey-card bg-white rounded-2xl overflow-hidden border border-amber-100 shadow-sm cursor-pointer group h-full flex flex-col">
        {/* Image */}
        <div className="relative overflow-hidden" style={{ height: compact ? "160px" : "200px" }}>
          <img
            src={honey.image || "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80"}
            alt={honey.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/60 via-transparent to-transparent" />

          {/* Featured badge */}
          {honey.featured && (
            <div className="absolute top-3 left-3 bg-amber-400 text-amber-950 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
              <Star size={10} fill="currentColor" />
              Öne Çıkan
            </div>
          )}

          {/* Rarity badge */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full">
            <span className={rarityColors[honey.production.rarity]}>
              {rarityLabels[honey.production.rarity]}
            </span>
          </div>

          {/* Color swatch */}
          <div
            className="absolute bottom-3 right-3 w-6 h-6 rounded-full border-2 border-white shadow-md"
            style={{ backgroundColor: honey.appearance.colorHex }}
            title={colorLabels[honey.appearance.color]}
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-['Playfair_Display'] font-bold text-amber-950 text-lg leading-tight mb-1 group-hover:text-amber-700 transition-colors">
            {honey.name}
          </h3>

          {honey.localName && (
            <p className="text-xs text-amber-500 italic mb-2">{honey.localName}</p>
          )}

          <div className="flex items-center gap-1 text-xs text-amber-700/70 mb-3">
            <MapPin size={12} />
            <span>{honey.origin.country}</span>
            <span className="mx-1">·</span>
            <span>{regionLabels[honey.origin.continent]}</span>
          </div>

          {!compact && (
            <p className="text-sm text-amber-900/70 leading-relaxed line-clamp-2 mb-3 flex-1">
              {honey.description}
            </p>
          )}

          <div className="flex items-center justify-between mt-auto pt-3 border-t border-amber-50">
            <div className="flex items-center gap-1 text-xs text-amber-700">
              <Leaf size={12} />
              <span>{honey.plant.name}</span>
            </div>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${intensityColors[honey.taste.intensity]}`}>
              {intensityLabels[honey.taste.intensity]}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
