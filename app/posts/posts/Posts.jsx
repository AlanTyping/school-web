'use client'

import { useState } from 'react';
import { Post } from './post/Post';
import { Figtree } from 'next/font/google';

const figtreeBold = Figtree({ subsets: ['latin'], weight: "500" });
const figtree = Figtree({ subsets: ['latin'], weight: "300" });

export const Posts = ({ posts }) => {
  const postsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const displayedPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  console.log(Math.floor(posts.length / postsPerPage))


  return (
    <div className='bg-[var(--bg)] my-4 w-full flex justify-center items-center flex-col'>
      <div className="w-full py-5 flex-center text-white">
        <div className="mx-10">
          <button className='py-2 px-4 rounded bg-[#1a3275]' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
        </div>
        <div className="flex-center">
          <h2 className='text-[1.5rem]'>
            {currentPage} / { (Math.floor(posts.length / postsPerPage) + 1) }
          </h2>
        </div>
        <div className="mx-10">
          <button className='py-2 px-4 rounded bg-[#1a3275]' onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfFirstPost >= posts.length - postsPerPage}>Next</button>
        </div>
      </div>

      <div className="w-[90%] md:w-[50%] overflow-y-auto h-[700px] flex py-8 flex-col justify-start items-center overflow-x-scroll lg:overflow-x-hidden">
        {
          displayedPosts.map((post, i) => {
            const { fecha, titulo, descripcion, formattedImage, link } = post

            return (
              <Post
                key={i}
                i={i}
                fecha={fecha}
                titulo={titulo}
                descripcion={descripcion}
                link={link}
                imagen={formattedImage}
              />)
          })
        }
      </div>
    </div>
  )
}
