import { Image } from 'lucide-react';

export function AdBanner({ size }: { size: 'leaderboard' | 'rectangle' | 'skyscraper' }) {
  const dimensions = {
    leaderboard: { width: 728, height: 90, label: '728 x 90' },
    rectangle: { width: 300, height: 250, label: '300 x 250' },
    skyscraper: { width: 300, height: 600, label: '300 x 600' },
  };
  const { width, height, label } = dimensions[size];

  return (
    <div className="w-full flex justify-center my-6">
      <div
        className="bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-xs font-medium rounded"
        style={{ width: '100%', maxWidth: `${width}px`, aspectRatio: `${width} / ${height}` }}
      >
        Advertisement · {label}
      </div>
    </div>
  );
}