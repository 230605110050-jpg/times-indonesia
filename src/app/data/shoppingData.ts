export interface ShoppingProduct {
  id: string;
  title: string;
  category: string;
  image: string;
  rating: number;
  salesCount: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  linkUrl: string;
}

export const shoppingProducts: ShoppingProduct[] = [
  {
    id: '1',
    title: 'Kacamata Hitam Polarized Anti Silau - Aksesori Trendy Tren 2026',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800',
    rating: 4.8,
    salesCount: '1.2K terjual',
    price: 'Rp 149.000',
    originalPrice: 'Rp 299.000',
    badge: 'HOT',
    linkUrl: 'https://tokopedia.com',
  },
  {
    id: '2',
    title: 'Keunggulan Parfum Roll On Soft Vanilla - Tahan Lama 24 Jam',
    category: 'Kecantikan',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800',
    rating: 4.9,
    salesCount: '2.4K terjual',
    price: 'Rp 89.000',
    originalPrice: 'Rp 150.000',
    badge: 'HOT',
    linkUrl: 'https://shopee.co.id',
  },
  {
    id: '3',
    title: 'Mainan Edukasi Blok Karakter Lucu Minecraft & Skibidi Edition',
    category: 'Mainan',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800',
    rating: 4.7,
    salesCount: '980 terjual',
    price: 'Rp 65.000',
    originalPrice: 'Rp 120.000',
    badge: 'HOT',
    linkUrl: 'https://tokopedia.com',
  },
  {
    id: '4',
    title: 'Kacamata Frame Oval Minimalis Titanium - Tips Merawat Biar Awet',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800',
    rating: 4.8,
    salesCount: '1.6K terjual',
    price: 'Rp 199.000',
    originalPrice: 'Rp 350.000',
    badge: 'HOT',
    linkUrl: 'https://shopee.co.id',
  },
  {
    id: '5',
    title: 'Wireless Earbuds Noise Cancelling Bluetooth 5.3 Bass Boost',
    category: 'Elektronik',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800',
    rating: 4.9,
    salesCount: '3.1K terjual',
    price: 'Rp 279.000',
    originalPrice: 'Rp 499.000',
    badge: 'BESTSELLER',
    linkUrl: 'https://tokopedia.com',
  },
  {
    id: '6',
    title: 'Smartwatch Sport Waterproof Fitness Tracker Blood Oxygen',
    category: 'Teknologi',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800',
    rating: 4.8,
    salesCount: '1.8K terjual',
    price: 'Rp 349.000',
    originalPrice: 'Rp 599.000',
    badge: 'PROMO',
    linkUrl: 'https://shopee.co.id',
  },
];
