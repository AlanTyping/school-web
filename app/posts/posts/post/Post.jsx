import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from './svg/school.svg';
import linkSvg from './svg/link.svg';
import { Poppins, Figtree } from 'next/font/google';
import BigImage from '@/app/components/bigImage/BigImage';

const figtree = Figtree({ subsets: ['latin'], weight: "300" });
const poppinsBold = Poppins({ subsets: ['latin'], weight: "400" });
const figtreeBold = Figtree({ subsets: ['latin'], weight: "500" });


export const Post = ({ fecha, titulo, descripcion, link, imagen, i }) => {
  const [bigImage, setBigImage] = useState(false);

  return (
    <div className={`cursor-auto mx-5 w-[80%] flex flex-col max-w-[400px] pb-4 pt-6 min-w-[325px] items-center text-white bg-[#1a3275] my-5 rounded`}>
      {
        <div className="w-[90%] flex items-center flex-row">
          
          <div className="w-[70%] flex items-center flex-row">
            <div className="bg-[var(--bg)] h-[45px] w-[45px] rounded-[25px] flex-center">
              <Image height={25} width={25} className="rounded" alt="" src={logo} />
            </div>
            <div className={`ml-[10px] text-[1.15rem] ${poppinsBold.className}`}>
              <h1>Colegio Trinity</h1>
            </div>
          </div>

          <div className="w-[30%] flex-center">
            <div className="bg-[#021321] flex-center flex-row rounded py-1 pr-2 pl-1 relative">
              <div className="flex-center w-[20px]">
                <div className="h-[10px] rounded-[50%] w-[10px] border-orange-500 border-[2px]" />
              </div>
              <div className="relative flex-center">
                <span className={`text-[0.75rem] ${figtreeBold.className}`}>proyecto</span>
              </div>
            </div>
          </div>
        </div>
      }

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


