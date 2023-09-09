import React from "react";
import style from "../styles/skills.module.css";
import { motion, Variants } from "framer-motion";

const Skill = ({ img, name }) => {
  const cardAnimate = {
    offscreen: { y: 0 },
    onView: {},
    onscreen: {
      y: -20,
      transition: { duration: 0.08 },
    },
  };
  const imgAnimate = {
    offscreen: { y:+30,opacity:0 },
    onscreen: {
      y: 0,
      opacity:1,
      transition: { duration: 1},
    },
  };
  return (
    <motion.div
      className={style.card}
      initial={"offscreen"}
      whileInView={"onView"}
      whileHover={"onscreen"}
      variants={cardAnimate}
    >
      <div className={`skills-card ${style.skillDiv}`}>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={imgAnimate}
        >
          <img className={`skills-card-img ${style.img}`} src={img} alt="" />
        </motion.div>
        <h3 className={`skills-card-name ${style.name}`}>{name}</h3>
      </div>
    </motion.div>
  );
};

export default Skill;
