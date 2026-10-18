/**
 * Footer — Bal Dünyası
 * Design: Organik Modernizm
 */

import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-100/80">
      <div className="honeycomb-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 hexagon bg-amber-400 flex items-center justify-center text-amber-950 text-lg">
                  🍯
                </div>
                <div>
                  <span className="font-['Playfair_Display'] font-bold text-xl text-amber-100 block">
                    Bal Dünyası
                  </span>
                  <span className="text-amber-400 text-xs tracking-widest uppercase">
                    Dünyanın Tatları
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-amber-100/60 max-w-sm">
                Dünyanın dört bir yanından gelen eşsiz bal türlerini keşfedin. 
                Arıların binlerce yıllık hikayesini, doğanın en tatlı armağanını 
                birlikte keşfedelim.
              </p>
            </div>

            {/* Keşfet */}
            <div>
              <h4 className="font-['Playfair_Display'] font-semibold text-amber-300 mb-4">Keşfet</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { href: "/honey-types", label: "Bal Türleri" },
                  { href: "/map", label: "Dünya Haritası" },
                  { href: "/how-honey-is-made", label: "Bal Üretimi" },
                  { href: "/beekeeping", label: "Arıcılık" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <span className="hover:text-amber-300 transition-colors cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bilgi */}
            <div>
              <h4 className="font-['Playfair_Display'] font-semibold text-amber-300 mb-4">Bilgi</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { href: "/history", label: "Balın Tarihi" },
                  { href: "/health", label: "Sağlık Etkileri" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <span className="hover:text-amber-300 transition-colors cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-amber-800/30 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-amber-100/40">
              © 2024 Bal Dünyası. Doğanın en tatlı armağanına adanmış.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-100/40">
              <span>🐝</span>
              <span>Arıları sevin, doğayı koruyun</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
