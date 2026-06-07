import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Clock, Eye, TrendingUp, Calendar, Globe, Flag, MapPin, CheckCircle, Coffee, TrendingUp as TrendingUpIcon, Laptop, GraduationCap, Trophy, Car, Heart, UtensilsCrossed, Plane, User, BookLock, Newspaper, Play, Image, FileText, Search, ArrowRight, Bookmark, MessageSquare } from 'lucide-react';
import { articles, categories, popularArticles, ekoranEditions, photos, interviews, cekFaktaItems, focusTopics } from '../data/mockData';
import { events } from '../data/eventData';
import { QuickLinksPanel } from '../components/QuickLinksPanel';

export function HomePage() {
  const breakingArticles = articles.filter((a) => a.isBreaking);
  const trendingArticles = articles.filter((a) => a.isTrending);
  const featuredEvents = events.filter((e) => e.isFeatured);

return (
    <div className="min-h-screen">
      {/* Quick Links Panel */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
<QuickLinksPanel className="mb-0" page="home" />
      </div>

{/* Hero News Section - Two Columns: Main Hero + Trending Sidebar */}
      <section className="bg-secondary-background py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Hero - Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-8"
            >
              {/* Hero with Slider */}
              <div className="relative group rounded-xl overflow-hidden">
                {/* Main Image */}
                <div className="aspect-[16/9] relative">
                  <img
                    src={breakingArticles[0].image}
                    alt={breakingArticles[0].title}
                    className="w-full h-full object-cover"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-times-red text-white text-xs font-semibold rounded-full">
                    {breakingArticles[0].category}
                  </div>
                  
                  {/* Slider Buttons */}
                  <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Title & Info at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Link to={`/berita/${breakingArticles[0].slug}`}>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 line-clamp-2 hover:text-white/80 transition-colors">
                        {breakingArticles[0].title}
                      </h2>
                    </Link>
                    <div className="flex items-center gap-4 text-white/80 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{breakingArticles[0].readTime} menit baca</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* View Count - Bottom Right */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Eye className="w-3 h-3 text-white" />
                    <span className="text-xs text-white font-medium">
                      {breakingArticles[0].views.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Trending Sidebar - Right Column */}
            <div className="lg:col-span-4 bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-times-red" />
                <h3 className="text-lg font-bold">Trending</h3>
              </div>
              <div className="space-y-3">
                {trendingArticles.slice(0, 4).map((article, index) => (
                  <Link 
                    key={article.id} 
                    to={`/berita/${article.slug}`} 
                    className="group flex gap-3 pb-3 border-b border-border last:border-0"
                  >
                    <div className="w-20 h-16 flex-shrink-0 overflow-hidden rounded-lg">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2 group-hover:text-times-red transition-colors">
                        {article.title}
                      </h4>
                      <div className="flex items-center gap-1 mt-1 text-xs text-text-secondary">
                        <Eye className="w-3 h-3" />
                        <span>{article.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
</div>
          </div>
        </div>
      </section>

{/* Category Grid Section - Compact: Olahraga, Politik, Liputan Khusus */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category 1: Olahraga */}
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-times-red">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-times-red" />
                  <h3 className="text-lg font-bold">Olahraga</h3>
                </div>
                <Link to="/kanal/olahraga" className="text-times-red hover:underline text-xs font-medium">
                  Lihat Semua
                </Link>
              </div>
              <div className="space-y-3">
                {articles.slice(0, 3).map((article) => (
                  <Link key={article.id} to={`/berita/${article.slug}`} className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex gap-3 p-3">
                      <div className="w-16 h-14 flex-shrink-0 overflow-hidden rounded-lg">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-2 group-hover:text-times-red transition-colors">{article.title}</h4>
                        <div className="flex items-center gap-1 mt-1 text-xs text-text-secondary">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime} mnt</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

{/* Category 2: Politik */}
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-times-purple">
                <div className="flex items-center gap-2">
                  <Flag className="w-5 h-5 text-times-purple" />
                  <h3 className="text-lg font-bold">Politik</h3>
                </div>
                <Link to="/kanal/politik" className="text-times-purple hover:underline text-xs font-medium">
                  Lihat Semua
                </Link>
              </div>
              <div className="space-y-3">
                {articles.slice(1, 4).map((article) => (
                  <Link key={article.id} to={`/berita/${article.slug}`} className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex gap-3 p-3">
                      <div className="w-16 h-14 flex-shrink-0 overflow-hidden rounded-lg">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-2 group-hover:text-times-purple transition-colors">{article.title}</h4>
                        <div className="flex items-center gap-1 mt-1 text-xs text-text-secondary">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime} mnt</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Category 3: Liputan Khusus */}
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-slate-600">
                <div className="flex items-center gap-2">
                  <Newspaper className="w-5 h-5 text-slate-600" />
                  <h3 className="text-lg font-bold">Liputan Khusus</h3>
                </div>
                <Link to="/fokus" className="text-slate-600 hover:underline text-xs font-medium">
                  Lihat Semua
                </Link>
              </div>
              <div className="space-y-3">
                {articles.slice(2, 5).map((article) => (
                  <Link key={article.id} to={`/berita/${article.slug}`} className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex gap-3 p-3">
                      <div className="w-16 h-14 flex-shrink-0 overflow-hidden rounded-lg">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-2 group-hover:text-slate-600 transition-colors">{article.title}</h4>
                        <div className="flex items-center gap-1 mt-1 text-xs text-text-secondary">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime} mnt</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Trending Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-6 h-6 text-times-red" />
            <h2 className="text-2xl font-bold">Trending Hari Ini</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/berita/${article.slug}`} className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-times-red font-semibold">{article.category}</span>
                    <h3 className="font-bold mt-2 mb-2 line-clamp-2 group-hover:text-times-red transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-text-secondary">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime} mnt</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{article.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* E-Koran Digital Section - Redesigned */}
      <section className="py-16 relative overflow-hidden">
        {/* Background with newspaper stack image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920" 
            alt="Newspaper background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Section Header with Logo and View All Button */}
          <div className="flex items-center justify-between mb-8">
            <img 
              src="/image/logo_ekoran_white.webp" 
              alt="eKoran" 
              className="h-10 w-auto"
            />
            <Link to="/ekoran" className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-black font-semibold rounded-lg hover:bg-white hover:shadow-lg transition-all text-sm">
              <FileText className="w-4 h-4" />
              Buka Semua Edisi
            </Link>
          </div>
          
          {/* Auto-Scrolling Carousel */}
          <div className="overflow-x-auto pb-4 hide-scrollbar">
            <motion.div 
              className="flex gap-5 px-1"
              animate={{ x: [0, -1000] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {[...ekoranEditions, ...ekoranEditions, ...ekoranEditions].map((edition, index) => (
                <motion.div
                  key={`${edition.id}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 5) * 0.1 }}
                  className="flex-shrink-0"
                >
                  <Link to={`/ekoran/${edition.id}`} className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-white/20 w-[190px]">
                    {/* Cover Image */}
                    <div className="aspect-[3/4] overflow-hidden relative">
                      <img
                        src={edition.coverImage}
                        alt={edition.edition}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Viewer Badge */}
                      <div className="absolute top-3 right-3 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full flex items-center gap-1">
                        <Eye className="w-3 h-3 text-white" />
                        <span className="text-xs text-white font-medium">
                          {(edition.views / 1000).toFixed(1)}k
                        </span>
                      </div>
                      
                      {/* Gradient Overlay at Bottom */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-16 pb-4">
                        <div className="px-3">
                          <h3 className="text-white font-bold text-sm line-clamp-2">
                            {edition.edition}
                          </h3>
                        </div>
                      </div>
                    </div>
                    
                    {/* Edition Info */}
                    <div className="p-3 bg-white">
                      <div className="text-xs text-text-secondary">
                        {new Date(edition.date).toLocaleDateString('id-ID', {
                          weekday: 'long',
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </div>
                      <div className="text-xs text-times-red font-medium mt-1">
                        {edition.timeAgo}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

{/* Banner Promosi */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-times-red to-times-purple rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Tetap Terinformasi dengan TIMES Indonesia
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Dapatkan berita terkini dan akurat langsung di perangkat Anda.
              Ikuti kami untuk informasi terbaru dari berbagai kanal.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/berlangganan" className="px-6 py-3 bg-white text-times-red font-semibold rounded-lg hover:shadow-lg transition-shadow">
                Berlangganan Sekarang
              </Link>
              <Link to="/fokus" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Baca Artikel Populer
              </Link>
            </div>
          </div>
        </div>
      </section>

{/* Kanal Tematik - Compact */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Entertainment */}
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-times-purple">
                <div className="flex items-center gap-2">
                  <Newspaper className="w-5 h-5 text-times-purple" />
                  <h3 className="text-lg font-bold">Entertainment</h3>
                </div>
                <Link to="/kanal/entertainment" className="text-times-purple hover:underline text-xs font-medium">
                  Lihat Semua
                </Link>
              </div>
              <div className="space-y-3">
                {articles.slice(3, 6).map((article) => (
                  <Link key={article.id} to={`/berita/${article.slug}`} className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex gap-3 p-3">
                      <div className="w-16 h-14 flex-shrink-0 overflow-hidden rounded-lg">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-2 group-hover:text-times-purple transition-colors">{article.title}</h4>
                        <div className="flex items-center gap-1 mt-1 text-xs text-text-secondary">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime} mnt</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Indonesia Positif */}
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-emerald-700">
                <div className="flex items-center gap-2">
                  <Flag className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-lg font-bold">Indonesia Positif</h3>
                </div>
                <Link to="/fokus/indonesia-positif" className="text-emerald-700 hover:underline text-xs font-medium">
                  Lihat Semua
                </Link>
              </div>
              <div className="space-y-3">
                {articles.slice(0, 3).map((article) => (
                  <Link key={article.id} to={`/berita/${article.slug}`} className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex gap-3 p-3">
                      <div className="w-16 h-14 flex-shrink-0 overflow-hidden rounded-lg">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-2 group-hover:text-emerald-700 transition-colors">{article.title}</h4>
                        <div className="flex items-center gap-1 mt-1 text-xs text-text-secondary">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime} mnt</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Auto Times */}
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-gray-700">
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-gray-700" />
                  <h3 className="text-lg font-bold">Auto Times</h3>
                </div>
                <Link to="/kanal/otomotif" className="text-gray-700 hover:underline text-xs font-medium">
                  Lihat Semua
                </Link>
              </div>
              <div className="space-y-3">
                {articles.slice(4, 7).map((article) => (
                  <Link key={article.id} to={`/berita/${article.slug}`} className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex gap-3 p-3">
                      <div className="w-16 h-14 flex-shrink-0 overflow-hidden rounded-lg">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-2 group-hover:text-gray-700 transition-colors">{article.title}</h4>
                        <div className="flex items-center gap-1 mt-1 text-xs text-text-secondary">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime} mnt</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Times Event Section - Moved after Auto Times with Red Theme */}
      {events.length > 0 && (
        <section className="py-12 bg-gradient-to-b from-red-50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Header with Logo */}
            <div className="flex items-center justify-between mb-8">
              <img 
                src="/image/logo-times-event.png" 
                alt="TIMES Event" 
                className="h-14 w-auto"
              />
<a href="https://times-event.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-times-red text-white font-semibold rounded-lg hover:bg-red-700 hover:shadow-lg hover:scale-105 transition-all text-sm">
                <Calendar className="w-4 h-4" />
                Lihat Semua
              </a>
            </div>
            
            {/* Card Grid - 5 Events in responsive grid with enhanced hover */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {events.slice(0, 5).map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/event/${event.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full border-2 border-transparent hover:border-times-red">
                    {/* Poster Image with Gradient Overlay */}
                    <div className="aspect-[3/4] overflow-hidden relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-20 pb-4">
                        <div className="px-4">
                          <h3 className="text-white font-bold text-sm line-clamp-2 leading-tight">
                            {event.title}
                          </h3>
                        </div>
                      </div>
                      {/* Featured Badge - Red with glow */}
                      {event.isFeatured && (
                        <div className="absolute top-3 left-3 px-3 py-1 bg-times-red text-white text-xs font-bold rounded-full shadow-lg">
                          HOT
                        </div>
                      )}
                    </div>
                    
                    {/* Event Info with enhanced styling */}
                    <div className="p-4 bg-white">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <Calendar className="w-3 h-3 text-times-red" />
                        <span className="font-medium">
                          {new Date(event.date).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-times-red font-bold text-lg">
                          {event.price === 0 ? 'GRATIS' : `Rp ${(event.price / 1000)}rb`}
                        </div>
                        <div className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                          {event.registered}/{event.quota}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TIMES Foto Gallery Section */}
      <section className="py-12 bg-secondary-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Image className="w-6 h-6 text-times-red" />
              <h2 className="text-2xl font-bold">TIMES Foto</h2>
            </div>
            <Link to="/foto" className="text-times-red hover:underline font-medium">
              Lihat Semua
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.slice(0, 8).map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link to={`/foto/${photo.slug}`} className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-times-red transition-colors">
                      {photo.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-xs text-text-secondary">
                      <span className="px-2 py-0.5 bg-times-red/10 text-times-red rounded-full">
                        {photo.category}
                      </span>
                      <Eye className="w-3 h-3" />
                      <span>{photo.views.toLocaleString()}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* Wawancara Khusus & Topik Pilihan Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Area Wawancara - Left Column */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <FileText className="w-6 h-6 text-times-red" />
                <h2 className="text-2xl font-bold">Wawancara Khusus</h2>
              </div>
              {/* Main Interview Card with Large Photo */}
              {interviews.slice(0, 1).map((interview, index) => (
                <motion.div
                  key={interview.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <Link to={`/wawancara/${interview.slug}`} className="group block rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                    {/* Large Photo with Dark Overlay */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={interview.image}
                        alt={interview.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-times-red text-white text-xs font-semibold rounded-full">
                        WAWANCARA
                      </div>
                      
                      {/* Title at Bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white/80 transition-colors">
                          {interview.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          <img
                            src={interview.author.avatar}
                            alt={interview.author.name}
                            className="w-10 h-10 rounded-full object-cover border-2 border-white"
                          />
                          <div>
                            <div className="font-medium text-white text-sm">{interview.subjectName}</div>
                            <div className="text-xs text-white/70">{interview.subjectRole}</div>
                          </div>
                          <div className="flex items-center gap-1 ml-auto text-white/70 text-sm">
                            <Clock className="w-4 h-4" />
                            <span>{interview.readTime} menit baca</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
              
              {/* Other Interview Profiles Row */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {interviews.slice(1, 5).map((interview) => (
                  <Link
                    key={interview.id}
                    to={`/wawancara/${interview.slug}`}
                    className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={interview.image}
                        alt={interview.subjectName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-2">
                      <h4 className="font-medium text-xs line-clamp-1 group-hover:text-times-red transition-colors">
                        {interview.subjectName}
                      </h4>
                      <p className="text-xs text-text-secondary line-clamp-1">
                        {interview.subjectRole}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

{/* Area Topik Pilihan - Right Column */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Bookmark className="w-6 h-6 text-times-red" />
                <h2 className="text-2xl font-bold">Topik Pilihan</h2>
              </div>
              
              {/* Topics Card - Professional Design with Brand Colors */}
              <div className="h-full min-h-[400px] bg-white rounded-xl shadow-lg overflow-hidden border border-border">
                {/* Topic List - Vertical */}
                <div className="p-4 space-y-2">
                  {focusTopics.slice(0, 6).map((topic, index) => (
                    <Link
                      key={topic.id}
                      to={`/fokus/${topic.slug}`}
                      className="group flex items-center justify-between p-3 bg-secondary-background hover:bg-gray-100 rounded-lg transition-all"
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="w-8 h-8 rounded-full bg-times-red/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-times-red font-bold text-sm">{index + 1}</span>
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-gray-900 group-hover:text-times-red transition-colors truncate">
                            {topic.title}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {topic.articleCount} artikel
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-times-red group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </Link>
                  ))}
                </div>
                
                {/* View All Link */}
                <div className="p-4 mt-auto border-t border-border">
                  <Link to="/fokus" className="flex items-center justify-center gap-2 w-full py-3 bg-times-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                    Lihat Semua Topik
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Jelajah Berita - News Feed */}
      <section className="py-12 bg-secondary-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main News Feed */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-6">
                <FileText className="w-6 h-6 text-times-red" />
                <h2 className="text-2xl font-bold">Jelajah Berita</h2>
              </div>
              <div className="space-y-4">
                {articles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                  >
                    <Link to={`/berita/${article.slug}`} className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                      <div className="flex gap-4 p-4">
                        <div className="w-32 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                          <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs text-times-red font-semibold">{article.category}</span>
                            <span className="text-xs text-text-secondary">• {article.readTime} menit baca</span>
                          </div>
                          <h3 className="font-bold text-base line-clamp-2 group-hover:text-times-red transition-colors">{article.title}</h3>
                          <p className="text-text-secondary text-sm line-clamp-1 mt-1">{article.excerpt}</p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link to="/berita" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-times-red text-times-red font-semibold rounded-lg hover:bg-times-red hover:text-white transition-colors">
                  Muat Lebih Banyak
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Terpopuler Widget */}
              <div className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-times-red" />
                  <h3 className="text-lg font-bold">Terpopuler</h3>
                </div>
                <div className="space-y-3">
                  {popularArticles.slice(0, 5).map((article, index) => (
                    <Link key={article.id} to={`/berita/${article.slug}`} className="flex items-start gap-3 group pb-3 border-b border-border last:border-0">
                      <div className="w-6 h-6 flex items-center justify-center bg-times-red text-white font-bold rounded-full flex-shrink-0 text-xs">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2 group-hover:text-times-red transition-colors">{article.title}</h4>
                        <div className="flex items-center gap-1 mt-1 text-xs text-text-secondary">
                          <Eye className="w-3 h-3" />
                          <span>{article.views.toLocaleString()} views</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

{/* Temukan Informasi Widget */}
              <div className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Search className="w-5 h-5 text-times-red" />
                  <h3 className="text-lg font-bold">Temukan Informasi</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.slice(0, 8).map((cat) => (
                    <Link key={cat.id} to={`/kanal/${cat.slug}`} className="px-3 py-1.5 bg-secondary-background text-text-secondary text-sm rounded-full hover:bg-times-red hover:text-white transition-colors">
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Cek Fakta Widget - Dark Card */}
              <div className="bg-gray-900 rounded-xl p-4 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg font-bold">Cek Fakta</h3>
                </div>
                <div className="space-y-3">
                  {cekFaktaItems.slice(0, 3).map((item) => (
                    <Link
                      key={item.id}
                      to={`/cek-fakta/${item.id}`}
                      className="group flex gap-3 pb-3 border-b border-gray-700 last:border-0"
                    >
                      {/* Thumbnail */}
                      <div className="w-16 h-12 flex-shrink-0 overflow-hidden rounded-lg bg-gray-800">
                        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                            item.verdict === 'FAKTA' ? 'bg-green-500/20 text-green-400' :
                            item.verdict === 'HOAX' ? 'bg-red-500/20 text-red-400' :
                            'bg-amber-500/20 text-amber-400'
                          }`}>
                            {item.verdict}
                          </span>
                        </div>
                        <h4 className="font-medium text-sm text-gray-200 line-clamp-2 group-hover:text-white transition-colors">
                          {item.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
                {/* Eksplorasi Button */}
                <Link
                  to="/kanal/cek-fakta"
                  className="flex items-center justify-center gap-2 w-full mt-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 font-medium rounded-lg transition-colors"
                >
                  <Search className="w-4 h-4" />
                  Eksplorasi Fakta
                </Link>
              </div>

              {/* Banner Promo Sidebar
              <div className="bg-gradient-to-r from-times-red to-times-purple rounded-xl p-6 text-white text-center">
                <h4 className="font-bold text-lg mb-2">Download App TIMES Indonesia</h4>
                <p className="text-white/80 text-sm mb-4">Baca berita terbaru di mana saja, kapan saja.</p>
                <Link to="/download" className="inline-block px-4 py-2 bg-white text-times-red font-semibold rounded-lg text-sm hover:shadow-lg transition-shadow">
                  Download Gratis
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function getCategoryIcon({ slug, className = "w-10 h-10" }: { slug: string; className?: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    'internasional': <Globe className={className} />,
    'nasional': <Flag className={className} />,
    'peristiwa': <MapPin className={className} />,
    'cek-fakta': <CheckCircle className={className} />,
    'kopi-times': <Coffee className={className} />,
    'ekonomi': <TrendingUpIcon className={className} />,
    'tekno': <Laptop className={className} />,
    'pendidikan': <GraduationCap className={className} />,
'okasiaga': <Trophy className={className} />,
    'otomotif': <Car className={className} />,
    'kesehatan': <Heart className={className} />,
    'kuliner': <UtensilsCrossed className={className} />,
    'produksi': <Plane className={className} />,
    'sosok': <User className={className} />,
    'religi': <BookLock className={className} />,
    'politik': <Flag className={className} />,
    'entertainment': <Newspaper className={className} />,
  };
  return iconMap[slug] || <Newspaper className={className} />;
}
