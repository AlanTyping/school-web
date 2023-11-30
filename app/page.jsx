import SectionsNav from "./components/sections-nav/SectionsNav";
import Section from "./sections/section 1/Section";
import SectionTwo from "./sections/section 2/SectionTwo";
import SectionThree from "./sections/section 3/SectionThree";
import SectionFour from "./sections/section 4/SectionFour";
import Footer from "./components/footer/Footer";
import DynamicHeader from "./components/dynamic-header/DynamicHeader";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-full">
      <DynamicHeader />
      <Header />
      <SectionsNav /> 
      
      <Section />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </main>
  )
}
