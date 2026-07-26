import Cursor from "@/components/Cursor";
import ProgressBar from "@/components/ProgressBar";
import Navbar from "@/components/Navbar";
import SideNav from "@/components/SideNav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <ProgressBar />
      <Navbar />
      <SideNav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
