import Hero from "@/components/Hero";
import Image from "next/image";
import Skills from "./skills/page";
import About from "./about/page";
import Education from "./education/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen selection:bg-green-500/30 selection:text-green-500">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
}
