import Image from "next/image";
import close from './assets/close.svg';

export default function BigImage({ img, bigImage, setBigImage }) {
  if (bigImage) {
    return (
      <div className="fixed flex-start w h z-[2] inset-0 bg-[rgba(0,0,0,0.7)]" >
        <div className="flex-center w-full h-[100vh]">
          <div className="h-[55%] w-full relative flex-center">
            <button className='absolute top-[-10%] md:top-[-25%] right-10 z-10 md:right-52 p-4 2xl:p-6 rounded-[50%] bg-[rgba(26,50,117,0.75)]' onClick={() => setBigImage(false)}>
              <Image className="h-[30px] w-[30px] 2xl:h-[40px] 2xl:w-[40px]" src={close} alt="close" />
            </button>
            <Image className={`rounded`} style={{ objectFit: "contain" }} quality={100} fill={true} sizes='30vw' alt="" src={img} />
          </div>
        </div>
      </div >
    )
  }
}
