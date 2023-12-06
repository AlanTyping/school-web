import React from 'react';
import { TestimoniosCarousel } from './carousel/TestimoniosCarousel';
import { Testimonio } from './testimonio/Testimonio';

export const Testimonios = () => {
  const testimonios = [
    {
        nombre: "Testimonio 1",
        texto: `" Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Ducimus ut soluta accusantium voluptate quibusdam, nesciunt eum, quam ab eveniet vero magnam exercitationem,
        dolore enim aliquid veniam consectetur animi voluptas quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Placeat cum voluptate nemo eos ad repudiandae. Autem, tempore neque labore nobis voluptatem odio,
        fugiat similique fugit rerum quod inventore, dicta expedita! "`
    },
    {
        nombre: "Testimonio 2",
        texto: `" Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Ducimus ut soluta accusantium voluptate quibusdam, nesciunt eum, quam ab eveniet vero magnam exercitationem,
        dolore enim aliquid veniam consectetur animi voluptas quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Placeat cum voluptate nemo eos ad repudiandae. Autem, tempore neque labore nobis voluptatem odio,
        fugiat similique fugit rerum quod inventore, dicta expedita! "`
    },
    {
        nombre: "Testimonio 3",
        texto: `" Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Ducimus ut soluta accusantium voluptate quibusdam, nesciunt eum, quam ab eveniet vero magnam exercitationem,
        dolore enim aliquid veniam consectetur animi voluptas quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Placeat cum voluptate nemo eos ad repudiandae. Autem, tempore neque labore nobis voluptatem odio,
        fugiat similique fugit rerum quod inventore, dicta expedita! "`
    },
    {
        nombre: "Testimonio 4",
        texto: `" Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Ducimus ut soluta accusantium voluptate quibusdam, nesciunt eum, quam ab eveniet vero magnam exercitationem,
        dolore enim aliquid veniam consectetur animi voluptas quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Placeat cum voluptate nemo eos ad repudiandae. Autem, tempore neque labore nobis voluptatem odio,
        fugiat similique fugit rerum quod inventore, dicta expedita! "`
    }
  ]

  return (
    <section id='quotes' className='w-full md:w-[80%] bg-white flex-center flex-col pb-10 rounded'>

       <div className='w-full flex-center'>
        <h2 className='text-[2rem] md:text-[2.3rem] text-[#9b6500] mb-[30px] mt-10'>Testimonios</h2>
      </div>

      <TestimoniosCarousel autoSlide={true}>
        {testimonios.map((e, i ) => <Testimonio key={i} nombre={e.nombre} texto={e.texto} />)}
      </TestimoniosCarousel>
      
    </section>
  )
}
