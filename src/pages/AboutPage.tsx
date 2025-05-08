import React from 'react';
import Hero from '../components/Hero';
import ServiceSection from '../components/ServiceSection';
import PartnersSection from '../components/PartnersSection';
import ImpactSection from '../components/ImpactSection';
import TeamSection from '../components/TeamSection';

const About: React.FC = () => {
  return (
    <div>
      <TeamSection />
      <ImpactSection />
    </div>
  );
};

export default About;