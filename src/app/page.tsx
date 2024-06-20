import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
            <RecentProjects/>
            <Contact/>
    </main>
  );
}
