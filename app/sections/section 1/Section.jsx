import image from './assets/image3.svg';
import Image from 'next/image';

const SectionOne = () => {
  return (
    <div className="h-auto w-full flex items-center justify-center">
      <div id='section-one' className='h-auto w-full md:w-[80%] text-[#001d3d] relative z-[1] px-10 md:px-6 p-6'>

        <div className="h-[80px] md:h-[140px] flex items-end justify-center w-full">
          <h1 className="text-[2rem] md:text-[2.3rem]">Identidad escolar</h1>
        </div>

        <div className="h-auto flex items-center flex-col justify-center w-full mt-10 px-10">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Ducimus ut soluta accusantium voluptate quibusdam, nesciunt eum, quam ab eveniet vero magnam exercitationem,
            dolore enim aliquid veniam consectetur animi voluptas quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Placeat cum voluptate nemo eos ad repudiandae.
          </p>
        </div>


        <div className="h-auto flex items-center justify-evenly w-full flex-col md:flex-row">
          <div className="h-[220px] md:order-2 flex-col p-6 md:p-0 md:h-[240px] w-full md:w-[450px] bg-[#b3b3b3] text-white rounded my-10 flex items-center justify-center">
            <Image src={image} height={60} width={60} alt />
          </div>

          <p className="md:w-[45%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Ducimus ut soluta accusantium voluptate quibusdam, nesciunt eum, quam ab eveniet vero magnam exercitationem,
            dolore enim voluptas quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Placeat cum voluptate nemo eos ad repudiandae. Autem, tempore neque labore nobis voluptatem odio,
            , Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Placeat cum voluptate nemo eos ad repudiandae.
          </p>
        </div>

        <div className='w-full flex-center'><h2>cultura</h2></div>

        <div className="h-auto flex items-center justify-center w-full flex-col md:flex-row">
          <div className="h-[180px] flex-col p-6 md:h-[230px] w-[380px] bg-[#3d0000] text-white rounded my-10 flex items-center justify-center">
            <h2 className="text-[1.5rem] my-[5px]">testimonio</h2>
            <p className="my-[8px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, veritatis eum excepturi quia quod laborum veniam sed ullam delectus similique voluptates</p>
          </div>

          <p className="md:w-[50%] md:p-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Ducimus ut soluta accusantium voluptate quibusdam, nesciunt eum, quam ab eveniet vero magnam exercitationem,
            dolore enim aliquid veniam consectetur animi voluptas quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Placeat cum voluptate nemo eos ad repudiandae. Autem, tempore neque labore nobis voluptatem odio,
            fugiat similique fugit rerum quod inventore, dicta expedita!
          </p>
        </div>

        <div className="h-auto flex items-center justify-center w-full flex-col md:flex-row">
          <p className="md:w-[50%] md:p-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Ducimus ut soluta accusantium voluptate quibusdam, nesciunt eum, quam ab eveniet vero magnam exercitationem,
            dolore enim aliquid veniam consectetur animi voluptas quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Placeat cum voluptate nemo eos ad repudiandae. Autem, tempore neque labore nobis voluptatem odio,
            fugiat similique fugit rerum quod inventore, dicta expedita!
          </p>

          <div className="h-[180px] flex-col p-6 md:h-[230px] w-[380px] bg-[#3d0000] text-white rounded my-10 flex items-center justify-center">
            <h2 className="text-[1.5rem] my-[5px]">testimonio</h2>
            <p className="my-[8px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, veritatis eum excepturi quia quod laborum veniam sed ullam delectus similique voluptates.</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SectionOne