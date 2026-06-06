import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Clock, Eye, ArrowLeft, Globe, Flag, MapPin, CheckCircle, Coffee, TrendingUp, Laptop, GraduationCap, Trophy, Car, Heart, UtensilsCrossed, Plane, User, BookLock, Newspaper } from 'lucide-react';
import { articles, categories } from '../data/mockData';

export function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);
  const categoryArticles = articles.filter((a) => a.category === category?.name);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Kategori Tidak Ditemukan</h1>
          <Link to="/" className="text-times-red hover:underline">
                Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-times-red mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-times-red to-times-purple rounded-xl flex items-center justify-center text-white">
              {getCategoryIcon({ slug: category.slug, className: "w-8 h-8" })}
            </div>
            <div>
              <h1 className="text-4xl font-bold">{category.name}</h1>
              <p className="text-text-secondary mt-1">{category.description}</p>
            </div>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-times-red to-times-purple rounded-full" />
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryArticles.length > 0 ? (
            categoryArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/berita/${article.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow h-full"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-times-red transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-text-secondary">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime} menit</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{article.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-text-secondary text-lg">Belum ada berita di kategori ini</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function getCategoryIcon({ slug, className = "w-8 h-8" }: { slug: string; className?: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    'internasional': <Globe className={className} />,
    'nasional': <Flag className={className} />,
    'peristiwa': <MapPin className={className} />,
    'cek-fakta': <CheckCircle className={className} />,
    'kopi-times': <Coffee className={className} />,
    'ekonomi': <TrendingUp className={className} />,
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
