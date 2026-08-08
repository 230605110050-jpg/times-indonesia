import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Eye, Clock, Sparkles, ArrowRight, ChevronRight, Layers } from 'lucide-react';
import { liputanKhususArticles, LiputanKhususItem } from '../data/mockData';

export function LiputanKhususSection() {
  const [selectedArticle, setSelectedArticle] = useState<LiputanKhususItem>(liputanKhususArticles[0]);

  return (
    <section className="py-12 bg-slate-950 relative overflow-hidden border-y border-red-900/40">
      
      {/* Background Lighting Effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-red-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-amber-900/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#791f1f_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-red-900/40 pb-6">
          <div className="flex items-center gap-4">
            {/* Logo Image */}
            <div className="p-2.5 bg-gradient-to-br from-red-900/80 to-slate-900 rounded-2xl border border-red-700/40 shadow-lg shadow-red-950/50">
              <img
                src="/image/logo_lipsus3.webp"
                alt="Liputan Khusus TIMES Indonesia"
                className="h-9 w-auto object-contain"
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-red-600/30 text-red-400 border border-red-500/40 text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-red-400" /> Investigasi & In-Depth
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
                LIPUTAN KHUSUS <span className="text-red-500">TIMES</span>
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                Laporan mendalam & analisis komprehensif isu-isu krusial nusantara
              </p>
            </div>
          </div>

          {/* Action Button */}
          <Link
            to="/liputan-khusus"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-red-900/30 transition-all border border-red-500/30 cursor-pointer self-start md:self-auto"
          >
            Jelajah Semua Seri <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* FEATURED & LIST BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Hero Spotlight (Left - lg:col-span-7) */}
          <div className="lg:col-span-7">
            <motion.div
              key={selectedArticle.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-red-900/50 shadow-2xl h-[420px] sm:h-[480px] flex flex-col justify-end"
            >
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

              {/* Top Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 bg-red-600/90 backdrop-blur-md text-white text-xs font-black rounded-lg shadow-md tracking-wider flex items-center gap-1.5 border border-red-400/30">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  {selectedArticle.seriesTitle}
                </span>
                <span className="px-2.5 py-1 bg-slate-900/80 backdrop-blur-md text-slate-300 text-[11px] font-semibold rounded-lg border border-slate-700/50">
                  {selectedArticle.partNumber}
                </span>
              </div>

              {/* Bottom Content Box */}
              <div className="relative z-10 p-6 sm:p-8">
                <div className="flex items-center gap-3 text-xs text-red-400 font-bold mb-2">
                  <span className="px-2 py-0.5 bg-red-950/80 rounded border border-red-800/60 text-red-300">{selectedArticle.category}</span>
                  <span>•</span>
                  <span className="text-slate-400 flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {selectedArticle.readTime} min baca</span>
                </div>

                <Link to={`/berita/${selectedArticle.slug}`}>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-snug line-clamp-2 mb-3 group-hover:text-red-400 transition-colors">
                    {selectedArticle.title}
                  </h3>
                </Link>

                <p className="text-slate-300 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed font-normal">
                  {selectedArticle.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <img src={selectedArticle.author.avatar} alt={selectedArticle.author.name} className="w-8 h-8 rounded-full object-cover border border-red-500/40" />
                    <div>
                      <div className="text-xs font-bold text-white">{selectedArticle.author.name}</div>
                      <div className="text-[10px] text-slate-400">{selectedArticle.date}</div>
                    </div>
                  </div>

                  <Link
                    to={`/berita/${selectedArticle.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl transition-all shadow-md cursor-pointer"
                  >
                    Baca Selengkapnya <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Side Cards List (Right Column - lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-3 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-2 border-b border-red-900/30">
              <span className="text-xs font-bold text-red-400 tracking-wider uppercase flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-red-500" /> Seri Liputan Lainnya
              </span>
              <span className="text-[11px] text-slate-500">{liputanKhususArticles.length} Seri Tersedia</span>
            </div>

            <div className="space-y-3">
              {liputanKhususArticles.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedArticle(item)}
                  className={`group p-3.5 rounded-2xl transition-all duration-300 border cursor-pointer ${
                    selectedArticle.id === item.id
                      ? 'bg-gradient-to-r from-red-950/90 to-slate-900 border-red-500/60 shadow-lg shadow-red-950/40 ring-1 ring-red-500/40'
                      : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800/80 hover:border-red-900/50'
                  }`}
                >
                  <div className="flex gap-3.5 items-center">
                    <div className="w-24 h-20 sm:w-28 sm:h-22 rounded-xl overflow-hidden relative flex-shrink-0 bg-slate-950">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-slate-950/30" />
                      <span className="absolute bottom-1 left-1 px-1.5 py-0.5 bg-black/70 backdrop-blur-md text-[9px] font-bold text-white rounded">
                        {item.partNumber}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-extrabold text-red-400 uppercase tracking-wider">{item.category}</span>
                        <span className="text-[10px] text-slate-500">• {item.date}</span>
                      </div>
                      <h4 className={`font-bold text-xs sm:text-sm line-clamp-2 leading-snug transition-colors ${
                        selectedArticle.id === item.id ? 'text-white' : 'text-slate-200 group-hover:text-red-400'
                      }`}>
                        {item.title}
                      </h4>
                      <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2">
                        <span>{item.author.name}</span>
                        <span className="flex items-center gap-1 text-slate-400"><Eye className="w-3 h-3 text-red-400" /> {(item.views / 1000).toFixed(1)}k</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
