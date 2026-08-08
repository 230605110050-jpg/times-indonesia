import React from 'react';
import { Info, X } from 'lucide-react';

interface AdBannerProps {
  imageSrc: string;
  altText: string;
  linkUrl?: string;
  label?: string;
  slotName?: string;
  className?: string;
}

export function AdBanner({
  imageSrc,
  altText,
  linkUrl = '#',
  label = 'IKLAN',
  slotName = 'Billboard 970 × 250',
  className = '',
}: AdBannerProps) {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className={`w-full py-4 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-100 ${className}`}>
      <div className="max-w-[970px] mx-auto px-4">
        {/* Ad Header Label */}
        <div className="flex items-center justify-between mb-1.5 px-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold tracking-wider uppercase bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded">
              {label}
            </span>
            <span className="text-[11px] text-slate-400 font-medium hidden sm:inline-block">
              {slotName}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-0.5"
              title="Informasi Iklan"
              onClick={(e) => {
                e.preventDefault();
                alert('Ruang Iklan Banner TIMES Indonesia (970x250 px)');
              }}
            >
              <Info className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-0.5"
              title="Tutup Iklan"
              onClick={() => setIsVisible(false)}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Ad Container 970x250 */}
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative w-full overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-all duration-300 aspect-[970/250]"
        >
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              if (target.parentElement) {
                target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-r', 'from-slate-800', 'to-slate-900', 'text-white');
              }
            }}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
        </a>
      </div>
    </div>
  );
}

interface AdSidebarBannerProps {
  imageSrc: string;
  altText: string;
  linkUrl?: string;
  label?: string;
  slotName?: string;
  size?: '300x250' | '300x600';
  className?: string;
}

export function AdSidebarBanner({
  imageSrc,
  altText,
  linkUrl = '#',
  label = 'IKLAN',
  slotName = 'Medium Rectangle 300 × 250',
  size = '300x250',
  className = '',
}: AdSidebarBannerProps) {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  const aspectClass = size === '300x600' ? 'aspect-[300/600]' : 'aspect-[300/250]';

  return (
    <div className={`w-full bg-white dark:bg-slate-800/80 rounded-xl p-3 shadow-sm border border-slate-200/80 dark:border-slate-700/80 ${className}`}>
      {/* Ad Header Label */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] font-bold tracking-wider uppercase bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 px-1.5 py-0.5 rounded">
            {label}
          </span>
          <span className="text-[10px] text-slate-400 font-medium truncate max-w-[170px]">
            {slotName}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-0.5"
            title="Informasi Iklan"
            onClick={(e) => {
              e.preventDefault();
              alert(`Ruang Iklan Sidebar Google Ads (${size.replace('x', '×')} px)`);
            }}
          >
            <Info className="w-3 h-3" />
          </button>
          <button
            type="button"
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-0.5"
            title="Tutup Iklan"
            onClick={() => setIsVisible(false)}
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Ad Container */}
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`group block relative w-full overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 transition-all duration-300 ${aspectClass}`}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = 'none';
            if (target.parentElement) {
              target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-slate-800', 'text-white', 'text-xs', 'p-4', 'text-center');
              target.parentElement.innerText = `${altText} (${size})`;
            }
          }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
      </a>
    </div>
  );
}

