import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  Globe, Flag, MapPin, CheckCircle, Coffee, TrendingUp, 
  Laptop, GraduationCap, Trophy, Car, Heart, UtensilsCrossed, 
  Plane, User, BookLock, Newspaper, Building, AlertCircle, 
  Tv, DollarSign, Sparkles, PenTool, Clock, Shield,
  FileText, ArrowRight
} from 'lucide-react';
import { QuickLinksPanel } from '../components/QuickLinksPanel';

// SVG Home Icon Component (inline for consistency)
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

// Extended kanal list with all categories from the design
const allKanals = [
  { id: '1', name: 'News Commerce', slug: 'news-commerce', description: 'Berita commerce dan bisnis terbaru', icon: 'DollarSign' },
  { id: '2', name: 'Indonesia Positif', slug: 'indonesia-positif', description: 'Berita positif dari Indonesia', icon: 'Flag' },
  { id: '3', name: 'Peristiwa', slug: 'peristiwa', description: 'Peristiwa terkini', icon: 'AlertCircle' },
  { id: '4', name: 'Peristiwa Nasional', slug: 'peristiwa-nasional', description: 'Peristiwa di dalam negeri', icon: 'MapPin' },
  { id: '5', name: 'Peristiwa Daerah', slug: 'peristiwa-daerah', description: 'Peristiwa di daerah', icon: 'MapPin' },
  { id: '6', name: 'Peristiwa Internasional', slug: 'peristiwa-internasional', description: 'Peristiwa dunia', icon: 'Globe' },
  { id: '7', name: 'Politik', slug: 'politik', description: 'Berita politik', icon: 'Building' },
  { id: '8', name: 'Ekonomi', slug: 'ekonomi', description: 'Ekonomi dan bisnis', icon: 'TrendingUp' },
  { id: '9', name: 'Pemerintahan', slug: 'pemerintahan', description: 'Berita pemerintahan', icon: 'Building' },
  { id: '10', name: 'Gaya Hidup', slug: 'gaya-hidup', description: 'Gaya hidup dan tren', icon: 'Sparkles' },
  { id: '11', name: 'Entertainment', slug: 'entertainment', description: 'Dunia entertainment', icon: 'Tv' },
  { id: '12', name: 'Wisata', slug: 'wisata', description: 'Travel dan destinasi', icon: 'Plane' },
  { id: '13', name: 'Kuliner', slug: 'kuliner', description: 'Kuliner dan resep', icon: 'UtensilsCrossed' },
  { id: '14', name: 'Tekno', slug: 'tekno', description: 'Teknologi dan digital', icon: 'Laptop' },
  { id: '15', name: 'Olahraga', slug: 'olahraga', description: 'Berita olahraga', icon: 'Trophy' },
  { id: '16', name: 'Otomotif', slug: 'otomotif', description: 'Berita otomotif', icon: 'Car' },
  { id: '17', name: 'Pendidikan', slug: 'pendidikan', description: 'Dunia pendidikan', icon: 'GraduationCap' },
  { id: '18', name: 'Kesehatan', slug: 'kesehatan', description: 'Kesehatan dan gaya hidup', icon: 'Heart' },
  { id: '19', name: 'Positive News', slug: 'positive-news', description: 'Berita positif dari Indonesia', icon: 'Flag' },
  { id: '20', name: 'Kopi TIMES', slug: 'kopi-times', description: 'Opini dan kolom', icon: 'Coffee' },
  { id: '21', name: 'Hukum dan Kriminal', slug: 'hukum-kriminal', description: 'Berita hukum', icon: 'Shield' },
  { id: '22', name: 'GLUTERA News', slug: 'glutera-news', description: 'Berita GLUTERA', icon: 'Newspaper' },
  { id: '23', name: 'Gawainesia', slug: 'gawainesia', description: 'Berita Gawainesia', icon: 'Newspaper' },
  { id: '24', name: 'English', slug: 'english', description: 'English news', icon: 'Globe' },
  { id: '25', name: 'Wawancara Khusus', slug: 'wawancara-khusus', description: 'Wawancara eksklusif', icon: 'PenTool' },
  { id: '26', name: 'Flash News', slug: 'flash-news', description: 'Berita terkini', icon: 'Clock' },
  { id: '27', name: 'Metatimes', slug: 'metatimes', description: 'Metatimes news', icon: 'Newspaper' },
  { id: '28', name: 'Religi', slug: 'religi', description: 'Keagaan', icon: 'BookLock' },
  { id: '29', name: 'Sosok', slug: 'sosok', description: 'Profil tokoh', icon: 'User' },
  { id: '30', name: 'Cek Fakta', slug: 'cek-fakta', description: 'Verifikasi fakta', icon: 'CheckCircle' },
  { id: '31', name: 'Advertorial', slug: 'advertorial', description: 'Advertorial konten', icon: 'FileText' },
  { id: '32', name: 'Ketahanan Informasi', slug: 'ketahanan-informasi', description: 'Info ketahanan', icon: 'Shield' },
];

export function KanalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Quick Links Panel */}
      <div className="max-w-5xl mx-auto px-4 pt-6">
        <QuickLinksPanel page="kanal" />
      </div>

      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 pt-6">
        <nav className="text-sm text-gray-400 mb-2 flex items-center gap-2">
          <Link to="/" className="hover:text-times-red transition-colors">
            <HomeIcon className="w-4 h-4" />
          </Link>
          {' > '}
          <span className="text-gray-600">Kanal</span>
        </nav>
      </div>

      {/* Header Section */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Title */}
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Kanal Berita
          </h1>
          
          {/* Description */}
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
            Temukan berbagai kanal berita menarik dari TIMES Indonesia. 
           Setiap kanal memiliki konten eksklusif yang sesuai dengan minat Anda.
          </p>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm text-center"
            >
              <div className="text-3xl font-bold text-times-red mb-1">9+</div>
              <div className="text-gray-500 text-sm">Kanal</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-sm text-center"
            >
              <div className="text-3xl font-bold text-times-red mb-1">800.000+</div>
              <div className="text-gray-500 text-sm">Artikel</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-sm text-center"
            >
              <div className="text-3xl font-bold text-times-red mb-1">24/7</div>
              <div className="text-gray-500 text-sm">Update</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Kanal Grid */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allKanals.map((kanal, index) => (
            <motion.div
              key={kanal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
            >
              <Link 
                to={`/kanal/${kanal.slug}`}
                className="group block bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 h-full border border-gray-100 hover:border-times-red/30 relative"
              >
                {/* Icon and Title Row */}
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center text-times-red flex-shrink-0">
                    {getKanalIcon(kanal.icon)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 group-hover:text-times-red transition-colors">
                      {kanal.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {kanal.description}
                </p>

                {/* CTA */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-gray-400 group-hover:text-times-red transition-colors">
                    Klik untuk membaca
                  </span>
                  <ArrowRight className="w-4 h-4 text-pink-200 group-hover:text-times-red transition-colors" />
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-3 right-3 w-8 h-0.5 bg-pink-100 group-hover:bg-times-red transition-colors" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function getKanalIcon(iconName: string) {
  const iconMap: Record<string, React.ReactNode> = {
    'DollarSign': <DollarSign className="w-5 h-5" />,
    'Flag': <Flag className="w-5 h-5" />,
    'AlertCircle': <AlertCircle className="w-5 h-5" />,
    'MapPin': <MapPin className="w-5 h-5" />,
    'Globe': <Globe className="w-5 h-5" />,
    'Building': <Building className="w-5 h-5" />,
    'TrendingUp': <TrendingUp className="w-5 h-5" />,
    'Sparkles': <Sparkles className="w-5 h-5" />,
    'Tv': <Tv className="w-5 h-5" />,
    'Plane': <Plane className="w-5 h-5" />,
    'UtensilsCrossed': <UtensilsCrossed className="w-5 h-5" />,
    'Laptop': <Laptop className="w-5 h-5" />,
    'Trophy': <Trophy className="w-5 h-5" />,
    'Car': <Car className="w-5 h-5" />,
    'GraduationCap': <GraduationCap className="w-5 h-5" />,
    'Heart': <Heart className="w-5 h-5" />,
    'Coffee': <Coffee className="w-5 h-5" />,
    'Shield': <Shield className="w-5 h-5" />,
    'Newspaper': <Newspaper className="w-5 h-5" />,
    'PenTool': <PenTool className="w-5 h-5" />,
    'Clock': <Clock className="w-5 h-5" />,
    'BookLock': <BookLock className="w-5 h-5" />,
    'User': <User className="w-5 h-5" />,
    'CheckCircle': <CheckCircle className="w-5 h-5" />,
    'FileText': <FileText className="w-5 h-5" />,
  };
  return iconMap[iconName] || <Newspaper className="w-5 h-5" />;
}
