/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

const images = [
  {
    url: 'https://raw.githubusercontent.com/sphitzio/various/refs/heads/main/1.jpg',
    caption: 'Interior',
    span: 'col-span-1 md:col-span-4 row-span-2'
  },
    {
    url: 'https://raw.githubusercontent.com/sphitzio/various/refs/heads/main/2.jpg',
    caption: 'Interior',
    span: 'col-span-1 md:col-span-4 row-span-2'
  },
    {
    url: 'https://raw.githubusercontent.com/sphitzio/various/refs/heads/main/3.jpg',
    caption: 'Interior',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
    {
    url: 'https://raw.githubusercontent.com/sphitzio/various/refs/heads/main/7.png',
    caption: 'Process',
    span: 'col-span-2 row-span-2'
  },
     {
    url: 'https://raw.githubusercontent.com/sphitzio/various/refs/heads/main/8.png',
    caption: 'Process',
    span: 'col-span-2 row-span-2'
  },
    {
    url: 'https://raw.githubusercontent.com/sphitzio/various/refs/heads/main/5.jpg',
    caption: 'Interior',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },

  {
    url: 'https://raw.githubusercontent.com/sphitzio/various/refs/heads/main/9.png',
    caption: 'Lisbon',
    span: 'col-span-1 row-span-1'
  },
  {
    url: 'https://raw.githubusercontent.com/sphitzio/various/refs/heads/main/10.png',
    caption: 'Editorial',
    span: 'col-span-1 md:col-span-2 row-span-1'
  },
  {
    url: 'https://raw.githubusercontent.com/sphitzio/various/refs/heads/main/11_2.png',
    caption: 'Detail',
    span: 'col-span-1 row-span-1'
  },
    {
    url: 'https://raw.githubusercontent.com/sphitzio/various/refs/heads/main/4.jpg',
    caption: 'Lisbon',
    span: 'col-span-4 row-span-2'
  },
      {
    url: 'https://raw.githubusercontent.com/sphitzio/various/refs/heads/main/6.png',
    caption: 'Lisbon',
    span: 'col-span-4 row-span-2'
  },
];

export const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505]">
       <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide">VISUALS</h2>
            <span className="text-zinc-500 font-mono text-sm hidden md:block">@ALLOY.LISBON</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 auto-rows-[200px] md:auto-rows-[300px]">
            {images.map((img, idx) => (
                <div key={idx} className={`relative group overflow-hidden ${img.span}`}>
                    <img 
                        src={img.url} 
                        alt={img.caption}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur px-3 py-1 text-xs text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        {img.caption}
                    </div>
                </div>
            ))}
          </div>
       </div>
    </section>
  );
};
