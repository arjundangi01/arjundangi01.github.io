import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronRight } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { useInView } from "react-intersection-observer";
import ProjectScene from "./ProjectScene";

interface ProjectCardProps {
  title: string;
  subTitle: string;
  desktopImage: string;
  mobileImage: string;
  description: string;
  techStack: string[];
  features: string[];
  responsibility: string;
  githubUrl: string;
  previewUrl: string;
  index: number;
  inView: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subTitle,
  desktopImage,
  mobileImage,
  description,
  techStack,
  features,
  githubUrl,
  previewUrl,
  index,
  inView,
}) => {
  const [ref, cardInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={cardInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="relative group"
    >
      {/* 3D Background Scene */}
      <div className="absolute inset-0 -z-10">
        <Canvas>
          <ProjectScene index={index} inView={inView && cardInView} />
        </Canvas>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={cardInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <motion.span
              className="text-sm font-mono text-blue-400"
              initial={{ opacity: 0 }}
              animate={cardInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Featured Project {index + 1}
            </motion.span>
            <motion.h3
              className="text-4xl font-bold text-white mt-2 mb-3"
              initial={{ y: 20, opacity: 0 }}
              animate={cardInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              {title}
            </motion.h3>
            <motion.p
              className="text-gray-400"
              initial={{ y: 20, opacity: 0 }}
              animate={cardInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              {subTitle}
            </motion.p>
          </div>

          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={cardInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
          >
            <p className="text-gray-300 mb-4">{description}</p>
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Features Worked on</h4>
              <ul className="space-y-2">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <ChevronRight className="w-4 h-4 text-blue-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ y: 20, opacity: 0 }}
            animate={cardInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-sm text-blue-300 border border-blue-500/30 rounded-full bg-blue-500/10"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={cardInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
          >
            {githubUrl && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 bg-blue-500/20 text-blue-300 rounded-full hover:bg-blue-500/30 transition-colors"
              >
                <Github className="w-5 h-5" />
                Code
              </motion.a>
            )}
            {previewUrl && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 bg-purple-500/20 text-purple-300 rounded-full hover:bg-purple-500/30 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </motion.a>
            )}
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={cardInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={cardInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="rounded-xl overflow-hidden border-2 border-gray-700/50 backdrop-blur-sm"
            >
              <img
                src={desktopImage}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 mix-blend-overlay" />
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={cardInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-12 -right-12 w-48 rounded-xl overflow-hidden border-2 border-gray-700/50 backdrop-blur-sm"
            >
              <img
                src={mobileImage}
                alt={`${title} mobile`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 mix-blend-overlay" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
