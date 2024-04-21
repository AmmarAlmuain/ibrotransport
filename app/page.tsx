import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Nav from "@/components/Nav";
import Plans from "@/components/Plans";
import { Reach } from "@/components/Reach";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Main />
        <Plans />
        <Services />
        <About />
        <Work />
        <Features />
        <Testimonial />
      </div>
    </>
  );
}
