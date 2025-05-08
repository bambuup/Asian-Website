import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-primary-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Expand Your Business in Australia?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Let our expert team guide you through every step of the process. Schedule a consultation today and discover how we can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/contact"
              className="bg-white text-primary-700 hover:bg-primary-50 font-medium px-8 py-3 rounded-md text-lg transition-colors duration-300 flex items-center justify-center"
            >
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-medium px-8 py-3 rounded-md text-lg transition-colors duration-300"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;