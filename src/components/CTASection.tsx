import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-green-800 via-green-700/80 to-green-600/70">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-400/30 rounded-full filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-300/20 rounded-full filter blur-[100px] animate-pulse delay-700"></div>
      </div>

      {/* Diagonal lines */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-[5px] bg-[#bee952] transform rotate-12"
            style={{ left: `${i * 10 + 20}%` }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-6 px-4 py-1.5 bg-gray-50 rounded-full border border-gray-200"
              >
                <span className="text-sm text-gray-600 font-medium">Ready to Expand?</span>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Expand Your Business in{' '}
                <motion.div
                  className="mt-4 flex items-center justify-center gap-4 flex-wrap"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="bg-gradient-to-r from-red-500 via-red-400 to-yellow-500 bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-300 text-5xl md:text-6xl lg:text-7xl font-extrabold">
                    Vietnam
                  </span>
                  <span className="text-[#1a1a1a] mx-2">&</span>
                  <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-300 text-5xl md:text-6xl lg:text-7xl font-extrabold">
                    Australia
                  </span>
                </motion.div>
              </motion.h2>

              <motion.p
                className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Let our expert team guide you through every step of the process. Schedule a consultation today and discover how we can help you achieve your business goals.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.a
                  href="/book"
                  className="group px-8 py-4 bg-[#91BE1F] hover:bg-[#7ea81a] text-white rounded-full text-lg font-medium transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-green-500/20 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a Consultation
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>
                <motion.a
                  href="/input"
                  className="group px-8 py-4 bg-white text-gray-800 rounded-full text-lg font-medium transition-all duration-300 flex items-center justify-center hover:bg-gray-50 shadow-lg hover:shadow-xl border border-gray-200 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Updates
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;