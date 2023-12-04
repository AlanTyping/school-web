import Link from "next/link";
import Li from "./li/Li";
import payment from './svg/payment.svg';
import info from './svg/info.svg';
import student from './svg/student.svg';

const li = [
  {
    name: 'unirse',
    hash: '/inscripcion',
    img: student
  },
  {
    name: 'info',
    hash: '#section-one',
    img: info
  },
  {
    name: 'pagos',
    hash: '/pagos',
    img: payment
  }
]

export const GuideNav = () => {
  return (
    <nav>
      <ul className="flex flex-row justify-evenly items-center">
        {li.map((e, i) => <Li key={i} name={e.name} hash={e.hash} img={e.img} index={i} />)}
      </ul>
    </nav>
  )
}
