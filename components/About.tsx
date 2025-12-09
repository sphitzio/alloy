/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 md:order-1 space-y-8">
            <div>
                <span className="text-xs font-bold text-zinc-500 tracking-[0.2em] uppercase mb-4 block">Creative Director</span>
                <h2 className="text-4xl md:text-5xl font-serif text-white italic leading-tight">
                  Claudio Vieira
                </h2>
            </div>
            
            <div className="h-px w-full bg-zinc-800"></div>

            <div className="space-y-6 text-zinc-400 font-light leading-relaxed text-sm md:text-base">
              <p>
                With over a decade of mastery in the art of hair, Claudio Vieira represents the convergence of technical precision and artistic vision. A graduate of the prestigious <strong className="text-white font-normal">Lucia Piloto Academy</strong>, Claudio has honed his craft at some of Lisbon’s most revered salons, including <strong className="text-white font-normal">Facto</strong>.
              </p>
              <p>
                Alloy is the realization of his vision: a space where hair styling is treated as a form of architectural design. Just as an alloy combines elements to create something stronger and more resilient, we blend classic techniques with modern aesthetics to create a look that is uniquely yours.
              </p>
            </div>

            <div className="pt-4">
                <img src="https://raw.githubusercontent.com/sphitzio/various/refs/heads/main/sign.svg" alt="Signature" className="h-16 opacity-100" />
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 md:order-2 relative group">
            <div className="absolute inset-0 border border-zinc-700 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                {/* Placeholder for Claudio - Stylish man with glasses/tattoos */}
                 <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-60 grayscale-[50%]"
        >
          <source src="https://github.com/sphitzio/alloy/raw/refs/heads/main/claudiovieira.mp4" type="video/mp4" />
        </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
