/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-60 grayscale-[50%]"
        >
          <source src="https://files.catbox.moe/t2wfx0.mp4" type="video/mp4" />
        </video>
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#050505]"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        {/* Logo Image */}
        <div className="w-full max-w-[80vw] md:max-w-2xl mb-10 fade-in-up">
            <img src="https://raw.githubusercontent.com/sphitzio/various/refs/heads/main/alloy1.svg" alt="ALLOY." className="w-full h-auto" />
        </div>
        
        <div className="h-px w-24 bg-[#ebe6d8]/50 mb-8 fade-in-up delay-200"></div>

        <p className="text-xs md:text-base text-[#ebe6d8] tracking-[0.4em] uppercase fade-in-up delay-300 font-medium">
          R. António Maria Cardoso 64 &middot; Chiado, Lisbon
        </p>

        <p className="mt-12 max-w-lg text-zinc-300 font-light leading-relaxed fade-in-up delay-500 hidden md:block">
            Precision styling in the heart of the capital.
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ChevronDownIcon className="w-6 h-6 text-[#ebe6d8]" />
      </div>
    </div>
  );
};