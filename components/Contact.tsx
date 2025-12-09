/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
            
            {/* Location */}
            <div className="flex-1">
                <span className="text-xs font-bold text-blue-500 tracking-[0.2em] uppercase mb-6 block">Visit Us</span>
                <h2 className="text-4xl font-serif text-white mb-8">
                    R. António Maria Cardoso 64<br/>
                    1200-310 Lisboa
                </h2>
                <div className="space-y-2 text-zinc-400 font-light">
                    <p>Tuesday - Saturday</p>
                    <p>10:00 - 20:00</p>
                    <p className="text-zinc-600 mt-4">Closed Sundays & Mondays</p>
                </div>
            </div>

            {/* Contact Form/Actions */}
            <div className="flex-1">
                <span className="text-xs font-bold text-zinc-500 tracking-[0.2em] uppercase mb-6 block">Get in touch</span>
                
                <div className="space-y-6">
                    <a href="mailto:hello@alloylisbon.com" className="flex items-center space-x-4 text-2xl text-zinc-300 hover:text-white transition-colors group">
                        <div className="p-3 border border-zinc-800 rounded-full group-hover:border-white transition-colors">
                            <EnvelopeIcon className="w-6 h-6" />
                        </div>
                        <span>hello@alloylisbon.com</span>
                    </a>
                    
                    <a href="tel:+351123456789" className="flex items-center space-x-4 text-2xl text-zinc-300 hover:text-white transition-colors group">
                         <div className="p-3 border border-zinc-800 rounded-full group-hover:border-white transition-colors">
                            <PhoneIcon className="w-6 h-6" />
                        </div>
                        <span>+351 21 000 0000</span>
                    </a>
                </div>

                <div className="mt-12 p-8 border border-zinc-800 bg-[#050505]">
                    <h3 className="text-white text-lg mb-4 font-serif italic">Ready for a change?</h3>
                    <p className="text-zinc-500 text-sm mb-6">Book your consultation with Claudio today.</p>
                    <button className="w-full bg-white text-black py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-zinc-200 transition-colors">
                        Book Online
                    </button>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};