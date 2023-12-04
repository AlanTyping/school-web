import React from 'react';
import Header from '../components/header/Header';
import Image from 'next/image';
import logo from './school-logo.png';
import Footer from '../components/footer/Footer';

const Inscription = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full relative'>
      <Header />

      <div className='w-full md:w-[50%] 2xl:w-[33%] flex items-start mt-5 md:mt-[80px] 2xl:mt-[120px]'>
        <Image className='ml-4 h-[150px] w-[250px]' alt='school-logo' src={logo} />
      </div>



      <iframe
        className='w-[100%] md:w-[50%] mb-[200px]'
        src="https://docs.google.com/forms/d/e/1FAIpQLSdlbhhC6SVIJgc0RjAiGT2jmsQIum0OBz_vI-NP23u9pLIaRA/viewform?embedded=true"
        height="900"
      >
        Cargando…
      </iframe>

      <Footer />
    </div>
  )
}

export default Inscription