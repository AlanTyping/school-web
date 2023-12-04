import { GuideNav } from "@/app/components/guide-nav/GuideNav"

const SectionOne = () => {
  return (
    <div id='section-one' className='h-[720px] w-full text-[#001d3d] relative z-[1] p-6'>
      <div className="h-[200px] flex items-end justify-center w-full">
        <h1 className="text-[2.3rem]">Identidad escolar</h1>
      </div>

      <div className="h-[200px] flex items-center justify-start">
        <p className="md:w-[50%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Ducimus ut soluta accusantium voluptate quibusdam, nesciunt eum, quam ab eveniet vero magnam exercitationem,
          dolore enim aliquid veniam consectetur animi voluptas quaerat!
        </p>
      </div>

    </div>
  )
}

export default SectionOne