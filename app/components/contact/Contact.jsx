import React from 'react';
import Image from 'next/image';
import idea from './assets/idea.svg';
import feedback from './assets/feedback.svg';
import map from './assets/map.svg';


export const Contact = () => {
  return (
    <section className='bg-[#01448b] w-full flex-center flex-col text-white pb-12'>
      <h2 className='text-[1.8rem] py-6 pt-10'>Contacto</h2>

      <div className='flex-center flex-col w-full sm:flex-row'>
        <div className='flex-center flex-col w-full sm:w-[50%]'>
          <div className="w-[90%] flex-center">
            <div className='py-16 bg-[#ccc] m-4 h-[400px] rounded w-full flex-center'>
              <Image src={map} alt='' height={60} width={60} />
            </div>
          </div>
        </div>

        <div className='flex-center flex-col w-full sm:w-[40%] bg-[#001d3d] pb-6 rounded'>
          <div className='w-[80%] px-2 flex items-center flex-col justify-between mt-6 text-[1.1rem]'>
            <div className="w-full flex flex-row my-2">
              <div className="w-[50%]">
                <h3>Email:</h3>
              </div>
              <div className="w-[50%]">
                <span>---------</span>
              </div>
            </div>

            <div className="w-full flex flex-row my-2">
              <div className="w-[50%]">
                <h3>Teléfono:</h3>
              </div>
              <div className="w-[50%]">
                <span>---------</span>
              </div>
            </div>
          </div>

          <h2 className='text-[1.3rem] my-2 mt-8'>Mejorando la escuela</h2>

          <div className='w-full flex items-center justify-between px-2 mt-4 max-w-[390px]'>
            <div className="flex-center flex-col cursor-pointer">
              <span className='text-[1.1rem] mb-2'>Idea</span>
              <div className="p-6 px-8 bg-[#ffa500] m-4 mt-0 rounded flex-center flex-col">
                <Image src={idea} alt='' height={60} width={60} />
              </div>
            </div>

            <div className='h-[100px] w-[2px] bg-white mb-[-20px]' />

            <div className="flex-center flex-col cursor-pointer">
              <span className='text-[1.1rem] mb-2'>Feedback</span>
              <div className="p-6 px-8 bg-[#006de2] m-4 mt-0 rounded flex-center flex-col">
                <Image src={feedback} alt='' height={60} width={60} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}