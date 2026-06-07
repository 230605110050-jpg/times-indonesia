// Event Data for TIMES Event - from MockData_times.ts

// using local images for better performance
const localImages = [
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
  'https://images.unsplash.com/photo-1559223607-a43c990446c6?w=800&q=80',
  'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
  'https://images.unsplash.com/photo-1571567502215-f72a37de1b68?w=800&q=80',
];

export interface Event {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  date: string;
  time: string;
  location: string;
  city: string;
  organizer: string;
  price: number;
  originalPrice: number;
  image: string;
  quota: number;
  registered: number;
  isFeatured: boolean;
  rating: number;
  attendees: number;
}

export const events: Event[] = [
  {
    id: 1,
    slug: 'tech-summit-2026',
    title: 'Tech Summit Indonesia 2026',
    description: 'Konferensi teknologi terbesar di Indonesia dengan pembicara dari Google, Microsoft, dan startup unicorn lokal. Dapatkan insight terbaru tentang AI, Cloud Computing, dan Digital Transformation.',
    category: 'Seminar',
    categorySlug: 'seminar',
    date: '2026-07-15',
    time: '09:00 - 17:00',
    location: 'Jakarta Convention Center',
    city: 'Jakarta',
    organizer: 'Tech Indonesia',
    price: 250000,
    originalPrice: 350000,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    quota: 500,
    registered: 350,
    isFeatured: true,
    rating: 4.8,
    attendees: 350,
  },
  {
    id: 2,
    slug: 'digital-marketing-workshop',
    title: 'Digital Marketing Mastery Workshop',
    description: 'Workshop intensif 2 hari untuk menguasai strategi digital marketing modern, SEO, SEM, Social Media Marketing, dan Analytics.',
    category: 'Workshop',
    categorySlug: 'workshop',
    date: '2026-07-20',
    time: '10:00 - 16:00',
    location: 'Hotel Santika Premiere Bandung',
    city: 'Bandung',
    organizer: 'Digital Academy',
    price: 500000,
    originalPrice: 750000,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    quota: 50,
    registered: 45,
    isFeatured: true,
    rating: 4.9,
    attendees: 5,
  },
  {
    id: 3,
    slug: 'startup-founder-webinar',
    title: 'From Idea to Unicorn: Startup Journey',
    description: 'Webinar eksklusif bersama founder-founder startup unicorn Indonesia. Pelajari bagaimana mereka membangun bisnis dari nol hingga valuasi móv dollar.',
    category: 'Webinar',
    categorySlug: 'webinar',
    date: '2026-07-18',
    time: '19:00 - 21:00',
    location: 'Online via Zoom',
    city: 'Online',
    organizer: 'Startup Nation',
    price: 0,
    originalPrice: 0,
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80',
    quota: 1000,
    registered: 800,
    isFeatured: true,
    rating: 4.7,
    attendees: 200,
  },
  {
    id: 4,
    slug: 'jazz-under-the-stars',
    title: 'Jazz Under The Stars Festival',
    description: 'Festival musik jazz terbesar dengan lineup artis internasional dan lokal terbaik. Nikmati musik berkualitas di bawah langit malam yang indah.',
    category: 'Festival',
    categorySlug: 'festival',
    date: '2026-08-05',
    time: '17:00 - 23:00',
    location: 'Parkir Timur Senayan',
    city: 'Jakarta',
    organizer: 'Java Jazz Productions',
    price: 350000,
    originalPrice: 450000,
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
    quota: 5000,
    registered: 2000,
    isFeatured: false,
    rating: 4.9,
    attendees: 3000,
  },
  {
    id: 5,
    slug: 'ui-ux-design-bootcamp',
    title: 'UI/UX Design Bootcamp',
    description: 'Bootcamp intensif 5 hari untuk menjadi UI/UX Designer profesional. Dari fundamental design thinking hingga portfolio project.',
    category: 'Workshop',
    categorySlug: 'workshop',
    date: '2026-07-25',
    time: '09:00 - 17:00',
    location: 'WeWork Sudirman',
    city: 'Jakarta',
    organizer: 'Design School',
    price: 2500000,
    originalPrice: 3500000,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    quota: 25,
    registered: 20,
    isFeatured: false,
    rating: 4.8,
    attendees: 5,
  },
  {
    id: 6,
    slug: 'futsal-championship',
    title: 'Futsal Championship 2026',
    description: 'Kompetisi futsal antar perusahaan se-Jabodetabek. Terbuka untuk tim corporate, startup, dan komunitas.',
    category: 'Olahraga',
    categorySlug: 'olahraga',
    date: '2026-08-10',
    time: '08:00 - 18:00',
    location: 'GOR Futsal Jakarta',
    city: 'Jakarta',
    organizer: 'Sports Indonesia',
    price: 1500000,
    originalPrice: 1500000,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    quota: 16,
    registered: 8,
    isFeatured: false,
    rating: 4.6,
    attendees: 8,
  },
];

export const eventCategories = [
  { id: 1, name: 'Seminar', icon: 'BookOpen', slug: 'seminar', description: 'Seminar dan presentasi profesional' },
  { id: 2, name: 'Workshop', icon: 'Wrench', slug: 'workshop', description: 'Pelatihan praktis dan hands-on' },
  { id: 3, name: 'Webinar', icon: 'Monitor', slug: 'webinar', description: 'Acara online interaktif' },
  { id: 4, name: 'Festival', icon: 'Sparkles', slug: 'festival', description: 'Festival budaya dan hiburan' },
  { id: 5, name: 'Konser', icon: 'Music', slug: 'konser', description: 'Konser musik dan pertunjukan' },
  { id: 6, name: 'Kompetisi', icon: 'Trophy', slug: 'kompetisi', description: 'Lomba dan kompetisi' },
  { id: 7, name: 'Olahraga', icon: 'Dumbbell', slug: 'olahraga', description: 'Event dan turnamen olahraga' },
];

export const eventStats = [
  { label: 'Total Event', value: '1,200+', icon: 'Target' },
  { label: 'Total Peserta', value: '50,000+', icon: 'Users' },
  { label: 'Total Organizer', value: '300+', icon: 'Building2' },
  { label: 'Tiket Terjual', value: '75,000+', icon: 'Ticket' },
];
