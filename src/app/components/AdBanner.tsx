import { Image } from 'lucide-react';

export function AdBanner({
  size,
  imageUrl,
  targetUrl
}: {
  size: 'leaderboard' | 'rectangle' | 'skyscraper',
  imageUrl?: string,
  targetUrl?: string
}) {
  const dimensions = {
    leaderboard: { width: 728, height: 90, label: '728 x 90' },
    rectangle: { width: 300, height: 250, label: '300 x 250' },
    skyscraper: { width: 300, height: 600, label: '300 x 600' },
  };
  const { width, height, label } = dimensions[size];

  return (
    <div className="w-full flex justify-center my-6">
      {imageUrl ? (
        /* Jika imageUrl diberikan, tampilkan gambar iklan */
        <a
          href={targetUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full overflow-hidden rounded shadow-sm hover:opacity-90 transition-opacity"
          style={{ maxWidth: `${width}px` }}
        >
          <img
            src={imageUrl}
            alt={`Advertisement ${label}`}
            // Ubah "object-cover" menjadi "object-contain p-4" agar gambar utuh dan tidak menempel di tepi
            className="w-full h-full object-contain p-4"
            style={{ aspectRatio: `${width} / ${height}` }}
          />
        </a>
      ) : (
        /* Jika tidak ada imageUrl, tampilkan kotak kosongan bawaan sebelumnya */
        <div
          className="bg-gray-100 border border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 text-xs font-medium rounded"
          style={{ width: '100%', maxWidth: `${width}px`, aspectRatio: `${width} / ${height}` }}
        >
          <Image className="w-6 h-6 mb-2 opacity-50" />
          Advertisement · {label}
        </div>
      )}
    </div>
  );
}