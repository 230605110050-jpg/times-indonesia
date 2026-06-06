import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/mockData';

// Different quick links for each page type
const pageSpecificLinks: Record<string, { id: string; title: string; slug: string }[]> = {
  home: [
    { id: '1', title: 'Berita kesehatan', slug: 'kesehatan' },
    { id: '2', title: 'Panduan Kota & Daerah', slug: 'daerah' },
    { id: '3', title: 'Berita online terkini', slug: 'berita-terkini' },
  ],
  fokus: [
    { id: '1', title: 'Trending Sekarang', slug: 'trending' },
    { id: '2', title: 'Breaking News', slug: 'breaking' },
    { id: '3', title: 'Artikel Populer', slug: 'populer' },
  ],
  ekoran: [
    { id: '1', title: 'Edisi Terbaru', slug: 'ekoran' },
    { id: '2', title: 'Arsip Koran', slug: 'arsip' },
    { id: '3', title: 'Download PDF', slug: 'download' },
  ],
  foto: [
    { id: '1', title: 'Galeri Foto', slug: 'foto' },
    { id: '2', title: 'Foto Peristiwa', slug: 'peristiwa' },
    { id: '3', title: 'Gallery лучшее', slug: 'gallery' },
  ],
  video: [
    { id: '1', title: 'Video News', slug: 'video' },
    { id: '2', title: 'Live Streaming', slug: 'live' },
    { id: '3', title: 'Dokumenter', slug: 'dokumenter' },
  ],
  kanal: [
    { id: '1', title: 'Semua Kanal', slug: 'kanal' },
    { id: '2', title: 'Berita Trending', slug: 'trending' },
    { id: '3', title: 'Artikel Terbaru', slug: 'terbaru' },
  ],
};

// Function to get random links from categories
function getRandomLinks(count: number = 3): { id: string; title: string; slug: string }[] {
  const shuffled = [...categories].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map((cat, index) => ({
    id: String(index + 1),
    title: cat.name,
    slug: cat.slug,
  }));
}

interface QuickLinksPanelProps {
  className?: string;
  page?: 'home' | 'fokus' | 'ekoran' | 'foto' | 'video' | 'kanal' | 'random';
}

export function QuickLinksPanel({ className = '', page = 'random' }: QuickLinksPanelProps) {
  const [links, setLinks] = useState<{ id: string; title: string; slug: string }[]>([]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (page === 'random') {
      // Random links on each render (via key change)
      setLinks(getRandomLinks(3));
    } else {
      // Page-specific links
      setLinks(pageSpecificLinks[page] || pageSpecificLinks.home);
    }
  }, [page, key]);

  // Shuffle on refresh for random mode
  useEffect(() => {
    if (page === 'random') {
      setKey((prev) => prev + 1);
    }
  }, []);

  if (links.length === 0) return null;

  return (
    <motion.div
      key={key}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`bg-white rounded-xl border-2 border-slate-800 overflow-hidden ${className}`}
    >
      <div className="bg-slate-800 text-white px-5 py-3">
        <h3 className="font-semibold">Temukan lebih banyak</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {links.map((link, index) => (
          <Link
            key={`${link.id}-${key}`}
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
