import React from 'react';
import Hero from '../components/Hero';
import ServiceSection from '../components/ServiceSection';
import PartnersSection from '../components/PartnersSection';
import CTASection from '../components/CTASection';
import { Helmet } from 'react-helmet';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home Page | BambuUP</title>
      </Helmet>
      <div>
        <Hero />
        <ServiceSection />
        <PartnersSection />
        <CTASection />
      </div>
    </>
  );
};

export default HomePage;