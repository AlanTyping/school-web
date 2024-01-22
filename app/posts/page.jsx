import PostsApi from "./PostsApi";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function page() {
  return (
    <main>
      <PostsApi />
      <Footer />
    </main>
  )
}
