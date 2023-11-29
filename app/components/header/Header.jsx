import Link from 'next/link';
import Image from 'next/image';
import Nav from './nav/Nav';
import logo from './school-logo.png'

const Header = () => {
  return (
    <header className={`h-[70px] border-b-[4px] border-[#004999] md:h-[80px] 2xl:h-[110px] 2xl:text-[1.6rem] bg-[#001d3d] text-white flex justify-start relative w-full z-[1]`}>
      <Link className='h-full flex items-center ml-10' href='/'>
        <Image src={logo} alt='school logo' className='h-[75%] w-[110px] md:w-[130px] min-h-[2px]' />
      </Link>
      <Nav />
    </header>
  )
}

export default Header