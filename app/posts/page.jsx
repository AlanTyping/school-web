import PostsApi from "./PostsApi";
import Header from "../components/header/Header";

export default function page() {
  return (
    <main className="">
      <Header />
      <PostsApi />
    </main>
  )
}
