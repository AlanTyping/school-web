import React from 'react';
import { TestimoniosCarousel } from './carousel/TestimoniosCarousel';
import { Testimonio } from './testimonio/Testimonio';

export const Testimonios = () => {
  const testimonios = [
    {
        nombre: "Testimoino 1",
        texto: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Ducimus ut soluta accusantium voluptate quibusdam, nesciunt eum, quam ab eveniet vero magnam exercitationem,
        dolore enim aliquid veniam consectetur animi voluptas quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Placeat cum voluptate nemo eos ad repudiandae. Autem, tempore neque labore nobis voluptatem odio,
        fugiat similique fugit rerum quod inventore, dicta expedita!`
    },
    {
        nombre: "Testimoino 2",
        texto: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Ducimus ut soluta accusantium voluptate quibusdam, nesciunt eum, quam ab eveniet vero magnam exercitationem,
        dolore enim aliquid veniam consectetur animi voluptas quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Placeat cum voluptate nemo eos ad repudiandae. Autem, tempore neque labore nobis voluptatem odio,
        fugiat similique fugit rerum quod inventore, dicta expedita!`
    },
    {
        nombre: "Testimoino 3",
        texto: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Ducimus ut soluta accusantium voluptate quibusdam, nesciunt eum, quam ab eveniet vero magnam exercitationem,
        dolore enim aliquid veniam consectetur animi voluptas quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Placeat cum voluptate nemo eos ad repudiandae. Autem, tempore neque labore nobis voluptatem odio,
        fugiat similique fugit rerum quod inventore, dicta expedita!`
    },
    {
        nombre: "Testimoino 4",
        texto: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Ducimus ut soluta accusantium voluptate quibusdam, nesciunt eum, quam ab eveniet vero magnam exercitationem,
        dolore enim aliquid veniam consectetur animi voluptas quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Placeat cum voluptate nemo eos ad repudiandae. Autem, tempore neque labore nobis voluptatem odio,
        fugiat similique fugit rerum quod inventore, dicta expedita!`
    }
  ]

  return (
    <section className='w-full flex-center flex-col my-4'>
      <TestimoniosCarousel autoSlide={true}>
        {testimonios.map((e, i ) => <Testimonio key={i} nombre={e.nombre} texto={e.texto} />)}
      </TestimoniosCarousel>
    </section>
  )
}
