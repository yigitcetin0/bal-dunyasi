/**
 * MapPage — Etkileşimli Dünya Haritası
 * Design: Organik Modernizm
 * Library: react-leaflet (Leaflet.js)
 * Features: Bölge markerları, tıklanabilir popup, bal türleri listesi, mouse hover animasyonları
 */

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, GeoJSON } from "react-leaflet";
import { divIcon, FeatureGroup } from "leaflet";
import { Link } from "wouter";
import { MapPin, X, ArrowRight, Leaf } from "lucide-react";
import { honeyTypes, mapRegions, regionLabels, colorLabels, intensityLabels } from "@/data/honeyTypes";
import type { HoneyType, Region } from "@/data/honeyTypes";
import L from "leaflet";

// Custom hex marker icon
function createHexMarker(count: number, isSelected: boolean) {
  return divIcon({
    html: `
      <div style="
        width: 56px; height: 56px;
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        background: ${isSelected ? "#FCD34D" : "#B45309"};
        display: flex; align-items: center; justify-content: center;
        color: ${isSelected ? "#78350F" : "#FEF3C7"};
        font-weight: bold; font-size: 16px;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        box-shadow: ${isSelected ? "0 8px 24px rgba(180,83,9,0.6)" : "0 4px 12px rgba(180,83,9,0.4)"};
        transform: ${isSelected ? "scale(1.15)" : "scale(1)"};
      ">
        ${count}
      </div>
    `,
    className: "honey-marker",
    iconSize: [56, 56],
    iconAnchor: [28, 28],
    popupAnchor: [0, -28],
  });
}

function createHoneyMarker(color: string) {
  return divIcon({
    html: `
      <div style="
        width: 36px; height: 36px;
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        background: ${color};
        border: 3px solid #B45309;
        cursor: pointer;
        transition: all 0.2s;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      "></div>
    `,
    className: "honey-detail-marker",
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -18],
  });
}

function MapController({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, { duration: 1.5 });
  }, [center, zoom, map]);
  return null;
}

// Bölge vurgulama için GeoJSON overlay
function RegionHighlight({ selectedRegion }: { selectedRegion: string | null }) {
  const map = useMap();

  useEffect(() => {
    if (!selectedRegion) return;

    const region = mapRegions.find((r) => r.id === selectedRegion);
    if (!region) return;

    // Seçili bölgenin etrafında bir daire çiz
    const circle = L.circle(region.coordinates, {
      color: "#B45309",
      weight: 3,
      opacity: 0.8,
      fill: true,
      fillColor: "#FCD34D",
      fillOpacity: 0.15,
      radius: 800000, // 800km
      dashArray: "5, 5",
      lineCap: "round",
      lineJoin: "round",
    });

    circle.addTo(map);

    return () => {
      map.removeLayer(circle);
    };
  }, [selectedRegion, map]);

  return null;
}

const regionColors: Record<Region, string> = {
  europe: "#3B82F6",
  "middle-east": "#EF4444",
  asia: "#8B5CF6",
  "north-america": "#10B981",
  "south-america": "#F59E0B",
  africa: "#F97316",
  oceania: "#06B6D4",
  mediterranean: "#EC4899",
};

export default function MapPage() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedHoney, setSelectedHoney] = useState<HoneyType | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([20, 0]);
  const [mapZoom, setMapZoom] = useState(2);
  const [showPanel, setShowPanel] = useState(false);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const regionHoneys = selectedRegion
    ? honeyTypes.filter((h) => h.origin.continent === selectedRegion)
    : [];

  function handleRegionClick(regionId: string, coordinates: [number, number]) {
    setSelectedRegion(regionId);
    setSelectedHoney(null);
    setMapCenter(coordinates);
    setMapZoom(4);
    setShowPanel(true);
  }

  function handleHoneyClick(honey: HoneyType) {
    setSelectedHoney(honey);
    setMapCenter(honey.origin.coordinates);
    setMapZoom(5);
  }

  function closePanel() {
    setShowPanel(false);
    setSelectedRegion(null);
    setSelectedHoney(null);
    setMapCenter([20, 0]);
    setMapZoom(2);
  }

  return (
    <div className="min-h-screen bg-amber-950 pt-16">
      <style>{`
        @keyframes pulseMarker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .honey-marker {
          animation: pulseMarker 2s ease-in-out infinite;
        }
        .honey-detail-marker:hover {
          filter: drop-shadow(0 0 8px rgba(180, 83, 9, 0.8));
        }
      `}</style>

      {/* Header */}
      <div className="bg-amber-950 py-10 px-4 sm:px-6 lg:px-8 honeycomb-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <MapPin className="text-amber-400" size={24} />
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">
              Etkileşimli Harita
            </span>
          </div>
          <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-amber-50 mb-3">
            Dünya Bal Haritası
          </h1>
          <p className="text-amber-100/60 max-w-2xl">
            Haritadaki bölgelere tıklayarak o coğrafyaya özgü bal türlerini keşfedin. 
            Her altıgen, o bölgedeki bal çeşidi sayısını göstermektedir.
          </p>
        </div>
      </div>

      {/* Map + Panel Layout */}
      <div className="relative" style={{ height: "calc(100vh - 200px)", minHeight: "500px" }}>
        {/* Map */}
        <MapContainer
          center={mapCenter}
          zoom={mapZoom}
          style={{ height: "100%", width: "100%", zIndex: 0 }}
          zoomControl={true}
          scrollWheelZoom={true}
        >
          <MapController center={mapCenter} zoom={mapZoom} />
          <RegionHighlight selectedRegion={selectedRegion} />

          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          />

          {/* Region markers */}
          {mapRegions.map((region) => (
            <Marker
              key={region.id}
              position={region.coordinates}
              icon={createHexMarker(
                region.honeyCount,
                selectedRegion === region.id || hoveredRegion === region.id
              )}
              eventHandlers={{
                click: () => handleRegionClick(region.id, region.coordinates),
                mouseover: () => setHoveredRegion(region.id),
                mouseout: () => setHoveredRegion(null),
              }}
            >
              <Popup>
                <div className="p-2 min-w-[200px]">
                  <h3 className="font-['Playfair_Display'] font-bold text-amber-900 text-base mb-1">
                    {region.name}
                  </h3>
                  <p className="text-amber-700/70 text-xs mb-2">{region.description}</p>
                  <div className="flex items-center gap-1 text-amber-600 text-xs font-medium">
                    <span className="w-5 h-5 hexagon bg-amber-400 flex items-center justify-center text-amber-950 text-xs font-bold">
                      {region.honeyCount}
                    </span>
                    bal türü
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}

          {/* Individual honey markers when region is selected */}
          {selectedRegion &&
            regionHoneys.map((honey) => (
              <Marker
                key={honey.id}
                position={honey.origin.coordinates}
                icon={createHoneyMarker(honey.appearance.colorHex)}
                eventHandlers={{
                  click: () => handleHoneyClick(honey),
                }}
              >
                <Popup>
                  <div className="p-2 min-w-[180px]">
                    <h4 className="font-['Playfair_Display'] font-bold text-amber-900 text-sm mb-1">
                      {honey.name}
                    </h4>
                    <p className="text-amber-700/70 text-xs mb-2">{honey.origin.country}</p>
                    <Link href={`/honey/${honey.id}`}>
                      <span className="text-amber-600 text-xs font-medium hover:text-amber-500 flex items-center gap-1">
                        Detayları Gör <ArrowRight size={10} />
                      </span>
                    </Link>
                  </div>
                </Popup>
              </Marker>
            ))}
        </MapContainer>

        {/* Side Panel */}
        {showPanel && selectedRegion && (
          <div className="absolute top-0 right-0 h-full w-full sm:w-96 bg-white/98 backdrop-blur-md shadow-2xl z-10 overflow-y-auto animate-in slide-in-from-right">
            <div className="sticky top-0 bg-amber-950 p-4 flex items-center justify-between">
              <div>
                <h3 className="font-['Playfair_Display'] font-bold text-amber-50 text-lg">
                  {regionLabels[selectedRegion as Region] || selectedRegion}
                </h3>
                <p className="text-amber-400 text-xs">{regionHoneys.length} bal türü</p>
              </div>
              <button
                onClick={closePanel}
                className="p-2 rounded-lg text-amber-300 hover:bg-amber-800/50 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-4">
              {/* Region description */}
              {mapRegions.find((r) => r.id === selectedRegion) && (
                <p className="text-amber-900/70 text-sm leading-relaxed mb-6 p-3 bg-amber-50 rounded-xl">
                  {mapRegions.find((r) => r.id === selectedRegion)?.description}
                </p>
              )}

              {/* Honey list */}
              <div className="space-y-3">
                {regionHoneys.map((honey) => (
                  <div
                    key={honey.id}
                    className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                      selectedHoney?.id === honey.id
                        ? "border-amber-400 bg-amber-50 shadow-md"
                        : "border-amber-100 hover:border-amber-300 hover:bg-amber-50/50"
                    }`}
                    onClick={() => handleHoneyClick(honey)}
                  >
                    <div className="flex items-start gap-3">
                      <img
                        src={honey.image || "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=200&q=60"}
                        alt={honey.name}
                        className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-['Playfair_Display'] font-bold text-amber-950 text-sm leading-tight mb-0.5">
                          {honey.name}
                        </h4>
                        <p className="text-amber-600/70 text-xs mb-1">{honey.origin.country}</p>
                        <div className="flex items-center gap-1 text-amber-700/60 text-xs">
                          <Leaf size={10} />
                          <span className="truncate">{honey.plant.name}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <div
                            className="w-3 h-3 rounded-full border border-amber-200"
                            style={{ backgroundColor: honey.appearance.colorHex }}
                          />
                          <span className="text-xs text-amber-700/60">
                            {colorLabels[honey.appearance.color]}
                          </span>
                          <span className="text-xs text-amber-500">·</span>
                          <span className="text-xs text-amber-700/60">
                            {intensityLabels[honey.taste.intensity]}
                          </span>
                        </div>
                      </div>
                    </div>

                    {selectedHoney?.id === honey.id && (
                      <div className="mt-3 pt-3 border-t border-amber-200">
                        <p className="text-amber-900/70 text-xs leading-relaxed line-clamp-2 mb-2">
                          {honey.description}
                        </p>
                        <Link href={`/honey/${honey.id}`}>
                          <span className="inline-flex items-center gap-1 text-amber-600 text-xs font-medium hover:text-amber-500">
                            Detaylı Bilgi <ArrowRight size={10} />
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {regionHoneys.length === 0 && (
                <div className="text-center py-8 text-amber-700/50">
                  <p className="text-sm">Bu bölge için henüz bal türü eklenmemiş.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg z-10 max-w-xs">
          <p className="text-amber-950 text-xs font-semibold mb-2">Bölgeler</p>
          <div className="grid grid-cols-2 gap-1">
            {mapRegions.map((region) => (
              <button
                key={region.id}
                onClick={() => handleRegionClick(region.id, region.coordinates)}
                className={`flex items-center gap-1.5 text-xs px-2 py-1 rounded-lg transition-colors ${
                  selectedRegion === region.id
                    ? "bg-amber-100 text-amber-800"
                    : "text-amber-700/70 hover:bg-amber-50"
                }`}
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: regionColors[region.continent] }}
                />
                {region.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
