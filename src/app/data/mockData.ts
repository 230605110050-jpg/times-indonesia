// Mock Data for TIMES Indonesia Portal

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  editor: string;
  publishedAt: string;
  readTime: number;
  views: number;
  isBreaking?: boolean;
  isTrending?: boolean;
  isFeatured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  quota: number;
  registered: number;
  price: number;
  isFeatured?: boolean;
}

// E-Koran Digital Newspaper
export interface EKoran {
  id: string;
  title: string;
  edition: string;
  coverImage: string;
  pdfUrl: string;
  date: string;
  views: number;
  timeAgo: string;
  category: 'Olahraga' | 'Hiburan' | 'Politik' | 'Musik' | 'Film' | 'Lifestyle' | 'Kuliner' | 'Internasional';
}

// Photo Gallery
export interface Photo {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  photographer: string;
  publishedAt: string;
  views: number;
}

// Interview/Feature Article
export interface InterviewQA {
  question: string;
  answer: string;
}

export interface InterviewSection {
  title: string;
  content: string;
  qa?: InterviewQA[];
}

export interface Interview {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  subjectImage: string;
  subjectName: string;
  subjectRole: string;
  subjectBio?: string;
  author: {
    name: string;
    avatar: string;
  };
  editor: string;
  publishedAt: string;
  readTime: number;
  views: number;
  sections?: InterviewSection[];
  infographic?: string;
}

// Focus Topic Data
export interface FocusTopic {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  articleCount: number;
  slug: string;
}

export interface FocusStatistics {
  label: string;
  value: string;
  icon: string;
}

export interface QuickLink {
  id: string;
  title: string;
  slug: string;
  icon: string;
}

// All Focus Topics (15 topics - more than 9 for load more functionality)
export const focusTopics: FocusTopic[] = [
  {
    id: '0',
    title: 'Haji 2026',
    description: ' semua informasi persiapan dan pelaksanaan Haji 2026 dari embarkasi hingga kepulangan.',
    icon: 'Mosque',
    color: 'bg-teal-600',
    articleCount: 38,
    slug: 'haji-2026',
  },
  {
    id: '1',
    title: 'Piala Dunia 2026',
    description: 'Semua informasi tentang persiapan dan pelaksanaan Piala Dunia 2026 yang akan diselenggarakan di Amerika Serikat, Kanada, dan Meksiko.',
    icon: 'Trophy',
    color: 'bg-yellow-500',
    articleCount: 45,
    slug: 'piala-dunia-2026',
  },
{
    id: '2',
    title: 'Muktamar NU 2026',
    description: 'Liputan lengkap Muktamar Nahdlatul Ulama ke-34 yang diselenggarakan untuk memilih kepemimpinan baru organisasi.',
    icon: 'Landmark',
    color: 'bg-green-600',
    articleCount: 32,
    slug: 'muktamar-nu-2026',
  },
  {
    id: '3',
    title: 'Zakat',
    description: 'Portal informasi lengkap tentang pengelolaan wajib, infak, dan sedekah bagi kemajuan ummat.',
    icon: 'HeartHandshake',
    color: 'bg-emerald-600',
    articleCount: 28,
    slug: 'zakat',
  },
  {
    id: '4',
    title: 'Kawal KDMP',
    description: 'Pengawalan ketat program makan gratis dan gizi均衡 demi Indonesia yang lebih sehat.',
    icon: 'Apple',
    color: 'bg-orange-500',
    articleCount: 56,
    slug: 'kawal-kdmp',
  },
  {
    id: '5',
    title: 'Kawal MBG',
    description: 'Monitoring program Makan Bergizi Gratis untuk memastikan pelaksanaan yang tepat sasaran.',
    icon: 'UtensilsCrossed',
    color: 'bg-amber-500',
    articleCount: 63,
    slug: 'kawal-mbg',
  },
  {
    id: '6',
    title: 'Tajuk Redaksi',
    description: 'Editorial dan opinion resmi TIMES Indonesia tentang isu-isu strategis nasional.',
    icon: 'PenTool',
    color: 'bg-times-red',
    articleCount: 18,
    slug: 'tajuk-redaksi',
  },
{
    id: '7',
    title: 'Kontes AI',
    description: 'Kompetisi kecerdasan buatan dan teknologi inovatif untuk mendorong kemajuan digital Indonesia.',
    icon: 'Bot',
    color: 'bg-purple-600',
    articleCount: 24,
    slug: 'kontes-ai',
  },
  {
    id: '8',
    title: '1 Abad NU 2026',
    description: 'Perayaan satu abad perjalanan Nahdlatul Ulama sebagai organisasi Islam terbesar di Indonesia.',
    icon: 'CalendarDays',
    color: 'bg-teal-600',
    articleCount: 41,
    slug: '1-abad-nu-2026',
  },
  {
    id: '9',
    title: 'Kisruh PBNU 2025',
    description: 'Reporting mendalam tentang dinamika dan perkembangan di tubuh Pengurus Besar Nahdlatul Ulama.',
    icon: 'Users',
    color: 'bg-red-600',
    articleCount: 37,
    slug: 'kisruh-pbnu-2025',
  },
  {
    id: '10',
    title: 'KTT ASEAN 2026',
    description: 'Konferensi Tingkat Tinggi ASEAN yang membahas kerja sama ekonomi dan keamanan regional.',
    icon: 'Globe',
    color: 'bg-blue-600',
    articleCount: 29,
    slug: 'ktt-asean-2026',
  },
  {
    id: '11',
    title: 'COP31 Iklim',
    description: 'Konferensi Perubahan Iklim internasional untuk membahas komitmen pengurangan emisi global.',
    icon: 'Leaf',
    color: 'bg-green-500',
    articleCount: 22,
    slug: 'cop31-iklim',
  },
{
    id: '12',
    title: 'Transformasi Digital',
    description: 'Portal报道 tentang transformasi ekonomi digital dan adopsi teknologi terbaru di berbagai sektor.',
    icon: 'Cpu',
    color: 'bg-cyan-600',
    articleCount: 51,
    slug: 'transformasi-digital',
  },
{
    id: '13',
    title: 'Ekonomi Makro',
    description: 'Analisis mendalam tentang kebijakan moneter, fiskal, dan situasi ekonomi makro Indonesia.',
    icon: 'TrendingUp',
    color: 'bg-emerald-600',
    articleCount: 33,
    slug: 'ekonomi-makro',
  },
  {
    id: '14',
    title: 'Bansos & PKH',
    description: 'Pelacakan program bantuan sosial dan Perlindungan Sosial untuk kesejahteraan rakyat.',
    icon: 'Gift',
    color: 'bg-pink-500',
    articleCount: 19,
    slug: 'bansos-pkh',
  },
  {
    id: '15',
    title: 'Omzet PI 2026',
    description: 'Aktualitas dan pembahasan masalah perpajakan dan kebijakan fiskal negara tahun 2026.',
    icon: 'Receipt',
    color: 'bg-slate-600',
    articleCount: 14,
    slug: 'omzet-pi-2026',
  },
];

// Focus Statistics Data
export const focusStatistics: FocusStatistics[] = [
  { label: 'Area Fokus', value: '20+', icon: 'MapPin' },
  { label: 'Artikel Fokus', value: '500.000+', icon: 'FileText' },
  { label: 'Pakar Kontributor', value: '40+', icon: 'UserCheck' },
  { label: 'Update Analisis', value: 'Daily', icon: 'Clock' },
];

// Quick Links for Fokus Page
export const quickLinksFocus: QuickLink[] = [
  { id: '1', title: 'Berita kesehatan', slug: 'kesehatan', icon: 'ArrowRight' },
  { id: '2', title: 'Panduan Kota & Daerah', slug: 'daerah', icon: 'ArrowRight' },
  { id: '3', title: 'Berita online terkini', slug: 'berita-terkini', icon: 'ArrowRight' },
];

// Sidebar Widget Data
export interface SidebarItem {
  id: string;
  title: string;
  slug: string;
  views: number;
}

export interface CekFakta {
  id: string;
  title: string;
  verdict: 'HOAX' | 'FAKTA' | 'MENYESATKAN';
  description: string;
  source: string;
}

export const categories: Category[] = [
  { id: '1', name: 'Nasional', slug: 'nasional', description: 'Berita nasional terkini', icon: 'Flag' },
  { id: '2', name: 'Internasional', slug: 'internasional', description: 'Berita internasional terkini', icon: 'Globe' },
  { id: '3', name: 'Politik', slug: 'politik', description: 'Berita politik', icon: 'Building' },
  { id: '4', name: 'Ekonomi', slug: 'ekonomi', description: 'Berita ekonomi dan bisnis', icon: 'TrendingUp' },
  { id: '5', name: 'Olahraga', slug: 'olahraga', description: 'Berita olahraga', icon: 'Trophy' },
  { id: '6', name: 'Entertainment', slug: 'entertainment', description: 'Berita entertainment', icon: 'Tv' },
  { id: '7', name: 'Peristiwa', slug: 'peristiwa', description: 'Peristiwa terkini', icon: 'AlertCircle' },
  { id: '8', name: 'Cek Fakta', slug: 'cek-fakta', description: 'Verifikasi berita dan fakta', icon: 'CheckCircle' },
  { id: '9', name: 'Kopi TIMES', slug: 'kopi-times', description: 'Opini dan kolom', icon: 'Coffee' },
  { id: '10', name: 'Tekno', slug: 'tekno', description: 'Teknologi dan digital', icon: 'Cpu' },
  { id: '11', name: 'Pendidikan', slug: 'pendidikan', description: 'Dunia pendidikan', icon: 'GraduationCap' },
  { id: '12', name: 'Otomotif', slug: 'otomotif', description: 'Berita otomotif', icon: 'Car' },
  { id: '13', name: 'Kesehatan', slug: 'kesehatan', description: 'Kesehatan dan gaya hidup', icon: 'Heart' },
  { id: '14', name: 'Kuliner', slug: 'kuliner', description: 'Kuliner dan resep', icon: 'UtensilsCrossed' },
  { id: '15', name: 'Wisata', slug: 'wisata', description: 'Travel dan destinasi', icon: 'Plane' },
  { id: '16', name: 'Sosok', slug: 'sosok', description: 'Profil tokoh', icon: 'User' },
  { id: '17', name: 'Religi', slug: 'religi', description: 'Keagamaan', icon: 'BookOpen' },
];

export const articles: Article[] = [
  {
    id: '1',
    slug: 'presiden-hadiri-ktt-asean-bahas-kerja-sama-ekonomi-regional',
    title: 'Presiden Hadiri KTT ASEAN, Bahas Kerja Sama Ekonomi Regional',
    excerpt: 'Presiden menghadiri Konferensi Tingkat Tinggi (KTT) ASEAN untuk membahas penguatan kerja sama ekonomi regional di tengah dinamika global.',
    content: 'Jakarta - Presiden Republik Indonesia menghadiri Konferensi Tingkat Tinggi (KTT) ASEAN yang digelar di Jakarta Convention Center. Dalam pertemuan tersebut, para pemimpin negara-negara ASEAN membahas berbagai isu strategis terkait penguatan kerja sama ekonomi regional...',
    image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800',
    category: 'Peristiwa Nasional',
    author: {
      name: 'Budi Santoso',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    },
    editor: 'Ahmad Fauzi',
    publishedAt: '2026-06-04T10:30:00',
    readTime: 5,
    views: 12450,
    isBreaking: true,
    isTrending: true,
  },
  {
    id: '2',
    slug: 'konferensi-iklim-cop31-hasilkan-komitmen-baru-pengurangan-emisi',
    title: 'Konferensi Iklim COP31 Hasilkan Komitmen Baru Pengurangan Emisi',
    excerpt: 'Konferensi perubahan iklim PBB COP31 menghasilkan kesepakatan global baru untuk mempercepat transisi energi terbarukan.',
    content: 'Paris - Konferensi perubahan iklim Perserikatan Bangsa-Bangsa (PBB) COP31 yang digelar di Paris menghasilkan kesepakatan bersejarah. Lebih dari 195 negara sepakat untuk mempercepat transisi menuju energi terbarukan...',
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800',
    category: 'Peristiwa Internasional',
    author: {
      name: 'Sarah Williams',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    },
    editor: 'Rini Kusuma',
    publishedAt: '2026-06-04T09:15:00',
    readTime: 7,
    views: 8920,
    isBreaking: true,
  },
  {
    id: '3',
    slug: 'bank-indonesia-pertahankan-suku-bunga-acuan-di-6-persen',
    title: 'Bank Indonesia Pertahankan Suku Bunga Acuan di 6 Persen',
    excerpt: 'Bank Indonesia memutuskan mempertahankan suku bunga acuan BI Rate pada level 6 persen untuk menjaga stabilitas nilai tukar rupiah.',
    content: 'Jakarta - Bank Indonesia (BI) memutuskan untuk mempertahankan suku bunga acuan atau BI 7-Day Reverse Repo Rate pada level 6,00 persen. Keputusan ini diambil setelah Rapat Dewan Gubernur (RDG) BI...',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800',
    category: 'Ekonomi',
    author: {
      name: 'Dian Pratama',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    },
    editor: 'Lestari Wulandari',
    publishedAt: '2026-06-04T08:00:00',
    readTime: 4,
    views: 15670,
    isTrending: true,
  },
  {
    id: '4',
    slug: 'aplikasi-ai-terbaru-bantu-diagnosa-penyakit-lebih-akurat',
    title: 'Aplikasi AI Terbaru Bantu Diagnosa Penyakit Lebih Akurat',
    excerpt: 'Teknologi kecerdasan buatan (AI) kini hadir dalam aplikasi kesehatan yang mampu mendiagnosa penyakit dengan tingkat akurasi hingga 95 persen.',
    content: 'San Francisco - Sebuah perusahaan teknologi kesehatan meluncurkan aplikasi berbasis kecerdasan buatan (AI) yang diklaim mampu membantu diagnosa penyakit dengan tingkat akurasi mencapai 95 persen...',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    category: 'Tekno',
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    },
    editor: 'Eko Prasetyo',
    publishedAt: '2026-06-03T16:20:00',
    readTime: 6,
    views: 7340,
  },
  {
    id: '5',
    slug: 'timnas-indonesia-lolos-ke-semifinal-piala-asia-2026',
    title: 'Timnas Indonesia Lolos ke Semifinal Piala Asia 2026',
    excerpt: 'Tim Nasional Indonesia berhasil melangkah ke babak semifinal Piala Asia 2026 setelah mengalahkan Jepang dengan skor 2-1.',
    content: 'Doha - Tim Nasional Indonesia mencatatkan sejarah baru dengan lolos ke babak semifinal Piala Asia 2026. Garuda meraih kemenangan dramatis 2-1 atas Jepang dalam pertandingan perempat final...',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
    category: 'Olahraga',
    author: {
      name: 'Agus Setiawan',
      avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100',
    },
    editor: 'Bambang Susilo',
    publishedAt: '2026-06-03T22:45:00',
    readTime: 5,
    views: 42100,
    isTrending: true,
  },
  {
    id: '6',
    slug: 'studi-baru-ungkap-manfaat-puasa-intermiten-untuk-kesehatan-jantung',
    title: 'Studi Baru Ungkap Manfaat Puasa Intermiten untuk Kesehatan Jantung',
    excerpt: 'Penelitian terbaru menunjukkan bahwa puasa intermiten dapat menurunkan risiko penyakit jantung hingga 30 persen.',
    content: 'Boston - Sebuah studi komprehensif yang dilakukan oleh Harvard Medical School mengungkapkan bahwa praktik puasa intermiten memberikan manfaat signifikan bagi kesehatan jantung...',
    image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800',
    category: 'Kesehatan',
    author: {
      name: 'Dr. Lisa Anderson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    },
    editor: 'Siti Nurhaliza',
    publishedAt: '2026-06-03T14:30:00',
    readTime: 8,
    views: 9250,
  },
];

export const events: Event[] = [
  {
    id: '1',
    slug: 'times-innovation-summit-2026',
    title: 'TIMES Innovation Summit 2026',
    description: 'Summit inovasi dan teknologi terbesar di Indonesia dengan menghadirkan para pemimpin industri dan startup.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    date: '2026-07-15',
    location: 'Jakarta Convention Center',
    quota: 500,
    registered: 342,
    price: 500000,
    isFeatured: true,
  },
  {
    id: '2',
    slug: 'workshop-jurnalisme-digital',
    title: 'Workshop Jurnalisme Digital',
    description: 'Pelatihan intensif jurnalisme digital untuk jurnalis dan content creator dengan mentor berpengalaman.',
    image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800',
    date: '2026-06-20',
    location: 'Gedung TIMES Indonesia',
    quota: 100,
    registered: 78,
    price: 250000,
  },
  {
    id: '3',
    slug: 'festival-kuliner-nusantara',
    title: 'Festival Kuliner Nusantara',
    description: 'Festival kuliner yang menghadirkan lebih dari 100 UMKM kuliner dari seluruh Indonesia.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    date: '2026-08-01',
    location: 'Senayan Park',
    quota: 1000,
    registered: 856,
    price: 0,
    isFeatured: true,
  },
  {
    id: '4',
    slug: 'times-health-forum-2026',
    title: 'TIMES Health Forum 2026',
    description: 'Forum kesehatan nasional membahas inovasi dan kebijakan kesehatan untuk Indonesia lebih sehat.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
    date: '2026-07-25',
    location: 'Grand Krakatau Hall',
    quota: 300,
    registered: 215,
    price: 150000,
    isFeatured: true,
  },
  {
    id: '5',
    slug: 'digital-marketing-bootcamp',
    title: 'Digital Marketing Bootcamp',
    description: 'Bootcamp intensif 3 hari untuk menguasai strategi digital marketing terkini.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    date: '2026-08-10',
    location: 'TIMES Media Tower',
    quota: 150,
    registered: 142,
    price: 750000,
    isFeatured: true,
  },
];

export const breakingNews = [
  'Presiden hadiri KTT ASEAN bahas kerja sama ekonomi regional',
  'Timnas Indonesia lolos ke semifinal Piala Asia 2026',
  'Bank Indonesia pertahankan suku bunga acuan di 6 persen',
  'Konferensi iklim COP31 hasilkan komitmen baru pengurangan emisi',
];

// Photo Gallery Data
export const photos: Photo[] = [
  {
    id: '1',
    slug: 'pabrik-teknologi-indonesia',
    title: 'Pabrik Teknologi Indonesia Ekspor Perdana',
    description: 'Momen bersejarah ekspor produk teknologi pertama dari pabrik dalam negeri.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
    category: 'Teknologi',
    photographer: 'Ahmad Fauzi',
    publishedAt: '2026-06-04T10:00:00',
    views: 3450,
  },
  {
    id: '2',
    slug: 'festival-kuliner-nusantara',
    title: 'Festival Kuliner Nusantara 2026',
    description: 'Warga menikmati berbagai kuliner Indonesia dalam festival tahunan.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    category: 'Kuliner',
    photographer: 'Siti Nurhaliza',
    publishedAt: '2026-06-03T15:00:00',
    views: 5670,
  },
  {
    id: '3',
    slug: 'pendakian-gunung-bromo',
    title: 'Keindahan Sunrise di Gunung Bromo',
    description: 'Pesona matahari terbit dari kawah gunung berapi aktif.',
    image: 'https://images.unsplash.com/photo-1506905925346-20b68705e8a9?w=800',
    category: 'Wisata',
    photographer: 'Budi Santoso',
    publishedAt: '2026-06-02T06:00:00',
    views: 8920,
  },
  {
    id: '4',
    slug: 'pacific-games-2026',
    title: 'Pacific Games 2026: Atlet Indonesia Raih Emas',
    description: 'Momen bersejarah kemenangan atlet Indonesia di Pacific Games.',
    image: 'https://images.unsplash.com/photo-1461896836934-b64c-3bbc0a507796?w=800',
    category: 'Olahraga',
    photographer: 'Dian Pratama',
    publishedAt: '2026-06-01T20:00:00',
    views: 12340,
  },
];

// Interview/Feature Articles
export const interviews: Interview[] = [
  {
    id: '1',
    slug: 'wawancara-menkraf',
    title: 'Menkraf: Indonesia Harus Jadi Negara Industri',
    excerpt: 'Wawancara eksklusif dengan Menteri Perindustrian mengenai visi Indonesia menjadi negara industri.',
    content: 'Jakarta - Menteri Perindustrian Republik Indonesia membahas roadmap industri nasional dalam interview eksklusif ini. Kami berbincang langsung dengan Menkraf mengenai berbagai persiapan dan strategi untuk menuju Indonesia sebagai negara industri yang kompetitif di kancah global.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
    subjectImage: 'https://images.unsplash.com/photo-1560250097-0b93523c5626?w=800',
    subjectName: 'Agus Gumiwang Kartasasmita',
    subjectRole: 'Menteni Perindustrian',
    subjectBio: 'Dr. Agus Gumiwang Kartasasmita lahir di Bandung, 9 Agustus 1969. Ia merupakan Doktor Manajemen dari Universitas Indonesia dan memulai karir di Kementerian Perindustrian sejak 2005.',
    author: {
      name: 'Rina Kusuma',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    },
    editor: 'Ahmad Fauzi',
    publishedAt: '2026-06-04T09:00:00',
    readTime: 15,
    views: 12450,
    sections: [
      {
        title: 'Bagaimana Anda melihat kondisi industri nasional saat ini?',
        content: 'Kondisi industri nasional kita saat ini berada dalam fase transisi yang sangat positif. Dengan berbagai kebijakan pendukung yang telah kita terapkan, kita melihat pertumbuhan yang signifikan di sektor manufaktur. terutama di bidang industri kreatif dan teknologi.',
        qa: [
          {
            question: 'Apa pencapaian terbesar industri nasional dalam lima tahun terakhir?',
            answer: 'Pencapaian terbesar kita adalah peningkatan nilai ekspor industri manufaktur yang mencapai 45 miliar dolar AS. Ini menunjukkan bahwa industri nasional kita telah mampu bersaing di pasar global.'
          },
          {
            question: 'Apakah ada tantangan khusus yang perlu dihadapi?',
            answer: 'Tantangan utama kita adalah sumber daya manusia yang terampil dan teknologi yang terus berkembang. Kita perlu terus meningkatkan kapasitas tenaga kerja kita agar tidak tertinggal dari negara-negara kompetitor.'
          }
        ]
      },
      {
        title: 'Apa visi Indonesia sebagai negara industri?',
        content: 'Visi kita adalah menjadikan Indonesia sebagai negara industri terkemuka di Asia Tenggara pada tahun 2045. Ini memerlukan koordinasi lintas sektor dan dukungan semua stakeholder terkait.',
        qa: [
          {
            question: 'Langkah konkret apa yang akan dilakukan?',
            answer: 'Kita akan fokus pada industrialisasi berbasis kawasan, pengembangan ekosistem industri kreatif, dan penguatan linkage antara industri besar dengan UMKM.'
          },
          {
            question: 'Bagaimana keterlibatan swasta dalam visi ini?',
            answer: 'Swasta memiliki peran sentral dalam industrialisasi. Kita berharap mereka berpartisipasi aktif dalam transfer teknologi dan pengembangan kapasitas SDM.'
          }
        ]
      },
      {
        title: 'Apa dukungan yang dibutuhkan dari berbagai pihak?',
        content: 'Dukungan dari semua pihak sangat diperlukan. Mulai dari pemerintah daerah yang menyediakan fasilitas, dunia pendidikan yang mencetak tenaga kerja terampil, hingga masyarakat yang mendukung produk dalam negeri.',
        qa: [
          {
            question: 'Bagaimana peran pemerintah daerah?',
            answer: 'Pemerintah daerah memiliki peran strategis dalam penyediaan lahan industri, infrastruktur pendukung, dan kemudahan perizinan. Kita telah meminta mereka untuk menyederhanakan proses perizinan usaha.'
          }
        ]
      }
    ],
    infographic: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800'
  },
{
    id: '2',
    slug: 'wawancara-kepala-bps',
    title: 'Kepala BPS: Data Akurat Kunci Kebijakan',
    excerpt: 'Wawancara dengan Kepala Badan Pusat Statistik tentang pentingnya data akurat.',
    content: 'Jakarta - Kepala BPS menjelaskan metodologi pengumpulan data dan pentingnya data akurat bagi pembuatan kebijakan pemerintah.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
    subjectImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800',
    subjectName: 'Amalia Adininggar',
    subjectRole: 'Kepala Badan Pusat Statistik',
    subjectBio: 'Dr. Amalia Adininggar Wibisana, M.Ec.Dev merupakan ahli statistik dan ekonomi pembangunan dengan pengalaman lebih dari 20 tahun di bidang data.',
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    },
    editor: 'Rini Kusuma',
    publishedAt: '2026-06-03T14:00:00',
    readTime: 12,
    views: 8920,
    sections: [
      {
        title: 'Bagaimana BPS menjamin kualitas data yang dikumpulkan?',
        content: 'BPS memiliki sistem quality assurance yang ketat untuk memastikan akurasi dan reliabilitas data yang dihasilkan.',
        qa: [
          {
            question: 'Apa saja standar kualitas yang diterapkan?',
            answer: 'Kita menerapkan standar internasional seperti Generic Statistical Business Process Model dan Statistical Data Quality Framework.'
          }
        ]
      }
    ],
    infographic: 'https://images.unsplash.com/photo-1543286386-2fbd5a8b4d4e?w=800'
  },
  {
    id: '3',
    slug: 'wawancara-menteri-sdm',
    title: 'Menaker: Transformasi Tenaga Kerja Indonesia',
    excerpt: 'Wawancara dengan Menteri Ketenagakerjaan tentang program pelatihan vokasi dan penempatan tenaga kerja.',
    content: 'Jakarta - Menteri Ketenagakerjaan membahas kesiapan SDM Indonesia menghadapi tantangan ketenagakerjaan global.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93523c5626?w=800',
    subjectImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    subjectName: 'Yulius Selvanus',
    subjectRole: 'Minister Ketenagakerjaan',
    author: {
      name: 'Budi Santoso',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    },
    editor: 'Lestari Wulandari',
    publishedAt: '2026-06-02T11:00:00',
    readTime: 18,
    views: 7650,
    sections: [
      {
        title: 'Bagaimana transformasi tenaga kerja Indonesia ke depan?',
        content: 'Transformasi tenaga kerja memerlukan pendekatan komprehensif mulai dari pendidikan vokasi hingga sertifikasi keahlian.',
        qa: [
          {
            question: 'Apa program prioritas tahun ini?',
            answer: 'Program prioritas kita adalah peningkatan kualitas pelatihan vokasi dan harmonisasi sertifikasi keahlian dengan standar internasional.'
          }
        ]
      }
    ],
    infographic: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800'
  },
  {
    id: '4',
    slug: 'wawancara-ketua-pu',
    title: 'Ketua PBNU: Muktamar NU 2026 Harus Kondusif',
    excerpt: 'Wawancara dengan Chairman PBNUближур Muktamar NU ke-34.',
    content: 'Jakarta - Chairman PBNU menjelaskan persiapan dan harapan menjelang MuktamarNU ke-34.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
    subjectImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
    subjectName: 'KH. Nasaruddin Umar',
    subjectRole: 'Chairman PBNU',
    subjectBio: 'KH. Nasaruddin Umar merupakan tokoh agama dan intelektual Muslim Indonesia yang juga Anggota Dewan Pertimbangan PRESIDENT.',
    author: {
      name: 'Ahmad Fauzi',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    },
    editor: 'Siti Nurhaliza',
    publishedAt: '2026-06-01T15:00:00',
    readTime: 20,
    views: 15670,
    sections: [
      {
        title: 'Bagaimana persiapan Muktamar NU 2026?',
        content: 'Persiapan Muktamar telah dilakukan secara maksimal dengan melibatkan semua komponen organisasi.',
        qa: [
          {
            question: 'Apa harapan dari Muktamar kali ini?',
            answer: 'Harapan kita adalah terpilihnya kepemimpinan yang amanah dan mampu membawa NU ke arah yang lebih baik.'
          }
        ]
      }
    ],
    infographic: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800'
  },
  {
    id: '5',
    slug: 'wawancara-gub-jabar',
    title: 'Gubernur Jawa Barat: Porong Parahyangan',
    excerpt: 'Gubernur Jawa Barat berbicara tentang pembangunan infrastruktur dan penanganan banjir.',
    content: 'Bandung - Gubernur Jawa Barat menyampaikan program kerja dan pembangunan infrastruktur.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
    subjectImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800',
    subjectName: 'Bey Machmudin',
    subjectRole: 'Gubernur Jawa Barat',
    subjectBio: 'Dr. Bey Machmudin, M.IP merupakan pejabat berpengalaman yang sebelumnya bertugas sebagai Bupati Bandung.',
    author: {
      name: 'Dian Pratama',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    },
    editor: 'Eko Prasetyo',
    publishedAt: '2026-05-31T10:00:00',
    readTime: 14,
    views: 6540,
    sections: [
      {
        title: 'Apa program prioritas pembangunan Jawa Barat?',
        content: 'Prioritas pembangunan adalah infrastruktur, pendidikan, dan penanganan banjir.',
        qa: [
          {
            question: 'Bagaimana penanganan banjir di Jawa Barat?',
            answer: 'Kita membangun sistem polder dan kolam retensi untuk mengatasi banjir secara komprehensif.'
          }
        ]
      }
    ],
    infographic: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800'
  },
];

// E-Koran Editions
export const ekoranEditions: EKoran[] = [
  // 4 Juni 2026
  { id: '1', title: 'TIMES Indonesia', edition: 'Edisi 1847', coverImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400', pdfUrl: '#', date: '2026-06-04', views: 31100, timeAgo: '17 jam yang lalu', category: 'Olahraga' },
  { id: '2', title: 'TIMES Indonesia', edition: 'Edisi 1846', coverImage: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400', pdfUrl: '#', date: '2026-06-04', views: 20500, timeAgo: '17 jam yang lalu', category: 'Hiburan' },
  { id: '3', title: 'TIMES Indonesia', edition: 'Edisi 1845', coverImage: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400', pdfUrl: '#', date: '2026-06-04', views: 18200, timeAgo: '17 jam yang lalu', category: 'Politik' },
  { id: '4', title: 'TIMES Indonesia', edition: 'Edisi 1844', coverImage: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=400', pdfUrl: '#', date: '2026-06-04', views: 15700, timeAgo: '17 jam yang lalu', category: 'Musik' },
  // 3 Juni 2026
  { id: '5', title: 'TIMES Indonesia', edition: 'Edisi 1843', coverImage: 'https://images.unsplash.com/photo-1546953304-5d96f43c2e94?w=400', pdfUrl: '#', date: '2026-06-03', views: 28400, timeAgo: '1 hari yang lalu', category: 'Film' },
  { id: '6', title: 'TIMES Indonesia', edition: 'Edisi 1842', coverImage: 'https://images.unsplash.com/photo-1560177112-fbfd5760d446?w=400', pdfUrl: '#', date: '2026-06-03', views: 22100, timeAgo: '1 hari yang lalu', category: 'Lifestyle' },
  { id: '7', title: 'TIMES Indonesia', edition: 'Edisi 1841', coverImage: 'https://images.unsplash.com/photo-1551803092-e20773f7fdc4?w=400', pdfUrl: '#', date: '2026-06-03', views: 19300, timeAgo: '1 hari yang lalu', category: 'Kuliner' },
  { id: '8', title: 'TIMES Indonesia', edition: 'Edisi 1840', coverImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400', pdfUrl: '#', date: '2026-06-03', views: 16800, timeAgo: '1 hari yang lalu', category: 'Internasional' },
  // 2 Juni 2026
  { id: '9', title: 'TIMES Indonesia', edition: 'Edisi 1839', coverImage: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400', pdfUrl: '#', date: '2026-06-02', views: 25600, timeAgo: '2 hari yang lalu', category: 'Olahraga' },
  { id: '10', title: 'TIMES Indonesia', edition: 'Edisi 1838', coverImage: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400', pdfUrl: '#', date: '2026-06-02', views: 21400, timeAgo: '2 hari yang lalu', category: 'Hiburan' },
  { id: '11', title: 'TIMES Indonesia', edition: 'Edisi 1837', coverImage: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=400', pdfUrl: '#', date: '2026-06-02', views: 18900, timeAgo: '2 hari yang lalu', category: 'Politik' },
  { id: '12', title: 'TIMES Indonesia', edition: 'Edisi 1836', coverImage: 'https://images.unsplash.com/photo-1546953304-5d96f43c2e94?w=400', pdfUrl: '#', date: '2026-06-02', views: 16200, timeAgo: '2 hari yang lalu', category: 'Musik' },
  // 1 Juni 2026
  { id: '13', title: 'TIMES Indonesia', edition: 'Edisi 1835', coverImage: 'https://images.unsplash.com/photo-1560177112-fbfd5760d446?w=400', pdfUrl: '#', date: '2026-06-01', views: 27800, timeAgo: '3 hari yang lalu', category: 'Film' },
  { id: '14', title: 'TIMES Indonesia', edition: 'Edisi 1834', coverImage: 'https://images.unsplash.com/photo-1551803092-e20773f7fdc4?w=400', pdfUrl: '#', date: '2026-06-01', views: 23200, timeAgo: '3 hari yang lalu', category: 'Lifestyle' },
  { id: '15', title: 'TIMES Indonesia', edition: 'Edisi 1833', coverImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400', pdfUrl: '#', date: '2026-06-01', views: 20100, timeAgo: '3 hari yang lalu', category: 'Kuliner' },
  { id: '16', title: 'TIMES Indonesia', edition: 'Edisi 1832', coverImage: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400', pdfUrl: '#', date: '2026-06-01', views: 17500, timeAgo: '3 hari yang lalu', category: 'Internasional' },
  // 31 Mei 2026
  { id: '17', title: 'TIMES Indonesia', edition: 'Edisi 1831', coverImage: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400', pdfUrl: '#', date: '2026-05-31', views: 26300, timeAgo: '4 hari yang lalu', category: 'Olahraga' },
  { id: '18', title: 'TIMES Indonesia', edition: 'Edisi 1830', coverImage: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=400', pdfUrl: '#', date: '2026-05-31', views: 21900, timeAgo: '4 hari yang lalu', category: 'Hiburan' },
  { id: '19', title: 'TIMES Indonesia', edition: 'Edisi 1829', coverImage: 'https://images.unsplash.com/photo-1546953304-5d96f43c2e94?w=400', pdfUrl: '#', date: '2026-05-31', views: 19400, timeAgo: '4 hari yang lalu', category: 'Politik' },
  { id: '20', title: 'TIMES Indonesia', edition: 'Edisi 1828', coverImage: 'https://images.unsplash.com/photo-1560177112-fbfd5760d446?w=400', pdfUrl: '#', date: '2026-05-31', views: 16800, timeAgo: '4 hari yang lalu', category: 'Musik' },
  // 30 Mei 2026
  { id: '21', title: 'TIMES Indonesia', edition: 'Edisi 1827', coverImage: 'https://images.unsplash.com/photo-1551803092-e20773f7fdc4?w=400', pdfUrl: '#', date: '2026-05-30', views: 24100, timeAgo: '5 hari yang lalu', category: 'Film' },
  { id: '22', title: 'TIMES Indonesia', edition: 'Edisi 1826', coverImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400', pdfUrl: '#', date: '2026-05-30', views: 20800, timeAgo: '5 hari yang lalu', category: 'Lifestyle' },
  { id: '23', title: 'TIMES Indonesia', edition: 'Edisi 1825', coverImage: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400', pdfUrl: '#', date: '2026-05-30', views: 18100, timeAgo: '5 hari yang lalu', category: 'Kuliner' },
  { id: '24', title: 'TIMES Indonesia', edition: 'Edisi 1824', coverImage: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400', pdfUrl: '#', date: '2026-05-30', views: 15400, timeAgo: '5 hari yang lalu', category: 'Internasional' },
  // 29 Mei 2026
  { id: '25', title: 'TIMES Indonesia', edition: 'Edisi 1823', coverImage: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=400', pdfUrl: '#', date: '2026-05-29', views: 22900, timeAgo: '6 hari yang lalu', category: 'Olahraga' },
  { id: '26', title: 'TIMES Indonesia', edition: 'Edisi 1822', coverImage: 'https://images.unsplash.com/photo-1546953304-5d96f43c2e94?w=400', pdfUrl: '#', date: '2026-05-29', views: 19700, timeAgo: '6 hari yang lalu', category: 'Hiburan' },
  { id: '27', title: 'TIMES Indonesia', edition: 'Edisi 1821', coverImage: 'https://images.unsplash.com/photo-1560177112-fbfd5760d446?w=400', pdfUrl: '#', date: '2026-05-29', views: 17200, timeAgo: '6 hari yang lalu', category: 'Politik' },
  { id: '28', title: 'TIMES Indonesia', edition: 'Edisi 1820', coverImage: 'https://images.unsplash.com/photo-1551803092-e20773f7fdc4?w=400', pdfUrl: '#', date: '2026-05-29', views: 14600, timeAgo: '6 hari yang lalu', category: 'Musik' },
  // 28 Mei 2026
  { id: '29', title: 'TIMES Indonesia', edition: 'Edisi 1819', coverImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400', pdfUrl: '#', date: '2026-05-28', views: 21800, timeAgo: '7 hari yang lalu', category: 'Film' },
  { id: '30', title: 'TIMES Indonesia', edition: 'Edisi 1818', coverImage: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400', pdfUrl: '#', date: '2026-05-28', views: 18500, timeAgo: '7 hari yang lalu', category: 'Lifestyle' },
  { id: '31', title: 'TIMES Indonesia', edition: 'Edisi 1817', coverImage: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400', pdfUrl: '#', date: '2026-05-28', views: 16100, timeAgo: '7 hari yang lalu', category: 'Kuliner' },
  { id: '32', title: 'TIMES Indonesia', edition: 'Edisi 1816', coverImage: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=400', pdfUrl: '#', date: '2026-05-28', views: 13800, timeAgo: '7 hari yang lalu', category: 'Internasional' },
  // 27 Mei 2026
  { id: '33', title: 'TIMES Indonesia', edition: 'Edisi 1815', coverImage: 'https://images.unsplash.com/photo-1546953304-5d96f43c2e94?w=400', pdfUrl: '#', date: '2026-05-27', views: 20600, timeAgo: '8 hari yang lalu', category: 'Olahraga' },
  { id: '34', title: 'TIMES Indonesia', edition: 'Edisi 1814', coverImage: 'https://images.unsplash.com/photo-1560177112-fbfd5760d446?w=400', pdfUrl: '#', date: '2026-05-27', views: 17400, timeAgo: '8 hari yang lalu', category: 'Hiburan' },
  { id: '35', title: 'TIMES Indonesia', edition: 'Edisi 1813', coverImage: 'https://images.unsplash.com/photo-1551803092-e20773f7fdc4?w=400', pdfUrl: '#', date: '2026-05-27', views: 15100, timeAgo: '8 hari yang lalu', category: 'Politik' },
  { id: '36', title: 'TIMES Indonesia', edition: 'Edisi 1812', coverImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400', pdfUrl: '#', date: '2026-05-27', views: 12900, timeAgo: '8 hari yang lalu', category: 'Musik' },
];

// Cek Fakta Data
export const cekFaktaItems: CekFakta[] = [
  {
    id: '1',
    title: 'BPOM Nyatakan vaksin COVID-19 Aman',
    verdict: 'FAKTA',
    description: 'BPOM telah mengeluarkan izin darurat untuk vaksin COVID-19 dengan standar keamanan tinggi.',
    source: 'bpom.go.id',
  },
  {
    id: '2',
    title: 'Disinformasi tentang Gempa Susulan',
    verdict: 'HOAX',
    description: 'Informasi tentang earthquake besar yang akan terjadi tidak memiliki dasar ilmiah.',
    source: 'BMKG',
  },
  {
    id: '3',
    title: 'Program Subsidi BBM Tidak Berlaku',
    verdict: 'MENYESATKAN',
    description: 'Program subsidi BBM masih berlanjut dengan mekanisme baru, bukan dihapuskan.',
    source: 'Kementrian ESDM',
  },
];

// Popular Articles for Sidebar
export const popularArticles: SidebarItem[] = [
  {
    id: '1',
    title: 'Timnas Indonesia Lolos ke Semifinal',
    slug: 'timnas-indonesia-lolos-ke-semifinal-piala-asia-2026',
    views: 42100,
  },
  {
    id: '2',
    title: 'Bank Indonesia Pertahankan Suku Bunga',
    slug: 'bank-indonesia-pertahankan-suku-bunga-acuan-di-6-persen',
    views: 15670,
  },
  {
    id: '3',
    title: 'Konferensi Iklim COP31 Hasilkan Komitmen Baru',
    slug: 'konferensi-iklim-cop31-hasilkan-komitmen Baru-pengurangan-emisi',
    views: 12450,
  },
  {
    id: '4',
    title: 'Aplikasi AI Bantu Diagnosa Penyakit',
    slug: 'aplikasi-ai-terbaru-bantu-diagnosa-penyakit-lebih-akurat',
    views: 8920,
  },
  {
    id: '5',
    title: 'Studi Baru: Puasa Intermiten untuk Jantung',
    slug: 'studi baru-ungkap-manfaat-puasa-intermiten-untuk-kesehatan-jantung',
    views: 7340,
  },
];

// Category shortcut for Quick Navigation
export interface QuickNavCategory {
  id: string;
  name: string;
  slug: string;
  color: string;
}

export const quickNavCategories: QuickNavCategory[] = [
  { id: '1', name: 'Nasional', slug: 'nasional', color: 'bg-times-red' },
  { id: '2', name: 'Internasional', slug: 'internasional', color: 'bg-blue-600' },
  { id: '3', name: 'Politik', slug: 'politik', color: 'bg-times-purple' },
  { id: '4', name: 'Ekonomi', slug: 'ekonomi', color: 'bg-green-600' },
  { id: '5', name: 'Olahraga', slug: 'olahraga', color: 'bg-orange-600' },
  { id: '6', name: 'Entertainment', slug: 'entertainment', color: 'bg-pink-600' },
  { id: '7', name: 'Teknologi', slug: 'tekno', color: 'bg-cyan-600' },
  { id: '8', name: 'Kesehatan', slug: 'kesehatan', color: 'bg-emerald-600' },
  { id: '9', name: 'Pendidikan', slug: 'pendidikan', color: 'bg-indigo-600' },
  { id: '10', name: 'Kuliner', slug: 'kuliner', color: 'bg-amber-600' },
  { id: '11', name: 'Wisata', slug: 'wisata', color: 'bg-teal-600' },
  { id: '12', name: 'Otomotif', slug: 'otomotif', color: 'bg-slate-600' },
];
