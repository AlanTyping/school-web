import Link from "next/link";
import Li from "./li/Li";
import payment from './svg/payment.svg';
import info from './svg/info.svg';
import student from './svg/student.svg';

const li = [
    {
      name: 'info',
      hash: '#section-one',
      img: payment
    },
    {
      name: 'inscripción',
      hash: '/inscripción',
      img: info
    },
    {
      name: 'pagos',
      hash: '/pagos',
      img: student
    }
  ]

export const GuideNav = () => {
  return (
    <nav className='absolute bottom-[10vh]'>
        <ul className="flex flex-row justify-evenly items-center">
            { li.map((e, i) => <Li key={i} name={e.name} hash={e.hash} img={e.img} />) }
        </ul>
    </nav>
  )
}
