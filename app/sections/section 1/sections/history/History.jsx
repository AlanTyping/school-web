import Image from "next/image"
import image from './assets/image2.svg'

export const History = () => {
  return (
    <>
      <div id="history" className='w-full flex-center'>
        <h2 className='text-[2rem] md:text-[2.3rem] 2xl:text-[2.8rem] text-[#9b6500] mt-10 sm:mt-20'>Historia</h2>
      </div>

      <div className="h-auto flex items-center justify-evenly w-full flex-col md:flex-row">

        <div className="h-[180px] flex-col w-[90vw] p-6 md:h-[230px] md:w-[380px] 2xl:h-[260px] 2xl:w-[420px] bg-[#c78408] text-white rounded my-10 2xl:my-20 flex items-center justify-center">
          <Image src={image} height={60} width={60} alt="" />
        </div>

        <p className="md:w-[50%] 2xl:w-[55%] md:p-6 2xl:p-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Ducimus ut soluta accusantium voluptate quibusdam, nesciunt eum, quam ab eveniet vero magnam exercitationem,
          dolore enim aliquid veniam consectetur animi voluptas quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Placeat cum voluptate nemo eos ad repudiandae. Autem, tempore neque labore nobis voluptatem odio,
          fugiat similique fugit rerum quod inventore, dicta expedita!
        </p>
      </div>

      <div className="h-auto flex items-center justify-evenly w-full flex-col md:flex-row">
        <div className="h-[180px] md:order-last flex-col p-6 w-[90vw] md:h-[230px] md:w-[380px] 2xl:h-[260px] 2xl:w-[420px] bg-[#006de2] text-white rounded my-10 flex items-center justify-center">
          <Image src={image} height={60} width={60} alt="" />
        </div>

        <p className="md:w-[50%] 2xl:w-[55%] md:p-6 2xl:p-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Ducimus ut soluta accusantium voluptate quibusdam, nesciunt eum, quam ab eveniet vero magnam exercitationem,
          dolore enim aliquid veniam consectetur animi voluptas quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Placeat cum voluptate nemo eos ad repudiandae. Autem, tempore neque labore nobis voluptatem odio,
          fugiat similique fugit rerum quod inventore, dicta expedita!
        </p>
      </div>
    </>
  )
}
