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

const poppins = Poppins({ subsets: ['latin'], weight: "400" });

export default function Home() {

  return (
    <main className={`flex flex-col items-center justify-between w-full ${poppins.className}`}>
      <DynamicHeader />
      <Header />
      <SectionsNav />
      <Presentation />
      <Course />
      <Identidad />
      {/* <SectionTwo />
      <SectionThree />
      <SectionFour /> */}
      <Testimonios />
      <Contacto />
      <Footer />
    </main>
  )
}
