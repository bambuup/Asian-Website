import React from 'react';
import { PlayCircle } from 'lucide-react';
import SplitText from '../TextAnimations/SplitText/SplitText';
import DecryptedText from '../TextAnimations/DecryptedText/DecryptedText';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};


const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="h-full w-full relative overflow-hidden">
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



      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="mb-4"><SplitText
              text="Your Business Growth Partner in Australia"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              delay={50}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}

              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}>
            </SplitText></h1>

            <SplitText
              text="Comprehensive market entry strategies, business development, and advisory services to help your business thrive in the Australian market."
              className="text-xl md:text-2xl text-gray-200 mb-8 text-left mt-2 mb-5"
              delay={20}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}

              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}>
            </SplitText>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
              <a
                href="#services"
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium px-8 py-3 rounded-md text-lg transition-colors duration-300 text-center"
              >
                Explore Services
              </a>
              <button
                className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white font-medium px-8 py-3 rounded-md text-lg transition-all duration-300 flex items-center justify-center"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;