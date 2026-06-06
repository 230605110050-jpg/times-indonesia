import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Image as ImageIcon, Eye, ChevronRight, Camera, ZoomIn } from 'lucide-react';
import { articles } from '../data/mockData';
import { QuickLinksPanel } from '../components/QuickLinksPanel';

// SVG Home Icon Component
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

// Enhanced Photo Card Component
function PhotoCard({ 
  article, 
  index,
  isLarge = false 
}: { 
  article: any; 
  index: number;
  isLarge?: boolean;
}) {
  return (
    <Link
      to={`/foto/${article.slug}`}
      className={`group relative block ${isLarge ? 'lg:row-span-2' : ''}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
      >
        {/* Image Container */}
        <div className={`relative ${isLarge ? 'aspect-[4/3] lg:aspect-auto lg:h-full' : 'aspect-square'} overflow-hidden`}>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          
          {/* Category Badge - Top Left */}
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-times-red/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full shadow-lg group-hover:bg-times-red transition-colors">
              {article.category}
            </span>
          </div>

          {/* Zoom Icon - Center (appears on hover) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300">
              <ZoomIn className="w-7 h-7 text-white" />
            </div>
          </div>

          {/* Content - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <div className="text-xs text-white/70 mb-1 flex items-center gap-1">
              <Camera className="w-3 h-3" />
              {article.author.name}
            </div>
            <h3 className="text-white font-bold mb-2 line-clamp-2 group-hover:line-clamp-3 transition-all">
              {article.title}
            </h3>
            <div className="flex items-center justify-between text-white/80 text-sm">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{article.views.toLocaleString()}</span>
              </div>
              <span className="text-white/60 text-xs">{article.readTime} menit</span>
            </div>
          </div>

          {/* Border Highlight on Hover */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-times-red/50 rounded-2xl transition-colors duration-300 pointer-events-none" />
        </div>
      </motion.div>
    </Link>
  );
}

export function PhotoPage() {
  return (
    <div className="min-h-screen py-8 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-times-red transition-colors">
              <HomeIcon className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-600">Foto</span>
          </nav>
        </div>

        <QuickLinksPanel className="mb-8" page="foto" />
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-times-red to-times-purple rounded-xl flex items-center justify-center shadow-lg">
              <ImageIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Galeri Foto
              </h1>
            </div>
          </div>
          <p className="text-text-secondary text-lg">
            Kumpulan foto-foto terbaik dari berbagai peristiwa dan momen penting
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-times-red to-times-purple rounded-full mt-4" />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {['Semua', 'Terbaru', 'Trending', 'Peristiwa', 'Olahraga', 'Wisata'].map((filter, idx) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                idx === 0 
                  ? 'bg-times-red text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-times-red hover:text-white shadow-md'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid with Enhanced Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <PhotoCard
              key={article.id}
              article={article}
              index={index}
              isLarge={index % 3 === 0}
            />
          ))}
        </div>

        {/* Load More Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <button className="px-8 py-3 bg-white border-2 border-times-red text-times-red font-semibold rounded-full hover:bg-times-red hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
            Muat Lebih Banyak Foto
          </button>
        </motion.div>
      </div>
    </div>
  );
}
