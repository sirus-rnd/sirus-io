import React from 'react';
import 'twin.macro';
import Header from '../components/header';
import Footer from '../components/footer';

interface BaseProps {
  dark?: boolean;
}

const BaseLayout: React.FC<BaseProps> = ({ dark = false, children }) => {
  return (
    <div>
      <Header dark={dark} />
      {children}
      <Footer />
    </div>
  );
};

export default BaseLayout;
