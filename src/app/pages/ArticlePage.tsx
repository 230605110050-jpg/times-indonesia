import React, { useState } from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  Clock, Eye, Share2, Bookmark, Facebook, Twitter, Mail, 
  ChevronRight, Sparkles, FileText, Search
} from 'lucide-react';
import { articles, ekoranEditions } from '../data/mockData';
import { AdBanner, AdSidebarBanner } from '../components/AdBanner';

function HomeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
}

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const [copiedLink, setCopiedLink] = useState(false);

  const article = articles.find((a) => a.slug === slug) || articles[0];

  const publishDate = new Date(article.publishedAt).toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const publishTime = new Date(article.publishedAt).toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Recommendation 3-column articles
  const sportsArticles = articles.filter((a) => a.category === 'Olahraga' || a.category === 'Peristiwa').concat(articles).slice(0, 5);
  const economyArticles = articles.filter((a) => a.category === 'Ekonomi' || a.category === 'Tekno').concat(articles).slice(1, 6);
  const educationArticles = articles.filter((a) => a.category === 'Kesehatan' || a.category === 'Peristiwa Nasional').concat(articles).slice(2, 7);

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* 1. Top Content Discovery Box "Temukan lebih banyak" */}
      <div className="bg-white border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="px-4 py-2.5 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-times-red" />
                <span className="font-bold text-slate-800 text-xs sm:text-sm uppercase tracking-wider">
                  Temukan lebih banyak
                </span>
              </div>
              <span className="text-xs text-times-red font-semibold hover:underline cursor-pointer">
                Eksplor Topik
              </span>
            </div>
            <div className="divide-y divide-slate-200/80">
              {[
                { name: 'Berita', slug: 'nasional' },
                { name: 'Astronomi', slug: 'tekno' },
                { name: 'Berita nasional', slug: 'nasional' },
                { name: 'Otomotif & Mobil Listrik', slug: 'otomotif' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={`/kanal/${item.slug}`}
                  className="flex items-center justify-between px-4 py-2.5 text-xs sm:text-sm text-slate-700 hover:bg-white hover:text-times-red transition-all group font-medium"
                >
                  <span>{item.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-times-red group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Breadcrumb Navigation */}
      <div className="bg-slate-100/80 py-2.5 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap hide-scrollbar">
            <Link to="/" className="hover:text-times-red transition-colors flex items-center gap-1">
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link to={`/kanal/${article.category.toLowerCase().replace(/ /g, '-')}`} className="hover:text-times-red transition-colors font-medium">
              {article.category}
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-700 font-semibold truncate max-w-md">{article.title}</span>
          </div>
        </div>
      </div>

      {/* 3. Main Container Grid: Article Column (Left) + Sidebar (Right) */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: Main Article Area (lg:col-span-8) */}
          <div className="lg:col-span-8">
            <article className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200/80 relative">
              
              {/* Category Badge Pill */}
              <div className="mb-4">
                <Link
                  to={`/kanal/${article.category.toLowerCase().replace(/ /g, '-')}`}
                  className="inline-block px-3.5 py-1 bg-times-red text-white text-xs font-bold rounded-md uppercase tracking-wider hover:bg-red-700 transition-colors shadow-xs"
                >
                  {article.category}
                </Link>
              </div>

              {/* Judul Berita Utama */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
                {article.title}
              </h1>

              {/* Subtitle / Article Summary Lead */}
              <div className="bg-slate-50 border-l-4 border-times-red p-4 rounded-r-lg mb-6">
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                  {article.excerpt}
                </p>
              </div>

              {/* Metadata & Author Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200 text-xs sm:text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-slate-100 shadow-xs"
                  />
                  <div>
                    <div className="font-bold text-slate-900 text-sm sm:text-base">{article.author.name}</div>
                    <div className="text-xs text-slate-500">Reporter / Editor: <span className="font-medium text-slate-700">{article.editor}</span></div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5 text-times-red" />
                    <span>{publishDate} • {publishTime} WIB</span>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-full">
                    <Eye className="w-3.5 h-3.5 text-slate-600" />
                    <span>{article.views.toLocaleString()} dibaca</span>
                  </div>
                </div>
              </div>

              {/* Floating Vertical Social Share Toolbar */}
              <div className="hidden md:flex flex-col gap-2 fixed left-6 top-1/2 -translate-y-1/2 z-30 bg-white/90 backdrop-blur-md p-2 rounded-2xl shadow-xl border border-slate-200">
                <button title="Bagikan ke Facebook" className="w-9 h-9 bg-[#1877f2] hover:scale-110 text-white rounded-full flex items-center justify-center transition-all shadow-xs">
                  <Facebook className="w-4 h-4" />
                </button>
                <button title="Bagikan ke Twitter/X" className="w-9 h-9 bg-black hover:scale-110 text-white rounded-full flex items-center justify-center transition-all shadow-xs">
                  <Twitter className="w-4 h-4" />
                </button>
                <button title="Salin Link" onClick={handleCopyLink} className="w-9 h-9 bg-emerald-600 hover:scale-110 text-white rounded-full flex items-center justify-center transition-all shadow-xs">
                  <Share2 className="w-4 h-4" />
                </button>
                <button title="Simpan Artikel" className="w-9 h-9 bg-slate-100 hover:bg-times-red hover:text-white text-slate-600 rounded-full flex items-center justify-center transition-all shadow-xs">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Share Bar */}
              <div className="flex md:hidden items-center gap-2 mb-6 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-slate-500">Bagikan:</span>
                <button className="px-3 py-1.5 bg-[#1877f2] text-white text-xs font-semibold rounded-lg flex items-center gap-1">
                  <Facebook className="w-3.5 h-3.5" /> Facebook
                </button>
                <button className="px-3 py-1.5 bg-black text-white text-xs font-semibold rounded-lg flex items-center gap-1">
                  <Twitter className="w-3.5 h-3.5" /> Twitter
                </button>
                <button onClick={handleCopyLink} className="px-3 py-1.5 bg-emerald-600 text-white text-xs font-semibold rounded-lg flex items-center gap-1 ml-auto">
                  <Share2 className="w-3.5 h-3.5" /> {copiedLink ? 'Tersalin!' : 'Salin'}
                </button>
              </div>

              {/* Hero Main Image with Watermark */}
              <div className="relative mb-6 rounded-xl overflow-hidden shadow-md group">
                <div className="aspect-[16/9] overflow-hidden relative bg-slate-900">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* TIMES Indonesia Watermark Badge */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/70 backdrop-blur-md rounded-md flex items-center gap-1.5 border border-white/20">
                    <img src="/image/logo_times_indonesia.webp" alt="TIMES Indonesia Watermark" className="h-4 w-auto" />
                  </div>
                </div>
                <p className="text-xs text-slate-500 italic p-2 bg-slate-50 border-x border-b border-slate-200 rounded-b-xl">
                  Foto Utama: Suasana peluncuran dan informasi berita terkini di Malang, Jawa Timur. (Foto: Dok. TIMES Indonesia)
                </p>
              </div>

              {/* Article Body Content */}
              <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed text-base sm:text-lg mb-8 space-y-6">
                <p className="font-semibold text-slate-900">
                  <span className="font-bold text-times-red uppercase tracking-wider mr-2">MALANG</span> — 
                  {article.content}
                </p>

                <p>
                  Langkah strategis ini menandai komitmen kuat untuk mempercepat transformasi ekonomi dan adopsi teknologi ramah lingkungan di tingkat daerah. Kehadiran inovasi ini diharapkan tidak hanya mendorong pertumbuhan sektor otomotif dan energi, tetapi juga memberikan multiplier effect bagi ekosistem bisnis lokal di Jawa Timur.
                </p>

                <p>
                  Menurut data terbaru dari Badan Pusat Statistik (BPS) dan Dinas Perindustrian, permintaan pasar terhadap kendaraan listrik serta teknologi hemat energi terus mengalami peningkatan signifikan dalam kurun waktu dua kuartal terakhir. Hal ini didukung oleh berbagai insentif pemerintah dan kemudahan skema pembiayaan digital yang ramah konsumen.
                </p>

                {/* Subheading Section 1 */}
                <h3 className="text-xl font-extrabold text-slate-900 mt-8 mb-4 border-l-4 border-times-red pl-3">
                  Dampak terhadap Ekosistem & Perekonomian Daerah
                </h3>

                <p>
                  Perwakilan asosiasi industri menegaskan bahwa infrastruktur pendukung seperti stasiun pengisian daya (SPKLU) dan pusat servis terpadu kini tengah disiapkan secara masif di beberapa titik strategis Kota Malang dan sekitarnya. Penguatan rantai pasok lokal juga menjadi prioritas utama guna memastikan ketersediaan suku cadang dan layanan purna jual yang andal bagi masyarakat.
                </p>

                {/* Second Image Mid-Article */}
                <div className="my-8 rounded-xl overflow-hidden border border-slate-200 shadow-xs bg-slate-50">
                  <img
                    src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800"
                    alt="Gambar Kedua Artikel"
                    className="w-full aspect-[16/9] object-cover"
                  />
                  <p className="text-xs text-slate-500 italic p-3 text-center border-t border-slate-200">
                    Foto Kedua: Pelaksanaan pengujian fitur dan demonstrasi performa kendaraan ramah lingkungan di lokasi pameran Malang. (Foto: TIMES Indonesia/Ahmad Fauzi)
                  </p>
                </div>

                <p>
                  "Antusiasme masyarakat Jawa Timur, khususnya di Kota Malang, sangat tinggi terhadap teknologi bersih ini. Kami melihat pergeseran tren yang sangat positif di mana aspek efisiensi biaya operasional dan kepedulian lingkungan menjadi pertimbangan utama konsumen," ujar pengamat industri otomotif daerah.
                </p>

                {/* In-Article 970x250 Ad Banner Placement (Seamless & Non-Intrusive) */}
                <div className="my-10 border-y border-slate-200/80 py-4 bg-slate-50/60 rounded-2xl overflow-hidden">
                  <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase text-center mb-2">
                    — SPONSORED ADVERTISEMENT —
                  </div>
                  <AdBanner
                    imageSrc="/image/ad_banner_3.png"
                    altText="Iklan In-Article Leaderboard 970x250"
                    slotName="In-Article Leaderboard 970 × 250"
                    linkUrl="https://timesindonesia.co.id"
                    className="!py-0 !bg-transparent !border-0"
                  />
                </div>

                {/* Subheading Section 2 */}
                <h3 className="text-xl font-extrabold text-slate-900 mt-8 mb-4 border-l-4 border-times-purple pl-3">
                  Perspektif Regulasi dan Target Jangka Panjang
                </h3>

                <p>
                  Dari sisi regulasi, Pemerintah Kota Malang menyambut baik inisiatif ini dan terus mendorong percepatan operasional angkutan dan kendaraan ramah lingkungan. Langkah ini selaras dengan program pengurangan emisi karbon kota menuju efisiensi energi nasional 2030.
                </p>

                <blockquote className="my-6 border-l-4 border-times-red pl-4 italic text-slate-700 bg-red-50/50 p-4 rounded-r-xl font-medium">
                  "Kami berkomitmen menyajikan liputan mendalam yang mengedukasi dan menginspirasi masyarakat Indonesia dalam mengawal isu-isu pembangunan nasional."
                  <footer className="text-xs font-bold text-times-red mt-2 not-italic">— Redaksi TIMES Indonesia</footer>
                </blockquote>

                <p>
                  Ke depan, program edukasi publik serta sosialisasi keselamatan berkendara akan terus digalakkan secara berkesinambungan bersama instansi terkait. Pembaca diimbau untuk selalu memverifikasi setiap informasi melalui kanal resmi TIMES Indonesia dan kanal Cek Fakta guna menangkal potensi informasi hoaks.
                </p>
              </div>

              {/* Article Tags */}
              <div className="pt-6 border-t border-slate-200 mb-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">Tags:</span>
                  {['Wuling', 'Mobil Listrik', 'Otomotif', 'Malang', article.category, 'TIMES Indonesia'].map((tag) => (
                    <Link
                      key={tag}
                      to={`/search?q=${encodeURIComponent(tag)}`}
                      className="px-3 py-1 bg-white border border-slate-300 text-slate-700 text-xs font-semibold rounded-full hover:bg-times-red hover:text-white hover:border-times-red transition-all shadow-2xs"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Author Profile Card (Maroon Theme) */}
              <div className="bg-gradient-to-r from-[#7F0B1A] to-[#3F154F] rounded-2xl p-6 text-white shadow-lg mb-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white/80 shadow-md flex-shrink-0"
                  />
                  <div className="text-center sm:text-left flex-1">
                    <div className="text-xs text-white/80 uppercase tracking-wider font-semibold mb-0.5">Jurnalis & Reporter</div>
                    <h3 className="text-lg font-bold text-white mb-1">{article.author.name}</h3>
                    <p className="text-xs text-white/80 leading-relaxed max-w-xl">
                      Jurnalis senior TIMES Indonesia yang meliput isu-isu ekonomi, otomotif, dan perkembangan teknologi nasional. Berpengalaman lebih dari 8 tahun di dunia media.
                    </p>
                  </div>
                </div>
              </div>

              {/* E-Koran Edition Widget (Dark Theme) */}
              <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl border border-slate-800 mb-6">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-times-red" />
                    <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider">
                      EDISI SABTU, 8 AGUSTUS 2026
                    </h3>
                  </div>
                  <Link to="/ekoran" className="text-xs text-times-red hover:underline font-semibold flex items-center gap-1">
                    Buka E-Koran <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  {/* Left Column: Cover Newspaper Image */}
                  <div className="sm:col-span-5 relative group">
                    <div className="aspect-[3/4] overflow-hidden rounded-xl border border-slate-700 shadow-2xl relative">
                      <img
                        src={ekoranEditions[0]?.coverImage || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400"}
                        alt="Edisi Koran Digital"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-3 left-3 right-3 text-center">
                        <span className="px-3 py-1 bg-times-red text-white text-xs font-bold rounded-full">
                          {ekoranEditions[0]?.edition || 'Edisi Cetak 2026'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: List of Previous Editions */}
                  <div className="sm:col-span-7 space-y-2.5">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Arsip Edisi Terbaru</h4>
                    {[
                      { day: 'Edisi Sabtu', date: '8 Agustus 2026', views: '28.4k' },
                      { day: 'Edisi Jumat', date: '7 Agustus 2026', views: '31.2k' },
                      { day: 'Edisi Kamis', date: '6 Agustus 2026', views: '24.8k' },
                      { day: 'Edisi Rabu', date: '5 Agustus 2026', views: '19.5k' },
                    ].map((item, idx) => (
                      <Link
                        key={idx}
                        to="/ekoran"
                        className="flex items-center justify-between p-2.5 bg-slate-800/80 hover:bg-slate-800 rounded-lg transition-colors border border-slate-700/60 group"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-times-red" />
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-times-red transition-colors">{item.day}</div>
                            <div className="text-[11px] text-slate-400">{item.date}</div>
                          </div>
                        </div>
                        <span className="text-[11px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded-full font-medium">
                          {item.views} pembaca
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

            </article>

          </div>

          {/* RIGHT COLUMN: Continuous Sidebar / Ads Area (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Sidebar Item 1: Top Google Ads Banner (300 × 250 px) */}
            <AdSidebarBanner
              imageSrc="/image/ad_sidebar_300x250.png"
              altText="Iklan Google Ads BCA Digital 300x250"
              slotName="Medium Rectangle 300 × 250"
              size="300x250"
              linkUrl="https://timesindonesia.co.id"
            />

            {/* Sidebar Item 2: Terpopuler Card (Ranked 01 - 05) */}
            <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-5">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                <span className="w-2.5 h-2.5 rounded-full bg-times-red animate-pulse" />
                <h3 className="text-base font-extrabold text-slate-900">Terpopuler</h3>
              </div>
              <div className="space-y-4">
                {articles.slice(0, 5).map((art, index) => (
                  <Link
                    key={art.id}
                    to={`/berita/${art.slug}`}
                    className="flex items-center justify-between gap-3 group pb-3 border-b border-slate-100 last:border-0"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <span className="w-7 h-7 flex items-center justify-center bg-times-red/10 text-times-red font-black rounded-lg text-xs flex-shrink-0">
                        0{index + 1}
                      </span>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-xs text-slate-800 line-clamp-2 group-hover:text-times-red transition-colors">
                          {art.title}
                        </h4>
                        <span className="text-[10px] text-slate-400 mt-0.5 block">{art.views.toLocaleString()} views</span>
                      </div>
                    </div>
                    <img src={art.image} alt={art.title} className="w-14 h-12 rounded-lg object-cover flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar Item 3: Second "Temukan lebih banyak" Discovery Card */}
            <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-5">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                <Search className="w-4 h-4 text-times-red" />
                <h3 className="text-base font-extrabold text-slate-900">Temukan Lebih Banyak</h3>
              </div>
              <div className="space-y-2">
                {[
                  'Artikel Otomotif',
                  'Cek Fakta Terkini',
                  'Asia Tenggara & Kehidupan',
                  'Teknologi & Artificial Intelligence',
                  'Kuliner & Destinasi Wisata',
                  'Kopi TIMES Opini Redaksi',
                ].map((item) => (
                  <Link
                    key={item}
                    to={`/search?q=${encodeURIComponent(item)}`}
                    className="flex items-center justify-between p-2.5 bg-slate-50 hover:bg-times-red/5 rounded-xl text-xs font-semibold text-slate-700 hover:text-times-red transition-all group border border-slate-100"
                  >
                    <span>{item}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-times-red group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar Item 4: Bottom Google Ads Banner (300 × 600 px Half Page Skyscraper) */}
            <AdSidebarBanner
              imageSrc="/image/ad_sidebar_300x600.png"
              altText="Iklan Automotive EV Skyscraper 300x600"
              slotName="Half Page Skyscraper 300 × 600"
              size="300x600"
              linkUrl="https://timesindonesia.co.id"
            />

          </div>
        </div>
      </div>

      {/* Full-Width Rekomendasi Kanal Berita Section (Aligned with Sidebar & Footer Width) */}
      <section className="py-12 bg-white border-t border-slate-200 mt-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Column 1: OLAHRAGA */}
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-200">
                <span className="w-1.5 h-6 bg-times-red rounded-full" />
                <Link to="/kanal/olahraga" className="font-extrabold text-slate-900 text-lg uppercase tracking-wider hover:text-times-red flex items-center gap-1">
                  OLAHRAGA <ChevronRight className="w-5 h-5 text-times-red" />
                </Link>
              </div>

              {/* Featured Card */}
              <Link to={`/berita/${sportsArticles[0].slug}`} className="group block mb-4 relative rounded-xl overflow-hidden shadow-sm">
                <div className="aspect-[16/9] relative overflow-hidden bg-slate-900">
                  <img src={sportsArticles[0].image} alt={sportsArticles[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] text-white/80 font-medium mb-1 block">5 jam yang lalu</span>
                    <h4 className="font-bold text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-red-300 transition-colors">{sportsArticles[0].title}</h4>
                    <div className="flex items-center justify-between text-[11px] text-white/70 mt-2">
                      <span>{sportsArticles[0].author.name}</span>
                      <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {sportsArticles[0].views.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Small List Items */}
              <div className="space-y-3">
                {sportsArticles.slice(1, 5).map((art) => (
                  <Link key={art.id} to={`/berita/${art.slug}`} className="flex gap-3 group items-start pb-3 border-b border-slate-100 last:border-0">
                    <img src={art.image} alt={art.title} className="w-20 h-14 object-cover rounded-lg flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h5 className="text-xs font-semibold text-slate-800 line-clamp-2 group-hover:text-times-red transition-colors">{art.title}</h5>
                      <span className="text-[10px] text-slate-400 mt-1 block">5 jam yang lalu</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2: EKONOMI */}
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-200">
                <span className="w-1.5 h-6 bg-times-red rounded-full" />
                <Link to="/kanal/ekonomi" className="font-extrabold text-slate-900 text-lg uppercase tracking-wider hover:text-times-red flex items-center gap-1">
                  EKONOMI <ChevronRight className="w-5 h-5 text-times-red" />
                </Link>
              </div>

              {/* Featured Card */}
              <Link to={`/berita/${economyArticles[0].slug}`} className="group block mb-4 relative rounded-xl overflow-hidden shadow-sm">
                <div className="aspect-[16/9] relative overflow-hidden bg-slate-900">
                  <img src={economyArticles[0].image} alt={economyArticles[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] text-white/80 font-medium mb-1 block">39 menit yang lalu</span>
                    <h4 className="font-bold text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-red-300 transition-colors">{economyArticles[0].title}</h4>
                    <div className="flex items-center justify-between text-[11px] text-white/70 mt-2">
                      <span>{economyArticles[0].author.name}</span>
                      <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {economyArticles[0].views.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Small List Items */}
              <div className="space-y-3">
                {economyArticles.slice(1, 5).map((art) => (
                  <Link key={art.id} to={`/berita/${art.slug}`} className="flex gap-3 group items-start pb-3 border-b border-slate-100 last:border-0">
                    <img src={art.image} alt={art.title} className="w-20 h-14 object-cover rounded-lg flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h5 className="text-xs font-semibold text-slate-800 line-clamp-2 group-hover:text-times-red transition-colors">{art.title}</h5>
                      <span className="text-[10px] text-slate-400 mt-1 block">1 hari yang lalu</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3: PENDIDIKAN */}
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-200">
                <span className="w-1.5 h-6 bg-times-red rounded-full" />
                <Link to="/kanal/pendidikan" className="font-extrabold text-slate-900 text-lg uppercase tracking-wider hover:text-times-red flex items-center gap-1">
                  PENDIDIKAN <ChevronRight className="w-5 h-5 text-times-red" />
                </Link>
              </div>

              {/* Featured Card */}
              <Link to={`/berita/${educationArticles[0].slug}`} className="group block mb-4 relative rounded-xl overflow-hidden shadow-sm">
                <div className="aspect-[16/9] relative overflow-hidden bg-slate-900">
                  <img src={educationArticles[0].image} alt={educationArticles[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] text-white/80 font-medium mb-1 block">14 menit yang lalu</span>
                    <h4 className="font-bold text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-red-300 transition-colors">{educationArticles[0].title}</h4>
                    <div className="flex items-center justify-between text-[11px] text-white/70 mt-2">
                      <span>{educationArticles[0].author.name}</span>
                      <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {educationArticles[0].views.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Small List Items */}
              <div className="space-y-3">
                {educationArticles.slice(1, 5).map((art) => (
                  <Link key={art.id} to={`/berita/${art.slug}`} className="flex gap-3 group items-start pb-3 border-b border-slate-100 last:border-0">
                    <img src={art.image} alt={art.title} className="w-20 h-14 object-cover rounded-lg flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h5 className="text-xs font-semibold text-slate-800 line-clamp-2 group-hover:text-times-red transition-colors">{art.title}</h5>
                      <span className="text-[10px] text-slate-400 mt-1 block">4 jam yang lalu</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
