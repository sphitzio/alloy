/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

interface ServiceItemProps {
  name: string;
  price: string;
  description?: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ name, price, description }) => (
  <div className="group flex justify-between items-baseline py-4 border-b border-zinc-800 hover:border-zinc-500 transition-colors">
    <div className="flex flex-col">
        <span className="text-lg text-zinc-200 font-medium tracking-wide group-hover:text-white transition-colors">{name}</span>
        {description && <span className="text-xs text-zinc-500 mt-1 font-light">{description}</span>}
    </div>
    <span className="text-zinc-400 font-mono">{price}</span>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-[#080808]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-zinc-500 tracking-[0.2em] uppercase">Menu</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white mt-4 italic">Services & Treatments</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <div>
                <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Cut & Style</h3>
                <div className="space-y-2">
                    <ServiceItem name="Creative Cut" price="Under Consultation" description="Consultation, wash, cut & styling" />
                    <ServiceItem name="Gentleman's Cut" price="€90" description="Precision clipper/scissor work" />
                    <ServiceItem name="Fringe Trim" price="Under Consultation" />
                    <ServiceItem name="Blow Dry" price="from €75" />
                    <ServiceItem name="Event Styling" price="Under Consultation" />
                </div>
            </div>

            <div>
                <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Color</h3>
                <div className="space-y-2">
                    <ServiceItem name="Full Tint" price="€80" />
                    <ServiceItem name="Balayage / Highlights" price="from €140" description="Hand-painted dimension" />
                    <ServiceItem name="Bleach & Tone" price="from €120" />
                    <ServiceItem name="Glossing" price="€45" />
                    <ServiceItem name="Color Correction" price="Consultation" />
                </div>
            </div>
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-zinc-500 text-sm">
                * Prices may vary based on hair length and complexity. Complimentary consultation included with all services.
            </p>
        </div>
      </div>
    </section>
  );
};