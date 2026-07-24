import Hero from "@/components/Hero";
import Skills from "./skills/page";
import About from "./about/page";
import Education from "./education/page";

import Contact from "./contact/page";
import ExperiencePage from "./experience/page";
import ProjectsPreview from "@/components/ProjectsPreview";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen selection:bg-green-500/30 selection:text-green-500">
      <Hero />
      <About />
      <ExperiencePage />
      <Skills />
      <Education />
      <ProjectsPreview />
      <Contact />
    </main>
  );
}
