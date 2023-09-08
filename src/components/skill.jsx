import React from "react";
import style from "../styles/skills.module.css";
import { motion, Variants } from "framer-motion";

const Skill = ({ img, name }) => {
  const cardAnimate = {
    offscreen: { y: 0 },
    onscreen: {
      y: -20,
      transition: {duration:0.08},
    },
  };
  return (
    <motion.div
      className={style.card}
      initial={"offscreen"}
      whileHover={"onscreen"}
      variants={cardAnimate}
    >
      <div className={`skills-card ${style.skillDiv}`}>
        
          <img className={`skills-card-img ${style.img}`} src={img} alt="" />
        
        <h3 className={`skills-card-name ${style.name}`}>{name}</h3>
      </div>
    </motion.div>
  );
};

export default Skill;
