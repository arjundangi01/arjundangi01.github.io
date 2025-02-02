import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skillsData';
import SkillCard from './SkillCard';
import { Canvas } from '@react-three/fiber';
import SkillsScene from './SkillsScene';

const Skills = () => {
  const categories = [
    { title: 'Frontend Development', data: skillsData.frontend, color: 'from-blue-400 to-cyan-400' },
    { title: 'Backend Development', data: skillsData.backend, color: 'from-purple-400 to-pink-400' },
    { title: 'Tools & Technologies', data: skillsData.tools, color: 'from-green-400 to-emerald-400' }
  ];

  return (
    <section className="relative py-32 bg-gray-900" id="skills">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <Canvas>
          <SkillsScene />
        </Canvas>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient mb-6">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg">
            Expertise in modern web technologies and development tools
          </p>
        </motion.div>

        <div className="space-y-32">
          {categories.map((category, index) => (
            <div key={index} className="relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <h3 className={`text-3xl font-bold bg-gradient-to-r ${category.color} text-transparent bg-clip-text`}>
                  {category.title}
                </h3>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {category.data.map((skill, skillIndex) => (
                  <SkillCard
                    key={skillIndex}
                    icon={skill.icon}
                    name={skill.name}
                    delay={skillIndex * 0.1}
                    categoryColor={category.color}
                  />
                ))}
              </div>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-3xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;