import React from 'react';
import CountUp from '../TextAnimations/CountUp/CountUp';

const stats = [
  { from: 0, to: 35, label: 'Partners' },
  { from: 0, to: 100, label: 'Experts' },
  { from: 0, to: 40, label: 'Investment Funds' },
  { from: 800, to: 1000, label: 'Startups' },
  { from: 0, to: 60, label: 'Successful Connections' },
];

const ImpactSection: React.FC = () => (
  <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-900 overflow-hidden">
    {/* Gradient soft overlay */}
    <div className="absolute inset-0 opacity-30 bg-gradient-to-tr from-white to-transparent"></div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="mb-12 text-4xl md:text-5xl font-serif text-white"
        >
          Our Impact
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-center">
          {stats.map((item, idx) => (
            <div key={idx}>
              <div className="mb-2 text-5xl font-bold text-white">
                <CountUp
                  from={item.from}
                  to={item.to}
                  duration={2}
                />
                +
              </div>
              <p
                className="text-lg uppercase tracking-wide text-white/80"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ImpactSection;
