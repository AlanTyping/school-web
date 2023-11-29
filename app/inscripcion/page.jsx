import React from 'react';
import Header from '../components/header/Header';
import Image from 'next/image';
import logo from './d.png'

const Inscription = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
        <Image className='mr-[160px] md:mr-[300px] h-[150px] w-[550px]' src={logo} />
        

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdlbhhC6SVIJgc0RjAiGT2jmsQIum0OBz_vI-NP23u9pLIaRA/viewform?embedded=true"
        width="100%" height="900" frameborder="0" marginheight="0" marginwidth="0"
      >Cargando…</iframe>
    </div>
  )
}

export default Inscription