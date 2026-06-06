import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { Clock, Eye, Share2, Bookmark, Facebook, Twitter, Mail, ArrowLeft, User, Home } from 'lucide-react';
import { articles } from '../data/mockData';

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

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Artikel Tidak Ditemukan</h1>
          <Link to="/" className="text-times-red hover:underline">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = articles.filter(
    (a) => a.category === article.category && a.id !== article.id
  ).slice(0, 3);

  const publishDate = new Date(article.publishedAt).toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const publishTime = new Date(article.publishedAt).toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-secondary-background py-4">
        <div className="max-w-4xl mx-auto px-4">
<div className="flex items-center gap-2 text-sm text-text-secondary">
            <Link to="/" className="hover:text-times-red transition-colors">
              <HomeIcon className="w-4 h-4" />
            </Link>
            <span>/</span>
            <Link to={`/kanal/${article.category.toLowerCase().replace(/ /g, '-')}`} className="hover:text-times-red transition-colors">
              {article.category}
            </Link>
            <span>/</span>
            <span className="text-text-primary truncate">{article.title}</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Back Button */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-times-red mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali
            </Link>
          </motion.div>

          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link
              to={`/kanal/${article.category.toLowerCase().replace(/ /g, '-')}`}
              className="inline-block px-4 py-1.5 bg-gradient-to-r from-times-red to-times-purple text-white text-sm font-semibold rounded-full mb-4 hover:shadow-lg transition-shadow"
            >
              {article.category}
            </Link>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
          >
            {article.title}
          </motion.h1>

          {/* Excerpt */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-text-secondary mb-8 leading-relaxed"
          >
            {article.excerpt}
          </motion.p>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 pb-6 mb-6 border-b border-border"
          >
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold">{article.author.name}</div>
                <div className="text-sm text-text-secondary">Penulis</div>
              </div>
            </div>
            <div className="h-10 w-px bg-border hidden sm:block" />
            <div>
              <div className="font-semibold">{article.editor}</div>
              <div className="text-sm text-text-secondary">Editor</div>
            </div>
            <div className="h-10 w-px bg-border hidden sm:block" />
            <div className="text-sm">
              <div className="font-semibold">{publishDate}</div>
              <div className="text-text-secondary">{publishTime} WIB</div>
            </div>
            <div className="h-10 w-px bg-border hidden md:block" />
            <div className="flex items-center gap-4 text-sm text-text-secondary">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} menit baca</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{article.views.toLocaleString()}</span>
              </div>
            </div>
          </motion.div>

          {/* Share Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="text-sm font-semibold text-text-secondary">Bagikan:</span>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1877f2] text-white rounded-lg hover:opacity-90 transition-opacity text-sm">
              <Facebook className="w-4 h-4" />
              <span className="hidden sm:inline">Facebook</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1da1f2] text-white rounded-lg hover:opacity-90 transition-opacity text-sm">
              <Twitter className="w-4 h-4" />
              <span className="hidden sm:inline">Twitter</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:opacity-90 transition-opacity text-sm">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Email</span>
            </button>
            <button className="ml-auto flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary-background transition-colors text-sm">
              <Bookmark className="w-4 h-4" />
              <span className="hidden sm:inline">Simpan</span>
            </button>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8 rounded-xl overflow-hidden"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="prose prose-lg max-w-none mb-12"
          >
            <p className="text-lg leading-relaxed mb-6">{article.content}</p>
            <p className="text-lg leading-relaxed mb-6">
              Ini adalah konten artikel yang akan berisi informasi lengkap mengenai berita tersebut.
              Dalam implementasi sebenarnya, konten ini akan diambil dari CMS dan bisa berisi berbagai
              elemen seperti paragraf, heading, gambar, video, quote, dan embed social media.
            </p>
            <blockquote className="border-l-4 border-times-red pl-6 py-4 my-8 bg-secondary-background rounded-r-lg">
              <p className="text-lg italic text-text-secondary mb-2">
                "Kutipan penting dari artikel atau pernyataan narasumber akan ditampilkan di sini
                dengan styling yang menarik dan mudah dibaca."
              </p>
              <footer className="text-sm font-semibold">— Narasumber</footer>
            </blockquote>
            <p className="text-lg leading-relaxed mb-6">
              Konten berita akan dilanjutkan dengan informasi yang lebih detail, analisis mendalam,
              dan konteks yang relevan untuk memberikan pemahaman komprehensif kepada pembaca.
            </p>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-2 pb-8 mb-8 border-b border-border"
          >
            <span className="text-sm font-semibold text-text-secondary">Tags:</span>
            {['Indonesia', article.category, 'Berita Terkini', 'TIMES Indonesia'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-secondary-background text-text-secondary text-sm rounded-full hover:bg-times-red hover:text-white transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-12 bg-secondary-background">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Berita Terkait</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  to={`/berita/${relatedArticle.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-times-red font-semibold">{relatedArticle.category}</span>
                    <h3 className="font-bold mt-2 mb-2 line-clamp-2 group-hover:text-times-red transition-colors">
                      {relatedArticle.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-text-secondary">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{relatedArticle.readTime} mnt</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
