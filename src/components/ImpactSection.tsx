import React from 'react';
import CountUp from '../TextAnimations/CountUp/CountUp';
import { Star } from 'lucide-react';

const stats = [
  { from: 0, to: 35, label: 'Partners', icon: '🤝' },
  { from: 0, to: 100, label: 'Experts', icon: '👨‍💼' },
  { from: 0, to: 40, label: 'Investment Funds', icon: '💰' },
  { from: 800, to: 1000, label: 'Startups', icon: '🚀' },
  { from: 0, to: 60, label: 'Successful Connections', icon: '🔗' },
];

const ImpactSection: React.FC = () => (
  <section className="relative py-24 overflow-hidden bg-[#184d2c]">
    {/* Elegant background elements */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[url('/patterns/subtle-dots.png')] opacity-5"></div>
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-green-400/10 via-emerald-300/10 to-transparent rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-blue-400/10 via-emerald-300/10 to-transparent rounded-full filter blur-[100px]"></div>
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header matching ServiceSection style */}
        <div className="relative inline-block mb-16">
          <div className="absolute -left-4 -right-4 -top-4 -bottom-4 bg-gradient-to-r from-green-100/20 via-emerald-100/20 to-green-100/20 blur-xl rounded-full"></div>
          <h2 className="relative text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent mb-4">
            Our Impact
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Refined stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="group relative transform transition-all duration-300 hover:scale-105"
            >
              {/* Decorative background for each stat */}
              <div className="absolute inset-0 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 shadow-xl"></div>

              {/* Content */}
              <div className="relative p-6 md:p-8">
                <div className="mb-4 text-4xl md:text-5xl font-bold text-white flex items-center justify-center gap-2">
                  <CountUp
                    from={item.from}
                    to={item.to}
                    duration={2}
                  />
                  <span className="text-emerald-400">+</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl mb-2">{item.icon}</span>
                  <p className="text-base md:text-lg tracking-wide text-white/80 font-semibold uppercase">
                    {item.label}
                  </p>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-white/5 to-green-400/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Footer note with matched font weight */}
        <div className="mt-16 text-white/60 max-w-2xl mx-auto">
          <p className="text-lg font-semibold italic leading-relaxed">
            "Building bridges between Vietnam and Australia, one connection at a time."
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ImpactSection;
