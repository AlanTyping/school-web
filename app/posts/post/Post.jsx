import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import linkSvg from './svg/link.svg';
import BigImage from '../components/bigImage/BigImage';
import PostHeader from '../components/post-header/PostHeader';
import { figtreeBold, figtree } from '../../fonts/fonts';

export const Post = ({ fecha, titulo, descripcion, link, imagen, categoria, i }) => {
  const [bigImage, setBigImage] = useState(false);
  
    return (
    <div className={`cursor-auto mx-5 w-[80%] flex flex-col max-w-[400px] pb-4 pt-6 min-w-[325px] items-center text-white bg-[#1a3275] my-5 rounded`}>
      <PostHeader categoria={categoria} />
     
      <div className="w-[80%] flex flex-col flex-center">
        <div className="flex flex-col-reverse flex-center w-full">
          {imagen && <div className="relative h-[160px] sm:h-[180px] w-full mt-3">
            <Image onClick={() => setBigImage(true)} className={`cursor-pointer rounded`} style={{ objectFit: "contain" }} quality={65} fill={true} sizes='30vw' alt="" src={imagen} />
          </div>}

          <BigImage img={imagen} bigImage={bigImage} setBigImage={setBigImage} />

          {titulo && <div className={`text-[1.5rem] text-[#eee] mt-4 flex w-full ${figtreeBold.className}`}>
            <h1>{titulo}</h1>
          </div>}
        </div>

        {descripcion && <div className={`max-h-[300px] overflow-y-auto text-[#ddd] flex w-full mt-3 mb-2 justify-center text-[1rem] ${figtree.className}`}>
          <p>{descripcion}</p>
        </div>}

        {link.length > 5 &&
          <div className={`text-[0.85rem] mt-5 w-[97%] flex justify-start`}>
            <Link className='flex bg-[var(--bg)] rounded mb-2 p-1 pr-4 flex-row items-center' href={link} target="blank">
              <Image src={linkSvg} alt='' height={30} width={30} className='mr-[4px]' />
              {link}
            </Link>
          </div>}

        {fecha && <div className="justify-end mt-2 flex text-[#ccc] text-[1rem] w-[97%]">
          <p className={`${figtree.className}`}>{fecha}</p>
        </div>}
      </div>
    </div>
  )
}


