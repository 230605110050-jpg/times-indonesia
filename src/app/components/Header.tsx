import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { Search, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { categories, breakingNews } from '../data/mockData';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentBreakingIndex, setCurrentBreakingIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBreakingIndex((prev) => (prev + 1) % breakingNews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

return (
    <header className="sticky top-0 z-50">
      {/* Breaking News Ticker - Hidden for cleaner homepage */}
      {/* 
      <div className="bg-times-red text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-9">
            <div className="px-3 py-1 bg-white/20 text-xs font-semibold rounded mr-3">
              BREAKING
            </div>
            <div className="flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentBreakingIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-sm truncate"
                >
                  {breakingNews[currentBreakingIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      */}

{/* Main Navbar with Gradient */}
      <nav
        className={`bg-gradient-to-r from-[#7F0B1A] to-[#3F154F] text-white transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/image/logo_times_indonesia.webp" 
                alt="TIMES Indonesia" 
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <Link to="/" className="hover:text-white/80 transition-colors font-medium">
                Home
              </Link>
              <Link to="/kanal" className="hover:text-white/80 transition-colors font-medium">
                Kanal
              </Link>
              <Link to="/fokus" className="hover:text-white/80 transition-colors font-medium">
                Fokus
              </Link>
              <Link to="/ekoran" className="hover:text-white/80 transition-colors font-medium">
                E-Koran
              </Link>
              <Link to="/foto" className="hover:text-white/80 transition-colors font-medium">
                Foto
              </Link>
              <Link to="/video" className="hover:text-white/80 transition-colors font-medium">
                Video
              </Link>
            </div>

            {/* Search & Mobile Menu */}
            <div className="flex items-center gap-3">
              <form onSubmit={handleSearch} className="hidden md:flex items-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Cari berita..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 pr-10 text-sm placeholder:text-white/60 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all w-48 focus:w-64"
                  />
                  <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </form>
              <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-white/20 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-3">
                <form onSubmit={handleSearch} className="mb-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Cari berita..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-2 pr-10 text-sm placeholder:text-white/60"
                    />
                    <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
                      <Search className="w-4 h-4" />
                    </button>
                  </div>
                </form>
                <Link to="/" className="block py-2 hover:text-white/80">Home</Link>
                <Link to="/kanal" className="block py-2 hover:text-white/80">Kanal</Link>
                <Link to="/fokus" className="block py-2 hover:text-white/80">Fokus</Link>
                <Link to="/ekoran" className="block py-2 hover:text-white/80">E-Koran</Link>
                <Link to="/foto" className="block py-2 hover:text-white/80">Foto</Link>
                <Link to="/video" className="block py-2 hover:text-white/80">Video</Link>
                <div className="border-t border-white/20 pt-3 mt-3">
                  <div className="font-medium mb-2 text-sm">Kanal</div>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.slice(0, 8).map((cat) => (
                      <Link
                        key={cat.id}
                        to={`/kanal/${cat.slug}`}
                        className="text-sm py-1 hover:text-white/80"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Kanal Links Bar - Below Navbar with Red Background */}
      <div className="bg-times-red">
        <div className="max-w-7xl mx-auto px-4">
          <div className="overflow-x-auto hide-scrollbar py-3">
            <motion.div 
              className="flex items-center gap-2 min-w-max"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {categories.map((cat, index) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                >
                  <Link
                    to={`/kanal/${cat.slug}`}
                    className="group flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/20 hover:bg-white text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 whitespace-nowrap"
                  >
                    <span className="group-hover:text-times-red transition-colors">{cat.name}</span>
                    <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}
