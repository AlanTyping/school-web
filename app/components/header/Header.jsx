import Link from 'next/link';
import Image from 'next/image';
import Nav from './nav/Nav';
import logo from './school-logo.png'

const Header = () => {
  return (
    <header className={`h-[100px] border-b-[4px] border-[#004999] bg-[#001d3d] md:h-[85px] 2xl:h-[110px] 2xl:text-[1.6rem] md:absolute md:top-0 text-white flex justify-start relative w-full z-[1]`}>
      <Link className='h-full flex items-center ml-10 md:ml-[6vw]' href='/'>
        <Image src={logo} alt='school logo' className='h-[65%] w-[140px] md:w-[140px] min-h-[2px]' />
      </Link>

    
    </header>
  )
}

export default Header