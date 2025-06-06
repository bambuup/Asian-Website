import React, { useState } from 'react';
import { PlayCircle, ChevronRight, Globe, Users, TrendingUp } from 'lucide-react';
import SplitText from '../TextAnimations/SplitText/SplitText';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const Hero: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with gradient and texture */}
      <div className="absolute inset-0">
        <div className="h-1/2 bg-gradient-to-b from-white via-white to-white/90"></div>


        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full filter blur-[80px] animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-green-500/20 rounded-full filter blur-[60px] animate-pulse delay-700"></div>
      </div>

      {/* Diagonal lines with reduced opacity */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-[1px] bg-white/5 transform rotate-12"
            style={{ left: `${i * 10 + 20}%` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-6 px-4 py-1.5 bg-white/10 backdrop-blur-lg rounded-full border border-white/20">
            <span className="text-sm text-white">Trusted by Leading Companies</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6 leading-tight">
            <SplitText
              text="Your Growth Partner Across"
              className="drop-shadow-sm"
              delay={50}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <div className="mt-4 flex items-center justify-center gap-4 flex-wrap">
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-yellow-500 bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-300 text-5xl md:text-6xl lg:text-7xl font-extrabold">
                Vietnam
              </span>
              <span className="text-[#1a1a1a] mx-2">&</span>
              <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-300 text-5xl md:text-6xl lg:text-7xl font-extrabold">
                Australia
              </span>
            </div>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your trusted partner for business success in Vietnam and Australia from market entry to expansion and beyond.
          </p>


        </div>

        {/* Video section with glass morphism effect */}
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent backdrop-blur-sm rounded-2xl transform -skew-y-2"></div>
          <div className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform hover:scale-[1.01] transition-transform duration-500">
            <iframe
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="https://www.youtube.com/embed/Uv2QEU0Uzqs?autoplay=1&mute=1&loop=1&controls=0&playlist=Uv2QEU0Uzqs&modestbranding=1&showinfo=0"
              title="BAMBUUP Virtual Matchmaking Series"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Video Modal with improved animation */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm transition-opacity animate-fadeIn">
          <div className="relative w-full max-w-4xl mx-4 transform animate-scaleIn">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-green-400 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative pt-[56.25%] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/Uv2QEU0Uzqs?autoplay=1&controls=1"
                title="BAMBUUP Video"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default Hero;