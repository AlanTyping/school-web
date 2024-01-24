import PostsApi from "./PostsApi";
import PagesHeader from "../components/pages-header/PagesHeader";
import Footer from "../components/footer/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: "400" });

export default function page() {

  return (
    <main className={`flex relative flex-col items-center justify-between w-full ${poppins.className}`}>
      <PagesHeader />
      <PostsApi />
      <Footer />
    </main>
  )
}
