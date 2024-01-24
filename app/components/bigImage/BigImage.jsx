import Image from "next/image"

export default function BigImage({ img, bigImage, setBigImage }) {
  if (bigImage) {
    return (
      <div className="absolute flex-start z-[2] inset-0 bg-[rgba(0,0,0,0.7)]" >
        <div className="flex-center w-full h-[100vh]">
          <div className="h-[60%] w-full relative flex-center">
            <button className='absolute top-0 right-10 z-10' onClick={() => setBigImage(false)}>Cerrar</button>
            <Image className={`cursor-pointer rounded`} style={{ objectFit: "contain" }} quality={100} fill={true} sizes='30vw' alt="" src={img} />
          </div>
        </div>
      </div >
    )
  }
}
