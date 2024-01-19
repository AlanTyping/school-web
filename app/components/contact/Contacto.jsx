import React from 'react';
import Image from 'next/image';
import idea from './assets/idea.svg';
import feedback from './assets/feedback.svg';
import map from './assets/map.svg';


export const Contacto = () => {
  return (
    <section id='contacto' className='bg-[var(--bg)] w-full flex-center flex-col text-white pb-12'>
      <h2 className='text-[1.8rem] 2xl:text-[2.4rem] py-10 pt-20'>Contacto</h2>

      <div className='flex-center flex-col w-full sm:flex-row mt-4'>


        <div className='flex-center w-full sm:order-last sm:w-[40%] 2xl:w-[45%] bg-[var(--bg)] pb-6 rounded'>
          <div className='flex-center flex-col w-[80%] sm:w-[70%] 2xl:w-[50%]'>
            <h2 className='text-[1.3rem] my-2 2xl:my-6 mt-8 2xl:text-[1.6rem]'>Mejorando la escuela</h2>

            <div className='w-full flex items-center justify-between mt-4'>

              <div className="flex-center flex-col cursor-pointer">
                <span className='text-[1.1rem] 2xl:text-[1.4rem] mb-2'>Idea</span>
                <div className="p-6 px-8 bg-[#ffa500] mt-0 rounded flex-center flex-col">
                  <Image src={idea} alt='' className='h-[60px] w-[60px] 2xl:w-[80px] 2xl:h-[80px]' />
                </div>
              </div>

              <div className='h-[100px] w-[2px] bg-white mb-[-35px]' />

              <div className="flex-center flex-col cursor-pointer">
                <span className='text-[1.1rem] 2xl:text-[1.4rem] mb-2'>Feedback</span>
                <div className="p-6 px-8 bg-[#006de2] mt-0 rounded flex-center flex-col">
                  <Image src={feedback} alt='' className='h-[60px] w-[60px] 2xl:w-[80px] 2xl:h-[80px]' />
                </div>
              </div>
            </div>

            <div className='w-full flex items-center flex-col justify-between mt-6 2xl:mt-10 text-[1.1rem]'>
              <div className="w-full flex flex-row my-2">
                <div className="w-[40%]">
                  <h3>Email:</h3>
                </div>
                <div className="w-[60%]">
                  <span>---------</span>
                </div>
              </div>

              <div className="w-full flex flex-row my-2">
                <div className="w-[40%]">
                  <h3>Teléfono:</h3>
                </div>
                <div className="w-[60%]">
                  <span>---------</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className='flex-center flex-col w-full sm:w-[50%] 2xl:w-[40%]'>
          <div className="w-[90%] flex-center">
            <div className='py-16 bg-[#e6e6e6] m-4 h-[400px] rounded w-full flex-center'>
              <Image src={map} alt='' height={60} width={60} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
