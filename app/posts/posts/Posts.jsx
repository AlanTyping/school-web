'use client'

import { useState } from 'react';
import { Post } from './post/Post';
import { Figtree } from 'next/font/google';

const figtreeBold = Figtree({ subsets: ['latin'], weight: "500" });
const figtree = Figtree({ subsets: ['latin'], weight: "300" });

export const Posts = ({ posts }) => {
  const [postPreview, setPostPreview] = useState(false);

  return (
    <div className='bg-[var(--bg)] mb-10 w-full flex justify-center items-center flex-col'>
      <div className="w-full md:w-[70%] h-auto flex py-14 flex-col sm:justify-center items-center overflow-x-scroll overflow-y-hidden lg:overflow-x-hidden">
        {
          posts.map((post, i) => {
            const { fecha, titulo, descripcion, link, formattedImagen } = post

            return (
              <Post
                key={i}
                i={i}
                fecha={fecha}
                titulo={titulo}
                descripcion={descripcion}
                link={link}
                imagen={formattedImagen}
              />)
          })
        }
      </div>
    </div>
  )
}
