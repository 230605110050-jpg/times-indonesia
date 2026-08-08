import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ShoppingBag, Heart, Star, ArrowRight, Flame, ChevronLeft, ChevronRight } from 'lucide-react';
import { shoppingProducts } from '../data/shoppingData';

export function ShoppingRecommendationsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [likedProducts, setLikedProducts] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLikedProducts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -containerWidth : containerWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-8 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Main Outer Container with Vibrant Coral Gradient */}
        <div className="relative rounded-2xl md:rounded-3xl p-5 sm:p-7 md:p-8 overflow-hidden shadow-md bg-gradient-to-r from-[#F04432] via-[#F15343] to-[#EE3A27]">
          
          {/* Subtle Ambient Background Decorative Glows */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-black/10 rounded-full blur-2xl pointer-events-none" />

          {/* CONTENT LAYER */}
          <div className="relative z-10">

            {/* HEADER SECTION */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                {/* Shopping Bag Icon Badge */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/20 backdrop-blur-md text-white border border-white/30 flex items-center justify-center shadow-sm flex-shrink-0">
                  <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
                </div>

                <div>
                  {/* Title & Badge */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white">
                      Rekomendasi Belanja
                    </h2>
                    <span className="bg-white text-[#F04432] text-[11px] sm:text-xs font-black px-3 py-0.5 rounded-full shadow-xs inline-flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 fill-[#F04432] text-[#F04432]" /> Shopee
                    </span>
                  </div>
                  <p className="text-white/90 text-xs sm:text-sm font-medium mt-1">
                    Pilihan terbaik pilihan TIMES, langsung checkout!
                  </p>
                </div>
              </div>

              {/* Lihat Semua Button (White Pill) */}
              <Link
                to="/belanja"
                className="inline-flex items-center justify-center gap-1.5 bg-white text-[#F04432] hover:bg-orange-50 font-bold text-xs sm:text-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex-shrink-0 cursor-pointer"
              >
                Lihat Semua <ArrowRight className="w-3.5 h-3.5 text-[#F04432]" />
              </Link>
            </div>

            {/* PRODUCTS ROW WITH HALF-CIRCLE BUTTONS ATTACHED TO CONTAINER BORDERS */}
            <div className="relative">
              
              {/* Left Half-Circle Button Attached to Left Border */}
              <button
                type="button"
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 sm:w-5 sm:h-10 bg-white rounded-r-full shadow-md flex items-center justify-center text-[#F04432] hover:bg-orange-50 transition-all z-30 cursor-pointer -ml-5 sm:-ml-7 md:-ml-8"
                aria-label="Previous Products"
              >
                <ChevronLeft className="w-3.5 h-3.5 ml-0.5 text-[#F04432]" />
              </button>

              {/* Right Half-Circle Button Attached to Right Border */}
              <button
                type="button"
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 sm:w-5 sm:h-10 bg-white rounded-l-full shadow-md flex items-center justify-center text-[#F04432] hover:bg-orange-50 transition-all z-30 cursor-pointer -mr-5 sm:-mr-7 md:-mr-8"
                aria-label="Next Products"
              >
                <ChevronRight className="w-3.5 h-3.5 mr-0.5 text-[#F04432]" />
              </button>

              {/* Products Horizontal Container: Swipeable on Mobile, Button Scroll Only on Desktop */}
              <div
                ref={scrollContainerRef}
                className="grid grid-flow-col auto-cols-[78%] sm:auto-cols-[45%] lg:auto-cols-[23.6%] gap-3.5 sm:gap-4 overflow-x-auto md:overflow-hidden scrollbar-none scroll-smooth py-1 px-0.5 select-none"
              >
                {shoppingProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="h-full flex flex-col"
                  >
                    {/* Compact White Card */}
                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden group/card relative p-3 border border-white/60">
                      
                      {/* Image Box */}
                      <div className="aspect-[4/3] relative bg-slate-100 overflow-hidden rounded-xl mb-2.5">
                        
                        {/* HOT Badge */}
                        {product.badge && (
                          <div className="absolute top-2 left-2 z-10">
                            <span className="bg-[#F04432] text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-2xs flex items-center gap-0.5">
                              <Flame className="w-3 h-3 fill-white" />
                              {product.badge}
                            </span>
                          </div>
                        )}

                        {/* Wishlist Heart Button */}
                        <button
                          type="button"
                          onClick={(e) => toggleLike(product.id, e)}
                          className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#9AA0A8] hover:text-[#F04432] shadow-2xs transition-colors cursor-pointer"
                          aria-label="Add to wishlist"
                        >
                          <Heart
                            className={`w-3.5 h-3.5 transition-colors ${
                              likedProducts[product.id] ? 'fill-[#F04432] text-[#F04432]' : ''
                            }`}
                          />
                        </button>

                        {/* Product Image */}
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          {/* Title */}
                          <h3 className="font-bold text-xs sm:text-sm text-[#18212F] line-clamp-2 leading-snug group-hover/card:text-[#F04432] transition-colors">
                            {product.title}
                          </h3>

                          {/* Category Badge & Rating */}
                          <div className="flex items-center justify-between gap-1 mt-2 mb-2">
                            <span className="inline-block bg-[#FFF0EC] text-[#F04432] text-[10px] font-bold px-2 py-0.5 rounded">
                              {product.category}
                            </span>
                            <div className="flex items-center gap-1 text-[11px] font-semibold text-[#1D2635]">
                              <Star className="w-3 h-3 fill-[#FFAD17] text-[#FFAD17]" />
                              <span>{product.rating}</span>
                            </div>
                          </div>
                        </div>

                        {/* CTA Belanja Sekarang Button */}
                        <a
                          href={product.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto w-full py-2 px-3 bg-[#F04432] hover:bg-[#E83D2D] text-white font-bold text-xs rounded-xl shadow-2xs hover:shadow-xs transition-all flex items-center justify-center gap-1.5 text-center cursor-pointer"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Belanja Sekarang
                        </a>
                      </div>

                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
