import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background noise-bg">
      <CursorGlow />
      <Navbar />
      <Hero />
      <Experience />
      <SkillsSection />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
