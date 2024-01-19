'use client'

import { useState } from 'react';
import { Post } from './post/Post';
import { api } from '@/app/api';
import { Figtree } from 'next/font/google';

const figtreeBold = Figtree({ subsets: ['latin'], weight: "600" });

export const Posts = ({ posts }) => {
  const [postPreview, setPostPreview] = useState(false);

  return (
    <div className='relative mb-10 w-full flex justify-center items-center flex-col'>
      {/* <div className="z-[1] h-[40%] flex-center bg-gradient-to-r from-transparent to-opacity-50 backdrop-filter backdrop-blur-sm absolute bottom-0 inset-x-0">
        <div className="text-white flex-center bg-[#001d3d] px-5 py-2 rounded">
          <h3 className='text-[1.5rem]'>
            Abrir posts
          </h3>
        </div>
      </div> */}

      <div className="w-full h-[50px] bg-white flex flex-row">
        <div className="w-[50%] flex justify-end items-center">
          <h2 className={`${figtreeBold.className} text-[1.5rem] text-[#001d3d] w-[93%]`}>Últimos posts</h2>
        </div>
        <div className="w-[50%] flex justify-center items-center">
        </div>
      </div>

      <div className="w-full justify-evenly rounded flex py-5 flex-row items-center overflow-x-scroll">
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
