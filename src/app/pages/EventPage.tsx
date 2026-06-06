import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { events } from '../data/mockData';

export function EventPage() {
  const featuredEvents = events.filter((e) => e.isFeatured);
  const upcomingEvents = events.filter((e) => !e.isFeatured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-times-red to-times-purple text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">TIMES Event</h1>
            <p className="text-xl text-white/90">
              Ikuti berbagai event menarik yang diselenggarakan oleh TIMES Indonesia untuk
              memperluas wawasan dan networking Anda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-times-red to-times-purple rounded-full" />
              <h2 className="text-3xl font-bold">Event Unggulan</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/event/${event.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                  >
                    <div className="aspect-[16/9] overflow-hidden relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-times-red to-times-purple text-white font-bold rounded-full shadow-lg">
                        FEATURED
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-white/90 transition-colors">
                          {event.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-text-secondary mb-6 line-clamp-2">{event.description}</p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-text-secondary">
                          <Calendar className="w-5 h-5 text-times-red" />
                          <span>
                            {new Date(event.date).toLocaleDateString('id-ID', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-text-secondary">
                          <MapPin className="w-5 h-5 text-times-red" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-3 text-text-secondary">
                          <Users className="w-5 h-5 text-times-red" />
                          <span>
                            {event.registered} / {event.quota} peserta terdaftar
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div>
                          <div className="text-sm text-text-secondary mb-1">Harga Tiket</div>
                          <div className="text-2xl font-bold text-times-red">
                            {event.price === 0 ? 'GRATIS' : `Rp ${event.price.toLocaleString()}`}
                          </div>
                        </div>
                        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-times-red to-times-purple text-white font-semibold rounded-lg hover:shadow-lg transition-shadow">
                          Beli Tiket
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Events */}
      <section className="py-12 bg-secondary-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-times-red to-times-purple rounded-full" />
            <h2 className="text-3xl font-bold">Event Mendatang</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/event/${event.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all h-full flex flex-col"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-bold text-lg mb-3 group-hover:text-times-red transition-colors line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4 line-clamp-2 flex-1">
                      {event.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-text-secondary">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(event.date).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-text-secondary">
                        <MapPin className="w-4 h-4" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="text-times-red font-bold">
                        {event.price === 0 ? 'GRATIS' : `Rp ${event.price.toLocaleString()}`}
                      </div>
                      <div className="text-xs text-text-secondary">
                        {event.registered}/{event.quota} peserta
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
