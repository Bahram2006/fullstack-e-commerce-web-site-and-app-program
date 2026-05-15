'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Banner {
  id: string;
  image_url: string;
  redirect_url: string;
}

export default function SideBanners() {
  // Aşakly-aşagyna durjak 3 sany aýratyn banneriň maglumatlary
  const [banners, setBanners] = useState<Banner[]>([
    {
      id: 'banner_1',
      image_url: '/placeholder.png', // 1-nji banneriň suraty (Meselem: /reklama1.jpg)
      redirect_url: '/delivery-info'
    },
    {
      id: 'banner_2',
      image_url: '/placeholder.png', // 2-nji banneriň suraty
      redirect_url: '/pc-builder'
    },
    {
      id: 'banner_3',
      image_url: '/placeholder.png', // 3-nji banneriň suraty
      redirect_url: '/sales'
    }
  ]);

  // Haýsy banneriň (X) düwmesine basylsa, diňe şol banneri öçürmek logikasy
  const removeBanner = (id: string) => {
    setBanners(prev => prev.filter(banner => banner.id !== id));
  };

  if (banners.length === 0) return null;

  return (
    // flex-col we space-y-4 arkaly bannerleri aşakly-aşagyna tertipli we aralykly goýýarys
    <div className="w-full flex flex-col space-y-4">
      {banners.map((banner) => (
        <div 
          key={banner.id} 
          className="w-full relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm group transition-all duration-300"
        >
          {/* Her banneriň öz aýratyn Ýapmak (X) düwmesi */}
          <button 
            onClick={() => removeBanner(banner.id)}
            className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white text-gray-700 font-bold rounded-full text-xs w-6 h-6 flex items-center justify-center shadow-md cursor-pointer transition-all"
            title="Reklamany ýap"
          >
            ✕
          </button>

          {/* Banneriň öz aýratyn Ugurlandyryjy Linki */}
          <a href={banner.redirect_url} className="block w-full">
            <div className="relative w-full aspect-[3/5] overflow-hidden">
              <Image
                src={banner.image_url}
                alt="Sumbar Computer Reklama"
                fill
                sizes="280px"
                className="object-cover group-hover:scale-103 transition-transform duration-500 ease-in-out"
                priority
              />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
