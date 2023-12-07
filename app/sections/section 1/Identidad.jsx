import image from './assets/image3.svg';
import Image from 'next/image';
import { Culture } from './sections/culture/Culture';
import { History } from './sections/history/History';

const Identidad = () => {
  return (
    <div id='identity' className="h-auto w-full flex items-center justify-center">
      <div className='h-auto w-full md:w-[80%] text-[#001d3d] bg-white relative z-[1] px-7 p-6'>

        <div className="h-[80px] md:h-[180px] flex items-center justify-start w-full md:px-10">
          <h1 className="text-[2rem] md:text-[2.3rem] 2xl:text-[2.8rem]">Identidad escolar</h1>
        </div>

        <div className="h-auto flex items-center flex-col justify-center w-full mt-4 md:px-10">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Ducimus ut soluta accusantium voluptate quibusdam, nesciunt eum, quam ab eveniet vero magnam exercitationem,
            dolore enim aliquid veniam consectetur animi voluptas quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Placeat cum voluptate nemo eos ad repudiandae.
          </p>
        </div>


        <div className="h-auto flex items-center justify-evenly w-full flex-col md:flex-row">
          <div className="h-[220px] md:order-2 flex-col p-6 md:p-0 md:h-[240px] w-full md:w-[450px] bg-[#e6e6e6] text-white rounded my-10 flex items-center justify-center">
            <Image src={image} height={60} width={60} alt='identidad' />
          </div>

          <p className="md:w-[45%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Ducimus ut soluta accusantium voluptate quibusdam, nesciunt eum, quam ab eveniet vero magnam exercitationem,
            dolore enim voluptas quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Placeat cum voluptate nemo eos ad repudiandae. Autem, tempore neque labore nobis voluptatem odio,
            , Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Placeat cum voluptate nemo eos ad repudiandae.
          </p>
        </div>

        <Culture />
        <History />
      </div>
    </div>

  )
}

export default Identidad