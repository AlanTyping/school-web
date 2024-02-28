import SectionsNav from "./components/sections-nav/SectionsNav";
import Presentation from "./sections/home/Presentation";
import { Course } from "./sections/course/Course";
import Identidad from "./sections/section 1/Identidad";
import { Testimonios } from "./sections/testimonios/Testimonios";
import { Contacto } from "./components/contact/Contacto";
import Footer from "./components/footer/Footer";
import DynamicHeader from "./components/dynamic-header/DynamicHeader";
import Header from "./components/header/Header";
import { Poppins } from "next/font/google";
import PostsApi from "./components/posts-display/PostsApi";
import CalendarApi from "./calendar/CalendarApi";

//código random para los materiales

// const materiales = [
//   {
//     primero: 'valor1', segundo: 'valor2', tercero: 'valor3', cuarto: 'valor4', quinto: 'valor5', sexto: 'valor6'
//   },
//   {
//     primero: 'valor7', segundo: 'valor8', tercero: 'valor9', cuarto: 'valor10', quinto: 'valor11', sexto: 'valor12'
//   },
//   // más objetos aquí...
// ];

// const cursos = ['primero', 'segundo', 'tercero', 'cuarto', 'quinto', 'sexto'];

// const materialesPorCurso = {};

// cursos.forEach(curso => {
//   materialesPorCurso[curso] = materiales.map(material => material[curso]);
// });

// console.log(materialesPorCurso);

// La salida sería un objeto donde cada clave representa un curso y los valores son arrays que contienen los valores correspondientes de cada propiedad para ese curso. Aquí está cómo se vería:

// javascript

// {
//   primero: ['valor1', 'valor7'],
//   segundo: ['valor2', 'valor8'],
//   tercero: ['valor3', 'valor9'],
//   cuarto: ['valor4', 'valor10'],
//   quinto: ['valor5', 'valor11'],
//   sexto: ['valor6', 'valor12']
// }

const poppins = Poppins({ subsets: ['latin'], weight: "400" });

export default function Home() {

  return (
    <main className={`flex flex-col items-center justify-between w-full ${poppins.className}`}>
      <DynamicHeader />
      <Header />
      <SectionsNav />
      <Presentation />
      {/* <PostsApi /> */}
      <Course />
      <Identidad />
      {/* <SectionTwo />
      <SectionThree />
      <SectionFour /> */}
      <Testimonios />
      {/* <CalendarApi /> */}
      <Contacto />
      <Footer />
    </main>
  )
}
