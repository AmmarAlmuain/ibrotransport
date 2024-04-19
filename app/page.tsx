import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Nav from "@/components/Nav";
import { Reach } from "@/components/Reach";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="flex flex-col">
        <Main />
        <Services />
        <About />
        <Work />
        <Features />
        <Reach />
      </div>
      <Footer />
    </>
  );
}
