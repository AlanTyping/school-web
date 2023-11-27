import Section from "./sections/section 1/Section"
import SectionTwo from "./sections/section 2/SectionTwo"
import SectionThree from "./sections/section 3/SectionThree"
import Footer from "./components/footer/Footer"
import HeaderChange from "./components/header-change/HeaderChange"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <HeaderChange />
      <Section />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </main>
  )
}
