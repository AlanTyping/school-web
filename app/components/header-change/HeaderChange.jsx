'use client'

import { useState, useEffect } from 'react';
import MobileHeader from '../mobile-header/MobileHeader';
import Header from '../header/Header';

const HeaderChange = () => {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }

  }, []);

  return (
    <>
      {windowWidth > 768 ? <Header /> : <MobileHeader />}
    </>
  )
}

export default HeaderChange