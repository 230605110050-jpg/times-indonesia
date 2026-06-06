import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ChevronRight,
  Trophy,
  Landmark,
  HeartHandshake,
  Apple,
  UtensilsCrossed,
  PenTool,
  Bot,
  CalendarDays,
  Users,
  Globe,
  Leaf,
  Cpu,
  TrendingUp,
  Gift,
  Receipt,
  MapPin,
  FileText,
  UserCheck,
  Clock,
  Home,
} from 'lucide-react';
import {
  focusTopics,
  focusStatistics,
  quickLinksFocus,
  FocusTopic,
} from '../data/mockData';

// Icon mapping for focus topics
const getTopicIcon = (iconName: string) => {
  const icons: Record<string, React.ReactNode> = {
    Trophy: <Trophy className="w-6 h-6" />,
    Landmark: <Landmark className="w-6 h-6" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6" />,
    Apple: <Apple className="w-6 h-6" />,
    UtensilsCrossed: <UtensilsCrossed className="w-6 h-6" />,
    PenTool: <PenTool className="w-6 h-6" />,
    Bot: <Bot className="w-6 h-6" />,
    CalendarDays: <CalendarDays className="w-6 h-6" />,
    Users: <Users className="w-6 h-6" />,
    Globe: <Globe className="w-6 h-6" />,
    Leaf: <Leaf className="w-6 h-6" />,
    Cpu: <Cpu className="w-6 h-6" />,
    TrendingUp: <TrendingUp className="w-6 h-6" />,
    Gift: <Gift className="w-6 h-6" />,
    Receipt: <Receipt className="w-6 h-6" />,
  };
  return icons[iconName] || <Trophy className="w-6 h-6" />;
};

// Icon mapping for statistics
const getStatIcon = (iconName: string) => {
  const icons: Record<string, React.ReactNode> = {
    MapPin: <MapPin className="w-5 h-5" />,
    FileText: <FileText className="w-5 h-5" />,
    UserCheck: <UserCheck className="w-5 h-5" />,
    Clock: <Clock className="w-5 h-5" />,
  };
  return icons[iconName] || <MapPin className="w-5 h-5" />;
};

// Topic Card Component
function FocusTopicCard({ topic, index }: { topic: FocusTopic; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
    >
      <div className="flex items-start gap-4">
        {/* Hashtag Icon */}
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center">
          <span className="text-times-red font-bold text-lg">#</span>
        </div>
        
        <div className="flex-1 min-w-0">
          {/* Title */}
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1 group-hover:text-times-red transition-colors">
            {topic.title}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-gray-500 mb-3 line-clamp-2">
            {topic.description}
          </p>
          
          {/* CTA */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400 group-hover:text-times-red transition-colors">
              Klik untuk membaca
            </span>
            {/* Decorative Line */}
            <div className="w-8 h-0.5 bg-pink-100 rounded-full" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Statistics Card Component
function StatCard({
  stat,
  index,
}: {
  stat: { label: string; value: string; icon: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center"
    >
      <div className="text-times-red font-bold text-2xl mb-1">{stat.value}</div>
      <div className="text-gray-500 text-sm">{stat.label}</div>
    </motion.div>
  );
}

// Featured Topic Card Component
function FeaturedTopicCard() {
  const featuredTopic = focusTopics[0];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-pink-50 rounded-2xl p-8 border border-pink-100 mb-12"
    >
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Icon in Circle */}
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-pink-200 flex items-center justify-center text-times-red">
          {getTopicIcon(featuredTopic.icon)}
        </div>
        
        <div className="flex-1">
          {/* Title */}
          <h2 className="font-bold text-2xl text-gray-900 mb-3">
            {featuredTopic.title}
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {featuredTopic.description}
          </p>
          
          {/* Button */}
          <Link
            to={`/fokus/${featuredTopic.slug}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-times-red text-white rounded-lg text-sm font-medium hover:bg-times-red/90 transition-colors"
          >
            Baca Selengkapnya
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// Quick Links Panel Component
function QuickLinksPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl border-2 border-slate-800 mb-8 overflow-hidden"
    >
      <div className="bg-slate-800 text-white px-5 py-3">
        <h3 className="font-semibold">Temukan lebih banyak fokus</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {quickLinksFocus.map((link, index) => (
          <Link
            key={link.id}
            to={`/kanal/${link.slug}`}
            className="flex items-center justify-between px-5 py-3 hover:bg-gray-50 transition-colors"
          >
            <span className="text-gray-700">{link.title}</span>
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

// Main FokusPage Component
export function FokusPage() {
  const [visibleCount, setVisibleCount] = useState(9);
  const displayedTopics = focusTopics.slice(0, visibleCount);
  const hasMore = visibleCount < focusTopics.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, focusTopics.length));
  };

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Quick Links Panel - Top */}
        <QuickLinksPanel />

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2 text-sm text-gray-500 mb-6"
        >
          <Link to="/" className="hover:text-times-red transition-colors">
            <Home className="w-4 h-4" />
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span>Fokus</span>
        </motion.div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Fokus Berita</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Laporan mendalam dan analisis komprehensif tentang isu-isu strategis yang lagi viral dan banyak dibicarakan
          </p>
        </motion.div>

        {/* Featured Focus Topic */}
        <FeaturedTopicCard />

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {focusStatistics.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </motion.div>

        {/* Focus Topics Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Topik Fokus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayedTopics.map((topic, index) => (
              <FocusTopicCard key={topic.id} topic={topic} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-10"
          >
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-pink-200 text-times-red rounded-full text-sm font-medium hover:bg-pink-50 transition-colors"
            >
              Muat Lebih Banyak
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
