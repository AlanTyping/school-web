import PostsApi from "./PostsApi";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function page() {
  return (
    <main className="flex flex-col items-center justify-between w-full">
      <PostsApi />
      <Footer />
    </main>
  )
}
