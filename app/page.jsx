'use client'

import SectionsNav from "./components/sections-nav/SectionsNav";
import Presentation from "./sections/home/Presentation";
import { Guide } from "./components/guide-section/Guide";
import Section from "./sections/section 1/Section";
import SectionTwo from "./sections/section 2/SectionTwo";
import SectionThree from "./sections/section 3/SectionThree";
import SectionFour from "./sections/section 4/SectionFour";
import Footer from "./components/footer/Footer";
import DynamicHeader from "./components/dynamic-header/DynamicHeader";
import Header from "./components/header/Header";
import { scrollStorage } from "@/zustand/scrollStorage";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: "400" });

export default function Home() {
  const { scroll, changeScroll } = scrollStorage();

  return (
    <main className={`flex flex-col items-center justify-between w-full ${poppins.className}`}>
      <DynamicHeader />
      <Header />
      { scroll > 600 &&  <SectionsNav />}
      
      <Presentation />
      <Guide />
      <Section />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </main>
  )
}
