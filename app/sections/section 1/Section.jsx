import { GuideNav } from "@/app/components/guide-nav/GuideNav"

const SectionOne = () => {
  return (
    <div id='section-one' className='h-[720px] w-full bg-[#fff] text-white relative mt-4 z-[1]'>
      <div className='md:hidden h-[200px] w-full flex flex-col absolute top-0 items-center '>
        <GuideNav />
      </div>
    </div>
  )
}

export default SectionOne