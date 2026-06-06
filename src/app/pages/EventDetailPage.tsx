import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { Calendar, MapPin, Users, Clock, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { events } from '../data/mockData';

export function EventDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Event Tidak Ditemukan</h1>
          <Link to="/event" className="text-times-red hover:underline">
            Kembali ke Event
          </Link>
        </div>
      </div>
    );
  }

  const eventDate = new Date(event.date);
  const remainingSeats = event.quota - event.registered;
  const percentageFilled = (event.registered / event.quota) * 100;

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        {event.isFeatured && (
          <div className="absolute top-8 right-8 px-4 py-2 bg-gradient-to-r from-times-red to-times-purple text-white font-bold rounded-full shadow-lg">
            FEATURED EVENT
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                to="/event"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Event
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {event.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>
                    {eventDate.toLocaleDateString('id-ID', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{event.location}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4">Tentang Event</h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                {event.description}
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                Event ini merupakan kesempatan luar biasa untuk bertemu dengan para profesional,
                expert, dan enthusiast di bidangnya. Anda akan mendapatkan insight berharga,
                networking berkualitas, dan pengalaman yang tak terlupakan.
              </p>

              <h3 className="text-xl font-bold mb-4 mt-8">Yang Akan Anda Dapatkan</h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Akses ke semua sesi dan workshop',
                  'Materi event dalam bentuk digital',
                  'Sertifikat kehadiran',
                  'Networking dengan peserta lain',
                  'Konsumsi dan coffee break',
                  'Doorprize menarik',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-times-red to-times-purple flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-text-secondary">{benefit}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mb-4 mt-8">Jadwal Event</h3>
              <div className="bg-secondary-background rounded-xl p-6 space-y-4">
                {[
                  { time: '08:00 - 09:00', activity: 'Registrasi & Welcome Coffee' },
                  { time: '09:00 - 09:30', activity: 'Opening & Keynote Speech' },
                  { time: '09:30 - 12:00', activity: 'Sesi 1: Main Session' },
                  { time: '12:00 - 13:00', activity: 'Lunch Break' },
                  { time: '13:00 - 15:30', activity: 'Sesi 2: Workshop & Breakout Session' },
                  { time: '15:30 - 16:00', activity: 'Networking & Closing' },
                ].map((schedule, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex items-center gap-2 text-times-red font-semibold min-w-[140px]">
                      <Clock className="w-4 h-4" />
                      <span>{schedule.time}</span>
                    </div>
                    <div className="text-text-secondary">{schedule.activity}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="sticky top-24"
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-border">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-times-red mb-2">
                    {event.price === 0 ? 'GRATIS' : `Rp ${event.price.toLocaleString()}`}
                  </div>
                  <div className="text-sm text-text-secondary">per peserta</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Calendar className="w-5 h-5" />
                      <span className="text-sm">Tanggal</span>
                    </div>
                    <div className="text-sm font-semibold">
                      {eventDate.toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <div className="flex items-center gap-2 text-text-secondary">
                      <MapPin className="w-5 h-5" />
                      <span className="text-sm">Lokasi</span>
                    </div>
                    <div className="text-sm font-semibold text-right">{event.location}</div>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Users className="w-5 h-5" />
                      <span className="text-sm">Kuota</span>
                    </div>
                    <div className="text-sm font-semibold">{event.quota} peserta</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-text-secondary">Peserta Terdaftar</span>
                    <span className="font-semibold">{event.registered} / {event.quota}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-times-red to-times-purple rounded-full transition-all duration-500"
                      style={{ width: `${percentageFilled}%` }}
                    />
                  </div>
                  <div className="text-xs text-text-secondary mt-2">
                    {remainingSeats > 0 ? (
                      <span>Tersisa {remainingSeats} kursi</span>
                    ) : (
                      <span className="text-destructive font-semibold">Event Penuh!</span>
                    )}
                  </div>
                </div>

                <button
                  disabled={remainingSeats === 0}
                  className="w-full py-4 bg-gradient-to-r from-times-red to-times-purple text-white font-bold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed mb-3"
                >
                  {remainingSeats > 0 ? 'Beli Tiket Sekarang' : 'Event Penuh'}
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button className="flex items-center justify-center gap-2 py-2 border border-border rounded-lg hover:bg-secondary-background transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span className="text-sm">Bagikan</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 py-2 border border-border rounded-lg hover:bg-secondary-background transition-colors">
                    <Bookmark className="w-4 h-4" />
                    <span className="text-sm">Simpan</span>
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-border text-center text-sm text-text-secondary">
                  <p>Butuh bantuan? Hubungi kami di</p>
                  <a href="mailto:event@timesindonesia.co.id" className="text-times-red hover:underline font-semibold">
                    event@timesindonesia.co.id
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
