import Image from "next/image";
import { BackgroundBoxesDemo } from "./components/BackgroundBoxesDemo";
import { Navbar } from "./components/Navbar";

import Experties from "./components/Experties";
import ProfExperience from "./components/ProfExperience";
import { WorkProject } from "./components/WorkProject";
import Skills from "./components/Skills";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
// import { HydrationOverlay } from "@builder.io/react-hydration-overlay";

export default function Home() {
  return (
    // <HydrationOverlay>
    <div className="bg-[#050709]">
      <Navbar />
      <BackgroundBoxesDemo />
      <div className="max-w-7xl mx-auto px-4">
        <section id="experties" className="py-10 md:py-20">
          <Experties />
        </section>
        <section id="experience">
          <ProfExperience />
        </section>
        <section id="projects" className="py-10 md:pt-20">
          <WorkProject />
        </section>
        <section id="skills" className="py-10 md:pt-16">
          <Skills />
        </section>
        <section id="contact" className="py-10 md:pt-20">
          <Contact />
        </section>
      </div>
      <div className="w-full bg-black mt-10 md:mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <Footer />
        </div>
      </div>
    </div>
    // </HydrationOverlay>
  );
}

// favicon.ico
