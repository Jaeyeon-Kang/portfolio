import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CareerSection from "./components/CareerSection";
import SkillsSection from "./components/SkillsSection";
import WorkExperienceSection from "./components/WorkExperienceSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import Navigation from "../../components/Navigation";
import ScrollToTop from "../../components/ScrollToTop";

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <Navigation />
      <ScrollToTop />

      <div id="hero">
        <HeroSection />
      </div>
      <AboutSection />
      <div id="career">
        <CareerSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="work">
        <WorkExperienceSection />
      </div>
      <div id="education">
        <EducationSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
