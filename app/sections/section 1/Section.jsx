import { GuideNav } from "@/app/components/guide-nav/GuideNav"

const SectionOne = () => {
  return (
    <div id='section-one' className='h-auto w-full lg:w-[80%] text-[#001d3d] relative z-[1] px-10 lg:px-6 p-6'>
      <div className="h-[80px] lg:h-[140px] flex items-end justify-center w-full">
        <h1 className="text-[2.3rem]">Identidad escolar</h1>
      </div>

      <div className="h-auto flex items-center justify-center w-full mt-10">
        <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Ducimus ut soluta accusantium voluptate quibusdam, nesciunt eum, quam ab eveniet vero magnam exercitationem,
          dolore enim aliquid veniam consectetur animi voluptas quaerat!
        </p>
      </div>

      <div className="h-auto flex items-center justify-start w-full flex-col lg:flex-row">
        <div className="h-[180px] flex-col p-6 lg:h-[230px] w-[380px] bg-[#3d0000] text-white rounded my-10 flex items-center justify-center">
          <h2 className="text-[1.5rem] my-[5px]">testimonio</h2>
          <p className="my-[8px]">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, veritatis eum excepturi quia quod laborum veniam sed ullam delectus similique voluptates"</p>
        </div>

        <p className="lg:w-[55%] lg:p-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Ducimus ut soluta accusantium voluptate quibusdam, nesciunt eum, quam ab eveniet vero magnam exercitationem,
          dolore enim aliquid veniam consectetur animi voluptas quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Placeat cum voluptate nemo eos ad repudiandae. Autem, tempore neque labore nobis voluptatem odio,
           fugiat similique fugit rerum quod inventore, dicta expedita!
        </p>
      </div>

      <div className="h-auto flex items-center justify-start w-full flex-col lg:flex-row">
        <p className="lg:w-[55%] lg:p-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Ducimus ut soluta accusantium voluptate quibusdam, nesciunt eum, quam ab eveniet vero magnam exercitationem,
          dolore enim aliquid veniam consectetur animi voluptas quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Placeat cum voluptate nemo eos ad repudiandae. Autem, tempore neque labore nobis voluptatem odio,
           fugiat similique fugit rerum quod inventore, dicta expedita!
        </p>

        <div className="h-[180px] flex-col p-6 lg:h-[230px] w-[380px] bg-[#3d0000] text-white rounded my-10 flex items-center justify-center">
          <h2 className="text-[1.5rem] my-[5px]">testimonio</h2>
          <p className="my-[8px]">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, veritatis eum excepturi quia quod laborum veniam sed ullam delectus similique voluptates"</p>
        </div>
      </div>
    </div>
  )
}

export default SectionOne