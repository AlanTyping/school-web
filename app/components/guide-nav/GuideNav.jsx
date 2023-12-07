import Li from "./li/Li";
import info from './svg/info.svg';
import student from './svg/student.svg';
import contacto from './svg/contacto.svg';

const li = [
  {
    name: 'info',
    hash: '#info',
    img: info
  },
  {
    name: 'unirse',
    hash: '/inscripcion',
    img: student
  },
  {
    name: 'contacto',
    hash: '#contacto',
    img: contacto
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
