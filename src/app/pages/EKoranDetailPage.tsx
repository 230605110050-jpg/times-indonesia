import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Eye, Download, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Share2, Printer } from 'lucide-react';
import { ekoranEditions } from '../data/mockData';

export function EKoranDetailPage() {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(1);
  
  // Find the edition by id
  const edition = ekoranEditions.find(e => e.id === id) || ekoranEditions[0];
  
  // Mock pages for preview
  const totalPages = 8;
  
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const formattedDate = new Date(edition.date).toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Bar - Back button and controls */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/ekoran" 
                className="flex items-center gap-2 text-gray-600 hover:text-times-red transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Kembali</span>
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <div>
                <h1 className="font-bold text-lg">{edition.edition}</h1>
                <p className="text-xs text-gray-500">{formattedDate}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-lg">
                <Eye className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium">{edition.views.toLocaleString()}</span>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Printer className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-times-red to-times-purple text-white font-medium rounded-lg hover:shadow-lg transition-shadow">
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Adjusted padding for clean layout */}
      <div className="py-8 pb-28">
        <div className="max-w-5xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-2xl overflow-hidden"
              style={{ 
                transform: `scale(${zoom})`,
                transformOrigin: 'top center'
              }}
            >
              {/* Page Content Mockup */}
              <div className="aspect-[3/4] bg-white relative">
                {/* Newspaper Header */}
                <div className="border-b-2 border-black px-8 py-4 text-center">
                  <h1 className="text-3xl font-bold tracking-wider">TIMES INDONESIA</h1>
                  <div className="flex items-center justify-center gap-4 mt-2 text-sm">
                    <span>{formattedDate}</span>
                    <span className="w-1 h-1 bg-black rounded-full" />
                    <span>Halaman {currentPage} dari {totalPages}</span>
                  </div>
                </div>
                
                {/* Content Mockup - Different for each page */}
                <div className="p-8">
                  {currentPage === 1 && (
                    <div className="space-y-6">
                      <div className="text-center">
                        <h2 className="text-2xl font-bold leading-tight">
                          {edition.title.includes('1847') ? 'Virgil van Dijk: Yakin Belanda Juara Piala Dunia 2026' :
                           edition.title.includes('1846') ? 'Artis Korea Diduga Gelapkan Pajak' :
                           edition.title.includes('1845') ? 'Tuangkan Kerinduan Lewat Lagu' :
                           edition.title.includes('1844') ? 'Taylor Swift Tulis Lagu Untuk Story 5' :
                           'Luka Modric Tinggalkan AC Milan'}
                        </h2>
                      </div>
                      
                      <div className="aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden">
                        <img 
                          src={edition.coverImage} 
                          alt="Cover" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h3 className="font-bold text-sm">Laporan Utama</h3>
                          <p className="text-xs text-gray-500 line-clamp-3">
                            Jakarta - Tim Nasional Indonesia berhasil membuat sejarah baru dengan melangkah ke semifinal...
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-bold text-sm">Editorial</h3>
                          <p className="text-xs text-gray-500 line-clamp-3">
                            Perjalanan Garuda ke semifinal menunjukkan betapa kemajuan sudah dimulai...
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {currentPage > 1 && (
                    <div className="grid grid-cols-3 gap-6">
                      {[1, 2, 3].map((col) => (
                        <div key={col} className="space-y-4">
                          <div className="aspect-[3/4] bg-gray-100 rounded overflow-hidden">
                            <img 
                              src={`https://picsum.photos/300/400?random=${currentPage * 10 + col}`} 
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="font-bold text-sm">Judul Artikel panjang sekali {currentPage}-{col}</h3>
                          <p className="text-xs text-gray-500 line-clamp-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Page Navigation */}
            <div className="flex items-center gap-2">
              <button 
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(totalPages, 8) }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentPage === i + 1 ? 'bg-times-red' : 'bg-gray-300'
                    }`}
                  />
                ))}
                {totalPages > 8 && <span className="text-xs text-gray-500">...</span>}
              </div>
              
              <button 
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            {/* Zoom Controls */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setZoom(Math.max(0.5, zoom - 0.25))}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <span className="text-sm font-medium w-16 text-center">{Math.round(zoom * 100)}%</span>
              <button 
                onClick={() => setZoom(Math.min(2, zoom + 0.25))}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
            </div>
            
            {/* Page Info */}
            <div className="text-sm text-gray-500">
              Halaman <span className="font-medium text-black">{currentPage}</span> / {totalPages}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
