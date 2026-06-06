import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { Search, Clock, Eye } from 'lucide-react';
import { articles } from '../data/mockData';

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState(articles);

  useEffect(() => {
    if (query) {
      const filtered = articles.filter(
        (article) =>
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          article.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults(articles);
    }
  }, [query]);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Search className="w-8 h-8 text-times-red" />
            <h1 className="text-4xl font-bold">Hasil Pencarian</h1>
          </div>
          {query && (
            <p className="text-text-secondary text-lg">
              Menampilkan {searchResults.length} hasil untuk "<span className="font-semibold text-text-primary">{query}</span>"
            </p>
          )}
          <div className="h-1 w-32 bg-gradient-to-r from-times-red to-times-purple rounded-full mt-4" />
        </motion.div>

        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((article, index) => (
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
                    <span className="text-xs text-times-red font-semibold">{article.category}</span>
                    <h3 className="font-bold mt-2 mb-2 line-clamp-2 group-hover:text-times-red transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
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
        ) : (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Tidak Ada Hasil</h3>
            <p className="text-text-secondary">
              Tidak ditemukan hasil untuk "{query}". Coba kata kunci lain.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
