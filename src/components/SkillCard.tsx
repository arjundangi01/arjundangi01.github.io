import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

interface SkillCardProps {
  icon: string;
  name: string;
  delay: number;
  categoryColor: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name, delay, categoryColor }) => {
  return (
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      perspective={800}
      scale={1.02}
      transitionSpeed={1500}
      className="transform-gpu"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="relative h-full"
      >
        <div className="relative bg-gray-800/80 backdrop-blur-xl rounded-xl p-6 h-full border border-gray-700/50 group hover:border-blue-500/50 transition-colors duration-300">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative flex flex-col items-center space-y-4">
            {/* Icon Container */}
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-700 to-gray-600 p-3 group-hover:scale-110 transition-transform duration-300">
              <div className="w-full h-full rounded-lg bg-gray-800 p-2 flex items-center justify-center">
                <img
                  src={icon}
                  alt={name}
                  className="w-full h-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            
            {/* Skill Name */}
            <h3 className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">
              {name}
            </h3>

            {/* Decorative Line */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default SkillCard;