# Bal Dünyası - Tasarım Fikirleri

<response>
<idea>
**Design Movement**: Organik Modernizm — Bauhaus'un yapısal netliğini doğanın akışkan formlarıyla harmanlayan bir estetik.

**Core Principles**:
1. Bal peteği geometrisi — altıgen formlar navigasyon, kart ve dekoratif unsurlarda tekrarlanır
2. Amber derinliği — tek düze sarı yerine kehribar, bal mumu ve çiçek poleni tonlarının katmanlı kullanımı
3. Organik asimetri — sert grid yerine akışkan, doğal hizalamalar
4. Doğrusal hikaye anlatımı — kullanıcı sayfayı kaydırdıkça bir bal yolculuğuna çıkar

**Color Philosophy**:
- Birincil: Kehribar (#B45309, oklch(0.55 0.16 60))
- İkincil: Koyu bal (#92400E, oklch(0.42 0.14 55))
- Vurgu: Altın sarısı (#F59E0B, oklch(0.75 0.18 75))
- Arka plan: Krem (#FFFBEB, oklch(0.99 0.02 95))
- Metin: Koyu kahve (#1C0A00, oklch(0.15 0.04 55))
- Duygusal amaç: Sıcaklık, doğallık, güven ve lüks

**Layout Paradigm**:
- Hero: Tam ekran, sola hizalı başlık, sağda büyük bal görseli
- İçerik: Değişen genişlikte asimetrik sütunlar (7/5, 5/7 oranları)
- Kart grid: Altıgen petekten ilham alan staggered (kademeli) düzen
- Harita: Tam genişlik, üstte kayan bilgi paneli

**Signature Elements**:
1. Altıgen (hexagon) motifi — kart çerçeveleri, ikonlar, bölüm ayırıcılar
2. Bal akışı animasyonu — kaydırma sırasında sarı dalga efektleri
3. Petek dokusu — arka plan subtil pattern olarak

**Interaction Philosophy**:
- Hover: Kartlar hafifçe yukarı kalkar, altın kenarlık belirir
- Harita pinleri: Altıgen şekilli, tıklandığında açılır panel
- Scroll: Paralaks efektli bölüm geçişleri

**Animation**:
- Giriş: Elemanlar aşağıdan yukarıya doğru fade-in (staggered, 100ms aralık)
- Hover: 200ms ease-out transform translateY(-4px)
- Sayfa geçişi: Soldan sağa slide + fade
- Bal damlası: Hero'da yavaş düşen damla animasyonu (CSS keyframes)

**Typography System**:
- Başlık: Playfair Display (serif, ağır ağırlık) — lüks ve doğallık
- Gövde: DM Sans (sans-serif, hafif) — okunabilirlik
- Vurgu: Playfair Display Italic — özel terimler ve alıntılar
- Hiyerarşi: 72px hero / 48px h1 / 36px h2 / 24px h3 / 16px body
</idea>
<probability>0.08</probability>
</response>

<response>
<idea>
**Design Movement**: Etnobotanik Ekspresyonizm — Dünya kültürlerinin el sanatı estetiğini dijital ortama taşıyan, ham ve otantik bir yaklaşım.

**Core Principles**:
1. El yazısı dokusu — elle çizilmiş çizgiler, kalem fırçası efektleri
2. Coğrafi kimlik — her bölgenin renk ve doku dili farklı
3. Belge estetiği — eski harita ve botanik illüstrasyon referansları
4. Sıcak kağıt tonu — krem, sepia ve doğal pigment renkleri

**Color Philosophy**:
- Kağıt tonu: #F5E6C8 (eski parşömen)
- Mürekkep: #2D1B00 (koyu kahve)
- Vurgu: #C17F24 (altın)
- Bitki yeşili: #4A6741 (yaprak)
- Duygusal amaç: Antikite, keşif, bilgelik

**Layout Paradigm**:
- Gazete grid — çok sütunlu, farklı boyutlu içerik blokları
- Harita: Eski kartografik stil, el çizimi görünüm
- Kart: Parşömen kağıt efekti, köşe kıvrımları

**Signature Elements**:
1. Botanik illüstrasyon çerçeveleri
2. Sepia tonlu fotoğraf filtresi
3. El yazısı başlıklar

**Interaction Philosophy**:
- Sayfa açılışında kağıt katlama animasyonu
- Hover: Sepia'dan renkli geçiş

**Animation**:
- Kağıt açılma efekti
- Mürekkep akışı yazı animasyonu

**Typography System**:
- Başlık: Libre Baskerville (antika serif)
- Gövde: Lora (okunabilir serif)
</idea>
<probability>0.06</probability>
</response>

<response>
<idea>
**Design Movement**: Biyomorfik Minimalizm — Doğanın formlarından ilham alan, saf ve temiz bir dijital estetik.

**Core Principles**:
1. Negatif alan — beyaz boşluk birincil tasarım unsuru
2. Organik eğriler — köşe yok, sadece akışkan formlar
3. Monokromatik derinlik — tek renk ailesinin farklı doygunlukları
4. Veri görselleştirme odaklı — bilgi mimarisi ön planda

**Color Philosophy**:
- Tek renk ailesi: Amber/Honey
- Açık: #FEF3C7 (neredeyse beyaz sarı)
- Orta: #F59E0B (canlı kehribar)
- Koyu: #78350F (derin kahve)
- Duygusal amaç: Saflık, doğruluk, şeffaflık

**Layout Paradigm**:
- Geniş kenar boşlukları, merkezi içerik
- Büyük tipografi, minimal görsel
- Scroll-triggered reveal animasyonları

**Signature Elements**:
1. Blob/amorf şekiller arka planda
2. Büyük sayısal veri gösterimi
3. Tek çizgi ikonlar

**Interaction Philosophy**:
- Sade, işlevsel
- Smooth scroll ile bölümler arası geçiş

**Animation**:
- Blob morph animasyonu
- Sayı sayma efekti

**Typography System**:
- Tek font: Cabinet Grotesk
- Farklı ağırlıklar ile hiyerarşi
</idea>
<probability>0.07</probability>
</response>

## Seçilen Tasarım: Organik Modernizm (1. Yaklaşım)

Playfair Display + DM Sans tipografisi, altıgen petek motifleri, kehribar/amber renk paleti ve asimetrik layout ile ilerleyeceğiz.
