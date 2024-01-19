'use client'

import { useState } from 'react';
import { Post } from './post/Post';
import { api } from '@/app/api';
import { Figtree } from 'next/font/google';

const figtreeBold = Figtree({ subsets: ['latin'], weight: "600" });
const figtree = Figtree({ subsets: ['latin'], weight: "300" });

export const Posts = ({ posts }) => {
  const [postPreview, setPostPreview] = useState(false);

  return (
    <div className='bg-[var(--bg)] relative mb-10 w-full flex justify-center items-center flex-col'>
      {/* <div className="z-[1] h-[40%] flex-center bg-gradient-to-r from-transparent to-opacity-50 backdrop-filter backdrop-blur-sm absolute bottom-0 inset-x-0">
        <div className="text-white flex-center bg-[#001d3d] px-5 py-2 rounded">
          <h3 className='text-[1.5rem]'>
            Abrir posts
          </h3>
        </div>
      </div> */}

      <div className="w-full bg-white flex flex-row">
        <div className="w-[50%] flex justu-start">
          <div className="ml-5 py-2 rounded-t-lg px-6 bg-[var(--bg)] flex-center">
            <h2 className={`${figtree.className} text-[1.5rem] text-white`}>Últimos posts</h2>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center">
        </div>
      </div>

      <div className="w-full h-[400px] rounded flex py-5 flex-row items-start overflow-hidden">
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
