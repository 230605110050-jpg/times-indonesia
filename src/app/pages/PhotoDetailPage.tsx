import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { Clock, Eye, ChevronRight, Calendar, MapPin, Camera, ArrowLeft } from 'lucide-react';
import { photos, articles } from '../data/mockData';

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

// Quick Links Panel Component for this page
function QuickLinksPanel({ className = "" }: { className?: string }) {
  const links = [
    { id: '1', title: 'Galeri Foto', slug: 'foto' },
    { id: '2', title: 'Foto Peristiwa', slug: 'peristiwa' },
    { id: '3', title: 'Gallery terbaik', slug: 'gallery' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`bg-white rounded-xl border-2 border-slate-800 overflow-hidden ${className}`}
    >
      <div className="bg-slate-800 text-white px-5 py-3">
        <h3 className="font-semibold">Temukan lebih banyak</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {links.map((link) => (
          <Link
            key={link.id}
            to={`/foto`}
            className="flex items-center justify-between px-5 py-3 hover:bg-gray-50 transition-colors"
          >
            <span className="text-gray-700">{link.title}</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

// Sidebar Popular Photos Component
function SidebarPopular({ className = "" }: { className?: string }) {
  // Using popular articles as substitute for photos in sidebar
  const popularPhotos = photos.slice(0, 5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className={`bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm ${className}`}
    >
      <div className="bg-slate-800 text-white px-5 py-3">
        <h3 className="font-semibold">Terpopuler</h3>
      </div>
      <div className="divide-y divide-gray-100">
        {popularPhotos.map((photo, index) => (
          <Link
            key={photo.id}
            to={`/foto`}
            className="flex items-start gap-3 p-4 hover:bg-gray-50 transition-colors"
          >
            <span className="text-times-red font-bold text-xl min-w-[24px]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium line-clamp-2 mb-1">{photo.title}</h4>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {new Date(photo.publishedAt).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {photo.views.toLocaleString()}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

// Photographer Profile Component
function PhotographerProfile({ 
  name, 
  role = "fotografer" 
}: { 
  name: string; 
  role?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="bg-gradient-to-r from-[#722F37] to-[#8B2635] rounded-xl p-6 text-white"
    >
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
          <Camera className="w-8 h-8" />
        </div>
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-white/80 text-sm">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}

// E-Koran Widget Component
function EKoranWidget({ className = "" }: { className?: string }) {
  const editions = ['Jumat', 'Kamis', 'Rabu'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className={`rounded-xl overflow-hidden ${className}`}
    >
      <div className="bg-gradient-to-r from-[#722F37] to-[#8B2635] px-5 py-3">
        <h3 className="font-semibold text-white">E-Koran</h3>
      </div>
      <div className="bg-black px-5 py-4">
        <div className="flex gap-4">
          <div className="w-20 h-28 bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-xs text-gray-500 text-center">Cover</span>
          </div>
          <div className="flex-1 space-y-3">
            {editions.map((edition) => (
              <div 
                key={edition}
                className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0"
              >
                <span className="text-sm text-white/80">Edisi {edition}</span>
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// In-Article Recommendation Box
function RecommendBox({ className = "" }: { className?: string }) {
  const links = [
    { id: '1', title: 'Cek Fakta', slug: 'cek-fakta' },
    { id: '2', title: 'Berita Kesehatan', slug: 'kesehatan' },
    { id: '3', title: 'Berita Online Terkini', slug: 'berita-terkini' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`bg-white rounded-xl border-2 border-slate-800 overflow-hidden ${className}`}
    >
      <div className="bg-slate-800 text-white px-5 py-3">
        <h3 className="font-semibold">Temukan lebih banyak</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {links.map((link) => (
          <Link
            key={link.id}
            to={`/kanal/${link.slug}`}
            className="flex items-center justify-between px-5 py-3 hover:bg-gray-50 transition-colors"
          >
            <span className="text-gray-700">{link.title}</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </Link>
        ))}
      </div>
    </motion.div>
);
}

export function PhotoDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  
  // First try to find in photos, then in articles (for compatibility)
  const photo = photos.find(p => p.slug === slug) || 
    articles.find(a => a.slug === slug) || 
    (photos[0] ? { ...photos[0], title: articles[0]?.title || photos[0].title, description: articles[0]?.excerpt || photos[0].description, photographer: articles[0]?.author.name || 'Unknown' } : null);
  
  // If photo not found
  if (!photo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Foto Tidak Ditemukan</h1>
          <Link to="/foto" className="text-times-red hover:underline">
            Kembali ke Galeri Foto
          </Link>
        </div>
      </div>
    );
  }

  // Format date
  const publishDate = new Date(photo.publishedAt).toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const publishTime = new Date(photo.publishedAt).toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
  });

  // Related photos (same category)
  const relatedPhotos = photos
    .filter(p => p.category === photo.category && p.id !== photo.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-times-red transition-colors">
              <HomeIcon className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/foto" className="hover:text-times-red transition-colors">
              Foto
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-600 truncate">{photo.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Article Area - 70% */}
          <div className="lg:col-span-8">
            {/* Back Button */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="mb-6"
            >
              <Link
                to="/foto"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-times-red transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Galeri
              </Link>
            </motion.div>

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
                {photo.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-gray-900"
            >
              {photo.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 mb-6 leading-relaxed"
            >
              {photo.description}
            </motion.p>

            {/* Metadata */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 pb-6 mb-6 border-b border-gray-200"
            >
              <div className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-gray-400" />
                <span className="font-medium">{photo.photographer}</span>
              </div>
              <div className="h-6 w-px bg-gray-200 hidden sm:block" />
              <div className="text-sm text-gray-500">
                <span>{publishDate}</span>
                <span className="mx-2">•</span>
                <span>{publishTime} WIB</span>
              </div>
              <div className="h-6 w-px bg-gray-200 hidden sm:block" />
              <div className="flex items-center gap-2 text-gray-500">
                <Eye className="w-4 h-4" />
                <span>{photo.views.toLocaleString()} dilihat</span>
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-6"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-auto rounded-xl border border-gray-200"
              />
              <p className="mt-2 text-sm text-gray-500 text-center">
                {photo.title}
              </p>
            </motion.div>

            {/* In-Article Recommendation Box */}
            <RecommendBox className="mb-8" />

            {/* Photographer Profile */}
            <PhotographerProfile name={photo.photographer} className="mb-8" />

            {/* Related Photos Section */}
            {relatedPhotos.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h3 className="text-xl font-bold mb-4">Foto Terkait</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedPhotos.map((relatedPhoto) => (
                    <Link
                      key={relatedPhoto.id}
                      to={`/foto/${relatedPhoto.slug}`}
                      className="group block"
                    >
                      <div className="aspect-square rounded-xl overflow-hidden mb-2">
                        <img
                          src={relatedPhoto.image}
                          alt={relatedPhoto.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <h4 className="text-sm font-medium line-clamp-2 group-hover:text-times-red transition-colors">
                        {relatedPhoto.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar - 30% */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Links Panel */}
            <QuickLinksPanel />

            {/* Popular Photos in Sidebar */}
            <SidebarPopular />

            {/* E-Koran Widget */}
            <EKoranWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
