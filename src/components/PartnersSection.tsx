import React from 'react';
import { partners } from '../data/partners';

const PartnersSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Partners</h2>
          <div className="w-20 h-1 bg-[#91BE1F] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with leading organizations across Australia to provide the best service to our clients.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-slide-left space-x-16 py-8">
            {/* First set of partners */}
            {partners.map((partner) => (
              <div key={partner.id} className="flex-shrink-0 w-48 h-24 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{ width: partner.width, height: partner.height }}
                  className="max-h-24 max-w-full object-contain transition-all duration-300"
                />
              </div>
            ))}

            {/* Duplicate set for continuous animation */}
            {partners.map((partner) => (
              <div key={`dup-${partner.id}`} className="object-contain flex-shrink-0 w-48 h-24 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{ width: partner.width, height: partner.height }}
                  className="max-h-24 max-w-full object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;