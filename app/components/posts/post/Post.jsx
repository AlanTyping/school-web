import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from './svg/school.svg'
import linkSvg from './svg/link.svg'
import { Roboto } from 'next/font/google'

const montserrat = Roboto({ subsets: ['latin'], weight: "300" });

export const Post = ({ fecha, titulo, subtitulo, descripcion, link, imagen }) => {
  return (
    <div className="w-[90%] flex flex-col p-6 pb-4 pt-8 items-center text-white bg-[#1a3275] my-5 rounded sm:max-w-[500px]">

      <div className="w-[95%] flex items-center flex-row mb-5">
        <div className="bg-[#001d3d] h-[50px] w-[50px] rounded-[25px] flex-center">
          <Image height={30} width={30} className="rounded" alt="" src={logo} />
        </div>
        <div className="ml-[10px] text-[1.2rem]">
          <h1>Colegio Trinity</h1>
        </div>
      </div>


      <div className="w-[90%]">
        {imagen && <div className="relative mb-6 h-[160px] w-full">
          <Image style={{ objectFit: "contain" }} fill={true} className="rounded" alt="" src={imagen} />
        </div>}

        {titulo && <div className={`my-1 text-[1.7rem] `}><h1>{titulo}</h1></div>}

        {subtitulo && <div className={`mb-5 text-[1.32rem] text-[#ccc] `}><h1>{subtitulo}</h1></div>}

        {descripcion && <div className={`my-5 text-[#ccc] ${montserrat.className}`}><p>{descripcion}</p></div>}

        {link && <div className={`text-[0.9rem]`}><Link className='flex bg-[#001d3d] rounded p-2 flex-row items-center' href={link} target="blank"><Image src={linkSvg} alt='' height={30} width={30} />{link}</Link></div>}

        {fecha && <div className="mb-2 mt-6 justify-end flex text-[#ccc] text-[1rem]">
          <p className='border-b-[2px] border-b-[#ffa500]'>{fecha}</p>
          </div>}
      </div>

    </div>
  )
}


