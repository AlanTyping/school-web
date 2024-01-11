import React from 'react'
import { Post } from './post/Post';
import { api } from '@/app/api';


export const Posts = async () => {
  const posts = await api.posts();

  console.log(posts)

  return (
    <div className="w-full rounded my-20 flex flex-col items-center py-10 bg-[#00244d] h-[800px] overflow-y-auto">
      {
        posts.map((post, i) => {
          const { fecha, titulo, subtitulo, descripcion, link, imagen } = post
          return (
            <Post
              key={i}
              fecha={fecha}
              titulo={titulo}
              subtitulo={subtitulo}
              descripcion={descripcion}
              link={link}
              imagen={imagen}
            />)
        })
      }
    </div>
  )
}
