import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from './svg/school.svg'

export const Post = ({ fecha, titulo, subtitulo, descripcion, link, imagen }) => {
  return (
    <div className="flex flex-col p-6 py-8 items-center text-white bg-blue-900 my-5 rounded w-[90%]">

      <div className="w-full flex items-center flex-row mb-5">
        <div className="bg-[#001d3d] h-[50px] w-[50px] rounded-[25px] flex-center">
          <Image height={30} width={30} className="rounded" alt="" src={logo} />
        </div>
        <div className="ml-[10px] text-[1.2rem]">
          <h1>Colegio Trinity</h1>
        </div>
      </div>




      <div className="w-[90%]">
        {imagen && <div className="relative mb-6 h-[250px] w-full"><Image objectFit="contain" fill={true} className="rounded" alt="" src={imagen} /></div>}

        {titulo && <div className="my-1 text-[1.6rem]"><h1>{titulo}</h1></div>}

        {subtitulo && <div className="mb-5 text-[1.25rem] text-[#ccc]"><h1>{subtitulo}</h1></div>}

        {descripcion && <div className="my-5 text-[#ccc]"><p>{descripcion}</p></div>}

        {link !== '\r' && <div className=""><Link href={link} target="blank">{link}</Link></div>}

        {fecha && <div className="my-3 text-end text-[#ccc] text-[1.2rem]"><p>{fecha}</p></div>}
      </div>

    </div>
  )
}


