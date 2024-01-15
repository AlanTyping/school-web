import React from 'react'
import { Post } from './post/Post';
import { api } from '@/app/api';


export const Posts = async () => {
  const posts = await api.posts();

  return (
    <div className="w-[50%] rounded my-20 flex flex-col items-center py-10 bg-[#001d3d] h-[800px] overflow-y-auto">
      {
        posts.map((post, i) => {
          const { fecha, titulo, subtitulo, descripcion, link, formattedImagen } = post
          return (
            <Post
              key={i}
              fecha={fecha}
              titulo={titulo}
              subtitulo={subtitulo}
              descripcion={descripcion}
              link={link}
              imagen={formattedImagen}
            />)
        })
      }
    </div>
  )
}
