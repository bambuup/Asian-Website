import React, { useState, useEffect } from 'react';
import { services } from '../data/services';
import { ArrowRight, ChevronDown, ChevronUp, Check, Star } from 'lucide-react';
import SplitText from '../TextAnimations/SplitText/SplitText';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const ServiceSection: React.FC = () => {
  const [expandedServices, setExpandedServices] = useState<string[]>([]);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [activeDirection, setActiveDirection] = useState<'vn-to-au' | 'au-to-vn'>('vn-to-au');

  useEffect(() => {
    const handleDirectionSwitch = (event: CustomEvent) => {
      const direction = event.detail as 'vn-to-au' | 'au-to-vn';
      setActiveDirection(direction);

      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('switchServiceDirection', handleDirectionSwitch as EventListener);
    return () => {
      window.removeEventListener('switchServiceDirection', handleDirectionSwitch as EventListener);
    };
  }, []);

  const toggleService = (serviceId: string) => {
    setExpandedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const filteredServices = services.filter(service => service.direction === activeDirection);

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background with gradient and texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 rounded-full filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full filter blur-[100px] animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">


          <div className="relative inline-block">
            <div className="absolute -left-4 -right-4 -top-4 -bottom-4 bg-gradient-to-r from-green-100/20 via-emerald-100/20 to-green-100/20 blur-xl rounded-full"></div>
            <h2 className="relative">
              <SplitText
                text="Our Services"
                className="text-4xl md:text-5xl font-bold text-black mb-4 relative"
                delay={50}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </h2>
          </div>

          <div className="w-32 h-1.5 bg-gradient-to-r from-[#d3ed8f] via-[#91BE1F] to-[#7ea81a] mx-auto mb-8 mt-4 rounded-full"></div>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Tailored solutions to help companies succeed in cross-border expansion between Vietnam and Australia.
          </p>

          {/* Direction Toggle */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveDirection('vn-to-au')}
              className={`group relative px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 overflow-hidden ${activeDirection === 'vn-to-au'
                ? 'bg-gradient-to-r from-[#91BE1F] to-[#7ea81a] text-white shadow-lg shadow-green-600/20 scale-105'
                : 'bg-white text-gray-700 hover:text-[#91BE1F] hover:shadow-lg border border-gray-200'
                }`}
            >
              {activeDirection === 'vn-to-au' && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-shimmer"></div>
              )}
              <div className="relative flex items-center justify-center gap-2">
                <span className="font-semibold">Vietnam</span>
                <ArrowRight className="w-5 h-5" />
                <span className="font-semibold">Australia</span>
              </div>
            </button>
            <button
              onClick={() => setActiveDirection('au-to-vn')}
              className={`group relative px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 overflow-hidden ${activeDirection === 'au-to-vn'
                ? 'bg-gradient-to-r from-[#91BE1F] to-[#7ea81a] text-white shadow-lg shadow-green-600/20 scale-105'
                : 'bg-white text-gray-700 hover:text-[#91BE1F] hover:shadow-lg border border-gray-200'
                }`}
            >
              {activeDirection === 'au-to-vn' && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-shimmer"></div>
              )}
              <div className="relative flex items-center justify-center gap-2">
                <span className="font-semibold">Australia</span>
                <ArrowRight className="w-5 h-5" />
                <span className="font-semibold">Vietnam</span>
              </div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`group bg-white/90 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 ${hoveredService === service.id
                ? 'ring-2 ring-[#91BE1F]/50 shadow-xl shadow-green-600/10 transform scale-[1.02]'
                : 'shadow-lg hover:shadow-xl hover:shadow-green-600/10'
                }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="relative p-6 md:p-8">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#91BE1F] rounded-bl-[100px] -z-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-100/20 to-emerald-200/20 rounded-tr-[100px] -z-10"></div>

                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent group-hover:text-[#91BE1F] transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => toggleService(service.id)}
                    className={`ml-9 p-2.5 rounded-xl transition-all duration-300 ${expandedServices.includes(service.id)
                      ? 'bg-green-100 text-green-700 rotate-180'
                      : 'bg-gray-50 text-gray-500 hover:bg-green-50 hover:text-green-600'
                      }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">{service.description}</p>


                {/* Service Items with enhanced design */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedServices.includes(service.id)
                    ? 'max-h-[2000px] opacity-100'
                    : 'max-h-0 opacity-0'
                    }`}
                >
                  <ul className="space-y-6 mb-6">
                    {service.items.map((item) => (
                      <li key={item.id} className="transform transition-all duration-300 hover:translate-x-2">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 text-green-600 flex items-center justify-center">
                            <div className="w-3 h-3 bg-gradient-to-br from-[#91BE1F] to-[#7ea81a] rounded-lg transform transition-transform group-hover:scale-110"></div>
                          </div>
                          <div className="flex-grow">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                            <p className="text-gray-600 leading-relaxed mb-3">{item.description}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;