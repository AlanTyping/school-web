import SectionsNav from "./components/sections-nav/SectionsNav"
import Section from "./sections/section 1/Section"
import SectionTwo from "./sections/section 2/SectionTwo"
import SectionThree from "./sections/section 3/SectionThree"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Header />
      <SectionsNav /> 
      <Section />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </main>
  )
}
