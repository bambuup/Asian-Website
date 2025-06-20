import React from 'react';
import { experts } from '../data/marketExperts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MarketExpertsSection: React.FC = () => {
  return (
    <section className="py-2 bg-gradient-to-b from-white via-green-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What Do Market Experts Reveal About <span className="text-[#91BE1F]">Vietnam Market</span>?
          </h2>
          <div className="w-20 h-1 bg-[#91BE1F] mx-auto mb-6"></div>
        </div>
        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={60}
            slidesPerView={2}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 50 },
            }}
            className="max-w-8xl mx-auto px-4 md:px-12"
          >
            {experts.map((expert, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative p-4 grid gap-4 bg-gradient-to-r from-[#1e5a78] to-[#afd451] rounded-xl">
                  <div className="grid grid-cols-[auto,1fr] gap-4 items-start w-full">
                    <img
                      src={expert.flag}
                      alt="Vietnam flag"
                      className="w-8 h-8 rounded-full m-2 absolute right-4 top-4 md:static md:right-auto md:top-auto"
                    />
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-[#91BE1F] shadow-lg"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-1">{expert.name}</h3>
                      <div className="text-sm text-white font-semibold mb-1">
                        {expert.title} <span className="text-[#caf069]">– {expert.company}</span>
                      </div>
                      <div className="text-xs text-white italic">{expert.former}</div>
                    </div>
                  </div>

                  <div className="text-gray-700 text-base italic text-justify mt-2 bg-white p-4 md:p-5 border-4 max-h-[300px] overflow-y-auto">
                    {expert.quote
                      .split(/\n+/)
                      .filter((para) => para.trim() !== '')
                      .map((para, i) => (
                        <p key={i} className="mb-2 last:mb-0 whitespace-pre-line leading-relaxed">
                          {para}
                        </p>
                      ))}
                  </div>

                  <span className="text-6xl text-black font-serif absolute -bottom-8 right-6 select-none">”</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MarketExpertsSection;