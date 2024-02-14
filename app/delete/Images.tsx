'use client'

import { FC } from 'react';
import './index.css'
import Image from "next/image";

interface ImagesProps {
  data: {
    src: string;
    title: string;
    description: string;
  }[];
  onClick: (index: number) => void;
}

const Images: FC<ImagesProps> = (props) => {
  const { data, onClick } = props;

  const handleClickImage = (index: number) => {
    onClick(index);
  };

  return (
    <div className='images-container w-[95%] md:max-w-[1200px]'>
      {data.map((slide, index) => (
        <div
          onClick={() => handleClickImage(index)}
          key={index}
          className='image'
        >
          <Image width={390} height={320} quality={60} sizes='(min-width: 768px) 30vw' src={slide.src} alt={slide.description} />
        </div>
      ))}
    </div>
  );
};

export default Images;


// import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";
// import RightNav from './RightNav';
// import LeftNav from './LeftNav';


// export default function Delete() {

  

//   return (
//     <div className="flex-center w h">
//       <div className="md:w-[60vw] w-[100vw] flex-center">
//         <ImageGallery 
        
//         renderLeftNav={(onClick, disabled) => (
//           <LeftNav onClick={onClick} disabled={disabled} />
//         )}

//         renderRightNav={(onClick, disabled) => (
//           <RightNav onClick={onClick} disabled={disabled} />
//         )}
        
//         items={images} />
//       </div>
//     </div>
//   )
// }