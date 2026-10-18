/**
 * Navbar — Bal Dünyası
 * Design: Organik Modernizm — Kehribar/Amber, Playfair Display + DM Sans
 * Sticky navbar with honey-themed logo, smooth scroll, mobile menu
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/honey-types", label: "Bal Türleri" },
  { href: "/map", label: "Dünya Haritası" },
  { href: "/how-honey-is-made", label: "Bal Nasıl Üretilir" },
  { href: "/beekeeping", label: "Arıcılık" },
  { href: "/history", label: "Tarih" },
  { href: "/health", label: "Sağlık" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-amber-950/95 backdrop-blur-md shadow-lg shadow-amber-900/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 hexagon bg-amber-400 flex items-center justify-center text-amber-950 font-bold text-lg transition-transform group-hover:scale-110">
                🍯
              </div>
              <div>
                <span className="font-['Playfair_Display'] font-bold text-xl text-amber-100 leading-none block">
                  Bal Dünyası
                </span>
                <span className="text-amber-400 text-xs tracking-widest uppercase">
                  Dünyanın Tatları
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location === link.href
                      ? "text-amber-300 bg-amber-900/50"
                      : "text-amber-100/80 hover:text-amber-300 hover:bg-amber-900/30"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-amber-100 hover:bg-amber-900/40 transition-colors"
            aria-label="Menüyü aç/kapat"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-amber-950/98 backdrop-blur-md border-t border-amber-800/30 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location === link.href
                      ? "text-amber-300 bg-amber-900/50"
                      : "text-amber-100/80 hover:text-amber-300 hover:bg-amber-900/30"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
