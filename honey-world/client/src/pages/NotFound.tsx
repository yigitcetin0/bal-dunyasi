/**
 * NotFound — 404 Sayfası
 * Design: Organik Modernizm — Bal Dünyası
 */

import { Link } from "wouter";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-6 animate-float">🍯</div>
        <h1 className="font-['Playfair_Display'] text-6xl font-bold text-amber-950 mb-2">404</h1>
        <h2 className="font-['Playfair_Display'] text-2xl font-semibold text-amber-800 mb-4">
          Sayfa Bulunamadı
        </h2>
        <p className="text-amber-700/60 leading-relaxed mb-8">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          Bal dünyasının diğer bölümlerini keşfetmeye devam edin.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <button className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-xl transition-all">
              <Home size={16} />
              Ana Sayfaya Dön
            </button>
          </Link>
          <Link href="/honey-types">
            <button className="inline-flex items-center gap-2 border border-amber-300 text-amber-700 font-medium px-6 py-3 rounded-xl hover:bg-amber-100 transition-all">
              <ArrowLeft size={16} />
              Bal Türleri
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
