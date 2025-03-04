import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Canvas } from "@react-three/fiber";
import { Terminal, Briefcase, GraduationCap } from "lucide-react";
import AboutScene from "./AboutScene";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineData = [
    {
      icon: Briefcase,
      title: "Full Stack Developer at Byldd",
      date: "January 2024 - Present",
      description: "Building scalable applications using modern technologies.",
    },
    {
      icon: GraduationCap,
      title: "Computer Science",
      date: "Masai School",
      description:
        "Intensive full-stack development program with hands-on project experience.",
    },
    {
      icon: Terminal,
      title: "Tech Stack Expertise",
      description:
        "Specialized in MERN stack, Prisma, Electron.js, and GraphQL development.",
    },
  ];

  return (
    <section
      className="relative min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
      id="about"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas>
          <AboutScene />
        </Canvas>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-6">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A passionate learner aiming to thrive in the IT world. Enthusiastic
            about adopting new technologies, the focus is on acquiring industry
            experience and cultivating skills for both personal and
            organizational advancement
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 before:absolute before:left-[7px] before:top-10 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:to-transparent last:before:hidden"
              >
                <div className="relative flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                  <div className="absolute -left-12 p-2 bg-gray-800 rounded-full border-2 border-blue-500">
                    <item.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    {item.date && (
                      <p className="text-blue-400 text-sm mb-2">{item.date}</p>
                    )}
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
                alt="Developer workspace"
                className="w-full rounded-2xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 mix-blend-overlay" />
            </div>

            {/* Floating Tech Cards */}
            {["MERN", "GraphQL", "Electron"].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                className="absolute bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-blue-400 border border-blue-500/30"
                style={{
                  top: `${20 + index * 25}%`,
                  right: index % 2 === 0 ? "-5%" : "85%",
                }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
