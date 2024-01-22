'use client'

import { useState } from 'react';
import { Post } from './post/Post';
import { Figtree } from 'next/font/google';
import Link from 'next/link';

const figtreeBold = Figtree({ subsets: ['latin'], weight: "500" });
const figtree = Figtree({ subsets: ['latin'], weight: "300" });

export default function PostsDisplay ({ posts }) {
  const [postPreview, setPostPreview] = useState(false);

  return (
    <div className='bg-[var(--bg)] mb-10 w-full flex justify-center items-center flex-col'>
      {/* <div className="z-[1] h-[40%] flex-center bg-gradient-to-r from-transparent to-opacity-50 backdrop-filter backdrop-blur-sm absolute bottom-0 inset-x-0">
        <div className="text-white flex-center bg-[#001d3d] px-5 py-2 rounded">
          <h3 className='text-[1.5rem]'>
            Abrir posts
          </h3>
        </div>
      </div> */}

      <div className="sm:w-[95%] flex-row pt-6 flex justify-start relative">
        <div className="w-full md:w-[50%] flex">
          <div className="md-6 md:ml-8 pt-3 pb-2 rounded-t-lg px-6 flex-center">
            <h2 className={`${figtreeBold.className} text-[1.33rem] md:text-[2rem] text-white`}>Últimos posts</h2>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex justify-end items-center">
          <div className="pt-2 pb-1 rounded bg-white px-4 md:px-6 flex justify-center mr-6 md:mr-56">
            <Link href={'/posts'} className={`${figtreeBold.className} text-[1.2rem] text-[var(--bg)]`}>Ver más</Link>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[90%] posts-container h-[350px] rounded flex py-5 flex-row sm:justify-center items-start overflow-x-scroll overflow-y-hidden lg:overflow-x-hidden">
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
