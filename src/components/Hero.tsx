import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Code,
  Rocket,
  Sparkles,
} from "lucide-react";
import { Canvas } from "@react-three/fiber";
import Hero3DScene from "./Hero3DScene";
import Tilt from "react-parallax-tilt";
import { urls } from "../utils/urls";

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const [isHovered, setIsHovered] = useState(false);

  const titleWords = [
    "Hello,",
    "I'm",
    "Arjun",
    "Dangi",
    "Full",
    "Stack",
    "Developer",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <Canvas>
          <Hero3DScene isHovered={isHovered} />
        </Canvas>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-6xl mx-auto px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Animated Title */}
          <div className="mb-8 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="inline-block"
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1500}
                className="inline-block"
                onEnter={() => setIsHovered(true)}
                onLeave={() => setIsHovered(false)}
              >
                <h1 className="relative text-6xl md:text-8xl font-bold space-x-8">
                  {titleWords.map((word, index) => (
                    <motion.span
                      key={word}
                      className="inline-block bg-gradient-to-r p-1 from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.8 }}
                      whileHover={{
                        scale: 1.05,
                        color: "#fff",
                        transition: { duration: 0.2 },
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </h1>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-10 -left-10 text-blue-500/50"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Code size={40} />
                </motion.div>
                <motion.div
                  className="absolute -bottom-10 -right-10 text-purple-500/50"
                  animate={{
                    rotate: [360, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Rocket size={40} />
                </motion.div>
              </Tilt>
            </motion.div>
          </div>

          {/* Subtitle with Sparkle Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative inline-block"
          >
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-xl md:text-2xl text-gray-400 mb-12 relative"
            >
              <span className="relative">
                Crafting digital experiences with modern technologies
                <motion.span
                  className="absolute -right-8 -top-4 text-yellow-500"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Sparkles size={20} />
                </motion.span>
              </span>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center space-x-6"
          >
            {[
              {
                icon: Github,
                href: urls.github,
                label: "GitHub",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Linkedin,
                href: urls.linkedin,
                label: "LinkedIn",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: Mail,
                href: urls.email,
                label: "Email",
                color: "from-pink-500 to-pink-600",
              },
            ].map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-xl bg-gradient-to-r ${color} shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}
              >
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.4 }}
                />
                <Icon className="w-6 h-6 text-white relative z-10" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-gray-400 flex flex-col items-center space-y-2"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
