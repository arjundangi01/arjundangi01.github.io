import React from "react";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";
import { Briefcase, Code } from "lucide-react";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="relative py-32 bg-black" id="projects">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-pink-500/10" />

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Explore my latest work and creative solutions
          </p>
        </motion.div>

        <div ref={ref} className="space-y-48">
          {/* Professional Experience Section */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center space-x-4 mb-16"
            >
              <Briefcase className="w-8 h-8 text-blue-400" />
              <h3 className="text-3xl font-bold text-white">
                Professional Experience
              </h3>
            </motion.div>

            {projectsData.professional.map((project, index) => (
              <div key={index} className="mb-5">
                <ProjectCard
                  key={index}
                  {...project}
                  index={index}
                  inView={inView}
                />
              </div>
            ))}
          </div>

          {/* Personal Projects Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center space-x-4 mb-16"
            >
              <Code className="w-8 h-8 text-purple-400" />
              <h3 className="text-3xl font-bold text-white">
                Personal Projects
              </h3>
            </motion.div>

            {projectsData.personal.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
