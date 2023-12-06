import Link from 'next/link';
import Image from 'next/image';
import Nav from './nav/Nav';
import logo from './student.svg';
import logoWhite from './student-white.svg';

const Header = () => {
  return (
    <header className={`h-[110px] border-b-[8px] border-[#004999] bg-[#001d3d] md:bg-[#e4e4e4] md:border-none md:h-[85px] md:border-b-[4px] 2xl:h-[110px] 2xl:text-[1.6rem] md:absolute md:top-0 text-white flex justify-start relative w-full z-[1]`}>
      <Link className='h-full flex flex-col items-center relative ml-10 md:ml-[6vw]' href='/'>
        <div className='h-full w-full flex relative items-end justify-start mb-[-10px]'>
          <Image src={logo} alt='school logo' className='hidden md:flex h-[30px] w-[30px] mb-[-3px]' />
          <Image src={logoWhite} alt='school logo' className='md:hidden h-[30px] w-[30px] mb-[-3px]' />
        </div>
        <div className='h-full w-full flex items-center justify-center text-white md:text-[#001d3d] text-[1.2rem]'>
          <h2>Tu logo escolar</h2>
        </div>
      </Link>


    </header>
  )
}

export default Header