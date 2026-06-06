import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Home, Search } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-16">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-9xl font-bold bg-gradient-to-r from-times-red to-times-purple bg-clip-text text-transparent mb-4">
            404
          </div>
          <h1 className="text-4xl font-bold mb-4">Halaman Tidak Ditemukan</h1>
          <p className="text-text-secondary text-lg mb-8">
            Maaf, halaman yang Anda cari tidak dapat ditemukan.
            Mungkin halaman telah dipindahkan atau tidak pernah ada.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-times-red to-times-purple text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
            >
              <Home className="w-5 h-5" />
              Kembali ke Beranda
            </Link>
            <Link
              to="/search"
              className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-secondary-background transition-colors font-semibold"
            >
              <Search className="w-5 h-5" />
              Cari Berita
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
