import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import {
  Newspaper,
  Download,
  Calendar,
  Eye,
  Users,
  ArrowRight,
  ChevronRight,
  Home,
  MessageCircle,
  Clock,
  BookOpen,
} from 'lucide-react';
import { QuickLinksPanel } from '../components/QuickLinksPanel';
import { ekoranEditions, EKoran } from '../data/mockData';

// Helper function to format view count
function formatViews(views: number): string {
  if (views >= 1000) {
    return (views / 1000).toFixed(1) + 'k';
  }
  return views.toString();
}

// Helper function to format date
function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

// Helper function to group editions by date
function groupEditionsByDate(editions: EKoran[]): { [key: string]: EKoran[] } {
  return editions.reduce((acc, edition) => {
    const dateKey = edition.date;
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(edition);
    return acc;
  }, {} as { [key: string]: EKoran[] });
}

// Animated counter component
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// Category badge colors
const categoryColors: Record<string, string> = {
  Olahraga: 'bg-orange-500',
  Hiburan: 'bg-pink-500',
  Politik: 'bg-blue-600',
  Musik: 'bg-purple-500',
  Film: 'bg-red-500',
  Lifestyle: 'bg-teal-500',
  Kuliner: 'bg-amber-500',
  Internasional: 'bg-cyan-500',
};

// Cover Card Component
function CoverCard({ edition, index }: { edition: EKoran; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group cursor-pointer"
    >
      <Link to={`/ekoran/${edition.id}`}>
        <div className="relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
          {/* Cover Image with Aspect Ratio */}
          <div className="aspect-[3/4] overflow-hidden relative">
            <img
              src={edition.coverImage}
              alt={edition.edition}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* View Count Badge */}
            <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full">
              <span className="text-white text-xs font-medium">
                <Eye className="w-3 h-3 inline mr-1" />
                {formatViews(edition.views)}
              </span>
            </div>

            {/* Category Badge */}
            <div
              className={`absolute top-3 left-3 px-2 py-1 rounded-full ${
                categoryColors[edition.category] || 'bg-gray-500'
              }`}
            >
              <span className="text-white text-xs font-medium">
                {edition.category}
              </span>
            </div>

            {/* Hover Overlay with Action */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <BookOpen className="w-4 h-4" />
                Baca Sekarang
              </button>
            </div>
          </div>

          {/* Card Footer with Edition Info */}
          <div className="p-3 border-t border-gray-100">
            <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">
              {edition.edition}
            </h3>
            <p className="text-gray-500 text-xs flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {edition.timeAgo}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// Date Section Component
function DateSection({
  date,
  editions: dateEditions,
  index,
}: {
  date: string;
  editions: EKoran[];
  index: number;
}) {
  const formattedDate = formatDate(date);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-10"
    >
      {/* Date Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px flex-1 bg-gray-200" />
        <h2 className="text-lg font-bold text-gray-900">{formattedDate}</h2>
        <div className="h-px flex-1 bg-gray-200" />
      </div>

      {/* Edition Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {dateEditions.map((edition, idx) => (
          <CoverCard key={edition.id} edition={edition} index={idx} />
        ))}
      </div>
    </motion.div>
  );
}

// Main E-Koran Page Component
export function EKoranPage() {
  const navigate = useNavigate();
  const latestEdition = ekoranEditions[0];
  const groupedEditions = groupEditionsByDate(ekoranEditions);
  const dates = Object.keys(groupedEditions).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );

  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section with Background */}
      <div className="relative h-[520px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920)',
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-8 left-4"
          >
            <nav className="flex items-center gap-2 text-sm text-gray-300">
              <Link to="/" className="hover:text-white transition-colors">
                <Home className="w-4 h-4" />
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">E-Koran</span>
            </nav>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            {/* Badge */}
            <div className="inline-block px-4 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <span className="text-white text-sm font-medium tracking-wider">
                E-KORAN DIGITAL
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              E-KORAN
            </h1>

            {/* Description */}
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Platform baca koran digital TIMES Indonesia. Akses ribuan edisi
              koran dari berbagai kategori: olahraga, hiburan, politik, musik,
              film, lifestyle, kuliner, dan internasional.
            </p>

            {/* Statistics */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <Users className="w-6 h-6 text-white/80" />
              <span className="text-white text-3xl font-bold">
                <AnimatedCounter target={68369} />
              </span>
              <span className="text-white/80 text-lg">Pelanggan</span>
            </div>

{/* CTA Button - WhatsApp */}
            <a
              href="https://www.whatsapp.com/channel/0029VaFG7TP29757xsqaDd2D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Berlangganan Gratis WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

{/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pt-8 relative z-10">
        {/* Quick Links */}
        <div className="mb-8">
          <QuickLinksPanel page="ekoran" />
        </div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <Newspaper className="w-8 h-8 text-times-red" />
            <h2 className="text-3xl font-bold text-gray-900">
              Galeri E-Koran
            </h2>
          </div>
          <p className="text-gray-500 text-lg">
            Koleksi lengkap koran digital harian TIMES Indonesia
          </p>
        </motion.div>

        {/* Latest Edition Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-14"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Cover Side */}
              <div className="p-6 lg:p-8 flex items-center justify-center bg-gray-50 relative overflow-hidden">
                <div className="relative group">
                  {/* 3D Effect Shadow */}
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-gray-200 rounded-lg" />
                  <div className="absolute -bottom-2 -right-2 w-full h-full bg-gray-300 rounded-lg" />
                  <img
                    src={latestEdition.coverImage}
                    alt={latestEdition.edition}
                    className="relative w-full max-w-xs rounded-lg shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="p-6 lg:p-10 flex flex-col justify-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-times-red text-white text-xs font-semibold rounded-full w-fit mb-4">
                  <span>TERBARU</span>
                </div>

                {/* Title */}
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {latestEdition.edition}: TIMES Indonesia
                </h2>
                <p className="text-gray-900 font-medium text-lg mb-2">
                  Buka Wawasan, Bacaan Positif Masyarakat
                </p>

                {/* Date */}
                <div className="flex items-center gap-2 text-gray-500 mb-6">
                  <Calendar className="w-5 h-5" />
                  <span>{formatDate(latestEdition.date)}</span>
                </div>

                {/* Time Ago */}
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                  <Clock className="w-4 h-4" />
                  <span>{latestEdition.timeAgo}</span>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Eye className="w-5 h-5" />
                    <span className="font-semibold">
                      {formatViews(latestEdition.views)}
                    </span>
                    <span className="text-sm">pembaca</span>
                  </div>
                </div>

{/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <button 
                    onClick={() => navigate(`/ekoran/${latestEdition.id}`)}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                    Baca Online
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                    <Download className="w-5 h-5" />
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Archive Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Arsip E-Koran
          </h2>

          {/* Date Grouped Editions */}
          {dates.map((date, index) => (
            <DateSection
              key={date}
              date={date}
              editions={groupedEditions[date]}
              index={index}
            />
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <button className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-200 text-gray-600 font-semibold rounded-full hover:border-times-red hover:text-times-red transition-colors">
            Muat Lebih Banyak
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Subscribe CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-times-red to-times-purple rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Berlangganan E-Koran TIMES Indonesia
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Dapatkan akses unlimited ke seluruh edisi E-Koran TIMES Indonesia.
            Baca koran digital favorite Anda kapan saja, di mana saja.
          </p>
          <button className="px-8 py-4 bg-white text-times-red font-bold rounded-lg hover:shadow-lg transition-shadow">
            Mulai Berlangganan
          </button>
        </motion.div>
      </div>
    </div>
  );
}
