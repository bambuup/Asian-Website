import React from 'react';
import Hero from '../components/Hero';
import ServiceSection from '../components/ServiceSection';
import PartnersSection from '../components/PartnersSection';
import CTASection from '../components/CTASection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <ServiceSection />
      <PartnersSection />
      <CTASection />
    </div>
  );
};

export default HomePage;