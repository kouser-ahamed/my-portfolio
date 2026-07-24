// "use client";

// import { motion } from "framer-motion";
// import ProjectCard from "@/components/ProjectCard";
// import { projects } from "../../../public/data/projects";



// export default function ProjectsPage() {
//   return (
//     <section className="relative py-16 md:py-20 bg-[#040508] overflow-hidden text-white w-full min-h-screen">
//       {/* Background Glow */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-[250px] sm:w-[300px] md:w-[500px] h-[250px] sm:h-[300px] md:h-[500px] bg-emerald-500/10 blur-[100px] md:blur-[120px] rounded-full" />
//         <div className="absolute bottom-0 right-1/4 w-[250px] sm:w-[300px] md:w-[500px] h-[250px] sm:h-[300px] md:h-[500px] bg-cyan-500/10 blur-[100px] md:blur-[120px] rounded-full" />
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//         {/* Header */}
//         <div className="text-center mb-10 md:mb-14">
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2"
//           >
//             All{" "}
//             <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
//               Projects
//             </span>
//           </motion.h1>

//           <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg px-2">
//             Every project I've shipped, from full-stack platforms to smaller
//             practice builds. Tap any card to see the full breakdown.
//           </p>
//         </div>

//         {/* Grid - every project */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start w-full">
//           {projects.map((project, index) => (
//             <ProjectCard key={project.slug} project={project} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "../../../public/data/projects";

export default function ProjectsPage() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#040508] pt-8 pb-16 text-white md:pt-10 md:pb-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-[250px] w-[250px] rounded-full bg-emerald-500/10 blur-[100px] sm:h-[300px] sm:w-[300px] md:h-[500px] md:w-[500px] md:blur-[120px]" />

        <div className="absolute right-1/4 bottom-0 h-[250px] w-[250px] rounded-full bg-cyan-500/10 blur-[100px] sm:h-[300px] sm:w-[300px] md:h-[500px] md:w-[500px] md:blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center md:mb-14">
          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="mb-2 text-3xl font-extrabold sm:text-4xl md:text-5xl"
          >
            All{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h1>

          <p className="mx-auto max-w-2xl px-2 text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
            Every project I&apos;ve shipped, from full-stack platforms to
            smaller practice builds. Tap any card to see the full breakdown.
          </p>
        </div>

        {/* Grid - every project */}
        <div className="grid w-full grid-cols-1 items-start gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
