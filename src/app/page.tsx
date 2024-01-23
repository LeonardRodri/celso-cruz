import { SectionHome } from "../components/SectionHome";
import { Header } from "../components/Header";
import { SectionArticle } from "@/components/SectionArticle";

export default function Home() {
  return (
    <div className="flex justify-center scroll-smooth">
      <div className="container">
        <Header />
        <SectionHome />
        <SectionArticle />
      </div>
    </div>
  );
}
