import React from "react";
import Skill from "../components/skill";
import style from "../styles/skills.module.css";
import githubImg from "./Images/github.png";
import netlifyImg from "./Images/netlify.jpg";
import gitImg from "./Images/git.png";
import replitImg from "./Images/replit.jpg";
import vsImg from "./Images/vscode.jpg";
import postmanImg from "./Images/postman.jpg";
import { motion, Variants } from "framer-motion";

const Tools = () => {
  const jsImg =
    "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png";
  const chakraImg =
    "https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg";
  const containerAnimate = {
    offscreen: { y: 0, opacity: 0 },
    onscreen: {
      y: -80,
      opacity: 1,

      transition: { duration: 0.8 },
    },
  };
  return (
    <div id="tools" className={`${style.skillsContainer}`}>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{
          duration: 0.5,
        }}
        className={"sectionHeading"}
        data-outline="TOOLS"
      >
        Tools
      </motion.h2>

      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        variants={containerAnimate}
      >
        <div className={`${style.container}`}>
          <Skill img={vsImg} name={"VS Code"} />
          <Skill img={githubImg} name={"GitHub"} />
          <Skill img={netlifyImg} name={"Netlify"} />
          <Skill img={gitImg} name={"Git"} />
          <Skill img={postmanImg} name={"Postman"} />
          <Skill img={replitImg} name={"Replit"} />
        </div>
      </motion.div>
    </div>
  );
};

export default Tools;
