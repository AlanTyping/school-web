import React from 'react';
import image from './culture-carousel/assets/image3.svg';
import Image from 'next/image';
import { CultureCarousel } from './culture-carousel/CultureCarousel';

export const Culture = () => {
  const eventos = [
    {
        imagen: image,
        texto: `" Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Ducimus ut soluta accusantium voluptate quibusdam, nesciunt eum, quam ab eveniet vero magnam exercitationem,
        dolore enim aliquid veniam consectetur animi voluptas quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Placeat cum voluptate nemo eos ad repudiandae. Autem, tempore neque labore nobis voluptatem odio,
        fugiat similique fugit rerum quod inventore, dicta expedita! "`
    },
    {
        imagen: image,
        texto: `" Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Ducimus ut soluta accusantium voluptate quibusdam, nesciunt eum, quam ab eveniet vero magnam exercitationem,
        dolore enim aliquid veniam consectetur animi voluptas quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Placeat cum voluptate nemo eos ad repudiandae. Autem, tempore neque labore nobis voluptatem odio,
        fugiat similique fugit rerum quod inventore, dicta expedita! "`
    },
    {
        imagen: image,
        texto: `" Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Ducimus ut soluta accusantium voluptate quibusdam, nesciunt eum, quam ab eveniet vero magnam exercitationem,
        dolore enim aliquid veniam consectetur animi voluptas quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Placeat cum voluptate nemo eos ad repudiandae. Autem, tempore neque labore nobis voluptatem odio,
        fugiat similique fugit rerum quod inventore, dicta expedita! "`
    },
    {
        imagen: image,
        texto: `" Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Ducimus ut soluta accusantium voluptate quibusdam, nesciunt eum, quam ab eveniet vero magnam exercitationem,
        dolore enim aliquid veniam consectetur animi voluptas quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Placeat cum voluptate nemo eos ad repudiandae. Autem, tempore neque labore nobis voluptatem odio,
        fugiat similique fugit rerum quod inventore, dicta expedita! "`
    }
  ]

  return (
    <div id='culture' className='w-full flex-center flex-col'>
      <h2 className='text-[2rem] md:text-[2.3rem] 2xl:text-[2.8rem] text-[#9b6500] pb-6 pt-10 sm:pt-20'>Cultura</h2>
      <CultureCarousel>
      {eventos.map((e, i) => (
          <div key={i} className='flex flex-col items-center justify-center text-[#001d3d]'>
            <div className='w-[75vw] md:w-[50vw] flex-center py-20 mb-5 rounded'>
              <Image src={e.imagen} alt='' height={60} width={60} />
            </div>
            
            <span className='z-[-1] w-[75vw] md:w-[50vw]'>{e.texto}</span>
          </div>
        ))}
      </CultureCarousel>
    </div>
  )
}
