import React from 'react';
import InputSection from '../components/InputSection';
import { Helmet } from 'react-helmet';

const Input: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Get Updates Page | BambuUP</title>
      </Helmet>
      <div>
        <InputSection />
      </div>
    </>
  );
};

export default Input;