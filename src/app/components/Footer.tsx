import { Link } from 'react-router';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { categories } from '../data/mockData';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#7F0B1A] to-[#3F154F] text-white">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* News Logo & Description */}
          <div>
            <div className="mb-4">
              <img 
                src="/image/logo_times_indonesia.webp" 
                alt="TIMES Indonesia" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Portal berita positif yang menyajikan informasi terkini tentang peristiwa, cek fakta, ekoran, politik, entertainment, kuliner, gaya hidup, wisata, dan kopi times
            </p>
            
            {/* Ikuti Kami (Social Media) */}
            <h4 className="font-bold mb-3">Ikuti Kami</h4>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="mailto:redaksi@timesindonesia.co.id" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Kanal Utama */}
          <div>
            <h3 className="font-bold mb-4">Kanal Utama</h3>
            <ul className="space-y-2">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link to={`/kanal/${cat.slug}`} className="text-white/80 hover:text-white text-sm transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak Kami */}
          <div>
            <h3 className="font-bold mb-4">Kontak Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  Jl. Besar Ijen No.90, Oro-oro Dowo, Kec. Klojen, Kota Malang, Jawa Timur 65116
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-white/80 text-sm">(0341) 563566</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:redaksi@timesindonesia.co.id" className="text-white/80 hover:text-white text-sm transition-colors">
                  redaksi@timesindonesia.co.id
                </a>
              </li>
            </ul>
          </div>

          {/* Berlangganan (Newsletter) */}
          <div>
            <h3 className="font-bold mb-4">Berlangganan</h3>
            <p className="text-white/80 text-sm mb-4">
              Dapatkan berita terbaru langsung di inbox Anda
            </p>
            <form className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm placeholder:text-white/60 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <button className="w-full bg-white text-times-red hover:bg-white/90 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Member Of & Supported By */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Member Of */}
            <div>
              <h4 className="font-bold text-center md:text-left mb-4">Member Of</h4>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 items-center">
                <img src="/image/logo-wanifra.webp" alt="WANIFRA" className="h-8 w-auto object-contain" />
                <img src="/image/logo-amsi.webp" alt="AMSI" className="h-8 w-auto object-contain" />
                <img src="/image/logo-Verified-By-Dewan-Pers-v2.webp" alt="Dewan Pers" className="h-8 w-auto object-contain" />
                <img src="/image/trusted-web.webp" alt="Trusted" className="h-8 w-auto object-contain" />
              </div>
            </div>

            {/* Supported By */}
            <div>
              <h4 className="font-bold text-center md:text-left mb-4">SUPPORTED BY</h4>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 items-center">
                <img src="/image/logo_varnion.webp" alt="Varnion" className="h-8 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links & Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
              Kebijakan Privasi
            </a>
            <span className="text-white/40">|</span>
            <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
              Syarat & Ketentuan
            </a>
            <span className="text-white/40">|</span>
            <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
              Tentang Kami
            </a>
            <span className="text-white/40">|</span>
            <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
              Kontak Redaksi
            </a>
          </div>
          <div className="text-center text-white/80 text-sm">
            <p>&copy; 2025 TIMES Indonesia. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
