import { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import { ArrowUp, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_CHANNEL_URL = 'https://www.whatsapp.com/channel/0029VaFG7TP29757xsqaDd2D';

/**
 * E-Koran Reader Layout
 * 
 * Layout for e-koran detail page WITH Header but WITHOUT Footer.
 * This provides a clean reading experience while keeping navigation accessible.
 */
export function EKoranReaderLayout() {
  const [isVisible, setIsVisible] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    const wasClosed = sessionStorage.getItem('whatsapp_floating_closed');
    if (!wasClosed) {
      const timer = setTimeout(() => setShowWhatsApp(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeWhatsApp = () => {
    setShowWhatsApp(false);
    sessionStorage.setItem('whatsapp_floating_closed', 'true');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header - Shown */}
      <Header />
      
      {/* Main Content - No Footer */}
      <main className="flex-1">
        <Outlet />
      </main>
      
      {/* Floating WhatsApp Button */}
      <AnimatePresence>
        {showWhatsApp && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.3 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="fixed bottom-20 right-6 z-50"
          >
            <a
              href={WHATSAPP_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              aria-label="Hubungi via WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="font-semibold text-sm hidden group-hover:inline">
                WhatsApp Channel
              </span>
              <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
            </a>
            
            <button
              onClick={closeWhatsApp}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center shadow-md transition-colors"
              aria-label="Tutup"
            >
              <X className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-times-red hover:bg-red-700 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
