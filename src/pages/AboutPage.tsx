import React from 'react';
import ImpactSection from '../components/ImpactSection';
import { Helmet } from 'react-helmet';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Page | BambuUP</title>
      </Helmet>
      <div>
        <ImpactSection />
      </div>
    </>
  );
};

export default About;